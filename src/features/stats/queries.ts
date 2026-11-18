import "server-only";
import { createClient } from "@/lib/supabase/server";
import { classStats, type ClassStats } from "./stats";

const score = (result: unknown): number | null => {
  const s = (result as { score?: unknown } | null)?.score;
  return typeof s === "number" ? s : null;
};

/** A student's lessons and homework in one class (RLS: the class teacher). */
export async function studentClassStats(classId: string, studentId: string): Promise<ClassStats> {
  const supabase = await createClient();
  const [{ data: lessons }, { data: answers }, { data: homeworks }] = await Promise.all([
    supabase.from("class_lessons").select("lesson_id, opened_at, finished_at, lesson:lessons(title)").eq("class_id", classId),
    supabase.from("class_answers").select("lesson_id, result").eq("class_id", classId).eq("student_id", studentId),
    supabase
      .from("homeworks")
      .select(
        "id, created_at, due_at, lesson:lessons(title), homework_exercises(exercise_id), homework_students!inner(student_id, submitted_at), homework_answers(student_id, result, first_result)",
      )
      .eq("class_id", classId)
      .eq("homework_students.student_id", studentId),
  ]);
  return classStats(
    (lessons ?? []).map((l) => ({ lessonId: l.lesson_id, title: l.lesson?.title ?? "", openedAt: l.opened_at, finishedAt: l.finished_at })),
    (answers ?? []).map((a) => ({ lessonId: a.lesson_id, score: score(a.result) })),
    (homeworks ?? []).map((h) => ({
      id: h.id,
      lessonTitle: h.lesson?.title ?? "",
      createdAt: h.created_at,
      dueAt: h.due_at,
      submittedAt: h.homework_students[0]?.submitted_at ?? null,
      total: h.homework_exercises.length,
      answers: h.homework_answers
        .filter((a) => a.student_id === studentId)
        .map((a) => ({ first: score(a.first_result ?? a.result), final: score(a.result) })),
    })),
  );
}
