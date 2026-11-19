// Course content as code: small helpers that build lesson blocks exactly the
// way the lesson builder stores them (the same build functions and schemas),
// so a loaded lesson opens in the builder as if a teacher had made it.
//
//   lesson("Nice to meet you", [
//     section("Warm-up", [note("Today you…", "- say hello", { shown: true }), …]),
//     homework([gaps("Fill in the gaps.", "I [am] Aigerim."), …]),
//   ])
//
// Ids are made from the lesson's name and a counter, so loading the same
// lesson again gives the same ids.
import type { ExerciseTypeId } from "@/features/exercises/catalog";
import { getDefinition } from "@/features/exercises/definitions";
import { hashString } from "@/features/exercises/shuffle";
import { buildCategorize } from "@/features/exercises/types/categorize/schema";
import { buildGapDrag } from "@/features/exercises/types/gap_drag/schema";
import { buildGapInput } from "@/features/exercises/types/gap_input/schema";
import { buildGapSelect } from "@/features/exercises/types/gap_select/schema";
import { buildMatching } from "@/features/exercises/types/matching/schema";
import { buildOrdering } from "@/features/exercises/types/ordering/schema";
import type { TextDoc } from "@/features/exercises/types/text/schema";

// ---------------------------------------------------------------------------
// Ids
// ---------------------------------------------------------------------------

let idSeed = "";
let idCount = 0;
/** A short id (the format of item ids), the same on every load of the lesson. */
function nextId(): string {
  idCount++;
  const a = hashString(`${idSeed}#${idCount}`).toString(36);
  const b = hashString(`${idCount}#${idSeed}`).toString(36);
  return (a + b).replace(/[^a-z0-9]/g, "").padEnd(8, "0").slice(0, 8);
}

// ---------------------------------------------------------------------------
// Text: a tiny Markdown → the text editor's document
// ---------------------------------------------------------------------------

type Mark = { type: "bold" } | { type: "italic" } | { type: "highlight"; attrs: { color: "#fef08a" } };
type Inline = { type: "text"; text: string; marks?: Mark[] } | { type: "hardBreak" };
type Block = { type: string; attrs?: Record<string, unknown>; content?: unknown[] };

/** **bold**, *italic*, ==highlight==; a line break inside a paragraph stays a line break. */
function inline(text: string): Inline[] {
  const out: Inline[] = [];
  const lines = text.split("\n");
  lines.forEach((line, li) => {
    if (li > 0) out.push({ type: "hardBreak" });
    const re = /(\*\*[^*]+\*\*|==[^=]+==|\*[^*]+\*)/g;
    let last = 0;
    for (let m = re.exec(line); m; m = re.exec(line)) {
      if (m.index > last) out.push({ type: "text", text: line.slice(last, m.index) });
      const token = m[0];
      if (token.startsWith("**")) out.push({ type: "text", text: token.slice(2, -2), marks: [{ type: "bold" }] });
      else if (token.startsWith("==")) out.push({ type: "text", text: token.slice(2, -2), marks: [{ type: "highlight", attrs: { color: "#fef08a" } }] });
      else out.push({ type: "text", text: token.slice(1, -1), marks: [{ type: "italic" }] });
      last = m.index + token.length;
    }
    if (last < line.length) out.push({ type: "text", text: line.slice(last) });
  });
  return out.filter((n) => n.type === "hardBreak" || n.text.length > 0);
}

const paragraph = (text: string): Block => {
  const content = inline(text);
  return content.length ? { type: "paragraph", content } : { type: "paragraph" };
};

/**
 * Markdown-like text: blank lines separate blocks; "## " and "### " are
 * headings; lines starting "- " make a list, "1. " a numbered list; "> " a quote.
 */
