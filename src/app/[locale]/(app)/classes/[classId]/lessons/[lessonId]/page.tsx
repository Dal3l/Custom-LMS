import { Check, ChevronLeft, Radio } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CallButton } from "@/components/classes/call-button";
import { ClassLessonControls } from "@/components/classes/class-lesson-controls";
import { LessonPicker } from "@/components/classes/lesson-picker";
import { LessonPlayer } from "@/components/lesson-player/lesson-player";
import { Badge } from "@/components/ui/badge";
import { getClassLessonStatus } from "@/features/classes/lesson-queries";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import { getStudentLesson } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

/** A lesson opened in a class, for the teacher and the class's students. */
export default async function ClassLessonPage({
  params,
  searchParams,
}: PageProps<"/[locale]/classes/[classId]/lessons/[lessonId]">) {
  const { locale, classId, lessonId } = (await params) as { locale: Locale; classId: string; lessonId: string };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (!idSchema.safeParse(classId).success || !idSchema.safeParse(lessonId).success) notFound();
  const [cls, status, lesson, t, tc] = await Promise.all([
    getClassPage(classId, profile),
    getClassLessonStatus(classId, lessonId),
    getStudentLesson(lessonId),
    getTranslations("classLessons"),
    getTranslations("courses"),
  ]);
  // Only lessons opened in this class; students see nothing else (RLS too).
  if (!cls || !status || !lesson) notFound();
  const { section } = await searchParams;
  const live = status.status === "live";

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <Link
        href={`/classes/${classId}`}
        className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        {cls.name}
      </Link>
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold break-words">
            {lesson.lesson.title}
            {lesson.lesson.is_test && <Badge variant="secondary">{tc("testBadge")}</Badge>}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {live ? (
              <Badge>
                <Radio aria-hidden="true" />
                {t("live")}
              </Badge>
            ) : (
              <Badge variant="secondary">
                <Check aria-hidden="true" />
                {t("done")}
              </Badge>
            )}
            <span>{lesson.course.title}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {cls.call_url && <CallButton url={cls.call_url} />}
          {cls.isTeacher && (
            <ClassLessonControls classId={classId} lessonId={lessonId} live={live} />
          )}
        </div>
      </header>

      <LessonPlayer
        language={lesson.course.language}
        sections={lesson.sections}
        initialSectionId={typeof section === "string" ? section : null}
      />

      {cls.isTeacher && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed p-5 text-center">
          <p className="text-muted-foreground">{t("nextLessonHint")}</p>
          <LessonPicker classId={classId} courseId={lesson.course.id} label={t("nextLesson")} size="lg" />
        </div>
      )}
    </div>
  );
}
