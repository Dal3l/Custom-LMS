import type { GrammarTable } from "../tables";

// Grammar tables of English B1, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "ppc",
    title: "Present Perfect Continuous",
    subtitle: "have / has been + verb-ing — an activity that started in the past and is still going on (or has just stopped)",
    color: "violet",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "I**'ve been learning** the guitar for a year. She**'s been working** a lot lately.", ""],
      ["−", "We **haven't been sleeping** well. He **hasn't been feeling** great.", ""],
      ["?", "**Have** you **been waiting** long?", "Yes, I **have**. / No, I **haven't**."],
      ["Wh-?", "**What have** you **been doing** lately? **How long have** you **been living** here?", "I've been living here since May."],
    ],
    note: "Typical words: **for, since, lately, recently, all day, How long…?** · Hot and tired? → I**'ve been running**! (you can see the result)",
  },
  // 1.2
  {
    name: "state-verbs",
    title: "State verbs",
    subtitle: "they describe states, not actions — usually NO -ing",
    color: "blue",
    columns: ["Group", "Verbs", "Example"],
    rows: [
      ["🧠 thinking", "know, believe, understand, remember, mean", "I **know** him. (not I'm knowing)"],
      ["❤️ feelings", "like, love, hate, want, need, prefer", "She **wants** a new job."],
      ["👜 having", "have (= own), own, belong, include", "This bag **belongs** to me."],
      ["👀 senses & seeming", "seem, look like, sound, smell, taste", "It **seems** strange."],
      ["⚖️ two meanings", "think, have, see, look, taste", "I **think** it's good. (opinion) · I'**m thinking** about it. (action)"],
    ],
    note: "With state verbs → Present Perfect, not Continuous: I**'ve known** her for years. (not I've been knowing)",
  },
  {
    name: "pp-vs-ppc",
    title: "I've read or I've been reading?",
    subtitle: "Present Perfect vs Present Perfect Continuous",
    color: "orange",
    columns: ["", "Present Perfect", "Present Perfect Continuous"],
    rows: [
      ["focus", "the **result**, the finished thing", "the **activity**, how long"],
      ["example", "I**'ve read** three books this month.", "I**'ve been reading** a lot this month."],
      ["question", "**How many** pages **have** you **written**?", "**How long have** you **been writing**?"],
      ["finished?", "I**'ve painted** the room. (it's done ✅)", "I**'ve been painting** the room. (maybe not finished; paint on my hands 🎨)"],
    ],
    note: "**How many / How much** → Present Perfect · **How long** → usually Continuous (but state verbs: How long have you **known** her?)",
  },
  // 1.4
  {
    name: "question-tags",
    title: "Question tags",
    subtitle: "a short question at the end — to check or to keep the conversation going",
    color: "teal",
    columns: ["Sentence", "Tag", "Rule"],
    rows: [
      ["It's cold today,", "**isn't it**?", "+ sentence → − tag"],
      ["You aren't from here,", "**are you**?", "− sentence → + tag"],
      ["You work with Dana,", "**don't you**?", "Present Simple → do / does"],
      ["She came yesterday,", "**didn't she**?", "Past Simple → did"],
      ["You've been here before,", "**haven't you**?", "have / can / will → the same verb"],
      ["I'm late,", "**aren't I**?", "I am → aren't I"],
    ],
    note: "Voice goes **down** ↘ = I'm sure, just checking · voice goes **up** ↗ = a real question",
  },
  // 2.1
  {
    name: "past-perfect",
    title: "Past Perfect",
    subtitle: "had + 3rd form — something that happened BEFORE another moment in the past",
    color: "pink",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "When I arrived, the film **had** already **started**.", ""],
      ["−", "I was hungry because I **hadn't eaten** all day.", ""],
      ["?", "**Had** you ever **been** abroad before that trip?", "Yes, I **had**. / No, I **hadn't**."],
      ["⏱️ order", "1️⃣ The train **had left**. 2️⃣ We **got** to the station.", "We got to the station, but the train **had left**."],
    ],
    note: "**I'd** = I had · Typical words: **already, just, never, before, by the time, when, because**",
  },
  // 2.2
  {
    name: "narrative-tenses",
    title: "Telling a story",
    subtitle: "three past tenses working together",
    color: "green",
    columns: ["Tense", "What it does", "Example"],
    rows: [
      ["Past Continuous", "the background: what was happening", "It **was raining** and people **were hurrying** home."],
      ["Past Simple", "the main events, one after another", "Suddenly a dog **ran** into the road and a car **stopped**."],
      ["Past Perfect", "something earlier — a step back", "The dog **had escaped** from a garden nearby."],
    ],
    note: "**while** + Past Continuous · **when / as soon as / after** + Past Simple · **by the time** + Past Simple → Past Perfect",
  },
  {
    name: "time-linkers",
    title: "Linking a story",
    subtitle: "words that show WHEN",
    color: "orange",
    columns: ["Linker", "Meaning", "Example"],
    rows: [
      ["**as soon as**", "immediately after", "**As soon as** I saw him, I knew something was wrong."],
      ["**by the time**", "before or at that moment", "**By the time** the police arrived, the thief had gone."],
      ["**while**", "during the same time", "**While** we were waiting, it started to snow."],
      ["**eventually**", "in the end, after a long time", "We **eventually** found the hotel at midnight."],
      ["**in the end**", "finally, after problems", "**In the end**, everything was OK."],
      ["**meanwhile**", "at the same time, somewhere else", "**Meanwhile**, his wife was calling the police."],
    ],
  },
  // 3.1
  {
    name: "used-to",
    title: "used to and would",
    subtitle: "past habits and states that are NOT true now",
    color: "violet",
    columns: ["", "Example", "Note"],
    rows: [
      ["+", "I **used to** play outside every day.", "but now I don't"],
      ["−", "We **didn't use to** have a car.", "no -d after didn't!"],
      ["?", "**Did** you **use to** watch cartoons?", "Yes, I **did**. / No, I **didn't**."],
      ["would", "Every summer we **would** go to the village.", "only for repeated **actions**"],
      ["❌ would", "I **used to** have long hair. (not: I would have long hair)", "states → only used to"],
    ],
    note: "One action at one time → Past Simple: I **went** to Paris in 2010. (not used to)",
  },
  // 3.2
  {
    name: "be-get-used-to",
    title: "used to · be used to · get used to",
    subtitle: "three different meanings!",
    color: "teal",
    columns: ["Form", "Meaning", "Example"],
    rows: [
      ["**used to** + verb", "a past habit (not now)", "I **used to live** in a village."],
      ["**be used to** + -ing / noun", "it's normal for me now, not strange", "I'**m used to getting** up early. I'**m used to** the cold."],
      ["**get used to** + -ing / noun", "it's becoming normal — a process", "I'**m getting used to driving** on the left."],
    ],
    note: "After **be / get used to** → **-ing** or a noun: I can't **get used to waking** up at 6! · It **took** me a year **to get used to** it.",
  },
  // 3.4
  {
    name: "complaints",
    title: "Complaining politely",
    subtitle: "be clear, be calm, ask for what you want",
    color: "orange",
    columns: ["Step", "Phrases"],
    rows: [
      ["1️⃣ start", "**Excuse me, I'm afraid** there's a problem with… · **I'd like to make a complaint** about…"],
      ["2️⃣ explain", "**It doesn't work.** · **It's broken / damaged.** · **I ordered … but I got …** · **We've been waiting for** forty minutes."],
      ["3️⃣ ask", "**Could you** change it, please? · **I'd like a refund / a replacement.** · **Would you mind** checking again?"],
      ["4️⃣ if nothing happens", "**Could I speak to the manager**, please? · **I'm not happy with** this answer."],
    ],
    note: "**I'm afraid…** = I'm sorry to say · Soft words help: **a bit, quite, I think, unfortunately**",
  },
  // 4.1
  {
    name: "future-continuous",
    title: "Future Continuous",
    subtitle: "will be + verb-ing — an action in progress at a moment in the future",
    color: "blue",
    columns: ["", "Example", "Answer"],
    rows: [
      ["+", "This time next year I**'ll be studying** in Seoul.", ""],
      ["−", "Don't call at 8 — I **won't be working**, I'll be sleeping! 😴", ""],
      ["?", "**Will** you **be using** the car tomorrow?", "Yes, I **will**. / No, I **won't**."],
      ["⏰ when?", "**At 9 tomorrow**, **this time next week**, **in ten years' time**", ""],
    ],
    note: "Future Simple = one action: I'**ll call** you at 6. · Future Continuous = in progress: At 6 I'**ll be driving**.",
  },
  {
    name: "time-clauses",
    title: "when, as soon as, before + PRESENT",
    subtitle: "the future after time words — but NO will!",
    color: "pink",
    columns: ["Time word", "Example"],
    rows: [
      ["**when**", "I'll call you **when** I **get** home. (not: when I will get)"],
      ["**as soon as**", "**As soon as** the results **come** out, I'll tell you."],
      ["**before / after**", "**Before** I **start** university, I'm going to travel."],
      ["**until**", "I'll wait **until** you **finish**."],
    ],
    note: "Main part → **will / going to** · time part → **Present Simple**",
  },
  // 4.2
  {
    name: "future-forms",
    title: "Talking about the future",
    subtitle: "choose the form by what you mean",
    color: "violet",
    columns: ["Form", "When we use it", "Example"],
    rows: [
      ["**will**", "predictions, opinions; quick decisions; promises", "I think robots **will** do most of this work. · I'**ll** help you!"],
      ["**be going to**", "plans; predictions with evidence now", "I'**m going to** study AI. · Look at the sky — it'**s going to** rain."],
      ["**Present Continuous**", "fixed arrangements (time, place, people)", "I'**m meeting** my manager on Friday."],
      ["**Present Simple**", "timetables and schedules", "The course **starts** on 1 September."],
    ],
  },
  {
    name: "how-sure",
    title: "How sure are you?",
    subtitle: "from 100% to 0%",
    color: "green",
    columns: ["", "Phrase", "Example"],
    rows: [
      ["100%", "**will definitely / be bound to**", "Prices **are bound to** go up."],
      ["80%", "**will probably / be likely to**", "AI **is likely to** change many jobs."],
      ["50%", "**may / might / could**", "My job **might** disappear. It **could** happen."],
      ["20%", "**probably won't / be unlikely to**", "Teachers **are unlikely to** disappear."],
      ["0%", "**definitely won't**", "Robots **definitely won't** feel love. (Or will they? 🤖)"],
    ],
    note: "Word order: I'll **probably** go · I **probably won't** go",
  },
];
