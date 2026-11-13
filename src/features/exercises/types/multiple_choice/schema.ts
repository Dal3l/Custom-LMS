import { z } from "zod";
import { withAttachment } from "../../attachment";
import { summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";

export const MAX_QUESTIONS = 30;
export const MAX_CHOICES = 10;

const optionSchema = z.object({ id: itemIdSchema, text: z.string().max(300) });
export const multipleChoiceContentSchema = withAttachment({
  questions: z
    .array(
      z.object({
        id: itemIdSchema,
        text: z.string().max(500),
        /** several right options: the student sees checkboxes instead of round buttons */
        multiple: z.boolean(),
        options: z.array(optionSchema).min(1).max(MAX_CHOICES),
      }),
    )
    .min(1)
    .max(MAX_QUESTIONS),
});
export type MultipleChoiceContent = z.infer<typeof multipleChoiceContentSchema>;

export const multipleChoiceKeySchema = z.object({
  correct: z.record(itemIdSchema, z.array(itemIdSchema).max(MAX_CHOICES)),
});
export type MultipleChoiceKey = z.infer<typeof multipleChoiceKeySchema>;

export const multipleChoiceAnswerSchema = z.object({
  selected: z.record(itemIdSchema, z.array(itemIdSchema).max(MAX_CHOICES)),
});
export type MultipleChoiceAnswer = z.infer<typeof multipleChoiceAnswerSchema>;

export function checkMultipleChoice(content: MultipleChoiceContent, key: MultipleChoiceKey, answer: MultipleChoiceAnswer) {
  const parts: Record<string, boolean | null> = {};
  for (const q of content.questions) {
    const given = answer.selected[q.id];
    if (!given?.length) {
      parts[q.id] = null;
      continue;
    }
    const right = new Set(key.correct[q.id] ?? []);
    const chosen = new Set(given);
    parts[q.id] = right.size > 0 && right.size === chosen.size && [...right].every((id) => chosen.has(id));
  }
  return summarize(parts);
}

export function emptyQuestion() {
  return { id: newItemId(), text: "", multiple: false, options: [{ id: newItemId(), text: "" }, { id: newItemId(), text: "" }] };
}

export const multipleChoiceDefinition: ExerciseDefinition<MultipleChoiceContent, MultipleChoiceKey, MultipleChoiceAnswer> = {
  id: "multiple_choice",
  contentSchema: multipleChoiceContentSchema,
  keySchema: multipleChoiceKeySchema,
  create: () => ({ content: { questions: [emptyQuestion()] }, key: { correct: {} } }),
  grading: { answerSchema: multipleChoiceAnswerSchema, check: checkMultipleChoice },
};
