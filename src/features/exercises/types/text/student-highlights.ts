import type { Editor } from "@tiptap/react";

// The student's own highlights in a text. Kept apart from the teacher's colours.
// Until students have accounts (stage 2) they are remembered on this device only.

export const STUDENT_COLOR = "#fed7aa";
type Range = { from: number; to: number; text: string };

const storageKey = (exerciseId: string) => `linguaroom:highlights:${exerciseId}`;

/** Ranges of text carrying the student's highlight, merged. */
export function studentRanges(editor: Editor): Range[] {
  const ranges: Range[] = [];
  editor.state.doc.descendants((node, pos) => {
    if (!node.isText) return;
    const marked = node.marks.some((m) => m.type.name === "highlight" && m.attrs.color === STUDENT_COLOR);
    if (!marked) return;
    const last = ranges[ranges.length - 1];
    if (last && last.to === pos) last.to = pos + node.nodeSize;
    else ranges.push({ from: pos, to: pos + node.nodeSize, text: "" });
  });
  return ranges.map((r) => ({ ...r, text: editor.state.doc.textBetween(r.from, r.to) }));
}

export function applyStudentHighlight(editor: Editor, from: number, to: number, on: boolean) {
  const type = editor.schema.marks.highlight;
  if (!type || from >= to) return;
  const mark = type.create({ color: STUDENT_COLOR });
  const tr = on ? editor.state.tr.addMark(from, to, mark) : editor.state.tr.removeMark(from, to, mark);
  editor.view.dispatch(tr);
}

export function saveHighlights(exerciseId: string, editor: Editor) {
  try {
    localStorage.setItem(storageKey(exerciseId), JSON.stringify(studentRanges(editor)));
  } catch {
    /* private mode or storage blocked: highlights just won't be remembered */
  }
}

/** Puts saved highlights back, skipping any whose text changed since. */
export function restoreHighlights(exerciseId: string, editor: Editor) {
  let saved: Range[] = [];
  try {
    saved = JSON.parse(localStorage.getItem(storageKey(exerciseId)) ?? "[]") as Range[];
  } catch {
    return;
  }
  const size = editor.state.doc.content.size;
  for (const r of Array.isArray(saved) ? saved : []) {
    if (typeof r?.from !== "number" || typeof r?.to !== "number" || r.to > size || r.from < 0) continue;
    if (editor.state.doc.textBetween(r.from, r.to) !== r.text) continue;
    applyStudentHighlight(editor, r.from, r.to, true);
  }
}
