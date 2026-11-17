import { CircleAlert } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import { Button } from "@/components/ui/button";
import { getHomeworkReview } from "@/features/homework/queries";
import { homeworkStatus } from "@/features/homework/status";
import { getStudentLesson } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ReviewNote } from "./review-notes";
import { ReviewedToggle } from "./reviewed-toggle";
import { HomeworkStatusBadge } from "./status-badge";

export type Review = NonNullable<Awaited<ReturnType<typeof getHomeworkReview>>>;

/**
 * One student's homework for the teacher: switching between the students, the
 * answers with tries and comments, "Mark as reviewed". Used on its own page and
 * in the lesson's Homework tab.
 */
export async function HomeworkReview({
  review,
  studentHref,
  header,
  withTitle = true,
  stay = false,
}: {
  review: Review;
  /** where a student's button leads */
  studentHref: (studentId: string) => string;
  header?: React.ReactNode;
  withTitle?: boolean;
  /** after "Mark as reviewed": stay here (in the lesson) instead of going to the class */
  stay?: boolean;
}) {
  const [t, tr, format, lesson] = await Promise.all([
    getTranslations("homework"),
    getTranslations("homework.review"),
    getFormatter(),
    getStudentLesson(review.lessonId, "homework"),
  ]);

  const ids = new Set(review.exerciseIds);
  const sections = (lesson?.sections ?? [])
    .map((s) => ({ ...s, exercises: s.exercises.filter((e) => ids.has(e.id)) }))
    .filter((s) => s.exercises.length > 0);
  const saved = Object.fromEntries(
    Object.entries(review.answers).map(([id, a]) => [id, { answer: a.answer, checkedAnswer: a.checkedAnswer, result: a.result }]),
  );
  const notes = Object.fromEntries(
    sections.flatMap((s) =>
      s.exercises.map((e) => {
        const a = review.answers[e.id];
        return [
          e.id,
          <ReviewNote
            key={e.id}
            homeworkId={review.id}
            studentId={review.studentId}
            exercise={e}
            attempts={a?.attempts ?? 0}
            firstAnswer={a?.firstAnswer ?? null}
            firstResult={a?.firstResult ?? null}
            lastAnswer={a ? (a.checkedAnswer ?? a.answer) : null}
            comment={review.comments[e.id] ?? ""}
          />,
        ];
      }),
    ),
  );
  const status = homeworkStatus({
    submittedAt: review.submittedAt,
    reviewedAt: review.reviewedAt,
    dueAt: review.dueAt,
    answered: Object.keys(review.answers).length,
  });
  const date = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="flex flex-col gap-4">
      {header}
      {withTitle && (
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold break-words">{review.studentName || t("noName")}</h1>
        <p className="text-muted-foreground break-words">
          {review.className} · {review.lessonTitle} · {t("from", { date: format.dateTime(new Date(review.createdAt), { dateStyle: "medium" }) })}
        </p>
      </div>
      )}

      {review.students.length > 1 && (
        <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={tr("student")}>
          {review.students.map((s) => (
            <Button
              key={s.id}
              asChild
              size="sm"
              variant={s.id === review.studentId ? "default" : "outline"}
              className="shrink-0"
            >
              <Link href={studentHref(s.id)} scroll={false} aria-current={s.id === review.studentId ? "page" : undefined}>
                {s.name || t("noName")}
                {/* violet: handed in, waits for a check; green: checked */}
                {s.submitted && (
                  <span className={cn("size-2 rounded-full", s.reviewed ? "bg-emerald-500" : "bg-violet-500")} aria-hidden="true" />
                )}
              </Link>
            </Button>
          ))}
        </nav>
      )}

      <div className="flex flex-wrap items-center gap-2 rounded-2xl border bg-card p-3">
        <HomeworkStatusBadge status={status} forTeacher />
        <span className="text-sm text-muted-foreground">
          {review.submittedAt
            ? t("handedInOn", { date: date(review.submittedAt) })
            : review.dueAt
              ? t("dueOn", { date: date(review.dueAt) })
              : t("noDue")}
        </span>
        <span className="text-sm text-muted-foreground tabular-nums">
          · {t("answeredOf", { done: Object.keys(review.answers).length, total: review.exerciseIds.length })}
        </span>
      </div>

      {!review.submittedAt && (
        <p className="flex items-start gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {tr("notSubmitted")}
        </p>
      )}

      <LessonPlayer language={review.language} sections={sections} review={saved} notes={notes} />

      {/* After reading everything: mark it reviewed (the student sees "Reviewed"). */}
      {review.submittedAt && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed p-4 text-center">
          <p className="text-sm text-muted-foreground">{review.reviewedAt ? tr("reviewedHint") : tr("markHint")}</p>
          <ReviewedToggle homeworkId={review.id} studentId={review.studentId} reviewed={Boolean(review.reviewedAt)} classId={review.classId} stay={stay} />
        </div>
      )}
    </div>
  );
}
