import { describe, expect, it } from "vitest";
import {
  contentBox,
  fitView,
  isItemData,
  itemBox,
  moveItem,
  resizeItem,
  stepZoom,
  textBox,
  toPoint,
  touches,
  zoomAt,
  type BoardItemData,
} from "@/features/board/items";

const A = 0.625;
const IMG = "11111111-1111-1111-1111-111111111111/22222222-2222-2222-2222-222222222222/33333333-3333-3333-3333-333333333333.png";

describe("endless board", () => {
  it("points go past the frame on an endless board, not on a sheet", () => {
    expect(toPoint(-0.2, 1.7)).toEqual([0, 1]);
    expect(toPoint(-0.2, 1.7, true)).toEqual([-0.2, 1.7]);
    expect(toPoint(-80, 80, true)).toEqual([-50, 50]);
  });

  it("moving off the frame keeps the shape on an endless board", () => {
    const line: BoardItemData = { kind: "line", color: "#111827", from: [0.9, 0.5], to: [1, 0.5] };
    expect(moveItem(line, 0.5, 0, true)).toEqual({ ...line, from: [1.4, 0.5], to: [1.5, 0.5] });
    expect(moveItem(line, 0.5, 0)).toEqual({ ...line, from: [1, 0.5], to: [1, 0.5] });
  });

  it("zooms around a point and steps through the zoom levels", () => {
    const v = zoomAt({ x: 0, y: 0, zoom: 1 }, 2, 0.5, 0.5);
    expect(v).toEqual({ x: 0.25, y: 0.25, zoom: 2 });
    // The board point under the pointer stays under it.
    const w = zoomAt({ x: 1, y: 2, zoom: 0.5 }, 1, 0.2, 0.8);
    expect(w.x + 0.2 / w.zoom).toBeCloseTo(1 + 0.2 / 0.5);
    expect(w.y + 0.8 / w.zoom).toBeCloseTo(2 + 0.8 / 0.5);
    expect(zoomAt(v, 100).zoom).toBe(4);
    expect(stepZoom(1, 1)).toBe(1.5);
    expect(stepZoom(1, -1)).toBe(0.75);
    expect(stepZoom(4, 1)).toBe(4);
    expect(stepZoom(0.3, -1)).toBe(0.25);
  });

  it("'show everything' fits the drawing, never closer than 100%", () => {
    expect(fitView(null)).toEqual({ x: 0, y: 0, zoom: 1 });
    const small = fitView({ x0: 0.4, y0: 0.4, x1: 0.6, y1: 0.6 });
    expect(small.zoom).toBe(1);
    expect(small.x).toBeCloseTo(0);
    const wide = fitView({ x0: -1, y0: 0, x1: 2, y1: 1 });
    expect(wide.zoom).toBeCloseTo(1 / (3 * 1.15));
    expect(wide.x + 0.5 / wide.zoom).toBeCloseTo(0.5);
    const items: BoardItemData[] = [
      { kind: "pen", color: "#111827", points: [[-1, 0], [0, 0.5]] },
      { kind: "image", src: IMG, at: [1, 1], w: 0.5, h: 0.5 },
    ];
    expect(contentBox(items, A)).toEqual({ x0: -1, y0: 0, x1: 1.5, y1: 1.5 });
  });
});

describe("text and pictures", () => {
  it("text has a size; old text without one is 30", () => {
    expect(isItemData({ kind: "text", color: "#111827", at: [0, 0], text: "Hi", size: 60 })).toBe(true);
    expect(isItemData({ kind: "text", color: "#111827", at: [0, 0], text: "Hi", size: 1 })).toBe(false);
    expect(isItemData({ kind: "text", color: "#111827", at: [0, 0], text: "Hi", size: "big" })).toBe(false);
    const old = textBox({ at: [0, 0], text: "Hi" }, A, 30);
    const big = textBox({ at: [0, 0], text: "Hi", size: 60 }, A, 60);
    expect(big.y1).toBeCloseTo(old.y1 * 2);
    expect(big.x1).toBeCloseTo(old.x1 * 2);
  });

  it("a picture is checked: only a file of a class folder, a real size", () => {
    expect(isItemData({ kind: "image", src: IMG, at: [0.1, 0.1], w: 0.3, h: 0.2 })).toBe(true);
    expect(isItemData({ kind: "image", src: "https://evil.example/x.png", at: [0, 0], w: 0.3, h: 0.2 })).toBe(false);
    expect(isItemData({ kind: "image", src: "../x.png", at: [0, 0], w: 0.3, h: 0.2 })).toBe(false);
    expect(isItemData({ kind: "image", src: IMG, at: [0, 0], w: 0, h: 0.2 })).toBe(false);
    expect(isItemData({ kind: "image", src: IMG, at: [0, 0], w: 0.3 })).toBe(false);
  });

  it("dragging a corner makes text bigger; the opposite corner stays", () => {
    const text: BoardItemData = { kind: "text", color: "#111827", at: [0.2, 0.2], text: "Hello", size: 30 };
    const box = textBox(text, A, 75);
    // Drag the bottom-right corner twice as far from the top-left one.
    const bigger = resizeItem(text, box, "se", [0.2 + (box.x1 - 0.2) * 2, 0.2 + (box.y1 - 0.2) * 2], A);
    expect(bigger).toMatchObject({ at: [0.2, 0.2], size: 60 });
    // Drag the top-left corner: the bottom-right one stays put.
    const smaller = resizeItem(text, box, "nw", [(0.2 + box.x1) / 2, (0.2 + box.y1) / 2], A);
    expect(smaller.kind === "text" && smaller.size).toBe(15);
    if (smaller.kind === "text") expect(smaller.at[0] + (box.x1 - box.x0) / 2).toBeCloseTo(box.x1, 3);
    // Never smaller or bigger than the limits.
    expect(resizeItem(text, box, "se", [0.2, 0.2], A)).toMatchObject({ size: 6 });
  });

  it("a picture keeps its proportions when resized", () => {
    const img: BoardItemData = { kind: "image", src: IMG, at: [0.1, 0.1], w: 0.4, h: 0.2 };
    const out = resizeItem(img, itemBox(img, A), "se", [0.9, 0.5], A);
    expect(out.kind === "image" && out.w / out.h).toBeCloseTo(2);
    expect(out).toMatchObject({ at: [0.1, 0.1] });
    const lines: BoardItemData = { kind: "line", color: "#111827", from: [0, 0], to: [1, 1] };
    expect(resizeItem(lines, itemBox(lines, A), "se", [2, 2], A)).toBe(lines);
  });

  it("the eraser and the hand find pictures and big text", () => {
    const img: BoardItemData = { kind: "image", src: IMG, at: [0.1, 0.1], w: 0.4, h: 0.2 };
    expect(touches(img, [0.3, 0.2], 0.01, A)).toBe(true);
    expect(touches(img, [0.6, 0.2], 0.01, A)).toBe(false);
    const big: BoardItemData = { kind: "text", color: "#111827", at: [0.1, 0.1], text: "Hi", size: 200 };
    expect(touches(big, [0.25, 0.4], 0.01, A)).toBe(true);
  });
});
