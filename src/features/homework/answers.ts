import "server-only";
import { z } from "zod";
import type { CheckResult } from "@/features/exercises/checking";
import { getDefinition } from "@/features/exercises/definitions";
import type { SaveAnswerResponse } from "@/features/lessons/answers";
import { gradeLoaded } from "@/features/lessons/grade";
import { getUser } from "@/lib/auth";
import type { Json } from "@/lib/supabase/database.types";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

// A student's answer in a homework (and its check). Like class lesson answers:
// access is confirmed with the student's own rights, then the row is written
// with server rights. Also counts the tries and keeps the first one for the
// teacher. Nothing changes after the homework was handed in.

const schema = z.object({
  homeworkId: z.uuid(),
  exerciseId: z.uuid(),
  answer: z.unknown(),
  check: z.boolean().default(false),
  checkedAnswer: z.unknown().optional(),
});

const MAX_BYTES = 60_000;
const tooBig = (v: unknown) => v !== undefined && JSON.stringify(v).length > MAX_BYTES;

export async function saveHomeworkAnswer(body: unknown): Promise<SaveAnswerResponse | { ok: false; error: "submitted" }> {
  const parsed = schema.safeParse(body);
  if (!parsed.success) return { ok: false, error: "invalid" };
  const { homeworkId, exerciseId, answer, check, checkedAnswer } = parsed.data;
  if (answer === undefined || tooBig(answer) || tooBig(checkedAnswer)) return { ok: false, error: "invalid" };

  const user = await getUser();
  if (!user) return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  const admin = createAdminClient();

  const [mine, inHomework, exercise, saved] = await Promise.all([
    supabase
      .from("homework_students")
      .select("submitted_at")
      .eq("homework_id", homeworkId)
      .eq("student_id", user.id)
      .maybeSingle(),
    supabase.from("homework_exercises").select("exercise_id").eq("homework_id", homeworkId).eq("exercise_id", exerciseId).maybeSingle(),
    supabase.from("exercises").select("id, type, content").eq("id", exerciseId).maybeSingle(),
    admin
      .from("homework_answers")
      .select("answer, attempts")
      .eq("homework_id", homeworkId)
      .eq("exercise_id", exerciseId)
      .eq("student_id", user.id)
      .maybeSingle(),
  ]);
  if (mine.error || inHomework.error || exercise.error || saved.error) return { ok: false, error: "generic" };
  if (!mine.data || !inHomework.data || !exercise.data) return { ok: false, error: "forbidden" };
  if (mine.data.submitted_at) return { ok: false, error: "submitted" };

  const def = getDefinition(exercise.data.type);
  const shape = def?.manual?.answerSchema ?? def?.grading?.answerSchema;
  if (!shape || !shape.safeParse(answer).success) return { ok: false, error: "invalid" };
  if (check && !def?.grading) return { ok: false, error: "invalid" };

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

  const attempts = saved.data?.attempts ?? 0;
  const row = {
    homework_id: homeworkId,
    exercise_id: exerciseId,
    student_id: user.id,
    answer: kept as Json,
    ...(check
      ? {
          checked_answer: kept as Json,
          result: result as unknown as Json,
          attempts: attempts + 1,
          // The first try is kept for the teacher.
          ...(attempts === 0 ? { first_answer: kept as Json, first_result: result as unknown as Json } : {}),
        }
      : checkedAnswer !== undefined
        ? { checked_answer: checkedAnswer as Json }
        : {}),
  };
  const { error } = await admin.from("homework_answers").upsert(row);
  if (error) return { ok: false, error: "generic" };
  return { ok: true, result, answer: kept };
}
