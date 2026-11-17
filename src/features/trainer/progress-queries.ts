import "server-only";
import { createClient } from "@/lib/supabase/server";
import { progress, summarize, type Progress, type VocabularySummary } from "./progress";

/** Dictionary summaries of several students (RLS: the teacher's own students only). */
export async function vocabularySummaries(studentIds: string[]): Promise<Record<string, VocabularySummary>> {
  if (!studentIds.length) return {};
  const supabase = await createClient();
  const { data } = await supabase.from("vocabulary").select("student_id, stage, due").in("student_id", studentIds);
  const out: Record<string, VocabularySummary> = {};
  for (const id of studentIds) out[id] = summarize((data ?? []).filter((w) => w.student_id === id));
  return out;
}

/** One student's progress: words, activity, hard words (answers of the last 90 days). */
export async function studentProgress(studentId: string): Promise<Progress> {
  const supabase = await createClient();
  const since = new Date(Date.now() - 90 * 86_400_000).toISOString();
  const [{ data: words }, { data: answers }] = await Promise.all([
    supabase.from("vocabulary").select("id, term, translation, stage, due").eq("student_id", studentId),
    supabase
      .from("vocabulary_reviews")
      .select("word_id, correct, reviewed_at")
      .eq("student_id", studentId)
      .gte("reviewed_at", since)
      .order("reviewed_at", { ascending: false })
      .limit(5000),
  ]);
  return progress(
    words ?? [],
    (answers ?? []).map((a) => ({ wordId: a.word_id, correct: a.correct, reviewedAt: a.reviewed_at })),
  );
}
