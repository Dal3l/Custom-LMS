import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 9.4 Practical English: Job interview — a ROLE-PLAY focused lesson: job ads, a good and a bad interview (listening), interview phrases, preparing and doing a real interview. One of two class videos in the module.
export default lesson("a2-9.4", "Practical: Job interview", () => [
  section("Warm-up: Interview nightmares", [
    box("Today you will…", "- read job ads and choose a job 💼\n- answer interview questions: *Tell me about yourself. Why do you want this job?* 🎤\n- have a real interview with your teacher!"),
    text(
      "Talk to your teacher.",
      "- Have you ever had a job interview (or an interview for a school, a club, a visa)? How did you feel? 😰\n- What's the worst thing you can do at an interview? 😱 (be late? check your phone?)\n- What was your first job — or what job would you like to try for the summer? 🍦☕🏕️\n- Do you like talking about yourself? Is it easy or difficult? Why?",
    ),
    tip("Share a funny or scary interview story of your own — it relaxes the student. Write their “interview nightmares” on the board; you'll use them later as *Don'ts*."),
  ]),

  section("Reading: Job ads", [
    tip("Three short job ads. The student reads them like real ads and decides which job is best for them — and for you! 😄"),
    quiz(
      "Read the ads. Which job…? Choose.",
      [
        { q: "Which job is in the evenings and at weekends?", options: ["*Barista", "Camp helper", "Museum guide"] },
        { q: "Which job needs people who speak two languages?", options: ["*Museum guide", "Barista", "Camp helper"] },
        { q: "Which job is unpaid?", options: ["*Museum guide", "Barista", "Camp helper"] },
        { q: "Which job gives you food and a place to sleep?", options: ["*Camp helper", "Barista", "Museum guide"] },
        { q: "For which job do you NOT need experience?", options: ["*all three", "only Barista", "only Camp helper"] },
      ],
      {
        read: [
          "## 💼 Jobs for young people",
          "**☕ Barista — City Bean Café (part-time).** Evenings 5–10 p.m. and weekends. $6 an hour + tips. No experience needed — we'll train you! You must be friendly and good with people. Start: next month.",
          "**🏕️ Camp helper — Sunny Lake Summer Camp.** June–August, 8 weeks. Help children (8–12) with sports, games and art. $800 a month + free food and a room. You should be energetic and love children. First aid training is a plus.",
          "**🏛️ Museum guide — volunteer.** Saturdays, 10 a.m.–2 p.m. Show visitors around the History Museum in English and Kazakh or Russian. Unpaid, but you get a certificate and free entry to all city museums. No experience needed — just love history!",
        ].join("\n\n"),
      },
    ),
    text("Talk to your teacher.", "- Which job would you choose? Why? Which one isn't for you?\n- Is it a good idea to work for free as a volunteer? Why / why not? 🤔"),
  ]),

  section("Vocabulary: Jobs and skills", [
    words("Job interview words", [
      ["apply for a job — an application", "📝💼"],
      ["a CV — a résumé", "📄 a document about your education and work · 🇺🇸 résumé"],
      ["experience", "🧳💼 what you have done before", "I have two years' experience."],
      ["a strength — a weakness", "💪 something you're good at — 😬 something you're not good at"],
      ["hard-working", "🐝 works a lot"],
      ["reliable", "✅ people can trust you"],
      ["organized", "🗂️ plans well"],
      ["a team player", "🤝👥 works well with others"],
      ["deal with (customers / problems)", "🙋‍♀️🛠️"],
      ["full-time — part-time", "⏰⏰⏰ — ⏰"],
      ["a salary — wages", "💵 money for work (per month — per hour / week)"],
      ["hire — get the job", "🤝✅"],
    ]),
    match("Match.", [
      ["apply", "for a job"],
      ["a team", "player"],
      ["deal with", "customers"],
      ["two years'", "experience"],
      ["write", "a CV"],
      ["get", "the job"],
    ]),
    sort("Strength or weakness? Sort. 💪😬", {
      "💪 strength": ["I'm reliable.", "I learn fast.", "I'm good with people.", "I'm organized."],
      "😬 weakness": ["I'm often late.", "I get nervous.", "I'm not good at math.", "I talk too much."],
    }),
    gaps(
      "Complete.",
      "1. I want to [apply] for the job at the café. 📝\n2. Please send us your [CV/résumé] by email. 📄\n3. I don't have any [experience], but I learn fast. 🧳\n4. My biggest [strength] is that I'm good with people. 💪\n5. She always finishes on time — she's very [reliable]. ✅\n6. I like working with others — I'm a team [player]. 🤝\n7. It's a [part-time] job — only 20 hours a week. ⏰\n8. Congratulations! You got the [job]! 🎉",
    ),
  ]),

  section("Useful phrases: Tell me about yourself", [
    table("interview"),
    sort("Interviewer or candidate? Who says it? Sort. 🎤🙋", {
      "🎤 interviewer": ["Tell me about yourself.", "Why do you want this job?", "What are your strengths?", "When can you start?"],
      "🙋 candidate": ["I'm good at working in a team.", "I've worked as a waiter for a year.", "I'm interested in history.", "Is there any training?"],
    }),
    choose(
      "Choose the better answer.",
      "1. — Tell me about yourself. — [*I'm 19, I'm a student, and I love working with people./I don't know. Read my CV.]\n2. — Why do you want this job? — [*I love coffee and I want to learn new skills./I need money.]\n3. — What are your weaknesses? — [*I get nervous sometimes, but I'm working on it./I don't have any.]\n4. — Have you got any experience? — [*Not in a café, but I've helped at my uncle's shop./No.]\n5. — Do you have any questions? — [*Yes — is there any training?/No. When do I get money?]\n6. — When can you start? — [*Next Monday, if that's OK./Maybe. I'll see.]",
    ),
    gaps(
      "Complete the answers.",
      "1. I'm [good] at talking to people.\n2. I'm [interested] in art and history.\n3. I've [worked] as a babysitter for two years.\n4. I can [speak] three languages: Kazakh, Russian and English.\n5. I'm a [hard-working] person — I always finish what I start.\n6. [Could] you tell me more about the job?",
    ),
  ]),

  section("Listening: Two interviews", [
    tip("Two candidates, one job. Listen and decide: *Who should get the job? Why?* Listen again and note the mistakes of the bad candidate."),
    ...listening(
      "Listen. Two people have an interview for the barista job at City Bean Café.",
      "**Interviewer:** Hello, Leo. Please sit down. So, tell me about yourself.\n\n**Leo:** Hmm… I'm Leo. I'm 20. What else do you want to know? 📱\n\n**Interviewer:** Er… why do you want to work here?\n\n**Leo:** Well, I need money for a new phone. And the café is near my house.\n\n**Interviewer:** I see. Have you ever worked with customers?\n\n**Leo:** No. I don't really like people. Oh, sorry — I have to answer this message…\n\n**Interviewer:** Thank you, Leo. We'll call you.\n\n**Interviewer:** Hello, Aigerim. Please sit down. Tell me about yourself.\n\n**Aigerim:** Thank you! I'm 21, and I study tourism at university. I'm friendly and hard-working, and I love meeting new people. ☺️\n\n**Interviewer:** Why do you want this job?\n\n**Aigerim:** I love coffee, and I want to learn to be a real barista. Also, the evening hours are perfect — I have lectures in the morning.\n\n**Interviewer:** Have you got any experience?\n\n**Aigerim:** I haven't worked in a café, but I've helped at my aunt's restaurant every summer for three years. I've dealt with a lot of customers — some of them were very difficult! 😄\n\n**Interviewer:** What's your biggest weakness?\n\n**Aigerim:** I sometimes try to do too many things at the same time. Now I make lists, and it really helps.\n\n**Interviewer:** Great. Do you have any questions for me?\n\n**Aigerim:** Yes — is there any training for new baristas? And when could I start?\n\n**Interviewer:** There's a two-week training course, and you could start next month. Thank you, Aigerim. We'll be in touch very soon!",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Leo want the job?", options: ["*He needs money for a new phone.", "He loves coffee.", "He wants experience."] },
      { q: "What does Leo do during the interview?", options: ["*answers a message on his phone", "drinks coffee", "asks good questions"] },
      { q: "What does Aigerim study?", options: ["*tourism", "business", "history"] },
      { q: "Where has Aigerim worked before?", options: ["*at her aunt's restaurant", "at another café", "at a hotel"] },
      { q: "How long is the training course?", options: ["*two weeks", "two days", "two months"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo has experience with customers.", false],
      ["Leo says he doesn't really like people.", true],
      ["Aigerim has lectures in the morning.", true],
      ["Aigerim's weakness is that she's often late.", false],
      ["Aigerim makes lists to help with her weakness.", true],
      ["Aigerim asks about training.", true],
    ]),
    text("Talk to your teacher.", "- Who should get the job? Why? (Easy question! 😄)\n- Give Leo 3 pieces of advice for his next interview: *You should… You shouldn't…*"),
  ]),

  section("Video: A job interview", [
    video("Watch an example job interview in easy English. Write down 2 questions and 2 good answers.", "0k0Uc9uAJwk"),
    text("Talk to your teacher.", "- Which question from the video is the most difficult for you? Why?\n- How would you answer it?"),
  ]),

  section("Let's talk: Your interview", [
    text(
      "Prepare (5 minutes) ✍️",
      "Choose a job from the ads — or your real dream job. Prepare your answers:\n\n1. *Tell me about yourself.* (3 sentences)\n2. *Why do you want this job?*\n3. *What are your strengths?* (2 strengths + an example)\n4. *What's your weakness?* (+ what you do about it)\n5. *Have you got any experience?* (*I've… I've worked as… I've helped…*)\n6. Your question for the interviewer ❓",
    ),
    order(
      "Put the start of the interview in order.",
      ["Good morning. Please sit down.\nThank you. Nice to meet you.\nNice to meet you too. So, tell me about yourself.\nI'm 22 and I've just graduated from university.\nGreat. And why do you want this job?"],
      "lines",
    ),
    text(
      "The interview 🎤",
      "Your teacher is the interviewer — a real, serious interview! Then your teacher gives you feedback: what was great, and what you should say differently.\n\nThen change roles: you interview your teacher for a crazy job — *a professional sleeper, a chocolate tester, a cat sitter for a millionaire* 😄",
    ),
    tip("Play it seriously the first time — sit up, shake hands, use a “job interview” voice. Feedback: 2 strengths + 1 thing to improve. The crazy-job role swap at the end makes it fun."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a document about your education and work =", options: ["*a CV", "a salary", "a strength"] },
      { q: "people can trust you =", options: ["*reliable", "part-time", "nervous"] },
      { q: "A good answer to “Why do you want this job?”", options: ["*I want to learn new skills.", "I need money.", "I don't know."] },
      { q: "I've ___ as a babysitter.", options: ["*worked", "work", "working"] },
    ]),
    box("Word of the day: a dream job", "**a dream job** 💭💼 = the perfect job for you.\n\n*Chocolate tester? That's my dream job!* 🍫"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 📄 a document about your education and work: a [CV/résumé]\n2. 🧳 what you have done before: [experience]\n3. 💪 something you're good at: a [strength]\n4. 🤝 works well with others: a team [player]\n5. ⏰ not full-time: [part-time]\n6. 📝 ask for a job: [apply] for a job",
      ),
      choose(
        "Choose.",
        "1. I'm good [*at/in] working with people.\n2. I'm interested [*in/on] design.\n3. I've [*worked/work] as a waiter.\n4. [*Could/Can to] you tell me about the salary?\n5. She's very [*organized/organize].\n6. When [*can you/you can] start?",
      ),
    ],
    "Homework: Vocabulary and phrases",
  ),
  homework(
    [
      write("Apply for one of the jobs from the lesson. Write a short email: who you are, why you want the job, your strengths and experience, and one question. (60+ words)", 60, {
        read: "*Example:* Dear Sunny Lake Summer Camp, I'd like to apply for the job of camp helper. I'm 19 and I study to be a PE teacher. I'm energetic, reliable and I love children — I've helped at my little brother's football club for two years. ⚽ I can also play the guitar! Could you tell me when the training starts? Best wishes, Arman Seitov",
      }),
    ],
    "Homework: Writing",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Aigerim got the barista job.", true],
          ["She starts tomorrow.", false],
          ["She's going to do a training course first.", true],
          ["Leo got a job at the same café.", false],
          ["Leo has read some interview tips.", true],
        ],
        { read: "💬 **Aigerim:** I GOT THE JOB! ☕🎉 I start next month — first there's a two-week training course. Poor Leo didn't get it… but he's read a lot of interview tips online, and he has another interview on Friday. I've already told him: put your phone in your bag! 😄" },
      ),
      record("Record your answers to 3 interview questions: Tell me about yourself. What are your strengths? Why do you want this job? (1–2 minutes)", 120),
    ],
    "Homework: Reading and speaking",
  ),
]);
