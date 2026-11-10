import { describe, expect, it } from "vitest";
import { callbackTargets } from "@/features/auth/callback";
import { safeNextPath, stripLocalePrefix } from "@/lib/redirect";

describe("safeNextPath", () => {
  it("keeps same-site paths", () => {
    expect(safeNextPath("/ru/dashboard", "/x")).toBe("/ru/dashboard");
    expect(safeNextPath("/en/profile?saved=1", "/x")).toBe("/en/profile?saved=1");
  });

  it.each([
    ["https://evil.com", "absolute URL"],
    ["//evil.com", "protocol-relative URL"],
    ["/\\evil.com", "backslash trick"],
    ["javascript:alert(1)", "javascript URL"],
    ["dashboard", "relative path"],
    ["/ru\n/x", "control characters"],
    ["", "empty"],
  ])("rejects %s (%s)", (value) => {
    expect(safeNextPath(value, "/fallback")).toBe("/fallback");
  });

  it("rejects non-strings", () => {
    expect(safeNextPath(undefined, "/f")).toBe("/f");
    expect(safeNextPath(42, "/f")).toBe("/f");
  });
});

describe("stripLocalePrefix", () => {
  it("removes a leading locale", () => {
    expect(stripLocalePrefix("/ru/dashboard")).toBe("/dashboard");
    expect(stripLocalePrefix("/kk")).toBe("/");
    expect(stripLocalePrefix("/en?x=1")).toBe("/?x=1");
  });

  it("leaves other paths alone", () => {
    expect(stripLocalePrefix("/dashboard")).toBe("/dashboard");
    expect(stripLocalePrefix("/russia")).toBe("/russia");
  });
});

describe("callbackTargets", () => {
  it("uses the locale from next for the error page", () => {
    expect(callbackTargets("/kk/dashboard")).toEqual({
      next: "/kk/dashboard",
      errorPath: "/kk/login?error=link",
    });
  });

  it("falls back to the default locale for unsafe or missing next", () => {
    expect(callbackTargets("https://evil.com")).toEqual({
      next: "/ru/dashboard",
      errorPath: "/ru/login?error=link",
    });
    expect(callbackTargets(null).next).toBe("/ru/dashboard");
  });
});
