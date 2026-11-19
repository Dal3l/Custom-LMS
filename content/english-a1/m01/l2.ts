import { box, choose, drag, gaps, homework, lesson, match, order, quiz, record, section, sort, text, tip, trueFalse, words, write } from "../../kit";

// 1.2 Where are you from? — G: be (all persons), questions and negatives; his / her / our / their. V: countries and nationalities.
export default lesson("a1-1.2", "Where are you from?", () => [
  section("Warm-up", [
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
  ]),

  section("Vocabulary", [
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
    sort("Sort the nationalities.", {
      "-an / -ian": ["American", "Brazilian", "Mexican", "Italian", "Russian", "Korean", "German"],
      "-ese": ["Japanese", "Chinese"],
      "-ish": ["British", "Turkish", "Spanish"],
      "other": ["Kazakh", "Uzbek"],
    }),
    tip("*Pronunciation tip:* stress — JaPAnese, ChiNESE, BraZILian, ItALian. Say them together."),
  ]),

  section("Reading", [
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
    text("Talk to your teacher.", "- Are you a gamer? 🎮\n- Is your favorite game from Japan, the USA or another country?\n- Where are your friends from?"),
  ]),

  section("Grammar", [
    box(
      "Grammar: be — negatives and questions",
      "- I'm **not** Japanese. — He **isn't** a player. — They **aren't** from Spain.\n- **Are** you from Almaty? — Yes, I **am**. / No, I'm **not**.\n- **Is** she Brazilian? — Yes, she **is**. / No, she **isn't**.\n- **Where are** you from? — I'm from Kazakhstan.\n\n**his** (he) — **her** (she) — **our** (we) — **their** (they): *Her nickname is Rocket. Their team is Nova.*",
    ),
    tip("Ask questions about Team Nova first: *Is Emma a player? Where are Yuki and Ren from?* Then show the rule."),
    choose(
      "Choose the correct word.",
      "1. [*Are/Is/Am] you from Astana?\n2. [Are/*Is/Am] Sofia Brazilian?\n3. Yuki and Ren [*aren't/isn't] from Korea.\n4. Emma [aren't/*isn't] a player.\n5. Sofia is from Brazil. [His/*Her] nickname is Rocket.\n6. Yuki and Ren are brothers. [Our/*Their] team is Nova.",
    ),
    gaps(
      "Complete the answers.",
      "1. Is Daniyar Kazakh? — Yes, he [is].\n2. Are Yuki and Ren from Japan? — Yes, they [are].\n3. Is Emma a player? — No, she [isn't/is not].\n4. Are you Japanese? — No, I'm [not].",
    ),
    order("Put the words in order.", ["Where are you from?", "Is she from Brazil?", "They aren't from Spain.", "Where is Emma from?"]),
    tip("*If you have time:* the order task."),
  ]),

  section("Let's talk", [
    text(
      "Ask and answer. Where are they from?",
      "- Dimash Kudaibergen 🎤\n- Lionel Messi ⚽\n- BTS 🎶\n- Ed Sheeran 🎸\n- Taylor Swift 🎤\n- Neymar ⚽\n\n*A: Where is Dimash from? — B: He's from Kazakhstan. He's Kazakh.*",
    ),
    tip("Answers: Dimash — Kazakhstan; Messi — Argentina (Argentinian); BTS — South Korea; Ed Sheeran — the UK; Taylor Swift — the USA; Neymar — Brazil. Then ask about the student's favorite singers or players."),
    text("Talk to your teacher.", "- Where are you from?\n- Where is your best friend from?\n- Is your city big? 🏙️"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ you from Kazakhstan?", options: ["*Are", "Is", "Am"] },
      { q: "She ___ from Spain. She's from Italy.", options: ["*isn't", "aren't", "not"] },
      { q: "They're from Japan. They're ___.", options: ["*Japanese", "Japan", "Japanish"] },
      { q: "This is Leo. ___ friend is Mia.", options: ["*His", "Her", "Their"] },
    ]),
    box("Word of the day: GG", "**GG** = *good game* 🎮\n\nGamers say it at the end of a game — to the winners and to the losers. It's polite! *GG, everyone!*"),
  ]),

  homework([
    match("Match the country and the nationality.", [
      ["Kazakhstan", "Kazakh"],
      ["Japan", "Japanese"],
      ["the UK", "British"],
      ["Brazil", "Brazilian"],
      ["Türkiye", "Turkish"],
      ["the USA", "American"],
    ]),
    drag(
      "Complete the text.",
      "Hi! I'm Aigerim. I [am] from Kazakhstan. My friends Leo and Mia [are] in my English class. Leo [is] from Brazil. [His] city is São Paulo. Mia isn't from Brazil. [She] is from Germany.",
      ["our", "he"],
    ),
    gaps("Write the negatives.", "1. I'm from Spain. → I'm [not] from Spain.\n2. He's American. → He [isn't/is not] American.\n3. They're Korean. → They [aren't/are not] Korean."),
    write("Write about two friends: their names, ages and countries. (20+ words)", 20, {
      read: "*Example:* My friend Daniyar is seventeen. He's from Astana. He's Kazakh. My friend Sofia is from Brazil. Her nickname is Rocket.",
    }),
    record("Record your answer: Where are you from? Where are your friends from?", 60),
  ]),
]);
