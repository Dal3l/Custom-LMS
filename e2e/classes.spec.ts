import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type Browser, type BrowserContextOptions, type Page } from "@playwright/test";

// Needs the test teacher and student accounts (E2E_TEACHER_* / E2E_STUDENT_*) and
// SUPABASE_SECRET_KEY (to delete the accounts the test creates). Skipped otherwise.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const student = { email: process.env.E2E_STUDENT_EMAIL, password: process.env.E2E_STUDENT_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

// Creating accounts goes through Supabase Auth and can take a few seconds.
const expect = baseExpect.configure({ timeout: 20_000 });

const created: string[] = [];
const createdClasses: string[] = [];

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
}

async function newPage(browser: Browser, options: BrowserContextOptions) {
  const context = await browser.newContext(options);
  return context.newPage();
}

test.describe("classes, invite links and student accounts", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);

  test.afterAll(async () => {
    if (!secret || !url) return;
    const admin = createClient(url, secret, { auth: { persistSession: false } });
    const { data } = await admin.auth.admin.listUsers({ perPage: 200 });
    for (const u of data.users) {
      if (u.email && created.includes(u.email)) await admin.auth.admin.deleteUser(u.id);
    }
    // Classes left behind by a failed run.
    if (createdClasses.length) await admin.from("classes").delete().in("name", createdClasses);
  });

  test("teacher creates a class, students join by link and by account", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const className = `E2E класс ${stamp}`;
    const registered = { name: "Регистр Тестов", email: `e2e-reg-${stamp}@linguaroom.test` };
    const invited = { name: "Инвайт Тестов", email: `e2e-inv-${stamp}@linguaroom.test`, password: "invite-pass-1" };
    created.push(registered.email, invited.email);
    createdClasses.push(className);

    // --- Teacher: create a group class with a call link.
    await login(page, teacher.email!, teacher.password!);
    await expect(page).toHaveURL(/\/ru\/dashboard/);
    await page.goto("/ru/classes");
    await page.getByRole("button", { name: "Новый класс" }).first().click();
    await page.getByLabel("Название класса").fill(className);
    await page.getByLabel("Формат").selectOption("group");
    await page.getByLabel("Ссылка на видеозвонок").fill("http://zoom.us/j/1");
    await page.getByRole("button", { name: "Создать класс" }).click();
    await expect(page.getByText("Нужна ссылка, начинающаяся с https://")).toBeVisible();
    // What was typed is kept.
    await expect(page.getByLabel("Название класса")).toHaveValue(className);
    await expect(page.getByLabel("Формат")).toHaveValue("group");
    await page.getByLabel("Ссылка на видеозвонок").fill("https://zoom.us/j/123");
    await page.getByRole("button", { name: "Создать класс" }).click();
    await expect(page.getByRole("heading", { level: 1, name: className })).toBeVisible();
    const classUrl = page.url();
    await expect(page.getByRole("link", { name: "Позвонить" })).toHaveAttribute("href", "https://zoom.us/j/123");

    // --- Students tab: invite link and registering a student.
    await page.getByRole("tab", { name: /Ученики/ }).click();
    const inviteUrl = await page.getByRole("textbox", { name: "Ссылка-приглашение" }).inputValue();
    expect(inviteUrl).toMatch(/\/ru\/join\/[A-Za-z0-9_-]{24}$/);
    const invitePath = new URL(inviteUrl).pathname;

    await page.getByRole("button", { name: "Зарегистрировать ученика" }).click();
    await page.getByLabel("Имя и фамилия ученика").fill(registered.name);
    await page.getByLabel("Почта ученика").fill(registered.email);
    await page.getByLabel("Часовой пояс ученика").selectOption("Asia/Almaty");
    await page.getByRole("button", { name: "Создать аккаунт" }).click();
    await expect(page.getByText("Аккаунт создан")).toBeVisible();
    const message = (await page.getByRole("textbox", { name: "Сообщение для ученика" }).textContent()) ?? "";
    expect(message).toContain(`Логин: ${registered.email}`);
    expect(message).toMatch(/Ссылка для входа: http.*\/ru\/login/);
    const generated = /Пароль: (\S+)/.exec(message)?.[1];
    expect(generated).toMatch(/^[a-z]+\d{4}$/);
    await page.getByRole("button", { name: "Готово" }).click();
    await expect(page.getByText(registered.name)).toBeVisible();

    // Same email again → friendly error.
    await page.getByRole("button", { name: "Зарегистрировать ученика" }).click();
    await page.getByLabel("Имя и фамилия ученика").fill("Дубль");
    await page.getByLabel("Почта ученика").fill(registered.email);
    await page.getByRole("button", { name: "Создать аккаунт" }).click();
    await expect(page.getByText("Эта почта уже зарегистрирована", { exact: false })).toBeVisible();
    await page.getByRole("button", { name: "Отмена" }).click();

    // --- Guest opens the invite link and signs up: lands in the class as a student.
    const guest = await newPage(browser, options);
    await guest.goto(invitePath);
    await expect(guest.getByText(`«${className}»`)).toBeVisible();
    await expect(guest.getByText("Кто вы?")).toHaveCount(0); // no role choice: always a student
    await guest.getByLabel("Имя и фамилия").fill(invited.name);
    await guest.getByLabel("Электронная почта").fill(invited.email);
    await guest.getByLabel("Пароль", { exact: true }).fill(invited.password);
    await guest.getByRole("button", { name: "Зарегистрироваться" }).click();
    await expect(guest.getByRole("heading", { level: 1, name: className })).toBeVisible();
    await expect(guest.getByRole("link", { name: "Позвонить" })).toBeVisible();
    await expect(guest.getByRole("tab", { name: /Ученики/ })).toHaveCount(0);
    await guest.goto("/ru/classes");
    await expect(guest.getByText(className)).toBeVisible();
    await guest.context().close();

    // --- Existing student: "Log in" on the invite page, then join.
    const existing = await newPage(browser, options);
    await existing.goto(invitePath);
    await existing.getByRole("link", { name: "Войти" }).click();
    await expect(existing).toHaveURL(/\/ru\/login\?next=/);
    await existing.getByLabel("Электронная почта").fill(student.email!);
    await existing.getByLabel("Пароль", { exact: true }).fill(student.password!);
    await existing.getByRole("button", { name: "Войти", exact: true }).click();
    await expect(existing).toHaveURL(new RegExp(`${invitePath}$`));
    await existing.getByRole("button", { name: "Присоединиться к классу" }).click();
    await expect(existing.getByRole("heading", { level: 1, name: className })).toBeVisible();
    await existing.context().close();

    // --- The registered student logs in with the generated password.
    const reg = await newPage(browser, options);
    await login(reg, registered.email, generated!);
    await expect(reg).toHaveURL(/\/ru\/dashboard/);
    await reg.goto("/ru/classes");
    await reg.getByRole("link", { name: className }).click();
    await expect(reg.getByRole("heading", { level: 1, name: className })).toBeVisible();
    const regClassUrl = reg.url();

    // --- Teacher: three students; removes the registered one.
    await page.reload();
    await page.getByRole("tab", { name: /Ученики · 3/ }).click();
    await page.getByRole("button", { name: `Действия: ${registered.name}` }).click();
    await page.getByRole("menuitem", { name: "Убрать из класса" }).click();
    await page.getByRole("button", { name: "Убрать", exact: true }).click();
    await expect(page.getByText("Ученик убран из класса")).toBeVisible();
    await expect(page.getByText(registered.name)).toHaveCount(0);
    await reg.goto(regClassUrl);
    await expect(reg.getByRole("heading", { level: 1, name: className })).toHaveCount(0);
    await reg.context().close();

    // --- Teacher turns the link off: it stops working; a new link works.
    await page.getByRole("button", { name: "Действия со ссылкой" }).click();
    await page.getByRole("menuitem", { name: "Выключить ссылку" }).click();
    await expect(page.getByText("Выключена", { exact: true })).toBeVisible();
    const late = await newPage(browser, options);
    await late.goto(invitePath);
    await expect(late.getByText("Ссылка не работает")).toBeVisible();
    await page.getByRole("button", { name: "Действия со ссылкой" }).click();
    await page.getByRole("menuitem", { name: /Создать новую ссылку/ }).click();
    const newUrl = await page.getByRole("textbox", { name: "Ссылка-приглашение" }).inputValue();
    expect(newUrl).not.toBe(inviteUrl);
    await late.goto(new URL(newUrl).pathname);
    await expect(late.getByText(`«${className}»`)).toBeVisible();
    await late.context().close();

    // --- A signed-in teacher on an invite page is told to sign out first.
    await page.goto(new URL(newUrl).pathname);
    await expect(page.getByText("Вы вошли как учитель", { exact: false })).toBeVisible();

    // --- Delete the class.
    await page.goto(classUrl);
    await page.getByRole("button", { name: "Ещё действия" }).click();
    await page.getByRole("menuitem", { name: "Удалить класс" }).click();
    await page.getByRole("button", { name: "Удалить" }).click();
    await expect(page).toHaveURL(/\/ru\/classes$/);
    await expect(page.getByText(className)).toHaveCount(0);
  });
});
