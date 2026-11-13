"use server";

import { z } from "zod";
import type { CheckResult } from "@/features/exercises/checking";
import { getDefinition } from "@/features/exercises/definitions";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

export type CheckResponse = { ok: true; result: CheckResult } | { ok: false; error: "forbidden" | "invalid" | "generic" };

/**
 * Checks a student's answer on the server and returns only right/wrong per part.
 * The answer key is read here and never sent to the browser.
 *
 * Step 1.4: used by the teacher's "preview as student" (the owner can read keys).
 * Stage 2 will let students in a class check answers too, reading the key with
 * server-only rights after confirming the student's access to the lesson.
 */
export async function checkAnswer(exerciseId: string, answer: unknown): Promise<CheckResponse> {
  const profile = await getProfile();
  if (profile?.role !== "teacher" || !z.uuid().safeParse(exerciseId).success) {
    return { ok: false, error: "forbidden" };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("exercises")
    .select("type, content, exercise_keys(answer_key)")
    .eq("id", exerciseId)
    .maybeSingle();
  if (error) return { ok: false, error: "generic" };
  if (!data) return { ok: false, error: "forbidden" };

  const def = getDefinition(data.type);
  if (!def?.grading || !def.keySchema) return { ok: false, error: "invalid" };

  const parsedAnswer = def.grading.answerSchema.safeParse(answer);
  const content = def.contentSchema.safeParse(data.content);
  const key = def.keySchema.safeParse(data.exercise_keys?.answer_key ?? null);
  if (!parsedAnswer.success) return { ok: false, error: "invalid" };
  if (!content.success || !key.success) return { ok: false, error: "generic" };

  return { ok: true, result: def.grading.check(content.data, key.data, parsedAnswer.data) };
}
