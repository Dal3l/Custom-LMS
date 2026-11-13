"use client";

import { Brackets } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FieldDescription } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { wrapAsGap } from "./gaps";

/** Text area for gap markup with a "Make it a gap" button for the selected words. */
export function GapSourceEditor({
  source,
  onChange,
  hint,
  example,
}: {
  source: string;
  onChange: (source: string) => void;
  hint: string;
  example: string;
}) {
  const t = useTranslations("exercises.gaps");
  const area = useRef<HTMLTextAreaElement>(null);

  function makeGap() {
    const el = area.current;
    if (!el) return;
    const result = wrapAsGap(el.value, el.selectionStart, el.selectionEnd);
    if (!result) {
      el.focus();
      return;
    }
    onChange(result.text);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(result.cursor, result.cursor);
    });
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Textarea
        ref={area}
        value={source}
        onChange={(e) => onChange(e.target.value.slice(0, 10000))}
        placeholder={example}
        aria-label={t("text")}
        rows={4}
        className="font-medium leading-relaxed"
      />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          // Keep the selection in the text area when the button is pressed.
          onMouseDown={(e) => e.preventDefault()}
          onClick={makeGap}
        >
          <Brackets aria-hidden="true" />
          {t("makeGap")}
        </Button>
      </div>
      <FieldDescription>{hint}</FieldDescription>
    </div>
  );
}
