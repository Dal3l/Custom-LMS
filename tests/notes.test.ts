import { describe, expect, it } from "vitest";
import { noteDefinition, noteContentSchema } from "@/features/exercises/types/note/schema";
import { exerciseNumbers } from "@/features/lessons/sections";
import { applyNotes, notesToRead } from "@/features/lessons/notes-view";
import type { StudentSection } from "@/features/lessons/queries";

const doc = (text: string) => ({ type: "doc" as const, content: [{ type: "paragraph", content: [{ type: "text", text }] }] });

const sections = (): StudentSection[] => [
  {
    id: "s1",
    title: "Warm-up",
    exercises: [
      { id: "hidden", type: "note", title: "Teacher's note", content: { shown: false, doc: null } },
      { id: "ex", type: "gap_input", title: "Fill in", content: {} },
      { id: "open", type: "note", title: "Rule", content: { shown: true, doc: doc("Rule") } },
    ],
  },
];

describe("notes", () => {
  it("keep their text out of what students read unless shown", () => {
    const create = noteDefinition.create();
    expect(create.content).toEqual({ shown: false, doc: null });
    const key = { doc: doc("Suggested answer: I'm fine") };
    expect(noteDefinition.publicContent!({ shown: false, doc: doc("leaked") }, key)).toEqual({ shown: false, doc: null });
    expect(noteDefinition.publicContent!({ shown: true, doc: null }, key)).toEqual({ shown: true, doc: key.doc });
    expect(noteContentSchema.safeParse({ shown: true, doc: null }).success).toBe(true);
  });

  it("students see only notes shown to them; the eye in class flips a note", () => {
    const plain = applyNotes(sections(), { teacher: false, toggled: [], texts: {} });
    expect(plain[0]!.exercises.map((e) => e.id)).toEqual(["ex", "open"]);
    // The teacher showed the hidden one and hid the open one.
    const flipped = applyNotes(sections(), { teacher: false, toggled: ["hidden", "open"], texts: { hidden: doc("Tip") } });
    expect(flipped[0]!.exercises.map((e) => e.id)).toEqual(["hidden", "ex"]);
    expect(flipped[0]!.exercises[0]!.content).toEqual({ shown: true, defaultShown: false, doc: doc("Tip") });
  });

  it("the teacher keeps every note, marked shown or hidden", () => {
    const view = applyNotes(sections(), { teacher: true, toggled: [], texts: { hidden: doc("Tip"), open: doc("Rule") } });
    expect(view[0]!.exercises.map((e) => [e.id, (e.content as { shown: boolean }).shown])).toEqual([
      ["hidden", false],
      ["ex", undefined],
      ["open", true],
    ]);
  });

  it("texts are read only where needed", () => {
    expect(notesToRead(sections(), { teacher: true, toggled: [] })).toEqual(["hidden", "open"]);
    expect(notesToRead(sections(), { teacher: false, toggled: [] })).toEqual([]);
    expect(notesToRead(sections(), { teacher: false, toggled: ["hidden"] })).toEqual(["hidden"]);
  });

  it("notes get no number", () => {
    expect(exerciseNumbers(1, sections()[0]!.exercises)).toEqual([null, "2.1", null]);
    expect(exerciseNumbers(0, [{ type: "text" }, { type: "note" }, { type: "matching" }])).toEqual(["1.1", null, "1.2"]);
  });
});
