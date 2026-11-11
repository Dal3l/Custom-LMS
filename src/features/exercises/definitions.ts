// Server-safe registry: schemas and defaults of every implemented type.
import type { ExerciseTypeId } from "./catalog";
import type { ExerciseDefinition } from "./definition";
import { textDefinition } from "./types/text/schema";

export const DEFINITIONS: Partial<Record<ExerciseTypeId, ExerciseDefinition>> = {
  text: textDefinition as ExerciseDefinition,
};

export function getDefinition(type: string): ExerciseDefinition | null {
  return (DEFINITIONS as Record<string, ExerciseDefinition | undefined>)[type] ?? null;
}
