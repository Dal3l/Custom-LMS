// Records the listenings of a course with ElevenLabs: every line of a script
// in the voice of its speaker (content/voices.ts), with short pauses between
// them, glued into content/<course>/assets/audio/<id>.mp3 — the file the
// lesson's audio block points at (see listening() in content/kit.ts).
//
//   node scripts/content/tts.mjs english-a1 --dry          what would be recorded and how many characters
//   node scripts/content/tts.mjs english-a1 --only 1.1,2.3 record these lessons
//   node scripts/content/tts.mjs english-a1                record every listening without a recording
//
// The API key is never in the code: the session's network adds it to requests
// to api.elevenlabs.io (or pass ELEVENLABS_API_KEY). Lines already recorded are
// kept in .cache/tts, so recording again costs nothing.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { CourseFile } from "./load";
import { SPEAKERS, VOICES } from "../../content/voices";

const args = process.argv.slice(2);
const courseName = args[0];
if (!courseName) throw new Error("Usage: tts.mjs <course> [--dry] [--only 1.1,2.3]");
const dry = args.includes("--dry");
const only = args.includes("--only") ? args[args.indexOf("--only") + 1]!.split(",") : null;

const MODEL = "eleven_multilingual_v2";
/** A1 a little slower, so beginners can follow. */
const SPEED: Record<string, number> = { "english-a1": 0.9, "english-a2": 0.95, "english-b1": 1, "english-b2": 1 };
const PAUSE = 0.6; // seconds between lines
const PART_PAUSE = 1.5; // before "1.", "2.", … in scripts with parts
const root = path.resolve("content", courseName);
const cacheDir = path.resolve(".cache/tts");

type Line = { speaker: string; text: string; part: boolean };
type Doc = { type: string; text?: string; marks?: { type: string }[]; content?: Doc[] };

/** The script's lines: "**Leo:** Hi!" → Leo says "Hi!"; text without a speaker → the last speaker or the narrator. */
function lines(doc: Doc): Line[] {
  const out: Line[] = [];
  for (const block of doc.content ?? []) {
    // A paragraph can hold several lines (hard breaks).
    const groups: Doc[][] = [[]];
    for (const n of block.content ?? []) {
      if (n.type === "hardBreak") groups.push([]);
      else groups[groups.length - 1]!.push(n);
    }
    for (const g of groups) {
      if (!g.length) continue;
      const first = g[0]!;
      const bold = first.type === "text" && first.marks?.some((m) => m.type === "bold");
      // Without a name, the line goes on in the voice of the last speaker (a story in paragraphs).
      let speaker = out.length && !out[out.length - 1]!.part ? out[out.length - 1]!.speaker : "Narrator";
      let rest = g;
      let part = false;
      if (bold && /^[A-Z][\w. ]{0,20}:$/.test(first.text!.trim())) {
        speaker = first.text!.trim().slice(0, -1);
        rest = g.slice(1);
      } else if (bold && /^\d+\.$/.test(first.text!.trim())) {
        part = true; // "**1.**" — the number of a part, read by the narrator
        speaker = "Narrator";
      }
      const text = clean(rest.map((n) => n.text ?? "").join(""));
      if (text) out.push({ speaker, text, part });
    }
  }
  return out;
}

/** Without emoji and markdown — only words to say. */
function clean(s: string): string {
  return s
    .replace(/[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}\u{20E3}]/gu, "")
    .replace(/[*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Speaker → voice for one script: the usual voice, or the next free one of the same kind. */
function castVoices(speakers: string[]): Map<string, string> {
  const cast = new Map<string, string>();
  const taken = new Set<string>();
  for (const s of speakers) {
    const wanted = SPEAKERS[s];
    if (!wanted) throw new Error(`No voice for the speaker "${s}" — add it to content/voices.ts`);
    const voice = VOICES.find((v) => v.name === wanted)!;
    const free = taken.has(voice.id) ? VOICES.find((v) => v.kind === voice.kind && !taken.has(v.id)) : voice;
    if (!free) throw new Error(`Not enough ${voice.kind} voices for ${speakers.join(", ")}`);
    cast.set(s, free.id);
    taken.add(free.id);
  }
  return cast;
}

async function say(text: string, voice: string, speed: number, previous: string, next: string): Promise<string> {
  const key = createHash("sha256").update(JSON.stringify([MODEL, voice, speed, text, previous, next])).digest("hex").slice(0, 24);
  const file = path.join(cacheDir, `${key}.mp3`);
  if (existsSync(file)) return file;
  const headers: Record<string, string> = { "Content-Type": "application/json", Accept: "audio/mpeg" };
  if (process.env.ELEVENLABS_API_KEY) headers["xi-api-key"] = process.env.ELEVENLABS_API_KEY;
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        text,
        model_id: MODEL,
        previous_text: previous || undefined,
        next_text: next || undefined,
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true, speed },
      }),
    });
    if (res.ok) {
      writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      return file;
    }
    const body = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await new Promise((r) => setTimeout(r, 3000 * attempt));
      continue;
    }
    throw new Error(`ElevenLabs ${res.status}: ${body.slice(0, 300)}`);
  }
}

