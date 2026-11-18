// Pictures for the whiteboard: made smaller before they are uploaded.

export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_SIDE = 1600;
const EXT: Record<string, string> = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif" };

export type PreparedImage = { blob: Blob; ext: string; width: number; height: number };

const toBlob = (canvas: HTMLCanvasElement, type: string) =>
  new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.85));

/**
 * The picture ready to upload: a big photo is scaled down to 1600 px on its
 * longest side (and saved as WebP, or JPEG where WebP can't be made); small
 * pictures and GIFs stay as they are. Null when it can't be read.
 */
export async function prepareImage(file: File): Promise<PreparedImage | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const { width, height } = bitmap;
    const ext = EXT[file.type];
    if (ext && (file.type === "image/gif" || (Math.max(width, height) <= MAX_SIDE && file.size <= 1_500_000))) {
      bitmap.close();
      return file.size <= MAX_IMAGE_BYTES ? { blob: file, ext, width, height } : null;
    }
    const k = Math.min(1, MAX_SIDE / Math.max(width, height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * k));
    canvas.height = Math.max(1, Math.round(height * k));
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    let blob = await toBlob(canvas, "image/webp");
    if (!blob || blob.type !== "image/webp") blob = await toBlob(canvas, "image/jpeg");
    if (!blob || !EXT[blob.type]) return null;
    return { blob, ext: EXT[blob.type]!, width: canvas.width, height: canvas.height };
  } catch {
    return null;
  }
}
