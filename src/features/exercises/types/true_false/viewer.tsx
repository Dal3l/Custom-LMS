"use client";

import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import type { TrueFalseAnswer, TrueFalseContent } from "./schema";

export function TrueFalseViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<TrueFalseContent, TrueFalseAnswer>) {
  const t = useTranslations("exercises.trueFalse");
  const [values, setValues] = useState<Record<string, boolean>>(answer?.values ?? {});

  return (
    <ol className="flex flex-col gap-2">
      {content.statements.map((s, i) => {
        const verdict = result?.parts[s.id];
        const value = values[s.id];
        return (
          <li
            key={s.id}
            className={cn(
              "flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center",
              verdict === true && "border-emerald-500 bg-emerald-50",
              verdict === false && "border-destructive bg-destructive/10",
            )}
          >
            <span className="flex min-w-0 flex-1 gap-2">
              <span className="font-medium tabular-nums text-muted-foreground">{i + 1}.</span>
              <span>{s.text}</span>
            </span>
            <span className="flex items-center gap-1 self-end sm:self-auto" role="radiogroup" aria-label={s.text || t("statement", { n: i + 1 })}>
              {verdict === true && <Check className="size-5 text-emerald-600" aria-label={t("right")} />}
              {verdict === false && <X className="size-5 text-destructive" aria-label={t("wrong")} />}
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  role="radio"
                  aria-checked={value === v}
                  disabled={!onAnswer}
                  onClick={() => {
                    const next = { ...values, [s.id]: v };
                    setValues(next);
                    onAnswer?.({ values: next }, { check: true });
                  }}
                  className={cn(
                    "min-h-10 rounded-lg border px-4 text-sm font-medium transition-colors hover:bg-accent disabled:cursor-default disabled:hover:bg-transparent",
                    value === v && "border-primary bg-primary text-primary-foreground hover:bg-primary",
                  )}
                >
                  {v ? t("true") : t("false")}
                </button>
              ))}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
