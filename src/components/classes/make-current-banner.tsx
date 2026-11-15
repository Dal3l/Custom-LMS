"use client";

import { Eye, Loader2, Radio } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { openClassLesson } from "@/features/classes/lesson-actions";

/**
 * Shown to the teacher on a lesson that is not the class's current one: only the
 * teacher sees it now; "Make it current" opens it for the students.
 */
export function MakeCurrentBanner({ classId, lessonId }: { classId: string; lessonId: string }) {
  const t = useTranslations("classLessons");
  const [pending, startTransition] = useTransition();

  function makeCurrent() {
    startTransition(async () => {
      const result = await openClassLesson(classId, lessonId);
      // On success the page reloads as the current lesson; here only on errors.
      if (result && !result.ok) toast.error(t(`errors.${result.error}`));
    });
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-amber-900 sm:flex-row sm:items-center">
      <p className="flex flex-1 items-center gap-2 text-sm font-medium">
        <Eye className="size-4 shrink-0" aria-hidden="true" />
        {t("onlyYouSee")}
      </p>
      <Button onClick={makeCurrent} disabled={pending}>
        {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Radio aria-hidden="true" />}
        {t("makeCurrent")}
      </Button>
    </div>
  );
}
