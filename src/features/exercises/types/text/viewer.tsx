"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import type { ExerciseViewerProps } from "../../client-types";
import { textExtensions } from "./extensions";
import type { TextContent } from "./schema";

/** Read-only rendering for students and the preview. */
export function TextViewer({ content }: ExerciseViewerProps<TextContent>) {
  const editor = useEditor({
    extensions: textExtensions,
    content: content.doc,
    editable: false,
    immediatelyRender: false,
    editorProps: { attributes: { class: "rich-text outline-none" } },
  });
  return <EditorContent editor={editor} />;
}
