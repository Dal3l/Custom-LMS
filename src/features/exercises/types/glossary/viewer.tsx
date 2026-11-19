"use client";

import { Check, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SpeakButton } from "@/components/vocabulary/speak-button";
import { useWordAdder } from "@/features/vocabulary/word-adder-context";
import type { ExerciseViewerProps } from "../../client-types";
import { useLessonLanguage } from "../../lesson-language";
import type { GlossaryContent, GlossaryWord } from "./schema";

/**
 * The words with their meaning and example, "listen", and "+" to put a word
 * into the dictionary (the teacher: into every student's). "Add all" puts
 * them all there.
 */
export function GlossaryViewer({ content }: ExerciseViewerProps<GlossaryContent>) {
  const t = useTranslations("exercises.glossary");
  const adder = useWordAdder();
  const language = useLessonLanguage() ?? "en";
  const [added, setAdded] = useState<Set<string>>(new Set());
  const [pending, startTransition] = useTransition();
  const words = content.words.filter((w) => w.term.trim());
  const canAdd = Boolean(adder?.addWords);

  function add(list: GlossaryWord[]) {
    startTransition(async () => {
      const r = await adder!.addWords!(list.map((w) => ({ term: w.term.trim(), translation: w.meaning.trim(), example: w.example.trim() })));
      if (!r) return void toast.error(t("addFailed"));
      setAdded((prev) => new Set([...prev, ...list.map((w) => w.id)]));
      if (r.added === 0) toast.info(t("alreadyThere"));
      else toast.success(adder!.forStudents ? t("addedForStudents", { count: list.length }) : t("added", { count: list.length }));
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col divide-y rounded-xl border">
        {words.map((w) => {
          const done = added.has(w.id);
          return (
            <li key={w.id} className="flex items-start gap-2 px-3 py-2">
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="break-words">
                  <span className="font-semibold">{w.term}</span>
                  {w.meaning && <span className="text-muted-foreground"> — {w.meaning}</span>}
                </p>
                {w.example && <p className="text-sm break-words text-muted-foreground italic">{w.example}</p>}
              </div>
              <SpeakButton term={w.term} language={language} />
              {canAdd && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label={done ? t("inDictionary", { term: w.term }) : t("addOne", { term: w.term })}
                  title={done ? t("inDictionary", { term: w.term }) : t("addOne", { term: w.term })}
                  disabled={pending || done}
                  onClick={() => add([w])}
                >
                  {done ? <Check className="text-emerald-600" aria-hidden="true" /> : <Plus aria-hidden="true" />}
                </Button>
              )}
            </li>
          );
        })}
      </ul>
      {canAdd && words.length > 1 && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="self-start"
          disabled={pending || words.every((w) => added.has(w.id))}
          onClick={() => add(words.filter((w) => !added.has(w.id)))}
        >
          <Plus aria-hidden="true" />
          {adder?.forStudents ? t("addAllForStudents") : t("addAll")}
        </Button>
      )}
    </div>
  );
}
