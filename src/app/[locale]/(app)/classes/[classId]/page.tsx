import { BookOpen } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ClassHeader } from "@/components/classes/class-header";
import { InvitePanel } from "@/components/classes/invite-panel";
import { RegisterStudentDialog } from "@/components/classes/register-student-dialog";
import { StudentsList } from "@/components/classes/students-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";
import { getOrigin } from "@/lib/site-url";
import { listTimeZones } from "@/lib/timezones";

export default async function ClassPage({ params }: PageProps<"/[locale]/classes/[classId]">) {
  const { locale, classId } = (await params) as { locale: Locale; classId: string };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (!idSchema.safeParse(classId).success) notFound();
  const [t, cls] = await Promise.all([getTranslations("classes"), getClassPage(classId, profile)]);
  if (!cls) notFound();

  const lessons = (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-12 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
        <BookOpen className="size-6" aria-hidden="true" />
      </span>
      <h2 className="font-medium">{t("noLessonsTitle")}</h2>
      <p className="max-w-md text-muted-foreground">{cls.isTeacher ? t("noLessonsTeacher") : t("noLessonsStudent")}</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <ClassHeader
        cls={{ id: cls.id, name: cls.name, kind: cls.kind, call_url: cls.call_url }}
        isTeacher={cls.isTeacher}
        teacherName={cls.teacherName}
      />
      {cls.isTeacher ? (
        <Tabs defaultValue="lessons" className="gap-4">
          <TabsList>
            <TabsTrigger value="lessons">{t("lessonsTab")}</TabsTrigger>
            <TabsTrigger value="students">
              {t("studentsTab")} · {cls.students.length}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="lessons">{lessons}</TabsContent>
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
            <StudentsList classId={cls.id} students={cls.students} />
          </TabsContent>
        </Tabs>
      ) : (
        lessons
      )}
    </div>
  );
}
