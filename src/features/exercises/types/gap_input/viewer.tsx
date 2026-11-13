"use client";

import { useTranslations } from "next-intl";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MAX_ATTEMPTS } from "../../checking";
import type { ExerciseViewerProps } from "../../client-types";
import { verdictClass } from "../../result-styles";
import type { GapInputAnswer, GapInputContent } from "./schema";

/**
 * Text with typing gaps. The student fills them in and presses "Check" (below).
 * Each gap has MAX_ATTEMPTS tries; then the server shows the right answer.
 * Right and revealed gaps are locked. The answer (words + earlier tries) is
 * kept by the lesson player, so this view just shows it.
 */
export function GapInputViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<GapInputContent, GapInputAnswer>) {
  const t = useTranslations("exercises.gaps");
  const values = answer?.values ?? {};
  const attempts = answer?.attempts ?? {};

  function type(id: string, text: string) {
    onAnswer?.({ values: { ...values, [id]: text.slice(0, 200) }, attempts }, { check: false });
  }

  return (
    <p className="leading-[2.8] whitespace-pre-wrap">
      {content.parts.map((part, i) => {
        if (part.t === "text") return <span key={i}>{part.text}</span>;
        const n = Number(part.id.slice(1));
        const shown = result?.reveal?.[part.id];
        const verdict = result?.parts[part.id];
        const right = verdict === true;
        const tries = attempts[part.id] ?? [];
        const value = shown ?? values[part.id] ?? "";
        return (
          <span key={part.id} className="mx-0.5 inline-flex items-center gap-1 align-baseline">
            <input
              type="text"
              value={value}
              readOnly={Boolean(shown) || right}
              disabled={!onAnswer}
              onChange={(e) => type(part.id, e.target.value)}
              aria-label={t("gapLabel", { n })}
              aria-invalid={verdict === false || undefined}
              title={shown ? t("revealed", { max: MAX_ATTEMPTS }) : undefined}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              size={Math.max(6, value.length + 1)}
              className={cn(
                "inline-block h-8 max-w-full rounded-md border border-input bg-background px-2 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:bg-muted/60 read-only:cursor-default",
                shown ? "border-amber-400 bg-amber-50 text-amber-900" : verdictClass(verdict),
              )}
            />
            {tries.length > 0 && !right && (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="rounded-full bg-muted px-1.5 text-xs leading-5 font-medium tabular-nums text-muted-foreground hover:bg-accent"
                    aria-label={t("attempts", { n: tries.length, max: MAX_ATTEMPTS })}
                  >
                    {tries.length}/{MAX_ATTEMPTS}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 leading-normal" align="start">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">{t("history")}</p>
                  <ol className="flex flex-col gap-0.5">
                    {tries.map((a, k) => (
                      <li key={k} className="text-sm text-destructive line-through">
                        {a}
                      </li>
                    ))}
                  </ol>
                  {shown && <p className="mt-2 text-xs text-amber-800">{t("revealed", { max: MAX_ATTEMPTS })}</p>}
                </PopoverContent>
              </Popover>
            )}
          </span>
        );
      })}
    </p>
  );
}
