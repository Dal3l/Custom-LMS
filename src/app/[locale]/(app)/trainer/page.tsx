import { BookA, Dumbbell, GraduationCap, Repeat, Sparkles } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { getTrainerOverview } from "@/features/trainer/queries";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

/** The trainer's home: how many words to go through today → "Start". */
export default async function TrainerPage({ params }: PageProps<"/[locale]/trainer">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "student");
  const [t, format, o] = await Promise.all([getTranslations("trainer"), getFormatter(), getTrainerOverview(profile.id)]);
  const total = o.newWords + o.learning + o.learned;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      {total === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <BookA className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-medium">{t("noWordsTitle")}</h2>
          <p className="text-muted-foreground">{t("noWordsText")}</p>
          <Button asChild variant="outline">
            <Link href="/vocabulary">{t("toDictionary")}</Link>
          </Button>
        </div>
      ) : (
        <section className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Dumbbell className="size-7" aria-hidden="true" />
          </span>
          {o.dueNow > 0 ? (
            <>
              <p className="text-lg" role="status">
                {t.rich("dueToday", { count: o.dueNow, b: (chunks) => <b className="text-2xl tabular-nums">{chunks}</b> })}
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/trainer/session?kind=due">{t("start")}</Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-lg font-medium" role="status">
                {t("allDone")}
              </p>
              {o.nextDue && (
                <p className="text-muted-foreground">
                  {t("nextDue", { when: format.relativeTime(new Date(o.nextDue), new Date()) })}
                </p>
              )}
            </>
          )}
        </section>
      )}

      {total > 0 && (
        <dl className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl border bg-card p-3">
            <Sparkles className="mx-auto size-5 text-sky-600" aria-hidden="true" />
            <dd className="text-xl font-semibold tabular-nums">{o.newWords}</dd>
            <dt className="text-xs text-muted-foreground">{t("statNew")}</dt>
          </div>
          <div className="rounded-2xl border bg-card p-3">
            <Repeat className="mx-auto size-5 text-amber-600" aria-hidden="true" />
            <dd className="text-xl font-semibold tabular-nums">{o.learning}</dd>
            <dt className="text-xs text-muted-foreground">{t("statLearning")}</dt>
          </div>
          <div className="rounded-2xl border bg-card p-3">
            <GraduationCap className="mx-auto size-5 text-emerald-600" aria-hidden="true" />
            <dd className="text-xl font-semibold tabular-nums">{o.learned}</dd>
            <dt className="text-xs text-muted-foreground">{t("statLearned")}</dt>
          </div>
        </dl>
      )}

      {o.learned > 0 && (
        <Button asChild variant="outline" className="w-full sm:w-auto sm:self-center">
          <Link href="/trainer/session?kind=learned">
            <GraduationCap aria-hidden="true" />
            {t("practiceLearned")}
          </Link>
        </Button>
      )}

      {o.noTranslation > 0 && (
        <p className="text-center text-sm text-muted-foreground">
          {t.rich("noTranslation", {
            count: o.noTranslation,
            link: (chunks) => (
              <Link href="/vocabulary" className="text-primary underline underline-offset-2">
                {chunks}
              </Link>
            ),
          })}
        </p>
      )}
    </div>
  );
}
