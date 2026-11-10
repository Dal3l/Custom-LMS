import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProfileForm } from "@/components/profile/profile-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale } from "@/i18n/routing";
import { getUser, requireProfile } from "@/lib/auth";
import { listTimeZones } from "@/lib/timezones";

export default async function ProfilePage({ params, searchParams }: PageProps<"/[locale]/profile">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const user = await getUser();
  const { saved } = await searchParams;
  const t = await getTranslations();

  return (
    <div className="flex max-w-xl flex-col gap-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">{t("profile.title")}</CardTitle>
          <CardDescription>{t("profile.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm
            email={user?.email ?? ""}
            roleLabel={t(`roles.${profile.role}`)}
            fullName={profile.full_name}
            locale={profile.locale}
            timezone={profile.timezone}
            timeZones={listTimeZones()}
            justSaved={saved === "1"}
          />
        </CardContent>
      </Card>
    </div>
  );
}
