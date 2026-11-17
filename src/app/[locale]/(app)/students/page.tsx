import { setRequestLocale } from "next-intl/server";
import { StudentsDirectory } from "@/components/students/students-directory";
import { listMyStudents } from "@/features/students/queries";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";
import { listTimeZones } from "@/lib/timezones";

/** The teacher's students from all classes: add a student, put them into a class. */
export default async function StudentsPage({ params }: PageProps<"/[locale]/students">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  const { students, classes } = await listMyStudents(profile.id);
  return <StudentsDirectory students={students} classes={classes} timeZones={listTimeZones()} defaultTimeZone={profile.timezone} />;
}
