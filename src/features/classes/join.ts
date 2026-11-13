import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { INVITE_TOKEN_RE } from "./credentials";

// Invite links are handled with the secret key, but only after the server has
// checked who the user is. The token itself is the permission to join.

export type InviteInfo = { classId: string; className: string; teacherName: string; full: boolean };

/** Class and teacher names for an enabled invite link, or null. */
export async function getInviteInfo(token: string): Promise<InviteInfo | null> {
  if (!INVITE_TOKEN_RE.test(token)) return null;
  const admin = createAdminClient();
  const { data } = await admin
    .from("class_invites")
    .select("class:classes(id, name, kind, teacher:profiles!classes_teacher_id_fkey(full_name), class_members(count))")
    .eq("token", token)
    .eq("enabled", true)
    .maybeSingle();
  const c = data?.class;
  if (!c) return null;
  return {
    classId: c.id,
    className: c.name,
    teacherName: c.teacher?.full_name ?? "",
    full: c.kind === "individual" && (c.class_members[0]?.count ?? 0) > 0,
  };
}

export type JoinResult =
  | { ok: true; classId: string }
  | { ok: false; error: "invalidInvite" | "teacherAccount" | "classFull" | "generic" };

/**
 * Adds the user to the class of this invite as a student. A user without a
 * role yet (first Google sign-in) becomes a student. Joining twice is fine.
 */
export async function joinByInvite(userId: string, token: string): Promise<JoinResult> {
  const info = await getInviteInfo(token);
  if (!info) return { ok: false, error: "invalidInvite" };
  const admin = createAdminClient();

  const { data: profile } = await admin.from("profiles").select("role").eq("id", userId).maybeSingle();
  if (!profile) return { ok: false, error: "generic" };
  if (profile.role === "teacher") return { ok: false, error: "teacherAccount" };

  const { data: existing } = await admin
    .from("class_members")
    .select("student_id")
    .eq("class_id", info.classId)
    .eq("student_id", userId)
    .maybeSingle();
  if (existing) return { ok: true, classId: info.classId };
  if (info.full) return { ok: false, error: "classFull" };

  if (profile.role === null) {
    const { error } = await admin.from("profiles").update({ role: "student" }).eq("id", userId).is("role", null);
    if (error) return { ok: false, error: "generic" };
  }
  const { error } = await admin.from("class_members").insert({ class_id: info.classId, student_id: userId });
  if (error) return { ok: false, error: "generic" };
  return { ok: true, classId: info.classId };
}
