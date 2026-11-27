import type { GrammarTable } from "../tables";

// Grammar tables of English C1, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "perfect-looking-back",
    title: "Perfect forms: looking back from any point",
    subtitle: "the perfect = an earlier action seen from a later moment",
    color: "violet",
    columns: ["Form", "Example", "Looking back from…"],
    rows: [
      ["⏪ past perfect", "I**'d always assumed** I would become a lawyer.", "a moment in the past"],
      ["⏳ past perfect continuous", "She**'d been feeling** lost for months before she quit.", "the past — a long activity before it"],
      ["⏩ future perfect", "By June I**'ll have finished** my degree.", "a moment in the future"],
      ["🔁 future perfect continuous", "By then I**'ll have been living** here for two years.", "the future — how long"],
      ["🧩 perfect participle", "**Having been raised** by my grandmother, I…", "the main clause (it happened first)"],
      ["🔗 perfect infinitive", "He seems **to have changed** a lot. I'd love **to have met** her.", "now — or an unreal past"],
      ["💭 would have done", "Back then, I **would never have imagined** it.", "the past — what was (un)thinkable"],
    ],
    note: "Not sure? Ask: Is the action earlier than the moment I'm talking about? If yes, it's probably a perfect form.",
  },
  // 1.2
  {
    name: "habits",
    title: "Habits and typical behavior",
    subtitle: "now and in the past — neutral, typical or annoying",
    color: "orange",
    columns: ["Form", "Example", "Meaning"],
    rows: [
      ["🔁 will + verb", "He**'ll sit** for hours with his guitar.", "typical behavior now (neutral)"],
      ["😤 WILL (stressed)", "She **WILL** leave her cups everywhere!", "annoying habit — you're irritated"],
      ["🙄 keep -ing / be forever -ing", "He **keeps interrupting**. She**'s forever losing** her keys.", "repeated, annoying (forever / always / constantly)"],
      ["📊 tend to", "I **tend to** overthink things. I **don't tend to** argue.", "a general tendency (softer)"],
      ["🕰️ used to", "I **used to** live in Seoul. I **used to** be shy.", "past habits **and** past states"],
      ["📖 would", "Every summer, Grandma **would** take us to the mountains.", "past habits only — not states, good for stories"],
      ["😤 WOULD (stressed)", "He **WOULD** say that — it's so typical of him!", "annoyance at typical behavior"],
    ],
    note: "No **would** for past states: ✅ I used to have long hair. ❌ I would have long hair.",
  },
  // 1.4
  {
    name: "networking",
    title: "Networking: the four moves",
    subtitle: "open, keep it going, get to the point, leave gracefully",
    color: "teal",
    columns: ["Move", "Useful language"],
    rows: [
      ["👋 open", "Mind if I join you? · Is this your first time at…? · I really enjoyed your talk — especially the part about…"],
      ["🔄 keep it going", "So what brings you here? · How did you get into…? · That's fascinating — what's the biggest challenge?"],
      ["🎯 get to the point (softly)", "I was wondering whether… · It might be worth us talking about… · Would you be open to…?"],
      ["🚪 leave gracefully", "I won't keep you any longer. · I'd better let you mingle. · It's been great talking to you — shall we swap details?"],
    ],
    note: "Softeners make requests easier to accept: I was wondering… / It might be worth… / Would it be possible…?",
  },
];
