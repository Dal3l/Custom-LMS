import { z } from "zod";
import { withAttachment } from "../../attachment";
import { normalizeAnswer, summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";
import { hashString, shuffleAway } from "../../shuffle";

export const MAX_TASKS = 20;
export const MAX_ITEMS = 40;

// "words": build a sentence from its words. "lines": put lines / paragraphs in order.
export const orderModeSchema = z.enum(["words", "lines"]);
export type OrderMode = z.infer<typeof orderModeSchema>;

export const pieceIdSchema = z.string().regex(/^p[a-z0-9]{1,15}$/);
const pieceId = (salt: string, taskId: string, i: number) => `p${hashString(`${salt}:${taskId}:${i}`).toString(36)}`;

export const orderingContentSchema = withAttachment({
  mode: orderModeSchema,
  tasks: z
    .array(
      z.object({
        id: itemIdSchema,
        /** shuffled, never in the right order */
        pieces: z.array(z.object({ id: pieceIdSchema, text: z.string().min(1).max(1000) })).max(MAX_ITEMS),
      }),
    )
    .max(MAX_TASKS),
});
export type OrderingContent = z.infer<typeof orderingContentSchema>;

export const orderingKeySchema = z.object({
  salt: itemIdSchema,
  mode: orderModeSchema,
  /** each task as the teacher wrote it: a sentence, or one line per item */
  tasks: z.array(z.object({ id: itemIdSchema, source: z.string().max(5000) })).max(MAX_TASKS),
});
export type OrderingKey = z.infer<typeof orderingKeySchema>;

export const orderingAnswerSchema = z.object({ values: z.record(itemIdSchema, z.array(pieceIdSchema).max(MAX_ITEMS)) });
export type OrderingAnswer = z.infer<typeof orderingAnswerSchema>;

/** The right order of pieces for one task. */
export function piecesOf(source: string, mode: OrderMode): string[] {
  const split = mode === "words" ? source.split(/\s+/) : source.split(/\n/);
  return split
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, MAX_ITEMS);
}

export function buildOrdering(key: OrderingKey): { content: OrderingContent; key: OrderingKey } {
  return {
    content: {
      mode: key.mode,
      tasks: key.tasks.map((task) => ({
        id: task.id,
        pieces: shuffleAway(
          piecesOf(task.source, key.mode).map((text, i) => ({ id: pieceId(key.salt, task.id, i), text: text.slice(0, 1000) })),
          key.salt + task.id,
        ),
      })),
    },
    key,
  };
}

export function checkOrdering(content: OrderingContent, key: OrderingKey, answer: OrderingAnswer) {
  const sources = new Map(key.tasks.map((t) => [t.id, t.source]));
  const parts: Record<string, boolean | null> = {};
  for (const task of content.tasks) {
    const chosen = answer.values[task.id];
    if (!chosen?.length) {
      parts[task.id] = null;
      continue;
    }
    const text = new Map(task.pieces.map((p) => [p.id, p.text]));
    const given = chosen.map((id) => normalizeAnswer(text.get(id) ?? "\u0000"));
    const right = piecesOf(sources.get(task.id) ?? "", key.mode).map((p) => normalizeAnswer(p));
    // Compared by text: two identical words ("the … the") may swap places.
    parts[task.id] = given.length === right.length && given.every((g, i) => g === right[i]);
  }
  return summarize(parts);
}

export const orderingDefinition: ExerciseDefinition<OrderingContent, OrderingKey, OrderingAnswer> = {
  id: "ordering",
  contentSchema: orderingContentSchema,
  keySchema: orderingKeySchema,
  create: () => buildOrdering({ salt: newItemId(), mode: "words", tasks: [{ id: newItemId(), source: "" }] }),
  grading: { answerSchema: orderingAnswerSchema, check: checkOrdering },
};
