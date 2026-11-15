"use client";

import { useTranslations } from "next-intl";
import type { ExerciseEditorProps } from "../../client-types";
import { CaptionInput } from "../../caption-input";
import type { WhiteboardContent } from "./schema";

export function WhiteboardEditor({ value, onChange }: ExerciseEditorProps<WhiteboardContent, null>) {
  const t = useTranslations("exercises.whiteboard");
  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">{t("editorHint")}</p>
      <CaptionInput value={value.content.caption} onChange={(caption) => onChange({ content: { caption }, key: null })} />
    </div>
  );
}
