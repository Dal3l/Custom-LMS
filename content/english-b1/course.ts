// English B1 — the course loaded into the library (see docs/courses/english-b1/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-b1
import type { CourseFile } from "../../scripts/content/load";
import l01 from "./m00/l0";
import l11 from "./m01/l1";
import l12 from "./m01/l2";
import l13 from "./m01/l3";
import l14 from "./m01/l4";

export const course: CourseFile = {
  id: "10811520-58c5-4bfa-aa9e-f2ef58411c7c",
  title: "English B1",
  language: "en",
  level: "B1",
  cover: "cover.png",
  firstModule: 0,
  description:
    "English after A2 for teens (14+) and adults: work and study, media and fake news, relationships, dilemmas and the future. An entry test + 12 modules × 4 lessons, 60 minutes each + homework. Ready for the Cambridge B1 Preliminary format.",
  modules: [
    { title: "Start: A2 check", lessons: [l01] },
    { title: "Who I am now", lessons: [l11, l12, l13, l14] },
  ],
};
