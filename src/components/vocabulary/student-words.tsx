"use client";

import { GraduationCap, MoreHorizontal, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import type { ClassStudent } from "@/features/classes/queries";
import type { LanguageOption } from "@/features/courses/languages";
import { LEARNED } from "@/features/trainer/ladder";
import { deleteWord } from "@/features/vocabulary/actions";
import type { Word } from "@/features/vocabulary/queries";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SpeakButton } from "./speak-button";
import { StatusBadge } from "./status-badge";
import { WordDialog } from "./word-dialog";

type Tab = "learning" | "learned" | "all";

/**
 * The student's words as the teacher sees them: learning / learned / all,
 * search, "Add a word" for this student; words the teacher added can be
 * edited or removed.
 */
export function StudentWords({
  words,
  student,
  classId,
  defaultLanguage,
  languages,
}: {
  words: Word[];
  student: ClassStudent;
  classId: string;
  defaultLanguage: string;
  languages: LanguageOption[];
}) {
  const t = useTranslations("vocabulary");
  const tp = useTranslations("studentProgress");
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Word | null>(null);
  const [pending, startTransition] = useTransition();
  const place = { language: defaultLanguage, courseId: null, lessonId: null, classId };

  const q = query.trim().toLowerCase();
  const counts = {
    learning: words.filter((w) => w.stage < LEARNED).length,
    learned: words.filter((w) => w.stage >= LEARNED).length,
    all: words.length,
  };
  const shown = words.filter(
    (w) =>
      (tab === "all" || (tab === "learned" ? w.stage >= LEARNED : w.stage < LEARNED)) &&
      (!q || w.term.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q)),
  );

  function remove(word: Word) {
    startTransition(async () => {
      const r = await deleteWord(word.id);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(t("removedToast", { term: word.term }));
      router.refresh();
    });
  }

  return (
    <section className="flex flex-col gap-3" aria-label={tp("words")}>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="flex-1 font-medium">{tp("words")}</h2>
        <Button variant="outline" onClick={() => setAdding(true)}>
          <Plus aria-hidden="true" />
          {t("addWord")}
        </Button>
      </div>
      {words.length > 0 && (
        <>
          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={t("tabs")}>
            {(["all", "learning", "learned"] as const).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1 text-sm transition-colors",
                  tab === key ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-accent",
                )}
              >
                {t(`tab.${key}`)} <span className="tabular-nums opacity-80">{counts[key]}</span>
              </button>
            ))}
          </nav>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("search")} aria-label={t("search")} className="pl-9" />
          </div>
        </>
      )}
      {words.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{tp("noWords")}</p>
      ) : shown.length === 0 ? (
        <p className="py-6 text-center text-muted-foreground">{t("nothingFound")}</p>
      ) : (
        <ul className="flex flex-col gap-2" aria-label={tp("words")}>
          {shown.map((w) => (
            <li key={w.id} className="flex gap-2 rounded-2xl border bg-card p-3">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold break-words" lang={w.language}>
                    {w.term}
                  </span>
                  {w.transcription && <span className="text-sm text-muted-foreground">{w.transcription}</span>}
                  <SpeakButton term={w.term} language={w.language} audioUrl={w.audioUrl} />
                  <StatusBadge stage={w.stage} due={w.due} />
                </div>
                <p className={cn("break-words", !w.translation && "text-sm text-muted-foreground italic")}>
                  {w.translation || t("noTranslation")}
                </p>
                {(w.lessonTitle || w.fromTeacher) && (
                  <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    {w.fromTeacher && (
                      <Badge variant="secondary" className="gap-1">
                        <GraduationCap className="size-3" aria-hidden="true" />
                        {tp("fromYou")}
                      </Badge>
                    )}
                    {w.lessonTitle && <span>{[w.courseTitle, w.lessonTitle].filter(Boolean).join(" · ")}</span>}
                  </p>
                )}
              </div>
              {w.fromTeacher && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm" aria-label={t("actions", { term: w.term })} disabled={pending}>
                      <MoreHorizontal aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setEditing(w)}>
                      <Pencil aria-hidden="true" />
                      {t("edit")}
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive" onSelect={() => remove(w)}>
                      <Trash2 aria-hidden="true" />
                      {t("remove")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
      )}
      <WordDialog open={adding} onOpenChange={setAdding} place={place} students={[student]} languages={languages} />
      <WordDialog
        open={editing !== null}
        onOpenChange={(open) => !open && setEditing(null)}
        place={{ ...place, language: editing?.language ?? defaultLanguage }}
        editId={editing?.id}
        initial={editing ?? undefined}
      />
    </section>
  );
}
