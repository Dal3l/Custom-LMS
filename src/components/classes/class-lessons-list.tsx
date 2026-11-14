import { Check, ChevronRight, CircleDashed, Radio } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import type { ClassLessonItem } from "@/features/classes/lesson-queries";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/** Lessons of a class: the current one on top (highlighted), then the rest; finished ones have a check mark. */
export async function ClassLessonsList({ classId, lessons }: { classId: string; lessons: ClassLessonItem[] }) {
  const [t, format] = await Promise.all([getTranslations("classLessons"), getFormatter()]);
  return (
    <ul className="flex flex-col gap-2" aria-label={t("listLabel")}>
      {lessons.map((l) => {
        const live = l.status === "live";
        return (
          <li key={l.lessonId}>
            <Link
              href={`/classes/${classId}/lessons/${l.lessonId}`}
              className={cn(
                "flex min-h-14 items-center gap-3 rounded-2xl border px-3 py-2 transition-colors hover:bg-accent",
                live && "border-primary bg-primary/5",
              )}
            >
              {live ? (
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Radio className="size-4" aria-hidden="true" />
                </span>
              ) : l.finishedAt ? (
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="size-4" aria-label={t("done")} />
                </span>
              ) : (
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <CircleDashed className="size-4" aria-label={t("notFinished")} />
                </span>
              )}
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="font-medium break-words">{l.title}</span>
                <span className="text-sm text-muted-foreground">
                  {l.courseTitle} ·{" "}
                  {format.dateTime(new Date(live ? l.openedAt : (l.finishedAt ?? l.openedAt)), { dateStyle: "medium" })}
                </span>
              </span>
              {live && <Badge>{t("live")}</Badge>}
              {live && l.finishedAt && <Check className="size-4 shrink-0 text-emerald-600" aria-label={t("done")} />}
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
