import { BookOpen } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CourseCard } from "@/components/courses/course-card";
import { CreateCourseDialog } from "@/components/courses/create-course-dialog";
import { sortedLanguages } from "@/features/courses/languages";
import { listMyCourses } from "@/features/courses/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

export default async function CoursesPage({ params }: PageProps<"/[locale]/courses">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  const [t, courses] = await Promise.all([getTranslations("courses"), listMyCourses(profile.id)]);
  const languages = sortedLanguages(locale);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
        {courses.length > 0 && <CreateCourseDialog languages={languages} />}
      </div>

      {courses.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <BookOpen className="size-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium">{t("emptyTitle")}</h2>
            <p className="text-muted-foreground">{t("emptyText")}</p>
          </div>
          <CreateCourseDialog languages={languages} size="lg" />
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
