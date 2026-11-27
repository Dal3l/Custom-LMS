import { Gift, TriangleAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { AccessState } from "@/features/billing/plans";

/** In the header: days left of the trial, or a warning when access is ending or over. */
export async function AccessBadge({ access }: { access: AccessState }) {
  const t = await getTranslations("billing");
  let label: string;
  let days = 0;
  let urgent = false;
  let Icon = Gift;
  if (access.state === "trial") {
    days = access.daysLeft;
    label = t("badgeTrial", { count: days });
    urgent = access.daysLeft <= 5;
  } else if (access.state === "expired") {
    label = t("badgeExpired");
    urgent = true;
    Icon = TriangleAlert;
  } else if (access.state === "active" && access.daysLeft <= 5) {
    days = access.daysLeft;
    label = t("badgeEnding", { count: days });
    urgent = true;
    Icon = TriangleAlert;
  } else {
    return null;
  }

  return (
    <Link
      href="/billing"
      className={cn(
        "flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold whitespace-nowrap transition-colors",
        urgent ? "bg-destructive/10 text-destructive hover:bg-destructive/15" : "bg-accent text-accent-foreground hover:bg-accent/80",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{access.state === "expired" ? t("badgeExpiredShort") : t("badgeDaysShort", { count: days })}</span>
    </Link>
  );
}
