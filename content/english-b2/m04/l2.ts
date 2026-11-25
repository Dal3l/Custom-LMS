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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.2 I was going to… — G: the future in the past: was / were going to (a plan that didn't happen), was about to / was on the point of (+ -ing), would (the future seen from the past), was due to / was supposed to. V: plans and changes (put off, call off, fall through, bring forward, back out of, something came up, have second thoughts…). S: tell the story of a plan that changed. Main format: "famous plans that changed — true or false?" + a long reading (three readers: plans that fell through, ~560 words) + a long listening (Dana and Madina catch up: the Barcelona plan, ~3:20). Video at home.
// Facts checked: Harrison Ford worked as a carpenter before his acting breakthrough (Star Wars, 1977); J.K. Rowling's first Harry Potter book was turned down by 12 publishers before Bloomsbury accepted it (1997); Jack Ma has said that when KFC opened in his city, 24 people applied and 23 were hired — he was the one who wasn't; Harland "Colonel" Sanders began franchising Kentucky Fried Chicken in 1952, when he was 62.
export default lesson("b2-4.2", "I was going to…", () => [
  section("Warm-up: Plans that changed", [
    box(
      "Today you will…",
      "- tell stories about plans that changed: *I was going to move abroad, but…* 🔀\n- use the future in the past: *was about to, would, was supposed to* ⏪🔮\n- learn phrasal verbs for plans: *put off, call off, fall through* 📅",
    ),
    trueFalse("Famous plans that changed. True or false? 🤔", [
      ["Before he became a film star, Harrison Ford worked as a carpenter.", true],
      ["The first Harry Potter book was rejected by twelve publishers.", true],
      ["Jack Ma, who later founded Alibaba, was turned down for a job at KFC.", true],
      ["Colonel Sanders started selling his chicken business idea when he was 62.", true],
      ["Steve Jobs was going to be a professional footballer before he started Apple.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- Which story is the most encouraging? Why?\n- Think of a plan you had five years ago. Did it happen — or did your life go in a different direction?\n- Is it good to have a detailed plan for your life, or is it better to stay flexible? 🤸",
    ),
    tip("Only the Steve Jobs story is invented. Model the grammar in your reaction: *He was going to be… but…* — the student will meet it properly soon."),
  ]),

  section("Vocabulary: When plans change", [
    words("When plans change", [
      ["put off", "⏩ do later, postpone", "We put off the trip until spring."],
      ["call off", "❌ cancel", "The match was called off because of the snow."],
      ["fall through", "💥 (a plan, a deal) fail, not happen"],
      ["bring forward", "⏪ move to an earlier time"],
      ["back out (of)", "🚪 decide not to do something you agreed to do"],
      ["Something came up.", "⚡ Something unexpected happened (so I couldn't…)"],
      ["have second thoughts", "🤔 start to doubt a decision"],
      ["change your mind", "🔄 decide something different"],
      ["go ahead", "✅ happen as planned / start doing it"],
      ["on the spur of the moment", "🎲 suddenly, without planning"],
    ]),
    match("Match.", [
      ["The deal fell", "through at the last minute."],
      ["They called", "off the wedding."],
      ["We had to put", "off the meeting until Monday."],
      ["He backed", "out of the trip."],
      ["The concert will go", "ahead despite the rain."],
      ["The exam has been brought", "forward to May."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Sorry, I can't come tonight — something came [up]. 😕\n2. I was going to buy the car, but then I had second [thoughts].\n3. We booked the flights on the spur of the [moment].\n4. The sale of the house fell [through] because the bank said no.\n5. Don't keep putting it [off] — just do it!\n6. She changed her [mind] and stayed in Almaty.",
    ),
  ]),

  section("Reading: Plans that fell through", [
    tip("A long text (~560 words). First reading — 5 minutes: *Who is happiest about how things turned out?* Then the tasks. Ask the student to underline every *was going to / was about to / would*."),
    trueFalse(
      "Read the readers' stories. True or false?",
      [
        ["Nurlan was going to study medicine because his parents wanted it.", true],
        ["Nurlan failed his medical exams.", false],
        ["Grace's wedding was called off because of the weather.", false],
        ["Grace and Tom got married in a garden in the end.", true],
        ["Ainur's job in Dubai started as planned.", false],
        ["All three writers are now glad their plans changed.", true],
      ],
      {
        read: [
          "## 🔀 Plans that fell through — and what happened next",
          "*We asked readers to tell us about a plan that didn't work out. Here are three of the stories we loved most.*",
          "**🩺 Nurlan, 34: “I was going to be a doctor.”**\nIn my family, it was decided early: I would be a doctor, like my father and my grandfather. I was going to study medicine in Almaty, and everything was ready — the documents, the books, even a white coat my grandmother had bought me. A week before the start of the course, I was helping my cousin with his computer, and I realized I'd been enjoying myself for six hours without noticing the time. I was about to tell my parents, but I kept putting it off. In the end, I told them the night before the course started. My father didn't speak to me for a month. Today I run a small software company, and my father is my most loyal customer — he says he would never have understood computers without me.",
          "**💒 Grace, 29: “The wedding was due to take place in June.”**\nTom and I were supposed to get married in a beautiful old hotel by the sea. We had sent the invitations, chosen the menu and paid a large deposit. Six weeks before the big day, the hotel closed suddenly — the owners had gone bankrupt. Our plans fell through overnight, and so did our deposit. We were on the point of calling the whole wedding off. Then my grandmother said, \"Why don't you get married in my garden? It's been waiting for a party for forty years.\" So we did. The neighbors brought chairs, a friend's band played, and it rained for exactly ten minutes. People still say it was the best wedding they've ever been to.",
          "**✈️ Ainur, 26: “I was about to move to Dubai.”**\nI had accepted a job at a hotel in Dubai. My flight was booked, my flat in Astana was empty, and I'd said goodbye to everyone at a big farewell dinner. The night before I was supposed to leave, the company emailed me: the project had been put off \"for at least six months\". I was devastated. I'd given up my old job, and I was going to have to start again. Out of desperation, I started giving English lessons online, just to pay the rent. Three years later, I have more than forty students and my own small online school. Last month, the Dubai company finally offered me the job again. I said no.",
          "**What we learned.** Reading the stories, we noticed something: nobody regretted the change. That doesn't mean it wasn't painful at the time — all three writers describe days when they thought their lives were falling apart. But a plan is only a guess about the future, made with the information we have today. When it falls through, we're forced to look for options we would never have considered. As Ainur wrote at the end of her email: \"I thought I was losing my future. I was actually finding it.\" 🌱",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What made Nurlan change his mind?", options: ["*He enjoyed helping his cousin with a computer for hours.", "He failed an exam.", "His father asked him to."] },
      { q: "Why did Grace's wedding plans fall through?", options: ["*The hotel closed suddenly.", "Tom backed out.", "It rained."] },
      { q: "What happened the night before Ainur's flight?", options: ["*The company put the project off.", "She missed the plane.", "She got a better offer."] },
      { q: "What does the magazine say about the three stories?", options: ["*Nobody regretted the change, although it was painful at the time.", "All the plans were bad from the start.", "Plans should never be changed."] },
    ]),
    gaps(
      "Find words in the stories.",
      "1. always supporting someone: [loyal]\n2. money you pay in advance to book something: a [deposit]\n3. without money to pay debts (a company): [bankrupt]\n4. a party when someone is leaving: a [farewell] dinner/party\n5. extremely shocked and sad: [devastated]\n6. the feeling of having no hope: [desperation]",
    ),
  ]),

  section("Grammar: The future in the past", [
    quiz("Notice the rule 🔍 Look: “I was going to study medicine.” · “I was about to tell my parents.” · “It was decided: I would be a doctor.” · “We were supposed to get married in June.”", [
      { q: "“I was going to study medicine” means…", options: ["*it was my plan, but it didn't happen (or we don't know)", "I studied medicine", "I'm going to study medicine"] },
      { q: "“I was about to tell them” means…", options: ["*I was going to tell them very soon", "I had already told them", "I never wanted to tell them"] },
      { q: "“would” in “I would be a doctor” is…", options: ["*the future seen from the past", "a polite request", "a past habit"] },
    ]),
    table("future-in-past"),
    choose(
      "Choose.",
      "1. I [*was going to/am going to] call you yesterday, but I forgot. 😬\n2. We were [*about to/about] leave when the phone rang.\n3. She knew she [*would/will] miss him.\n4. The train [*was due to/was due] arrive at six, but it was late.\n5. You [*were supposed to/supposed to] be here at nine!\n6. I was on the point of [*giving/give] up when I found the answer.\n7. They [*were going to/would going to] get married, but they called it off.\n8. I thought it [*would/will] rain, so I took an umbrella. ☂️",
    ),
    gaps(
      "Complete with the future in the past. Use the words in brackets.",
      "1. I [was going to buy] (go to / buy) the tickets, but they sold out.\n2. We [were about to start] (about / start) dinner when the lights went out.\n3. He promised he [would help] (would / help) me, but he didn't.\n4. The plane [was due to land] (due / land) at 10, but it was diverted.\n5. You [were supposed to tell] (suppose / tell) me about it!\n6. She was on the point of [accepting] (accept) the job when she had second thoughts.",
    ),
    drag(
      "Complete Grace's message to a friend.",
      "Hi Sam! Guess what — we were [going] to get married at the hotel by the sea, but it closed! We were on the [point] of calling everything off. Then Grandma said we [could] use her garden. We were [supposed] to have a quartet, but a friend's rock band played instead. 🎸 It was due [to] rain all day, but it only rained for ten minutes. I never thought it [would] be so perfect!",
      ["will", "about", "suppose"],
    ),
    order("Make sentences.", [
      "I was going to call you yesterday.",
      "We were about to leave when it started to rain.",
      "She knew she would miss them.",
      "You were supposed to be here at nine.",
      "The flight was due to land at ten.",
    ]),
    tip("Say it right: *was going to* is often /wəz gənə/ — *I was gonna call you.* In writing, always use *going to*."),
  ]),

  section("Listening: The Barcelona plan", [
    tip("A long listening — about 3 minutes 20 seconds. Dana (the book designer) and Madina meet in a café. Dana tells the story of a plan that changed. First listen: *Where is Dana living now, and why?* Second listen: the tasks."),
    ...listening(
      "Listen to Dana and Madina catching up in a café.",
      "**Madina:** Dana! I thought you were in Barcelona! Weren't you going to move there in September?\n\n**Dana:** I was. Everything was ready. The publisher I met at the design festival had offered me a full-time job, I'd found a tiny flat near the beach, and I was about to sign the contract.\n\n**Madina:** So what happened?\n\n**Dana:** Two days before I was supposed to fly, my mum had an accident. She fell on the ice and broke her hip. Nothing life-threatening, thank goodness, but she needed someone with her for a couple of months. I couldn't just leave.\n\n**Madina:** Oh no, I'm so sorry. Is she okay now?\n\n**Dana:** She's much better, thanks. She's walking again — and complaining about everything, which is a good sign. But at the time, I was on the point of calling off the whole Barcelona idea. I thought the publisher would simply give the job to someone else.\n\n**Madina:** And did they?\n\n**Dana:** No! That's the surprising part. I wrote to them, expecting the worst, and they replied the same day. They said I could start working remotely and move whenever I was ready. Apparently, half their team works from different countries anyway.\n\n**Madina:** That's amazing. So you're working for them from here?\n\n**Dana:** Yes, since October. I'm designing covers for a whole series of novels. And the funny thing is, I'm not sure I want to move anymore. I'd been dreaming about Barcelona for ten years, but now my mum's here, my friends are here, and the mountains are here. I can always go there for a few weeks in spring.\n\n**Madina:** Having second thoughts, then?\n\n**Dana:** A little. Ask me again in a year. What about you? Last time we met, you were going to hire two new designers.\n\n**Madina:** I was. We'd signed a big contract with a hotel chain — logos, menus, the whole thing. I was about to post the job adverts when they called and said the project was put off \"until further notice\".\n\n**Dana:** Oh, the famous \"until further notice\".\n\n**Madina:** Exactly. It fell through completely. For about a week, I was really worried. I'd promised my team a busy year.\n\n**Dana:** And?\n\n**Madina:** I was going to call the hotel and complain, but my accountant persuaded me not to. She said it would only make things worse, and that they might come back to us one day. So I just sent a polite email and moved on.\n\n**Dana:** Very grown-up of you.\n\n**Madina:** It didn't feel grown-up. It felt terrible. And then, on the spur of the moment, I entered a competition to design the posters for the city's winter festival — and we won. Leo's band is even playing there. So we're busy after all, just not in the way I'd planned.\n\n**Dana:** That's how it always works, isn't it? You make a plan, and life laughs.\n\n**Madina:** My grandmother says, \"If you want to make God laugh, tell him your plans.\"\n\n**Dana:** Your grandmother should write a book.\n\n**Madina:** Don't encourage her. Anyway, we were going to talk about your cover designs, weren't we?\n\n**Dana:** We were! Okay, look at this — tell me honestly what you think.",
    ),
    quiz("Listen and choose.", [
      { q: "Why didn't Dana move to Barcelona in September?", options: ["*Her mum had an accident and needed help.", "The publisher changed its mind.", "She couldn't find a flat."] },
      { q: "How did the publisher react?", options: ["*They let her work remotely and move later.", "They gave the job to someone else.", "They didn't reply."] },
      { q: "How does Dana feel about moving now?", options: ["*She isn't sure she wants to move anymore.", "She's leaving next week.", "She never wanted to go."] },
      { q: "What happened to Madina's contract with the hotel chain?", options: ["*It was put off and fell through.", "It went ahead as planned.", "Madina backed out."] },
      { q: "What saved Madina's year?", options: ["*winning a competition to design posters for the winter festival", "a new hotel client", "hiring two designers"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana had found a flat near the beach.", true],
      ["Dana's mum broke her arm.", false],
      ["Half of the publisher's team works from different countries.", true],
      ["Dana has been working for the publisher since October.", true],
      ["Madina posted the job adverts before the hotel called.", false],
      ["Leo's band is playing at the winter festival.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Madina: Weren't you [going] to move there in September?\n2. Dana: I was [about] to sign the contract.\n3. Dana: Two days before I was [supposed] to fly, my mum had an accident.\n4. Dana: I was on the [point] of calling off the whole Barcelona idea.\n5. Dana: I thought the publisher [would] simply give the job to someone else.\n6. Madina: It fell [through] completely.",
    ),
  ]),

  section("Let's talk: The plan that changed", [
    text(
      "Your story 🔀",
      "Tell your teacher about a plan that changed — a trip, a job, a course, a move, a party. 2 minutes.\n\n- **the plan**: *I was going to… / I was supposed to… / It was due to…*\n- **what happened**: *I was about to… when… / Something came up. / It fell through.*\n- **what you did**: *I decided to… / I had second thoughts…*\n- **now**: *Looking back, I'm glad / I wish… / If it hadn't fallen through, I would never have…*\n\nThen discuss: *Plans are nothing; planning is everything* — do you agree?",
    ),
    tip("The quote is attributed to Dwight D. Eisenhower (in a 1957 speech he quoted it as something he had heard in the army). Correct typical mistakes: *I was going to called* → *going to call*; *I was about leaving* → *about to leave*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ call you, but I forgot.", options: ["*was going to", "am going to", "will"] },
      { q: "We were ___ to leave when it started snowing.", options: ["*about", "going", "due"] },
      { q: "The meeting was called ___ because the boss was ill.", options: ["*off", "out", "up"] },
      { q: "The deal fell ___ at the last minute.", options: ["*through", "out", "off"] },
    ]),
    box(
      "Phrase of the day: If you want to make God laugh, tell him your plans",
      "😄 An old saying (Madina's grandmother loves it): life doesn't always follow our plans.\n\n*Has life ever laughed at one of your plans?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — How to talk about the future in the past.", "6FSnfS7-ohM"),
      choose(
        "Choose.",
        "1. I [*was going to/will] email you, but my laptop broke.\n2. She was about [*to leave/leaving] when he arrived.\n3. They promised they [*would/will] come.\n4. The bus [*was due to/is due to] leave at 7, but it was late.\n5. We were supposed [*to meet/meeting] at noon.\n6. The match was called [*off/out] because of the storm.\n7. Our plans fell [*through/down].\n8. I had [*second/two] thoughts about the job.",
      ),
      gaps(
        "Rewrite with the word in brackets.",
        "1. I planned to call you, but I didn't. (GOING) → I [was going to call] you, but I didn't.\n2. The train should have arrived at 6. (DUE) → The train [was due to arrive] at 6.\n3. We were just going to leave when it rained. (ABOUT) → We [were about to leave] when it rained.\n4. They cancelled the concert. (CALLED) → The concert [was called off].\n5. We postponed the meeting. (PUT) → We [put off the meeting/put the meeting off].\n6. The deal didn't happen in the end. (FELL) → The deal [fell through].",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      write("Write a story for a magazine called “Plans That Fell Through” (140–190 words): a plan that changed — yours or someone else's. Use was going to, was about to, would and at least three phrasal verbs from the lesson.", 140, {
        read: "*Tip:* start with the plan (*I was going to…*), then the moment it changed (*I was about to… when…*), and finish with how you feel now.",
      }),
      record("Record a 1-minute voice message to a friend explaining why you can't come to their party (use: something came up, was going to, was supposed to). 📱", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
