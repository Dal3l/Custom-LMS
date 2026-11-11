import { z } from "zod";

// Files for lesson materials live in the public "lesson-media" bucket under
// "<teacher id>/<random uuid>.<ext>". Safe to import anywhere.

export const MEDIA_BUCKET = "lesson-media";
export const MEDIA_MAX_BYTES = 50 * 1024 * 1024; // Supabase free plan limit per file

export const MEDIA_KINDS = {
  image: { types: { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }, maxBytes: 10 * 1024 * 1024 },
  audio: {
    types: {
      "audio/mpeg": "mp3",
      "audio/mp4": "m4a",
      "audio/x-m4a": "m4a",
      "audio/aac": "aac",
      "audio/wav": "wav",
      "audio/x-wav": "wav",
      "audio/ogg": "ogg",
      "audio/webm": "webm",
    },
    maxBytes: MEDIA_MAX_BYTES,
  },
  file: {
    types: {
      "application/pdf": "pdf",
      "application/msword": "doc",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
      "application/vnd.ms-powerpoint": "ppt",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    },
    maxBytes: MEDIA_MAX_BYTES,
  },
} as const;
export type MediaKind = keyof typeof MEDIA_KINDS;

const EXTENSIONS = "jpg|png|webp|gif|mp3|m4a|aac|wav|ogg|webm|pdf|doc|docx|ppt|pptx";
const UUID = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
export const mediaPathSchema = z.string().regex(new RegExp(`^${UUID}/${UUID}\\.(${EXTENSIONS})$`));

/** A stored file as referenced from exercise content. */
export const mediaFileSchema = z.object({
  path: mediaPathSchema,
  /** original file name, shown to students */
  name: z.string().trim().min(1).max(200),
  size: z.number().int().min(0).max(MEDIA_MAX_BYTES),
  mime: z.string().max(120),
});
export type MediaFile = z.infer<typeof mediaFileSchema>;

export const captionSchema = z.string().max(300);

/** Why a file cannot be used for this kind of material, or null. */
export function mediaProblem(file: { type: string; size: number }, kind: MediaKind): "type" | "size" | null {
  const config = MEDIA_KINDS[kind];
  if (!(file.type in config.types)) return "type";
  if (file.size > config.maxBytes) return "size";
  return null;
}

export function mediaExtension(mime: string, kind: MediaKind): string | null {
  return (MEDIA_KINDS[kind].types as Record<string, string>)[mime] ?? null;
}

export function acceptAttribute(kind: MediaKind): string {
  return Object.keys(MEDIA_KINDS[kind].types).join(",");
}

/** Public URL of a lesson file. */
export function mediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  return `${base}/storage/v1/object/public/${MEDIA_BUCKET}/${path}`;
}

/** 1536000 → "1.5 MB" */
export function formatBytes(bytes: number, locale: string): string {
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(mb)} MB`;
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.max(1, bytes / 1024))} KB`;
}
