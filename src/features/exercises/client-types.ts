import type { CheckResult } from "./checking";
import type { ExerciseValue } from "./definition";

export type ExerciseEditorProps<Content, Key> = {
  value: ExerciseValue<Content, Key>;
  onChange: (value: ExerciseValue<Content, Key>) => void;
};

/**
 * Student view. Materials only use `content`. Exercises with answers also get the
 * current answer, report changes with onAnswer (check: true = check it now) and
 * show the server's verdict from `result` — never the correct answers themselves.
 */
export type ExerciseViewerProps<Content, Answer = unknown> = {
  content: Content;
  /** set in the student view; lets a viewer keep the student's own notes (e.g. highlights) */
  exerciseId?: string;
  answer?: Answer | null;
  /** With check: true the answer is checked now; resolves with the verdict (null if it failed). */
  onAnswer?: (answer: Answer, options: { check: boolean }) => Promise<CheckResult | null> | void;
  result?: CheckResult | null;
};
