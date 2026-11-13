import { z } from "zod";
import { withAttachment } from "../../attachment";
import { normalizeAnswer, summarize } from "../../checking";
import type { ExerciseDefinition } from "../../definition";
import { gapIdSchema, sourceSchema, textPartSchema } from "../../gap-text";
import { parseGaps } from "../../gaps";

export const gapInputContentSchema = withAttachment({
  parts: z
    .array(z.discriminatedUnion("t", [textPartSchema, z.object({ t: z.literal("gap"), id: gapIdSchema })]))
    .max(400),
});
export type GapInputContent = z.infer<typeof gapInputContentSchema>;

export const gapInputKeySchema = z.object({
  /** the teacher's text with [answers] — needed to edit the exercise again */
  source: sourceSchema,
  caseSensitive: z.boolean(),
  answers: z.record(gapIdSchema, z.array(z.string().min(1).max(200)).min(1).max(10)),
});
export type GapInputKey = z.infer<typeof gapInputKeySchema>;

export const gapInputAnswerSchema = z.object({ values: z.record(gapIdSchema, z.string().max(200)) });
export type GapInputAnswer = z.infer<typeof gapInputAnswerSchema>;

/** Teacher's text → what the student sees + the answer key. */
export function buildGapInput(source: string, caseSensitive: boolean): { content: GapInputContent; key: GapInputKey } {
  const parts = parseGaps(source);
  const answers: GapInputKey["answers"] = {};
  const contentParts: GapInputContent["parts"] = parts.map((p) => {
    if (p.t === "text") return p;
    answers[p.gap.id] = p.gap.options.map((o) => o.replace(/^\*/, "").trim()).filter(Boolean);
    return { t: "gap", id: p.gap.id };
  });
  return { content: { parts: contentParts }, key: { source, caseSensitive, answers } };
}

export function checkGapInput(content: GapInputContent, key: GapInputKey, answer: GapInputAnswer) {
  const parts: Record<string, boolean | null> = {};
  for (const p of content.parts) {
    if (p.t !== "gap") continue;
    const given = answer.values[p.id];
    if (given === undefined || !given.trim()) {
      parts[p.id] = null;
      continue;
    }
    const accepted = key.answers[p.id] ?? [];
    const norm = normalizeAnswer(given, key.caseSensitive);
    parts[p.id] = accepted.some((a) => normalizeAnswer(a, key.caseSensitive) === norm);
  }
  return summarize(parts);
}

export const gapInputDefinition: ExerciseDefinition<GapInputContent, GapInputKey, GapInputAnswer> = {
  id: "gap_input",
  contentSchema: gapInputContentSchema,
  keySchema: gapInputKeySchema,
  create: () => buildGapInput("", false),
  grading: { answerSchema: gapInputAnswerSchema, check: checkGapInput },
};
