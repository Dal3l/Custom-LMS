import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
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

// 1.2 Where are you from? — G: be (all persons), questions and negatives; his / her / our / their. V: countries and nationalities.
export default lesson("a1-1.2", "Where are you from?", () => [
  section("Warm-up: Around the world", [
    box("Today you will…", "- say where you are from\n- ask *Where are you from?*\n- talk about other people: *He's… She's… They're…*"),
    tip("Quick review of lesson 1.1: *Hi! What's your name? How old are you?* Then the matching game — let the student guess."),
    match("Where is it from? Match.", [
      ["sushi 🍣", "Japan"],
      ["pizza 🍕", "Italy"],
      ["K-pop 🎤", "South Korea"],
      ["beshbarmak 🍲", "Kazakhstan"],
      ["tacos 🌮", "Mexico"],
      ["samba 💃", "Brazil"],
    ]),
    text(
      "Talk to your teacher.",
      "- What countries are near your country?\n- What country is cool for a holiday? 🏖️\n- What food from other countries is popular in your city?\n- What country is your favorite singer or player from?",
    ),
  ]),

  section("Vocabulary: Countries and nationalities", [
    words("Countries and nationalities", [
      ["Kazakhstan — Kazakh", "🏙️ Almaty, Astana", "I'm from Kazakhstan. I'm Kazakh."],
      ["Uzbekistan — Uzbek", "🏙️ Tashkent, Samarkand"],
      ["Russia — Russian", "🏙️ Moscow"],
      ["the USA — American", "🏙️ New York, Los Angeles", "Taylor Swift is American."],
      ["the UK — British", "🏙️ London"],
      ["Brazil — Brazilian", "🏙️ Rio de Janeiro, São Paulo"],
      ["Mexico — Mexican", "🏙️ Mexico City"],
      ["Italy — Italian", "🏙️ Rome, Milan"],
      ["Germany — German", "🏙️ Berlin"],
      ["Japan — Japanese", "🏙️ Tokyo"],
      ["China — Chinese", "🏙️ Beijing, Shanghai"],
      ["South Korea — Korean", "🏙️ Seoul"],
      ["Türkiye — Turkish", "🏙️ Istanbul · also: Turkey"],
      ["Spain — Spanish", "🏙️ Madrid, Barcelona"],
      ["Where are you from?", "❓ you ask about a country or a city", "Where are you from? — I'm from Astana."],
    ]),
    match("Match the country and the nationality.", [
      ["Japan", "Japanese"],
      ["the UK", "British"],
      ["Brazil", "Brazilian"],
      ["Germany", "German"],
      ["South Korea", "Korean"],
      ["Spain", "Spanish"],
    ]),
    sort("Sort the nationalities.", {
      "-an / -ian": ["American", "Brazilian", "Mexican", "Italian", "Russian", "Korean", "German"],
      "-ese": ["Japanese", "Chinese"],
      "-ish": ["British", "Turkish", "Spanish"],
      "other": ["Kazakh", "Uzbek"],
    }),
    matchPictures("Where is it? Match the places and the countries.", [
      ["photos/place-big-ben.jpg", "the UK"],
      ["photos/place-liberty.jpg", "the USA"],
      ["photos/place-colosseum.jpg", "Italy"],
      ["photos/place-registan.jpg", "Uzbekistan"],
      ["photos/place-christ.jpg", "Brazil"],
    ]),
    gaps("Complete.", "1. I'm from Kazakhstan. I'm [Kazakh].\n2. Tokyo is in [Japan].\n3. Neymar is from Brazil. He's [Brazilian].\n4. London is in the [UK]."),
    tip("*Pronunciation tip:* stress — JaPAnese, ChiNESE, BraZILian, ItALian. Say them together."),
  ]),

  section("Reading: Meet Team Nova", [
    trueFalse(
      "Read about Team Nova. True or false?",
      [
        ["Daniyar is from Kazakhstan.", true],
        ["Yuki and Ren are Korean.", false],
        ["Sofia's nickname is Rocket.", true],
        ["Emma is a player.", false],
        ["The team chat is in English.", true],
      ],
      {
        read: [
          "## Meet Team Nova 🎮",
          "Team Nova is an online gaming team. The team is from four countries.",
          "**Daniyar** is from Kazakhstan. He's Kazakh. He's seventeen.",
          "**Yuki** and **Ren** are from Japan. They're Japanese. They're brothers.",
          "**Sofia** is from Brazil. She's Brazilian. Her nickname is *Rocket*. 🚀",
          "**Emma** is from the UK. She's British. She isn't a player — she's the team coach.",
          "Our team chat is in English! 💬",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who is it?", [
      { q: "He's Kazakh.", options: ["*Daniyar", "Ren", "Emma"] },
      { q: "She's the coach.", options: ["Sofia", "*Emma", "Yuki"] },
      { q: "They're brothers.", options: ["*Yuki and Ren", "Daniyar and Sofia", "Emma and Sofia"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Are you a gamer? 🎮 What games are cool?\n- Is your favorite game from Japan, the USA or another country?\n- Where are your friends from?\n- Is English important for gamers? Why?",
    ),
  ]),

  section("Listening: At the airport", [
    tip("Until the audio is ready, read the dialogue with the student (show the script with the eye if it helps). Then do the tasks."),
    ...listening(
      "Listen. Where are they from?",
      "**Kenji:** Hi! I'm Kenji. Nice to meet you!\n\n**Laura:** Hello, Kenji! I'm Laura. Nice to meet you too.\n\n**Kenji:** Where are you from, Laura?\n\n**Laura:** I'm from Spain. And you? Are you Chinese?\n\n**Kenji:** No, I'm not. I'm Japanese. I'm from Tokyo.\n\n**Laura:** Oh, cool! Is your friend Japanese too?\n\n**Kenji:** No, he isn't. Aidar is from Kazakhstan. He's from Almaty.\n\n**Laura:** Almaty! It's a beautiful city.",
    ),
    quiz("Listen and choose.", [
      { q: "Laura is from…", options: ["*Spain", "Japan", "Kazakhstan"] },
      { q: "Kenji is…", options: ["Chinese", "*Japanese", "Kazakh"] },
      { q: "Aidar is from…", options: ["Tokyo", "Madrid", "*Almaty"] },
    ]),
    gaps("Listen again. Complete.", "1. Are you [Chinese]? — No, I'm not.\n2. I'm from [Tokyo].\n3. Aidar is from [Kazakhstan]."),
    text("Talk to your teacher.", "- Imagine you're at an airport. Say hello to a person and ask *Where are you from?*\n- What countries are on your travel list? ✈️"),
  ]),

  section("Grammar: be — negatives and questions", [
    tip("Ask questions about Team Nova first: *Is Emma a player? Where are Yuki and Ren from?* Then show the tables."),
    table("be-all"),
    table("be-answers"),
    table("possessives"),
    choose(
      "Choose the correct word.",
      "1. [*Are/Is/Am] you from Astana?\n2. [Are/*Is/Am] Sofia Brazilian?\n3. Yuki and Ren [*aren't/isn't] from Korea.\n4. Emma [aren't/*isn't] a player.\n5. Sofia is from Brazil. [His/*Her] nickname is Rocket.\n6. Yuki and Ren are brothers. [Our/*Their] team is Nova.",
    ),
    gaps(
      "Complete the answers.",
      "1. Is Daniyar Kazakh? — Yes, he [is].\n2. Are Yuki and Ren from Japan? — Yes, they [are].\n3. Is Emma a player? — No, she [isn't/is not].\n4. Are you Japanese? — No, I'm [not].",
    ),
    drag("Complete with his, her, our or their.", "1. This is Daniyar. [His] game is Nova Arena.\n2. This is Sofia. [Her] city is São Paulo.\n3. We're a team. [Our] coach is Emma.\n4. Yuki and Ren are brothers. [Their] city is Tokyo.", ["my", "your"]),
    order("Put the words in order.", ["Where are you from?", "Is she from Brazil?", "They aren't from Spain.", "Where is Emma from?"]),
    tip("*If you have time:* the order task."),
  ]),

  section("Let's talk: Famous people", [
    text(
      "Ask and answer. Where are they from?",
      "- Dimash Kudaibergen 🎤\n- Lionel Messi ⚽\n- BTS 🎶\n- Ed Sheeran 🎸\n- Taylor Swift 🎤\n- Neymar ⚽\n\n*A: Where is Dimash from? — B: He's from Kazakhstan. He's Kazakh.*",
    ),
    tip("Answers: Dimash — Kazakhstan; Messi — Argentina (Argentinian); BTS — South Korea; Ed Sheeran — the UK; Taylor Swift — the USA; Neymar — Brazil. Then ask about the student's favorite singers or players."),
    text(
      "Guess who! Think of a famous person. Your teacher asks questions.",
      "*Is he / she a singer? Is he / she American? Is he / she from Asia? Is he / she young?*\n\nAnswer *Yes, he is. / No, she isn't.*",
    ),
    text("Talk to your teacher.", "- Where are you from?\n- Where is your best friend from?\n- Is your city big? 🏙️\n- Where are your parents from?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ you from Kazakhstan?", options: ["*Are", "Is", "Am"] },
      { q: "She ___ from Spain. She's from Italy.", options: ["*isn't", "aren't", "not"] },
      { q: "They're from Japan. They're ___.", options: ["*Japanese", "Japan", "Japanish"] },
      { q: "This is Leo. ___ friend is Mia.", options: ["*His", "Her", "Their"] },
      { q: "Are you Brazilian? — No, I ___.", options: ["*'m not", "isn't", "am"] },
    ]),
    box("Word of the day: GG", "**GG** = *good game* 🎮\n\nGamers say it at the end of a game — to the winners and to the losers. It's polite! *GG, everyone!*"),
  ]),

  homework(
    [
      match("Match the country and the nationality.", [
        ["Kazakhstan", "Kazakh"],
        ["Japan", "Japanese"],
        ["the UK", "British"],
        ["Brazil", "Brazilian"],
        ["Türkiye", "Turkish"],
        ["the USA", "American"],
      ]),
      gaps("Write the nationality.", "1. Mexico → [Mexican]\n2. China → [Chinese]\n3. Italy → [Italian]\n4. Uzbekistan → [Uzbek]"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      drag(
        "Complete the text.",
        "Hi! I'm Aigerim. I [am] from Kazakhstan. My friends Leo and Mia [are] in my English class. Leo [is] from Brazil. [His] city is São Paulo. Mia isn't from Brazil. [She] is from Germany.",
        ["our", "he"],
      ),
      gaps("Write the negatives.", "1. I'm from Spain. → I'm [not] from Spain.\n2. He's American. → He [isn't/is not] American.\n3. They're Korean. → They [aren't/are not] Korean."),
      choose("Choose the answer.", "1. Are you a student? — Yes, I [*am/is/'m].\n2. Is Emma British? — Yes, she [am/*is/are].\n3. Are Yuki and Ren Korean? — No, they [isn't/*aren't/not]."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the video. People say where they're from.", "31y2Bq1RYQA"),
      write("Write 3 places from the video and say where YOU are from.", null),
      trueFalse(
        "Read and answer. True or false?",
        [
          ["Daniyar is from Astana.", true],
          ["Sofia is Mexican.", false],
          ["Their team is Team Nova.", true],
        ],
        { read: "💬 *Hi! I'm Daniyar. I'm from Astana. My friend Sofia is from Brazil. She's Brazilian. Our team is Team Nova!*" },
      ),
    ],
    "Homework: Video and reading",
  ),
  homework(
    [
      write("Write about two friends: their names, ages and countries. (20+ words)", 20, {
        read: "*Example:* My friend Daniyar is seventeen. He's from Astana. He's Kazakh. My friend Sofia is from Brazil. Her nickname is Rocket.",
      }),
      record("Record your answer: Where are you from? Where are your friends from?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
