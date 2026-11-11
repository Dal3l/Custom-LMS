import type { z } from "zod";
import type { ExerciseTypeId } from "./catalog";

/**
 * Everything the server needs to know about one exercise type.
 *  - content: what the student sees (stored in exercises.content)
 *  - key:     correct answers (stored in exercise_keys, never sent to students)
 * Answer checking (`check`) is added in step 1.4.
 */
export type ExerciseDefinition<Content = unknown, Key = unknown> = {
  id: ExerciseTypeId;
  contentSchema: z.ZodType<Content>;
  /** null for materials that have nothing to check */
  keySchema: z.ZodType<Key> | null;
  create: () => { content: Content; key: Key | null };
};

/** The editor gets the whole state and reports the whole new state. */
export type ExerciseValue<Content = unknown, Key = unknown> = { content: Content; key: Key | null };
