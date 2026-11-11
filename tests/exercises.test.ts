import { describe, expect, it } from "vitest";
import { EXERCISE_TYPES, exerciseMeta, isExerciseTypeId } from "@/features/exercises/catalog";
import { DEFINITIONS, getDefinition } from "@/features/exercises/definitions";
import { textContentSchema } from "@/features/exercises/types/text/schema";
import { exerciseNumber, SECTION_TEMPLATES } from "@/features/lessons/sections";
import en from "../messages/en.json";

const doc = (content: unknown[]) => ({ doc: { type: "doc", content } });

describe("exercise catalog", () => {
  it("has all 15 types from the spec with names in the translations", () => {
    expect(EXERCISE_TYPES).toHaveLength(15);
    for (const type of EXERCISE_TYPES) {
      expect(en.exercises.types[type.id as keyof typeof en.exercises.types]?.name, type.id).toBeTruthy();
    }
  });

  it("every available type has a definition, and only those", () => {
    for (const type of EXERCISE_TYPES) {
      expect(Boolean(DEFINITIONS[type.id]), type.id).toBe(type.available);
    }
  });

  it("recognises type ids", () => {
    expect(isExerciseTypeId("text")).toBe(true);
    expect(isExerciseTypeId("hack")).toBe(false);
    expect(exerciseMeta("gap_input")?.group).toBe("auto");
    expect(getDefinition("nope")).toBeNull();
  });

  it("new exercises start valid", () => {
    for (const def of Object.values(DEFINITIONS)) {
      const { content, key } = def!.create();
      expect(def!.contentSchema.safeParse(content).success).toBe(true);
      if (def!.keySchema) expect(def!.keySchema.safeParse(key).success).toBe(true);
    }
  });
});

describe("text exercise content", () => {
  it("accepts headings, lists and formatting the editor produces", () => {
    const value = doc([
      { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "My weekend" }] },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "On " },
          { type: "text", text: "Saturday", marks: [{ type: "bold" }, { type: "highlight", attrs: { color: "#fef08a" } }] },
        ],
      },
      { type: "orderedList", attrs: { start: 1, type: null }, content: [{ type: "listItem", content: [{ type: "paragraph" }] }] },
      { type: "paragraph" },
    ]);
    expect(textContentSchema.safeParse(value).success).toBe(true);
  });

  it("rejects things the editor cannot produce", () => {
    expect(textContentSchema.safeParse(doc([{ type: "script", content: [] }])).success).toBe(false);
    expect(textContentSchema.safeParse(doc([{ type: "image", attrs: { src: "http://x" } }])).success).toBe(false);
    expect(
      textContentSchema.safeParse(doc([{ type: "paragraph", content: [{ type: "text", text: "a", marks: [{ type: "link", attrs: { href: "javascript:x" } }] }] }]))
        .success,
    ).toBe(false);
    expect(
      textContentSchema.safeParse(doc([{ type: "paragraph", content: [{ type: "text", text: "a", marks: [{ type: "highlight", attrs: { color: "red; background:url(x)" } }] }] }]))
        .success,
    ).toBe(false);
    expect(textContentSchema.safeParse(doc([{ type: "heading", attrs: { level: 1 } }])).success).toBe(false);
  });
});

describe("lesson numbering and templates", () => {
  it("numbers exercises as section.exercise", () => {
    expect(exerciseNumber(0, 0)).toBe("1.1");
    expect(exerciseNumber(2, 4)).toBe("3.5");
  });
  it("offers the 8 section templates from the spec", () => {
    expect(SECTION_TEMPLATES).toEqual(["Warm-up", "Vocabulary", "Grammar", "Listening", "Reading", "Speaking", "Writing", "Homework"]);
  });
});
