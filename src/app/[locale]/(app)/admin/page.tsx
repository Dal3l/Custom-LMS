import { getTranslations, setRequestLocale } from "next-intl/server";
import { AdminPromoCodes } from "@/components/billing/admin-promo-codes";
import { AdminTeachers } from "@/components/billing/admin-teachers";
import { listPromoCodes, listTeachersForAdmin } from "@/features/billing/admin-queries";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

export default async function AdminPage({ params }: PageProps<"/[locale]/admin">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (!profile.is_admin) return redirect({ href: "/dashboard", locale });
  const t = await getTranslations("admin");
  const [teachers, codes] = await Promise.all([listTeachersForAdmin(), listPromoCodes()]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <AdminTeachers teachers={teachers} />
      <AdminPromoCodes codes={codes} />
    </div>
  );
}
