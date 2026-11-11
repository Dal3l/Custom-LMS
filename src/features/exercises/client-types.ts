import type { ExerciseValue } from "./definition";

export type ExerciseEditorProps<Content, Key> = {
  value: ExerciseValue<Content, Key>;
  onChange: (value: ExerciseValue<Content, Key>) => void;
};

export type ExerciseViewerProps<Content> = {
  content: Content;
};
