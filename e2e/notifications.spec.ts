import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The bell: the student is told about new homework and the teacher's comment,
// the teacher about a handed-in homework — live, without reloading. Clicking a
// notification opens the right page and marks it read. Nobody can create
// notifications or read someone else's.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("notifications", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url || !anonKey, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("bell for student and teacher", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp, `Ученик ${stamp}`);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E колокольчик ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const lessonTitle = `Bells ${stamp}`;
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: lessonTitle, position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "At home", position: 0, kind: "homework" }).select("id").single();
    const { data: ex } = await db
      .from("exercises")
      .insert({ section_id: section!.id, type: "open_answer", title: "Write a sentence", content: { minWords: 1 }, position: 0 })
      .select("id")
      .single();
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E колокольчик ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });

    // The student is on the dashboard; the teacher sends homework → the bell rings.
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, pupil.email, pupil.password);
    const bell = sp.getByRole("button", { name: /^Уведомления/ });
    await expect(bell).toHaveAccessibleName("Уведомления");
    const { data: hw } = await db.from("homeworks").insert({ class_id: cls!.id, lesson_id: lesson!.id }).select("id").single();
    await db.from("homework_exercises").insert({ homework_id: hw!.id, exercise_id: ex!.id, position: 0 });
    await db.from("homework_students").insert({ homework_id: hw!.id, student_id: pupil.id });
    await expect(bell).toHaveAccessibleName("Уведомления: 1 новое");

    // The list; clicking opens the lesson's Homework tab and marks it read.
    await bell.click();
    await sp.getByRole("link", { name: new RegExp(`Новая домашка: «${lessonTitle}»`) }).click();
    await expect(sp).toHaveURL(/tab=homework/);
    await expect(bell).toHaveAccessibleName("Уведомления");

    // The student hands in → the teacher's bell shows it, live.
    await login(page, teacher.email!, teacher.password!);
    const teacherBell = page.getByRole("button", { name: /^Уведомления/ });
    await expect(teacherBell).toBeVisible();
    // Typed and handed in right away: the answer is saved before handing in.
    await sp.getByRole("textbox", { name: "Ваш ответ" }).fill("Bells ring");
    await sp.getByRole("button", { name: "Сдать" }).click();
    await sp.getByRole("alertdialog").getByRole("button", { name: "Сдать" }).click();
    await expect(sp.getByText("Домашка сдана", { exact: true })).toBeVisible();
    const { data: kept } = await db.from("homework_answers").select("answer").eq("student_id", pupil.id).single();
    expect(JSON.stringify(kept!.answer)).toContain("Bells ring");
    await expect(teacherBell).toHaveAccessibleName(/Уведомления: \d+ нов/);
    await teacherBell.click();
    const handedIn = page.getByRole("link", { name: new RegExp(`Ученик ${stamp} сдал\\(а\\) домашку «${lessonTitle}»`) });
    await expect(handedIn).toContainText("Новое");
    await handedIn.click();
    await expect(page).toHaveURL(new RegExp(`/ru/homework/${hw!.id}/${pupil.id}`));
    await expect
      .poll(async () => (await db.from("notifications").select("read_at").eq("user_id", teacherId).eq("homework_id", hw!.id).single()).data?.read_at)
      .not.toBeNull();

    // A comment → the student's bell, live; then "Mark all as read".
    await page.getByRole("textbox", { name: "Комментарий учителя" }).fill("Good!");
    await expect(page.getByText("Сохранено")).toBeVisible();
    await expect(bell).toHaveAccessibleName("Уведомления: 1 новое");
    await bell.click();
    await expect(sp.getByRole("link", { name: new RegExp(`Учитель оставил комментарий к домашке «${lessonTitle}»`) })).toBeVisible();
    await sp.getByRole("button", { name: "Прочитать все" }).click();
    await expect(bell).toHaveAccessibleName("Уведомления");

    // Only the database creates notifications; nobody reads someone else's.
    const as = createClient(url!, anonKey!, { auth: { persistSession: false } });
    await as.auth.signInWithPassword({ email: pupil.email, password: pupil.password });
    const { error: forged } = await as.from("notifications").insert({ user_id: teacherId, kind: "homework_submitted", homework_id: hw!.id, student_id: pupil.id });
    expect(forged).not.toBeNull();
    const { data: visible } = await as.from("notifications").select("user_id");
    expect(visible!.every((n) => n.user_id === pupil.id)).toBe(true);
    expect(visible!.length).toBeGreaterThan(0);

    await sp.context().close();
  });
});
