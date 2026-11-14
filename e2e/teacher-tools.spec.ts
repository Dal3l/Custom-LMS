import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// Teacher tools in a live lesson, in two browsers: shared highlights in a text,
// the pointer, "Show the right answers" and "Reset answers".
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

/** Selects a word in the lesson text, then presses "Highlight". */
async function highlight(page: Page, word: string) {
  await page.evaluate((w) => {
    const root = document.querySelector(".rich-text")!;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const i = node.textContent!.indexOf(w);
      if (i >= 0) {
        const range = document.createRange();
        range.setStart(node, i);
        range.setEnd(node, i + w.length);
        const sel = window.getSelection()!;
        sel.removeAllRanges();
        sel.addRange(range);
        return;
      }
    }
  }, word);
  await page.getByRole("button", { name: "Выделить" }).click();
}

test.describe("teacher tools", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("shared highlights, pointer, right answers, reset", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const [teacherId, studentId] = await Promise.all([userId(teacher.email!), userId(student.email!)]);

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E инструменты ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Tools", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Reading", position: 0 }).select("id").single();
    await db.from("exercises").insert({
      section_id: section!.id,
      type: "text",
      title: "Read",
      content: { doc: { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "Penguins live in Antarctica and eat fish." }] }] } },
      position: 0,
    });
    const { data: ex } = await db
      .from("exercises")
      .insert({
        section_id: section!.id,
        type: "true_false",
        title: "True or false?",
        content: { statements: [{ id: "st000001", text: "Penguins eat fish" }] },
        position: 1,
      })
      .select("id, course_id")
      .single();
    await db.from("exercise_keys").insert({ exercise_id: ex!.id, course_id: ex!.course_id, answer_key: { answers: { st000001: true } } });
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E инструменты ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, student.email!, student.password!);
    await sp.goto(lessonUrl);
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    const bar = page.getByRole("region", { name: "Ученики на уроке" });
    await expect(bar.getByText("На связи")).toBeVisible();
    await expect(bar.getByRole("button", { name: /секция 1/ })).toBeVisible();
    // No "My view": the teacher looks at the student's work.
    await expect(bar.getByRole("button", { name: "Мой просмотр" })).toHaveCount(0);

    // Highlights are shared both ways (teacher: blue, student: orange).
    await highlight(page, "Antarctica");
    await expect(sp.locator('mark[data-color="#bfdbfe"]')).toHaveText("Antarctica");
    await highlight(sp, "fish");
    await expect(page.locator('mark[data-color="#fed7aa"]')).toHaveText("fish");
    // …and kept after reloading.
    await sp.reload();
    await expect(sp.locator('mark[data-color="#bfdbfe"]')).toHaveText("Antarctica");
    await expect(sp.locator('mark[data-color="#fed7aa"]')).toHaveText("fish");

    // The pointer: the student sees it over the exercise the teacher points at.
    await bar.getByRole("button", { name: "Указка" }).click();
    const card = page.locator(`#exercise-${ex!.id}`);
    const box = (await card.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.move(box.x + box.width / 2 + 10, box.y + box.height / 2);
    await expect(sp.getByRole("img", { name: "Указка учителя" })).toBeVisible();

    // The student answers wrongly; the teacher shows the right answers.
    await sp.getByRole("radio", { name: "False", exact: true }).click();
    await sp.getByRole("button", { name: "Проверить" }).click();
    await expect(sp.getByLabel("Ответ неправильный")).toBeVisible();
    await card.getByRole("button", { name: "Действия с заданием" }).click();
    await page.getByRole("menuitem", { name: "Показать правильные ответы" }).click();
    const right = sp.getByRole("region", { name: "Правильные ответы" });
    await expect(right).toBeVisible();
    await expect(right.getByRole("radio", { name: "True", exact: true })).toHaveAttribute("aria-checked", "true");

    // Reset: the student's answer and the right answers are gone; the teacher sees no answer.
    await card.getByRole("button", { name: "Действия с заданием" }).click();
    await page.getByRole("menuitem", { name: "Сбросить ответы" }).click();
    await expect(page.getByText("Ещё не ответил")).toBeVisible();
    await expect(right).toHaveCount(0);
    await expect(sp.getByRole("radio", { name: "False", exact: true })).toHaveAttribute("aria-checked", "false");
    await sp.reload();
    await expect(sp.getByRole("radio", { name: "False", exact: true })).toHaveAttribute("aria-checked", "false");
    await sp.context().close();
  });
});
