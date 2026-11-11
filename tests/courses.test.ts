import { describe, expect, it } from "vitest";
import { coverUrl } from "@/features/courses/cover-url";
import { languageName, sortedLanguages, TAUGHT_LANGUAGES } from "@/features/courses/languages";
import { courseSchema, coverProblem, isOwnCoverPath, titleSchema } from "@/features/courses/schemas";

const USER = "11111111-2222-3333-4444-555555555555";

describe("courseSchema", () => {
  it("accepts a normal course and trims text", () => {
    expect(courseSchema.parse({ title: "  English A2 ", language: "en", level: "A2", description: "" })).toEqual({
      title: "English A2",
      language: "en",
      level: "A2",
      description: "",
    });
  });
  it("allows a custom level and no level", () => {
    expect(courseSchema.safeParse({ title: "IELTS", language: "en", level: "Band 6", description: "" }).success).toBe(true);
    expect(courseSchema.safeParse({ title: "x", language: "de", level: "", description: "" }).success).toBe(true);
  });
  it("rejects empty title, missing language and long level", () => {
    const r = courseSchema.safeParse({ title: " ", language: "", level: "x".repeat(21), description: "" });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.map((i) => i.message).sort()).toEqual(["languageRequired", "levelTooLong", "titleRequired"]);
    }
  });
  it("limits titles to 200 characters", () => {
    expect(titleSchema.safeParse("a".repeat(200)).success).toBe(true);
    expect(titleSchema.safeParse("a".repeat(201)).success).toBe(false);
  });
});

describe("covers", () => {
  it("checks type and size", () => {
    expect(coverProblem({ type: "image/png", size: 1000 })).toBeNull();
    expect(coverProblem({ type: "image/gif", size: 1000 })).toBe("coverType");
    expect(coverProblem({ type: "image/jpeg", size: 6 * 1024 * 1024 })).toBe("coverSize");
  });
  it("only accepts paths in the user's own folder", () => {
    expect(isOwnCoverPath(`${USER}/abc-123.webp`, USER)).toBe(true);
    expect(isOwnCoverPath(`99999999-2222-3333-4444-555555555555/a.png`, USER)).toBe(false);
    expect(isOwnCoverPath(`${USER}/../other/a.png`, USER)).toBe(false);
    expect(isOwnCoverPath(`${USER}/a.svg`, USER)).toBe(false);
  });
  it("builds a public URL", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co";
    expect(coverUrl(`${USER}/a b.png`)).toBe(
      `https://x.supabase.co/storage/v1/object/public/course-covers/${USER}/a%20b.png`,
    );
    expect(coverUrl(null)).toBeNull();
  });
});

describe("languages", () => {
  it("names languages in the interface language", () => {
    expect(languageName("en", "ru")).toBe("Английский");
    expect(languageName("de", "en")).toBe("German");
    expect(languageName("en", "kk")).toBe("Ағылшын тілі");
  });
  it("sorts all taught languages", () => {
    const list = sortedLanguages("ru");
    expect(list).toHaveLength(TAUGHT_LANGUAGES.length);
    expect(list[0]!.name.localeCompare(list[1]!.name, "ru")).toBeLessThan(0);
  });
});
