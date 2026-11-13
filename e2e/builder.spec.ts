import { expect, test, type Page } from "@playwright/test";

// Needs the test teacher account (E2E_TEACHER_EMAIL / E2E_TEACHER_PASSWORD in .env.local).
const email = process.env.E2E_TEACHER_EMAIL;
const password = process.env.E2E_TEACHER_PASSWORD;

async function login(page: Page) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email!);
  await page.getByLabel("Пароль", { exact: true }).fill(password!);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("lesson builder", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.setTimeout(120_000); // a long scenario against the real database

  test("sections, a text exercise with autosave, move, duplicate, delete", async ({ page, isMobile }) => {
    await login(page);
    const courseTitle = `E2E курс ${Date.now()}`;

    // Course → module → lesson
    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    await page.getByLabel("Название курса").fill(courseTitle);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.getByLabel("Название").fill("M1");
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Урок", exact: true }).click();
    await page.getByLabel("Название").fill("Lesson one");
    await page.keyboard.press("Enter");
    await page.getByRole("link", { name: "Lesson one" }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Lesson one" })).toBeVisible();

    // Two sections: a template and a custom name
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByRole("button", { name: "Warm-up" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(page.getByText("В этой секции пока нет упражнений.")).toBeVisible();
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByLabel(/Своё название/).fill("Song time");
    await page.getByRole("button", { name: "Добавить" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);

    // Text exercise in "Song time" (section 2)
    await page.getByRole("button", { name: "Упражнение", exact: true }).click();
    await expect(page.getByRole("button", { name: /Открытый ответ/ })).toBeDisabled();
    await expect(page.getByRole("button", { name: /^Картинка/ })).toBeEnabled();
    await page.getByRole("button", { name: /^Текст/ }).click();
    await expect(page.getByText("2.1", { exact: true })).toBeVisible();
    await page.getByLabel("Задание").fill("Read and sing");
    const editor = page.locator(".ProseMirror").first();
    await editor.click();
    await page.keyboard.type("Twinkle twinkle ");
    await page.getByRole("button", { name: "Жирный" }).click();
    await page.keyboard.type("little star");
    await expect(page.getByRole("status").filter({ hasText: "Сохранено" })).toBeVisible({ timeout: 15000 });

    // Survives a reload, and the same section opens
    await page.reload();
    await expect(page.getByLabel("Задание")).toHaveValue("Read and sing");
    await expect(page.locator(".ProseMirror strong")).toHaveText("little star");

    // Duplicate → 2.2, then move the copy to Warm-up → 1.1
    await page.getByRole("button", { name: "Ещё действия" }).last().click();
    await page.getByRole("menuitem", { name: "Дублировать" }).click();
    await expect(page.getByText("2.2", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Ещё действия" }).last().click();
    await page.getByRole("menuitem", { name: "Переместить в секцию" }).click();
    await page.getByRole("menuitem", { name: "Warm-up" }).click();
    await expect(page.getByText("2.2", { exact: true })).toHaveCount(0);
    if (isMobile) {
      await page.getByRole("button", { name: "1. Warm-up" }).click();
    } else {
      await page.getByRole("navigation").getByRole("button", { name: /Warm-up/ }).click();
    }
    await expect(page.getByText("1.1", { exact: true })).toBeVisible();
    await expect(page.locator(".ProseMirror strong")).toHaveText("little star");

    // Delete it
    await page.getByRole("button", { name: "Ещё действия" }).last().click();
    await page.getByRole("menuitem", { name: "Удалить" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page.getByText("В этой секции пока нет упражнений.")).toBeVisible();

    // Clean up: delete the course
    await page.getByRole("link", { name: courseTitle }).click();
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
  });
});

test.describe("lesson builder: rich text", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.setTimeout(120_000);

  test("headings and lists are saved", async ({ page }) => {
    await login(page);
    const courseTitle = `E2E текст ${Date.now()}`;
    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    await page.getByLabel("Название курса").fill(courseTitle);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Урок", exact: true }).click();
    await page.getByLabel("Название").fill("Rich");
    await page.keyboard.press("Enter");
    await page.getByRole("link", { name: "Rich" }).click();
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByRole("button", { name: "Reading" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await page.getByRole("button", { name: "Упражнение", exact: true }).click();
    await page.getByRole("button", { name: /^Текст/ }).click();
    await page.locator(".ProseMirror").click();
    await page.getByRole("button", { name: "Заголовок", exact: true }).click();
    await page.keyboard.type("My weekend");
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Нумерованный список" }).click();
    await page.keyboard.type("sleep");
    await page.keyboard.press("Enter");
    await page.keyboard.type("meet friends");
    await page.getByRole("button", { name: "Выделить цветом" }).click();
    await page.getByRole("menuitem", { name: "Жёлтый" }).click();
    await expect(page.getByRole("status").filter({ hasText: "Сохранено" })).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(1500);
    await expect(page.getByText("Не получилось")).toHaveCount(0);

    await page.reload();
    await expect(page.locator(".ProseMirror h2")).toHaveText("My weekend");
    await expect(page.locator(".ProseMirror ol li")).toHaveCount(2);

    await page.getByRole("link", { name: courseTitle }).click();
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
  });
});
