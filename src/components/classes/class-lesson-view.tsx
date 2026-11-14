"use client";

import { Check, CircleCheck, CloudOff, Eye, EyeOff, Loader2, MoreHorizontal, RotateCcw, ScanEye, Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  resetExerciseAnswers,
  setClassLessonFinished,
  setExerciseRevealed,
  setSectionFinished,
} from "@/features/classes/lesson-actions";
import type { ClassMark } from "@/features/classes/lesson-queries";
import type { ClassStudent } from "@/features/classes/queries";
import { checkMode } from "@/features/exercises/catalog";
import type { SavedAnswer, StudentAnswers } from "@/features/lessons/answers-shared";
import type { Solution } from "@/features/lessons/grade";
import type { StudentSection } from "@/features/lessons/queries";
import { ClassMarksProvider } from "@/features/live/class-marks";
import { useStudentLive } from "@/features/live/student-live";
import { useTeacherLive } from "@/features/live/teacher-live";
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
  revealed: string[];
  solutions: Record<string, Solution>;
  marks: ClassMark[];
  userId: string;
};

/** Finished sections, kept in sync when the page data is reloaded. */
function useSynced<T>(initial: T) {
  const [value, setValue] = useState(initial);
  const [prev, setPrev] = useState(initial);
  if (initial !== prev) {
    setPrev(initial);
    setValue(initial);
  }
  return [value, setValue] as const;
}

/**
 * A lesson in a class, live, for the teacher: who is online and where, each
 * student's answers as they type, and the tools — "Show to students", pointer,
 * "Show the right answers", "Reset answers", finishing sections and the lesson.
 */
