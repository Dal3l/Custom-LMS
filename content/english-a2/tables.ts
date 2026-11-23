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
  // 2.1
  {
    name: "past-cont",
    title: "Past Continuous",
    subtitle: "was / were + verb-ing — an action in progress in the past",
    color: "teal",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "I **was reading**. They **were playing** games.", ""],
      ["−", "She **wasn't sleeping**. We **weren't watching** TV.", ""],
      ["?", "**Were** you **working** at 8 p.m.?", "Yes, I **was**. / No, I **wasn't**."],
      ["Wh-?", "**What were** you **doing** at 9 last night?", "I was having dinner."],
    ],
    note: "I / he / she / it → **was** · you / we / they → **were**",
  },
  // 2.2
  {
    name: "when-while",
    title: "when / while",
    subtitle: "a long action + a short action",
    color: "green",
    columns: ["", "Example"],
    rows: [
      ["long 〰️ + short ⚡", "I **was walking** home **when** it **started** to rain."],
      ["while + long 〰️", "**While** I **was walking** home, it **started** to rain."],
      ["two long 〰️ 〰️", "I **was cooking while** my brother **was watching** TV."],
      ["short ⚡ → short ⚡", "When the phone **rang**, I **answered** it. (one after the other)"],
    ],
    note: "〰️ long = Past Continuous · ⚡ short = Past Simple · **while** + long action",
  },
  // 3.1
  {
    name: "comparatives",
    title: "Comparatives",
    subtitle: "compare two things: bigger than, more expensive than",
    color: "blue",
    columns: ["Adjective", "Rule", "Example"],
    rows: [
      ["short: cheap, fast", "+ **-er**", "It's **cheaper than** my phone."],
      ["-e: nice, large", "+ **-r**", "This one is **nicer**."],
      ["vowel + consonant: big, hot", "double + **-er**", "**bigger**, **hotter**"],
      ["-y: easy, heavy", "y → **-ier**", "**easier**, **heavier**"],
      ["long: expensive, popular", "**more** + adjective", "It's **more expensive than** the iPhone."],
      ["good · bad · far", "irregular", "**better** · **worse** · **further**"],
    ],
    note: "**than**, not “that”: bigger **than** · **much** bigger = a lot bigger",
  },
  // 3.2
  {
    name: "superlatives",
    title: "Superlatives",
    subtitle: "the number one in a group: the biggest, the most…",
    color: "orange",
    columns: ["Adjective", "Comparative", "Superlative"],
    rows: [
      ["high", "high**er**", "**the** high**est**"],
      ["big", "big**ger**", "**the** big**gest**"],
      ["deep", "deep**er**", "**the** deep**est**"],
      ["easy", "eas**ier**", "**the** eas**iest**"],
      ["beautiful", "**more** beautiful", "**the most** beautiful"],
      ["good · bad", "better · worse", "**the best** · **the worst**"],
    ],
    note: "the …-est **in** the world / **in** my family · the best film **I've ever seen**",
  },
  {
    name: "as-as",
    title: "as … as",
    subtitle: "the same — or not the same",
    color: "teal",
    columns: ["", "Example", "Meaning"],
    rows: [
      ["= as … as", "My phone is **as fast as** yours.", "the same speed"],
      ["≠ not as … as", "Astana is **not as warm as** Almaty.", "Almaty is warmer"],
      ["≠ not as … as", "This test was**n't as difficult as** the last one.", "it was easier"],
    ],
    note: "as + adjective + as: **as big as**, **as good as** — no -er!",
  },
  // 3.4
  {
    name: "looks-feels",
    title: "It looks great!",
    subtitle: "look · feel · sound · smell · taste + adjective",
    color: "pink",
    columns: ["Verb", "Example"],
    rows: [
      ["👀 look", "That jacket **looks great** on you!"],
      ["✋ feel", "These jeans **feel** really **comfortable**."],
      ["👂 sound", "50% off? That **sounds amazing**!"],
      ["👃 smell · 👅 taste", "The perfume **smells nice**. The pizza **tastes good**."],
      ["+ like + noun", "You **look like** a film star! ⭐"],
    ],
    note: "look + adjective: It looks **nice** — not “nicely” · look **like** + noun",
  },
  // 4.1
  {
    name: "going-to",
    title: "be going to",
    subtitle: "plans and intentions: I've decided to do it",
    color: "violet",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "I'**m going to learn** to drive. She'**s going to start** a blog.", ""],
      ["−", "I'**m not going to eat** fast food. They **aren't going to move**.", ""],
      ["?", "**Are** you **going to buy** a new phone?", "Yes, I **am**. / No, I'**m not**."],
      ["Wh-?", "**What are** you **going to do** this summer?", "I'm going to travel."],
      ["👀 I can see it", "Look at the clouds! It'**s going to rain**.", ""],
    ],
    note: "am / is / are + **going to** + verb · **gonna** = going to in fast speech",
  },
  // 4.2
  {
    name: "pc-future",
    title: "Arrangements: Present Continuous",
    subtitle: "plans with a time and other people — it's in the calendar 📅",
    color: "green",
    columns: ["", "Example"],
    rows: [
      ["📅 arrangement", "I'**m meeting** Ali **on Friday at 6**."],
      ["🎫 ticket / booking", "We'**re flying** to Istanbul **next Monday**."],
      ["?", "What **are** you **doing this weekend**?"],
      ["−", "Sorry, I **can't** — I'**m working** on Saturday."],
      ["going to: an idea, a plan", "I'**m going to visit** my grandma **some day** soon."],
    ],
    note: "Present Continuous = fixed time + place + people · **be going to** = my plan, my decision",
  },
];
