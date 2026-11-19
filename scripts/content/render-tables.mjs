// Draws a course's grammar tables (content/<course>/tables.ts) as PNG pictures
// with a headless browser. Run: node scripts/content/render-tables.mjs english-a1
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { createJiti } from "jiti";
import { chromium } from "playwright";

const course = process.argv[2];
if (!course) throw new Error("Which course? e.g. english-a1");
const jiti = createJiti(import.meta.url, { alias: { "@": path.resolve("src") } });
const { tables } = await jiti.import(path.resolve(`content/${course}/tables.ts`));
const out = path.resolve(`content/${course}/assets/grammar`);
await mkdir(out, { recursive: true });

const THEMES = {
  violet: ["#7c3aed", "#ede9fe", "#f5f3ff"],
  blue: ["#2563eb", "#dbeafe", "#eff6ff"],
  green: ["#16a34a", "#dcfce7", "#f0fdf4"],
  orange: ["#ea580c", "#ffedd5", "#fff7ed"],
  pink: ["#db2777", "#fce7f3", "#fdf2f8"],
  teal: ["#0d9488", "#ccfbf1", "#f0fdfa"],
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cell = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");

function html(t) {
  const [main, soft, bg] = THEMES[t.color];
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; }
  body { font-family: "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif; background: transparent; }
  .card { width: 900px; padding: 36px 40px 32px; background: ${bg}; border-radius: 32px; border: 3px solid ${soft}; }
  h1 { font-size: 34px; font-weight: 800; color: ${main}; letter-spacing: -0.5px; }
  h2 { font-size: 20px; font-weight: 500; color: #475569; margin-top: 6px; }
  table { width: 100%; border-collapse: separate; border-spacing: 0 10px; margin-top: 18px; }
  th { font-size: 17px; text-transform: uppercase; letter-spacing: 1px; color: #fff; background: ${main}; padding: 12px 18px; text-align: left; }
  th:first-child { border-radius: 16px 0 0 16px; } th:last-child { border-radius: 0 16px 16px 0; }
  td { font-size: 26px; color: #0f172a; background: #fff; padding: 14px 18px; }
  td:first-child { border-radius: 16px 0 0 16px; } td:last-child { border-radius: 0 16px 16px 0; }
  td b { color: ${main}; font-weight: 800; }
  .note { margin-top: 10px; font-size: 20px; color: #334155; background: ${soft}; border-radius: 16px; padding: 12px 18px; }
  .note b { color: ${main}; }
  </style></head><body><div class="card" id="card">
  <h1>${esc(t.title)}</h1>${t.subtitle ? `<h2>${esc(t.subtitle)}</h2>` : ""}
  <table><tr>${t.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr>
  ${t.rows.map((r) => `<tr>${r.map((c) => `<td>${cell(c)}</td>`).join("")}</tr>`).join("")}</table>
  ${t.note ? `<div class="note">${cell(t.note)}</div>` : ""}
  </div></body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1.5 });
for (const t of tables) {
  await page.setContent(html(t));
  await page.locator("#card").screenshot({ path: path.join(out, `${t.name}.png`), omitBackground: true });
  console.log(`✓ ${t.name}.png`);
}
await browser.close();
