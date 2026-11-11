"use client";

import { Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useState, useTransition } from "react";
import { toast } from "sonner";
import { SubmitButton } from "@/components/auth/form-bits";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  deleteCourse,
  duplicateCourse,
  updateCourse,
  type CourseFormState,
} from "@/features/courses/actions";
import type { LanguageOption } from "@/features/courses/languages";
import { useRouter } from "@/i18n/navigation";
import type { Tables } from "@/lib/supabase/database.types";
import { ConfirmDelete } from "./confirm-delete";
import { CourseCover } from "./course-cover";
import { CourseFormFields } from "./course-form-fields";
import { CoverUploader } from "./cover-uploader";

type Course = Tables<"courses">;

export function CourseHeader({
  course,
  userId,
  languages,
}: {
  course: Course;
  userId: string;
  /** Prepared on the server: device language-name dictionaries differ (e.g. Kazakh). */
  languages: LanguageOption[];
}) {
  const t = useTranslations("courses");
  const languageLabel = languages.find((l) => l.code === course.language)?.name ?? course.language.toUpperCase();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();

  function duplicate() {
    startTransition(async () => {
      const result = await duplicateCourse(course.id);
      if (result.ok) {
        toast.success(t("copied"));
        router.push(`/courses/${result.data}`);
      } else {
        toast.error(t(`errors.${result.error}`));
      }
    });
  }

  function remove() {
    startTransition(async () => {
      const result = await deleteCourse(course.id);
      if (result.ok) {
        toast.success(t("deleted"));
        router.replace("/courses");
      } else {
        toast.error(t(`errors.${result.error}`));
      }
    });
  }

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <CourseCover
        path={course.cover_path}
        language={course.language}
        className="w-full sm:w-56 sm:shrink-0"
        sizes="(min-width: 640px) 14rem, 100vw"
        priority
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start gap-2">
          <h1 className="min-w-0 flex-1 text-2xl font-semibold break-words">{course.title}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label={t("moreActions")} disabled={pending}>
                <MoreHorizontal aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setEditing(true)}>
                <Pencil aria-hidden="true" />
                {t("editCourse")}
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={duplicate}>
                <Copy aria-hidden="true" />
                {t("duplicateCourse")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={() => setConfirming(true)}>
                <Trash2 aria-hidden="true" />
                {t("deleteCourse")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{languageLabel}</Badge>
          {course.level && <Badge variant="outline">{course.level}</Badge>}
        </div>
        {course.description && (
          <p className="whitespace-pre-line text-muted-foreground">{course.description}</p>
        )}
      </div>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          {editing && (
            <EditCourseForm course={course} userId={userId} languages={languages} onDone={() => setEditing(false)} />
          )}
        </DialogContent>
      </Dialog>

      <ConfirmDelete
        open={confirming}
        onOpenChange={setConfirming}
        title={t("deleteCourseTitle", { title: course.title })}
        description={t("deleteCourseText")}
        onConfirm={remove}
      />
    </header>
  );
}

function EditCourseForm({
  course,
  userId,
  languages,
  onDone,
}: {
  course: Course;
  userId: string;
  languages: LanguageOption[];
  onDone: () => void;
}) {
  const t = useTranslations("courses");
  const [state, action] = useActionState(
    async (prev: CourseFormState, formData: FormData) => {
      const result = await updateCourse(course.id, prev, formData);
      if (result.status === "success") {
        toast.success(t("saved"));
        onDone();
      }
      return result;
    },
    { status: "idle" },
  );

  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      <DialogHeader>
        <DialogTitle>{t("editCourse")}</DialogTitle>
      </DialogHeader>
      {state.formError && (
        <Alert variant="destructive">
          <AlertDescription>{t(`errors.${state.formError}`)}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">{t("cover")}</span>
        <CoverUploader courseId={course.id} userId={userId} path={course.cover_path} language={course.language} />
      </div>
      <CourseFormFields
        state={state}
        languages={languages}
        withDescription
        defaults={{
          title: course.title,
          language: course.language,
          level: course.level,
          description: course.description,
        }}
      />
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onDone}>
          {t("cancel")}
        </Button>
        <div className="sm:w-40">
          <SubmitButton>{t("save")}</SubmitButton>
        </div>
      </DialogFooter>
    </form>
  );
}
