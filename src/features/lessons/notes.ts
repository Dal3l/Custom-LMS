import "server-only";
import { noteKeySchema } from "@/features/exercises/types/note/schema";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Json } from "@/lib/supabase/database.types";
import { applyNotes, notesToRead } from "./notes-view";
import type { StudentSection } from "./queries";

/**
 * A class lesson's notes for this person (see applyNotes). Texts are read
 * with server rights: call only after checking that the user may see this
 * lesson in the class.
 */
export async function withNotes(
  lessonId: string,
  sections: StudentSection[],
  options: { teacher: boolean; toggled: string[] },
): Promise<StudentSection[]> {
  const ids = notesToRead(sections, options);
  const texts: Record<string, Json> = {};
  if (ids.length) {
    const { data } = await createAdminClient()
      .from("exercises")
      .select("id, exercise_keys(answer_key)")
      .eq("lesson_id", lessonId)
      .eq("type", "note")
      .in("id", ids);
    for (const e of data ?? []) {
      const key = noteKeySchema.safeParse(e.exercise_keys?.answer_key);
      if (key.success) texts[e.id] = key.data.doc as Json;
    }
  }
  return applyNotes(sections, { ...options, texts });
}
