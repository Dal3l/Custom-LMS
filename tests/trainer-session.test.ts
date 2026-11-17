import { describe, expect, it } from "vitest";
import {
  answer,
  buildTasks,
  choiceOptions,
  finalGrade,
  isFinished,
  pickWords,
  startSession,
  stepProgress,
  type SessionWord,
} from "@/features/trainer/session";

const word = (id: string, term: string, translation: string, language = "en"): SessionWord => ({
  id,
  term,
  translation,
  transcription: "",
  example: "",
  audioUrl: null,
  language,
});
const W = [word("1", "apple", "яблоко"), word("2", "cat", "кот"), word("3", "dog", "собака"), word("4", "sun", "солнце")];
const fixed = () => 0.42;
const yes = () => true;

describe("picking words", () => {
  it("all, a number of random ones, or the chosen ones", () => {
    expect(pickWords(W, { count: "all" })).toHaveLength(4);
    expect(pickWords(W, { count: 2 })).toHaveLength(2);
    expect(pickWords(W, { count: 10 })).toHaveLength(4);
    expect(pickWords(W, { ids: ["3", "1"] }).map((w) => w.id)).toEqual(["1", "3"]);
  });
  it("takes words it is time to review first", () => {
    const got = pickWords(W, { count: 2 }, new Set(["4", "2"]), fixed);
    expect(got.map((w) => w.id).sort()).toEqual(["2", "4"]);
  });
});

describe("tasks", () => {
  it("all words per step, steps in order: cards, choice, write, listen", () => {
    const tasks = buildTasks(W.slice(0, 2), ["card", "choice", "write", "listen"], W, yes, fixed);
    expect(tasks.map((t) => t.step)).toEqual(["card", "card", "choice", "choice", "write", "write", "listen", "listen"]);
  });
  it("only the chosen steps (a review can use one or a few)", () => {
    const tasks = buildTasks(W, ["listen", "choice"], W, yes, fixed);
    expect(new Set(tasks.map((t) => t.step))).toEqual(new Set(["choice", "listen"]));
    expect(tasks.findIndex((t) => t.step === "listen")).toBe(4);
  });
  it("four options with the right one; too few words → no picking step", () => {
    const options = choiceOptions(W[0], W, fixed)!;
    expect(options).toHaveLength(4);
    expect(options).toContain("яблоко");
    expect(choiceOptions(W[0], W.slice(0, 3))).toBeNull();
    expect(buildTasks(W.slice(0, 2), ["choice"], W.slice(0, 2), yes)).toEqual([]);
  });
  it("no voice and no recording → no listening step", () => {
    expect(buildTasks(W, ["listen"], W, () => false)).toEqual([]);
  });
});

describe("a session", () => {
  it("a mistake comes back at the end of the same step until it is right", () => {
    let s = startSession(buildTasks(W.slice(0, 2), ["card", "write"], W, yes, fixed));
    // cards: two tasks, both "right" (cards can't be wrong)
    s = answer(s, true);
    s = answer(s, true);
    const first = s.tasks[s.index];
    s = answer(s, false, fixed); // wrong: comes back after the other write task
    expect(s.tasks).toHaveLength(5);
    expect(s.tasks[4]).toMatchObject({ wordId: first.wordId, step: "write" });
    expect(stepProgress(s)).toMatchObject({ steps: ["card", "write"], current: 1 });
    s = answer(s, true);
    expect(isFinished(s)).toBe(false);
    s = answer(s, true);
    expect(isFinished(s)).toBe(true);
    expect(s.mistakes).toEqual({ [first.wordId]: 1 });
    expect(s.answers).toHaveLength(5);
  });
  it("a wrong answer in an earlier step is asked again before the next step starts", () => {
    let s = startSession(buildTasks(W.slice(0, 2), ["choice", "write"], W, yes, fixed));
    s = answer(s, false, fixed);
    expect(s.tasks.map((t) => t.step)).toEqual(["choice", "choice", "choice", "write", "write"]);
  });
  it("grades for FSRS at the end", () => {
    expect(finalGrade(0, "learn")).toBe(3);
    expect(finalGrade(2, "learn")).toBe(2);
    expect(finalGrade(1, "review")).toBe(1);
  });
});
