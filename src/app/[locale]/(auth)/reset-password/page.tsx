import { getTranslations, setRequestLocale } from "next-intl/server";
import { AuthCard } from "@/components/auth/auth-card";
import { ResetForm } from "@/components/auth/reset-form";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getUser } from "@/lib/auth";

// Opened from the "reset password" email: the link signs the user in first.
export default async function ResetPasswordPage({ params }: PageProps<"/[locale]/reset-password">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  if (!(await getUser())) {
    redirect({ href: "/forgot-password", locale });
  }
  const t = await getTranslations("auth");

  return (
    <AuthCard title={t("resetTitle")} subtitle={t("resetSubtitle")}>
      <ResetForm />
    </AuthCard>
  );
}
