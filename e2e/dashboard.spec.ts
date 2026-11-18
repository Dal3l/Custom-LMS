import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The home page: the teacher sees lessons coming up, work to check and new
// chat messages (no banner for a lesson going on); the student sees the next
// lesson in the schedule, homework to do, words to review and new messages.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });
const DAY = 86_400_000;

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("home page", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(150_000);
  const cleanup = { classes: [] as string[], courses: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("teacher and student see what needs them", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const studentName = `Ученик ${stamp}`;
    const pupil = await createTempStudent(stamp, studentName);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const className = `E2E главная ${stamp}`;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: className }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: className, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const lesson = async (title: string, position: number) => {
      const { data } = await db.from("lessons").insert({ module_id: mod!.id, title, position }).select("id").single();
      const { data: sec } = await db.from("sections").insert({ lesson_id: data!.id, title: "At home", position: 0, kind: "homework" }).select("id").single();
      const { data: ex } = await db
        .from("exercises")
        .insert({ section_id: sec!.id, type: "true_false", title: "Q", content: { statements: [{ id: "st000001", text: "x" }] }, position: 0 })
        .select("id")
        .single();
      return { id: data!.id, exerciseId: ex!.id };
    };
    const handedIn = await lesson(`Сдано ${stamp}`, 0);
    const toDo = await lesson(`Сделать ${stamp}`, 1);
    // The first lesson is going on now.
    await db.from("class_lessons").insert([
      { class_id: cls!.id, lesson_id: handedIn.id, status: "live" },
      { class_id: cls!.id, lesson_id: toDo.id, status: "open" },
    ]);
    // Homework: one handed in long ago (waits for the teacher), one still to do.
    for (const [l, submitted] of [[handedIn, true], [toDo, false]] as const) {
      const { data: hw } = await db
        .from("homeworks")
        .insert({ class_id: cls!.id, lesson_id: l.id, due_at: new Date(Date.now() + 2 * DAY).toISOString() })
        .select("id")
        .single();
      await db.from("homework_exercises").insert({ homework_id: hw!.id, exercise_id: l.exerciseId, position: 0 });
      await db
        .from("homework_students")
        .insert({ homework_id: hw!.id, student_id: pupil.id, submitted_at: submitted ? "2020-01-01T10:00:00Z" : null });
    }
    // A lesson in an hour.
    const start = new Date(Date.now() + 60 * 60 * 1000);
    await db.from("schedule_events").insert({
      class_id: cls!.id,
      starts_on: start.toISOString().slice(0, 10),
      local_time: start.toISOString().slice(11, 16),
      time_zone: "UTC",
      duration_min: 60,
    });
    // Words: one learned word is due for review, one is being learned.
    await db.from("vocabulary").insert([
      { term: "dog", translation: "собака", stage: 4, due: new Date(Date.now() - DAY).toISOString(), student_id: pupil.id, language: "en", added_by: pupil.id },
      { term: "cat", translation: "кот", stage: 1, due: new Date().toISOString(), student_id: pupil.id, language: "en", added_by: pupil.id },
    ]);
    // A message from each side: each one has one new message.
    await db.from("chat_messages").insert([
      { class_id: cls!.id, author_id: teacherId, body: "Hi!" },
      { class_id: cls!.id, author_id: pupil.id, body: "Hello!" },
    ]);

    // The teacher.
    await login(page, teacher.email!, teacher.password!);
    await expect(page.getByText(`Сейчас идёт урок · ${className}`)).toHaveCount(0);
    const check = page.getByRole("region", { name: "Ждут проверки" });
    await expect(check.getByRole("link", { name: new RegExp(studentName) })).toBeVisible();
    await expect(check.getByRole("link", { name: new RegExp(studentName) })).toContainText(`Сдано ${stamp}`);
    const chats = page.getByRole("region", { name: "Новые сообщения" });
    await expect(chats.getByRole("link", { name: new RegExp(className) })).toContainText("1 новое");
    await check.getByRole("link", { name: new RegExp(studentName) }).click();
    await expect(page).toHaveURL(new RegExp(`/homework/.+/${pupil.id}`));

    // The student.
    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await expect(sp.getByRole("region", { name: "Следующий урок" })).toContainText(className);
    const homework = sp.getByRole("region", { name: "Домашка" });
    await expect(homework).toContainText(`Сделать ${stamp}`);
    await expect(homework).not.toContainText(`Сдано ${stamp}`);
    const words = sp.getByRole("region", { name: "Слова" });
    await expect(words.getByRole("definition")).toHaveText(["1", "1", "1"]);
    await expect(words.getByRole("link", { name: "Повторить слова" })).toBeVisible();
    await expect(sp.getByRole("region", { name: "Новые сообщения" }).getByRole("link", { name: new RegExp(className) })).toContainText("1 новое");
  });
});
