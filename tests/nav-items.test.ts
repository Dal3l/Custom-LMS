import { describe, expect, it } from "vitest";
import { canAccess, getNavItems, isActive } from "@/components/app-shell/nav-items";

describe("navigation by role", () => {
  it("teacher sees teaching sections but no trainer", () => {
    const keys = getNavItems("teacher").map((i) => i.key);
    expect(keys).toEqual(["dashboard", "classes", "students", "library", "schedule"]);
    expect(canAccess("teacher", "trainer")).toBe(false);
  });

  it("student sees the dictionary (with the trainer inside) but no course builder", () => {
    const keys = getNavItems("student").map((i) => i.key);
    expect(keys).toEqual(["dashboard", "classes", "homework", "vocabulary", "schedule"]);
    expect(canAccess("student", "courses")).toBe(false);
    expect(canAccess("student", "library")).toBe(false);
  });

  it("the Library is the current section in the course builder too", () => {
    const library = getNavItems("teacher").find((i) => i.key === "library")!;
    expect(isActive(library, "/library")).toBe(true);
    expect(isActive(library, "/courses/abc/lessons/x")).toBe(true);
    expect(isActive(library, "/classes")).toBe(false);
  });
});
