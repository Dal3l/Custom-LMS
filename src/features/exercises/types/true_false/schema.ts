import { z } from "zod";
import { withAttachment } from "../../attachment";
import { summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";

export const MAX_STATEMENTS = 30;

export const trueFalseContentSchema = withAttachment({
  statements: z.array(z.object({ id: itemIdSchema, text: z.string().max(500) })).min(1).max(MAX_STATEMENTS),
});
export type TrueFalseContent = z.infer<typeof trueFalseContentSchema>;

export const trueFalseKeySchema = z.object({ answers: z.record(itemIdSchema, z.boolean()) });
export type TrueFalseKey = z.infer<typeof trueFalseKeySchema>;

export const trueFalseAnswerSchema = z.object({ values: z.record(itemIdSchema, z.boolean()) });
export type TrueFalseAnswer = z.infer<typeof trueFalseAnswerSchema>;

export function checkTrueFalse(content: TrueFalseContent, key: TrueFalseKey, answer: TrueFalseAnswer) {
  const parts: Record<string, boolean | null> = {};
  for (const s of content.statements) {
    const given = answer.values[s.id];
    // A statement with no mark from the teacher counts as "true".
    parts[s.id] = given === undefined ? null : given === (key.answers[s.id] ?? true);
  }
  return summarize(parts);
}

export function emptyStatement() {
  return { id: newItemId(), text: "" };
}

/** The right answers, shown when the teacher reveals them. */
export function solveTrueFalse(content: TrueFalseContent, key: TrueFalseKey): TrueFalseAnswer {
  return { values: Object.fromEntries(content.statements.map((s) => [s.id, key.answers[s.id] ?? true])) };
}

export const trueFalseDefinition: ExerciseDefinition<TrueFalseContent, TrueFalseKey, TrueFalseAnswer> = {
  id: "true_false",
  contentSchema: trueFalseContentSchema,
  keySchema: trueFalseKeySchema,
  create: () => {
    const s = emptyStatement();
    return { content: { statements: [s] }, key: { answers: { [s.id]: true } } };
  },
  grading: { answerSchema: trueFalseAnswerSchema, check: checkTrueFalse, solution: solveTrueFalse },
};
