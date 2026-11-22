import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
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

// 10.2 Outfit of the day — G: Present Continuous − and ?; Present Simple vs Present Continuous. V: clothes. ★ fit, drip. Main format: photos + reading (OOTD posts) + video.
export default lesson("a1-10.2", "Outfit of the day", () => [
  section("Warm-up: Street style", [
    box("Today you will…", "- name clothes 👕👖👟\n- say what you're wearing: *I'm wearing…*\n- compare *usually* and *today*: *I usually wear jeans, but today I'm wearing a dress.*"),
    picture("Street style in Harajuku, Tokyo 🇯🇵", ["photos/fit-harajuku.jpg", "photos/fit-harajuku2.jpg"]),
    text(
      "Talk about the photos.",
      "- What colors can you see? 🎨\n- Which outfit do you like? Why?\n- Is it a good outfit for winter or for summer? ❄️☀️\n- Do people in your city wear clothes like this?",
    ),
  ]),

  section("Vocabulary: Clothes", [
    words("Clothes", [
      ["a T-shirt — a shirt", "👕"],
      ["a hoodie — a sweater", "🧥 🇬🇧 also: a jumper"],
      ["a jacket — a coat", "🧥"],
      ["a dress — a skirt", "👗"],
      ["jeans — pants", "👖 🇬🇧 trousers · 🇺🇸 pants"],
      ["shorts", "🩳"],
      ["sneakers — boots", "👟 — 🥾 🇬🇧 trainers"],
      ["a hat — a cap", "🎩 — 🧢"],
      ["a scarf", "🧣"],
      ["glasses — sunglasses", "👓 — 🕶️"],
      ["a bag", "👜"],
      ["an outfit", "👕👖👟 all your clothes together"],
      ["a fit — drip", "😎 slang: *Nice fit!* = nice outfit · *drip* = very cool style"],
    ]),
    sort("Summer or winter? Sort.", {
      "☀️ Summer": ["shorts", "T-shirt", "sunglasses", "cap"],
      "❄️ Winter": ["coat", "scarf", "boots", "sweater"],
    }),
    match("Match.", [
      ["🇬🇧 trousers", "🇺🇸 pants"],
      ["🇬🇧 trainers", "🇺🇸 sneakers"],
      ["🇬🇧 jumper", "sweater"],
      ["Nice fit!", "Nice outfit!"],
    ]),
  ]),

  section("Reading: #OOTD", [
    tip("Read the posts. The student finds the clothes in each post. Then compare *usually* (🔁) and *today* (▶️)."),
    quiz(
      "Read the posts. Choose.",
      [
        { q: "What is Aruzhan wearing today?", options: ["*a long coat and boots", "a hoodie and sneakers", "a dress"] },
        { q: "Leo usually wears…", options: ["*a hoodie and jeans", "a suit", "shorts"] },
        { q: "Why is Leo wearing a shirt today?", options: ["*He's going to a job interview.", "It's hot.", "He's at a party."] },
        { q: "Mia isn't wearing…", options: ["*a jacket", "sunglasses", "shorts"] },
      ],
      {
        read: [
          "## 👗 #OOTD — Outfit of the day",
          "**aruzhan_style** ❄️ *It's −15° in Astana today! I'm wearing my long black coat, a big white scarf and warm boots. I usually love bright colors, but today it's all black and white. 🖤🤍*",
          "**leo.fits** 👔 *I usually wear a hoodie and jeans — every day! 😅 But today I'm wearing a blue shirt and black pants. Why? I'm going to a job interview! Wish me luck! 🍀*",
          "**mia_sunny** ☀️ *Beach day! I'm wearing shorts, a white T-shirt and my new sunglasses. I'm not wearing a jacket — it's 30°! I usually wear sneakers, but today I'm wearing sandals. 🩴*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Aruzhan usually loves bright colors.", true],
      ["Leo is wearing a hoodie today.", false],
      ["Mia usually wears sandals.", false],
      ["It's 30° on Mia's beach day.", true],
    ]),
    text("Talk to your teacher.", "- Whose outfit do you like? Why?\n- What do you usually wear to school or work? 🏫💼\n- What do you wear to a party? To the gym?"),
  ]),

  section("Grammar: Questions, negatives, usually vs now", [
    table("pc-questions"),
    choose(
      "Choose.",
      "1. [*Are/Is] you wearing a hat?\n2. She [*isn't/aren't] wearing a coat.\n3. Is he wearing glasses? — Yes, he [*is/does].\n4. What [*are/is] they doing?",
    ),
    table("ps-vs-pc"),
    choose(
      "usually or now? Choose.",
      "1. I usually [*wear/'m wearing] jeans.\n2. Today I [wear/*'m wearing] a dress.\n3. Look! Leo [plays/*is playing] the guitar!\n4. Mia [*goes/is going] to the gym every Monday.",
    ),
    drag(
      "Complete.",
      "Dana usually [wears] sneakers, but today she [is] wearing boots. She [isn't] wearing a hat. [Is] she wearing a scarf? Yes, she [is]!",
      ["wearing", "are", "does"],
    ),
  ]),

  section("Video: Clothes", [
    video("Watch the A1 lesson about clothes. Repeat the words!", "He9MZI7j_Nc"),
    text("Talk to your teacher.", "- What new clothes words are in the video?\n- What clothes are your favorite? Why? 💜"),
  ]),

  section("Let's talk: My outfit", [
    text(
      "Describe your outfit 👕",
      "*Right now I'm wearing… I usually wear… but today…*\n\nThen describe your teacher's outfit: *You're wearing a…* 😄",
    ),
    text(
      "Game: Who is it? 🕵️",
      "Your teacher describes a person's outfit in a photo, a film or a group photo: *She's wearing a red dress and black boots…* — you guess who it is. Then change roles!",
    ),
    text("Talk to your teacher.", "- Is fashion important for you? 🤔\n- Comfortable or stylish — what's more important?\n- Do you buy clothes online or in shops? 🛍️"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ you wearing a hoodie?", options: ["*Are", "Do", "Is"] },
      { q: "I usually ___ sneakers.", options: ["*wear", "'m wearing", "wears"] },
      { q: "🇺🇸 pants = 🇬🇧 …", options: ["*trousers", "shorts", "jeans"] },
    ]),
    box("Word of the day: drip", "**drip** 💧😎 = very cool, stylish clothes (slang).\n\n*Your new sneakers? Pure drip!*"),
  ]),

  homework(
    [
      gaps("Write the word.", "1. 👖 [jeans]\n2. 🧣 a [scarf]\n3. 🧢 a [cap]\n4. 👗 a [dress]\n5. 👟 🇺🇸 [sneakers]"),
      choose("Choose.", "1. She [*isn't/doesn't] wearing a jacket.\n2. [*Is/Are] he wearing a cap?\n3. I [*don't usually wear/'m not usually wearing] skirts."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: Present Continuous questions and negatives.", "q8dXvQ-4MoU"),
      trueFalse("Correct or not?", [
        ["Are you wearing a hat?", true],
        ["She not wearing a coat.", false],
        ["I usually wear jeans.", true],
        ["Today I wear a dress.", false],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write your #OOTD post: What are you wearing today? What do you usually wear? (35+ words)", 35, {
        read: "*Example:* #OOTD 😎 Today I'm wearing a green hoodie, black jeans and white sneakers. I'm not wearing a hat — it's warm! I usually wear a school shirt, but today is Saturday. My favorite thing is my old denim jacket. Nice fit? 😄",
      }),
      record("Record your answer: show (or describe) your outfit today, like a fashion vlogger. 🎥", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
