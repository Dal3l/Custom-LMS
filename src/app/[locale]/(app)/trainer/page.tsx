import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

/** The trainer now lives in the Dictionary ("Learn words"); old links lead there. */
export default async function TrainerPage({ params }: PageProps<"/[locale]/trainer">) {
  const { locale } = (await params) as { locale: Locale };
  redirect({ href: "/vocabulary", locale });
}
