// Whiteboard items. Coordinates are shares of the board's frame (0…1 across
// and down), so every screen shows the same drawing whatever its size. An
// endless board goes on past the frame in every direction (to ±LIMIT).
// Pure code: tested in tests/.

export type Point = [number, number];

export type BoardItemData =
  | { kind: "pen" | "marker"; color: string; points: Point[] }
  | { kind: "line" | "rect" | "ellipse"; color: string; from: Point; to: Point }
  /** size: font size in board units (the frame is 1000 wide); 30 when missing */
  | { kind: "text"; color: string; at: Point; text: string; size?: number }
  /** a picture: `src` is its file in storage; w, h: shares of the frame's width and height */
  | { kind: "image"; src: string; at: Point; w: number; h: number };

export type BoardItem = { id: string; authorId: string; data: BoardItemData; createdAt: string };

export type Tool = "hand" | "pen" | "marker" | "line" | "rect" | "ellipse" | "text" | "eraser";

export const BOARD_COLORS = ["#111827", "#2563eb", "#dc2626", "#16a34a", "#f59e0b"] as const;
export const MARKER_COLOR = "#facc15";
export const MAX_POINTS = 2000;
/** How far an endless board goes (frames from the start). */
export const LIMIT = 50;
export const TEXT_SIZE = 30;
export const MIN_TEXT = 6;
export const MAX_TEXT = 600;

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const round = (n: number) => Math.round(n * 10000) / 10000;

/** A point on the board (inside the frame, or anywhere on an endless board), rounded. */
export function toPoint(x: number, y: number, endless = false): Point {
  const [min, max] = endless ? [-LIMIT, LIMIT] : [0, 1];
  return [round(clamp(x, min, max)), round(clamp(y, min, max))];
}

export const textSize = (d: { size?: number }) => d.size ?? TEXT_SIZE;

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
  if (v.kind === "image") {
    const share = (n: unknown) => typeof n === "number" && n > 0 && n <= 2 * LIMIT;
    return typeof v.src === "string" && IMAGE_PATH.test(v.src) && isPoint(v.at) && share(v.w) && share(v.h);
  }
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
      return (
        isPoint(v.at) &&
        typeof v.text === "string" &&
        v.text.length > 0 &&
        v.text.length <= 500 &&
        (v.size === undefined || (typeof v.size === "number" && v.size >= MIN_TEXT && v.size <= MAX_TEXT))
      );
    default:
      return false;
  }
}

/** A picture's file in the board-images bucket: <class>/<author>/<uuid>.<ext> */
const UUID = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
export const IMAGE_PATH = new RegExp(`^${UUID}/${UUID}/${UUID}\\.(png|jpe?g|webp|gif)$`);

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

export type Box = { x0: number; y0: number; x1: number; y1: number };

/**
 * Text on the board: its box. `width` is the text's real width in board units
 * when the screen measured it; otherwise a rough guess from the letters.
 */
export function textBox(d: { at: Point; text: string; size?: number }, aspect: number, width?: number): Box {
  const size = textSize(d);
  const w = (width ?? d.text.length * size * 0.55) / 1000;
  const h = (size * 1.2) / (1000 * aspect);
  return { x0: d.at[0], y0: d.at[1], x1: d.at[0] + w, y1: d.at[1] + h };
}

/** The box around any item (for "show everything"). */
export function itemBox(d: BoardItemData, aspect: number): Box {
  switch (d.kind) {
    case "pen":
    case "marker":
      return {
        x0: Math.min(...d.points.map((p) => p[0])),
        y0: Math.min(...d.points.map((p) => p[1])),
        x1: Math.max(...d.points.map((p) => p[0])),
        y1: Math.max(...d.points.map((p) => p[1])),
      };
    case "line":
    case "rect":
    case "ellipse":
      return {
        x0: Math.min(d.from[0], d.to[0]),
        y0: Math.min(d.from[1], d.to[1]),
        x1: Math.max(d.from[0], d.to[0]),
        y1: Math.max(d.from[1], d.to[1]),
      };
    case "text":
      return textBox(d, aspect);
    case "image":
      return { x0: d.at[0], y0: d.at[1], x1: d.at[0] + d.w, y1: d.at[1] + d.h };
  }
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
    case "text":
    case "image": {
      const b = itemBox(data, aspect);
      const ry = radius / aspect;
      return p[0] >= b.x0 - radius && p[0] <= b.x1 + radius && p[1] >= b.y0 - ry && p[1] <= b.y1 + ry;
    }
  }
}

