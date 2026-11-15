import "server-only";
import { toSavedAnswer, type SavedAnswer } from "@/features/lessons/answers-shared";
import { createClient } from "@/lib/supabase/server";
import { homeworkStatus, sortHomeworks, type HomeworkStatus } from "./status";

/** A homework sent in a class lesson, as the teacher sees it there. */
export type SentHomework = {
  id: string;
  createdAt: string;
  dueAt: string | null;
  exerciseIds: string[];
  students: number;
  submitted: number;
};

export async function listLessonHomeworks(classId: string, lessonId: string): Promise<SentHomework[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homeworks")
    .select("id, created_at, due_at, homework_exercises(exercise_id, position), homework_students(submitted_at)")
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
};

export async function getMyLessonHomeworks(classId: string, lessonId: string, studentId: string): Promise<MyHomework[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homeworks")
    .select(
      "id, created_at, due_at, homework_exercises(exercise_id, position), homework_students(student_id, submitted_at), homework_answers(exercise_id, student_id, answer, checked_answer, result)",
    )
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .order("created_at", { ascending: false });
  return (data ?? []).flatMap((h) => {
    const mine = h.homework_students.find((s) => s.student_id === studentId);
    if (!mine) return [];
    const saved: Record<string, SavedAnswer> = {};
    for (const a of h.homework_answers) if (a.student_id === studentId) saved[a.exercise_id] = toSavedAnswer(a);
    return [
      {
        id: h.id,
        createdAt: h.created_at,
        dueAt: h.due_at,
        submittedAt: mine.submitted_at,
        status: homeworkStatus({ submittedAt: mine.submitted_at, dueAt: h.due_at, answered: Object.keys(saved).length }),
        exerciseIds: [...h.homework_exercises].sort((a, b) => a.position - b.position).map((e) => e.exercise_id),
        saved,
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
  status: HomeworkStatus;
  total: number;
  answered: number;
};

export async function listMyHomeworks(studentId: string): Promise<HomeworkListItem[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("homework_students")
    .select(
      "submitted_at, homework:homeworks(id, class_id, lesson_id, created_at, due_at, class:classes(name), lesson:lessons(title), homework_exercises(exercise_id), homework_answers(student_id))",
    )
    .eq("student_id", studentId);
  const items = (data ?? []).flatMap(({ submitted_at, homework: h }) => {
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
        status: homeworkStatus({ submittedAt: submitted_at, dueAt: h.due_at, answered }),
        total: h.homework_exercises.length,
        answered,
      },
    ];
  });
  return sortHomeworks(items);
}
