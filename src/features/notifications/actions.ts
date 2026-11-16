"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import type { NotificationItem, NotificationKind } from "./links";

const LIMIT = 30;

/** The signed-in user's latest notifications and how many are unread (RLS: only their own). */
export async function listNotifications(): Promise<{ items: NotificationItem[]; unread: number }> {
  const supabase = await createClient();
  const [{ data }, { count }] = await Promise.all([
    supabase
      .from("notifications")
      .select(
        "id, kind, homework_id, student_id, created_at, read_at, student:profiles!notifications_student_id_fkey(full_name), homework:homeworks(class_id, lesson_id, class:classes(name), lesson:lessons(title))",
      )
      .order("created_at", { ascending: false })
      .limit(LIMIT),
    supabase.from("notifications").select("id", { count: "exact", head: true }).is("read_at", null),
  ]);
  const items = (data ?? []).flatMap((n) =>
    n.homework
      ? [
          {
            id: n.id,
            kind: n.kind as NotificationKind,
            homeworkId: n.homework_id,
            studentId: n.student_id,
            studentName: n.student?.full_name ?? "",
            classId: n.homework.class_id,
            className: n.homework.class?.name ?? "",
            lessonId: n.homework.lesson_id,
            lessonTitle: n.homework.lesson?.title ?? "",
            createdAt: n.created_at,
            read: n.read_at !== null,
          },
        ]
      : [],
  );
  return { items, unread: count ?? 0 };
}

/** Unread count only (for the bell's first render). */
export async function countUnreadNotifications(): Promise<number> {
  const supabase = await createClient();
  const { count } = await supabase.from("notifications").select("id", { count: "exact", head: true }).is("read_at", null);
  return count ?? 0;
}

const ids = z.array(z.string().uuid()).max(100);

/** Marks the given notifications (or all, when no ids) as read. */
export async function markNotificationsRead(only?: string[]): Promise<void> {
  const parsed = only === undefined ? null : ids.safeParse(only);
  if (parsed && !parsed.success) return;
  const supabase = await createClient();
  let query = supabase.from("notifications").update({ read_at: new Date().toISOString() }).is("read_at", null);
  if (parsed) query = query.in("id", parsed.data);
  await query;
}

/** Marks read what a page has just shown: the notifications about these homeworks (and student). */
export async function markHomeworkNotificationsRead(homeworkIds: string[], studentId?: string): Promise<void> {
  const parsed = ids.safeParse(homeworkIds);
  if (!parsed.success || parsed.data.length === 0) return;
  const supabase = await createClient();
  let query = supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .is("read_at", null)
    .in("homework_id", parsed.data);
  if (studentId) query = query.eq("student_id", studentId);
  await query;
}
