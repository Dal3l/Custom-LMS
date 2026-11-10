import { ClipboardCheck, Languages, MonitorPlay } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getUser } from "@/lib/auth";

const FEATURES = [
  { Icon: MonitorPlay, title: "featureLessonsTitle", text: "featureLessonsText" },
  { Icon: ClipboardCheck, title: "featureHomeworkTitle", text: "featureHomeworkText" },
  { Icon: Languages, title: "featureVocabularyTitle", text: "featureVocabularyText" },
] as const;

export default async function LandingPage({ params }: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("landing");
  const user = await getUser();

  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <div className="flex items-center gap-1">
          <LanguageSwitcher signedIn={Boolean(user)} />
          {!user && (
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">{t("login")}</Link>
            </Button>
          )}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center gap-12 px-4 py-12 sm:py-20">
        <section className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">{t("tagline")}</h1>
          <p className="text-lg text-muted-foreground text-balance">{t("description")}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {user ? (
              <Button asChild size="lg">
                <Link href="/dashboard">{t("openApp")}</Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg">
                  <Link href="/signup">{t("signup")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/login">{t("login")}</Link>
                </Button>
              </>
            )}
          </div>
        </section>

        <section className="grid w-full gap-4 sm:grid-cols-3">
          {FEATURES.map(({ Icon, title, text }) => (
            <Card key={title} className="rounded-2xl">
              <CardContent className="flex flex-col gap-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-semibold">{t(title)}</h2>
                <p className="text-sm text-muted-foreground">{t(text)}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
