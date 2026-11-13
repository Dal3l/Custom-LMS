import { describe, expect, it } from "vitest";
import { buildCategorize, checkCategorize } from "@/features/exercises/types/categorize/schema";
import { buildGapDrag, checkGapDrag } from "@/features/exercises/types/gap_drag/schema";
import { buildMatching, checkMatching } from "@/features/exercises/types/matching/schema";
import { buildOrdering, checkOrdering } from "@/features/exercises/types/ordering/schema";

const SALT = "salt1234";

describe("drag into gaps", () => {
  const { content, key } = buildGapDrag("I [am] a [teacher]. You [are] a [teacher] too.", "is, be", SALT);
  const idOf = (text: string) => content.bank.find((w) => w.text === text)!.id;

  it("gives a shuffled bank with all gap words and the extra ones, and no answers", () => {
    expect(content.bank.map((w) => w.text).sort()).toEqual(["am", "are", "be", "is", "teacher", "teacher"]);
    expect(JSON.stringify(content)).not.toMatch(/"g\d":/);
    expect(content.parts.filter((p) => p.t === "gap")).toHaveLength(4);
  });

  it("keeps the same word ids while the teacher keeps editing", () => {
    const again = buildGapDrag("I [am] a [teacher]. You [are] a [teacher] too. More text.", "is, be", SALT);
    expect(again.content.bank.map((w) => w.id).sort()).toEqual(content.bank.map((w) => w.id).sort());
  });

  it("checks by word, so either copy of a repeated word fits", () => {
    const teachers = content.bank.filter((w) => w.text === "teacher").map((w) => w.id);
    const r = checkGapDrag(content, key, { values: { g1: idOf("am"), g2: teachers[1]!, g3: idOf("is"), g4: teachers[0]! } });
    expect(r.parts).toEqual({ g1: true, g2: true, g3: false, g4: true });
  });

  it("leaves empty gaps unanswered and ignores unknown words", () => {
    expect(checkGapDrag(content, key, { values: { g1: "wzzzz" } }).parts).toEqual({ g1: null, g2: null, g3: null, g4: null });
  });
});

describe("matching", () => {
  const built = buildMatching({
    salt: SALT,
    pairs: [
      { id: "aaaaaaaa", left: { kind: "text", text: "cat" }, right: "кошка" },
      { id: "bbbbbbbb", left: { kind: "text", text: "dog" }, right: "собака" },
      { id: "cccccccc", left: { kind: "text", text: "puppy" }, right: "собака" },
    ],
  });
  const rightId = (text: string, n = 0) => built.content.right.filter((r) => r.text === text)[n]!.id;

  it("right-side ids do not reveal their pair", () => {
    for (const r of built.content.right) expect(["aaaaaaaa", "bbbbbbbb", "cccccccc"].some((id) => r.id.includes(id))).toBe(false);
  });

  it("checks each left item; equal right words are interchangeable", () => {
    const r = checkMatching(built.content, built.key, {
      values: { aaaaaaaa: rightId("кошка"), bbbbbbbb: rightId("собака", 1), cccccccc: rightId("собака", 0) },
    });
    expect(r.correct).toBe(true);
    const wrong = checkMatching(built.content, built.key, { values: { aaaaaaaa: rightId("собака") } });
    expect(wrong.parts).toEqual({ aaaaaaaa: false, bbbbbbbb: null, cccccccc: null });
  });
});

describe("ordering", () => {
  const built = buildOrdering({
    salt: SALT,
    mode: "words",
    tasks: [
      { id: "t1aaaaaa", source: "the cat sat on the mat" },
      { id: "t2aaaaaa", source: "I like tea" },
    ],
  });
  const t1 = built.content.tasks[0]!;
  const ids = (task: typeof t1, words: string[]) => {
    const pool = [...task.pieces];
    return words.map((w) => pool.splice(pool.findIndex((p) => p.text === w), 1)[0]!.id);
  };

  it("never shows the pieces in the right order", () => {
    expect(t1.pieces.map((p) => p.text).join(" ")).not.toBe("the cat sat on the mat");
  });

  it("accepts the right sentence, even with the two 'the' swapped", () => {
    const words = ["the", "cat", "sat", "on", "the", "mat"];
    const order = ids(t1, words);
    const swapped = [order[4]!, ...order.slice(1, 4), order[0]!, order[5]!];
    expect(checkOrdering(built.content, built.key, { values: { t1aaaaaa: swapped } }).parts.t1aaaaaa).toBe(true);
  });

  it("rejects a wrong or incomplete order", () => {
    const wrong = ids(t1, ["cat", "the", "sat", "on", "the", "mat"]);
    expect(checkOrdering(built.content, built.key, { values: { t1aaaaaa: wrong } }).parts.t1aaaaaa).toBe(false);
    expect(checkOrdering(built.content, built.key, { values: { t1aaaaaa: wrong.slice(0, 3) } }).parts.t1aaaaaa).toBe(false);
    expect(checkOrdering(built.content, built.key, { values: {} }).parts).toEqual({ t1aaaaaa: null, t2aaaaaa: null });
  });

  it("orders lines in 'lines' mode", () => {
    const lines = buildOrdering({ salt: SALT, mode: "lines", tasks: [{ id: "t3aaaaaa", source: "First\nSecond\nThird" }] });
    const task = lines.content.tasks[0]!;
    expect(task.pieces).toHaveLength(3);
    const right = ["First", "Second", "Third"].map((w) => task.pieces.find((p) => p.text === w)!.id);
    expect(checkOrdering(lines.content, lines.key, { values: { t3aaaaaa: right } }).correct).toBe(true);
  });
});

describe("sort into groups", () => {
  const built = buildCategorize({
    salt: SALT,
    groups: [
      { id: "countabl", title: "Countable", items: "apple\nbook" },
      { id: "uncounta", title: "Uncountable", items: "water, rice" },
    ],
  });
  const id = (text: string) => built.content.cards.find((c) => c.text === text)!.id;

  it("shows all words shuffled, without their columns", () => {
    expect(built.content.cards.map((c) => c.text).sort()).toEqual(["apple", "book", "rice", "water"]);
    expect(JSON.stringify(built.content.cards)).not.toMatch(/countabl|uncounta/);
  });

  it("checks each word's column", () => {
    const r = checkCategorize(built.content, built.key, {
      values: { [id("apple")]: "countabl", [id("water")]: "countabl", [id("rice")]: "uncounta" },
    });
    expect(r.parts).toEqual({ [id("apple")]: true, [id("book")]: null, [id("water")]: false, [id("rice")]: true });
  });
});
