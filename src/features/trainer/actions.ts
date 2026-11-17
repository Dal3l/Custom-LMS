"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import type { Json } from "@/lib/supabase/database.types";
import { reviewCard } from "./fsrs";
import { gradeFor, LEARNED, nextDue, nextStage, type Grade } from "./ladder";

type Result<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const reviewInput = z.object({
  wordId: z.uuid(),
  mode: z.enum(["card", "choice", "write", "listen"]),
  outcome: z.enum(["right", "almost", "wrong"]),
  /** cards: the student's own grade (1 don't remember … 4 easy) */
  cardGrade: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
});

/**
 * Saves one answer in the trainer: moves the word up or down the ladder,
 * updates its FSRS memory state and when it comes back. Only for the
 * student's own words (RLS).
 */
export async function recordReview(input: z.input<typeof reviewInput>): Promise<Result<{ stage: number; due: string }>> {
  const parsed = reviewInput.safeParse(input);
  const profile = await getProfile();
  if (!parsed.success || profile?.role !== "student") return { ok: false, error: "invalid" };
  const { wordId, mode, outcome, cardGrade } = parsed.data;
  const supabase = await createClient();
  const { data: word } = await supabase
    .from("vocabulary")
    .select("id, stage, fsrs, reviews, learned_at")
    .eq("id", wordId)
    .eq("student_id", profile.id)
    .maybeSingle();
  if (!word) return { ok: false, error: "forbidden" };

  const now = new Date();
  const grade: Grade = gradeFor(outcome, mode === "card" ? cardGrade ?? (outcome === "wrong" ? 1 : 3) : undefined);
  const card = await reviewCard(word.fsrs, grade, now);
  const stage = nextStage(word.stage, grade);
  const due = nextDue(stage, grade, card.dueAt, now, word.stage);
  const learnedAt = stage >= LEARNED ? (word.learned_at ?? now.toISOString()) : null;

  const { error } = await supabase
    .from("vocabulary")
    .update({
      stage,
      fsrs: JSON.parse(JSON.stringify(card)) as Json,
      due: due.toISOString(),
      learned_at: learnedAt,
      reviews: word.reviews + 1,
    })
    .eq("id", wordId);
  if (error) return { ok: false, error: "generic" };
  await supabase.from("vocabulary_reviews").insert({
    word_id: wordId,
    mode,
    correct: grade > 1,
    grade,
    stage_before: word.stage,
    stage_after: stage,
  });
  return { ok: true, data: { stage, due: due.toISOString() } };
}

/** "Learn again": the word starts the ladder from the beginning, right now. */
export async function relearnWord(wordId: string): Promise<Result> {
  if (!z.uuid().safeParse(wordId).success) return { ok: false, error: "invalid" };
  const profile = await getProfile();
  if (profile?.role !== "student") return { ok: false, error: "forbidden" };
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("vocabulary")
    .update({ stage: 0, fsrs: null, due: new Date().toISOString(), learned_at: null })
    .eq("id", wordId)
    .eq("student_id", profile.id)
    .select("id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  revalidatePath("/[locale]/vocabulary", "page");
  revalidatePath("/[locale]/trainer", "page");
  return { ok: true, data: undefined };
}
