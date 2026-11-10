"use client";

import { MailCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { requestPasswordReset } from "@/features/auth/actions";
import { initialFormState } from "@/features/auth/errors";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "./form-bits";

export function ForgotForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const [state, action] = useActionState(requestPasswordReset, initialFormState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center" role="status">
        <MailCheck className="size-10 text-primary" aria-hidden="true" />
        <p>{t("forgotSentText", { email: state.values?.email ?? "" })}</p>
        <p className="text-sm text-muted-foreground">{t("checkEmailHint")}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <FieldGroup>
        <FormError state={state} />
        <Field>
          <FieldLabel htmlFor="email">{t("email")}</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={t("emailPlaceholder")}
            defaultValue={state.values?.email}
            required
            {...invalidProps(state, "email")}
          />
          <FieldMessage state={state} name="email" />
        </Field>
        <SubmitButton>{t("forgotButton")}</SubmitButton>
      </FieldGroup>
    </form>
  );
}
