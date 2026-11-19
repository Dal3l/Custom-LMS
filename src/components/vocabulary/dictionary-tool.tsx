"use client";

import { BookA } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useRef, useState } from "react";
import { ToolButton } from "@/components/classes/lesson-tools";
import type { ClassStudent } from "@/features/classes/queries";
import type { WordPlace } from "@/features/vocabulary/schemas";
import { addWords } from "@/features/vocabulary/actions";
import { useWordAdder, WordAdderContext, type WordAdder } from "@/features/vocabulary/word-adder-context";
import { WordDialog } from "./word-dialog";
import { WordPopup } from "./word-popup";

/**
 * Lets everything inside a class lesson add words: the "Dictionary" tool and
 * the translation popup on selected words. The teacher adds to students'
 * dictionaries (all or chosen), the student to their own.
 */
export function WordAdderProvider({
  place,
  students,
  children,
}: {
  place: WordPlace;
  /** the teacher's side */
  students?: ClassStudent[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const value = useMemo<WordAdder>(
    () => ({
      open: (selected?: string) => {
        setTerm(selected?.trim().slice(0, 200) ?? "");
        setOpen(true);
      },
      forStudents: students !== undefined,
      addWords: async (words) => {
        const studentIds = students?.map((s) => s.id);
        if (studentIds && studentIds.length === 0) return null;
        const r = await addWords({
          words: words.map((w) => ({ ...w, transcription: "", audioUrl: null })),
          place,
          studentIds,
        });
        return r.ok ? r.data : null;
      },
    }),
    [place, students],
  );
  return (
    <WordAdderContext.Provider value={value}>
      {/* Words selected anywhere in here get a translation and "+". */}
      <div ref={root} className="contents">
        {children}
      </div>
      <WordPopup root={root} place={place} students={students} />
      <WordDialog open={open} onOpenChange={setOpen} place={place} initial={term ? { term } : undefined} students={students} />
    </WordAdderContext.Provider>
  );
}

/** The "Dictionary" button in the lesson's tools column. */
export function DictionaryTool() {
  const t = useTranslations("tools");
  const adder = useWordAdder();
  return (
    <ToolButton label={t("dictionary")} onClick={() => adder?.open()}>
      <BookA aria-hidden="true" />
    </ToolButton>
  );
}
