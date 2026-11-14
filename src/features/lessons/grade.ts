import "server-only";
import { z } from "zod";
import type { CheckResult } from "@/features/exercises/checking";
import { getDefinition } from "@/features/exercises/definitions";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export type CheckResponse = { ok: true; result: CheckResult } | { ok: false; error: "forbidden" | "invalid" | "generic" };

/**
 * Checks an answer on the server and returns only right/wrong per part (plus a
 * right answer the rules allow to reveal, e.g. after 3 wrong tries).
 * One database request: the exercise together with its answer key.
 *
 * Who may check: anyone who can see the exercise (RLS decides) — the course
 * owner, a teacher viewing a library course, or a student of a class where the
 * lesson was opened. Only the owner can read the key directly; for everyone else
 * the server reads it with the secret key AFTER RLS has confirmed access.
 */
export async function gradeExercise(exerciseId: unknown, answer: unknown): Promise<CheckResponse> {
  const id = z.uuid().safeParse(exerciseId);
  if (!id.success) return { ok: false, error: "invalid" };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("exercises")
    .select("type, content, exercise_keys(answer_key)")
    .eq("id", id.data)
    .maybeSingle();
  if (error) return { ok: false, error: "generic" };
  // Not visible to this user (or not signed in) → not allowed.
  if (!data) return { ok: false, error: "forbidden" };

  const graded = await gradeLoaded(
    { id: id.data, type: data.type, content: data.content, key: data.exercise_keys?.answer_key },
    answer,
    undefined,
  );
  return graded.ok ? { ok: true, result: graded.result } : graded;
}

export type LoadedExercise = { id: string; type: string; content: unknown; key?: unknown };
export type GradeResult =
  | { ok: true; result: CheckResult; answer: unknown }
  | { ok: false; error: "invalid" | "generic" };

/**
 * Checks an answer for an exercise the caller has ALREADY confirmed the user
 * may see. `key` is the answer key if the user could read it; otherwise it is
 * read with server-only rights. `saved` is the saved answer in a class lesson
 * (null if none yet); undefined outside a class (teacher's preview).
 * Returns the verdict and the answer as it should be kept after the check.
 */
export async function gradeLoaded(exercise: LoadedExercise, answer: unknown, saved: unknown): Promise<GradeResult> {
  const def = getDefinition(exercise.type);
  if (!def?.grading || !def.keySchema) return { ok: false, error: "invalid" };
  const grading = def.grading;
  const parsedAnswer = grading.answerSchema.safeParse(answer);
  if (!parsedAnswer.success) return { ok: false, error: "invalid" };
  const content = def.contentSchema.safeParse(exercise.content);
  const rawKey = exercise.key !== undefined && exercise.key !== null ? exercise.key : await readKey(exercise.id);
  if (rawKey === undefined) return { ok: false, error: "generic" };
  const key = def.keySchema.safeParse(rawKey);
  if (!content.success || !key.success) return { ok: false, error: "generic" };

  let given = parsedAnswer.data;
  if (grading.prepare && saved !== undefined) {
    const previous = saved === null ? null : grading.answerSchema.safeParse(saved);
    given = grading.prepare(given, previous?.success ? previous.data : null);
  }
  const result = grading.check(content.data, key.data, given);
  return { ok: true, result, answer: grading.afterCheck ? grading.afterCheck(given, result) : given };
}

/** The answer key, read with server-only rights. Call only after an access check. */
async function readKey(exerciseId: string) {
  const { data } = await createAdminClient()
    .from("exercise_keys")
    .select("answer_key")
    .eq("exercise_id", exerciseId)
    .maybeSingle();
  return data?.answer_key;
}

/**
 * Right answers of exercises the teacher revealed, as answers ready to show.
 * Call only after checking that the user may see this lesson in the class.
 */
export type Solution = { answer: unknown; result: CheckResult };

export async function revealedSolutions(lessonId: string, exerciseIds: string[]): Promise<Record<string, Solution>> {
  if (exerciseIds.length === 0) return {};
  const { data } = await createAdminClient()
    .from("exercises")
    .select("id, type, content, exercise_keys(answer_key)")
    .eq("lesson_id", lessonId)
    .in("id", exerciseIds);
  const out: Record<string, Solution> = {};
  for (const e of data ?? []) {
    const def = getDefinition(e.type);
    if (!def?.grading || !def.keySchema || !e.exercise_keys) continue;
    const content = def.contentSchema.safeParse(e.content);
    const key = def.keySchema.safeParse(e.exercise_keys.answer_key);
    if (!content.success || !key.success) continue;
    const answer = def.grading.solution(content.data, key.data);
    out[e.id] = { answer, result: def.grading.check(content.data, key.data, answer) };
  }
  return out;
}
