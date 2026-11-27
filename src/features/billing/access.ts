import "server-only";
import { cache } from "react";
import { getProfile } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { accessOf, hasAccess, studentLimit, type AccessState } from "./plans";

// Who may use the platform right now. Teachers: their own trial or paid time.
// Students: at least one of their teachers has access (a student without any
// teacher yet is never blocked — they still need to join a class).

/** The signed-in teacher's access (null for students). Cached per request. */
export const getMyTeacherAccess = cache(async (): Promise<AccessState | null> => {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return null;
  const supabase = await createClient();
  const { data } = await supabase
    .from("subscriptions")
    .select("plan, trial_ends_at, paid_until")
    .eq("teacher_id", profile.id)
    .maybeSingle();
  return accessOf(data, profile.is_admin);
});

/** A teacher's access, read with the secret key (for checks about another user). */
export async function teacherAccess(teacherId: string): Promise<AccessState> {
  const admin = createAdminClient();
  const [{ data: sub }, { data: profile }] = await Promise.all([
    admin.from("subscriptions").select("plan, trial_ends_at, paid_until").eq("teacher_id", teacherId).maybeSingle(),
    admin.from("profiles").select("is_admin").eq("id", teacherId).maybeSingle(),
  ]);
  return accessOf(sub, profile?.is_admin ?? false);
}

/** Whether the signed-in student is blocked: they have teachers, and none of them has access. */
export const isStudentBlocked = cache(async (): Promise<boolean> => {
  const profile = await getProfile();
  if (profile?.role !== "student") return false;
  const supabase = await createClient();
  const { data: rows } = await supabase.from("teacher_students").select("teacher_id").eq("student_id", profile.id);
  const teacherIds = (rows ?? []).map((r) => r.teacher_id);
  if (teacherIds.length === 0) return false;
  const admin = createAdminClient();
  const [{ data: subs }, { data: admins }] = await Promise.all([
    admin.from("subscriptions").select("teacher_id, plan, trial_ends_at, paid_until").in("teacher_id", teacherIds),
    admin.from("profiles").select("id").in("id", teacherIds).eq("is_admin", true),
  ]);
  const adminIds = new Set((admins ?? []).map((a) => a.id));
  return !teacherIds.some((id) => {
    const sub = subs?.find((s) => s.teacher_id === id) ?? null;
    return hasAccess(accessOf(sub, adminIds.has(id)));
  });
});

export type SeatCheck = "ok" | "inactive" | "limit";

/**
 * Whether a teacher can take this student: fine if the student is already on
 * the teacher's list; otherwise the teacher needs access and a free place.
 */
export async function checkStudentSeat(teacherId: string, studentId: string | null): Promise<SeatCheck> {
  const access = await teacherAccess(teacherId);
  if (!hasAccess(access)) return "inactive";
  const admin = createAdminClient();
  if (studentId) {
    const { data } = await admin
      .from("teacher_students")
      .select("student_id")
      .eq("teacher_id", teacherId)
      .eq("student_id", studentId)
      .maybeSingle();
    if (data) return "ok";
  }
  const { count } = await admin
    .from("teacher_students")
    .select("student_id", { count: "exact", head: true })
    .eq("teacher_id", teacherId);
  return (count ?? 0) < studentLimit(access) ? "ok" : "limit";
}

/** How many students the teacher has (for the billing page). */
export async function countMyStudents(teacherId: string): Promise<number> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("teacher_students")
    .select("student_id", { count: "exact", head: true })
    .eq("teacher_id", teacherId);
  return count ?? 0;
}
