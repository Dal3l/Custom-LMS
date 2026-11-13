"use client";

import { TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ExerciseEditorProps } from "../../client-types";
import { GapSourceEditor } from "../../gap-editor";
import { buildGapSelect, type GapSelectContent, type GapSelectKey } from "./schema";
import { GapSelectViewer } from "./viewer";

export function GapSelectEditor({ value, onChange }: ExerciseEditorProps<GapSelectContent, GapSelectKey>) {
  const t = useTranslations("exercises.gaps");
  const source = value.key?.source ?? "";
  const { problems } = buildGapSelect(source);
  const gaps = value.content.parts.filter((p) => p.t === "gap").length;

  return (
    <div className="flex flex-col gap-3">
      <GapSourceEditor
        source={source}
        onChange={(next) => {
          const { content, key } = buildGapSelect(next);
          onChange({ content, key });
        }}
        hint={t("selectHint")}
        example={t("selectExample")}
      />
      {problems.length > 0 && (
        <ul className="flex flex-col gap-1 text-sm text-amber-700">
          {problems.map((p) => (
            <li key={`${p.id}-${p.problem}`} className="flex items-center gap-1.5">
              <TriangleAlert className="size-4 shrink-0" aria-hidden="true" />
              {t(`problems.${p.problem}`, { n: Number(p.id.slice(1)) })}
            </li>
          ))}
        </ul>
      )}
      {gaps > 0 && (
        <div className="flex flex-col gap-1 rounded-lg bg-muted/50 p-3">
          <span className="text-xs font-medium text-muted-foreground">{t("preview", { count: gaps })}</span>
          <GapSelectViewer content={value.content} />
        </div>
      )}
    </div>
  );
}
