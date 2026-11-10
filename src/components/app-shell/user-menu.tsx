"use client";

import { LogOut, UserRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/features/auth/actions";
import { Link } from "@/i18n/navigation";
import { initials } from "@/lib/initials";
import type { UserRole } from "@/lib/supabase/database.types";

export function UserMenu({ name, role }: { name: string; role: UserRole }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="size-10 rounded-full" aria-label={t("nav.account")}>
          <Avatar>
            <AvatarFallback className="bg-accent text-accent-foreground">{initials(name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuLabel className="flex flex-col">
          <span className="truncate">{name}</span>
          <span className="text-xs font-normal text-muted-foreground">{t(`roles.${role}`)}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <UserRound aria-hidden="true" />
            {t("nav.profile")}
          </Link>
        </DropdownMenuItem>
        <form action={signOut}>
          <input type="hidden" name="locale" value={locale} />
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full">
              <LogOut aria-hidden="true" />
              {t("auth.signOut")}
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
