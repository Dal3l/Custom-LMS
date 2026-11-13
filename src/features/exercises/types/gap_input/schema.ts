import { z } from "zod";
import { withAttachment } from "../../attachment";
import { MAX_ATTEMPTS, normalizeAnswer, summarize } from "../../checking";
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

export const gapInputAnswerSchema = z.object({
  values: z.record(gapIdSchema, z.string().max(200)),
  /** the student's earlier wrong tries per gap (re-checked here, never trusted) */
  attempts: z.record(gapIdSchema, z.array(z.string().max(200)).max(MAX_ATTEMPTS)).optional(),
});
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
  const reveal: Record<string, string> = {};
  for (const p of content.parts) {
    if (p.t !== "gap") continue;
    const accepted = (key.answers[p.id] ?? []).map((a) => normalizeAnswer(a, key.caseSensitive));
    const isRight = (value: string) => accepted.includes(normalizeAnswer(value, key.caseSensitive));

    // Earlier tries count only if they really were wrong; repeats count once.
    const wrongTries = new Set(
      (answer.attempts?.[p.id] ?? [])
        .filter((a) => a.trim() && !isRight(a))
        .map((a) => normalizeAnswer(a, key.caseSensitive)),
    );

    const given = answer.values[p.id];
    if (given === undefined || !given.trim()) {
      parts[p.id] = null;
    } else {
      parts[p.id] = isRight(given);
      if (!parts[p.id]) wrongTries.add(normalizeAnswer(given, key.caseSensitive));
    }
    // Out of tries: show the (first) right answer for this gap.
    if (parts[p.id] !== true && wrongTries.size >= MAX_ATTEMPTS && key.answers[p.id]?.[0]) {
      reveal[p.id] = key.answers[p.id]![0]!;
    }
  }
  return summarize(parts, reveal);
}

export const gapInputDefinition: ExerciseDefinition<GapInputContent, GapInputKey, GapInputAnswer> = {
  id: "gap_input",
  contentSchema: gapInputContentSchema,
  keySchema: gapInputKeySchema,
  create: () => buildGapInput("", false),
  grading: { answerSchema: gapInputAnswerSchema, check: checkGapInput },
};
