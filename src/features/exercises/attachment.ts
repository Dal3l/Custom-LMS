import { z } from "zod";
import { imageItemSchema } from "./types/image/schema";
import { mediaFileSchema } from "./media";
import { videoRefSchema } from "./types/video/schema";

// "Media on top" of an exercise with answers (SPEC §5): a picture, audio or video
// shown above the questions, e.g. a video and questions about it.
export const attachmentSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("image"), images: z.array(imageItemSchema).max(10) }),
  z.object({ kind: z.literal("audio"), file: mediaFileSchema.nullable() }),
  z.object({ kind: z.literal("video"), video: videoRefSchema.nullable() }),
]);
export type Attachment = z.infer<typeof attachmentSchema>;
export type AttachmentKind = Attachment["kind"];

/** Adds the optional `attachment` field to a type's content schema. */
export function withAttachment<T extends z.ZodRawShape>(shape: T) {
  return z.object({ ...shape, attachment: attachmentSchema.nullable().optional() });
}
