import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { captionSchema, mediaFileSchema } from "../../media";

export const imageItemSchema = mediaFileSchema.extend({
  width: z.number().int().min(1).max(20000).optional(),
  height: z.number().int().min(1).max(20000).optional(),
});
export const imageContentSchema = z.object({
  images: z.array(imageItemSchema).max(10),
  caption: captionSchema,
});
export type ImageContent = z.infer<typeof imageContentSchema>;

export const imageDefinition: ExerciseDefinition<ImageContent, null> = {
  id: "image",
  contentSchema: imageContentSchema,
  keySchema: null,
  create: () => ({ content: { images: [], caption: "" }, key: null }),
};
