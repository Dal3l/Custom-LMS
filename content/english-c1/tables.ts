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
  // 2.1
  {
    name: "inverted-conditionals",
    title: "Conditionals: formal and flexible",
    subtitle: "inversion without if, and other ways to say if",
    color: "blue",
    columns: ["Form", "Example", "= with if"],
    rows: [
      ["🔁 Had + subject + V3", "**Had I known**, I would have stayed.", "If I had known…"],
      ["🔁 Were + subject + to-inf.", "**Were we to** lose, we'd try again.", "If we lost / If we were to lose…"],
      ["🔁 Were it not for + noun", "**Were it not for** her help, I'd be lost.", "If it weren't for her help…"],
      ["🔁 Should + subject + verb", "**Should you need** anything, call me.", "If you (happen to) need…"],
      ["🚫 But for + noun", "**But for** the rope, he would have fallen.", "If it hadn't been for the rope…"],
      ["✅ provided / providing / as long as", "You can go, **provided (that)** you call.", "only if…"],
      ["↩️ otherwise", "Take a map — **otherwise** you'll get lost.", "if you don't…"],
      ["🔀 mixed", "If I **hadn't left** the bank, I **would be** a manager now.", "past condition → present result"],
    ],
    note: "In inversion there is no if and no contraction: Had I known (not: If had I known / Hadn't I known). Negative: Had I not known…",
  },
  // 2.2
  {
    name: "unreal-past",
    title: "The unreal past: past form, present meaning",
    subtitle: "a past tense for things that are not real (yet)",
    color: "pink",
    columns: ["After…", "Example", "Meaning"],
    rows: [
      ["⏰ It's (high / about) time + subject + past", "It's high time we **took** a holiday.", "we should — and we're late"],
      ["⏰ It's time + to-inf.", "It's time **to go**.", "neutral"],
      ["🙏 would rather / sooner + subject + past", "I'd rather you **didn't climb** alone.", "I'd prefer another person to…"],
      ["🙏 would rather + infinitive", "I'd rather **stay** at home.", "my own preference"],
      ["🎭 as if / as though + past", "He talks as if he **were** a pro.", "but he isn't (unreal)"],
      ["🎭 as if + present", "It looks as if it**'s going to** rain.", "probably true"],
      ["😩 if only + past / past perfect", "If only I **had** more time! If only I **had listened**!", "a strong wish / regret"],
      ["🤔 suppose / supposing + past", "Suppose you **lost** your job — what would you do?", "imagine (unreal)"],
    ],
    note: "Past perfect for the past: I'd rather you hadn't told her. He looked as if he had seen a ghost.",
  },
  // 2.3
  {
    name: "oxford-debate",
    title: "An Oxford-style debate",
    subtitle: "the format we use in English C1",
    color: "violet",
    columns: ["Stage", "What happens", "Time"],
    rows: [
      ["1️⃣ motion and sides", "This house believes / would… — sides by coin toss; first vote", "1 min"],
      ["2️⃣ preparation", "3 arguments, evidence, the other side's likely arguments", "7–10 min"],
      ["3️⃣ opening speeches", "Proposition, then Opposition. **Points of Information** allowed — but not in the first or the last minute", "3 min each"],
      ["4️⃣ rebuttal preparation", "find the weak points in the other side's case", "1 min"],
      ["5️⃣ rebuttals", "answer their arguments, defend yours", "2 min each"],
      ["6️⃣ questions from the floor", "the teacher or the audience asks each side 1–2 questions", "2–3 min"],
      ["7️⃣ reply speeches", "the main clash and why we won it — **no new arguments**", "2 min each"],
      ["8️⃣ verdict", "second vote: who changed their mind? Feedback with the scoring sheet", "3–5 min"],
    ],
    note: "A Point of Information (POI) is a short question (max 15 seconds) during the other side's speech. The speaker can accept or politely decline.",
  },
  {
    name: "poi-language",
    title: "Points of Information and debate moves",
    subtitle: "short, polite and sharp",
    color: "green",
    columns: ["Move", "Useful language"],
    rows: [
      ["✋ offer a POI", "Point of Information! · On that point… · Will the speaker take a point?"],
      ["✅ accept", "Yes, go ahead. · I'll take that. · Briefly, please."],
      ["🙅 decline", "Not at the moment, thank you. · I'll come to that. · Let me finish this point."],
      ["🎯 rebut", "My opponent claims that… but this ignores… · Even if that were true, …"],
      ["🧱 concede and counter", "Admittedly… — however, … · I accept that…, but it doesn't follow that…"],
      ["⚖️ weigh the clash", "The real question in this debate is… · Even on their own terms, …"],
    ],
    note: "Accept one or two POIs per speech — refusing all of them looks weak; accepting all of them loses time.",
  },
];
