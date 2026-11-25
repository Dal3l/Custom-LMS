import type { GrammarTable } from "../tables";

// Grammar tables of English B2, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "question-forms",
    title: "Every kind of question",
    subtitle: "subject and object questions, a preposition at the end, negative questions",
    color: "violet",
    columns: ["Type", "Example", "Note"],
    rows: [
      ["👤 subject question", "**Who called** you? **What happened**? **Which team won**?", "who / what is the subject → **no do / did**"],
      ["🎯 object question", "**Who did** you **call**? **What did** she **say**?", "who / what is the object → **do / did**"],
      ["📍 preposition at the end", "What are you interested **in**? Who did you go **with**?", "natural in speech (not “With whom…?”)"],
      ["😮 negative question", "**Didn't** you get my message? **Aren't** you cold?", "surprise, or you expect “yes”"],
    ],
    note: "Short check: if the answer replaces the subject (“Ruslan called me.”), there's no **did**: “Who called you?”",
  },
  {
    name: "indirect-questions",
    title: "Indirect questions",
    subtitle: "more polite: a phrase + normal word order (no do / does / did)",
    color: "teal",
    columns: ["Direct", "Indirect"],
    rows: [
      ["Where **is the station**?", "Do you know where **the station is**?"],
      ["What time **does it open**?", "Could you tell me what time **it opens**?"],
      ["**Can you** help me?", "I was wondering **if you could** help me."],
      ["How long **have you lived** here?", "Do you mind me asking how long **you've lived** here?"],
      ["**Did she pass**?", "I wonder **whether she passed**."],
    ],
    note: "Yes / no questions → **if / whether**. A question mark only if the first part is a question: “Do you know…?” but “I wonder where it is.”",
  },
  // 1.2
  {
    name: "auxiliaries",
    title: "Auxiliary verbs in conversation",
    subtitle: "do, be, have, can, will… make your English sound alive",
    color: "orange",
    columns: ["Use", "Example"],
    rows: [
      ["💥 emphasis", "I **do** care! · She **does** look tired. · We **did** try to call you."],
      ["🙃 disagree politely", "“You don't like cats.” — “I **do**, actually!”"],
      ["😮 echo questions", "“I've met Bono.” — “**Have you?**” · “Kenji was late.” — “**Was he?**”"],
      ["🤝 so / neither", "“I love jazz.” — “**So do I.**” · “I can't swim.” — “**Neither can I.**”"],
      ["🏷️ question tags", "It's cold, **isn't it**? ↘ (sure) · You're coming, **aren't you**? ↗ (asking)"],
    ],
    note: "The auxiliary copies the tense: “I went” → **Did you?** · “I've been” → **Have you?** · “I'm” → **Are you?** · “I can” → **Can you?**",
  },
  // 1.4
  {
    name: "interview-phrases",
    title: "Making a good impression",
    subtitle: "confident, but not big-headed",
    color: "blue",
    columns: ["Goal", "Phrases"],
    rows: [
      ["💪 strengths", "**I'd say** one of my strengths is… · **People often tell me** I'm… · **For example**, in my last job…"],
      ["🌫️ softening", "**I tend to**… · **To some extent**… · **I'm fairly confident** that… · **I have to admit**…"],
      ["⏳ time to think", "**That's a good question** — **let me think** for a second. · **Sorry, could you repeat** the question?"],
      ["❓ your questions", "**I was wondering** what… · **Could you tell me** a bit more about…? · **What would success look like**…?"],
      ["👋 finish", "**Thank you so much for your time.** · **I look forward to hearing from you.**"],
    ],
    note: "Show, don't tell: a short example is worth ten adjectives.",
  },
  // 2.1
  {
    name: "ppc-past",
    title: "Past Perfect Continuous",
    subtitle: "had been + verb-ing — an activity that was going on up to a moment in the past",
    color: "violet",
    columns: ["", "Example", "Note"],
    rows: [
      ["+", "We**'d been driving** for seven hours **when** the car broke down.", "how long, up to that moment"],
      ["−", "She **hadn't been sleeping** well, so she looked tired.", "a reason for a past situation"],
      ["?", "How long **had** you **been waiting** when the bus came?", ""],
      ["vs Past Perfect Simple", "By then we **had visited** six cities. · He **had** already **left**.", "a finished result, how many"],
    ],
    note: "State verbs (know, believe, own…) → Past Perfect Simple: She had known him for years. (not had been knowing)",
  },
  // 2.2
  {
    name: "so-such",
    title: "so / such… that",
    subtitle: "very + a result",
    color: "orange",
    columns: ["Structure", "Example"],
    rows: [
      ["**so** + adjective / adverb", "The hill was **so** steep **that** my legs were shaking. · She spoke **so** fast **that**…"],
      ["**so** much / many / little / few + noun", "There were **so many** people **that** we couldn't get in."],
      ["**such** a / an + adjective + noun", "It was **such a** strange day **that** I wrote it down."],
      ["**such** + adjective + plural / uncountable noun", "They're **such** kind people! · We had **such** terrible weather **that**…"],
    ],
    note: "In speech, “that” is often left out: It was so cold (that) the lake froze.",
  },
  {
    name: "story-linkers",
    title: "Telling a story well",
    subtitle: "comment adverbs and linkers",
    color: "teal",
    columns: ["Job", "Words"],
    rows: [
      ["💬 your comment", "**luckily, unfortunately, surprisingly, amazingly, obviously, frankly**"],
      ["👂 what you heard", "**apparently** (= people say / I read that)"],
      ["🤞 a wish", "**hopefully** (= I hope that…)"],
      ["⏱️ the start", "**at first, in the beginning, one day**"],
      ["⚡ the moment", "**the moment, as soon as, suddenly, the next thing I knew**"],
      ["🔀 at the same time", "**meanwhile, while**"],
      ["🏁 the end", "**eventually** (after a long time), **in the end, at last** (finally — and I'm happy!)"],
    ],
    note: "Put comment adverbs first, with a comma: Luckily, nobody was hurt.",
  },
];
