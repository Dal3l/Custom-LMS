// Grammar tables drawn as pictures (bright, easy to read), made by
// scripts/content/render-tables.mjs into content/<course>/assets/grammar/<name>.png.
//
// Cell text: **word** is coloured (the part to notice).

export type GrammarTable = {
  /** file name (without .png) */
  name: string;
  title: string;
  subtitle?: string;
  /** colour theme */
  color: "violet" | "blue" | "green" | "orange" | "pink" | "teal";
  columns: string[];
  rows: string[][];
  /** a line under the table */
  note?: string;
};
