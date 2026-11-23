import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";
import { buildCategorize } from "../src/features/exercises/types/categorize/schema";
import { buildGapInput } from "../src/features/exercises/types/gap_input/schema";
import { createTempStudent, removeTempStudents } from "./temp-student";

// The teacher's answer hints in a class lesson: the right answer above a gap on
// hover, the right option lightly green, the right group of a word green.
// Students never get them. The lightbulb turns them off.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
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

test.describe("teacher's answer hints", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("hints for the teacher only", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const teacherId = await userId(teacher.email!);

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E подсказки ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Hints", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Practice", position: 0 }).select("id").single();

    const gaps = buildGapInput("I [didn't / did not] see it.", false);
    const sort = buildCategorize({
      salt: "salt1234",
      groups: [
        { id: "grp00001", title: "Fruit", items: "apple\npear" },
        { id: "grp00002", title: "Animals", items: "dog\ncat" },
      ],
    });
    const exercises = [
      { type: "gap_input", title: "Complete", ...gaps },
      {
        type: "multiple_choice",
        title: "Choose",
        content: {
          questions: [
            {
              id: "qqqqqqq1",
              text: "Capital of France?",
              multiple: false,
              options: [
                { id: "oooooo01", text: "London" },
                { id: "oooooo02", text: "Paris" },
              ],
            },
          ],
        },
        key: { correct: { qqqqqqq1: ["oooooo02"] } },
      },
      { type: "categorize", title: "Sort", ...sort },
    ];
    for (const [position, e] of exercises.entries()) {
      const { data: ex } = await db
        .from("exercises")
        .insert({ section_id: section!.id, type: e.type, title: e.title, content: e.content, position })
        .select("id, course_id")
        .single();
      await db.from("exercise_keys").insert({ exercise_id: ex!.id, course_id: ex!.course_id, answer_key: e.key });
    }
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E подсказки ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    // The student: nothing of the answers in the page at all.
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);
    await expect(sp.getByText("Capital of France?")).toBeVisible();
    expect(await sp.content()).not.toContain("did not");
    await expect(sp.getByRole("tooltip")).toHaveCount(0);

    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    await expect(page.getByText("Capital of France?")).toBeVisible();

    // Gap: all accepted answers above it on hover.
    const gap = page.getByRole("textbox", { name: /Пропуск 1/ });
    if (testInfo.project.name === "phone") await gap.tap({ force: true });
    else await gap.hover();
    await expect(page.getByRole("tooltip", { name: "didn't / did not" })).toBeVisible();

    // Choice: the right option is lightly green.
    await expect(page.getByRole("radio", { name: "Paris" })).toHaveClass(/emerald/);
    await expect(page.getByRole("radio", { name: "London" })).not.toHaveClass(/emerald/);

    // Sorting: the word under the pointer lights up its group.
    const dog = page.getByRole("button", { name: "dog", exact: true });
    if (testInfo.project.name === "phone") await dog.tap({ force: true });
    else await dog.hover();
    await expect(page.getByRole("group", { name: "Animals" })).toHaveClass(/emerald/);
    await expect(page.getByRole("group", { name: "Fruit" })).not.toHaveClass(/emerald/);
    if (testInfo.project.name === "desktop") await page.screenshot({ path: testInfo.outputPath("hints.png"), fullPage: true });

    // The lightbulb turns the hints off (and on again).
    const tool = page.getByRole("button", { name: /Подсказки с ответами: вкл/ }).first();
    if (!(await tool.isVisible())) return; // narrow screens: the tools are in the top strip
    await tool.click();
    await expect(page.getByRole("radio", { name: "Paris" })).not.toHaveClass(/emerald/);
    await page.getByRole("button", { name: /Подсказки с ответами: выкл/ }).first().click();
    await expect(page.getByRole("radio", { name: "Paris" })).toHaveClass(/emerald/);
  });
});
