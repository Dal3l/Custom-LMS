"use client";

import { ArrowRight, Check, ChevronLeft, Eye, GraduationCap, Loader2, PartyPopper, Volume2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { SpeakButton } from "@/components/vocabulary/speak-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recordReview } from "@/features/trainer/actions";
import { checkWritten, LEARNED, type Grade, type Mode, type Outcome } from "@/features/trainer/ladder";
import type { TrainerItem } from "@/features/trainer/queries";
import { canSpeak, speak } from "@/features/vocabulary/speak";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Answer = { outcome: Outcome; cardGrade?: Grade };

/**
 * A trainer session: the words one by one, each in the exercise of its ladder
 * step. Answers are saved in the background (retried once if the network
 * hiccups); the next word comes right away.
 */
export function TrainerSession({ items, kind }: { items: TrainerItem[]; kind: "due" | "learned" }) {
  const t = useTranslations("trainer");
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [right, setRight] = useState(0);
  const [learnedNow, setLearnedNow] = useState(0);
  const pending = useRef(new Set<Promise<unknown>>());
  const [saving, setSaving] = useState(false);
  // Browsers without a voice: listening becomes writing.
  const [voice] = useState(() => canSpeak());

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed p-10 text-center">
        <p className="font-medium">{t("nothingNow")}</p>
        <Button asChild variant="outline">
          <Link href="/trainer">{t("backHome")}</Link>
        </Button>
      </div>
    );
  }

  const done = index >= items.length;

  function save(item: TrainerItem, mode: Mode, answer: Answer) {
    const send = async () => {
      let r = await recordReview({ wordId: item.id, mode, ...answer }).catch(() => null);
      if (!r?.ok) r = await recordReview({ wordId: item.id, mode, ...answer }).catch(() => null);
      if (!r?.ok) toast.error(t("saveFailed"));
      else if (r.data.stage >= LEARNED && item.stage < LEARNED) setLearnedNow((n) => n + 1);
    };
    const p = send().finally(() => {
      pending.current.delete(p);
      if (pending.current.size === 0) setSaving(false);
    });
    pending.current.add(p);
    setSaving(true);
  }

  function answered(item: TrainerItem, mode: Mode, answer: Answer) {
    if (answer.outcome !== "wrong") setRight((n) => n + 1);
    save(item, mode, answer);
  }

  if (done) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center">
        <PartyPopper className="size-10 text-primary" aria-hidden="true" />
        <h1 className="text-xl font-semibold">{t("finishedTitle")}</h1>
        <p role="status">{t("finishedScore", { right, total: items.length })}</p>
        {learnedNow > 0 && (
          <p className="flex items-center gap-2 text-emerald-700">
            <GraduationCap className="size-5" aria-hidden="true" />
            {t("finishedLearned", { count: learnedNow })}
          </p>
        )}
        {saving && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {t("saving")}
          </p>
        )}
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <Button
            disabled={saving}
            onClick={() => {
              router.refresh();
            }}
          >
            {kind === "learned" ? t("practiceAgain") : t("continue")}
          </Button>
          <Button asChild variant="outline">
            <Link href="/trainer">{t("backHome")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const item = items[index];
  const mode: Mode = item.mode === "listen" && !voice && !item.audioUrl ? "write" : item.mode;
  const next = () => setIndex((i) => i + 1);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="icon-sm" aria-label={t("backHome")}>
          <Link href="/trainer">
            <ChevronLeft aria-hidden="true" />
          </Link>
        </Button>
        <div
          className="h-2 flex-1 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-label={t("progress")}
          aria-valuemin={0}
          aria-valuemax={items.length}
          aria-valuenow={index}
        >
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(index / items.length) * 100}%` }} />
        </div>
        <span className="text-sm text-muted-foreground tabular-nums">
          {index + 1} / {items.length}
        </span>
      </div>
      <p className="text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">{t(`mode.${mode}`)}</p>
      {mode === "card" && <CardStep key={item.id} item={item} onAnswer={(a) => answered(item, mode, a)} onNext={next} />}
      {mode === "choice" && <ChoiceStep key={item.id} item={item} onAnswer={(a) => answered(item, mode, a)} onNext={next} />}
      {(mode === "write" || mode === "listen") && (
        <WriteStep key={item.id} item={item} byEar={mode === "listen"} onAnswer={(a) => answered(item, mode, a)} onNext={next} />
      )}
    </div>
  );
}

type StepProps = { item: TrainerItem; onAnswer: (a: Answer) => void; onNext: () => void };

function Word({ item, big = true }: { item: TrainerItem; big?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2">
      <span className={cn("font-semibold break-words", big ? "text-3xl" : "text-xl")} lang={item.language}>
        {item.term}
      </span>
      {item.transcription && <span className="text-muted-foreground">{item.transcription}</span>}
      <SpeakButton term={item.term} language={item.language} audioUrl={item.audioUrl} />
    </div>
  );
}

/** Step 1: the flash card. Show the translation, then "Don't remember / Hard / Remember / Easy". */
function CardStep({ item, onAnswer, onNext }: StepProps) {
  const t = useTranslations("trainer");
  const [shown, setShown] = useState(false);
  const grades: { grade: Grade; key: "again" | "hard" | "good" | "easy"; style: string }[] = [
    { grade: 1, key: "again", style: "border-red-200 bg-red-50 text-red-800 hover:bg-red-100" },
    { grade: 2, key: "hard", style: "border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100" },
    { grade: 3, key: "good", style: "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100" },
    { grade: 4, key: "easy", style: "border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100" },
  ];
  return (
    <section className="flex flex-col items-center gap-5 rounded-2xl border bg-card p-6 text-center" aria-label={t("mode.card")}>
      <Word item={item} />
      {shown ? (
        <>
          <p className="text-2xl">{item.translation}</p>
          {item.example && (
            <p className="text-muted-foreground italic" lang={item.language}>
              {item.example}
            </p>
          )}
          <p className="text-sm text-muted-foreground">{t("howWell")}</p>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {grades.map((g) => (
              <button
                key={g.grade}
                type="button"
                className={cn("rounded-xl border px-3 py-3 text-sm font-medium transition-colors", g.style)}
                onClick={() => {
                  onAnswer({ outcome: g.grade === 1 ? "wrong" : "right", cardGrade: g.grade });
                  onNext();
                }}
              >
                {t(`grade.${g.key}`)}
              </button>
            ))}
          </div>
        </>
      ) : (
        <Button size="lg" className="w-full sm:w-auto" onClick={() => setShown(true)} autoFocus>
          <Eye aria-hidden="true" />
          {t("showTranslation")}
        </Button>
      )}
    </section>
  );
}

/** Step 2: pick the translation out of four. */
function ChoiceStep({ item, onAnswer, onNext }: StepProps) {
  const t = useTranslations("trainer");
  const [picked, setPicked] = useState<string | null>(null);
  const correct = item.translation.trim();
  return (
    <section className="flex flex-col gap-5 rounded-2xl border bg-card p-6" aria-label={t("mode.choice")}>
      <Word item={item} />
      <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label={t("options")}>
        {item.options.map((o) => {
          const isRight = o === correct;
          const state = picked === null ? "idle" : isRight ? "right" : picked === o ? "wrong" : "idle";
          return (
            <button
              key={o}
              type="button"
              disabled={picked !== null}
              aria-pressed={picked === o}
              onClick={() => {
                setPicked(o);
                onAnswer({ outcome: isRight ? "right" : "wrong" });
              }}
              className={cn(
                "flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left transition-colors",
                state === "idle" && "hover:bg-accent disabled:opacity-70",
                state === "right" && "border-emerald-300 bg-emerald-50 text-emerald-900",
                state === "wrong" && "border-red-300 bg-red-50 text-red-900",
              )}
            >
              <span className="break-words">{o}</span>
              {state === "right" && <Check className="size-4 shrink-0" aria-hidden="true" />}
              {state === "wrong" && <X className="size-4 shrink-0" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
      {picked !== null && <NextButton onNext={onNext} right={picked === correct} />}
    </section>
  );
}

/** Steps 3 and 4: write the word from its translation, or by ear. */
function WriteStep({ item, byEar, onAnswer, onNext }: StepProps & { byEar: boolean }) {
  const t = useTranslations("trainer");
  const [text, setText] = useState("");
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const said = useRef(false);

  // By ear: the word is said once by itself (the press on "Next" allows sound).
  useEffect(() => {
    if (!byEar || said.current) return;
    said.current = true;
    speak(item.term, item.language, item.audioUrl);
  }, [byEar, item]);

  function check(e: React.FormEvent) {
    e.preventDefault();
    if (outcome) return onNext();
    if (!text.trim()) return;
    const result = checkWritten(text, item.term);
    setOutcome(result);
    onAnswer({ outcome: result });
  }

  return (
    <form onSubmit={check} className="flex flex-col items-center gap-5 rounded-2xl border bg-card p-6 text-center" aria-label={t(byEar ? "mode.listen" : "mode.write")}>
      {byEar ? (
        <Button type="button" variant="outline" size="lg" onClick={() => speak(item.term, item.language, item.audioUrl)}>
          <Volume2 aria-hidden="true" />
          {t("listenAgain")}
        </Button>
      ) : (
        <p className="text-2xl break-words">{item.translation}</p>
      )}
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label={t("yourAnswer")}
        placeholder={t(byEar ? "writeHeard" : "writeWord")}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        lang={item.language}
        readOnly={outcome !== null}
        className={cn(
          "h-12 text-center text-lg",
          outcome === "right" && "border-emerald-400 bg-emerald-50",
          outcome === "almost" && "border-amber-400 bg-amber-50",
          outcome === "wrong" && "border-red-400 bg-red-50",
        )}
      />
      {outcome && (
        <div className="flex flex-col items-center gap-1" role="status">
          <p className={cn("font-medium", outcome === "right" ? "text-emerald-700" : outcome === "almost" ? "text-amber-700" : "text-red-700")}>
            {t(`result.${outcome}`)}
          </p>
          {outcome !== "right" && <Word item={item} big={false} />}
          {byEar && <p className="text-muted-foreground">{item.translation}</p>}
        </div>
      )}
      {outcome ? (
        <Button type="submit" size="lg" className="w-full sm:w-auto" autoFocus>
          {t("next")}
          <ArrowRight aria-hidden="true" />
        </Button>
      ) : (
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!text.trim()}>
          {t("check")}
        </Button>
      )}
    </form>
  );
}

function NextButton({ onNext, right }: { onNext: () => void; right: boolean }) {
  const t = useTranslations("trainer");
  return (
    <div className="flex flex-col items-center gap-2">
      <p className={cn("font-medium", right ? "text-emerald-700" : "text-red-700")} role="status">
        {t(right ? "result.right" : "result.wrong")}
      </p>
      <Button size="lg" className="w-full sm:w-auto" onClick={onNext} autoFocus>
        {t("next")}
        <ArrowRight aria-hidden="true" />
      </Button>
    </div>
  );
}
