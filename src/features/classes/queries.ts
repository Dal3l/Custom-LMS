import "server-only";
import type { ProfileWithRole } from "@/lib/auth";
import type { Tables } from "@/lib/supabase/database.types";
import { createClient } from "@/lib/supabase/server";

export type ClassRow = Pick<Tables<"classes">, "id" | "name" | "kind" | "call_url">;
export type ClassListItem = ClassRow & { studentCount: number; teacherName: string | null };

/** Classes on the "Classes" page: a teacher's own, or the ones a student is in. */
export async function listClasses(profile: ProfileWithRole): Promise<ClassListItem[]> {
  const supabase = await createClient();
  if (profile.role === "teacher") {
    const { data } = await supabase
      .from("classes")
      .select("id, name, kind, call_url, class_members(count)")
      .eq("teacher_id", profile.id)
      .order("created_at", { ascending: false });
    return (data ?? []).map(({ class_members, ...c }) => ({
      ...c,
      studentCount: class_members[0]?.count ?? 0,
      teacherName: null,
    }));
  }
  const { data } = await supabase
    .from("class_members")
    .select("joined_at, class:classes(id, name, kind, call_url, teacher:profiles!classes_teacher_id_fkey(full_name))")
    .eq("student_id", profile.id)
    .order("joined_at", { ascending: false });
  return (data ?? []).flatMap(({ class: c }) =>
    c ? [{ id: c.id, name: c.name, kind: c.kind, call_url: c.call_url, studentCount: 0, teacherName: c.teacher?.full_name ?? null }] : [],
  );
}

export type ClassStudent = { id: string; fullName: string; joinedAt: string };
export type ClassInvite = { token: string; enabled: boolean };

export type ClassPageData = ClassRow & {
  isTeacher: boolean;
  teacherName: string;
  students: ClassStudent[];
  invite: ClassInvite | null;
};

/** Everything the class page needs, in one round trip. Null if not found / no access. */
export async function getClassPage(classId: string, profile: ProfileWithRole): Promise<ClassPageData | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("classes")
    .select(
      "id, name, kind, call_url, teacher_id, teacher:profiles!classes_teacher_id_fkey(full_name), class_members(student_id, joined_at, student:profiles!class_members_student_id_fkey(full_name)), class_invites(token, enabled)",
    )
    .eq("id", classId)
    .maybeSingle();
  if (error) throw new Error(`class page query failed: ${error.message}`);
  if (!data) return null;
  const isTeacher = data.teacher_id === profile.id;
  const invite = Array.isArray(data.class_invites) ? data.class_invites[0] : data.class_invites;
  return {
    id: data.id,
    name: data.name,
    kind: data.kind,
    call_url: data.call_url,
    isTeacher,
    teacherName: data.teacher?.full_name ?? "",
    students: isTeacher
      ? data.class_members
          .map((m) => ({ id: m.student_id, fullName: m.student?.full_name ?? "", joinedAt: m.joined_at }))
          .sort((a, b) => a.fullName.localeCompare(b.fullName))
      : [],
    invite: isTeacher && invite ? { token: invite.token, enabled: invite.enabled } : null,
  };
}
