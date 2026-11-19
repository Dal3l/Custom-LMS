import { describe, expect, it } from "vitest";
import { glossaryContentSchema, parseWordList } from "@/features/exercises/types/glossary/schema";

describe("words block", () => {
  it("reads a pasted list in the usual ways of writing it", () => {
    expect(
      parseWordList(
        [
          "apple — яблоко",
          "to commute - ездить на работу - I commute by bus.",
          "well-known – известный",
          "screen time: время у экрана",
          "binge-watch\tсмотреть запоем\tI binge-watched the series.",
          "",
          "   ",
          "lowkey",
        ].join("\n"),
      ),
    ).toEqual([
      { term: "apple", meaning: "яблоко", example: "" },
      { term: "to commute", meaning: "ездить на работу", example: "I commute by bus." },
      { term: "well-known", meaning: "известный", example: "" },
      { term: "screen time", meaning: "время у экрана", example: "" },
      { term: "binge-watch", meaning: "смотреть запоем", example: "I binge-watched the series." },
      { term: "lowkey", meaning: "", example: "" },
    ]);
  });

  it("keeps the content in bounds", () => {
    const word = { id: "abc12345", term: "apple", meaning: "яблоко", example: "" };
    expect(glossaryContentSchema.safeParse({ words: [word] }).success).toBe(true);
    expect(glossaryContentSchema.safeParse({ words: [] }).success).toBe(false);
    expect(glossaryContentSchema.safeParse({ words: Array.from({ length: 61 }, () => word) }).success).toBe(false);
    expect(glossaryContentSchema.safeParse({ words: [{ ...word, term: "x".repeat(201) }] }).success).toBe(false);
  });
});
