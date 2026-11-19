import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { itemIdSchema, newItemId } from "../../item-id";

// "Words": a glossary before a text, a listening or a video. Each word has a
// translation or a definition (and an example); students add them to their
// dictionary with "+". Nothing to check.

export const MAX_WORDS = 60;

export const glossaryWordSchema = z.object({
  id: itemIdSchema,
  term: z.string().max(200),
  meaning: z.string().max(500),
  example: z.string().max(500),
});
export type GlossaryWord = z.infer<typeof glossaryWordSchema>;

export const glossaryContentSchema = z.object({ words: z.array(glossaryWordSchema).min(1).max(MAX_WORDS) });
export type GlossaryContent = z.infer<typeof glossaryContentSchema>;

export const emptyWord = (term = "", meaning = "", example = ""): GlossaryWord => ({ id: newItemId(), term, meaning, example });

export const glossaryDefinition: ExerciseDefinition<GlossaryContent, null> = {
  id: "glossary",
  contentSchema: glossaryContentSchema,
  keySchema: null,
  create: () => ({ content: { words: [emptyWord()] }, key: null }),
};

/**
 * Words pasted as a list, one per line: "word — meaning", "word - meaning",
 * "word: meaning" or "word<Tab>meaning" (a third part is the example).
 * Lines without a word are skipped.
 */
export function parseWordList(text: string): { term: string; meaning: string; example: string }[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      const parts = (line.includes("\t") ? line.split("\t") : line.split(/\s+[—–-]\s+|\s*:\s+/)).map((p) => p.trim());
      const [term = "", meaning = "", ...rest] = parts;
      if (!term) return [];
      return [{ term: term.slice(0, 200), meaning: meaning.slice(0, 500), example: rest.join(" — ").slice(0, 500) }];
    });
}
