import { BookA, CalendarDays, ClipboardCheck, ClipboardList, Video } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { ChatRows, Empty, LessonRows, Section, whenFormatter } from "@/components/dashboard/dashboard-parts";
import { HomeworkStatusBadge } from "@/components/homework/status-badge";
import { Button } from "@/components/ui/button";
import { studentDashboard, teacherDashboard } from "@/features/dashboard/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile, type ProfileWithRole } from "@/lib/auth";
import { isValidTimeZone } from "@/lib/timezones";

const SHOW = 5;

export default async function DashboardPage({ params }: PageProps<"/[locale]/dashboard">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const t = await getTranslations("dashboard");
  const firstName = profile.full_name.trim().split(/\s+/)[0];
  const timeZone = isValidTimeZone(profile.timezone) ? profile.timezone : "UTC";

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">{firstName ? t("greeting", { name: firstName }) : t("greetingNoName")}</h1>
      {profile.role === "teacher" ? (
        <TeacherHome profile={profile} timeZone={timeZone} />
      ) : (
        <StudentHome profile={profile} timeZone={timeZone} />
      )}
    </div>
  );
}

async function TeacherHome({ profile, timeZone }: { profile: ProfileWithRole; timeZone: string }) {
  const [t, format, data] = await Promise.all([getTranslations("dashboard"), getFormatter(), teacherDashboard(profile)]);
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Section title={t("upcoming")} icon={CalendarDays} allHref="/schedule" allLabel={t("schedule")}>
        {data.upcoming.length === 0 ? <Empty>{t("noLessonsWeek")}</Empty> : <LessonRows lessons={data.upcoming} timeZone={timeZone} />}
      </Section>
      <Section title={t("toCheck")} icon={ClipboardCheck} count={data.toCheck.length} allHref="/homework" allLabel={t("allHomework")}>
        {data.toCheck.length === 0 ? (
          <Empty>{t("allChecked")}</Empty>
        ) : (
          <ul className="flex flex-col gap-1">
            {data.toCheck.slice(0, SHOW).map((h) => (
              <li key={`${h.homeworkId}|${h.studentId}`}>
                <Link
                  href={`/homework/${h.homeworkId}/${h.studentId}`}
                  className="flex flex-col rounded-xl p-2 transition-colors hover:bg-accent"
                >
                  <span className="font-medium break-words">{h.studentName}</span>
                  <span className="text-sm text-muted-foreground break-words">
                    {h.lessonTitle} · {h.className}
                    {h.submittedAt &&
                      ` · ${t("handedIn", { date: format.dateTime(new Date(h.submittedAt), { day: "numeric", month: "short", timeZone }) })}`}
                  </span>
                </Link>
              </li>
            ))}
            {data.toCheck.length > SHOW && <Empty>{t("more", { count: data.toCheck.length - SHOW })}</Empty>}
          </ul>
        )}
      </Section>
      <ChatRows chats={data.chats} />
    </div>
  );
}

async function StudentHome({ profile, timeZone }: { profile: ProfileWithRole; timeZone: string }) {
  const [t, format, when, data] = await Promise.all([
    getTranslations("dashboard"),
    getFormatter(),
    whenFormatter(timeZone),
    studentDashboard(profile),
  ]);
  const next = data.upcoming[0];
  const words = data.vocabulary;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Section title={t("nextLesson")} icon={CalendarDays} allHref="/schedule" allLabel={t("schedule")}>
        {!next ? (
          <Empty>{t("noLessons")}</Empty>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="flex flex-col">
              <span className="text-xl font-semibold first-letter:uppercase">
                {when(next).day}, <span className="tabular-nums">{when(next).time}</span>
              </span>
              <span className="text-muted-foreground break-words">{next.className}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={next.href}>{t("openClass")}</Link>
              </Button>
              {next.callUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={next.callUrl} target="_blank" rel="noopener noreferrer">
                    <Video aria-hidden="true" />
                    {t("call")}
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </Section>
      <Section title={t("homework")} icon={ClipboardList} count={data.homework.length} allHref="/homework" allLabel={t("allHomework")}>
        {data.homework.length === 0 ? (
          <Empty>{t("homeworkDone")}</Empty>
        ) : (
          <ul className="flex flex-col gap-1">
            {data.homework.slice(0, SHOW).map((h) => (
              <li key={h.id}>
                <Link
                  href={`/classes/${h.classId}/lessons/${h.lessonId}?tab=homework`}
                  className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
                >
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-medium break-words">{h.lessonTitle}</span>
                    <span className="text-sm text-muted-foreground">
                      {h.className}
                      {h.dueAt &&
                        ` · ${t("due", { date: format.dateTime(new Date(h.dueAt), { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone }) })}`}
                    </span>
                  </span>
                  <HomeworkStatusBadge status={h.status} />
                </Link>
              </li>
            ))}
            {data.homework.length > SHOW && <Empty>{t("more", { count: data.homework.length - SHOW })}</Empty>}
          </ul>
        )}
      </Section>
      <Section title={t("words")} icon={BookA} allHref="/vocabulary" allLabel={t("dictionary")}>
        {words.total === 0 ? (
          <Empty>{t("noWords")}</Empty>
        ) : (
          <div className="flex flex-col gap-3">
            <dl className="grid grid-cols-3 gap-2 text-center">
              {[
                {
                  label: t("wordsToReview"),
                  value: words.toReview,
                  strong: words.toReview > 0,
                },
                {
                  label: t("wordsLearning"),
                  value: words.learning,
                  strong: false,
                },
                {
                  label: t("wordsLearned"),
                  value: words.learned,
                  strong: false,
                },
              ].map((x) => (
                <div key={x.label} className="flex flex-col rounded-xl bg-muted/50 p-2">
                  <dd className={x.strong ? "text-xl font-semibold text-primary tabular-nums" : "text-xl font-semibold tabular-nums"}>
                    {x.value}
                  </dd>
                  <dt className="text-xs text-muted-foreground">{x.label}</dt>
                </div>
              ))}
            </dl>
            <Button asChild size="sm" className="self-start" variant={words.toReview > 0 ? "default" : "outline"}>
              <Link href="/vocabulary">{words.toReview > 0 ? t("reviewWords") : t("learnWords")}</Link>
            </Button>
          </div>
        )}
      </Section>
      <ChatRows chats={data.chats} />
    </div>
  );
}
