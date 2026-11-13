"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { ExerciseViewerProps } from "../../client-types";
import { mediaUrl } from "../../media";
import { Bank, Chip, PlaceArea, PlaceHint, Slot } from "../../placement";
import { AudioPlayer } from "../audio/viewer";
import type { MatchingAnswer, MatchingContent } from "./schema";

/** Left items in a column; the student puts a word from the bank next to each. */
export function MatchingViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<MatchingContent, MatchingAnswer>) {
  const t = useTranslations("exercises.matching");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});
  const placed = new Set(Object.values(values));
  const text = new Map(content.right.map((r) => [r.id, r.text]));

  function onPlace(rightId: string, leftId: string | null) {
    const next = Object.fromEntries(Object.entries(values).filter(([, r]) => r !== rightId));
    if (leftId) next[leftId] = rightId;
    setValues(next);
    onAnswer?.({ values: next }, { check: false });
  }

  const free = content.right.filter((r) => r.text && !placed.has(r.id));
  return (
    <PlaceArea onPlace={onPlace} disabled={!onAnswer}>
      <div className="flex flex-col gap-3">
        <Bank empty={free.length === 0}>
          {free.map((r) => (
            <Chip key={r.id} id={r.id} label={r.text} />
          ))}
        </Bank>
        {onAnswer && <PlaceHint />}
        <ol className="flex flex-col gap-2">
          {content.left.map((l, i) => {
            const chosen = values[l.id];
            const verdict = result?.parts[l.id];
            return (
              <li key={l.id} className="flex flex-col gap-2 rounded-lg border p-2 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="w-5 shrink-0 text-sm font-medium tabular-nums text-muted-foreground">{i + 1}.</span>
                  {l.kind === "text" && <span className="font-medium">{l.text}</span>}
                  {l.kind === "image" && l.image && (
                    <Image
                      src={mediaUrl(l.image.path)}
                      alt={t("left", { n: i + 1 })}
                      width={l.image.width ?? 300}
                      height={l.image.height ?? 200}
                      unoptimized
                      className="h-24 w-auto max-w-full rounded-md border object-contain"
                    />
                  )}
                  {l.kind === "audio" && l.file && (
                    <div className="min-w-0 flex-1">
                      <AudioPlayer file={l.file} />
                    </div>
                  )}
                </div>
                <Slot id={l.id} label={t("slot", { n: i + 1 })} verdict={verdict} className="sm:w-48">
                  {chosen && <Chip id={chosen} label={text.get(chosen) ?? ""} slot={l.id} verdict={verdict} />}
                </Slot>
              </li>
            );
          })}
        </ol>
      </div>
    </PlaceArea>
  );
}
