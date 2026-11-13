"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import type { ExerciseViewerProps } from "../../client-types";
import { verdictClass } from "../../result-styles";
import { cn } from "@/lib/utils";
import type { GapInputAnswer, GapInputContent } from "./schema";

/** Text with typing gaps. A gap is checked when the student leaves it or presses Enter. */
export function GapInputViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<GapInputContent, GapInputAnswer>) {
  const t = useTranslations("exercises.gaps");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});

  function change(id: string, text: string, check: boolean) {
    const next = { ...values, [id]: text };
    setValues(next);
    onAnswer?.({ values: next }, { check });
  }

  return (
    <p className="leading-[2.6] whitespace-pre-wrap">
      {content.parts.map((part, i) => {
        if (part.t === "text") return <span key={i}>{part.text}</span>;
        const n = Number(part.id.slice(1));
        const verdict = result?.parts[part.id];
        const value = values[part.id] ?? "";
        return (
          <input
            key={part.id}
            type="text"
            value={value}
            disabled={!onAnswer}
            onChange={(e) => change(part.id, e.target.value.slice(0, 200), false)}
            onBlur={(e) => change(part.id, e.target.value.slice(0, 200), true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                change(part.id, e.currentTarget.value.slice(0, 200), true);
              }
            }}
            aria-label={t("gapLabel", { n })}
            aria-invalid={verdict === false || undefined}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            size={Math.max(6, value.length + 1)}
            className={cn(
              "mx-0.5 inline-block h-8 max-w-full rounded-md border border-input bg-background px-2 align-baseline text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:bg-muted/60",
              verdictClass(verdict),
            )}
          />
        );
      })}
    </p>
  );
}
