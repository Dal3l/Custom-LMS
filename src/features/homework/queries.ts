import "server-only";
import { toSavedAnswer, type SavedAnswer } from "@/features/lessons/answers-shared";
import { createClient } from "@/lib/supabase/server";
import { homeworkStatus, sortForTeacher, sortHomeworks, type HomeworkStatus } from "./status";

/** A homework sent in a class lesson, as the teacher sees it there. */
export type SentHomework = {
  id: string;
  createdAt: string;
  dueAt: string | null;
  exerciseIds: string[];
  students: number;
  submitted: number;
  /** whose answers "Open answers" shows first: someone who handed in, else anyone */
  firstStudentId: string | null;
  /** who got it */
  studentIds: string[];
};

export async function listLessonHomeworks(classId: string, lessonId: string): Promise<SentHomework[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homeworks")
    .select("id, created_at, due_at, homework_exercises(exercise_id, position), homework_students(student_id, submitted_at)")
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .order("created_at", { ascending: false });
  return (data ?? []).map((h) => ({
    id: h.id,
    createdAt: h.created_at,
    dueAt: h.due_at,
    exerciseIds: [...h.homework_exercises].sort((a, b) => a.position - b.position).map((e) => e.exercise_id),
    students: h.homework_students.length,
    submitted: h.homework_students.filter((s) => s.submitted_at).length,
    studentIds: h.homework_students.map((s) => s.student_id),
    firstStudentId: (h.homework_students.find((s) => s.submitted_at) ?? h.homework_students[0])?.student_id ?? null,
  }));
}

/** A student's homework in one lesson: its exercises, their saved answers, hand-in. */
export type MyHomework = {
  id: string;
  createdAt: string;
  dueAt: string | null;
  submittedAt: string | null;
  status: HomeworkStatus;
  exerciseIds: string[];
  saved: Record<string, SavedAnswer>;
  /** the teacher's comments, by exercise */
  comments: Record<string, string>;
};

export async function getMyLessonHomeworks(classId: string, lessonId: string, studentId: string): Promise<MyHomework[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homeworks")
    .select(
      "id, created_at, due_at, homework_exercises(exercise_id, position), homework_students(student_id, submitted_at, reviewed_at), homework_answers(exercise_id, student_id, answer, checked_answer, result), homework_comments(exercise_id, student_id, body)",
    )
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .order("created_at", { ascending: false });
  return (data ?? []).flatMap((h) => {
    const mine = h.homework_students.find((s) => s.student_id === studentId);
    if (!mine) return [];
    const saved: Record<string, SavedAnswer> = {};
    for (const a of h.homework_answers) if (a.student_id === studentId) saved[a.exercise_id] = toSavedAnswer(a);
    const comments: Record<string, string> = {};
    for (const c of h.homework_comments) if (c.student_id === studentId && c.body.trim()) comments[c.exercise_id] = c.body;
    return [
      {
        id: h.id,
        createdAt: h.created_at,
        dueAt: h.due_at,
        submittedAt: mine.submitted_at,
        status: homeworkStatus({
          submittedAt: mine.submitted_at,
          reviewedAt: mine.reviewed_at,
          dueAt: h.due_at,
          answered: Object.keys(saved).length,
        }),
        exerciseIds: [...h.homework_exercises].sort((a, b) => a.position - b.position).map((e) => e.exercise_id),
        saved,
        comments,
      },
    ];
  });
}

/** The student's "Homework" page: every homework from every class, with its status. */
export type HomeworkListItem = {
  id: string;
  classId: string;
  className: string;
  lessonId: string;
  lessonTitle: string;
  createdAt: string;
  dueAt: string | null;
  reviewedAt: string | null;
  status: HomeworkStatus;
  total: number;
  answered: number;
};

export async function listMyHomeworks(studentId: string): Promise<HomeworkListItem[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homework_students")
    .select(
      "submitted_at, reviewed_at, homework:homeworks(id, class_id, lesson_id, created_at, due_at, class:classes(name), lesson:lessons(title), homework_exercises(exercise_id), homework_answers(student_id))",
    )
    .eq("student_id", studentId);
  const items = (data ?? []).flatMap(({ submitted_at, reviewed_at, homework: h }) => {
    if (!h) return [];
    const answered = h.homework_answers.filter((a) => a.student_id === studentId).length;
    return [
      {
        id: h.id,
        classId: h.class_id,
        className: h.class?.name ?? "",
        lessonId: h.lesson_id,
        lessonTitle: h.lesson?.title ?? "",
        createdAt: h.created_at,
        dueAt: h.due_at,
        reviewedAt: reviewed_at,
        status: homeworkStatus({ submittedAt: submitted_at, reviewedAt: reviewed_at, dueAt: h.due_at, answered }),
        total: h.homework_exercises.length,
        answered,
      },
    ];
  });
  return sortHomeworks(items);
}

