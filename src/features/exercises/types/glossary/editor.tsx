"use client";

import { ClipboardPaste, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ExerciseEditorProps } from "../../client-types";
import { emptyWord, MAX_WORDS, parseWordList, type GlossaryContent, type GlossaryWord } from "./schema";

/** Words with a translation or definition, typed one by one or pasted as a list. */
export function GlossaryEditor({ value, onChange }: ExerciseEditorProps<GlossaryContent, null>) {
  const t = useTranslations("exercises.glossary");
  const [pasting, setPasting] = useState(false);
  const [list, setList] = useState("");
  const words = value.content.words;
  const set = (next: GlossaryWord[]) => onChange({ content: { words: next.length ? next : [emptyWord()] }, key: null });
  const update = (id: string, patch: Partial<GlossaryWord>) => set(words.map((w) => (w.id === id ? { ...w, ...patch } : w)));

  function addList() {
    const parsed = parseWordList(list).map((w) => emptyWord(w.term, w.meaning, w.example));
    // Replace the empty first row, add after the others.
    const kept = words.filter((w) => w.term.trim() || w.meaning.trim() || w.example.trim());
    set([...kept, ...parsed].slice(0, MAX_WORDS));
    setList("");
    setPasting(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-2">
        {words.map((w, i) => (
          <li key={w.id} className="grid grid-cols-[1fr_auto] gap-2 rounded-lg border p-2 sm:grid-cols-[1fr_1.4fr_1.4fr_auto]">
            <Input aria-label={t("term", { n: i + 1 })} placeholder={t("termPlaceholder")} value={w.term} maxLength={200} onChange={(e) => update(w.id, { term: e.target.value })} />
            <Button type="button" variant="ghost" size="icon" className="sm:order-last" aria-label={t("remove", { n: i + 1 })} title={t("remove", { n: i + 1 })} onClick={() => set(words.filter((x) => x.id !== w.id))}>
              <Trash2 aria-hidden="true" />
            </Button>
            <Input className="col-span-2 sm:col-span-1" aria-label={t("meaning", { n: i + 1 })} placeholder={t("meaningPlaceholder")} value={w.meaning} maxLength={500} onChange={(e) => update(w.id, { meaning: e.target.value })} />
            <Input className="col-span-2 sm:col-span-1" aria-label={t("example", { n: i + 1 })} placeholder={t("examplePlaceholder")} value={w.example} maxLength={500} onChange={(e) => update(w.id, { example: e.target.value })} />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" size="sm" disabled={words.length >= MAX_WORDS} onClick={() => set([...words, emptyWord()])}>
          <Plus aria-hidden="true" />
          {t("add")}
        </Button>
        <Button type="button" variant="outline" size="sm" aria-expanded={pasting} onClick={() => setPasting(!pasting)}>
          <ClipboardPaste aria-hidden="true" />
          {t("paste")}
        </Button>
      </div>
      {pasting && (
        <div className="flex flex-col gap-2 rounded-lg border bg-muted/30 p-2">
          <Textarea aria-label={t("pasteLabel")} placeholder={t("pastePlaceholder")} rows={5} value={list} onChange={(e) => setList(e.target.value)} />
          <p className="text-xs text-muted-foreground">{t("pasteHint")}</p>
          <Button type="button" size="sm" className="self-start" disabled={parseWordList(list).length === 0} onClick={addList}>
            {t("pasteAdd", { count: parseWordList(list).length })}
          </Button>
        </div>
      )}
    </div>
  );
}
