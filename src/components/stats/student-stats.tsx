import { BookOpenCheck, CalendarCheck, ClipboardCheck, Target } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import type { ClassStats, HomeworkTiming } from "@/features/stats/stats";
import { cn } from "@/lib/utils";

const TIMING_STYLE: Record<HomeworkTiming, string> = {
  onTime: "border-emerald-200 bg-emerald-50 text-emerald-800",
  late: "border-amber-200 bg-amber-50 text-amber-900",
  waiting: "border-sky-200 bg-sky-50 text-sky-800",
  missed: "border-red-200 bg-red-50 text-red-800",
};

/** A thin bar 0–100% with the number next to it (or "—"). */
function Bar({ value, label, tone = "bg-primary" }: { value: number | null; label: string; tone?: string }) {
  return (
    <div className="flex items-center gap-2" role="img" aria-label={`${label}: ${value ?? "—"}${value === null ? "" : "%"}`}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full", tone)} style={{ width: `${value ?? 0}%` }} />
      </div>
      <span className="w-10 text-right text-xs tabular-nums text-muted-foreground">{value === null ? "—" : `${value}%`}</span>
    </div>
  );
}

/**
 * The student's results in this class: lessons done and right answers in
 * them, homework handed in (on time / late / missed) and right answers in it
 * (first try and final), per lesson and per homework, as simple bars.
 */
export async function StudentStats({ stats }: { stats: ClassStats }) {
  const [t, format] = await Promise.all([getTranslations("stats"), getFormatter()]);
  const date = (iso: string) => format.dateTime(new Date(iso), { day: "numeric", month: "short" });
  const pct = (v: number | null) => (v === null ? "—" : `${v}%`);
  const tiles = [
    { icon: BookOpenCheck, value: t("ofTotal", { done: stats.lessonsFinished, total: stats.lessonsOpened }), label: t("lessonsDone") },
    { icon: Target, value: pct(stats.lessonPercent), label: t("lessonRight") },
    { icon: CalendarCheck, value: t("ofTotal", { done: stats.homeworkHandedIn, total: stats.homeworkAssigned }), label: t("homeworkHandedIn") },
    { icon: ClipboardCheck, value: pct(stats.firstTryPercent), label: t("homeworkFirstTry") },
  ];

  return (
    <section className="flex flex-col gap-4" aria-label={t("title")}>
      <h2 className="text-lg font-semibold">{t("title")}</h2>
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {tiles.map((x) => (
          <div key={x.label} className="flex flex-col items-center rounded-2xl border bg-card p-3 text-center">
            <x.icon className="size-5 text-primary" aria-hidden="true" />
            <dd className="text-xl font-semibold tabular-nums">{x.value}</dd>
            <dt className="text-xs text-muted-foreground">{x.label}</dt>
          </div>
        ))}
      </dl>

      {stats.homeworkAssigned > 0 && (
        <p className="flex flex-wrap gap-2 text-sm">
          <span className={cn("rounded-full border px-2 py-0.5", TIMING_STYLE.onTime)}>{t("onTime", { count: stats.onTime })}</span>
          <span className={cn("rounded-full border px-2 py-0.5", TIMING_STYLE.late)}>{t("late", { count: stats.late })}</span>
          {stats.missed > 0 && <span className={cn("rounded-full border px-2 py-0.5", TIMING_STYLE.missed)}>{t("missed", { count: stats.missed })}</span>}
          {stats.finalPercent !== null && <span className="rounded-full border px-2 py-0.5">{t("finalRight", { percent: stats.finalPercent })}</span>}
        </p>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="flex flex-col gap-2 rounded-2xl border bg-card p-4" aria-label={t("byHomework")}>
          <h3 className="font-medium">{t("byHomework")}</h3>
          {stats.homework.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("noHomework")}</p>
          ) : (
            <>
              <p className="flex gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-amber-500" aria-hidden="true" />
                  {t("firstTry")}
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                  {t("final")}
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {stats.homework.map((h) => (
                  <li key={h.id} className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="min-w-0 flex-1 truncate font-medium">{h.lessonTitle}</span>
                      <span className="text-xs text-muted-foreground">{date(h.createdAt)}</span>
                      <span className={cn("rounded-full border px-2 py-0.5 text-xs", TIMING_STYLE[h.timing])}>{t(`timing.${h.timing}`)}</span>
                    </div>
                    <Bar value={h.firstPercent} label={t("firstTry")} tone="bg-amber-500" />
                    <Bar value={h.finalPercent} label={t("final")} />
                    <span className="text-xs text-muted-foreground">{t("answered", { done: h.answered, total: h.total })}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        <section className="flex flex-col gap-2 rounded-2xl border bg-card p-4" aria-label={t("byLesson")}>
          <h3 className="font-medium">{t("byLesson")}</h3>
          {stats.lessons.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("noLessons")}</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {stats.lessons.map((l) => (
                <li key={l.lessonId} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="min-w-0 flex-1 truncate font-medium">{l.title}</span>
                    <span className="text-xs text-muted-foreground">{date(l.openedAt)}</span>
                    {l.finishedAt && <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800">{t("finished")}</span>}
                  </div>
                  <Bar value={l.percent} label={t("lessonRight")} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </section>
  );
}
