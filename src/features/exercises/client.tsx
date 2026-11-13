"use client";

// Browser-side registry: editor and student view of every implemented type.
import type { ComponentType } from "react";
import type { ExerciseTypeId } from "./catalog";
import type { ExerciseEditorProps, ExerciseViewerProps } from "./client-types";
import { AudioEditor } from "./types/audio/editor";
import { AudioViewer } from "./types/audio/viewer";
import { CategorizeEditor } from "./types/categorize/editor";
import { CategorizeViewer } from "./types/categorize/viewer";
import { FileEditor } from "./types/file/editor";
import { FileViewer } from "./types/file/viewer";
import { GapDragEditor } from "./types/gap_drag/editor";
import { GapDragViewer } from "./types/gap_drag/viewer";
import { GapInputEditor } from "./types/gap_input/editor";
import { GapInputViewer } from "./types/gap_input/viewer";
import { GapSelectEditor } from "./types/gap_select/editor";
import { GapSelectViewer } from "./types/gap_select/viewer";
import { ImageEditor } from "./types/image/editor";
import { ImageViewer } from "./types/image/viewer";
import { MatchingEditor } from "./types/matching/editor";
import { MatchingViewer } from "./types/matching/viewer";
import { MultipleChoiceEditor } from "./types/multiple_choice/editor";
import { MultipleChoiceViewer } from "./types/multiple_choice/viewer";
import { OrderingEditor } from "./types/ordering/editor";
import { OrderingViewer } from "./types/ordering/viewer";
import { TextEditor } from "./types/text/editor";
import { TextViewer } from "./types/text/viewer";
import { TrueFalseEditor } from "./types/true_false/editor";
import { TrueFalseViewer } from "./types/true_false/viewer";
import { VideoEditor } from "./types/video/editor";
import { VideoViewer } from "./types/video/viewer";

// Each type has its own content shape; the builder treats them uniformly.
export type AnyEditor = ComponentType<ExerciseEditorProps<unknown, unknown>>;
export type AnyViewer = ComponentType<ExerciseViewerProps<unknown, unknown>>;

export const EXERCISE_UI: Partial<Record<ExerciseTypeId, { Editor: AnyEditor; Viewer: AnyViewer }>> = {
  text: { Editor: TextEditor as unknown as AnyEditor, Viewer: TextViewer as unknown as AnyViewer },
  image: { Editor: ImageEditor as unknown as AnyEditor, Viewer: ImageViewer as unknown as AnyViewer },
  video: { Editor: VideoEditor as unknown as AnyEditor, Viewer: VideoViewer as unknown as AnyViewer },
  audio: { Editor: AudioEditor as unknown as AnyEditor, Viewer: AudioViewer as unknown as AnyViewer },
  file: { Editor: FileEditor as unknown as AnyEditor, Viewer: FileViewer as unknown as AnyViewer },
  gap_input: { Editor: GapInputEditor as unknown as AnyEditor, Viewer: GapInputViewer as unknown as AnyViewer },
  gap_select: { Editor: GapSelectEditor as unknown as AnyEditor, Viewer: GapSelectViewer as unknown as AnyViewer },
  multiple_choice: { Editor: MultipleChoiceEditor as unknown as AnyEditor, Viewer: MultipleChoiceViewer as unknown as AnyViewer },
  true_false: { Editor: TrueFalseEditor as unknown as AnyEditor, Viewer: TrueFalseViewer as unknown as AnyViewer },
  gap_drag: { Editor: GapDragEditor as unknown as AnyEditor, Viewer: GapDragViewer as unknown as AnyViewer },
  matching: { Editor: MatchingEditor as unknown as AnyEditor, Viewer: MatchingViewer as unknown as AnyViewer },
  ordering: { Editor: OrderingEditor as unknown as AnyEditor, Viewer: OrderingViewer as unknown as AnyViewer },
  categorize: { Editor: CategorizeEditor as unknown as AnyEditor, Viewer: CategorizeViewer as unknown as AnyViewer },
};
