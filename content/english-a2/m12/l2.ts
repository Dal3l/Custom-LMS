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
  words,
  write,
} from "../../kit";

// 12.2 Choices — a READING lesson with a "choose your path" story; a long listening (people talk about big decisions, ~2 min); review of all future forms + First Conditional. Say it right: contrast stress. S: talk about choices and decisions. No video in class.
export default lesson("a2-12.2", "Choices", () => [
  section("Warm-up: Big and small decisions", [
    box("Today you will…", "- read a story where YOU choose what happens 🛤️\n- talk about decisions that change lives\n- review all the ways to talk about the future 🔮"),
    sort("Big or small decision? Sort — for you! 🤔", {
      "🐘 big": ["which university to go to", "where to live", "which job to take", "who to marry"],
      "🐭 small": ["what to eat for lunch", "which film to watch", "what to wear today", "which color phone case to buy"],
    }),
    text(
      "Talk to your teacher.",
      "- What's the biggest decision you've made in your life so far? Are you happy with it? 🤔\n- Are you good at making decisions — or does it take you hours to choose a pizza? 🍕😅\n- Who do you ask for advice before a big decision?\n- Do you decide with your head 🧠 or with your heart ❤️?",
    ),
    tip("The sort has no single right answer for everyone — what's “small” for one person is “big” for another (choosing a phone case can be a big decision! 😄). Use it to start the conversation."),
  ]),

  section("Vocabulary: Making choices", [
    words("Decisions", [
      ["make a decision — decide", "🤔✅"],
      ["an option — a choice", "🅰️🅱️"],
      ["the pros and cons", "👍👎 the good and bad sides"],
      ["take a risk", "🎲"],
      ["regret", "😔 feel sorry about something you did (or didn't do)"],
      ["follow your dreams", "🌟🚶"],
      ["get into (university)", "🎓✅ be accepted"],
      ["leave home", "🏠➡️"],
      ["settle down", "🏡 start a calm life in one place"],
      ["change your mind", "🔁🧠"],
      ["a turning point", "↪️ a moment that changes everything"],
      ["it's up to you", "🫵 you decide"],
    ]),
    match("Match.", [
      ["make", "a decision"],
      ["take", "a risk"],
      ["follow", "your dreams"],
      ["get into", "university"],
      ["the pros", "and cons"],
      ["change", "your mind"],
    ]),
    gaps(
      "Complete.",
      "1. Let's write the pros and [cons] of each option. 👍👎\n2. Moving to another country is a big [risk/decision], but it's exciting. 🎲\n3. I don't want to [regret] it when I'm 80! 😔\n4. She worked hard and got [into] a great university. 🎓\n5. He traveled a lot, but at 35 he wanted to [settle] down. 🏡\n6. Meeting my best friend was a [turning] point in my life. ↪️\n7. I can't tell you what to do — it's [up] to you. 🫵\n8. Don't be afraid — follow your [dreams]! 🌟",
    ),
  ]),

  section("Reading: Choose Aliya's path 🛤️", [
    tip("Read the start, then STOP and vote: *Which option should Aliya choose? Why?* Then read all three endings — which one would you choose for yourself?"),
    trueFalse(
      "Read the story and the three paths. True or false?",
      [
        ["Aliya has just finished school.", true],
        ["Her parents want her to study medicine.", true],
        ["Aliya loves drawing and design.", true],
        ["On path A, Aliya will probably be happy at first.", false],
        ["On path B, she's going to work in a café in Seoul.", false],
        ["On path C, Aliya will study and work at the same time.", true],
      ],
      {
        read: [
          "## 🛤️ Choose Aliya's path",
          "Aliya is 18. She's just finished school in Shymkent, and she has a big decision to make. Her parents are doctors, and they want her to study medicine in Almaty. “It's a safe job,” her dad says. “You'll always have work.”",
          "But Aliya's real love is design. She draws every day, and she's made logos for three small local cafés. Her Instagram with her drawings has 5,000 followers. 🎨 She also has an offer from a design school in Seoul — but it's expensive, and it's very far from home.",
          "She has three options. **What should she do?** 🤔 *(Stop and vote before you read on!)*",
          "**🅰️ Path A: Medicine in Almaty.** If Aliya chooses medicine, her parents will be very happy and proud. She'll live in a dormitory with other students. The course is seven years long and very difficult. She'll probably have a safe job in the end — but if she doesn't love it, she might regret it.",
          "**🅱️ Path B: Design school in Seoul.** If she goes to Seoul, she'll follow her dream — but she'll have to learn Korean and work part-time to pay for her studies. She's going to miss her family a lot. 😢 It's a big risk, but she'll meet designers from all over the world.",
          "**🆎 Path C: Both — slowly.** Aliya could take a third option: study design online and get a part-time job at a design studio in Almaty. She'll earn money, stay close to her family and build her portfolio. If she's good enough, she might apply to Seoul in two years.",
          "*What happens next? It's up to Aliya — and to you!* ✨",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why do Aliya's parents want her to study medicine?", options: ["*They think it's a safe job.", "They want her to live in Seoul.", "She's good at science."] },
      { q: "How many followers does Aliya's Instagram have?", options: ["*5,000", "500", "50,000"] },
      { q: "How long is the medicine course?", options: ["*seven years", "four years", "two years"] },
      { q: "What will Aliya have to do in Seoul?", options: ["*learn Korean and work part-time", "live with her parents", "study medicine"] },
    ]),
    match("Which path? Match.", [
      ["Her parents will be proud.", "Path A"],
      ["She'll follow her dream far from home.", "Path B"],
      ["She'll study online and work in Almaty.", "Path C"],
      ["She might regret it if she doesn't love it.", "Path A"],
      ["She's going to miss her family a lot.", "Path B"],
      ["She might apply to Seoul in two years.", "Path C"],
    ]),
    text("Talk to your teacher.", "- Which path should Aliya choose? Why? 🗳️\n- What are the pros and cons of each path? 👍👎\n- Should parents decide what their children study? Why / why not?"),
  ]),

  section("Grammar review: all the futures", [
    quiz("Notice the rule 🔍 From the story: “She's going to miss her family. She'll probably have a safe job. She might regret it. If she goes to Seoul, she'll follow her dream.” Match the idea.", [
      { q: "“She's going to miss her family.” — going to for…", options: ["*something we can already see / a plan", "a promise", "a habit"] },
      { q: "“She might regret it.” — might means…", options: ["*maybe — not sure", "definitely", "never"] },
      { q: "“If she goes…, she'll…” — after if we use…", options: ["*the present", "will", "going to"] },
    ]),
    table("future-review"),
    choose(
      "Choose the best form.",
      "1. I've decided: I [*'m going to study/'ll study] design. (a plan)\n2. — The phone's ringing! — I [*'ll answer/'m going to answer] it! (a decision now)\n3. We [*'re flying/fly] to Seoul on 5 June — I have the tickets. (an arrangement)\n4. I'm not sure. I [*might/will definitely] change my mind.\n5. If you [*work/'ll work] hard, you'll get into a good university.\n6. I think AI [*will/is going to] change all jobs one day. (an opinion)\n7. Don't worry, I [*'ll help/help] you with your CV! (a promise)\n8. Look at those dark clouds — it [*'s going to/might to] rain.",
    ),
    gaps(
      "Complete with the right future form.",
      "1. I [am going to/'m going to] learn Korean next year — I've already bought a book. (plan)\n2. If I [get] into the university, I'll move to Almaty. (if…)\n3. I think you [will/'ll] love Seoul! (opinion)\n4. We [are meeting/'re meeting] the director on Monday at 10. (arrangement)\n5. She [might] study design — she isn't sure yet. (maybe)\n6. If it's too expensive, she [won't/will not] go. (if…, negative)\n7. I promise I [will/'ll] call you every day! (promise)\n8. What [will] you do if you don't get the job? (question)",
    ),
    drag(
      "Complete Aliya's message to her best friend.",
      "Big news! I've made a decision: I'm [going] to choose path C! 🎨 I'm [starting] a job at a design studio next Monday — it's all arranged. If I [save] enough money, I'll apply to Seoul in two years. My parents [might] not be happy at first, but I think they['ll] understand. I [won't] give up my dream! Will you [help] me with my portfolio? I promise I['ll] buy you coffee! ☕",
      ["will start", "will save", "going"],
    ),
    order("Make sentences.", [
      "I'm going to study design.",
      "If I get the job, I'll celebrate.",
      "She might change her mind.",
      "We're meeting at six tomorrow.",
      "I'll help you, I promise.",
    ]),
  ]),

  section("Say it right: stress for contrast", [
    box(
      "🗣️ Say it right",
      "When we correct someone or compare, we stress the **important** (new) word:\n\n— *Are you going to study medicine?*\n— *No, I'm going to study **DESIGN**!* 🎨\n\n— *Is she moving to Almaty?*\n— *No, she's moving to **SEOUL**!*",
    ),
    quiz("Which word is stressed in the answer? Choose.", [
      { q: "— Is the flight on Monday? — No, it's on TUESDAY.", options: ["*Tuesday", "it's", "on"] },
      { q: "— Are you meeting Leo? — No, I'm meeting DANA.", options: ["*Dana", "I'm", "meeting"] },
      { q: "— Will you go by bus? — No, I'll go by TRAIN.", options: ["*train", "I'll", "go"] },
      { q: "— Is she going to study law? — No, she's going to study ART.", options: ["*art", "study", "going"] },
    ]),
    tip("Play “Wrong guess”: say wrong facts about the student (*You're going to Paris this summer!*), and the student corrects with a strong stress: *No, I'm going to TURKEY!*"),
  ]),

  section("Listening: Turning points", [
    tip("A long listening — about 2 minutes. Three people talk about a big decision. First listen: *What was each person's decision?* Second listen: *Do they regret it?*"),
    ...listening(
      "Listen to a podcast. Three people talk about a decision that changed their life.",
      "**Host:** Welcome to “Turning Points”. Today three listeners tell us about the biggest decision of their lives. First, Daniyar.\n\n**Daniyar:** Hi! Five years ago I had a good job in a bank in Almaty. Good salary, nice office. But I was bored every single day. One day I decided to leave the bank and become a mountain guide. My parents thought I was crazy! 😅 The first year was hard — I didn't earn much. But now I have my own small company, and I'm never bored. I don't regret it at all.\n\n**Host:** Thank you, Daniyar. Next, Kate.\n\n**Kate:** My decision was about family. I lived in London, and I had a great job offer in New York. But my mum was ill, so I decided to stay in London. Sometimes I think: what will my life look like if I go to New York one day? Maybe I'll go in the future. But I'm happy I was with my mum when she needed me.\n\n**Host:** That's a beautiful story. And finally, Arman.\n\n**Arman:** Mine is smaller, but it changed everything. Two years ago, I decided to start learning English seriously — twenty minutes every day. I was afraid I was too old — I was thirty-five! But now I can watch films without subtitles, and next month I'm starting a new job in an international company. If you're thinking about starting something — start today!\n\n**Host:** Great advice! Thank you all.",
    ),
    quiz("Listen and choose.", [
      { q: "What was Daniyar's job before?", options: ["*He worked in a bank.", "He was a teacher.", "He was a mountain guide."] },
      { q: "What does Daniyar have now?", options: ["*his own small company", "a job in a bank", "a new office in Almaty"] },
      { q: "Why did Kate stay in London?", options: ["*Her mum was ill.", "She didn't like New York.", "She got a better job in London."] },
      { q: "How old was Arman when he started learning English seriously?", options: ["*thirty-five", "twenty-five", "forty-five"] },
      { q: "What is Arman starting next month?", options: ["*a new job in an international company", "a course in London", "a gap year"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar was bored at the bank.", true],
      ["Daniyar's parents loved his idea.", false],
      ["Kate regrets staying in London.", false],
      ["Kate might go to New York in the future.", true],
      ["Arman studies English for twenty minutes every day.", true],
    ]),
  ]),

  section("Let's talk: Your choices", [
    text(
      "Talk to your teacher.",
      "- What was a turning point in your life? What happened? ↪️\n- Is there a decision you regret — or something you didn't do and regret? 😔\n- What decision are you thinking about now? What are the pros and cons? 👍👎\n- What advice do you have for Aliya? 💬",
    ),
    text(
      "Game: Decision coach 🧑‍🏫",
      "Think of a real decision you need to make (big or small). Tell your teacher the options.\n\nYour teacher asks: *What will happen if you choose A? What might go wrong? What are you going to do if…?*\n\nAt the end, make your decision out loud: *OK, I've decided: I'm going to…* 🎯",
    ),
    tip("Be a real coach — ask open questions, don't decide for the student. If the student doesn't want to share a real decision, use an invented one (buy a car or travel for a year?)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a moment that changes everything =", options: ["*a turning point", "a regret", "an option"] },
      { q: "I've decided: I ___ study design.", options: ["*'m going to", "might to", "will to"] },
      { q: "If she ___ to Seoul, she'll learn Korean.", options: ["*goes", "will go", "went"] },
      { q: "It's ___ to you. (you decide)", options: ["*up", "down", "on"] },
    ]),
    box("Word of the day: no regrets", "**no regrets** 😌 = I'm happy with my choices, even the difficult ones.\n\n*Leaving the bank was scary, but no regrets!* (Remember “no regrets” from Module 1? 😉)"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I need to make a [decision] by Friday. 🤔\n2. Let's write the pros and [cons]. 👍👎\n3. He got [into] a university in Prague. 🎓\n4. I don't want to [regret] my choice. 😔\n5. You decide — it's [up] to you. 🫵\n6. She left her job to follow her [dreams]. 🌟",
      ),
      choose(
        "Choose.",
        "1. I [*'m going to/will to] travel next year — I've started saving.\n2. If it [*rains/will rain], we'll stay in.\n3. She [*might/might to] come later.\n4. We [*'re having/have] a party on Saturday. Come!\n5. — I'm hungry. — I [*'ll make/'m making] you a sandwich!\n6. What [*will/do] you do if you lose your job?",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Write the next chapter of Aliya's story: choose a path and tell what happens one year later. Use going to, will, might and if. (70+ words)", 70),
    ],
    "Homework: Creative writing",
  ),
  homework(
    [
      write("Write about a decision you need to make (or made): the options, the pros and cons, and your choice. (60+ words)", 60, {
        read: "*Example:* I need to decide: should I buy a car or travel for a year? 🚗✈️ If I buy a car, I'll get to work faster and I won't take crowded buses. But it's expensive, and I might not use it every day. If I travel, I'll see the world and practice my English — but I'll have to leave my job. I think I'm going to travel. No regrets! 😄",
      }),
      record("Record your answer: Tell your teacher about a turning point in your life. (1–2 minutes)", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
