import { describe, expect, it } from "vitest";
import { canLookUp, parseLookup } from "@/features/vocabulary/lookup";
import { wordFields } from "@/features/vocabulary/schemas";
import { isTranslatable, normalizeTerm, parseTranslation } from "@/features/vocabulary/translate";

describe("dictionary lookup", () => {
  it("takes the transcription, an https recording and an example", () => {
    const data = [
      {
        word: "apple",
        phonetics: [{ text: "/ˈæp.əl/", audio: "" }, { audio: "https://api.dictionaryapi.dev/media/pronunciations/en/apple-us.mp3" }],
        meanings: [{ definitions: [{ definition: "A fruit." }, { definition: "x", example: "An apple a day." }] }],
      },
    ];
    expect(parseLookup(data)).toEqual({
      transcription: "/ˈæp.əl/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/apple-us.mp3",
      example: "An apple a day.",
    });
  });

  it("copes with missing parts and odd answers", () => {
    expect(parseLookup({ title: "No Definitions Found" })).toEqual({ transcription: "", audioUrl: null, example: "" });
    expect(parseLookup([{ phonetic: " /kæt/ ", phonetics: [{ audio: "http://insecure/cat.mp3" }] }])).toEqual({
      transcription: "/kæt/",
      audioUrl: null,
      example: "",
    });
  });

  it("looks up English only", () => {
    expect(canLookUp("en")).toBe(true);
    expect(canLookUp("de")).toBe(false);
  });
});

describe("word card fields", () => {
  it("trims, needs a word, refuses non-https recordings", () => {
    const ok = wordFields.parse({ term: "  cat ", translation: " кот ", transcription: "", example: "", audioUrl: null });
    expect(ok.term).toBe("cat");
    expect(ok.translation).toBe("кот");
    expect(wordFields.safeParse({ term: "  ", translation: "", transcription: "", example: "", audioUrl: null }).success).toBe(false);
    expect(wordFields.safeParse({ term: "cat", translation: "", transcription: "", example: "", audioUrl: "http://x" }).success).toBe(false);
  });
});


describe("translate a selected word", () => {
  it("normalises and accepts words and short phrases only", () => {
    expect(normalizeTerm("  «Orange,»  ")).toBe("orange");
    expect(normalizeTerm("Look  after")).toBe("look after");
    expect(isTranslatable("orange")).toBe(true);
    expect(isTranslatable("1.1")).toBe(false);
    expect(isTranslatable("one two three four five six seven")).toBe(false);
    expect(isTranslatable("x".repeat(61))).toBe(false);
  });

  it("collects variants of this very word, best first", () => {
    const answer = {
      responseStatus: 200,
      responseData: { translatedText: "апельсин" },
      matches: [
        { segment: "orange", translation: "апельсин", match: 1 },
        { segment: "Orange", translation: "оранжевый", match: 0.98 },
        { segment: "orange juice", translation: "апельсиновый сок", match: 0.9 },
        { segment: "orange", translation: "orange", match: 0.8 },
        { segment: "orange", translation: "рыжий", match: 0.2 },
      ],
    };
    expect(parseTranslation(answer, "Orange")).toEqual(["апельсин", "оранжевый"]);
  });

  it("knows a refusal (daily limit) from 'nothing found'", () => {
    expect(parseTranslation({ responseStatus: 429, responseData: { translatedText: "" } }, "cat")).toBeNull();
    expect(
      parseTranslation({ responseStatus: 200, responseData: { translatedText: "MYMEMORY WARNING: YOU USED ALL AVAILABLE FREE TRANSLATIONS" } }, "cat"),
    ).toBeNull();
    expect(parseTranslation({ responseStatus: 200, responseData: { translatedText: "cat" }, matches: [] }, "cat")).toEqual([]);
  });
});
