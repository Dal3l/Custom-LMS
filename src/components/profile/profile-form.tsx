"use client";

import { CircleCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "@/components/auth/form-bits";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { FormState } from "@/features/auth/errors";
import { updateProfile } from "@/features/profile/actions";
import { locales } from "@/i18n/routing";

type Props = {
  email: string;
  roleLabel: string;
  fullName: string;
  locale: string;
  timezone: string;
  timeZones: string[];
  justSaved: boolean;
};

export function ProfileForm(props: Props) {
  const t = useTranslations();
  const currentLocale = useLocale();
  const initial: FormState = { status: props.justSaved ? "success" : "idle" };
  const [state, action] = useActionState(updateProfile, initial);
  const values = state.values ?? {
    fullName: props.fullName,
    locale: props.locale,
    timezone: props.timezone,
  };
  const zones = props.timeZones.includes(props.timezone)
    ? props.timeZones
    : [props.timezone, ...props.timeZones];

  return (
    <form action={action} noValidate>
      <input type="hidden" name="currentLocale" value={currentLocale} />
      <FieldGroup>
        <FormError state={state} />
        <Field>
          <FieldLabel htmlFor="fullName">{t("profile.fullName")}</FieldLabel>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            defaultValue={values.fullName}
            required
            {...invalidProps(state, "fullName")}
          />
          <FieldMessage state={state} name="fullName" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">{t("profile.email")}</FieldLabel>
          <Input id="email" value={props.email} readOnly disabled />
        </Field>
        <Field>
          <FieldLabel htmlFor="role">{t("profile.role")}</FieldLabel>
          <Input id="role" value={props.roleLabel} readOnly disabled />
        </Field>
        <Field>
          <FieldLabel htmlFor="locale">{t("profile.language")}</FieldLabel>
          <NativeSelect id="locale" name="locale" defaultValue={values.locale} className="w-full">
            {locales.map((l) => (
              <NativeSelectOption key={l} value={l} lang={l}>
                {t(`language.${l}`)}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="timezone">{t("profile.timezone")}</FieldLabel>
          <NativeSelect
            id="timezone"
            name="timezone"
            defaultValue={values.timezone}
            className="w-full"
            {...invalidProps(state, "timezone")}
          >
            {zones.map((z) => (
              <NativeSelectOption key={z} value={z}>
                {z.replaceAll("_", " ")}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <FieldDescription>{t("profile.timezoneHint")}</FieldDescription>
          <FieldMessage state={state} name="timezone" />
        </Field>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="sm:w-48">
            <SubmitButton>{t("profile.save")}</SubmitButton>
          </div>
          {state.status === "success" && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground" role="status">
              <CircleCheck className="size-4 text-primary" aria-hidden="true" />
              {t("profile.saved")}
            </p>
          )}
        </div>
      </FieldGroup>
    </form>
  );
}
