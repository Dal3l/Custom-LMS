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

// 7.2 He's said to be… — G: reported speech — when to change tenses (backshift) and when not to (the reporting verb is in the present; the fact is still true; general truths); reported questions and requests (review); reporting with the infinitive (He's said to be… / is thought to have…) as review of 6.1. V: trust and reputation (reputation, trustworthy, gossip, spread a rumor, damage someone's reputation, word of mouth, earn someone's trust, a white lie, take something with a pinch of salt, give someone the benefit of the doubt). S: discuss whether to believe rumors and online reviews. Main format: "good or bad gossip?" sort + a long reading (the science of gossip, ~550 words) + TED-Ed video (how miscommunication happens) + a long listening (Asel and Madina: a fake review and a rumor about the bakery, ~3:15).
// Facts checked: the anthropologist Robin Dunbar (1997, "Grooming, Gossip and the Evolution of Language") argued that language evolved partly so people could exchange social information, and that about two thirds of conversation time is spent on social topics; Megan Robbins and Alexander Karan (University of California, Riverside, 2019) recorded 467 people and found they gossiped about 52 minutes a day on average, mostly (about three quarters) neutral, with negative gossip about twice as common as positive (roughly 15% vs 9%); Matthew Feinberg, Robb Willer and colleagues (2012) found that people who saw someone behave selfishly in a game felt calmer after warning others ("prosocial gossip"). Characters: Asel (two bakeries, Asel's Bakery), Madina (designer, made the bakery campaign in 6.3).
export default lesson("b2-7.2", "He's said to be…", () => [
  section("Warm-up: Good gossip, bad gossip", [
    box(
      "Today you will…",
      "- find out what science says about gossip 🗣️🔬\n- report what people say — and decide when to change the tense ⏪\n- discuss whether we should believe rumors and online reviews ⭐",
    ),
    sort("Is it harmless (or even useful) talk, or harmful gossip? Sort. 🧩", {
      "😊 harmless or useful": [
        "“Have you heard? Dana got the job in Barcelona!”",
        "“Be careful with that landlord — he never returns deposits.”",
        "“Apparently, the new café makes amazing coffee.”",
        "“I heard Leo's band is playing on Saturday.”",
      ],
      "😬 harmful": [
        "“I bet she only got the job because of her uncle.”",
        "“Don't tell anyone, but I read his messages.”",
        "“People say he's a liar — I've never met him, but…”",
        "“Did you see what she wore? Embarrassing!”",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- Is all gossip bad? Can it ever be useful?\n- Have you ever heard a rumor about yourself? How did you feel?\n- Do you trust online reviews when you choose a restaurant or a hotel? ⭐",
    ),
    tip("Some items are debatable (the landlord warning is “gossip” but it protects people — exactly the point of the reading). Let the student argue."),
  ]),

  section("Vocabulary: Trust and reputation", [
    words("Trust and reputation", [
      ["a reputation", "🏅 what people think of someone or something"],
      ["trustworthy", "🤝 someone you can trust"],
      ["gossip (n, v)", "🗣️ talk about other people's private lives"],
      ["spread a rumor", "📣 tell a story to many people"],
      ["damage someone's reputation", "💥 make people think badly of someone"],
      ["word of mouth", "👄 information passed from person to person"],
      ["earn someone's trust", "🧱 make someone trust you over time"],
      ["a white lie", "🤍 a small lie told to be kind"],
      ["take something with a pinch of salt", "🧂 not completely believe something"],
      ["give someone the benefit of the doubt", "🙏 believe someone, although you're not sure"],
    ]),
    match("Match.", [
      ["The restaurant has a great", "reputation."],
      ["Most of our customers come by", "word of mouth."],
      ["Someone is spreading", "a rumor about me."],
      ["It takes years to earn", "people's trust."],
      ["Take online reviews", "with a pinch of salt."],
      ["I'll give him", "the benefit of the doubt."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. One bad review can [damage] a small company's reputation.\n2. She's completely [trustworthy] — she never tells secrets.\n3. “I love your haircut!” — sometimes a white [lie] is kind.\n4. Stop [gossiping] about your colleagues!\n5. The story spread by word of [mouth].\n6. He's late again, but let's give him the [benefit] of the doubt.",
    ),
  ]),

  section("Reading: In praise of gossip", [
    tip("A long text (~550 words). First reading — 5 minutes: *Is the writer for or against gossip?* Then the tasks. Ask the student to find reported speech — and notice where the tense did NOT change."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Dunbar thinks language may have developed partly for gossip.", true],
        ["In the 2019 study, people gossiped for about two hours a day.", false],
        ["Most gossip in the study was neutral.", true],
        ["Women gossiped much more negatively than men in the study.", false],
        ["Warning others about a selfish player made people feel calmer.", true],
        ["The writer says all gossip is harmless.", false],
      ],
      {
        read: [
          "## 🗣️ In praise of gossip (well, some of it)",
          "We all say we hate gossip. Gossip is what other people do, usually about us. Yet if you listen to any conversation in a café, an office or a family kitchen, you'll notice how much of it is about other people: who's moving, who's getting married, who said what to whom. Is this a terrible habit? Some scientists say that it isn't — and that it may be one of the reasons we are human.",
          "The British anthropologist Robin Dunbar has studied this question for decades. He points out that monkeys and apes keep their groups together by grooming each other: picking insects out of each other's fur. But grooming takes time, and you can only groom one friend at a time. Dunbar argues that as human groups became bigger, language took over this job. Talking about other people allowed us to learn who was trustworthy, who was dangerous and who was helping whom. In his research, he found that about two thirds of our conversation time is spent on social topics. He says that gossip is, in a way, the human version of grooming.",
          "But how much do we really gossip — and is it as nasty as we think? In 2019, the psychologists Megan Robbins and Alexander Karan at the University of California, Riverside, asked 467 people to wear small recording devices during the day. They found that people gossiped for about 52 minutes a day on average. But most of it was neither good nor bad: about three quarters was completely neutral, like \"Aliya is moving to Astana next month\". Negative gossip was only about twice as common as positive gossip. And, against the stereotype, women didn't gossip more negatively than men; they simply talked more about other people in neutral ways.",
          "Gossip can even be useful. In one experiment, researchers asked people to watch a game in which one player behaved very selfishly. Many of the watchers became stressed — their hearts beat faster. When they were allowed to send a note warning the next player, they calmed down. The researchers called this prosocial gossip: sharing information to protect others. Think of a friend who tells you that a certain landlord never returns deposits. That's gossip, but it's also a public service.",
          "Of course, gossip has a dark side. A rumor can damage someone's reputation in minutes, and online it can travel around the world before the person even knows about it. The problem is not talking about other people. The problem is spreading things that aren't true, or things that were told to us in secret, or saying things we would never say to the person's face.",
          "So how can you tell good gossip from bad? One simple test: would you be comfortable if the person heard you? Another: are you sharing it to help someone, or to make yourself look interesting? And if someone tells you a juicy story, it's worth asking: \"How do you know?\" As Dunbar says, gossip is how we build trust. It would be a pity to use it to destroy it. 🤝",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why, according to Dunbar, did language replace grooming?", options: ["*Human groups became too big to groom everyone.", "Monkeys stopped grooming.", "Talking is healthier."] },
      { q: "What did the 2019 study use?", options: ["*small recording devices worn during the day", "questionnaires", "phone messages"] },
      { q: "What is “prosocial gossip”?", options: ["*sharing information to protect others", "gossip about famous people", "gossip on social media"] },
      { q: "What is one of the writer's tests for good gossip?", options: ["*Would you be comfortable if the person heard you?", "Is the story funny?", "Did many people tell you?"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. cleaning another animal's fur: [grooming]\n2. neither positive nor negative: [neutral]\n3. a fixed, often wrong idea about a group of people: a [stereotype]\n4. money you pay before renting and get back later: a [deposit]\n5. very unkind: [nasty]\n6. interesting because it's shocking or private (a story): [juicy]",
    ),
  ]),

  section("Grammar: He says it's true — he said it was true", [
    quiz("Notice the rule 🔍 Look: “He says that gossip is the human version of grooming.” · “They found that people gossiped for about 52 minutes a day.” · “He argues that language took over this job.”", [
      { q: "After says (present), the tense…", options: ["*doesn't change", "goes one step back", "always becomes past perfect"] },
      { q: "“They found that people gossiped…” — the tense changed because…", options: ["*found is in the past", "the fact is false", "it's a question"] },
      { q: "“Dunbar found that two thirds of conversation IS social” is also correct because…", options: ["*it's still true now", "it's a question", "it's informal"] },
    ]),
    table("reported-tenses"),
    choose(
      "Choose. Sometimes both are correct — choose the one that fits the note in brackets.",
      "1. She says she [*is/was] tired. (she's tired now)\n2. He told me he [*was going/is going] to Paris last summer. (finished)\n3. Our teacher told us the Earth [*goes/went] around the Sun. (a general truth)\n4. Madina just said she [*'ll be/would be] here in five minutes. (it's still true)\n5. My grandfather told me he [*had grown up/grows up] in a village. (the past)\n6. The doctor says I [*need/needed] more sleep. (says = present)\n7. Asel asked me where I [*lived/do I live].\n8. He asked me [*not to tell/don't tell] anyone.",
    ),
    gaps(
      "Report the sentences. Change the tense only if you need to.",
      "1. “I'm moving to Astana.” (Aliya said yesterday — she hasn't moved yet) → Aliya said she [is moving/was moving] to Astana.\n2. “I've lost my keys.” (Leo said last week) → Leo said he [had lost] his keys.\n3. “Water boils at 100 degrees.” (Our teacher said) → Our teacher said water [boils] at 100 degrees.\n4. “The bakery uses frozen dough.” (The reviewer claims) → The reviewer claims the bakery [uses] frozen dough.\n5. “Where do you buy your bread?” (She asked me) → She asked me where I [bought/buy] my bread.\n6. “Please don't share the review.” (Asel asked us) → Asel asked us [not to share] the review.",
    ),
  ]),

  section("Grammar: People say… He's said to…", [
    drag(
      "Complete the rumor. (Review from 6.1!)",
      "There's a new neighbor in our building. He is [said] to be a famous chef. He is believed [to] have worked in Paris for ten years. Some neighbors say he [is] writing a cookbook. It is [thought] that he left the restaurant after an argument. Mrs. Lee told me he [has] already invited her for dinner. But honestly, I'd take it all [with] a pinch of salt. 🧂",
      ["says", "having", "from"],
    ),
    match("Who's speaking? Match the direct speech and the report.", [
      ["“I'll never trust him again.”", "She said she would never trust him again."],
      ["“Can you keep a secret?”", "He asked if I could keep a secret."],
      ["“Don't believe everything you read.”", "My dad told me not to believe everything I read."],
      ["“We've been friends for years.”", "They said they had been friends for years."],
      ["“Honesty is the best policy.”", "Grandma always says honesty is the best policy."],
      ["“Where did you hear that?”", "She asked me where I had heard that."],
    ]),
    order("Make sentences.", [
      "He says he is very busy.",
      "She told me she had never been there.",
      "They asked me where I lived.",
      "The teacher said the Earth goes around the Sun.",
      "He is said to be very rich.",
    ]),
    tip("The rule of thumb: when the reporting verb is past, change the tense if the situation may have changed or is finished; keep it if it's still true and you agree with it. Both are often possible: *She said she's / she was tired.* In exams, the backshift is always safe."),
  ]),

  section("Video: How miscommunication happens", [
    video("Watch: TED-Ed — How miscommunication happens (and how to avoid it).", "gCfzeONu3Mo"),
    text(
      "After the video: talk about it.",
      "- Why do two people often understand the same message differently?\n- How can a rumor change as it passes from person to person? Have you ever played “broken telephone”? 📞\n- What can we do to avoid misunderstandings in messages and chats?",
    ),
    tip("Connect to 7.1: many arguments start with a misunderstanding. Ask the student to report one idea from the video: *She says that we… / The video explains that…* (no backshift: still true)."),
  ]),

  section("Listening: One star", [
    tip("A long listening — about 3 minutes 15 seconds. Asel's bakery got a terrible online review, and a rumor started. She asks Madina for advice. First listen: *What does Madina advise Asel to do?* Second listen: the tasks."),
    ...listening(
      "Listen to Asel and Madina talking about a bad review.",
      "**Asel:** Madina, look at this. Just look at it. One star.\n\n**Madina:** Let me see. \"The worst bakery in the city. The bread is stale, the staff are rude, and everyone knows they use frozen dough from a factory.\" Wow.\n\n**Asel:** Frozen dough! I get up at five every morning to make that dough by hand! And the review says the staff are rude. My staff are the kindest people I know.\n\n**Madina:** When was it posted?\n\n**Asel:** Last night. And it's already got forty likes. This morning, two customers asked me if it was true that we buy our bread from a factory. One of them said her neighbor had told her the same thing. So now it's a rumor, not just a review. A woman who has been coming every Saturday for three years told me she'd always thought my bread tasted homemade, and now she wasn't sure. That hurt more than the review.\n\n**Madina:** Okay. First, take a deep breath. Who wrote it?\n\n**Asel:** That's the strange part. The account is new. No photo, no other reviews. And the review says they visited on Monday. We're closed on Mondays.\n\n**Madina:** So it's probably fake. Do you have any idea who might have written it?\n\n**Asel:** Well, a new bakery opened across the street last month. People say the owner is very competitive. He's said to have done something similar to a café in his old neighborhood. But I don't know. I don't want to accuse anyone without proof.\n\n**Madina:** Good. Don't. That's how you end up spreading rumors yourself. Give him the benefit of the doubt for now. What you can do is report the review to the website. You can show them that you're closed on Mondays. They often remove fake reviews if you can prove it.\n\n**Asel:** And should I answer it? I really want to write something angry.\n\n**Madina:** Answer it, but not angrily. Something short and polite. Say you're sorry they had a bad experience, explain that you're closed on Mondays, and that every loaf is made by hand every morning. Then invite them to come and see the kitchen.\n\n**Asel:** Invite them? After what they said?\n\n**Madina:** You're not writing for them. You're writing for the hundred people who'll read the review next. If they see a calm, kind answer, they'll trust you more, not less. Your reputation is built on years of good bread. One fake review won't destroy it.\n\n**Asel:** That's true. Most of my customers came by word of mouth anyway.\n\n**Madina:** Exactly. And here's an idea: why don't you open the kitchen to customers one Saturday morning? Let people watch you bake. We could film it for your page. Nothing kills a rumor faster than the truth.\n\n**Asel:** An open kitchen day. I like that. My grandmother always said a good name is worth more than gold.\n\n**Madina:** She was right. And Asel — whatever you do, don't go across the street and shout at the other baker.\n\n**Asel:** I promise. Although I might send him a loaf of bread. Freshly baked. By hand.\n\n**Madina:** That's the most polite threat I've ever heard.",
    ),
    quiz("Listen and choose.", [
      { q: "What does the review claim?", options: ["*The bakery uses frozen dough from a factory.", "The bakery is too expensive.", "The bakery is always closed."] },
      { q: "Why does Asel think the review is fake?", options: ["*The account is new and it mentions a Monday visit.", "Her friend wrote it.", "It has a photo."] },
      { q: "Why doesn't Asel accuse the new baker?", options: ["*She has no proof.", "She likes him.", "He apologized."] },
      { q: "Who does Madina say Asel is writing her answer for?", options: ["*the people who'll read the review next", "the reviewer", "the website"] },
      { q: "What is Madina's idea?", options: ["*an open kitchen day", "a discount for everyone", "a new bakery name"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The review was posted last night.", true],
      ["Asel's bakery is closed on Mondays.", true],
      ["Madina tells Asel to write an angry answer.", false],
      ["Most of Asel's customers found the bakery through adverts.", false],
      ["Asel's grandmother said a good name is worth more than gold.", true],
      ["Asel promises not to shout at the other baker.", true],
    ]),
    gaps(
      "Report what they said.",
      "1. Asel: “I make the dough by hand.” → Asel says she [makes] the dough by hand.\n2. A customer asked: “Is it true?” → A customer asked [if/whether] it was true.\n3. The new baker is said [to] have done something similar before.\n4. Madina advised Asel [to] answer politely.\n5. Madina told her [not] to accuse anyone without proof.\n6. Asel promised [not] to shout at the other baker.",
    ),
  ]),

  section("Let's talk: Can you trust it?", [
    text(
      "🧂 Trust it or not?",
      "Discuss with your teacher:\n\n- A restaurant has 4.9 stars and 2,000 reviews, but your friend says the food is terrible. Who do you believe?\n- A colleague tells you a rumor about your boss. What do you do?\n- Is it ever OK to write a fake review — for example, to help a friend's small business?\n- Is a white lie ever better than the truth?\n\nReport what your teacher says during the discussion: *You said that… You think that…* 😉",
    ),
    tip("Model the reporting: *So you're saying that… Earlier you said you'd never…* Encourage both no-backshift (*You said you trust…*) and backshift (*You said you trusted…*) and discuss the difference."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She says she ___ hungry. (now)", options: ["*is", "had been", "would be"] },
      { q: "He asked me where I ___ from.", options: ["*was", "am I", "was I"] },
      { q: "The new chef is said ___ in Paris.", options: ["*to have worked", "working", "that he worked"] },
      { q: "Most of our customers come by word of ___.", options: ["*mouth", "lips", "voice"] },
    ]),
    box(
      "Phrase of the day: a good name is worth more than gold",
      "🏅 Asel's grandmother's proverb (it exists in many languages!): your reputation is your most valuable possession.\n\n*Is there a similar proverb in your language?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose the better option.",
        "1. My doctor says I [*should/should have] drink more water.\n2. He told us last week that he [*had found/has found] a new job.\n3. She asked me [*what time it was/what time was it].\n4. Galileo said the Earth [*moves/moved] — and he was right!\n5. They asked us [*not to make/don't make] noise.\n6. The singer is rumored [*to be/being] in town.",
      ),
      gaps(
        "Complete with one word.",
        "1. The restaurant has an excellent [reputation].\n2. Don't spread [rumors] about people you don't know!\n3. I'd take that story with a pinch of [salt].\n4. It takes time to [earn] someone's trust.\n5. Telling Grandma you love her soup is a white [lie]. 😄\n6. She's honest and reliable — totally [trustworthy].",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      sort("Report the sentences in your head, then sort: does the tense HAVE to change? 🧩", {
        "✅ must change (it's finished / not true any more)": [
          "“I'm on holiday in Spain.” (she said last year)",
          "“I'm 12.” (he said in 2015)",
          "“I'm waiting outside.” (he said an hour ago — he's gone now)",
          "“I've never flown.” (she said before her first flight last month)",
        ],
        "🤝 can stay (still true)": [
          "“Paris is the capital of France.” (he said)",
          "“I love chocolate.” (she said yesterday)",
          "“Our shop opens at 8.” (they said)",
          "“I live in Almaty.” (she said last week)",
        ],
      }),
      write("Write an answer (140–190 words) to a fake one-star review of a small business (a café, a shop, a language school…). Stay calm and polite, report what the review says, explain the facts and invite the writer to visit. Use reported speech at least four times.", 140),
      record("Record a 1-minute answer: “Do you trust online reviews? Why (not)?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
