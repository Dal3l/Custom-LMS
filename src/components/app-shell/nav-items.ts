import type { UserRole } from "@/lib/supabase/database.types";

export type NavKey =
  | "dashboard"
  | "classes"
  | "courses"
  | "library"
  | "homework"
  | "schedule"
  | "vocabulary"
  | "trainer";

export type NavIcon =
  | "home"
  | "users"
  | "book"
  | "library"
  | "clipboard"
  | "calendar"
  | "languages"
  | "dumbbell";

/** `also`: other paths that belong to this item (e.g. the course builder to the Library). */
export type NavItem = { key: NavKey; href: `/${string}`; icon: NavIcon; also?: `/${string}`[] };

const ITEMS: Record<NavKey, NavItem> = {
  dashboard: { key: "dashboard", href: "/dashboard", icon: "home" },
  classes: { key: "classes", href: "/classes", icon: "users" },
  courses: { key: "courses", href: "/courses", icon: "book" },
  library: { key: "library", href: "/library", icon: "library", also: ["/courses"] },
  homework: { key: "homework", href: "/homework", icon: "clipboard" },
  schedule: { key: "schedule", href: "/schedule", icon: "calendar" },
  vocabulary: { key: "vocabulary", href: "/vocabulary", icon: "languages" },
  trainer: { key: "trainer", href: "/trainer", icon: "dumbbell" },
};

const BY_ROLE: Record<UserRole, NavKey[]> = {
  teacher: ["dashboard", "classes", "library", "homework", "schedule"],
  student: ["dashboard", "classes", "homework", "vocabulary", "schedule"],
};

export function getNavItems(role: UserRole): NavItem[] {
  return BY_ROLE[role].map((key) => ITEMS[key]);
}

export function canAccess(role: UserRole, key: NavKey): boolean {
  return BY_ROLE[role].includes(key);
}

/** Whether a menu item is the current section. */
export function isActive(item: NavItem, pathname: string): boolean {
  return [item.href, ...(item.also ?? [])].some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
