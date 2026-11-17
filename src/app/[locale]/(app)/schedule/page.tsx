import { setRequestLocale } from "next-intl/server";
import { ScheduleView, type Slot } from "@/components/schedule/schedule-view";
import { addDays, expand, localDate, weekStart, zonedToUtc, type Occurrence } from "@/features/schedule/occurrences";
import { loadSchedule } from "@/features/schedule/queries";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";
import { isValidTimeZone } from "@/lib/timezones";

const toSlot = (o: Occurrence): Slot => ({ ...o, start: o.start.toISOString(), end: o.end.toISOString() });

/** The schedule: upcoming lessons and a week / month calendar, in the user's time zone. */
export default async function SchedulePage({ params, searchParams }: PageProps<"/[locale]/schedule">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const query = await searchParams;
  const timeZone = isValidTimeZone(profile.timezone) ? profile.timezone : "UTC";
  const now = new Date();
  const today = localDate(now, timeZone);
  const view = query.view === "month" ? "month" : "week";
  const anchor = typeof query.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(query.date) ? query.date : today;

  // The calendar's days: one week, or the whole weeks covering the month.
  let first: string;
  let count: number;
  if (view === "week") {
    first = weekStart(anchor);
    count = 7;
  } else {
    const monthStart = `${anchor.slice(0, 7)}-01`;
    const [y, m] = monthStart.split("-").map(Number);
    const monthEnd = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
    first = weekStart(monthStart);
    count = Math.round((Date.parse(addDays(weekStart(monthEnd), 7)) - Date.parse(first)) / 86_400_000);
  }
  const days = Array.from({ length: count }, (_, i) => addDays(first, i));
  const { events, overrides, classes } = await loadSchedule();
  const slots = expand(events, overrides, zonedToUtc(first, "00:00", timeZone), zonedToUtc(addDays(first, count), "00:00", timeZone)).map(toSlot);
  const upcoming = expand(events, overrides, now, new Date(now.getTime() + 14 * 86_400_000)).slice(0, 5).map(toSlot);

  return (
    <ScheduleView
      view={view}
      anchor={anchor}
      today={today}
      days={days}
      slots={slots}
      upcoming={upcoming}
      events={events}
      classes={classes}
      timeZone={timeZone}
      isTeacher={profile.role === "teacher"}
    />
  );
}
