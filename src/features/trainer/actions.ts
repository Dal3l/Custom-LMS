"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import type { Json } from "@/lib/supabase/database.types";
import { reviewCard } from "./fsrs";
import { LEARNED } from "./ladder";
import { finalGrade } from "./session";

type Result<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const finishInput = z.object({
  kind: z.enum(["learn", "review"]),
  words: z.array(z.object({ wordId: z.uuid(), mistakes: z.number().int().min(0).max(100) })).min(1).max(200),
  answers: z
    .array(z.object({ wordId: z.uuid(), step: z.enum(["card", "choice", "write", "listen"]), correct: z.boolean() }))
    .max(2000),
});

/**
 * Saves a finished session. Learning: the words become learned. Review: they
 * stay learned. Either way FSRS updates each word's memory (fewer mistakes →
 * the next "time to review" is further away). Only the student's own words (RLS).
 */
export async function finishSession(input: z.input<typeof finishInput>): Promise<Result<{ learned: number }>> {
  const parsed = finishInput.safeParse(input);
  const profile = await getProfile();
  if (!parsed.success || profile?.role !== "student") return { ok: false, error: "invalid" };
  const { kind, words, answers } = parsed.data;
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("vocabulary")
    .select("id, stage, fsrs, reviews, learned_at")
    .eq("student_id", profile.id)
    .in(
      "id",
      words.map((w) => w.wordId),
    );
  if (!rows?.length) return { ok: false, error: "forbidden" };

  const now = new Date();
  let learned = 0;
  const results = await Promise.all(
    rows.map(async (row) => {
      const mistakes = words.find((w) => w.wordId === row.id)?.mistakes ?? 0;
      const grade = finalGrade(mistakes, kind);
      const card = await reviewCard(row.fsrs, grade, now);
      if (row.stage < LEARNED) learned++;
      return supabase
        .from("vocabulary")
        .update({
          stage: LEARNED,
          fsrs: JSON.parse(JSON.stringify(card)) as Json,
          due: card.dueAt.toISOString(),
          learned_at: row.learned_at ?? now.toISOString(),
          reviews: row.reviews + 1,
        })
        .eq("id", row.id);
    }),
  );
  if (results.some((r) => r.error)) return { ok: false, error: "generic" };

  const mine = new Map(rows.map((r) => [r.id, r.stage]));
  const log = answers
    .filter((a) => mine.has(a.wordId))
    .map((a) => ({
      word_id: a.wordId,
      mode: a.step,
      correct: a.correct,
      grade: a.correct ? 3 : 1,
      stage_before: mine.get(a.wordId)!,
      stage_after: LEARNED,
    }));
  if (log.length) await supabase.from("vocabulary_reviews").insert(log);
  revalidatePath("/[locale]/vocabulary", "page");
  return { ok: true, data: { learned } };
}

/** "Learn again": the word goes back to the words to learn. */
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
  return { ok: true, data: undefined };
}
