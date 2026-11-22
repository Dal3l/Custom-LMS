import {
  box,
  choose,
  drag,
  gaps,
  homework,
  listening,
  lesson,
  match,
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

// 0 Entry test — a check of A1 before the A2 course: grammar, vocabulary, reading, writing, speaking. Every task gives points.
export default lesson("a2-0.1", "Entry test: A1 check", () => [
  section("Warm-up: Welcome to A2!", [
    box(
      "Today you will…",
      "- check your A1 English — it's not an exam, it's a map! 🗺️\n- see what you know well and what to review\n- meet your teacher and the A2 course 🚀",
    ),
    tip("Tell the student: it's OK to make mistakes — the test shows what to review. Don't help during the tasks. Score guide: 80%+ → ready for A2; 60–80% → start A2 and review the weak topics in the warm-ups; under 60% → review modules of English A1 first."),
    text("Talk to your teacher.", "- Why do you learn English? 🎯\n- What's easy in English for you? What's difficult?\n- What do you want to do in English this year? (travel, watch series without subtitles, work…)"),
  ]),

  section("Grammar: present", [
    choose(
      "be, have, can: choose.",
      "1. My sister [*is/are/am] a nurse.\n2. They [*have/has/are] two dogs.\n3. [*Are/Is/Do] you from Almaty?\n4. She [*can/cans/can to] play the guitar.\n5. There [*are/is/be] three bedrooms in our flat.",
    ),
    choose(
      "Present Simple: choose.",
      "1. He [*works/work/working] in a bank.\n2. We [*don't/doesn't/not] eat meat.\n3. [*Does/Do/Is] your brother play football?\n4. I [*always get/get always/always gets] up at 7.",
    ),
    choose(
      "Present Simple or Present Continuous? Choose.",
      "1. Look! It [*'s raining/rains].\n2. I usually [*wear/'m wearing] jeans.\n3. What [*are you doing/do you do] right now?\n4. She [*plays/is playing] tennis every Saturday.",
    ),
    choose(
      "in, on or at? Choose.",
      "1. I get up [*at/on/in] 7 o'clock.\n2. We have English [*on/in/at] Monday.\n3. I go to bed late [*at/on/in] night.\n4. It's cold [*in/on/at] winter.",
    ),
    gaps("Complete with one word.", "1. How [much] is this T-shirt? — $15.\n2. How [many] apples do we need?\n3. Is there [any] milk in the fridge?\n4. I love [them]! (my cats)\n5. This is my [sister's] room. (sister)"),
  ]),

  section("Grammar: past", [
    choose(
      "was / were: choose.",
      "1. I [*was/were] at home yesterday.\n2. We [*were/was] at the cinema last night.\n3. [*Were/Was] you tired?\n4. The film [*wasn't/weren't] good.",
    ),
    gaps("Write the past.", "1. play → [played]\n2. go → [went]\n3. have → [had]\n4. watch → [watched]\n5. see → [saw]"),
    drag(
      "Complete the story.",
      "Last summer I [was] in Turkey with my family. The weather [was] hot. We [went] to the beach every day. My brother [played] volleyball, and I [had] a lot of ice cream! 🍦",
      ["were", "goes", "play"],
    ),
  ]),

  section("Listening", [
    ...listening(
      "Listen. Leo leaves a voice message for his friend.",
      "**Leo:** Hi, Dana! It's Leo. Are you free on Saturday? There's a food festival in the park. 🍔 It starts at 12. My brother is coming too — he can drive us there. Let's meet at the bus stop near your house at half past eleven. Oh, and bring some money — the food isn't free! 😄 Call me back. Bye!",
    ),
    quiz("Listen and choose.", [
      { q: "What's on Saturday?", options: ["*a food festival", "a concert", "a football match"] },
      { q: "What time does it start?", options: ["*12:00", "11:30", "10:00"] },
      { q: "Where do they meet?", options: ["*at the bus stop", "in the park", "at Leo's house"] },
      { q: "Who can drive them?", options: ["*Leo's brother", "Dana's mom", "Leo"] },
    ]),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "👨‍👩‍👧 Family": ["cousin", "aunt", "grandpa"],
      "🏠 Home": ["kitchen", "wardrobe", "balcony"],
      "🍎 Food": ["cheese", "bread", "carrot"],
      "🏙️ City": ["pharmacy", "museum", "bus stop"],
    }),
    gaps("Write the word.", "1. 🧥 You wear it when it's cold: a [coat/jacket]\n2. 🚇 An underground train: the [metro/subway/underground]\n3. 🍳 The meal in the morning: [breakfast]\n4. 👕👖👟 All your clothes together: an [outfit]"),
    match("Match the opposites.", [
      ["cheap", "expensive"],
      ["busy", "quiet"],
      ["early", "late"],
      ["always", "never"],
      ["love", "hate"],
    ]),
    quiz("Choose the right word.", [
      { q: "You buy medicine at a…", options: ["*pharmacy", "museum", "bakery"] },
      { q: "Can I have the ___, please? 🧾", options: ["*check", "menu", "tip"] },
      { q: "Turn ___ at the bank.", options: ["*left", "straight", "across"] },
      { q: "It's very cold. Wear a ___ .", options: ["*scarf", "T-shirt", "sunglasses"] },
    ]),
  ]),

  section("Reading", [
    trueFalse(
      "Read Asel's message. True or false?",
      [
        ["Asel lives in Astana.", false],
        ["She works from home.", true],
        ["She has a dog.", false],
        ["Last weekend she was in the mountains.", true],
        ["She can't ski.", false],
      ],
      {
        read: [
          "## 💬 Hi from Almaty!",
          "Hi! I'm Asel. I'm 24 and I live in Almaty. I'm a designer — I work from home, so I usually start at 10. 😄",
          "I live with my sister and our cat, Mars. 🐱 In the evening I often go to the gym or meet friends in a café.",
          "Last weekend I was in the mountains with my friends. It was cold and snowy, but we were very happy. I can ski, but my friends can't — they were on the snow all day! ⛷️😂",
          "Right now I'm drinking tea and writing to you. What about you? What do you do?",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Asel is a…", options: ["*designer", "teacher", "doctor"] },
      { q: "Mars is…", options: ["*her cat", "her sister", "a café"] },
      { q: "Right now she's…", options: ["*drinking tea", "skiing", "at the gym"] },
    ]),
  ]),

  section("Writing and speaking", [
    order("Make sentences.", ["Where were you last weekend?", "She doesn't like coffee.", "How often do you go to the gym?"]),
    write("Reply to Asel. Tell her about you: your job or study, your day, and your last weekend. (40+ words)", 40),
    text(
      "Speaking: talk to your teacher for 2 minutes 🗣️",
      "- Tell about yourself: name, age, city, job or study\n- Your usual day: *I usually… I never…*\n- Right now: *I'm wearing… I'm feeling…*\n- Your last holiday: *I was in… It was…*\n\nYour teacher listens and makes notes. 📝",
    ),
  ]),

  section("Your result", [
    tip("Look at the points together. Write down 2–3 weak topics (for example: Past Simple, how much / many). In the next lessons, the warm-ups help to review them. Under 60%? Choose lessons from English A1 for review first."),
    box("What's next? 🚀", "In **English A2** you will:\n\n- tell stories about the past 📖\n- talk about plans and the future 🔮\n- compare things and give advice 💡\n- talk about your experiences: *Have you ever…?* ✈️\n- get ready for the **Cambridge A2 Key** exam format 🎓"),
  ]),

  homework(
    [
      gaps("Review: complete.", "1. She [is] my best friend.\n2. He [has] two brothers.\n3. I [don't/do not] like mornings.\n4. Look! They [are] dancing!\n5. We [were] at the park yesterday."),
      choose("Choose.", "1. How [*much/many] money do you have?\n2. There [*aren't/isn't] any eggs.\n3. I can [*swim/to swim]."),
      write("Write 3 things you want to learn in English this year and why. (25+ words)", 25),
      record("Record a 1-minute introduction: who you are and why you learn English. 🎤", 60),
    ],
    "Homework: Review",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["She don't like tea.", false],
        ["Did you see the film?", true],
        ["I was at home last night.", true],
        ["They was happy.", false],
      ]),
    ],
    "Homework: Grammar check",
  ),
]);
