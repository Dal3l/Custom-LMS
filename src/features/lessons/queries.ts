import "server-only";
import { createClient } from "@/lib/supabase/server";
import type { Json, Tables } from "@/lib/supabase/database.types";

export type BuilderExercise = {
  id: string;
  type: string;
  title: string;
  content: Json;
  /** Correct answers — only ever loaded for the course owner. */
  key: Json | null;
};
export type BuilderSection = { id: string; title: string; exercises: BuilderExercise[] };
export type BuilderData = {
  course: Pick<Tables<"courses">, "id" | "title" | "owner_id">;
  module: Pick<Tables<"modules">, "id" | "title">;
  lesson: Pick<Tables<"lessons">, "id" | "title" | "is_test">;
  sections: BuilderSection[];
};

/** Everything the lesson builder needs, in one request. Null if not found or not visible. */
export async function getBuilderData(lessonId: string): Promise<BuilderData | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("lessons")
    .select(
      "id, title, is_test, modules(id, title), courses(id, title, owner_id), sections(id, title, position), exercises(id, section_id, type, title, content, position, exercise_keys(answer_key))",
    )
    .eq("id", lessonId)
    .maybeSingle();
  if (!data || !data.courses || !data.modules) return null;

  const byPosition = <T extends { position: number }>(a: T, b: T) => a.position - b.position;
  const exercises = [...data.exercises].sort(byPosition);
  return {
    course: data.courses,
    module: data.modules,
    lesson: { id: data.id, title: data.title, is_test: data.is_test },
    sections: [...data.sections].sort(byPosition).map((s) => ({
      id: s.id,
      title: s.title,
      exercises: exercises
        .filter((e) => e.section_id === s.id)
        .map((e) => ({
          id: e.id,
          type: e.type,
          title: e.title,
          content: e.content,
          key: e.exercise_keys?.answer_key ?? null,
        })),
    })),
  };
}

export type StudentExercise = { id: string; type: string; title: string; content: Json };
export type StudentSection = { id: string; title: string; exercises: StudentExercise[] };
export type StudentLesson = {
  course: Pick<Tables<"courses">, "id" | "title" | "owner_id">;
  lesson: Pick<Tables<"lessons">, "id" | "title" | "is_test">;
  sections: StudentSection[];
};

/**
 * The lesson as a student sees it. Deliberately does NOT select exercise_keys:
 * correct answers never leave the server; answers are checked by checkAnswer().
 */
export async function getStudentLesson(lessonId: string): Promise<StudentLesson | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("lessons")
    .select(
      "id, title, is_test, courses(id, title, owner_id), sections(id, title, position), exercises(id, section_id, type, title, content, position)",
    )
    .eq("id", lessonId)
    .maybeSingle();
  if (!data || !data.courses) return null;

  const byPosition = <T extends { position: number }>(a: T, b: T) => a.position - b.position;
  const exercises = [...data.exercises].sort(byPosition);
  return {
    course: data.courses,
    lesson: { id: data.id, title: data.title, is_test: data.is_test },
    sections: [...data.sections].sort(byPosition).map((s) => ({
      id: s.id,
      title: s.title,
      exercises: exercises
        .filter((e) => e.section_id === s.id)
        .map(({ id, type, title, content }) => ({ id, type, title, content })),
    })),
  };
}
