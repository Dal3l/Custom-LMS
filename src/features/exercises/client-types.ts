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
  answer?: Answer | null;
  onAnswer?: (answer: Answer, options: { check: boolean }) => void;
  result?: CheckResult | null;
};
