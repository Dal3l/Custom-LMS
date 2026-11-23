import {
  picture,
  drag,
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 2.4 Revision 1–2 — points for every task, in the format of B1 Preliminary: Reading Parts 1, 5 and 6, Listening Part 1, Writing Part 1 (an email), Speaking Parts 3–4. Grammar: Present Perfect (Continuous), state verbs, question tags, Past Perfect, narrative tenses. Project: “A story that changed me”.
export default lesson("b1-2.4", "Revision 1–2", () => [
  section("Warm-up: Looking back", [
    box(
      "Today you will…",
      "- check what you've learned in modules 1 and 2 ✅\n- try tasks like in the **Cambridge B1 Preliminary** exam 🎓\n- start your project: *A story that changed me* 📖",
    ),
    trueFalse("Warm-up: find the mistakes! ✅❌ Correct or not?", [
      ["I've been knowing him for years.", false],
      ["When we arrived, the film had already started.", true],
      ["You're Dana's sister, aren't you?", true],
      ["While I walked home, it was starting to rain.", false],
      ["How long have you been learning English?", true],
      ["She was tired because she has worked all day.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- What have you been doing in English outside our lessons lately — series, music, games, chatting? 🎧\n- Which was more useful for your real life: the small talk lesson or the storytelling lessons? Why?\n- What's one thing you still find difficult? Be honest! 🙂",
    ),
    tip("Every task gives points. Don't help during the tasks; go through the answers after each part. Score guide for the whole lesson: 85%+ excellent; 70–85% good — review the weak topics in the next warm-ups; under 70% — repeat the grammar sections of the weak lessons. In the real exam, students have about 45 minutes for the Reading paper — tell them that Parts 1, 5 and 6 here are like the real thing."),
  ]),

  section("Reading Part 1: Short messages", [
    quiz("Read the messages. What do they say? Choose the right answer.", [
      { q: "📌 NOTICE: “Gym closed Monday–Wednesday for repairs. Members can use the pool as normal.”", options: ["*You can still swim on Tuesday.", "The pool is closed for three days.", "The gym will open on Wednesday."] },
      { q: "💬 Dana → Leo: “Running late — got held up at work. Start without me, I'll be there by 8. Order me a salad?”", options: ["*Dana wants Leo to order food for her.", "Dana can't come to dinner.", "Dana has already eaten."] },
      { q: "📧 “Your course starts on 3 March. Please bring a photo for your student card on the first day. Books are included in the price.”", options: ["*Students don't need to buy books.", "Students need to send a photo before 3 March.", "The first lesson is free."] },
      { q: "🚉 “Trains to the airport: every 20 minutes until 11 p.m. After that, please use the night bus from outside the station.”", options: ["*There are no trains to the airport at midnight.", "The night bus leaves every 20 minutes.", "The last bus leaves at 11 p.m."] },
      { q: "💬 Kenji → Asel: “Thanks for the tickets! I'd never been to a jazz concert before — I'm a fan now! Next time it's my turn to pay.”", options: ["*Kenji enjoyed his first jazz concert.", "Kenji paid for the tickets.", "Kenji had been to many jazz concerts."] },
    ]),
  ]),

  section("Reading Part 2: Find the right club", [
    match("Read about the people and the clubs. Which club is best for each person?", [
      ["Arman has just moved to the city and wants to meet people. He's very outgoing and loves sport.", "Sunday Football League — friendly games for all levels"],
      ["Saule is retired. She has always wanted to learn to paint but has never had time.", "Morning Watercolors — for complete beginners"],
      ["Kenji works long hours and wants to relax in the evenings without talking much.", "Evening Yoga & Meditation — quiet classes after 7 p.m."],
      ["Madina is studying design and wants to make her portfolio better.", "Creative Lab — weekly feedback on your projects"],
      ["Ben has been learning the guitar for a year and wants to play with other people.", "Open Jam Nights — bring your instrument and join in"],
      ["Dana is training for a marathon and needs people to run with.", "City Runners — group runs three times a week"],
    ]),
  ]),

  section("Reading Part 5: Choose the word", [
    choose(
      "Read the text and choose the best word for each gap.",
      "A new life by the sea 🌊\n\nThree years ago, Madina decided to [*give/take/put] up her job in the city and move to a small town by the sea. She [*had/has/was] always dreamed of opening a café. At first, it was difficult. She didn't know anyone, and it took her months to [*settle/stay/sit] in. Money was a problem too, and twice she almost [*ran/came/went] out of savings. But she didn't [*give/make/turn] back. Slowly, people started to come. \"I've been [*working/worked/work] here for three years now,\" she says. \"I've [*made/done/had] a lot of mistakes, but I've never felt so happy.\" Her café is now one of the most popular places in town, and in summer there's always a long [*queue/crowd/audience] outside.",
    ),
  ]),

  section("Reading Part 6: One word", [
    gaps(
      "Read the email. Write ONE word in each gap.",
      "Hi Ben,\n\nLong time no see! What have you been up [to] lately? I'm writing because I've got some news. Do you remember the band we saw last summer? Well, they're playing here again [on] 15 May, and I've already bought two tickets! 🎸 I've been listening to [their] new album all week — it's brilliant.\n\nBy the time I'd heard about the concert, most of the tickets [had] already gone, so I was really lucky. You're free that weekend, [aren't] you? We could have dinner before the show. I know a great place that [has] just opened near the stadium.\n\nLet me know as soon [as] you can!\n\nKate",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. I'm exhausted — I [*'ve been studying/'m studying/studied] since 7 a.m.\n2. We [*'ve known/'ve been knowing/know] each other for years.\n3. You're new here, [*aren't you/isn't it/don't you]?\n4. When we got to the station, the train [*had left/has left/was leaving].\n5. While I [*was walking/walked/had walked] home, I saw an old friend.\n6. How many books [*have you read/have you been reading/did you read since] this year?\n7. This soup [*tastes/is tasting/has been tasting] strange.\n8. She didn't come, [*did she/didn't she/was she]?",
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. How long [have you been learning] English? (you / learn)\n2. I [have never met/'ve never met] anyone so funny! (never / meet)\n3. When I opened the fridge, I saw that someone [had eaten/'d eaten] my cake. (eat)\n4. It [was raining] when we left the house. (rain)\n5. Sorry I'm late. [Have you been waiting] long? (you / wait)\n6. As soon as the film [finished], we went home. (finish)",
    ),
  ]),

  section("Vocabulary check", [
    match("Match the phrasal verbs and the meanings.", [
      ["take up", "start a hobby"],
      ["put off", "do it later"],
      ["catch up", "share the news with a friend"],
      ["set off", "start a journey"],
      ["run out of", "have none left"],
      ["turn back", "go back the same way"],
      ["break down", "stop working"],
      ["settle in", "feel at home in a new place"],
    ]),
    gaps(
      "Make the opposite.",
      "1. reliable → [unreliable]\n2. honest → [dishonest]\n3. patient → [impatient]\n4. responsible → [irresponsible]\n5. organized → [disorganized]\n6. polite → [impolite]",
    ),
    quiz("Choose the right word.", [
      { q: "Firefighters ___ three people from the burning building.", options: ["*rescued", "survived", "escaped"] },
      { q: "She's very ___ — she never changes her mind.", options: ["*stubborn", "generous", "curious"] },
      { q: "We need to ___ — I haven't seen you for months!", options: ["*catch up", "set off", "give up"] },
      { q: "The ___ sang every song with the band.", options: ["*crowd", "stage", "setlist"] },
    ]),
    sort("Sort the words. 🧩", {
      "😊 personality": ["reliable", "stubborn", "outgoing", "generous"],
      "📰 news verbs": ["rescue", "escape", "survive", "arrest"],
      "🎸 concerts": ["crowd", "stage", "performance", "audience"],
    }),
  ]),

  section("Grammar in a story", [
    drag(
      "Complete the story.",
      "Last year I [was] living in a small flat in the city center. One night, while I [was] sleeping, I heard a loud noise. I got up and saw that the window [had] broken — a football [had] flown through it! [As soon as] I looked outside, I saw two boys running away. The next day, they came back with their parents and said sorry. [Since] then, we've been good friends!",
      ["were", "has", "while", "for"],
    ),
  ]),

  section("Listening Part 1: Five short conversations", [
    tip("Like B1 Preliminary Listening Part 1: five short recordings, one question each. In the exam, students hear each recording twice."),
    ...listening(
      "Listen to five short conversations. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** Did you get to the concert in the end?\n\n**Man:** Yes, but the bus broke down, so I took a taxi. By the time I got there, the first band had finished. But I saw the main band, and they were brilliant.\n\n**2.**\n\n**Leo:** How long have you been working at the bookshop now?\n\n**Kate:** Since February. Before that I was at a café for two years. I love the bookshop — it's much quieter.\n\n**3.**\n\n**Man:** You look tired, Emma.\n\n**Emma:** I am. I've been painting my flat all weekend. I've done the kitchen and the bedroom, but the living room still isn't finished.\n\n**4.**\n\n**Asel:** So, how was the hike?\n\n**Ben:** Well, we set off early, but the weather was terrible, so we turned back after two hours. We had lunch in a café in the village instead. It was actually really nice!\n\n**5.**\n\n**Woman:** Hi, it's Dana. I'm calling about the guitar lessons. I'd like to sign up for the Thursday evening group, not Tuesday. Could you call me back? Thanks!",
    ),
    quiz("Listen and choose.", [
      { q: "1. What did the man miss at the concert?", options: ["*the first band", "the main band", "the whole concert"] },
      { q: "2. Where does Kate work now?", options: ["*in a bookshop", "in a café", "in a library"] },
      { q: "3. Which room hasn't Emma finished painting?", options: ["*the living room", "the kitchen", "the bedroom"] },
      { q: "4. Why did Ben's group turn back?", options: ["*The weather was terrible.", "Someone was hurt.", "They got lost."] },
      { q: "5. Which day does Dana want for her lessons?", options: ["*Thursday", "Tuesday", "Saturday"] },
    ]),
  ]),

  section("Writing Part 1: An email", [
    box(
      "✍️ B1 Preliminary, Writing Part 1",
      "You get an email with **notes**. Answer it and use **all the notes**. About **100 words**.\n\nCheck: greeting ✅ all the notes ✅ a question to your friend ✅ a friendly ending ✅",
    ),
    write(
      "Read Leo's email and the notes. Write your answer (100 words).",
      100,
      {
        read: "📧 **From: Leo**\n\nHi! Guess what — I'm coming to your city next month for a week! 🎉 I haven't seen you for ages. What have you been up to? *(← Tell Leo)*\n\nI'd love to go to a concert or a live event while I'm there. Is there anything good on? *(← Suggest something)*\n\nAlso, is it OK if I stay with you for a couple of nights? *(← Say yes / no and explain)*\n\nI've been learning to cook — I could make dinner for you! *(← Answer)*\n\nLeo",
      },
    ),
  ]),

  section("Speaking Part 2: Describe a photo", [
    picture("Describe the photo.", ["photos/liveaid-jfk.jpg"]),
    text(
      "Part 2: Talk about the photo for 1 minute 📸",
      "Describe what you can see: **where** it is, **who** is there, **what** is happening, the **atmosphere**.\n\n*Useful: In this photo I can see… In the background / in the foreground… It looks like… I think they're…*",
    ),
  ]),

  section("Speaking Parts 3–4: Discuss", [
    text(
      "Part 3: Plan together 🗣️",
      "A friend is moving to a new city where they don't know anyone. Talk with your teacher about these ideas. Which **two** will help most?\n\n- 🏃 join a sports club\n- 📝 sign up for a language course\n- 🎉 go to parties and talk to strangers\n- 💻 use an app to meet people\n- 🤝 volunteer for a charity\n\n*Useful: What about…? I think … would be better because… That's a good point, but…*",
    ),
    text(
      "Part 4: Your opinion",
      "- Is it easier to make friends now or when your parents were young? Why?\n- What's the best way to keep in touch with old friends?\n- Do you think people tell the truth when they post about their lives online? 🤔",
    ),
    tip("Part 3: about 2–3 minutes, the student should suggest, agree / disagree and reach a decision. Part 4: about 2 minutes, ask follow-up *Why?* questions. Give feedback on: range of vocabulary, linking (*because, however, for example*), and turn-taking."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can talk about what I've been doing lately.", true],
      ["I can use “I know”, not “I'm knowing”.", true],
      ["I can keep a conversation going with question tags.", true],
      ["I can tell a story with three past tenses.", true],
      ["I can write an email of about 100 words.", true],
    ]),
    tip("This list is for self-reflection: if the student wants to answer “false” for any line, that's useful information — talk about it and plan review. Then count the points from today's tasks together."),
    box(
      "🎬 Project: A story that changed me",
      "Prepare a story (written or a video) about a moment that changed you — a trip, a meeting, a mistake, a concert, a decision.\n\n**Use:**\n- the three past tenses (*was doing / did / had done*)\n- 3+ linkers (*as soon as, by the time, eventually…*)\n- the Present Perfect to say how it affects you now (*Since then, I've been…*)\n\n📝 Written: 150+ words · 🎥 Video: 2–3 minutes",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with one word.",
        "1. I've been learning Spanish [for] three years.\n2. When I arrived, the shop [had] already closed.\n3. You've met my sister, [haven't] you?\n4. We set [off] at dawn.\n5. [While] I was cooking, the phone rang.\n6. By the [time] we got there, the party had finished.\n7. She's very outgoing — she talks [to] everyone.\n8. They raised a lot of money [for] charity.",
      ),
      choose(
        "Choose.",
        "1. I [*'ve been reading/'ve read] this book all week, but I haven't finished it.\n2. He [*'s had/'s been having] the same car since 2010.\n3. It's cold today, [*isn't it/doesn't it]?\n4. When I got home, I realized I [*had left/left already] my bag at work.\n5. We [*were having/had] dinner when the lights went out.\n6. I [*don't believe/'m not believing] him.",
      ),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: A story that changed me. Write your story (150+ words). Use three past tenses, three linkers and the Present Perfect at the end.", 150),
      record("Project (option): Record your story as a video or audio (2–3 minutes). 🎥", 180),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["I've been knowing her for ten years.", false],
        ["By the time we arrived, the film had started.", true],
        ["You aren't coming, are you?", true],
        ["While I walked home, it was starting to rain.", false],
        ["How long have you been waiting?", true],
        ["She was happy because she has passed the exam.", false],
        ["We've been friends since we were kids.", true],
        ["When I saw him, I had recognized him at once.", false],
      ]),
    ],
    "Homework: Grammar check",
  ),
]);
