import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type Page } from "@playwright/test";

// The trainer inside the Dictionary: "Learn words" → choose the words → cards,
// pick the translation, writing, by ear — one step after another; a mistake
// comes back at the end of its step → the words are learned. Learned words
// show "Time to review" and can be reviewed with chosen steps.
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

/** Answers the task on screen. `wrongOnce` picks a wrong translation for that word (once). */
async function answer(page: Page, wrongOnce: Set<string>) {
  const main = page.getByRole("main");
  const card = main.getByRole("region", { name: "Карточки" });
  const choice = main.getByRole("region", { name: "Выбор перевода" });
  const write = main.getByRole("form", { name: "Написание" });
  const ear = main.getByRole("form", { name: "На слух" });
  await expect(card.or(choice).or(write).or(ear)).toBeVisible();
  if (await card.isVisible()) {
    await card.getByRole("button", { name: "Дальше" }).click();
  } else if (await choice.isVisible()) {
    const term = (await choice.locator("[lang]").first().innerText()).trim();
    const right = WORDS[term];
    if (wrongOnce.delete(term)) {
      await choice.getByRole("group").getByRole("button").filter({ hasNotText: right }).first().click();
      await expect(choice.getByRole("status")).toContainText("ещё раз в конце этапа");
    } else {
      await choice.getByRole("button", { name: right }).click();
    }
    await choice.getByRole("button", { name: "Дальше" }).click();
  } else if (await write.isVisible()) {
    const translation = (await write.locator("p").first().innerText()).trim();
    await write.getByRole("textbox", { name: "Ваш ответ" }).fill(TERM_OF[translation]);
    await write.getByRole("button", { name: "Проверить" }).click();
    await expect(write.getByRole("status")).toContainText("Верно!");
    await write.getByRole("button", { name: "Дальше" }).click();
  } else {
    // By ear: the word the page said (the test listens to the browser's voice).
    await expect.poll(() => page.evaluate(() => (window as unknown as { said: string[] }).said.length)).toBeGreaterThan(0);
    const said = await page.evaluate(() => (window as unknown as { said: string[] }).said.at(-1)!);
    await ear.getByRole("textbox", { name: "Ваш ответ" }).fill(said);
    await ear.getByRole("button", { name: "Проверить" }).click();
    await expect(ear.getByRole("status")).toContainText("Верно!");
    await ear.getByRole("button", { name: "Дальше" }).click();
  }
}

