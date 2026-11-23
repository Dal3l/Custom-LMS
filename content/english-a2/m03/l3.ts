import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  picture,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 3.3 City vs country — skills lesson: reading opinions, a radio phone-in, a debate, writing an email with an opinion (A2 Key style); review of module 3.
export default lesson("a2-3.3", "City vs country", () => [
  section("Warm-up: Would you rather…?", [
    box("Today you will…", "- read and listen to opinions: city or country? 🏙️🌳\n- give your opinion with reasons: *I think… because…*\n- have a debate and write an email"),
    picture("City or country?", ["photos/city-astana.jpg", "photos/country-village.jpg"], "Astana, Kazakhstan — and a village in Devon, England"),
    text(
      "Game: Would you rather…? 🤔",
      "Choose and say why — fast!\n\n- … live in a flat in the center or in a house in a village? 🏢🏡\n- … go to work by metro or by bike through a forest? 🚇🚲\n- … have 100 neighbours or 2 neighbours and 10 cows? 🐄😄\n- … hear cars at night or birds at 5 a.m.? 🚗🐦\n- … have 50 cafés near your home or 1 shop that closes at 6? ☕🏪",
    ),
    tip("Answer the questions too — and choose differently from the student sometimes. Ask *Why?* after every answer, so the student starts giving reasons."),
  ]),

  section("Vocabulary: City life, country life", [
    words("City and country", [
      ["noisy — quiet", "📢 — 🤫"],
      ["crowded", "👥👥👥 too many people", "The metro is crowded in the morning."],
      ["peaceful", "🕊️ quiet and calm"],
      ["pollution — polluted", "🏭💨 dirty air or water"],
      ["fresh air", "🌬️🌳 clean air"],
      ["a traffic jam", "🚗🚗🚗 cars can't move"],
      ["public transport", "🚌🚇 buses, the metro, trams"],
      ["nature", "🌳🦋🏞️"],
      ["neighbours", "🏠👋🏠 people who live next to you · 🇺🇸 neighbors"],
      ["entertainment", "🎬🎤🎳 cinemas, concerts, clubs"],
      ["the cost of living", "💸 how much you pay for food, rent, transport"],
      ["boring — exciting", "😴 — 🤩"],
    ]),
    sort("City or country? Sort. 🏙️🌳", {
      "🏙️ city": ["traffic jams", "crowded streets", "pollution", "public transport", "entertainment"],
      "🌳 country": ["fresh air", "peaceful nights", "nature", "farm animals", "quiet roads"],
    }),
    match("Match.", [
      ["fresh", "air"],
      ["a traffic", "jam"],
      ["public", "transport"],
      ["the cost", "of living"],
      ["crowded", "streets"],
      ["friendly", "neighbours"],
    ]),
    gaps(
      "Complete.",
      "1. There are too many people on the bus. It's very [crowded]. 👥\n2. I can't sleep — the street is so [noisy]! 📢\n3. The air in the city is [polluted]. 🏭\n4. I go to the mountains for some fresh [air]. 🌬️\n5. We were in a traffic [jam] for an hour! 🚗🚗\n6. The village is quiet and [peaceful]. 🕊️\n7. My [neighbours/neighbors] are very friendly. 🏠👋\n8. There's nothing to do here. It's so [boring]! 😴",
    ),
  ]),

  section("Reading: Where would you rather live?", [
    tip("Three posts from a forum. Read one at a time, and after each ask: *City or country? What are their reasons?* Write the reasons in two columns on the board: 👍 and 👎."),
    trueFalse(
      "Read the posts. True or false?",
      [
        ["Aliya grew up in a village.", true],
        ["Aliya thinks life in the village was more exciting.", false],
        ["Mark moved from a city to a village.", true],
        ["Mark spends more time in traffic now.", false],
        ["Kenji thinks Tokyo is too noisy.", false],
        ["Kenji's flat is very big.", false],
      ],
      {
        read: [
          "## 🏙️🌳 Forum: City or country — where would you rather live?",
          "**aliya_almaty:** I grew up in a small village near Taraz. It was beautiful and peaceful, but there was nothing to do for teenagers! 😴 The nearest cinema was 40 kilometers away. Now I live in Almaty. It's more expensive and the traffic is terrible, but life is much more exciting — concerts, cafés, my university… I'm a city girl now! 🎉",
          "**mark_in_wales:** I lived in London for 15 years. Then, two years ago, my family moved to a small village in Wales. 🏴 Best decision ever! The air is cleaner, the houses are cheaper, and I don't sit in traffic jams for two hours a day. I work online from home. The internet is slower than in London, but the view from my window is much better! 🐑",
          "**kenji_tokyo:** Tokyo is one of the biggest cities in the world, but it's not as noisy as people think — and it's very safe and clean. Public transport is the best I know: the trains are never late! 🚄 My flat is tiny — only 20 m² — but I don't care. Everything I need is a 5-minute walk away. 🍜",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How far was the nearest cinema from Aliya's village?", options: ["*40 km", "4 km", "400 km"] },
      { q: "What's worse in Mark's village than in London?", options: ["*the internet", "the air", "the houses"] },
      { q: "What does Kenji love about Tokyo?", options: ["*public transport", "his big flat", "the quiet nights"] },
      { q: "How long was Mark in traffic every day in London?", options: ["*two hours", "20 minutes", "five hours"] },
    ]),
    match("Who says it? Match.", [
      ["“I'm a city girl now!”", "Aliya"],
      ["“Best decision ever!”", "Mark"],
      ["“The trains are never late!”", "Kenji"],
      ["“There was nothing to do for teenagers.”", "Aliya"],
      ["“I work online from home.”", "Mark"],
      ["“My flat is tiny, but I don't care.”", "Kenji"],
    ]),
    text("Talk to your teacher.", "- Who do you agree with most? Why?\n- Is your city more like Aliya's Almaty, Mark's village or Kenji's Tokyo? 🤔"),
  ]),

  section("Listening: Radio phone-in", [
    ...listening(
      "Listen to a radio show. People call and give their opinion.",
      "**Host:** Good morning! Today's question: city or country — where is life better? Our first caller is Madina. Good morning, Madina!\n\n**Madina:** Good morning! I live in Astana, and for me the city is better. There are more jobs, better hospitals and better schools. My kids can choose from ten sports clubs! 🏊\n\n**Host:** But isn't the city more stressful?\n\n**Madina:** Sometimes, yes. The winter is long and cold, and the traffic is bad at 6 p.m. But I can't imagine living without theaters and shopping centers. 😄\n\n**Host:** Thank you, Madina! Our next caller is Daniyar.\n\n**Daniyar:** Hi! Well, I don't agree with Madina. I moved from Almaty to my grandfather's village last year. Life is slower and healthier. I grow my own vegetables, and I go running in the mountains every morning. 🏃\n\n**Host:** Don't you miss the city?\n\n**Daniyar:** I miss my friends and good coffee! ☕ But I go to Almaty once a month. For me, that's the perfect balance.",
    ),
    quiz("Listen and choose.", [
      { q: "Where does Madina live?", options: ["*in Astana", "in Almaty", "in a village"] },
      { q: "What's bad in Madina's city, she says?", options: ["*the long winter and the traffic", "the schools", "the hospitals"] },
      { q: "When did Daniyar move to the village?", options: ["*last year", "ten years ago", "last month"] },
      { q: "What does Daniyar miss?", options: ["*his friends and good coffee", "the theaters", "his job"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina's kids can choose from ten sports clubs.", true],
      ["Madina thinks the city is never stressful.", false],
      ["Daniyar agrees with Madina.", false],
      ["Daniyar grows his own vegetables.", true],
      ["Daniyar goes to Almaty once a week.", false],
    ]),
  ]),

  section("Video: Life in the countryside", [
    video("Watch the first 3–4 minutes. People talk about relaxing in the countryside. What do they like doing there?", "Z6pHAPhiQqM"),
    text("Talk to your teacher.", "- What do the people like about the countryside? 🌳\n- Do you go to the countryside? What do you do there?"),
  ]),

  section("Review: Module 3", [
    choose(
      "Choose.",
      "1. The city is [*noisier/more noisy] than the village.\n2. Life in the country is [*more peaceful/peacefuller].\n3. Tokyo is one of [*the biggest/the bigger] cities in the world.\n4. The internet in the village isn't as fast [*as/than] in London.\n5. Almaty is [*more expensive/expensiver] than Taraz.\n6. It's the [*best/better] decision of my life!\n7. Public transport is [*better/more good] in the city.\n8. My village is [*the most beautiful/the beautifulest] place I know.",
    ),
    gaps(
      "Complete with the right form.",
      "1. The air in the country is [cleaner] than in the city. (clean)\n2. Houses in villages are [cheaper] than in cities. (cheap)\n3. Kenji's flat is [smaller] than Mark's house. (small)\n4. For Aliya, city life is [more exciting]. (exciting)\n5. The traffic in Almaty is [worse] than in Taraz. (bad)\n6. It's [the safest] city I know. (safe)\n7. Astana isn't as [warm] as Almaty. (warm)\n8. Life in a village is [healthier] for Daniyar. (healthy)",
    ),
    drag(
      "Complete the opinion.",
      "I think the city is [better] for young people. There are [more] jobs, and life is [more] exciting. But the country is [healthier] — the air is [cleaner] and it's not [as] noisy as the city. For me, the [best] place is a small town near a big city! 🏡",
      ["good", "than", "most"],
    ),
  ]),

  section("Writing: An email with your opinion", [
    box(
      "✍️ How to give your opinion (A2 Key style)",
      "- **I think… / In my opinion… / For me…**\n- give **reasons**: *because… / The best thing is…*\n- compare: *It's cheaper / quieter / more exciting than…*\n- answer **all** the questions in the task\n- **35+ words**",
    ),
    write(
      "Your English friend Tom wrote: “My family wants to move from the city to a village. What do you think — is it a good idea? What's better about the city? What's better about the country?” Write an email to Tom. (35+ words)",
      35,
      {
        read: "*Example start:* Hi Tom! I think it's a great idea. In the country, the air is cleaner and life is more peaceful… But…",
      },
    ),
    tip("Check together: did the student answer all 3 questions? 35+ words? At least 3 comparatives? Give 1 point for each ✅."),
  ]),

  section("Let's talk: The big debate", [
    text(
      "Debate: city or country? 🎙️",
      "Your teacher chooses your side — even if you don't agree! 😄\n\n**Team City 🏙️** vs **Team Country 🌳**\n\n1. Prepare 3 reasons (1 minute).\n2. Say your reasons: *I think… because… It's better / cheaper / more… than…*\n3. Answer the other side: *That's true, but… I don't agree, because…*",
    ),
    tip("Take the other side and argue a little harder than the student — it makes them speak more. At the end, say what the student said well and 2 useful phrases they can add: *That's a good point, but… On the other hand…*"),
    text("Talk to your teacher.", "- Where do you want to live in 10 years? Why? 🏡\n- What's the best and the worst thing about your city?\n- What would make your city better? 🛠️"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "too many people =", options: ["*crowded", "peaceful", "polluted"] },
      { q: "cars can't move =", options: ["*a traffic jam", "public transport", "fresh air"] },
      { q: "The village is ___ than the city.", options: ["*quieter", "more quiet than", "the quietest"] },
      { q: "In my ___, the country is better.", options: ["*opinion", "think", "idea of"] },
    ]),
    box("Word of the day: concrete jungle", "**a concrete jungle** 🏙️🌴 = a big city with a lot of buildings and not much nature.\n\n*New York is a concrete jungle — but Central Park is beautiful!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🤫 not noisy: [quiet]\n2. 🕊️ quiet and calm: [peaceful]\n3. 👥 too many people: [crowded]\n4. 🚌🚇 buses and the metro: public [transport]\n5. 🌬️ clean air: [fresh] air\n6. 🏭 dirty air or water: [pollution]",
      ),
      match("Match the opposites.", [
        ["noisy", "quiet"],
        ["boring", "exciting"],
        ["crowded", "empty"],
        ["polluted", "clean"],
        ["cheap", "expensive"],
        ["fast", "slow"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: City vs countryside — where do you prefer to live? Listen to the speakers' reasons.", "gQaw6vP5esk"),
      write("Write 3 reasons from the video: 2 for the city and 1 for the countryside (or the other way).", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      choose(
        "Review: choose.",
        "1. My town is [*smaller/more small] than Astana.\n2. This is [*the worst/the baddest] traffic jam ever!\n3. The country isn't as [*exciting/more exciting] as the city.\n4. Is life [*healthier/more healthy] in a village?\n5. Almaty is the [*biggest/bigger] city in Kazakhstan.\n6. The air here is [*cleaner/more clean] than in my city.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write a forum post: “Where would you rather live — in a city or in the country?” Give 3 reasons and compare. (60+ words)", 60),
      record("Record your opinion: city or country? Give 3 reasons. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
