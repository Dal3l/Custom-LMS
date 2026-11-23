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
  // 5.1
  {
    name: "will",
    title: "will / won't: predictions",
    subtitle: "what we think about the future",
    color: "blue",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "Robots **will do** the housework. I'**ll be** rich! 😄", ""],
      ["−", "People **won't drive** cars. (won't = will not)", ""],
      ["?", "**Will** we **live** on Mars?", "Yes, we **will**. / No, we **won't**."],
      ["🤔 I think…", "**I think** it **will** rain. **I don't think** it **will** rain.", ""],
      ["✅ sure → 🤷 not sure", "will **definitely** · will **probably** · **probably won't**", ""],
    ],
    note: "will + verb (no to, no -s): She **will go** — not “she will goes” · I don't think… **will** (not “I think… won't”)",
  },
  // 5.2
  {
    name: "might-will",
    title: "might · will for decisions",
    subtitle: "maybe — and decisions at the moment of speaking",
    color: "orange",
    columns: ["", "Example"],
    rows: [
      ["🤷 might = maybe", "I **might go** to the party. (I'm not sure.)"],
      ["🤷 might not", "It **might not** rain. Take an umbrella anyway!"],
      ["⚡ decide now", "The phone is ringing. — I'**ll get** it!"],
      ["🙋 offer", "Your bag looks heavy. I'**ll help** you."],
      ["🤞 promise", "I **won't tell** anyone. I'**ll call** you tonight!"],
    ],
    note: "might + verb (no to): I **might stay** · decided before → **going to**; decide now → **will**",
  },
  // 5.4
  {
    name: "arrangements",
    title: "Making arrangements",
    color: "pink",
    columns: ["", "Phrases"],
    rows: [
      ["💡 suggest", "**Shall we** go to the cinema? · **How about** Saturday? · **Why don't we** meet at 6?"],
      ["✅ yes", "Sounds good! · **That works for me.** · Great idea!"],
      ["❌ no (politely)", "**I'm afraid I can't** — I'm working. · Sorry, I'm busy then."],
      ["🔁 change plans", "**Can we make it** 7 instead? · Something came up — **can we move it** to Sunday?"],
    ],
    note: "How about **+ -ing / a time**: How about **going** for a walk? · How about **Friday**?",
  },
  // 6.1
  {
    name: "pp-ever",
    title: "Present Perfect: experiences",
    subtitle: "have / has + 3rd form — in your life, we don't say when",
    color: "violet",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "I'**ve been** to Japan. She'**s tried** sushi.", ""],
      ["−", "I'**ve never seen** snow. He **hasn't flown** in a plane.", ""],
      ["?", "**Have** you **ever ridden** a horse?", "Yes, I **have**. / No, I **haven't**."],
      ["he / she / it", "**Has** she **ever been** to Paris?", "Yes, she **has**. / No, she **hasn't**."],
    ],
    note: "**ever** = in your life (questions) · **never** = not in your life · I've **been to** = I went and came back",
  },
  {
    name: "participles",
    title: "The 3rd form",
    subtitle: "regular: + ed · irregular: learn them!",
    color: "orange",
    columns: ["Verb", "Past", "3rd form"],
    rows: [
      ["visit · try", "visited · tried", "**visited · tried**"],
      ["be · go", "was / were · went", "**been · gone**"],
      ["see · eat", "saw · ate", "**seen · eaten**"],
      ["do · swim", "did · swam", "**done · swum**"],
      ["fly · ride", "flew · rode", "**flown · ridden**"],
      ["meet · win", "met · won", "**met · won**"],
    ],
    note: "Many 3rd forms = the past: bought, made, had, met · some are new: seen, eaten, been, done",
  },
  // 6.2
  {
    name: "pp-ps",
    title: "Present Perfect or Past Simple?",
    subtitle: "in my life — or at a time in the past",
    color: "green",
    columns: ["", "Example"],
    rows: [
      ["🌍 in my life (no time)", "I'**ve been** to Turkey. **Have** you **ever tried** surfing?"],
      ["📅 when? (a time)", "I **went** there **in 2022**. I **tried** it **last summer**."],
      ["a conversation", "— **Have** you **ever been** to Italy? — Yes, I **have**. — When **did** you **go**? — I **went** two years ago."],
    ],
    note: "yesterday, last…, in 2020, … ago, when? → **Past Simple** · ever, never, in my life → **Present Perfect**",
  },
  // 7.1
  {
    name: "just-already-yet",
    title: "just · already · yet",
    subtitle: "Present Perfect for news and updates",
    color: "blue",
    columns: ["", "Example", "Where?"],
    rows: [
      ["⚡ just = a moment ago", "I'**ve just** got a new job!", "before the 3rd form"],
      ["✅ already = sooner than expected", "She'**s already** finished her homework.", "before the 3rd form"],
      ["❓ yet (questions)", "**Have** you **finished yet**?", "at the end"],
      ["❌ yet (negatives)", "I **haven't** seen it **yet**.", "at the end"],
    ],
    note: "News: I've **just**… → details: I **got** it yesterday! (Past Simple when we say when)",
  },
  // 7.2
  {
    name: "for-since",
    title: "for · since",
    subtitle: "How long have you…? — from the past until now",
    color: "teal",
    columns: ["", "Example"],
    rows: [
      ["⏳ for + a period", "I've lived here **for** ten years. · **for** two months · **for** a long time"],
      ["📍 since + a start point", "I've known Dana **since** 2019. · **since** Monday · **since** I was a child"],
      ["❓ How long…?", "**How long have** you **had** your phone? — **For** a year. / **Since** January."],
      ["⚠️ not the Present", "I've lived here for 10 years. — not “I live here for 10 years”"],
    ],
    note: "for = how much time ⏳ · since = from when 📍",
  },
  // 7.4
  {
    name: "doctor",
    title: "At the doctor's",
    color: "pink",
    columns: ["", "Phrases"],
    rows: [
      ["🩺 Doctor", "What's the matter? · How long have you had it? · Let me have a look."],
      ["🤒 Patient", "I've got a headache / a sore throat / a temperature. · I feel sick. · My back hurts."],
      ["⏳ How long?", "I've had it **since** Tuesday. · I've felt sick **for** two days."],
      ["💡 Advice", "You **should** rest. · You **shouldn't** go to work. · Take this twice a day."],
    ],
    note: "should + verb (no to): You should **drink** more water.",
  },
];
