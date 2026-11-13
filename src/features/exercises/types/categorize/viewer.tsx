"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import { Bank, Chip, PlaceArea, PlaceHint, Slot } from "../../placement";
import type { CategorizeAnswer, CategorizeContent } from "./schema";

/** Shuffled words in a bank, and a column for each group. */
export function CategorizeViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<CategorizeContent, CategorizeAnswer>) {
  const t = useTranslations("exercises.categorize");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});

  function onPlace(cardId: string, groupId: string | null) {
    const next = { ...values };
    if (groupId) next[cardId] = groupId;
    else delete next[cardId];
    setValues(next);
    onAnswer?.({ values: next }, { check: false });
  }

  const free = content.cards.filter((c) => !values[c.id]);
  return (
    <PlaceArea onPlace={onPlace} disabled={!onAnswer}>
      <div className="flex flex-col gap-3">
        <Bank empty={free.length === 0}>
          {free.map((c) => (
            <Chip key={c.id} id={c.id} label={c.text} />
          ))}
        </Bank>
        {onAnswer && <PlaceHint />}
        <div className={cn("grid gap-2", content.groups.length > 2 ? "sm:grid-cols-3" : "grid-cols-2")}>
          {content.groups.map((g, i) => (
            <div key={g.id} className="flex flex-col gap-1.5 rounded-xl border p-2">
              <h4 className="text-center text-sm font-semibold">{g.title || t("titlePlaceholder", { n: i + 1 })}</h4>
              <Slot id={g.id} label={g.title || t("titlePlaceholder", { n: i + 1 })} className="min-h-24 w-full content-start items-start">
                {content.cards
                  .filter((c) => values[c.id] === g.id)
                  .map((c) => (
                    <Chip key={c.id} id={c.id} label={c.text} slot={g.id} verdict={result?.parts[c.id]} />
                  ))}
              </Slot>
            </div>
          ))}
        </div>
      </div>
    </PlaceArea>
  );
}
