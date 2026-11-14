"use client";

import { Check, CircleCheck, Loader2, MoreHorizontal, ScanEye, Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setClassLessonFinished, setSectionFinished } from "@/features/classes/lesson-actions";
import type { ClassStudent } from "@/features/classes/queries";
import type { SavedAnswer, StudentAnswers } from "@/features/lessons/answers-shared";
import { useStudentLive } from "@/features/live/student-live";
import { useTeacherLive } from "@/features/live/teacher-live";
import type { StudentSection } from "@/features/lessons/queries";
import { useRouter } from "@/i18n/navigation";
import { LessonPicker } from "./lesson-picker";
import { LiveStudentsBar } from "./live-students-bar";

type CommonProps = {
  classId: string;
  lessonId: string;
  courseId: string;
  language: string;
  sections: StudentSection[];
  initialSectionId: string | null;
  doneSections: string[];
  finished: boolean;
};

/** Finished sections, kept in sync when the page data is reloaded. */
function useDoneSections(initial: string[]) {
  const [done, setDone] = useState(initial);
  const [prev, setPrev] = useState(initial);
  if (initial !== prev) {
    setPrev(initial);
    setDone(initial);
  }
  return [done, setDone] as const;
}

/**
 * A lesson in a class, live. The teacher sees who is online and where, looks at
 * each student's answers as they type, sends "Show to students", and finishes
 * sections and the lesson. The student's answers are saved; the student's screen
 * follows the teacher's "Show".
 */
export function TeacherClassLesson({
  teacherId,
  students,
  initialAnswers,
  ...props
}: CommonProps & { teacherId: string; students: ClassStudent[]; initialAnswers: StudentAnswers }) {
  const { classId, lessonId, courseId, finished } = props;
  const t = useTranslations("classLessons");
  const tl = useTranslations("live");
  const router = useRouter();
  const [done, setDone] = useDoneSections(props.doneSections);
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState<string | null>(null);
  const live = useTeacherLive({ classId, lessonId, teacherId, initialAnswers });
  // Whose answers are shown: a student's (read-only, live) or null = the teacher's own try.
  const [viewing, setViewing] = useState<string | null>(students[0]?.id ?? null);

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

  async function showToStudents(sectionId: string, exerciseId: string) {
    const ok = await live.show({ sectionId, exerciseId });
    if (ok) toast.success(tl("shown"));
    else toast.error(tl("showFailed"));
  }

  const spinner = <Loader2 className="animate-spin" aria-hidden="true" />;

  function footer(section: StudentSection, isLast: boolean) {
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
    <div className="flex flex-col gap-4">
      <LiveStudentsBar
        students={students}
        sections={props.sections}
        lessonId={lessonId}
        online={live.online}
        status={live.status}
        answers={live.answers}
        viewing={viewing}
        onView={setViewing}
      />
      <LessonPlayer
        language={props.language}
        sections={props.sections}
        initialSectionId={props.initialSectionId}
        completedSectionIds={done}
        sectionFooter={footer}
        review={viewing ? (live.answers[viewing] ?? {}) : undefined}
        exerciseMenu={(exercise, sectionId) =>
          students.length > 0 ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="-my-1 shrink-0" aria-label={tl("exerciseActions")}>
                  <MoreHorizontal aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => void showToStudents(sectionId, exercise.id)}>
                  <ScanEye aria-hidden="true" />
                  {tl("showToStudents")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null
        }
      />
    </div>
  );
}

export function StudentClassLesson({
  savedAnswers,
  initialShow,
  ...props
}: CommonProps & { savedAnswers: Record<string, SavedAnswer>; initialShow: string | null }) {
  const { classId, lessonId } = props;
  const studentLive = useStudentLive();
  const [done] = useDoneSections(props.doneSections);
  const [focus, setFocus] = useState(() =>
    initialShow && props.initialSectionId
      ? { sectionId: props.initialSectionId, exerciseId: initialShow, nonce: 0 }
      : null,
  );

  // "Show to students" from the teacher while this lesson is open.
  useEffect(() => {
    if (!studentLive) return;
    return studentLive.onShow((m) => {
      if (m.classId === classId && m.lessonId === lessonId) {
        setFocus({ sectionId: m.sectionId, exerciseId: m.exerciseId, nonce: Date.now() });
      }
    });
  }, [studentLive, classId, lessonId]);

  // Tell the teacher where the student is; clear it when leaving the lesson.
  const setLocation = studentLive?.setLocation;
  const onSectionChange = useCallback(
    (sectionId: string) => setLocation?.({ classId, lessonId, sectionId }),
    [setLocation, classId, lessonId],
  );
  useEffect(() => () => setLocation?.({ classId, lessonId: null, sectionId: null }), [setLocation, classId]);

  return (
    <LessonPlayer
      language={props.language}
      sections={props.sections}
      initialSectionId={props.initialSectionId}
      completedSectionIds={done}
      classAnswers={{ classId, saved: savedAnswers }}
      focus={focus}
      onSectionChange={onSectionChange}
    />
  );
}
