// English B2 — the course loaded into the library (see docs/courses/english-b2/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-b2
import type { CourseFile } from "../../scripts/content/load";
import l01 from "./m00/l0";
import l11 from "./m01/l1";
import l12 from "./m01/l2";
import l13 from "./m01/l3";
import l14 from "./m01/l4";
import l21 from "./m02/l1";
import l22 from "./m02/l2";
import l23 from "./m02/l3";
import l24 from "./m02/l4";
import l31 from "./m03/l1";
import l32 from "./m03/l2";
import l33 from "./m03/l3";
import l34 from "./m03/l4";
import l41 from "./m04/l1";
import l42 from "./m04/l2";
import l43 from "./m04/l3";
import l44 from "./m04/l4";
import l51 from "./m05/l1";
import l52 from "./m05/l2";
import l53 from "./m05/l3";
import l54 from "./m05/l4";
import l61 from "./m06/l1";
import l62 from "./m06/l2";
import l63 from "./m06/l3";
import l64 from "./m06/l4";
import l71 from "./m07/l1";
import l72 from "./m07/l2";
import l73 from "./m07/l3";
import l74 from "./m07/l4";
import l81 from "./m08/l1";
import l82 from "./m08/l2";
import l83 from "./m08/l3";
import l84 from "./m08/l4";
import l91 from "./m09/l1";
import l92 from "./m09/l2";
import l93 from "./m09/l3";
import l94 from "./m09/l4";

export const course: CourseFile = {
  id: "16c4b34d-a422-4384-b9a2-880ea4c250ad",
  title: "English B2",
  language: "en",
  level: "B2",
  cover: "cover.png",
  firstModule: 0,
  description:
    "English after B1 for older teens (15+) and adults: personality and decisions, science and health, money and work, media, crime and justice, society and the power of words. Real debates by the rules. An entry test + 12 modules × 4 lessons, 60 minutes each + homework. Ready for the Cambridge B2 First format.",
  modules: [
    { title: "Start: B1 check", lessons: [l01] },
    { title: "First impressions", lessons: [l11, l12, l13, l14] },
    { title: "Against the odds", lessons: [l21, l22, l23, l24] },
    { title: "The creative mind", lessons: [l31, l32, l33, l34] },
    { title: "Tomorrow's world", lessons: [l41, l42, l43, l44] },
    { title: "Money talks", lessons: [l51, l52, l53, l54] },
    { title: "The media", lessons: [l61, l62, l63, l64] },
    { title: "Relationships and comebacks", lessons: [l71, l72, l73, l74] },
    { title: "Health and science", lessons: [l81, l82, l83, l84] },
    { title: "Crime and justice", lessons: [l91, l92, l93, l94] },
  ],
};
