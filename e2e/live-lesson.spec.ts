import { createClient } from "@supabase/supabase-js";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// A live lesson in two browsers: the lesson opens for the student by itself,
// the teacher sees the student online and their answers as they come,
// "Show to students" moves the student's screen. Needs both test accounts and
// SUPABASE_SECRET_KEY.
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

test.describe("live lesson", () => {
  test.skip(!teacher.email || !teacher.password || !student.email || !student.password || !secret || !url, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("auto-open, presence, live answers, show to students", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const [teacherId, studentId] = await Promise.all([userId(teacher.email!), userId(student.email!)]);

    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E живой ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Live one", position: 0 }).select("id").single();
    for (const [i, title] of ["Warm-up", "Practice"].entries()) {
      const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title, position: i }).select("id").single();
      const { data: ex } = await db
        .from("exercises")
        .insert({
          section_id: section!.id,
          type: "true_false",
          title: `${title} question`,
          content: { statements: [{ id: "st000001", text: `${title}: snow is hot` }] },
          position: 0,
        })
        .select("id, course_id")
        .single();
      await db.from("exercise_keys").insert({ exercise_id: ex!.id, course_id: ex!.course_id, answer_key: { answers: { st000001: false } } });
    }
    const className = `E2E живой класс ${stamp}`;
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: className }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: studentId });

    // Student waits on the class page.
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, student.email!, student.password!);
    await sp.goto(`/ru/classes/${cls!.id}`);
    await expect(sp.getByRole("heading", { level: 1, name: className })).toBeVisible();

    // Teacher opens the lesson → it opens for the student by itself.
    await login(page, teacher.email!, teacher.password!);
    await page.goto(`/ru/classes/${cls!.id}`);
    await page.getByRole("button", { name: "Открыть урок" }).click();
    await page.getByRole("dialog").getByRole("button", { name: new RegExp(`E2E живой ${stamp}`) }).click();
    await page.getByRole("dialog").getByRole("button", { name: /Live one/ }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Live one" })).toBeVisible();
    await expect(sp.getByRole("heading", { level: 1, name: "Live one" })).toBeVisible();

    // The teacher sees the student online, in section 1, and connected.
    const bar = page.getByRole("region", { name: "Ученики на уроке" });
    await expect(bar.getByText("На связи")).toBeVisible();
    await expect(bar.getByRole("button", { name: /секция 1/ })).toBeVisible();

    // The student answers (no check yet) → the teacher sees it.
    await sp.getByRole("radio", { name: "True", exact: true }).click();
    await expect(page.getByRole("radio", { name: "True", exact: true })).toHaveAttribute("aria-checked", "true");
    await expect(page.getByText("Не проверено")).toBeVisible();
    // …and checks it → the teacher sees the verdict.
    await sp.getByRole("button", { name: "Проверить" }).click();
    await expect(sp.getByLabel("Ответ неправильный")).toBeVisible();
    await expect(page.getByLabel("Ответ неправильный")).toBeVisible();

    // The teacher loses the connection; the student changes the answer meanwhile;
    // back online, the teacher sees the new answer.
    await page.context().setOffline(true);
    await expect(bar.getByText("Нет связи — переподключаемся…")).toBeVisible();
    await sp.getByRole("radio", { name: "False", exact: true }).click();
    await sp.getByRole("button", { name: "Проверить" }).click();
    await expect(sp.getByLabel("Ответ правильный")).toBeVisible();
    await page.context().setOffline(false);
    await expect(bar.getByText("На связи")).toBeVisible();
    await expect(page.getByLabel("Ответ правильный")).toBeVisible();

    // "Show to students" on the exercise of section 2 → the student's screen moves there.
    await page.getByRole("navigation").getByRole("button", { name: /Practice/ }).click();
    await page.getByRole("button", { name: "Действия с заданием" }).click();
    await page.getByRole("menuitem", { name: "Показать ученикам" }).click();
    await expect(page.getByText("Задание показано ученикам")).toBeVisible();
    await expect(sp.getByRole("heading", { level: 2, name: /Practice/ })).toBeVisible();
    await expect(bar.getByRole("button", { name: /секция 2/ })).toBeVisible();

    // The teacher finishes section 1 → the student sees the check mark.
    await page.getByRole("navigation").getByRole("button", { name: /Warm-up/ }).click();
    await page.getByRole("button", { name: "Завершить секцию" }).click();
    await expect(sp.getByRole("navigation").getByLabel("Секция завершена")).toHaveCount(1);

    // The teacher's own view is interactive again.
    await bar.getByRole("button", { name: "Мой просмотр" }).click();
    await expect(page.getByRole("radio", { name: "True", exact: true })).toHaveAttribute("aria-checked", "false");
    await sp.context().close();
  });
});
