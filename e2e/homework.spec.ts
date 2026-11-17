import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// Homework end to end: the lesson's homework part → the teacher sends it from
// the class lesson with a due date → the student finds it under "Homework",
// answers (checked right away, saved), hands it in → read-only; the teacher sees
// "handed in 1 of 1", opens the answers (tries, first try), leaves a comment,
// marks it reviewed; the student sees the comment and "Reviewed". Also: the
// student can't see homework before it's sent.
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

test.describe("homework", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("send, do, hand in", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp);
    const [teacherId, studentId] = [await userId(teacher.email!), pupil.id];
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E домашка ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Animals", position: 0 }).select("id").single();
    await db.from("sections").insert({ lesson_id: lesson!.id, title: "In class", position: 0, kind: "lesson" });
    const { data: hwSection } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "At home", position: 0, kind: "homework" }).select("id").single();
    const { data: tf } = await db
      .from("exercises")
      .insert({
        section_id: hwSection!.id,
        type: "true_false",
        title: "Penguins",
        content: {
          statements: [{ id: "st000001", text: "Penguins can fly" }],
          // Formatted text on top of the exercise: a heading and bold words.
          attachment: {
            kind: "text",
            doc: {
              type: "doc",
              content: [
                { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "About penguins" }] },
                { type: "paragraph", content: [{ type: "text", text: "Penguins ", marks: [{ type: "bold" }] }, { type: "text", text: "live in Antarctica." }] },
              ],
            },
          },
        },
        position: 0,
      })
      .select("id, course_id")
      .single();
    await db.from("exercise_keys").insert({ exercise_id: tf!.id, course_id: tf!.course_id, answer_key: { answers: { st000001: false } } });
    await db.from("exercises").insert({ section_id: hwSection!.id, type: "open_answer", title: "Write about a penguin", content: { minWords: 3 }, position: 1 });
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E домашка ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    // Before it is sent the student sees no homework, not even through the database.
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, pupil.email, pupil.password);
    await sp.goto(lessonUrl);
    await expect(sp.getByRole("heading", { level: 1, name: "Animals" })).toBeVisible();
    const tabs = sp.getByRole("navigation", { name: "Урок и домашка" });
    await expect(tabs).toHaveCount(0);
    await expect(sp.getByText("Penguins can fly")).toHaveCount(0);

    // The teacher opens the lesson's Homework (its own group of sections), sees
    // the exercises, ticks both and sends them with a due date.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(lessonUrl);
    // (a column on the right on wide screens, part of the top strip on phones)
    await page.getByRole("button", { name: /At home/ }).filter({ visible: true }).first().click();
    await expect(page.getByText("Penguins can fly")).toBeVisible();
    await expect(page.getByText("Write about a penguin")).toBeVisible();
    for (const box of await page.getByRole("checkbox", { name: "В домашку" }).all()) await box.click();
    await page.getByRole("button", { name: "Отправить домашку · 2" }).click();
    const sheet = page.getByRole("dialog", { name: "Отправить домашку" });
    await expect(sheet.getByText("Выбрано 2 задания")).toBeVisible();
    await sheet.getByLabel("Сдать до (необязательно)").fill("2030-01-15T18:00");
    await sheet.getByRole("button", { name: "Отправить 2 задания" }).click();
    await expect(page.getByText("Домашка отправлена")).toBeVisible();
    // The sent exercises are marked; the sent homework opens from under the sections.
    await expect(page.getByText("Отправлено", { exact: true })).toHaveCount(2);
    await page.getByRole("button", { name: "Отправленная домашка · сдали 0 из 1" }).click();
    await expect(sheet.getByText("Сдали: 0 из 1")).toBeVisible();
    await page.keyboard.press("Escape");

    // The student finds it under "Homework" (new), opens it.
    await sp.goto("/ru/homework");
    const item = sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true });
    await expect(item).toContainText("Новое");
    await item.click();
    await expect(tabs.getByRole("link", { name: "Домашка" })).toHaveAttribute("aria-current", "page");
    // No "done X of Y" while working (it would be out of date); just the work.
    await expect(sp.getByText(/Выполнено \d из 2/).filter({ visible: true })).toHaveCount(0);
    await expect(sp.getByRole("heading", { name: "About penguins" })).toBeVisible();
    await expect(sp.locator("strong", { hasText: "Penguins" })).toBeVisible();

    // Answers are checked right away and saved.
    await sp.getByRole("radio", { name: "True", exact: true }).click();
    await sp.getByRole("button", { name: "Проверить" }).click();
    await expect(sp.getByLabel("Ответ неправильный")).toBeVisible();
    await sp.getByRole("radio", { name: "False", exact: true }).click();
    await sp.getByRole("button", { name: "Проверить" }).click();
    await expect(sp.getByLabel("Ответ правильный")).toBeVisible();
    await sp.getByRole("button", { name: /Дальше|At home/ }).first().isVisible();
    await sp.getByRole("textbox", { name: "Ваш ответ" }).fill("Penguins swim very well");
    await expect
      .poll(async () => {
        const { data } = await db.from("homework_answers").select("answer").eq("student_id", studentId).neq("exercise_id", tf!.id);
        return JSON.stringify(data ?? []);
      })
      .toContain("Penguins swim very well");
    await sp.reload();
    await expect(sp.getByRole("textbox", { name: "Ваш ответ" })).toHaveValue("Penguins swim very well");

    // The tries are counted, the first one kept for the teacher.
    const { data: saved } = await db.from("homework_answers").select("attempts, first_result").eq("exercise_id", tf!.id).single();
    expect(saved!.attempts).toBe(2);
    expect((saved!.first_result as { correct: boolean }).correct).toBe(false);

    // Hand in → read-only; the server refuses later changes.
    await sp.getByRole("button", { name: "Сдать" }).click();
    // Just "are you sure?", no counting.
    await expect(sp.getByRole("alertdialog")).toContainText("После сдачи ответы уже нельзя будет изменить.");
    await expect(sp.getByRole("alertdialog")).not.toContainText("Выполнено");
    await sp.getByRole("alertdialog").getByRole("button", { name: "Сдать" }).click();
    await expect(sp.getByText("Домашка сдана", { exact: true })).toBeVisible();
    await expect(sp.getByText("Выполнено 2 из 2").filter({ visible: true })).toBeVisible();
    await expect(sp.getByRole("textbox", { name: "Ваш ответ" })).toHaveCount(0);
    await expect(sp.getByText("Penguins swim very well")).toBeVisible();
    const { data: hw } = await db.from("homeworks").select("id").eq("class_id", cls!.id).single();
    const status = await sp.evaluate(
      async ([homeworkId, exerciseId]) =>
        (
          await fetch("/api/answers", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ homeworkId, exerciseId, answer: { text: "changed" } }),
          })
        ).status,
      [hw!.id, tf!.id],
    );
    expect(status).toBe(403);
    await sp.goto("/ru/homework");
    await expect(sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true })).toContainText("Сдано");

    // The builder opens on the homework part and switches between the parts.
    await page.goto(`/ru/courses/${course!.id}/lessons/${lesson!.id}?part=homework`);
    await expect(page.getByRole("tab", { name: /Домашняя работа/ })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByText("At home").filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText("In class").filter({ visible: true })).toHaveCount(0);
    await page.getByRole("tab", { name: "Урок" }).click();
    await expect(page.getByText("In class").filter({ visible: true }).first()).toBeVisible();
    await page.goto(lessonUrl);

    // The teacher sees it handed in.
    await page.reload();
    await page.getByRole("button", { name: /At home/ }).filter({ visible: true }).first().click();
    await page.getByRole("button", { name: "Отправленная домашка · сдали 1 из 1" }).click();
    await expect(page.getByRole("dialog", { name: "Отправить домашку" }).getByText("Сдали: 1 из 1")).toBeVisible();

    // Review: from the lesson to the student's answers — tries, first try, comment.
    await page.getByRole("dialog", { name: "Отправить домашку" }).getByRole("link", { name: "Открыть ответы" }).click();
    await expect(page).toHaveURL(new RegExp(`/ru/homework/${hw!.id}/${studentId}`));
    await expect(page.getByText("Ждёт проверки", { exact: true })).toBeVisible();
    await expect(page.getByText("2 попытки")).toBeVisible();
    await expect(page.getByText("с первого раза с ошибками")).toBeVisible();
    await page.getByText("Первая попытка").click();
    await expect(page.getByText("Penguins swim very well")).toBeVisible();
    const comments = page.getByRole("textbox", { name: "Комментарий учителя" });
    await expect(comments).toHaveCount(2);
    await comments.last().fill("Nice! Add one more sentence.");
    await expect(page.getByText("Сохранено")).toBeVisible();
    await expect
      .poll(async () => (await db.from("homework_comments").select("body").eq("homework_id", hw!.id)).data?.map((c) => c.body))
      .toEqual(["Nice! Add one more sentence."]);

    // No "Homework" in the teacher's menu: homework lives in the class (its Homework tab).
    await page.goto("/ru/homework");
    await expect(page).toHaveURL(/\/ru\/classes$/);
    await expect(page.getByRole("link", { name: "Домашка", exact: true })).toHaveCount(0);
    await page.goto(`/ru/classes/${cls!.id}?tab=homework`);
    await expect(page.getByRole("tab", { name: /Домашка/ })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByLabel("1 работа ждёт проверки")).toBeVisible();
    const row = page.getByRole("link", { name: /Открыть ответы: .*Animals/ });
    await expect(row).toContainText("Ждёт проверки");
    await row.click();
    // "Mark as reviewed" is at the bottom, after the exercises; then back to the class's homework.
    await page.getByRole("button", { name: "Отметить проверенной" }).click();
    await expect(page.getByText("Домашка отмечена проверенной")).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`/ru/classes/${cls!.id}\\?tab=homework`));
    await expect(row).toContainText("Проверено");
    await row.click();
    await expect(page.getByRole("button", { name: "Снять отметку «Проверено»" })).toBeVisible();

    // The student sees the comment next to the exercise and "Reviewed".
    await sp.goto(`${lessonUrl}?tab=homework`);
    await expect(sp.getByRole("note", { name: "Комментарий учителя" })).toHaveText("Nice! Add one more sentence.");
    await expect(sp.getByText("Учитель проверил домашку.")).toBeVisible();
    await sp.goto("/ru/homework");
    await expect(sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true })).toContainText("Проверено");

    // One homework per lesson: one more exercise goes into the same homework
    // and opens it again for the student (the answers stay).
    await db.from("exercises").insert({ section_id: hwSection!.id, type: "open_answer", title: "One more sentence", content: { minWords: 1 }, position: 2 });
    await page.goto(lessonUrl);
    await page.getByRole("button", { name: /At home/ }).filter({ visible: true }).first().click();
    await expect(page.getByText("One more sentence")).toBeVisible();
    await page.getByRole("checkbox", { name: "В домашку" }).last().click();
    await page.getByRole("button", { name: "Отправить домашку · 1" }).click();
    await page.getByRole("dialog", { name: "Отправить домашку" }).getByRole("button", { name: "Отправить 1 задание" }).click();
    await expect(page.getByText("Домашка отправлена")).toBeVisible();
    const { data: all } = await db.from("homeworks").select("id, homework_exercises(exercise_id), homework_students(submitted_at, reviewed_at)").eq("class_id", cls!.id);
    expect(all).toHaveLength(1);
    expect(all![0].homework_exercises).toHaveLength(3);
    expect(all![0].homework_students[0]).toMatchObject({ submitted_at: null, reviewed_at: null });
    const { count: kept } = await db.from("homework_answers").select("exercise_id", { count: "exact", head: true }).eq("homework_id", hw!.id);
    expect(kept).toBe(2);
    await sp.goto("/ru/homework");
    await expect(sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true })).toContainText("В процессе");
    await sp.getByRole("button", { name: /^Уведомления/ }).click();
    await expect(sp.getByRole("link", { name: /Новые задания в домашке «Animals»/ })).toBeVisible();
    await sp.keyboard.press("Escape");

    // Student: a week after the check, homework moves to the archive (nothing is deleted).
    await db.from("homework_students").update({ submitted_at: new Date().toISOString(), reviewed_at: new Date(Date.now() - 10 * 86400_000).toISOString() }).eq("homework_id", hw!.id);
    await sp.goto("/ru/homework");
    await expect(sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true })).toHaveCount(0);
    await sp.getByRole("link", { name: "Архив" }).click();
    await expect(sp.getByRole("link", { name: new RegExp(`домашка ${stamp}`) }).filter({ visible: true })).toContainText("Проверено");

    await sp.context().close();
  });
});
