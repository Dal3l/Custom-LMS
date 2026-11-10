import "./globals.css";

// The real <html> lives in app/[locale]/layout.tsx so it can set `lang`.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
