"use server";

import { z } from "zod";
import { exerciseMeta } from "@/features/exercises/catalog";
import { getDefinition } from "@/features/exercises/definitions";
import { getProfile } from "@/lib/auth";
import type { Json, TablesInsert } from "@/lib/supabase/database.types";
import { createClient } from "@/lib/supabase/server";

// The builder keeps its own state in the browser, so these actions do not
// re-render the page. Every action re-checks the user; RLS is the final guard.

export type BuilderResult<T = undefined> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" | "invalid" };

const id = z.uuid();
const ids = z.array(z.uuid()).max(500);
const sectionTitle = z.string().trim().min(1).max(100);
const instruction = z.string().max(500);

const ok = <T,>(data: T): BuilderResult<T> => ({ ok: true, data });
const fail = (error: "generic" | "forbidden" | "invalid" = "generic"): BuilderResult<never> => ({ ok: false, error });

async function teacher() {
  const profile = await getProfile();
  return profile?.role === "teacher" ? createClient() : null;
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export async function createSection(lessonId: string, title: string): Promise<BuilderResult<{ id: string; title: string }>> {
  const supabase = await teacher();
  const t = sectionTitle.safeParse(title);
  if (!supabase || !id.safeParse(lessonId).success) return fail("forbidden");
  if (!t.success) return fail("invalid");
  const { data, error } = await supabase
    .from("sections")
    // `position` and `course_id` are set by a database trigger.
    .insert({ lesson_id: lessonId, title: t.data } as TablesInsert<"sections">)
    .select("id, title")
    .single();
  if (error || !data) return fail();
  return ok(data);
}

export async function renameSection(sectionId: string, title: string): Promise<BuilderResult> {
  const supabase = await teacher();
  const t = sectionTitle.safeParse(title);
  if (!supabase || !id.safeParse(sectionId).success) return fail("forbidden");
  if (!t.success) return fail("invalid");
  const { data, error } = await supabase.from("sections").update({ title: t.data }).eq("id", sectionId).select("id");
  if (error) return fail();
  return data?.length ? ok(undefined) : fail("forbidden");
}

export async function deleteSection(sectionId: string): Promise<BuilderResult> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(sectionId).success) return fail("forbidden");
  const { data, error } = await supabase.from("sections").delete().eq("id", sectionId).select("id");
  if (error) return fail();
  return data?.length ? ok(undefined) : fail("forbidden");
}

export async function reorderSections(lessonId: string, sectionIds: string[]): Promise<BuilderResult> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(lessonId).success || !ids.safeParse(sectionIds).success) return fail("forbidden");
  const { error } = await supabase.rpc("reorder_sections", { p_lesson: lessonId, p_ids: sectionIds });
  return error ? fail() : ok(undefined);
}

// ---------------------------------------------------------------------------
// Exercises
// ---------------------------------------------------------------------------

export type NewExercise = { id: string; type: string; title: string; content: Json; key: Json | null };

export async function createExercise(sectionId: string, type: string): Promise<BuilderResult<NewExercise>> {
  const supabase = await teacher();
  const def = getDefinition(type);
  if (!supabase || !id.safeParse(sectionId).success) return fail("forbidden");
  if (!def || !exerciseMeta(type)?.available) return fail("invalid");

  const { content, key } = def.create();
  const { data, error } = await supabase
    .from("exercises")
    .insert({ section_id: sectionId, type, content: content as Json } as TablesInsert<"exercises">)
    .select("id, type, title, content")
    .single();
  if (error || !data) return fail();

  if (def.keySchema) {
    const { error: keyError } = await supabase
      .from("exercise_keys")
      .insert({ exercise_id: data.id, answer_key: key as Json } as TablesInsert<"exercise_keys">);
    if (keyError) return fail();
  }
  return ok({ ...data, key: (key as Json) ?? null });
}

/** Autosave: validates the content against the type's schema before writing. */
export async function saveExercise(
  exerciseId: string,
  type: string,
  value: { title: string; content: unknown; key: unknown },
): Promise<BuilderResult> {
  const supabase = await teacher();
  const def = getDefinition(type);
  if (!supabase || !id.safeParse(exerciseId).success) return fail("forbidden");
  if (!def) return fail("invalid");

  const title = instruction.safeParse(value.title);
  const content = def.contentSchema.safeParse(value.content);
  const key = def.keySchema ? def.keySchema.safeParse(value.key) : null;
  if (!title.success || !content.success || (key && !key.success)) return fail("invalid");

  // Matching on type too: a client cannot store one type's data under another type.
  const { data, error } = await supabase
    .from("exercises")
    .update({ title: title.data, content: content.data as Json })
    .eq("id", exerciseId)
    .eq("type", type)
    .select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");

  if (key?.success) {
    // Update in place (users may change only answer_key, so no upsert); create if missing.
    const { data: updated, error: keyError } = await supabase
      .from("exercise_keys")
      .update({ answer_key: key.data as Json })
      .eq("exercise_id", exerciseId)
      .select("exercise_id");
    if (keyError) return fail();
    if (!updated?.length) {
      const { error: insertError } = await supabase
        .from("exercise_keys")
        .insert({ exercise_id: exerciseId, answer_key: key.data as Json } as TablesInsert<"exercise_keys">);
      if (insertError) return fail();
    }
  }
  return ok(undefined);
}

export async function duplicateExercise(exerciseId: string): Promise<BuilderResult<string>> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(exerciseId).success) return fail("forbidden");
  const { data, error } = await supabase.rpc("duplicate_exercise", { p_id: exerciseId });
  return error || !data ? fail() : ok(data);
}

export async function deleteExercise(exerciseId: string): Promise<BuilderResult> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(exerciseId).success) return fail("forbidden");
  const { data, error } = await supabase.from("exercises").delete().eq("id", exerciseId).select("id");
  if (error) return fail();
  return data?.length ? ok(undefined) : fail("forbidden");
}

export async function moveExercise(exerciseId: string, sectionId: string): Promise<BuilderResult> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(exerciseId).success || !id.safeParse(sectionId).success) return fail("forbidden");
  const { error } = await supabase.rpc("move_exercise", { p_id: exerciseId, p_section: sectionId });
  return error ? fail() : ok(undefined);
}

export async function reorderExercises(sectionId: string, exerciseIds: string[]): Promise<BuilderResult> {
  const supabase = await teacher();
  if (!supabase || !id.safeParse(sectionId).success || !ids.safeParse(exerciseIds).success) return fail("forbidden");
  const { error } = await supabase.rpc("reorder_exercises", { p_section: sectionId, p_ids: exerciseIds });
  return error ? fail() : ok(undefined);
}
