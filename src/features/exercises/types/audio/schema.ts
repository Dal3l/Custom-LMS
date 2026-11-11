import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { captionSchema, mediaFileSchema } from "../../media";

export const audioContentSchema = z.object({ file: mediaFileSchema.nullable(), caption: captionSchema });
export type AudioContent = z.infer<typeof audioContentSchema>;

export const audioDefinition: ExerciseDefinition<AudioContent, null> = {
  id: "audio",
  contentSchema: audioContentSchema,
  keySchema: null,
  create: () => ({ content: { file: null, caption: "" }, key: null }),
};

export const PLAYBACK_RATES = [0.75, 1, 1.25] as const;
