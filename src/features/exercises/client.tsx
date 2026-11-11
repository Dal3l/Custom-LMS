"use client";

// Browser-side registry: editor and student view of every implemented type.
import type { ComponentType } from "react";
import type { ExerciseTypeId } from "./catalog";
import type { ExerciseEditorProps, ExerciseViewerProps } from "./client-types";
import { AudioEditor } from "./types/audio/editor";
import { AudioViewer } from "./types/audio/viewer";
import { FileEditor } from "./types/file/editor";
import { FileViewer } from "./types/file/viewer";
import { ImageEditor } from "./types/image/editor";
import { ImageViewer } from "./types/image/viewer";
import { TextEditor } from "./types/text/editor";
import { TextViewer } from "./types/text/viewer";
import { VideoEditor } from "./types/video/editor";
import { VideoViewer } from "./types/video/viewer";

// Each type has its own content shape; the builder treats them uniformly.
export type AnyEditor = ComponentType<ExerciseEditorProps<unknown, unknown>>;
export type AnyViewer = ComponentType<ExerciseViewerProps<unknown>>;

export const EXERCISE_UI: Partial<Record<ExerciseTypeId, { Editor: AnyEditor; Viewer: AnyViewer }>> = {
  text: { Editor: TextEditor as unknown as AnyEditor, Viewer: TextViewer as unknown as AnyViewer },
  image: { Editor: ImageEditor as unknown as AnyEditor, Viewer: ImageViewer as unknown as AnyViewer },
  video: { Editor: VideoEditor as unknown as AnyEditor, Viewer: VideoViewer as unknown as AnyViewer },
  audio: { Editor: AudioEditor as unknown as AnyEditor, Viewer: AudioViewer as unknown as AnyViewer },
  file: { Editor: FileEditor as unknown as AnyEditor, Viewer: FileViewer as unknown as AnyViewer },
};
