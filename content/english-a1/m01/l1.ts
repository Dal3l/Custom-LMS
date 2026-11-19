import { box, choose, drag, gaps, homework, lesson, match, order, quiz, record, section, text, tip, trueFalse, words, write } from "../../kit";

// 1.1 Nice to meet you — G: I am / you are / he, she is; my / your. V: hello & goodbye, numbers 0–20.
export default lesson("a1-1.1", "Nice to meet you", () => [
  section("Warm-up", [
    box("Today you will…", "- say hello and goodbye\n- say your name and ask for a name\n- count from 0 to 20"),
    tip(
      "Start with a smile: *Hi! I'm (your name).* Then ask: *What's your name?* Help the student answer *I'm…*\n\nIn the matching task, let the student guess. It's fine to use their language here — the goal is to relax and have fun.",
    ),
    match("How do people say hello? Match.", [
      ["Сәлем!", "Kazakh"],
      ["Привет!", "Russian"],
      ["Hola!", "Spanish"],
      ["Bonjour!", "French"],
      ["Ciao!", "Italian"],
      ["Konnichiwa!", "Japanese"],
    ]),
  ]),

  section("Vocabulary", [
    words("Hello and goodbye", [
      ["hello", "👋 you say it when you meet someone", "Hello! I'm Aigerim."],
      ["hi", "👋 = hello (with friends)", "Hi, Leo!"],
      ["hey", "👋 = hi (very informal)", "Hey! What's up?"],
      ["good morning", "🌅 hello before 12:00"],
      ["good afternoon", "☀️ hello from 12:00 to 18:00"],
      ["good evening", "🌆 hello after 18:00"],
      ["goodbye", "👋 you say it when you go", "Goodbye, Ms. Lee!"],
      ["bye", "👋 = goodbye (with friends)", "Bye! See you!"],
      ["see you", "👋 = bye, I see you later", "See you tomorrow!"],
      ["Nice to meet you.", "😊 you say it when you meet a new person"],
      ["What's your name?", "❓ you ask a new person", "What's your name? — I'm Leo."],
      ["thank you / thanks", "🙏", "Thanks, Mia!"],
    ]),
    drag(
      "Complete the dialogues.",
      "A: [Hello]! I'm Ms. Lee. What's your [name]?\nB: Hi! I'm Aigerim.\nA: [Nice] to meet you, Aigerim!\n\nA: Bye, Leo! [See] you!\nB: [Goodbye]!",
      ["morning", "thanks"],
    ),
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
  ]),

  section("Reading", [
    tip("Read the chat together. Ask: *Who is the teacher? How old is Aigerim?* Then do True or false."),
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
    text("Talk to your teacher.", "- What's your name?\n- How old are you?\n- Is your English teacher nice? 😉"),
  ]),

  section("Grammar", [
    box(
      "Grammar: I am / you are / he is / she is",
      "- I **am** → I**'m** — *I'm Aigerim.*\n- you **are** → you**'re** — *You're my teacher.*\n- he **is** → he**'s** — *He's Leo.*\n- she **is** → she**'s** — *She's Mia.*\n\n**my** / **your**: *My name is Leo. What's your name?*",
    ),
    tip("First ask the student to find *I'm* and *You're* in the chat. Then show the rule."),
    choose(
      "Choose the correct word.",
      "1. I [*am/is/are] Leo.\n2. You [*are/is/am] my friend.\n3. She [am/*is/are] Mia.\n4. He [*is/are/am] twenty.\n5. [*My/I] name is Aigerim.\n6. What's [*your/you] name?",
    ),
    gaps(
      "Write the short form.",
      "1. I am Daniyar. → [I'm] Daniyar.\n2. She is my sister. → [She's] my sister.\n3. You are sixteen. → [You're] sixteen.\n4. He is my teacher. → [He's] my teacher.",
    ),
    order("Put the words in order.", ["My name is Mia.", "She's my teacher.", "What's your name?", "I'm seventeen."]),
    tip("*If you have time:* the order task. If time is short, skip it — it is in the homework too."),
  ]),

  section("Let's talk", [
    box(
      "Useful phrases",
      "- Hi! / Hello!\n- I'm… / My name is…\n- What's your name?\n- Nice to meet you!\n- Bye! / See you!",
    ),
    text(
      "Role-play: the first day of an online class.",
      "**Student A:** You're a new student. Say hello and say your name.\n\n**Student B:** You're the teacher. Ask the student's name and age.\n\nThen change roles!",
    ),
    tip("Do the role-play twice: first with the useful phrases, then without them. In a one-to-one lesson, you are Student B."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ name is Leo.", options: ["*My", "I", "Me"] },
      { q: "She ___ my friend.", options: ["*is", "are", "am"] },
      { q: "Nice to ___ you!", options: ["*meet", "see", "name"] },
      { q: "15 = ?", options: ["*fifteen", "fifty", "five"] },
    ]),
    box(
      "Word of the day: What's up?",
      "**What's up?** = Hi! How are you? 🙂\n\nYou say it to friends — *Hey, Leo! What's up?* — but not to your teacher or your boss. 😉",
    ),
  ]),

  homework([
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
    choose("Choose am, is or are.", "1. I [*am/is/are] from Almaty.\n2. You [am/is/*are] my friend.\n3. He [am/*is/are] my brother.\n4. She [am/*is/are] eighteen.\n5. I [*'m/'s/'re] Aigerim."),
    order(
      "Put the dialogue in order.",
      ["Hi! I'm Ms. Lee. What's your name?\nI'm Daniyar.\nNice to meet you, Daniyar!\nNice to meet you too!\nBye! See you!"],
      "lines",
    ),
    write("Write about you: your name, your age and your English teacher. (15+ words)", 15, {
      read: "*Example:* Hi! I'm Aigerim. I'm sixteen. My English teacher is Ms. Lee. She's nice!",
    }),
    record("Record your answer: say hello, say your name and your age.", 60),
  ]),
]);
