import { getTranslations, setRequestLocale } from "next-intl/server";
import { AuthCard } from "@/components/auth/auth-card";
import { GoogleButton, OrDivider } from "@/components/auth/google-button";
import { SignupForm } from "@/components/auth/signup-form";
import { redirectIfSignedIn } from "@/features/auth/guest-only";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function SignupPage({ params }: PageProps<"/[locale]/signup">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  await redirectIfSignedIn(locale);
  const t = await getTranslations("auth");

  return (
    <AuthCard
      title={t("signupTitle")}
      subtitle={t("signupSubtitle")}
      footer={
        <>
          {t("haveAccount")}&nbsp;
          <Link href="/login" className="font-medium text-primary hover:underline">
            {t("toLogin")}
          </Link>
        </>
      }
    >
      <GoogleButton />
      <OrDivider />
      <SignupForm />
    </AuthCard>
  );
}
