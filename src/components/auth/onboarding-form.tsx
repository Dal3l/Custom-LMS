"use client";

import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { chooseRole } from "@/features/auth/actions";
import { initialFormState } from "@/features/auth/errors";
import { FieldMessage, FormError, SubmitButton } from "./form-bits";
import { RolePicker } from "./role-picker";

export function OnboardingForm() {
  const t = useTranslations("onboarding");
  const locale = useLocale();
  const [state, action] = useActionState(chooseRole, initialFormState);

  return (
    <form action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <FieldGroup>
        <FormError state={state} />
        <Field>
          <RolePicker invalid={Boolean(state.fieldErrors?.role)} />
          <FieldMessage state={state} name="role" />
        </Field>
        <SubmitButton>{t("continue")}</SubmitButton>
      </FieldGroup>
    </form>
  );
}
