import type { Editor } from "@tiptap/react";

// Highlights that readers add on top of a text (kept apart from the teacher's
// own colours in the lesson builder). In a class they are shared: the teacher
// sees a student's, students see the teacher's (see marks.tsx). Elsewhere
// (the teacher's preview) they are remembered on this device only.

/** The student's highlight colour. */
export const STUDENT_COLOR = "#fed7aa";
/** The teacher's highlight colour (in a class lesson). */
export const TEACHER_COLOR = "#bfdbfe";
const READER_COLORS = [STUDENT_COLOR, TEACHER_COLOR];

export type Range = { from: number; to: number; text: string };

const storageKey = (exerciseId: string) => `linguaroom:highlights:${exerciseId}`;

/** Ranges of text carrying a highlight of this colour, merged. */
export function rangesOf(editor: Editor, color: string): Range[] {
  const ranges: Range[] = [];
  editor.state.doc.descendants((node, pos) => {
    if (!node.isText) return;
    const marked = node.marks.some((m) => m.type.name === "highlight" && m.attrs.color === color);
    if (!marked) return;
    const last = ranges[ranges.length - 1];
    if (last && last.to === pos) last.to = pos + node.nodeSize;
    else ranges.push({ from: pos, to: pos + node.nodeSize, text: "" });
  });
  return ranges.map((r) => ({ ...r, text: editor.state.doc.textBetween(r.from, r.to) }));
}

export function applyHighlight(editor: Editor, from: number, to: number, color: string, on: boolean) {
  const type = editor.schema.marks.highlight;
  if (!type || from >= to) return;
  const mark = type.create({ color });
  const tr = on ? editor.state.tr.addMark(from, to, mark) : editor.state.tr.removeMark(from, to, mark);
  editor.view.dispatch(tr);
}

/** Only well-formed ranges whose text is still the same (the teacher may have edited the text since). */
export function validRanges(editor: Editor, value: unknown): Range[] {
  const size = editor.state.doc.content.size;
  return (Array.isArray(value) ? value : []).filter(
    (r): r is Range =>
      typeof r?.from === "number" &&
      typeof r?.to === "number" &&
      r.from >= 0 &&
      r.to <= size &&
      r.from < r.to &&
      editor.state.doc.textBetween(r.from, r.to) === r.text,
  );
}

/** Replaces all readers' highlights with these (own and others', each in its colour). */
export function showHighlights(editor: Editor, layers: { color: string; ranges: unknown }[]) {
  const type = editor.schema.marks.highlight;
  if (!type) return;
  let tr = editor.state.tr;
  const size = editor.state.doc.content.size;
  for (const color of READER_COLORS) tr = tr.removeMark(0, size, type.create({ color }));
  editor.view.dispatch(tr);
  for (const layer of layers) {
    for (const r of validRanges(editor, layer.ranges)) applyHighlight(editor, r.from, r.to, layer.color, true);
  }
}

export function saveLocalHighlights(exerciseId: string, editor: Editor) {
  try {
    localStorage.setItem(storageKey(exerciseId), JSON.stringify(rangesOf(editor, STUDENT_COLOR)));
  } catch {
    /* private mode or storage blocked: highlights just won't be remembered */
  }
}

export function loadLocalHighlights(exerciseId: string): unknown {
  try {
    return JSON.parse(localStorage.getItem(storageKey(exerciseId)) ?? "[]");
  } catch {
    return [];
  }
}
