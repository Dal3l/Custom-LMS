"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import type { ExerciseViewerProps } from "../../client-types";
import { Bank, Chip, PlaceArea, PlaceHint, Slot } from "../../placement";
import type { GapDragAnswer, GapDragContent } from "./schema";

/** Word bank above the text; words go into gaps by tapping or dragging. */
export function GapDragViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<GapDragContent, GapDragAnswer>) {
  const t = useTranslations("exercises.gaps");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});
  const placed = new Set(Object.values(values));
  const word = new Map(content.bank.map((w) => [w.id, w.text]));

  function onPlace(wordId: string, gap: string | null) {
    const next = Object.fromEntries(Object.entries(values).filter(([, w]) => w !== wordId));
    if (gap) next[gap] = wordId; // a word already there goes back to the bank
    setValues(next);
    onAnswer?.({ values: next }, { check: false });
  }

  const free = content.bank.filter((w) => !placed.has(w.id));
  return (
    <PlaceArea onPlace={onPlace} disabled={!onAnswer}>
      <div className="flex flex-col gap-3">
        <Bank empty={free.length === 0}>
          {free.map((w) => (
            <Chip key={w.id} id={w.id} label={w.text} />
          ))}
        </Bank>
        {onAnswer && <PlaceHint />}
        <p className="leading-[2.9] whitespace-pre-wrap">
          {content.parts.map((part, i) => {
            if (part.t === "text") return <span key={i}>{part.text}</span>;
            const n = Number(part.id.slice(1));
            const chosen = values[part.id];
            return (
              <Slot key={part.id} id={part.id} label={t("gapLabel", { n })} verdict={result?.parts[part.id]} className="mx-0.5">
                {chosen && <Chip id={chosen} label={word.get(chosen) ?? ""} slot={part.id} verdict={result?.parts[part.id]} />}
              </Slot>
            );
          })}
        </p>
      </div>
    </PlaceArea>
  );
}
