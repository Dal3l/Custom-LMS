import { createClient } from "@supabase/supabase-js";
import { createTempStudent, removeTempStudents } from "./temp-student";
import { expect as baseExpect, test, type BrowserContextOptions, type Page } from "@playwright/test";

// The dictionary: the teacher adds a word for the student during a lesson; the
// student finds it in their Dictionary, adds a word selected in the lesson text
// (transcription filled in by the dictionary service), edits and deletes words.
// Nobody adds words to someone else's dictionary.
const teacher = { email: process.env.E2E_TEACHER_EMAIL, password: process.env.E2E_TEACHER_PASSWORD };
const secret = process.env.SUPABASE_SECRET_KEY;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const expect = baseExpect.configure({ timeout: 20_000 });
const admin = () => createClient(url!, secret!, { auth: { persistSession: false } });

async function login(page: Page, email: string, password: string) {
  await page.goto("/ru/login");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Войти", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/dashboard/);
}

/** Selects a word in the (visible) lesson text, like a mouse would. */
async function select(page: Page, word: string) {
  await page.evaluate((w) => {
    const roots = [...document.querySelectorAll<HTMLElement>(".rich-text")].filter((el) => el.offsetParent !== null);
    for (const root of roots) {
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
    }
  }, word);
}

test.describe("dictionary", () => {
  test.skip(!teacher.email || !teacher.password || !secret || !url || !anonKey, "test accounts not configured");
  test.setTimeout(180_000);
  const cleanup = { courses: [] as string[], classes: [] as string[] };
  test.afterAll(async () => {
    await removeTempStudents();
    if (!secret || !url) return;
    if (cleanup.classes.length) await admin().from("classes").delete().in("id", cleanup.classes);
    if (cleanup.courses.length) await admin().from("courses").delete().in("id", cleanup.courses);
  });

  test("teacher and student add words", async ({ page, browser }, testInfo) => {
    const options = testInfo.project.use as BrowserContextOptions;
    const stamp = `${Date.now()}-${testInfo.project.name}`;
    const db = admin();
    const pupil = await createTempStudent(stamp, `Ученик ${stamp}`);
    const other = await createTempStudent(`${stamp}-other`, "Чужой Ученик");
    const { data: users } = await db.auth.admin.listUsers({ perPage: 200 });
    const teacherId = users.users.find((u) => u.email === teacher.email)!.id;
    const { data: course } = await db.from("courses").insert({ owner_id: teacherId, title: `E2E словарь ${stamp}`, language: "en" }).select("id").single();
    cleanup.courses.push(course!.id);
    const { data: mod } = await db.from("modules").insert({ course_id: course!.id, title: "Unit", position: 0 }).select("id").single();
    const { data: lesson } = await db.from("lessons").insert({ module_id: mod!.id, title: "Fruit", position: 0 }).select("id").single();
    const { data: section } = await db.from("sections").insert({ lesson_id: lesson!.id, title: "Reading", position: 0 }).select("id").single();
    await db.from("exercises").insert({
      section_id: section!.id,
      type: "text",
      title: "Read",
      content: { doc: { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "I eat an orange every morning." }] }] } },
      position: 0,
    });
    const { data: cls } = await db.from("classes").insert({ teacher_id: teacherId, name: `E2E словарь ${stamp}` }).select("id").single();
    cleanup.classes.push(cls!.id);
    await db.from("class_members").insert({ class_id: cls!.id, student_id: pupil.id });
    await db.from("class_lessons").insert({ class_id: cls!.id, lesson_id: lesson!.id });
    const lessonUrl = `/ru/classes/${cls!.id}/lessons/${lesson!.id}`;

    // The dictionary service answers with a transcription (stand-in: it is not reachable from tests).
    const fakeLookup = async (p: Page) =>
      p.route("**/api/dictionary?**", (route) =>
        route.fulfill({ json: { ok: true, transcription: "/ˈɒr.ɪndʒ/", audioUrl: null, example: "" } }),
      );

    // The teacher, during the lesson: Dictionary → a word for the student.
    await login(page, teacher.email!, teacher.password!);
    await fakeLookup(page);
    await page.goto(lessonUrl);
    await page.getByRole("button", { name: "Словарь" }).filter({ visible: true }).first().click();
    const dialog = page.getByRole("dialog", { name: "Слово в словарь ученика" });
    await dialog.getByLabel("Слово или фраза").fill("apple");
    await dialog.getByLabel("Перевод").fill("яблоко");
    await dialog.getByRole("button", { name: "Добавить в словарь" }).click();
    await expect(page.getByText("Добавлено в словарь 1 ученика")).toBeVisible();

    // The student sees it in their Dictionary, marked "from the teacher", with the lesson.
    const sp = await (await browser.newContext(options)).newPage();
    await login(sp, pupil.email, pupil.password);
    await fakeLookup(sp);
    await sp.goto("/ru/vocabulary");
    const words = sp.getByRole("list", { name: "Словарь" });
    const apple = words.getByRole("listitem").filter({ hasText: "apple" });
    await expect(apple).toContainText("яблоко");
    await expect(apple).toContainText("от учителя");
    await expect(apple).toContainText("Fruit");
    await expect(apple.getByRole("button", { name: "Послушать «apple»" })).toBeVisible();

    // In the lesson: select a word → "To dictionary" → transcription comes by itself.
    await sp.goto(lessonUrl);
    await expect(sp.getByText("I eat an orange every morning.").filter({ visible: true })).toBeVisible();
    await select(sp, "orange");
    await sp.getByRole("button", { name: "В словарь" }).click();
    const own = sp.getByRole("dialog", { name: "Новое слово" });
    await expect(own.getByLabel("Слово или фраза")).toHaveValue("orange");
    await expect(own.getByLabel("Транскрипция")).toHaveValue("/ˈɒr.ɪndʒ/");
    await own.getByLabel("Перевод").fill("апельсин");
    await own.getByRole("button", { name: "Добавить в словарь" }).click();
    await expect(sp.getByText("«orange» добавлено в словарь")).toBeVisible();

    // Back in the Dictionary: both words; search; edit; delete.
    await sp.goto("/ru/vocabulary");
    await expect(sp.getByText("2 слова из всех классов").filter({ visible: true })).toBeVisible();
    const orange = words.getByRole("listitem").filter({ hasText: "orange" });
    await expect(orange).toContainText("/ˈɒr.ɪndʒ/");
    await expect(orange).toContainText("апельсин");
    await sp.getByRole("searchbox", { name: "Найти слово или перевод" }).fill("яблок");
    await expect(words.getByRole("listitem")).toHaveCount(1);
    await sp.getByRole("searchbox", { name: "Найти слово или перевод" }).fill("");
    await orange.getByRole("button", { name: "Действия со словом «orange»" }).click();
    await sp.getByRole("menuitem", { name: "Изменить" }).click();
    const edit = sp.getByRole("dialog", { name: "Изменить слово" });
    await edit.getByLabel("Пример").fill("Oranges are sweet.");
    await edit.getByRole("button", { name: "Сохранить" }).click();
    await expect(orange).toContainText("Oranges are sweet.");
    await apple.getByRole("button", { name: "Действия со словом «apple»" }).click();
    await sp.getByRole("menuitem", { name: "Удалить" }).click();
    await sp.getByRole("alertdialog").getByRole("button", { name: "Удалить" }).click();
    await expect(apple).toHaveCount(0);

    // Adding the same word again: it is already there.
    await sp.getByRole("button", { name: "Добавить слово" }).click();
    const again = sp.getByRole("dialog", { name: "Новое слово" });
    await again.getByLabel("Слово или фраза").fill("Orange");
    await again.getByRole("button", { name: "Добавить в словарь" }).click();
    await expect(sp.getByText("«Orange» уже есть в словаре")).toBeVisible();

    // Nobody adds to someone else's dictionary or reads it.
    const as = createClient(url!, anonKey!, { auth: { persistSession: false } });
    await as.auth.signInWithPassword({ email: pupil.email, password: pupil.password });
    const { error: forged } = await as.from("vocabulary").insert({ student_id: other.id, term: "spam", language: "en" });
    expect(forged).not.toBeNull();
    await db.from("vocabulary").insert({ student_id: other.id, term: "secret", language: "en", added_by: other.id });
    const { data: seen } = await as.from("vocabulary").select("term");
    expect(seen!.map((w) => w.term)).toEqual(["orange"]);

    await sp.context().close();
  });
});
