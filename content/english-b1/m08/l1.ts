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

// 8.1 If I won a million — G: Second Conditional (If I had…, I'd…; If I were you…). V: money (afford, save up, waste, donate, a fortune…). Say it right: I'd /aɪd/, wouldn't. S: dilemmas game. Main format: a music time-machine warm-up (Woodstock 1969, the Beatles' rooftop concert, Live Aid — music easter egg) + a radio show listening (“What would you do with a million?”, ~1.5 min) + a dilemmas game. Video at home.
// Facts checked: Woodstock — August 1969, a farm in New York State; the Beatles' rooftop concert — January 1969, London, their last public performance.
export default lesson("b1-8.1", "If I won a million", () => [
  section("Warm-up: The time machine", [
    box(
      "Today you will…",
      "- imagine impossible situations: *If I had a time machine, I'd…* 🕰️\n- use the Second Conditional: *If I **won** a million, I**'d** buy…* 💰\n- play a game of difficult dilemmas 🤔",
    ),
    picture("Woodstock, 1969: one of the most famous music festivals ever.", ["photos/woodstock-crowd.jpg"]),
    quiz("Music time machine 🎸 How much do you know?", [
      { q: "The Woodstock festival took place in…", options: ["*1969", "1979", "1959"] },
      { q: "Woodstock was held on a farm in…", options: ["*New York State, USA", "California, USA", "London, UK"] },
      { q: "In 1969, the Beatles gave their last public concert…", options: ["*on a roof in London", "in a stadium in New York", "on a beach in Spain"] },
      { q: "Queen's famous Live Aid show (remember module 2?) was in…", options: ["*1985", "1975", "1995"] },
    ]),
    text(
      "Talk to your teacher.",
      "- If you could go back in time to ONE concert in history, which would you choose? Why? 🎤\n- If you could have dinner with any musician (alive or not), who would it be? What would you ask them?\n- If you could play any instrument perfectly tomorrow, which would you choose? 🎹🥁🎻",
    ),
    tip("A small music easter egg for the course 🎸 — share your own dream concert first (Woodstock? Led Zeppelin? The Beatles on the roof?). Use the Second Conditional naturally (*If I could go back, I'd…*), but don't explain it yet."),
  ]),

  section("Vocabulary: Money", [
    words("Money", [
      ["a fortune", "💰 a very large amount of money", "That car cost a fortune!"],
      ["afford", "💳 have enough money for something", "I can't afford a new phone."],
      ["save up (for)", "🐷 keep money to buy something later", "I'm saving up for a trip."],
      ["waste (money) on", "🗑️ spend money badly", "Don't waste money on things you don't need."],
      ["donate (to)", "🎁 give money to a charity"],
      ["invest (in)", "📈 put money into something to make more money"],
      ["lend — borrow", "➡️💵 give money for a time — ⬅️💵 take money for a time"],
      ["owe", "😬 need to pay back money", "You owe me 5,000 tenge!"],
      ["be broke", "🪹 have no money at all", "I'm broke until payday."],
      ["the lottery", "🎟️ a game where you can win a lot of money"],
      ["a bargain", "🏷️ something cheap for its quality"],
      ["generous — mean", "🎁 likes giving — 🙅 doesn't like giving or spending"],
    ]),
    match("Match.", [
      ["save up", "for a car"],
      ["waste money", "on things you don't need"],
      ["donate", "to charity"],
      ["invest", "in a business"],
      ["win", "the lottery"],
      ["cost", "a fortune"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I'd love that jacket, but I can't [afford] it. 💸\n2. She's been saving [up] for a new laptop for months.\n3. Can you [lend] me 2,000 tenge? I'll pay you back tomorrow.\n4. I [owe] my brother money — I need to pay him back.\n5. I'm completely [broke] — I spent everything on holiday!\n6. This jacket was only $10 — what a [bargain]! 🏷️\n7. Every year he [donates] money to a children's hospital.\n8. He never pays for anyone — he's so [mean]!",
    ),
    sort("Good or bad with money? Sort. 👍👎", {
      "👍 good with money": ["saving up for something important", "comparing prices", "investing carefully", "paying back what you owe", "buying a bargain you need"],
      "👎 bad with money": ["wasting money on things you don't need", "being always broke before payday", "borrowing and forgetting to pay back", "buying lottery tickets every day", "spending a fortune on taxis"],
    }),
  ]),

  section("Listening: What would you do with a million?", [
    tip("About 1.5 minutes. A radio show asks people what they would do with a million dollars. You know some of them! First listen: *Who would spend, who would save, who would give it away?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio show. People answer the question: “What would you do if you won a million dollars?”",
      "**Host:** Good morning! Today's question is simple: what would you do if you won a million dollars? Let's go to our first caller. Asel, hi!\n\n**Asel:** Hi! Easy — I'd open a second bakery, on the other side of the city. And I'd buy a new oven. If I had a better oven, I wouldn't have to get up at four every morning! 😄 But I wouldn't stop working. I love my job.\n\n**Host:** A practical answer! Next, Leo.\n\n**Leo:** I'd travel around the world for a year. I'd start in Japan — I've always wanted to see Kyoto. Then South America. And if I had enough money left, I'd buy a really good guitar. My friends say my playing is terrible, but if I had a better guitar, maybe I'd sound better!\n\n**Host:** I'm not sure it works like that, Leo! And now, Zarina.\n\n**Zarina:** Honestly, I'd be a bit scared. People change when they get rich. If I won a million, I wouldn't tell anyone — maybe only my mum. I'd pay for my parents' house and donate a big part to an animal shelter. 🐾 And then I'd invest the rest.\n\n**Host:** Very sensible. Last caller — Daniyar, you're sixteen?\n\n**Daniyar:** Yes! If I won a million, I'd pay for my studies in Korea, so I wouldn't need the scholarship. And I'd buy my grandma a trip to Canada to see her sister. She hasn't seen her in person for thirty years.\n\n**Host:** That's lovely. So, listeners, if you were in their place, what would you do? Send us a message!",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Asel: I'd [open] a second bakery.\n2. Asel: If I had a better oven, I wouldn't have to get [up] at four.\n3. Leo: I'd travel around the [world] for a year.\n4. Zarina: If I won a million, I wouldn't [tell] anyone.\n5. Zarina: I'd donate a big part to an animal [shelter].\n6. Daniyar: I'd buy my grandma a [trip] to Canada.",
    ),
    quiz("Listen and choose.", [
      { q: "Would Asel stop working?", options: ["*No — she loves her job.", "Yes, immediately.", "Only for a year."] },
      { q: "Where would Leo start his trip?", options: ["*in Japan", "in South America", "in Canada"] },
      { q: "Why would Zarina feel scared?", options: ["*People change when they get rich.", "She doesn't like money.", "She'd have to move."] },
      { q: "What would Daniyar pay for?", options: ["*his studies in Korea", "a new car", "a guitar"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel would buy a new oven.", true],
      ["Leo's friends think he plays the guitar very well.", false],
      ["Zarina would tell all her friends about the money.", false],
      ["Zarina would invest part of the money.", true],
      ["Daniyar's grandma hasn't seen her sister in person for thirty years.", true],
    ]),
  ]),

  section("Grammar: Second Conditional", [
    quiz("Notice the rule 🔍 Look: “If I won a million, I'd open a second bakery.” “If I had a better oven, I wouldn't have to get up at four.”", [
      { q: "Is Asel going to win a million?", options: ["*Probably not — it's an imaginary situation.", "Yes, tomorrow.", "She won it last year."] },
      { q: "Which tense is after “if”?", options: ["*Past Simple (won, had) — but it's about now or the future", "Present Simple", "will"] },
      { q: "And in the other part?", options: ["*would ('d) + verb", "will + verb", "Past Simple"] },
    ]),
    table("second-conditional"),
    choose(
      "Choose the right form.",
      "1. If I [*had/have] more time, I'd learn to play the piano. 🎹\n2. If she lived closer, we [*would see/will see] each other more often.\n3. What would you do if you [*found/find] a wallet in the street?\n4. If I [*were/am] you, I'd apologize.\n5. I [*wouldn't buy/didn't buy] that car if I were you — it's too expensive.\n6. If we [*didn't have/wouldn't have] a dog, we could travel more.\n7. Would you move abroad if you [*got/would get] a job offer?\n8. If I could speak five languages, I [*would work/worked] as a translator.",
    ),
    gaps(
      "Complete with the Second Conditional.",
      "1. If I [won] the lottery, I'd buy a house by the sea. (win)\n2. If I had a car, I [would drive/'d drive] to work. (drive)\n3. If she [knew] the answer, she'd tell us. (know)\n4. We [would go/'d go] out more if we had more money. (go)\n5. If I [were] you, I wouldn't worry. (be)\n6. What [would you do] if you lost your phone? (you / do)\n7. If they [didn't live/did not live] so far away, they'd visit us. (not / live)\n8. I [wouldn't eat/would not eat] that if I were you! (not / eat) 🤢",
    ),
    drag(
      "Complete Zarina's message to a friend.",
      "Did you hear the radio show? 😄 If I [won] a million, I [would] be so scared! If my friends [knew], they'd all want something. If I [were] rich, I'd buy my parents a house. And if I [had] a free year, I'd volunteer at an animal shelter. What [would] you do?",
      ["win", "will", "was knowing"],
    ),
    order("Make sentences.", [
      "If I won the lottery, I'd travel the world.",
      "If I were you, I'd say sorry.",
      "What would you do if you found a wallet?",
      "If we had a garden, we'd get a dog.",
      "I wouldn't buy it if I were you.",
    ]),
  ]),

  section("Say it right: I'd, wouldn't", [
    box(
      "🗣️ Say it right",
      "**would** is usually short: **'d** /d/\n\n*I would go* → **I'd go** /aɪd ɡəʊ/ · *she would* → **she'd** · *we would* → **we'd**\n\n**wouldn't** /ˈwʊdənt/ — the **l** is silent!\n\nCareful: **I'd** can be *I would* OR *I had* — the next word tells you: I'd **go** (would) · I'd **gone** (had).",
    ),
    quiz("Listen to your teacher. Is “'d” = would or had?", [
      { q: "I'd buy a house.", options: ["*would", "had"] },
      { q: "She'd already left.", options: ["*had", "would"] },
      { q: "We'd travel more.", options: ["*would", "had"] },
      { q: "They'd never seen snow.", options: ["*had", "would"] },
    ]),
    tip("Drill a chain: *If I won a million, I'd… → If I won a million, I'd travel… → … I'd travel to Japan.* The student continues with their own ideas and short *'d*."),
  ]),

  section("Let's talk: Dilemmas", [
    text(
      "Game: What would you do? 🤔",
      "Your teacher reads a dilemma. Answer with the Second Conditional — and explain! Then ask your teacher.\n\n1. 👛 You find a wallet with $500 and an ID card. Nobody is around.\n2. 🎁 Your best friend gives you a present you really hate.\n3. 💼 Your dream company offers you a job — but in a city 3,000 km away.\n4. 🛒 The cashier gives you 10,000 tenge too much change.\n5. 🤫 You see a colleague taking things from the office.\n6. 🍝 You're at a friend's house, and the food is terrible.\n\n*If I were in that situation, I'd… I wouldn't… It depends — if…*",
    ),
    text(
      "Talk to your teacher.",
      "- If you could live in any country for one year, where would you go? Why? 🌍\n- If you didn't have to work or study, how would you spend your days?\n- If you could change one thing about your town, what would it be?\n- If you could have any superpower, which would you choose? 🦸",
    ),
    tip("Push for honest answers and reasons, and argue a little (*Really? Wouldn't you keep the money if…?*). For the superpower question, ask: *What would you do with it on the first day?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "If I ___ rich, I'd buy an island.", options: ["*were", "am", "will be"] },
      { q: "What ___ you do if you saw a ghost?", options: ["*would", "will", "did"] },
      { q: "have enough money for something =", options: ["*afford", "owe", "waste"] },
      { q: "have no money at all =", options: ["*be broke", "be generous", "be a bargain"] },
    ]),
    box(
      "Phrase of the day: money doesn't grow on trees",
      "🌳💵 **Money doesn't grow on trees!** = money isn't easy to get, so don't waste it. (Parents love this one!)\n\n*“Can I have a new phone?” — “Money doesn't grow on trees!”*",
    ),
  ]),

  homework(
    [
      video("Watch: conditionals — zero, first and second.", "8nbxG6Ao3dY"),
      choose(
        "Choose.",
        "1. If I [*had/would have] wings, I'd fly to work.\n2. She [*would be/will be] happier if she changed jobs.\n3. If I were you, I [*would take/took] the job.\n4. What would you do if you [*met/meet] your favorite singer?\n5. If he [*didn't/wouldn't] spend so much, he'd have more money.\n6. We [*wouldn't/didn't] go if it rained.\n7. If I [*could/can] fly, I'd visit every country.\n8. Would you be angry if I [*forgot/forget] your birthday?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. I can't [afford] a holiday this year.\n2. I'm saving [up] for a new bike.\n3. Don't [waste] your money on that!\n4. She [donated] her prize money to charity.\n5. Can I [borrow] your pen?\n6. That house cost a [fortune].",
      ),
      write("Write a short article (100+ words): “If I won a million dollars…” What would you do first? What wouldn't you do? Would it change you?", 100, {
        read: "*Example:* If I won a million dollars, the first thing I'd do is pay for my parents' house. They've worked hard all their lives. 🏠 Then I'd take my family on a trip to Japan — we've always dreamed of seeing the cherry blossoms. I wouldn't buy an expensive car, because I don't really like driving. I'd invest some money and donate part of it to a children's hospital. Would it change me? I hope not…",
      }),
      record("Record 1 minute: Answer one dilemma from the lesson. What would you do and why? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
