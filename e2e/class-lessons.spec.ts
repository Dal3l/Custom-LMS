import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// Teacher opens lessons in a class; the student sees only those lessons and can
// check answers. Needs E2E_TEACHER_*, E2E_STUDENT_* and SUPABASE_SECRET_KEY.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const student = { email: process.env.E2E_STUDENT_EMAIL, password: process.env.E2E_STUDENT_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const expect = baseExpect.configure({ timeout: 20_000 });

function admin() {
  return createClient(url!, secret!, { auth: { persistSession: false } });
}

async function userId(email: string) {
  const { data } = await admin().auth.admin.listUsers({ perPage: 200 });
  const user = data.users.find((u) => u.email === email);
  if (!user) throw new Error(`no user ${email}`);
  return user.id;
}

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

test.describe("lessons in a class", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);

  const cleanup: { courses: string[]; classes: string[] } = { courses: [], classes: [] };
  test.afterAll(async () => {
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("open a lesson, the student sees only it and checks answers; next lesson", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const teacherId = await userId(teacher.email!);
    const studentId = await userId(student.email!);

    // Test data: a course with two lessons (one true/false statement each) and a class with the student.
    const { data: course } = await db
      .from("courses")
      .insert({ owner_id: teacherId, title: `E2E уроки ${stamp}`, language: "en" })
      .select("id")
      .single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit 1", position: 0 }).select("id").single();
    const lessonIds: string[] = [];
    const exerciseIds: string[] = [];
    for (const [i, title] of ["Greetings", "Numbers", "Colours"].entries()) {
      const { data: lesson } = await db
        .from("lessons")
        .insert({ module_id: mod!.id, title, position: i })
        .select("id")
        .single();
      lessonIds.push(lesson!.id);
      const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Warm-up", position: 0 }).select("id").single();
      await db.from("sections").insert({ lesson_id: lesson!.id, title: "Practice", position: 1 });
      const { data: ex } = await db
        .from("exercises")
        .insert({
          section_id: section!.id,
          type: "true_false",
          title: "True or false?",
          content: { statements: [{ id: "st000001", text: `${title}: the sky is green` }] },
          position: 0,
        })
        .select("id, course_id")
        .single();
      exerciseIds.push(ex!.id);
      await db.from("exercise_keys").insert({ exercise_id: ex!.id, course_id: ex!.course_id, answer_key: { answers: { st000001: false } } });
    }
    const className = `E2E класс уроков ${stamp}`;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: className, kind: "group" }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });

    // --- Student: no lessons yet, and a lesson URL that was not opened is not available.
    const studentPage = await (await browser.newContext(options)).newPage();
    await login(studentPage, student.email!, student.password!);
    await studentPage.goto(`/ru/classes/${cls!.id}`);
    await expect(studentPage.getByText("Уроки появятся здесь после занятий с учителем.")).toBeVisible();
    await studentPage.goto(`/ru/classes/${cls!.id}/lessons/${lessonIds[0]}`);
    await expect(studentPage.getByRole("heading", { name: "Страница не найдена" })).toBeVisible();
    // Saving an answer for a lesson that was not opened is refused by the server.
    const refused = await studentPage.evaluate(
      async ([classId, exerciseId]) => {
        const res = await fetch("/api/answers", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ classId, exerciseId, answer: { values: { st000001: false } }, check: true }),
        });
        return res.status;
      },
      [cls!.id, exerciseIds[0]!],
    );
    expect(refused).toBe(403);

    // --- Teacher: Open lesson → My courses → course → lesson.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/classes/${cls!.id}`);
    await page.getByRole("button", { name: "Открыть урок" }).click();
    await page.getByRole("dialog").getByRole("button", { name: new RegExp(`E2E уроки ${stamp}`) }).click();
    await page.getByRole("dialog").getByRole("button", { name: /Greetings/ }).click();
    await expect(page).toHaveURL(new RegExp(`/classes/${cls!.id}/lessons/${lessonIds[0]}$`));
    await expect(page.getByRole("heading", { level: 1, name: "Greetings" })).toBeVisible();
    await expect(page.getByText("Идёт сейчас")).toBeVisible();

    // --- Student: the lesson is in the class, marked as going on; answers are checked.
    await studentPage.goto(`/ru/classes/${cls!.id}`);
    await studentPage.getByRole("link", { name: /Greetings/ }).click();
    await expect(studentPage.getByRole("heading", { level: 1, name: "Greetings" })).toBeVisible();
    await studentPage.getByRole("radio", { name: "True", exact: true }).click();
    await studentPage.getByRole("button", { name: "Проверить" }).click();
    await expect(studentPage.getByLabel("Ответ неправильный")).toBeVisible();
    await studentPage.getByRole("radio", { name: "False", exact: true }).click();
    await studentPage.getByRole("button", { name: "Проверить" }).click();
    await expect(studentPage.getByLabel("Ответ правильный")).toBeVisible();
    await expect(studentPage.getByText("Ответы сохраняются")).toBeVisible();
    // The answer and its verdict are kept after reloading the page.
    await studentPage.reload();
    await expect(studentPage.getByRole("radio", { name: "False", exact: true })).toHaveAttribute("aria-checked", "true");
    await expect(studentPage.getByLabel("Ответ правильный")).toBeVisible();
    // The other lessons stay hidden.
    await studentPage.goto(`/ru/classes/${cls!.id}/lessons/${lessonIds[1]}`);
    await expect(studentPage.getByRole("heading", { name: "Страница не найдена" })).toBeVisible();

    // --- Teacher: finish section 1, then the lesson at the end of the last section.
    await page.getByRole("button", { name: "Завершить секцию" }).click();
    await expect(page.getByRole("button", { name: /Секция завершена/ }).first()).toBeVisible();
    await expect(page.getByRole("navigation").getByLabel("Секция завершена")).toHaveCount(1);
    await expect(page.getByRole("button", { name: "Завершить урок" })).toHaveCount(0); // only in the last section
    await page.getByRole("button", { name: /Дальше/ }).click();
    await page.getByRole("button", { name: "Завершить урок" }).click();
    await expect(page.getByText("Урок завершён")).toBeVisible();

    // "Next lesson" appears and starts on this course; Greetings has a check mark.
    await page.getByRole("button", { name: "Следующий урок" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog.getByRole("heading", { name: `E2E уроки ${stamp}` })).toBeVisible();
    await expect(dialog.getByRole("button", { name: /Greetings/ }).getByLabel("Пройден")).toBeVisible();
    await dialog.getByRole("button", { name: /Numbers/ }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Numbers" })).toBeVisible();

    // "Course lessons" shows all lessons; opening another one does NOT finish Numbers.
    await page.getByRole("button", { name: "Уроки курса" }).click();
    await expect(dialog.getByRole("button", { name: /Colours/ })).toBeVisible();
    await dialog.getByRole("button", { name: /Colours/ }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Colours" })).toBeVisible();

    // --- Class page: Colours going on, Numbers not finished, Greetings finished.
    await page.goto(`/ru/classes/${cls!.id}`);
    const list = page.getByRole("list", { name: "Уроки класса" });
    await expect(list.getByRole("link")).toHaveCount(3);
    await expect(list.getByRole("link").first()).toContainText("Colours");
    await expect(list.getByRole("link", { name: /Numbers/ }).getByLabel("Не завершён")).toBeVisible();
    await expect(list.getByRole("link", { name: /Greetings/ }).getByLabel("Пройден")).toBeVisible();

    // --- Student sees the three lessons and the finished section of Greetings.
    await studentPage.goto(`/ru/classes/${cls!.id}`);
    await expect(studentPage.getByRole("list", { name: "Уроки класса" }).getByRole("link")).toHaveCount(3);
    await studentPage.getByRole("link", { name: /Greetings/ }).click();
    await expect(studentPage.getByRole("navigation").getByLabel("Секция завершена")).toHaveCount(1);
    await expect(studentPage.getByRole("button", { name: "Завершить секцию" })).toHaveCount(0);

    // A choice made without pressing "Check" is saved as well.
    await studentPage.goto(`/ru/classes/${cls!.id}/lessons/${lessonIds[1]}`);
    await studentPage.getByRole("radio", { name: "True", exact: true }).click();
    await expect(studentPage.getByText("Ответы сохраняются")).toBeVisible();
    await expect.poll(async () => {
      const { data } = await db.from("class_answers").select("answer").eq("class_id", cls!.id).eq("exercise_id", exerciseIds[1]!);
      return JSON.stringify(data?.[0]?.answer ?? null);
    }).toContain('"st000001":true');
    await studentPage.reload();
    await expect(studentPage.getByRole("radio", { name: "True", exact: true })).toHaveAttribute("aria-checked", "true");
    await expect(studentPage.getByLabel("Ответ правильный")).toHaveCount(0);
    await studentPage.context().close();
  });

  test("library: a published course can be viewed, previewed and copied", async ({ page }, testInfo) => {
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const teacherId = await userId(teacher.email!);
    const title = `E2E библиотека ${stamp}`;
    const { data: course } = await db
      .from("courses")
      .insert({ owner_id: teacherId, title, language: "en", level: "A1", is_library: true, is_published: true })
      .select("id")
      .single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit 1", position: 0 }).select("id").single();
    await db.from("lessons").insert({ module_id: mod!.id, title: "Hello", position: 0 });

    await login(page, teacher.email!, teacher.password!);
    await page.goto("/ru/library");
    await page.getByRole("link", { name: new RegExp(title) }).click();
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    await page.getByRole("link", { name: /Hello/ }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Hello" })).toBeVisible();
    await page.getByRole("link", { name: "К курсу" }).click();
    await page.getByRole("button", { name: "Скопировать в мои курсы" }).click();
    await expect(page).toHaveURL(/\/ru\/courses\/[0-9a-f-]{36}$/);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    cleanup.courses.push(page.url().split("/").pop()!);
    await expect(page.getByRole("link", { name: "Hello" })).toBeVisible();
  });
});
