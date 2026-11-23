// Runs the listening recorder (TypeScript, with the app's "@/…" imports). See tts.ts.
import path from "node:path";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url, { alias: { "@": path.resolve("src") } });
await jiti.import("./tts.ts");
