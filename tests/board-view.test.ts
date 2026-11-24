import { describe, expect, it } from "vitest";
import { boardViewOf } from "../src/features/live/types";

describe("boardViewOf (\"Bring students here\")", () => {
  const good = { lessonId: "l1", board: "lesson:l1", view: { x: 0.5, y: -1.25, zoom: 2 } };

  it("keeps a valid view", () => {
    expect(boardViewOf(good)).toEqual(good);
  });

  it("drops extra fields", () => {
    expect(boardViewOf({ ...good, view: { ...good.view, extra: 1 }, junk: true })).toEqual(good);
  });

  it("rejects broken messages", () => {
    expect(boardViewOf(null)).toBeNull();
    expect(boardViewOf({ ...good, board: 5 })).toBeNull();
    expect(boardViewOf({ ...good, view: undefined })).toBeNull();
    expect(boardViewOf({ ...good, view: { x: "1", y: 0, zoom: 1 } })).toBeNull();
    expect(boardViewOf({ ...good, view: { x: Number.NaN, y: 0, zoom: 1 } })).toBeNull();
    expect(boardViewOf({ ...good, view: { x: 0, y: 0, zoom: 0 } })).toBeNull();
    expect(boardViewOf({ ...good, view: { x: 1e9, y: 0, zoom: 1 } })).toBeNull();
  });
});
