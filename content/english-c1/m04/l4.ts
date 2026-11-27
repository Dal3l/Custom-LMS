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
  text,
  tip,
  trueFalse,
  video,
  write,
} from "../../kit";

// 4.4 Revision 3–4 — points for every task, in the format of Cambridge C1 Advanced: Use of English Part 3 (word formation) and Part 4 (key word transformations), Reading Part 6 (cross-text multiple matching: four experts on remote work, ~650 words), Listening Part 2 (sentence completion: a talk by a mountain hut keeper, ~3:20); grammar and vocabulary of modules 3–4; Speaking Part 3 (a discussion). Project: a proposal "How to improve work (or study) in our organization" (220–260 words). Homework video: Juliet Schor, TED, "The case for a 4-day work week".
// Warm-up format: a quiz about modules 3–4 — after true / false facts in 4.3.
export default lesson("c1-4.4", "Revision 3–4", () => [
  section("Warm-up: How much do you remember?", [
    box(
      "Today you will…",
      "- check what you've learned in modules 3 and 4 ✅\n- try more **C1 Advanced** task types for points: word formation, key word transformations, cross-text matching, sentence completion 🎓\n- plan your project: a **proposal** ✍️",
    ),
    quiz("Modules 3–4: how much do you remember? 🧠", [
      { q: "In the 2018 MIT study, which stories spread faster on Twitter?", options: ["*false ones", "true ones", "there was no difference"] },
      { q: "On average, how accurately do people detect lies?", options: ["*about 54%", "about 75%", "about 90%"] },
      { q: "What is a BATNA?", options: ["*your best alternative if there's no agreement", "the lowest price you accept", "a type of contract"] },
      { q: "What happened to the number of US bank tellers after ATMs spread?", options: ["*It didn't fall — for years it grew.", "It fell to almost zero.", "It halved in two years."] },
      { q: "What does Kenji's team rule say?", options: ["*no meetings after two", "no emails after five", "no work on Fridays"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which lesson of modules 3–4 changed your mind about something?\n- Which grammar still feels tricky: hedging, comment adverbs, future forms or *be to*?\n- Have you used any negotiation or networking phrases in real life since then? 😊",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part and explain the exam tip. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 3–4."),
  ]),

  section("Use of English Part 1: Multiple-choice cloze", [
    tip("Exam tip: the four options often have similar meanings — the answer depends on collocation (*make a difference*, *draw a conclusion*) or on the preposition after the gap."),
    choose(
      "Read the text and choose the best word for each gap.",
      "Spotting fake news 📰\n\nIn an age when anyone can publish anything, it has never been more important to [*check/control/test/prove] the source of what we read. Fact-checkers recommend that we pay particular [*attention/notice/care/regard] to headlines that make us angry or excited, because strong emotions [*cloud/hide/cover/block] our judgment. It is also worth looking for other reports that [*confirm/agree/accept/admit] the story. If only one website is reporting a dramatic claim, it may well be [*unfounded/unknown/unable/unsure]. Of course, none of this means we should [*dismiss/deny/drop/refuse] everything we read. The aim is not to distrust everything, but to take nothing at face [*value/worth/price/cost]. In the end, a few seconds of checking can [*make/do/take/give] all the difference.",
    ),
  ]),

  section("Use of English Part 2: Open cloze", [
    tip("Exam tip: look at the words on both sides of the gap. Many answers are parts of fixed phrases (*in spite OF*, *as long AS*, *on the verge OF*) or grammar words (*be TO*, *it would appear THAT*)."),
    gaps(
      "Read the text and write ONE word in each gap.",
      "A new way of working 💼\n\nWhen our company announced that we [were] to have a four-day week, few of us believed it would last. The trial was due [to] start in January and was to [have] lasted three months. Today, two years later, it is still in place. It would appear [that] productivity has actually risen. [As] for the employees, most say they would never go back. Admittedly, not [everything] has been easy: some clients still expect us to answer on Fridays. But we are on the verge [of] making the change permanent, and other companies are bound [to] follow.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: read the whole sentence and decide what part of speech is needed. At C1, many answers need two changes — a prefix AND a suffix (*un-…-able*), or a plural, or an internal change (*deceive → deception*)."),
    gaps(
      "Read the text. Use the word in brackets to form a word that fits the gap.",
      "The four-day week 🗓️\n\nTrials of a shorter working week have produced some [surprisingly] positive results. (surprise) In many companies, [productivity] stayed the same or even rose. (produce) Employees reported less stress and greater job [satisfaction]. (satisfy) Critics, however, argue that the results may be [misleading], since the companies that volunteered were probably the most enthusiastic. (lead) They also point out that the model is [unsuitable] for hospitals, schools and shops. (suit) Supporters reply that [flexibility] is the key: each sector must find its own solution. (flexible) What seems [undeniable] is that the debate is here to stay. (deny) For many workers, the idea of a three-day weekend is simply [irresistible]. (resist)",
    ),
  ]),

  section("Use of English Part 4: Key word transformations", [
    tip("Exam tip: use between three and six words, including the word given, which must not change. Typical C1 tests: passives with *said / thought*, *be to*, inversion, *it's high time*, phrasal verbs and fixed phrases."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in brackets.",
      "1. People believe that the company lost millions last year. (believed) → The company [is believed to have lost] millions last year.\n2. The meeting was planned for Monday, but it didn't happen. (was) → The meeting [was to have taken place/was to have been held] on Monday.\n3. I'm sure prices will rise. (bound) → Prices [are bound to rise].\n4. It seems that she has forgotten. (appears) → She [appears to have forgotten].\n5. You really should start revising now. (high) → It's [high time you started revising/high time you started to revise] now.\n6. Scientists are very close to finding a cure. (verge) → Scientists are [on the verge of finding] a cure.",
    ),
  ]),

  section("Reading Part 6: Four experts on remote work", [
    tip("Exam tip: in Part 6 you read four short texts by different people on the same topic. The questions ask who AGREES or DISAGREES with whom about a specific point. First underline each writer's opinion on every point (productivity, young employees, managers…), then compare. 10 minutes."),
    quiz(
      "Read the four texts. Choose A, B, C or D.",
      [
        { q: "1. Which expert has a different opinion from the others about how remote work affects productivity?", options: ["*B", "A", "C", "D"] },
        { q: "2. Which expert shares A's view that young employees lose out when they work remotely?", options: ["*B", "C", "D", "none of them"] },
        { q: "3. Which expert has a similar view to C on the role of managers?", options: ["*D", "A", "B", "none of them"] },
        { q: "4. Which expert has a different view from A on whether young employees can learn effectively at a distance?", options: ["*C", "B", "D", "none of them"] },
      ],
      {
        read: [
          "## 🏠 Is remote work here to stay?",
          "**A — an economist**\n\nThe evidence on productivity is clearer than the debate suggests. For tasks that need deep concentration — writing, analysis, programming — people working from home tend to do as much or more, not least because they are interrupted less and do not spend two hours a day commuting. The real cost lies elsewhere. Much of what young employees learn is picked up informally: overhearing how a senior colleague handles a difficult call, asking a quick question at the next desk. At a distance, that kind of learning largely disappears, and I am not convinced that video calls can replace it. A hybrid model, with some days in the office, seems the most sensible compromise. Companies that insist on a full return, on the other hand, are likely to lose some of their most valuable staff to more flexible competitors.",
          "**B — a psychologist**\n\nWorking from home was presented as a gift, and for some people it is. But I see the other side. Many of the people I work with describe feeling isolated, and their sense of belonging to a team has weakened. I am also skeptical of the claim that output has improved; in my experience, people are busier, but they are not necessarily achieving more, and the boundary between work and rest has become dangerously blurred. Those who suffer most are often the youngest — new graduates who have never had the chance to build relationships at work and who quietly miss out on the advice and encouragement that older colleagues offer in person. I would not want to return to the old five-day office week, but we should stop pretending that working alone at a kitchen table suits everybody.",
          "**C — a human resources director**\n\nIn our company, results have held up well since we moved most roles online. But I would not attribute that to the location. What makes remote work succeed or fail is management. Managers who judge people by the hours they appear to be online create anxiety and exhaustion; managers who agree clear goals and then trust people to reach them get excellent results. I also disagree with the idea that new employees cannot develop remotely. We pair every new joiner with a mentor, schedule regular one-to-one conversations, and the progress we see is just as fast as before. It simply has to be organized deliberately rather than left to chance. In some respects, our younger staff now receive more attention than they did when they were sitting in a noisy open-plan office.",
          "**D — an urban planner**\n\nMy interest is in cities. Fewer commuters mean quieter roads, cleaner air and, in some places, a welcome revival of neighborhood cafés and shops. Most of the studies I have read suggest that, for office work, productivity has not suffered and has sometimes improved, so I see no economic reason to reverse the trend. Where it fails, the problem is usually leadership: a manager who still measures commitment by visibility, rather than by what people actually deliver, will make any arrangement fail. I expect remote and hybrid work to keep growing, and our cities will need to adapt to that. Empty office towers could become homes, schools or community spaces — if planners are brave enough to imagine it.",
        ].join("\n\n"),
      },
    ),
    gaps(
      "Find words and phrases in the texts.",
      "1. traveling to and from work every day: [commuting]\n2. learned without trying, by watching others (two words): picked [up]\n3. alone, without contact with others: [isolated]\n4. not easily believing something: [skeptical]\n5. a new period of activity after a decline: a [revival]\n6. on purpose, carefully planned: [deliberately]",
    ),
  ]),

  section("Listening Part 2: Sentence completion", [
    tip("Exam tip: you hear one speaker for about three minutes. Read the sentences first and predict what kind of word is missing (a number? a noun? an adjective?). You hear the exact words you need — write them as you hear them. In the exam you hear the recording twice."),
    ...listening(
      "Listen to a woman talking about her job as a mountain hut keeper. Complete the sentences.",
      "**Speaker 1:** Hello, everyone, and thank you for inviting me to your careers evening. I'm probably the only person tonight whose office is at two thousand eight hundred meters above sea level. For the last nine summers, I've been the keeper of a mountain hut — a small refuge where hikers and climbers can eat, sleep and shelter from bad weather.\n\nPeople often imagine it's a romantic job: sunsets, silence, fresh air. And yes, there are sunsets. But the reality is mostly logistics. Everything we use has to come up the mountain somehow. Food, gas and spare parts arrive by helicopter twice a season, so I have to plan the menus for four months in advance. Fresh vegetables are a luxury. If I forget something important — and the year I forgot the coffee filters, I was very unpopular — it can't be fixed with a quick trip to the shop.\n\nMy working day starts at half past four in the morning, because the climbers who are attempting the summit leave before dawn. I make breakfast for up to forty people, check the weather forecast, and talk to anyone who's planning a difficult route. That conversation is probably the most important part of my job. If someone looks exhausted or poorly equipped, I tell them, politely but very clearly, that they are not to go up that day. Most people listen. A few are angry. I would rather have an angry guest than a rescue.\n\nAfter the morning rush, I clean, cook, fix whatever has broken, and answer the radio. We have no mobile signal, so the radio is our connection to the valley and to the rescue service. Several times a season, I'm the first person to hear that someone is in trouble. Those are the hours I don't sleep.\n\nWhat surprised me most when I started was how much of the job is psychological. People arrive tired, cold and sometimes frightened. A bowl of hot soup and a friendly face can change their whole mood. I've seen grown men cry because I gave them dry socks.\n\nIs it a job for everyone? Definitely not. You need to be practical, calm in a crisis, and comfortable with your own company, because there are weeks when bad weather keeps everyone away. You also need to accept that you'll be living with very little: my room is two meters by three, and the shower is solar-powered, which means no hot water on cloudy days.\n\nPeople sometimes ask me how I cope with the isolation. Honestly, I'm rarely alone — in July and August, the hut is full almost every night. The quiet comes in September, and I've learned to enjoy it: I read, I repair things, and I write long letters, because there's no internet to distract me.\n\nSo why do I keep coming back? Partly for the mountains, of course. But mostly for the people. In one evening, I might have a retired teacher from Japan, two students from Almaty and a family from Brazil, all sharing one table. By the end of the night, they're usually singing. That's the part of the job I'd never give up.\n\nIf any of you are interested, most huts look for assistants every spring. My advice: learn first aid before anything else. Thank you.",
    ),
    gaps(
      "Complete the sentences with a word or short phrase from the talk.",
      "1. The speaker has worked as a hut keeper for [nine/9] summers.\n2. Supplies arrive by [helicopter] twice a season.\n3. She once forgot the coffee [filters].\n4. Her working day starts at half past [four/4] in the morning.\n5. She tells exhausted or poorly equipped climbers that they are not to go up that day; she would rather have an angry guest than a [rescue].\n6. Because there is no mobile signal, the [radio] is the hut's connection to the valley.\n7. The shower is [solar-powered], so there's no hot water on cloudy days.\n8. Her advice for future assistants is to learn [first aid] first.",
    ),
    trueFalse("Listen again. True or false?", [
      ["The speaker thinks the job is mostly romantic.", false],
      ["She plans the menus months in advance.", true],
      ["Most climbers ignore her advice.", false],
      ["She says the psychological side of the job surprised her.", true],
      ["She finds the evenings with guests the best part of the job.", true],
    ]),
  ]),

  section("Grammar check", [
    choose(
      "Choose the correct option.",
      "1. The suspect is thought [*to have left/to leave] the country last week.\n2. It would [*appear/appears] that the figures were wrong.\n3. [*Admittedly/Utterly], the price is high — but the quality is excellent.\n4. I was [*absolutely/very] furious.\n5. Unemployment is [*set to/set for] rise.\n6. The minister [*is to/is about] visit the region next week.\n7. The launch [*was to have taken/was to take] place in May, but it was delayed.\n8. If we [*are to/will] succeed, we need a clear plan.",
    ),
    trueFalse("Correct or not?", [
      ["There are said to be thousands of fake accounts.", true],
      ["She is believed to lie about her age last year.", false],
      ["It's highly unlikely that they'll agree.", true],
      ["We are on the verge to find a solution.", false],
      ["Visitors are not to feed the animals.", true],
      ["He's bound to forgetting.", false],
    ]),
    gaps(
      "Complete with one word.",
      "1. The thief is believed to [have] escaped through the window.\n2. There are thought [to] be over 500 people in the building.\n3. Prices are [set/bound/likely] to rise next year.\n4. The train is [due] to arrive at 6:15.\n5. Passengers are not [to] leave bags unattended.\n6. The disappointing results were, to [say] the least, a surprise.",
    ),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["debunk", "show that something is false"],
      ["corroborate", "confirm with more evidence"],
      ["a white lie", "a small kind lie"],
      ["a sticking point", "a problem that stops agreement"],
      ["redundant", "without a job because it isn't needed"],
      ["obsolete", "no longer used"],
      ["be entitled to", "have the right to"],
      ["burnout", "exhaustion from overwork"],
    ]),
    sort("Which module? Sort the words and phrases. 🧩", {
      "🕵️ Module 3: truth and lies": ["misleading", "take at face value", "come clean", "a telltale sign", "meet halfway"],
      "💼 Module 4: the future of work": ["upskill", "the gig economy", "a notice period", "a sense of purpose", "on probation"],
    }),
  ]),

  section("Collocations check", [
    quiz("Choose the word that completes the collocation.", [
      { q: "It's highly ___ that the plan will work.", options: ["*unlikely", "impossible", "sure"] },
      { q: "She was bitterly ___ with the result.", options: ["*disappointed", "tired", "surprised"] },
      { q: "Let's meet ___ — 15% instead of 20%.", options: ["*halfway", "middle", "between"] },
      { q: "After the factory closed, he decided to ___ as a nurse.", options: ["*reskill", "upskill", "promote"] },
    ]),
  ]),

  section("Speaking Part 3: Discuss together", [
    text(
      "Discuss with your teacher 🗣️",
      "**How might these changes affect people's working lives in the future?**\n\n- 🤖 artificial intelligence\n- 🏠 working from home\n- 🗓️ a four-day week\n- 📵 a legal right to disconnect\n- 🎓 lifelong learning\n\nTalk for about **2 minutes** together. Then decide: **Which change would make the biggest positive difference — and why?** (1 minute)",
    ),
    tip("About 3 minutes. In the exam, Part 3 tests interaction: the student should respond to the teacher's ideas, agree and disagree politely, invite opinions (*What do you think about…?*) and move the discussion towards a decision. Feedback on interaction first, then language (future forms, hedging, comment adverbs)."),
  ]),

  section("Writing: plan your proposal", [
    order(
      "Put the parts of a C1 proposal in the right order.",
      [[
        "A clear title and an introduction: the purpose of the proposal",
        "The current situation: what the problem is, with brief evidence",
        "Recommendation 1: what should be done, and why",
        "Recommendation 2: what should be done, and why",
        "Practical details: cost, timing, who is responsible",
        "Conclusion: the expected benefits, and a final persuasive sentence",
      ].join("\n")],
      "lines",
    ),
    tip("A proposal is written for someone who will make a decision (a manager, a director, a committee). It uses headings, a formal and persuasive tone, and recommendations — not personal stories. Brainstorm two real problems in the student's workplace or school and choose one for the project."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can report information carefully with hedging and distancing.", true],
      ["I can show my attitude with comment adverbs, intensifiers and softeners.", true],
      ["I can negotiate: propose, concede with a condition and say no politely.", true],
      ["I can talk about the future with be set to, be bound to, be on the verge of…", true],
      ["I can use be to for plans, rules and plans that didn't happen.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "✍️ Project: a proposal",
      "Write a **proposal** (220–260 words) to the director of your company, school or organization: **How to improve work (or study) in our organization**.\n\n**Include:**\n- a title and headings\n- the current situation and the problem\n- two or three clear recommendations\n- future forms: *is set to, is likely to, would be bound to…*\n- *be to* for plans and rules: *Employees are to… The scheme is to start…*\n- a persuasive conclusion\n\n🎧 Option: present it as a 3-minute pitch.",
    ),
  ]),

  homework(
    [
      video("Watch: Juliet Schor — The case for a 4-day work week (TED).", "MyVfUaXyyqo"),
      choose(
        "Choose.",
        "1. The report is said [*to contain/containing] serious errors.\n2. [*Frankly/Frank], I don't think it will work.\n3. The project was [*to have finished/to finish] last year.\n4. Experts say we are on the [*verge/edge] of a crisis.\n5. That's [*highly/utterly] unlikely.\n6. Employees [*are to/are about] submit their reports by Friday.",
      ),
      gaps(
        "Word formation. Complete with the right form of the word in brackets.",
        "1. Her story was full of [inconsistencies]. (consistent)\n2. The job offers excellent [security]. (secure)\n3. Machines can [replace] some, but not all, tasks. (place)\n4. He was praised for his [honesty]. (honest)\n5. The report contains several [inaccuracies]. (accurate)\n6. The new rules [strengthen] workers' rights. (strong)",
      ),
      order("Make sentences.", [
        "The minister is to visit Almaty next week.",
        "It would appear that the report was wrong.",
        "We are on the verge of a breakthrough.",
        "Admittedly, the price is a tad high.",
        "The concert was to have taken place on Friday.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your proposal “How to improve work (or study) in our organization” (220–260 words).", 220),
      record("Project (option): present your proposal as a 3-minute pitch to the director. 🎧", 180),
    ],
    "Homework: Project",
  ),
]);
