"use client";

import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import type { MultipleChoiceAnswer, MultipleChoiceContent } from "./schema";

/** Questions with options: round buttons for one right answer, squares for several. */
export function MultipleChoiceViewer({
  content,
  answer,
  onAnswer,
  result,
}: ExerciseViewerProps<MultipleChoiceContent, MultipleChoiceAnswer>) {
  const t = useTranslations("exercises.choice");
  const [selected, setSelected] = useState<Record<string, string[]>>(answer?.selected ?? {});
  const several = content.questions.length > 1;

  function toggle(qid: string, oid: string, multiple: boolean) {
    const current = selected[qid] ?? [];
    const nextIds = multiple ? (current.includes(oid) ? current.filter((x) => x !== oid) : [...current, oid]) : [oid];
    const next = { ...selected, [qid]: nextIds };
    setSelected(next);
    onAnswer?.({ selected: next }, { check: true });
  }

  return (
    <ol className="flex flex-col gap-4">
      {content.questions.map((q, qi) => {
        const verdict = result?.parts[q.id];
        const chosen = selected[q.id] ?? [];
        return (
          <li key={q.id} className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              {several && <span className="font-medium tabular-nums text-muted-foreground">{qi + 1}.</span>}
              <span className="flex-1 font-medium">{q.text}</span>
              {verdict === true && <Check className="size-5 shrink-0 text-emerald-600" aria-label={t("right")} />}
              {verdict === false && <X className="size-5 shrink-0 text-destructive" aria-label={t("wrong")} />}
            </div>
            {q.multiple && <span className="text-xs text-muted-foreground">{t("severalRight")}</span>}
            <div role={q.multiple ? "group" : "radiogroup"} aria-label={q.text || t("question", { n: qi + 1 })} className="flex flex-col gap-1.5">
              {q.options.map((o) => {
                const on = chosen.includes(o.id);
                return (
                  <button
                    key={o.id}
                    type="button"
                    role={q.multiple ? "checkbox" : "radio"}
                    aria-checked={on}
                    disabled={!onAnswer}
                    onClick={() => toggle(q.id, o.id, q.multiple)}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors hover:bg-accent/60 disabled:cursor-default disabled:hover:bg-transparent",
                      on && "border-primary bg-accent",
                      on && verdict === true && "border-emerald-500 bg-emerald-50",
                      on && verdict === false && "border-destructive bg-destructive/10",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center border-2",
                        q.multiple ? "rounded-md" : "rounded-full",
                        on ? "border-primary bg-primary text-primary-foreground" : "border-input",
                      )}
                      aria-hidden="true"
                    >
                      {on && (q.multiple ? <Check className="size-3.5" /> : <span className="size-2 rounded-full bg-current" />)}
                    </span>
                    <span>{o.text}</span>
                  </button>
                );
              })}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
