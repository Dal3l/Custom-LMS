import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type Page } from "@playwright/test";

// The teacher sees a student's dictionary progress: from the class's students
// list ("Dictionary: 3 · learned 2") to the student's page — totals, activity,
// hard words, the words; and adds a word for the student there.
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

test.describe("student progress", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { classes: [] as string[], courses: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("the teacher sees the dictionary progress and adds a word", async ({ page }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const name = `Прогресс ${stamp}`;
    const pupil = await createTempStudent(stamp, name);
    const stranger = await createTempStudent(`${stamp}-x`, "Чужой");
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E прогресс ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });

    const day = 86_400_000;
    const rows = [
      { term: "apple", translation: "яблоко", stage: 0, due: new Date().toISOString() },
      { term: "cat", translation: "кот", stage: 4, due: new Date(Date.now() + 3 * day).toISOString() },
      { term: "dog", translation: "собака", stage: 4, due: new Date(Date.now() - day).toISOString() },
    ];
    const ids: Record<string, string> = {};
    for (const r of rows) {
      const { data } = await db
        .from("vocabulary")
        .insert({ ...r, student_id: pupil.id, language: "en", added_by: pupil.id })
        .select("id")
        .single();
      ids[r.term] = data!.id;
    }
    // Answers: 3 right, 1 wrong ("dog") two days ago.
    const at = new Date(Date.now() - 2 * day).toISOString();
    for (const [term, correct] of [["cat", true], ["dog", true], ["apple", true], ["dog", false]] as const) {
      await db.from("vocabulary_reviews").insert({
        word_id: ids[term],
        student_id: pupil.id,
        mode: "write",
        correct,
        grade: correct ? 3 : 1,
        stage_before: 0,
        stage_after: 4,
        reviewed_at: at,
      });
    }

    // Results: a finished lesson with one right and one wrong answer; homework
    // handed in late, wrong at first, right after fixing.
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E статистика ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Results lesson", position: 0 }).select("id").single();
    const { data: sec } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Practice", position: 0 }).select("id").single();
    const { data: hwSec } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "At home", position: 1, kind: "homework" }).select("id").single();
    const ex: string[] = [];
    for (const [i, section] of [sec!.id, sec!.id, hwSec!.id].entries()) {
      const { data } = await db
        .from("exercises")
        .insert({ section_id: section, type: "true_false", title: `Q${i}`, content: { statements: [{ id: "st000001", text: "x" }] }, position: i })
        .select("id")
        .single();
      ex.push(data!.id);
    }
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id, status: "open", finished_at: new Date().toISOString() });
    const verdict = (ok: boolean) => ({ parts: { st000001: ok }, score: ok ? 1 : 0, correct: ok });
    await db.from("class_answers").insert([
      { class_id: cls!.id, exercise_id: ex[0], student_id: pupil.id, lesson_id: lesson!.id, answer: {}, result: verdict(true) },
      { class_id: cls!.id, exercise_id: ex[1], student_id: pupil.id, lesson_id: lesson!.id, answer: {}, result: verdict(false) },
    ]);
    const { data: hwRow } = await db
      .from("homeworks")
      .insert({ class_id: cls!.id, lesson_id: lesson!.id, due_at: new Date(Date.now() - 3 * day).toISOString() })
      .select("id")
      .single();
    await db.from("homework_exercises").insert({ homework_id: hwRow!.id, exercise_id: ex[2], position: 0 });
    await db.from("homework_students").insert({ homework_id: hwRow!.id, student_id: pupil.id });
    await db.from("homework_answers").insert({
      homework_id: hwRow!.id,
      exercise_id: ex[2],
      student_id: pupil.id,
      answer: {},
      result: verdict(true),
      first_result: verdict(false),
      attempts: 2,
    });
    await db.from("homework_students").update({ submitted_at: new Date(Date.now() - day).toISOString() }).eq("homework_id", hwRow!.id);

    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/classes/${cls!.id}?tab=students`);
    const row = page.getByRole("list", { name: "Ученики" }).getByRole("listitem").filter({ hasText: name });
    await expect(row).toContainText("Словарь: 3 · выучено 2");
    await row.getByRole("link", { name: new RegExp(name) }).click();

    await expect(page.getByRole("heading", { level: 1, name })).toBeVisible();
    const results = page.getByRole("region", { name: "Успеваемость" });
    await expect(results.getByRole("definition")).toHaveText(["1 из 1", "50%", "1 из 1", "0%"]);
    await expect(results).toContainText("С опозданием: 1");
    await expect(results).toContainText("Итог после исправлений: 100%");
    await expect(results.getByRole("region", { name: "По домашкам" })).toContainText("с опозданием");
    await expect(results.getByRole("region", { name: "По урокам" })).toContainText("Results lesson");
    const summary = page.getByLabel("Словарь ученика").getByRole("definition");
    await expect(summary).toHaveText(["3", "1", "2", "1"]);
    const activity = page.getByRole("region", { name: "Занятия в тренажёре" });
    await expect(activity).toContainText("Последнее занятие — 2 дня назад");
    await expect(activity).toContainText("За неделю: 4 ответа");
    await expect(activity).toContainText("Верных ответов за 30 дней: 75%");
    await expect(page.getByRole("region", { name: "Трудные слова" })).toContainText("dog — собака · 1 ошибка");
    const words = page.getByRole("list", { name: "Слова ученика" });
    await expect(words.getByRole("listitem").filter({ hasText: "dog" })).toContainText("Пора повторить");

    // A word for this student, right here.
    await page.getByRole("button", { name: "Добавить слово" }).click();
    const dialog = page.getByRole("dialog", { name: "Слово в словарь ученика" });
    await dialog.getByLabel("Слово или фраза").fill("pear");
    await dialog.getByLabel("Перевод").fill("груша");
    await dialog.getByRole("button", { name: "Добавить в словарь" }).click();
    const pear = words.getByRole("listitem").filter({ hasText: "pear" });
    await expect(pear).toContainText("от вас");
    await expect(summary.first()).toHaveText("4");
    // Words the teacher added can be removed by the teacher.
    await pear.getByRole("button", { name: "Действия со словом «pear»" }).click();
    await page.getByRole("menuitem", { name: "Удалить" }).click();
    await expect(pear).toHaveCount(0);

    // Not a student of this class → no page.
    await page.goto(`/ru/classes/${cls!.id}/students/${stranger.id}`);
    await expect(page.getByRole("heading", { name: "Страница не найдена" })).toBeVisible();
    await expect(page.getByText("Чужой")).toHaveCount(0);
  });
});
