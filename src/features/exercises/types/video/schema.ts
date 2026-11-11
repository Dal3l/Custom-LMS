import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { captionSchema } from "../../media";

// Videos are links to YouTube or Vimeo (no uploads: files would quickly fill the storage).
export const videoRefSchema = z.discriminatedUnion("provider", [
  z.object({ provider: z.literal("youtube"), id: z.string().regex(/^[\w-]{11}$/) }),
  z.object({
    provider: z.literal("vimeo"),
    id: z.string().regex(/^\d{1,12}$/),
    /** privacy hash of unlisted Vimeo videos */
    hash: z.string().regex(/^[0-9a-f]{6,20}$/).optional(),
  }),
]);
export type VideoRef = z.infer<typeof videoRefSchema>;

export const videoContentSchema = z.object({ video: videoRefSchema.nullable(), caption: captionSchema });
export type VideoContent = z.infer<typeof videoContentSchema>;

export const videoDefinition: ExerciseDefinition<VideoContent, null> = {
  id: "video",
  contentSchema: videoContentSchema,
  keySchema: null,
  create: () => ({ content: { video: null, caption: "" }, key: null }),
};

/** Understands the usual YouTube / Vimeo addresses. Returns null for anything else. */
export function parseVideoUrl(input: string): VideoRef | null {
  let url: URL;
  try {
    url = new URL(input.trim().match(/^https?:\/\//) ? input.trim() : `https://${input.trim()}`);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www\.|m\.)/, "");
  const parts = url.pathname.split("/").filter(Boolean);

  let ref: VideoRef | null = null;
  if (host === "youtu.be") {
    ref = { provider: "youtube", id: parts[0] ?? "" };
  } else if (host === "youtube.com" || host === "youtube-nocookie.com" || host === "music.youtube.com") {
    if (parts[0] === "watch") ref = { provider: "youtube", id: url.searchParams.get("v") ?? "" };
    else if (["embed", "shorts", "live", "v"].includes(parts[0] ?? "")) ref = { provider: "youtube", id: parts[1] ?? "" };
  } else if (host === "vimeo.com") {
    const id = parts.find((p) => /^\d+$/.test(p));
    const after = id ? parts[parts.indexOf(id) + 1] : undefined;
    if (id) ref = { provider: "vimeo", id, ...(after && /^[0-9a-f]{6,20}$/.test(after) ? { hash: after } : {}) };
  } else if (host === "player.vimeo.com" && parts[0] === "video") {
    const h = url.searchParams.get("h");
    ref = { provider: "vimeo", id: parts[1] ?? "", ...(h ? { hash: h } : {}) };
  }
  const parsed = ref ? videoRefSchema.safeParse(ref) : null;
  return parsed?.success ? parsed.data : null;
}

/** Address of the embedded player (YouTube without tracking cookies). */
export function videoEmbedUrl(video: VideoRef): string {
  if (video.provider === "youtube") return `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
  return `https://player.vimeo.com/video/${video.id}${video.hash ? `?h=${video.hash}` : ""}`;
}
