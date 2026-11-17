import { Check, ChevronLeft, CircleDashed, Radio } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HeaderPortal } from "@/components/app-shell/header-portal";
import { CallButton } from "@/components/classes/call-button";
import { ClassLessonControls } from "@/components/classes/class-lesson-controls";
import { StudentClassLesson, TeacherClassLesson } from "@/components/classes/class-lesson-view";
import { LessonPicker } from "@/components/classes/lesson-picker";
import { MakeCurrentBanner } from "@/components/classes/make-current-banner";
import { MyHomeworkView } from "@/components/homework/my-homework";
import { WordAdderProvider } from "@/components/vocabulary/dictionary-tool";
import { Badge } from "@/components/ui/badge";
import { getClassLessonState, listClassMarks } from "@/features/classes/lesson-queries";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import { getClassLessonAnswers, getMyClassAnswers } from "@/features/lessons/answers";
import { HomeworkReview } from "@/components/homework/homework-review";
import { getHomeworkReview, getMyLessonHomeworks, listLessonHomeworks } from "@/features/homework/queries";
import { markHomeworkNotificationsRead } from "@/features/notifications/actions";
import { revealedSolutions } from "@/features/lessons/grade";
import { getStudentLesson } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";
import { cn } from "@/lib/utils";

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
  const [cls, state, lesson, homeworkPart, t, tc, th, savedAnswers] = await Promise.all([
    getClassPage(classId, profile),
    getClassLessonState(classId, lessonId),
    getStudentLesson(lessonId),
    // The lesson's homework part (students: only what was sent to them — RLS).
    getStudentLesson(lessonId, "homework"),
    getTranslations("classLessons"),
    getTranslations("courses"),
    getTranslations("homework"),
    profile.role === "student" ? getMyClassAnswers(classId, lessonId, profile.id) : getClassLessonAnswers(classId, lessonId),
  ]);
  // Students: only lessons opened in this class (RLS too). Teachers: any lesson they can see.
  if (!cls || !lesson || (!state && !cls.isTeacher)) notFound();
  const { section, show, tab, student } = await searchParams;
  const live = state?.status === "live";
  const finished = Boolean(state?.finishedAt);
  const revealed = state?.revealed ?? [];
  const exerciseIds = lesson.sections.flatMap((s) => s.exercises.map((e) => e.id));
  // Access to this lesson in the class is confirmed above (RLS + class lesson).
  const [solutions, marks, sentHomeworks, myHomeworks] = await Promise.all([
    revealedSolutions(lessonId, revealed),
    listClassMarks(classId, exerciseIds),
    cls.isTeacher && state ? listLessonHomeworks(classId, lessonId) : Promise.resolve([]),
    cls.isTeacher ? Promise.resolve([]) : getMyLessonHomeworks(classId, lessonId, profile.id),
  ]);
  const showHomework = !cls.isTeacher && myHomeworks.length > 0 && tab === "homework";
  // The teacher: the lesson's homework (one per lesson) and whose answers to show.
  const sentHomework = sentHomeworks[0];
  const teacherHomework = cls.isTeacher && sentHomework && tab === "homework";
  let review = null;
  if (teacherHomework) {
    const chosen = typeof student === "string" && sentHomework.studentIds.includes(student) ? student : null;
    const first = await getHomeworkReview(sentHomework.id, chosen ?? sentHomework.studentIds[0]!);
    // Without a choice: the first one who handed in and waits for a check.
    const waiting = first?.students.find((s) => s.submitted && !s.reviewed);
    review = !chosen && waiting && waiting.id !== first?.studentId ? await getHomeworkReview(sentHomework.id, waiting.id) : first;
    if (review) await markHomeworkNotificationsRead([review.id], review.studentId);
  }
  // Seen now: the notifications about this homework (new, comment, reviewed).
  if (showHomework) await markHomeworkNotificationsRead(myHomeworks.map((h) => h.id), profile.id);
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

      {/* Homework from this lesson (sent / received): "Lesson" and "Homework" tabs. */}
      {(cls.isTeacher ? Boolean(sentHomework) : myHomeworks.length > 0) && (
        <nav className="flex gap-1 self-start rounded-lg bg-muted p-1" aria-label={th("tabs")}>
          {(["lesson", "homework"] as const).map((key) => {
            const current = (key === "homework") === (showHomework || Boolean(teacherHomework));
            return (
              <Link
                key={key}
                href={`/classes/${classId}/lessons/${lessonId}${key === "homework" ? "?tab=homework" : ""}`}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium",
                  current ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {key === "lesson" ? th("lessonTab") : th("homeworkTab")}
                {key === "homework" && !cls.isTeacher && myHomeworks.some((h) => h.status !== "submitted") && (
                  <span className="ml-1.5 inline-block size-2 rounded-full bg-primary align-middle" aria-hidden="true" />
                )}
                {key === "homework" && cls.isTeacher && (sentHomework?.toCheck ?? 0) > 0 && (
                  <span
                    className="ml-1.5 rounded-full bg-violet-600 px-1.5 text-xs text-white tabular-nums"
                    aria-label={th("toCheckCount", { count: sentHomework!.toCheck })}
                  >
                    {sentHomework!.toCheck}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      )}

      {teacherHomework && review ? (
        <HomeworkReview
          review={review}
          withTitle={false}
          stay
          studentHref={(id) => `/classes/${classId}/lessons/${lessonId}?tab=homework&student=${id}`}
        />
      ) : cls.isTeacher ? (
        <TeacherClassLesson
          {...common}
          students={cls.students}
          initialAnswers={savedAnswers as Awaited<ReturnType<typeof getClassLessonAnswers>>}
          homework={{
            sections: homeworkPart?.sections ?? [],
            sent: sentHomeworks,
            answersHref: sentHomework ? `/classes/${classId}/lessons/${lessonId}?tab=homework` : null,
            builderHref:
              lesson.course.owner_id === profile.id ? `/courses/${lesson.course.id}/lessons/${lessonId}?part=homework` : null,
          }}
        />
      ) : showHomework ? (
        // Words selected in the homework get a translation and "+" too.
        <WordAdderProvider place={{ language: lesson.course.language, courseId: lesson.course.id, lessonId, classId }}>
          <MyHomeworkView
            classId={classId}
            userId={profile.id}
            language={lesson.course.language}
            sections={homeworkPart?.sections ?? []}
            homeworks={myHomeworks}
          />
        </WordAdderProvider>
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
