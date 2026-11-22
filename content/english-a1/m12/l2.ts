import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
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

// 12.2 Throwback — G: Past Simple, regular verbs (positive only); went / had / saw as ready words. Pronunciation tip: -ed. Main format: reading (#throwback posts) + listening.
export default lesson("a1-12.2", "Throwback", () => [
  section("Warm-up: Old photos", [
    box("Today you will…", "- talk about your childhood 👶\n- say *I played… I watched… I went…*\n- say -ed correctly: /t/, /d/, /ɪd/ 🗣️"),
    picture("Old things from your parents' childhood 📸", ["photos/old-polaroid.jpg", "photos/old-vhs.jpg"]),
    text(
      "Talk about the photos.",
      "- What are these things? Do you know? 🤔 (a Polaroid camera, a VHS tape)\n- Are there old family photos in your home? 📸\n- Who's in your favorite old photo?\n- What was your favorite toy when you were small? 🧸",
    ),
  ]),

  section("Vocabulary: Childhood", [
    words("Childhood", [
      ["a child — childhood", "👶 — the time when you were a child"],
      ["when I was small / little", "🧒", "When I was small, I lived in Shymkent."],
      ["live — lived", "🏠", "I lived in a small town."],
      ["play — played", "🧸", "I played with my cousins."],
      ["watch — watched", "📺", "I watched cartoons every day."],
      ["love — loved", "❤️"],
      ["want — wanted", "🙏", "I wanted a dog."],
      ["go — went", "🚶 (different!)", "I went to kindergarten."],
      ["have — had", "🎁 (different!)", "I had a red bike."],
      ["see — saw", "👀 (different!)"],
      ["kindergarten", "🧸🏫 school for small children"],
      ["a cartoon — a toy", "📺🐭 — 🧸"],
    ]),
    match("Match: now → past.", [
      ["play", "played"],
      ["go", "went"],
      ["have", "had"],
      ["see", "saw"],
      ["study", "studied"],
    ]),
    gaps("Complete with the past.", "1. When I was small, I [lived] in a village. (live)\n2. I [played] with my cousins every day. (play)\n3. I [had] a red bike. (have)\n4. We [went] to the sea in summer. (go)\n5. I [loved] cartoons! (love)"),
  ]),

  section("Grammar: Past Simple — first steps", [
    tip("Today only positive sentences. *went, had, saw* — learn them as words. Questions in the past come in A2!"),
    table("past-simple"),
    gaps("Write the past.", "1. watch → [watched]\n2. live → [lived]\n3. study → [studied]\n4. go → [went]\n5. have → [had]\n6. want → [wanted]"),
    choose(
      "Choose.",
      "1. When I was small, I [*played/play] with toy cars.\n2. Yesterday she [*watched/watches] a film.\n3. Last summer we [*went/goed] to the sea.\n4. I [*had/haved] a cat when I was five.",
    ),
    box(
      "🗣️ Pronunciation tip: -ed",
      "**/t/** — watch**ed**, lik**ed**, walk**ed**, help**ed**\n\n**/d/** — play**ed**, liv**ed**, lov**ed**, call**ed**\n\n**/ɪd/** (an extra sound!) — want**ed**, start**ed**, need**ed** — only after **t** or **d**",
    ),
    sort("How do you say -ed? Sort. 🗣️", {
      "/t/": ["watched", "walked", "helped"],
      "/d/": ["played", "lived", "loved"],
      "/ɪd/": ["wanted", "started", "needed"],
    }),
  ]),

  section("Reading: #Throwback", [
    tip("Read the posts. The student finds all the past verbs. Which are “different” (went, had, saw)?"),
    quiz(
      "Read the #throwback posts. Choose.",
      [
        { q: "When she was small, Aigerim lived…", options: ["*in a small village", "in Astana", "in London"] },
        { q: "Tom had…", options: ["*a big red bike", "a dog", "a guitar"] },
        { q: "Mia and her brother watched ___ every day.", options: ["*cartoons", "football", "the news"] },
      ],
      {
        read: [
          "## 📸 #Throwback",
          "**aigerim.b** 👧 *Me, 6 years old! When I was small, I lived in a small village with my grandparents. I played outside all day and I helped my grandma in the garden. 🌻 I loved it!*",
          "**tom.plays** 🚲 *Throwback to 2012! I had a big red bike and I loved it! Here I'm 7. I wanted to be a pilot! ✈️*",
          "**mia_sunny** 📺 *Me and my brother, 2010. We watched cartoons every day after kindergarten. Our favorite was Peppa Pig! 🐷 Last year we went to a Peppa Pig park — and I was so happy!* 😄",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Aigerim helped her grandma in the garden.", true],
      ["Tom wanted to be a doctor.", false],
      ["Mia and her brother went to a Peppa Pig park.", true],
    ]),
    text("Talk to your teacher.", "- Which post do you like? Why? 💜\n- What did you want to be when you were small? 👩‍🚀👨‍🍳\n- What cartoons did you watch? 📺"),
  ]),

  section("Listening: Grandma's childhood", [
    ...listening(
      "Listen. Leo asks his grandma about her childhood.",
      "**Leo:** Grandma, where did you live when you were small?\n\n**Grandma:** I lived in a small town near the mountains. 🏔️\n\n**Leo:** Did you have a TV?\n\n**Grandma:** No! There wasn't a TV in our house. We played outside with friends all day. ⚽\n\n**Leo:** All day? And your phone?\n\n**Grandma:** Ha-ha! There weren't any mobile phones! I walked to my friend's house and called her name from the street! 😄\n\n**Leo:** Wow. And what did you love?\n\n**Grandma:** I loved books. I read every evening. And I had a cat — Murka! 🐱",
    ),
    quiz("Listen and choose.", [
      { q: "Grandma lived…", options: ["*in a small town near the mountains", "in a big city", "by the sea"] },
      { q: "Was there a TV in her house?", options: ["*No, there wasn't.", "Yes, there was."] },
      { q: "What did she love?", options: ["*books", "TV", "computers"] },
      { q: "Her cat was called…", options: ["*Murka", "Barsik", "Tiger"] },
    ]),
  ]),

  section("Let's talk: My childhood", [
    text(
      "Your throwback 📸",
      "Show (or describe) an old photo of you. Tell your teacher 3–4 sentences:\n\n*In this photo I'm 5. I lived in… I played… I loved… I had…*\n\nYour teacher tells about their childhood too! 😊",
    ),
    text("Talk to your teacher.", "- What was your favorite toy or game? 🧸🎮\n- Who was your best friend when you were small?\n- Is childhood today different from your parents' childhood? How?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "go → …", options: ["*went", "goed", "gone"] },
      { q: "When I was small, I ___ cartoons.", options: ["*watched", "watch", "watching"] },
      { q: "“wanted” — the -ed sounds like…", options: ["*/ɪd/", "/t/", "/d/"] },
    ]),
    box("Word of the day: core memory", "**a core memory** 💛 = a very important memory from your life.\n\n*My first concert with my dad — that's a core memory!*"),
  ]),

  homework(
    [
      gaps("Write the past.", "1. play → [played]\n2. love → [loved]\n3. go → [went]\n4. have → [had]\n5. see → [saw]"),
      choose("Choose.", "1. I [*lived/live] in Almaty when I was small.\n2. We [*had/has] a big dog.\n3. She [*watched/watchd] a film yesterday."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch: how to say -ed — /t/, /d/ or /ɪd/.", "vv7cBMCBUdk"),
      write("Write 6 past verbs from the video and their sound: /t/, /d/ or /ɪd/.", null),
    ],
    "Homework: Video and pronunciation",
  ),
  homework(
    [
      write("Write a #throwback post about your childhood (3–5 sentences). Use lived, played, loved, wanted, had, went. (35+ words)", 35, {
        read: "*Example:* #Throwback 📸 Me, 7 years old! When I was small, I lived in Taraz. I played football with my brother every day. I loved ice cream and cartoons. I had a little white cat. I wanted to be a footballer! ⚽",
      }),
      record("Record your answer: show an old photo of you (or describe it) and tell 3–4 sentences about your childhood. 📸", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
