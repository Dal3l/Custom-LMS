import "server-only";
import { DefaultScheduler } from "ts-fsrs";

// FSRS through ts-fsrs. The card is kept as JSON in vocabulary.fsrs.

type Scheduler = Awaited<ReturnType<typeof DefaultScheduler>>;
/** What the app reads from a reviewed card (the whole card is stored as JSON). */
export type FsrsCard = { dueAt: Date; reps: number; lapses: number } & Record<string, unknown>;

let scheduler: Promise<Scheduler> | null = null;
export function getScheduler(): Promise<Scheduler> {
  scheduler ??= DefaultScheduler({ enableFuzz: false, desiredRetention: 0.9 });
  return scheduler;
}

/** The stored JSON back into a card (dates were saved as text). */
export function cardFromJson(json: unknown): Record<string, unknown> | null {
  if (!json || typeof json !== "object") return null;
  const c = json as Record<string, unknown>;
  return {
    ...c,
    dueAt: new Date(String(c.dueAt)),
    lastReviewAt: c.lastReviewAt ? new Date(String(c.lastReviewAt)) : null,
  };
}

/** Reviews a card (a new one if there is none yet) and returns the new card. */
export async function reviewCard(json: unknown, grade: 1 | 2 | 3 | 4, now: Date): Promise<FsrsCard> {
  const s = await getScheduler();
  const card = cardFromJson(json) ?? s.newCard({ now });
  // The library's card types differ per FSRS version; the stored card is the one it made.
  return s.review({ card: card as never, grade, now }).card as unknown as FsrsCard;
}
