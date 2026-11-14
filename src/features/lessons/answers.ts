import "server-only";
import { z } from "zod";
import type { CheckResult } from "@/features/exercises/checking";
import type { Json } from "@/lib/supabase/database.types";
import { getUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { gradeLoaded } from "./grade";

// Saving a student's answer in a class lesson (and checking it on request).
// Access is checked with the student's own rights first; only then the row is
// written with server rights, so a verdict can't be forged from the browser.

export const saveAnswerSchema = z.object({
  classId: z.uuid(),
  exerciseId: z.uuid(),
  answer: z.unknown(),
  /** true: check the answer now and keep the verdict */
  check: z.boolean().default(false),
  /** the answer the current verdict belongs to (after a check, the browser sends it back) */
  checkedAnswer: z.unknown().optional(),
});
export type SaveAnswerRequest = z.input<typeof saveAnswerSchema>;

export type SaveAnswerResponse =
  | { ok: true; result: CheckResult | null; answer: unknown }
  | { ok: false; error: "forbidden" | "invalid" | "generic" };

const MAX_BYTES = 60_000;

export async function saveClassAnswer(body: unknown): Promise<SaveAnswerResponse> {
  const parsed = saveAnswerSchema.safeParse(body);
  if (!parsed.success) return { ok: false, error: "invalid" };
  const { classId, exerciseId, answer, check, checkedAnswer } = parsed.data;
  if (answer === undefined || JSON.stringify(answer).length > MAX_BYTES) return { ok: false, error: "invalid" };
  if (checkedAnswer !== undefined && JSON.stringify(checkedAnswer).length > MAX_BYTES) {
    return { ok: false, error: "invalid" };
  }

  const user = await getUser();
  if (!user) return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  const admin = createAdminClient();

  // One round trip: the exercise (RLS: visible to this user), membership, the
  // class's opened lessons and the saved answer.
  const [exercise, member, opened, saved] = await Promise.all([
    supabase.from("exercises").select("id, lesson_id, type, content").eq("id", exerciseId).maybeSingle(),
    supabase
      .from("class_members")
      .select("student_id")
      .eq("class_id", classId)
      .eq("student_id", user.id)
      .maybeSingle(),
    supabase.from("class_lessons").select("lesson_id").eq("class_id", classId),
    admin
      .from("class_answers")
      .select("answer")
      .eq("class_id", classId)
      .eq("exercise_id", exerciseId)
      .eq("student_id", user.id)
      .maybeSingle(),
  ]);
  if (exercise.error || member.error || opened.error || saved.error) return { ok: false, error: "generic" };
  const lessonId = exercise.data?.lesson_id;
  if (!exercise.data || !member.data || !lessonId || !opened.data.some((l) => l.lesson_id === lessonId)) {
    return { ok: false, error: "forbidden" };
  }

  let result: CheckResult | null = null;
  let kept: unknown = answer;
  if (check) {
    const graded = await gradeLoaded(
      { id: exercise.data.id, type: exercise.data.type, content: exercise.data.content },
      answer,
      saved.data?.answer ?? null,
    );
    if (!graded.ok) return graded;
    result = graded.result;
    kept = graded.answer;
  }

  const row = {
    class_id: classId,
    exercise_id: exerciseId,
    student_id: user.id,
    lesson_id: lessonId,
    answer: kept as Json,
    ...(check
      ? { checked_answer: kept as Json, result: result as unknown as Json }
      : checkedAnswer !== undefined
        ? { checked_answer: checkedAnswer as Json }
        : {}),
  };
  const { error } = await admin.from("class_answers").upsert(row);
  if (error) return { ok: false, error: "generic" };
  return { ok: true, result, answer: kept };
}

export type SavedAnswer = { answer: unknown; checkedAnswer: unknown; result: CheckResult | null };

/** The signed-in student's saved answers for one lesson in a class, by exercise. */
export async function getMyClassAnswers(classId: string, lessonId: string, userId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("class_answers")
    .select("exercise_id, answer, checked_answer, result")
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .eq("student_id", userId);
  const out: Record<string, SavedAnswer> = {};
  for (const row of data ?? []) {
    out[row.exercise_id] = {
      answer: row.answer,
      checkedAnswer: row.checked_answer ?? undefined,
      result: (row.result as unknown as CheckResult | null) ?? null,
    };
  }
  return out;
}
