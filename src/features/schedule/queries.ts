import "server-only";
import { currentLesson } from "@/features/classes/queries";
import { createClient } from "@/lib/supabase/server";
import type { ScheduleEvent, ScheduleOverride } from "./occurrences";

export type ScheduleClass = {
  id: string;
  name: string;
  callUrl: string | null;
  /** where "Start the lesson" / "Join" leads */
  lessonId: string | null;
  /** a stable colour number for the class */
  color: number;
};

/** The schedule a user can see (RLS: a teacher's own classes, a student's classes). */
export async function loadSchedule(classId?: string): Promise<{
  events: ScheduleEvent[];
  overrides: ScheduleOverride[];
  classes: Record<string, ScheduleClass>;
}> {
  const supabase = await createClient();
  let eventsQuery = supabase
    .from("schedule_events")
    .select("id, class_id, starts_on, local_time, time_zone, duration_min, weekdays, until, schedule_overrides(occurs_on, cancelled, moved_to, duration_min)");
  if (classId) eventsQuery = eventsQuery.eq("class_id", classId);
  const [{ data: rows }, { data: cls }] = await Promise.all([
    eventsQuery,
    supabase.from("classes").select("id, name, call_url, created_at, class_lessons(lesson_id, status, opened_at)").order("created_at"),
  ]);
  const events: ScheduleEvent[] = [];
  const overrides: ScheduleOverride[] = [];
  for (const r of rows ?? []) {
    events.push({
      id: r.id,
      classId: r.class_id,
      startsOn: r.starts_on,
      localTime: r.local_time.slice(0, 5),
      timeZone: r.time_zone,
      durationMin: r.duration_min,
      weekdays: r.weekdays,
      until: r.until,
    });
    for (const o of r.schedule_overrides) {
      overrides.push({ eventId: r.id, occursOn: o.occurs_on, cancelled: o.cancelled, movedTo: o.moved_to, durationMin: o.duration_min });
    }
  }
  const classes: Record<string, ScheduleClass> = {};
  (cls ?? []).forEach((c, i) => {
    classes[c.id] = { id: c.id, name: c.name, callUrl: c.call_url, lessonId: currentLesson(c.class_lessons), color: i % 8 };
  });
  return { events, overrides, classes };
}
