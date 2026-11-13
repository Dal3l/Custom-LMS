import { expect, test, type Locator, type Page } from "@playwright/test";

// Needs the test teacher account (E2E_TEACHER_EMAIL / E2E_TEACHER_PASSWORD in .env.local).
const email = process.env.E2E_TEACHER_EMAIL;
const password = process.env.E2E_TEACHER_PASSWORD;

/** Taps an empty spot of a drop place (bottom-right corner, away from the words in it). */
async function tapPlace(place: Locator) {
  const box = (await place.boundingBox())!;
  await place.click({ position: { x: box.width - 6, y: box.height - 6 } });
}

async function drag(page: Page, from: Locator, to: Locator) {
  // Both ends must be on screen, as for a real user.
  await to.scrollIntoViewIfNeeded();
  await from.scrollIntoViewIfNeeded();
  const a = (await from.boundingBox())!;
  const b = (await to.boundingBox())!;
  await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2);
  await page.mouse.down();
  await page.mouse.move(a.x + a.width / 2 + 10, a.y + a.height / 2 + 10, { steps: 3 });
  await page.mouse.move(b.x + b.width - 12, b.y + b.height - 12, { steps: 12 });
  await page.mouse.up();
}

test.describe("drag-and-place exercises", () => {
  test.skip(!email || !password, "no test teacher account configured");
  test.setTimeout(180_000);

  test("build four types, then solve them by tapping (and dragging on a computer)", async ({ page, isMobile }) => {
    await page.goto("/ru/login");
    await page.getByLabel("Электронная почта").fill(email!);
    await page.getByLabel("Пароль", { exact: true }).fill(password!);
    await page.getByRole("button", { name: "Войти", exact: true }).click();
    await expect(page).toHaveURL(/\/ru\/dashboard/);

    const courseTitle = `E2E перетаскивание ${Date.now()}`;
    await page.goto("/ru/courses");
    await page.getByRole("button", { name: "Новый курс" }).first().click();
    await page.getByLabel("Название курса").fill(courseTitle);
    await page.getByLabel("Какой язык преподаёте").selectOption("en");
    await page.getByRole("button", { name: "Создать курс" }).click();
    await page.getByRole("button", { name: "Модуль", exact: true }).click();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Урок", exact: true }).click();
    await page.getByLabel("Название").fill("Drag");
    await page.keyboard.press("Enter");
    await page.getByRole("link", { name: "Drag" }).click();
    await page.getByRole("button", { name: "Секция" }).first().click();
    await page.getByRole("button", { name: "Grammar" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);

    const add = async (type: RegExp) => {
      await page.getByRole("button", { name: "Упражнение", exact: true }).click();
      await page.getByRole("button", { name: type }).click();
    };
    const card = (n: string) => page.getByRole("listitem").filter({ has: page.getByText(n, { exact: true }) }).last();

    // 1.1 Drag into gaps, with an extra word
    await add(/^Пропуски с перетаскиванием/);
    await card("1.1").getByLabel("Текст с пропусками").fill("I [am] a [student].");
    await card("1.1").getByLabel("Лишние слова").fill("is");

    // 1.2 Matching: two pairs
    await add(/^Сопоставление/);
    await card("1.2").getByLabel("Левая часть пары 1").fill("cat");
    await card("1.2").getByLabel("Пара к 1").fill("кошка");
    await card("1.2").getByLabel("Левая часть пары 2").fill("dog");
    await card("1.2").getByLabel("Пара к 2").fill("собака");
    await card("1.2").getByRole("button", { name: "Удалить пару 3" }).click();

    // 1.3 Ordering: a sentence
    await add(/^Порядок/);
    await card("1.3").getByLabel("Предложение 1").fill("I like green tea");

    // 1.4 Sort into groups
    await add(/^Распределение по группам/);
    await card("1.4").getByLabel("Название колонки 1").fill("Countable");
    await card("1.4").getByLabel("Слова колонки 1").fill("apple\nbook");
    await card("1.4").getByLabel("Название колонки 2").fill("Uncountable");
    await card("1.4").getByLabel("Слова колонки 2").fill("water");

    await expect(page.getByRole("status").filter({ hasText: "Сохранено" })).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(1500);

    // ---- Preview as student
    const received: string[] = [];
    page.on("response", async (res) => {
      if (!res.url().startsWith(new URL(page.url()).origin)) return;
      received.push(await res.text().catch(() => ""));
    });
    await page.getByRole("button", { name: "Предпросмотр как ученик" }).click();
    await expect(page).toHaveURL(/\/preview/);

    // 1.1: tap a word, then a gap
    const c1 = card("1.1");
    await c1.getByRole("button", { name: "student", exact: true }).click();
    await tapPlace(c1.getByRole("group", { name: "Пропуск 2" }));
    await c1.getByRole("button", { name: "is", exact: true }).click();
    await tapPlace(c1.getByRole("group", { name: "Пропуск 1" }));
    await c1.getByRole("button", { name: "Проверить" }).click();
    await expect(c1.getByRole("status").filter({ hasText: / из / })).toHaveText("1 из 2");
    // the wrong word goes back to the bank by tapping it, then the right one is placed
    await c1.getByRole("button", { name: /^is — / }).click();
    await c1.getByRole("button", { name: "am", exact: true }).click();
    await tapPlace(c1.getByRole("group", { name: "Пропуск 1" }));
    await c1.getByRole("button", { name: "Проверить" }).click();
    await expect(c1.getByRole("status").filter({ hasText: / из / })).toHaveText("2 из 2");

    // 1.2: matching — two columns, tap one side then the other; tap a pair to separate it
    const c2 = card("1.2");
    await c2.getByRole("button", { name: "cat", exact: true }).click();
    await c2.getByRole("button", { name: "собака", exact: true }).click(); // wrong pair
    await c2.getByRole("button", { name: "кошка", exact: true }).click(); // right side first also works
    await c2.getByRole("button", { name: "dog", exact: true }).click();
    await expect(c2.getByRole("list", { name: "Ваши пары" }).getByRole("listitem")).toHaveCount(2);
    await c2.getByRole("button", { name: "Проверить" }).click();
    await expect(c2.getByRole("status").filter({ hasText: / из / })).toHaveText("0 из 2");
    await c2.getByRole("button", { name: /^Пара с «собака»/ }).click(); // separate both
    await c2.getByRole("button", { name: /^Пара с «кошка»/ }).click();
    await c2.getByRole("button", { name: "cat", exact: true }).click();
    await c2.getByRole("button", { name: "кошка", exact: true }).click();
    await c2.getByRole("button", { name: "собака", exact: true }).click();
    await c2.getByRole("button", { name: "dog", exact: true }).click();
    await c2.getByRole("button", { name: "Проверить" }).click();
    await expect(c2.getByRole("status").filter({ hasText: / из / })).toHaveText("2 из 2");

    // 1.3: ordering — tap words in order (one wrong first, then fixed)
    const c3 = card("1.3");
    for (const w of ["like", "I", "green", "tea"]) await c3.getByRole("button", { name: w, exact: true }).click();
    await c3.getByRole("button", { name: "Проверить" }).click();
    await expect(c3.getByRole("status").filter({ hasText: / из / })).toHaveText("0 из 1");
    await c3.getByRole("button", { name: /^like — / }).click(); // "like" back to the pieces
    await c3.getByRole("button", { name: /^green — / }).click();
    await c3.getByRole("button", { name: /^tea — / }).click();
    for (const w of ["like", "green", "tea"]) await c3.getByRole("button", { name: w, exact: true }).click();
    await c3.getByRole("button", { name: "Проверить" }).click();
    await expect(c3.getByRole("status").filter({ hasText: / из / })).toHaveText("1 из 1");

    // 1.4: groups — drag with the mouse on a computer, tap on a phone
    const c4 = card("1.4");
    const countable = c4.getByRole("group", { name: "Countable", exact: true });
    const uncountable = c4.getByRole("group", { name: "Uncountable", exact: true });
    if (isMobile) {
      await c4.getByRole("button", { name: "apple", exact: true }).click();
      await tapPlace(countable);
    } else {
      await drag(page, c4.getByRole("button", { name: "apple", exact: true }), countable);
    }
    await expect(countable.getByRole("button", { name: /^apple — / })).toBeVisible();
    await c4.getByRole("button", { name: "book", exact: true }).click();
    await tapPlace(uncountable); // wrong on purpose
    await c4.getByRole("button", { name: "water", exact: true }).click();
    await tapPlace(uncountable);
    await c4.getByRole("button", { name: "Проверить" }).click();
    await expect(c4.getByRole("status").filter({ hasText: / из / })).toHaveText("2 из 3");

    // The browser never got the teacher's source text or the secret salt
    await page.waitForTimeout(500);
    for (const body of received) {
      expect(body).not.toContain("[am]");
      expect(body).not.toContain('"salt"');
      expect(body).not.toContain("I like green tea");
    }

    // Clean up
    await page.getByRole("link", { name: "К редактированию" }).click();
    await page.getByRole("link", { name: courseTitle }).click();
    await page.getByRole("button", { name: "Ещё действия" }).first().click();
    await page.getByRole("menuitem", { name: "Удалить курс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/courses$/);
  });
});
