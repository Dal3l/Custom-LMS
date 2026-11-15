"use client";

import { useTranslations } from "next-intl";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { ExerciseEditorProps } from "../../client-types";
import type { VoiceAnswerContent } from "./schema";

const LIMITS = [30, 60, 120, 180, 300, 600];

/** The task is the exercise title; here only the longest recording. */
export function VoiceAnswerEditor({ value, onChange }: ExerciseEditorProps<VoiceAnswerContent, null>) {
  const t = useTranslations("exercises.voiceAnswer");
  return (
    <Field>
      <FieldLabel htmlFor="voice-max">{t("maxSeconds")}</FieldLabel>
      <NativeSelect
        id="voice-max"
        value={value.content.maxSeconds}
        onChange={(e) => onChange({ content: { ...value.content, maxSeconds: Number(e.target.value) }, key: null })}
        className="w-40"
      >
        {LIMITS.map((s) => (
          <NativeSelectOption key={s} value={s}>
            {s < 60 ? t("seconds", { s }) : t("minutes", { m: s / 60 })}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      <FieldDescription>{t("editorHint")}</FieldDescription>
    </Field>
  );
}
