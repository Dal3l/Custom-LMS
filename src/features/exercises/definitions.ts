// Server-safe registry: schemas and defaults of every implemented type.
import type { ExerciseTypeId } from "./catalog";
import type { ExerciseDefinition } from "./definition";
import { audioDefinition } from "./types/audio/schema";
import { fileDefinition } from "./types/file/schema";
import { gapInputDefinition } from "./types/gap_input/schema";
import { gapSelectDefinition } from "./types/gap_select/schema";
import { imageDefinition } from "./types/image/schema";
import { multipleChoiceDefinition } from "./types/multiple_choice/schema";
import { textDefinition } from "./types/text/schema";
import { trueFalseDefinition } from "./types/true_false/schema";
import { videoDefinition } from "./types/video/schema";

export const DEFINITIONS: Partial<Record<ExerciseTypeId, ExerciseDefinition>> = {
  text: textDefinition as ExerciseDefinition,
  image: imageDefinition as ExerciseDefinition,
  video: videoDefinition as ExerciseDefinition,
  audio: audioDefinition as ExerciseDefinition,
  file: fileDefinition as ExerciseDefinition,
  gap_input: gapInputDefinition as ExerciseDefinition,
  gap_select: gapSelectDefinition as ExerciseDefinition,
  multiple_choice: multipleChoiceDefinition as ExerciseDefinition,
  true_false: trueFalseDefinition as ExerciseDefinition,
};

export function getDefinition(type: string): ExerciseDefinition | null {
  return (DEFINITIONS as Record<string, ExerciseDefinition | undefined>)[type] ?? null;
}
