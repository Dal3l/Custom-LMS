"use client";

import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import { countWords, MAX_OPEN_ANSWER, type OpenAnswerAnswer, type OpenAnswerContent } from "./schema";

/** A text box with a word counter; read-only for the teacher. */
export function OpenAnswerViewer({ content, answer, onAnswer }: ExerciseViewerProps<OpenAnswerContent, OpenAnswerAnswer>) {
  const t = useTranslations("exercises.openAnswer");
  const text = answer?.text ?? "";
  const words = countWords(text);
  const min = content.minWords;
  const enough = !min || words >= min;

  if (!onAnswer) {
    return text ? (
      <p className="rounded-xl border bg-muted/40 p-3 whitespace-pre-wrap break-words">{text}</p>
    ) : (
      <p className="text-sm text-muted-foreground">{t("empty")}</p>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Textarea
        value={text}
        onChange={(e) => onAnswer({ text: e.target.value.slice(0, MAX_OPEN_ANSWER) }, { check: false })}
        placeholder={t("placeholder")}
        aria-label={t("label")}
        rows={min && min > 60 ? 8 : 4}
        className="text-base"
      />
      <p className={cn("text-sm tabular-nums", enough ? "text-muted-foreground" : "text-amber-700")} aria-live="polite">
        {min ? t("wordsOfMin", { count: words, min }) : t("words", { count: words })}
      </p>
    </div>
  );
}