/** The lines glued together with pauses, as one mono MP3. */
function glue(parts: { file: string; pause: number }[], out: string) {
  const inputs: string[] = [];
  const chain: string[] = [];
  parts.forEach((p, i) => {
    inputs.push("-i", p.file);
    chain.push(`[${i}:a]aresample=44100,aformat=channel_layouts=mono${p.pause ? `,apad=pad_dur=${p.pause}` : ""}[a${i}]`);
  });
  const filter = `${chain.join(";")};${parts.map((_, i) => `[a${i}]`).join("")}concat=n=${parts.length}:v=0:a=1[out]`;
  mkdirSync(path.dirname(out), { recursive: true });
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", ...inputs, "-filter_complex", filter, "-map", "[out]", "-ac", "1", "-b:a", "96k", out]);
}

const { course } = (await import(path.join(root, "course.ts"))) as { course: CourseFile };
mkdirSync(cacheDir, { recursive: true });
let total = 0;
let todo = 0;
for (const [mi, m] of course.modules.entries()) {
  for (const [li, l] of m.lessons.entries()) {
    const n = `${mi + (course.firstModule ?? 1)}.${li + 1}`;
    if (only && !only.includes(n)) continue;
    const blocks = l.sections.flatMap((s) => s.blocks);
    for (const [i, b] of blocks.entries()) {
      const file = (b.content as { file?: { path?: string } | null }).file?.path;
      if (b.type !== "audio" || !file?.startsWith("asset:audio/")) continue;
      const script = blocks[i + 1];
      if (script?.title !== "Audio script") throw new Error(`${n} "${b.title}": no script after the audio`);
      const out = path.join(root, "assets", file.slice("asset:".length));
      const said = lines((script.key as { doc: Doc }).doc);
      const chars = said.reduce((sum, x) => sum + x.text.length, 0);
      const cast = castVoices([...new Set(said.map((x) => x.speaker))]);
      const voiceName = (id: string) => VOICES.find((v) => v.id === id)!.name;
      const who = [...cast].map(([s, v]) => `${s}=${voiceName(v)}`).join(", ");
      if (existsSync(out)) {
        console.log(`✓ ${n} ${b.title} — already recorded`);
        continue;
      }
      todo++;
      total += chars;
      console.log(`${dry ? "·" : "🎙️"} ${n} ${b.title} — ${said.length} lines, ${chars} characters (${who})`);
      if (dry) continue;
      const speed = SPEED[courseName] ?? 1;
      const parts: { file: string; pause: number }[] = [];
      for (const [j, x] of said.entries()) {
        const voice = cast.get(x.speaker)!;
        const prev = said[j - 1]?.speaker === x.speaker ? said[j - 1]!.text : "";
        const next = said[j + 1]?.speaker === x.speaker ? said[j + 1]!.text : "";
        const pause = said[j + 1]?.part ? PART_PAUSE : j === said.length - 1 ? 0 : PAUSE;
        parts.push({ file: await say(x.text, voice, speed, prev, next), pause });
      }
      glue(parts, out);
      console.log(`   → ${path.relative(process.cwd(), out)}`);
    }
  }
}
console.log(`\n${todo} listening(s), ${total} characters${dry ? " (nothing recorded: --dry)" : ""}`);
