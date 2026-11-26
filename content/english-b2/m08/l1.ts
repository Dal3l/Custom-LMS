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

// 8.1 If I'd slept more, I'd feel better — G: mixed conditionals (past → present: If I had slept more, I would feel better now; present → past: If I were more organized, I would have finished on time); wish / if only + Past Perfect (regrets about the past) and + would (annoying habits, wanting someone else to change); review of wish + Past Simple. V: health and lifestyle (sleep-deprived, a nap, insomnia, stay up late, burn out, a sedentary lifestyle, cut down on, work out, a balanced diet, take up). S: talk about habits and their results. Main format: sleep myths true / false + a long reading (why we can't cheat sleep, ~560 words) + TED-Ed video (what happens if you don't sleep) + a long listening (Daniyar, in the middle of exams, on a video call with his grandmother Saule, ~3:15). Video at home (BBC Learning English).
// Facts checked: health organizations (e.g. the American Academy of Sleep Medicine, the CDC) recommend at least 7 hours of sleep a night for adults and 8–10 for teenagers; caffeine taken 6 hours before bedtime still reduced sleep by more than an hour in a 2013 study (Drake et al.); alcohol makes people fall asleep faster but reduces sleep quality; in 1963–64 the 17-year-old student Randy Gardner from San Diego stayed awake for about 264 hours (11 days) for a school science project — the sleep researcher William Dement observed part of it; Hans Van Dongen and colleagues (2003): people who slept 6 hours a night for two weeks performed about as badly on attention tests as people who had missed a whole night or two of sleep — and they didn't realize how impaired they were; teenagers' body clocks naturally shift later. Characters: Daniyar (student in Seoul) and his grandmother Saule (71 in B2; Madina's grandmother too).
export default lesson("b2-8.1", "If I'd slept more, I'd feel better", () => [
  section("Warm-up: Sleep — myth or fact?", [
    box(
      "Today you will…",
      "- find out what happens to your brain without sleep 😴🧠\n- talk about past choices and present results: If I'd slept more, I'd feel better… 🔁\n- talk about regrets and annoying habits: I wish… If only… 🙄",
    ),
    trueFalse("Sleep: true or false? Guess first. 😴", [
      ["Most adults need at least seven hours of sleep a night.", true],
      ["Teenagers need more sleep than adults.", true],
      ["You can completely make up for a week of bad sleep at the weekend.", false],
      ["A coffee six hours before bedtime can still affect your sleep.", true],
      ["A glass of wine before bed improves the quality of your sleep.", false],
      ["In the 1960s, a 17-year-old student stayed awake for 11 days.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- How many hours do you usually sleep? Is it enough? 🛏️\n- Are you a morning person or a night owl? 🦉\n- What do you do when you can't fall asleep?",
    ),
    tip("Check the answers together after the reading. Note sentences like *If I slept more, I'd be less tired* — perfect bridge to mixed conditionals."),
  ]),

  section("Vocabulary: Health and lifestyle", [
    words("Health and lifestyle", [
      ["sleep-deprived", "🥱 not having had enough sleep"],
      ["a nap", "💤 a short sleep during the day"],
      ["insomnia", "🌙 not being able to sleep"],
      ["stay up late", "🦉 go to bed late"],
      ["burn out (v) — burnout (n)", "🔥 become exhausted from working too hard"],
      ["a sedentary lifestyle", "🛋️ a life with too much sitting and little exercise"],
      ["cut down on", "✂️ eat, drink or do less of something", "I'm cutting down on coffee."],
      ["work out", "🏋️ do exercise"],
      ["a balanced diet", "🥗 healthy food of all the right kinds"],
      ["take up", "🆕 start a new hobby or habit", "She took up yoga last year."],
    ]),
    match("Match.", [
      ["I've been sleep-deprived", "all week because of exams."],
      ["After lunch, I usually have", "a short nap."],
      ["I'm trying to cut down", "on sugar."],
      ["He works out", "three times a week."],
      ["If you don't rest, you'll", "burn out."],
      ["Last year she took up", "swimming."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Office workers often have a [sedentary] lifestyle.\n2. I suffer from [insomnia] — I lie awake for hours.\n3. Don't stay [up] late before an exam.\n4. A balanced [diet] includes fruit, vegetables and protein.\n5. She had a 20-minute [nap] and felt much better.\n6. After ten years of working 60-hour weeks, he [burned] out.",
    ),
  ]),

  section("Reading: You can't cheat sleep", [
    tip("A long text (~560 words). First reading — 5 minutes: *Why is sleep deprivation so dangerous, according to the writer?* Then check the warm-up answers. Ask the student to find the mixed conditionals in the last paragraphs."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Randy Gardner stayed awake as part of a school project.", true],
        ["After a few days, Gardner had problems with memory and concentration.", true],
        ["In the 2003 study, people who slept six hours a night felt very tired and knew they were performing badly.", false],
        ["During sleep, the brain processes what we learned during the day.", true],
        ["Teenagers who go to bed late are simply lazy, according to the writer.", false],
        ["The writer suggests making sleep a priority, like exercise or diet.", true],
      ],
      {
        read: [
          "## 😴 You can't cheat sleep",
          "In December 1963, a 17-year-old student from San Diego named Randy Gardner decided to do something unusual for his school science fair: he would stay awake for as long as possible. With two friends watching him, he played basketball, went bowling and listened to music to keep himself awake. Eleven days later — about 264 hours — he finally went to sleep. It was one of the longest periods without sleep ever recorded.",
          "Gardner survived without serious long-term harm, but the experiment showed how quickly the brain begins to struggle. After a few days, he became moody and had problems with concentration and short-term memory. Later, he was unable to finish simple tasks, such as counting backwards from a hundred in sevens, because he kept forgetting what he was doing. Years later, he said that he regretted the experiment and that he had struggled with insomnia for a long time.",
          "Most of us will never go eleven days without sleep. But many of us are sleep-deprived in a quieter way: six hours a night instead of the seven or more that adults need. Surely that's not a problem? In 2003, researchers led by Hans Van Dongen tested exactly this. One group of volunteers slept six hours a night for two weeks. By the end, their attention and reaction times were about as bad as those of people who had missed a whole night of sleep, or even two. The most worrying part? The six-hour sleepers didn't realize how badly they were doing. They felt only a little tired. In other words, if you've been sleeping six hours a night for weeks, you are probably not as sharp as you think you are.",
          "Why does sleep matter so much? During sleep, the brain is far from inactive. It sorts and stores the information we collected during the day, moving memories from short-term to long-term storage. That's why a night's sleep after studying often helps more than an extra hour of reading. Sleep also affects our mood, our immune system and even our appetite: people who sleep badly tend to want more sugary, fatty food.",
          "Teenagers have a special problem. During adolescence, the body clock naturally shifts later, so many teenagers genuinely can't fall asleep before eleven or midnight. That doesn't make them lazy. But if school starts at eight, they lose sleep every single day. Some schools that have moved their start times later have reported better attendance and better moods.",
          "So what can we do? The advice is simple, even if following it isn't. Try to go to bed and wake up at the same time, even at weekends. Avoid coffee in the afternoon. Keep screens out of the bedroom, or at least stop scrolling half an hour before sleep. And stop thinking of sleep as wasted time.",
          "Think of your own week. If you had slept an extra hour every night, would you feel different today? If you weren't so busy, would you have gone to bed earlier last night? Most of us already know the answers. Sleep isn't a luxury that we can cut when life gets busy. It's the foundation that everything else is built on. 🌙",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did Randy Gardner keep himself awake?", options: ["*He played sports and listened to music.", "He drank a lot of coffee.", "He took medicine."] },
      { q: "What happened to Gardner's brain after a few days?", options: ["*He had problems with concentration and memory.", "Nothing changed.", "He became more creative."] },
      { q: "What was the most worrying result of the 2003 study?", options: ["*People didn't realize how badly they were performing.", "People fell asleep at work.", "People slept too much."] },
      { q: "Why do many teenagers go to bed late?", options: ["*Their body clocks naturally shift later.", "They are lazy.", "They drink too much coffee."] },
      { q: "What is the writer's main message?", options: ["*Sleep is the foundation of everything else.", "Six hours of sleep is enough.", "Sleep is wasted time."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. often changing mood, sometimes bad-tempered: [moody]\n2. not doing anything: [inactive]\n3. the feeling of wanting to eat: [appetite]\n4. the period when a child becomes an adult: [adolescence]\n5. really, truly: [genuinely]\n6. going to school or work regularly: [attendance]",
    ),
  ]),

  section("Grammar: If I'd slept more, I'd feel better", [
    quiz("Notice the rule 🔍 Look: “If you had slept an extra hour every night, would you feel different today?” · “If you weren't so busy, would you have gone to bed earlier last night?”", [
      { q: "“If you had slept more (past), you would feel better (now)” — this mixes…", options: ["*a past condition with a present result", "a present condition with a past result", "two future events"] },
      { q: "“If you weren't so busy (generally), you would have gone to bed earlier (last night)” — this mixes…", options: ["*a present situation with a past result", "two past events", "two present events"] },
      { q: "Mixed conditionals are about…", options: ["*unreal situations — things that didn't happen or aren't true", "real future plans", "general truths"] },
    ]),
    table("mixed-conditionals"),
    choose(
      "Choose.",
      "1. If I [*had gone/went] to bed earlier, I wouldn't be so tired now. 🥱\n2. If she [*weren't/hadn't been] so shy, she would have spoken at the meeting.\n3. If I had studied medicine, I [*would be/would have been] a doctor now.\n4. If he [*were/had been] more careful in general, he wouldn't have lost his phone.\n5. We [*would be/would have been] in Paris now if we hadn't missed the flight. ✈️\n6. If I [*didn't have/hadn't had] so much work, I would have come to the party.\n7. If you had listened to me, we [*wouldn't be/wouldn't have been] lost now!\n8. If I [*spoke/had spoken] Korean, I would have understood the film.",
    ),
    gaps(
      "Complete the mixed conditionals.",
      "1. I'm tired because I didn't sleep. → If I [had slept], I [wouldn't be] tired.\n2. He's not fit because he didn't exercise for years. → If he [had exercised], he [would be] fit now.\n3. She isn't patient, so she didn't wait. → If she [were/was] patient, she [would have waited].\n4. I don't live near the sea, so I didn't learn to swim. → If I [lived] near the sea, I [would have learned/would have learnt] to swim.\n5. We didn't book, so we don't have tickets now. → If we [had booked], we [would have] tickets now.\n6. I'm not organized, so I missed the deadline. → If I [were/was] more organized, I [wouldn't have missed] the deadline.",
    ),
  ]),

  section("Grammar: I wish… If only…", [
    table("wishes"),
    sort("What does the wish mean? Sort. 🧩", {
      "⏪ a regret about the past (wish + had done)": [
        "I wish I had gone to bed earlier.",
        "If only I hadn't eaten so much.",
        "She wishes she had studied medicine.",
        "I wish I hadn't said that.",
      ],
      "🙄 an annoying habit (wish + would)": [
        "I wish you would stop checking your phone.",
        "If only my neighbors would turn the music down.",
        "I wish it would stop raining.",
        "He wishes his boss would listen.",
      ],
    }),
    gaps(
      "Complete the wishes.",
      "1. I stayed up until 3 a.m. → I wish I [hadn't stayed] up so late.\n2. My brother never cleans his room. → I wish he [would clean] his room.\n3. I didn't buy the tickets. Now they're sold out! → If only I [had bought] them.\n4. I can't swim. → I wish I [could] swim.\n5. You always interrupt me! → I wish you [wouldn't interrupt] me.\n6. I drank three coffees. → I wish I [hadn't drunk] so much coffee.",
    ),
    drag(
      "Complete the post.",
      "Exam week. 😩 I wish I [had] started revising earlier. If I had slept more this week, I [would] feel better now. If only my flatmate [would] stop playing guitar at midnight! And I wish I [hadn't] drunk that fourth coffee. If I [were] a more organized person, I would have planned all this a month ago. Next semester will be different. I [promise]. 📚",
      ["have", "will", "did"],
    ),
    order("Make sentences.", [
      "If I had slept more, I would feel better.",
      "I wish I had gone to bed earlier.",
      "If only you would listen to me.",
      "If she were more patient, she would have waited.",
      "I wish I hadn't drunk so much coffee.",
    ]),
    tip("Say it right: *I'd* = *I had* OR *I would* — the next word tells you: *If I'd SLEPT* (had), *I'd FEEL* (would). Typical mistakes: *If I would have slept…* → *If I had slept…*; *I wish you stop* → *I wish you would stop*; *I wish I didn't eat it* (past!) → *I wish I hadn't eaten it*."),
  ]),

  section("Video: What happens if you don't sleep?", [
    video("Watch: TED-Ed — What would happen if you didn't sleep? (Claudia Aguirre)", "dqONk48l5vY"),
    text(
      "After the video: talk about it.",
      "- Which fact from the video surprised you most?\n- What happens in the brain while we sleep?\n- Is there anything you'd change about your sleep after this lesson? 🛏️",
    ),
    tip("Ask the student to use mixed conditionals and wishes about their own sleep: *If I had slept more last night, I'd… I wish I could…*"),
  ]),

  section("Listening: Exam week", [
    tip("A long listening — about 3 minutes 15 seconds. Daniyar, in the middle of exams in Seoul, has a video call with his grandmother Saule in Almaty. First listen: *Whose habits are healthier — Daniyar's or his grandmother's?* Second listen: the tasks."),
    ...listening(
      "Listen to Daniyar's video call with his grandmother.",
      "**Saule:** Daniyar! Finally! Oh my goodness, what's happened to your face? You look like a ghost.\n\n**Daniyar:** Hi, Grandma. Thanks. It's exam week. I've had about four hours of sleep a night since Monday.\n\n**Saule:** Four hours! At your age, you need at least eight.\n\n**Daniyar:** I know, I know. But I've got three exams in four days. If I'd started revising earlier, I wouldn't be in this situation now. I wish I had listened to you in September.\n\n**Saule:** What did I say in September?\n\n**Daniyar:** You said, \"Study a little every day.\" And I said, \"Grandma, I've got plenty of time.\"\n\n**Saule:** Ha! So you remember. And what are you drinking? That's not tea.\n\n**Daniyar:** It's an energy drink. My third today.\n\n**Saule:** Daniyar! If your grandfather were alive, he'd be shouting at you right now. That stuff is terrible for you.\n\n**Daniyar:** It keeps me awake.\n\n**Saule:** It keeps you awake when you should be sleeping, and then you can't sleep when you finally go to bed. I read about it in a magazine. Even a coffee in the afternoon can stop you sleeping properly at night.\n\n**Daniyar:** That's true, actually. Last night I lay in bed for two hours, staring at the ceiling, thinking about chemistry. If I hadn't had that drink at eight o'clock, I'd probably have fallen asleep straight away.\n\n**Saule:** You see? And what about food? Are you eating anything green?\n\n**Daniyar:** Does pizza with peppers count?\n\n**Saule:** It does not. And when did you last go outside? Not to the library — outside, in the fresh air.\n\n**Daniyar:** Does walking from the dormitory to the library count?\n\n**Saule:** How far is it?\n\n**Daniyar:** About three minutes.\n\n**Saule:** That doesn't count either. Your brain needs oxygen, not just energy drinks. When I was studying for my exams, my mother sent me out for a walk every evening, and I passed everything.\n\n**Daniyar:** I wish someone would send me out for a walk. Lucas and Ji-woo keep inviting me to play football, but I always say no.\n\n**Saule:** Then next time, say yes.\n\n**Daniyar:** Okay, okay. How are you, anyway? You look great.\n\n**Saule:** I feel great. I went swimming this morning, as usual. Then I had breakfast with my friend Galiya, and this afternoon I'm going to my dance class.\n\n**Daniyar:** You go swimming every morning? You're seventy-one!\n\n**Saule:** That's exactly why I go swimming every morning. I took it up when I retired, and if I hadn't started, I'm sure I'd have problems with my back now. My only problem is my neighbor. I wish he would stop drilling the walls at seven in the morning.\n\n**Daniyar:** Ha! You go to bed at ten, don't you?\n\n**Saule:** Ten o'clock, every night. No phone in the bedroom. If I were a student like you, I would have done the same.\n\n**Daniyar:** If I were as organized as you, Grandma, I would have finished my revision last week.\n\n**Saule:** Well, it's not too late to change. Here's my advice. Tonight, no energy drink. Go for a short walk, have a proper dinner, and go to bed before midnight. You'll remember more after a good night's sleep than after another four hours of reading.\n\n**Daniyar:** Is that from the magazine too?\n\n**Saule:** It's from seventy-one years of experience. And from the magazine.\n\n**Daniyar:** Okay. I promise. No energy drink tonight.\n\n**Saule:** And call me after the exam. If you pass, I'll make your favorite pie when you come home in the summer.\n\n**Daniyar:** And if I don't pass?\n\n**Saule:** Then I'll make it anyway. Good luck, my dear.",
    ),
    quiz("Listen and choose.", [
      { q: "Why is Daniyar so tired?", options: ["*He's been sleeping about four hours a night because of exams.", "He's been ill.", "He's been working at night."] },
      { q: "What does Daniyar regret?", options: ["*not starting to revise earlier", "choosing chemistry", "moving to Seoul"] },
      { q: "Why couldn't Daniyar sleep last night?", options: ["*He'd had an energy drink at eight o'clock.", "His neighbor was noisy.", "He was hungry."] },
      { q: "What annoys Saule?", options: ["*her neighbor drilling in the morning", "her dance class", "her friend Galiya"] },
      { q: "What does Saule advise?", options: ["*no energy drink, a walk, dinner and bed before midnight", "studying all night", "taking a long nap"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar has three exams in four days.", true],
      ["In September, Daniyar followed his grandmother's advice.", false],
      ["Saule took up swimming when she retired.", true],
      ["Saule keeps her phone in the bedroom.", false],
      ["Saule says she'll make a pie only if Daniyar passes.", false],
      ["Saule is seventy-one.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. If I'd started revising earlier, I [wouldn't] be in this situation now.\n2. I wish I [had] listened to you in September.\n3. If your grandfather were alive, he'd [be] shouting at you right now.\n4. If I hadn't had that drink, I'd probably have [fallen] asleep straight away.\n5. I wish he [would] stop drilling the walls at seven in the morning.\n6. If I were as organized as you, I would [have] finished my revision last week.",
    ),
  ]),

  section("Let's talk: Habits and results", [
    text(
      "🔁 Your habits",
      "Talk about your habits and their results — past and present:\n\n- One past decision that affects your life **now**: *If I hadn't…, I wouldn't… now.*\n- One thing about your personality that changed a past event: *If I were more…, I would have…*\n- Two regrets: *I wish I had… / If only I hadn't…*\n- One annoying habit of someone else: *I wish my… would…* 😄\n- One healthy habit you'd like to take up — and what stops you.",
    ),
    tip("Model with your own examples first. Correct gently: *If I would have…* → *If I had…*. Push for a mix of both types of mixed conditional — the second type (present → past) is harder and rarer."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "If I had slept more, I ___ tired now.", options: ["*wouldn't be", "wouldn't have been", "won't be"] },
      { q: "If she ___ so shy, she would have asked.", options: ["*weren't", "hadn't", "wouldn't be"] },
      { q: "I wish you ___ stop interrupting me!", options: ["*would", "will", "had"] },
      { q: "If only I ___ that cake. I feel sick.", options: ["*hadn't eaten", "didn't eat", "wouldn't eat"] },
    ]),
    box(
      "Phrase of the day: early to bed, early to rise…",
      "🌅 “…makes a man healthy, wealthy and wise” — an old English proverb, made famous by Benjamin Franklin. Saule would agree!\n\n*Are you an early bird or a night owl? Would you like to change?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Using mixed conditionals.", "LBvXjZmpraU"),
      choose(
        "Choose.",
        "1. If I [*hadn't missed/didn't miss] the bus, I would be at work now.\n2. If he [*were/had been] taller, he would have joined the basketball team.\n3. I wish I [*had saved/saved] money last year.\n4. I wish my sister [*would stop/stopped] borrowing my clothes!\n5. If we had left earlier, we [*would be/would have been] there by now.\n6. If only I [*hadn't forgotten/didn't forget] her birthday yesterday.",
      ),
      gaps(
        "Complete with the right form of the verb.",
        "1. If I [had learned/had learnt] to drive, I would be more independent now. (learn)\n2. If she [weren't/wasn't] afraid of flying, she would have come with us. (not be)\n3. I wish I [had brought] an umbrella. (bring)\n4. I wish the neighbors [would stop] making so much noise. (stop)\n5. If you had told me, I [would know] what to do now. (know)\n6. If only I [hadn't stayed] up so late. (not stay)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["sleep-deprived", "without enough sleep"],
        ["a nap", "a short sleep during the day"],
        ["insomnia", "not being able to sleep"],
        ["cut down on", "have less of"],
        ["take up", "start a new hobby"],
        ["burn out", "become exhausted from overwork"],
      ]),
      write("Write an article (140–190 words) for a student website: “The habit that changed my life” (or “The habit I wish I had changed”). Explain the habit, its results then and now, and what you'd tell your younger self. Use at least two mixed conditionals and two wishes.", 140),
      record("Record a 1-minute answer: “If you could change one habit, what would it be and why?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
