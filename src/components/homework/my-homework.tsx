"use client";

import { CircleCheck, Loader2, Send } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { submitHomework } from "@/features/homework/actions";
import type { MyHomework } from "@/features/homework/queries";
import type { StudentSection } from "@/features/lessons/queries";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { TeacherComment } from "./review-notes";
import { HomeworkStatusBadge } from "./status-badge";

/**
 * The student's "Homework" tab in a lesson: the exercises the teacher sent,
 * answered and checked like in class (answers are saved), then "Hand in".
 * After handing in, the answers are shown read-only.
 */
export function MyHomeworkView({
  classId,
  userId,
  language,
  sections,
  homeworks,
}: {
  classId: string;
  userId: string;
  language: string;
  /** the homework part of the lesson that was sent to this student */
  sections: StudentSection[];
  homeworks: MyHomework[];
}) {
  const t = useTranslations("homework");
  const format = useFormatter();
  const router = useRouter();
  const [currentId, setCurrentId] = useState(homeworks[0]?.id ?? null);
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const hw = homeworks.find((h) => h.id === currentId) ?? homeworks[0];
  if (!hw) return null;

  // Only this homework's exercises, in the lesson's order.
  const ids = new Set(hw.exerciseIds);
  const shown = sections
    .map((s) => ({ ...s, exercises: s.exercises.filter((e) => ids.has(e.id)) }))
    .filter((s) => s.exercises.length > 0);
  const answered = Object.keys(hw.saved).length;
  const submitted = Boolean(hw.submittedAt);
  const notes = Object.fromEntries(Object.entries(hw.comments).map(([id, body]) => [id, <TeacherComment key={id} body={body} />]));
  const date = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "medium", timeStyle: "short" });

  function handIn() {
    startTransition(async () => {
      const r = await submitHomework(hw!.id);
      setConfirming(false);
      if (r.ok) {
        toast.success(t("handedInToast"));
        router.refresh();
      } else toast.error(t("handInFailed"));
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {homeworks.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label={t("which")}>
          {homeworks.map((h) => (
            <Button
              key={h.id}
              size="sm"
              variant={h.id === hw.id ? "default" : "outline"}
              aria-pressed={h.id === hw.id}
              onClick={() => setCurrentId(h.id)}
              className="shrink-0"
            >
              {t("from", { date: format.dateTime(new Date(h.createdAt), { dateStyle: "medium" }) })}
            </Button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 rounded-2xl border bg-card p-3">
        <HomeworkStatusBadge status={hw.status} />
        <span className="text-sm text-muted-foreground">
          {submitted
            ? t("handedInOn", { date: date(hw.submittedAt!) })
            : hw.dueAt
              ? t("dueOn", { date: date(hw.dueAt) })
              : t("noDue")}
        </span>
        <span className="ml-auto text-sm text-muted-foreground tabular-nums">
          {t("answeredOf", { done: answered, total: hw.exerciseIds.length })}
        </span>
      </div>

      <LessonPlayer
        key={hw.id}
        language={language}
        sections={shown}
        // Handed in: the student's answers, read-only.
        review={submitted ? hw.saved : undefined}
        classAnswers={submitted ? undefined : { classId, userId, saved: hw.saved, homeworkId: hw.id }}
        notes={notes}
      />

      {!submitted ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed p-4 text-center">
          <p className="text-sm text-muted-foreground">{t("handInHint")}</p>
          <Button size="lg" onClick={() => setConfirming(true)} disabled={pending}>
            {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
            {t("handIn")}
          </Button>
        </div>
      ) : (
        <p className={cn("flex items-center justify-center gap-2 text-sm text-emerald-700")}>
          <CircleCheck className="size-4" aria-hidden="true" />
          {hw.status === "reviewed" ? t("review.reviewedNote") : t("handedInNote")}
        </p>
      )}

      <AlertDialog open={confirming} onOpenChange={setConfirming}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("handInTitle")}</AlertDialogTitle>
            <AlertDialogDescription>
              {answered < hw.exerciseIds.length
                ? t("handInNotAll", { done: answered, total: hw.exerciseIds.length })
                : t("handInText")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={handIn}>{t("handIn")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
