import {
  box,
  choose,
  drag,
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

// 4.1 This time next year — G: Future Continuous (will be doing); time clauses with when / as soon as / before / after / until + Present Simple. V: study and career (apply for, get promoted, a degree, an internship…). Say it right: I'll /aɪl/ and won't vs want. S: talk about your plans and where you'll be in a year. Main format: a long listening (a radio feature: three people's next year — Dana, Daniyar and Kenji) + a guessing game. No video in class.
export default lesson("b1-4.1", "This time next year", () => [
  section("Warm-up: One year from now", [
    box(
      "Today you will…",
      "- talk about your plans for study and work 🎓💼\n- say what you'll be doing at a moment in the future: *This time next year I'll be living in…* 🔮\n- use *when, as soon as, before* + present: *I'll call you when I **get** home.* ⏰",
    ),
    text(
      "Game: Crystal ball 🔮",
      "Your teacher is a fortune teller! Choose three cards — your teacher makes predictions about your next year. Then swap and predict your teacher's future.\n\n🃏 work · 🃏 travel · 🃏 love · 🃏 money · 🃏 health · 🃏 a surprise\n\n*I can see… Next spring you'll… By December you'll be…* — do you believe the predictions? 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Think about this day exactly one year ago. Where were you, and what were you worried about? Did it all turn out OK?\n- What's one thing you really want to be different in your life one year from now? 🌱\n- Do you like making long-term plans, or do you prefer to see what happens? Why?",
    ),
    tip("Share your own answers — especially a plan that didn't work out the way you expected. Use the Future Continuous naturally (*Next summer I'll probably be teaching online from the mountains…*) but don't explain it yet."),
  ]),

  section("Vocabulary: Study and career", [
    words("Study and career", [
      ["apply for (a job / a course)", "📝 formally ask for a job or a place", "I've applied for a job at a bank."],
      ["a degree", "🎓 what you get after university", "She has a degree in economics."],
      ["an internship", "🧑‍💼 short work for students to get experience"],
      ["a scholarship", "🏅 money to pay for your studies"],
      ["get promoted", "📈 get a better position at work"],
      ["a career change", "🔄 starting a completely different job"],
      ["work your way up", "🪜 start at the bottom and slowly get better positions"],
      ["a gap year", "🌍 a year off between school and university (or jobs)"],
      ["graduate (from)", "👩‍🎓 finish university", "He graduated from university in 2022."],
      ["set a goal", "🎯 decide what you want to achieve"],
      ["achieve", "🏆 succeed in doing something after effort"],
      ["be on track", "🛤️ be making good progress towards a goal"],
    ]),
    match("Match.", [
      ["apply for", "a scholarship"],
      ["get", "promoted"],
      ["graduate", "from university"],
      ["set", "a goal"],
      ["make", "a career change"],
      ["take", "a gap year"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I've applied [for] three jobs this month, but nobody has answered yet. 📧\n2. She got a full [scholarship], so her studies are free! 🏅\n3. He started as a waiter and worked his [way] up to manager.\n4. After school, I'm taking a gap [year] to travel and work.\n5. My summer [internship] at a design studio taught me a lot.\n6. She'll [graduate] next June with a degree in medicine.\n7. I want to [achieve] my goal of running a marathon this year.\n8. I'm three chapters into my book — I'm on [track]! 🛤️",
    ),
    quiz("Choose the right word.", [
      { q: "After five years in the company, she finally got ___.", options: ["*promoted", "graduated", "applied"] },
      { q: "He was a lawyer, but now he's a chef. What a ___!", options: ["*career change", "gap year", "scholarship"] },
      { q: "You need a ___ in medicine to become a doctor.", options: ["*degree", "goal", "track"] },
      { q: "Write your goals down and check if you're ___ track every month.", options: ["*on", "in", "at"] },
    ]),
    sort("Study or work? Sort. 🎓💼", {
      "🎓 study": ["a degree", "a scholarship", "graduate", "an exam", "a lecture"],
      "💼 work": ["get promoted", "a salary", "a colleague", "a job interview", "a contract"],
    }),
  ]),

  section("Listening: Next year, I'll be…", [
    tip("A long listening — about 2 minutes. You know these people! Dana (module 1 — the marathon and the design course), Daniyar (Saule's grandson) and Kenji. First listen: *Where will each person be this time next year?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio feature. Three people talk about where they'll be this time next year.",
      "**Host:** It's January, the time for big plans. We asked three listeners: where will you be this time next year? First, Dana.\n\n**Dana:** Well, last year was crazy. I finished my design course, ran my first marathon — and a friend introduced me to a small design studio. I start there on the first of February! So this time next year, I'll be working as a junior designer. I'll probably be sitting in a tiny office with three other designers and a lot of coffee. ☕ As soon as I get more experience, I'd like to work on bigger projects — maybe book covers.\n\n**Host:** Congratulations! Daniyar, you're sixteen. What about you?\n\n**Daniyar:** This time next year I'll be preparing for my final exams, so I'll probably be studying all the time. 😩 But in the summer I'm going to apply for a scholarship to study computer science in Korea. If I get it, I'll be living in Seoul in two years! My grandma isn't very happy about it. She says she'll miss me — but she's already learning video calls, so we'll be fine.\n\n**Host:** And finally, Kenji.\n\n**Kenji:** I've been working as a developer here in Almaty for three years. This spring, I'm leading a new project — a language-learning app. So this time next year, I'll be testing it with real users. And when I'm not working, I'll be climbing in the mountains. I've just started, and I'm terrible at it! But before I turn thirty-five, I want to climb a really big mountain. 🏔️\n\n**Host:** What if things don't go to plan?\n\n**Kenji:** Then I'll make a new plan! Plans are important, but you have to be flexible.\n\n**Host:** Wise words. Good luck to all of you — and we'll call you again next January to check!",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Dana: This time next year, I'll be [working] as a junior designer.\n2. Dana: As soon as I [get] more experience, I'd like to work on bigger projects.\n3. Daniyar: I'll be [preparing] for my final exams.\n4. Daniyar: I'm going to apply for a [scholarship] to study in Korea.\n5. Kenji: This time next year, I'll be [testing] it with real users.\n6. Kenji: Before I [turn] thirty-five, I want to climb a really big mountain.",
    ),
    quiz("Listen and choose.", [
      { q: "When does Dana start her new job?", options: ["*on 1 February", "next January", "in the summer"] },
      { q: "What would Dana like to design one day?", options: ["*book covers", "apps", "clothes"] },
      { q: "Where does Daniyar hope to study?", options: ["*in Korea", "in Japan", "in Almaty"] },
      { q: "What is Kenji's new project?", options: ["*a language-learning app", "a climbing club", "a design studio"] },
      { q: "What's Kenji's advice?", options: ["*Make plans, but be flexible.", "Never change your plans.", "Don't make plans."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana found her new job through a friend.", true],
      ["Dana will be working in a big office.", false],
      ["Daniyar will be studying a lot this time next year.", true],
      ["Daniyar's grandma is very happy about his plan.", false],
      ["Kenji has been climbing for many years.", false],
      ["Kenji wants to climb a big mountain before he's thirty-five.", true],
    ]),
  ]),

  section("Grammar: Future Continuous", [
    quiz("Notice the rule 🔍 Look: “This time next year, I'll be working as a junior designer.” “I'll be testing it with real users.”", [
      { q: "What does “I'll be working” show?", options: ["*an action in progress at a moment in the future", "a finished action", "a quick decision"] },
      { q: "How do we make it?", options: ["*will be + verb-ing", "will + verb-ing", "am going + verb"] },
      { q: "Which words often go with it?", options: ["*this time next year, at 9 tomorrow", "yesterday, last week", "already, yet"] },
    ]),
    table("future-continuous"),
    choose(
      "Future Simple or Future Continuous? Choose.",
      "1. Don't call me at 8 — I [*'ll be having/'ll have] dinner with my parents.\n2. I'm tired. I think I [*'ll go/'ll be going] to bed early tonight.\n3. This time tomorrow we [*'ll be flying/'ll fly] to Dubai! ✈️\n4. In ten years' time, she [*'ll be running/'ll run] her own company.\n5. A: The phone's ringing. B: OK, I [*'ll answer/'ll be answering] it.\n6. [*Will you be using/Will you use] your laptop this evening? Can I borrow it?\n7. At midnight on New Year's Eve, we [*'ll be watching/'ll watch] the fireworks. 🎆\n8. I promise I [*'ll help/'ll be helping] you with your homework.",
    ),
    gaps(
      "Complete with the Future Continuous.",
      "1. This time next week, I [will be lying/'ll be lying] on a beach. 🏖️ (lie)\n2. Don't phone after ten — the baby [will be sleeping/'ll be sleeping]. (sleep)\n3. In 2035, people [will be driving/'ll be driving] electric cars. (drive)\n4. [Will you be working] on Saturday? (you / work)\n5. At 3 p.m. tomorrow, I [will be taking/'ll be taking] my driving test. 😬 (take)\n6. We [won't be living/will not be living] here next year — we're moving. (not / live)\n7. What [will you be doing] this time next year? (you / do)\n8. Kenji [will be testing/'ll be testing] his app with real users. (test)",
    ),
  ]),

  section("Grammar: when, as soon as, before + present", [
    table("time-clauses"),
    choose(
      "Choose the right form.",
      "1. I'll call you when I [*get/will get] home.\n2. As soon as the results [*come/will come] out, I'll tell you.\n3. Before I [*start/will start] university, I'm going to travel.\n4. We'll wait here until the rain [*stops/will stop]. ☔\n5. When she [*graduates/will graduate], she'll look for a job abroad.\n6. I [*'ll buy/buy] a car as soon as I have enough money.\n7. After we [*finish/will finish] the project, we'll have a party. 🎉\n8. I won't leave until you [*tell/will tell] me the truth!",
    ),
    drag(
      "Complete Daniyar's message.",
      "Hi Grandma! I've decided: I [will] apply for the scholarship in Korea. As soon [as] I get the results, I'll [call] you. If I get it, I'll be [living] in Seoul in two years! But don't worry — I [won't] forget you. Before I [leave], I'll teach you how to send voice messages. And when you [visit] me, we'll eat lots of kimchi together! 🥢",
      ["will call", "leaving", "visits", "until"],
    ),
    order("Make sentences.", [
      "This time next year I'll be living in Seoul.",
      "I'll call you as soon as I arrive.",
      "What will you be doing at nine tomorrow?",
      "Before I start my new job, I'm going to travel.",
      "We won't be working on Saturday.",
    ]),
  ]),

  section("Say it right: I'll, won't", [
    box(
      "🗣️ Say it right",
      "**I'll** = /aɪl/ — like *aisle* or *isle*. Don't say “I will” every time — it sounds very formal or very strong!\n\n**won't** /wəʊnt/ ≠ **want** /wɒnt/ — be careful!\n\n*I **won't** go.* = I will not go. · *I **want** to go.* = I'd like to go.\n\nThe vowel in **won't** is like in **don't** and **go**.",
    ),
    quiz("Listen to your teacher. Which word do you hear?", [
      { q: "I ___ go to the party.", options: ["*won't", "want to"] },
      { q: "They ___ be working on Sunday.", options: ["*won't", "want"] },
      { q: "I ___ to study abroad.", options: ["*want", "won't"] },
      { q: "We ___ be late, I promise.", options: ["*won't", "want"] },
    ]),
    tip("Say some sentences with *won't* and some with *want*, mixing them; the student holds up one finger for *won't* and two for *want*. Then the student says sentences about next year and you check their *I'll* and *won't*."),
  ]),

  section("Let's talk: Where will you be?", [
    text(
      "Game: Where will I be? 🔮",
      "Your teacher thinks of a time and place in the future (*Next Saturday at 10 a.m.…*). Ask Yes / No questions with the Future Continuous to guess what they'll be doing!\n\n*Will you be sleeping? Will you be working? Will you be eating something? Will you be with other people?*\n\nThen swap — your teacher guesses about you. 🎯",
    ),
    text(
      "Talk to your teacher.",
      "- What will you be doing this time next year? And in five years' time? Be specific — where, with whom? 📍\n- What's one goal you've set for this year? What will you do as soon as you achieve it? 🏆\n- Would you ever take a gap year or make a big career change? What would you do?\n- What's more important for you in a job: money, interest, or free time? Why?",
    ),
    tip("*If you have time:* “Future timeline” 📈 — the student draws a line from now to 10 years from now and marks 4–5 points (*Next summer… In 2028… When I'm 30…*). You ask: *What will you be doing then? What will you do before that?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "This time tomorrow I ___ on the plane.", options: ["*'ll be sitting", "sit", "'m sitting already"] },
      { q: "I'll text you when I ___ home.", options: ["*get", "will get", "'ll be getting"] },
      { q: "get a better position at work =", options: ["*get promoted", "graduate", "apply for"] },
      { q: "money to pay for your studies =", options: ["*a scholarship", "a salary", "a degree"] },
    ]),
    box(
      "Phrase of the day: Where do you see yourself in five years?",
      "💼 A classic job interview question: **Where do you see yourself in five years?**\n\n*In five years, I see myself leading a team. I'll be working on international projects…*",
    ),
  ]),

  homework(
    [
      video("Watch: the Future Continuous (future progressive).", "Fsz3T4MT2gc"),
      choose(
        "Choose.",
        "1. Call me after 6 — I [*'ll be driving/drive] until then.\n2. I'll tell you as soon as I [*know/will know].\n3. This time next month, we [*'ll be living/live] in our new flat.\n4. A: I'm hungry. B: I [*'ll make/'ll be making] you a sandwich.\n5. Before you [*go/will go], close the window, please.\n6. At 10 tomorrow, she [*'ll be giving/gives] a presentation.\n7. I won't go out until I [*finish/will finish] my essay.\n8. In 2040, many people [*will be working/work already] from home.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. I've applied [for] an internship in Berlin.\n2. She hopes to get [promoted] this year.\n3. He'll graduate [from] university in June.\n4. Write down your goals and check you're on [track].\n5. I'm thinking about a career [change] — I want to be a teacher.\n6. After school, many students take a gap [year].",
      ),
      write("Write a message to yourself to read one year from now (100+ words). What will you be doing? What do you hope will be different? What should you do as soon as you read this? Use the Future Continuous and when / as soon as / before.", 100, {
        read: "*Example:* Dear me, when you read this, it will be January again! I hope you'll be working at a new job by then — maybe in marketing. 💼 I hope you'll be speaking English with confidence and reading books without a dictionary. As soon as you finish reading this, call Mom and tell her you love her. ❤️ Before you make new plans, look back: what did you achieve? Don't be too hard on yourself…",
      }),
      record("Record 1 minute: Where do you see yourself in five years? What will you be doing? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
