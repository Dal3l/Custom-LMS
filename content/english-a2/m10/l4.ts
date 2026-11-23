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

// 10.4 Revision 9–10 — tasks with points in the A2 Key style (vocabulary, grammar, a longer reading, listening with notes, writing, speaking) + the project "My lifehack" (a video how-to).
export default lesson("a2-10.4", "Revision 9–10", () => [
  section("Warm-up: How do you…?", [
    box(
      "Today you will…",
      "- review modules 9 and 10: *a few / a little, too / enough, adverbs, -ed / -ing, want to / enjoy -ing*\n- do tasks like in the **A2 Key** exam — and get points! ⭐\n- start your project: **My lifehack** 🎥",
    ),
    tip("The tasks check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Game: How do you…? ⚡",
      "Answer fast with an adverb — then ask your teacher!\n\n- How do you drive / ride a bike? 🚗\n- How do you sing in the shower? 🚿🎤\n- How do you eat when you're very hungry? 🍔\n- How do you answer the phone when you're tired? 📞\n- How do you get up on Monday mornings? 😴\n- How do you dance at weddings? 💃",
    ),
    text(
      "Talk to your teacher.",
      "- What have you enjoyed most in our last 8 lessons? What was boring? 😄\n- What do you want to learn next in English?",
    ),
  ]),

  section("Vocabulary", [
    match("Match.", [
      ["have a sweet", "tooth"],
      ["skip", "a meal"],
      ["get enough", "sleep"],
      ["apply for", "a job"],
      ["make", "progress"],
      ["look up", "a word"],
    ]),
    sort("Sort the words.", {
      "🍎 Food and health": ["junk food", "protein", "a portion", "oversleep"],
      "💼 Work": ["a CV", "experience", "a strength", "hard-working"],
      "📚 Learning": ["flashcards", "fluently", "subtitles", "an accent"],
    }),
    gaps(
      "Write the word.",
      "1. A person aged 100+: a [centenarian] 🎂\n2. Sleep too long and be late: [oversleep] ⏰\n3. A short sleep in the day: a [nap] 😴\n4. Something you're good at: a [strength] 💪\n5. Works well with others: a team [player] 🤝\n6. Stop trying: give [up] 🏳️\n7. A song you can't stop hearing: an [earworm] 🐛\n8. A person who speaks many languages: a [polyglot] 🗣️",
    ),
  ]),

  section("Useful phrases", [
    quiz("What do you say? Choose.", [
      { q: "At a job interview: “What are your strengths?”", options: ["*I'm hard-working and I learn fast.", "I'm boring.", "I don't know."] },
      { q: "A friend: “I'm always tired.” You give advice:", options: ["*You should get more sleep.", "You must to sleep.", "You sleep too enough."] },
      { q: "After a great film:", options: ["*It was amazing — I was really excited!", "I was amazing.", "It was excited."] },
      { q: "Ask about food:", options: ["*How much sugar is in it?", "How many sugar is in it?", "How much sugars?"] },
    ]),
  ]),

  section("Grammar", [
    choose(
      "Quantifiers, too and enough: choose.",
      "1. I ate [*a few/a little] cookies.\n2. There's [*a little/a few] milk left.\n3. I don't drink [*much/many] coffee.\n4. I drink [*too much/too many] coffee! ☕\n5. I don't get [*enough sleep/sleep enough].\n6. She's not old [*enough/too] to drive.\n7. There are [*too many/too much] cars in the city.\n8. It's [*too/enough] cold to swim.",
    ),
    choose(
      "Adverbs, -ed / -ing, verb patterns: choose.",
      "1. She speaks English very [*well/good].\n2. He drives [*carefully/careful].\n3. The film was [*boring/bored].\n4. I was [*surprised/surprising] by the ending.\n5. They decided [*to stop/stopping].\n6. I enjoy [*cooking/to cook].\n7. We worked very [*hard/hardly].\n8. I want [*to learn/learning] to play the drums. 🥁",
    ),
    drag(
      "Complete the message.",
      "Hi Dana! I'm so [excited] — I got the job at the café! ☕ The interview was [frightening] at first, but the manager spoke [kindly] and I answered all the questions [well]. I start on Monday. I need [to] buy a black T-shirt. I don't have [enough] money for a new one, but my sister has [a] few. I really enjoy [making] coffee — I hope I'll be good at it! 😄",
      ["exciting", "frightened", "kind", "good", "make"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["I'm very boring — let's go out!", false],
      ["She sings beautifully.", true],
      ["I want going to Japan.", false],
      ["We don't have enough chairs.", true],
      ["He works hardly every day.", false],
      ["I enjoy listening to podcasts.", true],
    ]),
  ]),

  section("Reading: My new healthy life", [
    tip("A2 Key, Reading Part 3 style: a longer text and 5 questions. Read the questions first, then find the answers in the text."),
    quiz(
      "Read the text. Choose.",
      [
        { q: "Why did Timur decide to change his life?", options: ["*He felt tired all the time.", "His doctor told him to.", "He wanted to run a marathon."] },
        { q: "What was his first change?", options: ["*He stopped using his phone in bed.", "He started going to the gym.", "He stopped drinking coffee."] },
        { q: "How does Timur get to work now?", options: ["*He walks.", "He drives.", "He takes the metro."] },
        { q: "What did Timur find difficult?", options: ["*eating less sugar", "sleeping more", "walking to work"] },
        { q: "What does Timur say about changes?", options: ["*Small changes are easier to keep.", "Big changes are better.", "Change everything at once."] },
      ],
      {
        read: [
          "## 🌱 My new healthy life — by Timur, 32",
          "A year ago, I felt tired all the time. I worked too much, I didn't get enough sleep and I ate a lot of junk food. One morning I overslept and missed an important meeting. That was it — I decided to change.",
          "I didn't change everything at once. My first change was small: no phone in bed. I put my phone in the kitchen at 10:30 every night, and I started to read before sleep. After a week, I was falling asleep quickly and waking up easily. 😴",
          "Then I started walking to work — it's only 3 kilometers. At first I was bored, but now I listen to podcasts and I really enjoy it. 🎧 I arrive at the office relaxed and awake.",
          "The most difficult change was sugar. I have a real sweet tooth! I didn't stop completely — I just eat a few sweets at the weekend, not every day. 🍫",
          "My advice? Don't try to change too many things at the same time. Small changes are easier to keep — and after a year, they make a big difference.",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Timur missed a meeting because he overslept.", true],
      ["He changed everything in one week.", false],
      ["He reads before sleep now.", true],
      ["His office is 30 km from his home.", false],
      ["He never eats sweets now.", false],
    ]),
    gaps(
      "Find the words in the text.",
      "1. sleep too long: [overslept/oversleep]\n2. food that is bad for you: [junk] food\n3. I love sweet food: I have a sweet [tooth]\n4. 3 km — a short distance to [walk]\n5. not all at the same time: not at [once]\n6. a big change: a big [difference]",
    ),
  ]),

  section("Listening", [
    tip("A2 Key, Listening Part 2 style: listen to a message and complete the notes. Read the notes first."),
    ...listening(
      "Listen to a message about a free English club. Complete the notes.",
      "**Woman:** Hi everyone, and welcome to the Easy English Club! We meet every Thursday evening at seven o'clock, in room twelve on the second floor of the city library. The club is free, but you need to register on our website first. Each meeting is about ninety minutes. We play games, watch short videos and talk about interesting topics — this month it's music and films. 🎬 Please bring a notebook and a pen. Phones are OK, but only for looking up words! Our first meeting this month is on the fifth of March. Oh, and there's free tea and cookies — but not too many cookies, please! 😄 See you on Thursday!",
    ),
    gaps(
      "Listen and complete the notes.",
      "🗣️ Easy English Club\n\n1. Day: every [Thursday]\n2. Time: [7/7 p.m./seven] o'clock\n3. Room: [12/twelve]\n4. Each meeting is about [90/ninety] minutes\n5. This month's topic: music and [films/movies]\n6. Bring a notebook and a [pen]",
    ),
    trueFalse("Listen again. True or false?", [
      ["The club is in the city library.", true],
      ["You have to pay for the club.", false],
      ["You need to register on the website.", true],
      ["Phones aren't allowed at all.", false],
      ["The first meeting this month is on 5 March.", true],
    ]),
  ]),

  section("Writing", [
    box(
      "✍️ A2 Key, Writing Part 6: an email",
      "- **25+ words**\n- answer **all 3 questions**\n- start: *Hi …!* — end: *See you soon! / Write back!*",
    ),
    write(
      "Your English friend Sam wrote: “What do you enjoy doing in your free time? Is there anything you want to learn this year? What do you do too much — or not enough? 😄” Write an email to Sam. (25+ words)",
      25,
    ),
    tip("Give points like the exam: all 3 questions? 25+ words? enjoy -ing / want to / too much / not enough correct? 1 point for each ✅."),
  ]),

  section("Speaking", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Your healthy (and unhealthy!) habits: *I eat a lot of… I don't get enough… I drink too much…*\n2. Something you do well and something you do badly — and how you learned it\n3. A film, book or concert that was exciting — or boring. How did you feel?",
    ),
    order("Make questions.", [
      "How much water do you drink?",
      "Do you get enough sleep?",
      "What do you enjoy doing at the weekend?",
      "What do you want to learn this year?",
      "Do you speak English well?",
    ]),
    tip("Look at the points for all the tasks together. Find the most difficult part (a few or a little? -ed or -ing? to or -ing?) and go back to it in the next lesson."),
  ]),

  section("Project: My lifehack", [
    box(
      "Your project 🎥",
      "Make a short video (1–2 minutes) — or a step-by-step poster — with your best lifehack: for learning, cooking, sleeping, saving money, cleaning, using your phone…\n\n1. **The problem:** *Do you spend too much time…? Don't you have enough…?*\n2. **The hack, step by step:** *First… Then… Do it carefully / slowly…*\n3. **Why it works** and how you feel: *It's amazing! I'm never bored / tired now…*\n\nStart planning now with your teacher — film or draw it at home!",
    ),
    text("Plan your project. Talk to your teacher.", "- What's your hack? Show it in 30 seconds now! ⏱️\n- What will you need for the video? 🎬\n- How will you start — with a question? A joke? 😄"),
  ]),

  homework(
    [
      write("Project: My lifehack. Write the script for your video: the problem, the steps and why it works. Use adverbs, too / enough and enjoy / want to. (80+ words)", 80, {
        read: "*Example:* Do you spend too much time looking for your keys? 🔑 I did — every morning! Here's my hack. First, put a small bowl next to your front door. Then, every time you come home, put your keys, wallet and headphones in it — quickly, without thinking. Do it every day for two weeks. Now I never lose my keys, and I leave home calmly, not angrily! It's a really simple hack, but it works perfectly. Try it!",
      }),
      record("Project video: show and explain your lifehack (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse(
        "Read the post. True or false?",
        [
          ["Aliya has tried Timur's “no phone in bed” hack.", true],
          ["She falls asleep slowly now.", false],
          ["She enjoys reading before bed.", true],
          ["She wants to try walking to work next.", true],
          ["She thinks the hack is boring.", false],
        ],
        { read: "💬 **Aliya:** I tried Timur's “no phone in bed” hack for two weeks — it's amazing! 😴 I fall asleep quickly now and I wake up easily. At first I was bored, but now I really enjoy reading before bed — I've finished two books! 📚 Next, I want to try walking to work. Not every day — 20 minutes is enough to start! 🚶‍♀️" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps(
        "Review: complete.",
        "1. I only eat [a few] sweets a week. 🍬\n2. Add [a little] salt. 🧂\n3. I'm [too] tired to go out. 😩\n4. She dances [beautifully]. (beautiful) 💃\n5. The concert was [amazing]! (amaz-) 🤩\n6. I don't mind [waiting]. (wait) ⏳",
      ),
      choose(
        "Choose.",
        "1. I hope [*to see/seeing] you soon.\n2. He was [*bored/boring] at the party.\n3. Do you have [*enough money/money enough]?\n4. She runs very [*fast/fastly].\n5. There isn't [*much/many] time.\n6. I finished [*writing/to write] my essay.",
      ),
    ],
    "Homework: Review",
  ),
]);
