import { z } from "zod";
import { withAttachment } from "../../attachment";
import type { ExerciseDefinition } from "../../definition";

// An open answer: a short answer or an essay, checked by the teacher.
export const MAX_OPEN_ANSWER = 10_000;

export const openAnswerContentSchema = withAttachment({
  /** at least this many words (null: no minimum) */
  minWords: z.number().int().min(1).max(2000).nullable(),
});
export type OpenAnswerContent = z.infer<typeof openAnswerContentSchema>;

export const openAnswerAnswerSchema = z.object({ text: z.string().max(MAX_OPEN_ANSWER) });
export type OpenAnswerAnswer = z.infer<typeof openAnswerAnswerSchema>;

/** Words in a text (letters/digits runs, any language; "don't" is one word). */
export function countWords(text: string): number {
  return (text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;
}

export const openAnswerDefinition: ExerciseDefinition<OpenAnswerContent, null, OpenAnswerAnswer> = {
  id: "open_answer",
  contentSchema: openAnswerContentSchema,
  keySchema: null,
  create: () => ({ content: { minWords: null }, key: null }),
  manual: { answerSchema: openAnswerAnswerSchema },
};
