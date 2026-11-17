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
  const cleanup = { classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
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

    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/classes/${cls!.id}?tab=students`);
    const row = page.getByRole("list", { name: "Ученики" }).getByRole("listitem").filter({ hasText: name });
    await expect(row).toContainText("Словарь: 3 · выучено 2");
    await row.getByRole("link", { name: new RegExp(name) }).click();

    await expect(page.getByRole("heading", { level: 1, name })).toBeVisible();
    const summary = page.getByRole("definition");
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
    await expect(page.getByRole("definition").first()).toHaveText("4");
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
