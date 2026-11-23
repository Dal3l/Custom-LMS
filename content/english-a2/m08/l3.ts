import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  picture,
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

// 8.3 Rules around the world — skills lesson: reading (a guide to etiquette in different countries), the module's only video in class, a listening (a Japanese student in Kazakhstan), writing tips for visitors; review of module 8.
export default lesson("a2-8.3", "Rules around the world", () => [
  section("Warm-up: Polite or rude?", [
    box("Today you will…", "- learn about manners in different countries 🌍\n- compare them with your country\n- write tips for visitors to your country ✍️"),
    sort("Polite or rude — in that country? Guess and sort! 🤔", {
      "😊 polite / normal": ["🇯🇵 slurping noodles loudly", "🇺🇸 leaving a tip in a restaurant", "🇰🇿 a host pouring tea in small amounts", "🇯🇵 taking off shoes at the door"],
      "😬 rude / bad": ["🇨🇳 giving a clock as a present", "🇹🇭 touching someone's head", "🇯🇵 putting chopsticks straight up in rice", "🇩🇪 being 15 minutes late"],
    }),
    tip("Let the student guess first — many of these surprise people. Then discuss each one: *Is it the same in your country? What's the reason, do you think?* The reading gives the reasons."),
    text(
      "Talk to your teacher.",
      "- Have you ever made a mistake with manners in another country or another family? What happened? 😅\n- What do foreigners find strange in your country, do you think? 🇰🇿\n- What's the rudest thing a person can do at the table, for you? 🍽️",
    ),
  ]),

  section("Vocabulary: Manners", [
    words("Manners and customs", [
      ["polite — rude", "😊 good manners — 😬 bad manners"],
      ["manners", "🍽️🙇 how you behave with other people", "He has good manners."],
      ["a custom — a tradition", "🎎 what people usually do in a country"],
      ["a guest — a host", "🧳 a visitor — 🏠 the person who invites"],
      ["shake hands", "🤝"],
      ["bow", "🙇 bend your body to say hello or thanks"],
      ["kiss on the cheek", "😘"],
      ["take off your shoes", "👟➡️🚪"],
      ["tip — a tip", "💵 give extra money to a waiter"],
      ["chopsticks", "🥢"],
      ["offend (someone)", "😠 make someone feel bad or angry", "I didn't want to offend you!"],
      ["bring a gift", "🎁 a present for the host"],
    ]),
    match("Match.", [
      ["shake", "hands"],
      ["take off", "your shoes"],
      ["kiss someone", "on the cheek"],
      ["leave", "a tip"],
      ["bring", "a gift"],
      ["have good", "manners"],
    ]),
    gaps(
      "Complete.",
      "1. In Japan, people often [bow] to say hello. 🙇\n2. In Kazakhstan, you should [take] off your shoes at home. 👟\n3. In the USA, you have to leave a [tip] for the waiter. 💵\n4. It's [rude] to talk with your mouth full! 😬\n5. Saying “please” and “thank you” is [polite]. 😊\n6. When you visit someone, you should bring a [gift]. 🎁\n7. I eat sushi with [chopsticks]. 🥢\n8. The [host] cooked a big dinner for all the guests. 🏠",
    ),
  ]),

  section("Reading: A guest's guide to the world", [
    picture("Two customs from Japan", ["photos/rules-genkan.jpg", "photos/rules-chopsticks.jpg"], "Shoes stay at the entrance (the dog stays too!) — and chopsticks"),
    tip("Read one country at a time. Ask: *Is it the same in your country? Would it be difficult for you?* The student marks the most surprising rule ⭐."),
    trueFalse(
      "Read the guide. True or false?",
      [
        ["In Japan, slurping noodles is OK.", true],
        ["In Japan, you should put your chopsticks straight up in your rice.", false],
        ["In China, a clock is not a good present.", true],
        ["In Thailand, you shouldn't touch someone's head.", true],
        ["In the USA, you don't have to tip in restaurants.", false],
        ["In Kazakhstan, a full cup of tea can mean it's time to go.", true],
      ],
      {
        read: [
          "## 🌍 A guest's guide to the world",
          "**🇯🇵 Japan.** You have to take off your shoes when you enter a home. When you eat noodles, you can slurp — it shows you like the food! 🍜 But you mustn't put your chopsticks straight up in a bowl of rice — people do this only at funerals.",
          "**🇨🇳 China.** If you visit someone, you should bring a gift — but not a clock! ⏰ In Chinese, “giving a clock” sounds like words about death. Fruit or tea are better gifts.",
          "**🇹🇭 Thailand.** People believe the head is the most important part of the body, so you shouldn't touch anyone's head — even a child's. And don't point your feet at people or at pictures of the king!",
          "**🇺🇸 The USA.** In restaurants, you have to leave a tip — usually 15–20%. Waiters get a low salary, so tips are a big part of their money. 💵 If you don't tip, people will think you're rude.",
          "**🇰🇿 Kazakhstan.** Guests are very important! The host pours tea in small amounts and refills your cup again and again. ☕ A cup full to the top can mean “it's time to go”! You shouldn't refuse food — just try a little of everything.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why mustn't you put chopsticks straight up in rice in Japan?", options: ["*People do it only at funerals.", "It's bad for the chopsticks.", "The rice gets cold."] },
      { q: "What are good gifts in China, says the guide?", options: ["*fruit or tea", "a clock", "flowers only"] },
      { q: "How much do people usually tip in the USA?", options: ["*15–20%", "5%", "50%"] },
      { q: "Why do tips matter so much in the USA?", options: ["*Waiters get a low salary.", "The food is cheap.", "It's the law."] },
    ]),
  ]),

  section("Video: Polite or rude?", [
    video("Watch a short video about manners around the world. Which rule surprised you most?", "HLtI3PoRzPI"),
    text("Talk to your teacher.", "- Which customs from the video are the same in your country?\n- Which one would be the most difficult for you to remember? 😅"),
  ]),

  section("Listening: Kenji in Kazakhstan", [
    ...listening(
      "Listen. Kenji from Japan tells Dana about life in Kazakhstan.",
      "**Dana:** So, Kenji, you've lived here for six months now. What's the biggest difference from Japan?\n\n**Kenji:** Hmm, the food! In Japan we eat small portions. Here, when I visit a family, there's so much food on the table! 🍲 And everyone says, “Eat, eat!”\n\n**Dana:** Ha! Yes, you have to eat a lot, or the host will think you don't like it.\n\n**Kenji:** I know! The first time, I ate everything on my plate, and the grandmother gave me more. Then more again! 😅 Now I know — I should leave a little food on the plate.\n\n**Dana:** And what about greetings?\n\n**Kenji:** That was strange too. In Japan, we bow. Here, men shake hands with everyone — even with people they see every day. But I learned that you mustn't shake hands across the door — it's bad luck!\n\n**Dana:** Right! You have to come in first. What about shoes?\n\n**Kenji:** That's the same as Japan — you take them off at the door. And people give you slippers. That's easy for me! 🩴\n\n**Dana:** Is there anything you find difficult?\n\n**Kenji:** People are late! In Japan, if a meeting is at ten, everyone is there at five to ten. Here, ten o'clock sometimes means ten thirty! ⏰\n\n**Dana:** Ha! Sorry about that. But we always bring cake! 🍰",
    ),
    quiz("Listen and choose.", [
      { q: "How long has Kenji lived in Kazakhstan?", options: ["*for six months", "for six years", "for six weeks"] },
      { q: "What did the grandmother do when Kenji ate everything?", options: ["*She gave him more food.", "She said goodbye.", "She poured more tea."] },
      { q: "What mustn't you do at the door?", options: ["*shake hands across it", "take off your shoes", "say hello"] },
      { q: "What does Kenji find difficult?", options: ["*People are late.", "taking off his shoes", "the food is spicy"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["In Japan, people eat big portions.", false],
      ["Now Kenji leaves a little food on his plate.", true],
      ["In Japan, people usually bow.", true],
      ["Taking off shoes is different in Japan.", false],
      ["In Japan, people arrive before the meeting starts.", true],
    ]),
  ]),

  section("Review: Module 8", [
    choose(
      "Choose.",
      "1. In Japan you [*have to/don't have to] take off your shoes at home.\n2. You [*mustn't/don't have to] give a clock as a gift in China.\n3. You [*should/should to] bring a small gift for the host.\n4. In the USA, you [*have to/mustn't] leave a tip.\n5. Kenji [*has to/have to] eat a lot when he visits families.\n6. You [*don't have to/mustn't] bow in Kazakhstan — you can shake hands.\n7. What [*should I/I should] wear to a Kazakh wedding?\n8. You [*shouldn't/don't should] touch people's heads in Thailand.",
    ),
    gaps(
      "Complete with have to, don't have to, mustn't, should or shouldn't.",
      "1. In Japan, you [mustn't/must not] put chopsticks straight up in rice. ⛔\n2. In the USA, you [have to] tip in restaurants. ✅\n3. You [should] try a little of every dish — it's polite. 💡\n4. It's free — you [don't have to/do not have to] pay. 🆓\n5. You [shouldn't/should not] point your feet at people in Thailand. 💡❌\n6. Guests [don't have to/do not have to] bring big gifts — a small one is OK. 🆓\n7. In Germany, you [should] be on time. 💡\n8. You [mustn't/must not] shake hands across the door — it's bad luck! ⛔",
    ),
    drag(
      "Complete the tips.",
      "When you visit a Kazakh family, you [should] bring a small gift — sweets or fruit. You [have] to take off your shoes at the door. You [don't] have to eat everything, but you [should] try every dish. You [mustn't] refuse tea — that's rude! And you shouldn't [leave] too early! 😄",
      ["must to", "doesn't", "leaving"],
    ),
  ]),

  section("Writing: Tips for visitors", [
    box(
      "✍️ Tips for visitors",
      "- **40+ words**\n- a title: *5 tips for visitors to…*\n- rules: *You have to… You mustn't… You don't have to…*\n- advice: *You should… You shouldn't…*\n- reasons: *because…* — and a friendly ending: *Enjoy your trip!*",
    ),
    write(
      "Write 5 tips for a foreign visitor to your country or city: what should they do, what mustn't they do, what don't they have to worry about? (40+ words)",
      40,
      {
        read: "*Example start:* 5 tips for visitors to Almaty. 1. You should try beshbarmak — it's our national dish! 2. You have to…",
      },
    ),
    tip("Check together: modal verbs used correctly? At least 2 reasons with *because*? Useful for a real tourist? Read the best tip aloud. 🌟"),
  ]),

  section("Let's talk: Culture clash", [
    text(
      "Talk to your teacher.",
      "- Which custom from today would be the most difficult for you? Why? 🤔\n- What are the rules for guests in your family? (food, gifts, shoes, time…) 🏠\n- Are young people in your country more relaxed about manners than their grandparents? Give examples.\n- Have you ever felt offended by someone from another culture — or offended someone by mistake? 😬",
    ),
    tip("*If you have time:* “Explain my country” 🗺️ — you play a tourist who knows nothing. The student explains 5 customs, and you ask *Why? What happens if I don't?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "make someone feel bad =", options: ["*offend", "bow", "tip"] },
      { q: "a person who invites guests =", options: ["*a host", "a guest", "a waiter"] },
      { q: "It's not allowed: You ___ do it.", options: ["*mustn't", "don't have to", "should"] },
      { q: "In Japan, people often ___ to say hello.", options: ["*bow", "kiss", "hug"] },
    ]),
    box("Word of the day: When in Rome…", "**When in Rome, do as the Romans do** 🏛️ = when you're in another country, follow its customs.\n\n*I don't usually slurp my noodles, but in Tokyo — when in Rome!* 🍜"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 😊 good manners: [polite]\n2. 😬 bad manners: [rude]\n3. 🧳 a visitor: a [guest]\n4. 🙇 bend your body to say hello: [bow]\n5. 💵 extra money for a waiter: a [tip]\n6. 🎁 a present: a [gift]",
      ),
      trueFalse("From the lesson: true or false?", [
        ["In China, a clock is a great present.", false],
        ["In Japan, you take off your shoes at home.", true],
        ["In the USA, tips are usually 15–20%.", true],
        ["Kenji has lived in Kazakhstan for six years.", false],
        ["In Thailand, you shouldn't touch people's heads.", true],
      ]),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      choose(
        "Choose.",
        "1. You [*should/should to] learn some words in the local language.\n2. In some countries you [*have to/must to] cover your shoulders in temples.\n3. You [*don't have to/mustn't] speak perfect English — just try!\n4. Tourists [*mustn't/don't have to] climb on old monuments.\n5. [*Should I/Do I should] bring flowers?\n6. Yesterday we [*had to/must] wait for an hour.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about a custom from your country or family that foreigners find strange. Explain it and say if you like it. (50+ words)", 50),
      record("Record your answer: Which country's customs from today would you like to experience? Why? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
