"use client";

import { ArrowRight, Check, CircleCheck, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
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
import { requestCheck } from "@/features/lessons/check-client";
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
}) {
  const t = useTranslations("player");
  const [activeId, setActiveId] = useState(
    sections.find((s) => s.id === initialSectionId)?.id ?? sections[0]?.id ?? null,
  );
  const index = sections.findIndex((s) => s.id === activeId);
  const active = index >= 0 ? sections[index]! : null;
  const next = index >= 0 ? sections[index + 1] : undefined;

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

function PlayerExercise({ exercise, number }: { exercise: StudentExercise; number: string }) {
  const t = useTranslations("player");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  const mode = checkMode(exercise.type); // "instant", "button" or null (materials)
  const [answer, setAnswer] = useState<unknown>(null);
  const [checkedAnswer, setCheckedAnswer] = useState<unknown>(undefined);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [pending, setPending] = useState(false);
  const inFlight = useRef<AbortController | null>(null);

  async function runCheck(next: unknown): Promise<CheckResult | null> {
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
    <li className="list-none">
      <Card className={cn("gap-3 rounded-2xl px-4 py-4", result?.correct && "border-emerald-500")}>
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
        </div>
        {meta?.group !== "material" && <AttachmentViewer value={content.attachment as Attachment | null | undefined} />}
        {ui && <ui.Viewer exerciseId={exercise.id} content={exercise.content} answer={answer} onAnswer={mode ? onAnswer : undefined} result={result} />}
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
