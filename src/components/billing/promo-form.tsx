"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redeemPromo } from "@/features/billing/actions";

/** A promo code adds free days (once per teacher). */
export function PromoForm() {
  const t = useTranslations("billing");
  const [code, setCode] = useState("");
  const [pending, start] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    start(async () => {
      const result = await redeemPromo(code);
      if (result.ok) {
        toast.success(t("promoApplied"));
        setCode("");
      } else toast.error(t(`promoErrors.${result.error}`));
    });
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder={t("promoPlaceholder")}
        aria-label={t("promoLabel")}
        maxLength={32}
        autoCapitalize="characters"
        className="sm:max-w-60"
      />
      <Button type="submit" variant="outline" disabled={pending || !code.trim()}>
        {t("promoApply")}
      </Button>
    </form>
  );
}
