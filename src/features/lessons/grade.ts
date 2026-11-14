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

  const def = getDefinition(data.type);
  if (!def?.grading || !def.keySchema) return { ok: false, error: "invalid" };
  const parsedAnswer = def.grading.answerSchema.safeParse(answer);
  if (!parsedAnswer.success) return { ok: false, error: "invalid" };
  const content = def.contentSchema.safeParse(data.content);
  const rawKey = data.exercise_keys ? data.exercise_keys.answer_key : await readKey(id.data);
  if (rawKey === undefined) return { ok: false, error: "generic" };
  const key = def.keySchema.safeParse(rawKey);
  if (!content.success || !key.success) return { ok: false, error: "generic" };

  return { ok: true, result: def.grading.check(content.data, key.data, parsedAnswer.data) };
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
