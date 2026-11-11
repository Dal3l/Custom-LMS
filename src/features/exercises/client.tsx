"use client";

// Browser-side registry: editor and student view of every implemented type.
import type { ComponentType } from "react";
import type { ExerciseTypeId } from "./catalog";
import type { ExerciseEditorProps, ExerciseViewerProps } from "./client-types";
import { TextEditor } from "./types/text/editor";
import { TextViewer } from "./types/text/viewer";

// Each type has its own content shape; the builder treats them uniformly.
export type AnyEditor = ComponentType<ExerciseEditorProps<unknown, unknown>>;
export type AnyViewer = ComponentType<ExerciseViewerProps<unknown>>;

export const EXERCISE_UI: Partial<Record<ExerciseTypeId, { Editor: AnyEditor; Viewer: AnyViewer }>> = {
  text: { Editor: TextEditor as unknown as AnyEditor, Viewer: TextViewer as unknown as AnyViewer },
};
