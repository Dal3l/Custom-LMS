import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
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
  picture,
} from "../../kit";

// 9.3 Dream city — skills lesson: reading about cities and digital nomads; cheap / expensive, busy / quiet; review of module 9. Main format: reading + video.
export default lesson("a1-9.3", "Dream city", () => [
  section("Warm-up: Where do you want to live?", [
    box("Today you will…", "- describe cities: *busy, quiet, cheap, expensive…*\n- read about digital nomads 💻🌴\n- describe your dream city"),
    text(
      "Talk to your teacher.",
      "- Big city or small town — what's better for you? 🏙️🏡\n- What's the best city in your country? Why?\n- What city in the world do you want to visit? ✈️\n- Can you work or study from a beach? 🏖️💻\n- What's important in a city for you: parks, cafés, metro, beaches, mountains?",
    ),
  ]),

  section("Vocabulary: Describing cities", [
    words("Describing cities", [
      ["big — small", "🏙️ — 🏡"],
      ["busy — quiet", "🚗🚶🚶 a lot of people — 🤫 calm"],
      ["noisy", "📢 a lot of noise"],
      ["cheap — expensive", "💵 — 💸"],
      ["safe — dangerous", "😌 — ⚠️"],
      ["clean — dirty", "✨ — 🗑️"],
      ["old — modern", "🏰 — 🏢"],
      ["beautiful", "😍"],
      ["the weather — sunny — rainy", "🌦️ — ☀️ — 🌧️"],
      ["a digital nomad", "💻🌍 a person who works online and travels"],
      ["a coworking space", "🧑‍💻🧑‍💻 an office for people from different companies"],
      ["the capital", "🏛️ the main city of a country", "Astana is the capital of Kazakhstan."],
    ]),
    match("Match the opposites.", [
      ["busy", "quiet"],
      ["cheap", "expensive"],
      ["safe", "dangerous"],
      ["clean", "dirty"],
      ["old", "modern"],
    ]),
    sort("Good or bad for a city? Sort. 🤔", {
      "👍 Good": ["safe", "clean", "beautiful", "cheap"],
      "👎 Bad": ["dangerous", "dirty", "noisy", "expensive"],
    }),
  ]),

  section("Reading: Cities for digital nomads", [
    picture("Lisbon, Tokyo and a beach office 🌍", ["photos/c-lisbon.jpg", "photos/c-tokyo.jpg", "photos/c-nomad.jpg"]),
    tip("Read one city at a time. Ask: *Is it cheap or expensive? Busy or quiet? What can you do there?*"),
    quiz(
      "Read the article. Choose.",
      [
        { q: "Which city has an old yellow tram?", options: ["*Lisbon", "Tokyo", "Bali"] },
        { q: "Which place is an island?", options: ["*Bali", "Lisbon", "Tokyo"] },
        { q: "Which city is very big and busy, but very safe?", options: ["*Tokyo", "Lisbon", "Bali"] },
        { q: "Where can you work from a café near the beach?", options: ["*Bali", "Tokyo", "Lisbon"] },
      ],
      {
        read: [
          "## 🌍 Top places for digital nomads",
          "Digital nomads work online — they only need a laptop and Wi-Fi! 💻 Where do they like to live?",
          "**🇵🇹 Lisbon, Portugal.** Lisbon is the capital of Portugal. It's an old and beautiful city on hills, near the ocean. It's sunny almost all year. There's a famous old yellow tram — number 28. 🚋 There are a lot of cafés and coworking spaces. But it's not cheap now — flats are expensive!",
          "**🇯🇵 Tokyo, Japan.** Tokyo is very big and very busy — millions of people live there! 🏙️ But it's very safe and very clean. The metro is fast, and the trains are always on time. The food is amazing. 🍣 Is it expensive? Some things are, but you can eat cheap and tasty food too.",
          "**🇮🇩 Bali, Indonesia.** Bali is an island with beaches, rice fields and temples. 🌴 It's warm all year. A lot of digital nomads work from cafés near the beach. Life there is cheaper than in Europe. But in the rainy season, it rains every day! 🌧️",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Lisbon is the capital of Portugal.", true],
      ["Flats in Lisbon are cheap now.", false],
      ["In Tokyo, the trains are always on time.", true],
      ["Bali is cold in winter.", false],
    ]),
    text("Talk to your teacher.", "- Which place is the best for you? Why? 🏆\n- Can you be a digital nomad? What job can you do online?\n- What's bad about the nomad life? 🤔"),
  ]),

  section("Video: A digital nomad's day", [
    video("Watch the first 3–4 minutes: a day in the life of a digital nomad. Where is he? What does he do?", "5PZzPdBaDEQ"),
    text("Talk to your teacher.", "- Where does he work? What does he do after work?\n- Is it a dream job? Why / why not? 💭"),
  ]),

  section("Review: Module 9", [
    choose(
      "Choose.",
      "1. [*Go/Goes] straight and turn left.\n2. [*Don't/Not] take a taxi — it's expensive!\n3. The café is [*next to/next] the bank.\n4. I go to work [*by/on] tram.\n5. Tokyo is very [*busy/quiet] — millions of people!",
    ),
    drag(
      "Complete the message.",
      "Hi! Welcome to Almaty! 🏔️ [Take] the metro to Abay station. [Get] off and [turn] left. My café is [opposite] the theater, [next] to a bookshop. [Don't] be late! 😄",
      ["Takes", "between", "No"],
    ),
    gaps("Write the opposite.", "1. cheap → [expensive]\n2. busy → [quiet]\n3. old → [modern/new]\n4. safe → [dangerous]"),
  ]),

  section("Let's talk: My dream city", [
    text(
      "Present your dream city 🏙️✨",
      "Invent a dream city or choose a real one. Tell your teacher:\n\n- *Where is it? Is it big or small?*\n- *What's the weather like?*\n- *Is it cheap or expensive? Safe? Clean?*\n- *What's there?* (a beach, mountains, a metro, cool cafés…)\n- *How do people get around?*\n- *Why is it your dream city?*",
    ),
    text("Debate: city or village? ⚖️", "Say 2 good things and 2 bad things about life in a big city and in a village. *In a big city there's a metro, but it's noisy…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a lot of people, cars, noise =", options: ["*busy", "quiet", "safe"] },
      { q: "the main city of a country =", options: ["*the capital", "the center", "the town"] },
      { q: "a person who works online and travels =", options: ["*a digital nomad", "a tourist", "a pilot"] },
    ]),
    box("Word of the day: wanderlust", "**wanderlust** 🌍✈️ = a strong wish to travel and see the world.\n\n*I have wanderlust — I want to visit 50 countries!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. 💸 It costs a lot: [expensive]\n2. 🤫 No noise, no cars: [quiet]\n3. ✨ No rubbish: [clean]\n4. 🏛️ Astana is the [capital] of Kazakhstan."),
      choose("Choose.", "1. [*Turn/Turns] right at the bank.\n2. The pharmacy is [*opposite/opposite of] the park.\n3. I go to school [*on/by] foot."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: a day of a digital nomad in Laos.", "LMX8Qaljtcs"),
      write("Write 3 sentences: What is Laos like? Is it busy or quiet? Do you want to go there?", 15),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Describe your dream city (real or invented). (45+ words)", 45, {
        read: "*Example:* My dream city is by the sea, near the mountains. It isn't very big — it's quiet and clean. It's sunny almost all year! ☀️ There's a beach, a lot of parks and cool cafés. People get around by bike and by tram. Flats are cheap, and the people are friendly. I want to live there and work online!",
      }),
      record("Record a 1-minute “travel video”: present your dream city or your own city to tourists. 🎥", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
