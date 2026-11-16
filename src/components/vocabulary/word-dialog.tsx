"use client";

import { Loader2, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import type { ClassStudent } from "@/features/classes/queries";
import type { LanguageOption } from "@/features/courses/languages";
import { addWord, updateWord } from "@/features/vocabulary/actions";
import { canLookUp, type Lookup } from "@/features/vocabulary/lookup";
import type { WordFields, WordPlace } from "@/features/vocabulary/schemas";
import { useRouter } from "@/i18n/navigation";
import { SpeakButton } from "./speak-button";

const EMPTY: WordFields = { term: "", translation: "", transcription: "", example: "", audioUrl: null };

/**
 * Adding (or editing) a word card: word, translation, transcription, example.
 * For English the transcription and recording are looked up by themselves.
 * A teacher picks whose dictionaries get the word.
 */
export function WordDialog({
  open,
  onOpenChange,
  place,
  initial,
  editId,
  students,
  languages,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  place: WordPlace;
  /** prefilled fields (a selected word, or the word being edited) */
  initial?: Partial<WordFields>;
  /** editing this word instead of adding */
  editId?: string;
  /** the teacher's side: the class's students */
  students?: ClassStudent[];
  /** on the Dictionary page: the word's language can be chosen */
  languages?: LanguageOption[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
        {/* New fields each time it opens. */}
        {open && <WordForm place={place} initial={initial} editId={editId} students={students} languages={languages} onDone={() => onOpenChange(false)} />}
      </DialogContent>
    </Dialog>
  );
}

function WordForm({
  place,
  initial,
  editId,
  students,
  languages,
  onDone,
}: {
  place: WordPlace;
  initial?: Partial<WordFields>;
  editId?: string;
  students?: ClassStudent[];
  languages?: LanguageOption[];
  onDone: () => void;
}) {
  const t = useTranslations("vocabulary");
  const router = useRouter();
  const [fields, setFields] = useState<WordFields>({ ...EMPTY, ...initial });
  const [language, setLanguage] = useState(place.language);
  const where = { ...place, language };
  const [to, setTo] = useState<Set<string>>(() => new Set(students?.map((s) => s.id) ?? []));
  const [looking, setLooking] = useState(false);
  const [pending, startTransition] = useTransition();
  const lookedUp = useRef<string | null>(initial?.transcription ? (initial.term ?? null) : null);
  const forTeacher = students !== undefined;

  const set = (patch: Partial<WordFields>) => setFields((f) => ({ ...f, ...patch }));

  async function lookUp(term: string) {
    const word = term.trim();
    if (!word || !canLookUp(language) || lookedUp.current === word.toLowerCase()) return;
    lookedUp.current = word.toLowerCase();
    setLooking(true);
    try {
      const response = await fetch(`/api/dictionary?term=${encodeURIComponent(word)}&lang=${language}`);
      if (!response.ok) return;
      const found = (await response.json()) as Lookup & { ok: boolean };
      // Only fill what is still empty: the student's own text wins.
      setFields((f) =>
        f.term.trim().toLowerCase() !== word.toLowerCase()
          ? f
          : {
              ...f,
              transcription: f.transcription || found.transcription,
              audioUrl: f.audioUrl ?? found.audioUrl,
              example: f.example || found.example,
            },
      );
    } catch {
      // No dictionary right now: the fields stay as they are.
    } finally {
      setLooking(false);
    }
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.term.trim()) return;
    startTransition(async () => {
      if (editId) {
        const r = await updateWord(editId, fields);
        if (!r.ok) return void toast.error(r.error === "invalid" ? t("duplicate") : t("failed"));
        toast.success(t("savedToast"));
      } else {
        const r = await addWord({ fields, place: where, studentIds: forTeacher ? [...to] : undefined });
        if (!r.ok) return void toast.error(t("failed"));
        if (r.data.added === 0) toast.info(t("alreadyThere", { term: fields.term.trim() }));
        else if (forTeacher) toast.success(t("addedForStudents", { count: r.data.added }));
        else toast.success(t("addedToast", { term: fields.term.trim() }));
      }
      router.refresh();
      onDone();
    });
  }

  return (
    <form onSubmit={save} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>{editId ? t("editTitle") : forTeacher ? t("addForStudentsTitle") : t("addTitle")}</DialogTitle>
        <DialogDescription>{forTeacher ? t("addForStudentsHint") : t("addHint")}</DialogDescription>
      </DialogHeader>
      {languages && !editId && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="word-language">{t("language")}</Label>
          <NativeSelect
            id="word-language"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              lookedUp.current = null;
            }}
          >
            {languages.map((l) => (
              <NativeSelectOption key={l.code} value={l.code}>
                {l.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="word-term">{t("term")}</Label>
        <div className="flex items-center gap-1">
          <Input
            id="word-term"
            value={fields.term}
            maxLength={200}
            autoFocus={!initial?.term}
            onChange={(e) => {
              // A different word: its old transcription and recording no longer fit.
              const changed = e.target.value.trim().toLowerCase() !== fields.term.trim().toLowerCase();
              set(changed && lookedUp.current ? { term: e.target.value, transcription: "", audioUrl: null } : { term: e.target.value });
              if (changed) lookedUp.current = null;
            }}
            onBlur={() => void lookUp(fields.term)}
          />
          <SpeakButton term={fields.term} language={language} audioUrl={fields.audioUrl} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="word-translation">{t("translation")}</Label>
        <Input
          id="word-translation"
          value={fields.translation}
          maxLength={500}
          autoFocus={Boolean(initial?.term) && !editId}
          onFocus={() => void lookUp(fields.term)}
          onChange={(e) => set({ translation: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="word-transcription" className="flex items-center gap-2">
          {t("transcription")}
          {looking && (
            <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
              <Loader2 className="size-3 animate-spin" aria-hidden="true" />
              {t("lookingUp")}
            </span>
          )}
        </Label>
        <Input id="word-transcription" value={fields.transcription} maxLength={200} placeholder="/ˈæp.əl/" onChange={(e) => set({ transcription: e.target.value })} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="word-example">{t("example")}</Label>
        <Textarea id="word-example" value={fields.example} maxLength={1000} rows={2} onChange={(e) => set({ example: e.target.value })} />
      </div>
      {forTeacher && students.length > 1 && (
        <section className="flex flex-col gap-2" aria-label={t("to")}>
          <h3 className="text-sm font-medium">{t("to")}</h3>
          {students.map((s) => (
            <Label key={s.id} className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={to.has(s.id)}
                onCheckedChange={(v) => {
                  const next = new Set(to);
                  if (v === true) next.add(s.id);
                  else next.delete(s.id);
                  setTo(next);
                }}
              />
              {s.fullName || t("noName")}
            </Label>
          ))}
        </section>
      )}
      {forTeacher && students.length === 0 && <p className="text-sm text-muted-foreground">{t("noStudents")}</p>}
      <Button type="submit" disabled={pending || !fields.term.trim() || (forTeacher && to.size === 0)}>
        {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : !editId && <Plus aria-hidden="true" />}
        {editId ? t("save") : t("add")}
      </Button>
    </form>
  );
}
