import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  matchPictures,
  order,
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

// 1.1 Nice to meet you — G: I am / you are / he, she is; my / your. V: hello & goodbye, numbers 0–20.
export default lesson("a1-1.1", "Nice to meet you", () => [
  section("Warm-up: Hello, world!", [
    box("Today you will…", "- say hello and goodbye\n- say your name and ask for a name\n- count from 0 to 20"),
    tip(
      "Start with a smile: *Hi! I'm (your name).* Then ask: *What's your name?* Help the student answer *I'm…*\n\nIn the matching task, let the student guess. Short answers or answers in the student's language are fine here — the goal is to relax.",
    ),
    match("How do people say hello? Match.", [
      ["Сәлем!", "Kazakh"],
      ["Привет!", "Russian"],
      ["Hola!", "Spanish"],
      ["Bonjour!", "French"],
      ["Ciao!", "Italian"],
      ["Konnichiwa!", "Japanese"],
    ]),
    text(
      "Talk to your teacher.",
      "- How do you say hello to a friend? And to a teacher?\n- 👋 🤝 🤗 — do you wave, shake hands or hug?\n- How many languages can you say hello in?\n- Is it easy to meet new people?",
    ),
  ]),

  section("Vocabulary: Hello and goodbye", [
    words("Hello and goodbye", [
      ["hello", "👋 you say it when you meet someone", "Hello! I'm Aigerim."],
      ["hi", "👋 = hello (with friends)", "Hi, Leo!"],
      ["hey", "👋 = hi (very informal)", "Hey! What's up?"],
      ["good morning", "🌅 hello before 12:00"],
      ["good afternoon", "☀️ hello from 12:00 to 18:00"],
      ["good evening", "🌆 hello after 18:00"],
      ["goodbye", "👋 you say it when you go", "Goodbye, Ms. Lee!"],
      ["bye", "👋 = goodbye (with friends)", "Bye! See you!"],
      ["see you", "👋 = bye, see you later", "See you tomorrow!"],
      ["Nice to meet you.", "😊 you say it when you meet a new person"],
      ["What's your name?", "❓ you ask a new person", "What's your name? — I'm Leo."],
      ["thank you / thanks", "🙏", "Thanks, Mia!"],
      ["wave", "👋 move your hand to say hello or bye"],
      ["shake hands", "🤝 two people hold hands — formal hello"],
      ["hug", "🤗 put your arms around a friend"],
    ]),
    matchPictures("How do they say hello? Match the pictures and the words.", [
      ["photos/greet-handshake.jpg", "shake hands"],
      ["photos/greet-wave.jpg", "wave"],
      ["photos/greet-hug.jpg", "hug"],
    ]),
    sort("Formal or informal? Sort.", {
      "Formal 👔 (teacher, hotel, new people)": ["Good morning", "Good evening", "Goodbye", "Nice to meet you"],
      "Informal 😎 (friends)": ["Hi", "Hey", "Bye", "See you", "What's up?"],
    }),
    choose(
      "Choose the best greeting.",
      "1. 9:00, your teacher: [*Good morning/Good evening/Hey], Ms. Lee!\n2. 20:00, a hotel: [Good morning/*Good evening/Bye]!\n3. Your best friend: [*Hey/Good afternoon/Goodbye], Leo!\n4. You go home: [*Bye/Hello/Hi]! See you!",
    ),
    drag(
      "Complete the dialogues.",
      "A: [Hello]! I'm Ms. Lee. What's your [name]?\nB: Hi! I'm Aigerim.\nA: [Nice] to meet you, Aigerim!\n\nA: Bye, Leo! [See] you!\nB: [Goodbye]!",
      ["morning", "thanks"],
    ),
  ]),

  section("Vocabulary: Numbers 0–20", [
    words("Numbers 0–20", [
      ["zero", "0"],
      ["one", "1"],
      ["two", "2"],
      ["three", "3"],
      ["four", "4"],
      ["five", "5"],
      ["six", "6"],
      ["seven", "7"],
      ["eight", "8"],
      ["nine", "9"],
      ["ten", "10"],
      ["eleven", "11"],
      ["twelve", "12"],
      ["thirteen", "13"],
      ["fourteen", "14"],
      ["fifteen", "15"],
      ["sixteen", "16"],
      ["seventeen", "17"],
      ["eighteen", "18"],
      ["nineteen", "19"],
      ["twenty", "20"],
    ]),
    match("Match the words and the numbers.", [
      ["three", "3"],
      ["seven", "7"],
      ["eleven", "11"],
      ["twelve", "12"],
      ["thirteen", "13"],
      ["fifteen", "15"],
      ["eight", "8"],
      ["twenty", "20"],
    ]),
    gaps("Write the numbers in words.", "1. 6 → [six]\n2. 11 → [eleven]\n3. 14 → [fourteen]\n4. 19 → [nineteen]\n5. 20 → [twenty]"),
    tip("Quick game: say a number — the student writes it on the board. Then the student says, you write. Then count together from 0 to 20 and back."),
  ]),

  section("Reading: A new group chat", [
    tip("Read the chat together. Ask: *Who is the teacher? How old is Aigerim?* Then do the tasks."),
    trueFalse(
      "Read the chat. True or false?",
      [
        ["Ms. Lee is a teacher.", true],
        ["Aigerim is twenty.", false],
        ["Leo is twenty.", true],
        ["Mia is in Group 12.", false],
        ["Mia is number twelve.", true],
      ],
      {
        read: [
          "## English Online — Group 7 💬",
          "**Ms. Lee:** Hi, everyone! I'm Ms. Lee. I'm your teacher. 👋",
          "**Aigerim:** Hello! I'm Aigerim. I'm sixteen. 😊",
          "**Leo:** Hey! My name is Leo. I'm twenty.",
          "**Mia:** Hi! I'm Mia. Nice to meet you!",
          "**Ms. Lee:** Nice to meet you too, Mia! You're in Group 7. You're number twelve.",
          "**Mia:** Thank you! 🙂",
        ].join("\n\n"),
      },
    ),
    gaps("Read the chat again. Complete.", "1. The teacher is Ms. [Lee].\n2. Aigerim is [sixteen/16].\n3. Leo is [twenty/20].\n4. The group is Group [seven/7]."),
    text(
      "Talk to your teacher.",
      "- What's your name?\n- How old are you?\n- What's a good first message in a new group chat? 💬\n- Is your English teacher nice? 😉",
    ),
  ]),

  section("Grammar: I am / you are / he is / she is", [
    tip("First ask the student to find *I'm* and *You're* in the chat. Then show the tables."),
    table("be-short"),
    table("my-your"),
    choose(
      "Choose the correct word.",
      "1. I [*am/is/are] Leo.\n2. You [*are/is/am] my friend.\n3. She [am/*is/are] Mia.\n4. He [*is/are/am] twenty.\n5. [*My/I] name is Aigerim.\n6. What's [*your/you] name?",
    ),
    gaps(
      "Write the short form.",
      "1. I am Daniyar. → [I'm] Daniyar.\n2. She is my sister. → [She's] my sister.\n3. You are sixteen. → [You're] sixteen.\n4. He is my teacher. → [He's] my teacher.",
    ),
    drag("Complete with my or your.", "A: What's [your] name?\nB: [My] name is Daniyar.\nA: Is Ms. Lee [your] teacher?\nB: Yes, she's [my] teacher.", ["I", "you"]),
    order("Put the words in order.", ["My name is Mia.", "She's my teacher.", "What's your name?", "I'm seventeen."]),
    tip("*If you have time:* the order task. If time is short, skip it — similar tasks are in the homework."),
  ]),

  section("Let's talk: Your first class", [
    box("Useful phrases", "- Hi! / Hello!\n- I'm… / My name is…\n- What's your name?\n- Nice to meet you!\n- Bye! / See you!"),
    text(
      "Role-play: the first day of an online class.",
      "**Student A:** You're a new student. Say hello and say your name and age.\n\n**Student B:** You're the teacher. Ask the student's name and age. Say *Nice to meet you!*\n\nThen change roles!",
    ),
    text(
      "Who is it? Talk about famous people.",
      "Choose a famous singer, actor or player. Say: *This is… He's / She's…*\n\n*This is Dimash. He's a singer.* 🎤",
    ),
    tip("Do the role-play twice: first with the useful phrases, then without them. In a one-to-one lesson, you are Student B."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ name is Leo.", options: ["*My", "I", "Me"] },
      { q: "She ___ my friend.", options: ["*is", "are", "am"] },
      { q: "Nice to ___ you!", options: ["*meet", "see", "name"] },
      { q: "15 = ?", options: ["*fifteen", "fifty", "five"] },
      { q: "20:00. You meet your teacher. You say:", options: ["*Good evening!", "Good morning!", "What's up?"] },
    ]),
    box(
      "Word of the day: What's up?",
      "**What's up?** = Hi! How are you? 🙂\n\nYou say it to friends — *Hey, Leo! What's up?* — but not to your teacher or your boss. 😉",
    ),
  ]),

  homework(
    [
      match("Match the words and the numbers.", [
        ["four", "4"],
        ["nine", "9"],
        ["fourteen", "14"],
        ["sixteen", "16"],
        ["seventeen", "17"],
        ["nineteen", "19"],
        ["zero", "0"],
        ["ten", "10"],
      ]),
      sort("Formal or informal?", {
        "Formal 👔": ["Good afternoon", "Goodbye", "Good morning"],
        "Informal 😎": ["Hey", "See you", "Bye"],
      }),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose am, is or are.", "1. I [*am/is/are] from Almaty.\n2. You [am/is/*are] my friend.\n3. He [am/*is/are] my brother.\n4. She [am/*is/are] eighteen.\n5. I [*'m/'s/'re] Aigerim."),
      gaps("Write the short form.", "1. I am Leo. → [I'm] Leo.\n2. He is nineteen. → [He's] nineteen.\n3. You are my friend. → [You're] my friend."),
      order(
        "Put the dialogue in order.",
        ["Hi! I'm Ms. Lee. What's your name?\nI'm Daniyar.\nNice to meet you, Daniyar!\nNice to meet you too!\nBye! See you!"],
        "lines",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read Daniyar's message. True or false?",
        [
          ["Daniyar is fifteen.", false],
          ["His teacher is Ms. Lee.", true],
          ["Leo is his friend.", true],
        ],
        { read: "💬 *Hi, everyone! I'm Daniyar. I'm seventeen. I'm new in Group 7. My teacher is Ms. Lee. Leo is my friend. Nice to meet you! 😊*" },
      ),
      video("Watch the video. Different ways to say hello and goodbye.", "hmvgZ_hlm4c"),
      write("Write 3 ways to say hello and 3 ways to say goodbye from the video.", null),
    ],
    "Homework: Reading and video",
  ),
  homework(
    [
      write("Write about you: your name, your age and your English teacher. (15+ words)", 15, {
        read: "*Example:* Hi! I'm Aigerim. I'm sixteen. My English teacher is Ms. Lee. She's nice!",
      }),
      record("Record your answer: say hello, say your name and your age.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
