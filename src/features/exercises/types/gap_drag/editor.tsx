"use client";

import { useTranslations } from "next-intl";
import { FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ExerciseEditorProps } from "../../client-types";
import { GapSourceEditor } from "../../gap-editor";
import { buildGapDrag, type GapDragContent, type GapDragKey } from "./schema";
import { GapDragViewer } from "./viewer";

export function GapDragEditor({ value, onChange }: ExerciseEditorProps<GapDragContent, GapDragKey>) {
  const t = useTranslations("exercises.gaps");
  const key = value.key!;
  const gaps = value.content.parts.filter((p) => p.t === "gap").length;
  const update = (source: string, distractors: string) => onChange(buildGapDrag(source, distractors, key.salt));

  return (
    <div className="flex flex-col gap-3">
      <GapSourceEditor
        source={key.source}
        onChange={(source) => update(source, key.distractors)}
        hint={t("dragHint")}
        example={t("inputExample")}
      />
      <div className="flex flex-col gap-1.5">
        <Input
          value={key.distractors}
          onChange={(e) => update(key.source, e.target.value.slice(0, 2000))}
          placeholder={t("distractorsPlaceholder")}
          aria-label={t("distractors")}
        />
        <FieldDescription>{t("distractorsHint")}</FieldDescription>
      </div>
      {gaps > 0 && (
        <div className="flex flex-col gap-1 rounded-lg bg-muted/50 p-3">
          <span className="text-xs font-medium text-muted-foreground">{t("preview", { count: gaps })}</span>
          <GapDragViewer content={value.content} />
        </div>
      )}
    </div>
  );
}
