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

// 5.2 Maybe, maybe not — G: might / might not; will for decisions, offers and promises (I'll help you!). V: certainty (definitely, probably) and helping. Say it right: hearing 'll. S: offer help, make promises. Main format: a certainty game + reading (a group chat) + listening. No video in class.
export default lesson("a2-5.2", "Maybe, maybe not", () => [
  section("Warm-up: Yes, no or maybe?", [
    box("Today you will…", "- say how sure you are: *definitely, probably, I might…* 🤔\n- offer help and make promises: *I'll help you! I won't forget!* 🤞\n- decide things fast: *OK, I'll take the blue one!*"),
    text(
      "Game: How sure are you? 🎯",
      "Your teacher asks about **your** next week. Answer with the scale:\n\n✅✅ **definitely** · ✅ **probably** · 🤷 **I might** · ❌ **probably not** · ❌❌ **definitely not**\n\n- Will you eat pizza this week? 🍕\n- Will you go to bed before 11 tonight? 😴\n- Will you call your grandparents? 👵\n- Will you do sport? 🏃\n- Will you buy something you don't need? 🛍️\n- Will you be late for something? ⏰\n\nThen ask your teacher the same questions!",
    ),
    text(
      "Talk to your teacher.",
      "- Are you a “yes or no” person or a “maybe” person? Is it good or bad? 🤷\n- When a friend says “maybe”, what does it really mean in your country? 😄\n- Do you make decisions fast or slowly? What was a fast decision you were happy about?",
    ),
    tip("The answers will come out naturally with *will* — that's fine. Notice when the student says *maybe I will…* and say: *Great — and today we'll learn a shorter way: I might!*"),
  ]),

  section("Vocabulary: Sure or not sure?", [
    words("Certainty and helping", [
      ["definitely", "✅✅ 100% sure", "I'll definitely come!"],
      ["probably", "✅ about 80% sure", "It'll probably rain."],
      ["maybe — perhaps", "🤷 50/50"],
      ["it depends (on…)", "🤔 the answer changes", "It depends on the weather."],
      ["I doubt it", "😕 I don't think so"],
      ["promise — keep a promise", "🤞 — ✅"],
      ["break a promise", "💔 not do what you promised"],
      ["lend — borrow", "🤲➡️ give for a short time — ⬅️🤲 take for a short time", "Can you lend me $10? Can I borrow your pen?"],
      ["give someone a lift", "🚗 take someone somewhere in your car · 🇺🇸 give someone a ride"],
      ["pick someone up", "🚗👋 go and get someone", "I'll pick you up at 7."],
      ["remind", "🔔 help someone remember", "Remind me to call Mom!"],
      ["change your mind", "🔁🧠 decide something different"],
    ]),
    sort("How sure? Sort. ✅🤷", {
      "✅ sure": ["definitely", "I'm sure", "100%", "of course"],
      "🤷 not sure": ["maybe", "I might", "it depends", "I doubt it"],
    }),
    match("Match.", [
      ["keep", "a promise"],
      ["break", "a promise"],
      ["give me", "a lift"],
      ["pick you", "up"],
      ["change", "your mind"],
      ["it depends", "on the weather"],
    ]),
    gaps(
      "Complete.",
      "1. I forgot my pen. Can I [borrow] yours? ✏️\n2. Sure, I'll [lend] you mine. 🤲\n3. You promised! Don't [break] your promise! 💔\n4. It's late. I'll give you a [lift/ride] home. 🚗\n5. What time will you pick me [up]? 👋\n6. Please [remind] me — I always forget! 🔔\n7. Will you come? — I don't know. It [depends] on my work. 🤔\n8. I wanted the red one, but I changed my [mind]. 🔁",
    ),
  ]),

  section("Reading: Weekend at the lake?", [
    tip("Read the chat in roles — the student is one friend, you are the others. After reading, ask: *Who is definitely coming? Who might come? What will each person bring?*"),
    trueFalse(
      "Read the group chat. True or false?",
      [
        ["Dana is definitely going to the lake.", true],
        ["Arman might not come because of work.", true],
        ["Mia will bring the food.", false],
        ["Leo will give Mia a lift.", true],
        ["Aigerim promises to bring her speaker.", false],
        ["They might change the plan if it rains.", true],
      ],
      {
        read: [
          "## 💬 Lake Trip 🏞️ (5 members)",
          "**Dana:** OK, who's coming to the lake on Saturday? I'm definitely going! 🙋‍♀️",
          "**Arman:** I might come… My boss might ask me to work on Saturday. I'll tell you on Friday.",
          "**Mia:** I'd love to come! But I don't have a car. 😕",
          "**Leo:** No problem — I'll give you a lift! I'll pick you up at 8. 🚗",
          "**Mia:** You're the best! Then I'll make the sandwiches for everyone. 🥪",
          "**Aigerim:** I'm coming too! I'll bring my speaker for music. 🔊 Don't worry, I won't play K-pop all day… I promise. 😇",
          "**Dana:** Haha, we'll see! 😂 The weather app says it might rain in the afternoon. 🌧️",
          "**Leo:** Then we'll go in the morning and come back early. Or we might go to a café near the lake.",
          "**Arman:** Good news — no work on Saturday! I'll bring the tea and the barbecue. 🍖",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What time will Leo pick Mia up?", options: ["*at 8", "at 6", "at 10"] },
      { q: "What will Mia make?", options: ["*sandwiches", "tea", "a barbecue"] },
      { q: "What does Aigerim promise?", options: ["*not to play K-pop all day", "to bring sandwiches", "to drive"] },
      { q: "What's the good news from Arman?", options: ["*He doesn't have to work on Saturday.", "It won't rain.", "He has a new car."] },
    ]),
  ]),

  section("Grammar: might", [
    quiz("Notice the rule 🔍 Look at the chat: “I might come… It might rain… We might go to a café.” Which is true?", [
      { q: "might means…", options: ["*maybe — we're not sure", "definitely", "must"] },
      { q: "After might we use…", options: ["*the verb without to: might come", "to + verb: might to come", "verb-ing: might coming"] },
    ]),
    table("might-will"),
    choose(
      "Choose.",
      "1. Take an umbrella. It [*might rain/might rains].\n2. I'm not sure. I [*might/might to] go to the party.\n3. He [*might not/doesn't might] come — he's sick.\n4. We [*might move/might moving] to Astana next year.\n5. Call her later. She [*might be/might is] busy now.\n6. I don't know what to cook. I [*might make/might made] pasta.\n7. Don't wait for me — I [*might not/might don't] finish on time.\n8. They [*might buy/might to buy] a new car this year.",
    ),
    gaps(
      "Not sure? Use might or might not.",
      "1. Maybe I'll go to the gym. → I [might go] to the gym.\n2. Maybe it will snow. → It [might snow].\n3. Maybe she won't come. → She [might not come].\n4. Maybe we'll watch a film. → We [might watch] a film.\n5. Maybe they'll be late. → They [might be] late.\n6. Maybe he won't like it. → He [might not like] it.\n7. Maybe I'll change my mind. → I [might change] my mind.\n8. Maybe the shop won't be open. → The shop [might not be] open.",
    ),
  ]),

  section("Grammar: I'll help you!", [
    match("What do you say? Match the situation and the answer.", [
      ["“The phone is ringing!”", "“I'll get it!”"],
      ["“This bag is so heavy.”", "“I'll carry it for you.”"],
      ["“I'm so thirsty.”", "“I'll get you some water.”"],
      ["“Don't tell anyone!”", "“I won't, I promise.”"],
      ["“It's dark outside.”", "“I'll give you a lift home.”"],
      ["“Tea or coffee?”", "“I'll have tea, please.”"],
    ]),
    choose(
      "Decided before or now? Choose.",
      "1. (Waiter: “What would you like?”) — I [*'ll have/'m going to have] the soup, please.\n2. I bought a ticket last week. I [*'m going to/'ll] see the match on Sunday.\n3. Oh no, I forgot my wallet! — Don't worry, I [*'ll pay/'m going to pay].\n4. We decided last week: we [*'re going to paint/'ll paint] the kitchen.\n5. It's cold in here. — I [*'ll close/'m going to close] the window.\n6. I [*won't/'m not going] forget your birthday this year, I promise!",
    ),
    drag(
      "Complete the conversation.",
      "A: Oh no! My laptop died, and my homework is due tomorrow! 😱\nB: Don't panic. I'[ll] help you. You can [borrow] my laptop.\nA: Really? Thank you! I [promise] I'll give it back tomorrow.\nB: No problem. Do you want a lift home? I'll [drive] you.\nA: You're amazing! I'll [buy] you a coffee tomorrow. ☕\nB: OK, but you [might] need two coffees — it's a long homework! 😄\nA: Ha! I [won't] forget this. Thanks!\nB: I'll [remind] you about the coffee! 😉",
      ["lend", "going", "will"],
    ),
    order("Make sentences.", [
      "I'll help you with your bags.",
      "I promise I won't tell anyone.",
      "It might snow tomorrow.",
      "We might not go to the party.",
      "I'll call you when I get home.",
    ]),
  ]),

  section("Say it right: I'll or I?", [
    box(
      "🗣️ Say it right",
      "**'ll** is very short — listen carefully!\n\n*I **call** you.* (every day) · *I'**ll** call you.* (the future, a promise)\n\n*We **go** there.* · *We'**ll** go there.*\n\nSay **I'll** like “**aisle**” /aɪl/ — with a dark L at the end.",
    ),
    quiz("Your teacher says one sentence. What do you hear? Choose.", [
      { q: "a promise for tonight:", options: ["*I'll call you.", "I call you."] },
      { q: "every Saturday:", options: ["*We go to the gym.", "We'll go to the gym."] },
      { q: "an offer now:", options: ["*I'll help you.", "I help you."] },
      { q: "a decision now:", options: ["*They'll take the bus.", "They take the bus."] },
    ]),
    tip("Read the pairs in random order — the student says “future” or “every day”. Then the student reads, and you guess. Exaggerate the L in *I'll* first, then say it naturally."),
  ]),

  section("Listening: A terrible morning", [
    ...listening(
      "Listen. Dana is having a terrible morning. Leo offers to help.",
      "**Leo:** Dana? Are you OK? You look stressed.\n\n**Dana:** Everything is going wrong today! My phone is at 2%, I missed the bus, and I have a job interview at eleven! 😩\n\n**Leo:** OK, calm down. First — I'll lend you my charger. Here.\n\n**Dana:** Thanks! But how will I get to the interview? It's across the city!\n\n**Leo:** I'll drive you. My car is outside. We'll be there in twenty minutes.\n\n**Dana:** Really? You're a lifesaver! But… my shirt has coffee on it. ☕\n\n**Leo:** Hmm. There's a shop near the office. We might have time to buy a new one.\n\n**Dana:** Good idea. Oh, and I didn't have breakfast…\n\n**Leo:** I'll buy you a sandwich on the way. 🥪\n\n**Dana:** Leo, I promise I'll pay you back. And if I get the job, I'll take you to dinner!\n\n**Leo:** Deal! But you might be too busy in your new job! 😄 Come on, let's go!",
    ),
    quiz("Listen and choose.", [
      { q: "What time is Dana's interview?", options: ["*at eleven", "at ten", "at twelve"] },
      { q: "What does Leo lend Dana first?", options: ["*his charger", "his car", "some money"] },
      { q: "What's wrong with Dana's shirt?", options: ["*It has coffee on it.", "It's too big.", "It's dirty from the bus."] },
      { q: "What will Dana do if she gets the job?", options: ["*take Leo to dinner", "buy Leo a car", "lend Leo her charger"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana missed the bus.", true],
      ["Dana's phone battery is full.", false],
      ["The interview is near Dana's home.", false],
      ["Leo will buy Dana a sandwich.", true],
      ["Leo is sure they will have time to buy a shirt.", false],
    ]),
  ]),

  section("Let's talk: Promises and offers", [
    text(
      "Game: I'll help! 🦸",
      "Your teacher says a problem — offer help fast with **I'll…**!\n\n*I'm hungry. · My car won't start. · I can't find my keys. · I don't understand my homework. · I'm bored. · My cat is on the roof! 🐈*\n\nThen you say a problem, and your teacher offers help. The funniest offer wins! 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Who do you call first when you have a problem? Why that person? 📞\n- Did you ever break a promise? What happened? 😬\n- What's a promise you made to yourself this year? Are you keeping it? 🤞\n- What might you do this weekend? What will you definitely do?",
    ),
    tip("*If you have time:* “Fortune teller” 🔮 — the student reads your palm (or your coffee cup!) and predicts your next month: *You'll meet someone interesting… You might get a present…* Then change roles."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "It ___ rain. Take an umbrella.", options: ["*might", "might to", "mights"] },
      { q: "The bag is heavy? I ___ carry it!", options: ["*'ll", "'m going to", "might to"] },
      { q: "give for a short time =", options: ["*lend", "borrow", "keep"] },
      { q: "about 80% sure =", options: ["*probably", "definitely", "I doubt it"] },
    ]),
    box("Word of the day: a lifesaver", "**a lifesaver** 🛟 = a person or thing that helps you a lot when you have a problem.\n\n*You lent me your charger — you're a lifesaver!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. Can I [borrow] your umbrella? ☔\n2. Of course, I'll [lend] it to you.\n3. I'll pick you [up] at the station. 🚉\n4. She never breaks a [promise]. 🤞\n5. Will you come? — It [depends]. 🤔\n6. I wanted pizza, but I changed my [mind]. 🔁",
      ),
      sort("Sure or not sure? Sort.", {
        "✅ sure": ["I'll definitely come.", "I'm sure it will rain.", "Of course I'll help."],
        "🤷 not sure": ["I might come.", "It might rain.", "Maybe I'll help.", "I doubt it.", "It depends."],
      }),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: might and might not.", "x8Yl6nX-6QQ"),
      choose(
        "Choose.",
        "1. I [*might/might to] be late tonight.\n2. She [*might not/doesn't might] know the answer.\n3. It's cloudy — it [*might rain/might rains].\n4. We might [*go/going] to the cinema.\n5. He [*might be/might is] at home.\n6. They [*might not/might don't] like the idea.",
      ),
    ],
    "Homework: Grammar — might",
  ),
  homework(
    [
      video("Watch: will / won't for decisions, offers and promises.", "KADErmJElK0"),
      gaps(
        "Offer help or promise with I'll / I won't.",
        "1. “I'm cold.” — [I'll] close the window.\n2. “I can't open this jar.” — Give it to me. [I'll] open it.\n3. “Don't be late!” — [I won't/I will not]. I promise!\n4. “I left my wallet at home.” — No problem, [I'll] pay.\n5. “It's a secret!” — Don't worry, [I won't/I will not] tell anyone.\n6. “My computer isn't working.” — [I'll] have a look at it.",
      ),
    ],
    "Homework: Grammar — will",
  ),
  homework(
    [
      write("Reply to the lake trip chat: Are you coming? How sure are you? What will you bring or do to help? Use might, will, definitely, probably. (40+ words)", 40, {
        read: "*Example:* Hi everyone! I'll probably come, but I might be a little late — I have a lesson until 9. 😅 I'll bring a ball and some fruit. 🍉 If it rains, I know a great café near the lake — I'll book a table. And I promise I won't talk about work all day! 😄",
      }),
      record("Record a voice message to a friend who has a problem (choose one: lost keys, a broken phone, a bad day). Offer 3 kinds of help with I'll… (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
