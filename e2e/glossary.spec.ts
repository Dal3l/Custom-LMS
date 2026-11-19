import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The "Words" block: the teacher pastes a list in the builder; in the lesson
// the student adds one word with "+", the teacher adds all to the students.
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

test.describe("words block", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("paste a list, add one word, add all", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E слова ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Words", position: 0 }).select("id").single();
    await db.from("sections").insert({ lesson_id: lesson!.id, title: "Vocabulary", position: 0 });
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E слова ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });

    // The builder: paste three words.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/courses/${course!.id}/lessons/${lesson!.id}`);
    await page.getByRole("button", { name: "Упражнение", exact: true }).click();
    await page.getByRole("button", { name: /^Слова/ }).click();
    await page.getByLabel("Задание").last().fill("Words for the video");
    await page.getByRole("button", { name: "Вставить списком" }).click();
    await page.getByLabel("Список слов").fill("screen time — время у экрана\nto scroll - листать - I scroll TikTok every day.\nlowkey: немного, втайне");
    await page.getByRole("button", { name: "Добавить 3 слова" }).click();
    await expect(page.getByRole("textbox", { name: "Слово 3" })).toHaveValue("lowkey");
    await expect(page.getByRole("textbox", { name: "Пример 2" })).toHaveValue("I scroll TikTok every day.");
    await page.getByRole("button", { name: "Сохранить", exact: true }).click();
    await expect(page.getByRole("button", { name: "Всё сохранено" })).toBeVisible({ timeout: 15000 });

    // The lesson in the class: the student adds one word.
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id, status: "live" });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;
    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);
    await expect(sp.getByText("время у экрана").filter({ visible: true })).toBeVisible();
    await sp.getByRole("button", { name: "Добавить «to scroll» в словарь" }).filter({ visible: true }).click();
    await expect(sp.getByRole("button", { name: "«to scroll» в словаре" }).filter({ visible: true })).toBeDisabled();
    const words = async () =>
      ((await db.from("vocabulary").select("term, translation, example, class_id").eq("student_id", pupil.id).order("term")).data ?? []);
    await expect.poll(async () => (await words()).map((w) => w.term)).toEqual(["to scroll"]);
    expect((await words())[0]).toMatchObject({ translation: "листать", example: "I scroll TikTok every day.", class_id: cls!.id });

    // The teacher adds all to the students: the two others arrive, the third was there.
    await page.goto(lessonUrl);
    await page.getByRole("button", { name: "Добавить все ученикам в словарь" }).filter({ visible: true }).click();
    await expect.poll(async () => (await words()).map((w) => w.term)).toEqual(["lowkey", "screen time", "to scroll"]);
    await sp.context().close();
  });
});
