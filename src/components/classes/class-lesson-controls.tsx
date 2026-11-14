"use client";

import { CircleCheck, CircleDashed, MoreHorizontal, Radio } from "lucide-react";
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
import { openClassLesson, setClassLessonFinished } from "@/features/classes/lesson-actions";
import { useRouter } from "@/i18n/navigation";

/** Teacher's "…" menu on a class lesson: finish / un-finish it, make it the current lesson. */
export function ClassLessonControls({
  classId,
  lessonId,
  live,
  finished,
}: {
  classId: string;
  lessonId: string;
  live: boolean;
  finished: boolean;
}) {
  const t = useTranslations("classLessons");
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function setFinished(value: boolean) {
    startTransition(async () => {
      const result = await setClassLessonFinished(classId, lessonId, value);
      if (result.ok) {
        toast.success(value ? t("finished") : t("unfinished"));
        router.refresh();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  function makeCurrent() {
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
        {finished ? (
          <DropdownMenuItem onSelect={() => setFinished(false)}>
            <CircleDashed aria-hidden="true" />
            {t("markUnfinished")}
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onSelect={() => setFinished(true)}>
            <CircleCheck aria-hidden="true" />
            {t("finish")}
          </DropdownMenuItem>
        )}
        {!live && (
          <DropdownMenuItem onSelect={makeCurrent}>
            <Radio aria-hidden="true" />
            {t("makeCurrent")}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
