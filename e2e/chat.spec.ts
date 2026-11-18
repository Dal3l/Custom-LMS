import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The class chat: live messages both ways, "read" marks, a picture, deleting,
// catching up after a lost connection, the unread badge on the class card and
// on the lesson's Chat button; someone from outside the class reads nothing.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });
// A tiny PNG picture.
const PNG = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==", "base64");

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("class chat", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url || !anonKey, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { classes: [] as string[], courses: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("teacher and student talk", async ({ page, browser }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp, `Ученик ${stamp}`);
    const outsider = await createTempStudent(`${stamp}-x`);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const className = `E2E чат ${stamp}`;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: className }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E чат ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Talk", position: 0 }).select("id").single();
    await db.from("sections").insert({ lesson_id: lesson!.id, title: "Warm-up", position: 0 });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const chatUrl = `/ru/classes/${cls!.id}?tab=chat`;

    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(chatUrl);
    const studentLog = sp.getByRole("log", { name: "Сообщения" }).filter({ visible: true });
    await expect(studentLog).toContainText("Пока нет сообщений");

    // The teacher writes; the student sees it without reloading; "read" comes back.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(chatUrl);
    const teacherLog = page.getByRole("log", { name: "Сообщения" }).filter({ visible: true });
    await page.getByRole("textbox", { name: "Сообщение" }).filter({ visible: true }).fill("Hello, class!");
    await page.keyboard.press("Enter");
    await expect(teacherLog).toContainText("Hello, class!");
    await expect(studentLog).toContainText("Hello, class!");
    await expect(studentLog).toContainText(/учитель/i);
    await expect(teacherLog.getByLabel("Прочитано")).toBeVisible();

    // The student answers with a picture; the teacher sees it live.
    await sp.locator('input[type="file"]').filter({ has: sp.locator("xpath=.") }).first().setInputFiles({ name: "dot.png", mimeType: "image/png", buffer: PNG });
    await sp.getByRole("textbox", { name: "Сообщение" }).filter({ visible: true }).fill("My homework photo");
    await sp.getByRole("button", { name: "Отправить" }).filter({ visible: true }).click();
    await expect(teacherLog).toContainText("My homework photo");
    await expect(teacherLog.getByRole("img", { name: "dot.png" })).toBeVisible();

    // The teacher deletes it: "Message deleted" for both.
    const photo = teacherLog.locator("div.group").filter({ hasText: "My homework photo" });
    await photo.getByRole("button", { name: "Действия с сообщением" }).click();
    await page.getByRole("menuitem", { name: "Удалить" }).click();
    await expect(studentLog).toContainText("Сообщение удалено");
    await expect(studentLog).not.toContainText("My homework photo");

    // Lost connection: what was written meanwhile arrives after reconnecting.
    await sp.context().setOffline(true);
    await expect(sp.getByText("Нет связи — переподключаемся…").filter({ visible: true })).toBeVisible();
    await page.getByRole("textbox", { name: "Сообщение" }).filter({ visible: true }).fill("Did you get this?");
    await page.keyboard.press("Enter");
    await expect(teacherLog).toContainText("Did you get this?");
    await sp.context().setOffline(false);
    await expect(studentLog).toContainText("Did you get this?");
    // (the student's "read" mark is saved before leaving the chat)
    await expect
      .poll(async () => {
        const { data: last } = await db.from("chat_messages").select("created_at").eq("class_id", cls!.id).order("created_at", { ascending: false }).limit(1).single();
        const { data: mark } = await db.from("chat_reads").select("last_read_at").eq("class_id", cls!.id).eq("user_id", pupil.id).maybeSingle();
        return Boolean(mark && last && mark.last_read_at >= last.created_at);
      })
      .toBe(true);

    // Unread: the class card shows it; so does the Chat button in the lesson.
    await sp.goto("/ru/classes");
    await page.getByRole("textbox", { name: "Сообщение" }).filter({ visible: true }).fill("See you on Monday");
    await page.keyboard.press("Enter");
    await expect(teacherLog).toContainText("See you on Monday");
    await sp.reload();
    await expect(sp.getByRole("link", { name: "1 новое сообщение в чате" })).toBeVisible();
    await sp.goto(`/ru/classes/${cls!.id}/lessons/${lesson!.id}`);
    const chatButton = sp.getByRole("button", { name: "Чат: 1 новое сообщение" });
    await expect(chatButton).toBeVisible();
    await chatButton.click();
    await expect(sp.getByRole("dialog", { name: `Чат · ${className}` }).getByRole("log")).toContainText("See you on Monday");
    // Read now: the number is gone.
    await sp.keyboard.press("Escape");
    await expect(sp.getByRole("button", { name: "Чат", exact: true })).toBeVisible();

    // Someone outside the class reads nothing.
    const as = createClient(url!, anonKey!, { auth: { persistSession: false } });
    await as.auth.signInWithPassword({ email: outsider.email, password: outsider.password });
    const { data: seen } = await as.from("chat_messages").select("id").eq("class_id", cls!.id);
    expect(seen).toEqual([]);
    const { error: forged } = await as.from("chat_messages").insert({ class_id: cls!.id, body: "spam" });
    expect(forged).not.toBeNull();

    await sp.context().close();
  });
});
