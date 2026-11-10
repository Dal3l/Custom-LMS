import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "cn";

export function Logo({ href = "/", className }: { href?: string; className?: string }) {
  const t = useTranslations("common");
  return (
    <Link href={href} className={cn("flex items-center gap-2 font-semibold text-lg", className)}>
      <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <GraduationCap className="size-5" aria-hidden="true" />
      </span>
      {t("appName")}
    </Link>
  );
}
