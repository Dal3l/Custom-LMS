import { Link2Off, Users } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AuthCard } from "@/components/auth/auth-card";
import { GoogleButton, OrDivider } from "@/components/auth/google-button";
import { SignupForm } from "@/components/auth/signup-form";
import { JoinClassForm } from "@/components/classes/join-class-form";
import { Button } from "@/components/ui/button";
import { signOut } from "@/features/auth/actions";
import { getInviteInfo } from "@/features/classes/join";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getProfile, getUser } from "@/lib/auth";

/** Class invite link: sign up (as a student) or join with the current account. */
export default async function JoinPage({ params }: PageProps<"/[locale]/join/[token]">) {
  const { locale, token } = (await params) as { locale: Locale; token: string };
  setRequestLocale(locale);
  const [t, invite, user] = await Promise.all([getTranslations("join"), getInviteInfo(token), getUser()]);
  const path = `/join/${token}`;

  if (!invite) {
    return (
      <AuthCard title={t("invalidTitle")} subtitle={t("invalidText")}>
        <Link2Off className="mx-auto size-10 text-muted-foreground" aria-hidden="true" />
      </AuthCard>
    );
  }

  const invitation = (
    <div className="flex items-center gap-3 rounded-xl bg-accent p-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
        <Users className="size-5" aria-hidden="true" />
      </span>
      <p className="text-sm">
        {t.rich("invitation", {
          teacher: invite.teacherName || t("teacherFallback"),
          className: invite.className,
          b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
        })}
      </p>
    </div>
  );

  if (user) {
    const profile = await getProfile();
    if (profile?.role === "teacher") {
      return (
        <AuthCard title={t("title")}>
          {invitation}
          <p className="text-sm text-muted-foreground">{t("teacherAccount")}</p>
          <form action={signOut}>
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="next" value={path} />
            <Button type="submit" variant="outline" size="lg" className="w-full">
              {t("signOutToJoin")}
            </Button>
          </form>
        </AuthCard>
      );
    }
    return (
      <AuthCard title={t("title")}>
        {invitation}
        <JoinClassForm token={token} />
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title={t("title")}
      subtitle={t("subtitle")}
      footer={
        <>
          {t("haveAccount")}&nbsp;
          <Link
            href={{ pathname: "/login", query: { next: `/${locale}${path}` } }}
            className="font-medium text-primary hover:underline"
          >
            {t("toLogin")}
          </Link>
        </>
      }
    >
      {invitation}
      {invite.full ? (
        <p className="text-sm text-destructive">{t("errors.classFull")}</p>
      ) : (
        <>
          <GoogleButton next={path} />
          <OrDivider />
          <SignupForm invite={token} />
        </>
      )}
    </AuthCard>
  );
}
