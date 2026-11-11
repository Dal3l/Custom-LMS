"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SECTION_TEMPLATES } from "@/features/lessons/sections";

/** "+ Section": one click on a template, or type a custom name. */
export function AddSectionDialog({
  open,
  onOpenChange,
  onAdd,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Resolves when the section exists; the window stays open (busy) until then. */
  onAdd: (title: string) => Promise<void>;
}) {
  const t = useTranslations("builder");
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  async function add(title: string) {
    const clean = title.trim().slice(0, 100);
    if (!clean || busy) return;
    setBusy(clean);
    await onAdd(clean);
    setBusy(null);
    setCustom("");
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !busy && onOpenChange(next)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("newSectionTitle")}</DialogTitle>
          <DialogDescription>{t("sectionTemplates")}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {SECTION_TEMPLATES.map((name) => (
            <Button key={name} type="button" variant="secondary" disabled={Boolean(busy)} onClick={() => add(name)}>
              {busy === name && <Loader2 className="animate-spin" aria-hidden="true" />}
              {name}
            </Button>
          ))}
        </div>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            void add(custom);
          }}
        >
          <Input
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder={t("customSectionPlaceholder")}
            aria-label={t("customSectionPlaceholder")}
            maxLength={100}
          />
          <Button type="submit" disabled={!custom.trim() || Boolean(busy)}>
            {busy && busy === custom.trim() && <Loader2 className="animate-spin" aria-hidden="true" />}
            {t("createSection")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
