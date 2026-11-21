import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  matchPictures,
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

// 8.3 From hobby to business — skills lesson: stories of people of different ages; review of module 8. Main format: reading + video.
export default lesson("a1-8.3", "From hobby to business", () => [
  section("Warm-up: What's the hobby?", [
    box("Today you will…", "- read stories: how a hobby becomes a business 💡\n- review *love / like / hate + -ing* and *me, him, them*\n- invent your own project 🚀"),
    matchPictures("What's the hobby? Match the photos. 🎨", [
      ["photos/hob-yarn.jpg", "knitting"],
      ["photos/hob-pottery.jpg", "making pottery"],
      ["photos/hob-cupcakes.jpg", "baking"],
      ["photos/hob-jewelry.jpg", "making jewelry"],
    ]),
    text("Talk to your teacher.", "- Which hobby do you like? Which is boring for you? 🥱\n- Do you know someone who sells things they make? 🛍️"),
  ]),

  section("Vocabulary: Hobby and business", [
    words("Hobby and business", [
      ["a hobby", "🎨 something you love doing in your free time"],
      ["a business", "💼 you make or sell things for money"],
      ["make — sell — buy", "🛠️ — 💰 — 🛒", "She makes and sells candles."],
      ["an online shop", "🛍️💻"],
      ["a customer", "🙋 a person who buys"],
      ["an order", "📦 *I have 20 orders this week!*"],
      ["a channel", "📺 on YouTube or TikTok"],
      ["money — earn money", "💵 get money for work"],
      ["handmade", "🖐️ made by hand, not in a factory"],
      ["an idea", "💡"],
      ["start a business", "🚀"],
      ["be proud of", "😊🏆 feel happy about what you do"],
    ]),
    match("Match.", [
      ["start", "a business"],
      ["sell", "things online"],
      ["earn", "money"],
      ["have", "an idea"],
      ["open", "an online shop"],
    ]),
  ]),

  section("Reading: Hobby to business", [
    tip("Three stories, three ages. Read one at a time and ask: *What does she / he love doing? What does she / he sell?* These are example stories, not real people."),
    quiz(
      "Read the stories. Choose.",
      [
        { q: "Who sells things for pets?", options: ["*Asel", "Tim", "Rosa"] },
        { q: "Tim's hobby is…", options: ["*playing video games", "knitting", "baking"] },
        { q: "Who is 67?", options: ["*Rosa", "Tim", "Asel"] },
        { q: "Who has customers in other countries?", options: ["*Rosa", "Tim", "Asel"] },
      ],
      {
        read: [
          "## 💡 From hobby to business",
          "**🐶 Asel, 15, Almaty** — *I love animals, and I love making things! I make collars and toys for dogs and cats. I sell them on Instagram. My customers send me photos of their pets with my toys — I love it! I don't earn a lot of money, but I'm proud of my little business.*",
          "**🎮 Tim, 22, Manchester** — *I love playing video games. I have a YouTube channel about games, and I have 300,000 followers! People watch me, and companies pay me for ads. I don't mind editing videos at night — it's my dream job.*",
          "**🧶 Rosa, 67, Barcelona** — *I'm a grandma, and I love knitting. My granddaughter says: “Grandma, your sweaters are amazing! Sell them online!” She helps me with the online shop. Now I have customers in the USA, Japan and Germany! I'm 67, and I'm a businesswoman! 😄*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Asel sells her things on Instagram.", true],
      ["Tim hates editing videos.", false],
      ["Rosa's granddaughter helps her with the online shop.", true],
      ["Rosa's customers are only in Spain.", false],
    ]),
    text("Talk to your teacher.", "- Which story do you like the most? Why?\n- Can a hobby be a job? Is it a good idea? 🤔\n- Is 67 too old to start a business? 👵💼"),
  ]),

  section("Video: A teen business", [
    video("Watch the news story: a teenager and his 3D printer. What does he make and sell?", "fDLskVTXfU4"),
    text("Talk to your teacher.", "- What does he make?\n- Who are his customers?\n- Do you want a 3D printer? What can you make with it? 🖨️"),
    tip("Real news English is fast — stop after 1 minute and check: *What does he love doing? What does he make?*"),
  ]),

  section("Review: Module 8", [
    choose(
      "Choose.",
      "1. Asel loves [*making/make] toys.\n2. Tim [*doesn't mind/don't mind] editing videos.\n3. Rosa's sweaters are great. People love [*them/they].\n4. Her granddaughter helps [*her/she].\n5. I'm a fan of Tim. I watch [*him/he] every day.",
    ),
    drag(
      "Complete the story.",
      "Leo [loves] baking. He [makes] cupcakes and [sells] them at school. His friends love [them]. Leo [doesn't] mind getting up early to bake! 🧁",
      ["love", "sell", "they", "don't"],
    ),
    gaps("Write the -ing form.", "1. knit → [knitting]\n2. bake → [baking]\n3. sell → [selling]\n4. shop → [shopping]"),
  ]),

  section("Let's talk: My project", [
    text(
      "Invent your project 🚀",
      "Think of a hobby business or a channel:\n\n- *What do you love doing?*\n- *What can you make or do?* (videos, cakes, drawings, lessons…)\n- *Who are your customers or viewers?*\n- *Where do you sell it?* (Instagram, an online shop, at school…)\n- *What's the name?*\n\nPresent it to your teacher: *My project is called… I love… I make… My customers…*",
    ),
    text("Talk to your teacher.", "- Is it easy or difficult to start a business? 💪\n- What's more important: money or loving your job? 💰❤️"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A person who buys =", options: ["*a customer", "a seller", "a hobby"] },
      { q: "made by hand =", options: ["*handmade", "homemade video", "hand shop"] },
      { q: "She loves ___ .", options: ["*knitting", "knit", "knits"] },
    ]),
    box("Word of the day: side hustle", "**a side hustle** 💼✨ = a small business or job next to your main job or school.\n\n*My side hustle is making cupcakes!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. You love doing it in your free time: a [hobby]\n2. She makes things and [sells] them. 💰\n3. A shop on the internet: an [online] shop\n4. A person who buys: a [customer]"),
      choose("Choose.", "1. My grandma loves [*knitting/knit].\n2. I like his videos. I watch [*them/they].\n3. He [*doesn't/don't] mind working at night."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch the documentary about Alfie, the “Odd Job Boy”. What's his business?", "4ckVGEffs7U"),
      write("Write 3 sentences about Alfie: What does he do? What does he love? What's interesting?", 15),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about your hobby business or channel idea: name, what you make or do, customers, why you love it. (40+ words)", 40, {
        read: "*Example:* My project is called “Draw Your Pet”. I love drawing animals! People send me photos of their pets, and I draw them. I sell the pictures on Instagram. My customers are pet lovers — and their grandmas! 😄 I don't earn a lot, but I'm proud of it.",
      }),
      record("Record a 1-minute pitch: present your project like on a TV show! 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
