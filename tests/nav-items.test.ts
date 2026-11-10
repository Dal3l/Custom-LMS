import { describe, expect, it } from "vitest";
import { canAccess, getNavItems } from "@/components/app-shell/nav-items";

describe("navigation by role", () => {
  it("teacher sees teaching sections but no trainer", () => {
    const keys = getNavItems("teacher").map((i) => i.key);
    expect(keys).toEqual(["dashboard", "classes", "courses", "library", "homework", "schedule"]);
    expect(canAccess("teacher", "trainer")).toBe(false);
  });

  it("student sees vocabulary and trainer but no course builder", () => {
    const keys = getNavItems("student").map((i) => i.key);
    expect(keys).toEqual(["dashboard", "classes", "homework", "vocabulary", "trainer", "schedule"]);
    expect(canAccess("student", "courses")).toBe(false);
    expect(canAccess("student", "library")).toBe(false);
  });
});
