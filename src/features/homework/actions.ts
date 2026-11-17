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

  // One homework per lesson in a class: more exercises / students go into it.
  const { data: existing } = await supabase
    .from("homeworks")
    .select("id, homework_exercises(exercise_id, position), homework_students(student_id)")
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .maybeSingle();
  if (existing) {
    const haveExercises = new Set(existing.homework_exercises.map((e) => e.exercise_id));
    const haveStudents = new Set(existing.homework_students.map((s) => s.student_id));
    const last = Math.max(-1, ...existing.homework_exercises.map((e) => e.position));
    const newExercises = exerciseIds.filter((e) => !haveExercises.has(e));
    const newStudents = studentIds.filter((st) => !haveStudents.has(st));
    // New exercises reopen the homework for those who handed it in and tell its
    // students (database trigger) — before the new students join, who get
    // "new homework" instead.
    const ex = newExercises.length
      ? await supabase.from("homework_exercises").insert(newExercises.map((exerciseId, i) => ({ homework_id: existing.id, exercise_id: exerciseId, position: last + 1 + i })))
      : { error: null };
    const [st, due] = await Promise.all([
      newStudents.length
        ? supabase.from("homework_students").insert(newStudents.map((studentId) => ({ homework_id: existing.id, student_id: studentId })))
        : Promise.resolve({ error: null }),
      dueAt ? supabase.from("homeworks").update({ due_at: dueAt }).eq("id", existing.id) : Promise.resolve({ error: null }),
    ]);
    const error = ex.error ?? st.error ?? due.error;
    if (error) return { ok: false, error: error.code === "42501" ? "forbidden" : "generic" };
    revalidatePath(`/[locale]/classes/${classId}`, "layout");
    return { ok: true, data: existing.id };
  }

  const { data: hw, error } = await supabase
    .from("homeworks")
    .insert({ class_id: classId, lesson_id: lessonId, due_at: dueAt })
    .select("id")
    .single();
  // Sent from two places at once: the other one created it — add to it.
  if (error?.code === "23505") return sendHomework(input);
  if (error || !hw) return { ok: false, error: error?.code === "42501" ? "forbidden" : "generic" };

  // Exercises first, then students: so the students get only "new homework".
  const ex = await supabase.from("homework_exercises").insert(exerciseIds.map((exerciseId, position) => ({ homework_id: hw.id, exercise_id: exerciseId, position })));
  const st = ex.error ? { error: null } : await supabase.from("homework_students").insert(studentIds.map((studentId) => ({ homework_id: hw.id, student_id: studentId })));
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

const reviewIds = z.object({ homeworkId: id, studentId: id });

/** The teacher's comment to one exercise of a student's homework ("" removes it). */
export async function saveHomeworkComment(input: {
  homeworkId: string;
  studentId: string;
  exerciseId: string;
  body: string;
}): Promise<Result> {
  const profile = await getProfile();
  const parsed = reviewIds
    .extend({ exerciseId: id, body: z.string().max(2000) })
    .safeParse(input);
  if (profile?.role !== "teacher" || !parsed.success) return { ok: false, error: "forbidden" };
  const { homeworkId, studentId, exerciseId } = parsed.data;
  const body = parsed.data.body.trim();
  const supabase = await createClient();
  const match = { homework_id: homeworkId, student_id: studentId, exercise_id: exerciseId };
  if (!body) {
    const { error } = await supabase.from("homework_comments").delete().match(match);
    return error ? { ok: false, error: "generic" } : { ok: true, data: undefined };
  }
  // RLS: only the teacher of the class, for an exercise and a student of this homework.
  const { data: updated, error } = await supabase.from("homework_comments").update({ body }).match(match).select("body");
  if (error) return { ok: false, error: "generic" };
  if (!updated.length) {
    const { error: insertError } = await supabase.from("homework_comments").insert({ ...match, body });
    if (insertError) return { ok: false, error: insertError.code === "42501" ? "forbidden" : "generic" };
  }
  return { ok: true, data: undefined };
}

/** "Checked" (or not yet): the student sees "Checked" instead of "Handed in". */
export async function setHomeworkReviewed(homeworkId: string, studentId: string, reviewed: boolean): Promise<Result> {
  const profile = await getProfile();
  const parsed = reviewIds.safeParse({ homeworkId, studentId });
  if (profile?.role !== "teacher" || !parsed.success) return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("homework_students")
    .update({ reviewed_at: reviewed ? new Date().toISOString() : null })
    .eq("homework_id", homeworkId)
    .eq("student_id", studentId)
    .select("homework_id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  revalidatePath("/[locale]/homework", "layout");
  return { ok: true, data: undefined };
}
