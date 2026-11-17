import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { addDays, localDate, localTime, zonedToUtc } from "../src/features/schedule/occurrences";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The schedule: the teacher adds a weekly lesson for a class, moves one date
// and cancels another; the student (in another time zone) sees the lessons in
// their own time with "Join"; the class's settings list the lesson times.
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

test.describe("schedule", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const classes: string[] = [];
  test.afterAll(async () => {
    await removeTempStudents();
    if (classes.length) await admin().from("classes").delete().in("id", classes);
  });

  test("weekly lessons, one moved, one cancelled, seen by the student", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    await db.from("profiles").update({ timezone: "Europe/Moscow" }).eq("id", pupil.id);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: tp } = await db.from("profiles").select("timezone").eq("id", teacherId).single();
    const teacherZone = tp!.timezone;
    const className = `E2E расписание ${stamp}`;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: className }).select("id").single();
    classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });

    const first = addDays(localDate(new Date(), teacherZone), 1); // tomorrow, teacher's time
    await login(page, teacher.email!, teacher.password!);
    await page.goto("/ru/schedule");
    await page.getByRole("button", { name: "Новое занятие" }).click();
    const form = page.getByRole("dialog", { name: "Новое занятие" });
    await form.getByLabel("Класс").selectOption({ label: className });
    await form.getByLabel("Начиная с").or(form.getByLabel("Дата")).fill(first);
    await form.getByLabel("Время").fill("18:00");
    await form.getByRole("button", { name: "45 минут" }).click();
    await form.getByRole("checkbox", { name: "Повторять каждую неделю" }).click();
    await form.getByRole("button", { name: "Добавить в расписание" }).click();
    await expect(page.getByText("Занятие добавлено")).toBeVisible();

    // Upcoming: tomorrow 18:00–18:45 (teacher's time).
    const upcoming = page.getByRole("region", { name: "Ближайшие занятия" });
    const slot = upcoming.getByRole("button", { name: new RegExp(className) }).first();
    await expect(slot).toContainText("18:00–18:45");

    // Move tomorrow's lesson to 19:30.
    await slot.click();
    let dialog = page.getByRole("dialog", { name: new RegExp(className) });
    await expect(dialog).toContainText("Каждую неделю");
    await dialog.getByRole("button", { name: "Действия с занятием" }).click();
    await page.getByRole("menuitem", { name: "Перенести это занятие" }).click();
    const move = page.getByRole("dialog", { name: "Перенести занятие" });
    await move.getByLabel("Время").fill("19:30");
    await move.getByRole("button", { name: "Перенести" }).click();
    await expect(page.getByText("Занятие перенесено")).toBeVisible();
    await expect(upcoming.getByRole("button", { name: new RegExp(className) }).first()).toContainText("19:30–20:15");

    // A week later: the usual 18:00 — cancel just that one.
    const second = addDays(first, 7);
    await page.goto(`/ru/schedule?view=week&date=${second}`);
    const week = page.getByRole("region", { name: "Календарь" });
    const next = week.getByRole("button", { name: new RegExp(className) });
    await expect(next).toHaveCount(1);
    await expect(next).toContainText("18:00–18:45");
    await next.click();
    dialog = page.getByRole("dialog", { name: new RegExp(className) });
    await dialog.getByRole("button", { name: "Действия с занятием" }).click();
    await page.getByRole("menuitem", { name: "Отменить это занятие" }).click();
    await page.getByRole("alertdialog").getByRole("button", { name: "Отменить это занятие" }).click();
    await expect(page.getByText("Занятие отменено")).toBeVisible();
    await expect(week.getByRole("button", { name: new RegExp(className) })).toHaveCount(0);
    // Two weeks later it is there again.
    await page.goto(`/ru/schedule?view=week&date=${addDays(first, 14)}`);
    await expect(page.getByRole("region", { name: "Календарь" }).getByRole("button", { name: new RegExp(className) })).toHaveCount(1);

    // The class's settings list the lesson time.
    await page.goto(`/ru/classes/${cls!.id}?tab=settings`);
    await expect(page.getByRole("region", { name: "Расписание класса" })).toContainText("в 18:00");

    // The student, in Moscow time: tomorrow's (moved) lesson in their own time, with "Join".
    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto("/ru/schedule");
    const moved = zonedToUtc(first, "19:30", teacherZone);
    const studentSlot = sp.getByRole("region", { name: "Ближайшие занятия" }).getByRole("button", { name: new RegExp(className) }).first();
    await expect(studentSlot).toContainText(`${localTime(moved, "Europe/Moscow")}–`);
    await studentSlot.click();
    await expect(sp.getByRole("dialog").getByRole("link", { name: "Присоединиться" })).toBeVisible();
    await expect(sp.getByRole("button", { name: "Новое занятие" })).toHaveCount(0);
    await sp.context().close();
  });
});
