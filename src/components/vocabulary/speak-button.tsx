"use client";

import { Volume2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { speak } from "@/features/vocabulary/speak";

/** "Listen": says the word (recording or the browser's voice). */
export function SpeakButton({ term, language, audioUrl }: { term: string; language: string; audioUrl?: string | null }) {
  const t = useTranslations("vocabulary");
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={t("listen", { term })}
      title={t("listen", { term })}
      disabled={!term.trim()}
      onClick={() => speak(term, language, audioUrl)}
    >
      <Volume2 aria-hidden="true" />
    </Button>
  );
}
