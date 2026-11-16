import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// Teacher-checked answers in a class lesson: an open answer with a word counter
// and a voice answer recorded in the browser (a fake microphone here). The
// teacher sees the text and listens to the recording; both "wait for the teacher".
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const student = { email: process.env.E2E_STUDENT_EMAIL, password: process.env.E2E_STUDENT_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

// Chromium's fake microphone, and no permission prompt.
test.use({ launchOptions: { args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"] } });

async function userId(email: string) {
  const { data } = await admin().auth.admin.listUsers({ perPage: 200 });
  return data.users.find((u) => u.email === email)!.id;
}

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("teacher-checked answers", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    const db = admin();
    for (const id of cleanup.classes) {
      const { data } = await db.storage.from("answer-media").list(`${id}`, { limit: 100 });
      for (const folder of data ?? []) {
        const { data: files } = await db.storage.from("answer-media").list(`${id}/${folder.name}`);
        if (files?.length) await db.storage.from("answer-media").remove(files.map((f) => `${id}/${folder.name}/${f.name}`));
      }
    }
    if (cleanup.classes.length) await db.from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await db.from("courses").delete().in("id", cleanup.courses);
  });

  test("open answer and voice answer", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const [teacherId, studentId] = [await userId(teacher.email!), pupil.id];
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E ручная ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Speaking", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Talk", position: 0 }).select("id").single();
    await db.from("exercises").insert([
      { section_id: section!.id, type: "open_answer", title: "Describe your day", content: { minWords: 5 }, position: 0 },
      { section_id: section!.id, type: "voice_answer", title: "Say hello", content: { maxSeconds: 30 }, position: 1 },
    ]);
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E ручная ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    const sp = await (await browser.newContext({ ...options, permissions: ["microphone"] })).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);

    // Open answer: the counter shows the minimum; the answer is saved.
    await sp.getByRole("textbox", { name: "Ваш ответ" }).fill("I get up early");
    await expect(sp.getByText("Слов: 4 из 5")).toBeVisible();
    await sp.getByRole("textbox", { name: "Ваш ответ" }).fill("I get up early every day");
    await expect(sp.getByText("Слов: 6 из 5")).toBeVisible();
    await expect(sp.getByText("Ждёт проверки учителем").first()).toBeVisible();

    // Voice answer: record two seconds, stop; the recording can be played.
    await sp.getByRole("button", { name: "Записать ответ" }).click();
    await expect(sp.getByText("Идёт запись", { exact: false })).toBeVisible();
    await sp.waitForTimeout(2000);
    await sp.getByRole("button", { name: "Стоп" }).click();
    await expect(sp.getByRole("button", { name: "Перезаписать" })).toBeVisible();
    await expect(sp.locator("audio")).toHaveCount(1);

    // The teacher sees the text and the recording, both waiting for review.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    await expect(page.getByText("I get up early every day")).toBeVisible();
    await expect(page.getByText("Ждёт проверки учителем")).toHaveCount(2);
    const audio = page.locator("audio");
    await expect(audio).toHaveCount(1);
    await expect(audio).toHaveAttribute("src", /answer-media/);
    // The teacher's link to the private recording works.
    const status = await page.evaluate(async (src) => (await fetch(src)).status, (await audio.getAttribute("src"))!);
    expect(status).toBe(200);
    await sp.context().close();
  });
});
