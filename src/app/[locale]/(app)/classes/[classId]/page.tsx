import { BookOpen, ChevronLeft, Play } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ClassHeader } from "@/components/classes/class-header";
import { ClassLessonsList } from "@/components/classes/class-lessons-list";
import { LessonPicker } from "@/components/classes/lesson-picker";
import { InvitePanel } from "@/components/classes/invite-panel";
import { RegisterStudentDialog } from "@/components/classes/register-student-dialog";
import { ClassSettings } from "@/components/classes/class-settings";
import { StudentsList } from "@/components/classes/students-panel";
import { ClassHomeworkList } from "@/components/homework/class-homework-list";
import { listTeacherHomeworks } from "@/features/homework/queries";
import { vocabularySummaries } from "@/features/trainer/progress-queries";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { listClassLessons } from "@/features/classes/lesson-queries";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";
import { getOrigin } from "@/lib/site-url";
import { listTimeZones } from "@/lib/timezones";

export default async function ClassPage({ params, searchParams }: PageProps<"/[locale]/classes/[classId]">) {
  const { locale, classId } = (await params) as { locale: Locale; classId: string };
  const { tab } = await searchParams;
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (!idSchema.safeParse(classId).success) notFound();
  const [t, tl, cls, classLessons] = await Promise.all([
    getTranslations("classes"),
    getTranslations("classLessons"),
    getClassPage(classId, profile),
    listClassLessons(classId),
  ]);
  if (!cls) notFound();
  const homework = cls.isTeacher ? await listTeacherHomeworks(cls.id) : [];
  // The lesson going on now, else the last one opened: "Continue the lesson".
  const current = classLessons.find((l) => l.status === "live") ?? [...classLessons].sort((a, b) => b.openedAt.localeCompare(a.openedAt))[0];
  const toCheck = homework.filter((h) => h.status === "submitted").length;

  const lessons =
    classLessons.length === 0 ? (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-12 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
          <BookOpen className="size-6" aria-hidden="true" />
        </span>
        <h2 className="font-medium">{t("noLessonsTitle")}</h2>
        <p className="max-w-md text-muted-foreground">{cls.isTeacher ? t("noLessonsTeacher") : t("noLessonsStudent")}</p>
        {cls.isTeacher && <LessonPicker classId={cls.id} label={tl("openLesson")} size="lg" />}
      </div>
    ) : (
      <div className="flex flex-col gap-3">
        {cls.isTeacher && (
          <div className="flex justify-end">
            <LessonPicker classId={cls.id} label={tl("openLesson")} />
          </div>
        )}
        <ClassLessonsList classId={cls.id} lessons={classLessons} />
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      <Link href="/classes" className="-mb-3 flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="size-4" aria-hidden="true" />
        {tl("backToClasses")}
      </Link>
      <ClassHeader
        cls={{ id: cls.id, name: cls.name, kind: cls.kind, call_url: cls.call_url }}
        isTeacher={cls.isTeacher}
        teacherName={cls.teacherName}
      />
      {cls.isTeacher ? (
        <>
          {/* Lessons are switched inside a lesson ("Course lessons"); here: continue or open one. */}
          <div className="flex flex-wrap items-center gap-2">
            {current && (
              <Button asChild size="lg">
                <Link href={`/classes/${cls.id}/lessons/${current.lessonId}`}>
                  <Play aria-hidden="true" />
                  {t("continueLesson", { title: current.title })}
                </Link>
              </Button>
            )}
            <LessonPicker classId={cls.id} label={tl("openLesson")} size={current ? "default" : "lg"} />
          </div>
        <Tabs defaultValue={tab === "homework" || tab === "settings" ? tab : "students"} className="gap-4">
          <TabsList>
            <TabsTrigger value="students">
              {t("studentsTab")} · {cls.students.length}
            </TabsTrigger>
            <TabsTrigger value="homework">
              {t("homeworkTab")}
              {toCheck > 0 && (
                <span className="ml-1 rounded-full bg-violet-600 px-1.5 text-xs text-white tabular-nums" aria-label={t("toCheckCount", { count: toCheck })}>
                  {toCheck}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">{t("settingsTab")}</TabsTrigger>
          </TabsList>
          <TabsContent value="homework">
            <ClassHomeworkList items={homework} />
          </TabsContent>
          <TabsContent value="students" className="flex flex-col gap-4">
            <InvitePanel classId={cls.id} invite={cls.invite} origin={await getOrigin()} />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-medium">{t("studentsTab")}</h2>
              <RegisterStudentDialog
                classId={cls.id}
                timeZones={listTimeZones()}
                defaultTimeZone={profile.timezone}
                disabled={cls.kind === "individual" && cls.students.length > 0}
              />
            </div>
            {cls.kind === "individual" && cls.students.length > 0 && (
              <p className="text-sm text-muted-foreground">{t("individualHint")}</p>
            )}
            <StudentsList classId={cls.id} students={cls.students} vocabulary={await vocabularySummaries(cls.students.map((s) => s.id))} />
          </TabsContent>
          <TabsContent value="settings">
            <ClassSettings cls={{ id: cls.id, name: cls.name, kind: cls.kind, call_url: cls.call_url }} />
          </TabsContent>
        </Tabs>
        </>
      ) : (
        lessons
      )}
    </div>
  );
}
