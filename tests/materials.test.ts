import { describe, expect, it } from "vitest";
import { formatBytes, mediaPathSchema, mediaProblem } from "@/features/exercises/media";
import { audioContentSchema } from "@/features/exercises/types/audio/schema";
import { imageContentSchema } from "@/features/exercises/types/image/schema";
import { parseVideoUrl, videoContentSchema, videoEmbedUrl } from "@/features/exercises/types/video/schema";

const T = "11111111-2222-4333-8444-555555555555";
const F = "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee";

describe("video links", () => {
  it.each([
    ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "dQw4w9WgXcQ"],
    ["https://youtu.be/dQw4w9WgXcQ?t=42", "dQw4w9WgXcQ"],
    ["youtube.com/watch?v=dQw4w9WgXcQ&list=PL123", "dQw4w9WgXcQ"],
    ["https://m.youtube.com/watch?v=dQw4w9WgXcQ", "dQw4w9WgXcQ"],
    ["https://www.youtube.com/shorts/dQw4w9WgXcQ", "dQw4w9WgXcQ"],
    ["https://www.youtube.com/embed/dQw4w9WgXcQ", "dQw4w9WgXcQ"],
  ])("YouTube: %s", (url, id) => {
    expect(parseVideoUrl(url)).toEqual({ provider: "youtube", id });
  });

  it("Vimeo, including unlisted videos with a hash", () => {
    expect(parseVideoUrl("https://vimeo.com/76979871")).toEqual({ provider: "vimeo", id: "76979871" });
    expect(parseVideoUrl("https://vimeo.com/76979871/abcdef1234")).toEqual({ provider: "vimeo", id: "76979871", hash: "abcdef1234" });
    expect(parseVideoUrl("https://player.vimeo.com/video/76979871?h=abcdef1234")).toEqual({
      provider: "vimeo",
      id: "76979871",
      hash: "abcdef1234",
    });
  });

  it.each(["", "hello", "https://example.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=bad", "javascript:alert(1)", "https://vimeo.com/channels/staff"])(
    "rejects %s",
    (url) => {
      expect(parseVideoUrl(url)).toBeNull();
    },
  );

  it("builds privacy-friendly embed addresses", () => {
    expect(videoEmbedUrl({ provider: "youtube", id: "dQw4w9WgXcQ" })).toBe("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0");
    expect(videoEmbedUrl({ provider: "vimeo", id: "1", hash: "abcdef" })).toBe("https://player.vimeo.com/video/1?h=abcdef");
  });

  it("stored content cannot smuggle in another address", () => {
    expect(videoContentSchema.safeParse({ video: { provider: "youtube", id: "x\"><script>" }, caption: "" }).success).toBe(false);
    expect(videoContentSchema.safeParse({ video: { provider: "evil", id: "1" }, caption: "" }).success).toBe(false);
  });
});

describe("media files", () => {
  it("accepts only paths shaped like <teacher>/<random>.<ext>", () => {
    expect(mediaPathSchema.safeParse(`${T}/${F}.mp3`).success).toBe(true);
    expect(mediaPathSchema.safeParse(`${T}/../${F}.mp3`).success).toBe(false);
    expect(mediaPathSchema.safeParse(`${T}/${F}.exe`).success).toBe(false);
    expect(mediaPathSchema.safeParse(`https://evil.com/${F}.png`).success).toBe(false);
  });

  it("checks type and size per kind", () => {
    expect(mediaProblem({ type: "image/png", size: 1000 }, "image")).toBeNull();
    expect(mediaProblem({ type: "image/png", size: 11 * 1024 * 1024 }, "image")).toBe("size");
    expect(mediaProblem({ type: "audio/mpeg", size: 1000 }, "image")).toBe("type");
    expect(mediaProblem({ type: "audio/mpeg", size: 40 * 1024 * 1024 }, "audio")).toBeNull();
    expect(mediaProblem({ type: "application/pdf", size: 51 * 1024 * 1024 }, "file")).toBe("size");
    expect(mediaProblem({ type: "application/x-msdownload", size: 10 }, "file")).toBe("type");
  });

  it("validates material content", () => {
    const file = { path: `${T}/${F}.png`, name: "cat.png", size: 100, mime: "image/png" };
    expect(imageContentSchema.safeParse({ images: [{ ...file, width: 10, height: 10 }], caption: "A cat" }).success).toBe(true);
    expect(imageContentSchema.safeParse({ images: Array(11).fill(file), caption: "" }).success).toBe(false);
    expect(audioContentSchema.safeParse({ file: null, caption: "" }).success).toBe(true);
    expect(audioContentSchema.safeParse({ file: { ...file, path: "x" }, caption: "" }).success).toBe(false);
  });

  it("formats sizes", () => {
    expect(formatBytes(1536 * 1024, "en")).toBe("1.5 MB");
    expect(formatBytes(2048, "en")).toBe("2 KB");
  });
});
