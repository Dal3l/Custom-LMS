"use client";

import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

/** Copies text to the clipboard and confirms with a check mark. */
export function CopyButton({
  text,
  label,
  variant = "default",
  className,
}: {
  text: string;
  label: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  const t = useTranslations("classes");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(t("copied"));
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t("copyFailed"));
    }
  }

  return (
    <Button type="button" variant={variant} onClick={copy} className={className}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {label}
    </Button>
  );
}
