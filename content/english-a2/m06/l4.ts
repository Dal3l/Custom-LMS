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

// 6.4 Revision 5–6 — tasks with points in the A2 Key style (vocabulary, grammar, reading, a longer listening with questions, writing, speaking) + the project "My bucket list".
export default lesson("a2-6.4", "Revision 5–6", () => [
  section("Warm-up: Find someone who…", [
    box(
      "Today you will…",
      "- review modules 5 and 6: *will / won't, might, I'll help, Present Perfect, been / gone, Present Perfect or Past Simple*\n- do tasks like in the **A2 Key** exam — and get points! ⭐\n- start your project: **My bucket list** 📝",
    ),
    tip("The tasks check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Game: Have you ever…? 🔍",
      "Ask your teacher — and answer yourself. For every *Yes*, ask one more question in the Past Simple!\n\nHave you ever…\n\n- … eaten something really strange? 🦗\n- … lost something important? 🔑\n- … been on TV or the radio? 📺\n- … slept outside under the stars? ⭐\n- … cooked for more than 10 people? 🍲\n- … forgotten someone's name the moment they told you? 😅\n\n*Yes, I have! — When did you…? What happened?*",
    ),
    text(
      "Talk to your teacher.",
      "- What will you probably do this weekend? What might you do? 🤔\n- What's one thing you've never done but you will definitely do this year?",
    ),
  ]),

  section("Vocabulary", [
    match("Match.", [
      ["artificial", "intelligence"],
      ["keep", "a promise"],
      ["work", "remotely"],
      ["go", "sightseeing"],
      ["break", "a record"],
      ["safety", "equipment"],
    ]),
    sort("Sort the words.", {
      "🤖 The future": ["a drone", "a self-driving car", "replace", "automate"],
      "✈️ Travel": ["a souvenir", "jet lag", "a visa", "a cruise"],
      "🧗 Adventure": ["brave", "terrified", "a helmet", "survive"],
    }),
    gaps(
      "Write the word.",
      "1. Give for a short time: [lend] 🤲\n2. A problem happened, I can't come: something came [up] 😬\n3. Many companies need these people: in [demand] 🔥\n4. Tired after a long flight: jet [lag] 😴\n5. A thing you buy to remember a place: a [souvenir] 🧲\n6. Very, very scared: [terrified] 😱\n7. A person who loves danger: an adrenaline [junkie] ⚡\n8. You wear it on your head: a [helmet] ⛑️",
    ),
  ]),

  section("Grammar", [
    choose(
      "will, might, going to: choose.",
      "1. I think people [*will/are will] live on Mars one day.\n2. Take an umbrella — it [*might/might to] rain.\n3. The bag is heavy? I [*'ll/'m going to] help you!\n4. We decided last week: we [*'re going to/'ll] move to Astana.\n5. I promise I [*won't/don't] be late.\n6. She [*might not/doesn't might] come — she's busy.\n7. AI [*will probably/probably will to] change many jobs.\n8. Shall we [*meet/meeting] at 6?",
    ),
    choose(
      "Present Perfect or Past Simple: choose.",
      "1. I [*'ve been/went] to Georgia twice.\n2. We [*went/'ve gone] there in 2022.\n3. Have you ever [*tried/try] horse riding?\n4. When [*did you start/have you started] learning English?\n5. She [*'s gone/'s been] to the shop. She'll be back soon.\n6. He [*'s never seen/never saw] the sea in his life.\n7. They [*won/'ve won] the match yesterday.\n8. I [*haven't finished/didn't finish] my bucket list yet.",
    ),
    gaps(
      "Write the 3rd form.",
      "1. be → [been]\n2. see → [seen]\n3. eat → [eaten]\n4. fly → [flown]\n5. write → [written]\n6. break → [broken]",
    ),
    drag(
      "Complete the message.",
      "Hi Mia! Guess what? I've [booked] a trip to Norway! 🇳🇴 I've [never] seen the northern lights — it's number one on my bucket list. I [went] to Finland in 2021, but it was cloudy every night. 😩 This time I'm sure I'[ll] see them! The guide says it [might] be −25°C, so I'm going [to] buy a really warm jacket. Have you [ever] been to Norway? I'll [send] you photos!",
      ["ever been", "go", "will", "sent", "book"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["I've been to London in 2019.", false],
      ["She might come to the party.", true],
      ["Have you ever eaten sushi?", true],
      ["I think it won't rain tomorrow.", false],
      ["He has never flown in a plane.", true],
      ["When have you arrived?", false],
    ]),
  ]),

  section("Reading: Experience days", [
    tip("A2 Key, Reading Part 2 style: three short texts and questions — *Which experience…?* Read the questions first, then find the answers."),
    quiz(
      "Read about three experience days. Which one…? Choose.",
      [
        { q: "Which experience is the shortest?", options: ["*Indoor Skydiving", "Desert Night", "Sushi Master"] },
        { q: "Which one is for people who have never tried it before?", options: ["*all three", "only Indoor Skydiving", "only Sushi Master"] },
        { q: "In which one do you sleep outside?", options: ["*Desert Night", "Indoor Skydiving", "Sushi Master"] },
        { q: "Which one can you do in a group of up to 12 people?", options: ["*Sushi Master", "Indoor Skydiving", "Desert Night"] },
        { q: "Which one is the most expensive?", options: ["*Desert Night", "Sushi Master", "Indoor Skydiving"] },
      ],
      {
        read: [
          "## 🎁 Give an experience, not a thing!",
          "**🪂 Indoor Skydiving — $60.** Have you ever wanted to fly? Try skydiving in a wind tunnel — no plane, no danger! The class is 1 hour: 45 minutes of training and two 1-minute “flights”. No experience needed. Age 7+.",
          "**🐪 Desert Night — $180.** Ride a camel to our camp in the desert, cook dinner on a fire and sleep in a tent under millions of stars. ⭐ You've never seen a sky like this! Start: 5 p.m., finish: 10 a.m. the next day. No experience needed.",
          "**🍣 Sushi Master — $75.** Learn to make sushi with a chef from Tokyo. In 3 hours you'll make 4 kinds of sushi — and then eat them! Great for birthdays: groups of up to 12. No cooking experience needed.",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Indoor Skydiving is for children from 7 years old.", true],
      ["At Desert Night you cook dinner on a fire.", true],
      ["The Sushi Master class is 1 hour.", false],
      ["You need cooking experience for Sushi Master.", false],
      ["Desert Night finishes the next morning.", true],
    ]),
    text("Talk to your teacher.", "- Which experience would you choose? Who would you take with you? 🎁\n- What's the best present you've ever got — a thing or an experience?"),
  ]),

  section("Listening", [
    tip("A2 Key, Listening Part 3 style: a longer conversation and 5 questions. Read the questions first. Listen twice."),
    ...listening(
      "Listen. Arman talks to his friend Mia about a holiday.",
      "**Mia:** Arman, you're back! How was Georgia?\n\n**Arman:** Amazing! It was my first time there. We stayed in Tbilisi for three days and then went to the mountains.\n\n**Mia:** Have you ever been to the mountains in Georgia before?\n\n**Arman:** No, never. We went to a village called Kazbegi. There's a famous church on a hill — we walked up there. It took two hours! ⛪\n\n**Mia:** Wow. And the food? I've heard it's incredible.\n\n**Arman:** It is! I ate khachapuri every day — maybe too much. 😅 But I didn't try the wine — I don't drink.\n\n**Mia:** Did anything go wrong?\n\n**Arman:** Only one thing. On the last day I left my jacket in a taxi. But the driver called the hotel and brought it back! People there are so kind.\n\n**Mia:** That's lucky! Will you go back?\n\n**Arman:** Definitely. Next time I might go in winter — you can go skiing in Gudauri. Do you want to come?\n\n**Mia:** Maybe! I've never been skiing. I'll think about it!",
    ),
    quiz("Listen and choose.", [
      { q: "How long did Arman stay in Tbilisi?", options: ["*three days", "a week", "two days"] },
      { q: "How long did the walk up to the church take?", options: ["*two hours", "half an hour", "a whole day"] },
      { q: "What did Arman eat every day?", options: ["*khachapuri", "shashlik", "khinkali"] },
      { q: "What did Arman leave in a taxi?", options: ["*his jacket", "his phone", "his passport"] },
      { q: "When might Arman go back to Georgia?", options: ["*in winter", "next summer", "never"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["It was Arman's first time in Georgia.", true],
      ["The taxi driver brought the jacket back.", true],
      ["Mia has been skiing many times.", false],
      ["Arman tried Georgian wine.", false],
      ["Mia is sure she will go skiing with Arman.", false],
    ]),
  ]),

  section("Writing", [
    box(
      "✍️ A2 Key, Writing Part 6: an email",
      "- **25+ words**\n- answer **all 3 questions**\n- start: *Hi …!* — end: *See you soon! / Write back!*",
    ),
    write(
      "Your English friend Sam wrote: “Have you ever done anything really exciting? What was it? What would you like to try next?” Write an email to Sam. (25+ words)",
      25,
    ),
    tip("Give points like the exam: all 3 questions? 25+ words? Present Perfect + Past Simple correct? 1 point for each ✅."),
  ]),

  section("Speaking", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Your life in 10 years: *I'll probably… I might… I definitely won't…*\n2. Your experiences: *I've been to… I've tried… I've never…* (and tell one story: *When I was…*)\n3. A promise or an offer: your friend is moving to a new flat. Offer 3 kinds of help: *I'll…*",
    ),
    order("Make questions.", [
      "Have you ever been to Georgia?",
      "When did you go there?",
      "Will you go back one day?",
      "What might you do next summer?",
      "Shall we go skiing in winter?",
    ]),
    tip("Look at the points for all the tasks together. Find the most difficult part (will or might? Present Perfect or Past Simple? the 3rd forms?) and go back to it in the next lesson."),
  ]),

  section("Project: My bucket list", [
    box(
      "Your project 📝",
      "Make your bucket list — a poster, a slide, a video or a page in your notebook:\n\n1. **Done! ✅** 3 experiences you've already had: *I've been to… I've tried…* + one detail for each: *I went there in…*\n2. **Next! 🎯** 5–10 things you want to do in your life: places, adventures, skills\n3. **Number one ⭐** — the most important dream: why? When will you do it? What might be difficult?\n\nAdd photos or drawings! Start now with your teacher — finish it at home.",
    ),
    text("Plan your project. Talk to your teacher.", "- What's number one on your list? Why? ⭐\n- Is there anything on your list that scares you? 😬\n- Poster, slide, video or notebook? 🎨📱"),
  ]),

  homework(
    [
      write("Project: My bucket list. Write 3 things you've done (with details) and 5–10 things you want to do. Explain your number one dream. Use the Present Perfect, the Past Simple, will and might. (80+ words)", 80, {
        read: "*Example:* ✅ Done: I've been to Turkey — I went to Antalya with my family in 2023. I've tried paragliding! I've won a chess competition at school. 🏆 🎯 Next: see the northern lights, learn to surf, visit Japan, run a half marathon, learn Korean… ⭐ Number one: Japan. I love Japanese anime and food. I'll probably go when I'm 25. It might be expensive, so I'm going to start saving now!",
      }),
      record("Project video: present your bucket list (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Dana came back from the Desert Night yesterday.", true],
          ["She has slept in a tent before.", false],
          ["She saw a lot of stars.", true],
          ["She didn't like the camel.", false],
          ["She might give a Desert Night to her dad.", true],
        ],
        { read: "💬 **Dana:** I came back from the Desert Night yesterday — my friends gave it to me for my birthday! 🐪 I've never slept in a tent before, and I was a bit scared. But the sky… I've never seen so many stars! ⭐ The camel was so cute — I called him Bob. 😄 My dad's birthday is next month. I might give him a Desert Night too!" },
      ),
      quiz("Choose.", [
        { q: "Who gave Dana the experience?", options: ["*her friends", "her dad", "her boss"] },
        { q: "What was the best part for Dana?", options: ["*the stars", "the food", "the fire"] },
        { q: "What did Dana call the camel?", options: ["*Bob", "Max", "Leo"] },
        { q: "When is her dad's birthday?", options: ["*next month", "next week", "next year"] },
      ]),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps(
        "Review: complete.",
        "1. I [have never been/'ve never been] to Japan. (never / be)\n2. We [went] to Italy last year. (go)\n3. I think robots [will do] more jobs. (do)\n4. It's cloudy — it [might rain]. (rain — maybe)\n5. [Have you ever tried] sushi? (you / ever / try)\n6. Don't worry, I [will help/'ll help] you! (help — an offer)",
      ),
      choose(
        "Choose.",
        "1. She's [*been/gone] to Paris — she's there now.\n2. When [*did you see/have you seen] the film?\n3. I [*'ll/'m going to] answer it! (the phone is ringing)\n4. Have you ever [*flown/flew] in a helicopter?\n5. We [*might/will definitely] go — we're not sure.\n6. He [*'s won/won] three prizes in his life.",
      ),
    ],
    "Homework: Review",
  ),
]);
