// Whiteboard items. Coordinates are shares of the board (0…1), so every screen
// shows the same drawing whatever its size. Pure code: tested in tests/.

export type Point = [number, number];

export type BoardItemData =
  | { kind: "pen" | "marker"; color: string; points: Point[] }
  | { kind: "line" | "rect" | "ellipse"; color: string; from: Point; to: Point }
  | { kind: "text"; color: string; at: Point; text: string };

export type BoardItem = { id: string; authorId: string; data: BoardItemData; createdAt: string };

export type Tool = "hand" | "pen" | "marker" | "line" | "rect" | "ellipse" | "text" | "eraser";

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

// ---------------------------------------------------------------------------
// Eraser and moving
// ---------------------------------------------------------------------------

/** Distance between two board points, on a board `aspect` (height / width) tall. */
function distance(a: Point, b: Point, aspect: number) {
  return Math.hypot(a[0] - b[0], (a[1] - b[1]) * aspect);
}

/** Distance from p to the segment a–b (same units as `distance`). */
function toSegment(p: Point, a: Point, b: Point, aspect: number) {
  const ax = a[0], ay = a[1] * aspect, bx = b[0], by = b[1] * aspect, px = p[0], py = p[1] * aspect;
  const dx = bx - ax, dy = by - ay;
  const len = dx * dx + dy * dy;
  const t = len === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/**
 * A real eraser for freehand lines: the parts of the stroke within `radius` of
 * the eraser's path disappear; the rest stays as separate pieces.
 * Returns the pieces left (empty: the whole stroke is gone; unchanged: [points]).
 */
export function eraseStroke(points: Point[], eraser: Point[], radius: number, aspect: number): Point[][] {
  const near = (p: Point) =>
    eraser.some((e, i) => (i === 0 ? distance(p, e, aspect) : toSegment(p, eraser[i - 1]!, e, aspect)) <= radius);
  if (!points.some(near) && !denser(points, radius / 2, aspect).some(near)) return [points];
  // A quick stroke has points far apart: fill them in so the eraser can't slip between.
  const dense = denser(points, radius / 2, aspect);
  const pieces: Point[][] = [];
  let current: Point[] = [];
  for (const p of dense) {
    if (near(p)) {
      if (current.length) pieces.push(current);
      current = [];
    } else current.push(p);
  }
  if (current.length) pieces.push(current);
  // A one-point stroke (a dot) stays a dot; single leftovers of longer lines go.
  return points.length === 1 ? pieces : pieces.filter((piece) => piece.length >= 2);
}

/** The stroke with extra points so that neighbours are at most `step` apart. */
function denser(points: Point[], step: number, aspect: number): Point[] {
  const out: Point[] = [];
  points.forEach((p, i) => {
    const prev = points[i - 1];
    if (prev) {
      const n = Math.ceil(distance(prev, p, aspect) / step);
      for (let k = 1; k < n; k++) out.push(toPoint(prev[0] + ((p[0] - prev[0]) * k) / n, prev[1] + ((p[1] - prev[1]) * k) / n));
    }
    out.push(p);
  });
  return out;
}

/** Text on the board: its rough box (font 30 of 1000 units wide). */
function textBox(d: { at: Point; text: string }, aspect: number) {
  const width = (d.text.length * 30 * 0.55) / 1000;
  const height = 34 / (1000 * aspect);
  return { x0: d.at[0], y0: d.at[1], x1: d.at[0] + width, y1: d.at[1] + height };
}

/** Does a point (eraser, hand) touch this item? */
export function touches(data: BoardItemData, p: Point, radius: number, aspect: number): boolean {
  switch (data.kind) {
    case "pen":
    case "marker": {
      const r = radius + (data.kind === "marker" ? 0.009 : 0.002);
      if (data.points.length === 1) return distance(data.points[0]!, p, aspect) <= r;
      return data.points.some((a, i) => i > 0 && toSegment(p, data.points[i - 1]!, a, aspect) <= r);
    }
    case "line":
      return toSegment(p, data.from, data.to, aspect) <= radius + 0.002;
    case "rect": {
      const [x0, x1] = [Math.min(data.from[0], data.to[0]), Math.max(data.from[0], data.to[0])];
      const [y0, y1] = [Math.min(data.from[1], data.to[1]), Math.max(data.from[1], data.to[1])];
      const corners: Point[] = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
      return corners.some((c, i) => toSegment(p, c, corners[(i + 1) % 4]!, aspect) <= radius + 0.002);
    }
    case "ellipse": {
      const cx = (data.from[0] + data.to[0]) / 2, cy = (data.from[1] + data.to[1]) / 2;
      const rx = Math.abs(data.to[0] - data.from[0]) / 2, ry = Math.abs(data.to[1] - data.from[1]) / 2;
      if (rx === 0 || ry === 0) return false;
      // Near the outline: the normalised radius is close to 1.
      const k = Math.hypot((p[0] - cx) / rx, (p[1] - cy) / ry);
      return Math.abs(k - 1) * Math.min(rx, ry * aspect) <= radius + 0.002;
    }
    case "text": {
      const b = textBox(data, aspect);
      return p[0] >= b.x0 - radius && p[0] <= b.x1 + radius && p[1] >= b.y0 - radius && p[1] <= b.y1 + radius;
    }
  }
}

/** The item moved by (dx, dy), kept on the board. */
export function moveItem(data: BoardItemData, dx: number, dy: number): BoardItemData {
  const mv = (p: Point): Point => toPoint(p[0] + dx, p[1] + dy);
  switch (data.kind) {
    case "pen":
    case "marker":
      return { ...data, points: data.points.map(mv) };
    case "line":
    case "rect":
    case "ellipse":
      return { ...data, from: mv(data.from), to: mv(data.to) };
    case "text":
      return { ...data, at: mv(data.at) };
  }
}
