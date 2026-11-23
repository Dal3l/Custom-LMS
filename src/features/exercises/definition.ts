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
  /**
   * What students may see, made from the content and the key when saving
   * (e.g. a hidden note keeps its text only in the key).
   */
  publicContent?: (content: Content, key: Key) => Content;
  /** Answers checked by the teacher: only their shape is checked on the server. */
  manual?: { answerSchema: z.ZodType<Answer> };
  grading?: {
    answerSchema: z.ZodType<Answer>;
    check: (content: Content, key: Key, answer: Answer) => CheckResult;
    /**
     * Saved answers only: replaces what the browser must not decide with the
     * saved version before checking (e.g. the record of wrong tries).
     */
    prepare?: (answer: Answer, saved: Answer | null) => Answer;
    /** A complete right answer, shown when the teacher reveals the answers. */
    solution: (content: Content, key: Key) => Answer;
    /**
     * The right answers as the teacher's hints (only the teacher sees them),
     * when they differ from `solution` (e.g. every accepted variant of a gap).
     */
    hint?: (content: Content, key: Key) => Answer;
    /** Updates the answer after a check (e.g. remembers a wrong try). */
    afterCheck?: (answer: Answer, result: CheckResult) => Answer;
  };
};

/** The editor gets the whole state and reports the whole new state. */
export type ExerciseValue<Content = unknown, Key = unknown> = { content: Content; key: Key | null };
