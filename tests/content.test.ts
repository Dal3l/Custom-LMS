import { describe, expect, it } from "vitest";
import { getDefinition } from "@/features/exercises/definitions";
import { md, problems, size } from "../content/kit";
import { course } from "../content/english-a1/course";

// Course content: every lesson loads (passes the schemas) and fits the lesson template.
describe("course content", () => {
  const lessons = course.modules.flatMap((m, mi) => m.lessons.map((l, li) => ({ n: `${mi + 1}.${li + 1}`, l })));

  it.each(lessons)("$n passes the checks", ({ l }) => {
    expect(problems(l)).toEqual([]);
  });

  it.each(lessons)("$n fits the template: 9–13 blocks in class, 3–5 at home", ({ l }) => {
    const s = size(l);
    expect(s.inClass).toBeGreaterThanOrEqual(9);
    expect(s.inClass).toBeLessThanOrEqual(13);
    expect(s.homework).toBeGreaterThanOrEqual(3);
    expect(s.homework).toBeLessThanOrEqual(5);
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
    expect(JSON.stringify(again)).toBe(JSON.stringify(lessons[0]!.l));
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
