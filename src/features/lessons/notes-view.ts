// Notes in a class lesson: which ones a person sees, and with what text. Pure, unit-tested.
import type { Json } from "@/lib/supabase/database.types";
import type { StudentSection } from "./queries";

type NoteContent = { shown?: unknown; doc?: Json };

/**
 * A note is shown to students when it is shown by default, or the other way
 * round when the teacher pressed its eye in this class (its id is in `toggled`).
 * Students lose notes they must not see; the teacher keeps them all.
 * `texts` are the notes' texts read from the keys (for the teacher, and for
 * notes shown in class that are hidden by default).
 */
export function applyNotes(
  sections: StudentSection[],
  options: { teacher: boolean; toggled: string[]; texts: Record<string, Json> },
): StudentSection[] {
  return sections.map((s) => ({
    ...s,
    exercises: s.exercises.flatMap((e) => {
      if (e.type !== "note") return [e];
      const content = (e.content ?? {}) as NoteContent;
      const defaultShown = content.shown === true;
      const shown = defaultShown !== options.toggled.includes(e.id);
      if (!shown && !options.teacher) return [];
      const doc = (options.texts[e.id] ?? content.doc ?? null) as Json;
      return [{ ...e, content: { shown, defaultShown, doc } }];
    }),
  }));
}

/** Notes whose texts must be read from the keys for this person. */
export function notesToRead(sections: StudentSection[], options: { teacher: boolean; toggled: string[] }): string[] {
  return sections.flatMap((s) =>
    s.exercises
      .filter((e) => {
        if (e.type !== "note") return false;
        if (options.teacher) return true;
        const content = (e.content ?? {}) as NoteContent;
        const shown = (content.shown === true) !== options.toggled.includes(e.id);
        return shown && !content.doc;
      })
      .map((e) => e.id),
  );
}
