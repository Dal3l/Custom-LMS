"use client";

import { CircleCheck, MoreHorizontal, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { finishClassLesson, openClassLesson } from "@/features/classes/lesson-actions";
import { useRouter } from "@/i18n/navigation";

/** Teacher's "…" menu on a class lesson: finish it, or open it again. */
export function ClassLessonControls({ classId, lessonId, live }: { classId: string; lessonId: string; live: boolean }) {
  const t = useTranslations("classLessons");
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function finish() {
    startTransition(async () => {
      const result = await finishClassLesson(classId, lessonId);
      if (result.ok) {
        toast.success(t("finished"));
        router.refresh();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  function reopen() {
    startTransition(async () => {
      const result = await openClassLesson(classId, lessonId);
      if (result && !result.ok) toast.error(t(`errors.${result.error}`));
      else router.refresh();
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-lg" aria-label={t("lessonActions")} disabled={pending}>
          <MoreHorizontal aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {live ? (
          <DropdownMenuItem onSelect={finish}>
            <CircleCheck aria-hidden="true" />
            {t("finish")}
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onSelect={reopen}>
            <RotateCcw aria-hidden="true" />
            {t("reopen")}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
