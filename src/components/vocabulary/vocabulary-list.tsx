"use client";

import { BookA, GraduationCap, MoreHorizontal, Pencil, Plus, RotateCcw, Search, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { LanguageOption } from "@/features/courses/languages";
import { relearnWord } from "@/features/trainer/actions";
import { LEARNED, wordStatus } from "@/features/trainer/ladder";
import { deleteWord } from "@/features/vocabulary/actions";
import type { Word } from "@/features/vocabulary/queries";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SpeakButton } from "./speak-button";
import { WordDialog } from "./word-dialog";

const NO_PLACE = { courseId: null, lessonId: null, classId: null };
type Tab = "learning" | "learned" | "all";

/** New / learning (with the ladder step) / learned. */
function StatusBadge({ stage, reviews }: { stage: number; reviews: number }) {
  const t = useTranslations("vocabulary.status");
  const status = wordStatus(stage, reviews);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium",
        status === "new" && "border-sky-200 bg-sky-50 text-sky-800",
        status === "learning" && "border-amber-200 bg-amber-50 text-amber-900",
        status === "learned" && "border-emerald-200 bg-emerald-50 text-emerald-800",
      )}
      title={status === "learning" ? t("step", { step: stage, total: LEARNED }) : undefined}
    >
      {t(status)}
      {status === "learning" && (
        <span className="flex gap-0.5" aria-label={t("step", { step: stage, total: LEARNED })}>
          {Array.from({ length: LEARNED }, (_, i) => (
            <span key={i} className={cn("size-1.5 rounded-full", i < stage ? "bg-amber-600" : "bg-amber-200")} />
          ))}
        </span>
      )}
    </span>
  );
}