test.describe("trainer in the dictionary", () => {
  test.skip(!teacher.email || !secret || !url, "test accounts not configured");
  test.setTimeout(240_000);
  test.afterAll(async () => {
    await removeTempStudents();
  });

  test("learn words through all steps, then review", async ({ page }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    for (const [term, translation] of Object.entries(WORDS)) {
      // "apple" came from the teacher during a lesson.
      await db.from("vocabulary").insert({ student_id: pupil.id, term, translation, language: "en", added_by: term === "apple" ? teacherId : pupil.id });
    }
    await db.from("vocabulary").insert({ student_id: pupil.id, term: "moon", translation: "", language: "en", added_by: pupil.id });
    const reviews = async () => (await db.from("vocabulary_reviews").select("id", { count: "exact", head: true }).eq("student_id", pupil.id)).count;

    // Listen to what the page says out loud.
    await page.addInitScript(() => {
      const w = window as unknown as { said: string[] };
      w.said = [];
      if ("speechSynthesis" in window) {
        window.speechSynthesis.speak = (u: SpeechSynthesisUtterance) => void w.said.push(u.text);
      }
    });
    await login(page, pupil.email, pupil.password);

    // No separate Trainer any more: it lives in the Dictionary.
    await expect(page.getByRole("link", { name: "Тренажёр" })).toHaveCount(0);
    await page.goto("/ru/trainer");
    await expect(page).toHaveURL(/\/ru\/vocabulary/);
    await expect(page.getByText("5 слов ждут изучения.").filter({ visible: true })).toBeVisible();
    await expect(page.getByText("1 слово без перевода не участвует").filter({ visible: true })).toBeVisible();

    // Learn words → all of them.
    await page.getByRole("button", { name: "Учить слова" }).click();
    const dialog = page.getByRole("dialog", { name: "Учить слова" });
    await dialog.getByRole("button", { name: "Все (5)" }).click();
    await dialog.getByRole("button", { name: "Начать · 5 слов" }).click();

    // Step 1 of 4 … step 4 of 4; one wrong pick comes back at the end of its step.
    await expect(page.getByText("Этап 1 из 4 · Карточки")).toBeVisible();
    const wrongOnce = new Set(["cat"]);
    for (let i = 0; i < 21; i++) await answer(page, wrongOnce);
    await expect(page.getByRole("status").filter({ hasText: "5 слов перешли в «Выучено»" })).toBeVisible();
    await expect(page.getByText("Ошибки были в 1 слове:")).toBeVisible();
    await expect(page.getByRole("listitem").filter({ hasText: "cat — кот" })).toBeVisible();
    expect(await reviews()).toBe(21);
    const learned = (await db.from("vocabulary").select("term, stage, due").eq("student_id", pupil.id).eq("stage", 4)).data ?? [];
    expect(learned.map((w) => w.term).sort()).toEqual(["apple", "cat", "dog", "house", "sun"]);
    expect(learned.every((w) => new Date(w.due).getTime() > Date.now())).toBe(true);

    // Back in the Dictionary: the "Learned" tab; for now nothing to review.
    await page.getByRole("button", { name: "К словарю" }).click();
    await expect(page.getByRole("button", { name: /^Выучено/ })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByText("Все выученные слова пока хорошо помнятся.")).toBeVisible();

    // Some time later two words need a review.
    await db.from("vocabulary").update({ due: new Date(Date.now() - 60_000).toISOString() }).eq("student_id", pupil.id).in("term", ["dog", "sun"]);
    await page.reload();
    await page.getByRole("button", { name: /^Выучено/ }).click();
    await expect(page.getByRole("status").filter({ hasText: "Пора повторить: 2 слова" })).toBeVisible();
    const words = page.getByRole("list", { name: "Словарь" });
    await expect(words.getByRole("listitem").filter({ hasText: "dog" })).toContainText("Пора повторить");

    // Review: chosen word, only the writing step.
    await page.getByRole("button", { name: "Повторить" }).click();
    const review = page.getByRole("dialog", { name: "Повторить слова" });
    await review.getByRole("button", { name: "Выбрать самому" }).click();
    await review.getByRole("checkbox").first().waitFor();
    await review.getByRole("listitem").filter({ hasText: "dog" }).getByRole("checkbox").click();
    for (const step of ["Карточки", "Выбор перевода", "На слух"]) await review.getByRole("checkbox", { name: step }).click();
    await review.getByRole("button", { name: "Начать · 1 слово" }).click();
    await expect(page.getByText("Этап 1 из 1 · Написание")).toBeVisible();
    await answer(page, new Set());
    await expect(page.getByRole("status").filter({ hasText: "Повторено 1 слово" })).toBeVisible();
    await page.getByRole("button", { name: "К словарю" }).click();
    await expect(page.getByRole("status").filter({ hasText: "Пора повторить: 1 слово" })).toBeVisible();

    // "Learn again" sends a learned word back to the words to learn.
    await page.getByRole("button", { name: /^Выучено/ }).click();
    const sun = words.getByRole("listitem").filter({ hasText: "sun" });
    await sun.getByRole("button", { name: "Действия со словом «sun»" }).click();
    await page.getByRole("menuitem", { name: "Учить заново" }).click();
    await expect(sun).toHaveCount(0);
    await page.getByRole("button", { name: /^Учу/ }).click();
    await expect(words.getByRole("listitem").filter({ hasText: "sun" })).toBeVisible();
  });
});
