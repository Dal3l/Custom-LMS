// Helpers for accounts a teacher creates for a student. Pure functions: tested in tests/.

// Short, familiar words: easy to read out, type on a phone and remember.
export const PASSWORD_WORDS = [
  "apple", "berry", "cloud", "lemon", "mango", "ocean", "panda", "river", "smile", "sunny",
  "tiger", "happy", "light", "green", "star", "moon", "bird", "fish", "book", "cake",
  "rain", "snow", "lion", "bear", "rose", "tree", "wolf", "kiwi", "plum", "zebra",
];

/** An easy password: a word and four digits, like "panda4827". */
export function generatePassword(random: (n: number) => Uint8Array = randomBytes): string {
  const pick = (max: number) => {
    // Rejection sampling keeps every choice equally likely.
    const limit = 256 - (256 % max);
    for (;;) {
      for (const byte of random(8)) if (byte < limit) return byte % max;
    }
  };
  const word = PASSWORD_WORDS[pick(PASSWORD_WORDS.length)]!;
  let digits = "";
  for (let i = 0; i < 4; i++) digits += String(pick(10));
  return word + digits;
}

function randomBytes(n: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(n));
}

/** Random URL-safe token for invite links (24 characters, 144 bits). */
export function generateInviteToken(random: (n: number) => Uint8Array = randomBytes): string {
  const bytes = random(18);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

export const INVITE_TOKEN_RE = /^[A-Za-z0-9_-]{16,64}$/;
