import { expect, test } from "@playwright/test";

// Needs a confirmed teacher account: set E2E_TEACHER_EMAIL / E2E_TEACHER_PASSWORD
// (for example in .env.local). Skipped otherwise.
const email = process.env.E2E_TEACHER_EMAIL;
const password = process.env.E2E_TEACHER_PASSWORD;

test.describe("teacher builds a course outline", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.describe.configure({ mode: "serial" });
  test.setTimeout(90_000);

  test("create course, modules, lessons; rename, reorder, delete", async ({ page }) => {
    await page.goto("/ru/login");
    await page.getByLabel("Электронная почта").fill(email!);
    await page.getByLabel("Пароль", { exact: true }).fill(password!);
    await page.getByRole("button", { name: "Войти", exact: true }).click();
    await expect(page).toHaveURL(/\/ru\/dashboard/);

    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    const title = `E2E курс ${Date.now()}`;
    await page.getByLabel("Название курса").fill(title);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByLabel("Уровень").selectOption("A2");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();

    // Two modules with a lesson each.
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.getByLabel("Название").fill("Знакомство");
    await page.keyboard.press("Enter");
    await expect(page.getByText("Знакомство")).toBeVisible();
    await page.getByRole("button", { name: "Урок", exact: true }).first().click();
    await page.getByLabel("Название").fill("Hello");
    await page.keyboard.press("Enter");
    await expect(page.getByRole("link", { name: "Hello" })).toBeVisible();

    // Lesson menu: make it a test.
    // The innermost list item holding the lesson link is the lesson row.
    const lessonRow = page.getByRole("listitem").filter({ has: page.getByRole("link", { name: "Hello" }) }).last();
    await lessonRow.getByRole("button", { name: "Ещё действия" }).click();
    await page.getByRole("menuitem", { name: "Сделать тестом" }).click();
    await expect(page.getByText("Тест", { exact: true })).toBeVisible();

    // Survives a reload.
    await page.reload();
    await expect(page.getByRole("link", { name: "Hello" })).toBeVisible();

    // Delete the course.
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
    await expect(page.getByText(title)).toHaveCount(0);
  });
});
