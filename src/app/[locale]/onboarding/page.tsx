import { getTranslations, setRequestLocale } from "next-intl/server";
import { OnboardingForm } from "@/components/auth/onboarding-form";
import { AuthCard } from "@/components/auth/auth-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getProfile, getUser } from "@/lib/auth";

// Shown once to users without a role (for example after the first Google sign-in).
export default async function OnboardingPage({ params }: PageProps<"/[locale]/onboarding">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  if (!(await getUser())) redirect({ href: "/login", locale });
  const profile = await getProfile();
  if (profile?.role) redirect({ href: "/dashboard", locale });
  const t = await getTranslations("onboarding");

  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <LanguageSwitcher signedIn />
      </header>
      <main className="flex flex-1 items-start justify-center px-4 pt-4 pb-12 sm:items-center sm:pt-0">
        <div className="w-full max-w-lg">
          <AuthCard title={t("title")} subtitle={t("subtitle")}>
            <OnboardingForm />
          </AuthCard>
        </div>
      </main>
    </div>
  );
}
