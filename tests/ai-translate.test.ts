import { describe, expect, it } from "vitest";
import { parseAiTranslation, sentenceAround, translationPrompt, usableContext } from "@/features/vocabulary/translate";

const at = (text: string, word: string) => {
  const start = text.indexOf(word);
  return sentenceAround(text, start, start + word.length);
};

describe("the sentence around a selected word", () => {
  it("takes just its sentence", () => {
    const text = "I went to town. We sat on the bank of the river! Then we left.";
    expect(at(text, "bank")).toBe("We sat on the bank of the river!");
    expect(at("Bank holidays are fun", "Bank")).toBe("Bank holidays are fun");
    expect(at("First line\nThe cat sleeps\nLast", "cat")).toBe("The cat sleeps");
  });

  it("nothing when the selection is the whole text", () => {
    expect(at("Bank.", "Bank")).toBeNull();
    expect(at("bank", "bank")).toBeNull();
  });

  it("a very long sentence is cut to whole words around the selection", () => {
    const words = Array.from({ length: 120 }, (_, i) => `word${i}`);
    words[60] = "bank";
    const s = at(words.join(" "), "bank")!;
    expect(s.length).toBeLessThanOrEqual(300);
    expect(s).toContain("bank");
    expect(s.split(" ").every((w) => /^(word\d+|bank)$/.test(w))).toBe(true);
  });

  it("the server takes a sentence only if it is short and has the word", () => {
    expect(usableContext("We sat on the Bank of the river.", "bank")).toBe("We sat on the Bank of the river.");
    expect(usableContext("Something else entirely.", "bank")).toBeNull();
    expect(usableContext("x".repeat(301) + " bank", "bank")).toBeNull();
    expect(usableContext("bank", "bank")).toBeNull();
    expect(usableContext(null, "bank")).toBeNull();
  });
});

describe("asking the AI", () => {
  it("names the languages and adds the sentence when there is one", () => {
    const [system, user] = translationPrompt("bank", "en", "ru", "We sat on the bank.");
    expect(system!.content).toContain("from English into Russian");
    expect(system!.content).toContain("fits its meaning in the sentence");
    expect(user!.content).toBe("Word: bank\nSentence: We sat on the bank.");
    const [s2, u2] = translationPrompt("алма", "kk", "en", null);
    expect(s2!.content).toContain("from Kazakh into English");
    expect(s2!.content).not.toContain("sentence,");
    expect(u2!.content).toBe("Word: алма");
  });

  it("reads the answer, plain or wrapped in a code block", () => {
    expect(parseAiTranslation('{"variants": ["берег", "банк"]}')).toEqual(["берег", "банк"]);
    expect(parseAiTranslation('```json\n{"variants": ["берег"]}\n```')).toEqual(["берег"]);
    expect(parseAiTranslation('{"variants": ["берег", 5, null]}')).toEqual(["берег"]);
    expect(parseAiTranslation("Sorry, I can't")).toBeNull();
    expect(parseAiTranslation('{"words": []}')).toBeNull();
  });
});
