"use client";

import { Play, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { pickWords, STEPS, type Step } from "@/features/trainer/session";
import type { Word } from "@/features/vocabulary/queries";
import { cn } from "@/lib/utils";

type How = "random" | "all" | "pick";
const COUNTS = [5, 10, 20];

/**
 * Before a session: which words (a number of random ones, all, or picked by
 * hand) and — for a review — which steps.
 */
export function LearnDialog({
  open,
  onOpenChange,
  kind,
  words,
  due,
  onStart,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  kind: "learn" | "review";
  /** the words that can take part (with a translation) */
  words: Word[];
  /** learned words it is time to review: taken first */
  due: Set<string>;
  onStart: (wordIds: string[], steps: Step[]) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
        {open && <LearnForm kind={kind} words={words} due={due} onStart={onStart} />}
      </DialogContent>
    </Dialog>
  );
}

function LearnForm({
  kind,
  words,
  due,
  onStart,
}: {
  kind: "learn" | "review";
  words: Word[];
  due: Set<string>;
  onStart: (wordIds: string[], steps: Step[]) => void;
}) {
  const t = useTranslations("vocabulary.learn");
  const counts = COUNTS.filter((c) => c < words.length);
  const [how, setHow] = useState<How>(counts.length ? "random" : "all");
  const [count, setCount] = useState(counts.includes(10) ? 10 : (counts[counts.length - 1] ?? words.length));
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [steps, setSteps] = useState<Set<Step>>(new Set(STEPS));

  const total = how === "all" ? words.length : how === "pick" ? picked.size : Math.min(count, words.length);
  const q = query.trim().toLowerCase();
  const listed = words.filter((w) => !q || w.term.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q));

  function start() {
    const chosen =
      how === "pick" ? pickWords(words, { ids: [...picked] }) : pickWords(words, { count: how === "all" ? "all" : count }, due);
    onStart(
      chosen.map((w) => w.id),
      STEPS.filter((s) => steps.has(s)),
    );
  }

  const option = (value: How, label: string) => (
    <button
      type="button"
      aria-pressed={how === value}
      onClick={() => setHow(value)}
      className={cn(
        "rounded-xl border px-3 py-2 text-left text-sm transition-colors",
        how === value ? "border-primary bg-primary/10 font-medium text-primary" : "hover:bg-accent",
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>{kind === "learn" ? t("learnTitle") : t("reviewTitle")}</DialogTitle>
        <DialogDescription>{kind === "learn" ? t("learnHint") : t("reviewHint")}</DialogDescription>
      </DialogHeader>

      <section className="flex flex-col gap-2" aria-label={t("whichWords")}>
        <h3 className="text-sm font-medium">{t("whichWords")}</h3>
        <div className="grid grid-cols-3 gap-2">
          {counts.length > 0 && option("random", t("random"))}
          {option("all", t("all", { count: words.length }))}
          {option("pick", t("pick"))}
        </div>
        {how === "random" && (
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t("howMany")}>
            <span className="text-sm text-muted-foreground">{t("howMany")}</span>
            {counts.map((c) => (
              <Button key={c} type="button" size="sm" variant={count === c ? "default" : "outline"} aria-pressed={count === c} onClick={() => setCount(c)}>
                {c}
              </Button>
            ))}
            {kind === "review" && due.size > 0 && <p className="w-full text-xs text-muted-foreground">{t("dueFirst")}</p>}
          </div>
        )}
        {how === "pick" && (
          <div className="flex flex-col gap-2">
            {words.length > 10 && (
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("search")} aria-label={t("search")} className="pl-9" />
              </div>
            )}
            <ul className="flex max-h-64 flex-col gap-1 overflow-y-auto rounded-xl border p-2" aria-label={t("pick")}>
              {listed.map((w) => (
                <li key={w.id}>
                  <Label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 font-normal hover:bg-accent">
                    <Checkbox
                      checked={picked.has(w.id)}
                      onCheckedChange={(v) => {
                        const next = new Set(picked);
                        if (v === true) next.add(w.id);
                        else next.delete(w.id);
                        setPicked(next);
                      }}
                    />
                    <span className="min-w-0 flex-1 truncate">
                      <span className="font-medium" lang={w.language}>
                        {w.term}
                      </span>
                      <span className="text-muted-foreground"> — {w.translation}</span>
                    </span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {kind === "review" && (
        <section className="flex flex-col gap-2" aria-label={t("whichSteps")}>
          <h3 className="text-sm font-medium">{t("whichSteps")}</h3>
          <div className="grid grid-cols-2 gap-2">
            {STEPS.map((s) => (
              <Label key={s} className="flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 font-normal">
                <Checkbox
                  checked={steps.has(s)}
                  onCheckedChange={(v) => {
                    const next = new Set(steps);
                    if (v === true) next.add(s);
                    else next.delete(s);
                    setSteps(next);
                  }}
                />
                {t(`step.${s}`)}
              </Label>
            ))}
          </div>
        </section>
      )}

      {kind === "learn" && <p className="text-sm text-muted-foreground">{t("allSteps")}</p>}

      <Button size="lg" onClick={start} disabled={total === 0 || steps.size === 0}>
        <Play aria-hidden="true" />
        {total === 0 ? t("startEmpty") : t("start", { count: total })}
      </Button>
    </div>
  );
}
