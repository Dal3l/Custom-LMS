import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type Page } from "@playwright/test";

// The trainer: words from the dictionary (one added by the teacher) are due
// today; cards → pick the translation → write the word (a small typo is
// "almost") → write it by ear → learned. Learned words have their own tab in
// the dictionary and can be learned again.
const teacher = { email: process.env.E2E_TEACHER_EMAIL };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

const WORDS: Record<string, string> = { apple: "яблоко", cat: "кот", dog: "собака", house: "дом", sun: "солнце" };
const TERM_OF = Object.fromEntries(Object.entries(WORDS).map(([k, v]) => [v, k]));

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

/** Answers whatever exercise is on screen, right (or "Don't remember" for a card when asked). */
async function answer(page: Page, forget = false) {
  const main = page.getByRole("main");
  const card = main.getByRole("region", { name: "Карточка" });
  const choice = main.getByRole("region", { name: "Выберите перевод" });
  const write = main.getByRole("form", { name: "Напишите слово" });
  await expect(card.or(choice).or(write)).toBeVisible();
  if (await card.isVisible()) {
    await card.getByRole("button", { name: "Показать перевод" }).click();
    await card.getByRole("button", { name: forget ? "Не помню" : "Помню", exact: true }).click();
  } else if (await choice.isVisible()) {
    const term = (await choice.locator("[lang]").first().innerText()).trim();
    await choice.getByRole("button", { name: WORDS[term] }).click();
    await choice.getByRole("button", { name: "Дальше" }).click();
  } else {
    const translation = (await write.locator("p").first().innerText()).trim();
    await write.getByRole("textbox", { name: "Ваш ответ" }).fill(TERM_OF[translation]);
    await write.getByRole("button", { name: "Проверить" }).click();
    await write.getByRole("button", { name: "Дальше" }).click();
  }
}

