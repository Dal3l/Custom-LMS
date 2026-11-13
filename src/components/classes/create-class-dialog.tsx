"use client";

import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useState } from "react";
import { SubmitButton } from "@/components/auth/form-bits";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { createClass, type ClassFormState } from "@/features/classes/actions";
import { ClassFormFields } from "./class-form-fields";

const initial: ClassFormState = { status: "idle" };

export function CreateClassDialog({ size = "default" }: { size?: "default" | "lg" }) {
  const t = useTranslations("classes");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size}>
          <Plus aria-hidden="true" />
          {t("newClass")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {open && <CreateClassForm onCancel={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  );
}

function CreateClassForm({ onCancel }: { onCancel: () => void }) {
  const t = useTranslations("classes");
  const [state, action] = useActionState(createClass, initial);
  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      <DialogHeader>
        <DialogTitle>{t("newClass")}</DialogTitle>
      </DialogHeader>
      {state.formError && (
        <Alert variant="destructive">
          <AlertDescription>{t(`errors.${state.formError}`)}</AlertDescription>
        </Alert>
      )}
      <ClassFormFields state={state} />
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          {t("cancel")}
        </Button>
        <div className="sm:w-40">
          <SubmitButton>{t("create")}</SubmitButton>
        </div>
      </DialogFooter>
    </form>
  );
}
