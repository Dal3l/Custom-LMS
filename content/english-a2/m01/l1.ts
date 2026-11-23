import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  order,
  picture,
  quiz,
  record,
  section,
  sort,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.1 What did you do? — G: Past Simple questions and negatives. V: free-time activities. Say it right: did you /dɪdʒə/. Main format: reading (weekend posts) + listening + video.
export default lesson("a2-1.1", "What did you do?", () => [
  section("Warm-up: Weekend photo", [
    box("Today you will…", "- talk about last weekend and holidays\n- ask *Did you…? What did you…?*\n- say *I didn't…*"),
    picture("Last weekend…", ["photos/wk-hike.jpg"], "Two friends after a hike in the mountains ⛰️"),
    text(
      "Talk about the photo.",
      "- Do you like active weekends like this? Why / why not? ⛰️\n- What did you do last weekend? Was it a good weekend? Why?\n- What's a perfect weekend for you: active or lazy? 🛋️\n- What do you always want to do at the weekend — but never do? 😅",
    ),
    tip("Quick A1 review: *Where were you last Saturday? Was it fun?* The student answers with was / were."),
  ]),

  section("Vocabulary: Free time", [
    words("Free-time activities", [
      ["go hiking", "🥾⛰️", "We went hiking in the mountains."],
      ["go camping", "⛺"],
      ["go out (with friends)", "🍕👫 = go to a café, a party…"],
      ["stay in", "🏠 = stay at home"],
      ["have a lie-in", "😴 sleep late in the morning · 🇺🇸 sleep in"],
      ["binge-watch a series", "📺📺📺 watch many episodes at once"],
      ["catch up with friends", "☕💬 meet and talk about news"],
      ["do the shopping", "🛒"],
      ["clean the flat", "🧹"],
      ["visit relatives", "👵👴 grandparents, aunts…"],
      ["go to a concert / a match", "🎤 / ⚽"],
      ["chill", "😎 slang: relax, do nothing"],
    ]),
    match("Match.", [
      ["go", "hiking"],
      ["have", "a lie-in"],
      ["catch up", "with friends"],
      ["binge-watch", "a series"],
      ["visit", "relatives"],
      ["do", "the shopping"],
      ["clean", "the flat"],
    ]),
    sort("Active or lazy? Sort. 🏃🛋️", {
      "🏃 Active": ["go hiking", "go camping", "clean the flat", "go to a match"],
      "🛋️ Lazy": ["have a lie-in", "binge-watch a series", "stay in", "chill"],
    }),
    quiz("Choose.", [
      { q: "You sleep until 12 on Sunday. You…", options: ["*have a lie-in", "go out", "go hiking"] },
      { q: "You watch 8 episodes in one day. You…", options: ["*binge-watch a series", "go camping", "visit relatives"] },
      { q: "You meet a friend and talk about news. You…", options: ["*catch up", "stay in", "do the shopping"] },
      { q: "You don't go out. You…", options: ["*stay in", "go camping", "go out"] },
      { q: "You see your grandma and your aunt. You…", options: ["*visit relatives", "catch up with friends", "go to a concert"] },
      { q: "You sleep in a tent in the forest. You…", options: ["*go camping", "go hiking", "chill"] },
    ]),
  ]),

  section("Reading: #Weekend", [
    trueFalse(
      "Read the posts. True or false?",
      [
        ["Dana went camping with her family.", false],
        ["They didn't sleep well in the tent.", true],
        ["Arman stayed in all weekend.", true],
        ["Arman didn't cook — he ordered pizza.", true],
        ["Mia saw her grandparents on Sunday.", true],
      ],
      {
        read: [
          "## 📸 #MyWeekend",
          "**dana.k** ⛺ *I went camping with my friends! We walked 12 km to a lake and made a fire. We didn't sleep much — it was cold and a dog barked all night! 😅 But the stars were amazing.* ✨",
          "**arman.games** 🛋️ *Lazy weekend! I stayed in, had a lie-in and binge-watched a new series — 9 episodes! I didn't cook, I ordered pizza. Twice. 🍕 No regrets.*",
          "**mia_sunny** 👵 *On Saturday I caught up with my best friend at a café. On Sunday I visited my grandparents. Grandma made her famous apple pie — I ate three pieces!* 🥧",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How far did Dana walk?", options: ["*12 km", "2 km", "20 km"] },
      { q: "How many episodes did Arman watch?", options: ["*nine", "three", "two"] },
      { q: "What did Mia's grandma make?", options: ["*an apple pie", "a pizza", "a cake with cream"] },
      { q: "Why didn't Dana sleep much?", options: ["*It was cold and a dog barked.", "The tent broke.", "She was hungry."] },
      { q: "Where did Mia meet her best friend?", options: ["*at a café", "at the cinema", "at her grandparents' house"] },
    ]),
    text("Talk to your teacher.", "- Whose weekend is the best for you? Why?\n- Did you have a weekend like Dana's, Arman's or Mia's? 🤔"),
  ]),

  section("Grammar: Did you…? I didn't…", [
    quiz("Notice the rule 🔍 Look at the posts: “We didn't sleep much. I didn't cook.” What comes after didn't?", [
      { q: "After didn't, the verb is…", options: ["*the base form: sleep, cook", "with -ed: slept, cooked", "with -ing: sleeping"] },
      { q: "“Did you cook?” — the question word is…", options: ["*Did", "Do", "Were"] },
      { q: "“Did you cook?” — after Did, the verb is…", options: ["*cook — no -ed", "cooked", "cooking"] },
    ]),
    table("ps-did"),
    choose(
      "Choose.",
      "1. I [*didn't go/didn't went] out last night.\n2. [*Did you see/Did you saw] the match?\n3. She [*didn't like/not liked] the film.\n4. Did they have fun? — Yes, they [*did/had].\n5. What [*did you do/you did] on Sunday?\n6. We [*didn't have/didn't had] a lie-in.\n7. Where [*did he go/did he went] last summer?\n8. Did you clean the flat? — No, I [*didn't/don't].",
    ),
    gaps(
      "Make it negative ❌.",
      "1. I watched TV. → I [didn't watch/did not watch] TV.\n2. We went out. → We [didn't go/did not go] out.\n3. He had a lie-in. → He [didn't have/did not have] a lie-in.\n4. She cooked dinner. → She [didn't cook/did not cook] dinner.\n5. They visited relatives. → They [didn't visit/did not visit] relatives.\n6. I saw the match. → I [didn't see/did not see] the match.\n7. We did the shopping. → We [didn't do/did not do] the shopping.\n8. He bought a new phone. → He [didn't buy/did not buy] a new phone.",
    ),
    drag(
      "Complete the chat.",
      "A: [Did] you go out on Saturday?\nB: No, I [didn't]. I stayed in.\nA: What [did] you do?\nB: I binge-[watched] a series. And you?\nA: I [went] hiking!\nB: Cool! [Did] you go alone?\nA: No, I [went] with my brother. We [had] lunch by a lake.",
      ["Do", "go", "watch", "haved"],
    ),
    order("Make questions.", ["What did you do last weekend?", "Did you go to the concert?", "Where did you have lunch?", "Who did you go out with?", "Did she like the film?"]),
  ]),

  section("Say it right: did you", [
    box("🗣️ Say it right", "In fast English, **did you** sounds like **“didja”** /dɪdʒə/.\n\n*Did you go out?* → “**Didja** go out?”\n\n*What did you do?* → “What **didja** do?”"),
    tip("Say the questions slowly, then fast. The student repeats. Make it a race: who can say *What did you do last weekend?* fastest and clearest? 😄"),
    gaps(
      "Write the full words (the slow way).",
      "1. “Didja see it?” → [Did you] see it?\n2. “What didja buy?” → What [did you] buy?\n3. “Where didja go?” → Where [did you] go?\n4. “Didja like it?” → [Did you] like it?\n5. “Who didja meet?” → Who [did you] meet?\n6. “When didja get home?” → When [did you] get home?",
    ),
  ]),

  section("Listening: Monday morning", [
    ...listening(
      "Listen. Two colleagues talk on Monday morning.",
      "**Leo:** Morning, Sara! How was your weekend?\n\n**Sara:** Great, thanks! I went to a concert on Saturday.\n\n**Leo:** Oh, cool! Who did you see?\n\n**Sara:** Imagine Dragons! It was amazing, but I didn't get home until 2 a.m. 😴\n\n**Leo:** Wow! Did you take photos?\n\n**Sara:** Yes, about 300! And you? What did you do?\n\n**Leo:** Nothing special. I didn't go out. I cleaned the flat and did the shopping.\n\n**Sara:** Very responsible! 😄\n\n**Leo:** Well, on Sunday I had a lie-in until 11. That was the best part!",
    ),
    quiz("Listen and choose.", [
      { q: "Sara went to…", options: ["*a concert", "the cinema", "a match"] },
      { q: "When did she get home?", options: ["*at 2 a.m.", "at 11 p.m.", "at midnight"] },
      { q: "How many photos did she take?", options: ["*about 300", "about 30", "none"] },
      { q: "On Sunday Leo…", options: ["*had a lie-in", "went hiking", "visited relatives"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo went out on Saturday.", false],
      ["Leo cleaned the flat.", true],
      ["Sara saw Imagine Dragons.", true],
      ["Sara didn't take any photos.", false],
      ["Leo had a lie-in on Saturday.", false],
    ]),
  ]),

  section("Video: Last weekend", [
    video("Watch an easy conversation about the weekend. What did they do?", "11Gs31yzlPk"),
    text("Talk to your teacher.", "- What did the people do last weekend?\n- What questions did they ask? Write 2 on the board. ✍️"),
  ]),

  section("Let's talk: Find someone who…", [
    text(
      "Game: Find someone who… last weekend 🔍",
      "Ask your teacher, then answer yourself: *Did you…?*\n\n- … have a lie-in?\n- … binge-watch a series?\n- … go out with friends?\n- … cook something?\n- … do sport?\n- … visit relatives?\n- … spend more than 3 hours on your phone? 📱😅\n\nAsk one more question for every *Yes*: *What did you watch? Where did you go?*",
    ),
    text("Talk to your teacher.", "- What was the best weekend of your life? Why?\n- What did you do on your last holiday? 🏖️\n- What didn't you do last weekend — but wanted to?"),
    tip("*If you have time:* “Two truths and a lie” — the student says 3 sentences about last weekend, one is false. You ask *Did you really…?* and guess the lie."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ you go out yesterday?", options: ["*Did", "Do", "Were"] },
      { q: "I didn't ___ TV.", options: ["*watch", "watched", "watching"] },
      { q: "sleep late on Sunday =", options: ["*have a lie-in", "stay in", "go out"] },
      { q: "What ___ you do yesterday?", options: ["*did", "do", "were"] },
    ]),
    box("Word of the day: weekend vibes", "**no regrets** 😎 = I'm happy about it, I don't think it was wrong.\n\n*I ate three pieces of pie. No regrets!*"),
  ]),

  homework(
    [
      gaps("Complete the phrases.", "1. go [hiking] ⛰️\n2. have a [lie-in] 😴\n3. catch [up] with friends\n4. [visit] relatives\n5. binge-[watch] a series\n6. do the [shopping] 🛒\n7. go [camping] ⛺\n8. [stay] in 🏠"),
      choose("Choose.", "1. [*Did/Do] you see Mia yesterday?\n2. We [*didn't/don't] go to school last Sunday.\n3. What did he [*buy/bought]?\n4. She [*didn't/wasn't] watch the match.\n5. [*Did/Were] they go camping?\n6. I didn't [*have/had] breakfast today."),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      gaps(
        "Write questions.",
        "1. you / go out / last night? → [Did you go out] last night?\n2. what / you / eat / yesterday? → What [did you eat] yesterday?\n3. she / like / the film? → [Did she like] the film?\n4. where / they / go / on holiday? → Where [did they go] on holiday?\n5. he / visit / his grandparents? → [Did he visit] his grandparents?\n6. what time / you / get up? → What time [did you get] up?",
      ),
      video("Watch the grammar video: Past Simple negatives and questions.", "UVki-lzsKr8"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Kenji went to Almaty last weekend.", false],
          ["He didn't like the food.", false],
          ["He visited a museum.", true],
          ["He went to the top of the Baiterek.", true],
          ["He tried beshbarmak before this trip.", false],
        ],
        { read: "💬 **Kenji:** Hi! Last weekend I was in Astana. I didn't go to the mountains — there aren't any near Astana! 😄 But I visited the National Museum and went to the top of the Baiterek. The food was great — I tried beshbarmak for the first time. Did you have a good weekend?" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write a #MyWeekend post: What did you do? What didn't you do? How was it? (50+ words)", 50, {
        read: "*Example:* Last weekend I didn't go out — it was rainy. On Saturday I had a lie-in and binge-watched a series. In the evening I cooked pasta for my family. On Sunday I caught up with my best friend at a café. We didn't talk about school — only about the series! 😄",
      }),
      record("Record your answer: tell your teacher about your last weekend (1 minute). Use did and didn't.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
