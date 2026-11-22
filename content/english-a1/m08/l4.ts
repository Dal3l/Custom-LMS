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
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 8.4 Revision 7–8 — skills tasks with scores + the project "My skills and hobbies".
export default lesson("a1-8.4", "Revision 7–8", () => [
  section("Warm-up: Emoji quiz", [
    box(
      "Today you will…",
      "- review modules 7 and 8: *can / can't, Can I…?, love / hate + -ing, me / him / them*\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your project: **My skills and hobbies**",
    ),
    quiz("Emoji quiz! What's the sentence? 🤔", [
      { q: "🙋🎸👍", options: ["*I can play the guitar.", "I hate the guitar.", "Can I buy a guitar?"] },
      { q: "👩😍💃", options: ["*She loves dancing.", "She can't dance.", "She hates dancing."] },
      { q: "🙋🔑❌💻", options: ["*I can't log in.", "I love my laptop.", "Can you help me?"] },
      { q: "🙋😡⏰🌅", options: ["*I hate getting up early.", "I love mornings.", "I can get up early."] },
      { q: "🤖🌐✅", options: ["*AI can translate.", "AI can't translate.", "AI hates languages."] },
    ]),
    tip("Like in other revision lessons, tasks give points. After the warm-up, the student makes their own emoji sentence for you to guess! 😄"),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "💪 Skills": ["swim", "code", "juggle", "drive"],
      "📲 Apps and tech": ["log in", "download", "password", "restart"],
      "🎵 Fans and music": ["album", "concert", "merch", "playlist"],
    }),
    matchPictures("Match the pictures and the words.", [
      ["photos/skill-guitar.jpg", "play the guitar"],
      ["photos/ai-robot.jpg", "a robot"],
      ["photos/fan-concert.jpg", "a concert"],
      ["photos/hob-cupcakes.jpg", "baking"],
      ["photos/skill-chess.jpg", "play chess"],
    ]),
    match("Match.", [
      ["It doesn't work.", "Try to restart it."],
      ["I'm obsessed with this song!", "Me too! It's a vibe!"],
      ["Can I use your charger?", "Sure, here you are."],
      ["Can you swim?", "Yes, I can."],
    ]),
  ]),

  section("Grammar", [
    choose(
      "can / can't: choose.",
      "1. She [*can speak/cans speak] three languages.\n2. [*Can you/Do you can] help me, please?\n3. Can he drive? — No, he [*can't/doesn't].\n4. AI can [*translate/translates] texts.",
    ),
    gaps("Write the -ing form.", "1. dance → [dancing]\n2. swim → [swimming]\n3. play → [playing]\n4. make → [making]"),
    choose(
      "love / hate + -ing: choose.",
      "1. I love [*listening/listen] to music.\n2. My brother [*hates/hate] cleaning.\n3. We [*don't mind/doesn't mind] walking.",
    ),
    drag(
      "Object pronouns: complete.",
      "1. Billie Eilish? I love [her]!\n2. Where are my keys? I can't find [them].\n3. My dad can cook. I often help [him].\n4. Can you come with [us]?",
      ["she", "they", "he", "we"],
    ),
    order("Make sentences.", ["Can I use your phone?", "She doesn't mind cooking.", "I follow them on YouTube."]),
  ]),

  section("Reading", [
    trueFalse(
      "Read the post. True or false?",
      [
        ["Dana can play the guitar.", false],
        ["She can edit videos.", true],
        ["She loves making TikToks about books.", true],
        ["Her favorite app is a translator app.", false],
        ["She hates reading the comments.", false],
      ],
      {
        read: [
          "## 📚 About me — by dana.reads",
          "Hi! I'm Dana, I'm 16. I can't sing and I can't play the guitar 😅, but I can edit videos! I love making TikToks about books. 📖",
          "I have 5,000 followers now. They love my book reviews, and I love them! I always read the comments — they're so kind. 💜",
          "My favorite app is CapCut — I can edit a video in 10 minutes with it. 🎬 I don't mind getting up early on Saturday to film, because the light is great in the morning.",
          "My dream: a book club with my followers. Can you help me? Follow me! 😊",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How many followers does Dana have?", options: ["*5,000", "500", "50,000"] },
      { q: "“I love them!” — “them” =", options: ["*her followers", "the books", "her parents"] },
      { q: "Why does she film on Saturday morning?", options: ["*the light is great", "she has free time", "her friends help her"] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script once at normal speed, then once more slowly."),
    ...listening(
      "Listen. Arman calls a computer shop.",
      "**Shop:** Hello, TechFix. How can I help you?\n\n**Arman:** Hi! My laptop doesn't work. The screen is black. 😟\n\n**Shop:** OK. Can you bring it to the shop?\n\n**Arman:** Yes, I can. Can I come today?\n\n**Shop:** Sorry, you can't come today — we close at 5. Can you come tomorrow at 10?\n\n**Arman:** Yes, that's fine. Can you fix it fast? I need it for school.\n\n**Shop:** We can fix it in two days. Don't worry!\n\n**Arman:** Great. Thank you!",
    ),
    quiz("Listen and choose.", [
      { q: "What's the problem?", options: ["*The laptop screen is black.", "He can't log in.", "The Wi-Fi is slow."] },
      { q: "Can Arman come today?", options: ["*No, he can't.", "Yes, he can."] },
      { q: "When can he come?", options: ["*tomorrow at 10", "today at 5", "in two days"] },
      { q: "How long is the repair?", options: ["*two days", "one hour", "a week"] },
    ]),
  ]),

  section("Speaking and writing", [
    text(
      "Speaking: tell your teacher 🗣️",
      "Talk for 1–2 minutes:\n\n- 3 things you can do and 2 things you can't do\n- what you love / don't mind / hate doing\n- your favorite artist, band or series: *I love them because…*\n- an app or a gadget you can't live without\n\nYour teacher asks 3 questions!",
    ),
    match("Match the questions and the answers.", [
      ["Can you cook?", "Yes, I can. I can make pizza!"],
      ["Do you like dancing?", "No, I hate it!"],
      ["Who's your favorite singer?", "Dua Lipa. I love her!"],
      ["Can I ask you a question?", "Of course!"],
    ]),
  ]),

  section("Project: My skills and hobbies", [
    box(
      "Your project 🚀",
      "Make a page or a short video: **My skills and hobbies**\n\n1. **I can…** — 3–5 skills (and one skill you want to learn)\n2. **I love… / I hate…** — hobbies, music, series\n3. **My favorite artist** — who are they? why do you love them?\n4. **My tech** — your favorite app or gadget and what it can do\n5. **My dream project** — a hobby business or a channel\n\nAdd photos or drawings! 📸",
    ),
    text("Plan your project. Talk to your teacher.", "- Page or video? 📝🎥\n- What's your best skill to show?\n- What photos can you add?"),
  ]),

  homework(
    [
      write("Project: My skills and hobbies. (70+ words)", 70, {
        read: "*Example:* I can swim, I can cook pasta and I can edit videos. I can't play the guitar, but I want to learn! I love listening to music and taking photos. I don't mind cleaning my room, but I hate getting up early. My favorite band is Imagine Dragons — I love them! My favorite app is CapCut. It can edit videos very fast. My dream project is a YouTube channel about cooking.",
      }),
      record("Project video: present your skills and hobbies (1–2 minutes). Show a skill if you can! 🤹", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      gaps("Review: complete.", "1. [Can] you help me? — Of course!\n2. She loves [dancing]. (dance)\n3. My friends? I love [them]!\n4. I [can't/cannot] log in. I forgot my password."),
      trueFalse("Correct or not?", [
        ["He cans swim.", false],
        ["I don't mind cooking.", true],
        ["She loves they.", false],
        ["Can I use your laptop?", true],
      ]),
      choose("Choose.", "1. AI [*can't/doesn't can] feel sad.\n2. I'm obsessed [*with/about] this series."),
    ],
    "Homework: Review",
  ),
]);
