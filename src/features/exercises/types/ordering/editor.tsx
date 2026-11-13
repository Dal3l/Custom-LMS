"use client";

import { AlignJustify, Plus, Trash2, WholeWord } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ExerciseEditorProps } from "../../client-types";
import { newItemId } from "../../item-id";
import { buildOrdering, MAX_TASKS, type OrderMode, type OrderingContent, type OrderingKey } from "./schema";

export function OrderingEditor({ value, onChange }: ExerciseEditorProps<OrderingContent, OrderingKey>) {
  const t = useTranslations("exercises.ordering");
  const key = value.key!;
  const emit = (patch: Partial<OrderingKey>) => onChange(buildOrdering({ ...key, ...patch }));
  const setTask = (id: string, source: string) => emit({ tasks: key.tasks.map((x) => (x.id === id ? { ...x, source } : x)) });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t("mode")}>
        {(["words", "lines"] as OrderMode[]).map((mode) => (
          <Button
            key={mode}
            type="button"
            size="sm"
            role="radio"
            aria-checked={key.mode === mode}
            variant={key.mode === mode ? "default" : "outline"}
            onClick={() => key.mode !== mode && emit({ mode })}
          >
            {mode === "words" ? <WholeWord aria-hidden="true" /> : <AlignJustify aria-hidden="true" />}
            {t(`modes.${mode}`)}
          </Button>
        ))}
      </div>
      <FieldDescription>{t(`hints.${key.mode}`)}</FieldDescription>
      <ol className="flex flex-col gap-2">
        {key.tasks.map((task, i) => (
          <li key={task.id} className="flex items-start gap-2">
            <span className="w-5 pt-1.5 text-sm font-medium tabular-nums text-muted-foreground">{i + 1}.</span>
            {key.mode === "words" ? (
              <Input
                value={task.source}
                onChange={(e) => setTask(task.id, e.target.value.slice(0, 5000))}
                placeholder={t("sentencePlaceholder")}
                aria-label={t("sentence", { n: i + 1 })}
              />
            ) : (
              <Textarea
                value={task.source}
                onChange={(e) => setTask(task.id, e.target.value.slice(0, 5000))}
                placeholder={t("linesPlaceholder")}
                aria-label={t("list", { n: i + 1 })}
                rows={4}
              />
            )}
            {key.tasks.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                aria-label={t(key.mode === "words" ? "removeSentence" : "removeList", { n: i + 1 })}
                onClick={() => emit({ tasks: key.tasks.filter((x) => x.id !== task.id) })}
              >
                <Trash2 aria-hidden="true" />
              </Button>
            )}
          </li>
        ))}
      </ol>
      {key.tasks.length < MAX_TASKS && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-fit"
          onClick={() => emit({ tasks: [...key.tasks, { id: newItemId(), source: "" }] })}
        >
          <Plus aria-hidden="true" />
          {t(key.mode === "words" ? "addSentence" : "addList")}
        </Button>
      )}
    </div>
  );
}
