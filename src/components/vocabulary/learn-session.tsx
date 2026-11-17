"use client";

import { ArrowRight, Check, GraduationCap, Loader2, PartyPopper, Volume2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { finishSession } from "@/features/trainer/actions";
import { checkWritten, type Outcome } from "@/features/trainer/ladder";
import {
  answer,
  buildTasks,
  isFinished,
  startSession,
  stepProgress,
  type Session,
  type SessionWord,
  type Step,
  type Task,
} from "@/features/trainer/session";
import { canSpeak, speak } from "@/features/vocabulary/speak";
import { cn } from "@/lib/utils";
import { SpeakButton } from "./speak-button";

/**
 * A learning (or review) session inside the Dictionary: the chosen words go
 * through the steps one after another; a mistake comes back at the end of the
 * step. At the end the result is saved (learning: the words become learned).
 */
export function LearnSession({
  kind,
  words,
  steps,
  pool,
  onExit,
}: {
  kind: "learn" | "review";
  words: SessionWord[];
  steps: Step[];
  /** all the student's words: wrong options for picking the translation */
  pool: SessionWord[];
  onExit: (saved: boolean) => void;
}) {
  const t = useTranslations("vocabulary.learn");
  const [session, setSession] = useState<Session>(() =>
    startSession(buildTasks(words, steps, pool, (w) => Boolean(w.audioUrl) || canSpeak())),
  );
  const [saved, setSaved] = useState<"no" | "saving" | "yes" | "failed">("no");
  const [learned, setLearned] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const byId = new Map(words.map((w) => [w.id, w]));
  const finished = isFinished(session);

  async function save(s: Session) {
    setSaved("saving");
    const input = {
      kind,
      words: words.map((w) => ({ wordId: w.id, mistakes: s.mistakes[w.id] ?? 0 })),
      answers: s.answers,
    };
    let r = await finishSession(input).catch(() => null);
    if (!r?.ok) r = await finishSession(input).catch(() => null);
    if (r?.ok) {
      setLearned(r.data.learned);
      setSaved("yes");
    } else setSaved("failed");
  }

  function onAnswer(correct: boolean) {
    const next = answer(session, correct);
    setSession(next);
  }

  // The last answer finishes the session: save it once.
  const savedOnce = useRef(false);
  useEffect(() => {
    if (finished && !savedOnce.current && session.tasks.length > 0) {
      savedOnce.current = true;
      void save(session);
    }
    // save() reads the session it is given.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  if (session.tasks.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed p-10 text-center">
        <p>{t("nothingToDo")}</p>
        <Button variant="outline" onClick={() => onExit(false)}>
          {t("backToDictionary")}
        </Button>
      </div>
    );
  }

  if (finished) {
    const withMistakes = words.filter((w) => (session.mistakes[w.id] ?? 0) > 0);
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center">
        <PartyPopper className="size-10 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-semibold">{t("doneTitle")}</h2>
        {saved === "saving" && (
          <p className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {t("saving")}
          </p>
        )}
        {saved === "yes" && (
          <p className="flex items-center gap-2 text-emerald-700" role="status">
            <GraduationCap className="size-5" aria-hidden="true" />
            {kind === "learn" ? t("learnedCount", { count: learned }) : t("reviewedCount", { count: words.length })}
          </p>
        )}
        {saved === "failed" && (
          <div className="flex flex-col items-center gap-2" role="alert">
            <p className="text-destructive">{t("saveFailed")}</p>
            <Button variant="outline" onClick={() => void save(session)}>
              {t("tryAgain")}
            </Button>
          </div>
        )}
        <p>{withMistakes.length === 0 ? t("noMistakes") : t("mistakesIn", { count: withMistakes.length })}</p>
        {withMistakes.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-2">
            {withMistakes.map((w) => (
              <li key={w.id} className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm text-amber-900">
                <span lang={w.language}>{w.term}</span> — {w.translation}
              </li>
            ))}
          </ul>
        )}
        <Button size="lg" disabled={saved === "saving"} onClick={() => onExit(saved === "yes")}>
          {t("backToDictionary")}
        </Button>
      </div>
    );
  }

  const task = session.tasks[session.index];
  const word = byId.get(task.wordId)!;
  const progress = stepProgress(session);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon-sm" aria-label={t("stop")} title={t("stop")} onClick={() => setLeaving(true)}>
          <X aria-hidden="true" />
        </Button>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-sm font-medium">
            {t("stepOf", { step: progress.current + 1, total: progress.steps.length })} · {t(`step.${task.step}`)}
          </p>
          <div
            className="h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label={t("progress")}
            aria-valuemin={0}
            aria-valuemax={progress.inStep}
            aria-valuenow={progress.doneInStep}
          >
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(progress.doneInStep / progress.inStep) * 100}%` }} />
          </div>
        </div>
        <span className="text-sm text-muted-foreground tabular-nums">
          {progress.doneInStep + 1} / {progress.inStep}
        </span>
      </div>

      {task.step === "card" && <CardTask key={session.index} word={word} onDone={() => onAnswer(true)} />}
      {task.step === "choice" && <ChoiceTask key={session.index} word={word} task={task} onDone={onAnswer} />}
      {(task.step === "write" || task.step === "listen") && (
        <WriteTask key={session.index} word={word} byEar={task.step === "listen"} onDone={onAnswer} />
      )}

      <AlertDialog open={leaving} onOpenChange={setLeaving}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("stopTitle")}</AlertDialogTitle>
            <AlertDialogDescription>{t("stopText")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("continue")}</AlertDialogCancel>
            <AlertDialogAction onClick={() => onExit(false)}>{t("stop")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function WordLine({ word, big = true }: { word: SessionWord; big?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2">
      <span className={cn("font-semibold break-words", big ? "text-3xl" : "text-xl")} lang={word.language}>
        {word.term}
      </span>
      {word.transcription && <span className="text-muted-foreground">{word.transcription}</span>}
      <SpeakButton term={word.term} language={word.language} audioUrl={word.audioUrl} />
    </div>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  const t = useTranslations("vocabulary.learn");
  return (
    <Button type="button" size="lg" className="w-full sm:w-auto" onClick={onClick} autoFocus>
      {t("next")}
      <ArrowRight aria-hidden="true" />
    </Button>
  );
}

/** Step 1: the word with its translation, to get to know it. */
function CardTask({ word, onDone }: { word: SessionWord; onDone: () => void }) {
  const t = useTranslations("vocabulary.learn");
  return (
    <section className="flex flex-col items-center gap-5 rounded-2xl border bg-card p-6 text-center" aria-label={t("step.card")}>
      <WordLine word={word} />
      <p className="text-2xl">{word.translation}</p>
      {word.example && (
        <p className="text-muted-foreground italic" lang={word.language}>
          {word.example}
        </p>
      )}
      <NextButton onClick={onDone} />
    </section>
  );
}

/** Step 2: pick the translation out of four. */
function ChoiceTask({ word, task, onDone }: { word: SessionWord; task: Task; onDone: (correct: boolean) => void }) {
  const t = useTranslations("vocabulary.learn");
  const [picked, setPicked] = useState<string | null>(null);
  const right = word.translation.trim();
  return (
    <section className="flex flex-col gap-5 rounded-2xl border bg-card p-6" aria-label={t("step.choice")}>
      <WordLine word={word} />
      <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label={t("options")}>
        {task.options.map((o) => {
          const state = picked === null ? "idle" : o === right ? "right" : picked === o ? "wrong" : "idle";
          return (
            <button
              key={o}
              type="button"
              disabled={picked !== null}
              aria-pressed={picked === o}
              onClick={() => setPicked(o)}
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
      {picked !== null && (
        <div className="flex flex-col items-center gap-2">
          <p className={cn("font-medium", picked === right ? "text-emerald-700" : "text-red-700")} role="status">
            {picked === right ? t("result.right") : t("result.wrongAgain")}
          </p>
          <NextButton onClick={() => onDone(picked === right)} />
        </div>
      )}
    </section>
  );
}

/** Steps 3 and 4: write the word from its translation, or by ear. */
function WriteTask({ word, byEar, onDone }: { word: SessionWord; byEar: boolean; onDone: (correct: boolean) => void }) {
  const t = useTranslations("vocabulary.learn");
  const [text, setText] = useState("");
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const said = useRef(false);

  // By ear: the word is said once by itself (the press on "Next" allows sound).
  useEffect(() => {
    if (!byEar || said.current) return;
    said.current = true;
    speak(word.term, word.language, word.audioUrl);
  }, [byEar, word]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (outcome) return onDone(outcome !== "wrong");
    if (!text.trim()) return;
    setOutcome(checkWritten(text, word.term));
  }

  return (
    <form onSubmit={submit} className="flex flex-col items-center gap-5 rounded-2xl border bg-card p-6 text-center" aria-label={t(byEar ? "step.listen" : "step.write")}>
      {byEar ? (
        <Button type="button" variant="outline" size="lg" onClick={() => speak(word.term, word.language, word.audioUrl)}>
          <Volume2 aria-hidden="true" />
          {t("listenAgain")}
        </Button>
      ) : (
        <p className="text-2xl break-words">{word.translation}</p>
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
        lang={word.language}
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
            {t(outcome === "wrong" ? "result.wrongAgain" : `result.${outcome}`)}
          </p>
          {outcome !== "right" && <WordLine word={word} big={false} />}
          {byEar && <p className="text-muted-foreground">{word.translation}</p>}
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
