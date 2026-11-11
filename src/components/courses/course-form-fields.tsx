"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import type { CourseFormState } from "@/features/courses/actions";
import { CEFR_LEVELS, type LanguageOption } from "@/features/courses/languages";

const CUSTOM = "__custom";

export type CourseFormValues = {
  title: string;
  language: string;
  level: string;
  description: string;
};

/** Title, taught language, level (A1–C2 or custom) and optional description. */
export function CourseFormFields({
  state,
  defaults,
  withDescription = false,
  languages,
}: {
  /** Prepared on the server: device language-name dictionaries differ (e.g. Kazakh). */
  languages: LanguageOption[];
  state: CourseFormState;
  defaults?: Partial<CourseFormValues>;
  withDescription?: boolean;
}) {
  const t = useTranslations("courses");
  const initialLevel = defaults?.level ?? "";
  const isCustom = initialLevel !== "" && !(CEFR_LEVELS as readonly string[]).includes(initialLevel);
  const [levelChoice, setLevelChoice] = useState(isCustom ? CUSTOM : initialLevel);
  const [customLevel, setCustomLevel] = useState(isCustom ? initialLevel : "");

  const err = (name: string) => {
    const key = state.fieldErrors?.[name];
    return key ? (
      <FieldError id={`${name}-error`}>{t(`errors.${key}` as "errors.generic")}</FieldError>
    ) : null;
  };
  const invalid = (name: string) =>
    state.fieldErrors?.[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="course-title">{t("titleLabel")}</FieldLabel>
        <Input
          id="course-title"
          name="title"
          placeholder={t("titlePlaceholder")}
          defaultValue={defaults?.title}
          maxLength={200}
          required
          autoFocus
          {...invalid("title")}
        />
        {err("title")}
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="course-language">{t("languageLabel")}</FieldLabel>
          <NativeSelect
            id="course-language"
            name="language"
            defaultValue={defaults?.language ?? ""}
            className="w-full"
            required
            {...invalid("language")}
          >
            <NativeSelectOption value="" disabled>
              {t("languagePlaceholder")}
            </NativeSelectOption>
            {languages.map((l) => (
              <NativeSelectOption key={l.code} value={l.code}>
                {l.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          {err("language")}
        </Field>
        <Field>
          <FieldLabel htmlFor="course-level">{t("levelLabel")}</FieldLabel>
          <NativeSelect
            id="course-level"
            value={levelChoice}
            onChange={(e) => setLevelChoice(e.target.value)}
            className="w-full"
          >
            <NativeSelectOption value="">{t("levelNone")}</NativeSelectOption>
            {CEFR_LEVELS.map((l) => (
              <NativeSelectOption key={l} value={l}>
                {l}
              </NativeSelectOption>
            ))}
            <NativeSelectOption value={CUSTOM}>{t("levelCustom")}</NativeSelectOption>
          </NativeSelect>
          {levelChoice === CUSTOM && (
            <Input
              aria-label={t("levelLabel")}
              placeholder={t("levelCustomPlaceholder")}
              value={customLevel}
              onChange={(e) => setCustomLevel(e.target.value)}
              maxLength={20}
              {...invalid("level")}
            />
          )}
          <input type="hidden" name="level" value={levelChoice === CUSTOM ? customLevel : levelChoice} />
          {err("level")}
        </Field>
      </div>
      {withDescription && (
        <Field>
          <FieldLabel htmlFor="course-description">{t("descriptionLabel")}</FieldLabel>
          <Textarea
            id="course-description"
            name="description"
            placeholder={t("descriptionPlaceholder")}
            defaultValue={defaults?.description}
            maxLength={2000}
            rows={3}
            {...invalid("description")}
          />
          {err("description")}
        </Field>
      )}
    </FieldGroup>
  );
}
