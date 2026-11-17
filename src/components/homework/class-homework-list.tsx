import { ClipboardList } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import type { TeacherHomeworkItem } from "@/features/homework/queries";
import { Link } from "@/i18n/navigation";
import { HomeworkStatusBadge } from "./status-badge";

/**
 * The class's "Homework" tab: each student's homework of each lesson, handed-in
 * work waiting for a check first; a row opens the student's answers.
 */
export async function ClassHomeworkList({ items }: { items: TeacherHomeworkItem[] }) {
  const [t, format] = await Promise.all([getTranslations("homework"), getFormatter()]);
  const date = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "medium", timeStyle: "short" });
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
          <ClipboardList className="size-6" aria-hidden="true" />
        </span>
        <h2 className="font-medium">{t("emptyTitle")}</h2>
        <p className="max-w-md text-muted-foreground">{t("classEmptyText")}</p>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-2" aria-label={t("title")}>
      {items.map((h) => (
        <li key={`${h.homeworkId}-${h.studentId}`}>
          <Link
            href={`/homework/${h.homeworkId}/${h.studentId}`}
            aria-label={`${t("openAnswers")}: ${h.studentName || t("noName")}, ${h.lessonTitle}`}
            className="flex flex-col gap-1 rounded-2xl border bg-card p-3 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:gap-3"
          >
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="font-medium break-words">
                {h.studentName || t("noName")} · {h.lessonTitle}
              </span>
              <span className="text-sm text-muted-foreground">
                {t("answeredOf", { done: h.answered, total: h.total })}
                {h.submittedAt ? ` · ${t("handedInOn", { date: date(h.submittedAt) })}` : h.dueAt && ` · ${t("dueOn", { date: date(h.dueAt) })}`}
              </span>
            </span>
            <HomeworkStatusBadge status={h.status} forTeacher />
          </Link>
        </li>
      ))}
    </ul>
  );
}
