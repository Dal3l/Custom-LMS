// A student's results in a class, for the teacher. Pure functions, unit-tested.
//
// "Right" uses the server's verdict of each checked answer (its score, 0…1);
// answers the teacher checks by hand (open / voice) are not counted.
// For homework there are two numbers: the first try (honest — before fixing
// mistakes) and the final answers.

export type ScoredAnswer = { lessonId: string; score: number | null };
export type LessonRow = { lessonId: string; title: string; openedAt: string; finishedAt: string | null };
export type HomeworkRow = {
  id: string;
  lessonTitle: string;
  createdAt: string;
  dueAt: string | null;
  submittedAt: string | null;
  total: number;
  /** per answered exercise: first try's and final score (null: not auto-checked) */
  answers: { first: number | null; final: number | null }[];
};

export type LessonStat = LessonRow & { checked: number; percent: number | null };
export type HomeworkTiming = "onTime" | "late" | "waiting" | "missed";
export type HomeworkStat = Omit<HomeworkRow, "answers"> & {
  answered: number;
  firstPercent: number | null;
  finalPercent: number | null;
  timing: HomeworkTiming;
};

export type ClassStats = {
  lessonsOpened: number;
  lessonsFinished: number;
  lessonPercent: number | null;
  lessons: LessonStat[];
  homeworkAssigned: number;
  homeworkHandedIn: number;
  onTime: number;
  late: number;
  missed: number;
  firstTryPercent: number | null;
  finalPercent: number | null;
  homework: HomeworkStat[];
};

/** Average of scores as a whole percent; null when there is nothing to count. */
export function percent(scores: (number | null)[]): number | null {
  const real = scores.filter((s): s is number => typeof s === "number");
  return real.length ? Math.round((real.reduce((a, b) => a + b, 0) / real.length) * 100) : null;
}

/** Handed in on time / late; not handed in yet (still time) / missed. */
export function homeworkTiming(h: Pick<HomeworkRow, "dueAt" | "submittedAt">, now = new Date()): HomeworkTiming {
  if (h.submittedAt) return h.dueAt && h.submittedAt > h.dueAt ? "late" : "onTime";
  return h.dueAt && new Date(h.dueAt) < now ? "missed" : "waiting";
}

export function classStats(lessons: LessonRow[], answers: ScoredAnswer[], homework: HomeworkRow[], now = new Date()): ClassStats {
  const lessonStats = [...lessons]
    .sort((a, b) => b.openedAt.localeCompare(a.openedAt))
    .map((l) => {
      const scores = answers.filter((a) => a.lessonId === l.lessonId).map((a) => a.score);
      return { ...l, checked: scores.filter((s) => s !== null).length, percent: percent(scores) };
    });
  const hw = [...homework]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map(({ answers: a, ...h }) => ({
      ...h,
      answered: a.length,
      firstPercent: percent(a.map((x) => x.first)),
      finalPercent: percent(a.map((x) => x.final)),
      timing: homeworkTiming(h, now),
    }));
  return {
    lessonsOpened: lessons.length,
    lessonsFinished: lessons.filter((l) => l.finishedAt).length,
    lessonPercent: percent(answers.map((a) => a.score)),
    lessons: lessonStats,
    homeworkAssigned: homework.length,
    homeworkHandedIn: homework.filter((h) => h.submittedAt).length,
    onTime: hw.filter((h) => h.timing === "onTime").length,
    late: hw.filter((h) => h.timing === "late").length,
    missed: hw.filter((h) => h.timing === "missed").length,
    firstTryPercent: percent(homework.flatMap((h) => h.answers.map((a) => a.first))),
    finalPercent: percent(homework.flatMap((h) => h.answers.map((a) => a.final))),
    homework: hw,
  };
}
