"use client";

import { ArrowLeft, ArrowRight, Check, CircleCheck, CloudOff, EyeOff, Loader2, StickyNote } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Attachment } from "@/features/exercises/attachment";
import { AttachmentViewer } from "@/features/exercises/attachment-ui";
import { changedParts, hasAnyAnswer, withoutVerdicts } from "@/features/exercises/answer-diff";
import { AnswerPlaceContext } from "@/features/exercises/answer-context";
import { checkMode, exerciseMeta, isAutoChecked } from "@/features/exercises/catalog";
import type { CheckResult } from "@/features/exercises/checking";
import { EXERCISE_UI } from "@/features/exercises/client";
import { LessonLanguageProvider } from "@/features/exercises/lesson-language";
import { requestSaveAnswer } from "@/features/lessons/answer-client";
import type { SavedAnswer } from "@/features/lessons/answers-shared";
import type { Solution } from "@/features/lessons/grade";
import { requestCheck } from "@/features/lessons/check-client";
import { SaveQueue } from "@/features/lessons/save-queue";
import type { StudentExercise, StudentSection } from "@/features/lessons/queries";
import { exerciseNumbers } from "@/features/lessons/sections";
import { cn } from "@/lib/utils";

/**
 * A lesson as the student sees it: one section at a time, answers checked on the
 * server right away (right parts turn green, wrong ones red; the student may try again).
 */
