"use client";

import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import { Eraser, Highlighter } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { ExerciseViewerProps } from "../../client-types";
import { textExtensions } from "./extensions";
import type { TextContent } from "./schema";
import { applyStudentHighlight, restoreHighlights, saveHighlights } from "./student-highlights";

/** Read-only text. In the student view, selected words can be highlighted for oneself. */
export function TextViewer({ content, exerciseId }: ExerciseViewerProps<TextContent>) {
  const editor = useEditor({
    extensions: textExtensions,
    content: content.doc,
    editable: false,
    immediatelyRender: false,
    editorProps: { attributes: { class: "rich-text outline-none" } },
    onCreate: ({ editor }) => {
      if (exerciseId) restoreHighlights(exerciseId, editor);
    },
  });

  return (
    <div>
      <EditorContent editor={editor} />
      {exerciseId && editor && <HighlightBar editor={editor} exerciseId={exerciseId} />}
    </div>
  );
}

type Selected = { from: number; to: number; top: number; left: number };

/** Small "Highlight / Remove" bar under the student's text selection. */
function HighlightBar({ editor, exerciseId }: { editor: Editor; exerciseId: string }) {
  const t = useTranslations("player.highlight");
  const [selected, setSelected] = useState<Selected | null>(null);

  useEffect(() => {
    const root = editor.view.dom;
    function update() {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return setSelected(null);
      const range = sel.getRangeAt(0);
      if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return setSelected(null);
      try {
        const from = editor.view.posAtDOM(range.startContainer, range.startOffset);
        const to = editor.view.posAtDOM(range.endContainer, range.endOffset);
        // Fixed to the screen (cards clip their contents), kept inside its width.
        const rect = range.getBoundingClientRect();
        const left = Math.min(Math.max(8, rect.left), window.innerWidth - 240);
        if (to > from) setSelected({ from, to, top: rect.bottom + 8, left });
        else setSelected(null);
      } catch {
        setSelected(null);
      }
    }
    const hide = () => setSelected(null);
    document.addEventListener("selectionchange", update);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      document.removeEventListener("selectionchange", update);
      window.removeEventListener("scroll", hide);
    };
  }, [editor]);

  if (!selected) return null;

  function apply(on: boolean) {
    if (!selected) return;
    applyStudentHighlight(editor, selected.from, selected.to, on);
    saveHighlights(exerciseId, editor);
    window.getSelection()?.removeAllRanges();
    setSelected(null);
  }

  return (
    <div
      className="fixed z-50 flex gap-1 rounded-lg border bg-popover p-1 shadow-md"
      style={{ top: selected.top, left: selected.left }}
      // Keep the text selected while pressing the buttons.
      onMouseDown={(e) => e.preventDefault()}
    >
      <Button type="button" size="sm" variant="ghost" onClick={() => apply(true)}>
        <Highlighter aria-hidden="true" className="text-orange-500" />
        {t("mark")}
      </Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => apply(false)}>
        <Eraser aria-hidden="true" />
        {t("remove")}
      </Button>
    </div>
  );
}
