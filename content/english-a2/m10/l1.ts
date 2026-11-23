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

// 10.1 Fast or slow? — a GAME and SPEAKING lesson: adverb charades, a talent-show listening, lots of talk about how the student does things. G: adverbs of manner (quickly, well, hard). V: skills and actions. Say it right: stress in -ly adverbs. No reading text or video in class.
export default lesson("a2-10.1", "Fast or slow?", () => [
  section("Warm-up: Adverb charades", [
    box("Today you will…", "- say HOW people do things: *quickly, slowly, well, badly…* 🏃🐢\n- talk about your skills — and your family's\n- judge a talent show 🎤⭐"),
    text(
      "Game: Adverb charades 🎭",
      "Your teacher (or you!) chooses an action and a “how” — and acts it out without words. Guess both!\n\n**Actions:** eat · walk · sing · dance · type on a phone · read · drive · brush your teeth\n\n**How:** fast 🏃 · slowly 🐢 · happily 😄 · angrily 😠 · quietly 🤫 · loudly 📢 · carefully 🧐 · badly 😬\n\n*You're eating… angrily!* 😂",
    ),
    text(
      "Talk to your teacher.",
      "- Are you a fast or a slow person? Do you eat, walk and talk fast? 🏃🐢\n- What do you do really well? And really badly? 😅\n- Who in your family drives / cooks / sings the best? And the worst?",
    ),
    tip("Start the charades yourself — exaggerate! The student will guess with adjectives at first (*angry!*); that's fine — after the grammar, the guesses become *angrily!*"),
  ]),

  section("Vocabulary: Skills and actions", [
    words("How we do things", [
      ["quick — quickly", "⚡", "She answered quickly."],
      ["slow — slowly", "🐢"],
      ["careful — carefully", "🧐 paying attention", "Drive carefully!"],
      ["careless — carelessly", "🙈 not paying attention"],
      ["loud — loudly", "📢"],
      ["quiet — quietly", "🤫"],
      ["patient — patiently", "⏳😌 waiting calmly"],
      ["polite — politely", "🙏"],
      ["confident — confidently", "😎"],
      ["perfect — perfectly", "💯"],
      ["good — well ⚠️", "👍", "She sings well."],
      ["hard — hard ⚠️", "💪 with a lot of effort", "He works hard."],
    ]),
    match("Match the opposites.", [
      ["quickly", "slowly"],
      ["loudly", "quietly"],
      ["carefully", "carelessly"],
      ["well", "badly"],
      ["politely", "rudely"],
      ["early", "late"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. She waited [patiently] for an hour — she didn't get angry. ⏳\n2. He answered the question [confidently] — he knew the answer! 😎\n3. Please close the door [quietly] — Grandma is sleeping. 🤫\n4. The exam was easy. I did it [perfectly] — 100%! 💯\n5. He made a lot of mistakes because he worked [carelessly]. 🙈\n6. The waiter spoke to us very [politely]. 🙏",
    ),
    sort("Is it a good way or a bad way to…? Sort. 👍👎", {
      "👍 drive": ["carefully", "slowly near schools", "patiently in traffic", "confidently"],
      "👎 drive": ["fast in the rain", "angrily", "carelessly", "while you text"],
    }),
  ]),

  section("Grammar: quickly, well, hard", [
    quiz("Notice the rule 🔍 Look: “She's a quick runner. — She runs quickly. He's a good singer. — He sings well.” Which is true?", [
      { q: "quick, good describe…", options: ["*a person or a thing (a noun)", "an action (a verb)", "a time"] },
      { q: "quickly, well describe…", options: ["*how we do an action (a verb)", "a person", "a place"] },
      { q: "The adverb of good is…", options: ["*well", "goodly", "good"] },
    ]),
    table("adverbs"),
    choose(
      "Choose.",
      "1. She speaks English very [*well/good].\n2. He drives too [*fast/fastly]. 🚗\n3. Please talk [*quietly/quiet] — the baby is sleeping. 👶\n4. It was an [*easy/easily] test.\n5. I passed the test [*easily/easy].\n6. They work very [*hard/hardly].\n7. She's a [*careful/carefully] driver.\n8. He answered the question [*politely/polite].",
    ),
    gaps(
      "Write the adverb.",
      "1. quick → [quickly]\n2. careful → [carefully]\n3. happy → [happily]\n4. good → [well]\n5. fast → [fast]\n6. easy → [easily]\n7. hard → [hard]\n8. bad → [badly]",
    ),
    drag(
      "Complete the review of a cooking show.",
      "Chef Ali cooks [beautifully]. He cuts vegetables very [fast], but he's always [careful]. His assistant, Tom, works [hard], but he does everything [slowly]. Today Tom dropped the cake! 🎂 Ali smiled and said [politely]: “Don't worry, Tom.” Then they made a new cake [quickly]. It tasted [great]! 😋",
      ["beautiful", "carefully", "hardly"],
    ),
    order("Make sentences.", [
      "She sings beautifully.",
      "He speaks English very well.",
      "Please drive carefully.",
      "They worked hard all day.",
      "I finished the test quickly.",
    ]),
  ]),

  section("Say it right: -ly", [
    box(
      "🗣️ Say it right",
      "Adding **-ly** doesn't change the stress:\n\n**QUICK** → **QUICK**ly · **CARE**ful → **CARE**fully · **HAP**py → **HAP**pily\n\nThe **-ly** is short and light: /li/\n\n**carefully** — 3 syllables: **CARE**-fu-lly (not care-FUL-ly)",
    ),
    quiz("Where's the stress? Choose.", [
      { q: "carefully", options: ["*CARE-fu-lly", "care-FU-lly", "care-fu-LLY"] },
      { q: "politely", options: ["*po-LITE-ly", "PO-lite-ly", "po-lite-LY"] },
      { q: "confidently", options: ["*CON-fi-dent-ly", "con-FI-dent-ly", "con-fi-DENT-ly"] },
      { q: "beautifully", options: ["*BEAU-ti-fu-lly", "beau-TI-fu-lly", "beau-ti-FU-lly"] },
    ]),
    tip("Say a sentence in the style of the adverb: *I'm speaking slowly… / quickly! / quietly… / LOUDLY!* — the student copies, then makes their own."),
  ]),

  section("Listening: Talent show", [
    tip("Three contestants, three judges' comments. Before listening: *Who would you vote for?* While listening, the student notes one adverb for each contestant."),
    ...listening(
      "Listen. A TV talent show: the host and the judge talk about three contestants.",
      "**Host:** Welcome back to “Star Search”! Our judge tonight is the famous singer Laura Bell. Laura, what did you think of our first contestant, Arman, the dancer?\n\n**Laura:** Wow! Arman danced brilliantly. He moved so quickly and so lightly — like a cat! 🐈 But he looked at the floor all the time. Arman, smile and look at the audience confidently!\n\n**Host:** Our second contestant was Mia, who sang a song by Adele.\n\n**Laura:** Mia sang beautifully, but very quietly — I couldn't hear her at the back! You have a lovely voice, Mia. Sing loudly — be proud of it! 🎤\n\n**Host:** And finally, Leo, the comedian.\n\n**Laura:** Leo, I laughed loudly — everyone did! 😂 But you spoke too fast, and I didn't understand some of your jokes. Speak slowly and clearly, and you'll be a star.\n\n**Host:** So, who's the winner tonight?\n\n**Laura:** It's a difficult decision… All three worked very hard. But tonight's winner is… Arman! 🏆\n\n**Host:** Congratulations, Arman! See you next week on “Star Search”!",
    ),
    quiz("Listen and choose.", [
      { q: "How did Arman dance?", options: ["*brilliantly", "badly", "slowly"] },
      { q: "What was Arman's problem?", options: ["*He looked at the floor.", "He danced too slowly.", "He fell."] },
      { q: "What was Mia's problem?", options: ["*She sang too quietly.", "She sang badly.", "She forgot the words."] },
      { q: "What was Leo's problem?", options: ["*He spoke too fast.", "His jokes weren't funny.", "He spoke too quietly."] },
      { q: "Who won?", options: ["*Arman", "Mia", "Leo"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman moved lightly, like a cat.", true],
      ["Mia sang a song by Adele.", true],
      ["The judge couldn't hear Mia at the back.", true],
      ["Nobody laughed at Leo's jokes.", false],
      ["The judge says all three worked hard.", true],
    ]),
    gaps(
      "Listen again. Complete the judge's comments.",
      "1. Arman danced [brilliantly].\n2. Look at the audience [confidently]!\n3. Mia sang beautifully, but very [quietly].\n4. Sing [loudly] — be proud of it!\n5. You spoke too [fast].\n6. Speak slowly and [clearly].",
    ),
  ]),

  section("Let's talk: How do you do it?", [
    text(
      "Talk to your teacher.",
      "- Do you drive (or ride a bike)? How? Carefully, fast, nervously? 🚗🚲\n- What do you do quickly — and what do you do very slowly? Why? 🐢\n- Who do you know that speaks English well? How did they learn? 🇬🇧\n- Do you work hard or hardly work? 😄 When do you work the hardest?\n- What can you do perfectly? What do you do badly but love doing anyway? 🎤",
    ),
    text(
      "Game: Be the judge ⭐",
      "Watch your teacher do 3 short “performances”: read a poem, sing a line of a song, tell a joke (or do it yourself!).\n\nGive feedback like a judge: *You sang beautifully, but too quietly. You told the joke quickly — speak slowly!*\n\nThen change roles!",
    ),
    tip("*If you have time:* “Describe a person without naming them” — the student describes a famous person or a family member with adverbs (*She sings beautifully, she dances energetically…*). You guess who it is."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "good → …", options: ["*well", "goodly", "good"] },
      { q: "He works very ___.", options: ["*hard", "hardly", "hardy"] },
      { q: "Drive ___!", options: ["*carefully", "careful", "careless"] },
      { q: "She's a ___ singer.", options: ["*beautiful", "beautifully", "beauty"] },
    ]),
    box("Word of the day: slow and steady", "**Slow and steady wins the race** 🐢🏆 = doing something slowly but without stopping is better than doing it fast and badly.\n\n*Learning English? Slow and steady wins the race!*"),
  ]),

  homework(
    [
      gaps(
        "Write the adverb.",
        "1. Please speak more [slowly]. (slow) 🐢\n2. She plays the piano [beautifully]. (beautiful) 🎹\n3. He did the test [badly]. (bad) 😬\n4. You speak English very [well]! (good) 👍\n5. Open the box [carefully]. (careful) 📦\n6. They ran [fast] to catch the bus. (fast) 🏃",
      ),
      match("Match.", [
        ["work", "hard"],
        ["drive", "carefully"],
        ["speak", "politely"],
        ["sing", "beautifully"],
        ["wait", "patiently"],
        ["answer", "quickly"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: adverbs of manner.", "N9_8l4MgJzU"),
      choose(
        "Choose.",
        "1. He's a [*good/well] cook.\n2. He cooks very [*well/good].\n3. She walked [*slowly/slow] to the door.\n4. It's a [*quiet/quietly] street.\n5. They're playing [*loudly/loud] — I can't sleep!\n6. I got up [*late/lately] this morning.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about someone in your family or a friend: what do they do well, badly, quickly, slowly? Give examples. (60+ words)", 60, {
        read: "*Example:* My grandma cooks beautifully — her manti are the best in the world! 🥟 But she drives very slowly, so we're always late. 😄 My brother speaks English well, but he writes carelessly — a lot of mistakes! My dad works hard and he always speaks to people politely. And me? I eat too quickly and I sing badly — but loudly! 🎤",
      }),
      record("Record your answer: What's something you do really well? How did you learn it? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
