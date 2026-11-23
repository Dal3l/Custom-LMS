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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 9.4 Practical English: Taxi or metro? — taking a taxi, buying a metro ticket, Can you stop here, please?; role-play. No new grammar.
export default lesson("a1-9.4", "Practical: Taxi or metro?", () => [
  section("Warm-up: Yellow cabs", [
    box("Today you will…", "- take a taxi in English 🚕\n- buy a metro ticket 🎫\n- say *Can you stop here, please?*"),
    picture("Look at the photo.", ["photos/tr-taxi.jpg"], "Taxis at an airport in New York 🇺🇸"),
    text(
      "Talk to your teacher.",
      "- How do you get to the airport or the station: taxi, metro, bus? Why? 🚕🚇\n- Do you use taxi apps? Are taxis expensive in your city? 📱💸\n- What's good and what's bad about transport in your city? 🤔",
    ),
  ]),

  section("Vocabulary: Taxi and metro", [
    words("In a taxi", [
      ["Where to?", "🚕 the driver asks: where do you want to go?"],
      ["Can you take me to…, please?", "📍", "Can you take me to the airport, please?"],
      ["the address", "🏠 the street and number"],
      ["How long does it take?", "⏱️ how many minutes?"],
      ["Can you stop here, please?", "🛑🙂"],
      ["How much is it?", "💰"],
      ["Keep the change.", "💵🙂 = the extra money is for you"],
      ["a receipt", "🧾 a paper with the price"],
    ]),
    words("In the metro", [
      ["a single ticket — a return ticket", "➡️ one way — ↔️ there and back · 🇺🇸 one-way / round-trip"],
      ["a ticket machine", "🏧🎫"],
      ["a platform", "🚉 where you wait for the train"],
      ["Which line goes to…?", "〰️❓"],
      ["the next stop", "⏭️", "The next stop is Central Station."],
      ["the exit", "🚪 🇺🇸 also: the way out · 🇬🇧 Way Out"],
    ]),
    match("Taxi or metro? Match the questions and the answers.", [
      ["Where to?", "To the Grand Hotel, please."],
      ["How long does it take?", "About 20 minutes."],
      ["Which line goes to the airport?", "The green line."],
      ["A single or a return?", "A return, please."],
      ["How much is it?", "It's 12 dollars."],
    ]),
    choose(
      "Choose.",
      "1. Can you [*take/bring] me to the airport, please?\n2. Can you [*stop/finish] here, please?\n3. A [*single/one] ticket: one way only.\n4. You wait for the train on the [*platform/street].",
    ),
  ]),

  section("Dialogue: In a taxi", [
    tip("Read the dialogue with the student: you are the driver. Then change roles. Show a real address on a map app if you can."),
    gaps(
      "Read the dialogue. Complete the trip.",
      "📍 From: [the airport/airport]\n🏨 To: [the Grand Hotel/Grand Hotel]\n⏱️ Time: about [25] minutes\n💰 Price: $[23]\n🛑 He stops: next to the [café]",
      {
        read: [
          "## 🚕 From the airport",
          "**Driver:** Hi! Where to?",
          "**Leo:** Hello! Can you take me to the Grand Hotel, please? It's on Park Street.",
          "**Driver:** Sure. Can I put your bag in the trunk?",
          "**Leo:** Yes, please. How long does it take?",
          "**Driver:** About 25 minutes. There's a traffic jam on the bridge. 😩",
          "**Leo:** OK, no problem.",
          "**…25 minutes later…**",
          "**Leo:** Oh, that's the hotel! Can you stop here, please, next to the café?",
          "**Driver:** Sure. That's 23 dollars.",
          "**Leo:** Here's 25. Keep the change!",
          "**Driver:** Thanks! Have a nice stay! 👋",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["The hotel is on Park Street.", true],
      ["There's a traffic jam on the bridge.", true],
      ["Leo pays 23 dollars and takes the change.", false],
    ]),
    order(
      "Put the dialogue in order.",
      ["Hi! Where to?\nCan you take me to the train station, please?\nSure.\nCan you stop here, please?\nOK. That's 10 dollars.\nHere you are. Thank you!"],
      "lines",
    ),
  ]),

  section("Listening: At the ticket machine", [
    ...listening(
      "Listen. Mia buys a metro ticket.",
      "**Mia:** Excuse me, can you help me? I can't use this ticket machine. 😟\n\n**Man:** Sure! Where do you want to go?\n\n**Mia:** To the City Museum.\n\n**Man:** OK. Take the blue line. It's five stops. A single or a return?\n\n**Mia:** A return, please. I want to come back to the hotel.\n\n**Man:** Press here… a return ticket is three dollars. You can pay by card.\n\n**Mia:** Great. And which platform is it?\n\n**Man:** Platform 2. Go down the stairs and turn left.\n\n**Mia:** Thank you so much!",
    ),
    quiz("Listen and choose.", [
      { q: "Mia goes to…", options: ["*the City Museum", "the airport", "the hotel"] },
      { q: "Which line?", options: ["*the blue line", "the green line", "the red line"] },
      { q: "What ticket does she buy?", options: ["*a return", "a single", "a travel card for a week"] },
      { q: "The platform is…", options: ["*platform 2", "platform 5", "platform 3"] },
    ]),
  ]),

  section("Video: Taking a taxi", [
    video("Watch an easy taxi conversation. What phrases do you hear?", "QTqG45KzS0M"),
    text("Talk to your teacher.", "- Where does the passenger go?\n- What phrases from the lesson do you hear? 👂"),
  ]),

  section("Let's talk: Taxi or metro?", [
    text(
      "Role-play: get around the city 🎭",
      "**Situation 1 — a taxi 🚕:** You're at the airport. Take a taxi to your hotel. Ask *How long does it take? How much is it?* Stop next to a shop.\n\n**Situation 2 — the metro 🚇:** You're a tourist. Buy a ticket and ask *Which line goes to…? Which platform?*\n\nYour teacher is the driver or the local. Then change roles!",
    ),
    text("Talk to your teacher.", "- Taxi or metro — which do you choose? When? 🚕🚇\n- Is a taxi expensive in your city?\n- What do you do on a long trip — music, books, sleep? 🎧📚😴"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The taxi driver asks:", options: ["*Where to?", "Where are you from?", "What do you do?"] },
      { q: "You want to get out of the taxi:", options: ["*Can you stop here, please?", "Turn left!", "Go straight on."] },
      { q: "🇬🇧 a return ticket = 🇺🇸 …", options: ["*a round-trip ticket", "a one-way ticket", "a travel card"] },
    ]),
    box("Word of the day: rideshare", "**a rideshare** 📱🚗 = a taxi you order in an app (Uber, Yandex Go, Bolt…).\n\n*Let's get a rideshare — it's cheaper!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. Can you [take] me to the airport, please?\n2. Can you [stop] here, please?\n3. How [much] is it?\n4. Keep the [change]! 💵"),
      choose("Choose.", "1. A [*single/one] ticket, please. ➡️\n2. Which [*platform/place] is it? 🚉\n3. The [*next/after] stop is Central Station."),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch another taxi dialogue: a taxi to the airport.", "MQkDIvO-2Gk"),
      write("Write 3 useful phrases from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a dialogue: you take a taxi in a new city. (8+ lines)", 35, {
        read: "*Example:* — Hi! Where to? — Hello! Can you take me to the Central Museum, please? — Sure. — How long does it take? — About 15 minutes. — OK… Oh, can you stop here, please? — Sure. That's 9 dollars. — Here's 10. Keep the change! — Thanks!",
      }),
      record("Record your answer: you're a taxi driver! Greet a passenger, ask where to, say the time and the price. 🚕", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
