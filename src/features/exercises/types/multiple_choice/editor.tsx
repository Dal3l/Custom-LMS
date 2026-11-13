"use client";

import { Plus, Trash2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { ExerciseEditorProps } from "../../client-types";
import { newItemId } from "../../item-id";
import { emptyQuestion, MAX_CHOICES, MAX_QUESTIONS, type MultipleChoiceContent, type MultipleChoiceKey } from "./schema";

export function MultipleChoiceEditor({ value, onChange }: ExerciseEditorProps<MultipleChoiceContent, MultipleChoiceKey>) {
  const t = useTranslations("exercises.choice");
  const questions = value.content.questions;
  const correct = value.key?.correct ?? {};

  function emit(nextQuestions: MultipleChoiceContent["questions"], nextCorrect: MultipleChoiceKey["correct"]) {
    // Keep only keys of existing questions/options; "several right" follows the marks.
    const cleaned: MultipleChoiceKey["correct"] = {};
    const withFlags = nextQuestions.map((q) => {
      const ids = new Set(q.options.map((o) => o.id));
      cleaned[q.id] = (nextCorrect[q.id] ?? []).filter((id) => ids.has(id));
      return { ...q, multiple: cleaned[q.id]!.length > 1 };
    });
    onChange({ content: { ...value.content, questions: withFlags }, key: { correct: cleaned } });
  }

  const patchQuestion = (qid: string, patch: Partial<MultipleChoiceContent["questions"][number]>) =>
    emit(questions.map((q) => (q.id === qid ? { ...q, ...patch } : q)), correct);

  return (
    <div className="flex flex-col gap-4">
      {questions.map((q, qi) => (
        <fieldset key={q.id} className="flex flex-col gap-2 rounded-lg border p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tabular-nums text-muted-foreground">{qi + 1}.</span>
            <Input
              value={q.text}
              onChange={(e) => patchQuestion(q.id, { text: e.target.value.slice(0, 500) })}
              placeholder={t("questionPlaceholder")}
              aria-label={t("question", { n: qi + 1 })}
            />
            {questions.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                aria-label={t("removeQuestion", { n: qi + 1 })}
                onClick={() => {
                  const { [q.id]: _removed, ...rest } = correct;
                  void _removed;
                  emit(questions.filter((x) => x.id !== q.id), rest);
                }}
              >
                <Trash2 aria-hidden="true" />
              </Button>
            )}
          </div>
          <ul className="flex flex-col gap-1.5 pl-5">
            {q.options.map((o, oi) => {
              const isRight = (correct[q.id] ?? []).includes(o.id);
              return (
                <li key={o.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={isRight}
                    aria-label={t("markRight", { n: oi + 1 })}
                    title={t("markRight", { n: oi + 1 })}
                    onCheckedChange={(v) => {
                      const now = new Set(correct[q.id] ?? []);
                      if (v === true) now.add(o.id);
                      else now.delete(o.id);
                      emit(questions, { ...correct, [q.id]: [...now] });
                    }}
                  />
                  <Input
                    value={o.text}
                    onChange={(e) =>
                      patchQuestion(q.id, {
                        options: q.options.map((x) => (x.id === o.id ? { ...x, text: e.target.value.slice(0, 300) } : x)),
                      })
                    }
                    placeholder={t("optionPlaceholder", { n: oi + 1 })}
                    aria-label={t("option", { n: oi + 1 })}
                    className={isRight ? "border-emerald-500" : undefined}
                  />
                  {q.options.length > 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8 shrink-0"
                      aria-label={t("removeOption", { n: oi + 1 })}
                      onClick={() => patchQuestion(q.id, { options: q.options.filter((x) => x.id !== o.id) })}
                    >
                      <X aria-hidden="true" />
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap items-center gap-2 pl-5">
            {q.options.length < MAX_CHOICES && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary"
                onClick={() => patchQuestion(q.id, { options: [...q.options, { id: newItemId(), text: "" }] })}
              >
                <Plus aria-hidden="true" />
                {t("addOption")}
              </Button>
            )}
            {(correct[q.id] ?? []).length === 0 && <span className="text-sm text-amber-700">{t("markHint")}</span>}
          </div>
        </fieldset>
      ))}
      {questions.length < MAX_QUESTIONS && (
        <Button type="button" variant="outline" size="sm" className="w-fit" onClick={() => emit([...questions, emptyQuestion()], correct)}>
          <Plus aria-hidden="true" />
          {t("addQuestion")}
        </Button>
      )}
    </div>
  );
}
