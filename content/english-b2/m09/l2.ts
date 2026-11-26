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

// 9.2 Innocent until proven guilty — G: review of the passive with modals: present / future (must be proved, should be punished, can't be used) and past (could have been prevented, should have been told, might have been influenced). V: law and courts (a judge, a jury, a defendant, a verdict, a sentence, a fine, community service, plead guilty / not guilty, convict, acquit). S: discuss punishments. Main format: "from crime to sentence" order + a long reading (when witnesses get it wrong — Loftus, the Innocence Project, Jennifer Thompson and Ronald Cotton, ~570 words) + TED talk (Elizabeth Loftus) + a long listening (Laura tells Kenji about her jury service in Manchester; Kenji explains Japan's lay judges, ~3:15) + a discussion of punishments.
// Facts checked: Elizabeth Loftus and John Palmer (1974): people who saw a film of a car accident estimated higher speeds when asked how fast the cars were going when they "smashed" into each other than when they "hit" or "contacted" each other, and more of them later "remembered" broken glass that wasn't there; the Innocence Project was founded in 1992 by Barry Scheck and Peter Neufeld; eyewitness misidentification played a part in about 7 out of 10 of the more than 375 US convictions overturned by DNA evidence; in 1984 Jennifer Thompson identified Ronald Cotton as the man who had attacked her; he spent more than ten years in prison before DNA evidence cleared him in 1995; they later became friends and wrote a book together, "Picking Cotton" (2009). In England and Wales, a jury has 12 people chosen at random from the electoral register; after a time, the judge can accept a majority verdict (e.g. 10–2); jurors must not discuss the case with anyone outside the jury. Since 2009, Japan has used "saiban-in" (lay judges): in serious criminal trials, six citizens decide together with three professional judges. Characters: Laura (from Manchester, an English teacher in Almaty), Kenji (from Japan, works at a tech company).
export default lesson("b2-9.2", "Innocent until proven guilty", () => [
  section("Warm-up: From crime to sentence", [
    box(
      "Today you will…",
      "- learn how a criminal case works — from the crime to the sentence ⚖️\n- find out why witnesses sometimes remember things that never happened 🧠\n- discuss what punishments are fair 🤔",
    ),
    order(
      "Put the stages of a criminal case in order. ⚖️",
      [[
        "A crime is reported to the police.",
        "The police investigate and collect evidence.",
        "A suspect is arrested and questioned.",
        "The suspect is charged with the crime.",
        "The case goes to court, and both sides present their evidence.",
        "The jury or the judge reaches a verdict.",
        "If the defendant is found guilty, the judge passes a sentence.",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- What does “innocent until proven guilty” mean? Why is it important?\n- Do you know any famous trials — real or from films and series? 🎬\n- Would you like to be a judge or a lawyer? Why (not)?",
    ),
    tip("Notice the passives in the stages: *is reported, is arrested, is charged, is found guilty* — today we review the passive with modals."),
  ]),

  section("Vocabulary: Law and courts", [
    words("Law and courts", [
      ["a judge", "👩‍⚖️ the person in charge of a court"],
      ["a jury", "👥 a group of ordinary citizens who decide if someone is guilty"],
      ["the defendant", "🧍 the person accused of a crime in court"],
      ["a verdict", "🔨 the decision: guilty or not guilty"],
      ["a sentence", "⛓️ the punishment the judge gives"],
      ["a fine", "💶 money you must pay as a punishment"],
      ["community service", "🧹 unpaid work for the community as a punishment"],
      ["plead guilty / not guilty", "🙋 say in court that you did / didn't do it"],
      ["convict — acquit", "✅ decide someone is guilty — ❎ decide someone is not guilty"],
      ["prove", "📁 show that something is true with evidence"],
    ]),
    match("Match.", [
      ["The jury reached", "a verdict after two days."],
      ["The judge gave him", "a sentence of five years."],
      ["She had to pay", "a fine of $500."],
      ["He was ordered to do", "200 hours of community service."],
      ["The defendant pleaded", "not guilty."],
      ["There wasn't enough evidence, so he was", "acquitted."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. In some countries, a [jury] of twelve citizens decides the case.\n2. The [judge] asked everyone to be quiet.\n3. The [defendant] said he was at home that night.\n4. The prosecution must [prove] that he is guilty.\n5. He was [convicted] of theft and sent to prison.\n6. Parking in the wrong place can get you a [fine].",
    ),
  ]),

  section("Reading: When witnesses get it wrong", [
    tip("A long text (~570 words). First reading — 5 minutes: *Why are eyewitnesses less reliable than people think?* Then the tasks. Ask the student to underline every modal passive (*could have been prevented…*)."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In Loftus's experiment, the word “smashed” made people remember a higher speed.", true],
        ["Some people remembered broken glass that wasn't in the film.", true],
        ["Jennifer Thompson was lying when she identified Ronald Cotton.", false],
        ["Ronald Cotton spent more than ten years in prison.", true],
        ["Thompson and Cotton never spoke to each other.", false],
        ["The writer says eyewitness evidence should never be used.", false],
      ],
      {
        read: [
          "## 👁️ When witnesses get it wrong",
          "For centuries, courts have trusted one kind of evidence above almost all others: a witness who says, \"I saw him. I'm sure it was him.\" Juries find this very convincing. After all, why would an honest person get it wrong? But psychologists have discovered that memory is not like a video recording. It's more like a story we tell again every time we remember — and each time, it can change.",
          "In a famous experiment in 1974, the psychologist Elizabeth Loftus showed people a short film of a car accident. Afterwards, she asked them questions about it. Some were asked, \"How fast were the cars going when they hit each other?\" Others were asked, \"How fast were they going when they smashed into each other?\" The people who heard \"smashed\" estimated much higher speeds. A week later, they were also more likely to say that they had seen broken glass at the scene. There was no broken glass in the film. A single word had changed their memory.",
          "In real life, the consequences can be terrible. In 1984, a young American student, Jennifer Thompson, was attacked in her home. During the attack, she tried hard to remember every detail of the man's face, so that he could be caught. Later, she picked out Ronald Cotton from photos and then from a line-up at the police station. In court, she was completely confident. Cotton was convicted and sent to prison for life.",
          "But Cotton was innocent. In prison, he met another man who had been convicted of similar crimes and who looked like him. Years later, DNA tests proved that this other man was guilty. In 1995, after more than ten years in prison, Ronald Cotton was released. Jennifer Thompson was devastated. She had been honest; her memory had simply been wrong. When she met Cotton to apologize, he forgave her. They became friends, and together they wrote a book about the case and began campaigning to change how witnesses are questioned.",
          "Their story is not unusual. Since 1992, an organization called the Innocence Project has helped to free hundreds of people in the United States who were convicted of crimes they didn't commit. In about seven out of ten of the cases that were overturned by DNA evidence, a mistaken eyewitness played a part.",
          "So what should be done? Experts agree on a few simple changes. Line-ups should be organized by an officer who doesn't know who the suspect is, so that they can't influence the witness — even without meaning to. Witnesses should be told that the guilty person might not be in the line-up at all. And their confidence should be recorded immediately, before it grows. Many of these mistakes could have been prevented if such rules had been followed earlier.",
          "None of this means that witnesses are useless. Most of them are honest, and many are right. But a confident witness is not the same as a correct one. Justice depends on remembering that our memories are human too. ⚖️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Loftus's experiment show?", options: ["*The words in a question can change a memory.", "People remember accidents perfectly.", "Films are better than real life."] },
      { q: "Why was Jennifer Thompson so sure?", options: ["*She had tried hard to remember the man's face.", "She knew Ronald Cotton.", "The police told her who it was."] },
      { q: "How was Ronald Cotton proved innocent?", options: ["*DNA tests showed another man was guilty.", "Thompson changed her story.", "A new witness appeared."] },
      { q: "Why should line-ups be organized by an officer who doesn't know the suspect?", options: ["*so that the officer can't influence the witness", "to make them faster", "because it's cheaper"] },
      { q: "What is the writer's main message?", options: ["*A confident witness is not always a correct one.", "Witnesses always lie.", "DNA is never wrong."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. making you believe something is true: [convincing]\n2. guessed a number or amount: [estimated]\n3. a row of people the witness looks at to find the criminal: a [line-up]\n4. extremely upset: [devastated]\n5. stopped being angry with someone: [forgave]\n6. officially cancelled (a decision of a court): [overturned]",
    ),
  ]),

  section("Grammar: It should have been prevented", [
    quiz("Notice the rule 🔍 Look: “Line-ups should be organized by an officer who doesn't know the suspect.” · “Many of these mistakes could have been prevented.” · “So that he could be caught.”", [
      { q: "“should be organized” is…", options: ["*a modal passive about the present / future", "a modal passive about the past", "active"] },
      { q: "“could have been prevented” is about…", options: ["*the past — something that didn't happen", "the future", "a habit"] },
      { q: "The pattern for the past is…", options: ["*modal + have been + 3rd form", "modal + be + 3rd form", "modal + had + 3rd form"] },
    ]),
    table("modal-passive"),
    choose(
      "Choose.",
      "1. Criminals [*should be punished/should punish] fairly.\n2. The accident [*could have been prevented/could prevent] with better lights.\n3. His guilt [*must be proved/must prove] in court.\n4. The witness [*might have been influenced/might have influenced] by the police.\n5. Phones [*mustn't be used/mustn't use] in the courtroom. 📵\n6. He [*should have been told/should have told] about his rights when he was arrested.\n7. The case [*will be heard/will hear] next month.\n8. The painting [*can't have been stolen/can't have stolen] — it's still on the wall!",
    ),
    gaps(
      "Complete with the modal passive. Use the words in brackets.",
      "1. Young offenders [should be given] a second chance. (should / give)\n2. The fire [could have been prevented]. (could / prevent)\n3. Evidence [must be collected] carefully. (must / collect)\n4. The witness [should have been asked] simpler questions. (should / ask)\n5. The money [might have been taken] by someone in the office. (might / take)\n6. Drivers who use phones [ought to be fined]. (ought to / fine)",
    ),
  ]),

  section("Language: Talking about justice", [
    sort("What do you think is a fair punishment? Sort. (Your opinion — compare with your teacher! 😄)", {
      "🧹 community service or a fine": [
        "painting graffiti on a school",
        "driving 30 km/h over the speed limit",
        "shoplifting for the first time",
        "dropping litter in a park",
      ],
      "⛓️ prison": [
        "robbing a bank with a weapon",
        "a hit-and-run accident",
        "stealing millions from pensioners",
        "violently attacking someone",
      ],
    }),
    drag(
      "Complete the opinion.",
      "In my opinion, people who commit small crimes should [be] given community service, not prison. Prison [should] be used for dangerous criminals. Many crimes could have been [prevented] if young people had had better opportunities. Of course, the victims must [be] listened to. And innocent people should never have [been] sent to prison — that's why evidence must be [checked] very carefully. ⚖️",
      ["being", "must have", "prevent"],
    ),
    order("Make sentences.", [
      "Criminals should be punished fairly.",
      "The accident could have been prevented.",
      "Evidence must be checked carefully.",
      "He should have been told about his rights.",
      "The case will be heard next month.",
    ]),
    tip("Say it right: *should have been* /ʃʊdəv bɪn/ — very fast and weak; stress the main verb: *It could have been preVENted.* Typical mistakes: *should be punish* → *should be punished*; *could have prevented* (active!) when you mean the passive → *could have been prevented*."),
  ]),

  section("Video: How reliable is your memory?", [
    video("Watch: TED — Elizabeth Loftus, How reliable is your memory? Watch at least the first 8 minutes.", "PB2OegI6wvI"),
    text(
      "After the video: talk about it.",
      "- What is a “false memory”? Give an example from the talk.\n- Have you ever remembered something that turned out to be wrong? 🤔\n- After this, would you trust an eyewitness if you were on a jury?",
    ),
    tip("Loftus is the psychologist from the reading. Ask the student to use modal passives: *Memories can be changed… The witnesses might have been influenced…*"),
  ]),

  section("Listening: Twelve ordinary people", [
    tip("A long listening — about 3 minutes 15 seconds. Laura, from Manchester, tells Kenji about the time she was on a jury in England, and Kenji explains how ordinary citizens take part in trials in Japan. First listen: *What was the verdict in Laura's case?* Second listen: the tasks."),
    ...listening(
      "Listen to Laura and Kenji talking about juries.",
      "**Kenji:** Laura, you said you'd been on a jury once. What was that like?\n\n**Laura:** It was years ago, before I moved to Almaty. A letter just arrived one day: \"You have been selected for jury service.\" In England, jurors are chosen at random from the list of voters. You can't really say no, unless you have a very good reason.\n\n**Kenji:** Were you nervous?\n\n**Laura:** Terrified. I was twenty-four. I thought, \"Who am I to decide whether someone goes to prison?\"\n\n**Kenji:** What was the case?\n\n**Laura:** A young man was accused of breaking into an electronics shop at night and stealing laptops. He pleaded not guilty. The main evidence was CCTV footage and a witness, a man who lived opposite the shop.\n\n**Kenji:** That sounds quite strong.\n\n**Laura:** That's what we thought at first. But the video was very dark. You could see someone in a hood, but you couldn't see the face. And the witness had been looking from a window across the street, at three in the morning, in the rain. In court, he said he was absolutely certain. But then the defense lawyer showed that, the day before, the police had shown him a single photo of the defendant and asked, \"Is this the man?\"\n\n**Kenji:** Oh. So his memory might have been influenced by the photo.\n\n**Laura:** Exactly. He should have been shown a proper line-up with several people, not one photo. So we spent two days arguing in a small room. We weren't allowed to discuss the case with anyone outside — not even our families. In the end, ten of us agreed that we couldn't be sure. In England, the judge can accept a verdict of ten to two after a while. So he was found not guilty.\n\n**Kenji:** How did you feel?\n\n**Laura:** Strange. Part of me thought he might have done it. But \"might have\" isn't enough. The law says that guilt must be proved beyond reasonable doubt, and it hadn't been. I still think about it sometimes.\n\n**Kenji:** It's interesting. In Japan, for a long time, we didn't have juries at all. Only professional judges decided cases. But since 2009, there's a system called saiban-in — lay judges. For serious crimes, six ordinary citizens are chosen to sit together with three professional judges, and they decide the verdict and the sentence together.\n\n**Laura:** The sentence too? Not just guilty or not guilty?\n\n**Kenji:** Yes, the sentence too. My uncle was chosen a few years ago. He said it was the most stressful week of his life, but he was proud that ordinary people's views are included now.\n\n**Laura:** I like that. Do you think ordinary people should be involved in justice?\n\n**Kenji:** I think so. Judges see crimes every day; ordinary people can bring a different perspective. But they must be given good information. Like your witness — if the jury doesn't know how the evidence was collected, they can make terrible mistakes.\n\n**Laura:** Agreed. Twelve ordinary people can get it wrong. But twelve ordinary people asking the right questions can get it very right.",
    ),
    quiz("Listen and choose.", [
      { q: "How are jurors chosen in England, according to Laura?", options: ["*at random from the list of voters", "by the judge", "they volunteer"] },
      { q: "What was the defendant accused of?", options: ["*breaking into a shop and stealing laptops", "attacking a neighbor", "stealing a car"] },
      { q: "What was the problem with the witness?", options: ["*The police had shown him a single photo of the defendant.", "He was a friend of the defendant.", "He didn't come to court."] },
      { q: "What was the verdict?", options: ["*not guilty", "guilty", "The jury couldn't decide."] },
      { q: "What do Japan's lay judges decide?", options: ["*the verdict and the sentence, together with professional judges", "only the sentence", "only minor cases"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura was on a jury when she was twenty-four.", true],
      ["The CCTV video clearly showed the man's face.", false],
      ["Jurors could discuss the case with their families.", false],
      ["Ten of the twelve jurors agreed on the verdict.", true],
      ["Japan's lay judge system started in 2009.", true],
      ["Kenji's uncle enjoyed being a lay judge because it was relaxing.", false],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. You have been [selected] for jury service.\n2. So his memory might have been [influenced] by the photo.\n3. He should have been [shown] a proper line-up.\n4. We weren't [allowed] to discuss the case with anyone outside.\n5. Guilt must be [proved] beyond reasonable doubt.\n6. They must be [given] good information.",
    ),
  ]),

  section("Let's talk: What's fair?", [
    text(
      "⚖️ Discuss",
      "- Should ordinary citizens decide verdicts, or only professional judges? Why?\n- Is prison the best punishment for most crimes? What are the alternatives?\n- “It is better that ten guilty people escape than that one innocent person suffers.” (William Blackstone, 18th century) — do you agree?\n- Should young offenders be punished in the same way as adults?\n\nUse modal passives: *Criminals should be… Prison shouldn't be used for… Many crimes could be prevented if…*",
    ),
    tip("This leads to the formal debate in 9.4 (the motion there is about prisons). Collect the student's arguments in a list — they'll be useful next time."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The decision of a jury is a ___.", options: ["*verdict", "sentence", "fine"] },
      { q: "The accident could have ___ prevented.", options: ["*been", "be", "being"] },
      { q: "He was found not guilty — he was ___.", options: ["*acquitted", "convicted", "charged"] },
      { q: "Criminals should ___ punished fairly.", options: ["*be", "been", "have"] },
    ]),
    box(
      "Phrase of the day: innocent until proven guilty",
      "⚖️ A basic principle of justice in many countries: the court must prove that you are guilty — you don't have to prove that you're innocent.\n\n*Why do you think this principle is so important?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. The thief [*was sentenced/sentenced] to three years.\n2. Mistakes like this [*could have been avoided/could have avoided].\n3. Phones must [*be switched/switch] off in court.\n4. The witness [*should have been asked/should have asked] fairer questions.\n5. The verdict [*will be announced/will announce] tomorrow.\n6. He [*might have been seen/might have seen] by the neighbors.",
      ),
      gaps(
        "Complete with one word.",
        "1. The jury reached a [verdict] after five hours.\n2. She had to pay a [fine] for speeding.\n3. He pleaded [guilty] and said sorry to the victim.\n4. Instead of prison, he got 100 hours of community [service].\n5. The [judge] gave her a sentence of two years.\n6. The police couldn't [prove] that he was there.",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      match("Match.", [
        ["a judge", "the person in charge of a court"],
        ["a jury", "citizens who decide the verdict"],
        ["the defendant", "the person accused in court"],
        ["a sentence", "the punishment"],
        ["acquit", "decide someone isn't guilty"],
        ["convict", "decide someone is guilty"],
      ]),
      write("Write an opinion essay (140–190 words): “Ordinary citizens should help decide criminal cases.” Do you agree? Give two arguments and answer one argument from the other side. Use at least three modal passives.", 140),
      record("Record a 1-minute answer: “What is the fairest punishment for a teenager who painted graffiti on a school? Why?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
