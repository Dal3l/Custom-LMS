import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SaveQueue } from "@/features/lessons/save-queue";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe("SaveQueue", () => {
  it("waits for a pause in typing and saves only the latest version", async () => {
    const q = new SaveQueue(700, 3000);
    const saved: string[] = [];
    const save = (v: string) => async () => (saved.push(v), true);

    q.schedule("e1", save("H"));
    await vi.advanceTimersByTimeAsync(300);
    q.schedule("e1", save("He"));
    await vi.advanceTimersByTimeAsync(300);
    q.schedule("e1", save("Hello"));
    expect(q.getStatus()).toBe("saving");
    await vi.advanceTimersByTimeAsync(700);
    expect(saved).toEqual(["Hello"]);
    expect(q.getStatus()).toBe("saved");
  });

  it("keeps different exercises apart", async () => {
    const q = new SaveQueue(700, 3000);
    const saved: string[] = [];
    q.schedule("a", async () => (saved.push("a"), true));
    q.schedule("b", async () => (saved.push("b"), true));
    await vi.advanceTimersByTimeAsync(700);
    expect(saved.sort()).toEqual(["a", "b"]);
  });

  it("retries after a failure and reports the error meanwhile", async () => {
    const q = new SaveQueue(700, 3000);
    let online = false;
    let attempts = 0;
    q.schedule("e1", async () => (attempts++, online));
    await vi.advanceTimersByTimeAsync(700);
    expect(attempts).toBe(1);
    expect(q.getStatus()).toBe("error");
    expect(q.hasUnsaved()).toBe(true);

    online = true;
    await vi.advanceTimersByTimeAsync(3000);
    expect(attempts).toBe(2);
    expect(q.getStatus()).toBe("saved");
    expect(q.hasUnsaved()).toBe(false);
  });

  it("a newer edit replaces the failed one when retrying", async () => {
    const q = new SaveQueue(700, 3000);
    const saved: string[] = [];
    q.schedule("e1", async () => false);
    await vi.advanceTimersByTimeAsync(700);
    q.schedule("e1", async () => (saved.push("newer"), true));
    await vi.advanceTimersByTimeAsync(700);
    expect(saved).toEqual(["newer"]);
    await vi.advanceTimersByTimeAsync(5000);
    expect(saved).toEqual(["newer"]);
    expect(q.getStatus()).toBe("saved");
  });

  it("saves one item in order even if a save is slow", async () => {
    const q = new SaveQueue(0, 3000);
    const order: string[] = [];
    q.schedule("e1", () => new Promise((r) => setTimeout(() => (order.push("first"), r(true)), 500)));
    await vi.advanceTimersByTimeAsync(0);
    q.schedule("e1", async () => (order.push("second"), true));
    await vi.advanceTimersByTimeAsync(1000);
    expect(order).toEqual(["first", "second"]);
  });

  it("flush saves immediately and drop forgets an item", async () => {
    const q = new SaveQueue(700, 3000);
    const saved: string[] = [];
    q.schedule("a", async () => (saved.push("a"), true));
    q.schedule("b", async () => (saved.push("b"), true));
    q.drop("b");
    await q.flush("a");
    expect(saved).toEqual(["a"]);
    await vi.advanceTimersByTimeAsync(1000);
    expect(saved).toEqual(["a"]);
    expect(q.hasUnsaved()).toBe(false);
  });

  it("notifies listeners when the status changes", async () => {
    const q = new SaveQueue(700, 3000);
    const seen: string[] = [];
    q.subscribe(() => seen.push(q.getStatus()));
    q.schedule("e1", async () => true);
    await vi.advanceTimersByTimeAsync(700);
    expect(seen).toEqual(["saving", "saved"]);
  });
});
