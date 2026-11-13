"use client";

import { Eye, Pencil, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { StudentSection } from "@/features/lessons/queries";
import { Link } from "@/i18n/navigation";
import { LessonPlayer } from "./lesson-player";

/** "Preview as student" banner with Reset and Back-to-editing, around the player. */
export function PreviewShell({
  language,
  editHref,
  sections,
  initialSectionId,
}: {
  language: string;
  editHref: string;
  sections: StudentSection[];
  initialSectionId: string | null;
}) {
  const t = useTranslations("player");
  const [reset, setReset] = useState(0);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-2xl bg-accent px-4 py-3 text-accent-foreground sm:flex-row sm:items-center">
        <p className="flex flex-1 items-center gap-2 text-sm font-medium">
          <Eye className="size-4 shrink-0" aria-hidden="true" />
          {t("previewBanner")}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-background" onClick={() => setReset((n) => n + 1)}>
            <RotateCcw aria-hidden="true" />
            {t("reset")}
          </Button>
          <Button asChild size="sm">
            <Link href={editHref}>
              <Pencil aria-hidden="true" />
              {t("backToEditor")}
            </Link>
          </Button>
        </div>
      </div>
      <LessonPlayer language={language} sections={sections} initialSectionId={initialSectionId} resetSignal={reset} />
    </div>
  );
}
