import { ArrowRight, MessageCircle, Radio, Video } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import type { ComponentType, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { dayKind } from "@/features/dashboard/dashboard";
import type { LiveClass, UpcomingLesson } from "@/features/dashboard/queries";
import { localTime } from "@/features/schedule/occurrences";
import { Link } from "@/i18n/navigation";

/** One block of the home page: a title, an optional count and "see all" link, then its content. */
export function Section({
  title,
  icon: Icon,
  count,
  allHref,
  allLabel,
  children,
}: {
  title: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;
  count?: number;
  allHref?: string;
  allLabel?: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border bg-card p-4" aria-label={title}>
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <h2 className="flex-1 font-semibold">
          {title}
          {!!count && <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground tabular-nums">{count}</span>}
        </h2>
        {allHref && allLabel && (
          <Link href={allHref} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            {allLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

/** "A lesson is on now" — straight into it. */
export async function LiveBanner({ live }: { live: LiveClass[] }) {
  if (!live.length) return null;
  const t = await getTranslations("dashboard");
  return (
    <div className="flex flex-col gap-2">
      {live.map((c) => (
        <div key={c.classId} className="flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-3 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-100">
          <Radio className="size-5 shrink-0" aria-hidden="true" />
          <span className="min-w-0 flex-1 font-medium break-words">{t("liveNow", { name: c.name })}</span>
          <Button asChild size="sm">
            <Link href={c.href}>{t("joinLesson")}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

/** "Today 18:00–19:00" in the viewer's time zone. */
export async function whenFormatter(timeZone: string) {
  const [t, format] = await Promise.all([getTranslations("dashboard"), getFormatter()]);
  const now = new Date();
  return (l: Pick<UpcomingLesson, "start" | "end">) => {
    const start = new Date(l.start);
    const kind = dayKind(start, now, timeZone);
    const day =
      kind === "later" ? format.dateTime(start, { weekday: "short", day: "numeric", month: "short", timeZone }) : t(kind);
    return { day, time: `${localTime(start, timeZone)}–${localTime(new Date(l.end), timeZone)}`, soon: kind === "today" };
  };
}

export async function LessonRows({ lessons, timeZone }: { lessons: UpcomingLesson[]; timeZone: string }) {
  const [t, when] = await Promise.all([getTranslations("dashboard"), whenFormatter(timeZone)]);
  return (
    <ul className="flex flex-col gap-2">
      {lessons.map((l) => {
        const w = when(l);
        return (
          <li key={l.key} className="flex items-center gap-2">
            <Link href={l.href} className="flex min-w-0 flex-1 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent">
              <span className="flex w-28 shrink-0 flex-col text-sm">
                <span className={w.soon ? "font-semibold text-primary first-letter:uppercase" : "first-letter:uppercase"}>{w.day}</span>
                <span className="text-muted-foreground tabular-nums">{w.time}</span>
              </span>
              <span className="min-w-0 flex-1 font-medium break-words">{l.className}</span>
            </Link>
            {l.callUrl && (
              <Button asChild variant="ghost" size="icon" aria-label={t("call")}>
                <a href={l.callUrl} target="_blank" rel="noopener noreferrer">
                  <Video aria-hidden="true" />
                </a>
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export async function ChatRows({ chats }: { chats: { classId: string; name: string; count: number }[] }) {
  const t = await getTranslations("dashboard");
  return (
    <Section title={t("messages")} icon={MessageCircle}>
      {chats.length === 0 ? (
        <Empty>{t("noMessages")}</Empty>
      ) : (
        <ul className="flex flex-col gap-1">
          {chats.map((c) => (
            <li key={c.classId}>
              <Link href={`/classes/${c.classId}?tab=chat`} className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent">
                <span className="min-w-0 flex-1 font-medium break-words">{c.name}</span>
                <span className="text-sm text-muted-foreground">{t("newMessages", { count: c.count })}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
