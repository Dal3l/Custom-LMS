"use client";

import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  House,
  Languages,
  Library,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import type { UserRole } from "@/lib/supabase/database.types";
import { getNavItems, type NavIcon } from "./nav-items";

const ICONS: Record<NavIcon, LucideIcon> = {
  home: House,
  users: Users,
  book: BookOpen,
  library: Library,
  clipboard: ClipboardList,
  calendar: CalendarDays,
  languages: Languages,
  dumbbell: Dumbbell,
};

export function AppSidebar({ role }: { role: UserRole }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-3">
        <Logo href="/dashboard" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {getNavItems(role).map((item) => {
                const Icon = ICONS[item.icon];
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <SidebarMenuItem key={item.key}>
                    <SidebarMenuButton asChild isActive={active} size="lg">
                      <Link href={item.href} onClick={() => setOpenMobile(false)}>
                        <Icon aria-hidden="true" />
                        <span>{t(item.key)}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
