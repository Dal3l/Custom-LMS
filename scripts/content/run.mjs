// Runs the course loader (TypeScript, with the app's "@/…" imports).
import path from "node:path";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url, { alias: { "@": path.resolve("src") } });
await jiti.import("./load.ts");
