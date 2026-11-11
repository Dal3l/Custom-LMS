import { z } from "zod";

// Error messages are keys from the "courses.errors" translation namespace.
export const titleSchema = z.string().trim().min(1, "titleRequired").max(200, "titleTooLong");

export const courseSchema = z.object({
  title: titleSchema,
  language: z.string().regex(/^[a-z]{2,3}$/, "languageRequired"),
  level: z.string().trim().max(20, "levelTooLong"),
  description: z.string().trim().max(2000, "descriptionTooLong").default(""),
});
export type CourseInput = z.infer<typeof courseSchema>;

export const idSchema = z.uuid();
export const idListSchema = z.array(z.uuid()).max(500);

/** Covers: what the "course-covers" bucket accepts. */
export const COVER_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
export const COVER_MAX_BYTES = 5 * 1024 * 1024;

export function coverProblem(file: { type: string; size: number }): "coverType" | "coverSize" | null {
  if (!(COVER_TYPES as readonly string[]).includes(file.type)) return "coverType";
  if (file.size > COVER_MAX_BYTES) return "coverSize";
  return null;
}

/** A cover path must sit in the uploader's own folder: "<userId>/<file>". */
export function isOwnCoverPath(path: string, userId: string): boolean {
  return /^[0-9a-f-]{36}\/[\w-]+\.(jpe?g|png|webp)$/i.test(path) && path.startsWith(`${userId}/`);
}
