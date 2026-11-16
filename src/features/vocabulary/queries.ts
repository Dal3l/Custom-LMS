import "server-only";
import { createClient } from "@/lib/supabase/server";

export type Word = {
  id: string;
  term: string;
  translation: string;
  transcription: string;
  example: string;
  audioUrl: string | null;
  language: string;
  courseId: string | null;
  courseTitle: string;
  lessonId: string | null;
  lessonTitle: string;
  /** added by the teacher (not by the student) */
  fromTeacher: boolean;
  createdAt: string;
};

/** A student's dictionary, newest first. */
export async function listWords(studentId: string): Promise<Word[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("vocabulary")
    .select(
      "id, term, translation, transcription, example, audio_url, language, course_id, lesson_id, added_by, created_at, course:courses(title), lesson:lessons(title)",
    )
    .eq("student_id", studentId)
    .order("created_at", { ascending: false });
  return (data ?? []).map((w) => ({
    id: w.id,
    term: w.term,
    translation: w.translation,
    transcription: w.transcription,
    example: w.example,
    audioUrl: w.audio_url,
    language: w.language,
    courseId: w.course_id,
    courseTitle: w.course?.title ?? "",
    lessonId: w.lesson_id,
    lessonTitle: w.lesson?.title ?? "",
    fromTeacher: w.added_by !== null && w.added_by !== studentId,
    createdAt: w.created_at,
  }));
}

/**
 * The languages a student studies: of their words and of the lessons opened in
 * their classes, most used first. Used to preselect the language of a new word.
 */
export async function studyLanguages(words: Pick<Word, "language">[]): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("class_lessons").select("lesson:lessons(course:courses(language))").limit(200);
  const count = new Map<string, number>();
  for (const w of words) count.set(w.language, (count.get(w.language) ?? 0) + 2);
  for (const row of data ?? []) {
    const language = row.lesson?.course?.language;
    if (language) count.set(language, (count.get(language) ?? 0) + 1);
  }
  return [...count].sort((a, b) => b[1] - a[1]).map(([language]) => language);
}
