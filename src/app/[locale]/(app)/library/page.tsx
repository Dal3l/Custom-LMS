import { BookOpen, Library } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CourseCard } from "@/components/courses/course-card";
import { CreateCourseDialog } from "@/components/courses/create-course-dialog";
import { sortedLanguages } from "@/features/courses/languages";
import { listLibraryCourses, listMyCourses } from "@/features/courses/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";
import { cn } from "@/lib/utils";

/**
 * The teacher's library: "My materials" (their own courses, the course builder)
 * and "Ready-made courses" (courses LinguaRoom prepared for everyone).
 */
export default async function LibraryPage({ params, searchParams }: PageProps<"/[locale]/library">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  const ready = (await searchParams).tab === "ready";
  const t = await getTranslations("library");

  const tab = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
      active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-accent",
    );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{ready ? t("subtitle") : t("mineSubtitle")}</p>
      </div>
      <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={t("tabs")}>
        <Link href="/library" className={tab(!ready)} aria-current={!ready ? "page" : undefined}>
          {t("mine")}
        </Link>
        <Link href="/library?tab=ready" className={tab(ready)} aria-current={ready ? "page" : undefined}>
          {t("ready")}
        </Link>
      </nav>
      {ready ? <ReadyCourses /> : <MyCourses teacherId={profile.id} locale={locale} />}
    </div>
  );
}

async function MyCourses({ teacherId, locale }: { teacherId: string; locale: Locale }) {
  const [t, courses] = await Promise.all([getTranslations("courses"), listMyCourses(teacherId)]);
  const languages = sortedLanguages(locale);
  if (courses.length === 0) {
    return (
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
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <CreateCourseDialog languages={languages} />
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function ReadyCourses() {
  const [t, courses] = await Promise.all([getTranslations("library"), listLibraryCourses()]);
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
          <Library className="size-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">{t("emptyTitle")}</h2>
          <p className="text-muted-foreground">{t("emptyText")}</p>
        </div>
      </div>
    );
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} href={`/library/${course.id}`} />
        </li>
      ))}
    </ul>
  );
}