export function TeacherClassLesson({
  students,
  initialAnswers,
  ...props
}: CommonProps & { students: ClassStudent[]; initialAnswers: StudentAnswers }) {
  const { classId, lessonId, courseId, finished, userId } = props;
  const t = useTranslations("classLessons");
  const tl = useTranslations("live");
  const router = useRouter();
  const [done, setDone] = useSynced(props.doneSections);
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState<string | null>(null);
  const live = useTeacherLive({ classId, lessonId, teacherId: userId, initialAnswers });
  // Whose answers are shown (the teacher always looks at a student's work).
  const [viewing, setViewing] = useState<string | null>(students[0]?.id ?? null);
  const [pointerOn, setPointerOn] = useState(false);
  const [focus, setFocus] = useState<{ sectionId: string; exerciseId: string; nonce: number } | null>(null);

  // Switching students keeps the same place on the page: the exercise at the top
  // of the screen stays where it was, even if the answers above change height.
  const anchor = useRef<{ id: string; top: number } | null>(null);
  function switchTo(studentId: string | null) {
    const cards = [...document.querySelectorAll<HTMLElement>('[id^="exercise-"]')];
    const first = cards.find((c) => c.getBoundingClientRect().bottom > 160);
    anchor.current = first ? { id: first.id, top: first.getBoundingClientRect().top } : null;
    setViewing(studentId);
  }
  useLayoutEffect(() => {
    const a = anchor.current;
    anchor.current = null;
    const el = a && document.getElementById(a.id);
    if (a && el) window.scrollBy(0, el.getBoundingClientRect().top - a.top);
  }, [viewing]);

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

  function reveal(exerciseId: string, value: boolean) {
    startTransition(async () => {
      const result = await setExerciseRevealed(classId, lessonId, exerciseId, value);
      if (result.ok) {
        toast.success(value ? tl("answersRevealed") : tl("answersHidden"));
        router.refresh();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  function reset(exerciseId: string) {
    startTransition(async () => {
      const result = await resetExerciseAnswers(classId, lessonId, exerciseId);
      if (result.ok) {
        live.resetExercise(exerciseId);
        toast.success(tl("answersReset"));
        router.refresh();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  // The pointer: where the mouse (or finger) is over an exercise, as a share of its card.
  const sendPointer = live.sendPointer;
  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('[id^="exercise-"]');
      if (!card) return sendPointer(null);
      const box = card.firstElementChild?.getBoundingClientRect() ?? card.getBoundingClientRect();
      sendPointer({
        exerciseId: card.id.slice("exercise-".length),
        x: (e.clientX - box.left) / box.width,
        y: (e.clientY - box.top) / box.height,
      });
    },
    [sendPointer],
  );
  useEffect(() => {
    if (!pointerOn) sendPointer(null);
  }, [pointerOn, sendPointer]);

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
    <ClassMarksProvider classId={classId} userId={userId} otherUserId={viewing} isTeacher initial={props.marks}>
      <div className="flex flex-col gap-4">
        <LiveStudentsBar
          students={students}
          sections={props.sections}
          lessonId={lessonId}
          online={live.online}
          status={live.status}
          answers={live.answers}
          viewing={viewing}
          onView={switchTo}
          pointerOn={pointerOn}
          onPointerToggle={setPointerOn}
          onPick={(studentId, sectionId, exerciseId) => {
            setViewing(studentId);
            setFocus({ sectionId, exerciseId, nonce: Date.now() });
          }}
        />
        <div
          onPointerMove={pointerOn ? onPointerMove : undefined}
          onPointerLeave={pointerOn ? () => sendPointer(null) : undefined}
          className={pointerOn ? "cursor-crosshair" : undefined}
        >
          <LessonPlayer
            language={props.language}
            sections={props.sections}
            initialSectionId={props.initialSectionId}
            completedSectionIds={done}
            sectionFooter={footer}
            review={viewing ? (live.answers[viewing] ?? {}) : undefined}
            solutions={props.solutions}
            focus={focus}
            exerciseMenu={(exercise, sectionId) => {
              const checkable = checkMode(exercise.type) !== null;
              const isRevealed = props.revealed.includes(exercise.id);
              if (students.length === 0 && !checkable) return null;
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm" className="-my-1 shrink-0" aria-label={tl("exerciseActions")} disabled={pending}>
                      <MoreHorizontal aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {students.length > 0 && (
                      <DropdownMenuItem onSelect={() => void showToStudents(sectionId, exercise.id)}>
                        <ScanEye aria-hidden="true" />
                        {tl("showToStudents")}
                      </DropdownMenuItem>
                    )}
                    {checkable && (
                      <DropdownMenuItem onSelect={() => reveal(exercise.id, !isRevealed)}>
                        {isRevealed ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                        {isRevealed ? tl("hideAnswers") : tl("revealAnswers")}
                      </DropdownMenuItem>
                    )}
                    {checkable && students.length > 0 && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive" onSelect={() => reset(exercise.id)}>
                          <RotateCcw aria-hidden="true" />
                          {tl("resetAnswers")}
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }}
          />
        </div>
      </div>
    </ClassMarksProvider>
  );
}

/** The student's side: answers are saved; the screen follows the teacher's "Show", pointer and reset. */
/** A thin notice for the student while the live connection is down. */
function StudentOffline() {
  const t = useTranslations("live");
  return (
    <p className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="status">
      <CloudOff className="size-4 shrink-0" aria-hidden="true" />
      {t("studentOffline")}
    </p>
  );
}

export function StudentClassLesson({
  savedAnswers,
  initialShow,
  teacherId,
  ...props
}: CommonProps & { savedAnswers: Record<string, SavedAnswer>; initialShow: string | null; teacherId: string }) {
  const { classId, lessonId, userId } = props;
  const studentLive = useStudentLive();
  const [done] = useSynced(props.doneSections);
  const [saved, setSaved] = useState(savedAnswers);
  const [resets, setResets] = useState<Record<string, number>>({});
  const [pointer, setPointer] = useState<{ exerciseId: string; x: number; y: number } | null>(null);
  const pointerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [focus, setFocus] = useState(() =>
    initialShow && props.initialSectionId
      ? { sectionId: props.initialSectionId, exerciseId: initialShow, nonce: 0 }
      : null,
  );

  // Messages from the teacher while this lesson is open.
  useEffect(() => {
    if (!studentLive) return;
    return studentLive.onMessage((m) => {
      if (m.classId !== classId || m.lessonId !== lessonId) return;
      if (m.kind === "show") setFocus({ sectionId: m.sectionId, exerciseId: m.exerciseId, nonce: Date.now() });
      if (m.kind === "reset") {
        setSaved((prev) => {
          const next = { ...prev };
          delete next[m.exerciseId];
          return next;
        });
        setResets((prev) => ({ ...prev, [m.exerciseId]: (prev[m.exerciseId] ?? 0) + 1 }));
      }
      if (m.kind === "pointer") {
        if (pointerTimer.current) clearTimeout(pointerTimer.current);
        if ("hide" in m) return setPointer(null);
        setPointer({ exerciseId: m.exerciseId, x: m.x, y: m.y });
        // Hide it if the teacher's pointer stops coming (e.g. the connection dropped).
        pointerTimer.current = setTimeout(() => setPointer(null), 4000);
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
    <ClassMarksProvider classId={classId} userId={userId} otherUserId={teacherId} isTeacher={false} initial={props.marks}>
      {studentLive?.status === "offline" && <StudentOffline />}
      <LessonPlayer
        language={props.language}
        sections={props.sections}
        initialSectionId={props.initialSectionId}
        completedSectionIds={done}
        classAnswers={{ classId, saved }}
        focus={focus}
        onSectionChange={onSectionChange}
        solutions={props.solutions}
        pointer={pointer}
        resets={resets}
      />
    </ClassMarksProvider>
  );
}
