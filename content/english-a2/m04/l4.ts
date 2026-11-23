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
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 4.4 Revision 3–4 — tasks with points in the A2 Key style (vocabulary, grammar, reading, listening with notes, writing, speaking) + the project "My summer plan".
export default lesson("a2-4.4", "Revision 3–4", () => [
  section("Warm-up: Comparison ping-pong", [
    box(
      "Today you will…",
      "- review modules 3 and 4: *comparatives, superlatives, as … as, going to, the Present Continuous for the future*\n- do tasks like in the **A2 Key** exam — and get points! ⭐\n- start your project: **My summer plan** ☀️",
    ),
    tip("The tasks check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Game: Comparison ping-pong 🏓",
      "Your teacher says two things — you compare them fast! Then change roles.\n\n*summer / winter · cats / dogs · your city / Almaty · TikTok / YouTube · tea / coffee · mornings / evenings · your phone / your teacher's phone*\n\n*Summer is better than winter — it's warmer and longer!* ☀️\n\nNo comparison in 5 seconds = a point to the other player! 🏆",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best holiday you ever had? Why was it the best? 🏖️\n- What are you doing after this lesson? And this evening? ⏰\n- What's one thing you are going to do differently next month?",
    ),
  ]),

  section("Vocabulary", [
    match("Match.", [
      ["the battery", "life"],
      ["a traffic", "jam"],
      ["take up", "a hobby"],
      ["a dentist", "appointment"],
      ["a host", "family"],
      ["try", "it on"],
    ]),
    sort("Sort the words.", {
      "📱 Gadgets": ["reliable", "fragile", "storage", "the screen"],
      "🏙️ City and country": ["crowded", "peaceful", "pollution", "public transport"],
      "🎯 Plans and goals": ["get fit", "save money", "a deadline", "volunteer"],
    }),
    gaps(
      "Write the word.",
      "1. It always works. It's [reliable]. ✅\n2. Too many people! It's [crowded]. 👥\n3. A very tall building: a [skyscraper] 🏙️\n4. 🔥 something difficult: a [challenge]\n5. The paper that shows you paid: a [receipt] 🧾\n6. Sad because you miss home: [homesick] 🏠😢\n7. In another country: [abroad] 🌍\n8. The size is right — it [fits]. ✅",
    ),
  ]),

  section("Grammar", [
    choose(
      "Comparatives and superlatives: choose.",
      "1. My new phone is [*lighter/more light] than my old one.\n2. This is [*the most expensive/the expensivest] shop in the mall.\n3. Today is [*worse/badder] than yesterday.\n4. Baikal is [*the deepest/the deeper] lake in the world.\n5. My brother isn't as tall [*as/than] me.\n6. Life in the country is [*quieter/more quiet] than in the city.\n7. It was [*the best/the better] day of my life!\n8. Is Astana [*colder/more cold] than Almaty?",
    ),
    gaps(
      "Write the right form.",
      "1. big → [bigger] → [the biggest]\n2. good → [better] → [the best]\n3. easy → [easier] → [the easiest]\n4. beautiful → [more beautiful] → [the most beautiful]",
    ),
    choose(
      "going to or the Present Continuous? Choose.",
      "1. I [*'m meeting/meet] Dana at 6 tonight.\n2. One day I'm [*going to/going] learn Chinese.\n3. What [*are you doing/do you do] on Saturday?\n4. Look at the sky! It's [*going to/going] snow.\n5. We [*'re flying/fly] to Antalya next Monday.\n6. She [*isn't going to/doesn't going to] buy a new phone.\n7. [*Are you coming/Do you come] to the party?\n8. They're going to [*save/saving] money for a car.",
    ),
    drag(
      "Complete the message.",
      "Hi Leo! Guess what? We're [flying] to Istanbul on Friday! 🇹🇷 It's going [to] be my first trip abroad. Istanbul is [bigger] than Almaty, and they say the food is [the] best in the world! 😋 We're staying in a hotel near the sea. It's [more] expensive than a hostel, but it's much [nicer]. What [are] you doing this weekend? Are you going to [visit] your grandma?",
      ["fly", "most", "biggest", "visiting"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["She is more taller than her sister.", false],
      ["We're having a party on Saturday.", true],
      ["This is the most beautiful place in my city.", true],
      ["I'm going to buying a new laptop.", false],
      ["My room isn't as big as yours.", true],
      ["Tokyo is the bigger city in Japan.", false],
    ]),
  ]),

  section("Reading: Summer courses", [
    tip("A2 Key, Reading Part 2 style: three short texts and questions — *Which course…?* Read the questions first, then find the answers."),
    quiz(
      "Read about three summer courses. Which course…? Choose.",
      [
        { q: "Which course is the longest?", options: ["*Coding Camp", "Mountain Adventure", "English in London"] },
        { q: "Which course is the cheapest?", options: ["*Mountain Adventure", "Coding Camp", "English in London"] },
        { q: "On which course do you live with a family?", options: ["*English in London", "Mountain Adventure", "Coding Camp"] },
        { q: "Which course is good for people who love sport?", options: ["*Mountain Adventure", "Coding Camp", "English in London"] },
        { q: "On which course do you need your own laptop?", options: ["*Coding Camp", "English in London", "Mountain Adventure"] },
      ],
      {
        read: [
          "## ☀️ Summer courses for 15–19 year olds",
          "**🏔️ Mountain Adventure (Almaty)** — 1 week, $300. Hiking, climbing and rafting in the Tian Shan mountains. You sleep in tents and cook on a fire. You need to be fit! No phones for the whole week — are you ready? 📵",
          "**💻 Coding Camp (Astana)** — 4 weeks, $900. Learn to make your own app or game. Lessons from 10 to 4, and in the evenings — films and board games. Bring your own laptop. At the end, you present your app to real tech companies!",
          "**🇬🇧 English in London** — 3 weeks, $2,500 with flights. English lessons every morning; visits to museums, markets and football stadiums in the afternoons. You live with a host family — the best way to speak English every day!",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["You can't use your phone at Mountain Adventure.", true],
      ["The Coding Camp lessons are in the evenings.", false],
      ["The London course price includes flights.", true],
      ["At Mountain Adventure you sleep in a hotel.", false],
      ["At the end of the Coding Camp, you show your app to tech companies.", true],
    ]),
    text("Talk to your teacher.", "- Which course would you choose? Why? 🤔\n- Which is the most useful? The most fun? The best value for money?"),
  ]),

  section("Listening", [
    tip("A2 Key, Listening Part 2 style: listen to a message and complete the notes. Read the notes first — what information is missing?"),
    ...listening(
      "Listen to a message about the Mountain Adventure camp. Complete the notes.",
      "**Woman:** Hello, and thanks for calling Mountain Adventure! Here's the information about our summer camp. The camp starts on the fifteenth of July and finishes on the twenty-second. The bus leaves from the main square in Almaty at eight in the morning — please don't be late! The bus takes about two hours. Please bring warm clothes, because the nights in the mountains are cold, and good walking boots. You don't need to bring a tent — we have tents for everyone. The price is three hundred dollars, and that includes all the food. Phones stay at the office for the whole week, but you can call your parents on Wednesday. If you have questions, write to our email: info at mountain camp dot kz. See you in the mountains!",
    ),
    gaps(
      "Listen and complete the notes.",
      "🏔️ Mountain Adventure camp\n\n1. Starts on: [15/15th/fifteenth] July\n2. The bus leaves at: [8/8 a.m./eight] in the morning\n3. The bus trip takes about: [2/two] hours\n4. Bring: warm clothes and walking [boots]\n5. Price: $[300] — food is included\n6. You can call your parents on: [Wednesday]",
    ),
    trueFalse("Listen again. True or false?", [
      ["The camp finishes on 22 July.", true],
      ["The bus leaves from the train station.", false],
      ["You need to bring a tent.", false],
      ["The nights in the mountains are cold.", true],
      ["You can use your phone every evening.", false],
    ]),
  ]),

  section("Writing", [
    box(
      "✍️ A2 Key, Writing Part 6: a message",
      "- **25+ words**\n- answer **all 3 questions**\n- start: *Hi …!* — end: *See you! / Bye for now!*",
    ),
    write(
      "Your friend wrote: “What are you doing this summer? Are you going anywhere? Do you want to do something together?” Write a reply. (25+ words)",
      25,
    ),
    tip("Give points like the exam: all 3 questions? 25+ words? going to / the Present Continuous correct? 1 point for each ✅."),
  ]),

  section("Speaking", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Compare two places you know: your city and another city. *Which is bigger, more interesting, better for young people?*\n2. Your plans: *What are you doing this week? What are you going to do this summer?*\n3. The best… : the best film, trip or day of your life — and why.",
    ),
    order("Make questions.", [
      "Which is better, a laptop or a tablet?",
      "What's the most beautiful place in your country?",
      "What are you doing on Saturday?",
      "Are you going to take a gap year?",
      "Is your city as big as Almaty?",
    ]),
    tip("Look at the points for all the tasks together. Find the most difficult part (comparatives? going to or the Present Continuous?) and go back to it in the next lesson."),
  ]),

  section("Project: My summer plan", [
    box(
      "Your project ☀️",
      "Make a plan for your perfect (and real!) summer:\n\n1. **Goals:** 3 things you are going to do or learn this summer 🎯\n2. **Calendar:** your arrangements — trips, events, meetings, with dates 📅 (*On 10 June I'm flying to… On 20 July my cousin is getting married…*)\n3. **The best part:** what's going to be the best, the most exciting moment? Why? 🤩\n\nMake it a poster, a slide, a calendar or a video. Start now with your teacher — finish it at home!",
    ),
    text("Plan your project. Talk to your teacher.", "- What are you most excited about this summer? 🤩\n- What's going to be the most difficult part of your plan?\n- Poster, slide, calendar or video? 🎨📱"),
  ]),

  homework(
    [
      write("Project: My summer plan. Write your goals, your arrangements with dates, and the best part of the summer. Use going to, the Present Continuous and superlatives. (80+ words)", 80, {
        read: "*Example:* This summer I'm going to learn to drive and read 5 books in English. On 15 June I'm starting a part-time job in a café — I'm going to save money for a new laptop. On 10 July my family is flying to Antalya for a week. 🏖️ The best part is going to be my best friend's birthday on 2 August — we're having a party in the mountains! It's going to be the most exciting day of the summer.",
      }),
      record("Project video: present your summer plan (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Arman is going to the Coding Camp.", true],
          ["The camp is cheaper than the London course.", true],
          ["Arman is making a game about cats.", false],
          ["He's staying with his aunt in Astana.", true],
          ["Arman thinks the camp is going to be boring.", false],
        ],
        { read: "💬 **Arman:** I chose the Coding Camp in Astana! 💻 It's much cheaper than the London course, and it's the most useful for me — I want to study IT. I'm going to make a game about space. 🚀 I'm staying with my aunt — her flat is near the camp. The camp starts on 1 July. It's going to be the best summer ever!" },
      ),
      quiz("Choose.", [
        { q: "Why did Arman choose the Coding Camp?", options: ["*It's cheaper and useful for him.", "His friends are going.", "It's in London."] },
        { q: "What does Arman want to study?", options: ["*IT", "English", "sport"] },
        { q: "When does the camp start?", options: ["*on 1 July", "on 15 July", "in August"] },
        { q: "Where is Arman staying?", options: ["*with his aunt", "in a hostel", "in a tent"] },
      ]),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps(
        "Review: complete.",
        "1. Everest is [the highest] mountain in the world. (high)\n2. My phone is [cheaper] than yours. (cheap)\n3. I [am meeting/'m meeting] my friends on Friday. (meet — an arrangement)\n4. She [is going to learn/'s going to learn] to cook. (learn — a plan)\n5. This test is [more difficult] than the last one. (difficult)\n6. Look! The baby [is going to cry/'s going to cry]! (cry)",
      ),
      choose(
        "Choose.",
        "1. My city isn't as [*big/bigger] as Almaty.\n2. What [*are you doing/do you do] tomorrow?\n3. It's the [*worst/baddest] film I know!\n4. We're [*going to/going] save money.\n5. Who is [*the funniest/the most funny] person in your class?\n6. They [*'re getting/get] married next month.",
      ),
    ],
    "Homework: Review",
  ),
]);
