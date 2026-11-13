// Helpers for accounts a teacher creates for a student. Pure functions: tested in tests/.

// No look-alike characters (0/o, 1/l/i), so the password is easy to retype from a phone.
const ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789";

/** A readable random password like "hx7k-p3mw-9tbq" (3 groups of 4). */
export function generatePassword(random: (n: number) => Uint8Array = randomBytes): string {
  const groups: string[] = [];
  for (let g = 0; g < 3; g++) {
    let group = "";
    // Rejection sampling keeps every character equally likely.
    while (group.length < 4) {
      for (const byte of random(8)) {
        if (group.length === 4) break;
        if (byte < 256 - (256 % ALPHABET.length)) group += ALPHABET[byte % ALPHABET.length];
      }
    }
    groups.push(group);
  }
  return groups.join("-");
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
