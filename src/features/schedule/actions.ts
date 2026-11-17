"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { isValidTimeZone } from "@/lib/timezones";
import { zonedToUtc } from "./occurrences";

type Result<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/);
const duration = z.number().int().min(10).max(480);

const eventInput = z
  .object({
    id: z.uuid().optional(),
    classId: z.uuid(),
    date,
    time,
    durationMin: duration,
    /** ISO weekdays for a weekly series; null = one lesson */
    weekdays: z.array(z.number().int().min(1).max(7)).min(1).max(7).nullable(),
    until: date.nullable(),
  })
  .refine((v) => !v.until || v.until >= v.date, { path: ["until"] });

async function teacher() {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return null;
  return { profile, supabase: await createClient() };
}

function refresh() {
  revalidatePath("/[locale]/schedule", "page");
  revalidatePath("/[locale]/classes", "layout");
}

/**
 * Creates or changes a lesson time (once, or weekly on chosen days). The time
 * is the teacher's local time in their profile's time zone. RLS: only the
 * teacher's own classes.
 */
export async function saveEvent(input: z.input<typeof eventInput>): Promise<Result<string>> {
  const ctx = await teacher();
  const parsed = eventInput.safeParse(input);
  if (!ctx) return { ok: false, error: "forbidden" };
  if (!parsed.success) return { ok: false, error: "invalid" };
  const v = parsed.data;
  const timeZone = isValidTimeZone(ctx.profile.timezone) ? ctx.profile.timezone : "UTC";
  const row = {
    starts_on: v.date,
    local_time: v.time,
    time_zone: timeZone,
    duration_min: v.durationMin,
    weekdays: v.weekdays ? [...new Set(v.weekdays)].sort() : null,
    until: v.weekdays ? v.until : null,
  };
  const { data, error } = v.id
    ? await ctx.supabase.from("schedule_events").update(row).eq("id", v.id).select("id")
    : await ctx.supabase.from("schedule_events").insert({ ...row, class_id: v.classId }).select("id");
  if (error) return { ok: false, error: error.code === "42501" ? "forbidden" : "generic" };
  if (!data?.length) return { ok: false, error: "forbidden" };
  refresh();
  return { ok: true, data: data[0]!.id };
}

export async function deleteEvent(id: string): Promise<Result> {
  const ctx = await teacher();
  if (!ctx || !z.uuid().safeParse(id).success) return { ok: false, error: "forbidden" };
  const { data, error } = await ctx.supabase.from("schedule_events").delete().eq("id", id).select("id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  refresh();
  return { ok: true, data: undefined };
}

const occurrence = z.object({ eventId: z.uuid(), occursOn: date });

/** Cancels one date of a series (or the only lesson). */
export async function cancelOccurrence(input: z.input<typeof occurrence>): Promise<Result> {
  const ctx = await teacher();
  const parsed = occurrence.safeParse(input);
  if (!ctx || !parsed.success) return { ok: false, error: "forbidden" };
  const { error } = await ctx.supabase
    .from("schedule_overrides")
    .upsert({ event_id: parsed.data.eventId, occurs_on: parsed.data.occursOn, cancelled: true, moved_to: null, duration_min: null });
  if (error) return { ok: false, error: error.code === "42501" ? "forbidden" : "generic" };
  refresh();
  return { ok: true, data: undefined };
}

const move = occurrence.extend({ date, time, durationMin: duration });

/** Moves one date of a series to another day / time (in the teacher's time zone). */
export async function moveOccurrence(input: z.input<typeof move>): Promise<Result> {
  const ctx = await teacher();
  const parsed = move.safeParse(input);
  if (!ctx || !parsed.success) return { ok: false, error: "forbidden" };
  const v = parsed.data;
  const timeZone = isValidTimeZone(ctx.profile.timezone) ? ctx.profile.timezone : "UTC";
  const { error } = await ctx.supabase.from("schedule_overrides").upsert({
    event_id: v.eventId,
    occurs_on: v.occursOn,
    cancelled: false,
    moved_to: zonedToUtc(v.date, v.time, timeZone).toISOString(),
    duration_min: v.durationMin,
  });
  if (error) return { ok: false, error: error.code === "42501" ? "forbidden" : "generic" };
  refresh();
  return { ok: true, data: undefined };
}
