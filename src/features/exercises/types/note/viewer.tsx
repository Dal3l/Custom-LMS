"use client";

import type { ExerciseViewerProps } from "../../client-types";
import { TextViewer } from "../text/viewer";
import type { NoteContent } from "./schema";

/** The note's text (nothing when it is hidden from this person). */
export function NoteViewer({ content }: ExerciseViewerProps<NoteContent>) {
  if (!content.doc) return null;
  return <TextViewer content={{ doc: content.doc }} />;
}
