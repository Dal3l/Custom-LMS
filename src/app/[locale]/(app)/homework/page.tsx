import { ClipboardList } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/app-shell/coming-soon";
import { HomeworkStatusBadge } from "@/components/homework/status-badge";
import { listMyHomeworks } from "@/features/homework/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

/** Students: every homework from every class, things to do first. (Teachers: step 3.3.) */
export default async function HomeworkPage({ params }: PageProps<"/[locale]/homework">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (profile.role === "teacher") return <ComingSoon section="homework" />;
  const [t, format, items] = await Promise.all([getTranslations("homework"), getFormatter(), listMyHomeworks(profile.id)]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <ClipboardList className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-medium">{t("emptyTitle")}</h2>
          <p className="text-muted-foreground">{t("emptyText")}</p>
        </div>
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
