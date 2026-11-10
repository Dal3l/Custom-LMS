"use client";

import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "@/components/auth/form-bits";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { initialFormState } from "@/features/auth/errors";
import { updateProfile } from "@/features/profile/actions";

type Props = {
  email: string;
  roleLabel: string;
  fullName: string;
  timezone: string;
  timeZones: string[];
};

export function ProfileForm(props: Props) {
  const t = useTranslations();
  const [state, action] = useActionState(updateProfile, initialFormState);
  const values = state.values ?? {
    fullName: props.fullName,
    timezone: props.timezone,
  };
  const zones = props.timeZones.includes(props.timezone)
    ? props.timeZones
    : [props.timezone, ...props.timeZones];

  return (
    <form action={action} noValidate>
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
