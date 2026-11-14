import { ChevronLeft, ClipboardCheck, Eye, FileText } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CopyCourseButton } from "@/components/courses/copy-course-button";
import { CourseCover } from "@/components/courses/course-cover";
import { Badge } from "@/components/ui/badge";
import { languageName } from "@/features/courses/languages";
import { getCourseTree } from "@/features/courses/queries";
import { idSchema } from "@/features/courses/schemas";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

/** A library course: read-only outline, lesson previews, "Copy to my courses". */
export default async function LibraryCoursePage({ params }: PageProps<"/[locale]/library/[courseId]">) {
  const { locale, courseId } = (await params) as { locale: Locale; courseId: string };
  setRequestLocale(locale);
  await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success) notFound();
  const tree = await getCourseTree(courseId);
  if (!tree || !tree.course.is_library || !tree.course.is_published) notFound();
  const [t, tc, uiLocale] = await Promise.all([getTranslations("library"), getTranslations("courses"), getLocale()]);
  const { course } = tree;

  return (
    <div className="flex flex-col gap-6">
      <Link href="/library" className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="size-4" aria-hidden="true" />
        {t("backToLibrary")}
      </Link>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <CourseCover
          path={course.cover_path}
          language={course.language}
          className="w-full sm:w-56 sm:shrink-0"
          sizes="(min-width: 640px) 14rem, 100vw"
          priority
        />
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <h1 className="text-2xl font-semibold break-words">{course.title}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{languageName(course.language, uiLocale)}</Badge>
            {course.level && <Badge variant="outline">{course.level}</Badge>}
          </div>
          {course.description && <p className="whitespace-pre-line text-muted-foreground">{course.description}</p>}
          <CopyCourseButton courseId={course.id} />
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {tree.modules.map((m) => (
          <section key={m.id} className="flex flex-col gap-2 rounded-2xl border p-3">
            <h2 className="px-1 font-semibold">{m.title}</h2>
            {m.lessons.length === 0 ? (
              <p className="px-1 text-sm text-muted-foreground">{tc("noLessons")}</p>
            ) : (
              <ul className="flex flex-col gap-1">
                {m.lessons.map((l) => (
                  <li key={l.id}>
                    <Link
                      href={`/library/${course.id}/lessons/${l.id}`}
                      className="flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 hover:bg-accent"
                    >
                      {l.is_test ? (
                        <ClipboardCheck className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      ) : (
                        <FileText className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      )}
                      <span className="min-w-0 flex-1 break-words">{l.title}</span>
                      {l.is_test && <Badge variant="secondary">{tc("testBadge")}</Badge>}
                      <Eye className="size-4 shrink-0 text-muted-foreground" aria-label={t("preview")} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
