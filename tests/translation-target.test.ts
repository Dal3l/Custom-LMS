import { describe, expect, it } from "vitest";
import { translationTarget } from "@/features/vocabulary/translate";

describe("translationTarget", () => {
  it("uses the interface language when it differs from the lesson's", () => {
    expect(translationTarget("ru", "en")).toBe("ru");
    expect(translationTarget("kk", "en", "en")).toBe("kk");
  });
  it("interface in the lesson's language: the saved choice, else another language", () => {
    expect(translationTarget("en", "en")).toBe("ru");
    expect(translationTarget("en", "en", "kk")).toBe("kk");
    expect(translationTarget("ru", "ru")).toBe("kk");
  });
  it("ignores a saved choice that is useless or unknown", () => {
    expect(translationTarget("en", "en", "en")).toBe("ru");
    expect(translationTarget("en", "en", "xx")).toBe("ru");
  });
});
