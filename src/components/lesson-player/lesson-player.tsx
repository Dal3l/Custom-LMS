"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Attachment } from "@/features/exercises/attachment";
import { AttachmentViewer } from "@/features/exercises/attachment-ui";
import { exerciseMeta } from "@/features/exercises/catalog";
import type { CheckResult } from "@/features/exercises/checking";
import { EXERCISE_UI } from "@/features/exercises/client";
import { checkAnswer } from "@/features/lessons/check";
import type { StudentExercise, StudentSection } from "@/features/lessons/queries";
import { exerciseNumber } from "@/features/lessons/sections";
import { cn } from "@/lib/utils";

/**
 * A lesson as the student sees it: one section at a time, answers checked on the
 * server right away (right parts turn green, wrong ones red; the student may try again).
 */
export function LessonPlayer({
  sections,
  initialSectionId,
  resetSignal = 0,
}: {
  sections: StudentSection[];
  initialSectionId?: string | null;
  /** Change it to clear all answers. */
  resetSignal?: number;
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

      {next && (
        <div className="flex justify-end">
          <Button size="lg" onClick={() => select(next.id)}>
            {t("next", { title: next.title })}
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
}

function PlayerExercise({ exercise, number }: { exercise: StudentExercise; number: string }) {
  const t = useTranslations("player");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  const checks = meta?.group === "auto";
  const [answer, setAnswer] = useState<unknown>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const latest = useRef(0); // only the newest check may update the screen

  async function onAnswer(next: unknown, { check }: { check: boolean }) {
    setAnswer(next);
    if (!check || !checks) return;
    const request = ++latest.current;
    const response = await checkAnswer(exercise.id, next);
    if (request !== latest.current) return;
    if (response.ok) setResult(response.result);
    else toast.error(t("checkFailed"));
  }

  const content = exercise.content as Record<string, unknown>;
  const total = result ? Object.keys(result.parts).length : 0;
  const right = result ? Object.values(result.parts).filter((v) => v === true).length : 0;

  return (
    <li className="list-none">
      <Card className={cn("gap-3 rounded-2xl px-4 py-4", result?.correct && "border-emerald-500")}>
        <div className="flex items-start gap-2">
          <Badge variant="secondary" className="mt-0.5 shrink-0 tabular-nums">
            {number}
          </Badge>
          {exercise.title && <p className="flex-1 font-medium">{exercise.title}</p>}
          {result && total > 0 && (
            <span
              className={cn(
                "ml-auto flex shrink-0 items-center gap-1 text-sm tabular-nums",
                result.correct ? "text-emerald-700" : "text-muted-foreground",
              )}
              role="status"
            >
              {result.correct && <CircleCheck className="size-4" aria-hidden="true" />}
              {t("score", { right, total })}
            </span>
          )}
        </div>
        {meta?.group !== "material" && <AttachmentViewer value={content.attachment as Attachment | null | undefined} />}
        {ui && <ui.Viewer content={exercise.content} answer={answer} onAnswer={checks ? onAnswer : undefined} result={result} />}
      </Card>
    </li>
  );
}
