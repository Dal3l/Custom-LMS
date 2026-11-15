"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile, getUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

type Result<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const id = z.uuid();

/**
 * The teacher sends homework from a class lesson: the chosen exercises of the
 * lesson's homework part, to every student of the class (or the chosen ones),
 * with an optional due date. RLS checks the class, the lesson and the exercises.
 */
export async function sendHomework(input: {
  classId: string;
  lessonId: string;
  exerciseIds: string[];
  studentIds: string[];
  dueAt: string | null;
}): Promise<Result<string>> {
  const parsed = z
    .object({
      classId: id,
      lessonId: id,
      exerciseIds: z.array(id).min(1).max(200),
      studentIds: z.array(id).min(1).max(200),
      dueAt: z.iso.datetime({ offset: true }).nullable(),
    })
    .safeParse(input);
  const profile = await getProfile();
  if (profile?.role !== "teacher") return { ok: false, error: "forbidden" };
  if (!parsed.success) return { ok: false, error: "invalid" };
  const { classId, lessonId, exerciseIds, studentIds, dueAt } = parsed.data;
  const supabase = await createClient();

  const { data: hw, error } = await supabase
    .from("homeworks")
    .insert({ class_id: classId, lesson_id: lessonId, due_at: dueAt })
    .select("id")
    .single();
  if (error || !hw) return { ok: false, error: error?.code === "42501" ? "forbidden" : "generic" };

  const [ex, st] = await Promise.all([
    supabase.from("homework_exercises").insert(exerciseIds.map((exerciseId, position) => ({ homework_id: hw.id, exercise_id: exerciseId, position }))),
    supabase.from("homework_students").insert(studentIds.map((studentId) => ({ homework_id: hw.id, student_id: studentId }))),
  ]);
  if (ex.error || st.error) {
    // All or nothing: a half-sent homework is removed.
    await supabase.from("homeworks").delete().eq("id", hw.id);
    return { ok: false, error: ex.error?.code === "42501" || st.error?.code === "42501" ? "forbidden" : "generic" };
  }
  revalidatePath(`/[locale]/classes/${classId}`, "layout");
  return { ok: true, data: hw.id };
}

/** The teacher takes a sent homework back (with the students' answers). */
export async function deleteHomework(homeworkId: string): Promise<Result> {
  const profile = await getProfile();
  if (profile?.role !== "teacher" || !id.safeParse(homeworkId).success) return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  const { data, error } = await supabase.from("homeworks").delete().eq("id", homeworkId).select("class_id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  revalidatePath(`/[locale]/classes/${data[0]!.class_id}`, "layout");
  return { ok: true, data: undefined };
}

/** The student hands the homework in; after that the answers can't change. */
export async function submitHomework(homeworkId: string): Promise<Result<string>> {
  const user = await getUser();
  if (!user || !id.safeParse(homeworkId).success) return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  // RLS: only the student's own row of a homework they still have.
  const { data: mine } = await supabase
    .from("homework_students")
    .select("submitted_at")
    .eq("homework_id", homeworkId)
    .eq("student_id", user.id)
    .maybeSingle();
  if (!mine) return { ok: false, error: "forbidden" };
  if (mine.submitted_at) return { ok: true, data: mine.submitted_at };
  const now = new Date().toISOString();
  // Students can't write this table themselves: the server does, after the check above.
  const { error } = await createAdminClient()
    .from("homework_students")
    .update({ submitted_at: now })
    .eq("homework_id", homeworkId)
    .eq("student_id", user.id)
    .is("submitted_at", null);
  if (error) return { ok: false, error: "generic" };
  revalidatePath("/[locale]/homework", "layout");
  revalidatePath("/[locale]/classes", "layout");
  return { ok: true, data: now };
}
