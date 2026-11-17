import "server-only";
import type { ProfileWithRole } from "@/lib/auth";
import type { Tables } from "@/lib/supabase/database.types";
import { createClient } from "@/lib/supabase/server";

export type ClassRow = Pick<Tables<"classes">, "id" | "name" | "kind" | "call_url">;
export type ClassListItem = ClassRow & {
  studentCount: number;
  teacherName: string | null;
  /** the lesson going on now: the class card opens it directly */
  liveLessonId: string | null;
  /** the teacher's card opens this lesson: the one going on, else the last opened */
  currentLessonId: string | null;
};

const liveLesson = (lessons: { lesson_id: string; status: string }[]) =>
  lessons.find((l) => l.status === "live")?.lesson_id ?? null;

/** The lesson going on, else the one opened last. */
export const currentLesson = (lessons: { lesson_id: string; status: string; opened_at: string }[]) =>
  liveLesson(lessons) ?? [...lessons].sort((a, b) => b.opened_at.localeCompare(a.opened_at))[0]?.lesson_id ?? null;

/** Classes on the "Classes" page: a teacher's own, or the ones a student is in. */
export async function listClasses(profile: ProfileWithRole): Promise<ClassListItem[]> {
  const supabase = await createClient();
  if (profile.role === "teacher") {
    const { data } = await supabase
      .from("classes")
      .select("id, name, kind, call_url, class_members(count), class_lessons(lesson_id, status, opened_at)")
      .eq("teacher_id", profile.id)
      .order("created_at", { ascending: false });
    return (data ?? []).map(({ class_members, class_lessons, ...c }) => ({
      ...c,
      studentCount: class_members[0]?.count ?? 0,
      teacherName: null,
      liveLessonId: liveLesson(class_lessons),
      currentLessonId: currentLesson(class_lessons),
    }));
  }
  const { data } = await supabase
    .from("class_members")
    .select(
      "joined_at, class:classes(id, name, kind, call_url, teacher:profiles!classes_teacher_id_fkey(full_name), class_lessons(lesson_id, status))",
    )
    .eq("student_id", profile.id)
    .order("joined_at", { ascending: false });
  return (data ?? []).flatMap(({ class: c }) =>
    c
      ? [
          {
            id: c.id,
            name: c.name,
            kind: c.kind,
            call_url: c.call_url,
            studentCount: 0,
            teacherName: c.teacher?.full_name ?? null,
            liveLessonId: liveLesson(c.class_lessons),
            currentLessonId: liveLesson(c.class_lessons),
          },
        ]
      : [],
  );
}

export type ClassStudent = { id: string; fullName: string; joinedAt: string };
export type ClassInvite = { token: string; enabled: boolean };

export type ClassPageData = ClassRow & {
  isTeacher: boolean;
  teacherId: string;
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
    teacherId: data.teacher_id,
    teacherName: data.teacher?.full_name ?? "",
    students: isTeacher
      ? data.class_members
          .map((m) => ({ id: m.student_id, fullName: m.student?.full_name ?? "", joinedAt: m.joined_at }))
          .sort((a, b) => a.fullName.localeCompare(b.fullName))
      : [],
    invite: isTeacher && invite ? { token: invite.token, enabled: invite.enabled } : null,
  };
}

/** Student: their classes with the lesson going on now, for following lessons live. */
export async function listStudentLiveClasses(studentId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("class_members")
    .select("class:classes(id, name, class_lessons(lesson_id, status, opened_at))")
    .eq("student_id", studentId);
  return (data ?? []).flatMap(({ class: c }) => {
    if (!c) return [];
    const live = c.class_lessons.find((l) => l.status === "live");
    return [{ id: c.id, name: c.name, live: live ? { lessonId: live.lesson_id, openedAt: live.opened_at } : null }];
  });
}
