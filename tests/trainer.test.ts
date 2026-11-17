import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { reviewCard } from "@/features/trainer/fsrs";
import {
  checkWritten,
  FIRST_CHECK_PAUSE,
  gradeFor,
  modeFor,
  nextDue,
  nextStage,
  normalizeAnswer,
  RETRY_PAUSE,
  STEP_PAUSE,
  wordStatus,
} from "@/features/trainer/ladder";

const now = new Date("2026-11-17T10:00:00Z");
const DAY = 86_400_000;

describe("trainer ladder", () => {
  it("card → choice → write → listen → learned, one step per right answer", () => {
    const can = { choose: true, listen: true };
    expect([0, 1, 2, 3, 4].map((s) => modeFor(s, can))).toEqual(["card", "choice", "write", "listen", "write"]);
    let stage = nextStage(0, 3);
    expect(stage).toBe(1);
    stage = nextStage(stage, 3);
    stage = nextStage(stage, 2); // "almost" still counts
    stage = nextStage(stage, 3);
    expect(stage).toBe(4);
    expect(nextStage(4, 3)).toBe(4);
  });

  it("a mistake moves one step down; a learned word goes back to learning", () => {
    expect(nextStage(2, 1)).toBe(1);
    expect(nextStage(0, 1)).toBe(0);
    expect(nextStage(4, 1)).toBe(3);
    expect(wordStatus(3, 7)).toBe("learning");
  });

  it("falls back to writing without 4 choices or a voice; learned words alternate", () => {
    expect(modeFor(1, { choose: false, listen: true })).toBe("write");
    expect(modeFor(3, { choose: true, listen: false })).toBe("write");
    expect(modeFor(4, { choose: true, listen: true }, 1)).toBe("choice");
  });

  it("statuses", () => {
    expect(wordStatus(0, 0)).toBe("new");
    expect(wordStatus(0, 2)).toBe("learning");
    expect(wordStatus(4, 9)).toBe("learned");
  });

  it("grades: the student's own for cards, otherwise from the answer", () => {
    expect(gradeFor("right")).toBe(3);
    expect(gradeFor("almost")).toBe(2);
    expect(gradeFor("wrong")).toBe(1);
    expect(gradeFor("right", 4)).toBe(4);
  });

  it("pauses between steps: 10 minutes, a day, two days; soon after a mistake", () => {
    const fsrsDue = new Date(now.getTime() + 5 * DAY);
    expect(nextDue(1, 3, fsrsDue, now, 0).getTime() - now.getTime()).toBe(STEP_PAUSE[1]);
    expect(nextDue(2, 3, fsrsDue, now, 1).getTime() - now.getTime()).toBe(DAY);
    expect(nextDue(3, 3, fsrsDue, now, 2).getTime() - now.getTime()).toBe(2 * DAY);
    expect(nextDue(1, 1, fsrsDue, now, 2).getTime() - now.getTime()).toBe(RETRY_PAUSE);
  });

  it("just learned: checked again after FSRS's date, but not sooner than a few days", () => {
    const soon = new Date(now.getTime() + DAY);
    expect(nextDue(4, 3, soon, now, 3).getTime() - now.getTime()).toBe(FIRST_CHECK_PAUSE);
    const late = new Date(now.getTime() + 20 * DAY);
    expect(nextDue(4, 3, late, now, 4)).toEqual(late);
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
