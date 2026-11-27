// English C1 — the course loaded into the library (see docs/courses/english-c1/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-c1
import type { CourseFile } from "../../scripts/content/load";
import l01 from "./m00/l0";
import l11 from "./m01/l1";
import l12 from "./m01/l2";
import l13 from "./m01/l3";
import l14 from "./m01/l4";

export const course: CourseFile = {
  id: "13794922-8171-4daa-a64a-00dab942e840",
  title: "English C1",
  language: "en",
  level: "C1",
  cover: "cover.png",
  firstModule: 0,
  description:
    "English after B2 for older teens (16+) and adults: identity, risk, truth and lies, the future of work, mind and body, the planet, art, science and ethics, power and a global world. Subtle grammar, rich vocabulary and Oxford-style debates. An entry test + 12 modules × 4 lessons, 60 minutes each + homework. Ready for the Cambridge C1 Advanced format.",
  modules: [
    { title: "Start: B2 check", lessons: [l01] },
    { title: "Who we are", lessons: [l11, l12, l13, l14] },
  ],
};
