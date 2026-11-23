import {
  box,
  choose,
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

// 5.4 Practical English: Making arrangements — suggesting (Shall we…? How about…?), accepting, refusing politely (I'm afraid I can't…), changing plans. Chats and phone calls; role-play. No new grammar.
export default lesson("a2-5.4", "Practical: Making arrangements", () => [
  section("Warm-up: Chat chaos", [
    box("Today you will…", "- suggest plans: *Shall we…? How about…?* 💡\n- say no politely: *I'm afraid I can't…* 🙏\n- change plans when something comes up 🔁"),
    order(
      "These messages are mixed up. Put the chat in order! 💬",
      ["Hey! Are you free on Saturday?\nYes, I think so. Why?\nShall we go to the new climbing center?\nSounds fun! What time?\nHow about 11? I'll book.\nPerfect! See you there! 🧗"],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- How do you usually make plans with friends: a call, a voice message or a chat? Why? 📞💬\n- Who in your group of friends is always late? Who always cancels? 😅\n- What's the most annoying thing when people make plans? (50 messages for one coffee? 😂)\n- Are you better at saying “yes” or “no”? Is it difficult for you to say no?",
    ),
    tip("Share your own “plan-making” pet hate — e.g. friends who answer *maybe* and then don't come. The student will have strong opinions!"),
  ]),

  section("Vocabulary: Plans with friends", [
    words("Making plans", [
      ["hang out (with)", "🛋️👫 spend time together, relax", "Do you want to hang out on Friday?"],
      ["get together", "👥 meet as a group"],
      ["catch up", "☕💬 meet and talk about news"],
      ["be up for (something)", "🙋 want to do it", "Are you up for a film tonight?"],
      ["suggest", "💡 say an idea for a plan"],
      ["accept — turn down", "✅ say yes — ❌ say no to an invitation"],
      ["something came up", "😬 a problem happened, I can't come"],
      ["I'm running late", "🏃⏰ I'm going to be late"],
      ["I'm on my way", "🚶➡️ I'm coming now"],
      ["call off", "❌📅 cancel", "They called off the party."],
      ["put off — postpone", "📅➡️ move to a later time"],
      ["Sounds good!", "👍 I like the idea"],
    ]),
    match("Match.", [
      ["hang", "out"],
      ["catch", "up"],
      ["turn", "down"],
      ["call", "off"],
      ["I'm on", "my way"],
      ["something", "came up"],
    ]),
    gaps(
      "Complete.",
      "1. Sorry, I can't come tonight — something came [up]. 😬\n2. I'm running [late]! See you in 15 minutes. 🏃\n3. Don't worry, I'm on my [way]! 🚶\n4. Are you up [for] a pizza tonight? 🍕\n5. Let's get [together] at the weekend! 👥\n6. It's raining, so they called [off] the match. ❌\n7. Let's catch [up] — I want to hear all your news! ☕\n8. Pizza at 7? — Sounds [good]! 👍",
    ),
  ]),

  section("Useful phrases: Shall we…?", [
    quiz("What do you say? Choose.", [
      { q: "You're on the bus to the café, but your friend is waiting. You text:", options: ["*I'm on my way!", "Something came up.", "Sounds good!"] },
      { q: "Your bus is very slow. You'll be 20 minutes late. You text:", options: ["*Sorry, I'm running late!", "I'm on my way!", "That works for me."] },
      { q: "Your friend suggests pizza at 7. You like the idea:", options: ["*Sounds good!", "I'm afraid I can't.", "Let's call it off."] },
      { q: "Your mom is sick and you can't meet your friend:", options: ["*Sorry, something came up.", "I'm up for it!", "How about pizza?"] },
    ]),
    table("arrangements"),
    sort("Suggest, say yes or say no? Sort. 💡✅❌", {
      "💡 suggest": ["Shall we go bowling?", "How about Sunday?", "Why don't we meet at 6?"],
      "✅ say yes": ["Sounds good!", "That works for me.", "Great idea!"],
      "❌ say no": ["I'm afraid I can't.", "Sorry, I'm busy then.", "Maybe another time?"],
    }),
    choose(
      "Choose.",
      "1. [*Shall we/Do we shall] go to the cinema?\n2. How about [*going/go] for a walk?\n3. Why don't we [*meet/meeting] at the café?\n4. I'm [*afraid/scared] I can't — I'm working.\n5. Saturday? That [*works/goes] for me!\n6. Can we [*make it/do it] 7 instead of 6?\n7. Sorry, something [*came up/came out]. Can we move it to Sunday?\n8. How about [*Friday/on Friday going]?",
    ),
    gaps(
      "Complete the phrases.",
      "1. [Shall] we go to the park?\n2. How [about] tomorrow?\n3. [Why] don't we order pizza?\n4. I'm [afraid] I can't. I'm busy.\n5. Can we [make] it 8 instead?\n6. That [works] for me! 👍",
    ),
  ]),

  section("Dialogue: Change of plans", [
    tip("Read the chat in roles. Ask: *What was the first plan? What happened? What's the new plan?* Point out how polite the friends are when they change plans."),
    trueFalse(
      "Read the chat. True or false?",
      [
        ["Mia suggests going to a concert.", false],
        ["Leo accepts the first plan.", true],
        ["Mia's boss asked her to work on Friday evening.", true],
        ["Leo is angry about the change.", false],
        ["They're meeting on Saturday afternoon now.", true],
      ],
      {
        read: [
          "## 💬 Mia & Leo",
          "**Mia:** Hey! Are you up for a film on Friday? The new Marvel movie is out! 🍿",
          "**Leo:** Sounds great! Shall we go to the 7 p.m. show?",
          "**Mia:** Perfect. I'll book the tickets. 🎫",
          "**Mia (Friday, 2 p.m.):** Leo, I'm so sorry — something came up. My boss wants me to finish a report tonight. 😩 Can we put it off?",
          "**Leo:** Oh no! Don't worry, it happens. How about Saturday?",
          "**Mia:** Saturday afternoon works for me. The 3 p.m. show?",
          "**Leo:** That works for me too! And why don't we have lunch before the film?",
          "**Mia:** Great idea! Let's meet at 1 at the food court. I'll change the tickets. Thanks for understanding! 🙏",
          "**Leo:** No problem. Good luck with the report! 💪",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What film do they want to see?", options: ["*the new Marvel movie", "a horror film", "a comedy"] },
      { q: "Who books the tickets?", options: ["*Mia", "Leo", "Mia's boss"] },
      { q: "What does Leo suggest for Saturday?", options: ["*lunch before the film", "dinner after the film", "a walk in the park"] },
      { q: "What time are they meeting on Saturday?", options: ["*at 1", "at 3", "at 7"] },
    ]),
  ]),

  section("Listening: Can we make it 7?", [
    ...listening(
      "Listen. Aigerim calls Daniyar about a birthday dinner.",
      "**Daniyar:** Hi, Aigerim!\n\n**Aigerim:** Hi, Daniyar! Listen, it's Dana's birthday on Thursday. Shall we take her out for dinner? 🎂\n\n**Daniyar:** Good idea! Where?\n\n**Aigerim:** How about the Georgian restaurant on Abay Avenue? She loves khachapuri.\n\n**Daniyar:** Sounds good. What time?\n\n**Aigerim:** Why don't we meet at six?\n\n**Daniyar:** Hmm, I'm afraid I can't at six — I finish work at six thirty. Can we make it seven?\n\n**Aigerim:** Seven works for me. I'll book a table for four — Arman is coming too.\n\n**Daniyar:** Great. Shall I buy a cake?\n\n**Aigerim:** Yes, please! Chocolate — it's her favorite. 🍫 And I'll get flowers.\n\n**Daniyar:** Perfect. Should we tell her, or is it a surprise?\n\n**Aigerim:** A surprise, of course! I'll just say we're having a quick dinner. 🤫\n\n**Daniyar:** Ha! OK. See you on Thursday at seven!",
    ),
    quiz("Listen and choose.", [
      { q: "Whose birthday is it?", options: ["*Dana's", "Aigerim's", "Arman's"] },
      { q: "What kind of restaurant do they choose?", options: ["*Georgian", "Italian", "Japanese"] },
      { q: "Why can't Daniyar come at six?", options: ["*He finishes work at 6:30.", "He has a lesson.", "He's picking up Arman."] },
      { q: "How many people is the table for?", options: ["*four", "three", "six"] },
    ]),
    gaps(
      "Listen again. Complete the phrases.",
      "1. [Shall] we take her out for dinner?\n2. How [about] the Georgian restaurant?\n3. Why [don't] we meet at six?\n4. I'm [afraid] I can't at six.\n5. Can we [make] it seven?\n6. Seven [works] for me.",
    ),
  ]),

  section("Video: Making plans", [
    video("Watch an easy conversation: two friends make plans. What do they decide?", "ENPSjB90MR4"),
    text("Talk to your teacher.", "- Which phrases from today do you hear? 👂\n- Is it easy or difficult for them to agree? Why?"),
  ]),

  section("Let's talk: Plans, plans, plans", [
    text(
      "Role-play: Make a plan — then change it! 🎭",
      "**1.** Invite your teacher to something real you want to do this month (a film, a café, a museum, a hike…). Suggest a day and a time.\n\n**2.** Your teacher says no politely and suggests another time. Agree on a plan.\n\n**3.** Your teacher calls: *Something came up…* Change the plan again — politely! 😄\n\nThen change roles. Use *Shall we…? How about…? I'm afraid I can't… Can we make it…? That works for me.*",
    ),
    text(
      "Game: The best excuse 🙈",
      "Your teacher invites you to 5 things. Say no each time — with a polite (and creative!) excuse.\n\n*I'm afraid I can't — I'm washing my cat. 🐈*\n\nThe most creative excuse wins!",
    ),
    tip("*If you have time:* ask about real life — *What's the best excuse you ever heard? Did you ever cancel at the last minute? Why?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ we go to the park?", options: ["*Shall", "Do", "Are"] },
      { q: "How about ___ pizza?", options: ["*ordering", "order", "to order"] },
      { q: "Say no politely:", options: ["*I'm afraid I can't.", "No.", "I don't want."] },
      { q: "a problem happened, I can't come =", options: ["*something came up", "I'm on my way", "sounds good"] },
    ]),
    box("Word of the day: a flake", "**a flake** ❄️🙄 = a person who often cancels plans at the last minute (informal).\n\n*Don't invite Sam — he's such a flake! He always says “something came up”.*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. Are you up [for] a coffee? ☕\n2. Sorry, something came [up]. 😬\n3. I'm running [late] — 10 minutes! ⏰\n4. They called [off] the concert. ❌\n5. Let's catch [up] next week! 💬\n6. I'm on my [way]! 🚶",
      ),
      choose(
        "Choose.",
        "1. [*Shall we/Shall] meet at 5?\n2. How about [*Saturday/on Saturday going]?\n3. Why don't we [*go/going] by bus?\n4. I'm [*afraid/sorry for] I can't come.\n5. Can we [*make it/make] 8?\n6. That [*works/is working for] me!",
      ),
    ],
    "Homework: Vocabulary and phrases",
  ),
  homework(
    [
      video("Watch another short dialogue: making plans.", "xBdDM_Ii8sU"),
      write("Write the 3 most useful phrases from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      trueFalse(
        "Read the messages. True or false?",
        [
          ["Arman suggests a hike on Sunday.", true],
          ["Dana can't come because she's sick.", false],
          ["Dana suggests next Sunday.", true],
          ["Arman calls off the hike.", false],
          ["Aigerim is coming on the hike.", true],
        ],
        {
          read: "💬 **Arman:** Hi all! Shall we go hiking on Sunday? The weather will be sunny! ⛰️\n\n💬 **Dana:** I'm afraid I can't — my cousin is getting married on Sunday. 💍 How about next Sunday?\n\n💬 **Arman:** Hmm, I'm working next Sunday. We'll go this Sunday, and next time we'll go together, Dana!\n\n💬 **Aigerim:** I'm up for it! What time? 🙋‍♀️\n\n💬 **Arman:** Let's meet at 8 at the bus stop. Bring water and snacks!",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write two messages to a friend. 1) Suggest a plan for the weekend (what, when, where). 2) The next day: something came up — change the plan politely. (50+ words)", 50, {
        read: "*Example:* 1) Hi Dana! Are you up for bowling on Saturday? How about 4 p.m. at the mall? I'll book a lane! 🎳 2) Dana, I'm so sorry — something came up. My grandma is visiting on Saturday. Can we make it Sunday at 4 instead? I'll buy the pizza! 🍕",
      }),
      record("Record a voice message: invite a friend to something, suggest a time, and say what you'll bring or do. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
