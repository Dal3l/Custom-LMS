// One learning (or review) session, run in the browser. Pure functions, unit-tested.
//
// The chosen words go through the steps one after another, all words per step:
//   cards (word + translation) → pick the translation of 4 → write the word → write it by ear.
// A mistake brings the word back at the end of the same step until it is right.
// At the end every word of a learning session is learned; a review can use any
// of the steps.

export type Step = "card" | "choice" | "write" | "listen";
export const STEPS: Step[] = ["card", "choice", "write", "listen"];

export type SessionWord = {
  id: string;
  term: string;
  translation: string;
  transcription: string;
  example: string;
  audioUrl: string | null;
  language: string;
};

export type Task = { wordId: string; step: Step; options: string[] };

export type Session = {
  tasks: Task[];
  index: number;
  /** mistakes per word */
  mistakes: Record<string, number>;
  /** every answer, for the log */
  answers: { wordId: string; step: Step; correct: boolean }[];
};

/** Random order (a fixed random function can be passed in tests). */
export function shuffle<T>(items: T[], random = Math.random): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Which words to take: all of them, a number of random ones, or the chosen
 * ones. `first` are taken before the rest (e.g. words it is time to review).
 */
export function pickWords<T extends { id: string }>(
  words: T[],
  how: { count: number | "all" } | { ids: string[] },
  first: Set<string> = new Set(),
  random = Math.random,
): T[] {
  if ("ids" in how) {
    const wanted = new Set(how.ids);
    return words.filter((w) => wanted.has(w.id));
  }
  if (how.count === "all") return [...words];
  const urgent = shuffle(words.filter((w) => first.has(w.id)), random);
  const rest = shuffle(words.filter((w) => !first.has(w.id)), random);
  return [...urgent, ...rest].slice(0, Math.max(0, how.count));
}

/** Four translations (the right one among them) out of the student's other words. */
export function choiceOptions(word: SessionWord, pool: SessionWord[], random = Math.random): string[] | null {
  const right = word.translation.trim();
  const others = [
    ...new Set(
      pool
        .filter((o) => o.id !== word.id && o.language === word.language)
        .map((o) => o.translation.trim())
        .filter((t) => t && t.toLocaleLowerCase() !== right.toLocaleLowerCase()),
    ),
  ];
  if (others.length < 3) return null;
  return shuffle([right, ...shuffle(others, random).slice(0, 3)], random);
}

/**
 * The tasks of a session, step by step, in random order inside each step.
 * Picking needs 3 other translations; listening needs a voice or a recording —
 * without them that step is skipped for the word.
 */
export function buildTasks(
  words: SessionWord[],
  steps: Step[],
  pool: SessionWord[],
  canHear: (w: SessionWord) => boolean,
  random = Math.random,
): Task[] {
  const tasks: Task[] = [];
  for (const step of STEPS.filter((s) => steps.includes(s))) {
    for (const w of shuffle(words, random)) {
      if (step === "listen" && !canHear(w)) continue;
      if (step === "choice") {
        const options = choiceOptions(w, pool, random);
        if (options) tasks.push({ wordId: w.id, step, options });
        continue;
      }
      tasks.push({ wordId: w.id, step, options: [] });
    }
  }
  return tasks;
}

export function startSession(tasks: Task[]): Session {
  return { tasks, index: 0, mistakes: {}, answers: [] };
}

/**
 * Records the answer to the current task and moves on. A wrong answer puts the
 * same task again at the end of its step (options reshuffled).
 */
export function answer(s: Session, correct: boolean, random = Math.random): Session {
  const task = s.tasks[s.index];
  if (!task) return s;
  const tasks = [...s.tasks];
  const mistakes = { ...s.mistakes };
  if (!correct) {
    mistakes[task.wordId] = (mistakes[task.wordId] ?? 0) + 1;
    let last = s.index;
    for (let i = s.index + 1; i < tasks.length; i++) if (tasks[i].step === task.step) last = i;
    tasks.splice(last + 1, 0, { ...task, options: shuffle(task.options, random) });
  }
  return {
    tasks,
    index: s.index + 1,
    mistakes,
    answers: [...s.answers, { wordId: task.wordId, step: task.step, correct }],
  };
}

export function isFinished(s: Session): boolean {
  return s.index >= s.tasks.length;
}

/** "Step 2 of 4": the steps this session really has, and where we are. */
export function stepProgress(s: Session): { steps: Step[]; current: number; doneInStep: number; inStep: number } {
  const steps = STEPS.filter((st) => s.tasks.some((t) => t.step === st));
  const task = s.tasks[Math.min(s.index, s.tasks.length - 1)];
  const step = task?.step ?? steps[steps.length - 1];
  const inStep = s.tasks.filter((t) => t.step === step).length;
  const before = s.tasks.findIndex((t) => t.step === step);
  return { steps, current: steps.indexOf(step), doneInStep: Math.max(0, s.index - before), inStep };
}

/** FSRS grade at the end: no mistakes = good; with mistakes = hard (learning) or again (review). */
export function finalGrade(mistakes: number, kind: "learn" | "review"): 1 | 2 | 3 {
  if (mistakes === 0) return 3;
  return kind === "learn" ? 2 : 1;
}
