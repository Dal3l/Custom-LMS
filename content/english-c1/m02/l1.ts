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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 2.1 Had I known… — G: inverted conditionals (Had I known…, Should you need…, Were it not for…, Were we to…), but for, otherwise, provided / providing / as long as; mixed conditionals (review). V: risk (a calculated risk, play it safe, high stakes…). S: discuss decisions "on the edge". Main format: ranking risky decisions + a long reading (Asel on leaving the bank, loss aversion and regret, ~800 words) + TED-Ed video in class (Gerd Gigerenzer) + a long listening (a radio show: Ruslan and Kenji on turning back and going ahead, ~4:10).
// Facts checked: Kahneman & Tversky, "Prospect Theory" (Econometrica, 1979) — losses weigh more heavily than equal gains ("loss aversion"); later estimates put losses at roughly twice the weight of gains (Tversky & Kahneman, 1992); Kahneman received the Nobel prize in economics in 2002 (Tversky had died in 1996). Gilovich & Medvec (1995) — in the short term people regret actions more; in the long term they regret things they didn't do more. Gerd Gigerenzer, TED-Ed "How good are you at calculating risk?" (relative vs absolute risk).
// Warm-up format: rank risky decisions (order, lines) — after a sort in 1.4. Characters: Asel (8 years in a bank, now two bakeries "Asel's Bakery"), Ruslan (a mountain rescuer, now runs a mountain safety center), Kenji (tech company, "no meetings after two").
export default lesson("c1-2.1", "Had I known…", () => [
  section("Warm-up: The risk scale", [
    box(
      "Today you will…",
      "- think about why some risks scare us and others don't ⚖️\n- talk about the past and its results in a more formal, flexible way: *Had I known… Should you need… Were it not for…* 🔁\n- discuss real decisions “on the edge” 🧗",
    ),
    order(
      "Put the decisions in order: from the safest (top) to the riskiest (bottom) — in your opinion.",
      [[
        "Lending a close friend a small amount of money",
        "Telling your boss in a meeting that they are wrong",
        "Moving to another country alone, without a job",
        "Getting married after knowing someone for three months",
        "Leaving a stable job to start your own business",
        "Putting all your savings into one company's shares",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Compare your order with your teacher's. Where do you disagree most? Why?\n- What's the biggest risk you've ever taken? Was it worth it?\n- Are you a risk-taker or someone who plays it safe? Has that changed with age?",
    ),
    tip("There's no single right order — the checking shows one possible answer. Use it to start the discussion and listen for conditionals: *If I'd done that, I would…* — the grammar section gives the student more formal options."),
  ]),

  section("Vocabulary: Taking risks", [
    words("Risk", [
      ["a calculated risk", "🧮 a risk you take after thinking carefully about the possible results", "Leaving the bank was a calculated risk — I'd saved for two years."],
      ["play it safe", "🛡️ avoid risks"],
      ["high stakes", "🎲 a lot can be won or lost"],
      ["take the plunge", "🏊 finally decide to do something risky or difficult"],
      ["push your luck", "🍀 take a risk again after already being lucky"],
      ["a leap of faith", "🦘 doing something without being sure it will work"],
      ["err on the side of caution", "🚦 choose the safer option when unsure"],
      ["weigh up the pros and cons", "⚖️ think about the advantages and disadvantages"],
      ["a safety net", "🕸️ something that protects you if things go wrong"],
      ["the odds are against you", "📉 you probably won't succeed"],
      ["reckless", "💥 doing dangerous things without thinking"],
      ["risk-averse", "🐢 not willing to take risks"],
    ]),
    match("Match the situations and the phrases.", [
      ["“I've wanted to learn to dive for years. I've finally booked a course!”", "take the plunge"],
      ["“You won twice. Stop now before you lose everything.”", "push your luck"],
      ["“I'm not sure the ice is thick enough. Let's not walk on it.”", "err on the side of caution"],
      ["“I have six months' salary saved, just in case.”", "a safety net"],
      ["“He drove at 160 km/h on a wet road.”", "reckless"],
      ["“Only one in ten new restaurants survives the first year.”", "the odds are against you"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. It wasn't a wild gamble — it was a [calculated] risk.\n2. Before you decide, weigh up the pros and [cons].\n3. Moving abroad without a job was a real leap of [faith].\n4. My parents are very risk-[averse] — they've never borrowed money.\n5. Final exams are high-[stakes] — your whole future depends on them.\n6. I'd rather play it [safe] and book the hotel now.",
    ),
  ]),

  section("Reading: Had I stayed at the bank…", [
    tip("A long text (~800 words). First reading — 7 minutes: *Does Asel regret leaving the bank? What does research say about regret?* Then the tasks. Ask the student to find four conditionals without *if*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Asel left the bank immediately after she started baking.", false],
        ["Her colleagues thought she was making a mistake.", true],
        ["According to loss aversion, a loss feels about as strong as an equal gain.", false],
        ["Asel's first year as a baker went perfectly.", false],
        ["In the long term, people tend to regret things they didn't do.", true],
        ["Asel thinks everyone should leave their safe job.", false],
        ["She suggests imagining yourself looking back on the decision in old age.", true],
      ],
      {
        read: [
          "## 🥐 Had I stayed at the bank…",
          "*by Asel, owner of Asel's Bakery (two of them now)*",
          "People often ask me whether I was scared when I left the bank. The honest answer is: terrified. I had worked there for eight years. I had a good salary, a pension plan, a desk by the window and colleagues I liked. Had I stayed, I would probably be a branch manager by now. I would also, I suspect, still be baking bread at midnight because it was the only time I felt completely myself.",
          "The baking started as a hobby. For years I would come home from work, open my laptop, check the exchange rates one last time and then go into the kitchen and make dough. By my sixth year at the bank, friends were ordering cakes for birthdays. By my seventh, a café down the road was buying my bread every morning. I didn't leave in a dramatic moment of courage. I left slowly, over about two years, after doing the sums again and again.",
          "When I finally told my colleagues, most of them were kind, but they clearly thought I'd lost my mind. \"You're giving up a career for croissants?\" one of them asked. Another said, \"Should it go wrong, you'll never get a job like this again.\" He was probably right. That was exactly what kept me awake at night.",
          "Years later, I came across a name for that feeling. In 1979, the psychologists Daniel Kahneman and Amos Tversky published a paper that changed the way economists think about decisions. One of its central ideas is what is now called *loss aversion*: losses hurt us more than equal gains please us. In later work, they estimated that a loss feels roughly twice as strong as a gain of the same size. Losing a hundred dollars ruins your afternoon; finding a hundred dollars only makes your day a little better. Kahneman later received the Nobel prize in economics, partly for this work. Tversky, sadly, had died a few years earlier.",
          "Loss aversion explains a great deal about why people stay in jobs, relationships and cities that no longer make them happy. What we have is visible and concrete: the salary, the desk, the routine. What we might gain is uncertain and abstract. Were it not for this bias, I think many more people would change their lives. Were it not for my savings, I would not have changed mine.",
          "Because, to be clear, my leap was a calculated one. I had saved enough to live for a year without any income. I had tested my recipes on hundreds of real customers. I had a business plan, rewritten nine times. Had I not prepared so carefully, the first year would have finished me. The oven broke in the second week. A supplier disappeared with my deposit. In March, I made less money than my old monthly salary — in the whole month. But for my safety net, I would have been back at the bank by summer.",
          "What kept me going, apart from stubbornness, was another piece of research. In 1995, the psychologists Thomas Gilovich and Victoria Medvec looked at what people regret. They found an interesting pattern. In the short term, people tend to regret their actions — the things they did that went wrong. But over the long term, they mostly regret their *inactions*: the chances they didn't take, the things they never tried. A bad decision hurts immediately and then fades. A missed opportunity seems to grow over the years.",
          "I don't want to romanticize risk. Some leaps of faith end badly, and the people who write articles like this one are, by definition, the people whose leaps worked. For every successful bakery, there are several that closed within a year. Should you be thinking of leaving a safe job, please don't do it because of my story. Do it — or don't do it — because of your own sums.",
          "But I would offer one simple test. Imagine yourself at eighty, looking back. Which version of this year will that old person be more grateful for? Not the one that was easier, but the one they can live with. When I did this, the answer was clear. The eighty-year-old me didn't care much about pensions. She wanted to know whether I'd at least tried.",
          "So, do I regret leaving the bank? Some mornings, at four a.m., with flour in my hair, I come close. Then the first customers arrive, and somebody tells me that my honey cake tastes exactly like their grandmother's, and I know the answer. Provided the ovens keep working, I'll be here for a long time. 🍯",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did Asel leave the bank?", options: ["*gradually, after planning for about two years", "suddenly, after an argument", "because the bank closed"] },
      { q: "What does loss aversion help to explain, according to Asel?", options: ["*why people stay in situations that no longer make them happy", "why bakeries close", "why people like gifts"] },
      { q: "What saved Asel's business in the first year?", options: ["*the money she had saved", "a loan from the bank", "her old colleagues"] },
      { q: "What did Gilovich and Medvec find?", options: ["*Over time, people regret what they didn't do more than what they did.", "People regret everything equally.", "Older people have no regrets."] },
      { q: "Why does Asel say she doesn't want to “romanticize risk”?", options: ["*Many risky decisions fail, and we mostly hear the success stories.", "Risk is always a mistake.", "Her bakery is not successful."] },
    ]),
    gaps(
      "Find words and phrases in the article.",
      "1. extremely frightened: [terrified]\n2. calculate costs and income: do the [sums]\n3. a tendency to think in an unfair or unbalanced way: a [bias]\n4. not changing your mind even when it's hard: [stubbornness]\n5. not doing anything: [inaction/inactions]\n6. make something seem better and more exciting than it is: [romanticize/romanticise]",
    ),
  ]),

  section("Video: How good are you at calculating risk?", [
    video("Watch: TED-Ed — How good are you at calculating risk? (Gerd Gigerenzer).", "p7EsMIxcN5s"),
    text(
      "After the video: talk about it.",
      "- What's the difference between **relative** and **absolute** risk? Explain it with your own example.\n- Why can headlines about risk make people panic?\n- Which risks do people usually overestimate? Which do they underestimate?\n- What question would you ask the next time you read “X doubles the risk of Y”?",
    ),
    tip("Ask the student to summarize the main example from the video in 3–4 sentences. Link to the reading: loss aversion and risk numbers both show that our feelings and the facts don't always match."),
  ]),

  section("Grammar: Conditionals without if", [
    quiz("Notice the rule 🔍 Look: “Had I stayed, I would be a manager now.” · “Should it go wrong, you'll never get a job like this again.” · “Were it not for this bias, many people would change their lives.”", [
      { q: "“Had I stayed…” means…", options: ["*If I had stayed…", "When I stayed…", "Because I stayed…"] },
      { q: "“Should it go wrong…” means…", options: ["*If it (happens to) go wrong…", "It must go wrong…", "It ought to go wrong…"] },
      { q: "These forms are…", options: ["*more formal, typical of writing and careful speech", "very informal", "only used in questions"] },
    ]),
    table("inverted-conditionals"),
    choose(
      "Choose the correct option.",
      "1. [*Had I known/If had I known] about the traffic, I would have left earlier.\n2. [*Should you need/Should you to need] any help, just ask at reception.\n3. [*Were it not for/Weren't it for] the rescue team, they would have died.\n4. [*Had we not/Hadn't we] taken a map, we would have got lost.\n5. [*But for/Except] your advice, I'd never have applied.\n6. You can borrow the car [*provided/unless] you fill it up afterwards.\n7. Wear a helmet — [*otherwise/provided] you could be badly hurt.\n8. If I [*hadn't left/didn't leave] the bank, I'd be a manager now.",
    ),
    gaps(
      "Rewrite the sentences without “if”. Start with the word given.",
      "1. If I had known the truth, I would have told you. → [Had I known] the truth, I would have told you.\n2. If you should see Laura, say hello from me. → [Should you see] Laura, say hello from me.\n3. If it weren't for my sister, I'd never have finished. → [Were it not for] my sister, I'd never have finished.\n4. If we were to lose the match, we'd be out of the cup. → [Were we to lose] the match, we'd be out of the cup.\n5. If she hadn't helped, the project would have failed. → [Had she not helped], the project would have failed.\n6. If it hadn't been for the rope, he would have fallen. → [But for] the rope, he would have fallen.\n7. If you don't book now, there won't be any tickets left. → Book now — [otherwise] there won't be any tickets left.\n8. You can come only if you're quiet. → You can come [provided/providing/as long as] you're quiet.",
    ),
    drag(
      "Mixed conditionals: complete the sentences with the words.",
      "1. If I [had] studied medicine, I would be a doctor now.\n2. If she weren't so brave, she [would] never have climbed that mountain.\n3. If we hadn't moved to Almaty, I [wouldn't] know Asel.\n4. If he [were] more careful, he wouldn't have crashed the car.\n5. If they had invested in that company, they [would] be rich today.\n6. If I didn't speak Korean, I [wouldn't] have got the internship.",
      ["will", "was being", "have"],
    ),
    tip("Say it right: in inverted conditionals, the first word is stressed and there's a small pause after the condition: *HAD I known ‖ I would have stayed.* *SHOULD you need anything ‖ just call.* Practice with the sentences from the table."),
  ]),

  section("Listening: Turning back, going ahead", [
    tip("A long listening — about 4 minutes. A radio show about difficult decisions. The guests are Ruslan, who now runs a mountain safety center, and Kenji, a team leader at a tech company. First listen: *What decision did each of them make?* Second listen: the tasks. Ask the student to note inverted conditionals."),
    ...listening(
      "Listen to a radio show about decisions on the edge.",
      "**Host:** Good evening and welcome to Crossroads, the show about the moments when everything could have gone the other way. My guests tonight are Ruslan, who runs a mountain safety center, and Kenji, a team leader at a tech company. Ruslan, let's start with you. You once turned back two hundred meters from a summit. Why?\n\n**Ruslan:** It was about eight years ago. We were a group of four, we'd been preparing for months, and the summit was right there. You could see it. But the wind had started to change, and the clouds behind us were moving faster than the forecast had said. I had a rule: if we weren't at the top by one o'clock, we'd turn back, whatever happened. At twelve forty, we were still two hundred meters below.\n\n**Host:** That must have been painful.\n\n**Ruslan:** Very. Two of the group wanted to continue. They said, \"Twenty more minutes. We'll never be this close again.\" And honestly, part of me agreed. But I'd seen what happens to people who push their luck in the mountains. So I said no.\n\n**Host:** And what happened?\n\n**Ruslan:** By three o'clock there was a full storm. We were already back at the lower camp, cold and miserable, but safe. Had we continued, we would have been on the most exposed part of the ridge exactly when it hit. I don't like to think about it.\n\n**Host:** Did the others thank you?\n\n**Ruslan:** Not that evening. That evening they didn't speak to me. The next morning, one of them came to my tent with a cup of tea and just said, \"You were right.\" That was enough.\n\n**Host:** Kenji, your story is the opposite, isn't it? You went ahead.\n\n**Kenji:** I did. Two years ago, our team had built a new app for small shops — ordering, payments, deliveries. We'd planned to launch it in the autumn. Then, in early summer, we heard that a much bigger competitor was about to release something very similar.\n\n**Host:** So you had a choice.\n\n**Kenji:** Exactly. Either we launched early, with a product that wasn't finished, or we waited and risked being second. My manager wanted to err on the side of caution. Her argument was: \"Should it crash on the first day, nobody will ever trust us again.\" And she wasn't wrong.\n\n**Host:** But you disagreed.\n\n**Kenji:** I did, but I wanted it to be a calculated risk, not a reckless one. So we agreed on conditions. We'd launch with just twenty shops, all of them people we knew, provided they agreed to give us feedback every day. And we'd have a safety net — the old system would keep running in parallel. Were anything to go seriously wrong, we could switch back in an hour.\n\n**Host:** And did anything go wrong?\n\n**Kenji:** Plenty. On day three, the payments stopped working for most of an afternoon. A bakery owner called me personally to complain. Actually, she's a friend of mine now.\n\n**Host:** Was it worth it?\n\n**Kenji:** Yes. But for those twenty shops and their patience, we would never have found half the problems. When the competitor launched, our app was already better. Had we waited until autumn, I really think we'd have lost.\n\n**Host:** So, one of you turned back and one of you went ahead. Is there a lesson in that?\n\n**Ruslan:** I think it's the same lesson, actually. Decide your limits before you're under pressure. On the mountain, my limit was one o'clock. If you decide it at twelve forty, with the summit in front of you, you'll always say \"twenty more minutes\".\n\n**Kenji:** I agree. We set our conditions before the launch: twenty shops, the old system, daily feedback. Otherwise excitement makes your decisions for you.\n\n**Host:** And do either of you have any regrets?\n\n**Ruslan:** I've never stood on that summit. Sometimes I wish I had. But I'd rather have that small regret than the alternative.\n\n**Kenji:** My only regret is the payment system on day three. And maybe the meeting I organized at four p.m. that week. We don't do meetings after two any more.\n\n**Host:** Ruslan, Kenji, thank you both.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Ruslan turn back?", options: ["*The weather was changing, and they had passed their time limit.", "Someone in the group was injured.", "They had run out of food."] },
      { q: "How did the rest of the group react that evening?", options: ["*They didn't speak to him.", "They thanked him immediately.", "They went to the summit without him."] },
      { q: "Why did Kenji's team want to launch early?", options: ["*A bigger competitor was about to release a similar product.", "The app was already finished.", "Their manager insisted."] },
      { q: "What was Kenji's safety net?", options: ["*The old system kept running in parallel.", "They had extra money saved.", "They launched in only one city."] },
      { q: "What lesson do both guests agree on?", options: ["*Decide your limits before you're under pressure.", "Always play it safe.", "Always follow your instincts."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan's group was four people.", true],
      ["Ruslan's rule was to turn back if they weren't at the top by one o'clock.", true],
      ["The storm arrived the next morning.", false],
      ["Kenji's manager wanted to launch early.", false],
      ["The app was first tested with twenty shops.", true],
      ["Ruslan has since been to the top of that mountain.", false],
    ]),
    gaps(
      "Complete the sentences from the show.",
      "1. [Had] we continued, we would have been on the most exposed part of the ridge.\n2. [Should] it crash on the first day, nobody will ever trust us again.\n3. We'd launch with just twenty shops, [provided/providing] they agreed to give us feedback every day.\n4. [Were] anything to go seriously wrong, we could switch back in an hour.\n5. But [for] those twenty shops and their patience, we would never have found half the problems.\n6. [Otherwise] excitement makes your decisions for you.",
    ),
  ]),

  section("Let's talk: Decisions on the edge", [
    text(
      "Discuss 🗣️",
      "- Ruslan turned back; Kenji went ahead. Who took the bigger risk, in your opinion?\n- Tell the story of a decision you made under pressure. *Had I…, I would… / Were it not for…*\n- Asel says: imagine yourself at eighty. Does that test work for you? Try it with a decision you're facing now.\n- “It's better to regret something you did than something you didn't do.” Agree or disagree?\n\nTry to use at least **three** conditionals without *if*.",
    ),
    tip("Let each answer run for 1–2 minutes. Note inverted conditionals and risk vocabulary; correct gently at the end (typical mistakes: *If had I known, Hadn't I known* for *Had I not known*). In a group: one student tells a story, the others ask “What would have happened had you…?”"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ I known, I would have called you.", options: ["*Had", "Have", "Should"] },
      { q: "___ you need anything, just ask.", options: ["*Should", "Had", "Were"] },
      { q: "___ for the rope, he would have fallen.", options: ["*But", "Except", "Unless"] },
      { q: "Don't push your ___ — you've won twice already.", options: ["*luck", "risk", "chance"] },
    ]),
    box(
      "Phrase of the day: nothing ventured, nothing gained",
      "🎯 If you never take a risk, you'll never achieve anything new. Ruslan would add: *…but decide your limits first.*\n\n*What would you try tomorrow if you knew you couldn't fail?*",
    ),
  ]),

  homework(
    [
      video("Watch: Kathryn Schulz — Don't regret regret (TED).", "ka8L1YMR88U"),
      choose(
        "Choose.",
        "1. [*Had she/If she had] listened, she wouldn't be in trouble now.\n2. [*Should anyone/Should anyone to] call, tell them I'm out.\n3. [*Were it not/Was it not] for the internet, I'd never have met my best friend.\n4. [*Had I not/Hadn't I] missed the bus, I'd never have met him.\n5. You can stay [*as long as/unless] you help with the cooking.\n6. Hurry up, [*otherwise/provided] we'll miss the train.\n7. If I [*had saved/saved] more money last year, I could travel now.\n8. [*But for/Without of] the bad weather, it would have been a perfect trip.",
      ),
      gaps(
        "Rewrite the sentences without “if”.",
        "1. If I had seen him, I would have said hello. → [Had I seen] him, I would have said hello.\n2. If you should have any questions, please contact us. → [Should you have] any questions, please contact us.\n3. If it weren't for the music, the film would be boring. → [Were it not for] the music, the film would be boring.\n4. If they hadn't warned us, we'd have walked into the storm. → [Had they not warned] us, we'd have walked into the storm.\n5. If he were to resign, the company would be in trouble. → [Were he to resign], the company would be in trouble.\n6. If it hadn't been for your help, I would have failed. → [But for] your help, I would have failed.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the beginnings and endings.", [
        ["After years of planning, she finally took…", "…the plunge."],
        ["It's always wise to weigh up…", "…the pros and cons."],
        ["When in doubt, err on…", "…the side of caution."],
        ["Moving abroad without a job was a leap…", "…of faith."],
        ["He won twice, then pushed…", "…his luck and lost everything."],
        ["Savings can act as a safety…", "…net."],
      ]),
      write(
        "Write an article for a magazine series called “Crossroads” (220–260 words): describe a risk you took — or didn't take — and its consequences. How would your life be different had you decided otherwise? Use at least three conditionals without “if” and two mixed conditionals.",
        220,
        { read: "*Plan:* a gripping first line · the situation and the choice · what happened · what would have happened otherwise · what you learned. Useful: *Had I…, I would now… / Were it not for… / But for… / Looking back…*" },
      ),
      record("Record a 1–2 minute answer: “What is the best risk you have ever taken — and what would your life be like had you not taken it?” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
