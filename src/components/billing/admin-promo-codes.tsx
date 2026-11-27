"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminCreatePromo, adminSetPromoActive } from "@/features/billing/actions";

type Code = { code: string; extra_days: number; max_uses: number | null; uses: number; active: boolean };

export function AdminPromoCodes({ codes }: { codes: Code[] }) {
  const t = useTranslations("admin");
  const [code, setCode] = useState("");
  const [days, setDays] = useState("30");
  const [maxUses, setMaxUses] = useState("");
  const [pending, start] = useTransition();

  function create(e: React.FormEvent) {
    e.preventDefault();
    start(async () => {
      const result = await adminCreatePromo({
        code,
        extraDays: Number(days),
        maxUses: maxUses.trim() ? Number(maxUses) : null,
      });
      if (result.ok) {
        toast.success(t("promoCreated"));
        setCode("");
        setMaxUses("");
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  function toggle(c: Code) {
    start(async () => {
      const result = await adminSetPromoActive(c.code, !c.active);
      if (!result.ok) toast.error(t(`errors.${result.error}`));
    });
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">{t("promoCodes")}</h2>
      <Card className="rounded-2xl">
        <CardContent>
          <form onSubmit={create} className="grid gap-3 sm:grid-cols-[1fr_auto_auto_auto] sm:items-end">
            <div className="flex flex-col gap-2">
              <Label htmlFor="promo-code">{t("promoCode")}</Label>
              <Input
                id="promo-code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="START2026"
                maxLength={32}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="promo-days">{t("promoDays")}</Label>
              <Input id="promo-days" type="number" min={1} max={365} value={days} onChange={(e) => setDays(e.target.value)} className="sm:w-24" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="promo-max">{t("promoMaxUses")}</Label>
              <Input
                id="promo-max"
                type="number"
                min={1}
                value={maxUses}
                onChange={(e) => setMaxUses(e.target.value)}
                placeholder={t("unlimited")}
                className="sm:w-32"
              />
            </div>
            <Button type="submit" disabled={pending || !code.trim()}>
              {t("createPromo")}
            </Button>
          </form>
          <p className="mt-2 text-xs text-muted-foreground">{t("promoHint")}</p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-2">
        {codes.map((c) => (
          <div key={c.code} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border px-4 py-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono font-semibold">{c.code}</span>
              <Badge variant={c.active ? "secondary" : "outline"}>{c.active ? t("active") : t("inactive")}</Badge>
              <span className="text-sm text-muted-foreground">
                {t("promoInfo", { days: c.extra_days, uses: c.uses })}
                {c.max_uses ? ` / ${c.max_uses}` : ""}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={() => toggle(c)} disabled={pending}>
              {c.active ? t("deactivate") : t("activate")}
            </Button>
          </div>
        ))}
        {codes.length === 0 && <p className="text-muted-foreground">{t("noPromo")}</p>}
      </div>
    </section>
  );
}
