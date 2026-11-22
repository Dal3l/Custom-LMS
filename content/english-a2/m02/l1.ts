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

// 2.1 What were you doing? — G: Past Continuous (was / were + -ing). V: everyday actions. Say it right: weak was / were. S: the alibi game. Main format: a memory game with a photo + reading (a group chat) + listening (a detective story).
export default lesson("a2-2.1", "What were you doing?", () => [
  section("Warm-up: Memory test", [
    box("Today you will…", "- say what people **were doing** at a moment in the past\n- ask *What were you doing at…?*\n- play detective: find the liar 🕵️"),
    picture("Look at the photo for 30 seconds. Then close your eyes! 👀", ["photos/park.jpg"], "A sunny Sunday in Central Park, New York 🇺🇸"),
    tip("Memory game: show the photo for 30 seconds, then hide it (scroll down or turn off screen sharing). Ask: *How many people were lying on the grass? Were people swimming? Was it sunny? What were the people in the front doing?* Then look again and check. Use the new form yourself, the student just answers — the grammar comes later."),
    text(
      "Talk to your teacher.",
      "- What were the people doing in the park? Say 3 things.\n- Do you like parks like this? What do you usually do there? 🌳\n- Where were you last Sunday at 3 p.m.? 🤔",
    ),
  ]),

  section("Vocabulary: Everyday actions", [
    words("Everyday actions", [
      ["lie on the sofa / on the grass", "🛋️ / 🌱", "He was lying on the sofa."],
      ["sunbathe", "☀️😎 lie in the sun"],
      ["have a picnic", "🧺🥪"],
      ["walk the dog", "🐕"],
      ["wait for the bus", "🚏⏳"],
      ["stand in a queue", "🧍🧍🧍 🇺🇸 stand in line"],
      ["scroll through social media", "📱👆", "I was scrolling through TikTok."],
      ["chat online", "💬"],
      ["have a shower", "🚿 🇺🇸 take a shower"],
      ["do the washing-up", "🍽️🧽 🇺🇸 do the dishes"],
      ["take out the rubbish", "🗑️ 🇺🇸 take out the trash"],
      ["the power went off", "💡❌ no electricity", "The power went off at 8:15."],
    ]),
    match("Match.", [
      ["walk", "the dog"],
      ["wait", "for the bus"],
      ["stand in", "a queue"],
      ["take out", "the rubbish"],
      ["have", "a picnic"],
      ["scroll through", "social media"],
    ]),
    sort("At home or outside? Sort. 🏠🌳", {
      "🏠 at home": ["have a shower", "do the washing-up", "lie on the sofa", "chat online"],
      "🌳 outside": ["sunbathe", "walk the dog", "wait for the bus", "have a picnic"],
    }),
    quiz("🇬🇧 or 🇺🇸? Choose the American word.", [
      { q: "🇬🇧 do the washing-up = 🇺🇸 …", options: ["*do the dishes", "do the plates", "make the dishes"] },
      { q: "🇬🇧 rubbish = 🇺🇸 …", options: ["*trash", "dust", "junk food"] },
      { q: "🇬🇧 a queue = 🇺🇸 …", options: ["*a line", "a row", "a group"] },
    ]),
  ]),

  section("Reading: Blackout!", [
    tip("A group chat of neighbours after a power cut. Read it in roles: the student is one person, you are another. Ask after each message: *What was she doing?*"),
    trueFalse(
      "Read the chat. True or false?",
      [
        ["The power went off at 8:15 p.m.", true],
        ["Mrs. Lee was watching TV.", false],
        ["Tom was having a shower.", true],
        ["Aliya and her friends were playing a video game.", false],
        ["Mr. Brown was walking his dog.", true],
      ],
      {
        read: [
          "## 💬 Green Street, Building 5",
          "**Mrs. Lee:** Hi, everyone! The power went off at 8:15! 💡❌ Is it the same in your flat? I was baking a cake for my grandson's birthday. Now it's half a cake! 🎂😩",
          "**Tom (flat 12):** Yes, the same here! I was having a shower — with shampoo in my hair! 🚿😱 Now I'm sitting in the dark with a towel on my head.",
          "**Aliya (flat 7):** We weren't playing games, we were doing homework — honestly! 😇 OK, my friends were doing homework. I was scrolling through Instagram. 📱 Now my phone is at 5%!",
          "**Mr. Brown:** I wasn't at home. I was walking my dog, Max, in the park. 🐕 When we came back, the elevator wasn't working! We walked to the 9th floor. Max was not happy.",
          "**Mrs. Lee:** The power is back! 💡✅ Who wants cake? Half a cake, but it's free! 😄",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who…?", [
      { q: "Who was baking?", options: ["*Mrs. Lee", "Tom", "Aliya"] },
      { q: "Who had shampoo in their hair?", options: ["*Tom", "Mr. Brown", "Mrs. Lee"] },
      { q: "Who wasn't at home?", options: ["*Mr. Brown", "Aliya", "Tom"] },
    ]),
    text("Talk to your teacher.", "- Whose situation was the worst? Why? 😅\n- Was there a power cut in your home? What were you doing?\n- What can't you do without electricity? 🔌"),
  ]),

  section("Grammar: was / were + -ing", [
    quiz("Notice the rule 🔍 Look at the chat: “I was baking a cake. I was having a shower. We were doing homework.” Which is true?", [
      { q: "These actions…", options: ["*were in progress at 8:15 — not finished", "started and finished at 8:15", "happen every day"] },
      { q: "We make this form with…", options: ["*was / were + verb-ing", "did + verb", "is / are + verb-ing"] },
    ]),
    table("past-cont"),
    choose(
      "Choose.",
      "1. At 8:15 I [*was having/had have] a shower.\n2. My parents [*were watching/was watching] a film.\n3. [*Were/Did] you sleeping at midnight?\n4. She [*wasn't/didn't] working yesterday at 5.\n5. What [*were you doing/did you doing] at 9 p.m.?",
    ),
    gaps(
      "What were they doing at 8:15? Use the verbs.",
      "1. Mrs. Lee [was baking] a cake. (bake)\n2. Tom [was having] a shower. (have)\n3. Aliya's friends [were doing] homework. (do)\n4. Mr. Brown [was walking] his dog. (walk)\n5. Max the dog [wasn't sleeping/was not sleeping]! (not sleep)",
    ),
    drag(
      "Complete the conversation.",
      "A: I called you at 7. Where [were] you?\nB: I [was] at the gym. I [was] running, so I didn't hear the phone.\nA: And at 9?\nB: At 9 I [was] sleeping! 😴 Why? What [were] you doing?",
      ["did", "are"],
    ),
    order("Make questions.", ["What were you doing at 10 last night?", "Were you sleeping at midnight?", "Who was she talking to?"]),
  ]),

  section("Say it right: was / were", [
    box(
      "🗣️ Say it right",
      "In sentences, **was** and **were** are short and weak:\n\n*I* **was** */wəz/ reading.* · *They* **were** */wə/ playing.*\n\nIn short answers they are strong:\n\n*Yes, I* **was** */wɒz/*. · *Yes, they* **were** */wɜː/*.",
    ),
    quiz("Weak or strong? Choose.", [
      { q: "I was watching TV. → was is…", options: ["*weak /wəz/", "strong /wɒz/"] },
      { q: "Were you sleeping? — Yes, I was. → was is…", options: ["*strong /wɒz/", "weak /wəz/"] },
      { q: "We were having dinner. → were is…", options: ["*weak /wə/", "strong /wɜː/"] },
    ]),
    tip("Say a sentence fast with weak forms, the student repeats: *I was having a shower — /aɪ wəz ˈhævɪŋ/*. Then short answers with strong forms: *Were you? — Yes, I was!*"),
  ]),

  section("Listening: The missing cake", [
    ...listening(
      "Listen. Someone ate the boss's birthday cake! 🎂 The detective asks two workers questions.",
      "**Detective:** The cake was in the fridge at 1 p.m. At 2 p.m., it wasn't there. Mr. Hall, what were you doing between 1 and 2?\n\n**Mr. Hall:** I was having lunch at the café across the street. I was sitting by the window with my friend Jen.\n\n**Detective:** What were you eating?\n\n**Mr. Hall:** A chicken sandwich. And I was drinking coffee. I didn't eat any cake!\n\n**Detective:** Thank you. Ms. Park, and you?\n\n**Ms. Park:** I was working at my desk. I was writing emails all the time. I wasn't hungry.\n\n**Detective:** Were you alone?\n\n**Ms. Park:** Yes, everyone was at lunch.\n\n**Detective:** Hmm. Then why is there chocolate on your keyboard, Ms. Park? 🍫🕵️\n\n**Ms. Park:** Oh… OK. It was me. I'm sorry! It was a really good cake!",
    ),
    quiz("Listen and choose.", [
      { q: "When did the cake disappear?", options: ["*between 1 and 2 p.m.", "in the morning", "after 5 p.m."] },
      { q: "Where was Mr. Hall?", options: ["*at a café", "at his desk", "in the kitchen"] },
      { q: "What was Ms. Park doing, she said?", options: ["*writing emails", "having lunch", "talking on the phone"] },
      { q: "Who ate the cake?", options: ["*Ms. Park", "Mr. Hall", "Jen"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Mr. Hall was sitting with a friend.", true],
      ["Ms. Park was with other people.", false],
      ["There was chocolate on the keyboard.", true],
    ]),
  ]),

  section("Video: What were you doing?", [
    video("Watch a short video with easy examples. Write down 3 sentences with was / were + -ing.", "etvW0FOD_so"),
    text("Talk to your teacher.", "- Read your 3 sentences. Are they correct? ✅\n- What were you doing at this time yesterday?"),
  ]),

  section("Let's talk: The alibi game", [
    text(
      "Game: The alibi 🕵️",
      "Yesterday between 7 and 9 p.m., someone took the last pizza from the fridge! 🍕\n\n**You and your teacher are the suspects.** Think about your alibi for 1 minute: *Where were you? Who were you with? What were you doing? What were you wearing? What was on TV?*\n\nThen the detective asks questions. Same answers = free! Different answers = guilty! 😄",
    ),
    tip("Play it twice: first you are the detective, then the student. Ask fast follow-up questions: *What were you eating? What was your friend wearing? Was it raining?* — the liar makes mistakes."),
    text(
      "Talk to your teacher.",
      "- What were you doing at 7 a.m. today? And at 10 p.m. yesterday? ⏰\n- What were you doing at midnight on New Year's Eve? 🎆\n- Where were you when you heard some big news? 📰",
    ),
    tip("*If you have time:* “Freeze!” — the student mimes an action, you say *Freeze!* and ask *What were you doing?* — *I was walking the dog!* Then change roles."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "They ___ playing football at 5.", options: ["*were", "was", "did"] },
      { q: "___ you sleeping when I called?", options: ["*Were", "Did", "Was"] },
      { q: "🇺🇸 do the dishes = 🇬🇧 …", options: ["*do the washing-up", "take out the rubbish", "do the shopping"] },
    ]),
    box("Word of the day: caught red-handed", "**caught red-handed** 🔴✋ = someone saw you while you were doing something wrong.\n\n*Ms. Park was caught red-handed — there was chocolate on her keyboard!*"),
  ]),

  homework(
    [
      gaps("Complete the phrases.", "1. walk the [dog] 🐕\n2. wait [for] the bus 🚏\n3. stand in a [queue] 🧍🧍\n4. take out the [rubbish/trash] 🗑️\n5. have a [picnic] 🧺"),
      match("🇬🇧 → 🇺🇸 Match.", [
        ["do the washing-up", "do the dishes"],
        ["rubbish", "trash"],
        ["a queue", "a line"],
        ["have a shower", "take a shower"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: the Past Continuous.", "liX95VS4a14"),
      choose("Choose.", "1. I [*was reading/were reading] at 10.\n2. We [*weren't/wasn't] sleeping.\n3. What [*was/were] he doing?\n4. [*Were/Was] they waiting for the bus?"),
      gaps("Write the -ing form.", "1. have → [having]\n2. sit → [sitting]\n3. lie → [lying]\n4. swim → [swimming]\n5. write → [writing]"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("A2 Key listening practice: a detective asks people questions. Listen and answer the questions in the video.", "WkpHFzegBg8"),
      write("Write: What were the people doing at the time of the crime? (2–3 sentences)", null),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Write your alibi: What were you doing yesterday from 6 to 10 p.m.? Where were you? Who were you with? (50+ words)", 50, {
        read: "*Example:* At 6 p.m. I was walking home from school. It was raining, so I was running! At 7 I was having dinner with my family — we were eating plov. At 8 I was doing my homework, and my sister was watching a series. At 9:30 I was lying on the sofa and scrolling through social media. I didn't take the pizza! 😄",
      }),
      record("Record your answer: describe the park photo from the lesson from memory. What were the people doing? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
