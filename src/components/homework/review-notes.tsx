"use client";

import { Check, Loader2, MessageSquare, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import type { CheckResult } from "@/features/exercises/checking";
import { exerciseMeta } from "@/features/exercises/catalog";
import { EXERCISE_UI } from "@/features/exercises/client";
import { saveHomeworkComment } from "@/features/homework/actions";
import type { StudentExercise } from "@/features/lessons/queries";

/** The student's side: the teacher's comment next to the exercise. */
export function TeacherComment({ body }: { body: string }) {
  const t = useTranslations("homework.review");
  return (
    <div className="flex gap-2 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-sky-950" role="note" aria-label={t("comment")}>
      <MessageSquare className="mt-0.5 size-4 shrink-0 text-sky-700" aria-hidden="true" />
      <p className="min-w-0 flex-1 whitespace-pre-wrap break-words">{body}</p>
    </div>
  );
}

/**
 * The teacher's side under each exercise of a student's homework: how many
 * tries, the first try (if different from the last), and a comment box saved
 * by itself.
 */
export function ReviewNote({
  homeworkId,
  studentId,
  exercise,
  attempts,
  firstAnswer,
  firstResult,
  lastAnswer,
  comment,
}: {
  homeworkId: string;
  studentId: string;
  exercise: StudentExercise;
  attempts: number;
  firstAnswer: unknown;
  firstResult: unknown;
  lastAnswer: unknown;
  comment: string;
}) {
  const t = useTranslations("homework.review");
  const meta = exerciseMeta(exercise.type);
  const ui = meta ? EXERCISE_UI[meta.id] : undefined;
  const result = firstResult as CheckResult | null;
  const firstDiffers = firstAnswer != null && JSON.stringify(firstAnswer) !== JSON.stringify(lastAnswer);

  return (
    <div className="flex flex-col gap-3 border-t pt-3">
      {attempts > 0 && (
        <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {t("attempts", { count: attempts })}
          {result && (
            <span className={result.correct ? "flex items-center gap-1 text-emerald-700" : "flex items-center gap-1 text-red-700"}>
              {result.correct ? <Check className="size-4" aria-hidden="true" /> : <X className="size-4" aria-hidden="true" />}
              {result.correct ? t("firstRight") : t("firstWrong")}
            </span>
          )}
        </p>
      )}
      {firstDiffers && ui && (
        <details className="rounded-xl border bg-muted/30 p-3">
          <summary className="cursor-pointer text-sm font-medium">{t("firstTry")}</summary>
          <div className="pointer-events-none mt-3">
            <ui.Viewer content={exercise.content} answer={firstAnswer} result={result} />
          </div>
        </details>
      )}
      <CommentBox homeworkId={homeworkId} studentId={studentId} exerciseId={exercise.id} initial={comment} />
    </div>
  );
}

function CommentBox({
  homeworkId,
  studentId,
  exerciseId,
  initial,
}: {
  homeworkId: string;
  studentId: string;
  exerciseId: string;
  initial: string;
}) {
  const t = useTranslations("homework.review");
  const [body, setBody] = useState(initial);
  const [state, setState] = useState<"saved" | "saving" | "error">("saved");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latest = useRef(initial);

  async function save(text: string) {
    setState("saving");
    const r = await saveHomeworkComment({ homeworkId, studentId, exerciseId, body: text });
    // A newer edit may already be waiting; its own save reports the state.
    if (latest.current === text) setState(r.ok ? "saved" : "error");
  }

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={`comment-${exerciseId}`} className="flex items-center gap-1.5 text-sm font-medium">
        <MessageSquare className="size-4 text-sky-700" aria-hidden="true" />
        {t("comment")}
      </label>
      <Textarea
        id={`comment-${exerciseId}`}
        value={body}
        placeholder={t("commentPlaceholder")}
        maxLength={2000}
        rows={2}
        onChange={(e) => {
          const text = e.target.value;
          setBody(text);
          latest.current = text;
          setState("saving");
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => void save(text), 800);
        }}
      />
      <p className="flex items-center gap-1 text-xs text-muted-foreground" role="status">
        {state === "saving" && <Loader2 className="size-3 animate-spin" aria-hidden="true" />}
        {state === "saving" ? t("saving") : state === "error" ? t("saveError") : body.trim() ? t("saved") : t("commentHint")}
      </p>
    </div>
  );
}