test.describe("trainer", () => {
  test.skip(!teacher.email || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  test.afterAll(async () => {
    await removeTempStudents();
  });

  test("the ladder: cards, choice, writing, by ear, learned", async ({ page }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const past = new Date(Date.now() - 60_000).toISOString();
    for (const [term, translation] of Object.entries(WORDS)) {
      // "apple" came from the teacher during a lesson.
      await db.from("vocabulary").insert({
        student_id: pupil.id,
        term,
        translation,
        language: "en",
        added_by: term === "apple" ? teacherId : pupil.id,
        due: past,
      });
    }
    const ids = Object.fromEntries(
      ((await db.from("vocabulary").select("id, term").eq("student_id", pupil.id)).data ?? []).map((w) => [w.term, w.id]),
    );
    const setWord = (term: string, patch: Record<string, unknown>) => db.from("vocabulary").update(patch).eq("id", ids[term]);
    const allLater = () => db.from("vocabulary").update({ due: new Date(Date.now() + 86_400_000).toISOString() }).eq("student_id", pupil.id);

    await login(page, pupil.email, pupil.password);
    await page.goto("/ru/trainer");
    await expect(page.getByRole("status").filter({ hasText: "На сегодня к повторению" })).toContainText("5 слов");

    // Session 1: five new words as cards; "apple" (the teacher's) not remembered.
    await page.getByRole("link", { name: "Начать" }).click();
    for (let i = 0; i < 5; i++) {
      const term = (await page.getByRole("region", { name: "Карточка" }).locator("[lang]").first().innerText()).trim();
      await answer(page, term === "apple");
    }
    await expect(page.getByText("Правильно 4 из 5")).toBeVisible();
    await expect
      .poll(async () => ((await db.from("vocabulary").select("term, stage").eq("student_id", pupil.id)).data ?? []).map((w) => `${w.term}:${w.stage}`).sort())
      .toEqual(["apple:0", "cat:1", "dog:1", "house:1", "sun:1"]);
    await page.getByRole("link", { name: "К тренажёру" }).click();
    await expect(page.getByText("На сегодня всё повторено!")).toBeVisible();

    // Session 2 (as if 10 minutes passed): the 4 words pick the translation, "apple" is a card again.
    await db.from("vocabulary").update({ due: past }).eq("student_id", pupil.id);
    await page.reload();
    await page.getByRole("link", { name: "Начать" }).click();
    for (let i = 0; i < 5; i++) await answer(page);
    await expect(page.getByText("Правильно 5 из 5")).toBeVisible();
    // Answers are saved in the background: wait for all ten.
    const reviews = async () => (await db.from("vocabulary_reviews").select("id", { count: "exact", head: true }).eq("student_id", pupil.id)).count;
    await expect.poll(reviews).toBe(10);
    await expect.poll(async () => (await db.from("vocabulary").select("stage").eq("id", ids.cat).single()).data?.stage).toBe(2);

    // Writing with a small typo counts as "almost" and still moves on.
    await allLater();
    await setWord("house", { stage: 2, due: past });
    await page.goto("/ru/trainer/session?kind=due");
    const write = page.getByRole("form", { name: "Напишите слово" });
    await expect(write).toContainText("дом");
    await write.getByRole("textbox", { name: "Ваш ответ" }).fill("hous");
    await write.getByRole("button", { name: "Проверить" }).click();
    await expect(write.getByRole("status")).toContainText("Почти верно");
    await expect(write.getByRole("status")).toContainText("house");
    await write.getByRole("button", { name: "Дальше" }).click();
    await expect.poll(async () => (await db.from("vocabulary").select("stage").eq("id", ids.house).single()).data?.stage).toBe(3);

    // By ear, the last step: the word becomes learned.
    await setWord("sun", { stage: 3, due: past });
    await setWord("house", { due: new Date(Date.now() + 86_400_000).toISOString() });
    await page.goto("/ru/trainer/session?kind=due");
    const ear = page.getByRole("form", { name: "Напишите, что услышали" });
    await expect(ear.getByRole("button", { name: "Послушать ещё раз" })).toBeVisible();
    await ear.getByRole("textbox", { name: "Ваш ответ" }).fill("Sun");
    await ear.getByRole("button", { name: "Проверить" }).click();
    await expect(ear.getByRole("status")).toContainText("Верно!");
    await ear.getByRole("button", { name: "Дальше" }).click();
    await expect(page.getByText("1 слово выучено")).toBeVisible();
    await expect.poll(reviews).toBe(12);
    const sun = (await db.from("vocabulary").select("stage, learned_at, due").eq("id", ids.sun).single()).data!;
    expect(sun.stage).toBe(4);
    expect(sun.learned_at).not.toBeNull();
    // Checked again only after a few days.
    expect(new Date(sun.due).getTime() - Date.now()).toBeGreaterThan(3 * 86_400_000);

    // The trainer offers learned words for practice; the dictionary has a "Learned" tab.
    await page.goto("/ru/trainer");
    await expect(page.getByRole("link", { name: "Повторить выученные" })).toBeVisible();
    await page.goto("/ru/vocabulary");
    const words = page.getByRole("list", { name: "Словарь" });
    await expect(words.getByRole("listitem").filter({ hasText: "sun" })).toHaveCount(0);
    await page.getByRole("button", { name: /^Выучено/ }).click();
    const learned = words.getByRole("listitem").filter({ hasText: "sun" });
    await expect(learned).toContainText("Выучено");
    await learned.getByRole("button", { name: "Действия со словом «sun»" }).click();
    await page.getByRole("menuitem", { name: "Учить заново" }).click();
    await expect(page.getByText("«sun» снова в изучении")).toBeVisible();
    await expect(learned).toHaveCount(0);
    await page.getByRole("button", { name: /^Учу/ }).click();
    await expect(words.getByRole("listitem").filter({ hasText: "sun" })).toContainText("Учу");

    // Every answer is kept (for the teacher's progress later).
    expect(await reviews()).toBe(12);
  });
});
