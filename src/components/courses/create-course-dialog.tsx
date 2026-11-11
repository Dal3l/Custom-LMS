"use client";

import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useState } from "react";
import { SubmitButton } from "@/components/auth/form-bits";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createCourse, type CourseFormState } from "@/features/courses/actions";
import type { LanguageOption } from "@/features/courses/languages";
import { CourseFormFields } from "./course-form-fields";

const initial: CourseFormState = { status: "idle" };

export function CreateCourseDialog({
  languages,
  size = "default",
}: {
  languages: LanguageOption[];
  size?: "default" | "lg";
}) {
  const t = useTranslations("courses");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size === "lg" ? "lg" : "default"}>
          <Plus aria-hidden="true" />
          {t("newCourse")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {/* Remounted on every open, so the form starts clean. */}
        {open && <CreateCourseForm languages={languages} onCancel={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  );
}

function CreateCourseForm({ languages, onCancel }: { languages: LanguageOption[]; onCancel: () => void }) {
  const t = useTranslations("courses");
  const [state, action] = useActionState(createCourse, initial);
  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      <DialogHeader>
        <DialogTitle>{t("newCourse")}</DialogTitle>
      </DialogHeader>
      {state.formError && (
        <Alert variant="destructive">
          <AlertDescription>{t(`errors.${state.formError}`)}</AlertDescription>
        </Alert>
      )}
      <CourseFormFields state={state} languages={languages} />
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
