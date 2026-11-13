import { describe, expect, it } from "vitest";
import { normalizeAnswer, summarize } from "@/features/exercises/checking";
import { gapCount, parseGaps, wrapAsGap } from "@/features/exercises/gaps";

describe("normalizeAnswer", () => {
  it("ignores extra spaces and capital letters by default", () => {
    expect(normalizeAnswer("  Do   NOT ")).toBe("do not");
  });
  it("treats typographic apostrophes, quotes and dashes like plain ones", () => {
    expect(normalizeAnswer("don’t")).toBe(normalizeAnswer("don't"));
    expect(normalizeAnswer("well–known")).toBe("well-known");
    expect(normalizeAnswer("«Hi»")).toBe('"hi"');
  });
  it("keeps capital letters when case matters", () => {
    expect(normalizeAnswer("London", true)).toBe("London");
    expect(normalizeAnswer("london", true)).not.toBe(normalizeAnswer("London", true));
  });
  it("works for Cyrillic incl. Kazakh letters", () => {
    expect(normalizeAnswer("ҚАЗАҚША")).toBe("қазақша");
  });
});

describe("summarize", () => {
  it("counts unanswered parts as not right", () => {
    expect(summarize({ a: true, b: null })).toEqual({ parts: { a: true, b: null }, score: 0.5, correct: false });
    expect(summarize({ a: true, b: true }).correct).toBe(true);
    expect(summarize({}).correct).toBe(false);
  });
});

describe("parseGaps", () => {
  it("splits text and gaps, numbering gaps by position", () => {
    const parts = parseGaps("Penguins [are] birds. I [don't / do not] fly.");
    expect(parts).toEqual([
      { t: "text", text: "Penguins " },
      { t: "gap", gap: { id: "g1", options: ["are"], marked: [] } },
      { t: "text", text: " birds. I " },
      { t: "gap", gap: { id: "g2", options: ["don't", "do not"], marked: [] } },
      { t: "text", text: " fly." },
    ]);
  });

  it("reads * marks for dropdown gaps", () => {
    const [, gap] = parseGaps("She [is/*are/am]");
    expect(gap).toEqual({ t: "gap", gap: { id: "g1", options: ["is", "are", "am"], marked: [1] } });
  });

  it("keeps empty brackets and line breaks as text", () => {
    expect(gapCount(parseGaps("a [] b"))).toBe(0);
    expect(gapCount(parseGaps("a [x\ny] b"))).toBe(0);
    expect(parseGaps("line 1\n[x] line 2")[0]).toEqual({ t: "text", text: "line 1\n" });
  });

  it("handles text without gaps and a gap at the very start", () => {
    expect(parseGaps("no gaps")).toEqual([{ t: "text", text: "no gaps" }]);
    expect(parseGaps("[Hi] there")[0]).toMatchObject({ t: "gap" });
  });
});

describe("wrapAsGap", () => {
  it("wraps the selected word without the spaces around it", () => {
    expect(wrapAsGap("I am happy", 1, 5)).toEqual({ text: "I [am] happy", cursor: 6 });
  });
  it("refuses empty selections and selections that already contain brackets", () => {
    expect(wrapAsGap("abc", 1, 1)).toBeNull();
    expect(wrapAsGap("a [b] c", 0, 7)).toBeNull();
  });
});