export function md(source: string): TextDoc {
  const blocks: Block[] = [];
  for (const chunk of source.trim().split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((l) => l.trimEnd());
    const first = lines[0]!.trim();
    if (first.startsWith("### ")) blocks.push({ type: "heading", attrs: { level: 3 }, content: inline(lines.join("\n").trim().slice(4)) });
    else if (first.startsWith("## ")) blocks.push({ type: "heading", attrs: { level: 2 }, content: inline(lines.join("\n").trim().slice(3)) });
    else if (lines.every((l) => /^\s*- /.test(l))) {
      blocks.push({ type: "bulletList", content: lines.map((l) => ({ type: "listItem", content: [paragraph(l.replace(/^\s*- /, ""))] })) });
    } else if (lines.every((l) => /^\s*\d+\. /.test(l))) {
      blocks.push({ type: "orderedList", attrs: { start: 1 }, content: lines.map((l) => ({ type: "listItem", content: [paragraph(l.replace(/^\s*\d+\. /, ""))] })) });
    } else if (lines.every((l) => /^\s*> ?/.test(l))) {
      blocks.push({ type: "blockquote", content: [paragraph(lines.map((l) => l.replace(/^\s*> ?/, "")).join("\n"))] });
    } else blocks.push(paragraph(lines.join("\n").trim()));
  }
  return { type: "doc", content: blocks } as TextDoc;
}

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

export type ContentBlock = { type: ExerciseTypeId; title: string; content: unknown; key: unknown };
export type ContentSection = { title: string; kind: "lesson" | "homework"; blocks: ContentBlock[] };
export type ContentLesson = { title: string; sections: ContentSection[] };

/** Optional "on top" part of an exercise with answers: a text to read. */
type Extra = { read?: string };
const attach = (extra?: Extra) => (extra?.read ? { attachment: { kind: "text", doc: md(extra.read) } } : {});

export function text(title: string, source: string): ContentBlock {
  return { type: "text", title, content: { doc: md(source) }, key: null };
}

/** A note: hidden from students unless `shown`. */
export function note(title: string, source: string, options: { shown?: boolean } = {}): ContentBlock {
  const doc = md(source);
  const shown = options.shown ?? false;
  return { type: "note", title, content: { shown, doc: shown ? doc : null }, key: { doc } };
}

/** A teacher's tip (hidden note). */
export const tip = (source: string) => note("Teacher's note", source);
/** What the student sees as the rule / goals / tip (shown note). */
export const box = (title: string, source: string) => note(title, source, { shown: true });

/** The "Words" block: [word, meaning, example?]. */
export function words(title: string, list: [string, string, string?][]): ContentBlock {
  return {
    type: "glossary",
    title,
    content: { words: list.map(([term, meaning, example]) => ({ id: nextId(), term, meaning, example: example ?? "" })) },
    key: null,
  };
}

