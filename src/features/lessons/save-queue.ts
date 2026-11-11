// Autosave queue: debounces edits per item, saves them in order, retries on failure.
// Plain TypeScript (no React) so it can be unit-tested.

export type SaveStatus = "saved" | "saving" | "error";
type Run = () => Promise<boolean>;

export class SaveQueue {
  private pending = new Map<string, Run>();
  private timers = new Map<string, ReturnType<typeof setTimeout>>();
  private chains = new Map<string, Promise<void>>();
  private failed = new Set<string>();
  private inflight = 0;
  private listeners = new Set<() => void>();
  status: SaveStatus = "saved";

  constructor(
    private delay = 700,
    private retryDelay = 3000,
  ) {}

  /** Replace the pending save for `key` and (re)start its countdown. */
  schedule(key: string, run: Run) {
    this.pending.set(key, run);
    this.arm(key, this.delay);
    this.update();
  }

  /** Save `key` now (e.g. when the field loses focus). */
  flush(key: string): Promise<void> {
    const timer = this.timers.get(key);
    if (timer) clearTimeout(timer);
    this.timers.delete(key);
    const run = this.pending.get(key);
    if (!run) return this.chains.get(key) ?? Promise.resolve();
    this.pending.delete(key);

    // Saves of the same item run one after another, in the order they were made.
    const previous = this.chains.get(key) ?? Promise.resolve();
    const next = previous.then(async () => {
      this.inflight++;
      this.update();
      let ok = false;
      try {
        ok = await run();
      } catch {
        ok = false;
      }
      this.inflight--;
      if (ok) {
        this.failed.delete(key);
      } else {
        this.failed.add(key);
        // Retry unless a newer edit is already waiting.
        if (!this.pending.has(key)) this.pending.set(key, run);
        this.arm(key, this.retryDelay);
      }
      this.update();
    });
    this.chains.set(key, next);
    return next;
  }

  flushAll(): Promise<void> {
    return Promise.all([...this.pending.keys()].map((k) => this.flush(k))).then(() => undefined);
  }

  /** Forget an item (e.g. it was deleted). */
  drop(key: string) {
    const timer = this.timers.get(key);
    if (timer) clearTimeout(timer);
    this.timers.delete(key);
    this.pending.delete(key);
    this.failed.delete(key);
    this.update();
  }

  hasUnsaved() {
    return this.pending.size > 0 || this.inflight > 0;
  }

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getStatus = () => this.status;

  private arm(key: string, ms: number) {
    const old = this.timers.get(key);
    if (old) clearTimeout(old);
    this.timers.set(
      key,
      setTimeout(() => void this.flush(key), ms),
    );
  }

  private update() {
    const status: SaveStatus =
      this.failed.size > 0 ? "error" : this.pending.size > 0 || this.inflight > 0 ? "saving" : "saved";
    if (status !== this.status) {
      this.status = status;
      this.listeners.forEach((l) => l());
    }
  }
}
