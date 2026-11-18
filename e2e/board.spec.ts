import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Locator, type Page } from "@playwright/test";

// The whiteboard: text made bigger by its corner, changed with a double click,
// undo (button and Ctrl+Z), the endless board (moving around, "show
// everything"), a picture. The teacher works, the student sees it live.
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

async function centre(l: Locator) {
  const b = (await l.boundingBox())!;
  return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
}

async function drag(page: Page, from: { x: number; y: number }, to: { x: number; y: number }) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(to.x, to.y, { steps: 6 });
  await page.mouse.up();
}

test.describe("whiteboard", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[], folders: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    const db = admin();
    for (const folder of cleanup.folders) {
      const { data } = await db.storage.from("board-images").list(folder);
      if (data?.length) await db.storage.from("board-images").remove(data.map((f) => `${folder}/${f.name}`));
    }
    if (cleanup.classes.length) await db.from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await db.from("courses").delete().in("id", cleanup.courses);
  });

  test("text, undo, endless board, picture", async ({ page, browser }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "mouse drawing");
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E доска+ ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Board", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Draw", position: 0 }).select("id").single();
    const { data: ex } = await db
      .from("exercises")
      .insert({ section_id: section!.id, type: "whiteboard", title: "Draw here", content: { caption: "" }, position: 0 })
      .select("id")
      .single();
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E доска+ ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    cleanup.folders.push(`${cls!.id}/${teacherId}`);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id, status: "open" });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;
    const boardSel = `[data-board="block:${ex!.id}"]`;

    const sp = await (await browser.newContext(testInfo.project.use as BrowserContextOptions)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);

    const surface = page.locator(boardSel).filter({ visible: true }).first();
    const seen = sp.locator(boardSel).filter({ visible: true }).first();
    await surface.scrollIntoViewIfNeeded();
    const tools = page.getByRole("toolbar", { name: "Инструменты доски" }).filter({ visible: true }).first();
    const box = (await surface.boundingBox())!;
    const at = (fx: number, fy: number) => ({ x: box.x + box.width * fx, y: box.y + box.height * fy });

    // Text: write it, then one click shows its frame, the corner makes it bigger.
    await tools.getByRole("button", { name: "Текст" }).click();
    await page.mouse.click(at(0.2, 0.2).x, at(0.2, 0.2).y);
    await page.keyboard.type("Hello");
    await page.keyboard.press("Enter");
    await expect(seen.locator("text")).toHaveText("Hello");
    const text = surface.locator("text");
    await page.waitForTimeout(500);
    const c = await centre(text);
    await page.mouse.click(c.x, c.y);
    const corner = surface.locator("[data-selection] rect").nth(4);
    await expect(corner).toBeAttached();
    const from = await centre(corner);
    await drag(page, from, { x: from.x + 160, y: from.y + 60 });
    await expect.poll(async () => Number(await seen.locator("text").getAttribute("font-size"))).toBeGreaterThan(45);

    // A double click lets you add to the text.
    await page.waitForTimeout(500);
    const c2 = await centre(text);
    await page.mouse.dblclick(c2.x, c2.y);
    const input = page.getByRole("textbox", { name: "Текст и Enter" });
    await expect(input).toHaveValue("Hello");
    await input.press("End");
    await page.keyboard.type(" world");
    await page.keyboard.press("Enter");
    await expect(seen.locator("text")).toHaveText("Hello world");

    // Undo: the edit, then the resize.
    const undo = tools.getByRole("button", { name: /Отменить последнее действие/ });
    await undo.click();
    await expect(seen.locator("text")).toHaveText("Hello");
    await undo.click();
    await expect.poll(async () => Number(await seen.locator("text").getAttribute("font-size"))).toBe(30);

    // Ctrl+Z takes back a stroke.
    await tools.getByRole("button", { name: "Ручка" }).click();
    await drag(page, at(0.5, 0.6), at(0.7, 0.7));
    await expect(seen.locator("path")).toHaveCount(1);
    await page.keyboard.press("Control+z");
    await expect(seen.locator("path")).toHaveCount(0);

    // The endless board: the hand moves the view; a stroke drawn there lies
    // outside the first frame; "show everything" brings it into view.
    await tools.getByRole("button", { name: /Рука/ }).click();
    await drag(page, at(0.9, 0.9), at(0.2, 0.3));
    await expect.poll(async () => Number((await surface.getAttribute("viewBox"))!.split(" ")[0])).toBeGreaterThan(500);
    await tools.getByRole("button", { name: "Ручка" }).click();
    await drag(page, at(0.6, 0.6), at(0.8, 0.8));
    await expect(seen.locator("path")).toHaveCount(1);
    const studentTools = sp.getByRole("toolbar", { name: "Инструменты доски" }).filter({ visible: true }).first();
    await studentTools.getByRole("button", { name: "Показать весь рисунок" }).click();
    await expect.poll(async () => Number((await seen.getAttribute("viewBox"))!.split(" ")[2])).toBeGreaterThan(1000);
    await tools.getByRole("button", { name: "Приблизить" }).click();
    await expect(tools.getByText("150%")).toBeVisible();

    // A picture: it appears for the student; undo takes it away.
    await tools.locator('input[type="file"]').setInputFiles("e2e/fixtures/picture.png");
    await expect(seen.locator("image")).toHaveCount(1);
    await expect(seen.locator("image")).toHaveAttribute("href", /board-images/);
    await undo.click();
    await expect(seen.locator("image")).toHaveCount(0);
    await sp.context().close();
  });
});
