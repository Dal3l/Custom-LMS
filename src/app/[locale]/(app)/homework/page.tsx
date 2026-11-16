import { Archive, ClipboardList } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { HomeworkStatusBadge } from "@/components/homework/status-badge";
import { listMyHomeworks, listTeacherHomeworks } from "@/features/homework/queries";
import { isArchived } from "@/features/homework/status";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";
import { cn } from "@/lib/utils";

type Filters = { archive: boolean; classId: string | null };
type Classes = { id: string; name: string }[];

/**
 * Homework from all classes. Students: things to do first. Teachers: every
 * student's work, handed-in work to check first. Work checked a week ago (or
 * never handed in for a month) moves to the archive tab; nothing is deleted.
 */
export default async function HomeworkPage({ params, searchParams }: PageProps<"/[locale]/homework">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const query = await searchParams;
  const filters: Filters = {
    archive: query.view === "archive",
    classId: typeof query.class === "string" ? query.class : null,
  };
  return profile.role === "teacher" ? <TeacherHomework filters={filters} /> : <StudentHomework studentId={profile.id} filters={filters} />;
}

function classesOf(items: { classId: string; className: string }[]): Classes {
  const map = new Map(items.map((i) => [i.classId, i.className]));
  return [...map].map(([id, name]) => ({ id, name })).sort((a, b) => a.name.localeCompare(b.name));
}

function pick<T extends { classId: string; status: Parameters<typeof isArchived>[0]["status"]; createdAt: string; reviewedAt: string | null }>(
  items: T[],
  filters: Filters,
) {
  const now = Date.now();
  const shown = items.filter((i) => isArchived(i, now) === filters.archive && (!filters.classId || i.classId === filters.classId));
  // The archive: newest first.
  return filters.archive ? shown.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : shown;
}

async function FilterBar({ filters, classes }: { filters: Filters; classes: Classes }) {
  const t = await getTranslations("homework");
  const href = (next: Partial<Filters>) => {
    const f = { ...filters, ...next };
    const q = new URLSearchParams();
    if (f.archive) q.set("view", "archive");
    if (f.classId) q.set("class", f.classId);
    const s = q.toString();
    return `/homework${s ? `?${s}` : ""}`;
  };
  const chip = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-3 py-1 text-sm transition-colors",
      active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-accent",
    );
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex gap-2" aria-label={t("listViews")}>
        <Link href={href({ archive: false })} className={chip(!filters.archive)} aria-current={!filters.archive ? "page" : undefined}>
          {t("current")}
        </Link>
        <Link href={href({ archive: true })} className={cn(chip(filters.archive), "flex items-center gap-1.5")} aria-current={filters.archive ? "page" : undefined}>
          <Archive className="size-3.5" aria-hidden="true" />
          {t("archive")}
        </Link>
      </nav>
      {classes.length > 1 && (
        <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={t("byClass")}>
          <Link href={href({ classId: null })} className={chip(!filters.classId)} aria-current={!filters.classId ? "page" : undefined}>
            {t("allClasses")}
          </Link>
          {classes.map((c) => (
            <Link key={c.id} href={href({ classId: c.id })} className={chip(filters.classId === c.id)} aria-current={filters.classId === c.id ? "page" : undefined}>
              {c.name}
            </Link>
          ))}
        </nav>
      )}
      {filters.archive && <p className="text-sm text-muted-foreground">{t("archiveHint")}</p>}
    </div>
  );
}

function Empty({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
        <ClipboardList className="size-6" aria-hidden="true" />
      </span>
      <h2 className="font-medium">{title}</h2>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

async function StudentHomework({ studentId, filters }: { studentId: string; filters: Filters }) {
  const [t, format, all] = await Promise.all([getTranslations("homework"), getFormatter(), listMyHomeworks(studentId)]);
  const items = pick(all, filters);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      {all.length > 0 && <FilterBar filters={filters} classes={classesOf(all)} />}
      {items.length === 0 ? (
        filters.archive ? (
          <Empty title={t("archiveEmptyTitle")} text={t("archiveEmptyText")} />
        ) : (
          <Empty title={t("emptyTitle")} text={t("emptyText")} />
        )
      ) : (
        <ul className="flex flex-col gap-2" aria-label={t("title")}>
          {items.map((h) => (
            <li key={h.id}>
              <Link
                href={`/classes/${h.classId}/lessons/${h.lessonId}?tab=homework`}
                className="flex flex-col gap-1 rounded-2xl border bg-card p-3 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="font-medium break-words">{h.lessonTitle}</span>
                  <span className="text-sm text-muted-foreground">
                    {h.className} · {t("answeredOf", { done: h.answered, total: h.total })}
                    {h.dueAt && ` · ${t("dueOn", { date: format.dateTime(new Date(h.dueAt), { dateStyle: "medium", timeStyle: "short" }) })}`}
                  </span>
                </span>
                <HomeworkStatusBadge status={h.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

async function TeacherHomework({ filters }: { filters: Filters }) {
  const [t, format, all] = await Promise.all([getTranslations("homework"), getFormatter(), listTeacherHomeworks()]);
  const items = pick(all, filters);
  const date = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "medium", timeStyle: "short" });
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("teacherSubtitle")}</p>
      </div>
      {all.length > 0 && <FilterBar filters={filters} classes={classesOf(all)} />}
      {items.length === 0 ? (
        filters.archive ? (
          <Empty title={t("archiveEmptyTitle")} text={t("archiveEmptyText")} />
        ) : (
          <Empty title={t("emptyTitle")} text={t("teacherEmptyText")} />
        )
      ) : (
        <ul className="flex flex-col gap-2" aria-label={t("title")}>
          {items.map((h) => (
            <li key={`${h.homeworkId}-${h.studentId}`}>
              <Link
                href={`/homework/${h.homeworkId}/${h.studentId}`}
                aria-label={`${t("openAnswers")}: ${h.studentName || t("noName")}, ${h.lessonTitle}`}
                className="flex flex-col gap-1 rounded-2xl border bg-card p-3 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="font-medium break-words">
                    {h.studentName || t("noName")} · {h.lessonTitle}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {h.className} · {t("answeredOf", { done: h.answered, total: h.total })}
                    {h.submittedAt ? ` · ${t("handedInOn", { date: date(h.submittedAt) })}` : h.dueAt && ` · ${t("dueOn", { date: date(h.dueAt) })}`}
                  </span>
                </span>
                <HomeworkStatusBadge status={h.status} forTeacher />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