/** Fill in the gaps by typing: "I [am] from [Kazakhstan]." (several answers: [do not/don't]). */
export function gaps(title: string, source: string, extra?: Extra & { caseSensitive?: boolean }): ContentBlock {
  const built = buildGapInput(source, extra?.caseSensitive ?? false);
  return { type: "gap_input", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Choose in a list: "She [*is/are/am] happy." */
export function choose(title: string, source: string, extra?: Extra): ContentBlock {
  const built = buildGapSelect(source);
  if (built.problems.length) throw new Error(`"${title}": every gap needs 2+ options and one * (${JSON.stringify(built.problems)})`);
  return { type: "gap_select", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Drag words into the gaps: "I [am] from Almaty." + extra wrong words. */
export function drag(title: string, source: string, distractors: string[] = [], extra?: Extra): ContentBlock {
  const built = buildGapDrag(source, distractors.join(", "), nextId());
  return { type: "gap_drag", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Questions with options; the right ones start with "*". */
export function quiz(title: string, questions: { q: string; options: string[] }[], extra?: Extra): ContentBlock {
  const correct: Record<string, string[]> = {};
  const list = questions.map(({ q, options }) => {
    const id = nextId();
    const opts = options.map((o) => ({ id: nextId(), text: o.replace(/^\*/, ""), right: o.startsWith("*") }));
    correct[id] = opts.filter((o) => o.right).map((o) => o.id);
    if (!correct[id]!.length) throw new Error(`"${title}": "${q}" has no right option (*)`);
    return { id, text: q, multiple: correct[id]!.length > 1, options: opts.map(({ id: oid, text: t }) => ({ id: oid, text: t })) };
  });
  return { type: "multiple_choice", title, content: { questions: list, ...attach(extra) }, key: { correct } };
}

/** True or false: [statement, isTrue]. */
export function trueFalse(title: string, list: [string, boolean][], extra?: Extra): ContentBlock {
  const answers: Record<string, boolean> = {};
  const statements = list.map(([s, right]) => {
    const id = nextId();
    answers[id] = right;
    return { id, text: s };
  });
  return { type: "true_false", title, content: { statements, ...attach(extra) }, key: { answers } };
}

/** Match: [left, right]. */
export function match(title: string, pairs: [string, string][], extra?: Extra): ContentBlock {
  const built = buildMatching({
    salt: nextId(),
    pairs: pairs.map(([l, r]) => ({ id: nextId(), left: { kind: "text", text: l }, right: r })),
  });
  return { type: "matching", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Put in order: sentences (words are shuffled) or, with mode "lines", one item per line. */
export function order(title: string, tasks: string[], mode: "words" | "lines" = "words", extra?: Extra): ContentBlock {
  const built = buildOrdering({ salt: nextId(), mode, tasks: tasks.map((source) => ({ id: nextId(), source })) });
  return { type: "ordering", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Sort into groups: { "Group": ["word", …] }. */
export function sort(title: string, groups: Record<string, string[]>, extra?: Extra): ContentBlock {
  const built = buildCategorize({
    salt: nextId(),
    groups: Object.entries(groups).map(([t, items]) => ({ id: nextId(), title: t, items: items.join("\n") })),
  });
  return { type: "categorize", title, content: { ...built.content, ...attach(extra) }, key: built.key };
}

/** Write an answer (checked by the teacher). */
export function write(title: string, minWords: number | null, extra?: Extra): ContentBlock {
  return { type: "open_answer", title, content: { minWords, ...attach(extra) }, key: null };
}

/** Record a voice answer (checked by the teacher). */
export function record(title: string, maxSeconds = 120, extra?: Extra): ContentBlock {
  return { type: "voice_answer", title, content: { maxSeconds, ...attach(extra) }, key: null };
}

/** A YouTube video (official channels only), or a place for one (null). */
export function video(title: string, youtubeId: string | null, caption = ""): ContentBlock {
  return { type: "video", title, content: { video: youtubeId ? { provider: "youtube", id: youtubeId } : null, caption }, key: null };
}

/** A place for audio (the file is added later); the script goes into a hidden note next to it. */
export function audio(title: string, caption = ""): ContentBlock {
  return { type: "audio", title, content: { file: null, caption }, key: null };
}

export function section(title: string, blocks: ContentBlock[]): ContentSection {
  return { title, kind: "lesson", blocks };
}

export function homework(blocks: ContentBlock[], title = "Homework"): ContentSection {
  return { title, kind: "homework", blocks };
}

/**
 * A lesson. `build` makes its sections; ids inside are made from `slug`
 * (e.g. "a1-1.1"), the same on every load.
 */
export function lesson(slug: string, title: string, build: () => ContentSection[]): ContentLesson & { slug: string } {
  idSeed = slug;
  idCount = 0;
  return { slug, title, sections: build() };
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

/**
 * What would stop a lesson from loading or working: blocks that don't pass
 * their type's schema, empty texts, gaps without answers. Empty list = fine.
 */
export function problems(l: ContentLesson): string[] {
  const out: string[] = [];
  l.sections.forEach((s, si) => {
    if (!s.title.trim()) out.push(`section ${si + 1}: no title`);
    s.blocks.forEach((b, bi) => {
      const where = `${l.title} › ${s.title} › ${bi + 1} (${b.type})`;
      const def = getDefinition(b.type);
      if (!def) return void out.push(`${where}: unknown type`);
      const content = def.contentSchema.safeParse(b.content);
      if (!content.success) out.push(`${where}: content — ${content.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
      if (def.keySchema) {
        const key = def.keySchema.safeParse(b.key);
        if (!key.success) out.push(`${where}: key — ${key.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
      } else if (b.key !== null) out.push(`${where}: this type has no key`);
      if (b.title.length > 500) out.push(`${where}: title too long`);
      const json = JSON.stringify(b.content);
      if (b.type === "gap_input" && !json.includes('"t":"gap"')) out.push(`${where}: no gaps`);
      // Formatting works only in texts and notes; anywhere else ** or == would show as is.
      if (/\*\*|==/.test(json)) out.push(`${where}: ** or == outside a text — formatting doesn't work here`);
    });
  });
  return out;
}

/** Lesson size by the template: blocks in class (without notes) and in homework. */
export function size(l: ContentLesson): { inClass: number; homework: number } {
  const count = (kind: "lesson" | "homework") =>
    l.sections.filter((s) => s.kind === kind).flatMap((s) => s.blocks).filter((b) => b.type !== "note").length;
  return { inClass: count("lesson"), homework: count("homework") };
}
