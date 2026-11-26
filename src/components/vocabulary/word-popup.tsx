"use client";

import { ChevronDown, Loader2, Pencil, Plus, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import type { ClassStudent } from "@/features/classes/queries";
import { addWord } from "@/features/vocabulary/actions";
import { canLookUp, type Lookup } from "@/features/vocabulary/lookup";
import type { WordPlace } from "@/features/vocabulary/schemas";
import { isTranslatable, sentenceAround, TRANSLATION_TARGETS, translationTarget } from "@/features/vocabulary/translate";
import { cn } from "@/lib/utils";
import { SpeakButton } from "./speak-button";

/** context: the sentence the word stands in (for a translation that fits it) */
type Selected = { term: string; context: string | null; top: number; bottom: number; left: number };
type Found = { variants: string[]; transcription: string; audioUrl: string | null };

const WIDTH = 320;
/** The translation language chosen when the interface is in the lesson's language (this browser only). */
const TARGET_KEY = "linguaroom.translateTo";

function savedTarget(): string | null {
  try {
    return window.localStorage.getItem(TARGET_KEY);
  } catch {
    return null;
  }
}

/** The selected word as it should go to the dictionary: no spaces or punctuation around it. */
function cleanSelection(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[\s"'«»“”‘’()[\]{}.,;:!?¡¿…—–-]+|[\s"'«»“”‘’()[\]{}.,;:!?¡¿…—–-]+$/g, "");
}

/** The sentence around a selection: from the text of its paragraph (or list item, cell…). */
function contextOf(range: Range): string | null {
  const start = range.startContainer;
  const el = start instanceof Element ? start : start.parentElement;
  const block = el?.closest("p, li, td, th, h1, h2, h3, h4, h5, h6, blockquote, dd, dt, figcaption, label") ?? el;
  if (!block) return null;
  try {
    const before = document.createRange();
    before.selectNodeContents(block);
    before.setEnd(range.startContainer, range.startOffset);
    const offset = before.toString().length;
    return sentenceAround(block.textContent ?? "", offset, offset + range.toString().length);
  } catch {
    return null;
  }
}

/** Selections in fields the user types in, in dialogs or in this popup are not words to translate. */
function ignored(node: Node | null): boolean {
  const el = node instanceof Element ? node : node?.parentElement;
  return Boolean(el?.closest("input, textarea, [contenteditable='true'], [role='dialog'], [role='alertdialog'], [data-word-popup]"));
}

/**
 * Select any word on the lesson page → its translation right away, and "+" to
 * put it into the dictionary. The teacher can pick another variant or type
 * their own, and chooses whose dictionaries get it.
 */
export function WordPopup({
  root,
  place,
  students,
}: {
  /** the part of the page where selected words are translated */
  root: React.RefObject<HTMLElement | null>;
  place: WordPlace;
  students?: ClassStudent[];
}) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const pinned = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    pinned.current = false;
    setSelected(null);
  }, []);

  useEffect(() => {
    function read() {
      if (pinned.current) return; // the user is working in the popup
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return setSelected(null);
      const range = sel.getRangeAt(0);
      const area = root.current;
      if (!area || !area.contains(range.commonAncestorContainer) || ignored(range.commonAncestorContainer)) return setSelected(null);
      const term = cleanSelection(sel.toString());
      if (!isTranslatable(term)) return setSelected(null);
      const rect = range.getBoundingClientRect();
      setSelected((prev) =>
        prev?.term === term && prev.top === rect.top
          ? prev
          : { term, context: contextOf(range), top: rect.top, bottom: rect.bottom, left: rect.left },
      );
    }
    // Wait until the selection settles (dragging, long press on a phone).
    function onChange() {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(read, 300);
    }
    function onScroll() {
      if (!pinned.current) setSelected(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("selectionchange", onChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("selectionchange", onChange);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [root, close]);

  // A press outside the popup (and outside its menu) closes it.
  useEffect(() => {
    if (!selected) return;
    function onDown(e: PointerEvent) {
      const target = e.target as Element | null;
      if (target?.closest("[data-word-popup], [data-radix-popper-content-wrapper]")) {
        pinned.current = true;
        return;
      }
      if (pinned.current) close();
    }
    document.addEventListener("pointerdown", onDown, true);
    return () => document.removeEventListener("pointerdown", onDown, true);
  }, [selected, close]);

  if (!selected) return null;
  return <PopupCard key={selected.term} selected={selected} place={place} students={students} onClose={close} />;
}

function PopupCard({
  selected,
  place,
  students,
  onClose,
}: {
  selected: Selected;
  place: WordPlace;
  students?: ClassStudent[];
  onClose: () => void;
}) {
  const t = useTranslations("vocabulary.popup");
  const locale = useLocale();
  const forTeacher = students !== undefined;
  // An English lesson with the interface in English: translate into another language the user picks.
  const sameLanguage = place.language === locale;
  const [target, setTarget] = useState(() => translationTarget(locale, place.language, sameLanguage ? savedTarget() : null));
  const translatable = target !== place.language;
  function chooseTarget(lang: string) {
    setTarget(lang);
    setLoading(true);
    try {
      window.localStorage.setItem(TARGET_KEY, lang);
    } catch {
      // not saved: the choice still works until the page is closed
    }
  }
  const [found, setFound] = useState<Found | null>(null);
  const [loading, setLoading] = useState(translatable);
  const [translation, setTranslation] = useState("");
  const [editing, setEditing] = useState(false);
  const [to, setTo] = useState<Set<string>>(() => new Set(students?.map((s) => s.id) ?? []));
  const [pending, startTransition] = useTransition();
  const { term, context } = selected;

  useEffect(() => {
    let cancelled = false;
    const get = async <T,>(url: string): Promise<T | null> => {
      try {
        const r = await fetch(url);
        return r.ok ? ((await r.json()) as T) : null;
      } catch {
        return null;
      }
    };
    void (async () => {
      const [tr, lookup] = await Promise.all([
        translatable
          ? get<{ variants: string[] }>(
              `/api/translate?term=${encodeURIComponent(term)}&from=${place.language}&to=${target}` +
                (context ? `&context=${encodeURIComponent(context)}` : ""),
            )
          : Promise.resolve(null),
        canLookUp(place.language) ? get<Lookup>(`/api/dictionary?term=${encodeURIComponent(term)}&lang=${place.language}`) : Promise.resolve(null),
      ]);
      if (cancelled) return;
      const variants = tr?.variants ?? [];
      setFound({ variants, transcription: lookup?.transcription ?? "", audioUrl: lookup?.audioUrl ?? null });
      setTranslation(variants[0] ?? "");
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [term, context, place.language, target, translatable]);

  function add() {
    startTransition(async () => {
      const r = await addWord({
        fields: {
          term,
          translation: translation.trim(),
          transcription: found?.transcription ?? "",
          example: "",
          audioUrl: found?.audioUrl ?? null,
        },
        place,
        studentIds: forTeacher ? [...to] : undefined,
      });
      if (!r.ok) return void toast.error(t("failed"));
      if (r.data.added === 0) toast.info(t("alreadyThere", { term }));
      else if (forTeacher) toast.success(t("addedForStudents", { term, count: r.data.added }));
      else toast.success(t("added", { term }));
      window.getSelection()?.removeAllRanges();
      onClose();
    });
  }

  // Phones: a bar at the bottom (the phone's own menu sits next to the words).
  // Computers: just above the selected words (below them near the top of the screen).
  const above = selected.top > 220;
  const style =
    typeof window !== "undefined" && window.matchMedia("(min-width: 640px) and (pointer: fine)").matches
      ? {
          left: Math.min(Math.max(8, selected.left), window.innerWidth - WIDTH - 8),
          ...(above ? { top: selected.top - 8, transform: "translateY(-100%)" } : { top: selected.bottom + 56 }),
          width: WIDTH,
        }
      : undefined;
  const variants = found?.variants ?? [];
  const showInput = forTeacher || editing || (!loading && variants.length === 0);
  const studentCount = students?.length ?? 0;

  return (
    <div
      data-word-popup
      role="dialog"
      aria-label={t("label", { term })}
      style={style}
      className={cn(
        "fixed z-50 flex flex-col gap-2 rounded-xl border bg-popover p-3 text-sm shadow-lg",
        !style && "inset-x-3 bottom-3",
      )}
      // Keep the words selected while pressing buttons (the selection is not needed after that).
      onMouseDown={(e) => {
        if (!(e.target as Element).closest("input")) e.preventDefault();
      }}
    >
      <div className="flex items-center gap-1">
        <span className="min-w-0 truncate text-base font-semibold" lang={place.language}>
          {term}
        </span>
        {found?.transcription && <span className="shrink-0 text-muted-foreground">{found.transcription}</span>}
        <SpeakButton term={term} language={place.language} audioUrl={found?.audioUrl} />
        <Button type="button" variant="ghost" size="icon-sm" className="ml-auto" aria-label={t("close")} onClick={onClose}>
          <X aria-hidden="true" />
        </Button>
      </div>

      {sameLanguage && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground" role="group" aria-label={t("translateTo")}>
          <span>{t("translateTo")}</span>
          {TRANSLATION_TARGETS.filter((l) => l !== place.language).map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={target === l}
              onClick={() => target !== l && chooseTarget(l)}
              className={cn(
                "rounded-full border px-2 py-0.5 transition-colors",
                target === l ? "border-primary bg-primary/10 text-primary" : "hover:bg-accent",
              )}
            >
              {t(`languages.${l}`)}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <p className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          {t("translating")}
        </p>
      ) : (
        <>
          {showInput ? (
            <Input
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              maxLength={500}
              aria-label={t("translation")}
              placeholder={variants.length === 0 ? t("typeTranslation") : t("ownTranslation")}
              autoFocus={editing}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !pending) add();
              }}
            />
          ) : (
            <div className="flex items-center gap-1">
              <p className="min-w-0 flex-1 text-base break-words">{translation}</p>
              <Button type="button" variant="ghost" size="icon-sm" aria-label={t("edit")} title={t("edit")} onClick={() => setEditing(true)}>
                <Pencil aria-hidden="true" />
              </Button>
            </div>
          )}
          {variants.length > 1 && (
            <div className="flex flex-wrap gap-1" role="group" aria-label={t("variants")}>
              {variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={translation === v}
                  onClick={() => setTranslation(v)}
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-xs transition-colors",
                    translation === v ? "border-primary bg-primary/10 text-primary" : "hover:bg-accent",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <div className="flex items-center gap-2">
        {forTeacher && studentCount > 1 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button" variant="outline" size="sm" className="min-w-0">
                <span className="truncate">{to.size === studentCount ? t("toAll") : t("toSome", { count: to.size })}</span>
                <ChevronDown aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {students!.map((s) => (
                <DropdownMenuCheckboxItem
                  key={s.id}
                  checked={to.has(s.id)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={(v) => {
                    const next = new Set(to);
                    if (v) next.add(s.id);
                    else next.delete(s.id);
                    setTo(next);
                  }}
                >
                  {s.fullName || t("noName")}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <Button
          type="button"
          size="sm"
          className="ml-auto"
          disabled={pending || loading || (forTeacher && to.size === 0)}
          onClick={add}
        >
          {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Plus aria-hidden="true" />}
          {forTeacher ? (studentCount > 1 ? t("addForStudents") : t("addForStudent")) : t("add")}
        </Button>
      </div>
      {forTeacher && studentCount === 0 && <p className="text-xs text-muted-foreground">{t("noStudents")}</p>}
    </div>
  );
}
