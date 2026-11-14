import { ChevronLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CourseHeader } from "@/components/courses/course-header";
import { CourseOutline } from "@/components/courses/course-outline";
import { sortedLanguages } from "@/features/courses/languages";
import { idSchema } from "@/features/courses/schemas";
import { getCourseTree } from "@/features/courses/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

export default async function CoursePage({ params }: PageProps<"/[locale]/courses/[courseId]">) {
  const { locale, courseId } = (await params) as { locale: Locale; courseId: string };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success) notFound();
  const tree = await getCourseTree(courseId);
  // Library courses are read-only (/library/…); only owners edit here.
  if (!tree || tree.course.owner_id !== profile.id) notFound();
  const t = await getTranslations("courses");

  const outline = tree.modules.map((m) => ({
    id: m.id,
    title: m.title,
    lessons: m.lessons.map((l) => ({ id: l.id, title: l.title, is_test: l.is_test })),
  }));

  return (
    <div className="flex flex-col gap-6">
      <Link href="/courses" className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="size-4" aria-hidden="true" />
        {t("backToCourses")}
      </Link>
      <CourseHeader
        course={tree.course}
        userId={profile.id}
        languages={sortedLanguages(locale)}
        isAdmin={profile.is_admin}
      />
      <CourseOutline courseId={courseId} initial={outline} />
    </div>
  );
}
