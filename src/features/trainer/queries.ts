import "server-only";
import { createClient } from "@/lib/supabase/server";
import { LEARNED, modeFor, wordStatus, type Mode } from "./ladder";

/** At most this many words in one session, of them at most this many new ones. */
export const SESSION_SIZE = 20;
export const NEW_PER_SESSION = 10;

export type TrainerOverview = {
  /** words to go through now (new ones counted up to the per-session limit) */
  dueNow: number;
  newWords: number;
  learning: number;
  learned: number;
  /** words that can't be trained yet: no translation */
  noTranslation: number;
  /** when the next word becomes due, if none is due now */
  nextDue: string | null;
};

export type TrainerItem = {
  id: string;
  term: string;
  translation: string;
  transcription: string;
  example: string;
  audioUrl: string | null;
  language: string;
  stage: number;
  /** the exercise: "listen" turns into "write" in a browser without a voice */
  mode: Mode;
  /** for "choice": four translations, the right one among them */
  options: string[];
};

type Row = {
  id: string;
  term: string;
  translation: string;
  transcription: string;
  example: string;
  audio_url: string | null;
  language: string;
  stage: number;
  reviews: number;
  due: string;
};

const COLUMNS = "id, term, translation, transcription, example, audio_url, language, stage, reviews, due";

async function myWords(studentId: string): Promise<Row[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("vocabulary").select(COLUMNS).eq("student_id", studentId).order("due");
  return (data ?? []) as Row[];
}

export async function getTrainerOverview(studentId: string, now = new Date()): Promise<TrainerOverview> {
  const words = await myWords(studentId);
  const trainable = words.filter((w) => w.translation.trim());
  const due = trainable.filter((w) => new Date(w.due) <= now);
  const dueNew = due.filter((w) => w.reviews === 0).length;
  const later = trainable.filter((w) => new Date(w.due) > now).map((w) => w.due);
  const count = (s: string) => words.filter((w) => wordStatus(w.stage, w.reviews) === s).length;
  return {
    dueNow: Math.min(due.length - dueNew + Math.min(dueNew, NEW_PER_SESSION), SESSION_SIZE),
    newWords: count("new"),
    learning: count("learning"),
    learned: count("learned"),
    noTranslation: words.length - trainable.length,
    nextDue: due.length ? null : (later.sort()[0] ?? null),
  };
}

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * The words of one session. "due": what is due now (words in progress first,
 * then a few new ones). "learned": learned words again, for practice.
 */
export async function buildSession(studentId: string, kind: "due" | "learned", now = new Date()): Promise<TrainerItem[]> {
  const words = (await myWords(studentId)).filter((w) => w.translation.trim());
  let picked: Row[];
  if (kind === "learned") {
    picked = shuffle(words.filter((w) => w.stage >= LEARNED)).slice(0, SESSION_SIZE);
  } else {
    const due = words.filter((w) => new Date(w.due) <= now);
    const started = due.filter((w) => w.reviews > 0);
    const fresh = due.filter((w) => w.reviews === 0).slice(0, NEW_PER_SESSION);
    picked = [...started, ...fresh].slice(0, SESSION_SIZE);
  }
  return picked.map((w) => {
    // Wrong choices: translations of other words in the same language.
    const others = [
      ...new Set(
        words
          .filter((o) => o.id !== w.id && o.language === w.language)
          .map((o) => o.translation.trim())
          .filter((t) => t.toLocaleLowerCase() !== w.translation.trim().toLocaleLowerCase()),
      ),
    ];
    const choose = others.length >= 3;
    const mode = modeFor(w.stage, { choose, listen: true }, w.reviews);
    return {
      id: w.id,
      term: w.term,
      translation: w.translation,
      transcription: w.transcription,
      example: w.example,
      audioUrl: w.audio_url,
      language: w.language,
      stage: w.stage,
      mode,
      options: mode === "choice" ? shuffle([w.translation.trim(), ...shuffle(others).slice(0, 3)]) : [],
    };
  });
}
