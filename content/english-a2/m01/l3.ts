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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.3 Travel fails — skills lesson: reading travel stories, a video, writing a short story (A2 Key style); review of Past Simple.
export default lesson("a2-1.3", "Travel fails", () => [
  section("Warm-up: Travel stories", [
    box("Today you will…", "- read and watch funny travel stories ✈️😅\n- tell a story with *first, then, after that, in the end*\n- write a short story (like in the A2 Key exam)"),
    text(
      "Talk to your teacher.",
      "- When did you last travel? Where did you go? 🧳\n- Did anything go wrong? 😬\n- What's the worst thing that can happen on a trip?\n- Do you pack the night before or one hour before? ⏰😄",
    ),
  ]),

  section("Vocabulary: When things go wrong", [
    words("Travel problems", [
      ["miss a flight / a train", "🛫❌ arrive too late"],
      ["lose your luggage / passport", "🧳❓"],
      ["get lost", "🗺️😵 not know where you are"],
      ["forget", "🧠❌ — forgot", "I forgot my charger at home."],
      ["break — broke", "💔", "My suitcase broke."],
      ["fall asleep — fell asleep", "😴"],
      ["wake up late — woke up late", "⏰😱"],
      ["a delay — delayed", "⏳", "Our flight was delayed for five hours."],
      ["luckily — unfortunately", "🍀 — 😞", "Unfortunately, it started to rain."],
      ["first — then — after that — in the end", "1️⃣ 2️⃣ 3️⃣ 🏁 words to tell a story"],
    ]),
    match("Match.", [
      ["miss", "a flight"],
      ["lose", "your passport"],
      ["get", "lost"],
      ["fall", "asleep"],
      ["wake up", "late"],
      ["take", "the next flight"],
      ["the flight", "was delayed"],
    ]),
    gaps("Write the past.", "1. forget → [forgot]\n2. break → [broke]\n3. fall → [fell]\n4. wake → [woke]\n5. lose → [lost]\n6. get → [got]\n7. leave → [left]\n8. sit → [sat]"),
    sort("Good news or bad news? Sort. 🍀😞", {
      "🍀 Good news": ["Luckily, we found a hotel.", "The airline found my bag.", "We got a free upgrade.", "A kind man helped us.", "The sun came out."],
      "😞 Bad news": ["Unfortunately, it rained.", "Our flight was delayed.", "I lost my passport.", "We missed the train.", "My phone died."],
    }),
  ]),

  section("Reading: My worst trip", [
    tip("Three stories from a travel forum. Read one at a time; ask *What went wrong? How did it end?* Then vote: which trip was the worst? 🏆"),
    quiz(
      "Read the stories. Choose.",
      [
        { q: "Why did Ali miss his flight?", options: ["*He fell asleep at the airport.", "He lost his passport.", "The taxi was late."] },
        { q: "What did Ali do in the end?", options: ["*He took the next flight.", "He went home.", "He took a train."] },
        { q: "Why did Sofia get lost?", options: ["*Her phone died.", "She lost her map.", "She took the wrong bus."] },
        { q: "What happened to Ben's suitcase?", options: ["*It went to another country.", "It broke.", "He forgot it in a taxi."] },
      ],
      {
        read: [
          "## ✈️ Forum: Tell us about your worst trip!",
          "**ali_travels:** Last year I flew to Istanbul. I arrived at the airport early, so I sat down near my gate… and I fell asleep! 😴 When I woke up, my plane wasn't there. I missed my flight! Luckily, there was another flight three hours later. I didn't sleep on that one! ☕☕☕",
          "**sofia_ok:** In Rome, I used a map app to find my hotel. Then my phone died — 0%! 🔋 I didn't know the address, and I couldn't speak Italian. I walked for two hours. In the end, a kind old man helped me — he called the hotel and walked with me! 🙏",
          "**ben.backpack:** My flight to Barcelona was fine. My suitcase had a different plan — it went to Moscow! 🧳 I waited three days for it. I bought new clothes, and when the suitcase came back, I had two of everything! 😂",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Ali arrived at the airport late.", false],
      ["Sofia couldn't speak Italian.", true],
      ["A woman helped Sofia.", false],
      ["Ben waited three days for his suitcase.", true],
      ["Ben's suitcase went to Moscow.", true],
      ["Ali slept on the second flight.", false],
    ]),
    order("Put Ali's story in order.", ["Ali arrived at the airport early.\nHe sat down near his gate.\nHe fell asleep.\nHe missed his flight.\nHe took the next flight."], "lines"),
    match("Who said it? Match.", [
      ["“I didn't sleep on that one!”", "Ali"],
      ["“A kind old man helped me.”", "Sofia"],
      ["“I had two of everything!”", "Ben"],
      ["“My phone died — 0%!”", "Sofia"],
      ["“I waited three days.”", "Ben"],
      ["“My plane wasn't there.”", "Ali"],
    ]),
    text("Talk to your teacher.", "- Whose trip was the worst? Why? 🏆\n- What did these people do right? What can you learn from them? 💡"),
  ]),

  section("Video: Travel fails", [
    video("Watch the first 3–4 minutes: a traveler's biggest fails. What went wrong?", "QBxbTaBFv7M"),
    quiz("After the video: choose.", [
      { q: "What kinds of problems are in the video?", options: ["*lost luggage and language problems", "only problems with food", "only problems with money"] },
    ]),
    text("Talk to your teacher.", "- What was the funniest fail in the video? 😂\n- What tip from the video is useful for you?"),
    tip("Natural fast English — it's OK to understand the main idea. Pause after each story and ask *What happened?*"),
  ]),

  section("Review: Past Simple", [
    choose(
      "Choose.",
      "1. We [*missed/missd] the train.\n2. I [*didn't find/didn't found] my passport.\n3. [*Did/Was] you get lost?\n4. Who [*helped/did help] Sofia?\n5. My phone [*died/dead] in the middle of the city.\n6. Where [*did Ben's suitcase go/went Ben's suitcase]?\n7. Ali [*fell/falled] asleep at the gate.\n8. They [*didn't speak/didn't spoke] Italian.",
    ),
    gaps("Complete with the past.", "1. I [forgot] my charger. (forget)\n2. My suitcase [broke]. (break)\n3. We [woke] up late. (wake)\n4. He [fell] asleep at the airport. (fall)\n5. They [lost] their tickets. (lose)\n6. We [got] lost in the old town. (get)\n7. She [left] her bag on the bus. (leave)\n8. I [didn't sleep/did not sleep] on the plane. (not sleep)"),
    drag(
      "Complete the story with story words.",
      "[First], we arrived at the station. [Then] we saw that our train was delayed. [After] that, we had lunch in a café. [Unfortunately], it started to rain. [Luckily], we had umbrellas! [In] the end, we arrived five hours late — but happy! 😄",
      ["Last", "Before", "Suddenly"],
    ),
  ]),

  section("Writing: A short story", [
    box(
      "✍️ How to write a short story (A2 Key style)",
      "- **35+ words**\n- use the **Past Simple**\n- story words: *first, then, after that, in the end*\n- feelings: *I was happy / tired / scared*\n- a good ending! *Luckily… / In the end…*",
    ),
    write("Write a story about a trip that went wrong (real or invented). Use first, then, after that, in the end. (35+ words)", 35, {
      read: "*Example:* Last summer I went to the sea with my friends. First, we missed our bus. Then it started to rain! After that, we found a small café and played cards for three hours. In the end, the sun came out and we swam in the sea. It was a great day!",
    }),
    tip("Check the story together: Past Simple forms, story words, a clear ending. Read the best sentence out loud. 🌟"),
  ]),

  section("Let's talk: Story time", [
    text(
      "Story chain 🔗",
      "Tell a travel story together — one sentence each!\n\n*Teacher:* Last year I went to Paris.\n*You:* First, I…\n*Teacher:* Then…\n\nUse *first, then, after that, unfortunately, luckily, in the end*. Make it funny! 😄",
    ),
    text("Talk to your teacher.", "- What do you always take on a trip? 🎒\n- Plane, train or car — what's your favorite? Why?\n- What's your dream trip? 🌍"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "arrive too late for your plane =", options: ["*miss a flight", "lose a flight", "get a flight"] },
      { q: "fall → …", options: ["*fell", "falled", "fall"] },
      { q: "A good last sentence starts with…", options: ["*In the end,", "First,", "Then"] },
      { q: "I ___ my charger at home. 🔌", options: ["*forgot", "lost", "missed"] },
    ]),
    box("Word of the day: the travel bug", "**the travel bug** 🐞✈️ = a strong wish to travel again and again.\n\n*After my trip to Japan, I caught the travel bug!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. I [missed] my train. 🚆❌\n2. We got [lost] in the old town.\n3. The flight was [delayed] for two hours. ⏳\n4. [Luckily], a kind man helped us. 🍀\n5. I [forgot] my charger at home. 🔌\n6. My suitcase [broke] at the airport. 💔"),
      choose("Choose.", "1. I [*forgot/forgetted] my passport!\n2. [*Did/Do] you lose your bag?\n3. He [*didn't miss/didn't missed] the bus.\n4. We [*woke/waked] up late.\n5. She [*fell/felt] asleep on the train.\n6. [*Unfortunately/Luckily], it rained all week. 😞"),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      ...listening(
        "Listen. Mia tells her friend about a trip.",
        "**Leo:** How was your trip to London, Mia?\n\n**Mia:** Terrible at first! The flight was delayed for four hours. Then, at the airport, I couldn't find my bag.\n\n**Leo:** Oh no! Did you find it?\n\n**Mia:** Yes, luckily. It was on the wrong belt! 😅 After that, I took the Tube to my hotel… and I got lost.\n\n**Leo:** In London? With a map app?\n\n**Mia:** My phone died! In the end, I asked a police officer. He was very kind.\n\n**Leo:** And the rest of the trip?\n\n**Mia:** Amazing! I saw Big Ben, and I went to a musical. I want to go back!",
      ),
      quiz("Listen and choose.", [
        { q: "How long was the delay?", options: ["*four hours", "two hours", "one hour"] },
        { q: "Where was Mia's bag?", options: ["*on the wrong belt", "in Paris", "in the taxi"] },
        { q: "Who helped Mia?", options: ["*a police officer", "a taxi driver", "a shop assistant"] },
        { q: "What did Mia see in London?", options: ["*Big Ben and a musical", "a football match", "the Tower only"] },
      ]),
      video("Bonus: the 20 funniest travel mistakes.", "9jWW0fZ5aT0"),
    ],
    "Homework: Listening and video",
  ),
  homework(
    [
      write("Write a forum post: “My worst (or best) trip”. What happened? How did it end? (60+ words)", 60),
      record("Record your travel story (1 minute). Use first, then, after that, in the end.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
