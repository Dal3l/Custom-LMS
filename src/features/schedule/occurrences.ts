// The schedule's dates and times. Pure functions, unit-tested.
//
// An event keeps the teacher's local time and time zone; its occurrences are
// worked out here as exact moments (UTC), then shown in each viewer's zone.

export type ScheduleEvent = {
  id: string;
  classId: string;
  /** first (or only) date, YYYY-MM-DD, local to timeZone */
  startsOn: string;
  /** HH:MM (or HH:MM:SS) */
  localTime: string;
  timeZone: string;
  durationMin: number;
  /** ISO weekdays 1 (Mon) … 7 (Sun); null = one lesson */
  weekdays: number[] | null;
  until: string | null;
};

export type ScheduleOverride = {
  eventId: string;
  occursOn: string;
  cancelled: boolean;
  movedTo: string | null;
  durationMin: number | null;
};

export type Occurrence = {
  eventId: string;
  classId: string;
  /** the series date it belongs to (for moving / cancelling it) */
  occursOn: string;
  start: Date;
  end: Date;
  moved: boolean;
  repeating: boolean;
};

const DAY = 86_400_000;

/** How far the zone's wall clock is ahead of UTC at this moment, in ms. */
export function zoneOffset(at: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(at);
  const n = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const wall = Date.UTC(n("year"), n("month") - 1, n("day"), n("hour"), n("minute"), n("second"));
  return wall - Math.floor(at.getTime() / 1000) * 1000;
}

/** The exact moment of a local date and time in a time zone (daylight saving included). */
export function zonedToUtc(date: string, time: string, timeZone: string): Date {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const wall = Date.UTC(y, m - 1, d, hh, mm);
  let guess = wall - zoneOffset(new Date(wall), timeZone);
  // Near a clock change the offset differs: check again at the guess.
  guess = wall - zoneOffset(new Date(guess), timeZone);
  return new Date(guess);
}

/** YYYY-MM-DD of a moment in a time zone. */
export function localDate(at: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(at);
}

/** HH:MM of a moment in a time zone. */
export function localTime(at: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(at);
}

export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d) + days * DAY).toISOString().slice(0, 10);
}

/** ISO weekday 1 (Mon) … 7 (Sun) of a YYYY-MM-DD date. */
export function isoWeekday(date: string): number {
  const [y, m, d] = date.split("-").map(Number);
  return ((new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7) + 1;
}

/** Monday of the week of a date. */
export function weekStart(date: string): string {
  return addDays(date, 1 - isoWeekday(date));
}

/**
 * Every lesson between `from` and `to` (moments), with moved and cancelled
 * dates applied, sorted by start.
 */
export function expand(events: ScheduleEvent[], overrides: ScheduleOverride[], from: Date, to: Date): Occurrence[] {
  const byKey = new Map(overrides.map((o) => [`${o.eventId}|${o.occursOn}`, o]));
  const out: Occurrence[] = [];
  for (const e of events) {
    const dates: string[] = [];
    if (!e.weekdays) dates.push(e.startsOn);
    else {
      // A day of margin on both sides: zones differ by up to ±14 hours.
      let day = localDate(new Date(Math.max(from.getTime() - DAY, zonedToUtc(e.startsOn, "00:00", e.timeZone).getTime())), e.timeZone);
      if (day < e.startsOn) day = e.startsOn;
      const last = localDate(new Date(to.getTime() + DAY), e.timeZone);
      const end = e.until && e.until < last ? e.until : last;
      for (; day <= end; day = addDays(day, 1)) if (e.weekdays.includes(isoWeekday(day))) dates.push(day);
    }
    for (const occursOn of dates) {
      const o = byKey.get(`${e.id}|${occursOn}`);
      if (o?.cancelled) continue;
      const start = o?.movedTo ? new Date(o.movedTo) : zonedToUtc(occursOn, e.localTime, e.timeZone);
      const end = new Date(start.getTime() + (o?.durationMin ?? e.durationMin) * 60_000);
      if (end <= from || start >= to) continue;
      out.push({ eventId: e.id, classId: e.classId, occursOn, start, end, moved: Boolean(o?.movedTo), repeating: Boolean(e.weekdays) });
    }
  }
  return out.sort((a, b) => a.start.getTime() - b.start.getTime());
}
