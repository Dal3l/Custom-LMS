"use client";

import { Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLessonLanguage } from "../../lesson-language";
import { trueFalseLabels } from "./labels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ExerciseEditorProps } from "../../client-types";
import { emptyStatement, MAX_STATEMENTS, type TrueFalseContent, type TrueFalseKey } from "./schema";

export function TrueFalseEditor({ value, onChange }: ExerciseEditorProps<TrueFalseContent, TrueFalseKey>) {
  const t = useTranslations("exercises.trueFalse");
  const lessonLabels = trueFalseLabels(useLessonLanguage());
  const label = (v: boolean) => (lessonLabels ? lessonLabels[v ? 0 : 1] : v ? t("true") : t("false"));
  const statements = value.content.statements;
  const answers = value.key?.answers ?? {};

  function emit(next: TrueFalseContent["statements"], nextAnswers: TrueFalseKey["answers"]) {
    const kept: TrueFalseKey["answers"] = {};
    for (const s of next) kept[s.id] = nextAnswers[s.id] ?? true;
    onChange({ content: { ...value.content, statements: next }, key: { answers: kept } });
  }

  return (
    <div className="flex flex-col gap-2">
      <ol className="flex flex-col gap-2">
        {statements.map((s, i) => {
          const isTrue = answers[s.id] ?? true;
          return (
            <li key={s.id} className="flex flex-col gap-2 rounded-lg border p-2 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <span className="w-5 text-sm font-medium tabular-nums text-muted-foreground">{i + 1}.</span>
                <Input
                  value={s.text}
                  onChange={(e) => emit(statements.map((x) => (x.id === s.id ? { ...x, text: e.target.value.slice(0, 500) } : x)), answers)}
                  placeholder={t("statementPlaceholder")}
                  aria-label={t("statement", { n: i + 1 })}
                />
              </div>
              <div className="flex items-center gap-1 pl-7 sm:pl-0" role="radiogroup" aria-label={t("rightAnswer", { n: i + 1 })}>
                {[true, false].map((v) => (
                  <Button
                    key={String(v)}
                    type="button"
                    size="sm"
                    role="radio"
                    aria-checked={isTrue === v}
                    variant={isTrue === v ? "default" : "outline"}
                    onClick={() => emit(statements, { ...answers, [s.id]: v })}
                  >
                    {label(v)}
                  </Button>
                ))}
                {statements.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    aria-label={t("removeStatement", { n: i + 1 })}
                    onClick={() => emit(statements.filter((x) => x.id !== s.id), answers)}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {statements.length < MAX_STATEMENTS && (
        <Button type="button" variant="outline" size="sm" className="w-fit" onClick={() => emit([...statements, emptyStatement()], answers)}>
          <Plus aria-hidden="true" />
          {t("addStatement")}
        </Button>
      )}
    </div>
  );
}
