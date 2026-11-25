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

// 0 Entry test — a check of B1 before the B2 course: tenses, used to / be used to, the future, the passive, modals (now and past), all the conditionals and wish, reported speech, relative clauses, gerund or infinitive; phrasal verbs, collocations, word formation; a long listening (~2:45), a long reading (~480 words), writing (~120 words) and speaking. Every task gives points.
// Warm-up format: "two truths and a lie" (the teacher starts).
export default lesson("b2-0.1", "Entry test: B1 check", () => [
  section("Warm-up: Two truths and a lie", [
    box(
      "Today you will…",
      "- check your B1 English — it's not an exam, it's a map! 🗺️\n- find out what you know well and what to review\n- get ready for B2: longer texts, real debates and the Cambridge B2 First format 🎓",
    ),
    text(
      "Two truths and a lie 🕵️",
      "Your teacher tells you three things about their life. Two are true, one is a lie. Ask up to five questions, then guess the lie!\n\nNow your turn: say three sentences about yourself — use different tenses:\n\n- *I've been… for… years.*\n- *When I was a child, I used to…*\n- *By the time I…, I had already…*\n\nThen talk:\n- What's the most surprising thing you've learned about someone recently?\n- Which is harder for you in English: understanding people or speaking? Why?",
    ),
    tip(
      "Start with your own three facts to model the tenses. Then the test — don't help during the tasks; mistakes are OK. Score guide: 80%+ → ready for B2; 60–80% → start B2 and review the weak topics in the warm-ups; under 60% → review modules of English B1 first.",
    ),
  ]),

  section("Grammar: tenses", [
    choose(
      "Present Perfect Simple or Continuous? Choose.",
      "1. I [*'ve been waiting/'ve waited] for you for forty minutes! Where were you?\n2. She [*'s written/'s been writing] three emails this morning.\n3. How long [*have you known/have you been knowing] Madina?\n4. You look hot. [*Have you been running/Have you run]?\n5. They [*'ve finished/'ve been finishing] the project — here's the report.\n6. We [*'ve been living/'re living] in this flat since 2021.\n7. I [*'ve read/'ve been reading] this book for weeks, and I'm only on page 50.\n8. He [*'s lost/'s been losing] his keys. Can you help him find them?",
    ),
    choose(
      "Narrative tenses. Choose.",
      "1. When we got to the cinema, the film [*had already started/already started].\n2. I [*was driving/drove] home when I heard the news on the radio.\n3. She was upset because she [*had failed/was failing] her driving test.\n4. While the guide [*was talking/had talked], a bird flew into the room.\n5. By the time the police arrived, the thief [*had escaped/escaped].\n6. I didn't recognize him — he [*had grown/was growing] a beard.\n7. We [*were sitting/had sat] in the garden when it started to rain.\n8. As soon as she [*opened/was opening] the door, the dog ran out.",
    ),
    choose(
      "used to, be used to or get used to? Choose.",
      "1. I [*used to/am used to] have long hair when I was a student.\n2. Kenji [*is used to/used to] cold winters now — he's lived in Almaty for years.\n3. It took me months to [*get used to/use to] driving on the left.\n4. [*Did you use to/Were you used to] play an instrument as a child?\n5. I'm not [*used to/use to] getting up so early. I'm exhausted!\n6. My grandfather [*would/was used to] tell us stories every evening.",
    ),
  ]),

  section("Grammar: the future and the passive", [
    choose(
      "Future forms. Choose the best answer.",
      "1. This time tomorrow, I [*'ll be lying/'ll lie] on a beach. 🏖️\n2. The train [*leaves/will be leaving] at 6:45 — it's on the timetable.\n3. Look at that sky! It [*'s going to/will] snow.\n4. I [*'m meeting/meet] Dana for lunch on Friday — we booked a table.\n5. A: The phone's ringing. B: [*I'll get/I'm getting] it.\n6. I'll call you as soon as I [*arrive/will arrive].\n7. Don't call at eight — we [*'ll be having/'ll have had] dinner.\n8. She's [*likely to/likely] win — she's the best player in the team.",
    ),
    gaps(
      "Complete with the passive form of the verb in brackets.",
      "1. This bridge [was built] in 1890. (build)\n2. English [is spoken] all over the world. (speak)\n3. The results [will be announced] tomorrow. (announce)\n4. My bike [has been stolen]! (steal — Present Perfect)\n5. The video [has been watched] ten million times. (watch — Present Perfect)\n6. The concert [was cancelled/was canceled] because of the storm. (cancel)\n7. This problem [can be solved] easily. (can / solve)\n8. Phones [must be switched] off during the exam. (must / switch)",
    ),
  ]),

  section("Grammar: modals, conditionals and wishes", [
    choose(
      "Modal verbs. Choose.",
      "1. The lights are off. They [*must/can't] be out.\n2. She [*can't/must] be tired — she's just slept for ten hours!\n3. I'm not sure where Leo is. He [*might/must] be at the gym.\n4. The ground is wet. It [*must have rained/must rain] in the night.\n5. He [*can't have seen/mustn't have seen] me — he didn't say hello.\n6. You [*should have told/should tell] me earlier! Now it's too late.\n7. We [*didn't have to/mustn't] pay — the museum was free.\n8. [*Were you able to/Could you] finish the race yesterday, in the end?",
    ),
    choose(
      "Conditionals and wishes. Choose.",
      "1. If you heat ice, it [*melts/would melt].\n2. If it [*rains/will rain] tomorrow, we'll stay at home.\n3. If I [*had/have] more time, I'd learn to play the piano.\n4. If I were you, I [*'d apply/'ll apply] for that job.\n5. If we had left earlier, we [*wouldn't have missed/didn't miss] the train.\n6. I wish I [*could/can] speak Korean like Daniyar.\n7. I'm late again! I [*should have/should] set an alarm.\n8. You won't pass [*unless/if] you study.",
    ),
  ]),

  section("Grammar: reported speech, relative clauses, -ing or to", [
    gaps(
      "Report the words. Complete with one or two words.",
      "1. “I'm tired.” → She said she [was] tired.\n2. “We'll call you.” → They said they [would] call me.\n3. “I've lost my keys.” → He told me he [had lost] his keys.\n4. “Where do you live?” → She asked me where [I lived].\n5. “Do you like jazz?” → He asked me [if/whether] I liked jazz.\n6. “Don't be late!” → The teacher told us [not to] be late.",
    ),
    choose(
      "Relative clauses. Choose.",
      "1. That's the woman [*who/which] helped me at the station.\n2. This is the café [*where/which] we first met.\n3. I have a friend [*whose/who's] father is a pilot.\n4. Almaty, [*which/that] is in the south, is famous for apples.\n5. The film [*that/who] we saw last night was brilliant.\n6. My sister, [*who/that] lives in Seoul, is coming home in May.",
    ),
    choose(
      "-ing or to? Choose.",
      "1. I enjoy [*cooking/to cook] for my friends.\n2. We decided [*to move/moving] to a bigger flat.\n3. Remember [*to lock/locking] the door when you leave!\n4. I'll never forget [*seeing/to see] the sea for the first time.\n5. She stopped [*smoking/to smoke] ten years ago — she feels great.\n6. My parents didn't let me [*stay/to stay] out late.\n7. I'm looking forward to [*meeting/meet] you.\n8. He promised [*to help/helping] us on Saturday.",
    ),
  ]),

  section("Vocabulary", [
    match("Match the phrasal verbs and the meanings.", [
      ["give up", "stop doing something"],
      ["put off", "do something later"],
      ["find out", "discover information"],
      ["look forward to", "be happy about something in the future"],
      ["run out of", "have no more of something"],
      ["get on with", "have a good relationship with"],
      ["turn down", "say no to an offer"],
      ["come up with", "think of an idea"],
    ]),
    sort("make, do, take or have? Sort the words. 🧩", {
      "make": ["a decision", "a mistake", "a phone call"],
      "do": ["your best", "the housework", "a course"],
      "take": ["a risk", "part in", "a break"],
      "have": ["an argument", "a good time", "a look"],
    }),
    gaps(
      "Word formation. Complete with the right form of the word in brackets.",
      "1. Thank you for your [help/helpfulness]! You've been really [helpful]. (help)\n2. The [decision] was difficult. (decide)\n3. It was a very [successful] project. (success)\n4. I'm [unhappy] with the result. (happy)\n5. She's a very [creative] person. (create)\n6. The [government] announced new rules. (govern)\n7. Thank you — we had a [wonderful] day! (wonder)\n8. Smoking is [dangerous] for your health. (danger)",
    ),
  ]),

  section("Listening", [
    tip("A long listening — about 2 minutes 45 seconds, like the main listenings of B2. Play it twice: the first time for the general idea, the second for the tasks."),
    ...listening(
      "Listen to a radio interview with Madina, a young designer who has just opened her own studio.",
      "**Host:** My guest today is Madina, a designer from Almaty who opened her own design studio three months ago. She's only twenty-two. Madina, congratulations!\n\n**Madina:** Thank you! It still feels a bit unreal, to be honest.\n\n**Host:** Let's go back to the beginning. When did you start designing?\n\n**Madina:** I've been drawing since I was a child, but I started designing properly when I was sixteen. I used to make posters for school events, and then logos for my friends' small businesses. At first I did it for free, just for the experience.\n\n**Host:** And when did it become a real job?\n\n**Madina:** In my second year at university. A bakery owner, Asel, asked me to design her menu and her shop sign. She recommended me to other people, and soon I was working every evening after classes. By the time I graduated, I had already worked for more than thirty clients.\n\n**Host:** That's impressive. Why did you decide to open a studio instead of joining a big company?\n\n**Madina:** I actually had an offer from a big agency. It was a good salary, and my parents wanted me to accept it. But I'd been dreaming about my own studio for years. I thought, if I don't try now, I'll regret it forever. So I turned the offer down.\n\n**Host:** Was that a difficult decision?\n\n**Madina:** Very! I couldn't sleep for a week. But my grandmother said something that helped me. She told me her only regret was that she hadn't traveled when she was young, because she had always been waiting for the perfect moment.\n\n**Host:** What has been the hardest part so far?\n\n**Madina:** Definitely the business side: taxes, contracts, chasing clients who haven't paid. Nobody teaches you that at art school! I've made a few mistakes. For example, I should have asked my first big client to pay half of the money at the start. They paid three months late.\n\n**Host:** And the best part?\n\n**Madina:** Freedom. I choose my projects. Last month we designed the posters for a music festival — that was a dream come true. And I'm not alone now: two friends from university have joined me.\n\n**Host:** Where do you see the studio in five years?\n\n**Madina:** I hope we'll have moved to a bigger office, and I'd love to work with clients from other countries. My English is getting better, so maybe that's not impossible!\n\n**Host:** Madina, thank you, and good luck!",
    ),
    quiz("Listen and choose.", [
      { q: "When did Madina start designing properly?", options: ["*at sixteen", "at university", "three months ago"] },
      { q: "How did Madina find her first clients at university?", options: ["*A bakery owner recommended her.", "She advertised online.", "Her teachers helped her."] },
      { q: "Why did Madina turn down the agency's offer?", options: ["*She wanted to open her own studio.", "The salary was too low.", "Her parents didn't want her to accept it."] },
      { q: "What does Madina say is the hardest part?", options: ["*the business side: taxes, contracts and payments", "finding new ideas", "working with friends"] },
      { q: "What would Madina like to do in the future?", options: ["*work with clients from other countries", "join a big agency", "go back to university"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina has had her studio for three months.", true],
      ["At first, Madina designed logos for money.", false],
      ["By the time she graduated, she had worked for more than thirty clients.", true],
      ["Madina's parents wanted her to join the agency.", true],
      ["Her first big client paid on time.", false],
      ["Madina works alone in her studio.", false],
    ]),
  ]),

  section("Reading", [
    tip("A long text (~480 words). Give 5 minutes for the first reading: *Is the writer for or against the four-day week?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Kenji's company tried the four-day week for six months.", true],
        ["Everyone had to work longer hours on the other four days.", false],
        ["Meetings became shorter during the trial.", true],
        ["Nobody had any problems with the new system.", false],
        ["The customer support team worked in shifts.", true],
        ["The company has decided to go back to five days.", false],
      ],
      {
        read: [
          "## 🗓️ Four days, not five: what happened when we tried it",
          "*by Kenji Tanaka, team leader at an IT company in Almaty*",
          "A year ago, our director came into the office with an unusual idea. \"What if we worked four days a week,\" she said, \"for the same salary?\" Most of us laughed. We were already busy, and some projects were late. How could we do the same work in less time? But she was serious. She had read about trials in several countries, and she wanted to try it for six months.",
          "The rules were simple. We would work Monday to Thursday, eight hours a day — not ten. Our salaries would stay the same. If our results got worse, we would go back to the old system.",
          "The first month was chaotic. We realized how much time we had been wasting. Our weekly meeting, for example, used to last two hours, and half of it was people talking about things that didn't concern them. We cut it to thirty minutes. We stopped sending emails for every small question and started using a shared list of tasks instead. Some of my colleagues turned off their notifications for two hours every morning so they could concentrate. \"I didn't know I could work like this,\" one developer told me. \"I used to check my phone every five minutes.\"",
          "Of course, there were problems. Our clients still expected us to answer on Fridays, so the customer support team had to work in shifts: half of them had Friday off, the other half had Monday. A few people found the new rhythm stressful, because they felt they had to prove that the experiment was working. And one manager admitted that he had secretly been answering emails on Fridays — which, we decided, was against the spirit of the trial.",
          "So what were the results? After six months, we had finished more projects than in the same period the year before. Fewer people had taken sick days. In a survey, almost everyone said they were less tired and had more time for their families, sport and hobbies. I started learning Kazakh on Fridays, and I finally have time to go hiking with my friends without feeling guilty.",
          "The director has decided to keep the four-day week, at least for now. It isn't perfect, and I don't think it would work for every company — a hospital or a bakery, for instance, is a very different story. But for us, the experiment showed something important: working longer doesn't always mean working better. 🌱",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did most people react to the director's idea at first?", options: ["*They didn't take it seriously.", "They were very excited.", "They refused to try it."] },
      { q: "What happened to the weekly meeting?", options: ["*It became much shorter.", "It moved to Friday.", "It was cancelled completely."] },
      { q: "Why did some people find the trial stressful?", options: ["*They felt they had to prove it was working.", "They had to work on Fridays.", "Their salaries went down."] },
      { q: "What does Kenji think about the four-day week?", options: ["*It worked for his company but not for every business.", "Every company should try it.", "It was a failure."] },
    ]),
  ]),

  section("Writing and speaking", [
    order("Make sentences.", [
      "I've been learning English for six years.",
      "If I had more time, I would travel more.",
      "She told me she had already seen the film.",
      "The museum was opened in 1995.",
      "You should have asked me first.",
    ]),
    write(
      "Write a comment to Kenji's article (100–120 words). Would you like to work or study four days a week? What would you do with your free day? Can you see any problems?",
      100,
    ),
    text(
      "Speaking: talk to your teacher for 3–4 minutes 🗣️",
      "- A decision that changed your life. What would have happened if you had decided differently?\n- Something you've been doing recently and how long you've been doing it.\n- Your town ten years ago and now: *It used to be… Now it's… A new … has been built.*\n- A short opinion: *Should everyone learn a foreign language at school? Why / why not?*\n\nYour teacher listens and makes notes. 📝",
    ),
    tip("Speaking: listen for range (different tenses, conditionals, linking words), not only for mistakes. Note 2–3 strong points and 2–3 things to work on."),
  ]),

  section("Your result", [
    tip(
      "Look at the points together. Write down 2–3 weak topics (for example: Present Perfect Continuous, the passive, conditionals). In the next lessons the warm-ups help to review them. Under 60%? Choose lessons from English B1 for review first.",
    ),
    box(
      "What's next? 🚀",
      "In **English B2** you will:\n\n- read longer articles and understand natural, fast English 🎧\n- tell stories with all the past tenses and talk about the future in detail 🔮\n- take part in **real debates** — by the rules, with time limits ⚖️\n- write essays, articles, reviews and reports of 140–190 words ✍️\n- get ready for the **Cambridge B2 First** exam format 🎓",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with the right form of the verb in brackets.",
        "1. I [have been learning/'ve been learning] English for six years. (learn — continuous)\n2. When I arrived, everyone [had left] already. (leave)\n3. This time next week, we [will be flying/'ll be flying] to Seoul. (fly)\n4. The house [was built] in 1950. (build — passive)\n5. If I [had known], I would have helped you. (know)\n6. She told me she [was] busy. (be)\n7. I'm not used to [working] at night. (work)\n8. I wish I [had] more free time. (have)",
      ),
      choose(
        "Choose.",
        "1. He [*must have/can't have] forgotten — he's never late!\n2. I [*'ve been reading/'m reading] this book since Monday.\n3. If it [*doesn't rain/won't rain], we'll have a picnic.\n4. The man [*who/which] called you is my uncle.\n5. We [*didn't need to/mustn't] hurry — we had lots of time.\n6. She asked me [*where I lived/where did I live].\n7. I [*haven't seen/didn't see] him since Monday.\n8. By the time we got there, the shop [*had closed/closed].",
      ),
      drag(
        "Complete the email with the words.",
        "Hi Lena,\n\nSorry I haven't written [for] ages! I've been really busy [since] I started my new job. I'm finally getting [used] to the early mornings. Last week I [came] up with an idea for a new project, and my boss loved it! If everything goes well, I [might] get a promotion. I wish you [were] here — we could celebrate together!\n\nLove, Aliya",
        ["during", "use", "must"],
      ),
      write("What is the most difficult thing in English for you now? What are you going to do about it during the B2 course? (80+ words)", 80),
      record("Record a 1–2 minute introduction: who you are, what you do, and why you want to reach B2. 🎤", 120),
    ],
    "Homework: Review",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["I've been knowing her for ten years.", false],
        ["By the time we arrived, the film had started.", true],
        ["If I would have time, I would help you.", false],
        ["The letter was sent yesterday.", true],
        ["She said me that she was tired.", false],
        ["I'm looking forward to seeing you.", true],
        ["He suggested to go to the cinema.", false],
        ["It must have been a mistake.", true],
      ]),
      quiz("Choose the right word.", [
        { q: "I'm really ___ in history.", options: ["*interested", "interesting", "interest"] },
        { q: "Could you ___ me a favor?", options: ["*do", "make", "give"] },
        { q: "We've ___ milk. Can you buy some?", options: ["*run out of", "run into", "run away"] },
        { q: "She ___ the job offer because the salary was low.", options: ["*turned down", "turned up", "put off"] },
      ]),
    ],
    "Homework: Grammar and vocabulary check",
  ),
]);
