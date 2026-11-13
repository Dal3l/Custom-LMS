"use client";

import { useTranslations } from "next-intl";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { ClassFormState } from "@/features/classes/actions";
import type { ClassKind } from "@/features/classes/schemas";

export type ClassFormValues = { name: string; kind: ClassKind; call_url: string | null };

/** Name, individual / group, and the video call link. */
export function ClassFormFields({ state, defaults: initial }: { state: ClassFormState; defaults?: ClassFormValues }) {
  const t = useTranslations("classes");
  // After a failed submit, show what the user typed (React resets the form to these defaults).
  const defaults = state.values
    ? { name: state.values.name ?? "", kind: (state.values.kind === "group" ? "group" : "individual") as ClassKind, call_url: state.values.call_url ?? "" }
    : initial;
  const err = (name: string) => {
    const key = state.fieldErrors?.[name];
    return key ? <FieldError id={`class-${name}-error`}>{t(`errors.${key}` as "errors.generic")}</FieldError> : null;
  };
  const invalid = (name: string) =>
    state.fieldErrors?.[name] ? { "aria-invalid": true, "aria-describedby": `class-${name}-error` } : {};

  return (
    // Remount after a failed submit so every field (the select too) shows the typed values.
    <FieldGroup key={JSON.stringify(state.values ?? null)}>
      <Field>
        <FieldLabel htmlFor="class-name">{t("nameLabel")}</FieldLabel>
        <Input
          id="class-name"
          name="name"
          placeholder={t("namePlaceholder")}
          defaultValue={defaults?.name}
          maxLength={100}
          required
          autoFocus
          {...invalid("name")}
        />
        {err("name")}
      </Field>
      <Field>
        <FieldLabel htmlFor="class-kind">{t("kindLabel")}</FieldLabel>
        <NativeSelect id="class-kind" name="kind" defaultValue={defaults?.kind ?? "individual"} className="w-full" {...invalid("kind")}>
          <NativeSelectOption value="individual">{t("kind.individual")}</NativeSelectOption>
          <NativeSelectOption value="group">{t("kind.group")}</NativeSelectOption>
        </NativeSelect>
        {err("kind")}
      </Field>
      <Field>
        <FieldLabel htmlFor="class-call-url">{t("callUrlLabel")}</FieldLabel>
        <Input
          id="class-call-url"
          name="call_url"
          type="url"
          inputMode="url"
          placeholder="https://zoom.us/j/…"
          defaultValue={defaults?.call_url ?? ""}
          maxLength={500}
          {...invalid("call_url")}
        />
        <FieldDescription>{t("callUrlHint")}</FieldDescription>
        {err("call_url")}
      </Field>
    </FieldGroup>
  );
}
