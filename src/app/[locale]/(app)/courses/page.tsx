import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/app-shell/coming-soon";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

export default async function Page({ params }: PageProps<"/[locale]/courses">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  await requireRole(locale, "teacher");
  return <ComingSoon section="courses" />;
}
