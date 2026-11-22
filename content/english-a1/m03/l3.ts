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

// 3.3 Generations — skills lesson: reading about generations, years and ages; review of be and have. Main format: reading + a short video.
export default lesson("a1-3.3", "Generations", () => [
  section("Warm-up: Old and young", [
    box("Today you will…", "- say years: *1990, 2010*\n- read about Boomers, Millennials, Gen Z and Gen Alpha\n- say your generation and what it has"),
    text(
      "Talk to your teacher.",
      "- How old are your grandparents? And your parents? (You can guess! 🙂)\n- What's “old” for you — 30? 50? 80? 🤔\n- What do your grandparents say about phones and the internet? 📱\n- What app is “for old people”, for you? 😄\n- What's cool for your generation?",
    ),
  ]),

  section("Vocabulary: Years and generations", [
    box(
      "How we say years",
      "**1965** = nineteen sixty-five\n\n**1990** = nineteen ninety\n\n**2005** = two thousand (and) five\n\n**2013** = twenty thirteen *or* two thousand (and) thirteen\n\n**the 90s** = the nineties (1990–1999)",
    ),
    words("Generations", [
      ["a generation", "👨‍👩‍👧 people born in the same years"],
      ["born in…", "👶 I was born in 2008. (your birthday year)", "I was born in 2010."],
      ["Baby Boomers", "📻 born 1946–1964"],
      ["Gen X", "📼 born 1965–1980"],
      ["Millennials", "📟 born 1981–1996 · also: Gen Y"],
      ["Gen Z", "📱 born 1997–2012 · 🇺🇸 Gen Zee, 🇬🇧 Gen Zed"],
      ["Gen Alpha", "📲 born 2013–2024"],
      ["the internet", "🌐"],
      ["social media", "💬 Instagram, TikTok…"],
    ]),
    match("Match the years.", [
      ["1985", "nineteen eighty-five"],
      ["1999", "nineteen ninety-nine"],
      ["2007", "two thousand and seven"],
      ["2015", "twenty fifteen"],
      ["the 80s", "the eighties"],
    ]),
    gaps("Write the year in numbers.", "1. nineteen seventy → [1970]\n2. two thousand and nine → [2009]\n3. nineteen ninety-six → [1996]\n4. twenty twenty → [2020]"),
  ]),

  section("Reading: Every generation has…", [
    tip("Read the text together, one generation at a time. Ask: *What do they have? What's their favorite thing?*"),
    matchPictures(
      "Read the text. Match the generation and the thing.",
      [
        ["photos/gen-record.jpg", "Baby Boomers"],
        ["photos/gen-cassette.jpg", "Gen X"],
        ["photos/gen-flip.jpg", "Millennials"],
        ["photos/obj-phone.jpg", "Gen Z"],
        ["photos/gen-tablet.jpg", "Gen Alpha"],
      ],
      {
        read: [
          "## 📅 Every generation has its thing",
          "**Baby Boomers** (born 1946–1964) are the grandparents of today. Their favorite music is on **records**. They have a TV, but it's black and white! 📺",
          "**Gen X** (born 1965–1980) has **cassettes** and a Walkman. Their music is in their pocket for the first time. 📼",
          "**Millennials** (born 1981–1996) have the first mobile phones — small **flip phones**. They have the internet at home, and it's very slow! 🐢",
          "**Gen Z** (born 1997–2012) has **smartphones** and social media. Their favorite apps are TikTok, Instagram and YouTube. 📱",
          "**Gen Alpha** (born 2013–2024) is very young. They have **tablets** from the age of 2 or 3! They're the first generation with AI from childhood. 🤖",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Baby Boomers: born 1946–1964.", true],
      ["Gen X has smartphones.", false],
      ["Millennials' first phones are flip phones.", true],
      ["Gen Alpha is the first generation with AI from childhood.", true],
      ["Gen Z has cassettes.", false],
    ]),
    quiz("Which generation is it?", [
      { q: "Ali was born in 2001.", options: ["*Gen Z", "Millennials", "Gen X"] },
      { q: "My mom was born in 1988.", options: ["*Millennials", "Gen Alpha", "Baby Boomers"] },
      { q: "My grandpa was born in 1958.", options: ["*Baby Boomers", "Gen X", "Gen Z"] },
      { q: "My little cousin was born in 2017.", options: ["*Gen Alpha", "Gen Z", "Millennials"] },
    ]),
  ]),

  section("Video: Generations in one minute", [
    video("Watch the short video about generations. What generations do you hear?", "8kHpLG_Dg48"),
    text("Talk to your teacher.", "- What generations are in the video?\n- What's new for you in the video?\n- What generation is the most interesting, for you? Why? 🤔"),
    tip("The video is fast and in natural English — it's OK to understand only the generation names and the years. Watch twice."),
  ]),

  section("Review: be and have", [
    choose(
      "be or have? Choose.",
      "1. Gen Z [*has/is] smartphones.\n2. My grandparents [*are/have] Baby Boomers.\n3. I [*'m/have] Gen Z.\n4. Gen Alpha [*is/has] very young.\n5. My dad [*has/is] an old flip phone.",
    ),
    drag(
      "Complete the text.",
      "My name [is] Ali. I was born in 2009, so I ['m] Gen Z. My mom [is] a Millennial. She [has] a smartphone too, but her favorite app is WhatsApp! 😄",
      ["have", "are"],
    ),
  ]),

  section("Let's talk: My generation", [
    text(
      "Talk to your teacher.",
      "- What generation are you? And your parents? And your grandparents?\n- What does your generation have? What's its favorite app? 📱\n- What's good about your generation? 👍\n- What does Gen Alpha have that you don't have? 🤖",
    ),
    text(
      "Mini-debate: Old or new? ⚖️",
      "Choose one and say why:\n\n- Records 💿 or Spotify 🎧?\n- A flip phone or a smartphone?\n- A letter ✉️ or a DM 💬?\n\n*I like records. They're cool and old!*",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "1995 =", options: ["*nineteen ninety-five", "one nine nine five", "nineteen fifty-nine"] },
      { q: "Born in 2010 =", options: ["*Gen Z", "Gen X", "Millennials"] },
      { q: "Millennials ___ the first mobile phones.", options: ["*have", "has", "are"] },
    ]),
    box("Word of the day: OK boomer", "**OK boomer** 😏 = a joke from Gen Z when an older person doesn't understand new things.\n\n*Be careful — it's not polite with grandparents!*"),
  ]),

  homework(
    [
      gaps("Write the years in words.", "1. 1980 → nineteen [eighty]\n2. 2004 → two thousand and [four]\n3. 1975 → nineteen [seventy-five]"),
      match("Match the generation and the years.", [
        ["Baby Boomers", "1946–1964"],
        ["Gen X", "1965–1980"],
        ["Millennials", "1981–1996"],
        ["Gen Z", "1997–2012"],
        ["Gen Alpha", "2013–2024"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      trueFalse(
        "Read Dana's post. True or false?",
        [
          ["Dana is Gen Z.", true],
          ["Her grandma has a tablet.", true],
          ["Her little brother has a flip phone.", false],
        ],
        { read: "💬 **dana.k:** I'm Gen Z — I was born in 2010. My mom is a Millennial and my grandma is a Baby Boomer. My grandma has a tablet and she LOVES video calls! 😄 My little brother is Gen Alpha. He's 5 and he has a tablet too. Our family has 4 generations… and 6 phones!" },
      ),
      video("Bonus: How each generation uses YouTube.", "vfpblmRcv8g"),
    ],
    "Homework: Reading and video",
  ),
  homework(
    [
      write("Write about the generations in your family (or a TV family). Who is Gen Z? Who is a Millennial? What do they have? (30+ words)", 30, {
        read: "*Example:* I'm Gen Z. I was born in 2008. My dad is Gen X — he was born in 1978. He has old cassettes in a box! My grandma is a Baby Boomer. She has a flip phone. She doesn't like smartphones.",
      }),
      record("Record your answer: What's your generation? What's cool about it?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
