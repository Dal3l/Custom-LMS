import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  matchPictures,
  order,
  quiz,
  record,
  picture,
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

// 2.1 What's in my bag? — G: this / that, What's this?, a / an. V: things and gadgets. Main format: text + pictures.
export default lesson("a1-2.1", "What's in my bag?", () => [
  section("Warm-up: My bag", [
    box("Today you will…", "- name things in your bag\n- ask *What's this? What's that?*\n- say *It's a… / It's an…*"),
    tip("Quick review of module 1: *What's your name? Where are you from?* Then show your own bag or pencil case and take out 2–3 things: *This is my phone. This is my pen.*"),
    picture("What's in the backpack?", ["photos/warm-bag.jpg"], "A traveler's things for 188 days in Asia! What do you see?"),
    quiz("Whose bag is it? Guess! 🎒", [
      { q: "⚽ + 👟 + 💧 + 🧦", options: ["*a football player", "a tourist", "a student"] },
      { q: "🛂 + 🕶️ + 🗺️ + 📷", options: ["*a tourist", "a doctor", "a gamer"] },
      { q: "💻 + 📒 + 🖊️ + 🪪", options: ["*a student", "a football player", "a baby"] },
      { q: "🎧 + 🎮 + 🔋 + 🍫", options: ["*a gamer", "a teacher", "a tourist"] },
    ]),
    text("Talk to your teacher.", "- Is your bag big or small? 👜\n- What 3 things are always in your bag?"),
  ]),

  section("Vocabulary: Things in my bag", [
    words("Things in my bag", [
      ["a phone", "📱", "This is my phone."],
      ["a charger", "🔌 you charge your phone with it"],
      ["a power bank", "🔋 a small battery for your phone"],
      ["keys", "🔑 you open a door with them"],
      ["a wallet", "👛 money and cards are in it"],
      ["headphones", "🎧 big, over your ears"],
      ["earbuds", "🎧 small, in your ears"],
      ["sunglasses", "🕶️"],
      ["a water bottle", "💧"],
      ["a notebook", "📒"],
      ["a pen", "🖊️"],
      ["an umbrella", "☂️"],
      ["an ID card", "🪪 a card with your name and photo"],
      ["a laptop", "💻"],
      ["a backpack", "🎒 a bag on your back"],
      ["lip balm", "💄 for your lips in winter"],
    ]),
    matchPictures("Match the pictures and the words.", [
      ["photos/obj-phone.jpg", "a phone"],
      ["photos/obj-keys.jpg", "keys"],
      ["photos/obj-headphones.jpg", "headphones"],
      ["photos/obj-sunglasses.jpg", "sunglasses"],
      ["photos/obj-umbrella.jpg", "an umbrella"],
      ["photos/obj-backpack.jpg", "a backpack"],
    ]),
    gaps(
      "What is it? Write the word.",
      "1. You open a door with it: k _ _ s → [keys]\n2. Money and cards are in it: w _ _ _ _ t → [wallet]\n3. For rain: u _ _ _ _ _ _ a → [umbrella]\n4. You charge your phone with it: c _ _ _ _ _ r → [charger]\n5. For music, in your ears: e _ _ _ _ _ s → [earbuds]",
    ),
    sort("a or an? Sort.", {
      a: ["phone", "wallet", "notebook", "pen", "laptop"],
      an: ["umbrella", "ID card", "apple", "orange", "earbud"],
    }),
  ]),

  section("Reading: What's in my bag?", [
    tip("Read the post together. Then the student finds the things in the picture task above (or in your bag)."),
    trueFalse(
      "Read Aigerim's post. True or false?",
      [
        ["Aigerim's bag is small.", true],
        ["Her phone is in a pink case.", true],
        ["Her headphones are in the bag.", false],
        ["A power bank is in her bag.", true],
        ["Her keys are on a keychain with a cat.", false],
      ],
      {
        read: [
          "## 👜 What's in my bag? — by Aigerim",
          "Hi, everyone! This is my bag. It's small, but my life is in it! 😄",
          "This is my phone. It's in a pink case. 📱 And this is my power bank — very important!",
          "These are my earbuds. My headphones aren't in the bag — they're big. 🎧",
          "This is my wallet, and this is my ID card. My keys are on a keychain with a little panda. 🐼🔑",
          "And what's that? Oh, it's a lip balm and an old chocolate bar! 🍫😅",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Her phone case is…", options: ["*pink", "black", "blue"] },
      { q: "The keychain is a…", options: ["cat", "*panda", "dog"] },
      { q: "The old thing in the bag is…", options: ["a pen", "*a chocolate bar", "a notebook"] },
    ]),
    text("Talk to your teacher.", "- Is your bag like Aigerim's bag?\n- What's on your keychain? 🔑\n- What color is your phone case?\n- What strange thing is in your bag? 😄"),
  ]),

  section("Grammar: this / that", [
    tip("Hold a pen: *This is a pen.* Point to the door: *That's a door.* Then the student does the same with things in the room."),
    table("this-that"),
    choose(
      "Near 👇 or far 👉? Choose.",
      "1. 👇 [*This/That] is my phone.\n2. 👉 [This/*That] is my bag — there, on the chair.\n3. 👇 What's [*this/that]? — It's a charger.\n4. 👉 What's [this/*that]? — It's an umbrella.",
    ),
    gaps("Complete with a or an.", "1. It's [a] wallet.\n2. It's [an] umbrella.\n3. This is [an] ID card.\n4. That's [a] laptop.\n5. It's [an] old notebook."),
    drag(
      "Complete the dialogue.",
      "A: What's [this]? 👇\nB: It's [a] power bank.\nA: And what's [that]? 👉\nB: It's [an] umbrella. It's my sister's.",
      ["these", "the"],
    ),
    order("Put the words in order.", ["What's this?", "That is my backpack.", "It's an old phone.", "This is my wallet."]),
    tip("*If you have time:* the order task."),
  ]),

  section("Let's talk: Mystery bag", [
    text(
      "Game: the mystery bag 🎒",
      "Your teacher has a bag (real or on the board). Ask: *What's this? What's that?*\n\nGuess: *Is it a phone? Is it a charger?*\n\nThen change roles!",
    ),
    text(
      "Pack your bag! What's in your bag for…",
      "- school or work 🏫\n- the gym 🏋️\n- a trip ✈️\n- a rainy day ☔\n\n*For the gym: a water bottle, headphones, a towel…*",
    ),
    tip("In a one-to-one online lesson, draw a bag on the board and put things in it with the student. New words are fine — add them to the dictionary."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "👇 ___ is my phone.", options: ["*This", "That", "These"] },
      { q: "It's ___ umbrella.", options: ["*an", "a", "—"] },
      { q: "You open a door with…", options: ["*keys", "earbuds", "a wallet"] },
      { q: "🕶️ = ?", options: ["*sunglasses", "headphones", "glasses of water"] },
    ]),
    box("Word of the day: lowkey", "**lowkey** = a little, secretly 🤫\n\n*I lowkey love this old phone.* (I love it a little, but I don't say it.)"),
  ]),

  homework(
    [
      matchPictures("Match the pictures and the words.", [
        ["photos/obj-phone.jpg", "a phone"],
        ["photos/obj-keys.jpg", "keys"],
        ["photos/obj-sunglasses.jpg", "sunglasses"],
        ["photos/obj-umbrella.jpg", "an umbrella"],
      ]),
      gaps("Write a or an.", "1. [a] charger\n2. [an] ID card\n3. [a] notebook\n4. [an] umbrella"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("This or that?", "1. 👇 [*This/That] is my wallet.\n2. 👉 Look! [This/*That] is my bus!\n3. 👇 What's [*this/that]? — It's my ID card."),
      order("Put the dialogue in order.", ["What's that?\nIt's my new backpack.\nOh, cool! And what's this?\nIt's a power bank."], "lines"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the first 2–3 minutes. An actor shows what's in her bag.", "RxyyqyczwgU"),
      write("What things do you see in the video? Write 5 things.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about your bag: What's in it? (25+ words)", 25, {
        read: "*Example:* This is my backpack. It's black. My laptop and my charger are in it. This is my water bottle, and these are my keys. My earbuds are in the bag too!",
      }),
      record("Record a video-style answer: show (or describe) 5 things in your bag. *This is my… It's a…*", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
