"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import { verdictClass } from "../../result-styles";
import type { GapSelectAnswer, GapSelectContent } from "./schema";

/** Text with a dropdown in each gap; a choice is checked right away. */
export function GapSelectViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<GapSelectContent, GapSelectAnswer>) {
  const t = useTranslations("exercises.gaps");
  const [values, setValues] = useState<Record<string, number>>(answer?.values ?? {});

  return (
    <p className="leading-[2.6] whitespace-pre-wrap">
      {content.parts.map((part, i) => {
        if (part.t === "text") return <span key={i}>{part.text}</span>;
        const n = Number(part.id.slice(1));
        const verdict = result?.parts[part.id];
        const value = values[part.id];
        return (
          <span key={part.id} className="relative mx-0.5 inline-block align-baseline">
            <select
              value={value ?? ""}
              disabled={!onAnswer}
              aria-label={t("gapLabel", { n })}
              aria-invalid={verdict === false || undefined}
              onChange={(e) => {
                const next = { ...values, [part.id]: Number(e.target.value) };
                setValues(next);
                onAnswer?.({ values: next }, { check: true });
              }}
              className={cn(
                "h-8 appearance-none rounded-md border border-input bg-background py-0 pr-7 pl-2 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:bg-muted/60",
                value === undefined && "text-muted-foreground",
                verdictClass(verdict),
              )}
            >
              <option value="" disabled>
                …
              </option>
              {part.options.map((option, index) => (
                <option key={index} value={index}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 opacity-60" aria-hidden="true" />
          </span>
        );
      })}
    </p>
  );
}
