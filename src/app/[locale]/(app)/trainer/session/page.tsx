import { setRequestLocale } from "next-intl/server";
import { TrainerSession } from "@/components/trainer/trainer-session";
import { buildSession } from "@/features/trainer/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

/** One trainer session: the words due now (or learned words, for practice). */
export default async function TrainerSessionPage({ params, searchParams }: PageProps<"/[locale]/trainer/session">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "student");
  const kind = (await searchParams).kind === "learned" ? "learned" : "due";
  const items = await buildSession(profile.id, kind);
  // A new set of words (after "Again") starts a fresh session.
  return <TrainerSession key={items.map((i) => i.id).join()} items={items} kind={kind} />;
}
