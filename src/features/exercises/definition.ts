import type { z } from "zod";
import type { ExerciseTypeId } from "./catalog";
import type { CheckResult } from "./checking";

/**
 * Everything the server needs to know about one exercise type.
 *  - content: what the student sees (stored in exercises.content); never contains answers
 *  - key:     correct answers (stored in exercise_keys, never sent to students)
 *  - grading: how a student's answer is checked — runs on the server only
 */
export type ExerciseDefinition<Content = unknown, Key = unknown, Answer = unknown> = {
  id: ExerciseTypeId;
  contentSchema: z.ZodType<Content>;
  /** null for materials that have nothing to check */
  keySchema: z.ZodType<Key> | null;
  create: () => { content: Content; key: Key | null };
  grading?: {
    answerSchema: z.ZodType<Answer>;
    check: (content: Content, key: Key, answer: Answer) => CheckResult;
  };
};

/** The editor gets the whole state and reports the whole new state. */
export type ExerciseValue<Content = unknown, Key = unknown> = { content: Content; key: Key | null };
