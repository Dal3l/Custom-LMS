"use client";

import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { updatePassword } from "@/features/auth/actions";
import { initialFormState } from "@/features/auth/errors";
import { PASSWORD_MIN_LENGTH } from "@/lib/validation/auth";
import { PasswordInput } from "./password-input";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "./form-bits";

export function ResetForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const [state, action] = useActionState(updatePassword, initialFormState);

  return (
    <form action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <FieldGroup>
        <FormError state={state} />
        <Field>
          <FieldLabel htmlFor="password">{t("password")}</FieldLabel>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="new-password"
            minLength={PASSWORD_MIN_LENGTH}
            required
            {...invalidProps(state, "password")}
          />
          <FieldDescription>{t("passwordHint", { min: PASSWORD_MIN_LENGTH })}</FieldDescription>
          <FieldMessage state={state} name="password" />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm">{t("confirmPassword")}</FieldLabel>
          <PasswordInput
            id="confirm"
            name="confirm"
            autoComplete="new-password"
            required
            {...invalidProps(state, "confirm")}
          />
          <FieldMessage state={state} name="confirm" />
        </Field>
        <SubmitButton>{t("resetButton")}</SubmitButton>
      </FieldGroup>
    </form>
  );
}
