import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

/** The teacher's courses now live in the Library ("My materials"). */
export default async function CoursesPage({ params }: PageProps<"/[locale]/courses">) {
  const { locale } = (await params) as { locale: Locale };
  redirect({ href: "/library", locale });
}
