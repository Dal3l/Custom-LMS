import { Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

export default async function DashboardPage({ params }: PageProps<"/[locale]/dashboard">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const t = await getTranslations("dashboard");
  const firstName = profile.full_name.trim().split(/\s+/)[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">
          {firstName ? t("greeting", { name: firstName }) : t("greetingNoName")}
        </h1>
        <p className="text-muted-foreground">
          {profile.role === "teacher" ? t("teacherIntro") : t("studentIntro")}
        </p>
      </div>
      <Alert>
        <Sparkles aria-hidden="true" />
        <AlertDescription>{t("comingSoonNote")}</AlertDescription>
      </Alert>
    </div>
  );
}
