"use client";

import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { ExerciseEditorProps } from "../../client-types";
import { TextEditor } from "../text/editor";
import type { TextContent } from "../text/schema";
import type { NoteContent, NoteKey } from "./schema";

/** The note's text and whether students see it (the eye). */
export function NoteEditor({ value, onChange }: ExerciseEditorProps<NoteContent, NoteKey>) {
  const t = useTranslations("exercises.note");
  const shown = value.content.shown;
  const doc = value.key?.doc ?? value.content.doc;
  const set = (next: { shown?: boolean; doc?: NoteKey["doc"] }) => {
    const s = next.shown ?? shown;
    const d = next.doc ?? doc;
    if (!d) return;
    onChange({ content: { shown: s, doc: s ? d : null }, key: { doc: d } });
  };
  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="self-start"
        aria-pressed={shown}
        onClick={() => set({ shown: !shown })}
      >
        {shown ? <Eye aria-hidden="true" /> : <EyeOff aria-hidden="true" />}
        {shown ? t("shown") : t("hidden")}
      </Button>
      <p className="text-xs text-muted-foreground">{shown ? t("shownHint") : t("hiddenHint")}</p>
      <TextEditor
        value={{ content: { doc: doc ?? { type: "doc", content: [{ type: "paragraph" }] } }, key: null }}
        onChange={(v: { content: TextContent }) => set({ doc: v.content.doc })}
      />
    </div>
  );
}
