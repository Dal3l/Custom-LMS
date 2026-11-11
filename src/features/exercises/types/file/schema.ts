import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { captionSchema, mediaFileSchema } from "../../media";

export const fileContentSchema = z.object({ file: mediaFileSchema.nullable(), caption: captionSchema });
export type FileContent = z.infer<typeof fileContentSchema>;

export const fileDefinition: ExerciseDefinition<FileContent, null> = {
  id: "file",
  contentSchema: fileContentSchema,
  keySchema: null,
  create: () => ({ content: { file: null, caption: "" }, key: null }),
};
