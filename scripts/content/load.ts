// Loads a course from content/<course>/ into the platform: a library course
// owned by CONTENT_OWNER_ID (a teacher account), hidden until published.
//
//   node --env-file=.env.local scripts/content/run.mjs english-a1             new lessons only
//   node --env-file=.env.local scripts/content/run.mjs english-a1 --only 1.1,1.2 --replace
//   node --env-file=.env.local scripts/content/run.mjs english-a1 --check      only check, load nothing
//   CONTENT_OWNER_ID=<teacher> … --as <new uuid>                                  a copy under another id
//
// A lesson already on the platform is left alone (the teacher may have edited
// it in the builder) unless --replace is given.
import { createClient } from "@supabase/supabase-js";
import { getDefinition } from "@/features/exercises/definitions";
import { problems, size, type ContentLesson } from "../../content/kit";

export type CourseFile = {
  id: string;
  title: string;
  language: string;
  level: string;
  description: string;
  modules: { title: string; lessons: (ContentLesson & { slug: string })[] }[];
};

const args = process.argv.slice(2);
const name = args.find((a) => !a.startsWith("--"));
const flag = (f: string) => args.includes(f);
const onlyArg = args[args.indexOf("--only") + 1];
const only = args.includes("--only") && onlyArg ? new Set(onlyArg.split(",")) : null;
// --as <course id>: load a copy under another id (e.g. into a test account to look at it).
const asArg = args.includes("--as") ? args[args.indexOf("--as") + 1] : undefined;

async function main() {
  if (!name || !/^[a-z0-9-]+$/.test(name)) throw new Error("Which course? e.g. english-a1");
  const { course: original } = (await import(`../../content/${name}/course.ts`)) as { course: CourseFile };
  const course = asArg ? { ...original, id: asArg, title: `${original.title} (copy)` } : original;

  // 1) Check everything first: nothing is loaded if one lesson is broken.
  let broken = 0;
  course.modules.forEach((m, mi) =>
    m.lessons.forEach((l, li) => {
      const n = `${mi + 1}.${li + 1}`;
      const p = problems(l);
      const s = size(l);
      console.log(`${p.length ? "✗" : "✓"} ${n} ${l.title} — in class ${s.inClass}, homework ${s.homework}`);
      p.forEach((x) => console.log(`    ${x}`));
      broken += p.length;
    }),
  );
  if (broken) throw new Error(`${broken} problem(s): nothing loaded`);
  if (flag("--check")) return;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  const owner = process.env.CONTENT_OWNER_ID;
  if (!url || !secret || !owner) throw new Error("Needs NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY and CONTENT_OWNER_ID in .env.local");
  const db = createClient(url, secret, { auth: { persistSession: false } });
  const must = <T>(r: { data: T; error: { message: string } | null }, what: string): T => {
    if (r.error) throw new Error(`${what}: ${r.error.message}`);
    return r.data;
  };
  const one = <T>(r: { data: T; error: { message: string } | null }, what: string): NonNullable<T> => {
    const data = must(r, what);
    if (data === null || data === undefined) throw new Error(`${what}: nothing came back`);
    return data;
  };

  // 2) The course: a library course, hidden until it is published.
  const existing = must(await db.from("courses").select("id, is_published").eq("id", course.id).maybeSingle(), "course");
  must(
    await db.from("courses").upsert({
      id: course.id,
      owner_id: owner,
      title: course.title,
      language: course.language,
      level: course.level,
      description: course.description,
      is_library: true,
      is_published: existing?.is_published ?? false,
    }),
    "save course",
  );

  for (const [mi, m] of course.modules.entries()) {
    // 3) Modules and lessons are found by their place in the course.
    let mod = must(await db.from("modules").select("id").eq("course_id", course.id).eq("position", mi).maybeSingle(), "module");
    if (!mod) mod = one(await db.from("modules").insert({ course_id: course.id, title: m.title, position: mi }).select("id").single(), "add module");
    else must(await db.from("modules").update({ title: m.title }).eq("id", mod.id), "rename module");

    for (const [li, l] of m.lessons.entries()) {
      const n = `${mi + 1}.${li + 1}`;
      if (only && !only.has(n)) continue;
      let row = must(await db.from("lessons").select("id").eq("module_id", mod.id).eq("position", li).maybeSingle(), "lesson");
      if (row) {
        const { count } = await db.from("sections").select("id", { count: "exact", head: true }).eq("lesson_id", row.id);
        if ((count ?? 0) > 0 && !flag("--replace")) {
          console.log(`· ${n} ${l.title}: already there, left as it is (--replace to load again)`);
          continue;
        }
        must(await db.from("lessons").update({ title: l.title }).eq("id", row.id), "rename lesson");
        must(await db.from("sections").delete().eq("lesson_id", row.id), "clear lesson");
      } else {
        row = one(await db.from("lessons").insert({ module_id: mod.id, title: l.title, position: li }).select("id").single(), "add lesson");
      }

      // 4) Sections, blocks, keys — in the lesson's order.
      for (const [si, s] of l.sections.entries()) {
        const sec = one(
          await db.from("sections").insert({ lesson_id: row.id, title: s.title, position: si, kind: s.kind }).select("id").single(),
          `${n} section`,
        );
        for (const [bi, b] of s.blocks.entries()) {
          const def = getDefinition(b.type)!;
          const content = def.publicContent && b.key ? def.publicContent(b.content, b.key) : b.content;
          const ex = one(
            await db.from("exercises").insert({ section_id: sec.id, type: b.type, title: b.title, content, position: bi }).select("id").single(),
            `${n} block ${bi + 1}`,
          );
          if (def.keySchema) must(await db.from("exercise_keys").insert({ exercise_id: ex.id, answer_key: b.key }), `${n} key ${bi + 1}`);
        }
      }
      console.log(`↑ ${n} ${l.title}: loaded`);
    }
  }
  console.log(`Done: https://linguaroom.vercel.app/ru/courses/${course.id}`);
}

main().catch((e) => {
  console.error(String(e instanceof Error ? e.message : e));
  process.exit(1);
});
