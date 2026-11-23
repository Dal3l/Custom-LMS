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

// 7.2 How long…? — G: Present Perfect with for / since; How long have you…? V: friendship and time. Say it right: How long have you… (weak have). S: talk about your friends and your life. Main format: a guessing game + reading (three friendships) + a long listening (a podcast, ~2.5 min). No video in class.
export default lesson("a2-7.2", "How long…?", () => [
  section("Warm-up: Guess how long", [
    box("Today you will…", "- say how long: *I've known her for ten years. I've lived here since 2019.* ⏳\n- ask *How long have you…?*\n- talk about your friends and your life 👫"),
    text(
      "Game: Guess how long! 🤔",
      "Your teacher says 5 facts — guess the time!\n\n- I've had my phone for… (1 year? 5 years?) 📱\n- I've lived in my flat / house since… 🏠\n- I've known my best friend for… 👯\n- I've taught English since… 📚\n- I've had my favorite piece of clothes for… 👕\n\nThen your teacher guesses about you!",
    ),
    text(
      "Talk to your teacher.",
      "- Who's your oldest friend? How did you meet? 👫\n- Do you still have friends from school? Do you see them often?\n- Is it easy for you to make new friends as an adult? Why / why not?",
    ),
    tip("Give real answers about yourself — the student will be curious. When the student guesses, help them say it: *You've had it for three years!* — don't explain the grammar yet."),
  ]),

  section("Vocabulary: Friends and time", [
    words("Friendship", [
      ["a childhood friend", "👧👦 a friend from when you were a child"],
      ["get to know (someone)", "🤝 start to know someone better", "We got to know each other at university."],
      ["have a lot in common", "🎯🎯 like the same things"],
      ["get on (well) with", "😊 have a good relationship", "I get on well with my sister."],
      ["keep in touch — lose touch", "📞✅ continue to talk — ❌ stop talking"],
      ["argue — have an argument", "😤🗣️"],
      ["fall out (with)", "💢 stop being friends after an argument"],
      ["make up", "🤝😊 become friends again after an argument"],
      ["trust", "🤝🔒 believe someone is honest", "I trust her with my secrets."],
      ["a classmate — a colleague", "🏫 — 💼"],
      ["for ages", "⏳ for a very long time", "I haven't seen him for ages!"],
      ["since I was a kid", "🧒➡️ from childhood until now"],
    ]),
    match("Match.", [
      ["keep in", "touch"],
      ["get on well", "with someone"],
      ["have a lot", "in common"],
      ["fall", "out"],
      ["make", "up"],
      ["get to", "know someone"],
    ]),
    sort("Good or bad for a friendship? Sort. 💚💔", {
      "💚 good": ["keep in touch", "trust each other", "have a lot in common", "make up after an argument"],
      "💔 bad": ["lose touch", "fall out", "argue all the time", "forget a birthday"],
    }),
    gaps(
      "Complete.",
      "1. We've been friends since we were five. She's my [childhood] friend. 👧\n2. We both love music and football — we have a lot in [common]. 🎯\n3. I get [on] well with my colleagues. 😊\n4. We moved to different cities, but we keep in [touch]. 📞\n5. After school, I lost [touch] with many classmates. 😕\n6. They had an argument and fell [out]. 💢\n7. The next day they said sorry and made [up]. 🤝\n8. I haven't seen my cousin for [ages]! ⏳",
    ),
  ]),

  section("Reading: Friends for life?", [
    tip("Three stories about friendship. After each one ask: *How long have they known each other? How did they meet? Is it a strong friendship?*"),
    trueFalse(
      "Read the stories. True or false?",
      [
        ["Aliya and Kate have known each other since they were six.", true],
        ["Aliya and Kate live in the same city now.", false],
        ["Tom and Jin have met in real life many times.", false],
        ["Tom and Jin have played the same game for three years.", true],
        ["Rosa and Ben have worked together for twenty years.", true],
        ["Rosa and Ben have never argued.", false],
      ],
      {
        read: [
          "## 👫 Friends for life?",
          "**🧒 Aliya & Kate — since they were six.** *We met on the first day of school, when Kate gave me her pink pencil. 🖍️ That was 22 years ago! Now I live in Almaty and Kate lives in London, but we've kept in touch. We've had a video call every Sunday for five years. Distance doesn't matter.* — Aliya",
          "**🎮 Tom & Jin — online friends.** *I've known Jin for three years, but I've never met him in real life! We've played the same online game since 2022. He lives in Seoul, I live in Toronto. We have a lot in common: the same music, the same jokes. Next summer we're finally going to meet!* — Tom",
          "**💼 Rosa & Ben — colleagues and best friends.** *We've worked in the same hospital for twenty years. We've had some big arguments — once we didn't talk for a month! 😤 But we always make up. I trust Ben more than anyone. He's been my best friend since our first night shift.* — Rosa",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did Aliya and Kate meet?", options: ["*Kate gave Aliya a pencil.", "at a birthday party", "online"] },
      { q: "How often do Aliya and Kate have a video call?", options: ["*every Sunday", "every day", "once a month"] },
      { q: "Where does Jin live?", options: ["*in Seoul", "in Toronto", "in London"] },
      { q: "Where do Rosa and Ben work?", options: ["*in a hospital", "in a school", "in an office"] },
    ]),
    text("Talk to your teacher.", "- Which friendship is the most interesting for you? Why?\n- Can online friends be real friends? 🎮\n- Is it possible to be best friends with a colleague? 💼"),
  ]),

  section("Grammar: for and since", [
    quiz("Notice the rule 🔍 Look: “We've worked in the same hospital for twenty years. He's been my best friend since our first night shift.” Which is true?", [
      { q: "Do Rosa and Ben still work there?", options: ["*Yes — it started in the past and continues now", "No, they stopped", "We don't know"] },
      { q: "for + …", options: ["*a period of time: for twenty years", "a start point: for 2005", "a day: for Monday"] },
      { q: "since + …", options: ["*a start point: since 2022, since our first shift", "a period: since three years", "the future: since next year"] },
    ]),
    table("for-since"),
    sort("for or since? Sort. ⏳📍", {
      "⏳ for": ["ten years", "a long time", "two weeks", "ages", "five minutes"],
      "📍 since": ["2019", "Monday", "I was a child", "last summer", "9 o'clock"],
    }),
    choose(
      "Choose.",
      "1. I've lived in Astana [*since/for] 2020.\n2. She's had her cat [*for/since] six years.\n3. We've known each other [*since/for] we were kids.\n4. How long [*have you had/do you have] this phone?\n5. They've been married [*for/since] ten years.\n6. I [*'ve worked/work] here for two years.\n7. He hasn't called me [*since/for] Friday.\n8. I've studied English [*for/since] a long time.",
    ),
    gaps(
      "Write questions and answers.",
      "1. How long / you / live / here? → How long [have you lived] here? — For 5 years.\n2. How long / she / have / her car? → How long [has she had] her car? — Since 2021.\n3. I / know / Dana / for / ten years → I've [known] Dana [for] ten years.\n4. we / be / friends / since / school → We've [been] friends [since] school.\n5. he / not / see / his brother / for months → He [hasn't seen/has not seen] his brother for months.\n6. How long / they / work / together? → How long [have they worked] together?",
    ),
    drag(
      "Complete the interview.",
      "A: How long have you [lived] in Almaty?\nB: I've lived here [since] 2018. Before that, I lived in Taraz.\nA: And how long have you [known] your best friend?\nB: [For] about fifteen years! We met at school.\nA: Have you [ever] had an argument?\nB: Of course! But we've [never] fallen out for long.\nA: How long [have] you had your dog?\nB: I've had him since he [was] a puppy — for three years now. 🐶",
      ["live", "during", "know", "is"],
    ),
    order("Make questions and sentences.", [
      "How long have you known your best friend?",
      "I've lived here since 2015.",
      "We've been friends for ten years.",
      "How long have you had your phone?",
      "She hasn't seen him since Monday.",
    ]),
  ]),

  section("Say it right: How long have you…?", [
    box(
      "🗣️ Say it right",
      "In fast speech, **have** in questions is weak: **/əv/**\n\n*How long have you lived here?* → “How long **əv** you lived here?”\n\nLink the words: *How long_əv_you…* — it sounds almost like one word!\n\nIn short answers, **have** is strong: *Have you met her? — Yes, I **have** /hæv/.*",
    ),
    quiz("Weak /əv/ or strong /hæv/? Choose.", [
      { q: "How long HAVE you known her?", options: ["*weak /əv/", "strong /hæv/"] },
      { q: "Have you seen it? — Yes, I HAVE.", options: ["*strong /hæv/", "weak /əv/"] },
      { q: "Where HAVE you been?", options: ["*weak /əv/", "strong /hæv/"] },
      { q: "We've lived here for years. — Have you? Yes, we HAVE.", options: ["*strong /hæv/", "weak /əv/"] },
    ]),
    tip("Drill fast questions with weak *have*: *How long əv you had your phone? … lived here? … known your teacher?* The student answers and asks you back."),
  ]),

  section("Listening: Old friends", [
    tip("A long listening — about 2–3 minutes. First listen: *How long have they been friends? How did they meet?* Second listen: the details."),
    ...listening(
      "Listen to a podcast about friendship. Two old friends tell their story.",
      "**Host:** Welcome to “People and Stories”. Today I'm talking to Daniyar and Arman. You two have been best friends for… how long?\n\n**Daniyar:** For twenty-five years! Since we were seven.\n\n**Host:** Twenty-five years! How did you meet?\n\n**Arman:** It was the first week of school. I was the new kid — my family moved here from Shymkent that summer. Nobody talked to me. Then Daniyar came and said, “Do you want to play football?” That was it! ⚽\n\n**Daniyar:** And he was terrible at football! 😄 But he was funny, so I kept him.\n\n**Host:** Have you ever lived in different cities?\n\n**Arman:** Yes. After school, I studied in Moscow for four years. We didn't have smartphones then, so we wrote emails — long ones! And we've talked on the phone every Sunday since then.\n\n**Host:** Every Sunday? For more than ten years?\n\n**Daniyar:** Yes. Even when Arman lived in Canada for two years. Different time zones — I called him at six in the morning! ☎️\n\n**Host:** Have you ever had a big argument?\n\n**Arman:** Once. Daniyar forgot my wedding! 😱\n\n**Daniyar:** I didn't forget! My flight was canceled! But… yes, Arman didn't talk to me for a week.\n\n**Arman:** Then he came to my house with a cake and a very long apology. We made up, of course.\n\n**Host:** What's the secret of a long friendship?\n\n**Daniyar:** Keep in touch — even when you're busy. A short message is enough.\n\n**Arman:** And forgive. Nobody is perfect. Especially Daniyar! 😄\n\n**Host:** Thank you both!",
    ),
    quiz("Listen and choose.", [
      { q: "How long have Daniyar and Arman been friends?", options: ["*for twenty-five years", "since last year", "for seven years"] },
      { q: "Where did Arman's family move from?", options: ["*Shymkent", "Moscow", "Canada"] },
      { q: "How did they keep in touch when Arman studied in Moscow?", options: ["*They wrote long emails.", "They had video calls every day.", "They didn't keep in touch."] },
      { q: "Why did Daniyar miss Arman's wedding?", options: ["*His flight was canceled.", "He forgot.", "He was sick."] },
      { q: "What's Arman's secret of a long friendship?", options: ["*Forgive.", "Play football together.", "Live in the same city."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["They met in the first week of school.", true],
      ["Arman was very good at football.", false],
      ["They have talked on the phone every Sunday for more than ten years.", true],
      ["Arman lived in Canada for four years.", false],
      ["Arman didn't talk to Daniyar for a month after the wedding.", false],
      ["Daniyar came to apologize with a cake.", true],
    ]),
  ]),

  section("Let's talk: My people", [
    text(
      "Talk about your friends 👫",
      "Think of 2–3 important people in your life (a friend, a colleague, a cousin…). Your teacher asks:\n\n- How long have you known them? How did you meet?\n- What do you have in common? 🎯\n- How often do you see each other or talk?\n- Have you ever had an argument? What about? How did you make up? 🤝\n- What's the best thing you've done together?",
    ),
    text(
      "Talk to your teacher.",
      "- How long have you lived in your city? Do you want to stay? 🏙️\n- How long have you had your favorite hobby? How did you start? 🎸\n- Have you ever lost touch with a good friend? Why? Would you like to find them again?\n- What's the secret of a long friendship for you? 🔑",
    ),
    tip("*If you have time:* “Life timeline” 📈 — the student draws a line from birth to now with 5 events (moved, started school, met a best friend, got a pet, started English…). You ask *How long have you…? When did you…?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I've lived here ___ 2015.", options: ["*since", "for", "from"] },
      { q: "We've been friends ___ ten years.", options: ["*for", "since", "during"] },
      { q: "How long ___ you known her?", options: ["*have", "do", "are"] },
      { q: "become friends again after an argument =", options: ["*make up", "fall out", "lose touch"] },
    ]),
    box("Word of the day: BFF", "**BFF** 💕 = **B**est **F**riends **F**orever.\n\n*Aliya and Kate have been BFFs since they were six!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. We talk every week — we keep in [touch]. 📞\n2. They had a big argument and fell [out]. 💢\n3. The next day they made [up]. 🤝\n4. I get [on] well with my brother. 😊\n5. We like the same things — we have a lot in [common]. 🎯\n6. I haven't seen her for [ages]! ⏳",
      ),
      sort("for or since? Sort.", {
        "for": ["three days", "a month", "twenty years", "a long time"],
        "since": ["Tuesday", "2010", "my birthday", "I was born"],
      }),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: since or for? What's the difference?", "WX8-MPuv5gs"),
      choose(
        "Choose.",
        "1. I've had this bag [*for/since] two years.\n2. She's lived in Paris [*since/for] 2018.\n3. How long [*have you known/do you know] Leo?\n4. We haven't eaten [*since/for] breakfast!\n5. They've been together [*for/since] ages.\n6. He [*'s worked/works] in the bank since May.",
      ),
      gaps(
        "Complete with the Present Perfect and for or since.",
        "1. I [have known/'ve known] Mia [since] we were at school. (know)\n2. They [have lived/'ve lived] here [for] five years. (live)\n3. She [has had/'s had] her dog [since] 2020. (have)\n4. We [have been/'ve been] friends [for] a long time. (be)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about your best friend: How long have you known them? How did you meet? What do you have in common? Have you ever argued? (60+ words)", 60, {
        read: "*Example:* My best friend is Dana. I've known her since we were 12 — we met at a dance class. 💃 We've been best friends for almost ten years. We have a lot in common: we love K-dramas and spicy food. 🌶️ We've had some arguments — once she borrowed my favorite dress and lost it! 😤 But we made up the next day.",
      }),
      record("Record your answer: Tell your teacher about an old friend you've lost touch with or a friend you've kept in touch with for a long time. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
