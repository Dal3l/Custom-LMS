// Transcription, recording and an example from the free dictionary
// (dictionaryapi.dev, English only). Pure parsing, unit-tested.

export type Lookup = { transcription: string; audioUrl: string | null; example: string };

type Entry = {
  phonetic?: string;
  phonetics?: { text?: string; audio?: string }[];
  meanings?: { definitions?: { example?: string }[] }[];
};

/** Picks the first usable transcription, recording (https) and example. */
export function parseLookup(data: unknown): Lookup {
  const entries = Array.isArray(data) ? (data as Entry[]) : [];
  let transcription = "";
  let audioUrl: string | null = null;
  let example = "";
  for (const e of entries) {
    if (!transcription) transcription = e.phonetic?.trim() || e.phonetics?.find((p) => p.text?.trim())?.text?.trim() || "";
    if (!audioUrl) {
      const audio = e.phonetics?.find((p) => p.audio && /^https:\/\//i.test(p.audio))?.audio;
      if (audio) audioUrl = audio;
    }
    if (!example) {
      for (const m of e.meanings ?? []) {
        const found = m.definitions?.find((d) => d.example?.trim())?.example?.trim();
        if (found) {
          example = found;
          break;
        }
      }
    }
  }
  return { transcription: transcription.slice(0, 200), audioUrl: audioUrl && audioUrl.length <= 500 ? audioUrl : null, example: example.slice(0, 1000) };
}

/** Only English has a free dictionary for now. */
export function canLookUp(language: string): boolean {
  return language === "en";
}
