"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MAX_ATTEMPTS, normalizeAnswer } from "../../checking";
import type { ExerciseViewerProps } from "../../client-types";
import { verdictClass } from "../../result-styles";
import type { GapInputAnswer, GapInputContent } from "./schema";

/**
 * Text with typing gaps. A gap is checked when the student presses Enter or
 * leaves it. Each gap has MAX_ATTEMPTS tries; after that the server shows the
 * right answer. Right and revealed gaps are locked.
 */
export function GapInputViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<GapInputContent, GapInputAnswer>) {
  const t = useTranslations("exercises.gaps");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});
  // Earlier wrong tries per gap (what the student typed).
  const [attempts, setAttempts] = useState<Record<string, string[]>>(answer?.attempts ?? {});
  const [revealed, setRevealed] = useState<Record<string, string>>({});
  const [lastChecked, setLastChecked] = useState<Record<string, string>>({});

  const same = (a: string, b: string) => normalizeAnswer(a) === normalizeAnswer(b);

  function type(id: string, text: string) {
    const next = { ...values, [id]: text.slice(0, 200) };
    setValues(next);
    onAnswer?.({ values: next, attempts }, { check: false });
  }

  async function check(id: string) {
    const value = values[id] ?? "";
    if (!onAnswer || revealed[id] || result?.parts[id] === true) return;
    if (!value.trim() || (lastChecked[id] !== undefined && same(lastChecked[id]!, value))) return;
    setLastChecked((prev) => ({ ...prev, [id]: value }));

    const verdict = await onAnswer({ values, attempts }, { check: true });
    if (!verdict) {
      // Not checked (e.g. no internet): let the same word be tried again.
      setLastChecked(({ [id]: _drop, ...rest }) => (void _drop, rest));
      return;
    }

    // Remember wrong tries (each different word once).
    setAttempts((prev) => {
      const next = { ...prev };
      for (const [gap, ok] of Object.entries(verdict.parts)) {
        const typed = values[gap] ?? "";
        if (ok === false && typed.trim() && !(next[gap] ?? []).some((a) => same(a, typed))) {
          next[gap] = [...(next[gap] ?? []), typed].slice(-MAX_ATTEMPTS);
        }
      }
      return next;
    });
    if (verdict.reveal) setRevealed((prev) => ({ ...prev, ...verdict.reveal }));
  }

  return (
    <p className="leading-[2.8] whitespace-pre-wrap">
      {content.parts.map((part, i) => {
        if (part.t === "text") return <span key={i}>{part.text}</span>;
        const n = Number(part.id.slice(1));
        const shown = revealed[part.id];
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
              onBlur={() => void check(part.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void check(part.id);
                }
              }}
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
