// Free photos from Wikimedia Commons for course lessons.
//
//   node scripts/content/commons.mjs search "handshake"            candidates with their licences
//   node scripts/content/commons.mjs get english-a1 greet-wave "File:Waving hand.jpg"
//   Downloading is faster with scripts/content/commons-save.sh (no API, standard 960 px size).
//
// "get" saves content/<course>/assets/photos/<name>.jpg (1000 px wide) and
// records the author and licence in photos/credits.json — the lesson shows
// them under the picture. Only free licences are accepted.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const API = "https://commons.wikimedia.org/w/api.php";
const UA = "LinguaRoomCourseBuilder/1.0 (educational course images)";
const FREE = /^(CC0|Public domain|PD|CC BY(-SA)? [1-4]\.0)/i;
const clean = (html = "") => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

/** A request, politely: on "too many requests" waits as asked and tries again (up to 8 times). */
async function get(url) {
  for (let i = 0; ; i++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.status !== 429 || i >= 8) {
      if (!r.ok) throw new Error(`Commons: HTTP ${r.status}`);
      return r;
    }
    const wait = Number(r.headers.get("retry-after")) || 20;
    await new Promise((resolve) => setTimeout(resolve, Math.min(wait, 60) * 1000));
  }
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: "json", formatversion: "2", origin: "*", ...params })}`;
  return (await get(url)).json();
}

const info = (p) => {
  const ii = p.imageinfo?.[0];
  const m = ii?.extmetadata ?? {};
  return {
    title: p.title,
    license: clean(m.LicenseShortName?.value),
    author: clean(m.Artist?.value).slice(0, 80),
    width: ii?.width,
    height: ii?.height,
    thumb: ii?.thumburl,
    page: ii?.descriptionurl,
  };
};

const [cmd, ...args] = process.argv.slice(2);
if (cmd === "search") {
  const data = await api({
    action: "query",
    generator: "search",
    gsrsearch: `${args[0]} filetype:bitmap`,
    gsrnamespace: "6",
    gsrlimit: args[1] ?? "12",
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "400",
  });
  for (const p of data.query?.pages ?? []) {
    const i = info(p);
    if (!FREE.test(i.license)) continue;
    console.log(`${i.title} | ${i.license} | ${i.author} | ${i.width}x${i.height} | ${i.thumb}`);
  }
} else if (cmd === "get") {
  const [course, name, title] = args;
  const data = await api({ action: "query", titles: title, prop: "imageinfo", iiprop: "url|size|extmetadata", iiurlwidth: "1000" });
  const i = info(data.query.pages[0]);
  if (!FREE.test(i.license)) throw new Error(`Not a free licence: ${i.license}`);
  // Thumbnails also live on upload.wikimedia.org (the host this environment allows).
  const r = await get(i.thumb.replace("https://thumb.wikimedia.org/", "https://upload.wikimedia.org/").replace(/\?.*$/, ""));
  const dir = path.resolve(`content/${course}/assets/photos`);
  await mkdir(dir, { recursive: true });
  const ext = /\.png$/i.test(i.thumb) ? "png" : "jpg";
  await writeFile(path.join(dir, `${name}.${ext}`), Buffer.from(await r.arrayBuffer()));
  const creditsFile = path.join(dir, "credits.json");
  const credits = JSON.parse(await readFile(creditsFile, "utf8").catch(() => "{}"));
  credits[`${name}.${ext}`] = { title: i.title, author: i.author, license: i.license, source: i.page };
  await writeFile(creditsFile, JSON.stringify(credits, null, 2) + "\n");
  console.log(`✓ photos/${name}.${ext} — ${i.author}, ${i.license}`);
} else {
  console.log("search <words> | get <course> <name> <File:…>");
}
