// Draws a course cover (16:9, like the cards on the site) from content/<course>/cover.json
// into content/<course>/assets/cover.png. Run: node scripts/content/render-cover.mjs english-a1
import { readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const course = process.argv[2];
if (!course) throw new Error("Which course? e.g. english-a1");
const c = JSON.parse(await readFile(path.resolve(`content/${course}/cover.json`), "utf8"));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Stickers sit around the edges, away from the text.
const spots = [
  [1240, 90, -12], [1420, 260, 10], [1180, 380, 8], [1400, 560, -8],
  [1200, 690, 12], [1020, 120, 6], [1040, 560, -10], [1460, 760, 4],
];
const stickers = c.stickers
  .slice(0, spots.length)
  .map((s, i) => {
    const [x, y, r] = spots[i];
    return `<div class="sticker" style="left:${x}px;top:${y}px;transform:rotate(${r}deg)">${esc(s)}</div>`;
  })
  .join("");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
* { box-sizing: border-box; margin: 0; }
body { width: 1600px; height: 900px; overflow: hidden; font-family: "Inter", "Segoe UI", Arial, sans-serif; }
.bg { position: absolute; inset: 0; background: linear-gradient(135deg, ${c.from} 0%, ${c.to} 100%); }
.blob { position: absolute; border-radius: 50%; background: rgba(255,255,255,.12); }
.text { position: absolute; left: 110px; top: 0; bottom: 0; width: 860px; display: flex; flex-direction: column; justify-content: center; color: #fff; }
.badge { align-self: flex-start; font-size: 34px; font-weight: 700; background: rgba(255,255,255,.22); padding: 10px 26px; border-radius: 999px; letter-spacing: 1px; }
h1 { font-size: 168px; font-weight: 900; letter-spacing: -6px; line-height: 1; margin-top: 30px; }
h1 span { color: ${c.accent}; }
p { font-size: 46px; font-weight: 600; margin-top: 26px; line-height: 1.2; opacity: .95; }
.meta { font-size: 32px; font-weight: 500; margin-top: 34px; opacity: .85; }
.sticker { position: absolute; width: 150px; height: 150px; border-radius: 40px; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 84px; box-shadow: 0 18px 40px rgba(15,23,42,.25); }
</style></head><body>
<div class="bg"></div>
<div class="blob" style="width:900px;height:900px;left:900px;top:-300px"></div>
<div class="blob" style="width:500px;height:500px;left:-180px;top:560px"></div>
${stickers}
<div class="text">
  <div class="badge">${esc(c.badge)}</div>
  <h1>${esc(c.title)} <span>${esc(c.level)}</span></h1>
  <p>${esc(c.subtitle)}</p>
  <div class="meta">${esc(c.meta)}</div>
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
const out = path.resolve(`content/${course}/assets/cover.png`);
await page.screenshot({ path: out, type: "png" });
await browser.close();
console.log(`✓ ${path.relative(process.cwd(), out)}`);
