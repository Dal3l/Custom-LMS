import { expect, test } from "@playwright/test";

// These checks need no account: they cover pages for guests,
// language switching and form validation.

test("opens the site in the browser's language", async ({ browser }) => {
  const context = await browser.newContext({ locale: "ru-RU" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page).toHaveURL(/\/ru$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await context.close();
});

test("switches the interface language", async ({ page }) => {
  await page.goto("/ru");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Уроки иностранных языков");

  await page.getByRole("button", { name: "Язык интерфейса" }).click();
  await page.getByRole("menuitem", { name: "Қазақша" }).click();
  await expect(page).toHaveURL(/\/kk$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Шет тілі сабақтары");

  await page.getByRole("button", { name: "Интерфейс тілі" }).click();
  await page.getByRole("menuitem", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Language lessons");
});

test("guests are sent from the app to the login page", async ({ page }) => {
  await page.goto("/ru/dashboard");
  await expect(page).toHaveURL(/\/ru\/login$/);
  await expect(page.getByRole("button", { name: "Продолжить с Google" })).toBeVisible();
});

test("sign-up form explains what is missing", async ({ page }) => {
  await page.goto("/ru/signup");
  await page.getByRole("button", { name: "Зарегистрироваться" }).click();
  await expect(page.getByText("Выберите, кто вы")).toBeVisible();
  await expect(page.getByText("Проверьте адрес почты")).toBeVisible();
  await expect(page.getByText("Введите имя")).toBeVisible();
});

test("login with a wrong password shows a friendly error", async ({ page }) => {
  await page.goto("/en/login");
  await page.getByLabel("Email").fill("nobody@example.com");
  await page.getByLabel("Password").fill("wrong-password");
  await page.getByRole("button", { name: "Log in", exact: true }).click();
  await expect(page.getByText("Wrong email or password")).toBeVisible();
  await expect(page.getByLabel("Email")).toHaveValue("nobody@example.com");
});

test("unknown pages show a translated 404", async ({ page }) => {
  await page.goto("/kk/no-such-page");
  await expect(page.getByRole("heading", { name: "Бет табылмады" })).toBeVisible();
});

test("pages fit the screen without sideways scrolling", async ({ page }) => {
  for (const path of ["/ru", "/ru/login", "/ru/signup"]) {
    await page.goto(path);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, path).toBeLessThanOrEqual(0);
  }
});
