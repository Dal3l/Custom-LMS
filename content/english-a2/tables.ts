import type { GrammarTable } from "../tables";

// Grammar tables of English A2, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "ps-did",
    title: "Past Simple: − and ?",
    subtitle: "did / didn't + verb (no -ed!)",
    color: "violet",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "I **watched** a film. We **went** to the lake.", ""],
      ["−", "I **didn't watch** TV. She **didn't go** out.", ""],
      ["?", "**Did** you **watch** the match?", "Yes, I **did**. / No, I **didn't**."],
      ["Wh-?", "**What did** you **do** last weekend?", "I went hiking."],
    ],
    note: "After did / didn't → the base verb: Did you **go**? — not “Did you went?”",
  },
  // 1.2
  {
    name: "irregular",
    title: "Irregular verbs",
    subtitle: "learn them as words",
    color: "orange",
    columns: ["Verb", "Past", "Verb", "Past"],
    rows: [
      ["go", "**went**", "make", "**made**"],
      ["see", "**saw**", "take", "**took**"],
      ["have", "**had**", "get", "**got**"],
      ["buy", "**bought**", "think", "**thought**"],
      ["come", "**came**", "fly", "**flew**"],
      ["say", "**said**", "find", "**found**"],
    ],
    note: "Questions and negatives are regular: Where **did** he **go**? He **didn't buy** it.",
  },
  {
    name: "subject-q",
    title: "Who invented it?",
    subtitle: "Subject questions — no did!",
    color: "blue",
    columns: ["Question about…", "Example", "Answer"],
    rows: [
      ["the subject (who did it?)", "**Who invented** the telephone?", "Bell invented it."],
      ["the subject (what happened?)", "**What happened** in 1969?", "People walked on the Moon."],
      ["the object", "**What did** Bell **invent**?", "The telephone."],
    ],
    note: "Who **called** you? (no did) · Who **did** you **call**? (did)",
  },
  // 1.4
  {
    name: "requests",
    title: "Polite requests",
    color: "pink",
    columns: ["", "Request", "Answer"],
    rows: [
      ["🙂", "**Can you** help me, please?", "Sure! / Of course."],
      ["😊 more polite", "**Could you** call a taxi, please?", "Certainly."],
      ["🙋", "**Could I** have a late checkout?", "Yes, no problem. / I'm sorry, …"],
      ["🙏", "**Would you mind** waiting a moment?", "No, not at all."],
    ],
    note: "**could** = more polite than can · always add **please** ✨",
  },
];
