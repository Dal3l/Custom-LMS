import Link from "next/link";

// Shown for paths outside any locale (rare: the proxy adds a locale to almost every path).
export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <body>
        <main style={{ fontFamily: "system-ui, sans-serif", padding: 32 }}>
          <h1>404</h1>
          <Link href="/">LinguaRoom</Link>
        </main>
      </body>
    </html>
  );
}
