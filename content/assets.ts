// Pictures (and later audio) of a course: lesson blocks point at files in
// content/<course>/assets as "asset:<file>"; before loading, these become
// real storage paths in the public lesson-media bucket:
// <owner id>/<id made from the file's contents>.<ext> — the same file always
// gets the same path, so loading again doesn't upload it twice.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ContentLesson } from "./kit";

export type Upload = { storagePath: string; file: string; mime: string };

const MIME: Record<string, string> = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", mp3: "audio/mpeg" };

/** Width and height of a PNG or JPEG (null if it can't be read). */
export function imageSize(data: Buffer): { width: number; height: number } | null {
  if (data.subarray(1, 4).toString() === "PNG") return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  if (data[0] === 0xff && data[1] === 0xd8) {
    let i = 2;
    while (i < data.length) {
      if (data[i] !== 0xff) return null;
      const marker = data[i + 1]!;
      const length = data.readUInt16BE(i + 2);
      // SOF0–SOF15 (but not DHT / JPG / DAC) carry the size.
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: data.readUInt16BE(i + 5), width: data.readUInt16BE(i + 7) };
      }
      i += 2 + length;
    }
  }
  return null;
}

const uuidOf = (data: Buffer) => {
  const h = createHash("sha256").update(data).digest("hex");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
};

/**
 * The lesson with every "asset:" file replaced by its storage path, size and
 * picture size, and the list of files to upload.
 */
export function resolveAssets<L extends ContentLesson>(lesson: L, options: { owner: string; root: string }): { lesson: L; uploads: Upload[] } {
  const uploads = new Map<string, Upload>();
  const walk = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(walk);
    if (!value || typeof value !== "object") return value;
    const obj = value as Record<string, unknown>;
    if (typeof obj.path === "string" && obj.path.startsWith("asset:")) {
      const rel = obj.path.slice("asset:".length);
      const file = path.join(options.root, "assets", rel);
      const data = readFileSync(file);
      const ext = path.extname(rel).slice(1).toLowerCase().replace("jpeg", "jpg");
      const storagePath = `${options.owner}/${uuidOf(data)}.${ext}`;
      uploads.set(storagePath, { storagePath, file, mime: MIME[ext] ?? "application/octet-stream" });
      const size = MIME[ext]?.startsWith("image/") ? imageSize(data) : null;
      return { ...obj, path: storagePath, size: data.length, mime: MIME[ext] ?? obj.mime, ...(size ?? {}) };
    }
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, walk(v)]));
  };
  return { lesson: walk(lesson) as L, uploads: [...uploads.values()] };
}
