import {
  box,
  gaps,
  homework,
  lesson,
  match,
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

// 1.4 Practical English: Sign me up — the alphabet, spelling, phone numbers, emails; no new grammar.
export default lesson("a1-1.4", "Practical: Sign me up", () => [
  section("Warm-up: Apps and clubs", [
    box("Today you will…", "- say the English alphabet\n- spell your name\n- say your phone number and email\n- sign up at a gym or in an app"),
    picture("A new gym", ["photos/warm-gym.jpg"], "A new gym in your city. You want to sign up! 🏋️"),
    trueFalse("Guess! True or false? 🤔", [
      ["The English alphabet has 26 letters.", true],
      ["E is the most popular letter in English.", true],
      ["In the UK, Z is “zee”.", false],
      ["Q is in a lot of English words.", false],
      ["@ in an email is “at”.", true],
    ]),
    tip("Let the student guess — the answers come in the lesson. Then talk."),
    text(
      "Talk to your teacher.",
      "- What clubs or classes are in your city? Which one is interesting for you? 🎨⚽🎸\n- Is your name easy or difficult for English speakers? Is there a short name for you? 🙂\n- Sign up online or at the reception — what's better for you? Why?",
    ),
  ]),

  section("The alphabet", [
    table("alphabet"),
    sort("Sort the letters by sound.", {
      "A (ay)": ["H", "J", "K"],
      "E (ee)": ["B", "D", "G", "P"],
      "F (eh)": ["L", "M", "S", "X"],
      "U (you)": ["Q", "W"],
    }),
    gaps("Read the letters and write the word.", "1. A-P-P → [app]\n2. P-H-O-N-E → [phone]\n3. E-M-A-I-L → [email]\n4. G-Y-M → [gym]\n5. Q-U-I-Z → [quiz]"),
    match("Match the letters and the brands.", [
      ["N-I-K-E", "Nike"],
      ["A-P-P-L-E", "Apple"],
      ["K-I-A", "Kia"],
      ["S-O-N-Y", "Sony"],
      ["Z-A-R-A", "Zara"],
    ]),
    tip("Play a quick game: spell short words (C-A-T, B-U-S, A-P-P) and the student writes them; then change roles. Common problems: E/I, G/J, A/R."),
  ]),

  section("Useful phrases", [
    words("Useful phrases", [
      ["How do you spell it?", "🔤 you ask for the letters", "How do you spell your name? — A-I-G-E-R-I-M."],
      ["Can you repeat that, please?", "🔁 say it again, please"],
      ["Sorry?", "🤔 = I don't understand, say it again"],
      ["first name", "Aigerim"],
      ["last name", "Bekova", "My last name is Bekova."],
      ["phone number", "📞", "What's your phone number?"],
      ["email address", "📧", "What's your email address?"],
      ["double", "two of the same: double L = LL, double 7 = 77"],
      ["sign up", "✍️ become a member of a gym, a club or an app"],
      ["Here you are.", "🙂 you give something to someone"],
    ]),
    match("Match the questions and the answers.", [
      ["What's your first name?", "Daniyar."],
      ["How do you spell it?", "D-A-N-I-Y-A-R."],
      ["What's your phone number?", "8 701 555 23 77."],
      ["What's your email address?", "dan99@mail.kz."],
      ["Can you repeat that, please?", "Sure! Double 7."],
    ]),
    gaps("Complete the questions.", "1. How do you [spell] it?\n2. Can you [repeat] that, please?\n3. What's your phone [number]?\n4. What's your email [address]?"),
  ]),

  section("Dialogue: At the gym", [
    tip("Read the dialogue with the student: you are the receptionist. Then the student reads the receptionist."),
    gaps(
      "Read the dialogue and complete the form.",
      "FitZone — new member\nFirst name: [Aigerim]\nLast name: [Bekova]\nAge: [16/sixteen]\nPhone: [8 701 555 2468/87015552468]\nEmail: [aigerim.b@mail.kz]",
      {
        read: [
          "## 🏋️ At the gym",
          "**Receptionist:** Hi! Welcome to FitZone. What's your first name?",
          "**Aigerim:** Aigerim.",
          "**Receptionist:** How do you spell it?",
          "**Aigerim:** A-I-G-E-R-I-M.",
          "**Receptionist:** And your last name?",
          "**Aigerim:** Bekova. B-E-K-O-V-A.",
          "**Receptionist:** How old are you?",
          "**Aigerim:** I'm sixteen.",
          "**Receptionist:** What's your phone number?",
          "**Aigerim:** It's 8 701 555 2468.",
          "**Receptionist:** Sorry? Can you repeat that, please?",
          "**Aigerim:** 8 701 555 2468.",
          "**Receptionist:** Thanks. And your email address?",
          "**Aigerim:** aigerim dot b at mail dot kz.",
          "**Receptionist:** Great! Here you are — your FitZone card. 🙂",
        ].join("\n\n"),
      },
    ),
    order(
      "Put the dialogue in order.",
      ["Hi! What's your first name?\nLeo.\nHow do you spell it?\nL-E-O.\nThanks. And your phone number?\nIt's 555 0198."],
      "lines",
    ),
    trueFalse("True or false?", [
      ["The gym is FitZone.", true],
      ["Aigerim's last name is Bekova.", true],
      ["Aigerim is eighteen.", false],
      ["Her email is aigerim@mail.kz.", false],
    ]),
  ]),

  section("Let's talk: Sign me up!", [
    text(
      "Role-play: sign up at a gym or for a language app.",
      "**Student A:** You're the receptionist. Ask: *first name? How do you spell it? last name? age? phone number? email?* Write the answers.\n\n**Student B:** You're a new member. Answer the questions. You can make up a name and a number!\n\nThen change roles.",
    ),
    text("Spelling race! 🏁", "Spell these words fast: **YouTube, Instagram, TikTok, WhatsApp, Netflix, Google**. Then your teacher spells words — you write them."),
    tip("Real phone numbers and emails are not necessary — made-up ones are fine. *If you have time:* the student spells the names of family members or friends."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "77 = ?", options: ["*double seven", "two seven", "seventy"] },
      { q: "You don't understand. You say:", options: ["*Sorry? Can you repeat that, please?", "Here you are.", "Nice to meet you."] },
      { q: "@ = ?", options: ["*at", "dot", "double"] },
      { q: "🇬🇧 Z = ?", options: ["*zed", "zee", "zet"] },
    ]),
    box("Word of the day: DM", "**DM** = *direct message* 💬 — a private message in an app.\n\n*DM me your email!*"),
  ]),

  homework(
    [
      gaps("Read the letters and write the words.", "1. H-E-L-L-O → [hello]\n2. N-A-M-E → [name]\n3. F-R-I-E-N-D → [friend]\n4. T-E-A-C-H-E-R → [teacher]"),
      gaps(
        "Write the email addresses.",
        "1. leo dot costa at mail dot com → [leo.costa@mail.com]\n2. dan underscore ninety-nine at school dot kz → [dan_99@school.kz]",
      ),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Mia's last name is Schmidt.", true],
          ["Her phone number is 555 0123.", false],
          ["Her email address is mia.s@nova.de.", true],
        ],
        { read: "💬 *Hi! It's Mia. My last name is Schmidt — S-C-H-M-I-D-T. My phone number is 555 0132 and my email is mia dot s at nova dot de. See you!*" },
      ),
      video("Watch the video. Spell names and say phone numbers with the people.", "Vep0aCOPag4"),
      video("Fun fact! Watch the video: how pilots and soldiers spell words. A for Alpha, B for Bravo…", "vslDNsnNFvs"),
    ],
    "Homework: Reading and video",
  ),
  homework(
    [
      write("You sign up for an English club. Write your information: first name, last name (spell it), age, phone, email. (20+ words)", 20, {
        read: "*Example:* My first name is Daniyar. D-A-N-I-Y-A-R. My last name is Seitov. I'm seventeen. My phone number is 8 707 555 1234. My email is dan_99@mail.kz.",
      }),
      record("Record your answer: spell your first name and your last name, and say your email address.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
