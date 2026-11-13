import { z } from "zod";
import { withAttachment } from "../../attachment";
import { normalizeAnswer, summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";
import { mediaFileSchema } from "../../media";
import { hashString, stableShuffle } from "../../shuffle";
import { imageItemSchema } from "../image/schema";

export const MAX_PAIRS = 20;

// Left side: a word, a picture or a sound. Right side: a word.
export const leftSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("text"), text: z.string().max(300) }),
  z.object({ kind: z.literal("image"), image: imageItemSchema.nullable() }),
  z.object({ kind: z.literal("audio"), file: mediaFileSchema.nullable() }),
]);
export type Left = z.infer<typeof leftSchema>;

export const rightIdSchema = z.string().regex(/^r[a-z0-9]{1,15}$/);
const rightId = (salt: string, pairId: string) => `r${hashString(`${salt}:${pairId}`).toString(36)}`;

export const matchingContentSchema = withAttachment({
  /** in the teacher's order */
  left: z.array(z.object({ id: itemIdSchema }).and(leftSchema)).max(MAX_PAIRS),
  /** shuffled; ids do not reveal their pair */
  right: z.array(z.object({ id: rightIdSchema, text: z.string().max(300) })).max(MAX_PAIRS),
});
export type MatchingContent = z.infer<typeof matchingContentSchema>;

export const matchingKeySchema = z.object({
  salt: itemIdSchema,
  pairs: z.array(z.object({ id: itemIdSchema, left: leftSchema, right: z.string().max(300) })).max(MAX_PAIRS),
});
export type MatchingKey = z.infer<typeof matchingKeySchema>;

export const matchingAnswerSchema = z.object({ values: z.record(itemIdSchema, rightIdSchema) });
export type MatchingAnswer = z.infer<typeof matchingAnswerSchema>;

export function buildMatching(key: MatchingKey): { content: MatchingContent; key: MatchingKey } {
  return {
    content: {
      left: key.pairs.map((p) => ({ id: p.id, ...p.left })),
      right: stableShuffle(
        key.pairs.map((p) => ({ id: rightId(key.salt, p.id), text: p.right })),
        key.salt,
      ),
    },
    key,
  };
}

export function checkMatching(content: MatchingContent, key: MatchingKey, answer: MatchingAnswer) {
  const rightText = new Map(content.right.map((r) => [r.id, r.text]));
  const expected = new Map(key.pairs.map((p) => [p.id, p.right]));
  const parts: Record<string, boolean | null> = {};
  for (const l of content.left) {
    const chosen = answer.values[l.id];
    const text = chosen ? rightText.get(chosen) : undefined;
    // By text, so two pairs with the same right word are both accepted.
    parts[l.id] = text === undefined ? null : normalizeAnswer(text) === normalizeAnswer(expected.get(l.id) ?? "");
  }
  return summarize(parts);
}

export function emptyPair(): MatchingKey["pairs"][number] {
  return { id: newItemId(), left: { kind: "text", text: "" }, right: "" };
}

export const matchingDefinition: ExerciseDefinition<MatchingContent, MatchingKey, MatchingAnswer> = {
  id: "matching",
  contentSchema: matchingContentSchema,
  keySchema: matchingKeySchema,
  create: () => buildMatching({ salt: newItemId(), pairs: [emptyPair(), emptyPair(), emptyPair()] }),
  grading: { answerSchema: matchingAnswerSchema, check: checkMatching },
};
