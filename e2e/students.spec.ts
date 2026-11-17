import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type Page } from "@playwright/test";

// The Students page: the teacher adds a student (account + message with login
// and password), puts them into an existing class or a new class made for them;
// a student without a class can be taken off the list. The new student signs
// in with the given password and sees the class.
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

test.describe("students page", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const emails: string[] = [];
  const classes: string[] = [];
  const stamps: string[] = [];
  test.afterAll(async () => {
    if (!secret || !url) return;
    const db = admin();
    const { data } = await db.auth.admin.listUsers({ perPage: 1000 });
    for (const u of data.users) if (u.email && emails.includes(u.email)) await db.auth.admin.deleteUser(u.id);
    if (classes.length) await db.from("classes").delete().in("id", classes);
    // classes made on the page, named after the students
    for (const stamp of stamps) await db.from("classes").delete().like("name", `%${stamp}%`);
  });

  test("add students, put them into classes", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`.replace(/[^a-z0-9-]/gi, "");
    stamps.push(stamp);
    const db = admin();
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E ученики ${stamp}`, kind: "group" }).select("id").single();
    classes.push(cls!.id);

    await login(page, teacher.email!, teacher.password!);
    await page.goto("/ru/students");
    await expect(page.getByRole("heading", { level: 1, name: "Ученики" })).toBeVisible();

    async function addStudent(name: string, email: string) {
      emails.push(email);
      await page.getByRole("button", { name: "Добавить ученика" }).click();
      const dialog = page.getByRole("dialog");
      await dialog.getByLabel("Имя и фамилия ученика").fill(name);
      await dialog.getByLabel("Почта ученика").fill(email);
      await dialog.getByRole("button", { name: "Создать аккаунт" }).click();
      await expect(dialog.getByRole("textbox", { name: "Сообщение для ученика" })).toContainText(email);
      return dialog;
    }

    // 1) Into an existing class; the message has the login and password.
    const first = { name: `Первый ${stamp}`, email: `e2e-tmp-a-${stamp}@linguaroom.test`.toLowerCase() };
    let dialog = await addStudent(first.name, first.email);
    const message = await dialog.getByRole("textbox", { name: "Сообщение для ученика" }).innerText();
    const password = message.match(/Пароль:\s*(\S+)/)?.[1];
    expect(password).toBeTruthy();
    await dialog.getByRole("button", { name: `Добавить в «E2E ученики ${stamp}»` }).click();
    await expect(page.getByText(`${first.name} — в классе «E2E ученики ${stamp}»`)).toBeVisible();
    const list = page.getByRole("list", { name: "Ученики" });
    await expect(list.getByRole("listitem").filter({ hasText: first.name })).toContainText(`E2E ученики ${stamp}`);

    // 2) Into a new class made for the student.
    const second = { name: `Второй ${stamp}`, email: `e2e-tmp-b-${stamp}@linguaroom.test`.toLowerCase() };
    dialog = await addStudent(second.name, second.email);
    await dialog.getByRole("button", { name: "Новый класс" }).click();
    await expect(dialog.getByLabel("Название нового класса")).toHaveValue(second.name);
    await dialog.getByRole("button", { name: "Создать класс с учеником" }).click();
    await expect(page.getByText(`Класс «${second.name}» создан`)).toBeVisible();
    await expect(list.getByRole("listitem").filter({ hasText: second.name }).getByRole("link", { name: second.name })).toBeVisible();

    // 3) No class yet → "Not in a class" → taken off the list.
    const third = { name: `Третий ${stamp}`, email: `e2e-tmp-c-${stamp}@linguaroom.test`.toLowerCase() };
    dialog = await addStudent(third.name, third.email);
    await dialog.getByRole("button", { name: "Готово" }).click();
    const row = list.getByRole("listitem").filter({ hasText: third.name });
    await expect(row).toContainText("Не в классе");
    await row.getByRole("button", { name: `Действия: ${third.name}` }).click();
    await page.getByRole("menuitem", { name: "Убрать из списка" }).click();
    await expect(row).toHaveCount(0);

    // The class card opens the class's info page; there: Students / Homework / Settings.
    await page.goto("/ru/classes");
    await page.getByRole("link", { name: `Информация и настройки класса «${second.name}»` }).click();
    await expect(page.getByRole("tab", { name: /Ученики · 1/ })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("tab", { name: "Настройки" }).click();
    await expect(page.getByRole("region", { name: "Расписание класса" })).toContainText("пока нет занятий");
    await expect(page.getByRole("region", { name: "Настройки класса" })).toContainText("Индивидуальный");

    // Deleting a student's account: gone for good (and off the list).
    await page.goto("/ru/students");
    const secondRow = list.getByRole("listitem").filter({ hasText: second.name });
    await secondRow.getByRole("button", { name: `Действия: ${second.name}` }).click();
    await page.getByRole("menuitem", { name: "Удалить аккаунт" }).click();
    await page.getByRole("alertdialog").getByRole("button", { name: "Удалить навсегда" }).click();
    await expect(page.getByText(`Аккаунт ученика ${second.name} удалён`)).toBeVisible();
    await expect(secondRow).toHaveCount(0);
    const { data: left } = await db.auth.admin.listUsers({ perPage: 1000 });
    expect(left.users.some((u) => u.email === second.email)).toBe(false);

    // The first student signs in with the message's password and sees the class.
    const sp = await (await browser.newContext(testInfo.project.use)).newPage();
    await login(sp, first.email, password!);
    await sp.goto("/ru/classes");
    await expect(sp.getByText(`E2E ученики ${stamp}`).filter({ visible: true }).first()).toBeVisible();
    await sp.context().close();
  });
});
