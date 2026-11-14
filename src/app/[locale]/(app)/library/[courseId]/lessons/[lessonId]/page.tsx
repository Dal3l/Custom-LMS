import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PreviewShell } from "@/components/lesson-player/preview-shell";
import { Badge } from "@/components/ui/badge";
import { idSchema } from "@/features/courses/schemas";
import { getStudentLesson } from "@/features/lessons/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

// A library lesson as a student will see it (answers can be checked; nothing is saved).
export default async function LibraryLessonPage({
  params,
  searchParams,
}: PageProps<"/[locale]/library/[courseId]/lessons/[lessonId]">) {
  const { locale, courseId, lessonId } = (await params) as { locale: Locale; courseId: string; lessonId: string };
  setRequestLocale(locale);
  await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success || !idSchema.safeParse(lessonId).success) notFound();
  const supabase = await createClient();
  const [lesson, course] = await Promise.all([
    getStudentLesson(lessonId),
    supabase.from("courses").select("is_library, is_published").eq("id", courseId).maybeSingle(),
  ]);
  if (!lesson || lesson.course.id !== courseId || !course.data?.is_library || !course.data.is_published) notFound();
  const { section } = await searchParams;
  const t = await getTranslations("courses");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold">
        {lesson.lesson.title}
        {lesson.lesson.is_test && <Badge variant="secondary">{t("testBadge")}</Badge>}
      </h1>
      <PreviewShell
        language={lesson.course.language}
        backHref={`/library/${courseId}`}
        sections={lesson.sections}
        initialSectionId={typeof section === "string" ? section : null}
      />
    </div>
  );
}
