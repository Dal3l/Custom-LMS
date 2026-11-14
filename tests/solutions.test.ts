import { describe, expect, it } from "vitest";
import { getDefinition } from "@/features/exercises/definitions";
import { buildCategorize } from "@/features/exercises/types/categorize/schema";
import { buildGapDrag } from "@/features/exercises/types/gap_drag/schema";
import { buildGapInput } from "@/features/exercises/types/gap_input/schema";
import { buildGapSelect } from "@/features/exercises/types/gap_select/schema";
import { buildMatching } from "@/features/exercises/types/matching/schema";
import { buildOrdering } from "@/features/exercises/types/ordering/schema";

// "Show the right answers": every type's solution must pass its own check completely.
const SALT = "salt1234";

const cases: [string, { content: unknown; key: unknown }][] = [
  ["gap_input", buildGapInput("Penguins [are] birds. They [don't / do not] fly.", false)],
  ["gap_select", buildGapSelect("She [is/*are/am] happy. They [*were/was] here.")],
  ["gap_drag", buildGapDrag("I [am] a [teacher]. You [are] a [teacher] too.", "is, be", SALT)],
  [
    "matching",
    buildMatching({
      salt: SALT,
      pairs: [
        { id: "aaaaaaaa", left: { kind: "text", text: "cat" }, right: "кошка" },
        { id: "bbbbbbbb", left: { kind: "text", text: "dog" }, right: "собака" },
        { id: "cccccccc", left: { kind: "text", text: "puppy" }, right: "собака" },
      ],
    }),
  ],
  [
    "ordering",
    buildOrdering({
      salt: SALT,
      mode: "words",
      tasks: [
        { id: "t1aaaaaa", source: "the cat sat on the mat" },
        { id: "t2aaaaaa", source: "I like tea" },
      ],
    }),
  ],
  [
    "categorize",
    buildCategorize({
      salt: SALT,
      groups: [
        { id: "countabl", title: "Countable", items: "apple\nbook" },
        { id: "uncounta", title: "Uncountable", items: "water, rice" },
      ],
    }),
  ],
  [
    "multiple_choice",
    {
      content: {
        questions: [
          { id: "q1aaaaaa", text: "Where?", multiple: false, options: [{ id: "o1aaaaaa", text: "A" }, { id: "o2aaaaaa", text: "B" }] },
          { id: "q2aaaaaa", text: "Which?", multiple: true, options: [{ id: "o3aaaaaa", text: "C" }, { id: "o4aaaaaa", text: "D" }, { id: "o5aaaaaa", text: "E" }] },
        ],
      },
      key: { correct: { q1aaaaaa: ["o2aaaaaa"], q2aaaaaa: ["o3aaaaaa", "o5aaaaaa"] } },
    },
  ],
  [
    "true_false",
    {
      content: { statements: [{ id: "s1aaaaaa", text: "Penguins fly" }, { id: "s2aaaaaa", text: "Penguins swim" }] },
      key: { answers: { s1aaaaaa: false } }, // s2: no mark from the teacher = true
    },
  ],
];

describe("right answers shown by the teacher", () => {
  it.each(cases)("%s: the solution is fully correct and a valid answer", (type, built) => {
    const def = getDefinition(type)!;
    const grading = def.grading!;
    const content = def.contentSchema.parse(built.content);
    const key = def.keySchema!.parse(built.key);
    const solution = grading.solution(content, key);
    expect(grading.answerSchema.safeParse(solution).success).toBe(true);
    const result = grading.check(content, key, solution);
    expect(result.correct).toBe(true);
    expect(Object.values(result.parts).every((v) => v === true)).toBe(true);
  });
});
