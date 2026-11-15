import { describe, expect, it } from "vitest";
import { generateInviteToken, generatePassword, INVITE_TOKEN_RE, PASSWORD_WORDS } from "@/features/classes/credentials";
import { sortClassLessons, toggleDoneSection } from "@/features/classes/class-lessons";
import { blockBoard, eraseStroke, fileBoard, isItemData, isPersonalBoard, lessonBoard, moveItem, thinPoints, toPoint, touches } from "@/features/board/items";
import { cellStatus, correctCount } from "@/features/live/overview";
import { combineStatus, isNewlyOpened, onlineStudents } from "@/features/live/types";
import { classSchema, registerStudentSchema } from "@/features/classes/schemas";

describe("generatePassword", () => {
  it("is a simple word and four digits", () => {
    for (let i = 0; i < 200; i++) {
      const password = generatePassword();
      const match = /^([a-z]+)(\d{4})$/.exec(password);
      expect(match).not.toBeNull();
      expect(PASSWORD_WORDS).toContain(match![1]);
    }
  });

  it("is long enough for sign-in rules (at least 8 characters)", () => {
    for (let i = 0; i < 200; i++) expect(generatePassword().length).toBeGreaterThanOrEqual(8);
  });

  it("varies", () => {
    const set = new Set(Array.from({ length: 50 }, () => generatePassword()));
    expect(set.size).toBeGreaterThan(40);
  });

  it("skips biased bytes (rejection sampling)", () => {
    // 255 is above the fair limit for both choices and must be skipped; 0 picks the first word and digit 0.
    const random = (n: number) => new Uint8Array(n).map((_, i) => (i % 2 === 0 ? 255 : 0));
    expect(generatePassword(random)).toBe(`${PASSWORD_WORDS[0]}0000`);
  });
});

describe("generateInviteToken", () => {
  it("is URL-safe and matches the database rule", () => {
    for (let i = 0; i < 200; i++) {
      const token = generateInviteToken();
      expect(token).toHaveLength(24);
      expect(token).toMatch(INVITE_TOKEN_RE);
    }
  });

  it("is unique", () => {
    const set = new Set(Array.from({ length: 200 }, () => generateInviteToken()));
    expect(set.size).toBe(200);
  });
});

describe("classSchema", () => {
  it("accepts a class without a call link", () => {
    expect(classSchema.parse({ name: "  Айгерим  ", kind: "individual", call_url: "" })).toEqual({
      name: "Айгерим",
      kind: "individual",
      call_url: null,
    });
  });

  it("accepts https call links only", () => {
    expect(classSchema.parse({ name: "G", kind: "group", call_url: "https://zoom.us/j/123" }).call_url).toBe(
      "https://zoom.us/j/123",
    );
    for (const bad of ["http://zoom.us/j/1", "javascript:alert(1)", "zoom.us/j/1"]) {
      const r = classSchema.safeParse({ name: "G", kind: "group", call_url: bad });
      expect(r.success).toBe(false);
      expect(r.error?.issues[0]?.message).toBe("callUrlInvalid");
    }
  });

  it("requires a name and falls back to individual", () => {
    expect(classSchema.safeParse({ name: " ", kind: "group", call_url: "" }).error?.issues[0]?.message).toBe(
      "nameRequired",
    );
    expect(classSchema.parse({ name: "A", kind: "weird", call_url: "" }).kind).toBe("individual");
  });
});

describe("registerStudentSchema", () => {
  it("normalises the email and checks the time zone", () => {
    expect(
      registerStudentSchema.parse({ fullName: " Адель ", email: " Adel@Mail.KZ ", timezone: "Asia/Almaty" }),
    ).toEqual({ fullName: "Адель", email: "adel@mail.kz", timezone: "Asia/Almaty" });
    const bad = registerStudentSchema.safeParse({ fullName: "A", email: "nope", timezone: "Mars/Base" });
    expect(bad.error?.issues.map((i) => i.message)).toEqual(["emailInvalid", "timezoneInvalid"]);
  });
});

describe("sortClassLessons", () => {
  it("puts the lesson going on first, then the newest", () => {
    const items = [
      { id: "a", status: "open" as const, openedAt: "2026-11-01T10:00:00Z" },
      { id: "b", status: "open" as const, openedAt: "2026-11-05T10:00:00Z" },
      { id: "c", status: "live" as const, openedAt: "2026-10-01T10:00:00Z" },
    ];
    expect(sortClassLessons(items).map((i) => i.id)).toEqual(["c", "b", "a"]);
    expect(items.map((i) => i.id)).toEqual(["a", "b", "c"]); // not changed in place
  });
});

describe("toggleDoneSection", () => {
  it("adds and removes a section without duplicates", () => {
    expect(toggleDoneSection([], "a", true)).toEqual(["a"]);
    expect(toggleDoneSection(["a"], "a", true)).toEqual(["a"]);
    expect(toggleDoneSection(["a", "b"], "a", false)).toEqual(["b"]);
    expect(toggleDoneSection(["b"], "a", false)).toEqual(["b"]);
  });
});

describe("live lesson helpers", () => {
  it("knows who is online and where (newest meta wins)", () => {
    const state = {
      s1: [{ userId: "s1", lessonId: null, sectionId: null }, { userId: "s1", lessonId: "L", sectionId: "S2" }],
      t1: [{ presence_ref: "x" }],
    };
    const online = onlineStudents(state);
    expect([...online.keys()]).toEqual(["s1"]);
    expect(online.get("s1")).toEqual({ userId: "s1", lessonId: "L", sectionId: "S2" });
  });

  it("follows the teacher only when a lesson was really (re)opened", () => {
    const row = { status: "live", lesson_id: "L1", opened_at: "2026-11-18T10:00:00Z" };
    expect(isNewlyOpened(row, null)).toBe("L1@2026-11-18T10:00:00Z");
    expect(isNewlyOpened(row, "L1@2026-11-18T10:00:00Z")).toBeNull(); // e.g. a section was finished
    expect(isNewlyOpened({ ...row, status: "open" }, null)).toBeNull();
  });

  it("is online only when every connection is", () => {
    expect(combineStatus(["online", "online"])).toBe("online");
    expect(combineStatus(["online", "connecting"])).toBe("connecting");
    expect(combineStatus(["connecting", "offline"])).toBe("offline");
  });
});

