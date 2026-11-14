"use client";

import { ArrowRight, Check, CircleCheck, CloudOff, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Attachment } from "@/features/exercises/attachment";
import { AttachmentViewer } from "@/features/exercises/attachment-ui";
import { changedParts, hasAnyAnswer, withoutVerdicts } from "@/features/exercises/answer-diff";
import { checkMode, exerciseMeta } from "@/features/exercises/catalog";
import type { CheckResult } from "@/features/exercises/checking";
import { EXERCISE_UI } from "@/features/exercises/client";
import { LessonLanguageProvider } from "@/features/exercises/lesson-language";
import { requestSaveAnswer } from "@/features/lessons/answer-client";
import type { SavedAnswer } from "@/features/lessons/answers";
import { requestCheck } from "@/features/lessons/check-client";
import { SaveQueue } from "@/features/lessons/save-queue";
import type { StudentExercise, StudentSection } from "@/features/lessons/queries";
import { exerciseNumber } from "@/features/lessons/sections";
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
  classAnswers?: { classId: string; saved: Record<string, SavedAnswer> };
  /** The teacher looks at a student's answers (read-only, updated live). */
  review?: Record<string, SavedAnswer>;
  /** "Show to students": open this section and scroll to this exercise (a new nonce repeats it). */
  focus?: { sectionId: string; exerciseId: string; nonce: number } | null;
  /** Called when the open section changes (shared with the teacher). */
  onSectionChange?: (sectionId: string) => void;
  /** Extra "…" menu on each exercise (the teacher's "Show to students"). */
  exerciseMenu?: (exercise: StudentExercise, sectionId: string) => React.ReactNode;
}) {
  const t = useTranslations("player");
  const [queue] = useState(() => new SaveQueue());

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
  const [activeId, setActiveId] = useState(
    sections.find((s) => s.id === initialSectionId)?.id ?? sections[0]?.id ?? null,
  );
  const index = sections.findIndex((s) => s.id === activeId);
  const active = index >= 0 ? sections[index]! : null;
  const next = index >= 0 ? sections[index + 1] : undefined;

  // Report the open section (also the first one).
  useEffect(() => {
    if (activeId) onSectionChange?.(activeId);
  }, [activeId, onSectionChange]);

  // "Show to students": switch section, then scroll to the exercise and flash it.
  const [pendingFocus, setPendingFocus] = useState<string | null>(null);
  const [lastFocus, setLastFocus] = useState<number | null>(null);
  if (focus && focus.nonce !== lastFocus && sections.some((s) => s.id === focus.sectionId)) {
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
    <div className="flex flex-col gap-5">
      {classAnswers && <AnswersStatus queue={queue} />}
      <nav aria-label={t("sections")} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {sections.map((s, i) => (
          <Button
            key={s.id}
            variant={s.id === activeId ? "default" : "secondary"}
            className="shrink-0 rounded-full"
            aria-current={s.id === activeId ? "true" : undefined}
            onClick={() => select(s.id)}
          >
            {completedSectionIds?.includes(s.id) && (
              <Check aria-label={t("sectionDone")} />
            )}
            {i + 1}. {s.title}
          </Button>
        ))}
      </nav>

      <h2 className="text-xl font-semibold">
        <span className="text-muted-foreground tabular-nums">{index + 1}.</span> {active.title}
      </h2>

      {active.exercises.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("emptySection")}</p>
      ) : (
        <ol className="flex flex-col gap-4">
          {active.exercises.map((exercise, i) => (
            <PlayerExercise
              // Remounting clears typed answers when the teacher presses "Reset".
              key={`${exercise.id}:${resetSignal}`}
              exercise={exercise}
              number={exerciseNumber(index, i)}
              review={review ? { saved: review[exercise.id] } : undefined}
              menu={exerciseMenu?.(exercise, active.id)}
              persist={
                classAnswers
                  ? { classId: classAnswers.classId, saved: classAnswers.saved[exercise.id], queue }
                  : undefined
              }
            />
          ))}
        </ol>
      )}

      {(next || sectionFooter) && (
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">{sectionFooter?.(active, !next)}</div>
          {next && (
            <Button size="lg" onClick={() => select(next.id)}>
              {t("next", { title: next.title })}
              <ArrowRight aria-hidden="true" />
            </Button>
          )}
        </div>
      )}
    </div>
    </LessonLanguageProvider>
  );
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

type Persist = { classId: string; saved: SavedAnswer | undefined; queue: SaveQueue };

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
}: {
  exercise: StudentExercise;
  number: string;
  persist?: Persist;
  /** read-only: a student's saved answer, shown to the teacher */
  review?: { saved: SavedAnswer | undefined };
  menu?: React.ReactNode;
}) {
  if (review) return <ReviewExercise exercise={exercise} number={number} saved={review.saved} menu={menu} />;
  return <AnswerExercise exercise={exercise} number={number} persist={persist} menu={menu} />;
}

/** A student's answer as the teacher sees it: read-only, refreshed whenever it changes. */
function ReviewExercise({
  exercise,
  number,
  saved,
  menu,
}: {
  exercise: StudentExercise;
  number: string;
  saved: SavedAnswer | undefined;
  menu?: React.ReactNode;
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
      <Card className={cn("gap-3 rounded-2xl px-4 py-4 transition-shadow group-data-[flash=true]:ring-4 group-data-[flash=true]:ring-primary/50", result?.correct && "border-emerald-500")}>
        <div className="flex items-start gap-2">
          <Badge variant="secondary" className="mt-0.5 shrink-0 tabular-nums">
            {number}
          </Badge>
          {exercise.title && <p className="flex-1 font-medium">{exercise.title}</p>}
          {mode && (
            <span className="ml-auto shrink-0 text-sm text-muted-foreground tabular-nums">
              {!saved ? t("noAnswerYet") : result ? t("score", { right, total: verdicts.length }) : t("notChecked")}
            </span>
          )}
          {menu}
        </div>
        {meta?.group !== "material" && <AttachmentViewer value={content.attachment as Attachment | null | undefined} />}
        {ui && (
          <div className={cn(mode && "pointer-events-none")}>
            <ui.Viewer
              // Viewers keep their own copy of the answer: remount when it changes.
              key={JSON.stringify(answer)}
              exerciseId={exercise.id}
              content={exercise.content}
              answer={answer}
              result={result}
            />
          </div>
        )}
      </Card>
    </li>
  );
}

function AnswerExercise({
  exercise,
  number,
  persist,
  menu,
}: {
  exercise: StudentExercise;
  number: string;
  persist?: Persist;
  menu?: React.ReactNode;
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
      response = await requestSaveAnswer({ classId: p.classId, exerciseId: exercise.id, answer: next, check: true });
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
      const r = await requestSaveAnswer({ classId: p.classId, exerciseId: exercise.id, answer: next });
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
          "gap-3 rounded-2xl px-4 py-4 transition-shadow group-data-[flash=true]:ring-4 group-data-[flash=true]:ring-primary/50",
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
      </Card>
    </li>
  );
}
