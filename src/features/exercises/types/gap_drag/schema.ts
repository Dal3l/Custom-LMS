import { z } from "zod";
import { withAttachment } from "../../attachment";
import { normalizeAnswer, summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { gapIdSchema, sourceSchema, textPartSchema } from "../../gap-text";
import { parseGaps } from "../../gaps";
import { itemIdSchema, newItemId } from "../../item-id";
import { hashString, stableShuffle } from "../../shuffle";

// Words carry ids made from a secret "salt": stable while the teacher edits,
// but they say nothing about which gap a word belongs to.
export const wordIdSchema = z.string().regex(/^w[a-z0-9]{1,15}$/);
const wordId = (salt: string, tag: string) => `w${hashString(`${salt}:${tag}`).toString(36)}`;

export const gapDragContentSchema = withAttachment({
  parts: z
    .array(z.discriminatedUnion("t", [textPartSchema, z.object({ t: z.literal("gap"), id: gapIdSchema })]))
    .max(400),
  bank: z.array(z.object({ id: wordIdSchema, text: z.string().min(1).max(200) })).max(150),
});
export type GapDragContent = z.infer<typeof gapDragContentSchema>;

export const gapDragKeySchema = z.object({
  salt: itemIdSchema,
  source: sourceSchema,
  /** extra words that fit no gap, as the teacher typed them */
  distractors: z.string().max(2000),
  answers: z.record(gapIdSchema, z.string().min(1).max(200)),
});
export type GapDragKey = z.infer<typeof gapDragKeySchema>;

export const gapDragAnswerSchema = z.object({ values: z.record(gapIdSchema, wordIdSchema) });
export type GapDragAnswer = z.infer<typeof gapDragAnswerSchema>;

export function splitDistractors(text: string): string[] {
  return text
    .split(/[,;\n]/)
    .map((w) => w.trim())
    .filter(Boolean)
    .slice(0, 50);
}

export function buildGapDrag(source: string, distractors: string, salt: string): { content: GapDragContent; key: GapDragKey } {
  const answers: GapDragKey["answers"] = {};
  const bank: GapDragContent["bank"] = [];
  const parts: GapDragContent["parts"] = parseGaps(source).map((p) => {
    if (p.t === "text") return p;
    const word = p.gap.options[0]!; // one word per gap; extra "/options" are ignored
    answers[p.gap.id] = word;
    bank.push({ id: wordId(salt, p.gap.id), text: word });
    return { t: "gap", id: p.gap.id };
  });
  splitDistractors(distractors).forEach((w, i) => bank.push({ id: wordId(salt, `d${i}`), text: w.slice(0, 200) }));
  return {
    content: { parts, bank: stableShuffle(bank, salt) },
    key: { salt, source, distractors, answers },
  };
}

export function checkGapDrag(content: GapDragContent, key: GapDragKey, answer: GapDragAnswer) {
  const text = new Map(content.bank.map((w) => [w.id, w.text]));
  const parts: Record<string, boolean | null> = {};
  for (const p of content.parts) {
    if (p.t !== "gap") continue;
    const chosen = answer.values[p.id];
    const word = chosen ? text.get(chosen) : undefined;
    // Compared by text: two gaps may need the same word.
    parts[p.id] = word === undefined ? null : normalizeAnswer(word) === normalizeAnswer(key.answers[p.id] ?? "");
  }
  return summarize(parts);
}

export const gapDragDefinition: ExerciseDefinition<GapDragContent, GapDragKey, GapDragAnswer> = {
  id: "gap_drag",
  contentSchema: gapDragContentSchema,
  keySchema: gapDragKeySchema,
  create: () => buildGapDrag("", "", newItemId()),
  grading: { answerSchema: gapDragAnswerSchema, check: checkGapDrag },
};
