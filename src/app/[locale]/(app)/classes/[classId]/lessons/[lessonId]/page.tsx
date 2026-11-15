import { Check, ChevronLeft, CircleDashed, Radio } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HeaderPortal } from "@/components/app-shell/header-portal";
import { CallButton } from "@/components/classes/call-button";
import { ClassLessonControls } from "@/components/classes/class-lesson-controls";
import { StudentClassLesson, TeacherClassLesson } from "@/components/classes/class-lesson-view";
import { LessonPicker } from "@/components/classes/lesson-picker";
import { MakeCurrentBanner } from "@/components/classes/make-current-banner";
import { Badge } from "@/components/ui/badge";
import { getClassLessonState, listClassMarks } from "@/features/classes/lesson-queries";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import { getClassLessonAnswers, getMyClassAnswers } from "@/features/lessons/answers";
import { revealedSolutions } from "@/features/lessons/grade";
import { getStudentLesson } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

/**
 * A lesson in a class. Students see only lessons opened in the class. The
 * teacher may open any lesson they can use, to look ahead; it opens for the
 * class only when they press "Make it current".
 */
export default async function ClassLessonPage({
  params,
  searchParams,
}: PageProps<"/[locale]/classes/[classId]/lessons/[lessonId]">) {
  const { locale, classId, lessonId } = (await params) as { locale: Locale; classId: string; lessonId: string };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (!idSchema.safeParse(classId).success || !idSchema.safeParse(lessonId).success) notFound();
  const [cls, state, lesson, t, tc, savedAnswers] = await Promise.all([
    getClassPage(classId, profile),
    getClassLessonState(classId, lessonId),
    getStudentLesson(lessonId),
    getTranslations("classLessons"),
    getTranslations("courses"),
    profile.role === "student" ? getMyClassAnswers(classId, lessonId, profile.id) : getClassLessonAnswers(classId, lessonId),
  ]);
  // Students: only lessons opened in this class (RLS too). Teachers: any lesson they can see.
  if (!cls || !lesson || (!state && !cls.isTeacher)) notFound();
  const { section, show } = await searchParams;
  const live = state?.status === "live";
  const finished = Boolean(state?.finishedAt);
  const revealed = state?.revealed ?? [];
  const exerciseIds = lesson.sections.flatMap((s) => s.exercises.map((e) => e.id));
  // Access to this lesson in the class is confirmed above (RLS + class lesson).
  const [solutions, marks] = await Promise.all([
    revealedSolutions(lessonId, revealed),
    listClassMarks(classId, exerciseIds),
  ]);
  const common = {
    classId,
    lessonId,
    courseId: lesson.course.id,
    language: lesson.course.language,
    sections: lesson.sections,
    initialSectionId: typeof section === "string" ? section : null,
    doneSections: state?.doneSections ?? [],
    finished,
    revealed,
    timerEndsAt: state?.timerEndsAt ?? null,
    inClass: Boolean(state),
    solutions,
    marks,
    userId: profile.id,
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Title and buttons live in the app's top bar, leaving the page for the lesson. */}
      <HeaderPortal>
        <Link
          href={`/classes/${classId}`}
          className="flex shrink-0 items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground"
          aria-label={t("backToClass", { name: cls.name })}
          title={cls.name}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          <span className="max-w-28 truncate max-md:sr-only">{cls.name}</span>
        </Link>
        <h1 className="min-w-0 truncate text-base font-semibold sm:text-lg" title={lesson.lesson.title}>
          {lesson.lesson.title}
        </h1>
        {live && (
          <Badge className="shrink-0 max-sm:hidden">
            <Radio aria-hidden="true" />
            {t("live")}
          </Badge>
        )}
        <div className="ml-auto flex shrink-0 items-center gap-1">
          {cls.call_url && <CallButton url={cls.call_url} size="sm" compact />}
          {cls.isTeacher && (
            <>
              <LessonPicker
                classId={classId}
                courseId={lesson.course.id}
                label={t("courseLessons")}
                variant="outline"
                size="sm"
                icon="list"
                compact
              />
              {state && <ClassLessonControls classId={classId} lessonId={lessonId} finished={finished} />}
            </>
          )}
        </div>
      </HeaderPortal>

      {cls.isTeacher && !live && <MakeCurrentBanner classId={classId} lessonId={lessonId} />}
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {live && (
          <Badge className="sm:hidden">
            <Radio aria-hidden="true" />
            {t("live")}
          </Badge>
        )}
        {lesson.lesson.is_test && <Badge variant="secondary">{tc("testBadge")}</Badge>}
        {finished ? (
          <Badge variant="secondary">
            <Check aria-hidden="true" />
            {t("done")}
          </Badge>
        ) : (
          state &&
          !live && (
            <Badge variant="outline">
              <CircleDashed aria-hidden="true" />
              {t("notFinished")}
            </Badge>
          )
        )}
        <span>{lesson.course.title}</span>
      </div>

      {cls.isTeacher ? (
        <TeacherClassLesson
          {...common}
          students={cls.students}
          initialAnswers={savedAnswers as Awaited<ReturnType<typeof getClassLessonAnswers>>}
        />
      ) : (
        <StudentClassLesson
          {...common}
          savedAnswers={savedAnswers as Awaited<ReturnType<typeof getMyClassAnswers>>}
          initialShow={typeof show === "string" ? show : null}
          teacherId={cls.teacherId}
        />
      )}
    </div>
  );
}
