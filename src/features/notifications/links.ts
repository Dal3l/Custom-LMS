// Where a notification leads. Pure, shared by the server and the bell.

export type NotificationKind = "homework_assigned" | "homework_updated" | "homework_comment" | "homework_reviewed" | "homework_submitted";

export type NotificationItem = {
  id: string;
  kind: NotificationKind;
  homeworkId: string;
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  lessonId: string;
  lessonTitle: string;
  createdAt: string;
  read: boolean;
};

/** The teacher goes to the student's answers; the student to the lesson's Homework tab. */
export function notificationHref(n: Pick<NotificationItem, "kind" | "homeworkId" | "studentId" | "classId" | "lessonId">): string {
  if (n.kind === "homework_submitted") return `/homework/${n.homeworkId}/${n.studentId}`;
  return `/classes/${n.classId}/lessons/${n.lessonId}?tab=homework`;
}