export function LessonPlayer({
  language,
  sections,
  initialSectionId,
  resetSignal = 0,
  completedSectionIds,
  sectionFooter,
  classAnswers,
  review,
  focus,
  onSectionChange,
  exerciseMenu,
  solutions,
  hints,
  pointer,
  resets,
  stickyTop,
  tools,
  extraGroup,
  notes,
  saveQueue,
}: {
  /** the language the course teaches */
  language: string;
  sections: StudentSection[];
  initialSectionId?: string | null;
  /** Change it to clear all answers. */
  resetSignal?: number;
  /** Sections the teacher finished in class: shown with a check mark. */
  completedSectionIds?: readonly string[];
  /** Extra controls under a section (the teacher's "Finish section" in class). */
  sectionFooter?: (section: StudentSection, isLast: boolean) => React.ReactNode;
  /** A student in a class lesson: answers are saved (and restored from `saved`). */
  classAnswers?: { classId: string; userId: string; saved: Record<string, SavedAnswer>; homeworkId?: string };
  /** The teacher looks at a student's answers (read-only, updated live). */
  review?: Record<string, SavedAnswer>;
  /** "Show to students": open this section and scroll to this exercise (a new nonce repeats it). */
  focus?: { sectionId: string; exerciseId: string; nonce: number } | null;
  /** Called when the open section changes (shared with the teacher). */
  onSectionChange?: (sectionId: string) => void;
  /** Extra "…" menu on each exercise (the teacher's "Show to students"). */
  exerciseMenu?: (exercise: StudentExercise, sectionId: string) => React.ReactNode;
  /** Right answers the teacher revealed, by exercise. */
  solutions?: Record<string, Solution>;
  /** TEACHER ONLY: right answers shown as quiet hints in the exercises, by exercise. */
  hints?: Record<string, unknown>;
  /** The teacher's pointer (students' view). */
  pointer?: { exerciseId: string; x: number; y: number } | null;
  /** "Reset answers": a new number for an exercise clears it (and drops its waiting save). */
  resets?: Record<string, number>;
  /** Shown above the sections, staying at the top too (the teacher's students bar). */
  stickyTop?: React.ReactNode;
  /** Lesson tools (pointer, board, timer…): a column on the left on wide screens. */
  tools?: React.ReactNode;
  /**
   * A second group of sections under the lesson's (the teacher's view of the
   * lesson's homework). Students' class answers don't apply there.
   */
  extraGroup?: { label: string; sections: StudentSection[] };
  /** Something shown under an exercise: the teacher's comment, tries… (by exercise id) */
  notes?: Record<string, React.ReactNode>;
  /** The autosave queue, when the page must wait for it (e.g. before handing homework in). */
  saveQueue?: SaveQueue;
}) {
  const t = useTranslations("player");
  const [queue] = useState(() => saveQueue ?? new SaveQueue());
  const answerPlace = useMemo(
    () => (classAnswers ? { classId: classAnswers.classId, userId: classAnswers.userId } : null),
    [classAnswers],
  );

  // Leaving the page or hiding the app: send what is still waiting.
  useEffect(() => {
    if (!classAnswers) return;
    const flush = () => {
      if (document.visibilityState === "hidden") void queue.flushAll();
    };
    document.addEventListener("visibilitychange", flush);
    window.addEventListener("pagehide", flush);
    return () => {
      document.removeEventListener("visibilitychange", flush);
      window.removeEventListener("pagehide", flush);
    };
  }, [classAnswers, queue]);
  const extra = extraGroup?.sections ?? [];
  const [activeId, setActiveId] = useState(
    [...sections, ...extra].find((s) => s.id === initialSectionId)?.id ?? sections[0]?.id ?? extra[0]?.id ?? null,
  );
  // The open section is in the lesson or in the second group; "next" stays in its group.
  const inExtra = extra.some((s) => s.id === activeId);
  const group = inExtra ? extra : sections;
  const index = group.findIndex((s) => s.id === activeId);
  const active = index >= 0 ? group[index]! : null;
  const next = index >= 0 ? group[index + 1] : undefined;
  const previous = index > 0 ? group[index - 1] : undefined;

  // A reset exercise must not save its old answer after all.
  const resetKey = JSON.stringify(resets ?? {});
  useEffect(() => {
    for (const id of Object.keys(resets ?? {})) queue.drop(id);
    // resetKey stands for resets.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, queue]);

  // Report the open section (also the first one).
  useEffect(() => {
    if (activeId) onSectionChange?.(activeId);
  }, [activeId, onSectionChange]);

  // "Show to students": switch section, then scroll to the exercise and flash it.
  const [pendingFocus, setPendingFocus] = useState<string | null>(null);
  const [lastFocus, setLastFocus] = useState<number | null>(null);
  if (focus && focus.nonce !== lastFocus && [...sections, ...extra].some((s) => s.id === focus.sectionId)) {
    setLastFocus(focus.nonce);
    setActiveId(focus.sectionId);
    setPendingFocus(focus.exerciseId);
  }
  useEffect(() => {
    if (!pendingFocus) return;
    const el = document.getElementById(`exercise-${pendingFocus}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.dataset.flash = "true";
    const timer = setTimeout(() => {
      delete el.dataset.flash;
      setPendingFocus(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [pendingFocus, activeId]);

  function select(id: string) {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("section", id);
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!active) {
    return <p className="rounded-2xl border border-dashed p-8 text-center text-muted-foreground">{t("emptyLesson")}</p>;
  }

  return (
    <LessonLanguageProvider value={language}>
    <AnswerPlaceContext.Provider value={answerPlace}>
    {/* Wide screens: tools on the left, sections on the right, both always in view. */}
    <div className="xl:grid xl:grid-cols-[3rem_minmax(0,1fr)_12rem] xl:items-start xl:gap-6">
      <aside className="hidden xl:sticky xl:top-20 xl:flex xl:flex-col xl:items-center xl:gap-2" aria-label={t("toolsLabel")}>
        {tools}
      </aside>
    <div className="flex min-w-0 flex-col gap-5">
      {classAnswers && <AnswersStatus queue={queue} />}
      {/* Narrower screens: the same things in one strip that stays at the top. */}
      <div
        data-sticky-lesson
        className={cn(
          "sticky top-14 z-[9] -mx-4 flex flex-col gap-2 border-b bg-background/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 xl:mx-0 xl:rounded-2xl xl:border xl:px-2",
          !stickyTop && "xl:hidden",
        )}
      >
        {stickyTop}
        <div className="flex items-center gap-2 xl:hidden">
          {tools && (
            <div className="flex shrink-0 items-center gap-1" role="group" aria-label={t("toolsLabel")}>
              {tools}
            </div>
          )}
          <nav aria-label={t("sections")} className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
            {sections.map((s, i) => (
              <Button
                key={s.id}
                size="sm"
                variant={s.id === activeId ? "default" : "secondary"}
                className="shrink-0 rounded-full"
                aria-current={s.id === activeId ? "true" : undefined}
                onClick={() => select(s.id)}
              >
                {completedSectionIds?.includes(s.id) && <Check aria-label={t("sectionDone")} />}
                {i + 1}. {s.title}
              </Button>
            ))}
            {extraGroup && extra.length > 0 && (
              <>
                <span className="shrink-0 self-center text-xs font-medium text-muted-foreground">{extraGroup.label}:</span>
                {extra.map((s, i) => (
                  <Button
                    key={s.id}
                    size="sm"
                    variant={s.id === activeId ? "default" : "outline"}
                    className="shrink-0 rounded-full"
                    aria-current={s.id === activeId ? "true" : undefined}
                    onClick={() => select(s.id)}
                  >
                    {i + 1}. {s.title}
                  </Button>
                ))}
              </>
            )}
          </nav>
        </div>
      </div>

      <h2 className="text-xl font-semibold">
        {inExtra && extraGroup && <span className="mr-2 text-base font-medium text-primary">{extraGroup.label} ·</span>}
        <span className="text-muted-foreground tabular-nums">{index + 1}.</span> {active.title}
      </h2>

      {active.exercises.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("emptySection")}</p>
      ) : (
        <ol className="flex flex-col gap-4">
          {active.exercises.map((exercise, i) => (
            <PlayerExercise
              // Remounting clears typed answers when the teacher presses "Reset".
              key={`${exercise.id}:${resetSignal}:${resets?.[exercise.id] ?? 0}`}
              exercise={exercise}
              number={exerciseNumbers(index, active.exercises)[i] ?? ""}
              review={review && !inExtra ? { saved: review[exercise.id] } : undefined}
              menu={exerciseMenu?.(exercise, active.id)}
              solution={solutions?.[exercise.id]}
              hint={hints?.[exercise.id]}
              pointer={pointer?.exerciseId === exercise.id ? pointer : null}
              note={notes?.[exercise.id]}
              persist={
                classAnswers && !inExtra
                  ? { classId: classAnswers.classId, homeworkId: classAnswers.homeworkId, saved: classAnswers.saved[exercise.id], queue }
                  : undefined
              }
            />
          ))}
        </ol>
      )}

      {(next || previous || sectionFooter) && (
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {previous && (
              <Button variant="outline" size="lg" className="max-w-full" onClick={() => select(previous.id)}>
                <ArrowLeft aria-hidden="true" />
                <span className="truncate">{t("previous", { title: previous.title })}</span>
              </Button>
            )}
            {sectionFooter?.(active, !next)}
          </div>
          {next && (
            <Button size="lg" onClick={() => select(next.id)}>
              {t("next", { title: next.title })}
              <ArrowRight aria-hidden="true" />
            </Button>
          )}
        </div>
      )}
    </div>
      <aside className="hidden xl:sticky xl:top-20 xl:block">
        <nav aria-label={t("sections")} className="flex flex-col gap-1 rounded-2xl border bg-card p-2">
          <p className="px-2 pt-1 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">{t("sections")}</p>
          {sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-current={s.id === activeId ? "true" : undefined}
              onClick={() => select(s.id)}
              className={cn(
                "flex items-start gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                s.id === activeId && "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              <span className="tabular-nums opacity-70">{i + 1}.</span>
              <span className="min-w-0 flex-1 break-words">{s.title}</span>
              {completedSectionIds?.includes(s.id) && <Check className="mt-0.5 size-4 shrink-0" aria-label={t("sectionDone")} />}
            </button>
          ))}
        </nav>
        {extraGroup && (
          <nav aria-label={extraGroup.label} className="mt-3 flex flex-col gap-1 rounded-2xl border border-dashed bg-card p-2">
            <p className="px-2 pt-1 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">{extraGroup.label}</p>
            {extra.length === 0 && <p className="px-2 pb-1 text-sm text-muted-foreground">{t("noExtraSections")}</p>}
            {extra.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-current={s.id === activeId ? "true" : undefined}
                onClick={() => select(s.id)}
                className={cn(
                  "flex items-start gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                  s.id === activeId && "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                <span className="tabular-nums opacity-70">{i + 1}.</span>
                <span className="min-w-0 flex-1 break-words">{s.title}</span>
              </button>
            ))}
          </nav>
        )}
      </aside>
    </div>
    </AnswerPlaceContext.Provider>
    </LessonLanguageProvider>
  );
}

/** Something written or recorded (teacher-checked types). */
function hasManualAnswer(answer: unknown): boolean {
  if (!answer || typeof answer !== "object") return false;
  const a = answer as { text?: unknown; file?: unknown };
  return (typeof a.text === "string" && a.text.trim() !== "") || Boolean(a.file);
}

/** "Answers saved ✓" / "Saving…" / "Not saved: no connection" for a student in a class lesson. */
function AnswersStatus({ queue }: { queue: SaveQueue }) {
  const t = useTranslations("player");
  const status = useSyncExternalStore(queue.subscribe, queue.getStatus, () => "saved" as const);
  const map = {
    saved: { Icon: CircleCheck, text: t("answersSaved"), cls: "text-muted-foreground" },
    saving: { Icon: Loader2, text: t("answersSaving"), cls: "text-muted-foreground [&_svg]:animate-spin" },
    error: { Icon: CloudOff, text: t("answersError"), cls: "text-destructive" },
  } as const;
  const { Icon, text, cls } = map[status];
  return (
    <p className={cn("flex items-center gap-1.5 text-sm", cls)} role="status" aria-live="polite">
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {text}
    </p>
  );
}

type Persist = { classId: string; homeworkId?: string; saved: SavedAnswer | undefined; queue: SaveQueue };

/** Restores a saved answer; parts changed since the last check lose their old verdict. */
function restored(saved: SavedAnswer | undefined) {
  if (!saved) return { answer: null, checkedAnswer: undefined, result: null };
  const result = saved.result ? withoutVerdicts(saved.result, changedParts(saved.checkedAnswer, saved.answer)) : null;
  return { answer: saved.answer, checkedAnswer: saved.checkedAnswer, result };
}

function PlayerExercise({
  exercise,
  number,
  persist,
  review,
  menu,
  solution,
  pointer,
  note,
  hint,
}: {
  exercise: StudentExercise;
  number: string;
  persist?: Persist;
  /** read-only: a student's saved answer, shown to the teacher */
  review?: { saved: SavedAnswer | undefined };
  menu?: React.ReactNode;
  solution?: Solution;
  pointer?: { x: number; y: number } | null;
  note?: React.ReactNode;
  hint?: unknown;
}) {
  if (exercise.type === "note") return <NoteCard exercise={exercise} menu={menu} />;
  const extra = (
    <>
      {solution && <SolutionBlock exercise={exercise} solution={solution} />}
      {note}
      {pointer && <PointerDot x={pointer.x} y={pointer.y} />}
    </>
  );
  if (review) return <ReviewExercise exercise={exercise} number={number} saved={review.saved} menu={menu} extra={extra} hint={hint} />;
  return <AnswerExercise exercise={exercise} number={number} persist={persist} menu={menu} extra={extra} hint={hint} />;
}

/**
 * A note beside the exercises (no number, nothing to answer). Students get it
 * only while it is shown; the teacher always sees it, marked when students don't.
 */
function NoteCard({ exercise, menu }: { exercise: StudentExercise; menu?: React.ReactNode }) {
  const t = useTranslations("player");
  const meta = EXERCISE_UI.note;
  const content = exercise.content as { shown?: boolean; doc?: unknown };
  if (!content.doc || !meta) return null;
  const hidden = content.shown === false;
  return (
    <li className="group list-none" id={`exercise-${exercise.id}`}>
      <section
        className={cn(
          "flex flex-col gap-2 rounded-2xl border p-4 transition-shadow group-data-[flash=true]:ring-4 group-data-[flash=true]:ring-primary/50",
          hidden ? "border-dashed border-amber-300 bg-amber-50/40 dark:bg-amber-950/20" : "border-amber-300 bg-amber-50 dark:bg-amber-950/40",
        )}
        aria-label={exercise.title || t("note")}
      >
        <div className="flex items-center gap-2">
          <StickyNote className="size-4 shrink-0 text-amber-700" aria-hidden="true" />
          <h3 className="flex-1 text-sm font-medium text-amber-900 dark:text-amber-200">{exercise.title || t("note")}</h3>
          {hidden && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <EyeOff className="size-3.5" aria-hidden="true" />
              {t("noteHidden")}
            </span>
          )}
          {menu}
        </div>
        <meta.Viewer content={exercise.content} />
      </section>
    </li>
  );
}

/** "Right answers", revealed by the teacher: the exercise filled in correctly. */
function SolutionBlock({ exercise, solution }: { exercise: StudentExercise; solution: Solution }) {
  const t = useTranslations("player");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  if (!ui) return null;
  return (
    <section className="flex flex-col gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-3" aria-label={t("rightAnswers")}>
      <h3 className="flex items-center gap-1.5 text-sm font-medium text-emerald-800">
        <CircleCheck className="size-4" aria-hidden="true" />
        {t("rightAnswers")}
      </h3>
      <div className="pointer-events-none">
        <ui.Viewer content={exercise.content} answer={solution.answer} result={solution.result} />
      </div>
    </section>
  );
}

/** The teacher's pointer, on top of the exercise. */
function PointerDot({ x, y }: { x: number; y: number }) {
  const t = useTranslations("player");
  return (
    <span
      className="pointer-events-none absolute z-10 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/80 ring-4 ring-rose-300/60 transition-[left,top] duration-75"
      style={{ left: `${Math.min(Math.max(x, 0), 1) * 100}%`, top: `${Math.min(Math.max(y, 0), 1) * 100}%` }}
      role="img"
      aria-label={t("teacherPointer")}
    />
  );
}

/** A student's answer as the teacher sees it: read-only, refreshed whenever it changes. */
function ReviewExercise({
  exercise,
  number,
  saved,
  menu,
  extra,
  hint,
}: {
  exercise: StudentExercise;
  number: string;
  saved: SavedAnswer | undefined;
  menu?: React.ReactNode;
  extra?: React.ReactNode;
  hint?: unknown;
}) {
  const t = useTranslations("player");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  const mode = checkMode(exercise.type);
  const { answer, result } = restored(saved);
  const verdicts = result ? Object.values(result.parts) : [];
  const right = verdicts.filter((v) => v === true).length;
  const content = exercise.content as Record<string, unknown>;
  return (
    <li className="group list-none" id={`exercise-${exercise.id}`}>
      <Card className={cn("relative gap-3 rounded-2xl px-4 py-4 transition-shadow group-data-[flash=true]:ring-4 group-data-[flash=true]:ring-primary/50", result?.correct && "border-emerald-500")}>
        <div className="flex items-start gap-2">
          <Badge variant="secondary" className="mt-0.5 shrink-0 tabular-nums">
            {number}
          </Badge>
          {exercise.title && <p className="flex-1 font-medium">{exercise.title}</p>}
          {mode && (
            <span className="ml-auto shrink-0 text-sm text-muted-foreground tabular-nums">
              {!saved
                ? t("noAnswerYet")
                : mode === "manual"
                  ? t("awaitingTeacher")
                  : result
                    ? t("score", { right, total: verdicts.length })
                    : t("notChecked")}
            </span>
          )}
          {menu}
        </div>
        {meta?.group !== "material" && <AttachmentViewer value={content.attachment as Attachment | null | undefined} />}
        {ui && (
          // Read-only. With hints the pointer must reach the exercise (hover shows them);
          // its controls are disabled anyway.
          <div className={cn(isAutoChecked(exercise.type) && hint === undefined && "pointer-events-none")}>
            <ui.Viewer
              // Viewers keep their own copy of the answer: remount when it changes.
              key={JSON.stringify(answer)}
              exerciseId={exercise.id}
              content={exercise.content}
              answer={answer}
              result={result}
              hint={hint}
            />
          </div>
        )}
        {extra}
      </Card>
    </li>
  );
}

function AnswerExercise({
  exercise,
  number,
  persist,
  menu,
  extra,
  hint,
}: {
  exercise: StudentExercise;
  number: string;
  persist?: Persist;
  menu?: React.ReactNode;
  extra?: React.ReactNode;
  hint?: unknown;
}) {
  const t = useTranslations("player");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  const mode = checkMode(exercise.type); // "instant", "button" or null (materials)
  const [initial] = useState(() => restored(persist?.saved));
  const [answer, setAnswer] = useState<unknown>(initial.answer);
  const [checkedAnswer, setCheckedAnswer] = useState<unknown>(initial.checkedAnswer);
  const [result, setResult] = useState<CheckResult | null>(initial.result);
  const [pending, setPending] = useState(false);
  const inFlight = useRef<AbortController | null>(null);

  /** Class lesson: the check goes through the save queue, after earlier saves of this exercise. */
  async function runSavedCheck(next: unknown, p: Persist): Promise<CheckResult | null> {
    setPending(true);
    let response: Awaited<ReturnType<typeof requestSaveAnswer>> | null = null;
    p.queue.schedule(exercise.id, async () => {
      response = await requestSaveAnswer({ classId: p.classId, homeworkId: p.homeworkId, exerciseId: exercise.id, answer: next, check: true });
      return true; // a failed check is not retried silently; the answer is saved with the next change
    });
    await p.queue.flush(exercise.id);
    setPending(false);
    const r = response as Awaited<ReturnType<typeof requestSaveAnswer>> | null;
    if (!r?.ok || !r.result) {
      toast.error(t("checkFailed"));
      return null;
    }
    setAnswer(r.answer);
    setResult(r.result);
    setCheckedAnswer(r.answer);
    return r.result;
  }

  function scheduleSave(next: unknown, p: Persist) {
    p.queue.schedule(exercise.id, async () => {
      const r = await requestSaveAnswer({ classId: p.classId, homeworkId: p.homeworkId, exerciseId: exercise.id, answer: next });
      return r.ok;
    });
  }

  async function runCheck(next: unknown): Promise<CheckResult | null> {
    if (persist) return runSavedCheck(next, persist);
    inFlight.current?.abort(); // only the newest check counts
    const controller = new AbortController();
    inFlight.current = controller;
    setPending(true);
    const response = await requestCheck(exercise.id, next, controller.signal);
    if (controller.signal.aborted) return null;
    setPending(false);
    if (!response.ok) {
      toast.error(t("checkFailed"));
      return null;
    }
    // Some types update the answer after a check (typed gaps remember wrong tries).
    const updated = ui?.afterCheck ? ui.afterCheck(next, response.result) : next;
    if (updated !== next) setAnswer(updated);
    setResult(response.result);
    setCheckedAnswer(updated);
    return response.result;
  }

  function onAnswer(next: unknown, { check }: { check: boolean }) {
    setAnswer(next);
    if (persist && !(mode === "instant" && check)) scheduleSave(next, persist);
    // A changed part loses its old green/red until it is checked again.
    setResult((r) => (r ? withoutVerdicts(r, changedParts(checkedAnswer, next)) : r));
    if (mode === "instant" && check) return runCheck(next);
  }

  const content = exercise.content as Record<string, unknown>;
  const verdicts = result ? Object.values(result.parts) : [];
  const total = verdicts.length;
  const right = verdicts.filter((v) => v === true).length;
  const answeredSinceCheck = changedParts(checkedAnswer, answer).length > 0;
  const showCheckButton = mode === "button" && !(result?.correct && !answeredSinceCheck);

  return (
    <li className="group list-none" id={`exercise-${exercise.id}`}>
      <Card
        className={cn(
          "relative gap-3 rounded-2xl px-4 py-4 transition-shadow group-data-[flash=true]:ring-4 group-data-[flash=true]:ring-primary/50",
          result?.correct && "border-emerald-500",
        )}
      >
        <div className="flex items-start gap-2">
          <Badge variant="secondary" className="mt-0.5 shrink-0 tabular-nums">
            {number}
          </Badge>
          {exercise.title && <p className="flex-1 font-medium">{exercise.title}</p>}
          {(pending || (result && total > 0)) && (
            <span
              className={cn(
                "ml-auto flex shrink-0 items-center gap-1 text-sm tabular-nums",
                result?.correct && !pending ? "text-emerald-700" : "text-muted-foreground",
              )}
              role="status"
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  {t("checking")}
                </>
              ) : (
                <>
                  {result?.correct && <CircleCheck className="size-4" aria-hidden="true" />}
                  {t("score", { right, total })}
                </>
              )}
            </span>
          )}
          {mode === "manual" && persist && hasManualAnswer(answer) && (
            <span className="ml-auto shrink-0 text-sm text-muted-foreground" role="status">
              {t("awaitingTeacher")}
            </span>
          )}
          {menu}
        </div>
        {meta?.group !== "material" && <AttachmentViewer value={content.attachment as Attachment | null | undefined} />}
        {ui && (
          <ui.Viewer
            exerciseId={exercise.id}
            content={exercise.content}
            answer={answer}
            onAnswer={mode ? onAnswer : undefined}
            result={result}
            hint={hint}
          />
        )}
        {showCheckButton && (
          <div className="flex justify-end">
            <Button
              onClick={() => void runCheck(answer)}
              disabled={pending || !hasAnyAnswer(answer) || (result !== null && !answeredSinceCheck)}
            >
              {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Check aria-hidden="true" />}
              {t("check")}
            </Button>
          </div>
        )}
        {extra}
      </Card>
    </li>
  );
}
