// Shuffling that is stable between saves and reveals nothing: items carry random
// ids, and the shown order is the order of their hashes.

/** FNV-1a 32-bit hash. */
export function hashString(value: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function stableShuffle<T extends { id: string }>(items: readonly T[], salt = ""): T[] {
  return [...items].sort((a, b) => hashString(salt + a.id) - hashString(salt + b.id) || a.id.localeCompare(b.id));
}

/** Like stableShuffle, but never leaves the items in their original (right) order. */
export function shuffleAway<T extends { id: string }>(items: readonly T[], salt = ""): T[] {
  const shuffled = stableShuffle(items, salt);
  const same = shuffled.every((item, i) => item.id === items[i]!.id);
  return same && shuffled.length > 1 ? [...shuffled.slice(1), shuffled[0]!] : shuffled;
}
