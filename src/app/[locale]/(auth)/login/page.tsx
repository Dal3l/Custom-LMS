import { getTranslations, setRequestLocale } from "next-intl/server";
import { AuthCard } from "@/components/auth/auth-card";
import { GoogleButton, OrDivider } from "@/components/auth/google-button";
import { LoginForm } from "@/components/auth/login-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { redirectIfSignedIn } from "@/features/auth/guest-only";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { safeNextPath } from "@/lib/redirect";

export default async function LoginPage({ params, searchParams }: PageProps<"/[locale]/login">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  await redirectIfSignedIn(locale);
  const { error, next } = await searchParams;
  const t = await getTranslations();
  const safeNext = safeNextPath(typeof next === "string" ? next : undefined, "");

  return (
    <AuthCard
      title={t("auth.loginTitle")}
      subtitle={t("auth.loginSubtitle")}
      footer={
        <>
          {t("auth.noAccount")}&nbsp;
          <Link href="/signup" className="font-medium text-primary hover:underline">
            {t("auth.toSignup")}
          </Link>
        </>
      }
    >
      {error === "link" && (
        <Alert>
          <AlertDescription>{t("authErrors.linkInvalid")}</AlertDescription>
        </Alert>
      )}
      <GoogleButton />
      <OrDivider />
      <LoginForm next={safeNext || undefined} />
    </AuthCard>
  );
}
