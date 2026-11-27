import { CreditCard, MessageCircle } from "lucide-react";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { PlanCards } from "@/components/billing/plan-cards";
import { PromoForm } from "@/components/billing/promo-form";
import { CopyButton } from "@/components/classes/copy-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { countMyStudents, getMyTeacherAccess } from "@/features/billing/access";
import { PAYMENT_PHONE, PAYMENT_WHATSAPP, studentLimit } from "@/features/billing/plans";
import type { Locale } from "@/i18n/routing";
import { getUser, requireRole } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

export default async function BillingPage({ params }: PageProps<"/[locale]/billing">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  const t = await getTranslations("billing");
  const format = await getFormatter();
  const supabase = await createClient();
  const [access, students, user, { data: sub }] = await Promise.all([
    getMyTeacherAccess(),
    countMyStudents(profile.id),
    getUser(),
    supabase.from("subscriptions").select("promo_code").eq("teacher_id", profile.id).maybeSingle(),
  ]);
  if (!access) return null;
  const date = (iso: string) => format.dateTime(new Date(iso), { day: "numeric", month: "long", year: "numeric" });
  const limit = studentLimit(access);

  let status: string;
  if (access.state === "admin") status = t("statusAdmin");
  else if (access.state === "trial") status = t("statusTrial", { date: date(access.endsAt), count: access.daysLeft });
  else if (access.state === "active") status = t("statusActive", { plan: t(`plans.${access.plan}`), date: date(access.endsAt) });
  else status = t("statusExpired");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-semibold">{t("yourAccess")}</h2>
            <Badge variant={access.state === "expired" ? "destructive" : "secondary"}>{t(`state.${access.state}`)}</Badge>
          </div>
          <p>{status}</p>
          {Number.isFinite(limit) && (
            <p className="text-sm text-muted-foreground">{t("studentsUsed", { count: students, limit })}</p>
          )}
          {!sub?.promo_code && access.state !== "admin" && (
            <div className="flex flex-col gap-2 border-t pt-3">
              <p className="text-sm font-semibold">{t("promoTitle")}</p>
              <PromoForm />
            </div>
          )}
          {sub?.promo_code && <p className="text-sm text-muted-foreground">{t("promoUsed", { code: sub.promo_code })}</p>}
        </CardContent>
      </Card>

      <section className="flex flex-col gap-4">
        <h2 className="text-center text-xl font-semibold">{t("plansTitle")}</h2>
        <PlanCards current={access.state === "active" ? access.plan : null} />
      </section>

      <Card className="rounded-2xl">
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CreditCard className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold">{t("howToPay")}</h2>
          </div>
          <ol className="flex list-decimal flex-col gap-2 pl-5">
            <li>{t("payStep1")}</li>
            <li>
              {t.rich("payStep2", { phone: PAYMENT_PHONE, b: (chunks) => <b className="whitespace-nowrap">{chunks}</b> })}
            </li>
            <li>{t.rich("payStep3", { email: user?.email ?? "", b: (chunks) => <b className="break-all">{chunks}</b> })}</li>
            <li>{t("payStep4")}</li>
          </ol>
          <div className="flex flex-col gap-2 sm:flex-row">
            <CopyButton text={PAYMENT_PHONE.replaceAll(" ", "")} label={t("copyPhone")} variant="outline" />
            <Button asChild variant="outline">
              <a href={PAYMENT_WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                {t("writeWhatsapp")}
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{t("payNote")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
