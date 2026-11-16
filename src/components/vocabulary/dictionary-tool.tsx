"use client";

import { BookA } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { ToolButton } from "@/components/classes/lesson-tools";
import type { ClassStudent } from "@/features/classes/queries";
import type { WordPlace } from "@/features/vocabulary/schemas";
import { useWordAdder, WordAdderContext } from "@/features/vocabulary/word-adder-context";
import { WordDialog } from "./word-dialog";

/**
 * Lets everything inside a class lesson add words: the "Dictionary" tool and
 * "To dictionary" on selected words. The teacher adds to students'
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
  const value = useMemo(
    () => ({
      open: (selected?: string) => {
        setTerm(selected?.trim().slice(0, 200) ?? "");
        setOpen(true);
      },
    }),
    [],
  );
  return (
    <WordAdderContext.Provider value={value}>
      {children}
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
