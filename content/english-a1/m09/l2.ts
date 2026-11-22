import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  picture,
  quiz,
  record,
  section,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 9.2 Getting around — G: next to / opposite / between / near; How do I get to…? V: transport. Main format: reading (a route in a map app) + video.
export default lesson("a1-9.2", "Getting around", () => [
  section("Warm-up: Which city?", [
    box("Today you will…", "- name transport: *bus, metro, tram, taxi…*\n- say where places are: *next to, opposite, between, near*\n- ask *How do I get to…?* and explain the route 🚇"),
    quiz("Guess the city by its transport! 🌍", [
      { q: "🚕 Yellow taxis and the subway", options: ["*New York", "Paris", "Tokyo"] },
      { q: "🚌 Red double-decker buses and the Tube", options: ["*London", "Rome", "Seoul"] },
      { q: "🚋 Old yellow tram number 28 on hills", options: ["*Lisbon", "Berlin", "Dubai"] },
      { q: "🛶 Gondolas on canals — no cars in the old city!", options: ["*Venice", "Madrid", "Istanbul"] },
      { q: "🚄 Very fast “bullet trains” — Shinkansen", options: ["*Japan", "Brazil", "Egypt"] },
    ]),
    text("Talk to your teacher.", "- How do you usually get to school or work? 🚌🚶\n- What transport is there in your city?"),
  ]),

  section("Vocabulary: Transport", [
    words("Transport", [
      ["a bus", "🚌", "I go to school by bus."],
      ["the metro", "🚇 🇬🇧 the Underground / the Tube · 🇺🇸 the subway"],
      ["a tram", "🚋"],
      ["a taxi", "🚕 🇺🇸 also: a cab"],
      ["a train", "🚆"],
      ["a bike — an e-scooter", "🚲 — 🛴⚡"],
      ["on foot", "🚶 = walking"],
      ["a stop — a station", "🚏 bus stop — 🚉 train / metro station"],
      ["a ticket — a travel card", "🎫 — 💳"],
      ["a line", "〰️ the red line, line 2"],
      ["get on — get off", "⬆️🚌 — 🚌⬇️"],
      ["change (trains)", "🔁 from one line to another"],
      ["a traffic jam", "🚗🚗🚗😩"],
      ["How do I get to…?", "❓🗺️", "How do I get to the airport?"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/tr-metro.jpg", "the metro"],
      ["photos/tr-tram.jpg", "a tram"],
      ["photos/tr-taxi.jpg", "taxis"],
      ["photos/tr-scooter.jpg", "an e-scooter"],
      ["photos/tr-bike.jpg", "bikes"],
    ]),
    table("transport"),
    choose(
      "Choose.",
      "1. I go to work [*by/on] metro.\n2. She goes to school [*on/by] foot.\n3. [*Get off/Get on] at the third stop — that's your stop!\n4. [*Take/Go] the bus number 5.",
    ),
  ]),

  section("Grammar: next to, opposite, between", [
    table("prep-city"),
    picture("The town map", ["maps/town.png"], "Remember the map from the last lesson?"),
    choose(
      "Look at the map. Choose.",
      "1. The café is [*next to/opposite] the supermarket.\n2. The supermarket is [*opposite/next to] the museum.\n3. The pharmacy is [*between/opposite] the school and Green Street.\n4. The bank is on the [*corner/next] of Main Street and River Road.",
    ),
    trueFalse("Look at the map. True or false?", [
      ["The bank is opposite the café.", true],
      ["The park is next to the hospital.", false],
      ["The cinema is between the metro and River Road.", true],
      ["The school is opposite the park.", true],
    ]),
  ]),

  section("Reading: Ask the app", [
    tip("Read the route like a real map app. Ask: *How many minutes? How many stops? Where does she change?*"),
    quiz(
      "Aigerim asks a map app: How do I get to the zoo? Read the route. Choose.",
      [
        { q: "How long is the trip?", options: ["*35 minutes", "15 minutes", "1 hour"] },
        { q: "First, she takes…", options: ["*bus 12", "the metro", "a taxi"] },
        { q: "Where does she change to the metro?", options: ["*at Central Station", "at the zoo", "at the park"] },
        { q: "The last part is…", options: ["*on foot", "by taxi", "by tram"] },
      ],
      {
        read: [
          "## 🗺️ Route to: City Zoo 🦁",
          "**35 min · 1 change · ticket: $2**",
          "1. 🚶 Walk 3 minutes to the bus stop **Park Street**.",
          "2. 🚌 Take **bus 12**. Get off at **Central Station** (4 stops, 10 min).",
          "3. 🚇 Change to the **metro, green line**. Get off at **Zoo Gate** (3 stops, 12 min).",
          "4. 🚶 Walk 5 minutes. Go straight and turn left. The zoo is **opposite** the station, **next to** a big park.",
          "💡 *Tip: buy a travel card — it's cheaper!*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["The ticket is $2.", true],
      ["She gets off the bus after 4 stops.", true],
      ["The zoo is next to a big mall.", false],
    ]),
    text("Talk to your teacher.", "- Do you use map apps? Which one? 📱\n- What's the best way to get around your city — bus, metro, taxi or on foot? Why?\n- What's bad about transport in your city? (traffic jams? 😩)"),
  ]),

  section("Video: The London Underground", [
    video("Watch: how to use the London Underground (the Tube). What do you need?", "StFAuGQf2mM"),
    text("Talk to your teacher.", "- What can you use for a ticket in London? 💳\n- How many lines are there? What colors?\n- Is the Tube like the metro in your city?"),
  ]),

  section("Let's talk: How do I get to…?", [
    text(
      "Role-play: a tourist and a local 🧳",
      "**Student A — a tourist:** ask *How do I get to… (the airport / the center / a museum)?*\n\n**Student B — a local:** explain: *Take bus… / the metro… Get off at… Change at… It's next to / opposite…*\n\nUse your real city! Then change roles.",
    ),
    text("Talk to your teacher.", "- Do you like taxis or public transport? Why? 🚕🚇\n- E-scooters in the city — good or bad idea? 🛴\n- What's your dream way to travel to school or work? 🚁😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I go to school ___ bus.", options: ["*by", "on", "with"] },
      { q: "The supermarket is ___ the museum (on the other side of the street).", options: ["*opposite", "next to", "between"] },
      { q: "🇬🇧 the Tube = …", options: ["*the London metro", "a bus", "a taxi"] },
    ]),
    box("Word of the day: commute", "**commute** 🚇💼 = your trip to work or school every day.\n\n*My commute is 40 minutes by metro. I listen to podcasts!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. I go to work [by] metro.\n2. I walk. I go [on] foot.\n3. Get [off] at the next stop.\n4. Too many cars: a traffic [jam] 😩"),
      match("Match.", [
        ["🇬🇧 the Underground", "🇺🇸 the subway"],
        ["a bus", "a bus stop"],
        ["a train", "a station"],
        ["a ticket", "🎫"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      ...listening(
        "Listen. Leo asks a woman at the metro.",
        "**Leo:** Excuse me, how do I get to the City Museum?\n\n**Woman:** Take the red line to Central Station. Then change to the blue line.\n\n**Leo:** The blue line… OK. Where do I get off?\n\n**Woman:** Get off at Old Town. It's two stops. The museum is opposite the station, next to a big church.\n\n**Leo:** Opposite the station. Great! How long is it?\n\n**Woman:** About twenty minutes.\n\n**Leo:** Thank you very much!",
      ),
      quiz("Listen and choose.", [
        { q: "First, Leo takes…", options: ["*the red line", "the blue line", "a bus"] },
        { q: "He gets off at…", options: ["*Old Town", "Central Station", "City Museum"] },
        { q: "The museum is…", options: ["*opposite the station", "next to the station", "between two churches"] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Write a route from your home to a place in your city (school, work, a mall…). Use take, get off, change, next to, opposite. (35+ words)", 35, {
        read: "*Example:* Walk to the bus stop near my home. Take bus 92 and get off at Abay Avenue — it's 5 stops. Then take the metro, one stop. The mall is opposite the metro station, next to a big park. It's about 30 minutes.",
      }),
      record("Record your answer: How do you get to school or work? How long is your commute?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
