import { z } from "zod";
import { withAttachment } from "../../attachment";
import { summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { gapIdSchema, sourceSchema, textPartSchema } from "../../gap-text";
import { MAX_OPTIONS, parseGaps } from "../../gaps";

export const gapSelectContentSchema = withAttachment({
  parts: z
    .array(
      z.discriminatedUnion("t", [
        textPartSchema,
        // Options in the teacher's order; nothing says which one is right.
        z.object({ t: z.literal("gap"), id: gapIdSchema, options: z.array(z.string().min(1).max(200)).min(1).max(MAX_OPTIONS) }),
      ]),
    )
    .max(400),
});
export type GapSelectContent = z.infer<typeof gapSelectContentSchema>;

export const gapSelectKeySchema = z.object({
  source: sourceSchema,
  /** index of the right option in each gap */
  answers: z.record(gapIdSchema, z.number().int().min(0).max(MAX_OPTIONS - 1)),
});
export type GapSelectKey = z.infer<typeof gapSelectKeySchema>;

export const gapSelectAnswerSchema = z.object({ values: z.record(gapIdSchema, z.number().int().min(0).max(MAX_OPTIONS - 1)) });
export type GapSelectAnswer = z.infer<typeof gapSelectAnswerSchema>;

export type GapSelectProblem = { id: string; problem: "fewOptions" | "noMark" | "manyMarks" };

/** Teacher's text → what the student sees + the key. Without a * the first option is right. */
export function buildGapSelect(source: string): { content: GapSelectContent; key: GapSelectKey; problems: GapSelectProblem[] } {
  const answers: GapSelectKey["answers"] = {};
  const problems: GapSelectProblem[] = [];
  const parts: GapSelectContent["parts"] = parseGaps(source).map((p) => {
    if (p.t === "text") return p;
    const { id, options, marked } = p.gap;
    if (options.length < 2) problems.push({ id, problem: "fewOptions" });
    if (marked.length === 0) problems.push({ id, problem: "noMark" });
    if (marked.length > 1) problems.push({ id, problem: "manyMarks" });
    answers[id] = marked[0] ?? 0;
    return { t: "gap", id, options };
  });
  return { content: { parts }, key: { source, answers }, problems };
}

export function checkGapSelect(content: GapSelectContent, key: GapSelectKey, answer: GapSelectAnswer) {
  const parts: Record<string, boolean | null> = {};
  for (const p of content.parts) {
    if (p.t !== "gap") continue;
    const given = answer.values[p.id];
    parts[p.id] = given === undefined ? null : given === key.answers[p.id];
  }
  return summarize(parts);
}

/** The right answers, shown when the teacher reveals them. */
export function solveGapSelect(_content: GapSelectContent, key: GapSelectKey): GapSelectAnswer {
  return { values: { ...key.answers } };
}

export const gapSelectDefinition: ExerciseDefinition<GapSelectContent, GapSelectKey, GapSelectAnswer> = {
  id: "gap_select",
  contentSchema: gapSelectContentSchema,
  keySchema: gapSelectKeySchema,
  create: () => {
    const { content, key } = buildGapSelect("");
    return { content, key };
  },
  grading: { answerSchema: gapSelectAnswerSchema, check: checkGapSelect, solution: solveGapSelect },
};
