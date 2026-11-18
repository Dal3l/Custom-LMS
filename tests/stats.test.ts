import { describe, expect, it } from "vitest";
import { classStats, homeworkTiming, percent } from "@/features/stats/stats";

const now = new Date("2026-11-20T12:00:00Z");

describe("student statistics", () => {
  it("percent of right answers, not counting teacher-checked ones", () => {
    expect(percent([1, 0.5, null])).toBe(75);
    expect(percent([null])).toBeNull();
    expect(percent([])).toBeNull();
  });

  it("homework handed in on time, late, still to do, missed", () => {
    expect(homeworkTiming({ dueAt: "2026-11-19T18:00:00Z", submittedAt: "2026-11-19T10:00:00Z" }, now)).toBe("onTime");
    expect(homeworkTiming({ dueAt: "2026-11-19T18:00:00Z", submittedAt: "2026-11-19T19:00:00Z" }, now)).toBe("late");
    expect(homeworkTiming({ dueAt: null, submittedAt: "2026-11-19T19:00:00Z" }, now)).toBe("onTime");
    expect(homeworkTiming({ dueAt: "2026-11-25T18:00:00Z", submittedAt: null }, now)).toBe("waiting");
    expect(homeworkTiming({ dueAt: "2026-11-19T18:00:00Z", submittedAt: null }, now)).toBe("missed");
  });

  it("puts lessons and homework together", () => {
    const s = classStats(
      [
        { lessonId: "l1", title: "Greetings", openedAt: "2026-11-10T10:00:00Z", finishedAt: "2026-11-10T11:00:00Z" },
        { lessonId: "l2", title: "Numbers", openedAt: "2026-11-17T10:00:00Z", finishedAt: null },
      ],
      [
        { lessonId: "l1", score: 1 },
        { lessonId: "l1", score: 0 },
        { lessonId: "l2", score: 1 },
        { lessonId: "l2", score: null },
      ],
      [
        {
          id: "h1",
          lessonTitle: "Greetings",
          createdAt: "2026-11-10T12:00:00Z",
          dueAt: "2026-11-12T18:00:00Z",
          submittedAt: "2026-11-13T09:00:00Z",
          total: 2,
          answers: [
            { first: 0, final: 1 },
            { first: 1, final: 1 },
          ],
        },
        { id: "h2", lessonTitle: "Numbers", createdAt: "2026-11-17T12:00:00Z", dueAt: null, submittedAt: null, total: 3, answers: [] },
      ],
      now,
    );
    expect(s).toMatchObject({
      lessonsOpened: 2,
      lessonsFinished: 1,
      lessonPercent: 67,
      homeworkAssigned: 2,
      homeworkHandedIn: 1,
      onTime: 0,
      late: 1,
      missed: 0,
      firstTryPercent: 50,
      finalPercent: 100,
    });
    expect(s.lessons.map((l) => [l.title, l.percent, l.checked])).toEqual([
      ["Numbers", 100, 1],
      ["Greetings", 50, 2],
    ]);
    expect(s.homework[0]).toMatchObject({ lessonTitle: "Numbers", timing: "waiting", answered: 0, firstPercent: null });
    expect(s.homework[1]).toMatchObject({ lessonTitle: "Greetings", timing: "late", firstPercent: 50, finalPercent: 100 });
  });
});
