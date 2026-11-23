import {
  box,
  choose,
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

// 11.4 Practical English: At the airport — check-in, security, the departure board, delays and lost luggage; a long listening (announcements + conversations, ~2 min); the module's only class video; role-play.
export default lesson("a2-11.4", "Practical: At the airport", () => [
  section("Warm-up: Airport stories", [
    box("Today you will…", "- check in, go through security and find your gate ✈️\n- understand airport announcements 📢\n- solve problems: a delay, a missed flight, a lost bag 🧳"),
    order(
      "What happens first? Put the steps at the airport in order. ✈️",
      ["check in and drop your bag\ngo through security\nwait at the gate\nboard the plane\nland and collect your bag at baggage reclaim"],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Do you like airports, or are they stressful for you? Why? 😰✈️\n- What's your best or worst airport story? (a delay, a lost bag, a missed flight…) 😅\n- Window or aisle seat? Why? 🪟\n- What do you always take in your hand luggage? 🎒",
    ),
    tip("Tell a short airport story of your own first — everyone has one! Note the student's words for the problems; they'll come back in the role-play."),
  ]),

  section("Vocabulary: At the airport", [
    words("At the airport", [
      ["check in — the check-in desk", "🛄"],
      ["a boarding pass", "🎫 the ticket you show to get on the plane"],
      ["hand luggage — checked luggage", "🎒 with you on the plane — 🧳 in the plane's hold · 🇺🇸 carry-on / checked baggage"],
      ["a window seat — an aisle seat", "🪟 — 🚶 next to the walkway"],
      ["security", "🔐 where they check your bags"],
      ["passport control", "🛂"],
      ["the departure board", "📋 the screen with flights and gates"],
      ["the gate", "🚪✈️ where you get on the plane"],
      ["board — boarding", "✈️🚶 get on the plane"],
      ["delayed — canceled", "⏳ late — ❌ not happening · 🇬🇧 cancelled"],
      ["a connecting flight — miss a connection", "🔁✈️ the second flight of your trip"],
      ["baggage reclaim", "🧳🔄 where you collect your bags after the flight · 🇺🇸 baggage claim"],
    ]),
    match("Match.", [
      ["a boarding", "pass"],
      ["hand", "luggage"],
      ["an aisle", "seat"],
      ["passport", "control"],
      ["the departure", "board"],
      ["miss a", "connection"],
    ]),
    gaps(
      "Complete.",
      "1. You get your boarding [pass] at the check-in desk. 🎫\n2. Liquids in your hand [luggage] must be under 100 ml. 🎒\n3. I prefer an [aisle] seat — I can stand up easily. 🚶\n4. Our flight is [delayed] for two hours. ⏳\n5. Check the departure [board] to find your gate. 📋\n6. Flight KC 911 is now [boarding] at gate 12. ✈️\n7. After the flight, collect your bags at baggage [reclaim/claim]. 🧳\n8. Our first flight was late, so we [missed] our connection. 🔁",
    ),
  ]),

  section("Useful phrases: Window or aisle?", [
    table("airport"),
    sort("Who says it? Sort. 🛄🙋", {
      "🛄 airport staff": ["Can I see your passport, please?", "Window or aisle?", "Please put your laptop in a separate tray.", "Boarding is at gate 7."],
      "🙋 passenger": ["Can I have a window seat, please?", "Is the flight on time?", "My bag didn't arrive.", "Where's gate 7?"],
    }),
    choose(
      "Choose.",
      "1. Can I [*see/look] your passport, please?\n2. How many bags are you [*checking in/checking]?\n3. Your flight is [*delayed/late delayed] by one hour.\n4. Please [*take off/take out] your belt and shoes.\n5. Flight 911 is now [*boarding/boarded] at gate 12.\n6. My bag didn't [*arrive/arrived].\n7. Is this [*your/yours] bag, sir?\n8. Excuse me, where's [*gate 12/the gate 12]?",
    ),
  ]),

  section("Reading: The departure board", [
    tip("Read the departure board like a real screen. Ask fast questions: *What time does the flight to Istanbul leave? Which flight is canceled? Which gate for Seoul?*"),
    quiz(
      "Look at the departure board at Almaty Airport. Choose.",
      [
        { q: "Which flight is canceled?", options: ["*the flight to Dubai", "the flight to Istanbul", "the flight to Seoul"] },
        { q: "What's the new time for the Istanbul flight?", options: ["*15:40", "14:10", "16:55"] },
        { q: "Which flight is boarding now?", options: ["*Astana", "Tashkent", "Seoul"] },
        { q: "What gate is the flight to Seoul?", options: ["*B8", "A3", "C1"] },
        { q: "Which flight is on time and leaves last?", options: ["*Tashkent", "Astana", "Seoul"] },
      ],
      {
        read: [
          "## 📋 Almaty International Airport — Departures",
          "**13:25** · ✈️ **Astana** · KC 851 · Gate **A3** · 🟢 **Boarding**",
          "**14:10** · ✈️ **Istanbul** · TK 351 · Gate **C1** · 🟠 **Delayed — new time 15:40**",
          "**14:45** · ✈️ **Dubai** · FZ 1726 · Gate — · 🔴 **Canceled**",
          "**15:20** · ✈️ **Seoul** · KC 909 · Gate **B8** · 🟢 On time",
          "**16:55** · ✈️ **Tashkent** · HY 762 · Gate **A6** · 🟢 On time",
        ].join("\n\n"),
      },
    ),
    trueFalse("Look again. True or false?", [
      ["The flight to Astana is boarding now.", true],
      ["The flight to Istanbul leaves at 14:10.", false],
      ["There's no gate for the Dubai flight.", true],
      ["The flight to Seoul is delayed.", false],
      ["The flight to Tashkent leaves from gate A6.", true],
    ]),
    gaps(
      "Complete the announcements.",
      "1. Flight KC 851 to Astana is now [boarding] at gate A3.\n2. Flight TK 351 to Istanbul is [delayed]. The new time is 15:40.\n3. Flight FZ 1726 to Dubai is [canceled/cancelled]. We apologize.\n4. Passengers to Seoul, please go to [gate] B8.\n5. Please have your boarding [pass] and passport ready.\n6. Flight HY 762 to Tashkent is on [time].",
    ),
  ]),

  section("Listening: A day at the airport", [
    tip("A long listening — about 2 minutes: announcements and two conversations. First listen: *What problems does Kenji have?* Second listen: numbers, gates, times."),
    ...listening(
      "Listen. Kenji is flying from Almaty to Tokyo with a connection in Seoul.",
      "**Narrator:** Almaty Airport, check-in desk.\n\n**Woman:** Good morning! Where are you flying today?\n\n**Kenji:** To Tokyo, with a connection in Seoul.\n\n**Woman:** Can I see your passport, please? Thank you. How many bags are you checking in?\n\n**Kenji:** Just one. And this small backpack is my hand luggage.\n\n**Woman:** Window or aisle?\n\n**Kenji:** Window, please. I love watching the mountains.\n\n**Woman:** Here's your boarding pass. Your bag will go straight to Tokyo. Boarding is at gate B8 at two forty-five.\n\n**Announcer:** Attention, please. Flight KC 909 to Seoul is delayed by one hour. We apologize for the delay.\n\n**Narrator:** Tokyo, Narita Airport, baggage reclaim. Fourteen hours later.\n\n**Kenji:** Excuse me, my bag didn't arrive. I've waited for forty minutes.\n\n**Man:** I'm sorry about that. Your first flight was late, so maybe your bag missed the connection in Seoul. Can you describe it?\n\n**Kenji:** It's a big blue suitcase, with a sticker of a kangaroo on it. 🦘\n\n**Man:** OK. Please fill in this form with your address. We'll find it and send it to your home, usually in one or two days.\n\n**Kenji:** Two days? But my clothes are in it!\n\n**Man:** You can buy what you need and keep the receipts. The airline will pay you back.\n\n**Kenji:** OK… Thank you. Well, at least I have my toothbrush in my backpack! 😅",
    ),
    quiz("Listen and choose.", [
      { q: "Where does Kenji change planes?", options: ["*in Seoul", "in Astana", "in Istanbul"] },
      { q: "What seat does Kenji want?", options: ["*a window seat", "an aisle seat", "a seat near the exit"] },
      { q: "How long was the delay?", options: ["*one hour", "two hours", "thirty minutes"] },
      { q: "What's on Kenji's suitcase?", options: ["*a sticker of a kangaroo", "his name in big letters", "a red ribbon"] },
      { q: "When will Kenji usually get his bag?", options: ["*in one or two days", "in one hour", "next week"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji is checking in two bags.", false],
      ["His bag will go straight to Tokyo.", true],
      ["Boarding is at gate B8.", true],
      ["Kenji's suitcase is small and red.", false],
      ["The airline will pay for things he needs to buy.", true],
      ["Kenji has his toothbrush with him.", true],
    ]),
    gaps(
      "Listen again. Complete the phrases.",
      "1. Where are you [flying] today?\n2. How many bags are you [checking] in?\n3. Window or [aisle]?\n4. Flight KC 909 to Seoul is [delayed] by one hour.\n5. Excuse me, my bag didn't [arrive].\n6. Please [fill] in this form.",
    ),
  ]),

  section("Video: At the airport", [
    video("Watch an airport conversation in easy English. What does the passenger ask? What problems are there?", "juPlEnOKl48"),
    text("Talk to your teacher.", "- Which phrases from today's lesson do you hear? 👂\n- What's the most useful phrase for you from the video?"),
  ]),

  section("Let's talk: Airport role-play", [
    text(
      "Role-play: at the airport 🎭",
      "**1. Check-in.** The staff member asks for the passport, the number of bags, window or aisle, and gives the gate and time.\n\n**2. A problem — choose one:**\n- ⏳ your flight is delayed and you'll miss your connection;\n- ❌ your flight is canceled — ask about the next one;\n- 🧳 your bag didn't arrive — describe it (color, size, what's on it).\n\n**3. Change roles!** Use *Can I…? Could you…? My flight is… My bag didn't…*",
    ),
    text(
      "Talk to your teacher.",
      "- What's the longest flight you've ever had? How did you spend the time? ✈️⏳\n- What do you do when your flight is delayed? 📱📚😴\n- Have you ever lost your luggage? What happened?\n- Which airport in the world would you like to see? (some have gardens, cinemas and pools!) 🌴",
    ),
    tip("*If you have time:* be the airport announcer 📢 — the student reads an announcement in a “radio voice”: *Attention, please. Flight 777 to Paris is now boarding at gate 5.* Then you announce a funny delay! 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "the ticket you show to get on the plane =", options: ["*a boarding pass", "a passport", "a receipt"] },
      { q: "get on the plane =", options: ["*board", "check in", "land"] },
      { q: "where you collect your bags =", options: ["*baggage reclaim", "security", "the gate"] },
      { q: "Window or ___?", options: ["*aisle", "corridor", "door"] },
    ]),
    box("Word of the day: jet set", "**the jet set** ✈️🥂 = rich people who travel a lot for fun.\n\n*Private planes, five-star hotels — she's part of the jet set!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🎫 your ticket for the plane: a boarding [pass]\n2. 🎒 the bag you take on the plane: hand [luggage]\n3. 🚪✈️ where you get on the plane: the [gate]\n4. ⏳ late: [delayed]\n5. ❌ not happening: [canceled/cancelled]\n6. 🔁 the second flight of your trip: a connecting [flight]",
      ),
      choose(
        "Choose.",
        "1. Can I have a window [*seat/place], please?\n2. How many bags are you [*checking in/checking out]?\n3. My flight was canceled, so I [*missed/lost] my connection.\n4. Please go to [*gate 9/the gate 9].\n5. My bag didn't [*arrive/arrived].\n6. We [*board/boarding] in 10 minutes.",
      ),
    ],
    "Homework: Vocabulary and phrases",
  ),
  homework(
    [
      trueFalse(
        "Read the email from the airline. True or false?",
        [
          ["Kenji's bag was in Seoul.", true],
          ["The bag will arrive at his home tomorrow.", true],
          ["Kenji has to go back to the airport.", false],
          ["He can buy clothes and the airline will pay.", true],
          ["He needs to keep his receipts.", true],
        ],
        { read: "📧 **From: SkyAsia Baggage Service**\n\nDear Mr. Tanaka, good news! We have found your blue suitcase. It missed the connection in Seoul because of the delay. It will arrive in Tokyo tonight, and a driver will bring it to your home tomorrow between 10 a.m. and 2 p.m. You don't have to come to the airport. Please keep the receipts for anything you bought — we will pay you back. We are sorry for the problem. Best regards, SkyAsia" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Your bag didn't arrive. Write a message to the airline: your flight, what your bag looks like, what's in it and where they should send it. (40+ words)", 40, {
        read: "*Example:* Hello, I flew from Almaty to Istanbul yesterday on flight TK 351, but my bag didn't arrive. It's a medium black suitcase with a red ribbon on the handle. 🧳 My clothes and a present for my friend are in it. Please send it to my hotel: Sea View Hotel, room 512. Thank you!",
      }),
      record("Record a 1-minute “airport survival guide”: give 3 tips for someone who's flying for the first time. ✈️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
