import { describe, expect, it } from "vitest";
import { getDefinition } from "@/features/exercises/definitions";
import { items, md, minItems, problems, size } from "../content/kit";
import path from "node:path";
import { resolveAssets } from "../content/assets";
import { course as a1 } from "../content/english-a1/course";
import { course as a2 } from "../content/english-a2/course";
import { course as b1 } from "../content/english-b1/course";

// Every course with its folder and the lesson size its template asks for (blocks in class).
const courses = [
  { name: "english-a1", course: a1, inClass: [12, 30], bigTasks: false },
  { name: "english-a2", course: a2, inClass: [20, 40], bigTasks: true },
  { name: "english-b1", course: b1, inClass: [20, 40], bigTasks: true },
] as const;

// Course content: every lesson loads (passes the schemas) and fits the lesson template.
describe("course content", () => {
  // Pictures resolved as for loading (a made-up owner): every file must exist.
  const owner = "00000000-0000-4000-8000-000000000000";
  const root = path.resolve("content/english-a1");
  const lessons = courses.flatMap(({ name, course, inClass, bigTasks }) =>
    course.modules.flatMap((m, mi) =>
      m.lessons.map((l, li) => ({
        n: `${name} ${mi + (course.firstModule ?? 1)}.${li + 1}`,
        inClass,
        bigTasks,
        l: resolveAssets(l, { owner, root: path.resolve(`content/${name}`) }).lesson,
      })),
    ),
  );

  it.each(lessons)("$n passes the checks", ({ l }) => {
    expect(problems(l)).toEqual([]);
  });

  it.each(lessons)("$n fits the template: blocks in class, 5–14 at home", ({ l, inClass }) => {
    const s = size(l);
    expect(s.inClass).toBeGreaterThanOrEqual(inClass[0]);
    expect(s.inClass).toBeLessThanOrEqual(inClass[1]);
    expect(s.homework).toBeGreaterThanOrEqual(5);
    expect(s.homework).toBeLessThanOrEqual(14);
  });

  // From A2 on, tasks are big enough to practise: 6+ gaps, 5+ statements, 4+ questions…
  it.each(lessons.filter((x) => x.bigTasks))("$n: every task has enough questions", ({ l }) => {
    const small = l.sections
      .flatMap((s) => s.blocks)
      .filter((b) => (items(b) ?? 99) < (minItems(b) ?? 0))
      .map((b) => `${b.title}: ${items(b)} (min ${minItems(b)})`);
    expect(small).toEqual([]);
  });

  it.each(lessons)("$n: the right answers of every exercise are accepted", ({ l }) => {
    for (const b of l.sections.flatMap((s) => s.blocks)) {
      const def = getDefinition(b.type)!;
      if (!def.grading) continue;
      const content = def.contentSchema.parse(b.content);
      const key = def.keySchema!.parse(b.key);
      const result = def.grading.check(content, key, def.grading.solution(content, key));
      expect(result.correct, `${l.title}: ${b.title}`).toBe(true);
    }
  });

  it("lesson ids are stable: the same lesson builds the same way twice", async () => {
    const again = (await import("../content/english-a1/m01/l1")).default;
    expect(JSON.stringify(resolveAssets(again, { owner, root }).lesson)).toBe(JSON.stringify(lessons[0]!.l));
  });

  it("turns the little markdown into editor text", () => {
    expect(md("## Hi\n\nI'm **Leo**, *hi*\nbye\n\n- a\n- b\n\n1. x\n2. y")).toEqual({
      type: "doc",
      content: [
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hi" }] },
        {
          type: "paragraph",
          content: [
            { type: "text", text: "I'm " },
            { type: "text", text: "Leo", marks: [{ type: "bold" }] },
            { type: "text", text: ", " },
            { type: "text", text: "hi", marks: [{ type: "italic" }] },
            { type: "hardBreak" },
            { type: "text", text: "bye" },
          ],
        },
        {
          type: "bulletList",
          content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "a" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "b" }] }] },
          ],
        },
        {
          type: "orderedList",
          attrs: { start: 1 },
          content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "x" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "y" }] }] },
          ],
        },
      ],
    });
  });
});
