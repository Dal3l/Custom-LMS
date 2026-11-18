import { describe, expect, it } from "vitest";
import { dayKind, homeworkToDo, unreadChats, waitingForCheck } from "@/features/dashboard/dashboard";

describe("dashboard", () => {
  it("names today and tomorrow in the viewer's time zone", () => {
    const now = new Date("2026-11-18T20:00:00Z"); // 19 Nov 01:00 in Almaty (UTC+5)
    expect(dayKind(new Date("2026-11-18T22:00:00Z"), now, "Asia/Almaty")).toBe("today");
    expect(dayKind(new Date("2026-11-18T22:00:00Z"), now, "UTC")).toBe("today");
    expect(dayKind(new Date("2026-11-19T20:00:00Z"), now, "Asia/Almaty")).toBe("tomorrow");
    expect(dayKind(new Date("2026-11-19T20:00:00Z"), now, "UTC")).toBe("tomorrow");
    expect(dayKind(new Date("2026-11-21T10:00:00Z"), now, "UTC")).toBe("later");
  });

  it("homework to do: overdue first, then the nearest due date; handed-in work left out", () => {
    const items = [
      { id: "a", status: "new" as const, dueAt: null, createdAt: "2026-11-10" },
      { id: "b", status: "in_progress" as const, dueAt: "2026-11-20", createdAt: "2026-11-09" },
      { id: "c", status: "submitted" as const, dueAt: "2026-11-19", createdAt: "2026-11-08" },
      { id: "d", status: "overdue" as const, dueAt: "2026-11-15", createdAt: "2026-11-01" },
      { id: "e", status: "new" as const, dueAt: "2026-11-19", createdAt: "2026-11-11" },
      { id: "f", status: "reviewed" as const, dueAt: null, createdAt: "2026-11-12" },
    ];
    expect(homeworkToDo(items).map((h) => h.id)).toEqual(["d", "e", "b", "a"]);
  });

  it("work to check: only handed in, the longest-waiting first", () => {
    const items = [
      { id: "a", status: "submitted" as const, submittedAt: "2026-11-17" },
      { id: "b", status: "reviewed" as const, submittedAt: "2026-11-10" },
      { id: "c", status: "submitted" as const, submittedAt: "2026-11-12" },
      { id: "d", status: "new" as const, submittedAt: null },
    ];
    expect(waitingForCheck(items).map((h) => h.id)).toEqual(["c", "a"]);
  });

  it("unread chats: only classes with new messages, most first", () => {
    expect(unreadChats({ x: 0, y: 2, z: 5, gone: 3 }, { x: "X", y: "Y", z: "Z" })).toEqual([
      { classId: "z", name: "Z", count: 5 },
      { classId: "y", name: "Y", count: 2 },
    ]);
  });
});
