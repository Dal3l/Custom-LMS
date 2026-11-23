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

// 3.1 Which is better? — G: comparatives (cheaper, more expensive, better than). V: adjectives for gadgets and apps. Say it right: weak "than" /ðən/. S: compare two things. Main format: photos (then and now) + reading + listening (in a phone shop).
export default lesson("a2-3.1", "Which is better?", () => [
  section("Warm-up: Then and now", [
    box("Today you will…", "- compare gadgets and apps: *cheaper, faster, better than…*\n- say what you prefer and why\n- choose a phone for a friend 📱"),
    picture("A phone from 2000 and a phone today", ["photos/phone-old.jpg", "photos/phone-new.jpg"], "Nokia 3310 (2000) and a modern smartphone"),
    text(
      "Talk about the photos.",
      "- Which phone is older? Which is more modern? 📱\n- What can you do with the new phone? And with the old one? 🐍 (the Snake game!)\n- Which is better for a child? For a grandma? For you? Why?",
    ),
    tip("Let the student compare with the words they know: *The new phone is big… the old phone is small.* Write 2–3 of their sentences on the board — after the grammar, make them better together: *The old phone is smaller than the new one.*"),
  ]),

  section("Vocabulary: Describing gadgets", [
    words("Gadgets and apps", [
      ["cheap — expensive", "💰 — 💸"],
      ["light — heavy", "🪶 — 🏋️", "My laptop is very heavy."],
      ["fast — slow", "⚡ — 🐢"],
      ["modern — old-fashioned", "🆕 — 📼"],
      ["useful — useless", "👍 helps you — 👎 doesn't help"],
      ["reliable", "✅ it always works", "Old Nokia phones were very reliable."],
      ["easy to use", "🙂 simple"],
      ["strong — fragile", "💪 — 🥚 breaks easily"],
      ["the battery life", "🔋 how long the battery works", "The battery life is two days."],
      ["the screen", "📱 the glass part you look at"],
      ["storage", "💾 space for photos, apps, files"],
      ["a feature", "⭐ something a gadget can do", "The camera is the best feature."],
    ]),
    match("Match the opposites.", [
      ["cheap", "expensive"],
      ["light", "heavy"],
      ["fast", "slow"],
      ["modern", "old-fashioned"],
      ["useful", "useless"],
      ["strong", "fragile"],
    ]),
    sort("Good or bad for a phone? Sort. 👍👎", {
      "👍 good": ["reliable", "fast", "light", "easy to use", "strong"],
      "👎 bad": ["slow", "fragile", "heavy", "useless", "expensive"],
    }),
    gaps(
      "Complete.",
      "1. It always works. It's very [reliable]. ✅\n2. It breaks easily. It's [fragile]. 🥚\n3. 🔋 My battery [life] is only 5 hours!\n4. I have 2,000 photos — I need more [storage]. 💾\n5. The best [feature] of this phone is the camera. ⭐\n6. My grandma can use it. It's easy to [use]. 🙂\n7. It weighs 2 kg! It's very [heavy]. 🏋️\n8. It costs $2,000. It's very [expensive]. 💸",
    ),
  ]),

  section("Reading: Old phone vs smartphone", [
    tip("Read paragraph by paragraph. After each one ask: *Which is better here — the old phone or the new one?* Count the points: old phone vs smartphone 🏆"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The Nokia 3310 came out in 2000.", true],
        ["The Nokia is heavier than most smartphones today.", false],
        ["The Nokia's battery life is longer than a smartphone's.", true],
        ["Smartphones are stronger than the old Nokia.", false],
        ["You can take better photos with a smartphone.", true],
        ["The writer thinks the smartphone is better for everything.", false],
      ],
      {
        read: [
          "## 📱 Old phone vs smartphone: which is better?",
          "The **Nokia 3310** came out in 2000. It was one of the most popular phones ever — people bought about 126 million of them! But is it better than a smartphone today? Let's compare. 🥊",
          "**🪶 Size and weight.** The Nokia weighs only 133 grams. Most smartphones today are bigger and heavier — about 170–230 grams. Point to Nokia!",
          "**🔋 Battery life.** The Nokia's battery can last for days — some people charged it once a week! A smartphone usually needs charging every day. Another point to Nokia.",
          "**💪 Strength.** People joke that the Nokia is “unbreakable”. Smartphones are much more fragile — one fall, and the screen breaks. 💔",
          "**📸 Camera, apps, internet.** Here the smartphone wins easily. The Nokia has no camera and no internet. A smartphone is a camera, a map, a bank and a cinema in your pocket!",
          "**🏆 The result?** The smartphone is more useful, of course. But the old phone is lighter, stronger and more reliable. Some people even buy “dumb phones” today — they want a simpler life with less screen time.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How many Nokia 3310 phones did people buy?", options: ["*about 126 million", "about 12 million", "about 1 billion"] },
      { q: "How heavy is the Nokia 3310?", options: ["*133 grams", "230 grams", "33 grams"] },
      { q: "Why do some people buy “dumb phones” today?", options: ["*They want less screen time.", "They are more expensive.", "They have better cameras."] },
      { q: "What is NOT a smartphone in your pocket, says the writer?", options: ["*a kitchen", "a camera", "a bank"] },
    ]),
    text("Talk to your teacher.", "- Old phone or smartphone: which is better for you? Why?\n- Can you live one week with a “dumb phone”? 😅"),
  ]),

  section("Grammar: bigger, more expensive, better", [
    quiz("Notice the rule 🔍 Look at the article: “bigger and heavier… more fragile… better than a smartphone”. Which is true?", [
      { q: "Short adjectives (big, heavy) get…", options: ["*-er: bigger, heavier", "more: more big", "-est: biggest"] },
      { q: "Long adjectives (fragile, useful) get…", options: ["*more: more fragile", "-er: fragiler", "most: most useful"] },
      { q: "After the comparative we use…", options: ["*than: better than", "that: better that", "as: better as"] },
    ]),
    table("comparatives"),
    choose(
      "Choose.",
      "1. My phone is [*cheaper/more cheap] than yours.\n2. This app is [*more useful/usefuller] than that one.\n3. Tablets are [*bigger/biger] than phones.\n4. The new model is [*better/gooder] than the old one.\n5. My old laptop was [*heavier/heavyer] than this one.\n6. Is Instagram [*more popular/popularer] than TikTok in your country?\n7. My internet is [*worse/badder] today than yesterday.\n8. This phone is faster [*than/that] my old one.",
    ),
    gaps(
      "Write the comparative.",
      "1. cheap → [cheaper]\n2. big → [bigger]\n3. easy → [easier]\n4. modern → [more modern]\n5. good → [better]\n6. bad → [worse]\n7. nice → [nicer]\n8. expensive → [more expensive]",
    ),
    drag(
      "Complete the review.",
      "I had a Samsung, and now I have an iPhone. The iPhone is [more] expensive, but the camera is [better]. The screen is [smaller], so it's [easier] to use with one hand. The battery life is [worse] — I charge it twice a day! 😩 The Samsung was [heavier], but it was [more] reliable. Which is better? I don't know! The iPhone is nicer [than] the Samsung, but not more useful.",
      ["most", "good", "that", "badder"],
    ),
    order("Make sentences.", [
      "My phone is older than my brother's phone.",
      "This app is more useful than that one.",
      "Tablets are bigger than phones.",
      "Is your laptop lighter than mine?",
      "The new game is much better than the old one.",
    ]),
  ]),

  section("Say it right: than", [
    box(
      "🗣️ Say it right",
      "**than** is short and weak in a sentence: **/ðən/**, not /ðæn/.\n\n*It's bigger than mine.* → “bigger **thn** mine”\n\nThe stress is on the adjective: It's **BIG**ger than mine. It's **CHEA**per than yours.",
    ),
    quiz("Where's the stress? Choose the strong word.", [
      { q: "It's cheaper than my phone.", options: ["*CHEAper", "than", "my"] },
      { q: "This one is more expensive.", options: ["*exPENsive", "more", "one"] },
      { q: "My laptop is lighter than yours.", options: ["*LIGHTer", "than", "is"] },
      { q: "Is it better than the old one?", options: ["*BETter", "than", "the"] },
    ]),
    tip("Say the sentences fast with a weak *than* /ðən/ — the student repeats. Then a game: you say two things (*a cat, a dog*), the student makes a fast comparison: *A dog is bigger than a cat!*"),
  ]),

  section("Listening: In the phone shop", [
    ...listening(
      "Listen. Leo and Mia are buying a phone for their grandma's birthday.",
      "**Assistant:** Hi! Can I help you?\n\n**Leo:** Yes, please. We want a phone for our grandma. She's 75.\n\n**Assistant:** OK! Look at these two. This one is the Galaxy A. It's cheaper — 150 dollars. The other one is the Pixel. It's 300 dollars.\n\n**Mia:** Why is the Pixel more expensive?\n\n**Assistant:** The camera is much better, and it's faster. But the Galaxy has a bigger screen and bigger buttons. The battery life is longer too — two days.\n\n**Leo:** Grandma doesn't take many photos. She calls us and watches videos of her cats. 🐱\n\n**Mia:** And she always forgets to charge her phone! 😄\n\n**Assistant:** Then the Galaxy is better for her. It's easier to use, and it's lighter.\n\n**Leo:** Perfect. We'll take the Galaxy. And can we have a pink case, please? Pink is her favorite color!",
    ),
    quiz("Listen and choose.", [
      { q: "How old is their grandma?", options: ["*75", "65", "85"] },
      { q: "How much is the Galaxy A?", options: ["*$150", "$300", "$115"] },
      { q: "Why is the Pixel more expensive?", options: ["*It has a better camera and it's faster.", "It has a bigger screen.", "Its battery life is longer."] },
      { q: "What color case do they want?", options: ["*pink", "black", "blue"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The Galaxy has a bigger screen than the Pixel.", true],
      ["The Pixel's battery life is longer.", false],
      ["Grandma takes a lot of photos.", false],
      ["Grandma often forgets to charge her phone.", true],
      ["Leo and Mia buy the Pixel.", false],
    ]),
  ]),

  section("Video: Comparative adjectives", [
    video("Watch a short grammar video. Write down 3 comparisons from the video.", "wXiD0FdON7k"),
    text("Talk to your teacher.", "- Read your 3 sentences. Are they correct? ✅\n- Make 2 more comparisons about things in your room."),
  ]),

  section("Let's talk: This or that?", [
    text(
      "Game: This or that? ⚡",
      "Choose fast and say why! Use a comparative in every answer.\n\n- iPhone 🍏 or Android 🤖?\n- YouTube or TikTok? 📺\n- a laptop or a tablet? 💻\n- WhatsApp or Telegram? 💬\n- e-books or paper books? 📚\n- headphones or earbuds? 🎧\n- a smartwatch or a normal watch? ⌚\n\n*I prefer Telegram — it's faster and more useful for groups.*",
    ),
    tip("Disagree with the student on purpose: *Really? I think TikTok is more boring than YouTube!* — the student must defend their choice with 2 reasons."),
    text("Talk to your teacher.", "- What's your favorite gadget? Is it better than the old one you had?\n- What's more important in a phone: the camera, the battery or the price? 📸🔋💰\n- Was life better without smartphones? Why / why not?"),
    tip("*If you have time:* “Better or worse?” — compare life 20 years ago and now: phones, music, school, shopping. *Shopping is easier now, but…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "good → …", options: ["*better", "gooder", "more good"] },
      { q: "This app is ___ than that one.", options: ["*more useful", "usefuler", "most useful"] },
      { q: "It always works. It's…", options: ["*reliable", "fragile", "useless"] },
      { q: "My phone is faster ___ yours.", options: ["*than", "that", "as"] },
    ]),
    box("Word of the day: upgrade", "**upgrade** ⬆️ = change to a newer, better model.\n\n*My phone is 5 years old. It's time to upgrade!*"),
  ]),

  homework(
    [
      gaps(
        "Write the opposite.",
        "1. cheap ↔ [expensive]\n2. light ↔ [heavy]\n3. fast ↔ [slow]\n4. modern ↔ [old-fashioned]\n5. useful ↔ [useless]\n6. strong ↔ [fragile]",
      ),
      match("Match.", [
        ["the battery", "life"],
        ["easy", "to use"],
        ["a big", "screen"],
        ["more", "storage"],
        ["a new", "feature"],
        ["time to", "upgrade"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: comparatives and superlatives (watch the part about comparatives).", "oGr7l3q7SMI"),
      choose(
        "Choose.",
        "1. My bag is [*heavier/more heavy] than yours.\n2. This film is [*more interesting/interestinger] than the book.\n3. Today is [*hotter/hoter] than yesterday.\n4. Your English is [*better/more good] than last year!\n5. The bus is [*slower/more slow] than the metro.\n6. She is [*taller/more tall] than her mom.",
      ),
      gaps(
        "Complete with the comparative.",
        "1. A plane is [faster] than a train. (fast)\n2. Math is [more difficult] than English for me. (difficult)\n3. My room is [bigger] than my sister's. (big)\n4. This test was [easier] than the last one. (easy)\n5. The weather is [worse] today. (bad)\n6. Phones are [more expensive] now than 10 years ago. (expensive)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the app reviews. True or false?",
        [
          ["Ali thinks Duolingo is more fun than his old app.", true],
          ["Ali's old app was cheaper.", false],
          ["Sara thinks paper maps are more reliable.", true],
          ["Sara's phone battery died in the mountains.", true],
          ["Sara thinks map apps are useless.", false],
        ],
        {
          read: "⭐⭐⭐⭐⭐ **Ali:** I used a different language app last year, but Duolingo is much more fun — it's like a game! 🦉 And it's free, so it's cheaper than my old app. It's not perfect, but it's better for me.\n\n⭐⭐⭐ **Sara:** Map apps are very useful in the city. But in the mountains my phone battery died, and I got lost! 🏔️ Now I always take a paper map too. It's more old-fashioned, but it's more reliable!",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Compare two gadgets or apps you use (for example, your phone and your laptop, or Instagram and TikTok). Which is better? Why? (50+ words)", 50, {
        read: "*Example:* I use Telegram and WhatsApp. Telegram is faster and more useful for groups — my class has a chat there. WhatsApp is more popular in my family, and it's easier for my grandma to use. Telegram has more features, like channels and bots. For me, Telegram is better, but my parents prefer WhatsApp! 😄",
      }),
      record("Record a 1-minute “review”: show or describe your phone and compare it with your old phone or a friend's phone.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
