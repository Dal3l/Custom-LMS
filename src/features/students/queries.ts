import "server-only";
import { createClient } from "@/lib/supabase/server";

export type MyStudent = {
  id: string;
  fullName: string;
  /** on the teacher's list since */
  since: string;
  classes: { id: string; name: string }[];
};
export type MyClass = { id: string; name: string; kind: "individual" | "group"; studentIds: string[] };

/** The teacher's students (all classes, and those not in a class yet) and the teacher's classes. */
export async function listMyStudents(teacherId: string): Promise<{ students: MyStudent[]; classes: MyClass[] }> {
  const supabase = await createClient();
  const [{ data: list }, { data: classes }] = await Promise.all([
    supabase
      .from("teacher_students")
      .select("student_id, created_at, student:profiles!teacher_students_student_id_fkey(full_name)")
      .eq("teacher_id", teacherId),
    supabase.from("classes").select("id, name, kind, class_members(student_id)").eq("teacher_id", teacherId).order("name"),
  ]);
  const myClasses: MyClass[] = (classes ?? []).map((c) => ({
    id: c.id,
    name: c.name,
    kind: c.kind,
    studentIds: c.class_members.map((m) => m.student_id),
  }));
  const students = (list ?? [])
    .map((row) => ({
      id: row.student_id,
      fullName: row.student?.full_name ?? "",
      since: row.created_at,
      classes: myClasses.filter((c) => c.studentIds.includes(row.student_id)).map((c) => ({ id: c.id, name: c.name })),
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
  return { students, classes: myClasses };
}
