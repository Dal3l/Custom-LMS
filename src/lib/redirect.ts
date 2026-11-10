/**
 * Returns `next` only if it is a safe same-site path ("/ru/dashboard"),
 * otherwise `fallback`. Prevents open redirects like "//evil.com" or "https://…".
 */
export function safeNextPath(next: unknown, fallback: string): string {
  if (typeof next !== "string" || next.length === 0 || next.length > 512) return fallback;
  if (!next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return fallback;
  if (/[\u0000-\u001f]/.test(next)) return fallback;
  return next;
}

/** "/ru/dashboard" -> "/dashboard", "/en" -> "/". Paths without a locale are unchanged. */
export function stripLocalePrefix(path: string): string {
  const stripped = path.replace(/^\/(ru|en|kk)(?=\/|$|\?)/, "");
  return stripped === "" ? "/" : stripped.startsWith("?") ? `/${stripped}` : stripped;
}
