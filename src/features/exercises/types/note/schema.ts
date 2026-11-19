import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { textDocSchema, type TextDoc } from "../text/schema";

// A note beside the exercises: tips for the teacher, a suggested answer, a
// rule. Its text is kept in the key (never sent to students); `content.doc`
// carries a copy only when the note is shown to students. In a class the
// teacher can show or hide it for the moment (class_lessons.revealed).

export const noteContentSchema = z.object({
  /** shown to students from the start */
  shown: z.boolean(),
  /** the text, only when shown (made on the server from the key) */
  doc: textDocSchema.nullable(),
});
export type NoteContent = z.infer<typeof noteContentSchema>;

export const noteKeySchema = z.object({ doc: textDocSchema });
export type NoteKey = z.infer<typeof noteKeySchema>;

export const emptyDoc = (): TextDoc => ({ type: "doc", content: [{ type: "paragraph" }] });

export const noteDefinition: ExerciseDefinition<NoteContent, NoteKey> = {
  id: "note",
  contentSchema: noteContentSchema,
  keySchema: noteKeySchema,
  create: () => ({ content: { shown: false, doc: null }, key: { doc: emptyDoc() } }),
  publicContent: (content, key) => ({ shown: content.shown, doc: content.shown ? key.doc : null }),
};

/** A note's text on screen: shown now (in a class, after the teacher's eye button) or not. */
export type NoteState = { shown: boolean; defaultShown: boolean; doc: TextDoc | null };
