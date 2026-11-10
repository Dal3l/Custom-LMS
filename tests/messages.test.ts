import { describe, expect, it } from "vitest";
import en from "../messages/en.json";
import kk from "../messages/kk.json";
import ru from "../messages/ru.json";

type Tree = { [key: string]: string | Tree };

function flatten(tree: Tree, prefix = ""): Record<string, string> {
  return Object.entries(tree).reduce<Record<string, string>>((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") acc[path] = value;
    else Object.assign(acc, flatten(value, path));
    return acc;
  }, {});
}

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

const base = flatten(ru);
const others = { en: flatten(en), kk: flatten(kk) };

describe("translations", () => {
  for (const [name, messages] of Object.entries(others)) {
    it(`${name} has exactly the same keys as ru`, () => {
      expect(Object.keys(messages).sort()).toEqual(Object.keys(base).sort());
    });

    it(`${name} uses the same {placeholders} as ru`, () => {
      for (const key of Object.keys(base)) {
        expect(placeholders(messages[key] ?? ""), key).toEqual(placeholders(base[key]!));
      }
    });

    it(`${name} has no empty strings`, () => {
      for (const [key, value] of Object.entries(messages)) {
        expect(value.trim(), key).not.toBe("");
      }
    });
  }
});
