import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { reviewCard } from "@/features/trainer/fsrs";
import { checkWritten, normalizeAnswer, wordStatus } from "@/features/trainer/ladder";

const now = new Date("2026-11-17T10:00:00Z");
const DAY = 86_400_000;

describe("word status", () => {
  it("learning until a session takes it through all steps; then learned, and 'review' when it is time", () => {
    expect(wordStatus(0, now, now)).toBe("learning");
    expect(wordStatus(4, new Date(now.getTime() + DAY), now)).toBe("learned");
    expect(wordStatus(4, new Date(now.getTime() - DAY), now)).toBe("review");
  });
});

describe("FSRS", () => {
  it("good answers push the next review further and further; a lapse brings it close", async () => {
    let card = await reviewCard(null, 3, now);
    let t = now;
    const gaps: number[] = [];
    for (let i = 0; i < 3; i++) {
      gaps.push(card.dueAt.getTime() - t.getTime());
      t = card.dueAt;
      card = await reviewCard(JSON.parse(JSON.stringify(card)), 3, t);
    }
    expect(gaps[1]).toBeGreaterThan(gaps[0]);
    expect(gaps[2]).toBeGreaterThan(gaps[1]);
    const lapsed = await reviewCard(JSON.parse(JSON.stringify(card)), 1, card.dueAt);
    expect(lapsed.dueAt.getTime() - card.dueAt.getTime()).toBeLessThan(gaps[2]);
    expect(lapsed.lapses).toBe(1);
  });
});

describe("checking a written word", () => {
  it("ignores case, spaces, punctuation around, apostrophe kinds and ё", () => {
    expect(normalizeAnswer("  Don’t  ")).toBe("don't");
    expect(checkWritten("Ёлка!", "елка")).toBe("right");
    expect(checkWritten("look  after", "Look after")).toBe("right");
  });

  it("one typo in a longer word is 'almost'; short words must be exact", () => {
    expect(checkWritten("kitchn", "kitchen")).toBe("almost");
    expect(checkWritten("cot", "cat")).toBe("wrong");
    expect(checkWritten("", "cat")).toBe("wrong");
    expect(checkWritten("butterfli", "butterfly")).toBe("almost");
    expect(checkWritten("bitterfli", "butterfly")).toBe("wrong");
  });
});
