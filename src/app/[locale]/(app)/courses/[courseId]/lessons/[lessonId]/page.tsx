import { ChevronLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LessonBuilder } from "@/components/builder/lesson-builder";
import { Badge } from "@/components/ui/badge";
import { idSchema } from "@/features/courses/schemas";
import { getBuilderData } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

export default async function LessonBuilderPage({
  params,
  searchParams,
}: PageProps<"/[locale]/courses/[courseId]/lessons/[lessonId]">) {
  const { locale, courseId, lessonId } = (await params) as {
    locale: Locale;
    courseId: string;
    lessonId: string;
  };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success || !idSchema.safeParse(lessonId).success) notFound();

  const data = await getBuilderData(lessonId);
  // Only the owner edits; the lesson must belong to the course in the address.
  if (!data || data.course.id !== courseId || data.course.owner_id !== profile.id) notFound();
  const { section } = await searchParams;
  const t = await getTranslations("courses");

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`/courses/${courseId}`}
        className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        {data.course.title}
      </Link>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{data.module.title}</p>
        <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold">
          {data.lesson.title}
          {data.lesson.is_test && <Badge variant="secondary">{t("testBadge")}</Badge>}
        </h1>
      </div>
      <LessonBuilder
        key={lessonId}
        userId={profile.id}
        lessonId={lessonId}
        initialSections={data.sections}
        initialSectionId={typeof section === "string" ? section : null}
      />
    </div>
  );
}
