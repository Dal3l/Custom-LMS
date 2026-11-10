import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/app-shell/coming-soon";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

export default async function Page({ params }: PageProps<"/[locale]/schedule">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  await requireProfile(locale);
  return <ComingSoon section="schedule" />;
}
