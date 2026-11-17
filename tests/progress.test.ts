import { describe, expect, it } from "vitest";
import { progress, summarize } from "@/features/trainer/progress";

const now = new Date("2026-11-20T12:00:00Z");
const ago = (days: number) => new Date(now.getTime() - days * 86_400_000).toISOString();
const later = (days: number) => new Date(now.getTime() + days * 86_400_000).toISOString();

const words = [
  { id: "a", term: "apple", translation: "яблоко", stage: 0, due: ago(1) },
  { id: "b", term: "cat", translation: "кот", stage: 4, due: later(3) },
  { id: "c", term: "dog", translation: "собака", stage: 4, due: ago(2) },
];

describe("dictionary progress for the teacher", () => {
  it("counts learning, learned and words it is time to review", () => {
    expect(summarize(words, now)).toEqual({ total: 3, learning: 1, learned: 2, toReview: 1 });
    expect(summarize([], now)).toEqual({ total: 0, learning: 0, learned: 0, toReview: 0 });
  });

  it("activity: last training, answers this week, accuracy for 30 days, hard words", () => {
    const answers = [
      { wordId: "c", correct: false, reviewedAt: ago(1) },
      { wordId: "c", correct: false, reviewedAt: ago(1) },
      { wordId: "a", correct: false, reviewedAt: ago(10) },
      { wordId: "b", correct: true, reviewedAt: ago(2) },
      { wordId: "b", correct: true, reviewedAt: ago(40) },
      { wordId: "gone", correct: false, reviewedAt: ago(3) },
    ];
    const p = progress(words, answers, now);
    expect(p.lastTrainedAt).toBe(ago(1));
    expect(p.answersThisWeek).toBe(4);
    expect(p.accuracy).toBe(20); // 1 right of 5 in 30 days
    expect(p.hardWords.map((w) => [w.term, w.mistakes])).toEqual([
      ["dog", 2],
      ["apple", 1],
    ]);
  });

  it("no answers yet", () => {
    const p = progress(words, [], now);
    expect(p.lastTrainedAt).toBeNull();
    expect(p.accuracy).toBeNull();
    expect(p.hardWords).toEqual([]);
  });
});
