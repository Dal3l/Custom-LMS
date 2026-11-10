import { setRequestLocale } from "next-intl/server";
import { AppSidebar } from "@/components/app-shell/app-sidebar";
import { UserMenu } from "@/components/app-shell/user-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Locale } from "@/i18n/routing";
import { getUser, requireProfile } from "@/lib/auth";

export default async function AppLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const user = await getUser();
  const name = profile.full_name || user?.email || "";

  return (
    <SidebarProvider>
      <AppSidebar role={profile.role} />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/90 px-3 backdrop-blur sm:px-4">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-auto flex items-center gap-1">
            <LanguageSwitcher signedIn />
            <UserMenu name={name} role={profile.role} />
          </div>
        </header>
        <div className="mx-auto w-full max-w-5xl flex-1 p-4 sm:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
