"use client";

import { Check, Pause, Play, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import { mediaUrl, type MediaFile } from "../../media";
import type { MatchingAnswer, MatchingContent } from "./schema";

type LeftItem = MatchingContent["left"][number];
type Selection = { side: "left" | "right"; id: string } | null;

// Soft colours that tell pairs apart before they are checked.
const PAIR_COLORS = [
  "border-sky-300 bg-sky-50",
  "border-violet-300 bg-violet-50",
  "border-amber-300 bg-amber-50",
  "border-teal-300 bg-teal-50",
  "border-pink-300 bg-pink-50",
  "border-lime-300 bg-lime-50",
];

/**
 * Two columns. Tap an item on one side, then one on the other: they become a
 * pair and move up together. Tap a pair to separate it. "Check" colours pairs
 * green or red.
 */
export function MatchingViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<MatchingContent, MatchingAnswer>) {
  const t = useTranslations("exercises.matching");
  const [values, setValues] = useState<Record<string, string>>(answer?.values ?? {});
  const [selected, setSelected] = useState<Selection>(null);
  const disabled = !onAnswer;

  const rightText = new Map(content.right.map((r) => [r.id, r.text]));
  const pairedRight = new Set(Object.values(values));
  const pairs = content.left.filter((l) => values[l.id] && rightText.has(values[l.id]!));
  const freeLeft = content.left.filter((l) => !values[l.id]);
  const freeRight = content.right.filter((r) => r.text && !pairedRight.has(r.id));

  function update(next: Record<string, string>) {
    setValues(next);
    setSelected(null);
    onAnswer?.({ values: next }, { check: false });
  }

  function tap(side: "left" | "right", id: string) {
    if (disabled) return;
    if (!selected || selected.side === side) {
      // First tap (or a change of mind on the same side).
      setSelected(selected?.id === id ? null : { side, id });
      return;
    }
    const leftId = side === "left" ? id : selected.id;
    const rightId = side === "right" ? id : selected.id;
    update({ ...values, [leftId]: rightId });
  }

  function unpair(leftId: string) {
    if (disabled) return;
    const next = { ...values };
    delete next[leftId];
    update(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {pairs.length > 0 && (
        <ul className="flex flex-col gap-2" aria-label={t("pairs")}>
          {pairs.map((l, i) => {
            const verdict = result?.parts[l.id];
            return (
              <li key={l.id}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => unpair(l.id)}
                  aria-label={t("pairLabel", { right: rightText.get(values[l.id]!) ?? "" })}
                  className={cn(
                    "grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border-2 p-2 text-left transition-colors disabled:cursor-default",
                    verdict === true
                      ? "border-emerald-500 bg-emerald-50"
                      : verdict === false
                        ? "border-destructive bg-destructive/10"
                        : PAIR_COLORS[i % PAIR_COLORS.length],
                  )}
                >
                  <LeftContent item={l} />
                  <span className="text-muted-foreground" aria-hidden="true">
                    {verdict === true ? (
                      <Check className="size-5 text-emerald-600" />
                    ) : verdict === false ? (
                      <X className="size-5 text-destructive" />
                    ) : (
                      "—"
                    )}
                  </span>
                  <span className="font-medium">{rightText.get(values[l.id]!)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {(freeLeft.length > 0 || freeRight.length > 0) && (
        <>
          {!disabled && <p className="text-xs text-muted-foreground">{t("hint")}</p>}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2" role="group" aria-label={t("leftColumn")}>
              {freeLeft.map((l) => (
                <Item key={l.id} active={selected?.side === "left" && selected.id === l.id} disabled={disabled} onTap={() => tap("left", l.id)} label={leftLabel(l, t("picture"))}>
                  <LeftContent item={l} />
                </Item>
              ))}
            </div>
            <div className="flex flex-col gap-2" role="group" aria-label={t("rightColumn")}>
              {freeRight.map((r) => (
                <Item key={r.id} active={selected?.side === "right" && selected.id === r.id} disabled={disabled} onTap={() => tap("right", r.id)} label={r.text}>
                  <span className="font-medium">{r.text}</span>
                </Item>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function leftLabel(item: LeftItem, picture: string) {
  if (item.kind === "text") return item.text;
  if (item.kind === "image") return item.image?.name ?? picture;
  return item.file?.name ?? "";
}

/** A tappable card in a column. Contains other controls (audio), so it is a div with button behaviour. */
function Item({
  active,
  disabled,
  onTap,
  label,
  children,
}: {
  active: boolean;
  disabled: boolean;
  onTap: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={active}
      aria-disabled={disabled || undefined}
      aria-label={label}
      onClick={onTap}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTap();
        }
      }}
      className={cn(
        "flex min-h-12 touch-manipulation items-center justify-center rounded-xl border-2 bg-card p-2 text-center transition-colors select-none",
        !disabled && "cursor-pointer hover:border-primary/60",
        active && "border-primary bg-accent ring-3 ring-ring/40",
      )}
    >
      {children}
    </div>
  );
}

function LeftContent({ item }: { item: LeftItem }) {
  const t = useTranslations("exercises.matching");
  if (item.kind === "text") return <span className="font-medium">{item.text}</span>;
  if (item.kind === "image")
    return item.image ? (
      <Image
        src={mediaUrl(item.image.path)}
        alt={item.image.name}
        width={item.image.width ?? 300}
        height={item.image.height ?? 200}
        unoptimized
        draggable={false}
        className="mx-auto h-20 w-auto max-w-full rounded-md object-contain"
      />
    ) : (
      <span className="text-muted-foreground">{t("picture")}</span>
    );
  return item.file ? <PlayButton file={item.file} /> : null;
}

/** Small play / pause button for a sound in a narrow column. */
function PlayButton({ file }: { file: MediaFile }) {
  const t = useTranslations("exercises.matching");
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function toggle(e: React.MouseEvent | React.KeyboardEvent) {
    e.stopPropagation(); // playing a sound does not select the card
    if (!audio.current) {
      audio.current = new Audio(mediaUrl(file.path));
      audio.current.onended = () => setPlaying(false);
    }
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      void audio.current.play();
      setPlaying(true);
    }
  }

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle(e);
        }
      }}
      aria-label={playing ? t("pause") : t("play")}
      className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
    >
      {playing ? <Pause className="size-5" aria-hidden="true" /> : <Play className="size-5" aria-hidden="true" />}
    </span>
  );
}
