import { describe, expect, it } from "vitest";
import {
  findLessonModule,
  moveItem,
  moveLesson,
  removeLesson,
  updateLesson,
  type OutlineModule,
} from "@/features/courses/outline";

const lesson = (id: string) => ({ id, title: id, is_test: false });
const outline = (): OutlineModule[] => [
  { id: "m1", title: "M1", lessons: [lesson("a"), lesson("b"), lesson("c")] },
  { id: "m2", title: "M2", lessons: [lesson("d")] },
  { id: "m3", title: "M3", lessons: [] },
];
const ids = (mods: OutlineModule[]) => mods.map((m) => `${m.id}:${m.lessons.map((l) => l.id).join("")}`);

describe("moveItem", () => {
  it("moves an element", () => {
    expect(moveItem(["a", "b", "c"], 0, 2)).toEqual(["b", "c", "a"]);
    expect(moveItem(["a", "b", "c"], 2, 0)).toEqual(["c", "a", "b"]);
  });
  it("ignores bad indexes", () => {
    const list = ["a"];
    expect(moveItem(list, 0, 5)).toBe(list);
  });
});

describe("moveLesson", () => {
  it("reorders inside a module", () => {
    expect(ids(moveLesson(outline(), "a", "m1", 2))).toEqual(["m1:bca", "m2:d", "m3:"]);
  });
  it("moves to another module at a position", () => {
    expect(ids(moveLesson(outline(), "b", "m2", 0))).toEqual(["m1:ac", "m2:bd", "m3:"]);
  });
  it("moves into an empty module", () => {
    expect(ids(moveLesson(outline(), "d", "m3"))).toEqual(["m1:abc", "m2:", "m3:d"]);
  });
  it("does nothing for unknown ids", () => {
    const o = outline();
    expect(moveLesson(o, "zzz", "m2")).toBe(o);
    expect(moveLesson(o, "a", "nope")).toBe(o);
  });
  it("does not mutate the input", () => {
    const o = outline();
    moveLesson(o, "a", "m2");
    expect(ids(o)).toEqual(["m1:abc", "m2:d", "m3:"]);
  });
});

describe("other helpers", () => {
  it("finds the module of a lesson", () => {
    expect(findLessonModule(outline(), "d")?.id).toBe("m2");
  });
  it("updates and removes lessons", () => {
    const o = updateLesson(outline(), "b", { title: "B!", is_test: true });
    expect(o[0]!.lessons[1]).toEqual({ id: "b", title: "B!", is_test: true });
    expect(ids(removeLesson(o, "b"))).toEqual(["m1:ac", "m2:d", "m3:"]);
  });
});
