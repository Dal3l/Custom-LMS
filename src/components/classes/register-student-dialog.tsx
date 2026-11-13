"use client";

import { CircleCheck, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useState } from "react";
import { SubmitButton } from "@/components/auth/form-bits";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { registerStudent, type Credentials, type RegisterStudentState } from "@/features/classes/actions";
import { CopyButton } from "./copy-button";

const initial: RegisterStudentState = { status: "idle" };

/** The teacher creates a student account and gets a ready message with the login and password. */
export function RegisterStudentDialog({
  classId,
  timeZones,
  defaultTimeZone,
  disabled,
}: {
  classId: string;
  timeZones: string[];
  defaultTimeZone: string;
  disabled?: boolean;
}) {
  const t = useTranslations("classes");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={disabled}>
          <UserPlus aria-hidden="true" />
          {t("registerStudent")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {open && (
          <RegisterForm
            classId={classId}
            timeZones={timeZones}
            defaultTimeZone={defaultTimeZone}
            onClose={() => setOpen(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function RegisterForm({
  classId,
  timeZones,
  defaultTimeZone,
  onClose,
}: {
  classId: string;
  timeZones: string[];
  defaultTimeZone: string;
  onClose: () => void;
}) {
  const t = useTranslations("classes");
  const tv = useTranslations("validation");
  const [state, action] = useActionState(registerStudent, initial);

  if (state.status === "success" && state.credentials) {
    return <CredentialsView credentials={state.credentials} onClose={onClose} />;
  }

  const err = (name: string) => {
    const key = state.fieldErrors?.[name];
    if (!key) return null;
    const text = key === "emailTaken" ? t("errors.emailTaken") : tv(key as "emailInvalid");
    return <FieldError id={`student-${name}-error`}>{text}</FieldError>;
  };
  const invalid = (name: string) =>
    state.fieldErrors?.[name] ? { "aria-invalid": true, "aria-describedby": `student-${name}-error` } : {};
  const zones = timeZones.includes(defaultTimeZone) ? timeZones : [defaultTimeZone, ...timeZones];

  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      <input type="hidden" name="classId" value={classId} />
      <DialogHeader>
        <DialogTitle>{t("registerStudent")}</DialogTitle>
        <DialogDescription>{t("registerHint")}</DialogDescription>
      </DialogHeader>
      {state.formError && (
        <Alert variant="destructive">
          <AlertDescription>{t(`errors.${state.formError}`)}</AlertDescription>
        </Alert>
      )}
      <FieldGroup key={JSON.stringify(state.values ?? null)}>
        <Field>
          <FieldLabel htmlFor="student-name">{t("studentName")}</FieldLabel>
          <Input
            id="student-name"
            name="fullName"
            defaultValue={state.values?.fullName}
            maxLength={100}
            required
            autoFocus
            {...invalid("fullName")}
          />
          {err("fullName")}
        </Field>
        <Field>
          <FieldLabel htmlFor="student-email">{t("studentEmail")}</FieldLabel>
          <Input
            id="student-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="off"
            defaultValue={state.values?.email}
            required
            {...invalid("email")}
          />
          {err("email")}
        </Field>
        <Field>
          <FieldLabel htmlFor="student-timezone">{t("studentTimezone")}</FieldLabel>
          <NativeSelect id="student-timezone" name="timezone" defaultValue={state.values?.timezone || defaultTimeZone} className="w-full" {...invalid("timezone")}>
            {zones.map((z) => (
              <NativeSelectOption key={z} value={z}>
                {z.replaceAll("_", " ")}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          {err("timezone")}
        </Field>
      </FieldGroup>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          {t("cancel")}
        </Button>
        <div className="sm:w-48">
          <SubmitButton>{t("createAccount")}</SubmitButton>
        </div>
      </DialogFooter>
    </form>
  );
}

function CredentialsView({ credentials, onClose }: { credentials: Credentials; onClose: () => void }) {
  const t = useTranslations("classes");
  const message = t("credentialsMessage", {
    name: credentials.fullName,
    email: credentials.email,
    password: credentials.password,
    url: credentials.loginUrl,
  });
  return (
    <div className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <CircleCheck className="size-5 text-emerald-600" aria-hidden="true" />
          {t("accountCreated")}
        </DialogTitle>
        <DialogDescription>{t("accountCreatedHint")}</DialogDescription>
      </DialogHeader>
      <Textarea
        readOnly
        value={message}
        rows={5}
        aria-label={t("messageForStudent")}
        onFocus={(e) => e.currentTarget.select()}
        className="resize-none font-mono text-sm"
      />
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          {t("done")}
        </Button>
        <CopyButton text={message} label={t("copyMessage")} />
      </DialogFooter>
    </div>
  );
}
