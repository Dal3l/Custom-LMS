import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  picture,
  quiz,
  record,
  section,
  text,
  tip,
  trueFalse,
  video,
  write,
} from "../../kit";

// 12.3 A2 Key practice — an EXAM lesson: the real A2 Key format part by part (Reading parts 1, 2, 4, 5; Writing parts 6, 7; Listening parts 1 and 4; Speaking), with tips. The Listening part 4 is about the Abbey Road crossing (the course's third music easter egg). The class video is the official Cambridge speaking test example.
export default lesson("a2-12.3", "A2 Key practice", () => [
  section("Warm-up: What's in the exam?", [
    box(
      "Today you will…",
      "- try every part of the **Cambridge A2 Key** exam 🎓\n- learn tips for each part\n- see a real speaking test — and practice it! 🗣️",
    ),
    box(
      "📋 The A2 Key exam",
      "**Reading and Writing** — 60 minutes, 7 parts (5 reading + 2 writing)\n\n**Listening** — about 35 minutes, 5 parts\n\n**Speaking** — 8–10 minutes, 2 parts, with a partner and two examiners\n\nYou get a certificate with your result. 🏅",
    ),
    text(
      "Talk to your teacher.",
      "- Have you ever taken an English exam? How did you feel? 😰\n- What's easier for you: reading, writing, listening or speaking? What's the most difficult?\n- What do you do the night before an exam? 📚😴",
    ),
    tip("This lesson is a full exam rehearsal. Time the reading parts (about 8–10 minutes each) so the student feels the real pace. Don't help during the tasks — go through the answers and the tips after each part."),
  ]),

  section("Reading Part 1: Notices", [
    tip("Part 1: 6 short texts — notices, messages, emails. Tip: read the text first, then the options. The answer means the same, but uses different words!"),
    quiz("What does each text say? Choose the correct answer.", [
      { q: "🏊 SWIMMING POOL — Children under 10 must swim with an adult. Towels available at reception (€2).", options: ["*Young children can't swim alone.", "Towels are free.", "Adults can't use the pool."] },
      { q: "💬 Mum — I'm at Dana's. Her dad will drive me home after dinner, so don't pick me up. — Mia", options: ["*Mia doesn't need her mum to collect her.", "Mia wants her mum to come at dinner time.", "Dana's dad is having dinner with Mia's mum."] },
      { q: "🎫 CONCERT TONIGHT — Doors open 7 p.m. No re-entry after you leave the hall.", options: ["*If you go out, you can't come back in.", "The concert starts at 7 p.m.", "You can leave and come back."] },
      { q: "📧 Hi Tom, the meeting is moved from Tuesday to Thursday, same time. Bring your laptop. — Jen", options: ["*The day of the meeting has changed.", "The meeting time has changed.", "Tom doesn't need his laptop."] },
      { q: "🚲 BIKES FOR RENT — First 30 minutes free. Return to any station in the city.", options: ["*You don't have to bring the bike back to the same place.", "You must pay for the first 30 minutes.", "There's only one station."] },
      { q: "🍕 PIZZA PALACE — 2 pizzas for the price of 1 on Mondays. Not for delivery.", options: ["*The Monday offer is only when you eat or collect at the restaurant.", "You get a free pizza every day.", "Delivery is free on Mondays."] },
    ]),
  ]),

  section("Reading Part 2: Which person?", [
    tip("Part 2: 3 short texts about three people and 7 questions. Tip: read the questions first and underline the key words, then find them in the texts — careful, all three texts often mention similar things!"),
    quiz(
      "Read about three young people and their hobbies. Which person…? Choose.",
      [
        { q: "Which person started their hobby because of a family member?", options: ["*Sara", "Tom", "Amir"] },
        { q: "Which person has won a prize?", options: ["*Amir", "Sara", "Tom"] },
        { q: "Which person does their hobby with other people?", options: ["*Tom", "Sara", "Amir"] },
        { q: "Which person doesn't need to spend money on their hobby?", options: ["*Tom", "Amir", "Sara"] },
        { q: "Which person would like to make their hobby a job?", options: ["*Sara", "Tom", "Amir"] },
        { q: "Which person found their hobby difficult at first?", options: ["*Amir", "Tom", "Sara"] },
        { q: "Which person does their hobby early in the morning?", options: ["*Tom", "Sara", "Amir"] },
      ],
      {
        read: [
          "## 🎨🏃📸 Three hobbies",
          "**Sara, 17 — baking.** *My grandmother taught me to bake when I was eight. Now I bake every weekend — cakes, bread, cookies. The ingredients are quite expensive, but my family eats everything! 😄 In the future, I want to open my own café.*",
          "**Tom, 19 — running.** *I run with a running club in the park every Saturday and Sunday at 7 a.m. It's free — you just need some old trainers. I love it because I meet new people and I feel great all day. I'm not fast, but that's OK!*",
          "**Amir, 18 — photography.** *My first photos were terrible — I didn't understand the camera at all. But I watched videos and practised every day. Last year I won second prize in a city photo competition! My camera cost a lot, so I saved for a year to buy it.* 📸",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 3: A longer text", [
    tip("Part 3: one longer text and 5 questions with 3 options. Tip: the questions follow the order of the text."),
    quiz(
      "Read the text. Choose.",
      [
        { q: "Why did Zara start the club?", options: ["*She wanted to meet people who love books.", "Her teacher asked her.", "She wanted to earn money."] },
        { q: "Where does the club meet?", options: ["*in a café", "in the school library", "online"] },
        { q: "How do they choose the book?", options: ["*Every member takes a turn.", "Zara chooses every time.", "They vote online."] },
        { q: "What does Zara say about the first meeting?", options: ["*Only three people came.", "It was very long.", "Everybody loved the book."] },
        { q: "What is Zara going to do next?", options: ["*invite a writer to the club", "close the club", "write a book"] },
      ],
      {
        read: "## 📚 My book club — by Zara, 16\n\nLast year I wanted to talk about books with people of my age, but none of my friends liked reading. So I decided to start a book club! I put a poster on the wall at school and on Instagram.\n\nAt our first meeting, only three people came. I was a bit disappointed, but we had a great time. Now there are twelve of us! We meet every second Saturday in a small café near the park — the owner gives us free tea. ☕\n\nEvery month a different member chooses the book. Last month we read a crime story, and this month it's a book about a girl who climbs Everest. 🏔️\n\nNext, I'm going to invite a real writer to one of our meetings. I've already sent her an email. Fingers crossed! 🤞",
      },
    ),
  ]),

  section("Reading Parts 4–5: Gaps", [
    tip("Part 4: choose the right word for each gap (A, B or C) — think about grammar AND meaning. Part 5: write ONE word in each gap — usually small words: *the, of, to, was, have, if, than…* Read the whole text first!"),
    choose(
      "Part 4. Choose the correct word.",
      "The city of Liverpool is in the north-west of England. It is [*famous/popular/interested] for its football clubs and its music. In the 1960s, the Beatles [*started/opened/made] their career in a small club there, the Cavern Club. Today, thousands of tourists [*visit/go/travel] the city every year. Many of them go on a Beatles [*tour/travel/journey] by bus. You can also [*take/do/make] a boat across the River Mersey. Liverpool is a great city [*for/to/at] a weekend break!",
    ),
    gaps(
      "Part 5. Write ONE word in each gap.",
      "Hi Kate!\n\nI'm writing [to] tell you about my new job. I started [on] Monday. It's in a big hotel [in] the city center. I work at reception, so I [have] to speak English all the time! The people are very friendly, and my boss is nicer [than] my last one. [If] you come to Almaty in summer, I'll show you the hotel. Write soon!\n\nAliya",
    ),
  ]),

  section("Writing Parts 6–7", [
    box(
      "✍️ Writing tips",
      "**Part 6 — an email or message (25+ words):** answer ALL 3 points. Missing a point = losing marks!\n\n**Part 7 — a story from 3 pictures (35+ words):** write about ALL 3 pictures. Use the past tense and linking words: *first, then, suddenly, in the end*.\n\nCheck: spelling, capital letters, full stops. ✅",
    ),
    write(
      "Part 6. You're going to a concert with your English friend Sam next Saturday. Write an email to Sam. Say: where you'll meet · what time · what Sam should bring. (25+ words)",
      25,
    ),
    write(
      "Part 7. Look at the three pictures and write the story. (35+ words)\n\n1️⃣ 🏠📱🎫 Leo finds two concert tickets in his bag\n2️⃣ 🚌⏰😱 the bus is very late — the concert starts soon\n3️⃣ 🎸🎉 Leo and his friend arrive just in time — the band is starting",
      35,
    ),
    tip("Mark both texts like an examiner: content (all points?), organization (linking words?), language (grammar and vocabulary). Show one thing to improve and rewrite one sentence together."),
  ]),

  section("Listening Part 1: Short conversations", [
    tip("Part 1: 5 short conversations, one question each. Tip: you often hear ALL three options — listen for the one that's really the answer (people change their minds!)."),
    ...listening(
      "Part 1. Listen to five short conversations. Choose the right answer.",
      "**1.**\n**Woman:** What time does the film start?\n**Man:** At seven thirty — oh, wait, they've changed it. It's at eight now.\n\n**2.**\n**Boy:** Did you buy the blue jacket?\n**Girl:** I wanted to, but they didn't have my size. So I got the black one.\n\n**3.**\n**Man:** How are you getting to the airport — by taxi?\n**Woman:** Taxis are too expensive. I'll take the train — it's faster than the bus.\n\n**4.**\n**Girl:** Is your birthday party on Saturday?\n**Boy:** It was, but my parents are away that weekend, so it's on Friday.\n\n**5.**\n**Woman:** What did you have for lunch? The soup?\n**Man:** No, there wasn't any soup left. I had a salad — and a big piece of cake! 🍰",
    ),
    quiz("Listen and choose.", [
      { q: "1. What time does the film start?", options: ["*8:00", "7:30", "7:00"] },
      { q: "2. What did the girl buy?", options: ["*a black jacket", "a blue jacket", "nothing"] },
      { q: "3. How will the woman get to the airport?", options: ["*by train", "by taxi", "by bus"] },
      { q: "4. When is the party?", options: ["*on Friday", "on Saturday", "on Sunday"] },
      { q: "5. What did the man have for lunch?", options: ["*a salad and cake", "soup", "only cake"] },
    ]),
  ]),

  section("Listening Part 2: Notes", [
    tip("Part 2: listen to a message and complete the notes — usually numbers, days, names, prices. Tip: spelling counts for names that the speaker spells!"),
    ...listening(
      "Part 2. Listen to a message about a school trip. Complete the notes.",
      "**Man:** Hello, everyone. Here's the information about our trip to the science museum. We're going on Wednesday, the twelfth of May. The bus leaves from the school gate at half past eight, so please be there at eight fifteen. The ticket costs twelve dollars, and that includes lunch. Please bring a notebook and a pen — you'll have a worksheet to complete. The name of the guide is Ms. Price — that's P-R-I-C-E. We'll be back at school at about four o'clock. See you on Wednesday!",
    ),
    gaps(
      "Listen and complete the notes.",
      "🔬 Trip to the science museum\n\n1. Day: [Wednesday]\n2. Date: 12 [May]\n3. Be at the school gate at: [8:15/8.15/eight fifteen]\n4. Price: $[12/twelve] (lunch included)\n5. Bring: a notebook and a [pen]\n6. Guide's name: Ms. [Price]",
    ),
  ]),

  section("Listening Part 4: A famous crossing", [
    picture("A famous place in London", ["photos/abbey-road.jpg"], "A zebra crossing in St John's Wood, London. Why do so many tourists stop here? 🤔"),
    tip("Part 4 style: one longer talk, questions with 3 options. A little secret: this is the course's third music easter egg 🎸 — after Beatlemania and the Rolling Stones."),
    ...listening(
      "Part 4. Listen to a tour guide in London. Choose the right answer.",
      "**Woman:** OK everyone, please stay on the pavement — the cars here don't stop for tourists! Welcome to Abbey Road, one of the most famous streets in the world. Behind me is Abbey Road Studios, where the Beatles recorded most of their songs. And in front of you is the most famous zebra crossing on the planet.\n\nOn the eighth of August, 1969, at about half past eleven in the morning, the four Beatles walked across this crossing for the cover of their album “Abbey Road”. The photographer, Iain Macmillan, stood on a ladder in the middle of the road, and a police officer stopped the traffic for a few minutes. He took just six photos — and the fifth one became the album cover. If you look carefully at the cover, you'll see that Paul McCartney isn't wearing any shoes! 👣\n\nToday, thousands of fans come here every year to take the same photo. In 2010, the British government made the crossing a protected place — the first zebra crossing ever to get that protection. There's even a live webcam, so your friends at home can watch you cross!\n\nOne more thing: the wall outside the studio is full of messages from fans. You can write a short message too — but please, not on the cars! 😄 OK, who's first to cross?",
    ),
    quiz("Listen and choose.", [
      { q: "Why does the guide ask people to stay on the pavement?", options: ["*Cars don't stop for tourists.", "It's raining.", "The studio is closed."] },
      { q: "When was the famous photo taken?", options: ["*8 August 1969", "8 August 1963", "8 September 1969"] },
      { q: "Where did the photographer stand?", options: ["*on a ladder in the road", "on the roof of the studio", "inside a car"] },
      { q: "How many photos did he take?", options: ["*six", "five", "one hundred"] },
      { q: "What happened in 2010?", options: ["*The crossing became a protected place.", "The studio closed.", "The Beatles came back."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The Beatles recorded most of their songs at Abbey Road Studios.", true],
      ["The cover photo was the first photo he took.", false],
      ["Paul McCartney isn't wearing shoes on the cover.", true],
      ["You can watch the crossing on a webcam.", true],
      ["The guide says you can write on the cars.", false],
    ]),
  ]),

  section("Speaking: The real test", [
    video("Watch an official Cambridge A2 Key for Schools speaking test (about 7 minutes). How do the students answer? What does the examiner ask?", "-DNilMthxx8"),
    text(
      "Speaking Part 1: Questions about you 🗣️",
      "Your teacher is the examiner. Answer in full sentences — not just “yes” or “no”!\n\n- What's your name? Where do you live?\n- Do you work or are you a student?\n- What do you like doing in your free time? Why?\n- Tell me about your best friend.\n- What did you do last weekend?\n- What are you going to do next summer?",
    ),
    text(
      "Speaking Part 2: Talk together 💬",
      "Look at these 5 weekend activities: 🎬 a film · 🏔️ a hike · 🛍️ shopping · 🎳 bowling · 🎤 karaoke\n\n1. Talk with your teacher: *Do you like…? Why / why not? Which is better: … or …?*\n2. Then the examiner asks: *Which is the best for a birthday? Why?*\n\nTip: ask your partner questions too — *What about you? Do you agree?* 🤝",
    ),
    tip("Give feedback like an examiner: grammar and vocabulary, pronunciation, interaction (did the student ask *you* questions too?). Most students forget to ask the partner — that's an easy point to win! ⭐"),
  ]),

  section("Wrap-up", [
    quiz("Exam tips quiz. Choose.", [
      { q: "In Writing Part 6, you must…", options: ["*answer all 3 points", "write 100 words", "use only the present tense"] },
      { q: "In Writing Part 7, you write about…", options: ["*all 3 pictures", "only the first picture", "your favorite picture"] },
      { q: "In Listening Part 1, you often hear…", options: ["*all three options — but only one is the answer", "only the right answer", "nothing useful"] },
      { q: "In Speaking, it's good to…", options: ["*ask your partner questions too", "answer only “yes” or “no”", "speak your own language"] },
    ]),
    box("Word of the day: fingers crossed!", "You're ready! 🎓 Remember: read the questions first, answer every point, and ask your partner questions.\n\n**Good luck — fingers crossed!** 🤞"),
  ]),

  homework(
    [
      video("Watch: how to write a story for A2 Key (Writing Part 7).", "UMcLcRabHOM"),
      write(
        "Part 7 practice. Write a story about these three pictures (35+ words):\n\n1️⃣ 🐶🌳 Dana is walking her dog in the park\n2️⃣ 🐕💨🦆 the dog runs after a duck into the lake\n3️⃣ 🛁😂 at home: the dog has a bath",
        35,
      ),
    ],
    "Homework: Writing Part 7",
  ),
  homework(
    [
      quiz("Reading Part 1 practice. What does each text say? Choose.", [
        { q: "🎟️ MUSEUM — Free entry for students with a student card. Closed on Mondays.", options: ["*Students with a card don't have to pay.", "The museum is open every day.", "Everyone can visit for free."] },
        { q: "💬 Leo — the shop didn't have your cake, so I bought chocolate cookies. See you at 6! — Arman", options: ["*Arman couldn't buy what Leo wanted.", "Arman bought a cake.", "Leo has to go to the shop."] },
        { q: "🚇 METRO — Line 2 closed this weekend. Please use the free bus from Central Station.", options: ["*There's a free bus instead of Line 2.", "All metro lines are closed.", "Buses aren't running this weekend."] },
        { q: "📚 LIBRARY — You can borrow 5 books for 3 weeks. Late books: 100 tenge a day.", options: ["*You pay if you return a book late.", "You can keep the books forever.", "You can borrow 3 books for 5 weeks."] },
      ]),
      gaps(
        "Part 5 practice. Write ONE word in each gap.",
        "Dear Sam,\n\nThank you [for] your email. I'm really happy you're coming [to] Kazakhstan! When you arrive, I'll meet you [at] the airport. We [can] stay at my parents' house — it's big and comfortable. If the weather [is] good, we'll go to the mountains. I'm [sure] you'll love it!\n\nSee you soon,\nArman",
      ),
    ],
    "Homework: Reading practice",
  ),
  homework(
    [
      record("Speaking Part 1 practice: record your answers to these questions — What do you like doing at the weekend? Tell me about your family. What are you going to do next year? (2 minutes)", 120),
      text("Exam checklist ✅", "Before the exam:\n\n- 😴 sleep well the night before\n- 🆔 take your ID and two pencils\n- ⏰ arrive early\n- 📖 in the exam — read the questions first\n- ✍️ answer every point in Writing\n- 🗣️ in Speaking, smile and ask your partner questions"),
    ],
    "Homework: Speaking practice",
  ),
]);
