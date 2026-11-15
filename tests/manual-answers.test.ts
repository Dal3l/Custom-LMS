import { describe, expect, it } from "vitest";
import { checkMode, isAutoChecked } from "@/features/exercises/catalog";
import { getDefinition } from "@/features/exercises/definitions";
import { countWords } from "@/features/exercises/types/open_answer/schema";
import { audioExtension, voiceAnswerAnswerSchema } from "@/features/exercises/types/voice_answer/schema";

describe("open answer", () => {
  it("counts words in any language, contractions as one", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("  I don't like   cold tea. ")).toBe(5);
    expect(countWords("Мен мектепке барамын, ол — дүкенге.")).toBe(5);
    expect(countWords("well-known 2026 year")).toBe(3);
  });

  it("is checked by the teacher: the answer's shape only", () => {
    const def = getDefinition("open_answer")!;
    expect(checkMode("open_answer")).toBe("manual");
    expect(isAutoChecked("open_answer")).toBe(false);
    expect(def.grading).toBeUndefined();
    expect(def.manual!.answerSchema.safeParse({ text: "Hello" }).success).toBe(true);
    expect(def.manual!.answerSchema.safeParse({ text: "x".repeat(10_001) }).success).toBe(false);
  });
});

describe("voice answer", () => {
  const uuid = "aaaaaaaa-0000-4000-8000-000000000001";
  it("accepts only recordings in the class's private folder", () => {
    const ok = { file: { path: `${uuid}/${uuid}/${uuid}.webm`, mime: "audio/webm", size: 1000, seconds: 3 } };
    expect(voiceAnswerAnswerSchema.safeParse(ok).success).toBe(true);
    expect(voiceAnswerAnswerSchema.safeParse({ file: null }).success).toBe(true);
    for (const path of [`../${uuid}/${uuid}.webm`, `${uuid}/${uuid}.webm`, `${uuid}/${uuid}/${uuid}.exe`]) {
      expect(voiceAnswerAnswerSchema.safeParse({ file: { ...ok.file, path } }).success).toBe(false);
    }
  });

  it("names files by the recorded type", () => {
    expect(audioExtension("audio/webm;codecs=opus")).toBe("webm");
    expect(audioExtension("audio/mp4")).toBe("m4a");
    expect(audioExtension("audio/ogg")).toBe("ogg");
  });

  it("automatic types are still auto-checked", () => {
    expect(isAutoChecked("true_false")).toBe(true);
    expect(isAutoChecked("text")).toBe(false);
  });
});
