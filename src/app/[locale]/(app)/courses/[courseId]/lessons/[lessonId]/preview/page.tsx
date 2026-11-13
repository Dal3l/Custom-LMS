import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PreviewShell } from "@/components/lesson-player/preview-shell";
import { Badge } from "@/components/ui/badge";
import { idSchema } from "@/features/courses/schemas";
import { getStudentLesson } from "@/features/lessons/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";
import { getTranslations } from "next-intl/server";

// "Preview as student": the lesson exactly as a student will see it.
export default async function LessonPreviewPage({
  params,
  searchParams,
}: PageProps<"/[locale]/courses/[courseId]/lessons/[lessonId]/preview">) {
  const { locale, courseId, lessonId } = (await params) as { locale: Locale; courseId: string; lessonId: string };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success || !idSchema.safeParse(lessonId).success) notFound();
  const lesson = await getStudentLesson(lessonId);
  if (!lesson || lesson.course.id !== courseId || lesson.course.owner_id !== profile.id) notFound();
  const { section } = await searchParams;
  const t = await getTranslations("courses");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold">
        {lesson.lesson.title}
        {lesson.lesson.is_test && <Badge variant="secondary">{t("testBadge")}</Badge>}
      </h1>
      <PreviewShell
        editHref={`/courses/${courseId}/lessons/${lessonId}${typeof section === "string" ? `?section=${section}` : ""}`}
        sections={lesson.sections}
        initialSectionId={typeof section === "string" ? section : null}
      />
    </div>
  );
}
