import { z } from "zod";
import { withAttachment } from "../../attachment";
import type { ExerciseDefinition } from "../../definition";

// A voice answer: the student records audio in the browser; the teacher listens.
export const ANSWER_BUCKET = "answer-media";
export const VOICE_MAX_BYTES = 10 * 1024 * 1024;

export const voiceAnswerContentSchema = withAttachment({
  /** longest recording, in seconds */
  maxSeconds: z.number().int().min(15).max(600),
});
export type VoiceAnswerContent = z.infer<typeof voiceAnswerContentSchema>;

const UUID = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
/** <class id>/<student id>/<file id>.<ext> in the private answer-media bucket */
export const voicePathSchema = z.string().regex(new RegExp(`^${UUID}/${UUID}/${UUID}\\.(webm|ogg|m4a|mp4|mp3|aac|wav)$`));

export const voiceAnswerAnswerSchema = z.object({
  file: z
    .object({
      path: voicePathSchema,
      mime: z.string().max(60),
      size: z.number().int().min(0).max(VOICE_MAX_BYTES),
      seconds: z.number().min(0).max(600),
    })
    .nullable(),
});
export type VoiceAnswerAnswer = z.infer<typeof voiceAnswerAnswerSchema>;

/** File extension for a recorded audio type. */
export function audioExtension(mime: string): string {
  if (mime.includes("webm")) return "webm";
  if (mime.includes("ogg")) return "ogg";
  if (mime.includes("mp4") || mime.includes("m4a")) return "m4a";
  if (mime.includes("mpeg")) return "mp3";
  if (mime.includes("aac")) return "aac";
  return "wav";
}

export const voiceAnswerDefinition: ExerciseDefinition<VoiceAnswerContent, null, VoiceAnswerAnswer> = {
  id: "voice_answer",
  contentSchema: voiceAnswerContentSchema,
  keySchema: null,
  create: () => ({ content: { maxSeconds: 120 }, key: null }),
  manual: { answerSchema: voiceAnswerAnswerSchema },
};
