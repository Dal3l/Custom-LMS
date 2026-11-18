import { BookA, ChevronLeft, GraduationCap, Repeat, Sparkles, TriangleAlert } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { StudentStats } from "@/components/stats/student-stats";
import { StudentWords } from "@/components/vocabulary/student-words";
import { studentClassStats } from "@/features/stats/queries";
import { sortedLanguages } from "@/features/courses/languages";
import { getClassPage } from "@/features/classes/queries";
import { idSchema } from "@/features/classes/schemas";
import { studentProgress } from "@/features/trainer/progress-queries";
import { listWords, studyLanguages } from "@/features/vocabulary/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

/** The teacher looks at one student of a class: dictionary progress and words. */
export default async function StudentPage({ params }: PageProps<"/[locale]/classes/[classId]/students/[studentId]">) {
  const { locale, classId, studentId } = (await params) as { locale: Locale; classId: string; studentId: string };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  if (!idSchema.safeParse(classId).success || !idSchema.safeParse(studentId).success) notFound();
  const cls = await getClassPage(classId, profile);
  const student = cls?.isTeacher ? cls.students.find((s) => s.id === studentId) : undefined;
  if (!cls || !student) notFound();
  const [t, format, p, words, stats] = await Promise.all([
    getTranslations("studentProgress"),
    getFormatter(),
    studentProgress(studentId),
    listWords(studentId),
    studentClassStats(classId, studentId),
  ]);
  const languages = await studyLanguages(words);
  const now = new Date();

  const tiles = [
    { icon: BookA, value: p.total, label: t("total"), tone: "text-primary" },
    { icon: Sparkles, value: p.learning, label: t("learning"), tone: "text-sky-600" },
    { icon: GraduationCap, value: p.learned, label: t("learned"), tone: "text-emerald-600" },
    { icon: Repeat, value: p.toReview, label: t("toReview"), tone: "text-amber-600" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={`/classes/${classId}?tab=students`}
        className="-mb-3 flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        {cls.name}
      </Link>
      <div>
        <h1 className="text-2xl font-semibold break-words">{student.fullName || t("noName")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <StudentStats stats={stats} />

      <h2 className="-mb-2 text-lg font-semibold">{t("dictionaryTitle")}</h2>

      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label={t("summary")}>
        {tiles.map((tile) => (
          <div key={tile.label} className="flex flex-col items-center rounded-2xl border bg-card p-3 text-center">
            <tile.icon className={`size-5 ${tile.tone}`} aria-hidden="true" />
            <dd className="text-2xl font-semibold tabular-nums">{tile.value}</dd>
            <dt className="text-xs text-muted-foreground">{tile.label}</dt>
          </div>
        ))}
      </dl>

      <section className="flex flex-col gap-2 rounded-2xl border bg-card p-4" aria-label={t("activity")}>
        <h2 className="font-medium">{t("activity")}</h2>
        {p.lastTrainedAt ? (
          <ul className="flex flex-col gap-1 text-sm">
            <li>{t("lastTrained", { when: format.relativeTime(new Date(p.lastTrainedAt), now) })}</li>
            <li>{t("answersThisWeek", { count: p.answersThisWeek })}</li>
            {p.accuracy !== null && <li>{t("accuracy", { percent: p.accuracy })}</li>}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{t("neverTrained")}</p>
        )}
      </section>

      {p.hardWords.length > 0 && (
        <section className="flex flex-col gap-2 rounded-2xl border border-amber-200 bg-amber-50/60 p-4" aria-label={t("hardWords")}>
          <h2 className="flex items-center gap-2 font-medium">
            <TriangleAlert className="size-4 text-amber-600" aria-hidden="true" />
            {t("hardWords")}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {p.hardWords.map((w) => (
              <li key={w.id} className="rounded-full border border-amber-200 bg-card px-3 py-1 text-sm">
                <span className="font-medium">{w.term}</span> — {w.translation} · {t("mistakes", { count: w.mistakes })}
              </li>
            ))}
          </ul>
        </section>
      )}

      <StudentWords
        words={words}
        student={student}
        classId={classId}
        defaultLanguage={languages[0] ?? "en"}
        languages={sortedLanguages(locale)}
      />
    </div>
  );
}
