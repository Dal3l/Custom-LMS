import { z } from "zod";

/** The fields of a word card the student (or teacher) fills in. */
export const wordFields = z.object({
  term: z.string().trim().min(1).max(200),
  translation: z.string().trim().max(500),
  transcription: z.string().trim().max(200),
  example: z.string().trim().max(1000),
  audioUrl: z
    .string()
    .trim()
    .max(500)
    .regex(/^https:\/\//i)
    .nullable(),
});
export type WordFields = z.infer<typeof wordFields>;

/** Where a word was added: a lesson of a class (all optional for a word typed in on the Dictionary page). */
export const wordPlace = z.object({
  language: z.string().regex(/^[a-z]{2,3}$/),
  courseId: z.uuid().nullable(),
  lessonId: z.uuid().nullable(),
  classId: z.uuid().nullable(),
});
export type WordPlace = z.infer<typeof wordPlace>;
