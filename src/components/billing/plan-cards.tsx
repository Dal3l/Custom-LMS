"use client";

import { Check } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PERIODS, PLAN_IDS, PLANS, periodPrice, type PaidPlan, type PeriodMonths } from "@/features/billing/plans";

/** The three plans with a period switch (1 / 3 / 6 / 12 months). */
export function PlanCards({ current }: { current?: PaidPlan | null }) {
  const t = useTranslations("billing");
  const format = useFormatter();
  const [months, setMonths] = useState<PeriodMonths>(1);
  const tenge = (n: number) => `${format.number(n, { maximumFractionDigits: 0 })} ₸`;

  return (
    <div className="flex flex-col gap-4">
      <div role="radiogroup" aria-label={t("periodLabel")} className="mx-auto flex flex-wrap justify-center gap-1 rounded-full bg-muted p-1">
        {PERIODS.map((p) => (
          <button
            key={p.months}
            type="button"
            role="radio"
            aria-checked={months === p.months}
            onClick={() => setMonths(p.months)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors",
              months === p.months ? "bg-background font-semibold shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t("months", { count: p.months })}
            {p.discount > 0 && <span className="rounded-full bg-primary/10 px-1.5 text-xs text-primary">−{p.discount}%</span>}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PLAN_IDS.map((plan) => {
          const total = periodPrice(plan, months);
          const perMonth = Math.round(total / months / 10) * 10;
          return (
            <Card key={plan} className={cn("rounded-2xl", plan === "medium" && "ring-2 ring-primary/40")}>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{t(`plans.${plan}`)}</h3>
                  {current === plan ? (
                    <Badge>{t("currentPlan")}</Badge>
                  ) : plan === "medium" ? (
                    <Badge variant="secondary">{t("popular")}</Badge>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground">{t("upToStudents", { count: PLANS[plan].students })}</p>
                <div>
                  <p className="text-3xl font-bold">{tenge(perMonth)}</p>
                  <p className="text-sm text-muted-foreground">
                    {months === 1 ? t("perMonth") : t("perMonthTotal", { total: tenge(total), count: months })}
                  </p>
                </div>
                <ul className="flex flex-col gap-1.5 text-sm">
                  {(["featureCourses", "featureLessons", "featureHomework", "featureVocabulary"] as const).map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {t(f)}
                    </li>
                  ))}
                  <li className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {t("featureAi")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
