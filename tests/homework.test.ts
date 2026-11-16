import { describe, expect, it } from "vitest";
import { homeworkStatus, sortForTeacher, sortHomeworks } from "@/features/homework/status";

describe("homework status", () => {
  const now = new Date("2026-11-20T12:00:00Z").getTime();
  it("new → in progress → handed in", () => {
    expect(homeworkStatus({ submittedAt: null, dueAt: null, answered: 0, now })).toBe("new");
    expect(homeworkStatus({ submittedAt: null, dueAt: null, answered: 2, now })).toBe("in_progress");
    expect(homeworkStatus({ submittedAt: "2026-11-20T10:00:00Z", dueAt: null, answered: 2, now })).toBe("submitted");
  });

  it("is overdue after the due date unless handed in", () => {
    expect(homeworkStatus({ submittedAt: null, dueAt: "2026-11-20T11:00:00Z", answered: 1, now })).toBe("overdue");
    expect(homeworkStatus({ submittedAt: null, dueAt: "2026-11-21T11:00:00Z", answered: 0, now })).toBe("new");
    expect(homeworkStatus({ submittedAt: "2026-11-20T11:30:00Z", dueAt: "2026-11-20T11:00:00Z", answered: 1, now })).toBe("submitted");
  });

  it("lists work to do first, newest first", () => {
    const items = [
      { id: "a", status: "submitted" as const, createdAt: "2026-11-19" },
      { id: "b", status: "new" as const, createdAt: "2026-11-10" },
      { id: "c", status: "overdue" as const, createdAt: "2026-11-15" },
    ];
    expect(sortHomeworks(items).map((i) => i.id)).toEqual(["c", "b", "a"]);
  });

  it("is reviewed only once handed in and marked by the teacher", () => {
    const at = "2026-11-20T11:00:00Z";
    expect(homeworkStatus({ submittedAt: at, reviewedAt: at, dueAt: null, answered: 2, now })).toBe("reviewed");
    expect(homeworkStatus({ submittedAt: null, reviewedAt: at, dueAt: null, answered: 2, now })).toBe("in_progress");
  });

  it("teacher: handed-in work first (oldest first), reviewed last", () => {
    const items = [
      { id: "rev", status: "reviewed" as const, createdAt: "2026-11-19", submittedAt: "2026-11-19" },
      { id: "new", status: "new" as const, createdAt: "2026-11-18", submittedAt: null },
      { id: "late", status: "submitted" as const, createdAt: "2026-11-10", submittedAt: "2026-11-17" },
      { id: "early", status: "submitted" as const, createdAt: "2026-11-12", submittedAt: "2026-11-13" },
      { id: "newer", status: "in_progress" as const, createdAt: "2026-11-20", submittedAt: null },
    ];
    expect(sortForTeacher(items).map((i) => i.id)).toEqual(["early", "late", "newer", "new", "rev"]);
  });
});