/** The item moved by (dx, dy), kept on the board. */
export function moveItem(data: BoardItemData, dx: number, dy: number, endless = false): BoardItemData {
  const mv = (p: Point): Point => toPoint(p[0] + dx, p[1] + dy, endless);
  switch (data.kind) {
    case "pen":
    case "marker":
      return { ...data, points: data.points.map(mv) };
    case "line":
    case "rect":
    case "ellipse":
      return { ...data, from: mv(data.from), to: mv(data.to) };
    case "text":
    case "image":
      return { ...data, at: mv(data.at) };
  }
}

export type Corner = "nw" | "ne" | "sw" | "se";

/** The corner's point of a box. */
export function cornerOf(b: Box, c: Corner): Point {
  return [c.endsWith("w") ? b.x0 : b.x1, c.startsWith("n") ? b.y0 : b.y1];
}
const OPPOSITE: Record<Corner, Corner> = { nw: "se", ne: "sw", sw: "ne", se: "nw" };

/**
 * Text or a picture made bigger or smaller by dragging a corner of its box
 * (`box`) to `p`; the opposite corner stays put and the shape keeps its
 * proportions. Text changes its font size.
 */
export function resizeItem(data: BoardItemData, box: Box, corner: Corner, p: Point, aspect: number, endless = false): BoardItemData {
  if (data.kind !== "text" && data.kind !== "image") return data;
  const a = cornerOf(box, OPPOSITE[corner]);
  const c = cornerOf(box, corner);
  // In real proportions (the frame is `aspect` times as tall as wide).
  const dx = c[0] - a[0], dy = (c[1] - a[1]) * aspect;
  const px = p[0] - a[0], py = (p[1] - a[1]) * aspect;
  const len = dx * dx + dy * dy;
  if (len === 0) return data;
  let k = (px * dx + py * dy) / len;
  if (data.kind === "text") k = clamp(textSize(data) * k, MIN_TEXT, MAX_TEXT) / textSize(data);
  else k = Math.max(k, 0.02 / Math.sqrt(len));
  const nx = a[0] + (c[0] - a[0]) * k, ny = a[1] + (c[1] - a[1]) * k;
  const at = toPoint(Math.min(a[0], nx), Math.min(a[1], ny), endless);
  if (data.kind === "text") return { ...data, at, size: Math.round(textSize(data) * k * 10) / 10 };
  return { ...data, at, w: round(data.w * k), h: round(data.h * k) };
}

/** The box around everything drawn, or null for an empty board. */
export function contentBox(items: BoardItemData[], aspect: number): Box | null {
  if (items.length === 0) return null;
  const boxes = items.map((d) => itemBox(d, aspect));
  return {
    x0: Math.min(...boxes.map((b) => b.x0)),
    y0: Math.min(...boxes.map((b) => b.y0)),
    x1: Math.max(...boxes.map((b) => b.x1)),
    y1: Math.max(...boxes.map((b) => b.y1)),
  };
}

/** What part of an endless board is on screen: its top-left corner and how close. */
export type View = { x: number; y: number; zoom: number };
export const START_VIEW: View = { x: 0, y: 0, zoom: 1 };
export const ZOOMS = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];
export const MIN_ZOOM = ZOOMS[0]!;
export const MAX_ZOOM = ZOOMS[ZOOMS.length - 1]!;

/** The view zoomed to `zoom`, keeping the board point under (fx, fy) (shares of the screen) in place. */
export function zoomAt(v: View, zoom: number, fx = 0.5, fy = 0.5): View {
  const z = clamp(zoom, MIN_ZOOM, MAX_ZOOM);
  const px = v.x + fx / v.zoom, py = v.y + fy / v.zoom;
  return { x: px - fx / z, y: py - fy / z, zoom: z };
}

/** The next zoom step in or out. */
export function stepZoom(zoom: number, dir: 1 | -1): number {
  if (dir > 0) return ZOOMS.find((z) => z > zoom + 1e-6) ?? MAX_ZOOM;
  return [...ZOOMS].reverse().find((z) => z < zoom - 1e-6) ?? MIN_ZOOM;
}

/** A view showing the whole box (never closer than 100%), or the start view. */
export function fitView(box: Box | null): View {
  if (!box) return START_VIEW;
  const w = Math.max(box.x1 - box.x0, 0.01) * 1.15, h = Math.max(box.y1 - box.y0, 0.01) * 1.15;
  const zoom = clamp(Math.min(1 / w, 1 / h, 1), MIN_ZOOM, MAX_ZOOM);
  const cx = (box.x0 + box.x1) / 2, cy = (box.y0 + box.y1) / 2;
  return { x: cx - 0.5 / zoom, y: cy - 0.5 / zoom, zoom };
}
