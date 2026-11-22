import {
  box,
  choose,
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

// 1.4 Practical English: At the hotel — checking in, a problem in the room, polite requests (Can / Could you…?); role-play. No new grammar.
export default lesson("a2-1.4", "Practical: At the hotel", () => [
  section("Warm-up: Hotel or hostel?", [
    box("Today you will…", "- check in at a hotel 🏨\n- ask politely: *Could you…? Could I…?*\n- complain about a problem in the room 😤➡️🙂"),
    picture("A hotel reception", ["photos/hotel-reception.jpg"], "The reception desk of a hotel in Stockholm, Sweden 🇸🇪"),
    text(
      "Talk about the photo.",
      "- Who works here? What do guests do at the reception? 🛎️\n- Hotel, hostel or apartment — where do you like to stay? Why?\n- What's important for you in a hotel: breakfast, Wi-Fi, a pool, the view? 🍳📶🏊🌇",
    ),
  ]),

  section("Vocabulary: At the hotel", [
    words("At the hotel", [
      ["a reservation — a booking", "📅 I have a reservation for two nights."],
      ["check in — check out", "🛎️ arrive — 🚪 leave", "Check-out is at 12."],
      ["a single / double / twin room", "🛏️ / 🛏️👫 / 🛏️🛏️"],
      ["the reception — a receptionist", "🛎️🙂"],
      ["a key card", "💳🔑"],
      ["breakfast is included", "🍳✅ = you don't pay extra"],
      ["the lift — the elevator", "🛗 🇬🇧 lift · 🇺🇸 elevator"],
      ["the air conditioning", "❄️ 🇺🇸 AC"],
      ["a towel", "🧺"],
      ["room service", "🍽️🚪 food to your room"],
      ["noisy — dirty — broken", "📢 — 🗑️ — 💔"],
      ["a late checkout", "⏰ leave later than 12"],
    ]),
    picture("A hotel room", ["photos/hotel-room.jpg"], "A double room: a big bed for two people 🛏️"),
    match("Match.", [
      ["check", "in"],
      ["a key", "card"],
      ["room", "service"],
      ["the air", "conditioning"],
      ["breakfast is", "included"],
    ]),
    quiz("Choose.", [
      { q: "A room with two beds:", options: ["*a twin room", "a single room", "a double room"] },
      { q: "🇺🇸 elevator = 🇬🇧 …", options: ["*lift", "stairs", "hall"] },
      { q: "You leave the hotel. You…", options: ["*check out", "check in", "book"] },
    ]),
  ]),

  section("Useful phrases: Polite requests", [
    table("requests"),
    sort("Guest or receptionist? Who says it? Sort. 🧳🛎️", {
      "🧳 Guest": ["I have a reservation.", "Could I have a late checkout?", "The AC doesn't work."],
      "🛎️ Receptionist": ["Can I see your passport?", "Here's your key card.", "Enjoy your stay!"],
    }),
    choose(
      "Choose the more polite request.",
      "1. [*Could you/You must] call a taxi for me, please?\n2. [*Could I/I want to] have an extra towel?\n3. [*Would you mind/Please you] waiting a moment?",
    ),
    gaps("Complete the requests.", "1. [Could] you help me with my bags, please?\n2. Could I [have] a room with a view?\n3. Can you [wake] me up at 7, please?"),
  ]),

  section("Dialogue: Checking in", [
    tip("Read the dialogue with the student: you are the receptionist. Then change roles."),
    gaps(
      "Read the dialogue. Complete the booking card.",
      "🏨 Guest: [Aigerim Bekova]\n🛏️ Room: [double/a double room/double room]\n🌙 Nights: [three/3]\n🍳 Breakfast: [7–10/7-10/from 7 to 10]\n🔢 Room number: [512]",
      {
        read: [
          "## 🛎️ At the reception",
          "**Receptionist:** Good evening! Welcome to the Sea View Hotel. How can I help you?",
          "**Aigerim:** Hi! I have a reservation. My name is Aigerim Bekova.",
          "**Receptionist:** Let me check… Yes, a double room for three nights. Could I see your passport, please?",
          "**Aigerim:** Sure, here you are.",
          "**Receptionist:** Thank you. Breakfast is included — it's from 7 to 10 on the first floor.",
          "**Aigerim:** Great! Could I have a room with a sea view?",
          "**Receptionist:** Let me see… Yes, room 512 has a sea view. Here's your key card. The lift is on the left.",
          "**Aigerim:** Thank you! And what's the Wi-Fi password?",
          "**Receptionist:** It's on the card. Enjoy your stay!",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Aigerim doesn't have a reservation.", false],
      ["Breakfast is included.", true],
      ["The lift is on the right.", false],
    ]),
    order(
      "Put the dialogue in order.",
      ["Good evening! How can I help you?\nHi! I have a reservation for two nights.\nWhat's your name, please?\nLeo Costa.\nHere's your key card. Enjoy your stay!"],
      "lines",
    ),
  ]),

  section("Listening: A problem in the room", [
    ...listening(
      "Listen. Aigerim calls the reception from her room.",
      "**Receptionist:** Reception, good evening.\n\n**Aigerim:** Hi, this is room 512. I'm sorry, but there's a problem. The air conditioning doesn't work, and it's very hot in the room. 🥵\n\n**Receptionist:** Oh, I'm sorry about that. Could you wait ten minutes? I'll send someone to fix it.\n\n**Aigerim:** OK, thank you. And there aren't any towels in the bathroom.\n\n**Receptionist:** I'm very sorry. We'll bring some towels right away.\n\n**Aigerim:** Thanks. Oh, and one more thing — could I have a late checkout on Sunday? My flight is at 6 p.m.\n\n**Receptionist:** Yes, no problem. You can check out at 2.\n\n**Aigerim:** Perfect. Thank you very much!",
    ),
    quiz("Listen and choose.", [
      { q: "What's the first problem?", options: ["*The AC doesn't work.", "The room is dirty.", "The TV is broken."] },
      { q: "What's missing in the bathroom?", options: ["*towels", "soap", "a mirror"] },
      { q: "When can Aigerim check out on Sunday?", options: ["*at 2", "at 12", "at 6"] },
    ]),
    gaps("Listen again. Complete Aigerim's phrases.", "1. I'm sorry, but there's a [problem].\n2. The air conditioning doesn't [work].\n3. [Could] I have a late checkout?"),
  ]),

  section("Video: At a hotel", [
    video("Watch an easy hotel conversation. What does the guest ask for?", "1IP-3kudS80"),
    text("Talk to your teacher.", "- What questions does the guest ask?\n- What phrases from today's lesson do you hear? 👂"),
  ]),

  section("Let's talk: Hotel role-play", [
    text(
      "Role-play: the hotel 🎭",
      "**1. Check in.** Student A — the receptionist: greet, ask for the name and passport, give the key card, tell about breakfast.\nStudent B — the guest: say you have a reservation, ask for a room with a view and the Wi-Fi password.\n\n**2. A problem.** The guest calls the reception: *I'm sorry, but… doesn't work / there isn't any…* The receptionist apologizes and helps.\n\nThen change roles! Use *Could you…? Could I…?* 🙂",
    ),
    text("Talk to your teacher.", "- What was your best hotel? Your worst? 🏨\n- Do you read hotel reviews before you book? ⭐\n- What do you ask for at a hotel? (late checkout, extra pillow, a quiet room…)"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "More polite:", options: ["*Could you call a taxi, please?", "Call a taxi.", "You call a taxi."] },
      { q: "You arrive at a hotel. You…", options: ["*check in", "check out", "book out"] },
      { q: "A problem: “The AC…”", options: ["*doesn't work", "isn't working well please", "not work"] },
    ]),
    box("Word of the day: staycation", "**a staycation** 🏨🏙️ = a holiday in your own city — for example, a weekend in a hotel near your home.\n\n*No money for a big trip? Let's have a staycation!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. I have a [reservation] for two nights.\n2. Check-[out] is at 12.\n3. A room with two beds is a [twin] room.\n4. 🇺🇸 elevator = 🇬🇧 [lift]"),
      choose("Choose.", "1. [*Could/Do] you help me?\n2. [*Could I/Can you I] have a towel?\n3. The Wi-Fi [*doesn't/isn't] work."),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch a hotel check-in conversation (A1–A2).", "FZ2T2m0zldk"),
      write("Write 3 polite requests you can use at a hotel: Could you…? Could I…?", 15),
    ],
    "Homework: Video",
  ),
  homework(
    [
      trueFalse(
        "Read the hotel review. True or false?",
        [
          ["The guest liked the location.", true],
          ["Breakfast wasn't included.", false],
          ["The room was quiet.", false],
          ["The staff fixed the problem.", true],
        ],
        { read: "⭐⭐⭐⭐ **Great location, noisy room** — *The hotel is in the center, near the old town. Breakfast was included and delicious! 🥐 Unfortunately, our first room was very noisy — there was a bar under the window. 🎶 We called the reception and they gave us a new room on the 6th floor. The staff were very kind. I recommend it!*" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write an email to a hotel: you have a reservation; ask for 2 things and ask 1 question. (40+ words)", 40, {
        read: "*Example:* Dear Sea View Hotel, I have a reservation for a double room from 5 to 8 July. Could I have a room with a sea view, please? Could you also book a taxi from the airport for me? My flight arrives at 10 p.m. Is breakfast included? Thank you! Best wishes, Dana Seitova",
      }),
      record("Record a voice message to the reception: there's a problem in your room. Explain it politely and ask for help.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
