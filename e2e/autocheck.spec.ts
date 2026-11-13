import { expect, test } from "@playwright/test";

// Needs the test teacher account (E2E_TEACHER_EMAIL / E2E_TEACHER_PASSWORD in .env.local).
const email = process.env.E2E_TEACHER_EMAIL;
const password = process.env.E2E_TEACHER_PASSWORD;
const SECRET = "Zephyrine"; // a right answer that must never reach the student's browser

test.describe("auto-checked exercises and student preview", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.setTimeout(180_000);

  test("build four types, then answer them as a student", async ({ page }) => {
    await page.goto("/ru/login");
    await page.getByLabel("Электронная почта").fill(email!);
    await page.getByLabel("Пароль", { exact: true }).fill(password!);
    await page.getByRole("button", { name: "Войти", exact: true }).click();
    await expect(page).toHaveURL(/\/ru\/dashboard/);

    const courseTitle = `E2E проверка ${Date.now()}`;
    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    await page.getByLabel("Название курса").fill(courseTitle);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Урок", exact: true }).click();
    await page.getByLabel("Название").fill("Auto");
    await page.keyboard.press("Enter");
    await page.getByRole("link", { name: "Auto" }).click();
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByRole("button", { name: "Reading" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);

    const add = async (type: RegExp) => {
      await page.getByRole("button", { name: "Упражнение", exact: true }).click();
      await page.getByRole("button", { name: type }).click();
    };
    const card = (n: string) => page.getByRole("listitem").filter({ has: page.getByText(n, { exact: true }) }).last();

    // 1.1 Gaps with typing — "Make it a gap" on a selected word
    await add(/^Пропуски с вводом/);
    const area = card("1.1").getByLabel("Текст с пропусками");
    await area.fill(`Penguins are birds. They live in ${SECRET}.`);
    await area.evaluate((el: HTMLTextAreaElement) => el.setSelectionRange(9, 12)); // "are"
    await card("1.1").getByRole("button", { name: "Сделать пропуском" }).click();
    await expect(area).toHaveValue(`Penguins [are] birds. They live in ${SECRET}.`);
    await area.fill(`Penguins [are] birds. They live in [${SECRET}].`);
    await expect(card("1.1").getByText(/Так увидит ученик \(2 пропуска\)/)).toBeVisible();

    // 1.2 Gaps with options
    await add(/^Пропуски с выбором/);
    await card("1.2").getByLabel("Текст с пропусками").fill("She [*is/are/am] happy.");
    await expect(card("1.2").getByText(/не отмечен/)).toHaveCount(0);

    // 1.3 Multiple choice with a video on top
    await add(/^Выбор ответа/);
    await card("1.3").getByRole("button", { name: "Медиа сверху" }).click();
    await page.getByRole("menuitem", { name: "Видео" }).click();
    await card("1.3").getByLabel("Ссылка на видео").fill("https://youtu.be/dQw4w9WgXcQ");
    await card("1.3").getByRole("button", { name: "Добавить" }).click();
    await card("1.3").getByLabel("Вопрос 1").fill("Where do penguins live?");
    await card("1.3").getByLabel("Вариант 1", { exact: true }).fill("Arctic");
    await card("1.3").getByLabel("Вариант 2", { exact: true }).fill("Antarctica");
    await card("1.3").getByRole("checkbox", { name: "Вариант 2 — правильный" }).click();

    // 1.4 True / false
    await add(/^Верно \/ неверно/);
    await card("1.4").getByLabel("Утверждение 1").fill("Penguins can fly.");
    await card("1.4").getByRole("radio", { name: "Неверно", exact: true }).click();

    await expect(page.getByRole("status").filter({ hasText: "Сохранено" })).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(1500);

    // ---- Preview as student: record everything the server sends from here on
    const received: string[] = [];
    page.on("response", async (res) => {
      if (!res.url().startsWith(new URL(page.url()).origin)) return;
      try {
        received.push(await res.text());
      } catch {
        /* redirects / aborted requests have no body */
      }
    });
    await page.getByRole("button", { name: "Предпросмотр как ученик" }).click();
    await expect(page).toHaveURL(/\/preview/);
    await expect(page.getByText("Предпросмотр: так урок увидит ученик")).toBeVisible();
    await expect(page.locator('iframe[src*="dQw4w9WgXcQ"]')).toHaveCount(1);

    // Gaps with typing: wrong, then right (case and spaces don't matter)
    const gap1 = page.getByLabel("Пропуск 1").first();
    await gap1.fill("is");
    await gap1.press("Enter");
    await expect(gap1).toHaveAttribute("aria-invalid", "true");
    await gap1.fill(" ARE ");
    await gap1.press("Enter");
    await expect(gap1).not.toHaveAttribute("aria-invalid", "true");
    const gap2 = page.getByLabel("Пропуск 2");
    await gap2.fill(SECRET.toLowerCase());
    await gap2.press("Tab");
    await expect(card("1.1").getByRole("status")).toHaveText("2 из 2");

    // Dropdown gap
    await card("1.2").getByLabel("Пропуск 1").selectOption({ label: "are" });
    await expect(card("1.2").getByRole("status")).toHaveText("0 из 1");
    await card("1.2").getByLabel("Пропуск 1").selectOption({ label: "is" });
    await expect(card("1.2").getByRole("status")).toHaveText("1 из 1");

    // Multiple choice
    await card("1.3").getByRole("radio", { name: "Antarctica" }).click();
    await expect(card("1.3").getByRole("status")).toHaveText("1 из 1");

    // True / false
    await card("1.4").getByRole("radio", { name: "Верно", exact: true }).click();
    await expect(card("1.4").getByRole("status")).toHaveText("0 из 1");
    await card("1.4").getByRole("radio", { name: "Неверно", exact: true }).click();
    await expect(card("1.4").getByRole("status")).toHaveText("1 из 1");

    // The right answer never reached the browser
    await page.waitForTimeout(500);
    expect(received.length).toBeGreaterThan(3);
    for (const body of received) expect(body).not.toContain(SECRET);
    expect(await page.content()).not.toContain(SECRET);

    // Reset clears everything
    await page.getByRole("button", { name: "Сбросить ответы" }).click();
    await expect(page.getByLabel("Пропуск 1").first()).toHaveValue("");
    await expect(page.getByRole("status").filter({ hasText: " из " })).toHaveCount(0);

    // Back to editing, then clean up
    await page.getByRole("link", { name: "К редактированию" }).click();
    await expect(page.getByRole("button", { name: "Предпросмотр как ученик" })).toBeVisible();
    await page.getByRole("link", { name: courseTitle }).click();
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
  });
});
