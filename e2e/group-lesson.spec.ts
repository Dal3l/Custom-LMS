import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// A group lesson with two students: highlights of each student reach the
// teacher, the students bar stays on screen, switching students keeps the
// place, the group overview, and the student's "no connection" notice.
// A second student account is created for the test and deleted afterwards.
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
        window.getSelection()!.removeAllRanges();
        window.getSelection()!.addRange(range);
        return;
      }
    }
  }, word);
  await page.getByRole("button", { name: "Выделить" }).click();
}

test.describe("group lesson", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[], users: [] as string[] };
  test.afterAll(async () => {
    if (!secret || !url) return;
    const db = admin();
    if (cleanup.classes.length) await db.from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await db.from("courses").delete().in("id", cleanup.courses);
    for (const id of cleanup.users) await db.auth.admin.deleteUser(id);
  });

  test("two students: highlights, sticky bar, overview, offline notice", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const [teacherId, studentA] = await Promise.all([userId(teacher.email!), userId(student.email!)]);
    const second = { email: `e2e-second-${stamp}@linguaroom.test`, password: "second-pass-1" };
    const { data: created } = await db.auth.admin.createUser({
      email: second.email,
      password: second.password,
      email_confirm: true,
      user_metadata: { role: "student", full_name: "Второй Ученик" },
    });
    const studentB = created.user!.id;
    cleanup.users.push(studentB);
    await db.from("profiles").update({ full_name: "Первый Ученик" }).eq("id", studentA).eq("full_name", "");

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E группа ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Group", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Reading", position: 0 }).select("id").single();
    const long = Array.from({ length: 12 }, (_, i) => ({ type: "paragraph", content: [{ type: "text", text: `Line ${i + 1}: penguins swim.` }] }));
    await db.from("exercises").insert({
      section_id: section!.id,
      type: "text",
      title: "Read",
      content: { doc: { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "Penguins live in Antarctica and eat fish." }] }, ...long] } },
      position: 0,
    });
    const exIds: string[] = [];
    for (const i of [1, 2]) {
      const { data: ex } = await db
        .from("exercises")
        .insert({
          section_id: section!.id,
          type: "true_false",
          title: `Question ${i}`,
          content: { statements: [{ id: "st000001", text: `Statement ${i}` }] },
          position: i,
        })
        .select("id, course_id")
        .single();
      exIds.push(ex!.id);
      await db.from("exercise_keys").insert({ exercise_id: ex!.id, course_id: ex!.course_id, answer_key: { answers: { st000001: true } } });
    }
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E группа ${stamp}`, kind: "group" }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert([
      { class_id: cls!.id, student_id: studentA },
      { class_id: cls!.id, student_id: studentB },
    ]);
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    const a = await (await browser.newContext(options)).newPage();
    await login(a, student.email!, student.password!);
    await a.goto(lessonUrl);
    const b = await (await browser.newContext(options)).newPage();
    await login(b, second.email, second.password);
    await b.goto(lessonUrl);
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    const bar = page.getByRole("region", { name: "Ученики на уроке" });
    await expect(bar.getByRole("button", { name: /Первый Ученик: секция 1/ })).toBeVisible();
    await expect(bar.getByRole("button", { name: /Второй Ученик: секция 1/ })).toBeVisible();

    // Each student's highlight reaches the teacher (looking at that student).
    await highlight(b, "fish");
    await bar.getByRole("button", { name: /Второй Ученик/ }).click();
    await expect(page.locator('mark[data-color="#fed7aa"]')).toHaveText("fish");
    await highlight(a, "Antarctica");
    await bar.getByRole("button", { name: /Первый Ученик/ }).click();
    await expect(page.locator('mark[data-color="#fed7aa"]')).toHaveText("Antarctica");

    // Answers: A wrong on question 1.
    await a.getByRole("radio", { name: "False", exact: true }).first().click();
    await a.getByRole("button", { name: "Проверить" }).first().click();
    await expect(a.getByLabel("Ответ неправильный")).toBeVisible();

    // The bar stays on screen far down the page; switching keeps the place.
    const q2 = page.locator(`#exercise-${exIds[1]}`);
    await q2.scrollIntoViewIfNeeded();
    await page.mouse.wheel(0, 400);
    await expect(bar).toBeInViewport();
    await expect(bar.getByRole("button", { name: "Указка" })).toBeInViewport();
    const before = (await q2.boundingBox())!.y;
    await bar.getByRole("button", { name: /Второй Ученик/ }).click();
    await expect(bar.getByRole("button", { name: /Второй Ученик/ })).toHaveAttribute("aria-pressed", "true");
    const after = (await q2.boundingBox())!.y;
    expect(Math.abs(after - before)).toBeLessThan(40);

    // Overview: who did what; a cell opens that student's answer.
    await bar.getByRole("button", { name: "Обзор" }).click();
    const sheet = page.getByRole("dialog", { name: "Обзор группы" });
    await expect(sheet.getByRole("button", { name: "Первый Ученик, 1.2: неверно" })).toBeVisible();
    await expect(sheet.getByRole("button", { name: "Второй Ученик, 1.2: нет ответа" })).toBeVisible();
    await sheet.getByRole("button", { name: "Первый Ученик, 1.2: неверно" }).click();
    await expect(bar.getByRole("button", { name: /Первый Ученик/ })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByLabel("Ответ неправильный")).toBeVisible();

    // A student who loses the connection sees a notice.
    await b.context().setOffline(true);
    await expect(b.getByText("Нет связи — переподключаемся…", { exact: false })).toBeVisible();
    await b.context().setOffline(false);
    await expect(b.getByText("Нет связи — переподключаемся…", { exact: false })).toHaveCount(0);

    await a.context().close();
    await b.context().close();
  });
});
