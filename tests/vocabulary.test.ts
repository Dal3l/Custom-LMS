import { describe, expect, it } from "vitest";
import { canLookUp, parseLookup } from "@/features/vocabulary/lookup";
import { wordFields } from "@/features/vocabulary/schemas";

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
