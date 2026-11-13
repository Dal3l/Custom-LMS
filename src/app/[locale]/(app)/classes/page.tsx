import { Users } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ClassCard } from "@/components/classes/class-card";
import { CreateClassDialog } from "@/components/classes/create-class-dialog";
import { listClasses } from "@/features/classes/queries";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

export default async function ClassesPage({ params }: PageProps<"/[locale]/classes">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const [t, classes] = await Promise.all([getTranslations("classes"), listClasses(profile)]);
  const isTeacher = profile.role === "teacher";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground">{isTeacher ? t("subtitle") : t("studentSubtitle")}</p>
        </div>
        {isTeacher && classes.length > 0 && <CreateClassDialog />}
      </div>

      {classes.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <Users className="size-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium">{isTeacher ? t("emptyTitle") : t("studentEmptyTitle")}</h2>
            <p className="text-muted-foreground">{isTeacher ? t("emptyText") : t("studentEmptyText")}</p>
          </div>
          {isTeacher && <CreateClassDialog size="lg" />}
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <li key={c.id}>
              <ClassCard item={c} isTeacher={isTeacher} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
