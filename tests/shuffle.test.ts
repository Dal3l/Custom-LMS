import { describe, expect, it } from "vitest";
import { hashString, shuffleAway, stableShuffle } from "@/features/exercises/shuffle";

const items = ["a1b2c3d4", "e5f6a7b8", "c9d0e1f2", "a3b4c5d6", "f7e8d9c0"].map((id) => ({ id }));

describe("stable shuffle", () => {
  it("gives the same order every time", () => {
    expect(stableShuffle(items)).toEqual(stableShuffle([...items].reverse()));
    expect(hashString("x")).toBe(hashString("x"));
  });

  it("keeps every item", () => {
    expect(stableShuffle(items).map((i) => i.id).sort()).toEqual(items.map((i) => i.id).sort());
  });

  it("never returns the original order when asked not to", () => {
    for (let n = 2; n <= items.length; n++) {
      for (const salt of ["", "x", "y", "z"]) {
        const list = items.slice(0, n);
        const out = shuffleAway(list, salt);
        expect(out.map((i) => i.id)).not.toEqual(list.map((i) => i.id));
      }
    }
    expect(shuffleAway([{ id: "only" }])).toEqual([{ id: "only" }]);
  });
});
