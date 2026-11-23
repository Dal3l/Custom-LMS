import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 11.2 Whose is it? — a GAME lesson: a detective mystery (whose things were left after a party?) solved from clues. G: mine / yours / his / hers / ours / theirs, whose (review); something / anyone / nobody / everywhere. V: things and materials. Say it right: whose = who's. No video in class.
export default lesson("a2-11.2", "Whose is it?", () => [
  section("Warm-up: The lost property box", [
    box("Today you will…", "- say *It's mine! Is it yours? Whose is it?* 🔍\n- describe things: *It's made of leather / metal / wool…*\n- solve a mystery: whose things are these? 🕵️"),
    text(
      "Look in the lost property box 📦",
      "At a big train station, the lost property office found these things last month. What do you think: which thing do people lose the most? Which is the strangest?\n\n🌂 47 umbrellas · 🎧 31 pairs of headphones · 🧤 28 gloves (just one!) · 💻 5 laptops · 🦷 2 false teeth · 🎻 1 violin · 🐢 1 small turtle (alive!) · 💍 1 wedding ring",
    ),
    text(
      "Talk to your teacher.",
      "- What's the most valuable thing you've ever lost? Did you find it? 😩\n- Where do you usually lose things — at home, on the bus, at school / work? 🚌\n- Have you ever found something important? What did you do with it? 🤔\n- Are you an organized person, or do you always ask “Where is my…?” 😅",
    ),
    tip("The list is invented, but these are typical lost-property items in big stations. Ask the student which item has the best story — and invent the story together! 🐢"),
  ]),

  section("Vocabulary: Things and materials", [
    words("Things and materials", [
      ["It's made of…", "🧵 what a thing is made from", "My wallet is made of leather."],
      ["leather", "👜"],
      ["metal — gold — silver", "🔩 — 🥇 — 🥈"],
      ["plastic", "🧴"],
      ["wood — wooden", "🪵", "a wooden box"],
      ["glass", "🥛🪟"],
      ["cotton", "👕"],
      ["wool — woolen", "🧶🧣 · 🇬🇧 woollen"],
      ["a wallet — a purse", "👛 · 🇺🇸 a purse can be a handbag"],
      ["a charger — a power bank", "🔌 — 🔋"],
      ["a ring — a necklace — earrings", "💍 — 📿 — 💎"],
      ["valuable", "💎💰 worth a lot of money"],
    ]),
    sort("What is it usually made of? Sort. 🧵", {
      "🔩 metal": ["keys", "a ring", "a fork"],
      "🧶 wool / cotton": ["a scarf", "socks", "a T-shirt"],
      "🪵 wood / glass": ["a table", "a window", "a pencil"],
    }),
    match("Match.", [
      ["a leather", "wallet"],
      ["a gold", "ring"],
      ["a woolen", "scarf"],
      ["a glass", "bottle"],
      ["a wooden", "box"],
      ["a plastic", "bag"],
    ]),
  ]),

  section("Grammar: mine, yours, whose", [
    tip("Whose + 's (*Whose is it? It's Leo's.*) is A1 — check it in 30 seconds. Today's new part: **mine, yours, hers, ours, theirs** and **something / anyone / nobody**."),
    quiz("Notice the rule 🔍 Look: “Is this your bag? — No, it isn't mine. I think it's hers.” Which is true?", [
      { q: "“It's mine” = …", options: ["*It's my bag", "It's my", "It's me"] },
      { q: "After mine, yours, hers… we…", options: ["*don't use a noun: It's mine.", "use a noun: It's mine bag.", "use 's: It's mine's."] },
      { q: "Which is correct?", options: ["*Is this yours?", "Is this your's?", "Is this yours's?"] },
    ]),
    table("mine-yours"),
    choose(
      "Choose.",
      "1. This isn't my phone. [*Mine/My] is black.\n2. Is this [*your/yours] jacket?\n3. Is this jacket [*yours/your]?\n4. Those aren't their keys. [*Theirs/Their] are on the table.\n5. — Whose bag is this? — It's [*hers/her].\n6. Our flat is small, but [*theirs/their] is huge!\n7. This laptop is [*ours/our's] — we share it.\n8. [*Whose/Who's] umbrella is this?",
    ),
    gaps(
      "Complete with mine, yours, his, hers, ours or theirs.",
      "1. I have a red bike. The red bike is [mine]. 🚲\n2. You have a new phone. The new phone is [yours]. 📱\n3. Aigerim has a gold ring. The gold ring is [hers]. 💍\n4. Leo has old headphones. The old headphones are [his]. 🎧\n5. We have a big dog. The big dog is [ours]. 🐕\n6. They have a blue car. The blue car is [theirs]. 🚗\n7. — Is this your pen? — Yes, it's [mine]. Thanks! ✏️\n8. — Is that Mia's scarf? — No, [hers] is woolen. That one is cotton. 🧣",
    ),
  ]),

  section("Mystery: The party things 🕵️", [
    tip("A logic game! Read the clues together. The student explains each answer: *It's Leo's — it's his, because he has a cat!* There's only one correct answer for each thing."),
    quiz(
      "After Mia's birthday party, 6 things were left in the flat. Read the clues. Whose is it? Choose.",
      [
        { q: "🧣 a woolen scarf", options: ["*Aigerim's — it's hers", "Leo's — it's his", "Kenji's — it's his"] },
        { q: "🎧 big headphones", options: ["*Kenji's — they're his", "Dana's — they're hers", "Aigerim's — they're hers"] },
        { q: "👛 a leather wallet", options: ["*Arman's — it's his", "Leo's — it's his", "Dana's — it's hers"] },
        { q: "🧥 a jacket with cat hair on it", options: ["*Leo's — it's his", "Arman's — it's his", "Kenji's — it's his"] },
        { q: "🔋 a pink power bank", options: ["*Dana's — it's hers", "Aigerim's — it's hers", "Kenji's — it's his"] },
        { q: "📸 an old camera", options: ["*Mia's parents' — it's theirs", "Dana's — it's hers", "Leo's — it's his"] },
      ],
      {
        read: [
          "## 🕵️ The party mystery — clues",
          "Six guests came to Mia's party: **Leo, Dana, Arman, Aigerim, Kenji** — and Mia's **parents** came for the cake. 🎂",
          "1. Aigerim was cold all evening. She always wears something woolen in winter. Nobody else wore a scarf.",
          "2. Kenji listened to music on the bus to the party. His headphones are big — not earbuds.",
          "3. Arman paid for the taxi with cash. He's the only person who still uses a wallet — everybody else pays with a phone.",
          "4. Leo has a cat called Tiger. Tiger sleeps on everything Leo owns! 🐱",
          "5. Dana's phone died at the party. Her favorite color is pink — everything she has is pink!",
          "6. Mia's parents took photos of the cake. They don't have smartphones — they still use their old camera.",
        ].join("\n\n"),
      },
    ),
    text("Talk to your teacher.", "- Which clue was the most helpful? 🔍\n- What do people always forget at parties? What have you forgotten somewhere? 😅"),
  ]),

  section("Grammar: something, anyone, nobody", [
    choose(
      "Choose.",
      "1. I found [*something/anything] under the sofa — a ring! 💍\n2. Is there [*anyone/someone] here? — No, the room is empty.\n3. [*Nobody/Anybody] knows whose scarf it is.\n4. I can't find my keys [*anywhere/somewhere]! 😩\n5. Did you see [*anything/something] strange?\n6. I looked [*everywhere/anywhere] — under the bed, in the car, in my bag…\n7. [*Everybody/Nobody] at the party was happy. 🎉\n8. There's [*nothing/anything] in the box. It's empty.",
    ),
    drag(
      "Complete the chat.",
      "Mia: Did [anyone] find a gold ring after the party? 💍\nDana: No, I didn't see [anything]. Did you look [everywhere]?\nMia: Yes! Under the sofa, in the kitchen… [nothing]! 😩\nDana: Maybe [somebody] put it in a box?\nMia: Wait… there's [something] in the cake box!\nDana: Is it the ring?!\nMia: Yes! [Nobody] put it there — it fell from my finger when I cut the cake! 😂 Thanks [everyone]!",
      ["somewhere", "anybody's"],
    ),
    sort("Positive ✅ / question ❓ or negative ❌ sentence? Which word fits? Sort.", {
      "✅ something / somebody / somewhere": ["I'd like to drink ___.", "___ called you.", "Let's go ___ nice."],
      "❓❌ anything / anybody / anywhere": ["Is ___ there?", "I can't see ___.", "Did you go ___?"],
      "❌ (with a positive verb) nothing / nobody": ["___ knows the answer.", "There's ___ in the fridge."],
    }),
  ]),

  section("Say it right: whose = who's", [
    box(
      "🗣️ Say it right",
      "**whose** and **who's** sound **the same**: /huːz/ 🤯\n\n*Whose bag is this?* (= it belongs to who?)\n*Who's that?* (= who **is** that?)\n\nThe **w** is silent in both! Not “w-hose” — just /huːz/.",
    ),
    quiz("whose or who's? Choose.", [
      { q: "___ phone is ringing?", options: ["*Whose", "Who's"] },
      { q: "___ coming to the party?", options: ["*Who's", "Whose"] },
      { q: "___ that man in the photo?", options: ["*Who's", "Whose"] },
      { q: "___ keys are these?", options: ["*Whose", "Who's"] },
    ]),
    tip("Say sentences in random order — the student writes *whose* or *who's*. Then the student points at things in your room on camera: *Whose is that guitar? — It's mine!*"),
  ]),

  section("Listening: Whose is this?", [
    ...listening(
      "Listen. Two flatmates, Leo and Arman, are cleaning their flat.",
      "**Leo:** OK, Arman, let's clean the living room. Whose socks are these? 🧦\n\n**Arman:** Not mine! Mine are in the washing machine. They must be yours.\n\n**Leo:** Oh… yes, they're mine. Sorry! And this charger?\n\n**Arman:** That's mine. I looked for it everywhere last week!\n\n**Leo:** Here you are. And whose is this guitar? It's been here for a month!\n\n**Arman:** It's Dana's. She left it after the party. I'll text her.\n\n**Leo:** What about these glasses? Are they yours?\n\n**Arman:** No, I don't wear glasses. Nobody here does! 🤔\n\n**Leo:** Strange… Wait, I know — they're my grandma's! She visited on Sunday.\n\n**Arman:** Ha! Is there anything else?\n\n**Leo:** Just one thing… a pizza box from… last Friday. 🍕 Whose idea was the pizza?\n\n**Arman:** Ours! So we both take it out! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "Whose socks are they?", options: ["*Leo's", "Arman's", "Dana's"] },
      { q: "Whose is the charger?", options: ["*Arman's", "Leo's", "Dana's"] },
      { q: "Why is Dana's guitar in the flat?", options: ["*She left it after a party.", "She lives there.", "She gave it to Arman."] },
      { q: "Whose are the glasses?", options: ["*Leo's grandma's", "Arman's", "Dana's"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman's socks are in the washing machine.", true],
      ["Arman looked for his charger last week.", true],
      ["The guitar has been there for a week.", false],
      ["Arman wears glasses.", false],
      ["The pizza was Leo and Arman's idea.", true],
    ]),
  ]),

  section("Let's talk: Things that matter", [
    text(
      "Talk to your teacher.",
      "- What's something you own that's very important to you — not because it's expensive? Why? ❤️\n- Do you share things with your family or flatmates? What's ours, what's mine? 🏠\n- Do you lend your things to friends? What would you never lend? 🙅\n- Have you ever kept something that wasn't yours? 😇😈",
    ),
    text(
      "Game: Whose is it? 🕵️",
      "Your teacher describes a thing in their home: *It's made of wood. It's old. It was my grandfather's…* — you guess what it is.\n\nThen describe 3 things in your room. Your teacher guesses — and asks: *Whose was it before? Is it yours or your family's?*",
    ),
    tip("*If you have time:* “Lost property office” role-play — the student lost something on a train; you are the officer: *What does it look like? What is it made of? Is this yours?* Show silly wrong items first! 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "This bag is ___. (my bag)", options: ["*mine", "my", "me"] },
      { q: "Is this pen ___?", options: ["*yours", "your", "your's"] },
      { q: "___ knows the answer. (0 people)", options: ["*Nobody", "Anybody", "Somebody"] },
      { q: "a wallet made of… 👜", options: ["*leather", "glass", "wool"] },
    ]),
    box("Word of the day: finders keepers", "**Finders keepers!** 😏 = a (not very nice) saying: if you find something, you can keep it.\n\n*— That's my pen! — Finders keepers! — No, give it back!* 😄"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. My wallet is made of [leather]. 👜\n2. A [wooden] table is made of wood. 🪵\n3. Socks are often made of [cotton/wool]. 🧦\n4. Her ring is made of [gold/silver]. 💍\n5. Bottles are made of glass or [plastic]. 🧴\n6. This watch is very [valuable] — it was my grandfather's. 💎",
      ),
      choose(
        "Choose.",
        "1. Is this book [*yours/your]?\n2. That's not [*his/him] car.\n3. — Whose keys? — They're [*ours/our].\n4. I can't find it [*anywhere/somewhere].\n5. [*Somebody/Anybody] left a bag here.\n6. [*Whose/Who's] laptop is this?",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch the grammar video: possessive pronouns — mine, yours, his, hers, ours, theirs.", "ZT7B4enrn50"),
      gaps(
        "Complete with the right word.",
        "1. — Is this Leo's jacket? — Yes, it's [his].\n2. — Are these your glasses? — No, they aren't [mine].\n3. We can't find [anything] to eat!\n4. [Nobody] called me today. 😔\n5. This flat isn't my parents' — it's [ours]! 🏠\n6. I've lost my phone! Has [anyone/anybody] seen it?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write a “lost” post for a group chat: you lost something. Say what it is, what it's made of, what it looks like and where you last had it. (40+ words)", 40, {
        read: "*Example:* LOST! 😩 Has anyone found a small brown leather wallet? It's mine — it has my student card and a photo of my dog inside. 🐶 I think I left it somewhere in the library on Tuesday. It isn't valuable, but the photo is very important to me. Please message me if you see it anywhere! Thank you!",
      }),
      record("Record your answer: Describe something you own that is very special to you. What is it made of? Why is it important? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