/** The Dictionary page: the student's words with search, course / lesson filters and editing. */
export function VocabularyList({
  words,
  defaultLanguage,
  languages,
}: {
  words: Word[];
  defaultLanguage: string;
  languages: LanguageOption[];
}) {
  const t = useTranslations("vocabulary");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<Tab>("learning");
  const [courseId, setCourseId] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Word | null>(null);
  const [removing, setRemoving] = useState<Word | null>(null);
  const [pending, startTransition] = useTransition();

  const courses = useMemo(() => {
    const map = new Map<string, string>();
    for (const w of words) if (w.courseId) map.set(w.courseId, w.courseTitle || t("unknownCourse"));
    return [...map].map(([id, title]) => ({ id, title })).sort((a, b) => a.title.localeCompare(b.title));
  }, [words, t]);
  const lessons = useMemo(() => {
    const map = new Map<string, string>();
    for (const w of words) if (w.lessonId && w.courseId === courseId) map.set(w.lessonId, w.lessonTitle || t("unknownLesson"));
    return [...map].map(([id, title]) => ({ id, title }));
  }, [words, courseId, t]);

  const q = query.trim().toLowerCase();
  const inTab = (w: Word) => tab === "all" || (tab === "learned" ? w.stage >= LEARNED : w.stage < LEARNED);
  const counts = {
    learning: words.filter((w) => w.stage < LEARNED).length,
    learned: words.filter((w) => w.stage >= LEARNED).length,
    all: words.length,
  };
  const shown = words.filter(
    (w) =>
      inTab(w) &&
      (!courseId || w.courseId === courseId) &&
      (!lessonId || w.lessonId === lessonId) &&
      (!q || w.term.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q)),
  );

  function relearn(word: Word) {
    startTransition(async () => {
      const r = await relearnWord(word.id);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(t("relearnToast", { term: word.term }));
      router.refresh();
    });
  }

  function remove(word: Word) {
    startTransition(async () => {
      const r = await deleteWord(word.id);
      setRemoving(null);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(t("removedToast", { term: word.term }));
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle", { count: words.length })}</p>
        </div>
        <Button onClick={() => setAdding(true)}>
          <Plus aria-hidden="true" />
          {t("addWord")}
        </Button>
      </div>

      {words.length > 0 && (
        <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={t("tabs")}>
          {(["learning", "learned", "all"] as const).map((key) => (
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
      )}

      {words.length > 0 && (
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search")}
              aria-label={t("search")}
              className="pl-9"
            />
          </div>
          {courses.length > 0 && (
            <NativeSelect
              aria-label={t("course")}
              value={courseId}
              onChange={(e) => {
                setCourseId(e.target.value);
                setLessonId("");
              }}
            >
              <NativeSelectOption value="">{t("allCourses")}</NativeSelectOption>
              {courses.map((c) => (
                <NativeSelectOption key={c.id} value={c.id}>
                  {c.title}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          )}
          {courseId && lessons.length > 0 && (
            <NativeSelect aria-label={t("lesson")} value={lessonId} onChange={(e) => setLessonId(e.target.value)}>
              <NativeSelectOption value="">{t("allLessons")}</NativeSelectOption>
              {lessons.map((l) => (
                <NativeSelectOption key={l.id} value={l.id}>
                  {l.title}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          )}
        </div>
      )}

      {words.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <BookA className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-medium">{t("emptyTitle")}</h2>
          <p className="max-w-md text-muted-foreground">{t("emptyText")}</p>
        </div>
      ) : shown.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">
          {q || courseId ? t("nothingFound") : tab === "learned" ? t("noLearnedYet") : t("nothingToLearn")}
        </p>
      ) : (
        <ul className="flex flex-col gap-2" aria-label={t("title")}>
          {shown.map((w) => (
            <li key={w.id} className="flex gap-2 rounded-2xl border bg-card p-3">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-lg font-semibold break-words" lang={w.language}>
                    {w.term}
                  </span>
                  {w.transcription && <span className="text-sm text-muted-foreground">{w.transcription}</span>}
                  <SpeakButton term={w.term} language={w.language} audioUrl={w.audioUrl} />
                  <StatusBadge stage={w.stage} reviews={w.reviews} />
                </div>
                {w.translation ? (
                  <p className="break-words">{w.translation}</p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">{t("noTranslation")}</p>
                )}
                {w.example && (
                  <p className="text-sm break-words text-muted-foreground italic" lang={w.language}>
                    {w.example}
                  </p>
                )}
                {(w.lessonTitle || w.fromTeacher) && (
                  <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    {w.fromTeacher && (
                      <Badge variant="secondary" className="gap-1">
                        <GraduationCap className="size-3" aria-hidden="true" />
                        {t("fromTeacher")}
                      </Badge>
                    )}
                    {w.lessonTitle && <span>{[w.courseTitle, w.lessonTitle].filter(Boolean).join(" · ")}</span>}
                  </p>
                )}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-sm" aria-label={t("actions", { term: w.term })}>
                    <MoreHorizontal aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => setEditing(w)}>
                    <Pencil aria-hidden="true" />
                    {t("edit")}
                  </DropdownMenuItem>
                  {w.reviews > 0 && (
                    <DropdownMenuItem onSelect={() => relearn(w)}>
                      <RotateCcw aria-hidden="true" />
                      {t("relearn")}
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem variant="destructive" onSelect={() => setRemoving(w)}>
                    <Trash2 aria-hidden="true" />
                    {t("remove")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      )}

      <WordDialog open={adding} onOpenChange={setAdding} place={{ ...NO_PLACE, language: defaultLanguage }} languages={languages} />
      <WordDialog
        open={editing !== null}
        onOpenChange={(open) => !open && setEditing(null)}
        place={{ ...NO_PLACE, language: editing?.language ?? defaultLanguage }}
        editId={editing?.id}
        initial={editing ?? undefined}
      />
      <AlertDialog open={removing !== null} onOpenChange={(open) => !open && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("removeTitle", { term: removing?.term ?? "" })}</AlertDialogTitle>
            <AlertDialogDescription>{t("removeText")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction disabled={pending} onClick={() => removing && remove(removing)}>
              {t("remove")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
