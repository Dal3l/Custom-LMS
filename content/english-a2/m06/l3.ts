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
  video,
  words,
  write,
} from "../../kit";

// 6.3 Extreme sports — skills lesson: reading (the jump from the edge of space, real facts), the module's only video in class, a long listening (a podcast about risk, ~2.5 min), writing about an exciting experience; review of module 6.
export default lesson("a2-6.3", "Extreme sports", () => [
  section("Warm-up: The risk-o-meter", [
    box("Today you will…", "- read about a jump from the edge of space 🚀🪂\n- listen to people who love — and hate — risk\n- talk and write about the most exciting thing you've done"),
    order(
      "Put these activities in order: from the safest to the most dangerous — in YOUR opinion! 🌡️",
      ["swimming in a pool\nriding a bike in the city\nskiing\nrock climbing\nskydiving"],
      "lines",
    ),
    tip("There's a “right” order in the checker, but it's only one opinion — what matters is the discussion. Ask: *Why is skiing more dangerous than cycling for you? Which one have you tried?*"),
    text(
      "Talk to your teacher.",
      "- What's the most dangerous thing you've ever done? Would you do it again? 😬\n- Do you like roller coasters? Horror films? Fast cars? Why do people enjoy being scared? 🎢\n- What does your family say when you want to try something risky?",
    ),
  ]),

  section("Vocabulary: Risk and courage", [
    words("Risk and courage", [
      ["dangerous — safe", "⚠️ — ✅"],
      ["risky", "🎲 it might go wrong"],
      ["brave", "🦁 not afraid to do difficult things"],
      ["terrified", "😱 very, very scared"],
      ["an adrenaline junkie", "⚡🤪 a person who loves danger and excitement"],
      ["a helmet", "⛑️"],
      ["safety equipment", "🦺⛑️🪢 things that protect you"],
      ["get injured — an injury", "🤕 get hurt"],
      ["break a record", "🏆📈 do better than anyone before"],
      ["survive", "💪 stay alive after something dangerous"],
      ["a professional — an amateur", "🏅 does it as a job — 🙂 does it for fun"],
      ["train (for)", "🏋️ prepare your body", "He trained for five years."],
    ]),
    match("Match.", [
      ["break", "a record"],
      ["wear", "a helmet"],
      ["get", "injured"],
      ["safety", "equipment"],
      ["an adrenaline", "junkie"],
      ["train", "for a competition"],
    ]),
    sort("Positive or negative? Sort. 😊😟", {
      "😊 positive": ["brave", "safe", "survive", "break a record"],
      "😟 negative": ["terrified", "dangerous", "get injured", "an injury"],
    }),
    gaps(
      "Complete.",
      "1. Always wear a [helmet] when you ride a bike! ⛑️\n2. She isn't afraid of anything. She's very [brave]. 🦁\n3. I was [terrified] on the roller coaster! 😱\n4. He loves danger — he's an adrenaline [junkie]. ⚡\n5. She fell and got [injured] on the ski slope. 🤕\n6. The climbers were lucky to [survive] the storm. 💪\n7. He [trained] for two years before the race. 🏋️\n8. She broke the world [record] for the fastest swim. 🏆",
    ),
  ]),

  section("Reading: A jump from the edge of space", [
    tip("Read in parts. After each part ask: *Would you do it? How did he feel, do you think?* At the end — vote: brave or crazy? 🗳️"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Felix Baumgartner jumped in 2012.", true],
        ["He jumped from a plane.", false],
        ["He jumped from about 39 km above the Earth.", true],
        ["He fell faster than the speed of sound.", true],
        ["Nobody watched the jump live.", false],
        ["Nobody has ever jumped from higher than Felix.", false],
      ],
      {
        read: [
          "## 🚀🪂 The jump from the edge of space",
          "On 14 October 2012, an Austrian skydiver, **Felix Baumgartner**, did something nobody had done before. He went up in a small capsule under a giant balloon from Roswell, in the USA. After more than two hours, he was about **39 kilometers** above the Earth — four times higher than planes fly. Below him, he could see the curve of our planet. 🌍",
          "Then he stepped out — and jumped. 😱",
          "He fell for more than four minutes before he opened his parachute. At one moment, he was falling at **1,357 km/h** — faster than the speed of sound! He was the first person to break the sound barrier without a plane or a car. 💥",
          "Was it dangerous? Very. Felix wore a special suit, like an astronaut's. Without it, he couldn't survive — there's almost no air up there. He and his team trained for years.",
          "More than eight million people watched the jump live on YouTube. When he landed in the desert, he fell to his knees and lifted his hands. 🙌",
          "Has anyone jumped from higher? Yes — two years later, in 2014, an American engineer, Alan Eustace, jumped from about 41 km. But people remember Felix's jump best.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did Felix go up?", options: ["*in a capsule under a giant balloon", "in a rocket", "in a plane"] },
      { q: "How long did he fall before he opened his parachute?", options: ["*more than four minutes", "about 30 seconds", "two hours"] },
      { q: "Why did he wear a special suit?", options: ["*There's almost no air up there.", "It was very hot.", "It looked cool on TV."] },
      { q: "What did he do when he landed?", options: ["*He fell to his knees and lifted his hands.", "He jumped again.", "He called his mom."] },
    ]),
  ]),

  section("Video: I jumped from space", [
    video("Watch Felix's jump (3.5 minutes). How do you feel when you watch it? 😱", "Hz2F_S3Tl0Y"),
    text("Talk to your teacher.", "- What was the scariest moment in the video?\n- Would you go up in the capsule — just to look, not to jump? 🌍\n- Brave or crazy? Why?"),
  ]),

  section("Listening: Risky or crazy?", [
    tip("A long listening — about 2–3 minutes. First time: *Who loves risk and who doesn't?* Second time: the details."),
    ...listening(
      "Listen to a podcast. Two guests talk about risk: a mountain guide and a mom.",
      "**Host:** Welcome back to “Big Questions”. Today's question is: why do people do dangerous things? With me are Daniyar, a mountain guide from Almaty, and Kate, a mother of two from London. Daniyar, let's start with you. What's the most dangerous thing you've ever done?\n\n**Daniyar:** Hmm, there are a few things! 😄 I've climbed some very high mountains — the highest was Khan Tengri, it's almost seven thousand meters. Once, a storm started when we were near the top, and we waited in our tent for two days. I was terrified.\n\n**Host:** Two days in a tent! Why do you do it?\n\n**Daniyar:** Because the feeling at the top is incredible. You see the whole world under your feet. And I've learned a lot about myself — I'm calmer now, in the mountains and in normal life.\n\n**Host:** Kate, you don't agree?\n\n**Kate:** Well, I understand Daniyar, but I'm not an adrenaline junkie at all. I've never been skiing, I've never been on a roller coaster, and I don't even like fast cars! 😅 For me, a good day is a book and a cup of tea.\n\n**Host:** But your son is a climber, isn't he?\n\n**Kate:** Yes, he's nineteen, and he's just started rock climbing. I'm proud of him, but I'm scared every time he goes. I always ask him: “Have you checked your equipment? Are you wearing your helmet?”\n\n**Daniyar:** That's a good question to ask! Most accidents happen because people are tired or they don't check their equipment. Good climbers aren't crazy — they're careful. They train a lot and they know when to stop and go back.\n\n**Kate:** That makes me feel a little better. Maybe one day I'll try a climbing wall — inside, with a teacher! 🧗\n\n**Host:** Great! Daniyar, would you take Kate?\n\n**Daniyar:** Of course! First lesson free! 😄\n\n**Host:** Thank you both. And listeners — what's the bravest thing you've ever done? Send us a message!",
    ),
    quiz("Listen and choose.", [
      { q: "What's Daniyar's job?", options: ["*a mountain guide", "a skydiver", "a climbing teacher in London"] },
      { q: "How long did Daniyar wait in the tent?", options: ["*two days", "two hours", "two weeks"] },
      { q: "What's a good day for Kate?", options: ["*a book and a cup of tea", "skiing with friends", "a roller coaster"] },
      { q: "How old is Kate's son?", options: ["*nineteen", "twelve", "twenty-five"] },
      { q: "Why do most accidents happen, says Daniyar?", options: ["*People are tired or don't check their equipment.", "The mountains are too high.", "The weather is always bad."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Khan Tengri is almost 7,000 meters high.", true],
      ["Daniyar says the mountains made him calmer.", true],
      ["Kate has been skiing many times.", false],
      ["Kate's son has just started rock climbing.", true],
      ["Daniyar thinks good climbers are crazy.", false],
      ["Kate might try a climbing wall one day.", true],
    ]),
  ]),

  section("Review: Module 6", [
    choose(
      "Choose.",
      "1. Felix [*jumped/has jumped] in 2012.\n2. I've never [*been/went] skydiving.\n3. [*Have you ever/Did you ever] tried rock climbing?\n4. Daniyar [*has climbed/climbed] many high mountains in his life.\n5. When [*did you break/have you broken] your arm?\n6. She's [*gone/been] to the mountains — she'll be back on Sunday.\n7. We [*saw/'ve seen] the video yesterday.\n8. He has [*never/ever] been on a roller coaster.",
    ),
    gaps(
      "Present Perfect or Past Simple? Complete.",
      "1. I [have never tried/'ve never tried] bungee jumping. (never / try)\n2. Felix [landed] in the desert. (land)\n3. [Have you ever been] to the mountains? (you / ever / be)\n4. Kate's son [started] climbing last month. (start)\n5. She [has never been/'s never been] on a roller coaster. (never / be)\n6. When [did you see] the video? (you / see)\n7. They [have broken/'ve broken] three world records! (break)\n8. Alan Eustace [jumped] from 41 km in 2014. (jump)",
    ),
    drag(
      "Complete the story.",
      "Have you [ever] done something really scary? I [have]! Last summer I [went] paragliding in the mountains. At first I was [terrified]. But when we [flew] over the lake, I felt free! 🪂 I've [never] felt like that before. I want to do it again!",
      ["been", "go", "fly"],
    ),
  ]),

  section("Writing: My most exciting moment", [
    box(
      "✍️ A short story about an experience",
      "- **40+ words**\n- start with the Present Perfect: *I've done a lot of exciting things, but…*\n- tell the story in the Past Simple: *Last year I went… I was…*\n- feelings: *terrified, excited, proud, relieved*\n- an ending: *Would I do it again? Definitely! / Never!*",
    ),
    write(
      "Write about the most exciting (or scary) thing you've ever done. What was it? When and where did you do it? How did you feel? (40+ words)",
      40,
      {
        read: "*Example start:* I've never jumped from a plane, but I've done something scary too. Two years ago, I…",
      },
    ),
    tip("Check together: Present Perfect at the start? Past Simple for the story? At least 2 feelings? A clear ending? Read the best sentence aloud. 🌟"),
  ]),

  section("Let's talk: Risk — yes or no?", [
    text(
      "Talk to your teacher.",
      "- Are you more like Daniyar or like Kate? Why? 🏔️☕\n- Have you ever stopped doing something because it was too risky?\n- What's something “dangerous” that you do every day without thinking? (crossing the road, cooking…) 🚗🔪\n- Should parents let teenagers do extreme sports? From what age? 🤔",
    ),
    text(
      "Agree or disagree? Give reasons. 🗳️",
      "- “Extreme sports should be banned — they're too dangerous.”\n- “People who do extreme sports are selfish — they don't think about their families.”\n- “Everyone should try something scary at least once in their life.”\n- “Video games are as exciting as real adventures.”",
    ),
    tip("*If you have time:* the student interviews you as Felix Baumgartner: *How did you feel? Were you scared? What was the best moment?* Then change roles."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "very, very scared =", options: ["*terrified", "brave", "safe"] },
      { q: "a person who loves danger =", options: ["*an adrenaline junkie", "a professional", "an amateur"] },
      { q: "Felix ___ in 2012.", options: ["*jumped", "has jumped", "jumps"] },
      { q: "I've never ___ skydiving.", options: ["*been", "went", "go"] },
    ]),
    box("Word of the day: out of your comfort zone", "**out of your comfort zone** 🛋️➡️🧗 = doing something new and a little scary.\n\n*Speaking English with strangers takes me out of my comfort zone — but it's how I learn!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🦁 not afraid of difficult things: [brave]\n2. 😱 very, very scared: [terrified]\n3. ⛑️ you wear it on your head: a [helmet]\n4. 🤕 get hurt: get [injured]\n5. 💪 stay alive after danger: [survive]\n6. 🎲 it might go wrong: [risky]",
      ),
      trueFalse("From the lesson: true or false?", [
        ["Felix Baumgartner went up in a balloon capsule.", true],
        ["He jumped from about 10 km.", false],
        ["He broke the sound barrier.", true],
        ["Daniyar is a mountain guide.", true],
        ["Kate loves fast cars.", false],
      ]),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      choose(
        "Choose.",
        "1. Have you ever [*been/gone] to Khan Tengri?\n2. I [*started/'ve started] climbing in 2020.\n3. She's [*never/ever] tried surfing.\n4. They [*watched/'ve watched] the jump live in 2012.\n5. [*Has/Did] he ever broken a bone?\n6. We [*'ve been/went] to Almaty three times.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Reply to the podcast: “What's the bravest thing you've ever done?” Write a message to the show. (60+ words)", 60),
      record("Record your opinion: Are extreme sports brave or crazy? Would you try one? Which one? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
