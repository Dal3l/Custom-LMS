import { describe, expect, it } from "vitest";
import { notificationHref } from "@/features/notifications/links";

describe("notification links", () => {
  const n = { homeworkId: "h1", studentId: "s1", classId: "c1", lessonId: "l1" };
  it("teacher: a handed-in homework opens the student's answers", () => {
    expect(notificationHref({ ...n, kind: "homework_submitted" })).toBe("/homework/h1/s1");
  });
  it("student: everything else opens the lesson's Homework tab", () => {
    for (const kind of ["homework_assigned", "homework_updated", "homework_comment", "homework_reviewed"] as const) {
      expect(notificationHref({ ...n, kind })).toBe("/classes/c1/lessons/l1?tab=homework");
    }
  });
});
