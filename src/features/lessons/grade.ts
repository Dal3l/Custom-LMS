import "server-only";
import { z } from "zod";
import type { CheckResult } from "@/features/exercises/checking";
import { getDefinition } from "@/features/exercises/definitions";
import { createClient } from "@/lib/supabase/server";

export type CheckResponse = { ok: true; result: CheckResult } | { ok: false; error: "forbidden" | "invalid" | "generic" };

/**
 * Checks an answer on the server and returns only right/wrong per part (plus a
 * right answer the rules allow to reveal, e.g. after 3 wrong tries).
 * One database request: the exercise together with its answer key.
 *
 * Step 1.4: only the course owner can read the key (RLS), so only the teacher's
 * "preview as student" works. Stage 2 lets class students check answers too,
 * reading the key with server-only rights after confirming their access.
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
  // No row, or no readable key (not signed in / not the owner) → not allowed.
  if (!data?.exercise_keys) return { ok: false, error: "forbidden" };

  const def = getDefinition(data.type);
  if (!def?.grading || !def.keySchema) return { ok: false, error: "invalid" };
  const parsedAnswer = def.grading.answerSchema.safeParse(answer);
  if (!parsedAnswer.success) return { ok: false, error: "invalid" };
  const content = def.contentSchema.safeParse(data.content);
  const key = def.keySchema.safeParse(data.exercise_keys.answer_key);
  if (!content.success || !key.success) return { ok: false, error: "generic" };

  return { ok: true, result: def.grading.check(content.data, key.data, parsedAnswer.data) };
}