/** The teacher's "Homework" page: every student's copy of every homework sent. */
export type TeacherHomeworkItem = {
  homeworkId: string;
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  lessonTitle: string;
  createdAt: string;
  dueAt: string | null;
  submittedAt: string | null;
  reviewedAt: string | null;
  status: HomeworkStatus;
  total: number;
  answered: number;
};

export async function listTeacherHomeworks(): Promise<TeacherHomeworkItem[]> {
  const supabase = await createClient();
  // RLS: only homework of the teacher's own classes.
  const { data } = await supabase
    .from("homework_students")
    .select(
      "student_id, submitted_at, reviewed_at, student:profiles(full_name), homework:homeworks(id, class_id, created_at, due_at, class:classes(name), lesson:lessons(title), homework_exercises(exercise_id), homework_answers(student_id))",
    );
  const items = (data ?? []).flatMap((row) => {
    const h = row.homework;
    if (!h) return [];
    const answered = h.homework_answers.filter((a) => a.student_id === row.student_id).length;
    return [
      {
        homeworkId: h.id,
        studentId: row.student_id,
        studentName: row.student?.full_name ?? "",
        classId: h.class_id,
        className: h.class?.name ?? "",
        lessonTitle: h.lesson?.title ?? "",
        createdAt: h.created_at,
        dueAt: h.due_at,
        submittedAt: row.submitted_at,
        reviewedAt: row.reviewed_at,
        status: homeworkStatus({ submittedAt: row.submitted_at, reviewedAt: row.reviewed_at, dueAt: h.due_at, answered }),
        total: h.homework_exercises.length,
        answered,
      },
    ];
  });
  return sortForTeacher(items);
}

export type ReviewAnswer = SavedAnswer & { attempts: number; firstAnswer: unknown; firstResult: unknown };

/** One student's homework for the teacher to check: answers, tries, comments. */
export async function getHomeworkReview(homeworkId: string, studentId: string) {
  const supabase = await createClient();
  const { data: h } = await supabase
    .from("homeworks")
    .select(
      "id, class_id, lesson_id, created_at, due_at, class:classes(name), lesson:lessons(title, course:courses(language)), homework_exercises(exercise_id, position), homework_students(student_id, submitted_at, reviewed_at, student:profiles(full_name)), homework_answers(exercise_id, student_id, answer, checked_answer, result, first_answer, first_result, attempts), homework_comments(exercise_id, student_id, body)",
    )
    .eq("id", homeworkId)
    .maybeSingle();
  if (!h) return null;
  const mine = h.homework_students.find((s) => s.student_id === studentId);
  if (!mine) return null;
  const answers: Record<string, ReviewAnswer> = {};
  for (const a of h.homework_answers) {
    if (a.student_id !== studentId) continue;
    answers[a.exercise_id] = { ...toSavedAnswer(a), attempts: a.attempts, firstAnswer: a.first_answer, firstResult: a.first_result };
  }
  const comments: Record<string, string> = {};
  for (const c of h.homework_comments) if (c.student_id === studentId) comments[c.exercise_id] = c.body;
  const students = [...h.homework_students]
    .map((s) => ({ id: s.student_id, name: s.student?.full_name ?? "", submitted: Boolean(s.submitted_at) }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return {
    id: h.id,
    classId: h.class_id,
    className: h.class?.name ?? "",
    lessonId: h.lesson_id,
    lessonTitle: h.lesson?.title ?? "",
    language: h.lesson?.course?.language ?? "en",
    createdAt: h.created_at,
    dueAt: h.due_at,
    studentId,
    studentName: mine.student?.full_name ?? "",
    submittedAt: mine.submitted_at,
    reviewedAt: mine.reviewed_at,
    exerciseIds: [...h.homework_exercises].sort((a, b) => a.position - b.position).map((e) => e.exercise_id),
    answers,
    comments,
    students,
  };
}
