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
  picture,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 8.4 Revision 7–8 — points for every task, in the format of B1 Preliminary: Reading Parts 2, 4, 5 and 6, Listening Parts 1 and 4, Writing Part 2 (a story), Speaking Parts 2–3. Grammar: -ing / to, remember / stop / try, make / let / allow, conditionals 0–2, unless / as long as / in case. Project: “The Dilemma Show”.
export default lesson("b1-8.4", "Revision 7–8", () => [
  section("Warm-up: Do you know our characters?", [
    box(
      "Today you will…",
      "- check what you've learned in modules 7 and 8 ✅\n- try B1 Preliminary tasks for points 🎓\n- start your project: *The Dilemma Show* 🎤",
    ),
    trueFalse("You've followed our characters all course! True or false? 👥", [
      ["Daniyar wants to study computer science in Korea.", true],
      ["Asel left her job at a bank and opened a bakery.", true],
      ["Kenji works as a pilot.", false],
      ["Ruslan went missing in the mountains and later became a rescuer.", true],
      ["Zarina is the voice of cartoon characters.", true],
      ["Laura and Kenji met at a party in Tokyo.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- Which character's story do you like most? Why?\n- If you could give one piece of advice to one of the characters, what would it be?\n- Which grammar from modules 7–8 do you find the most useful in real life?",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part. Score guide: 85%+ excellent; 70–85% good — review weak topics in the warm-ups; under 70% — repeat the grammar sections of the weak lessons."),
  ]),

  section("Reading Part 2: The right weekend activity", [
    match("Read about the people and the activities. Which activity is best for each person?", [
      ["Saule wants something relaxing with fresh air. She can't walk far.", "A boat trip on the lake — 1 hour, seats for everyone"],
      ["Daniyar loves adventure and doesn't mind getting tired.", "Mountain hike with a guide — 8 hours, for fit teenagers and adults"],
      ["Madina wants to meet creative people and show her work.", "Young designers' market — bring your own work to sell"],
      ["Kenji wants to try something new with friends in the evening.", "Climbing gym night — beginners welcome, 7–10 p.m."],
      ["Zarina loves animals and wants to help.", "Animal shelter open day — volunteers needed"],
      ["Arman wants to save money and spend time with the family at home.", "Free family movie night at the community center"],
    ]),
  ]),

  section("Reading Part 4: Missing sentences", [
    drag(
      "Read the text. Put the missing sentences in the gaps. There are two extra sentences.",
      "The phone-free family dinner 🍽️\n\nThe Nurlanov family has a new rule: no phones at dinner. [It was Saule's idea after a very quiet family birthday.] Everyone was looking at their screens instead of talking. At first, Daniyar refused to agree. [He said he needed his phone in case his friends messaged.] But Arman made a deal with him. [He could have his phone back as long as he cooked twice a week.] After a month, something changed. [The family started talking and laughing much more.] Now even Daniyar likes the rule. [Last week, he was the one who reminded his dad to put his phone away!] [Madina says she will keep the rule when she has her own family.]",
      ["The family decided to sell all their phones.", "Saule bought a new smartphone last year."],
    ),
  ]),

  section("Reading Part 5: Choose the word", [
    choose(
      "Read the text and choose the best word for each gap.",
      "A friendship that started online 💬\n\nTom and Jin met in an online game five years ago. They enjoyed [*playing/to play/play] together every evening, and soon they started [*to/for/of] talk about their lives. When Tom's dad was ill, Jin [*kept/stopped/avoided] sending him messages every night. Last summer, their parents finally [*let/made/allowed] them meet in person. \"I'll never forget [*seeing/to see/see] him at the airport,\" says Tom. Now they're planning [*to travel/travelling/travel] together. \"If we [*lived/live/would live] in the same city, we'd meet every day,\" Jin says.",
    ),
  ]),

  section("Reading Part 6: One word", [
    gaps(
      "Read the message. Write ONE word in each gap.",
      "Hi Laura!\n\nThanks again for buying my bike! I hope you enjoy [riding] it. Remember [to] check the tyres every month. If you [have] any problems, call me.\n\nBy the way, my dad finally let [me] go on the hiking trip! I'll go with Ruslan's group, as long [as] I call home every evening. 😄 I won't go [unless] the weather is good, of course.\n\nIf I [were] you, I'd join us next time — you'd love it!\n\nDaniyar",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. I enjoy [*cooking/to cook] for my friends.\n2. She decided [*to leave/leaving] her job.\n3. Remember [*to lock/locking] the door!\n4. My parents made me [*study/to study] every evening.\n5. We weren't allowed [*to use/use] our phones.\n6. If it [*rains/will rain] tomorrow, we'll stay home.\n7. If I [*had/have] more time, I'd learn Japanese.\n8. Take an umbrella [*in case/unless] it rains.",
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. I'll never forget [meeting] my best friend. (meet)\n2. He refused [to help] us. (help)\n3. My parents let me [stay] up late on Fridays. (stay)\n4. If I [won] the lottery, I'd buy a house. (win)\n5. If you heat ice, it [melts]. (melt)\n6. I won't go unless you [come] too. (come)",
    ),
    order("Make sentences.", [
      "I'll never forget meeting her.",
      "My parents let me go to the party.",
      "If I were you, I'd say sorry.",
      "Take a jacket in case it gets cold.",
      "She stopped eating meat last year.",
    ]),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["get on with", "have a good relationship"],
      ["fall out", "argue and stop being friends"],
      ["a curfew", "the time you must be home"],
      ["ghost", "suddenly stop answering"],
      ["haggle", "argue about the price"],
      ["afford", "have enough money for"],
      ["a dilemma", "a difficult choice"],
      ["bias", "an unfair preference"],
    ]),
    sort("Sort the words. 🧩", {
      "👫 relationships": ["make up", "look up to", "drift apart", "count on"],
      "💰 money": ["a bargain", "broke", "a discount", "owe"],
      "🤖 ethics": ["privacy", "fair", "responsible", "data"],
    }),
    quiz("Choose the right word.", [
      { q: "I'm completely ___ — I can't even buy a coffee.", options: ["*broke", "mean", "overpriced"] },
      { q: "She left me on ___ — no answer for two days!", options: ["*read", "block", "follow"] },
      { q: "My parents were very ___ — lots of rules.", options: ["*strict", "spoiled", "independent"] },
      { q: "I'm afraid I see it ___.", options: ["*differently", "difference", "different"] },
    ]),
  ]),

  section("Listening Part 1: Short conversations", [
    tip("Like B1 Preliminary Listening Part 1: five short recordings, one question each."),
    ...listening(
      "Listen to five short conversations. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** Did you buy the jacket in the end?\n\n**Man:** No. It was on sale, but it was still too expensive. I'll wait unless the price goes down again.\n\n**2.**\n\n**Leo:** Are you coming to the party on Saturday?\n\n**Dana:** I'd love to, but I promised to help my mum move house. If I finish early, I'll come later.\n\n**3.**\n\n**Man:** How did your parents react when you told them about the trip?\n\n**Girl:** Mum was fine, but Dad made me promise to call every day. In the end, he let me go.\n\n**4.**\n\n**Woman:** What would you do if you won the lottery?\n\n**Kenji:** Honestly, I wouldn't change much. I'd pay for my parents to visit me from Japan.\n\n**5.**\n\n**Asel:** I can't believe you stopped drinking coffee!\n\n**Laura:** I know! I tried to stop last year and failed. This time I stopped drinking it after six p.m. only — and I sleep much better.",
    ),
    quiz("Listen and choose.", [
      { q: "1. Why didn't the man buy the jacket?", options: ["*It was still too expensive.", "It was the wrong size.", "The shop was closed."] },
      { q: "2. Why can't Dana come to the party at first?", options: ["*She promised to help her mum move house.", "She's ill.", "She has to work."] },
      { q: "3. What did the girl's dad make her do?", options: ["*promise to call every day", "stay at home", "pay for the trip herself"] },
      { q: "4. What would Kenji do with lottery money?", options: ["*pay for his parents to visit him", "buy a house in Japan", "stop working"] },
      { q: "5. What has Laura changed?", options: ["*She doesn't drink coffee after 6 p.m.", "She stopped drinking coffee completely.", "She drinks more coffee."] },
    ]),
  ]),

  section("Listening Part 4: An interview", [
    tip("Like B1 Preliminary Listening Part 4: one longer interview, six questions. Give 1 minute to read the questions first."),
    ...listening(
      "Listen to an interview with Madina about her online design community. Choose the right answers.",
      "**Interviewer:** Madina, you run an online community for young designers. How did it start?\n\n**Madina:** About three years ago, I felt very alone as a freelancer. I didn't have colleagues to ask for advice. So I decided to create a group chat for designers I'd met online. At first there were ten of us.\n\n**Interviewer:** And now?\n\n**Madina:** Now there are over two thousand members from forty countries! We share our work, give feedback and help each other find clients.\n\n**Interviewer:** Have you ever met any of them in person?\n\n**Madina:** Yes, several! Last year I went to a design festival in Istanbul, and twelve members came. Meeting them felt strange at first — I knew their work so well, but not their faces! But after an hour we were laughing like old friends.\n\n**Interviewer:** What are the rules in your community?\n\n**Madina:** Very simple. Be kind, give honest feedback, and never copy someone's work. If people break the rules, we ask them to leave. We don't allow anyone to sell things without permission, either.\n\n**Interviewer:** What's next?\n\n**Madina:** I'm planning to organize our own festival in Almaty next summer. If enough people come, we'll make it an event every year.\n\n**Interviewer:** Good luck!",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Madina start the community?", options: ["*She felt alone as a freelancer.", "Her teacher told her to.", "She wanted to sell her designs."] },
      { q: "How many members are there now?", options: ["*over 2,000", "about 200", "ten"] },
      { q: "Where did Madina meet some members in person?", options: ["*at a design festival in Istanbul", "in Almaty", "in Seoul"] },
      { q: "How did meeting them feel at first?", options: ["*strange", "boring", "scary"] },
      { q: "What is NOT allowed in the community?", options: ["*selling things without permission", "giving honest feedback", "sharing work"] },
      { q: "What is Madina planning?", options: ["*a festival in Almaty next summer", "to close the community", "to move to Istanbul"] },
    ]),
  ]),

  section("Writing Part 2: A story", [
    write("Write a story (100 words) that begins: “When I opened the door, I couldn't believe what I saw…”", 100),
  ]),

  section("Speaking Parts 2–3", [
    picture("Part 2: Describe the photo.", ["photos/woodstock-crowd.jpg"]),
    text(
      "Part 2: Talk about the photo for 1 minute 📸",
      "Describe the photo: **where** the people are, **what** they're doing, **how** they feel, the **atmosphere**. Then say: *Would you like to be there? Why / why not?*",
    ),
    text(
      "Part 3: Choose together 🗣️",
      "A friend wants to make new friends in a new city. Talk with your teacher about these ideas. Which **two** are best?\n\n- 💻 join an online community\n- 🏃 join a sports club\n- 🎨 take an evening class\n- 🐶 get a dog and walk in the park\n- 🤝 volunteer for a charity\n\n*Useful: I'd suggest… because… If she joined…, she'd… That's a good idea, but…*",
    ),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can use -ing or to after verbs like enjoy and decide.", true],
      ["I know the difference between “remember doing” and “remember to do”.", true],
      ["I can talk about family rules with make, let and allow.", true],
      ["I can imagine situations with “If I had…, I'd…”.", true],
      ["I can disagree politely and find a compromise.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "🎤 Project: The Dilemma Show",
      "Prepare your own TV-style show about difficult choices!\n\n**Include:**\n- 3 dilemmas (*What would you do if…?*)\n- your own answers with reasons (*If I were in that situation, I'd… because…*)\n- one interview: ask a friend or family member and report their answers\n\n🎥 Video: 2–3 minutes · 📝 or a written script of 150+ words",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with one word.",
        "1. I enjoy [spending] time with my family.\n2. My parents let [me] stay out late.\n3. If I [were] you, I'd apologize.\n4. Take some money in [case] you need a taxi.\n5. I won't go [unless] you come with me.\n6. Remember [to] call your grandma!",
      ),
      choose(
        "Choose.",
        "1. She avoids [*talking/to talk] about her problems.\n2. They promised [*to come/coming] early.\n3. My boss made me [*work/to work] on Sunday.\n4. If I [*knew/know] his number, I'd call him.\n5. If you [*don't/won't] hurry, you'll be late.\n6. You can borrow it [*as long as/in case] you give it back.",
      ),
      trueFalse("Correct or not?", [
        ["I enjoy to read before bed.", false],
        ["My parents didn't let me go.", true],
        ["If I would have money, I'd travel.", false],
        ["Take a coat in case it gets cold.", true],
        ["She made me to wait outside.", false],
        ["I'll never forget meeting you.", true],
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: The Dilemma Show (150+ words). Write the script: three dilemmas, your answers with reasons, and one interview.", 150),
      record("Project (option): Record your Dilemma Show as a video or audio (2–3 minutes). 🎥", 180),
    ],
    "Homework: Project",
  ),
]);
