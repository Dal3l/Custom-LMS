"use client";

import { useTranslations } from "next-intl";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ExerciseEditorProps } from "../../client-types";
import type { OpenAnswerContent } from "./schema";

/** The task is the exercise title; here only the minimum number of words. */
export function OpenAnswerEditor({ value, onChange }: ExerciseEditorProps<OpenAnswerContent, null>) {
  const t = useTranslations("exercises.openAnswer");
  const min = value.content.minWords;
  return (
    <Field>
      <FieldLabel htmlFor="open-min-words">{t("minWords")}</FieldLabel>
      <Input
        id="open-min-words"
        type="number"
        inputMode="numeric"
        min={1}
        max={2000}
        placeholder={t("minWordsPlaceholder")}
        value={min ?? ""}
        onChange={(e) => {
          const n = Math.min(2000, Math.max(0, Math.floor(Number(e.target.value) || 0)));
          onChange({ content: { ...value.content, minWords: n > 0 ? n : null }, key: null });
        }}
        className="w-40"
      />
      <FieldDescription>{t("editorHint")}</FieldDescription>
    </Field>
  );
}
