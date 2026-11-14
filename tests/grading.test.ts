import { describe, expect, it } from "vitest";
import { getDefinition } from "@/features/exercises/definitions";
import { buildGapInput, checkGapInput } from "@/features/exercises/types/gap_input/schema";
import { buildGapSelect, checkGapSelect } from "@/features/exercises/types/gap_select/schema";
import { checkMultipleChoice, type MultipleChoiceContent } from "@/features/exercises/types/multiple_choice/schema";
import { checkTrueFalse, type TrueFalseContent } from "@/features/exercises/types/true_false/schema";

describe("gaps with typing", () => {
  const { content, key } = buildGapInput("Penguins [are] birds. They [don't / do not] fly. They live in [Antarctica].", false);

  it("never puts answers into what the student sees", () => {
    expect(JSON.stringify(content)).not.toMatch(/are|don't|Antarctica/);
    expect(content.parts.filter((p) => p.t === "gap")).toHaveLength(3);
    expect(key.answers).toEqual({ g1: ["are"], g2: ["don't", "do not"], g3: ["Antarctica"] });
  });

  it("accepts any listed answer, ignoring case, spaces and apostrophe style", () => {
    const r = checkGapInput(content, key, { values: { g1: " ARE ", g2: "don’t", g3: "antarctica" } });
    expect(r).toEqual({ parts: { g1: true, g2: true, g3: true }, score: 1, correct: true });
    expect(checkGapInput(content, key, { values: { g2: "do  not" } }).parts.g2).toBe(true);
  });

  it("marks wrong and unanswered gaps", () => {
    const r = checkGapInput(content, key, { values: { g1: "is", g2: "" } });
    expect(r.parts).toEqual({ g1: false, g2: null, g3: null });
    expect(r.correct).toBe(false);
    expect(r.score).toBe(0);
  });

  it("respects 'case matters'", () => {
    const strict = buildGapInput("I live in [London].", true);
    expect(checkGapInput(strict.content, strict.key, { values: { g1: "london" } }).parts.g1).toBe(false);
    expect(checkGapInput(strict.content, strict.key, { values: { g1: "London" } }).parts.g1).toBe(true);
  });

  it("ignores answers to gaps that do not exist", () => {
    const r = checkGapInput(content, key, { values: { g1: "are", g99: "x" } });
    expect(Object.keys(r.parts)).toEqual(["g1", "g2", "g3"]);
  });
});

describe("gaps with options", () => {
  const built = buildGapSelect("She [is/*are/am] happy. They [*were/was] here. I [go].");

  it("never reveals the right option to the student", () => {
    expect(JSON.stringify(built.content)).not.toContain("*");
    expect(built.content.parts[1]).toEqual({ t: "gap", id: "g1", options: ["is", "are", "am"] });
    expect(built.key.answers).toEqual({ g1: 1, g2: 0, g3: 0 });
  });

  it("reports gaps the teacher should fix", () => {
    expect(built.problems).toEqual([
      { id: "g3", problem: "fewOptions" },
      { id: "g3", problem: "noMark" },
    ]);
    expect(buildGapSelect("[*a/*b]").problems).toEqual([{ id: "g1", problem: "manyMarks" }]);
  });

  it("checks the chosen option", () => {
    const r = checkGapSelect(built.content, built.key, { values: { g1: 1, g2: 1 } });
    expect(r.parts).toEqual({ g1: true, g2: false, g3: null });
  });
});

describe("multiple choice", () => {
  const content: MultipleChoiceContent = {
    questions: [
      { id: "q1aaaaaa", text: "Where do penguins live?", multiple: false, options: [{ id: "o1aaaaaa", text: "Arctic" }, { id: "o2aaaaaa", text: "Antarctica" }] },
      {
        id: "q2aaaaaa",
        text: "Which are birds?",
        multiple: true,
        options: [{ id: "o3aaaaaa", text: "penguin" }, { id: "o4aaaaaa", text: "seal" }, { id: "o5aaaaaa", text: "gull" }],
      },
    ],
  };
  const key = { correct: { q1aaaaaa: ["o2aaaaaa"], q2aaaaaa: ["o3aaaaaa", "o5aaaaaa"] } };

  it("one right option", () => {
    expect(checkMultipleChoice(content, key, { selected: { q1aaaaaa: ["o2aaaaaa"] } }).parts.q1aaaaaa).toBe(true);
    expect(checkMultipleChoice(content, key, { selected: { q1aaaaaa: ["o1aaaaaa"] } }).parts.q1aaaaaa).toBe(false);
  });

  it("several right options: all of them and nothing else", () => {
    const pick = (ids: string[]) => checkMultipleChoice(content, key, { selected: { q2aaaaaa: ids } }).parts.q2aaaaaa;
    expect(pick(["o5aaaaaa", "o3aaaaaa"])).toBe(true);
    expect(pick(["o3aaaaaa"])).toBe(false);
    expect(pick(["o3aaaaaa", "o4aaaaaa", "o5aaaaaa"])).toBe(false);
    expect(pick([])).toBeNull();
  });

  it("a question without marked answers can never be right", () => {
    expect(checkMultipleChoice(content, { correct: {} }, { selected: { q1aaaaaa: ["o1aaaaaa"] } }).parts.q1aaaaaa).toBe(false);
  });
});

describe("true / false", () => {
  const content: TrueFalseContent = { statements: [{ id: "s1aaaaaa", text: "Penguins fly" }, { id: "s2aaaaaa", text: "Penguins swim" }] };
  const key = { answers: { s1aaaaaa: false, s2aaaaaa: true } };

  it("checks each statement", () => {
    const r = checkTrueFalse(content, key, { values: { s1aaaaaa: false, s2aaaaaa: false } });
    expect(r.parts).toEqual({ s1aaaaaa: true, s2aaaaaa: false });
    expect(r.score).toBe(0.5);
  });

  it("unanswered statements stay neutral", () => {
    expect(checkTrueFalse(content, key, { values: {} }).parts).toEqual({ s1aaaaaa: null, s2aaaaaa: null });
  });
});

describe("answers are validated before checking", () => {
  it("rejects answers of the wrong shape", () => {
    const def = getDefinition("gap_input")!;
    expect(def.grading!.answerSchema.safeParse({ values: { g1: "ok" } }).success).toBe(true);
    expect(def.grading!.answerSchema.safeParse({ values: { g1: 5 } }).success).toBe(false);
    expect(def.grading!.answerSchema.safeParse({ values: { "__proto__x": "a" } }).success).toBe(false);
    expect(getDefinition("true_false")!.grading!.answerSchema.safeParse({ values: { s1aaaaaa: "yes" } }).success).toBe(false);
  });

  it("materials have nothing to check", () => {
    expect(getDefinition("text")!.grading).toBeUndefined();
  });
});

describe("gaps with typing: three tries", () => {
  const { content, key } = buildGapInput("Penguins [are] birds. They live in [Antarctica].", false);
  const check = (values: Record<string, string>, attempts?: Record<string, string[]>) =>
    checkGapInput(content, key, { values, attempts });

  it("shows nothing before three wrong tries", () => {
    expect(check({ g1: "is" }).reveal).toBeUndefined();
    expect(check({ g1: "am" }, { g1: ["is"] }).reveal).toBeUndefined();
  });

  it("reveals the right answer on the third wrong try, for that gap only", () => {
    const r = check({ g1: "be" }, { g1: ["is", "am"] });
    expect(r.parts.g1).toBe(false);
    expect(r.reveal).toEqual({ g1: "are" });
  });

  it("does not count repeats, empty tries or tries that were actually right", () => {
    expect(check({ g1: "is" }, { g1: ["is", "IS", " is "] }).reveal).toBeUndefined();
    expect(check({ g1: "am" }, { g1: ["", "are", "is"] }).reveal).toBeUndefined();
  });

  it("never reveals a gap the student got right", () => {
    expect(check({ g1: "are" }, { g1: ["is", "am", "be"] }).reveal).toBeUndefined();
  });

  it("still reveals when the earlier tries were enough", () => {
    expect(check({}, { g2: ["Arctic", "Africa", "Asia"] }).reveal).toEqual({ g2: "Antarctica" });
  });
});

import { recordAttempts } from "@/features/exercises/types/gap_input/schema";

describe("typed gaps: remembering tries after a check", () => {
  const result = { parts: { g1: false, g2: true, g3: null }, score: 0.33, correct: false };

  it("adds each new wrong word once, only for wrong gaps", () => {
    const a = recordAttempts({ values: { g1: "is", g2: "are", g3: "" } }, result);
    expect(a.attempts).toEqual({ g1: ["is"] });
    const b = recordAttempts({ values: { g1: "IS " }, attempts: a.attempts }, result);
    expect(b.attempts).toEqual({ g1: ["is"] });
    const c = recordAttempts({ values: { g1: "am" }, attempts: b.attempts }, result);
    expect(c.attempts).toEqual({ g1: ["is", "am"] });
  });

  it("keeps at most three", () => {
    const d = recordAttempts({ values: { g1: "be" }, attempts: { g1: ["is", "am", "was"] } }, result);
    expect(d.attempts?.g1).toHaveLength(3);
  });
});

describe("typed gaps in a class lesson: saved tries count, not the browser's", () => {
  const { content, key } = buildGapInput("Penguins [are] birds.", false);
  const grading = getDefinition("gap_input")!.grading!;
  type A = { values: Record<string, string>; attempts?: Record<string, string[]> };
  const prepare = grading.prepare as (answer: A, saved: A | null) => A;
  const afterCheck = grading.afterCheck as (answer: A, result: ReturnType<typeof checkGapInput>) => A;

  it("ignores tries sent from the browser and uses the saved ones", () => {
    const forged = { values: { g1: "is" }, attempts: { g1: ["x", "y"] } };
    const prepared = prepare(forged, null);
    expect(prepared.attempts).toEqual({});
    expect(checkGapInput(content, key, prepared).reveal).toBeUndefined();
  });

  it("keeps counting with the saved tries and reveals on the third", () => {
    let saved: A | null = null;
    for (const word of ["is", "am", "be"]) {
      const answer = prepare({ values: { g1: word } }, saved);
      const result = checkGapInput(content, key, answer);
      saved = afterCheck(answer, result);
      if (word === "be") expect(result.reveal).toEqual({ g1: "are" });
      else expect(result.reveal).toBeUndefined();
    }
    expect(saved?.attempts?.g1).toEqual(["is", "am", "be"]);
  });
});
