import {
  box,
  choose,
  drag,
  gaps,
  homework,
  listening,
  lesson,
  match,
  order,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 0 Entry test — a check of A2 before the B1 course: grammar, vocabulary, listening, reading, writing, speaking. Every task gives points.
export default lesson("b1-0.1", "Entry test: A2 check", () => [
  section("Warm-up: Welcome to B1!", [
    box(
      "Today you will…",
      "- check your A2 English — it's not an exam, it's a map! 🗺️\n- see what you know well and what to review\n- meet your teacher and the B1 course 🚀",
    ),
    tip(
      "Tell the student: mistakes are OK — the test shows what to review. Don't help during the tasks. Score guide: 80%+ → ready for B1; 60–80% → start B1 and review the weak topics in the warm-ups; under 60% → review modules of English A2 first.",
    ),
    text(
      "Talk to your teacher.",
      "- When did you last really need English? What happened — and how did it go?\n- What can you already do in English that you couldn't do a year ago?\n- Imagine it's one year from now and your English is much better. What are you doing with it? 🎯",
    ),
  ]),

  section("Grammar: past and present perfect", [
    choose(
      "Past Simple or Past Continuous? Choose.",
      "1. I [*was walking/walked] home when it started to rain.\n2. While we [*were having/had] dinner, the lights went out.\n3. She [*didn't hear/wasn't hearing] the phone because the music was loud.\n4. What [*were you doing/did you do] at nine last night? — I was watching a film.\n5. When the teacher came in, we [*stopped/were stopping] talking.\n6. He [*broke/was breaking] his arm when he was skiing.\n7. When I looked out of the window, it [*was snowing/snowed].\n8. My parents [*met/were meeting] at university in 1998.",
    ),
    choose(
      "Present Perfect or Past Simple? Choose.",
      "1. We [*moved/have moved] to Almaty in 2019.\n2. I [*have lived/live] here since I was ten.\n3. [*Did you see/Have you seen] the match last night?\n4. I [*have known/know] Dana for five years.\n5. How long [*have you had/do you have] your phone?\n6. They [*got/have got] married two years ago.\n7. I [*have visited/visit] five countries so far.\n8. When [*did you start/have you started] learning English?",
    ),
    drag(
      "Complete the sentences.",
      "1. I've lived in this flat [since] 2020.\n2. We've been friends [for] ten years.\n3. Have you finished your homework [yet]?\n4. I've [already] seen this film — twice!\n5. Has she [ever] been to Paris?\n6. I've [never] eaten sushi. I want to try it!\n7. Sorry, Dana isn't here. She's [just] gone out.\n8. I haven't seen him [since] Monday.",
      ["ago", "during"],
    ),
  ]),

  section("Grammar: the future and modal verbs", [
    choose(
      "will, going to or Present Continuous? Choose.",
      "1. Look at those black clouds! It [*'s going to/will] rain.\n2. I'm [*meeting/meet] Arman at six tomorrow — we booked a table.\n3. A: I'm cold. B: [*I'll close/I close] the window.\n4. We've bought the tickets — we [*'re going to/will to] visit Rome in June.\n5. I don't think the test [*will/is going] be difficult.\n6. [*Shall/Do] we go for a walk after class?\n7. She [*might/must] come to the party — she isn't sure yet.\n8. If you're tired, I [*'ll drive/drive].",
    ),
    choose(
      "must, have to or should? Choose.",
      "1. You look tired. You [*should/must to] go to bed early.\n2. At our school, students [*have to/has to] wear a uniform.\n3. You [*mustn't/don't have to] use your phone during the exam.\n4. It's Sunday tomorrow, so I [*don't have to/mustn't] get up early.\n5. You [*should/shouldn't] see a doctor about that cough.\n6. [*Do you have to/Must you to] work on Saturdays?\n7. Drivers [*must/must not] stop at a red light.\n8. She [*didn't have to/mustn't] pay — the concert was free.",
    ),
  ]),

  section("Grammar: more", [
    gaps(
      "Complete with the right form of the word in brackets.",
      "1. This phone is [cheaper] than that one. (cheap)\n2. It's the [best] café in town. (good)\n3. My new flat is [bigger] than my old one. (big)\n4. Today is the [hottest] day of the year. (hot)\n5. If it [rains], we'll stay at home. (rain)\n6. If you [study] hard, you'll pass the exam. (study)\n7. He drives very [carefully]. (careful)\n8. I'm not as [tall] as my brother. (tall)",
    ),
    choose(
      "Quantities, too and enough: choose.",
      "1. How [*much/many] time do we have?\n2. There are only [*a few/a little] people here.\n3. Can I have [*a little/a few] sugar in my tea?\n4. This coffee is [*too/enough] hot to drink.\n5. I'm not old [*enough/too] to drive.\n6. We don't have [*enough money/money enough] for a taxi.\n7. There's [*too much/too many] noise in this café.\n8. I didn't buy [*anything/something] at the market.",
    ),
    choose(
      "Choose the right word.",
      "1. The film was really [*boring/bored]. I fell asleep!\n2. I was [*surprised/surprising] by the ending.\n3. That's the woman [*who/which] lives next door.\n4. This is the book [*that/who] changed my life.\n5. I enjoy [*cooking/to cook] for my friends.\n6. Last year I decided [*to learn/learning] Spanish.\n7. Is this bag [*yours/your]?\n8. [*Whose/Who's] phone is this?",
    ),
  ]),

  section("Listening", [
    ...listening(
      "Listen. Emma meets her friend Tom. He has a new job in another city.",
      "**Emma:** Tom! I haven't seen you for ages! How's the new job?\n**Tom:** Hi, Emma! It's great, thanks. I started in March, so I've been there for about three months now.\n**Emma:** And you moved to Astana for it, right? Was it difficult?\n**Tom:** At first, yes. I didn't know anyone, and it was really cold — minus thirty in February! But my colleagues are very friendly. Last weekend they took me ice skating. I fell down about ten times!\n**Emma:** Ha! And where do you live? In the city center?\n**Tom:** No, I found a flat near the river. It's smaller than my old one, but it's cheaper, and I can walk to work in fifteen minutes.\n**Emma:** Nice. So, are you going to stay there?\n**Tom:** I think so. My contract is for two years. But I miss my family, so I'm coming home in August for two weeks.\n**Emma:** Great! We should meet then. There's a jazz festival in the park in August.\n**Tom:** Perfect. I'll buy the tickets — it's my turn!",
    ),
    quiz("Listen and choose.", [
      { q: "How long has Tom had his new job?", options: ["*about three months", "about three weeks", "two years"] },
      { q: "What did Tom do last weekend?", options: ["*He went ice skating.", "He moved to a new flat.", "He visited his family."] },
      { q: "Tom's new flat is…", options: ["*smaller and cheaper", "bigger and cheaper", "smaller and more expensive"] },
      { q: "How does Tom get to work?", options: ["*He walks.", "He takes the bus.", "He drives."] },
      { q: "When is Tom coming home?", options: ["*in August", "in March", "in February"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Tom knew a lot of people in Astana when he arrived.", false],
      ["The weather was very cold in February.", true],
      ["Tom fell down several times on the ice.", true],
      ["His contract is for one year.", false],
      ["Tom is going to pay for the festival tickets.", true],
    ]),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "💼 Work": ["colleague", "salary", "deadline"],
      "✈️ Travel": ["luggage", "delay", "boarding pass"],
      "🩺 Health": ["headache", "medicine", "appointment"],
      "😊 Feelings": ["excited", "nervous", "disappointed"],
    }),
    match("Match the verbs and the words.", [
      ["make", "a decision"],
      ["do", "homework"],
      ["take", "a photo"],
      ["have", "a shower"],
      ["go", "shopping"],
      ["catch", "a bus"],
    ]),
    gaps(
      "Write the word.",
      "1. The money you pay every month to live in a flat: [rent]\n2. A person who lives next door: a [neighbor/neighbour]\n3. A place where you can borrow books: a [library]\n4. The opposite of \"borrow\": [lend]\n5. A place where planes arrive and leave: an [airport]\n6. The meal in the middle of the day: [lunch]",
    ),
    quiz("Choose the right word.", [
      { q: "I'm really ___ about my trip to Japan!", options: ["*excited", "exciting", "excite"] },
      { q: "Can I ___ on this jacket?", options: ["*try", "wear", "dress"] },
      { q: "Our flight is ___ — we have to wait two hours.", options: ["*delayed", "closed", "missed"] },
      { q: "My friend ___ me some good advice.", options: ["*gave", "made", "did"] },
    ]),
  ]),

  section("Reading", [
    trueFalse(
      "Read Ruslan's blog post. True or false?",
      [
        ["People in Ruslan's city usually drive.", true],
        ["The first month without a car was easy.", false],
        ["Once he waited forty minutes for a bus.", true],
        ["Cycling to work is much slower than driving.", false],
        ["He has saved money this year.", true],
        ["He's going to buy a car this year.", false],
      ],
      {
        read: [
          "## 🚲 My year without a car",
          "Last January I sold my car. Everyone thought I was crazy — in my city, people drive everywhere! But I wanted to save money and be healthier.",
          "The first month was hard. It was cold, and I was often late for work because I didn't know the bus times. Once I waited forty minutes at a bus stop in the snow. ❄️",
          "Then things got better. I bought a good bike, and since April I've cycled to work every day. It takes 25 minutes — only ten minutes more than by car! I've lost six kilos, and I've saved about $2,000. 💰",
          "Of course, there are problems. When I visit my parents in the village, I have to take a taxi, and shopping is more difficult. My friends sometimes laugh at my helmet. 😄",
          "Am I going to buy a car again? Maybe one day, when I have kids. But not this year!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Ruslan sell his car?", options: ["*to save money and be healthier", "because it was old", "because he moved to a village"] },
      { q: "When did he start cycling to work?", options: ["*in April", "in January", "last year"] },
      { q: "What is difficult without a car?", options: ["*visiting his parents and shopping", "getting to work", "meeting his friends"] },
      { q: "His friends…", options: ["*sometimes laugh at his helmet", "want to buy bikes too", "drive him to work"] },
    ]),
  ]),

  section("Writing and speaking", [
    order("Make sentences.", [
      "Have you ever been to London?",
      "I've lived here for five years.",
      "What were you doing at eight o'clock?",
      "She's going to start a new job next month.",
      "If it rains, we'll stay at home.",
    ]),
    write(
      "Write a comment to Ruslan's post. How do you get to work or school? Would you like to live without a car? Why or why not? (60+ words)",
      60,
    ),
    text(
      "Speaking: talk to your teacher for 2–3 minutes 🗣️",
      "- A change in your life in the last year: *I've started… I moved… I've been…*\n- A day you remember well: *I was … when suddenly…*\n- Your plans for next year: *I'm going to… I might… I'll probably…*\n- Your town now and ten years ago: *It's bigger / busier… There are more…*\n\nYour teacher listens and makes notes. 📝",
    ),
  ]),

  section("Your result", [
    tip(
      "Look at the points together. Write down 2–3 weak topics (for example: Present Perfect vs Past Simple, will / going to). In the next lessons the warm-ups help to review them. Under 60%? Choose lessons from English A2 for review first.",
    ),
    box(
      "What's next? 🚀",
      "In **English B1** you will:\n\n- tell longer stories and news 📰\n- talk about work, study and your future 💼\n- discuss relationships, media and fake news 🤝\n- say what you would do *if…* 🤔\n- write emails and articles and get ready for the **Cambridge B1 Preliminary** exam format 🎓",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with the right form of the verb in brackets.",
        "1. I [have known/'ve known] Asel since we were kids. (know)\n2. Yesterday we [went] to the cinema. (go)\n3. Look! The bus [is coming/'s coming]! (come)\n4. When I called, she [was cooking] dinner. (cook)\n5. I [have never been/'ve never been] to Turkey. (never / be)\n6. Next summer we [are going to travel/'re going to travel] to Georgia. (travel)\n7. If you [hurry], you'll catch the train. (hurry)\n8. He [doesn't eat] meat — he's a vegetarian. (not / eat)",
      ),
      choose(
        "Choose.",
        "1. How [*many/much] languages do you speak?\n2. This bag is [*heavier/more heavy] than mine.\n3. You [*shouldn't/don't should] eat so much sugar.\n4. I've been here [*for/since] two hours.\n5. I'm [*bored/boring] — let's do something!\n6. She's the girl [*who/which] won the race.\n7. We [*didn't have to/mustn't] wait — the doctor saw us at once.\n8. I think it [*will/is] be sunny tomorrow.",
      ),
      write("What is the most difficult thing in English for you? What are you going to do about it this year? (50+ words)", 50),
      record("Record a 1-minute introduction: who you are, what you do, and why you want to reach B1. 🎤", 60),
    ],
    "Homework: Review",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["I have seen him yesterday.", false],
        ["She has worked here since 2021.", true],
        ["We was watching TV when you called.", false],
        ["It's the most expensive hotel in the city.", true],
        ["If it will rain, we'll stay at home.", false],
        ["You don't have to come — it's not important.", true],
        ["There isn't enough chairs for everyone.", false],
        ["I'm going to visit my grandma on Sunday.", true],
      ]),
    ],
    "Homework: Grammar check",
  ),
]);
