"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { wordFields, wordPlace, type WordFields, type WordPlace } from "./schemas";

type Result<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const ids = z.array(z.uuid()).min(1).max(100);

/**
 * Adds a word. A student adds to their own dictionary; a teacher adds to the
 * chosen students' dictionaries (RLS: only their own students). A word already
 * in someone's dictionary is left as it is.
 * Returns how many dictionaries got it and how many already had it.
 */
export async function addWord(input: {
  fields: WordFields;
  place: WordPlace;
  studentIds?: string[];
}): Promise<Result<{ added: number; existing: number }>> {
  const profile = await getProfile();
  const fields = wordFields.safeParse(input.fields);
  const place = wordPlace.safeParse(input.place);
  if (!profile || !fields.success || !place.success) return { ok: false, error: "invalid" };
  let students: string[];
  if (profile.role === "teacher") {
    const parsed = ids.safeParse(input.studentIds);
    if (!parsed.success) return { ok: false, error: "invalid" };
    students = [...new Set(parsed.data)];
  } else {
    students = [profile.id];
  }
  const supabase = await createClient();
  const f = fields.data;
  const p = place.data;
  let added = 0;
  let existing = 0;
  // One by one: a word one student already has must not stop the others.
  for (const studentId of students) {
    const { error } = await supabase.from("vocabulary").insert({
      student_id: studentId,
      term: f.term,
      translation: f.translation,
      transcription: f.transcription,
      example: f.example,
      audio_url: f.audioUrl,
      language: p.language,
      course_id: p.courseId,
      lesson_id: p.lessonId,
      class_id: p.classId,
    });
    if (!error) added++;
    else if (error.code === "23505") existing++;
    else if (error.code === "42501") return { ok: false, error: "forbidden" };
    else return { ok: false, error: "generic" };
  }
  revalidatePath("/[locale]/vocabulary", "page");
  return { ok: true, data: { added, existing } };
}

export async function updateWord(id: string, input: WordFields): Promise<Result> {
  const fields = wordFields.safeParse(input);
  if (!z.uuid().safeParse(id).success || !fields.success) return { ok: false, error: "invalid" };
  const f = fields.data;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("vocabulary")
    .update({ term: f.term, translation: f.translation, transcription: f.transcription, example: f.example, audio_url: f.audioUrl })
    .eq("id", id)
    .select("id");
  if (error) return { ok: false, error: error.code === "23505" ? "invalid" : "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  revalidatePath("/[locale]/vocabulary", "page");
  return { ok: true, data: undefined };
}

export async function deleteWord(id: string): Promise<Result> {
  if (!z.uuid().safeParse(id).success) return { ok: false, error: "invalid" };
  const supabase = await createClient();
  const { data, error } = await supabase.from("vocabulary").delete().eq("id", id).select("id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  revalidatePath("/[locale]/vocabulary", "page");
  return { ok: true, data: undefined };
}
