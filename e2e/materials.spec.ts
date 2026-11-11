import path from "node:path";
import { expect, test } from "@playwright/test";

// Needs the test teacher account (E2E_TEACHER_EMAIL / E2E_TEACHER_PASSWORD in .env.local).
const email = process.env.E2E_TEACHER_EMAIL;
const password = process.env.E2E_TEACHER_PASSWORD;
const fixture = (name: string) => path.join(__dirname, "fixtures", name);

test.describe("lesson materials", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.setTimeout(150_000);

  test("picture, video link, audio and PDF are added and survive a reload", async ({ page }) => {
    await page.goto("/ru/login");
    await page.getByLabel("Электронная почта").fill(email!);
    await page.getByLabel("Пароль", { exact: true }).fill(password!);
    await page.getByRole("button", { name: "Войти", exact: true }).click();
    await expect(page).toHaveURL(/\/ru\/dashboard/);

    const courseTitle = `E2E материалы ${Date.now()}`;
    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    await page.getByLabel("Название курса").fill(courseTitle);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Урок", exact: true }).click();
    await page.getByLabel("Название").fill("Media");
    await page.keyboard.press("Enter");
    await page.getByRole("link", { name: "Media" }).click();
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByRole("button", { name: "Listening" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);

    const add = async (type: RegExp) => {
      await page.getByRole("button", { name: "Упражнение", exact: true }).click();
      await page.getByRole("button", { name: type }).click();
    };

    // Picture
    await add(/^Картинка/);
    await page.getByTestId("upload-image").setInputFiles(fixture("picture.png"));
    const img = page.getByRole("img", { name: "picture.png" });
    await expect(img).toBeVisible();
    const imgSrc = await img.getAttribute("src");
    expect(imgSrc).toBeTruthy();
    await page.getByLabel("Подпись").first().fill("A blue picture");

    // Video link: a wrong link is explained, a right one is embedded
    await add(/^Видео/);
    await page.getByLabel("Ссылка на видео").fill("https://example.com/not-a-video");
    await page.getByRole("button", { name: "Добавить" }).click();
    await expect(page.getByText("Это не похоже на ссылку YouTube или Vimeo")).toBeVisible();
    await page.getByLabel("Ссылка на видео").fill("https://youtu.be/dQw4w9WgXcQ");
    await page.getByRole("button", { name: "Добавить" }).click();
    await expect(page.locator('iframe[src^="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"]')).toHaveCount(1);

    // Audio with speed buttons
    await add(/^Аудио/);
    await page.getByTestId("upload-audio").setInputFiles(fixture("listening.wav"));
    await expect(page.locator("audio")).toHaveCount(1);
    await page.getByRole("button", { name: "1.25×" }).click();
    await expect(page.getByRole("button", { name: "1.25×" })).toHaveAttribute("aria-pressed", "true");
    expect(await page.locator("audio").evaluate((a: HTMLAudioElement) => a.playbackRate)).toBe(1.25);

    // PDF file
    await add(/^Файл/);
    await page.getByTestId("upload-file").setInputFiles(fixture("worksheet.pdf"));
    await expect(page.getByText("worksheet.pdf")).toBeVisible();
    await expect(page.getByRole("link", { name: "Скачать" })).toHaveAttribute("href", /download=worksheet\.pdf/);

    await expect(page.getByText("1.4", { exact: true })).toBeVisible();
    await expect(page.getByRole("status").filter({ hasText: "Сохранено" })).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(1000);

    // Everything is still there after a reload, and the uploaded file is really reachable
    await page.reload();
    await expect(page.getByRole("img", { name: "picture.png" })).toBeVisible();
    await expect(page.getByLabel("Подпись").first()).toHaveValue("A blue picture");
    await expect(page.locator('iframe[src*="dQw4w9WgXcQ"]')).toHaveCount(1);
    await expect(page.locator("audio")).toHaveCount(1);
    await expect(page.getByText("worksheet.pdf")).toBeVisible();
    const pdfHref = await page.getByRole("link", { name: "Открыть" }).getAttribute("href");
    const pdf = await page.evaluate(async (url) => {
      const res = await fetch(url);
      return { status: res.status, type: res.headers.get("content-type") ?? "" };
    }, pdfHref!);
    expect(pdf.status).toBe(200);
    expect(pdf.type).toContain("application/pdf");
    expect(await page.getByRole("img", { name: "picture.png" }).evaluate((i: HTMLImageElement) => i.naturalWidth)).toBe(64);

    // Clean up
    await page.getByRole("link", { name: courseTitle }).click();
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
  });
});
