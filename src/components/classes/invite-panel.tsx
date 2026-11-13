"use client";

import { Link2, Link2Off, MoreHorizontal, RefreshCw } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { regenerateInvite, setInviteEnabled } from "@/features/classes/actions";
import type { ClassInvite } from "@/features/classes/queries";
import { CopyButton } from "./copy-button";

/** The class invite link: copy, turn off / on, replace with a new one. */
export function InvitePanel({ classId, invite, origin }: { classId: string; invite: ClassInvite | null; origin: string }) {
  const t = useTranslations("classes");
  const locale = useLocale();
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState(invite);
  const url = state ? `${origin}/${locale}/join/${state.token}` : "";
  const enabled = Boolean(state?.enabled);

  function toggle() {
    if (!state) return;
    const next = !state.enabled;
    startTransition(async () => {
      const result = await setInviteEnabled(classId, next);
      if (result.ok) {
        setState({ ...state, enabled: next });
        toast.success(next ? t("inviteEnabled") : t("inviteDisabled"));
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  function regenerate() {
    startTransition(async () => {
      const result = await regenerateInvite(classId);
      if (result.ok) {
        setState({ token: result.data, enabled: true });
        toast.success(t("inviteRegenerated"));
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  return (
    <section className="flex flex-col gap-3 rounded-2xl border p-4" aria-labelledby="invite-title">
      <div className="flex items-start gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3 id="invite-title" className="flex flex-wrap items-center gap-2 font-medium">
            {t("inviteTitle")}
            {!enabled && <Badge variant="outline">{t("inviteOff")}</Badge>}
          </h3>
          <p className="text-sm text-muted-foreground">{enabled ? t("inviteHint") : t("inviteOffHint")}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={t("inviteActions")} disabled={pending}>
              <MoreHorizontal aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {state && (
              <DropdownMenuItem onSelect={toggle}>
                {enabled ? <Link2Off aria-hidden="true" /> : <Link2 aria-hidden="true" />}
                {enabled ? t("disableInvite") : t("enableInvite")}
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onSelect={regenerate}>
              <RefreshCw aria-hidden="true" />
              {t("regenerateInvite")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {enabled && (
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input readOnly value={url} aria-label={t("inviteTitle")} onFocus={(e) => e.currentTarget.select()} className="font-mono text-sm" />
          <CopyButton text={url} label={t("copyLink")} />
        </div>
      )}
    </section>
  );
}
