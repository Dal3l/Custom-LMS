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
  order,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  write,
} from "../../kit";

// 2.4 Revision 1–2 — tasks with points in the A2 Key style (vocabulary, grammar, reading, listening, writing, speaking) + the project "My story".
export default lesson("a2-2.4", "Revision 1–2", () => [
  section("Warm-up: Past tense ping-pong", [
    box(
      "Today you will…",
      "- review modules 1 and 2: *Past Simple, irregular verbs, Who…?, Past Continuous, when / while*\n- do tasks like in the **A2 Key** exam — and get points! ⭐\n- start your project: **My story** 🎬",
    ),
    tip("The tasks check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Game: Past tense ping-pong 🏓",
      "Your teacher says a verb, you say the past — fast! Then change roles.\n\n*go → went · see → saw · fly → flew · buy → bought · think → thought · fall → fell · wake → woke · lose → lost · break → broke · become → became*\n\nWho makes a mistake loses a point! 🏆",
    ),
    matchPictures("Remember? Match the photos.", [
      ["photos/gagarin.jpg", "the first person in space"],
      ["photos/hotel-reception.jpg", "check in"],
      ["photos/park.jpg", "people were sunbathing"],
      ["photos/legend-alligator.jpg", "found in a sewer in 1935"],
      ["photos/first-flight.jpg", "the first airplane flight"],
    ]),
  ]),

  section("Vocabulary", [
    match("Match.", [
      ["have", "a lie-in"],
      ["miss", "a flight"],
      ["catch up", "with friends"],
      ["knock", "on the door"],
      ["go", "viral"],
      ["binge-watch", "a series"],
      ["fall", "asleep"],
    ]),
    sort("Sort the words.", {
      "😊 Feelings": ["embarrassed", "relieved", "scared", "confused"],
      "📖 Story words": ["suddenly", "at first", "finally", "in the end"],
      "🏨 Hotel": ["reservation", "key card", "check out", "room service"],
    }),
    gaps(
      "Write the word.",
      "1. sleep late on Sunday: have a [lie-in] 😴\n2. a fake story or photo: a [hoax] 🎭\n3. arrive too late for your train: [miss] it 🚆\n4. 🇺🇸 elevator = 🇬🇧 [lift]\n5. understand suddenly: [realize] 💡\n6. a person who invents things: an [inventor] 💡\n7. 🇬🇧 do the washing-up = 🇺🇸 do the [dishes] 🍽️\n8. not know where you are: get [lost] 🗺️",
    ),
  ]),

  section("Grammar", [
    choose(
      "Past Simple: choose.",
      "1. [*Did/Were] you go out last night?\n2. I [*didn't see/didn't saw] the match.\n3. Who [*invented/did invent] the telephone?\n4. What did she [*buy/bought]?\n5. We [*didn't have/didn't had] breakfast.\n6. Where [*did you go/you went] on holiday?\n7. Who [*did you meet/met you] at the café?\n8. The Wright brothers [*built/builded] the first plane.",
    ),
    gaps("Write the past.", "1. fly → [flew]\n2. think → [thought]\n3. fall → [fell]\n4. build → [built]\n5. lose → [lost]\n6. become → [became]"),
    choose(
      "Past Continuous or Past Simple? Choose.",
      "1. I [*was having/had] a shower when the power went off.\n2. When the teacher came in, we [*stopped/were stopping] talking.\n3. [*While/When] I was waiting for the bus, I met an old friend.\n4. What [*were you doing/did you doing] at 9 p.m.?\n5. It [*was snowing/snowed] when we woke up.\n6. They [*weren't/didn't] listening to the teacher.\n7. When I heard the news, I [*called/was calling] my mom.\n8. My dad [*was cooking/cooked] while we were cleaning.",
    ),
    drag(
      "Complete the story.",
      "Last Saturday I [was] walking in the park [when] I [saw] a famous singer! She [was] sitting on a bench. [While] I was taking a photo, she [smiled] at me! 📸",
      ["did", "during", "see"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["I didn't went to school yesterday.", false],
      ["While I was cooking, my brother was playing games.", true],
      ["Who did call you last night?", false],
      ["We were sleeping when the alarm rang.", true],
      ["She was watch TV at 8.", false],
      ["What did you buy?", true],
    ]),
    quiz("Choose the right question for the answer.", [
      { q: "— Bell invented it.", options: ["*Who invented the telephone?", "What did Bell invent?", "Who did invent the telephone?"] },
      { q: "— I was sleeping.", options: ["*What were you doing at 7 a.m.?", "What did you do at 7 a.m.?", "Were you sleep at 7 a.m.?"] },
      { q: "— Gagarin did.", options: ["*Who flew into space first?", "Who did fly into space first?", "Where did Gagarin fly?"] },
      { q: "— To Turkey.", options: ["*Where did you go on holiday?", "Who went to Turkey?", "Where you went on holiday?"] },
    ]),
  ]),

  section("Reading: Notices and messages", [
    tip("A2 Key, Reading Part 1: short texts — notices, messages, emails. Read the text and choose what it says."),
    quiz("Read the notices and messages. What do they say? Choose.", [
      { q: "🏨 “Breakfast is served from 7 to 10 a.m. Please show your key card.” — Guests…", options: ["*need their key card for breakfast", "can have breakfast at 11", "must pay for breakfast"] },
      { q: "💬 “Sorry, I was driving when you called. Call me back after 6? — Max” — Max…", options: ["*couldn't answer the phone because he was driving", "is driving now", "wants to call at 6 a.m."] },
      { q: "✈️ “Flight KC 902 to Almaty is delayed. New departure time: 18:40.” — The flight…", options: ["*will leave later than planned", "is cancelled", "leaves at 8:40"] },
      { q: "📧 “Did you find my umbrella? I think I left it in your car on Saturday. — Ana” — Ana…", options: ["*thinks her umbrella is in her friend's car", "found her umbrella", "lost her car"] },
    ]),
    quiz(
      "Read the text. Choose.",
      [
        { q: "When did Marta start the trip?", options: ["*at 5 a.m.", "at 5 p.m.", "at midnight"] },
        { q: "What were Marta and her brother doing when they saw the bear?", options: ["*having breakfast by the lake", "climbing the mountain", "sleeping in the tent"] },
        { q: "What did they do?", options: ["*They stayed quiet and didn't move.", "They ran to the car.", "They shouted at the bear."] },
        { q: "How did Marta feel in the end?", options: ["*happy and relieved", "angry", "bored"] },
      ],
      {
        read: [
          "## 🐻 A morning I'll never forget",
          "Last August, my brother and I went hiking in the mountains. We left home at 5 a.m. because we wanted to see the sunrise from the top.",
          "We walked for three hours. At about 8, we stopped near a beautiful lake. We were having breakfast and talking about the trip when my brother suddenly stopped. “Don't move,” he said quietly. A bear was walking along the other side of the lake! 😨",
          "We stayed very quiet. We didn't run — that's the rule with bears. The bear looked at us, drank some water and slowly walked into the forest.",
          "A few minutes later, we started breathing again! We didn't go to the top that day — we went home. But I was happy and very relieved. And now I have the best story for every party! 😄 — **Marta**",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Listening", [
    tip("A2 Key, Listening Part 1 style: three short conversations. Read each one once at normal speed, then again."),
    ...listening(
      "Listen to three short conversations. Choose the right answer.",
      "**1.**\n**Woman:** How was your holiday?\n**Man:** Great! We went to Turkey. We wanted to go to Italy, but the tickets were too expensive.\n\n**2.**\n**Boy:** Why were you late for school today?\n**Girl:** I was waiting for the bus for 30 minutes! In the end, my dad took me in his car.\n\n**3.**\n**Man:** What were you doing at the weekend? I called you twice!\n**Woman:** Sorry! I was at my grandma's. We were making a cake for her birthday, and my phone was in my bag.",
    ),
    quiz("Listen and choose.", [
      { q: "1. Where did the man go on holiday?", options: ["*Turkey", "Italy", "Spain"] },
      { q: "2. How did the girl get to school?", options: ["*by car", "by bus", "on foot"] },
      { q: "3. Why didn't the woman answer the phone?", options: ["*She was making a cake.", "She was sleeping.", "Her phone was broken."] },
      { q: "1. Why didn't the man go to Italy?", options: ["*The tickets were too expensive.", "The weather was bad.", "He didn't have a passport."] },
      { q: "2. How long did the girl wait for the bus?", options: ["*30 minutes", "10 minutes", "an hour"] },
    ]),
  ]),

  section("Writing", [
    box(
      "✍️ A2 Key, Writing Part 6: a short message",
      "- **25+ words**\n- answer **all 3 questions** in the task\n- start: *Hi …!* — end: *See you! / Love, …*",
    ),
    write(
      "Your English friend Sam wrote: “Hi! What did you do last weekend? Where did you go? What was the best part?” Write a message to Sam. (25+ words)",
      25,
    ),
    tip("Give points like the exam: answered all 3 questions? 25+ words? Past Simple correct? 1 point for each ✅."),
  ]),

  section("Speaking", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Your last holiday or weekend: *Where did you go? What did you do?*\n2. A time something went wrong: *What were you doing when…?*\n3. A famous person from history: *Who was he / she? What did he / she do?*",
    ),
    order("Make questions.", [
      "Where did you go on your last holiday?",
      "What were you doing when I called?",
      "Who sent the first text message?",
      "Did you have a good weekend?",
      "Were you sleeping at midnight?",
    ]),
    tip("Look at the points for all the tasks together. Find the most difficult part (irregular verbs? was / were + -ing? when / while?) and go back to it in the next lesson."),
  ]),

  section("Project: My story", [
    box(
      "Your project 🎬",
      "Tell a true story from your life — funny, scary, lucky or strange.\n\n1. **Beginning:** when and where was it? What were you doing? *It was a cold evening. I was…*\n2. **Middle:** what happened? *Suddenly… When… While…*\n3. **End:** how did it end? How did you feel? *In the end… I was so relieved!*\n\nWrite it as a story (80+ words) **or** record a 1–2 minute video, like a “storytime” vlog. 📱",
    ),
    video("Tips: how to tell a story in English (Bob the Canadian).", "NH2GfNTfqsE"),
    text("Plan your project. Talk to your teacher.", "- Which story will you tell? 🤔\n- Story or video? ✍️🎥\n- What's the title? Make it interesting!"),
  ]),

  homework(
    [
      write("Project: My story. Write a true story from your life: beginning, middle, end. Use the Past Simple, the Past Continuous, when / while and story words. (80+ words)", 80, {
        read: "*Example:* **The night of the storm.** It was a hot evening last July. My family was sitting in the garden and my dad was cooking shashlik. Suddenly, the wind started and it began to rain. While we were running into the house, my little brother dropped the plate with all the meat! At first, nobody said anything. Then my mom started laughing, and we all laughed too. In the end, we ordered pizza and played board games all night. It was the best evening of the summer!",
      }),
      record("Project video: tell your story like a “storytime” vlog (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Lena was at the cinema when Tom called.", true],
          ["She saw a comedy.", false],
          ["Lena wants to meet on Sunday.", true],
          ["Lena slept well after the film.", false],
          ["Lena wants to go to the park.", true],
        ],
        { read: "💬 **Lena:** Hi Tom! Sorry I didn't answer — I was at the cinema when you called. We saw the new horror film. I didn't sleep all night! 😱 Do you want to go to the park on Sunday? We can catch up. 😊" },
      ),
      quiz("Choose.", [
        { q: "When Tom called, Lena…", options: ["*was watching a film", "watched a film", "was watch a film"] },
        { q: "The film was…", options: ["*scary", "funny", "boring"] },
        { q: "Why didn't Lena answer the phone?", options: ["*She was at the cinema.", "She was sleeping.", "Her phone was broken."] },
        { q: "What do they want to do on Sunday?", options: ["*catch up in the park", "go to the cinema", "watch a horror film"] },
      ]),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps("Review: complete.", "1. [Did] you see the news? — No, I [didn't].\n2. I [was sleeping] when the alarm rang. (sleep)\n3. Who [made] the first phone call? (make)\n4. While we [were walking], it started to snow. (walk)\n5. We [didn't go/did not go] out last night. (not go)\n6. When I [saw] the spider, I screamed. (see)"),
      choose("Choose.", "1. Gagarin [*flew/flied] into space in 1961.\n2. She [*was reading/read] when the lights went off.\n3. What [*happened/did happen] in 1969?\n4. I [*lost/losed] my keys yesterday.\n5. [*Were/Did] you working at 6?\n6. [*While/During] I was cooking, the phone rang."),
    ],
    "Homework: Review",
  ),
]);
