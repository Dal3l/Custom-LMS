// Gap markup used by "fill in the gaps" exercises. The teacher writes:
//   Penguins [are] birds.                 one right answer
//   I [don't/do not] know.                several right answers (gap with typing)
//   She [*is/are/am] happy.               options, * marks the right one (dropdown gap)
// Square brackets always mean a gap; an empty pair "[]" stays as text.

export const MAX_GAPS = 100;
export const MAX_OPTIONS = 10;

export type GapToken = {
  /** stable id, by position: g1, g2, … */
  id: string;
  /** the options as written, without the * mark */
  options: string[];
  /** indexes of options marked with * */
  marked: number[];
};

export type Part = { t: "text"; text: string } | { t: "gap"; gap: GapToken };

export function parseGaps(source: string): Part[] {
  const parts: Part[] = [];
  let text = "";
  let count = 0;
  const re = /\[([^[\]\n]*)\]/g;
  let last = 0;
  for (let m = re.exec(source); m; m = re.exec(source)) {
    const inner = m[1]!;
    const options = inner
      .split("/")
      .map((o) => o.trim())
      .filter(Boolean);
    if (!options.length || count >= MAX_GAPS) continue; // stays as plain text
    text += source.slice(last, m.index);
    if (text) parts.push({ t: "text", text });
    text = "";
    count++;
    const marked: number[] = [];
    const clean = options.slice(0, MAX_OPTIONS).map((o, i) => {
      if (o.startsWith("*")) {
        marked.push(i);
        return o.slice(1).trim();
      }
      return o;
    });
    parts.push({ t: "gap", gap: { id: `g${count}`, options: clean.filter(Boolean).length ? clean : options, marked } });
    last = m.index + m[0].length;
  }
  text += source.slice(last);
  if (text) parts.push({ t: "text", text });
  return parts;
}

export function gapCount(parts: Part[]): number {
  return parts.filter((p) => p.t === "gap").length;
}

/**
 * Wraps the selected part of a text in brackets (the "Make it a gap" button).
 * Returns the new text and where the cursor should go, or null if nothing is selected.
 */
export function wrapAsGap(source: string, start: number, end: number): { text: string; cursor: number } | null {
  let from = Math.min(start, end);
  let to = Math.max(start, end);
  // Do not swallow the spaces around a selected word.
  while (from < to && /\s/.test(source[from]!)) from++;
  while (to > from && /\s/.test(source[to - 1]!)) to--;
  const selected = source.slice(from, to);
  if (!selected || /[[\]\n]/.test(selected)) return null;
  const text = `${source.slice(0, from)}[${selected}]${source.slice(to)}`;
  return { text, cursor: to + 2 };
}
