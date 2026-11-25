import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 5.3 Rich and happy? — skills lesson and a DEBATE (standard format, as in the programme: preparation 5–7 min, openings 2 min, rebuttals 1.5 min, questions 2–3 min). No new grammar; review of past modals (needn't have, should have, could have) and obligation (be supposed to, be allowed to, make / let). V: wealth and well-being (well-off, make ends meet, a windfall, materialistic, the rat race, keep up with the Joneses…). Main format: "money and happiness — true or false?" + a long reading (what research says, ~580 words) + TEDx video (Michael Norton) + a long listening (a radio discussion with an economist and Asel, ~3:15) + the student's debate "This house believes that money can buy happiness".
// Facts checked: Richard Easterlin (1974) — within a country richer people are happier on average, but as countries got richer over time, average happiness rose much less than expected ("the Easterlin paradox"); Daniel Kahneman and Angus Deaton (2010) — day-to-day emotional well-being rose with income only up to about $75,000 a year, while life evaluation kept rising; Matthew Killingsworth (2021, over 1.7 million reports from more than 33,000 US adults) found no such plateau; in 2023 Killingsworth, Kahneman and Barbara Mellers worked together and found that for most people happiness keeps rising with income, but for the least happy group (about 20%) it stops rising at around $100,000; Philip Brickman and colleagues (1978) — lottery winners were not much happier than other people; a large Swedish study (Lindqvist, Östling and Cesarini, 2020) found that big lottery wins did increase life satisfaction for years; Elizabeth Dunn, Lara Aknin and Michael Norton (Science, 2008) — people given $5 or $20 to spend on others were happier that evening than people who spent it on themselves, and the amount didn't matter; Ashley Whillans and colleagues (2017) — spending money to save time (for example, paying for cleaning) was linked to greater happiness. Video: Michael Norton at TEDxCambridge 2011 (official TEDx Talks channel).
export default lesson("b2-5.3", "Rich and happy?", () => [
  section("Warm-up: Money and happiness", [
    box(
      "Today you will…",
      "- find out what science says about money and happiness 🔬💰\n- hear how one person swapped a bank for a bakery 🥐\n- hold a real debate: can money buy happiness? ⚖️",
    ),
    trueFalse("Money and happiness: true or false? Guess first — the reading will tell you! 🤔", [
      ["Spending money on other people can make you happier than spending it on yourself.", true],
      ["Scientists all agree that above $75,000 a year, more money makes no difference to how people feel.", false],
      ["Within a country, richer people are on average happier than poorer people.", true],
      ["Paying someone to do jobs you hate (like cleaning) can make you happier.", true],
      ["Every study shows that lottery winners are no happier than other people.", false],
      ["Experiences usually make people happier than things.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- How much money is “enough”, in your opinion? Enough for what?\n- If you won a lot of money tomorrow, what's the first thing you'd do?\n- Can you think of something money can't buy? 💭",
    ),
    tip("Don't give the answers yet — the reading checks them. Collect the student's opinions: they're the first ideas for today's debate."),
  ]),

  section("Vocabulary: Wealth and well-being", [
    words("Wealth and well-being", [
      ["well-off — wealthy", "💰 having quite a lot of money — 💎 very rich"],
      ["make ends meet", "🧮 have just enough money to pay for what you need"],
      ["a windfall", "🍎 an unexpected amount of money (a prize, a gift)"],
      ["materialistic", "🛍️ caring too much about money and possessions"],
      ["well-being", "🌿 being healthy, comfortable and happy"],
      ["life satisfaction", "😌 how good you think your life is in general"],
      ["the rat race", "🐀 the endless competition for money and success"],
      ["keep up with the Joneses", "🏡 try to have everything your neighbors have"],
      ["financial security", "🔐 knowing you'll have enough money in the future"],
      ["give something back", "🤲 help other people or your community"],
    ]),
    match("Match.", [
      ["They're quite well-off —", "they have a big house and two cars."],
      ["After he lost his job, he couldn't", "make ends meet."],
      ["She got a windfall when", "her aunt left her some money."],
      ["He left the rat race and", "moved to a village."],
      ["Don't try to keep up", "with the Joneses."],
      ["Now that I'm successful, I want to", "give something back."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Exercise is good for your mental [well-being]. 🌿\n2. He's so [materialistic] — he only talks about cars and watches.\n3. A good salary gives you financial [security].\n4. Many students work two jobs to make ends [meet].\n5. She's very [wealthy] — she owns three hotels.\n6. Life [satisfaction] is higher in countries with strong communities.",
    ),
    quiz("Choose the right word.", [
      { q: "He works 70 hours a week — he's tired of the rat ___.", options: ["*race", "run", "game"] },
      { q: "They bought a bigger car just to keep up with the ___.", options: ["*Joneses", "Smiths", "neighbors' cars"] },
      { q: "Her grandfather left her $10,000 — a real ___.", options: ["*windfall", "well-being", "bargain"] },
      { q: "They're not rich, but they're quite well-___.", options: ["*off", "on", "up"] },
    ]),
  ]),

  section("Reading: Can money buy happiness?", [
    tip("A long text (~580 words). First reading — 5 minutes: *What's the writer's answer to the title question?* Then check the warm-up answers together. This is the EVIDENCE for the debate — ask the student to underline two facts for each side."),
    quiz(
      "Read the article and choose the right answer.",
      [
        { q: "What is the Easterlin paradox?", options: ["*Richer people are happier, but richer countries didn't become much happier over time.", "Money always makes people unhappy.", "Poor countries are happier than rich ones."] },
        { q: "What did the 2023 study find?", options: ["*For most people happiness keeps rising with income, but not for the least happy group.", "Nobody gets happier after $75,000.", "Income has no effect on happiness."] },
        { q: "What do the lottery studies show?", options: ["*The results are mixed.", "All winners become unhappy.", "All winners become much happier."] },
        { q: "What surprised researchers in the $5 / $20 experiment?", options: ["*The amount of money didn't matter.", "Nobody spent the money.", "People who kept the money were happiest."] },
        { q: "What is the writer's conclusion?", options: ["*Money can help, depending on how we spend it.", "Money can't buy happiness.", "More money always means more happiness."] },
      ],
      {
        read: [
          "## 💰 Can money buy happiness? What the research says",
          "\"Money can't buy happiness,\" says the old proverb. \"But it's more comfortable to cry in a taxi than on a bus,\" answers the joke. For about fifty years, scientists have been trying to find out who is right — and the answer is more interesting than either.",
          "**Richer, but not happier?** In 1974, the economist Richard Easterlin noticed something strange. Within a country, richer people were, on average, happier than poorer people. But as whole countries got richer over the decades, average happiness rose much less than expected. This became known as the Easterlin paradox. One explanation is that we compare ourselves with others: if everyone's income rises, nobody feels richer. We keep up with the Joneses, and the Joneses keep up with us.",
          "**The magic number.** In 2010, the Nobel Prize winner Daniel Kahneman and his colleague Angus Deaton published a famous study. They found that people's day-to-day emotions improved as their income rose — but only up to about $75,000 a year. After that, the line went flat. The number appeared in thousands of articles. But in 2021, the psychologist Matthew Killingsworth analyzed more than a million reports from people's phones and found no flat line at all: happiness kept rising with income. In the end, Kahneman and Killingsworth did something unusual. Instead of arguing, they worked together. Their 2023 study found that both were partly right. For most people, more money goes with more happiness. But for the least happy fifth of people, happiness stops rising at around $100,000. For them, money can fix some problems — but not heartbreak, illness or loneliness.",
          "**Lottery winners.** A famous study in 1978 found that lottery winners were not much happier than other people. That story is still repeated today. However, a much larger study of Swedish lottery players in 2020 found that big winners were more satisfied with their lives, even many years later. So a windfall may not make you feel joyful every day — but it can make you feel more secure.",
          "**It's how you spend it.** Perhaps the most useful research is about spending, not earning. In a 2008 experiment, Elizabeth Dunn, Lara Aknin and Michael Norton gave people an envelope with $5 or $20 and asked them to spend it by the end of the day. Half had to spend it on themselves; half had to spend it on someone else. In the evening, the people who had spent money on others felt happier — and the amount didn't matter. Other studies suggest that we get more happiness from experiences than from things, and that buying time — paying for help with jobs we hate — can make us happier too.",
          "**So, can money buy happiness?** The honest answer is: it depends. Money clearly matters when you can't make ends meet; worrying about rent every month is bad for anyone's well-being. Above that level, money still helps most people, but much less than we imagine, and its effect depends on what we do with it. A materialistic life of bigger cars and newer phones brings surprisingly little. Money spent on people, experiences and free time brings much more.",
          "So perhaps the proverb needs updating: money can't buy happiness — but if you spend it wisely, it can certainly help. And it can't hurt to share the taxi. 🚕",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Easterlin studied happiness in the 1970s.", true],
      ["Kahneman and Killingsworth refused to work together.", false],
      ["For the least happy people, happiness stops rising at about $100,000.", true],
      ["The Swedish study found that winners were more satisfied with their lives.", true],
      ["In the 2008 experiment, people with $20 were much happier than people with $5.", false],
      ["The writer thinks materialistic spending brings a lot of happiness.", false],
    ]),
    gaps(
      "Find words in the article.",
      "1. a short, well-known saying: a [proverb]\n2. on average, typically: on [average]\n3. a situation that seems impossible but is true: a [paradox]\n4. studied something in detail: [analyzed]\n5. very happy: [joyful]\n6. the feeling of having your heart broken: [heartbreak]",
    ),
  ]),

  section("Video: How to buy happiness", [
    video("Watch: Michael Norton — Can money buy happiness? (TEDxCambridge, 2011). Watch at least the first 8 minutes.", "ZwGEQcFo9RE"),
    text(
      "After the video: talk about it.",
      "- What experiments does Norton describe? Which result surprised you?\n- Does it matter whether you spend money on a friend or on a stranger?\n- Which side of today's debate will this talk help? How? ⚖️",
    ),
    tip("Norton is one of the authors of the $5 / $20 study from the reading. Ask the student to note ONE example from the talk to use as evidence (the E in PEEL) in the debate."),
  ]),

  section("Listening: From the bank to the bakery", [
    tip("A long listening — about 3 minutes 15 seconds. A radio discussion: Dr. Klein, an economist, and Asel, who left a well-paid job at a bank to open a bakery. First listen: *Do they agree that money can buy happiness?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio discussion about money and happiness.",
      "**Host:** Can money buy happiness? It's one of the oldest questions there is. With me today are Dr. Anna Klein, an economist who studies well-being, and Asel, who left a career in banking to open a bakery. Dr. Klein, let's start with the science. Can money buy happiness?\n\n**Dr. Klein:** The short answer is: yes, a bit, and some of it. Money matters a lot when people can't make ends meet. If you're worried about paying rent or buying medicine, a pay rise can change your life. Above that level, more money still helps most people, but each extra dollar makes less and less difference.\n\n**Host:** Asel, you made the opposite choice. You gave up money.\n\n**Asel:** I did. I worked in a bank for eight years. The salary was very good. I had a nice car, I went on expensive holidays, and I was miserable. I was supposed to be at my desk at eight, I often worked until nine at night, and I hardly saw my family.\n\n**Host:** So why did you stay so long?\n\n**Asel:** Fear, mostly. Everyone told me I'd be crazy to leave. And honestly, I liked the money. I should have left much earlier — I could have opened the bakery five years sooner.\n\n**Host:** And now?\n\n**Asel:** Now I earn less than half of what I earned at the bank. In the first year, I earned almost nothing. But I'm much happier. I get up at five, my hands are always covered in flour, and I love it.\n\n**Dr. Klein:** Asel's story is actually a good example of what research shows. She didn't become happy because she earned less. She became happier because she got something money couldn't easily buy: meaning, control over her time, and work she enjoys.\n\n**Asel:** But let's be honest — I could only do it because I'd saved money at the bank. Without my savings, I'd have had no choice but to stay. So in a way, money did buy me happiness. It bought me the freedom to change my life.\n\n**Host:** That's an interesting point. Dr. Klein, is that common?\n\n**Dr. Klein:** Very. Economists call it financial security. People with savings feel freer and less stressed, even if they never spend the money. It's like an umbrella: you might not need it, but you feel better knowing it's there.\n\n**Host:** Is there a way to spend money that makes people happier?\n\n**Dr. Klein:** Three things work well in study after study. First, spend on experiences rather than things. Second, buy time — pay for help with jobs you hate, if you can. And third, spend on other people. That one surprises everyone, but it's one of the strongest results we have.\n\n**Asel:** I can confirm the third one. Every evening we give the bread we haven't sold to a children's home nearby. It costs me money, but it's the best part of my day.\n\n**Host:** So, a final answer from each of you. Can money buy happiness?\n\n**Dr. Klein:** It can't buy it directly. But used wisely, it can certainly make room for it.\n\n**Asel:** Money bought me the chance to change. The happiness I had to make myself — with flour, early mornings and very good people.\n\n**Host:** Dr. Klein, Asel, thank you both.",
    ),
    quiz("Listen and choose.", [
      { q: "According to Dr. Klein, when does money matter most?", options: ["*when people can't make ends meet", "when people are already rich", "never"] },
      { q: "Why did Asel stay at the bank for so long?", options: ["*She was afraid to leave and liked the money.", "She loved the job.", "Her family asked her to."] },
      { q: "Why, according to Dr. Klein, did Asel become happier?", options: ["*She got meaning, control over her time and enjoyable work.", "She earned more.", "She had more holidays."] },
      { q: "How did money help Asel change her life?", options: ["*Her savings gave her the freedom to leave.", "The bank gave her a loan.", "She won a prize."] },
      { q: "What does Asel do with unsold bread?", options: ["*gives it to a children's home", "sells it cheaply the next day", "gives it to her staff"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel worked at the bank for eight years.", true],
      ["Asel now earns more than at the bank.", false],
      ["Asel thinks she should have left the bank earlier.", true],
      ["Dr. Klein compares savings to an umbrella.", true],
      ["Dr. Klein says spending on things makes people happiest.", false],
      ["Both speakers say money can buy happiness directly.", false],
    ]),
    choose(
      "Review: module 5 grammar. Choose.",
      "1. Asel [*should have left/should leave] the bank earlier.\n2. At the bank, she was [*supposed to/allowed] be at her desk at eight.\n3. Without savings, she would have had no choice but [*to stay/staying].\n4. In hindsight, she [*needn't have worried/didn't need worry] so much about leaving.\n5. Her boss often made her [*work/to work] until nine.\n6. She [*could have opened/could open] the bakery five years sooner.",
    ),
  ]),

  section("Debate: getting ready", [
    tip("TEACHER NOTES — today's debate is the STANDARD format from the course programme. Times: motion and sides 1 min · preparation 5–7 min · openings 2 min each · rebuttal prep 1 min · rebuttals 1.5 min each · questions 2–3 min (answers up to 20 sec) · closings 1 min each · verdict 3 min. ONE-TO-ONE: toss a coin for sides; the teacher plays the other side at a level that challenges but doesn't crush. IN A GROUP: two teams of 2–3, each student speaks at least once; the others judge with the scoring sheet (arguments · evidence · rebuttal · language · delivery, 1–5 each). Use the lesson Timer. Remind: argue with the idea, not the person; no new arguments in the closing."),
    table("debate-language"),
    sort("Which side does each argument support? Sort. 🧩", {
      "👍 Money CAN buy happiness": [
        "Within a country, richer people are happier on average.",
        "Savings give people freedom and less stress.",
        "Money spent on others makes people happier.",
        "Big lottery winners were more satisfied with their lives.",
      ],
      "👎 Money CAN'T buy happiness": [
        "Richer countries didn't become much happier over time.",
        "We quickly get used to new things.",
        "Money can't fix loneliness or heartbreak.",
        "Asel was miserable in her well-paid job.",
      ],
    }),
    drag(
      "Build an argument with PEEL. Complete.",
      "[Point]: Money can buy happiness if we [spend] it in the right way.\n[Evidence]: In a 2008 [experiment], people who spent $5 on others were happier than people who spent it on themselves.\n[Explain]: This shows that the [amount] of money matters less than how we use it.\n[Link]: That's why we [believe] that money, used wisely, can buy happiness.",
      ["Opinion", "save", "proverb"],
    ),
  ]),

  section("Your debate", [
    text(
      "⚖️ This house believes that money can buy happiness",
      "**1. Motion and sides** (1 min): toss a coin — Proposition (for) or Opposition (against).\n\n**2. Preparation** (5–7 min): find **2–3 arguments** with PEEL. Use evidence from the reading, the video and the radio discussion. Guess what the other side will say.\n\n**3. Opening speeches** (2 min each): *Tonight I'll argue that… My first argument is…*\n\n**4. Rebuttal prep** (1 min) → **Rebuttals** (1.5 min each): *My opponent claims that…, but… That may be true; however…*\n\n**5. Questions** (2–3 min, answers up to 20 seconds).\n\n**6. Closing speeches** (1 min each, no new arguments): *To sum up… I urge you to support / oppose the motion.*\n\n**7. Verdict** (3 min): scores 1–5 for arguments · evidence · rebuttal · language · delivery.\n\n💡 Try to use some module 5 grammar: *If you're supposed to work 60 hours a week… People needn't have… Asel could have…*",
    ),
    tip("Feedback order: 1) the strongest argument, 2) the best use of evidence, 3) one rebuttal that worked, 4) two language points. Compare with the 3.3 debate: is the student speaking longer and using more evidence? Note it for the next debate (8.3)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "They have just enough money to make ends ___.", options: ["*meet", "end", "match"] },
      { q: "An unexpected amount of money is a ___.", options: ["*windfall", "proverb", "rat race"] },
      { q: "In the rebuttal, you answer the other side's ___.", options: ["*arguments", "questions", "closing"] },
      { q: "In the 2008 study, people were happiest when they spent money on ___.", options: ["*other people", "themselves", "nothing"] },
    ]),
    box(
      "Phrase of the day: the best things in life are free",
      "🌅 Friends, love, a sunset, a good conversation… — but is it really true? Free time isn't always free!\n\n*What's the best free thing in your life?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. Many families struggle to make ends [meet].\n2. She left the rat [race] and became a farmer.\n3. Stop trying to keep up with the [Joneses]!\n4. Savings give you financial [security].\n5. He's so [materialistic] — he only cares about his car.\n6. After the lottery win, they wanted to give something [back].",
      ),
      match("Match the debate stages and the phrases.", [
        ["opening", "Tonight I'll argue that…"],
        ["evidence", "A study in 2008 showed that…"],
        ["rebuttal", "My opponent claims that…, but…"],
        ["polite disagreement", "That may be true; however, …"],
        ["question", "If that's true, then why…?"],
        ["closing", "For these reasons, I urge you to oppose the motion."],
      ]),
    ],
    "Homework: Vocabulary and debate language",
  ),
  homework(
    [
      write("Write an essay (140–190 words): “Money can buy happiness.” Do you agree? Give two arguments with evidence (from the reading, the video or the radio discussion) and answer one argument from the other side.", 140, {
        read: "Plan: 1) introduction — the question and your opinion · 2) argument 1 (PEEL) · 3) argument 2 (PEEL) · 4) the other side's argument and your answer · 5) conclusion.",
      }),
      record("Record your closing speech for today's debate (about 1 minute). Sum up — no new arguments! ⚖️🎤", 75),
      record("Record a 1-minute answer: “If someone gave you $20 to spend on another person today, what would you do?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
