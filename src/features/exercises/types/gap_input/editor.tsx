"use client";

import { useTranslations } from "next-intl";
import { useId } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ExerciseEditorProps } from "../../client-types";
import { GapSourceEditor } from "../../gap-editor";
import { buildGapInput, type GapInputContent, type GapInputKey } from "./schema";
import { GapInputViewer } from "./viewer";

export function GapInputEditor({ value, onChange }: ExerciseEditorProps<GapInputContent, GapInputKey>) {
  const t = useTranslations("exercises.gaps");
  const caseId = useId();
  const key = value.key ?? { source: "", caseSensitive: false, answers: {} };
  const gaps = value.content.parts.filter((p) => p.t === "gap").length;

  const update = (source: string, caseSensitive: boolean) => onChange(buildGapInput(source, caseSensitive));

  return (
    <div className="flex flex-col gap-3">
      <GapSourceEditor
        source={key.source}
        onChange={(source) => update(source, key.caseSensitive)}
        hint={t("inputHint")}
        example={t("inputExample")}
      />
      <div className="flex items-center gap-2">
        <Checkbox
          id={caseId}
          checked={key.caseSensitive}
          onCheckedChange={(v) => update(key.source, v === true)}
        />
        <Label htmlFor={caseId} className="font-normal">
          {t("caseSensitive")}
        </Label>
      </div>
      {gaps > 0 && (
        <div className="flex flex-col gap-1 rounded-lg bg-muted/50 p-3">
          <span className="text-xs font-medium text-muted-foreground">{t("preview", { count: gaps })}</span>
          <GapInputViewer content={value.content} />
        </div>
      )}
    </div>
  );
}
