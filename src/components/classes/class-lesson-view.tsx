"use client";

import { Check, CircleCheck, Loader2, Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import { Button } from "@/components/ui/button";
import { setClassLessonFinished, setSectionFinished } from "@/features/classes/lesson-actions";
import type { StudentSection } from "@/features/lessons/queries";
import { useRouter } from "@/i18n/navigation";
import { LessonPicker } from "./lesson-picker";

/**
 * A lesson in a class. The teacher finishes sections one by one ("Finish
 * section") and, at the end of the last one, the whole lesson ("Finish lesson").
 * Students see the check marks.
 */
export function ClassLessonView({
  classId,
  lessonId,
  courseId,
  language,
  sections,
  initialSectionId,
  isTeacher,
  doneSections: initialDone,
  finished,
}: {
  classId: string;
  lessonId: string;
  courseId: string;
  language: string;
  sections: StudentSection[];
  initialSectionId: string | null;
  isTeacher: boolean;
  doneSections: string[];
  finished: boolean;
}) {
  const t = useTranslations("classLessons");
  const router = useRouter();
  const [done, setDone] = useState(initialDone);
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState<string | null>(null);

  function toggleSection(sectionId: string, value: boolean) {
    setBusy(sectionId);
    startTransition(async () => {
      const result = await setSectionFinished(classId, lessonId, sectionId, value);
      setBusy(null);
      if (result.ok) setDone(result.data);
      else toast.error(t(`errors.${result.error}`));
    });
  }

  function finishLesson(value: boolean) {
    setBusy("lesson");
    startTransition(async () => {
      const result = await setClassLessonFinished(classId, lessonId, value);
      setBusy(null);
      if (result.ok) {
        toast.success(value ? t("finished") : t("unfinished"));
        router.refresh();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  const spinner = <Loader2 className="animate-spin" aria-hidden="true" />;

  function footer(section: StudentSection, isLast: boolean) {
    if (!isTeacher) return null;
    const sectionDone = done.includes(section.id);
    return (
      <>
        {sectionDone ? (
          <Button variant="outline" disabled={pending} onClick={() => toggleSection(section.id, false)}>
            {busy === section.id ? spinner : <Check className="text-emerald-600" aria-hidden="true" />}
            {t("sectionFinished")}
            <span className="sr-only">{t("undo")}</span>
            <Undo2 className="text-muted-foreground" aria-hidden="true" />
          </Button>
        ) : (
          <Button variant="outline" disabled={pending} onClick={() => toggleSection(section.id, true)}>
            {busy === section.id ? spinner : <CircleCheck aria-hidden="true" />}
            {t("finishSection")}
          </Button>
        )}
        {isLast &&
          (finished ? (
            <LessonPicker classId={classId} courseId={courseId} label={t("nextLesson")} />
          ) : (
            <Button disabled={pending} onClick={() => finishLesson(true)}>
              {busy === "lesson" ? spinner : <CircleCheck aria-hidden="true" />}
              {t("finish")}
            </Button>
          ))}
      </>
    );
  }

  return (
    <LessonPlayer
      language={language}
      sections={sections}
      initialSectionId={initialSectionId}
      completedSectionIds={done}
      sectionFooter={isTeacher ? footer : undefined}
    />
  );
}
