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

// 0 Entry test — a check of B2 before the C1 course: 30 grammar questions (mixed conditionals, wish, past modals, the passive in all its forms, reporting verbs and the reporting passive, participle clauses, cleft sentences, inversion basics, linkers); phrasal verbs, word formation, formal and informal words; a long listening (~3:10), a long reading (~700 words), an essay (~180 words) and a voice recording. Every task gives points.
// Warm-up format: "hot takes" — agree or disagree on a scale (not "two truths and a lie", used in the B2 test).
export default lesson("c1-0.1", "Entry test: B2 check", () => [
  section("Warm-up: Hot takes", [
    box(
      "Today you will…",
      "- check your B2 English — it's not an exam, it's a map! 🗺️\n- find out what you know well and what to polish\n- get ready for C1: subtle grammar, rich vocabulary, Oxford-style debates and the Cambridge C1 Advanced format 🎓",
    ),
    text(
      "Hot takes 🔥",
      "Read the statements. How much do you agree? Give each one a number from 1 (*not at all*) to 5 (*completely*), then explain your two strongest answers.\n\n- You can't really know a language until you can make jokes in it.\n- Grammar matters less than confidence.\n- Adults learn languages faster than children.\n- Watching series in English is better than any textbook.\n- Everyone should learn at least two foreign languages.\n\nUseful phrases: *I couldn't agree more. / I see your point, but… / That's partly true, although… / It depends on what you mean by…*",
    ),
    tip(
      "Let the student talk for 3–4 minutes and note their range (linking words, hedging, idioms). Then the test — don't help during the tasks; mistakes are OK. Score guide: 80%+ → ready for C1; 60–80% → start C1 and review the weak topics in the warm-ups; under 60% → review modules of English B2 first.",
    ),
  ]),

  section("Grammar: conditionals, wishes, modals and the passive", [
    tip("Part 1 of the test: 30 grammar questions in four tasks (1 point each)."),
    choose(
      "Conditionals and wishes. Choose.",
      "1. If I hadn't missed that flight, I [*would be/would have been] in Seoul now.\n2. If she were more patient, she [*wouldn't have argued/wouldn't argue] with her boss yesterday.\n3. I wish my neighbors [*would turn/will turn] the music down at night.\n4. If only I [*had listened/listened] to my grandmother's advice last year!\n5. I wish I [*were/would be] taller — then I could reach the top shelf.\n6. [*Unless/Provided] you leave now, you'll miss the bus.\n7. You can borrow my car [*as long as/unless] you drive carefully.\n8. If it [*hadn't been/wasn't] for Asel's help, I would never have opened my studio.",
    ),
    choose(
      "Past modals and the passive. Choose.",
      "1. You [*needn't have bought/mustn't have bought] a cake — Asel had already brought one.\n2. Leo [*can't have been/mustn't have been] at the concert — he was with me all evening.\n3. My keys aren't in my bag. I [*must have left/should have left] them in the car.\n4. She's usually on time. She [*might have missed/must miss] the bus.\n5. I hate [*being told/telling] what to do.\n6. A new bridge [*is being built/is building] near our house at the moment.\n7. He hopes [*to be chosen/to choose] for the national team.\n8. The documents should [*have been sent/have sent] yesterday.",
    ),
    gaps(
      "Report the words. Complete with two or three words.",
      "1. “I'll definitely call you.” → He promised [to call] me.\n2. “You broke the window!” → She accused him [of breaking/of having broken] the window.\n3. “Let's take a taxi.” → Dana suggested [taking/that we take/that we should take] a taxi.\n4. “I didn't take the money.” → He denied [taking/having taken] the money.\n5. People say that the castle is haunted. → The castle is said [to be] haunted.\n6. People believe that the thief escaped through the window. → The thief is believed [to have escaped] through the window.\n7. “Have you ever been to Seoul?” → She asked me if I [had ever been] to Seoul.\n8. “Don't touch the paintings.” → The guide warned us [not to touch] the paintings.",
    ),
    gaps(
      "Participle clauses, cleft sentences and inversion. Complete with one word.",
      "1. [Having] finished the report, Kenji finally went home.\n2. What I need right now [is] a long holiday.\n3. It was Madina [who/that] designed the logo, not her brother.\n4. Not only [did] she win the race, but she also broke the record.\n5. Never [have] I seen such a beautiful sunset.\n6. Hardly [had] we sat down when the phone rang.",
    ),
  ]),

  section("Vocabulary", [
    match("Match the phrasal verbs and phrases with the meanings.", [
      ["take something for granted", "not value something because it's always there"],
      ["bring up", "start talking about a subject"],
      ["look into", "investigate"],
      ["carry out", "do (a plan or research)"],
      ["stand out", "be easy to notice"],
      ["put up with", "accept something unpleasant"],
      ["get round to", "finally find time to do something"],
      ["fall through", "fail to happen (about a plan)"],
    ]),
    gaps(
      "Word formation. Complete with the right form of the word in brackets.",
      "1. The [unemployment] rate has fallen this year. (employ)\n2. She gave her speech with great [confidence]. (confident)\n3. His story was completely [unbelievable] — nobody trusted him. (believe)\n4. We need to [strengthen] our team before the final. (strong)\n5. The [disappearance] of the ship is still a mystery. (appear)\n6. Her [achievements] in science are impressive. (achieve)\n7. It was a [misunderstanding] — I didn't mean to upset you. (understand)\n8. The film was [surprisingly] good. (surprise)",
    ),
    choose(
      "Linking words. Choose.",
      "1. [*Despite/Although] her illness, she went to work.\n2. He's very talented. [*Nevertheless/Therefore], he still practices every day.\n3. I'll take an umbrella [*in case/unless] it rains.\n4. Kenji loves early mornings, [*whereas/so that] Aliya prefers to work late.\n5. She saved money [*so that/in order] she could travel.\n6. [*As a result of/Due] the storm, all flights were canceled.",
    ),
    sort("Formal or informal? Sort the words. 🧩", {
      "Formal": ["regarding", "however", "purchase", "assist", "require", "commence"],
      "Informal": ["about", "but", "buy", "help", "need", "start"],
    }),
  ]),

  section("Listening", [
    tip("A long listening — about 3 minutes. Play it twice: the first time for the general idea, the second for the tasks."),
    ...listening(
      "Listen to Zarina's podcast. Her guest is Ruslan, a mountain rescuer.",
      "**Zarina:** Welcome back to the podcast! My guest today has spent more than ten years in mountain rescue, and he started the Clean Mountains project with teenagers. Ruslan, thanks for coming.\n\n**Ruslan:** Thanks for having me, Zarina. Although I'm much more comfortable on a mountain than in front of a microphone!\n\n**Zarina:** Let's start with the story everyone asks about. You didn't plan to become a rescuer, did you?\n\n**Ruslan:** Not at all. When I was twenty, I went hiking alone, which, looking back, was the first mistake. I'd been to that area before, so I thought I knew it well. Then the weather changed, the fog came down, and within an hour I had no idea where I was. My phone battery was almost dead.\n\n**Zarina:** That must have been terrifying.\n\n**Ruslan:** It was. I spent the night under a rock, cold and hungry. The next morning a rescue team found me. If they hadn't found me that morning, I honestly don't think I'd be sitting here now. One of them, an older man, gave me his own jacket and said, \"Next time, tell someone where you're going.\" I never forgot that.\n\n**Zarina:** And that's when you decided to join them?\n\n**Ruslan:** Not immediately. For a year I was a bit ashamed, to be honest. I kept thinking I should have checked the forecast, I should have taken a map. But eventually I realized that being ashamed wasn't useful. Being prepared was. So I signed up for a first-aid course, then a mountain training course, and a couple of years later I joined the team.\n\n**Zarina:** What's the hardest part of the job?\n\n**Ruslan:** People often expect me to say the physical side — carrying someone down a mountain at night, for example. That's hard, of course. But what I find hardest is the waiting. When a call comes in, you don't know what you'll find. And sometimes you have to make decisions very quickly, with very little information.\n\n**Zarina:** Have you ever made a decision you regret?\n\n**Ruslan:** Every rescuer has. Once, years ago, we were searching for two climbers, and I chose one route because it looked faster. It turned out they'd taken the other one. We found them, and they were fine, but we could have reached them two hours earlier. Since then, I've learned to listen more carefully to the rest of the team instead of trusting only my own instinct.\n\n**Zarina:** Tell us about Clean Mountains. How did that start?\n\n**Ruslan:** During rescues, we kept seeing rubbish everywhere: plastic bottles, bags, even old tents. So I thought, what if we involved young people? Now groups of teenagers come with us on weekends. They collect rubbish, but they also learn how to read a map, what to pack, how to stay safe. Daniyar, one of our first volunteers, now trains the new kids himself.\n\n**Zarina:** What would you say to someone who wants to start hiking?\n\n**Ruslan:** Go! The mountains are wonderful. But respect them. Check the weather, take more water than you think you need, and always — always — tell someone where you're going. That old man's advice is probably the most important thing I've ever learned.\n\n**Zarina:** Ruslan, thank you so much.\n\n**Ruslan:** My pleasure.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Ruslan think he knew the area well?", options: ["*He had been there before.", "He had studied the map.", "A friend had described it to him."] },
      { q: "How did Ruslan feel during the year after he got lost?", options: ["*ashamed of his mistakes", "afraid of the mountains", "angry with the rescue team"] },
      { q: "What does Ruslan find the hardest part of the job?", options: ["*the waiting and quick decisions without much information", "carrying people down at night", "working on weekends"] },
      { q: "What has Ruslan learned from the search for the two climbers?", options: ["*to listen more to his team", "to always choose the fastest route", "to search only in daylight"] },
      { q: "Why did Ruslan start Clean Mountains?", options: ["*He kept seeing rubbish during rescues.", "The government asked him to.", "Daniyar suggested the idea."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan got lost when he was hiking with friends.", false],
      ["He spent the night in the mountains before a team found him.", true],
      ["Ruslan joined the rescue team immediately after he was found.", false],
      ["The two climbers were found safe.", true],
      ["Teenagers in the project only collect rubbish.", false],
      ["Daniyar now trains new volunteers.", true],
    ]),
  ]),

  section("Reading", [
    tip("A long text (~700 words). Give 6–7 minutes for the first reading: *What does Laura think is the way out of the plateau?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Laura's students often feel they have stopped improving at B2.", true],
        ["Laura believes that the plateau means a student has reached their limit.", false],
        ["At B2, students can usually avoid words and structures they don't know.", true],
        ["Laura stopped learning Japanese for a while because she felt stuck.", true],
        ["Laura thinks that grammar exercises are the best way out of the plateau.", false],
        ["Laura suggests listening to people who speak quickly and naturally.", true],
      ],
      {
        read: [
          "## 📈 Stuck at B2? Welcome to the plateau",
          "*by Laura, an English teacher in Almaty*",
          "Every year, at least one of my students says the same thing to me, usually in a slightly desperate voice: \"I've stopped improving.\" They can watch a film without subtitles, more or less. They can write an email to a colleague and hold a conversation about almost anything. And yet they feel that nothing has changed for months. Some of them start wondering whether they have simply reached their limit. They haven't. What they have reached is what teachers call the intermediate plateau, and it is one of the most frustrating — and most normal — stages of learning a language.",
          "Why does it happen? At the beginning, progress is easy to see. In your first year you go from knowing nothing to ordering coffee, telling a story and understanding a song. Every new word makes a difference. By the time you reach B2, however, you already know the words you need most often. The words that are left — *meticulous*, *reluctant*, *to undermine* — appear much less frequently, so you meet them less, notice them less and forget them more easily. The progress is still there; it has just become much harder to see.",
          "There is a second, sneakier reason. At B2, you have become very good at getting by. If you don't know a word, you find a way around it. If a structure feels risky, you avoid it. This is a useful skill — native speakers do it all the time — but it also means you can go for months without ever using anything new. Your English is comfortable, and comfort, unfortunately, is the enemy of progress.",
          "I know this from experience. When I moved to Almaty, I was already learning Japanese, and I got to a level where I could chat to Kenji about work and weekends. Then I got stuck. For almost a year, I kept saying the same sentences in the same way. I'm a little embarrassed to admit that I gave up for a few months. What finally got me moving again wasn't a new textbook. It was a conversation in which I completely failed to explain why I had changed jobs. I realized I had never practiced talking about feelings, regrets or reasons in any depth. I had been avoiding them.",
          "So what can you do? First, stop measuring progress in the wrong way. At this level, it isn't about how many words you know but about how precisely you can say what you mean. Can you disagree politely? Can you sound unsure without sounding weak? Can you tell the same story in a formal and an informal way? These are the skills that separate B2 from C1, and they grow slowly.",
          "Second, look for discomfort on purpose. Listen to people who speak quickly and naturally: podcasts, interviews, stand-up comedy. Read things that were not written for learners. When you find a phrase you like, steal it, and use it three times that week. Choose topics you find difficult to talk about — not only what you did at the weekend, but what you think about it and why.",
          "Third, get feedback on the details. At B2, nobody corrects you any more because they understand you perfectly well. That's lovely for your confidence but useless for your progress. Ask your teacher, or a friend you trust, to point out not only mistakes but also places where you could say something better. *That's correct* and *that's natural* are not the same thing.",
          "Finally, be patient with yourself. The plateau feels flat from the inside, but it almost never is. Most of my students who complain about it are, in fact, improving — just more slowly and more quietly than before. One of them recently told me she had dreamed in English for the first time. A year earlier, she had been sure she was stuck.",
          "The way out of the plateau isn't a secret method. It's simply choosing, again and again, the slightly harder option. 🧗",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why is progress harder to see at B2, according to Laura?", options: ["*The remaining words appear much less often.", "Teachers stop giving tests.", "Students study less than before."] },
      { q: "What does Laura mean by \"getting by\"?", options: ["*finding ways around words and structures you don't know", "passing exams without studying", "speaking only with native speakers"] },
      { q: "What helped Laura move forward in Japanese?", options: ["*a conversation in which she couldn't explain something important", "a new textbook", "a course in Japan"] },
      { q: "Why does Laura say that feedback is important at B2?", options: ["*People understand you, so they stop correcting you.", "Students make more mistakes at B2.", "Feedback is the only way to learn new words."] },
    ]),
    match("Match the words from the article with the meanings.", [
      ["desperate", "feeling there is little hope"],
      ["frustrating", "making you annoyed because you can't change something"],
      ["sneaky", "working in a secret, hidden way"],
      ["precisely", "exactly"],
      ["on purpose", "intentionally, not by accident"],
      ["embarrassed", "feeling a bit ashamed or uncomfortable"],
    ]),
  ]),

  section("Writing and speaking", [
    order("Make sentences.", [
      "Had I known about the traffic, I would have left earlier.",
      "What surprised me most was how friendly everyone was.",
      "The project is believed to have cost millions.",
      "Not only did she apologize, but she also paid for dinner.",
      "Having lived abroad for years, he found it hard to come home.",
    ]),
    gaps(
      "Rewrite the sentences. Use the word in brackets (Cambridge Use of English, Part 4).",
      "1. I regret not going to the concert. (wish) → I [wish I had gone] to the concert.\n2. People think the painting is a fake. (thought) → The painting [is thought to be] a fake.\n3. It wasn't necessary for you to bring food. (needn't) → You [needn't have brought] food.\n4. I only realized my mistake later. (did) → Only later [did I realize/did I realise] my mistake.\n5. “I'm sorry I'm late,” said Leo. (apologized) → Leo [apologized for being/apologized for having been] late.\n6. I'd like you to stop shouting. (rather) → I'd [rather you stopped] shouting.",
    ),
    write(
      "Essay (about 180 words): “The best way to learn a language is to live in a country where it is spoken.” Do you agree? Give at least two reasons and one argument against your view.",
      160,
    ),
    record(
      "Record a 2-minute answer: describe a moment when you felt your English had improved — or had stopped improving. What happened, and what did you do about it? 🎤",
      150,
    ),
    text(
      "Speaking: talk to your teacher for 4–5 minutes 🗣️",
      "- A decision you regret — or don't regret: *If I hadn't…, I wouldn't be… now.*\n- Something you wish were different about your town, school or job.\n- Comment on Laura's article: *Have you ever felt stuck? What helped?*\n- A short debate: *Should students be allowed to use AI translators in language exams?* Give your view, then argue the opposite side for one minute.\n\nYour teacher listens and makes notes. 📝",
    ),
    tip("Speaking and writing: look for range (mixed conditionals, hedging, linking words, a precise word instead of a general one) and for control on longer turns, not only for mistakes. Note 2–3 strong points and 2–3 things to work on."),
  ]),

  section("Your result", [
    tip(
      "Add up the points together. Write down 2–3 weak topics (for example: inversion, the reporting passive, word formation). In the next lessons the warm-ups help to review them. Under 60%? Choose lessons from English B2 for review first.",
    ),
    box(
      "What's next? 🚀",
      "In **English C1** you will:\n\n- read long, complex texts and understand fast, natural English — accents, humor and all 🎧\n- use subtle grammar: inversion, cleft sentences, hedging, the subjunctive 🧠\n- take part in **Oxford-style debates** — with Points of Information and a vote ⚖️\n- write essays, proposals, reports and reviews of 220–260 words ✍️\n- get ready for the **Cambridge C1 Advanced** exam format 🎓",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with the right form of the verb in brackets.",
        "1. If I [had studied] harder at school, I'd have a better job now. (study)\n2. I wish I [had gone] to the party last night — everyone says it was great. (go)\n3. The results [are expected] to be announced next week. (expect)\n4. You [should have told] me you were coming! (should / tell)\n5. [Having spent] all her money, she had to walk home. (spend)\n6. The thief is thought [to have left] the country. (leave)\n7. I'm not used to [being spoken] to like that. (speak — passive)\n8. By this time next year, I [will have finished] my degree. (finish)",
      ),
      choose(
        "Choose.",
        "1. Rarely [*do we see/we see] such talent in a young player.\n2. It's the noise [*that/what] I can't stand.\n3. She denied [*having broken/to have broken] the vase.\n4. If he [*were/would be] more organized, he wouldn't have missed the deadline.\n5. You [*needn't have/mustn't have] cooked — we'd already eaten.\n6. [*Despite/Although] the rain, the match went ahead.\n7. The bridge [*is said to be/says to be] the oldest in the city.\n8. [*Should you need/If you will need] any help, just call me.",
      ),
      drag(
        "Complete the email with the words.",
        "Hi Selin,\n\nI'm writing [regarding] the trip next month. [Unfortunately], I won't be able to come on the first day, [as] I have an important meeting. [However], I could join you on Saturday morning. [Provided] the weather is good, maybe we could go hiking? [Otherwise], we could just explore the city.\n\nBest wishes,\nAliya",
        ["despite", "unless", "whereas"],
      ),
      write(
        "What do you find most difficult in English now? Use Laura's ideas: what “slightly harder option” are you going to choose during the C1 course? (120+ words)",
        120,
      ),
      record("Record a 1–2 minute introduction: who you are, what you do, and why you want to reach C1. 🎤", 120),
    ],
    "Homework: Review",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["Had I known, I would have helped you.", true],
        ["Never I have been so tired.", false],
        ["What I like most is the people.", true],
        ["If I would have known, I would have called.", false],
        ["She is said to be the best chef in town.", true],
        ["He suggested me to take a taxi.", false],
        ["Having finished dinner, we went for a walk.", true],
        ["I wish I can speak Japanese.", false],
      ]),
      quiz("Choose the right word.", [
        { q: "We had to ___ up with the noise for weeks.", options: ["*put", "get", "take"] },
        { q: "Our plans for the weekend fell ___.", options: ["*through", "out", "down"] },
        { q: "Don't take your health for ___.", options: ["*granted", "given", "sure"] },
        { q: "The police are looking ___ the case.", options: ["*into", "after", "up"] },
      ]),
    ],
    "Homework: Grammar and vocabulary check",
  ),
]);