describe("group overview cells", () => {
  const saved = (result: { parts: Record<string, boolean | null>; correct: boolean } | null) => ({
    answer: {},
    checkedAnswer: {},
    result: result && { ...result, score: 0 },
  });
  it("tells none / unchecked / right / wrong / partly right apart", () => {
    expect(cellStatus(undefined)).toEqual({ kind: "none" });
    expect(cellStatus(saved(null))).toEqual({ kind: "unchecked" });
    expect(cellStatus(saved({ parts: { a: true, b: true }, correct: true }))).toEqual({ kind: "correct" });
    expect(cellStatus(saved({ parts: { a: false, b: null }, correct: false }))).toEqual({ kind: "wrong" });
    expect(cellStatus(saved({ parts: { a: true, b: false, c: null }, correct: false }))).toEqual({ kind: "partial", right: 1, total: 3 });
    expect(cellStatus(saved({ parts: { a: null }, correct: false }))).toEqual({ kind: "unchecked" });
  });
  it("counts fully right exercises", () => {
    expect(correctCount({ x: saved({ parts: { a: true }, correct: true }), y: saved(null) })).toBe(1);
    expect(correctCount(undefined)).toBe(0);
  });
});

describe("whiteboard items", () => {
  it("keeps points inside the board and rounds them", () => {
    expect(toPoint(-0.2, 1.7)).toEqual([0, 1]);
    expect(toPoint(0.123456, 0.5)).toEqual([0.1235, 0.5]);
  });

  it("thins a stroke but keeps its ends", () => {
    const pts = [toPoint(0, 0), toPoint(0.0001, 0), toPoint(0.0002, 0), toPoint(0.5, 0.5)];
    expect(thinPoints(pts)).toEqual([[0, 0], [0.5, 0.5]]);
  });

  it("draws only well-formed items", () => {
    expect(isItemData({ kind: "pen", color: "#2563eb", points: [[0.1, 0.2]] })).toBe(true);
    expect(isItemData({ kind: "rect", color: "#2563eb", from: [0, 0], to: [1, 1] })).toBe(true);
    expect(isItemData({ kind: "text", color: "#111827", at: [0.5, 0.5], text: "Hi" })).toBe(true);
    expect(isItemData({ kind: "pen", color: "red", points: [[0, 0]] })).toBe(false);
    expect(isItemData({ kind: "text", color: "#111827", at: [0, 0], text: "" })).toBe(false);
    expect(isItemData({ kind: "script", color: "#111827" })).toBe(false);
  });

  it("names boards and knows which are personal", () => {
    const id = "aaaaaaaa-0000-0000-0000-000000000001";
    expect(isPersonalBoard(fileBoard(id, 3))).toBe(true);
    expect(isPersonalBoard(lessonBoard(id))).toBe(false);
    expect(isPersonalBoard(blockBoard(id))).toBe(false);
  });
});

describe("whiteboard eraser and hand", () => {
  const line: [number, number][] = Array.from({ length: 11 }, (_, i) => [i / 10, 0.5]);

  it("erases only the part of a line under the eraser", () => {
    const pieces = eraseStroke(line, [[0.5, 0.5]], 0.06, 0.625);
    expect(pieces).toHaveLength(2);
    expect(pieces[0]!.at(-1)![0]).toBeLessThan(0.5);
    expect(pieces[1]![0]![0]).toBeGreaterThan(0.5);
  });

  it("catches a quick stroke whose points are far apart", () => {
    const quick: [number, number][] = [[0.1, 0.5], [0.5, 0.5], [0.9, 0.5]];
    const pieces = eraseStroke(quick, [[0.3, 0.45], [0.3, 0.55]], 0.02, 0.625);
    expect(pieces).toHaveLength(2);
  });

  it("keeps a line the eraser did not touch, removes one it covered", () => {
    expect(eraseStroke(line, [[0.5, 0.9]], 0.05, 0.625)).toEqual([line]);
    expect(eraseStroke([[0.5, 0.5], [0.51, 0.5]], [[0.505, 0.5]], 0.05, 0.625)).toEqual([]);
  });

  it("finds shapes and text under a point", () => {
    expect(touches({ kind: "rect", color: "#111827", from: [0.2, 0.2], to: [0.4, 0.4] }, [0.2, 0.3], 0.01, 0.625)).toBe(true);
    expect(touches({ kind: "rect", color: "#111827", from: [0.2, 0.2], to: [0.4, 0.4] }, [0.3, 0.3], 0.01, 0.625)).toBe(false);
    expect(touches({ kind: "text", color: "#111827", at: [0.1, 0.1], text: "Hello" }, [0.12, 0.11], 0.01, 0.625)).toBe(true);
    expect(touches({ kind: "pen", color: "#111827", points: line }, [0.33, 0.5], 0.01, 0.625)).toBe(true);
  });

  it("moves an item, staying on the board", () => {
    expect(moveItem({ kind: "text", color: "#111827", at: [0.9, 0.5], text: "Hi" }, 0.2, -0.1)).toEqual({
      kind: "text",
      color: "#111827",
      at: [1, 0.4],
      text: "Hi",
    });
  });
});
