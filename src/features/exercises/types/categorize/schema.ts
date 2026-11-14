import { z } from "zod";
import { withAttachment } from "../../attachment";
import { summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";
import { hashString, stableShuffle } from "../../shuffle";

export const MAX_GROUPS = 6;
export const MAX_GROUP_ITEMS = 30;

export const cardIdSchema = z.string().regex(/^c[a-z0-9]{1,15}$/);
const cardId = (salt: string, groupId: string, i: number) => `c${hashString(`${salt}:${groupId}:${i}`).toString(36)}`;

export const categorizeContentSchema = withAttachment({
  groups: z.array(z.object({ id: itemIdSchema, title: z.string().max(100) })).max(MAX_GROUPS),
  /** all words, shuffled; nothing says which column they belong to */
  cards: z.array(z.object({ id: cardIdSchema, text: z.string().min(1).max(200) })).max(MAX_GROUPS * MAX_GROUP_ITEMS),
});
export type CategorizeContent = z.infer<typeof categorizeContentSchema>;

export const categorizeKeySchema = z.object({
  salt: itemIdSchema,
  /** each column with its words, one per line, as the teacher typed them */
  groups: z.array(z.object({ id: itemIdSchema, title: z.string().max(100), items: z.string().max(5000) })).max(MAX_GROUPS),
});
export type CategorizeKey = z.infer<typeof categorizeKeySchema>;

export const categorizeAnswerSchema = z.object({ values: z.record(cardIdSchema, itemIdSchema) });
export type CategorizeAnswer = z.infer<typeof categorizeAnswerSchema>;

export function itemsOf(text: string): string[] {
  return text
    .split(/\n|,/)
    .map((i) => i.trim())
    .filter(Boolean)
    .slice(0, MAX_GROUP_ITEMS);
}

/** card id → the column it belongs to (teacher side and server only). */
export function cardGroups(key: CategorizeKey): Map<string, string> {
  const map = new Map<string, string>();
  for (const g of key.groups) itemsOf(g.items).forEach((_, i) => map.set(cardId(key.salt, g.id, i), g.id));
  return map;
}

export function buildCategorize(key: CategorizeKey): { content: CategorizeContent; key: CategorizeKey } {
  const cards = key.groups.flatMap((g) => itemsOf(g.items).map((text, i) => ({ id: cardId(key.salt, g.id, i), text: text.slice(0, 200) })));
  return {
    content: {
      groups: key.groups.map(({ id, title }) => ({ id, title })),
      cards: stableShuffle(cards, key.salt),
    },
    key,
  };
}

export function checkCategorize(content: CategorizeContent, key: CategorizeKey, answer: CategorizeAnswer) {
  const right = cardGroups(key);
  const parts: Record<string, boolean | null> = {};
  for (const card of content.cards) {
    const chosen = answer.values[card.id];
    parts[card.id] = chosen === undefined ? null : chosen === right.get(card.id);
  }
  return summarize(parts);
}

/** The right group for every card. */
export function solveCategorize(content: CategorizeContent, key: CategorizeKey): CategorizeAnswer {
  const right = cardGroups(key);
  const values: Record<string, string> = {};
  for (const card of content.cards) {
    const group = right.get(card.id);
    if (group) values[card.id] = group;
  }
  return { values };
}

export const categorizeDefinition: ExerciseDefinition<CategorizeContent, CategorizeKey, CategorizeAnswer> = {
  id: "categorize",
  contentSchema: categorizeContentSchema,
  keySchema: categorizeKeySchema,
  create: () =>
    buildCategorize({
      salt: newItemId(),
      groups: [
        { id: newItemId(), title: "", items: "" },
        { id: newItemId(), title: "", items: "" },
      ],
    }),
  grading: { answerSchema: categorizeAnswerSchema, check: checkCategorize, solution: solveCategorize },
};
