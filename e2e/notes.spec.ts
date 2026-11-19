import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// Notes: the teacher writes one in the builder, hidden from students; the
// student's page doesn't even contain its text; in the lesson the teacher's
// eye shows it to the student, and hides it again.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("notes", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("a hidden note is shown by the teacher's eye", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const secretText = `Suggested answer ${stamp}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E заметки ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Notes", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Warm-up", position: 0 }).select("id").single();
    await db
      .from("exercises")
      .insert({ section_id: section!.id, type: "true_false", title: "True or false?", content: { statements: [{ id: "st000001", text: "x" }] }, position: 0 });
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E заметки ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });

    // The builder: a note, hidden by default, with a title and text.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/courses/${course!.id}/lessons/${lesson!.id}`);
    await page.getByRole("button", { name: "Упражнение", exact: true }).click();
    await page.getByRole("button", { name: /^Заметка/ }).click();
    await expect(page.getByRole("button", { name: "Скрыто от учеников" })).toBeVisible();
    await page.getByLabel("Задание").last().fill("Teacher's note");
    await page.locator(".ProseMirror").last().click();
    await page.keyboard.type(secretText);
    await page.getByRole("button", { name: "Сохранить", exact: true }).click();
    await expect(page.getByRole("button", { name: "Всё сохранено" })).toBeVisible({ timeout: 15000 });
    // Saved: the text only in the key, nothing for students in the content.
    const { data: notes } = await db.from("exercises").select("id, content, exercise_keys(answer_key)").eq("lesson_id", lesson!.id).eq("type", "note");
    expect(notes).toHaveLength(1);
    expect(notes![0]!.content).toEqual({ shown: false, doc: null });
    expect(JSON.stringify(notes![0]!.exercise_keys)).toContain(secretText);

    // The lesson in the class.
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id, status: "live" });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;
    await page.goto(lessonUrl);
    const teacherNote = page.getByRole("region", { name: "Teacher's note" }).filter({ visible: true });
    await expect(teacherNote).toContainText(secretText);
    await expect(teacherNote).toContainText("Скрыто от учеников");

    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);
    await expect(sp.getByText("True or false?").filter({ visible: true }).first()).toBeVisible();
    await expect(sp.getByRole("region", { name: "Teacher's note" })).toHaveCount(0);
    // Not even hidden in the page.
    expect(await sp.content()).not.toContain(secretText);

    // The teacher's eye: shown to the student live, then hidden again.
    await teacherNote.getByRole("button", { name: "Показать заметку ученикам" }).click();
    await expect(sp.getByRole("region", { name: "Teacher's note" }).filter({ visible: true })).toContainText(secretText);
    await teacherNote.getByRole("button", { name: "Скрыть заметку от учеников" }).click();
    await expect(sp.getByRole("region", { name: "Teacher's note" })).toHaveCount(0);
    expect(await sp.content()).not.toContain(secretText);
    await sp.context().close();
  });
});
