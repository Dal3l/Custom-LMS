"use client";

import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "@/features/auth/actions";
import { initialFormState } from "@/features/auth/errors";
import { Link } from "@/i18n/navigation";
import { FieldMessage, FormError, invalidProps, SubmitButton } from "./form-bits";

export function LoginForm({ next }: { next?: string }) {
  const t = useTranslations("auth");
  const locale = useLocale();
  const [state, action] = useActionState(signIn, initialFormState);

  return (
    <form action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      {next && <input type="hidden" name="next" value={next} />}
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
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="password">{t("password")}</FieldLabel>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              {t("forgotPassword")}
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            {...invalidProps(state, "password")}
          />
          <FieldMessage state={state} name="password" />
        </Field>
        <SubmitButton>{t("loginButton")}</SubmitButton>
      </FieldGroup>
    </form>
  );
}
