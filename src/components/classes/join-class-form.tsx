"use client";

import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { SubmitButton } from "@/components/auth/form-bits";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { joinClass, type JoinState } from "@/features/classes/actions";

const initial: JoinState = { status: "idle" };

export function JoinClassForm({ token }: { token: string }) {
  const t = useTranslations("join");
  const [state, action] = useActionState(joinClass, initial);
  return (
    <form action={action} className="flex flex-col gap-4">
      <input type="hidden" name="token" value={token} />
      {state.error && (
        <Alert variant="destructive">
          <AlertCircle aria-hidden="true" />
          <AlertDescription>{t(`errors.${state.error}`)}</AlertDescription>
        </Alert>
      )}
      <SubmitButton>{t("joinButton")}</SubmitButton>
    </form>
  );
}
