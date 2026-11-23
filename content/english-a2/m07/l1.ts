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

// 7.1 What's new? — G: Present Perfect with just / already / yet. V: life events. Say it right: already, yet — stress and sounds. S: give and react to news. Main format: notifications game + reading (life-update posts) + listening (a catch-up call). No video in class.
export default lesson("a2-7.1", "What's new?", () => [
  section("Warm-up: Notifications", [
    box("Today you will…", "- share your news: *I've just… I've already… I haven't… yet* 📣\n- react to news: *Congratulations! Oh no! No way!*\n- give a “life update” 🔄"),
    text(
      "Game: What happened? 🔔",
      "Your phone shows these notifications. What happened, do you think? Guess the story!\n\n- 💍 **Arman** changed his status: *engaged*\n- 🚗 **Dana** posted a photo with a car and a big “L” sign\n- 🎓 **Mia** posted a photo in a black hat and gown\n- 🐶 **Leo** has a new profile picture… with a puppy\n- 📦 **Aigerim** checked in at: *new flat, 7th floor*\n- 💼 **Daniyar** changed his job title: *Senior Manager*",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best news you've had this month? 🎉\n- Who do you tell good news first? Why that person?\n- Do you share your news online, or do you keep it private? 🔒\n- How do you react when a friend tells you big news by text and not in person? 🤔",
    ),
    tip("Guessing the stories is the fun part — accept any answer. The student will say *Dana passed her driving test* (Past Simple) — perfect. Later today: *She's just passed it!*"),
  ]),

  section("Vocabulary: Life events", [
    words("Life events", [
      ["get engaged — get married", "💍 — 👰🤵"],
      ["have a baby", "👶"],
      ["move house — move to a new flat", "📦🏠"],
      ["start a new job — quit a job", "💼 — 🚪"],
      ["get a promotion", "📈 a better job in the same company"],
      ["graduate (from)", "🎓 finish university or school"],
      ["pass your driving test", "🚗✅"],
      ["get a pet", "🐶🐱"],
      ["break up (with)", "💔 stop a relationship"],
      ["get a haircut", "💇"],
      ["Congratulations!", "🎉 for good news"],
      ["Oh no! — No way!", "😢 bad news — 😲 surprising news"],
    ]),
    match("Match.", [
      ["get", "engaged"],
      ["have", "a baby"],
      ["move", "house"],
      ["get a", "promotion"],
      ["pass your", "driving test"],
      ["break", "up"],
    ]),
    sort("Good news or bad news? Sort. 🎉😢", {
      "🎉 good news": ["I've passed my driving test!", "We've got a puppy!", "I've got a promotion!", "My sister has had a baby!"],
      "😢 bad news": ["I've broken my phone.", "We've broken up.", "I've lost my job.", "My flight has been canceled."],
    }),
    gaps(
      "Complete.",
      "1. Arman and Zarina are going to get married! They got [engaged] last week. 💍\n2. My sister had a [baby] — a little girl! 👶\n3. We've moved [house] — come and see our new flat! 📦\n4. He's [graduated] from university! 🎓\n5. I've passed my driving [test]! 🚗\n6. She got a [promotion] — now she's the boss! 📈\n7. They broke [up] after three years. 💔\n8. — I've got a new job! — [Congratulations]! 🎉",
    ),
  ]),

  section("Reading: Life updates", [
    tip("Read the posts like a real social feed. After each one, the student reacts like a friend: *Congratulations! Oh no! No way!* Then ask: *What has happened? What hasn't happened yet?*"),
    trueFalse(
      "Read the posts. True or false?",
      [
        ["Dana has passed her driving test.", true],
        ["Dana has already bought a car.", false],
        ["Leo has got a puppy.", true],
        ["Leo has already chosen a name for the puppy.", false],
        ["Aigerim has moved to a new flat.", true],
        ["Aigerim has unpacked all her boxes.", false],
      ],
      {
        read: [
          "## 🔄 Life updates",
          "**dana.k** 🚗 *I've just passed my driving test!!! Third time lucky! 😅 I haven't bought a car yet — I'm saving money. But I've already borrowed my dad's car for the weekend. Mountains, here I come! ⛰️*",
          "**leo_m** 🐶 *Meet the newest member of our family! We've just got a puppy from the animal shelter. He's already eaten one of my sneakers 👟 and he hasn't slept at night yet. We haven't chosen a name yet — help me! Ideas in the comments!*",
          "**aigerim.b** 📦 *Big news: I've moved! My new flat is on the 7th floor and the view is amazing. 🌇 I've already painted the bedroom, but I haven't unpacked all my boxes yet — there are 23! 😩 Housewarming party next Saturday — you're all invited!*",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How many times did Dana take the driving test?", options: ["*three", "one", "two"] },
      { q: "Where did Leo get the puppy?", options: ["*from an animal shelter", "from a friend", "from a shop"] },
      { q: "What has the puppy already eaten?", options: ["*a sneaker", "a sandwich", "a book"] },
      { q: "What has Aigerim already done in the new flat?", options: ["*painted the bedroom", "unpacked all the boxes", "had a party"] },
    ]),
  ]),

  section("Grammar: just, already, yet", [
    quiz("Notice the rule 🔍 Look: “I've just passed my test! I've already borrowed my dad's car. I haven't bought a car yet.” Which is true?", [
      { q: "just means…", options: ["*a very short time ago", "a long time ago", "in the future"] },
      { q: "already means…", options: ["*it's done — maybe sooner than we expected", "it's not done", "every day"] },
      { q: "yet goes…", options: ["*at the end of questions and negatives", "before the 3rd form", "at the start of the sentence"] },
    ]),
    table("just-already-yet"),
    choose(
      "Choose.",
      "1. I've [*just/yet] seen Dana — she's in the kitchen.\n2. Have you finished your homework [*yet/already]?\n3. We haven't bought the tickets [*yet/already].\n4. She's [*already/yet] watched the whole series — in two days! 😱\n5. — Is Leo here? — Yes, he's [*just/yet] arrived.\n6. I haven't [*told/tell] my parents yet.\n7. Have they [*already/yet] left? It's only 8!\n8. He's [*just/yet] got a promotion. Let's celebrate!",
    ),
    gaps(
      "Write sentences with just, already or yet.",
      "1. I / just / finish / my project → I've [just finished] my project.\n2. she / already / eat / lunch → She's [already eaten] lunch.\n3. we / not / decide / yet → We [haven't decided/have not decided] [yet].\n4. you / call / the doctor / yet? → Have you [called] the doctor [yet]?\n5. they / just / get / married → They've [just got] married.\n6. he / already / read / the book → He's [already read] the book.",
    ),
    drag(
      "Complete the chat.",
      "A: Have you heard the news? Mia has [just] got engaged! 💍\nB: No way! Has she told her parents [yet]?\nA: Yes, she's [already] told them. They're so happy!\nB: Have they [chosen] a date for the wedding?\nA: Not [yet]. But she's already [found] the dress! 👗\nB: Ha! Typical Mia! I [haven't] bought a present yet…\nA: Me neither. There's no hurry — the wedding [hasn't] happened yet! 😄",
      ["still", "choose", "didn't"],
    ),
    order("Make sentences.", [
      "I've just got a new job.",
      "Have you finished yet?",
      "She hasn't called me yet.",
      "We've already seen this film.",
      "They've just moved to Almaty.",
    ]),
  ]),

  section("Say it right: already, yet", [
    box(
      "🗣️ Say it right",
      "**already** — the stress is in the middle: al-**READ**-y /ɔːlˈredi/\n\n**yet** /jet/ — like **yes**, not like **jet** ✈️ /dʒet/!\n\n**just** /dʒʌst/ — short and fast: *I've **just** arrived.*",
    ),
    quiz("Where's the stress? Choose.", [
      { q: "already", options: ["*al-READ-y", "AL-read-y", "al-read-Y"] },
      { q: "congratulations", options: ["*con-gra-tu-LA-tions", "CON-gra-tu-la-tions", "con-GRA-tu-la-tions"] },
      { q: "engaged", options: ["*en-GAGED", "EN-gaged"] },
      { q: "promotion", options: ["*pro-MO-tion", "PRO-mo-tion", "pro-mo-TION"] },
    ]),
    tip("Contrast *yet* /jet/ and *jet* /dʒet/ — the student says which one you say. Then react to news with a big stress: *con-gra-tu-LA-tions!* 🎉"),
  ]),

  section("Listening: Catching up", [
    ...listening(
      "Listen. Mia calls her friend Aigerim. They haven't spoken for a long time.",
      "**Aigerim:** Mia! Hi! I haven't heard from you for ages!\n\n**Mia:** I know, I'm sorry! So much has happened. Are you sitting down? 😄\n\n**Aigerim:** Yes… What's happened?\n\n**Mia:** First — I've just finished my exams. All of them! 🎓\n\n**Aigerim:** Congratulations! How were they?\n\n**Mia:** I don't know yet — I haven't got the results. But I think they went well. And second… Kenji and I have got engaged! 💍\n\n**Aigerim:** No way! When did he ask you?\n\n**Mia:** Last Friday, on the boat trip in Istanbul. He had the ring in his pocket the whole day!\n\n**Aigerim:** That's so romantic! Have you chosen a date yet?\n\n**Mia:** Not yet. But my mom has already made a list of 200 guests! 😱\n\n**Aigerim:** Ha! And what about a job? You wanted to work in a museum.\n\n**Mia:** I've already sent my CV to three museums, but nobody has answered yet. Fingers crossed! 🤞\n\n**Aigerim:** They'll love you. OK, now my news: I've moved to a new flat!\n\n**Mia:** Really? Send me photos!",
    ),
    quiz("Listen and choose.", [
      { q: "What has Mia just finished?", options: ["*her exams", "her job", "her wedding plans"] },
      { q: "Where did Kenji ask Mia to marry him?", options: ["*on a boat trip in Istanbul", "in a restaurant", "at home"] },
      { q: "How many guests are on her mom's list?", options: ["*200", "20", "100"] },
      { q: "Where does Mia want to work?", options: ["*in a museum", "in a school", "in a bank"] },
      { q: "What's Aigerim's news?", options: ["*She's moved to a new flat.", "She's got engaged.", "She's got a new job."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Mia has got her exam results.", false],
      ["Mia and Kenji got engaged last Friday.", true],
      ["They have chosen a date for the wedding.", false],
      ["Mia has sent her CV to three museums.", true],
      ["Two museums have already answered.", false],
    ]),
  ]),

  section("Let's talk: Life update", [
    text(
      "Your to-do list ✅",
      "Here's a list. Tell your teacher what you've **already** done this week, what you **haven't done yet** — and what you've **just** done!\n\n- answer all my messages 💬\n- clean my room 🧹\n- call my parents / grandparents 📞\n- do some sport 🏃\n- finish a book or a series 📺\n- buy a present for someone 🎁\n- do my English homework 📚😉\n\n*I've already called my mom. I haven't cleaned my room yet… 😅*",
    ),
    text(
      "Talk to your teacher.",
      "- What's new in your life? Tell your teacher 3 updates — big or small. 🔄\n- What's something you've wanted to do for a long time, but you haven't done yet?\n- What's the most surprising news a friend has told you? How did you react? 😲\n- Who in your life has had big news recently? What happened?",
    ),
    tip("*If you have time:* “Fake news” 📰 — the student tells 3 pieces of personal news (*I've just bought a horse!*); one is true. You react (*No way! Congratulations!*) and ask questions to find the true one."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Have you eaten ___?", options: ["*yet", "already", "just"] },
      { q: "I've ___ arrived — I'm at the door!", options: ["*just", "yet", "since"] },
      { q: "finish university =", options: ["*graduate", "get a promotion", "move house"] },
      { q: "React to good news:", options: ["*Congratulations!", "Oh no!", "Fingers crossed!"] },
    ]),
    box("Word of the day: fingers crossed", "**fingers crossed** 🤞 = I hope it will happen.\n\n*I've sent my CV to three companies. Fingers crossed!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. They got [engaged] — the wedding is in June! 💍\n2. He's [graduated] from university. 🎓\n3. We've moved [house]. 📦\n4. She's passed her driving [test]. 🚗\n5. They've broken [up]. 💔\n6. He got a [promotion] at work. 📈",
      ),
      match("Match the news and the reactions.", [
        ["I've passed my exam!", "Congratulations!"],
        ["I've lost my wallet.", "Oh no!"],
        ["I've just met Ed Sheeran!", "No way!"],
        ["I've got a job interview tomorrow.", "Good luck! Fingers crossed!"],
        ["My cat is sick.", "I'm so sorry. I hope she gets better."],
        ["We've had a baby!", "Congratulations! What's her name?"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: the Present Perfect with just, already and yet (BBC 6 Minute Grammar).", "8_nhtAwI0dA"),
      choose(
        "Choose.",
        "1. I've [*just/yet] finished — give me a minute!\n2. Have you seen the new film [*yet/already]?\n3. She hasn't replied [*yet/already].\n4. We've [*already/yet] booked the hotel.\n5. Has he called you [*yet/just]?\n6. They've [*just/yet] got married!",
      ),
      gaps(
        "Complete with just, already or yet.",
        "1. — Do you want lunch? — No, thanks. I've [already] eaten.\n2. Have you done your homework [yet]?\n3. I haven't seen the new Marvel film [yet].\n4. Look! It's [just] started to snow! ❄️\n5. She's only 20, but she's [already] started her own business.\n6. — Where's Leo? — He's [just] left. You missed him!",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write a “life update” post: 3 things you've done recently, 1 thing you've just done and 2 things you haven't done yet. Add one detail with the Past Simple. (60+ words)", 60, {
        read: "*Example:* Life update! 🔄 I've started a new course — Korean! I've already learned the alphabet. 🇰🇷 I've also joined a gym — I went three times last week. 💪 I've just finished a really good book. But I haven't cleaned my room yet 😅, and I haven't found a summer job yet. Fingers crossed! 🤞",
      }),
      record("Record a voice message to an old friend: tell them 3 pieces of news from your life. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
