import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { AppSidebar } from "@/components/app-shell/app-sidebar";
import { NavigationProgress } from "@/components/app-shell/navigation-progress";
import { UserMenu } from "@/components/app-shell/user-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NotificationBell } from "@/components/notifications/notification-bell";
import { countUnreadNotifications } from "@/features/notifications/actions";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Locale } from "@/i18n/routing";
import { listStudentLiveClasses } from "@/features/classes/queries";
import { StudentLiveProvider } from "@/features/live/student-live";
import { getUser, requireProfile } from "@/lib/auth";
import { AccessBadge } from "@/components/billing/access-badge";
import { AccessGate } from "@/components/billing/access-gate";
import { getMyTeacherAccess, isStudentBlocked } from "@/features/billing/access";
import { hasAccess } from "@/features/billing/plans";

export default async function AppLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  const [user, unread, liveClasses, teacherAccess, studentBlocked] = await Promise.all([
    getUser(),
    countUnreadNotifications(),
    profile.role === "student" ? listStudentLiveClasses(profile.id) : Promise.resolve(null),
    getMyTeacherAccess(),
    isStudentBlocked(),
  ]);
  // After the trial (or the paid period), the teacher and their students see a "subscription" screen.
  const blocked = teacherAccess ? !hasAccess(teacherAccess) : studentBlocked;
  const name = profile.full_name || user?.email || "";

  return (
    <SidebarProvider>
      <Suspense>
        <NavigationProgress />
      </Suspense>
      <AppSidebar role={profile.role} />
      <SidebarInset className="min-w-0">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/90 px-3 backdrop-blur sm:px-4">
          <SidebarTrigger className="size-10 md:hidden [&_svg]:size-5" />
          {/* Pages can put their own title and buttons here (e.g. a lesson). */}
          <div id="page-header-slot" className="flex min-w-0 flex-1 items-center gap-2" />
          <div className="ml-auto flex shrink-0 items-center gap-1">
            {teacherAccess && <AccessBadge access={teacherAccess} />}
            <LanguageSwitcher signedIn />
            <NotificationBell userId={profile.id} initialUnread={unread} />
            <UserMenu name={name} role={profile.role} isAdmin={profile.is_admin} />
          </div>
        </header>
        <div className="app-content mx-auto w-full max-w-5xl flex-1 p-4 sm:p-6">
          <AccessGate blocked={blocked} role={profile.role}>
            {liveClasses && !blocked ? (
              // Students follow their classes live: lessons open by themselves, "Show to students".
              <StudentLiveProvider userId={profile.id} classes={liveClasses}>
                {children}
              </StudentLiveProvider>
            ) : (
              children
            )}
          </AccessGate>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
