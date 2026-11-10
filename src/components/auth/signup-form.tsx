"use client";

import { MailCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useActionState, useEffect, useRef } from "react";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signUp } from "@/features/auth/actions";
import { initialFormState } from "@/features/auth/errors";
import { PASSWORD_MIN_LENGTH } from "@/lib/validation/auth";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "./form-bits";
import { RolePicker } from "./role-picker";

export function SignupForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const [state, action] = useActionState(signUp, initialFormState);
  const timezoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // The browser knows the user's time zone; the server does not.
    if (timezoneRef.current) {
      timezoneRef.current.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    }
  }, []);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center" role="status">
        <MailCheck className="size-10 text-primary" aria-hidden="true" />
        <h2 className="text-lg font-semibold">{t("checkEmailTitle")}</h2>
        <p>{t("checkEmailText", { email: state.values?.email ?? "" })}</p>
        <p className="text-sm text-muted-foreground">{t("checkEmailHint")}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="timezone" defaultValue="UTC" ref={timezoneRef} />
      <FieldGroup>
        <FormError state={state} />
        <Field>
          <FieldLabel>{t("whoAreYou")}</FieldLabel>
          <RolePicker defaultValue={state.values?.role} invalid={Boolean(state.fieldErrors?.role)} />
          <FieldMessage state={state} name="role" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fullName">{t("fullName")}</FieldLabel>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder={t("fullNamePlaceholder")}
            defaultValue={state.values?.fullName}
            required
            {...invalidProps(state, "fullName")}
          />
          <FieldMessage state={state} name="fullName" />
        </Field>
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
        <Field>
          <FieldLabel htmlFor="password">{t("password")}</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={PASSWORD_MIN_LENGTH}
            required
            {...invalidProps(state, "password")}
          />
          <FieldDescription>{t("passwordHint", { min: PASSWORD_MIN_LENGTH })}</FieldDescription>
          <FieldMessage state={state} name="password" />
        </Field>
        <SubmitButton>{t("signupButton")}</SubmitButton>
      </FieldGroup>
    </form>
  );
}
