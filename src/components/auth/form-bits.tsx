"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import type { FormState } from "@/features/auth/errors";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending && <Loader2 className="animate-spin" aria-hidden="true" />}
      {children}
    </Button>
  );
}

/** Error under a single field. */
export function FieldMessage({ state, name }: { state: FormState; name: string }) {
  const t = useTranslations("validation");
  const key = state.fieldErrors?.[name];
  if (!key) return null;
  return <FieldError id={`${name}-error`}>{t(key)}</FieldError>;
}

/** Error for the whole form (wrong password, too many attempts, …). */
export function FormError({ state }: { state: FormState }) {
  const t = useTranslations("authErrors");
  if (!state.formError) return null;
  return (
    <Alert variant="destructive">
      <AlertCircle aria-hidden="true" />
      <AlertDescription>{t(state.formError)}</AlertDescription>
    </Alert>
  );
}

export function invalidProps(state: FormState, name: string) {
  const invalid = Boolean(state.fieldErrors?.[name]);
  return invalid
    ? { "aria-invalid": true, "aria-describedby": `${name}-error` }
    : {};
}
