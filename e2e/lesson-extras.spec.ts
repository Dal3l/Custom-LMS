import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The rest of the live lesson: tools column, the shared whiteboard, the timer,
// a PDF shown in the lesson with pen notes (student → teacher), the whiteboard
// block, and the "A lesson is on — join" banner. Two browsers.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const student = { email: process.env.E2E_STUDENT_EMAIL, password: process.env.E2E_STUDENT_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

async function userId(email: string) {
  const { data } = await admin().auth.admin.listUsers({ perPage: 200 });
  return data.users.find((u) => u.email === email)!.id;
}

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

/** Draws a short stroke across the middle of a drawing surface. */
async function scribble(page: Page, surface: ReturnType<Page["locator"]>) {
  await surface.scrollIntoViewIfNeeded();
  const box = (await surface.boundingBox())!;
  const y = box.y + box.height * 0.6;
  await page.mouse.move(box.x + box.width * 0.3, y);
  await page.mouse.down();
  for (let i = 1; i <= 8; i++) await page.mouse.move(box.x + box.width * (0.3 + i * 0.04), y + i * 2);
  await page.mouse.up();
}

test.describe("lesson extras", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(240_000);
  const cleanup = { courses: [] as string[], classes: [] as string[], files: [] as string[] };
  test.afterAll(async () => {
    if (!secret || !url) return;
    const db = admin();
    if (cleanup.classes.length) await db.from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await db.from("courses").delete().in("id", cleanup.courses);
    if (cleanup.files.length) await db.storage.from("lesson-media").remove(cleanup.files);
  });

  test("whiteboard, timer, PDF notes, board block, join banner", async ({ page, browser }, testInfo) => {
    // Drawing with a mouse: run on the computer only.
    test.skip(testInfo.project.name !== "desktop", "mouse drawing");
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const [teacherId, studentId] = await Promise.all([userId(teacher.email!), userId(student.email!)]);

    // A PDF in storage.
    const pdfPath = `${teacherId}/${crypto.randomUUID()}.pdf`;
    const pdfBytes = readFileSync("e2e/fixtures/worksheet-3pages.pdf");
    await db.storage.from("lesson-media").upload(pdfPath, pdfBytes, { contentType: "application/pdf" });
    cleanup.files.push(pdfPath);

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E доска ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Extras", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Work", position: 0 }).select("id").single();
    const { data: pdfEx } = await db
      .from("exercises")
      .insert({
        section_id: section!.id,
        type: "file",
        title: "Worksheet",
        content: { file: { path: pdfPath, name: "worksheet.pdf", size: pdfBytes.length, mime: "application/pdf" }, caption: "" },
        position: 0,
      })
      .select("id")
      .single();
    const { data: blockEx } = await db
      .from("exercises")
      .insert({ section_id: section!.id, type: "whiteboard", title: "Draw here", content: { caption: "" }, position: 1 })
      .select("id")
      .single();
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E доска ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    // The student is on the dashboard; the teacher makes the lesson current
    // → the student gets "A lesson is on — Join".
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, student.email!, student.password!);
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    await page.getByRole("button", { name: "Сделать текущим" }).click();
    await expect(page.getByText("Идёт сейчас").first()).toBeVisible();
    await sp.reload();
    const banner = sp.getByRole("status").filter({ hasText: "Идёт урок в классе" });
    await expect(banner).toBeVisible();
    await banner.getByRole("link", { name: "Присоединиться" }).click();
    await expect(sp.getByRole("heading", { level: 1, name: "Extras" })).toBeVisible();

    // The lesson header is in the top bar; tools are a column, sections a column.
    const tools = page.getByRole("complementary", { name: "Инструменты урока" });
    await expect(tools.getByRole("button", { name: "Указка" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Секции урока" })).toBeVisible();

    // The timer: the teacher starts 5 minutes; the student sees the countdown.
    await tools.getByRole("button", { name: "Таймер" }).click();
    await page.getByRole("spinbutton", { name: "Минуты" }).fill("0");
    await page.getByRole("spinbutton", { name: "Секунды" }).fill("40");
    await page.getByRole("button", { name: "Старт" }).click();
    await page.keyboard.press("Escape");
    await expect(sp.getByRole("button", { name: /Таймер: осталось 0:\d\d/ }).first()).toBeVisible();

    // The whiteboard: the teacher opens it (it opens for the student too) and draws.
    await tools.getByRole("button", { name: "Доска урока" }).click();
    const teacherBoard = page.getByRole("dialog", { name: "Доска урока" });
    await expect(sp.getByRole("dialog", { name: "Доска урока" })).toBeVisible();
    await scribble(page, teacherBoard.getByRole("img", { name: "Доска урока" }));
    const studentBoard = sp.locator(`[data-board="lesson:${lesson!.id}"]`);
    await expect(studentBoard.locator("path")).toHaveCount(1);

    // Text: click on the board, type, Enter.
    const surface = teacherBoard.getByRole("img", { name: "Доска урока" });
    const box = (await surface.boundingBox())!;
    await teacherBoard.getByRole("button", { name: "Текст" }).click();
    await page.mouse.click(box.x + box.width * 0.2, box.y + box.height * 0.2);
    await page.keyboard.type("Hello board");
    await page.keyboard.press("Enter");
    await expect(studentBoard.locator("text")).toHaveText("Hello board");

    // Eraser: rubbing across the middle of the line leaves two pieces.
    await teacherBoard.getByRole("button", { name: "Ластик" }).click();
    const midX = box.x + box.width * 0.44;
    await page.mouse.move(midX, box.y + box.height * 0.5);
    await page.mouse.down();
    await page.mouse.move(midX, box.y + box.height * 0.7, { steps: 6 });
    await page.mouse.up();
    await expect(studentBoard.locator("path")).toHaveCount(2);
    // …and kept: after reopening the student sees the same.
    await sp.keyboard.press("Escape");
    await sp.reload();
    await sp.getByRole("button", { name: "Доска урока" }).first().click();
    await expect(studentBoard.locator("path")).toHaveCount(2);
    await expect(studentBoard.locator("text")).toHaveText("Hello board");

    // Hand: drag the text somewhere else; the student sees it move.
    const before = Number(await studentBoard.locator("text").getAttribute("x"));
    await teacherBoard.getByRole("button", { name: /Рука/ }).click();
    await page.mouse.move(box.x + box.width * 0.22, box.y + box.height * 0.21);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.3, { steps: 6 });
    await page.mouse.up();
    await expect.poll(async () => Number(await studentBoard.locator("text").getAttribute("x"))).toBeGreaterThan(before + 200);
    await page.keyboard.press("Escape");
    await sp.keyboard.press("Escape");

    // The PDF is shown in the lesson; the student writes on page 1 with the pen;
    // the teacher sees it.
    await expect(sp.getByRole("img", { name: "Страница 1" })).toBeVisible();
    // Every page keeps its full height (A4: taller than wide).
    for (const n of [1, 2, 3]) {
      const pageBox = (await page.getByRole("img", { name: `Страница ${n}` }).boundingBox())!;
      expect(pageBox.height).toBeGreaterThan(pageBox.width);
    }
    await sp.getByRole("button", { name: "Ручка" }).first().click();
    await scribble(sp, sp.getByRole("img", { name: "Страница 1" }));
    await expect(page.locator(`[data-board="file:${pdfEx!.id}:1"] path`)).toHaveCount(1);

    // The whiteboard block: the student draws, the teacher sees it.
    const block = sp.locator(`[data-board="block:${blockEx!.id}"]`);
    await scribble(sp, block);
    await expect(page.locator(`[data-board="block:${blockEx!.id}"] path`)).toHaveCount(1);
    await sp.context().close();
  });
});
