// Whiteboard items. Coordinates are shares of the board (0…1), so every screen
// shows the same drawing whatever its size. Pure code: tested in tests/.

export type Point = [number, number];

export type BoardItemData =
  | { kind: "pen" | "marker"; color: string; points: Point[] }
  | { kind: "line" | "rect" | "ellipse"; color: string; from: Point; to: Point }
  | { kind: "text"; color: string; at: Point; text: string };

export type BoardItem = { id: string; authorId: string; data: BoardItemData; createdAt: string };

export type Tool = "pen" | "marker" | "line" | "rect" | "ellipse" | "text" | "eraser";

export const BOARD_COLORS = ["#111827", "#2563eb", "#dc2626", "#16a34a", "#f59e0b"] as const;
export const MARKER_COLOR = "#facc15";
export const MAX_POINTS = 2000;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const round = (n: number) => Math.round(n * 10000) / 10000;

/** A point inside the board, rounded (keeps the stored data small). */
export function toPoint(x: number, y: number): Point {
  return [round(clamp01(x)), round(clamp01(y))];
}

/** Drops points closer than `min` to the previous one (smaller, smoother strokes). */
export function thinPoints(points: Point[], min = 0.002): Point[] {
  const out: Point[] = [];
  for (const p of points) {
    const last = out[out.length - 1];
    if (!last || Math.hypot(p[0] - last[0], p[1] - last[1]) >= min) out.push(p);
  }
  const end = points[points.length - 1];
  if (end && out[out.length - 1] !== end && out.length > 0) out.push(end);
  return out.slice(0, MAX_POINTS);
}

/** SVG path of a freehand stroke, in board units scaled to `w`×`h`. */
export function strokePath(points: Point[], w: number, h: number): string {
  if (points.length === 0) return "";
  const [first, ...rest] = points;
  if (rest.length === 0) return `M${first![0] * w} ${first![1] * h}l0.01 0`;
  return `M${first![0] * w} ${first![1] * h}` + rest.map((p) => `L${p[0] * w} ${p[1] * h}`).join("");
}

/** Checks data coming from the database or another browser before drawing it. */
export function isItemData(value: unknown): value is BoardItemData {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  const isPoint = (p: unknown) =>
    Array.isArray(p) && p.length === 2 && p.every((n) => typeof n === "number" && Number.isFinite(n));
  if (typeof v.color !== "string" || !/^#[0-9a-f]{6}$/i.test(v.color)) return false;
  switch (v.kind) {
    case "pen":
    case "marker":
      return Array.isArray(v.points) && v.points.length > 0 && v.points.length <= MAX_POINTS && v.points.every(isPoint);
    case "line":
    case "rect":
    case "ellipse":
      return isPoint(v.from) && isPoint(v.to);
    case "text":
      return isPoint(v.at) && typeof v.text === "string" && v.text.length > 0 && v.text.length <= 500;
    default:
      return false;
  }
}

/** Board names (see the board_items table). */
export const lessonBoard = (lessonId: string) => `lesson:${lessonId}`;
export const blockBoard = (exerciseId: string) => `block:${exerciseId}`;
export const fileBoard = (exerciseId: string, page: number) => `file:${exerciseId}:${page}`;

/** Notes on PDF pages are personal (student + teacher); boards are shared by everyone. */
export const isPersonalBoard = (board: string) => board.startsWith("file:");
