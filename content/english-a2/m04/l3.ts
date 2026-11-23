import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.3 Gap year — skills lesson: reading three stories, a short video, writing an email (A2 Key Part 6), planning an ideal year; review of module 4. The listening is at home.
export default lesson("a2-4.3", "Gap year", () => [
  section("Warm-up: A year off", [
    box("Today you will…", "- read about people who took a year off ✈️🌱\n- talk about the good and the bad sides\n- plan your ideal “gap year” and write an email"),
    matchPictures("What can you do in a gap year? Match.", [
      ["photos/gap-trees.jpg", "volunteer: plant trees"],
      ["photos/gap-hostel.jpg", "travel and stay in hostels"],
      ["photos/gap-surf.jpg", "learn something new: surfing"],
      ["photos/gap-farm.jpg", "work on a farm"],
      ["photos/country-village.jpg", "live in the countryside"],
    ]),
    text(
      "Talk to your teacher.",
      "- A **gap year** = a year between school and university (or a break from work) to travel, work or volunteer. Is it popular in your country? 🤔\n- Did you or someone you know ever take a long break from study or work? What did they do?\n- What do your parents think about gap years, do you think? Would they say yes? 😅\n- Which activity from the photos is the most interesting for you? Why?",
    ),
    tip("The idea of a gap year is new for many students — explain it with an example from your life or a friend's. Expect strong opinions: *It's a waste of time! / It's the best idea!* — great, that's the topic of the lesson."),
  ]),

  section("Vocabulary: A year off", [
    words("A gap year", [
      ["a gap year", "🗓️✈️ a year off between school and university or work"],
      ["volunteer", "🤝 work for free to help people or nature", "She volunteered at an animal shelter."],
      ["abroad", "🌍 in another country", "He's working abroad."],
      ["a backpacker", "🎒 a traveler with a backpack and not much money"],
      ["a host family", "🏠👨‍👩‍👧 a family you live with in another country"],
      ["earn money", "💵 get money for your work"],
      ["work experience", "💼 what you learn from a job"],
      ["independent", "🦅 you can do things without help"],
      ["confident", "😎 you believe in yourself"],
      ["a culture", "🎎🍜 the way of life of a country"],
      ["homesick", "🏠😢 sad because you're far from home"],
      ["a waste of time", "⏳🗑️ useless, nothing good comes from it"],
    ]),
    match("Match.", [
      ["work", "abroad"],
      ["earn", "money"],
      ["a host", "family"],
      ["work", "experience"],
      ["a waste", "of time"],
      ["learn about", "a new culture"],
    ]),
    sort("Good or bad about a gap year? Sort. 👍👎", {
      "👍 good": ["you become independent", "you learn a language", "you get work experience", "you meet new people"],
      "👎 bad": ["it can be expensive", "you can feel homesick", "your friends start university without you", "it can be a waste of time"],
    }),
    gaps(
      "Complete.",
      "1. She lived with a host [family] in Spain. 🏠\n2. He [volunteered] at a hospital for six months. 🤝\n3. I want to study [abroad] — maybe in Korea! 🌍\n4. After the trip she was more [confident]. 😎\n5. I missed my mom and my friends. I was [homesick]. 😢\n6. He worked in a café to [earn] money. 💵\n7. Living alone makes you [independent]. 🦅\n8. My parents think a gap year is a [waste] of time. 🗑️",
    ),
  ]),

  section("Reading: Was it worth it?", [
    tip("Three people talk about their gap years. Read one story at a time. After each, ask: *Was it a good idea for them? Why?* At the end, the student chooses the best gap year."),
    trueFalse(
      "Read the stories. True or false?",
      [
        ["Lucas worked on a farm in New Zealand.", true],
        ["Lucas didn't earn any money.", false],
        ["Aruzhan lived with a host family in Japan.", true],
        ["Aruzhan was never homesick.", false],
        ["Sam thinks his gap year was a waste of time.", true],
        ["Sam is going to start university next year.", true],
      ],
      {
        read: [
          "## 🗓️ A gap year: was it worth it?",
          "**Lucas, 20, Brazil 🇧🇷** — After school, I didn't know what to study. So I went to New Zealand on a working holiday. I picked kiwis on a farm for four months — it was hard work, but I earned enough money to travel around the country for two months. 🥝 I came back more independent, and now I know what I want: I'm studying agriculture!",
          "**Aruzhan, 19, Kazakhstan 🇰🇿** — I spent ten months in Japan. I lived with a host family in Osaka and taught English to children as a volunteer. The first two months were difficult: I was homesick and I couldn't understand anything! 😢 But then I made friends and started speaking Japanese. Now I'm more confident, and I'm going to study international relations.",
          "**Sam, 21, the UK 🇬🇧** — Honestly? My gap year wasn't a great idea. I wanted to travel, but I didn't have a plan or much money. I spent most of the year at home, playing video games and working a few hours a week in a supermarket. 🎮 My friends are now in their second year at university. I'm starting next year. My advice: have a plan!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Lucas do with his money?", options: ["*He traveled around New Zealand.", "He bought a car.", "He saved it for university."] },
      { q: "What did Aruzhan do as a volunteer?", options: ["*She taught English to children.", "She worked on a farm.", "She worked in a hotel."] },
      { q: "Why wasn't Sam's gap year a success?", options: ["*He didn't have a plan or much money.", "He was homesick.", "He worked too much."] },
      { q: "What's Sam's advice?", options: ["*Have a plan!", "Don't take a gap year.", "Travel alone."] },
    ]),
    match("Who says it? Match.", [
      ["“I picked kiwis on a farm.”", "Lucas"],
      ["“I couldn't understand anything!”", "Aruzhan"],
      ["“My advice: have a plan!”", "Sam"],
      ["“Now I know what I want.”", "Lucas"],
      ["“I made friends and started speaking Japanese.”", "Aruzhan"],
      ["“I spent most of the year at home.”", "Sam"],
    ]),
    text("Talk to your teacher.", "- Whose gap year was the best? Whose was the worst? Why?\n- Which country would you choose for a year abroad? Why? 🌍\n- Is it better to start university at 18, or after a year of real life? 🤔"),
  ]),

  section("Video: What is a gap year?", [
    video("Watch a 2-minute video about gap years. What reasons do people have for taking one?", "pGKtSCqd_5E"),
    text("Talk to your teacher.", "- Which reason from the video is the best, do you think?\n- Did the video change your opinion about gap years? Why / why not?"),
  ]),

  section("Review: Module 4", [
    choose(
      "Choose.",
      "1. Lucas [*is studying/studies] agriculture now. (at the moment)\n2. Aruzhan [*is going to/is] study international relations.\n3. Sam [*is starting/starts] university next year — he has a place.\n4. I'm [*going to/going] travel more one day.\n5. What [*are you doing/do you do] this Saturday?\n6. We [*'re meeting/meet] at 6 — don't be late!\n7. Look at that dark sky! It's going [*to rain/raining].\n8. My sister [*isn't going to/doesn't going to] take a gap year.",
    ),
    gaps(
      "Complete with going to or the Present Continuous.",
      "1. I [am going to learn/'m going to learn] Japanese one day. (learn — a plan)\n2. We [are flying/'re flying] to Tokyo on 3 May. (fly — we have tickets)\n3. She [is going to save/'s going to save] money for a trip. (save — a plan)\n4. My cousin [is getting/'s getting] married on Saturday. (get — it's in the calendar)\n5. They [are not going to buy/aren't going to buy/'re not going to buy] a car. (not buy — a decision)\n6. What [are you doing] tomorrow evening? (you / do)\n7. I [am meeting/'m meeting] my teacher at 5. (meet — an arrangement)\n8. Be careful! You [are going to fall/'re going to fall]! (fall — I can see it)",
    ),
    drag(
      "Complete the plan.",
      "Next year I'm [going] to take a gap year. I'm going [to] work in a café for six months and save money. Then I'm [going] to travel around Asia. My friend Dana is [coming] with me! We're [flying] to Seoul on 1 March — we already have the tickets. 🎫 After that, we're [going] to visit Japan — but we don't have a date yet.",
      ["go", "come", "fly"],
    ),
  ]),

  section("Writing: An email to a volunteer project", [
    box(
      "✍️ A2 Key, Writing Part 6: an email",
      "- **25+ words**\n- answer **all 3 points** in the task\n- start: *Dear… / Hello,* — end: *Best wishes, / Thanks, …*\n- use *I'm going to… / I'd like to…*",
    ),
    write(
      "You want to volunteer for one month at a national park in Kazakhstan. Write an email to the project. Say: who you are · what you'd like to do · one question about the project. (25+ words)",
      25,
      {
        read: "*Example start:* Dear Charyn Nature Project, My name is… I'm 19 and I love nature. I'd like to…",
      },
    ),
    tip("Check together: all 3 points? 25+ words? A good start and end? Give 1 point for each ✅ — like the exam."),
  ]),

  section("Let's talk: My ideal gap year", [
    text(
      "Plan your ideal year 🗺️",
      "You have one year and **$5,000**. Plan your gap year — month by month!\n\n- Where are you going to go? 🌍\n- What are you going to do: work, volunteer, study, travel? 💼🤝📚✈️\n- How are you going to earn more money? 💵\n- What are you going to learn?\n\nPresent your plan to your teacher. Your teacher asks: *Why there? Isn't it too expensive? Are you going to be homesick?* 😄",
    ),
    tip("Be the worried parent! 😄 *A whole year? Alone? What about university?* — the student defends the plan with reasons. Then switch: the student is the parent."),
    text(
      "Talk to your teacher.",
      "- What's the longest time you were away from home? How did you feel? 🏠\n- What do you want to learn that school or work doesn't teach you?\n- Are you a “plan everything” person or a “just go” person? 🎲",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "work for free to help =", options: ["*volunteer", "earn", "travel"] },
      { q: "sad because you're far from home =", options: ["*homesick", "independent", "confident"] },
      { q: "in another country =", options: ["*abroad", "a culture", "a host family"] },
      { q: "We ___ to Seoul on 1 March. (tickets booked)", options: ["*'re flying", "fly", "flew"] },
    ]),
    box("Word of the day: wanderlust", "**wanderlust** 🌍✨ = a strong wish to travel and see the world.\n\n*After her year in Japan, Aruzhan has serious wanderlust!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🤝 work for free to help: [volunteer]\n2. 🌍 in another country: [abroad]\n3. 🏠😢 sad because you miss home: [homesick]\n4. 😎 you believe in yourself: [confident]\n5. 🦅 you can do things without help: [independent]\n6. 💵 get money for your work: [earn] money",
      ),
      trueFalse("From the lesson: true or false?", [
        ["Lucas picked kiwis in New Zealand.", true],
        ["Aruzhan lived in Tokyo.", false],
        ["Sam worked in a supermarket.", true],
        ["Aruzhan taught English as a volunteer.", true],
        ["Sam's friends are in their first year at university.", false],
      ]),
    ],
    "Homework: Vocabulary and reading",
  ),
  homework(
    [
      ...listening(
        "Listen. A radio host talks to Kenji about his gap year.",
        "**Host:** Kenji, you took a gap year after school. Where did you go?\n\n**Kenji:** I went to Canada. I worked at a ski resort in the mountains for the winter. ⛷️\n\n**Host:** What was your job?\n\n**Kenji:** I worked in the kitchen first, and then I taught skiing to children. I'm from Sapporo in Japan, so I learned to ski when I was four!\n\n**Host:** Was it difficult?\n\n**Kenji:** The work was easy, but English was difficult at first. After three months, I could talk to everyone. And I made friends from twelve countries!\n\n**Host:** What are you doing now?\n\n**Kenji:** I'm studying hotel management in Tokyo. And next winter I'm going back to Canada — for a job this time, not a gap year! 😄",
      ),
      quiz("Listen and choose.", [
        { q: "Where did Kenji work?", options: ["*at a ski resort in Canada", "at a hotel in Tokyo", "on a farm in New Zealand"] },
        { q: "What was his second job there?", options: ["*teaching skiing to children", "working in the kitchen", "cleaning rooms"] },
        { q: "What was difficult at first?", options: ["*English", "the work", "the cold"] },
        { q: "How many countries were his friends from?", options: ["*twelve", "two", "twenty"] },
        { q: "What is Kenji doing now?", options: ["*studying hotel management", "working in Canada", "teaching skiing in Japan"] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      video("Watch: BBC 6 Minute English — Why take a gap year? (It's B1 — listen for the main ideas.)", "v5p7WY9nOJM"),
      write("Write 2 good and 2 bad things about gap years from the video or from the lesson.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about your ideal gap year: where are you going to go, what are you going to do, and why? (60+ words)", 60),
      record("Record your answer: Is a gap year a good idea or a waste of time? Give your opinion and 2 reasons. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
