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
  picture,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  words,
  write,
} from "../../kit";

// 7.3 Digital detox — skills lesson: reading a 7-day diary, a listening, writing a diary entry; talking about your own phone habits; review of module 7. No video in class.
export default lesson("a2-7.3", "Digital detox", () => [
  section("Warm-up: You and your phone", [
    box("Today you will…", "- read the diary of a week without social media 📵\n- talk honestly about your phone habits 😅\n- write a diary entry"),
    picture("Two ways to spend 30 minutes", ["photos/detox-metro.jpg", "photos/detox-reading.jpg"], "On the New York subway — and in a garden in the USA"),
    text(
      "Talk to your teacher. Be honest! 😄",
      "- Check your screen time now (if you can). Are you surprised? 📱\n- What's the first thing you do in the morning? And the last thing at night?\n- How long have you had social media? Has it changed your life — for better or worse?\n- When was the last time you spent a whole day without your phone? What happened?",
    ),
    tip("Check your own screen time together with the student — honesty from the teacher makes the student open up. Don't judge; the goal is to talk, not to make anyone feel guilty."),
  ]),

  section("Vocabulary: Digital habits", [
    words("Digital habits", [
      ["screen time", "📱⏳ time you spend looking at screens"],
      ["scroll (through)", "👆📱", "I scrolled through TikTok for two hours."],
      ["a notification", "🔔 a message on your screen from an app"],
      ["check your phone", "👀📱"],
      ["be addicted (to)", "🔗 you can't stop", "I think I'm addicted to my phone."],
      ["switch off — turn off", "📴"],
      ["delete an app — log out", "🗑️ — 🚪"],
      ["mute a chat", "🔇💬 stop the sound and notifications"],
      ["set a limit", "⏱️ decide the maximum time"],
      ["offline — online", "📵 — 📶"],
      ["a digital detox", "📵🌿 a break from phones and social media"],
      ["focus (on)", "🎯 think about one thing", "I can't focus on my work."],
    ]),
    match("Match.", [
      ["check", "your phone"],
      ["delete", "an app"],
      ["mute", "a chat"],
      ["set", "a limit"],
      ["switch", "off"],
      ["a digital", "detox"],
    ]),
    sort("Healthy or unhealthy phone habits? Sort. 💚📱", {
      "💚 healthy": ["mute group chats", "set a time limit", "no phone at dinner", "switch off notifications"],
      "😵 unhealthy": ["scroll in bed at 2 a.m.", "check your phone every 5 minutes", "phone at the dinner table", "200 notifications a day"],
    }),
    gaps(
      "Complete.",
      "1. My screen [time] was 6 hours yesterday! 😱\n2. I [scrolled] through Instagram instead of sleeping. 👆\n3. I get 100 [notifications] a day. 🔔\n4. He can't stop playing — he's [addicted] to the game. 🔗\n5. I've [muted] the family chat — too many memes! 🔇\n6. I've set a [limit]: 1 hour of TikTok a day. ⏱️\n7. I can't [focus] on my homework with my phone next to me. 🎯\n8. On holiday I'm [offline] — no Wi-Fi, no problem! 📵",
    ),
  ]),

  section("Reading: My week without social media", [
    tip("Read the diary day by day. After each day, ask: *How does Kate feel? What has changed?* At the end: *Would you do it?*"),
    trueFalse(
      "Read Kate's diary. True or false?",
      [
        ["Kate's screen time was about 5 hours a day.", true],
        ["On Monday she checked her phone 40 times.", true],
        ["On Wednesday she felt worse than on Monday.", false],
        ["She has read a whole book this week.", true],
        ["She has deleted social media forever.", false],
        ["She's going to keep her phone in another room at night.", true],
      ],
      {
        read: [
          "## 📓 My week without social media — by Kate",
          "**Sunday.** My screen time last week: 5 hours a day. 😱 That's 35 hours — more than a part-time job! So I've just deleted Instagram, TikTok and YouTube. 7 days. Let's go.",
          "**Monday.** Terrible. I checked my phone 40 times — for nothing! I didn't know what to do on the bus. I looked out of the window. 🚌",
          "**Tuesday.** I have FOMO. My friends are posting from a concert, and I can't see it! 😩",
          "**Wednesday.** Something has changed. I've slept better for two nights. I've already finished my work project — two days early!",
          "**Thursday.** I called my grandma (not a text — a real call!). We talked for an hour. ☎️",
          "**Friday.** I've read a whole book this week! 📚 I haven't read a book since summer.",
          "**Saturday.** Last day. I've felt calmer and I've had more time. Will I go back to social media? Yes — but with rules: 30 minutes a day, and my phone sleeps in the kitchen. 🌙",
        ].join("\n\n"),
      },
    ),
    order(
      "Put Kate's week in order.",
      ["She deleted three apps.\nShe checked her phone 40 times.\nShe had FOMO because of a concert.\nShe called her grandma.\nShe made rules for social media."],
      "lines",
    ),
    quiz("Read again. Choose.", [
      { q: "What did Kate do on the bus on Monday?", options: ["*She looked out of the window.", "She read a book.", "She called her grandma."] },
      { q: "Why did she have FOMO on Tuesday?", options: ["*Her friends were posting from a concert.", "She lost her phone.", "Her grandma didn't call."] },
      { q: "What has she finished early?", options: ["*a work project", "a book series", "a course"] },
      { q: "What's her new rule?", options: ["*30 minutes a day, and the phone sleeps in the kitchen", "no phone at all", "only YouTube"] },
    ]),
  ]),

  section("Listening: Leo tries it", [
    ...listening(
      "Listen. Leo tells Mia about his digital detox weekend.",
      "**Mia:** Leo! I sent you ten messages this weekend. Why didn't you answer?\n\n**Leo:** Sorry! I've done a digital detox. No phone from Friday evening to Monday morning.\n\n**Mia:** You? No way! You check your phone every two minutes!\n\n**Leo:** I know. That's why I did it. 😅 My screen time was seven hours a day. Seven!\n\n**Mia:** So what did you do all weekend?\n\n**Leo:** On Saturday I went hiking with my brother. We haven't done that since we were kids. And I didn't take a single photo! 🏔️\n\n**Mia:** And how did you feel?\n\n**Leo:** On Friday night, terrible — I didn't know what to do with my hands! But on Sunday I cooked a big lunch for my family and read a magazine. I've felt more relaxed since then.\n\n**Mia:** Are you going to do it again?\n\n**Leo:** Maybe once a month. And I've already turned off all my notifications.\n\n**Mia:** Even mine? 😤\n\n**Leo:** Even yours! Sorry! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "How many messages did Mia send?", options: ["*ten", "two", "seven"] },
      { q: "What was Leo's screen time?", options: ["*seven hours a day", "two hours a day", "ten hours a day"] },
      { q: "Who did Leo go hiking with?", options: ["*his brother", "Mia", "his dad"] },
      { q: "What has Leo already done?", options: ["*turned off all his notifications", "deleted all his apps", "bought a new phone"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo's detox was from Friday evening to Monday morning.", true],
      ["Leo took a lot of photos on the hike.", false],
      ["Leo felt great on Friday night.", false],
      ["Leo cooked lunch for his family on Sunday.", true],
      ["Leo is going to do a detox every weekend.", false],
    ]),
  ]),

  section("Review: Module 7", [
    choose(
      "Choose.",
      "1. I've [*just/yet] turned off my phone.\n2. Have you deleted the app [*yet/already]?\n3. She's had her phone [*for/since] three years.\n4. I haven't used Instagram [*since/for] Monday.\n5. We've [*already/yet] finished — we were fast!\n6. How long [*have you had/do you have] this laptop?\n7. He hasn't called me [*yet/just].\n8. They've known each other [*since/for] they were kids.",
    ),
    gaps(
      "Complete with just, already, yet, for or since.",
      "1. Kate has [already] read a whole book this week!\n2. I haven't checked my email [yet].\n3. Leo has [just] come back from the mountains — his bag is still at the door.\n4. I've had this phone [for] two years.\n5. She hasn't posted anything [since] Sunday.\n6. We've been offline [for] three days!\n7. Have you set a time limit [yet]?",
    ),
    drag(
      "Complete the post.",
      "Day 5 of my detox! 📵 I've [already] read two books. I [haven't] missed TikTok at all — OK, a little. 😅 I've [just] come back from a walk with my dog. I've lived in this city [for] six years, but I've never noticed the beautiful old trees on my street! I've slept better [since] Monday. Have you tried a detox [yet]?",
      ["yet", "since", "for", "didn't"],
    ),
  ]),

  section("Writing: A diary entry", [
    box(
      "✍️ A diary entry",
      "- **40+ words**\n- the day and the date: *Wednesday, 12 March*\n- what's happened today: *I've…* + details: *This morning I…*\n- feelings: *I feel calmer / bored / free…*\n- a plan: *Tomorrow I'm going to…*",
    ),
    write(
      "Imagine it's day 3 of your digital detox. Write your diary entry: What have you done today? What have you missed? How do you feel? (40+ words)",
      40,
      {
        read: "*Example start:* Wednesday, day 3. 📵 I've just come back from the gym. I haven't checked my phone since Monday, and…",
      },
    ),
    tip("Check together: a date? Present Perfect for today's news + Past Simple for details? Feelings? A plan for tomorrow? Read the best sentence aloud. 🌟"),
  ]),

  section("Let's talk: Could you do it?", [
    text(
      "Talk to your teacher.",
      "- Could you live without social media for a week? Which app would you miss most? 📱\n- What do you use your phone for that is really useful? And what is just a habit? 🤔\n- Do you have any phone rules at home? (no phones at dinner, in the bedroom…) 🏠\n- How do you feel when people look at their phones while you're talking to them? 😤",
    ),
    text(
      "Make a plan 📝",
      "Make your own realistic detox plan for next week — 3 rules.\n\n*I'm going to mute all group chats after 9 p.m. I'm not going to take my phone to the dinner table…*\n\nYour teacher asks: *Which rule will be the most difficult? Why?* Next lesson — tell your teacher if you kept your rules! 🤞",
    ),
    tip("*If you have time:* “Phone-free challenge” — both put your phones in another room for the rest of the lesson. How do you feel after 10 minutes? 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a message on your screen from an app =", options: ["*a notification", "a limit", "a detox"] },
      { q: "you can't stop =", options: ["*addicted", "offline", "muted"] },
      { q: "I haven't checked it ___.", options: ["*yet", "already", "just"] },
      { q: "I've been offline ___ Saturday.", options: ["*since", "for", "yet"] },
    ]),
    box("Word of the day: doomscrolling", "**doomscrolling** 📱😟 = scrolling through bad news or boring posts for a long time, even when it makes you feel bad.\n\n*I stopped doomscrolling at night — now I sleep much better!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 📱⏳ time you look at screens: screen [time]\n2. 🔔 a message from an app: a [notification]\n3. 🔇 stop a chat's sound: [mute] it\n4. 📵 not on the internet: [offline]\n5. 🔗 you can't stop: [addicted]\n6. 🎯 think about one thing: [focus]",
      ),
      trueFalse("From the lesson: true or false?", [
        ["Kate's screen time was 5 hours a day.", true],
        ["Kate called her grandma on Thursday.", true],
        ["Leo's detox lasted a week.", false],
        ["Leo went hiking with his brother.", true],
        ["Kate is never going to use social media again.", false],
      ]),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      choose(
        "Choose.",
        "1. I've had Instagram [*since/for] 2018.\n2. Have you finished your detox [*yet/already]?\n3. She's [*just/yet] switched off her phone.\n4. How long [*have you known/do you know] Kate?\n5. We haven't seen him [*for/since] ages.\n6. I've [*already/yet] deleted TikTok!",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Try a mini detox: one evening (3+ hours) without social media. Then write a diary entry: What did you do? How did you feel? Will you do it again? (60+ words)", 60),
      record("Record your answer: Is your phone your friend or your enemy? Give 3 reasons. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
