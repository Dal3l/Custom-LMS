import { setRequestLocale } from "next-intl/server";
import { VocabularyList } from "@/components/vocabulary/vocabulary-list";
import { sortedLanguages } from "@/features/courses/languages";
import { listWords, studyLanguages } from "@/features/vocabulary/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

/** The student's dictionary: words from all classes, search and filters, add / edit / remove. */
export default async function VocabularyPage({ params }: PageProps<"/[locale]/vocabulary">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "student");
  const words = await listWords(profile.id);
  const studied = await studyLanguages(words);
  return <VocabularyList words={words} defaultLanguage={studied[0] ?? "en"} languages={sortedLanguages(locale)} />;
}
