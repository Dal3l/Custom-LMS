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
  write,
} from "../../kit";

// 12.4 Final revision — a review of the whole B1 course: the grammar map, a grammar marathon (all the main topics), vocabulary from all modules, a long reading (Daniyar's blog before he leaves for Seoul, ~470 words), a long listening (Zarina's end-of-season podcast: the characters send voice messages, ~2:50) and the final project “My English journey”. Video at home: Lýdia Machová (TED), the secrets of learning a new language.
// Facts: all character details follow earlier modules (Ruslan — 2.2, 10.4, 12.2; Asel — 4.4, 12.2; Leo — 1.1, 12.1; Dana — 1.1, 12.1; Daniyar — 4.1, 10.4, 12.3; Laura — 3.2, 12.1; Tom — 2.3; Zarina — 6.3). Lýdia Machová — a Slovak polyglot; in her TED talk she says the secret is enjoyment, effective methods, a system and patience.
export default lesson("b1-12.4", "Final revision", () => [
  section("Warm-up: Do you remember them?", [
    box(
      "Today you will…",
      "- review the whole B1 course 🗺️\n- find out what happened to the characters you've met all year 🎬\n- start your final project: *My English journey* 🎓",
    ),
    quiz("You've met these people all year. Do you remember them? 🤔", [
      { q: "Who got lost in the mountains — and later became a rescuer?", options: ["*Ruslan", "Kenji", "Leo"] },
      { q: "Who left a job in a bank to open a bakery?", options: ["*Asel", "Laura", "Zarina"] },
      { q: "Who was at Live Aid at Wembley in 1985?", options: ["*Tom", "Ben", "Arman"] },
      { q: "Who is the voice of cartoon characters?", options: ["*Zarina", "Madina", "Dana"] },
      { q: "Who moved from Tokyo to Almaty for a job in IT?", options: ["*Kenji", "Daniyar", "Sam"] },
      { q: "Who joined a band and played Smoke on the Water at his first gig?", options: ["*Ben", "Leo", "Ruslan"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which character do you remember best? Why?\n- Which lesson or topic from this year did you enjoy most?\n- What can you do in English now that you couldn't do a year ago? 💪",
    ),
    tip("A light, warm start. Remind the student of a few funny moments from the year. Then show the grammar map and ask the student to mark each line: 😎 easy / 🙂 OK / 😬 needs work — use it to choose what to spend more time on today."),
  ]),

  section("Grammar marathon", [
    table("b1-map"),
    choose(
      "Round 1: Choose the right form.",
      "1. I've [*been learning/learned] English for three years.\n2. When I arrived, the film [*had already started/already started].\n3. I [*used to/was used to] play football every day as a child.\n4. This time next week, I [*'ll be lying/'ll lie] on a beach. 🏖️\n5. The Mona Lisa [*was painted/painted] by Leonardo da Vinci.\n6. You [*mustn't/don't have to] smoke here — it's against the rules.\n7. She [*can't have/mustn't have] seen me — I was hiding.\n8. I enjoy [*cooking/to cook] for my friends.",
    ),
    gaps(
      "Round 2: Complete with ONE word.",
      "1. She said she [was] tired.\n2. He asked me [if/whether] I liked jazz.\n3. That's the woman [who/that] helped me.\n4. If I [had] more money, I'd travel the world.\n5. If you'd asked me, I [would] have helped.\n6. I wish I [could] speak Korean.\n7. [Both] my brother and my sister live abroad.\n8. My parents didn't [let] me stay out late.",
    ),
    drag(
      "Round 3: Complete Daniyar's message.",
      "Hi Grandma! I've [been] packing all day. My flight leaves tomorrow at 6 a.m., so I'm [going] to sleep early tonight. The university, [which] is in the center of Seoul, has sent me a map. They told me I [would] get a room with another student. If I [hadn't] practiced my Korean every day, I would never have got this scholarship. I [wish] you could come with me! 🛫",
      ["will", "who", "used"],
    ),
    trueFalse("Round 4: Correct or not?", [
      ["I've been knowing her for ten years.", false],
      ["By the time we arrived, the shop had closed.", true],
      ["I'm used to get up early.", false],
      ["The bridge was built in 1890.", true],
      ["If I would have time, I would help you.", false],
      ["She told me not to worry.", true],
      ["It's the city where I was born.", true],
    ]),
    order("Round 5: Make sentences.", [
      "I have been waiting for an hour.",
      "She asked me where I lived.",
      "This book was written in 1950.",
      "If I were you, I would apply.",
      "I should have listened to you.",
      "He must have forgotten about it.",
    ]),
    tip("Count the points in each round. Errors cluster? Go back to the lesson on that topic (the grammar map shows which module) and do its homework again."),
  ]),

  section("Vocabulary: The whole year", [
    sort("Which module are these words from? Sort them. 🧩", {
      "💼 work and study": ["a deadline", "a salary", "apply for", "a scholarship"],
      "📺 media": ["a headline", "fake news", "go viral", "a subscriber"],
      "🕵️ mysteries": ["a clue", "a witness", "evidence", "a theory"],
      "🌍 changing the world": ["pollution", "volunteer", "recycle", "a petition"],
    }),
    match("Match the phrases and the meanings.", [
      ["catch up with someone", "talk to a friend about what they've been doing"],
      ["get used to", "start to feel normal about something new"],
      ["burn out", "get extremely tired from too much work"],
      ["get on well with", "have a good relationship with"],
      ["make a difference", "change something for the better"],
      ["bump into", "meet someone by chance"],
      ["lose touch with", "stop being in contact with"],
      ["take a risk", "do something that might go wrong"],
    ]),
    gaps(
      "Complete with ONE word.",
      "1. I haven't seen her for years — we lost [touch] after school.\n2. Let's meet for coffee and catch [up]! ☕\n3. I worked twelve hours a day and nearly burned [out].\n4. It took me months to get [used] to the cold winters. ❄️\n5. I get on [well] with my new colleagues.\n6. Small actions can make a big [difference]. 🌍\n7. I bumped [into] my old teacher at the market.\n8. Moving abroad was a big [risk], but I don't regret it.",
    ),
    text(
      "Talk about your year 💬",
      "- Which topic from this year would you like to discuss again — and why?\n- What was the most interesting text or story? Retell it in one minute.\n- Which new words do you use most often now?",
    ),
  ]),

  section("Reading: From “Hello” to Seoul", [
    tip("A long text (~470 words). First reading — 4 minutes: *Which of Daniyar's tips would work for you?* Then the tasks. Ask the student to find one example of five different grammar topics from the map."),
    trueFalse(
      "Read Daniyar's blog. True or false?",
      [
        ["Daniyar started learning English at the age of seven.", true],
        ["He has always loved English lessons.", false],
        ["A Korean TV series made him want to learn Korean.", true],
        ["His grandmother has started learning Korean.", true],
        ["Daniyar says you should never make mistakes in a new language.", false],
        ["He thinks a good teacher is someone who asks you lots of questions.", true],
        ["He's going to write his blog in English and Korean.", true],
      ],
      {
        read: [
          "## ✈️ From \"Hello\" to Seoul",
          "*Daniyar's blog — the night before his flight*",
          "My suitcase is open on the floor, my grandma has just made me eat my third plate of plov, and tomorrow at six in the morning, I'm flying to Seoul. I've got a scholarship to study engineering there for four years. It still doesn't feel real. So tonight, instead of sleeping, I'm writing about how I got here.",
          "I started English at school when I was seven. Honestly, I hated it. We used to copy long lists of words from the board, and I never understood why. If you had told me then that one day I'd love languages, I would have laughed.",
          "Everything changed when I was thirteen. My sister Madina showed me a Korean TV series with English subtitles. I couldn't stop watching. After a few weeks, I noticed that I was reading the subtitles without translating them in my head. That was the moment I realized that a language isn't a school subject — it's a door. And I wanted to open more doors. A year later, I started Korean too. I gave up after two weeks (I've already told you about that regret!), but when I was fifteen, I tried again, and this time I didn't stop.",
          "Here are the things that have helped me most:",
          "**1. Little and often.** Twenty minutes every day is better than three hours on Sunday. My sister taught me this when she was preparing for her exam.",
          "**2. Use the language for things you love.** I've watched hundreds of videos about football, music and space — all in English. I wasn't studying, but I was learning.",
          "**3. Make mistakes — lots of them.** The first time I spoke Korean to a real person, a waiter in a Korean café in Almaty, I asked for \"a cold grandmother\" instead of \"cold noodles\". He laughed, I laughed, and I've never forgotten the right word since.",
          "**4. Find good people.** My English teacher didn't just correct my grammar; she asked me questions and listened to my answers. My grandma, who's sixty-nine, has started learning a few words of Korean to surprise me. It's slow, but she never gives up — and she has more patience than anyone I know. 😄",
          "**5. Look back sometimes.** Last week I found my old school notebook. On the first page, in big letters, I'd written: *My name is Daniyar. I am seven. I like apples.* Now I can write a blog post, argue about a film and explain what I would have done differently. That's a long way!",
          "Tomorrow a new journey starts. I'll be speaking Korean in class and English with my international friends — and Kazakh and Russian with Grandma, every Sunday. I'm going to keep writing this blog in English and Korean. Wish me luck! 🍀",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why is Daniyar writing at night?", options: ["*He's too excited to sleep before his flight.", "He has homework.", "His grandma asked him to."] },
      { q: "What did Daniyar notice while watching the Korean series?", options: ["*He was reading English subtitles without translating.", "He understood all the Korean.", "The subtitles were wrong."] },
      { q: "What mistake did he make in the Korean café?", options: ["*He used the wrong word for his food.", "He paid too much.", "He spoke Russian to the waiter."] },
      { q: "What does Daniyar say about his old notebook?", options: ["*It shows how much progress he has made.", "He wants to throw it away.", "It was full of mistakes he still makes."] },
      { q: "What will Daniyar do every Sunday?", options: ["*talk to his grandma", "write his blog in Kazakh", "visit Almaty"] },
    ]),
    gaps(
      "Find words in the blog.",
      "1. a bag for your clothes when you travel: a [suitcase]\n2. words at the bottom of the screen that translate a film: [subtitles]\n3. understood suddenly: [realized/realised]\n4. a short time but many times: little and [often]\n5. the ability to wait calmly: [patience]\n6. a trip, often a long one — also a process of change: a [journey]",
    ),
  ]),

  section("Listening: Where are they now?", [
    tip("A long listening — about 2 minutes 50 seconds. The last episode of Zarina's podcast: six characters send voice messages about their news. First listen: *Who has the biggest news?* Second listen: the tasks."),
    ...listening(
      "Listen to the last episode of the season. Zarina plays voice messages from people you know.",
      "**Zarina:** Hello, everyone, and welcome to the last episode of the season! It's been an amazing year, and tonight I've asked some old friends of the show to send me voice messages. What have they been doing? Let's find out. First, Daniyar.\n\n**Daniyar:** Hi, Zarina! I'm recording this at the airport. My flight to Seoul leaves in an hour! I've been preparing for this for three years, and now I can't believe it's real. My grandma gave me a jar of her jam for the trip. I hope they let me take it on the plane!\n\n**Zarina:** Good luck, Daniyar! Next, Leo.\n\n**Leo:** Hey! Big news: I've finally moved into my own flat! It's tiny, but the walls are really thick, so I can play the guitar as loudly as I want. My dad says the house is too quiet now. I think he actually misses my music.\n\n**Zarina:** Ha! And now, Dana.\n\n**Dana:** Hi, Zarina. I'm sending this from Barcelona! I'm at the design festival I told you about. Nine years ago, I was too scared to come here. Yesterday, a publisher saw my book covers and asked me to design a whole series for them. If I'd stayed at the bank, this would never have happened.\n\n**Zarina:** That's fantastic! Here's Asel.\n\n**Asel:** Hello! Things at the bakery are going really well. We've just opened a second shop, near the university. And guess who designed our new menu? Madina! She did it in two days. The students love our cinnamon rolls — we sell out by ten every morning.\n\n**Zarina:** I need to try those. Next, Laura.\n\n**Laura:** Hi, Zarina! I promised I'd do this in Kazakh, so… Salemetsiz be! That's all I can say perfectly so far. But I've been going to my Kazakh class every week, and last Saturday I bought vegetables at the Green Bazaar without pointing at anything. My teacher says I'm her most enthusiastic student!\n\n**Zarina:** Well done, Laura! And finally, Kenji.\n\n**Kenji:** Hello! Remember the wedding I missed? Well, this summer my friend and his wife came to visit me in Almaty. We took the cable car up Kok-Tobe, we ate far too much at a friend's house, and we went hiking with Laura and Ruslan. It wasn't the wedding, but it was the next best thing. And I didn't work a single day!\n\n**Zarina:** What lovely news. As for me, I've just finished recording the voice of a dragon in a new animated film. My nephew thinks I'm the coolest aunt in the world. Thank you for listening all year. Whatever you're learning, keep going. See you next season!",
    ),
    match("Listen and match the people and their news.", [
      ["Daniyar", "is at the airport with a jar of jam"],
      ["Leo", "has moved into his own flat"],
      ["Dana", "got a big job at a festival abroad"],
      ["Asel", "has opened a second shop"],
      ["Laura", "went shopping without pointing"],
      ["Kenji", "showed his friend and his wife around Almaty"],
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar has been preparing for Seoul for three years.", true],
      ["Leo's dad is happy the house is quiet.", false],
      ["Dana got a job offer from a publisher.", true],
      ["Madina designed the new menu in two weeks.", false],
      ["Laura can speak Kazakh perfectly now.", false],
      ["Kenji worked during his friend's visit.", false],
      ["Zarina has just been the voice of a dragon.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Daniyar: I've been [preparing] for this for three years.\n2. Leo: I've finally moved [into] my own flat!\n3. Dana: If I'd stayed at the bank, this would never have [happened].\n4. Asel: We've just [opened] a second shop.\n5. Laura: I've been [going] to my Kazakh class every week.\n6. Kenji: It wasn't the wedding, but it was the next best [thing].",
    ),
  ]),

  section("Final project: My English journey", [
    box(
      "🎓 Project: My English journey",
      "Prepare a 3–4 minute talk (or a video) about your journey with English.\n\n**Include:**\n- 🌱 the beginning: when and why you started (*I started… / I used to…*)\n- 🔀 a turning point: *If I hadn't…, I wouldn't have…*\n- 💪 what you can do now: *I've been… / Now I can…*\n- 😅 a funny mistake or a difficult moment\n- 💭 a wish and a regret: *I wish I could… / I should have…*\n- 🔮 your plans: *Next year I'm going to… / This time next year I'll be…*\n\nUse your presentation phrases: *First of all… Moving on to… To sum up…*",
    ),
    text(
      "Plan with your teacher.",
      "- Make notes for each point (key words, not sentences).\n- Choose ONE photo or object to show — your first English book, a ticket, a screenshot…\n- Practice the first minute now. Your teacher gives you two tips.\n\nThe full talk is your homework — record it, or present it in the next lesson. 🎤",
    ),
    tip("Help the student plan, practice the opening, and give two clear tips (pace, pauses, linking words). Celebrate the year! Decide together what's next: B2, an exam, or more speaking practice."),
  ]),

  section("Wrap-up: Congratulations!", [
    quiz("The very last quiz. Choose. 🏁", [
      { q: "I ___ English for a long time.", options: ["*'ve been learning", "am learning", "learn"] },
      { q: "If I ___ about this course earlier, I'd have started sooner.", options: ["*had known", "knew", "would know"] },
      { q: "I wish I ___ more time to practice.", options: ["*had", "have", "will have"] },
      { q: "This time next year, I ___ for B2!", options: ["*'ll be studying", "study", "studied"] },
    ]),
    box(
      "🎉 You've finished English B1!",
      "Twelve modules, forty-eight lessons — and a lot of stories, mysteries, dilemmas and songs. 🎸\n\nYou can now tell stories, give opinions, report what people said, imagine a different past and talk about your future. That's B1!\n\n*Phrase for the road:* **The sky's the limit** — there's no limit to what you can do. ✨",
    ),
  ]),

  homework(
    [
      video("Watch: Lýdia Machová — the secrets of learning a new language (TED).", "o_XVt5rdpFY"),
      quiz("After the video: choose.", [
        { q: "What does Lýdia say is the most important thing for polyglots?", options: ["*They enjoy the process of learning.", "They have a special talent.", "They study grammar for hours."] },
        { q: "What does she recommend?", options: ["*Find methods that work for you and make a system.", "Learn only with a teacher.", "Learn ten languages at the same time."] },
        { q: "Which secret is about time?", options: ["*patience", "talent", "money"] },
      ]),
      choose(
        "Final grammar check. Choose.",
        "1. How long [*have you been/are you] living here?\n2. I didn't recognize him because he [*had changed/has changed] a lot.\n3. I [*'m used to/used to] working at night — it's normal for me now.\n4. The new bridge [*will be finished/will finish] next year.\n5. She told me she [*would/will] call me later.\n6. If it [*hadn't rained/didn't rain], we would have gone out.\n7. My parents made me [*do/to do] my homework every day.\n8. I don't mind [*waiting/to wait].",
      ),
      write("Write a short text for the next B1 students (80+ words): your three best tips for learning English, and one thing you should have done earlier. 😉", 80),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Final project: write the plan or the full text of your talk “My English journey” (150+ words).", 150),
      record("Final project: record your talk “My English journey” (3–4 minutes). 🎓", 240),
    ],
    "Homework: Final project",
  ),
]);
