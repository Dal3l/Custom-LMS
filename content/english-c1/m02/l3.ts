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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 2.3 Calculated risks — skills lesson and the FIRST OXFORD-STYLE DEBATE of the course: "This house would ban dangerous extreme sports". No new grammar; inverted conditionals and the unreal past in arguments. V: arguing about risk and rules (autonomy, consent, regulate, mitigate, outweigh, a slippery slope…). Main format: sort the arguments + first vote + a long reading (Alex Honnold, ~810 words) + Honnold's TED talk + the Oxford-style format with Points of Information + a long listening (a model debate at Daniyar's debate club in Seoul, ~3:50) + the student's own debate.
// Debate rules (see docs/courses/english-c1/program.md, "Дебаты"): motion and first vote → preparation 7–10 min → opening speeches 3 min each with Points of Information (max 15 s, accept or decline) → rebuttal preparation 1 min → rebuttals 2 min each → questions from the floor 2–3 min → reply speeches 2 min each (no new arguments) → second vote, verdict and feedback.
// Facts checked: Alex Honnold — free solo of El Capitan (Yosemite) by the Freerider route, 3 June 2017, in 3 hours 56 minutes; the wall is about 900 m (around 3,000 feet); in November 2016 he began an attempt and turned back; he had rehearsed the route with ropes many times; the documentary "Free Solo" (Jimmy Chin and Elizabeth Chai Vasarhelyi) won the Academy Award for Best Documentary Feature (2019); the neuroscientist Jane Joseph scanned his brain (fMRI) and found very little amygdala activation to images that usually provoke a strong reaction; Honnold says he does feel fear and works to expand his comfort zone; the Honnold Foundation (2012) supports solar energy projects. Honnold, TED 2018: "How I climbed a 3,000-foot vertical cliff — without ropes".
// Warm-up format: sort the arguments + vote — after true / false facts in 2.2. Characters: Daniyar, Ji-woo and Lucas (the debate club in Seoul, see English B2), a new Chair.
export default lesson("c1-2.3", "Calculated risks", () => [
  section("Warm-up: For or against?", [
    box(
      "Today you will…",
      "- read about a man who climbed 900 meters without a rope — and why he says he isn't reckless 🧗\n- learn the **Oxford-style** debate format, with Points of Information ✋\n- debate: *This house would ban dangerous extreme sports.* ⚖️",
    ),
    sort("Which side does each argument support? Sort. 🧩", {
      "🚫 for a ban": [
        "Rescues put rescuers' lives at risk too.",
        "Young people copy dangerous stunts they see online.",
        "Public money pays for rescues and hospital care.",
        "Families suffer when someone dies for a hobby.",
        "Some activities are so dangerous that no training makes them safe.",
      ],
      "✅ against a ban": [
        "Adults should be free to choose their own risks.",
        "A ban would push people to do it secretly, with less safety.",
        "Training and rules reduce risk better than bans.",
        "Extreme sports bring tourism and jobs to mountain regions.",
        "Ordinary activities like driving are also dangerous, and nobody bans them.",
      ],
    }),
    text(
      "The first vote 🗳️",
      "**Motion: This house would ban dangerous extreme sports.**\n\nBefore we start: do you **agree**, **disagree**, or are you **undecided**? Write down your vote and one reason. At the end of the lesson, we'll vote again — and see if anyone has changed their mind.",
    ),
    tip("Record the student's first vote (or the group's numbers). In Oxford-style debates the winner is the side that changes more minds between the first and the second vote — not the side with more votes at the end."),
  ]),

  section("Vocabulary: Arguing about risk and rules", [
    words("Risk and rules", [
      ["autonomy", "🗽 the right to make your own decisions", "Banning it would take away people's autonomy."],
      ["consent", "✍️ permission, or agreement to something"],
      ["regulate", "📋 control something with rules"],
      ["mitigate", "🩹 make something less serious or harmful"],
      ["outweigh", "⚖️ be more important than"],
      ["a slippery slope", "🛝 a small step that leads to worse and worse results"],
      ["a burden on", "🎒 something difficult that others must carry or pay for"],
      ["paternalistic", "👨‍👧 limiting people's freedom “for their own good”"],
      ["a deterrent", "🚧 something that makes people not want to do something"],
      ["the bottom line", "📌 the most important point"],
    ]),
    match("Match the sentences and the words.", [
      ["“Who decides what's too dangerous for me? I'm an adult!”", "autonomy"],
      ["“First they ban base jumping, then skiing, then cycling…”", "a slippery slope"],
      ["“The benefits are bigger than the risks.”", "outweigh"],
      ["“Helmets and training can reduce the danger.”", "mitigate"],
      ["“The government treats us like children.”", "paternalistic"],
      ["“High fines would stop most people from trying.”", "a deterrent"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Instead of banning it, why not [regulate] it with licenses and inspections?\n2. Expensive rescues are a [burden] on taxpayers.\n3. In my view, the benefits clearly [outweigh] the risks.\n4. Climbers take risks with full [consent] — nobody forces them.\n5. The [bottom] line is that adults must be free to choose.\n6. Proper training can [mitigate] most of the dangers.",
    ),
  ]),

  section("Reading: The man without a rope", [
    tip("A long text (~810 words). First reading — 7 minutes: *Is Honnold reckless, according to the writer?* Then the tasks. Ask the student to mark two facts they could use in the debate — for either side."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Honnold climbed El Capitan with a rope for safety.", false],
        ["He had climbed the route with ropes many times before.", true],
        ["His first attempt in 2016 ended at the top.", false],
        ["The scan showed that his amygdala reacted very strongly to frightening images.", false],
        ["Honnold says he does feel fear.", true],
        ["The writer thinks Honnold's climb is a good argument for anyone to free solo.", false],
        ["The documentary about the climb won an Oscar.", true],
      ],
      {
        read: [
          "## 🧗 The man without a rope",
          "On the morning of 3 June 2017, a thirty-one-year-old American named Alex Honnold started climbing the granite wall of El Capitan in Yosemite National Park. The wall is about 900 meters high — roughly three times the height of the Eiffel Tower. Honnold had no rope, no harness and no partner. He had a pair of climbing shoes and a small bag of chalk. Had he slipped at almost any point, he would have died. Three hours and fifty-six minutes later, he stood on the top.",
          "The climb, known as a *free solo*, was described by many experienced climbers as one of the greatest athletic achievements of all time. The documentary that followed it, *Free Solo*, won the Oscar for Best Documentary Feature. And yet for many people who watched it, the main reaction was not admiration but anger. Why would anyone do something so obviously reckless? Wasn't it irresponsible, even selfish?",
          "The answer is more complicated than it first appears, because Honnold's climb was, in a strange way, one of the least spontaneous things a human being has ever done. He had been thinking about it for years. He had climbed the route, called Freerider, dozens of times with ropes, rehearsing every move until his body knew it automatically. He wrote detailed notes about the most difficult sections and practiced them again and again — in some cases hanging on a rope above a single tiny foothold and repeating the same movement until it felt boring. By the time he started the real climb, there were no surprises left.",
          "Perhaps more importantly, he had already turned back once. In November 2016, he began a free solo attempt on the same route. Not far up, the conditions and his feeling about the climb were wrong, and he decided to stop. For a man who was constantly described as fearless, it was a revealing moment. He did not want to climb as if he were invincible. He wanted to climb only when the risk felt, to him, fully under control.",
          "Of course, many people simply assumed that Honnold must be different from the rest of us. In 2016, the neuroscientist Jane Joseph scanned his brain with an fMRI machine while showing him a series of images, some of them disturbing or frightening. In most people, these pictures produce clear activity in the amygdala, a part of the brain involved in fear and threat. In Honnold's, there was very little. It was tempting to conclude that he had found a biological explanation: the man simply couldn't feel fear.",
          "Honnold himself rejects this. He has said in many interviews that he does feel fear — on difficult climbs, on bad days, sometimes even on easy routes. What he believes he has done is to expand his comfort zone, slowly, over many years, through preparation and repetition. Situations that would terrify a beginner have become, for him, familiar. Whether that is a cause or a result of his unusual brain, nobody can say for sure. It is probably a bit of both.",
          "None of this makes free soloing safe. Several well-known free soloists have died in climbing accidents, and Honnold is fully aware of it. The point is not that his climb was safe, but that it was, in his own way, calculated. He accepted a risk that most of us would find unacceptable, but he did everything in his power to make it as small as possible. That is very different from the tourist who climbs over a safety barrier for a photograph.",
          "So should activities like this be banned? Opponents of free soloing point out that it sends a dangerous message: young climbers might try to copy a climb they don't understand, without the years of preparation that made it possible. Rescuers, and the families of those who die, also pay a price for other people's choices. Supporters reply that adults should be free to take risks with their own lives, that bans rarely stop determined people, and that society accepts plenty of other dangerous activities, from motor racing to mountaineering, because they mean so much to the people who do them.",
          "Honnold, for his part, seems more interested in what he does with his attention than in the debate. In 2012, he set up the Honnold Foundation, which supports solar energy projects in communities that need them. In his TED talk, he talks less about danger than about preparation, and about the deep satisfaction of doing something perfectly.",
          "Perhaps that is the most useful lesson for the rest of us, who will never hang from a granite wall without a rope. The difference between a reckless risk and a calculated one is not how dangerous it looks from the outside. It is how much work has been done before you start — and whether you are still willing, at the last moment, to turn back. 🏔️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why does the writer call the climb “one of the least spontaneous things” ever done?", options: ["*Honnold had prepared every move for years.", "He climbed very slowly.", "Other climbers had done it before."] },
      { q: "Why was the 2016 attempt “a revealing moment”?", options: ["*It showed he was willing to turn back when things felt wrong.", "It showed he had no fear.", "It showed the route was too difficult."] },
      { q: "What does Honnold say about fear?", options: ["*He feels it, but has expanded his comfort zone.", "He has never felt it.", "He takes medicine to control it."] },
      { q: "What is the writer's conclusion about reckless and calculated risks?", options: ["*The difference is the preparation and the willingness to turn back.", "All risks are reckless.", "Only dangerous-looking risks are reckless."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a strong feeling of respect and approval: [admiration]\n2. done without planning: [spontaneous]\n3. practicing for a performance: [rehearsing]\n4. showing something you didn't know before: [revealing]\n5. making you feel worried or upset: [disturbing]\n6. people who are against something: [opponents]",
    ),
  ]),

  section("Video: How I climbed a 3,000-foot vertical cliff", [
    video("Watch: Alex Honnold — How I climbed a 3,000-foot vertical cliff — without ropes (TED, ~12 minutes).", "6iM6M_7wBMc"),
    text(
      "After the video: talk about it.",
      "- How does Honnold describe his preparation? What surprised you?\n- How does he talk about the first attempt that he abandoned?\n- After watching, do you see him as reckless, brave, or something else?\n- Which side of today's debate does the talk help more? How could **both** sides use it?",
    ),
    tip("Point out that one piece of evidence can support both sides: Proposition (*even the best prepared climber accepts a risk of death*) and Opposition (*preparation turns a reckless risk into a calculated one*). That's useful in rebuttals."),
  ]),

  section("How an Oxford-style debate works", [
    table("oxford-debate"),
    order(
      "Put the stages of an Oxford-style debate in the right order.",
      [[
        "The motion is announced, sides are chosen, and the audience votes.",
        "Both sides prepare three arguments and predict the other side's case.",
        "Opening speeches, with Points of Information.",
        "Each side finds the weak points in the other side's case.",
        "Rebuttals: answer their arguments and defend yours.",
        "Questions from the floor.",
        "Reply speeches: the main clash, with no new arguments.",
        "The second vote and feedback.",
      ].join("\n")],
      "lines",
    ),
    table("poi-language"),
    choose(
      "Choose the best phrase for each moment.",
      "1. You want to ask a short question during your opponent's speech: [*Point of Information!/Excuse me, I disagree with everything!]\n2. You're in the middle of an important point and don't want a question: [*Not at the moment, thank you./No. Sit down.]\n3. You accept a question: [*Briefly, please./Go on, take all the time you need.]\n4. You answer an argument: [*My opponent claims that… but this ignores…/My opponent is wrong because they are silly.]\n5. You agree with part of their argument: [*Admittedly… — however, …/You're right, I give up.]\n6. In your reply speech: [*The real question in this debate is…/And here's a completely new argument…]",
    ),
    tip("TEACHER NOTES — running the debate. ONE-TO-ONE: toss a coin for sides; the student speaks for one side, the teacher for the other (or the student prepares both openings). Offer 1–2 Points of Information during each opening and let the student practice accepting and declining. IN A GROUP: two teams of 2–3; the others are the audience and vote; every student speaks at least once. TIMES today: preparation 8 min · openings 3 min each · rebuttal prep 1 min · rebuttals 2 min each · questions from the floor 2 min · reply speeches 2 min each · second vote and feedback 4 min. Use the lesson Timer. Ring a warning at 2:30 in the openings."),
  ]),

  section("Listening: A model debate in Seoul", [
    tip("A long listening — about 3 minutes 50 seconds. Daniyar's university debate club in Seoul holds an Oxford-style debate on the same motion. Ji-woo speaks for the Proposition, Lucas for the Opposition, Daniyar offers a Point of Information. First listen: *Which side changes more minds?* Second listen: the tasks."),
    ...listening(
      "Listen to a model Oxford-style debate at a university club in Seoul.",
      "**Chair:** Good evening, everyone. Tonight's motion is: This house would ban dangerous extreme sports. Before we begin, the vote: thirty of you are in favor, thirty-five against, and twenty undecided. Opening for the Proposition, Ji-woo. Three minutes.\n\n**Ji-woo:** Thank you, Chair. Let me start with a story you probably haven't heard: a rescuer who died in the Alps trying to reach a stranded climber. Not the climber — the rescuer. That is our first argument. Extreme sports are not a private choice, because when things go wrong, other people risk their lives to save you. Our second argument is about money. Every helicopter, every search, every month in intensive care is paid for by the public. Our third argument is about influence. Young people watch these stunts online, and they copy them without the training. Were it not for the videos, many of them would never try.\n\n**Lucas:** Point of Information!\n\n**Ji-woo:** Briefly, please.\n\n**Lucas:** Should we also ban driving, then? Cars kill far more people than climbing.\n\n**Ji-woo:** Driving is a necessity for millions; jumping off a cliff in a wingsuit is not. Thank you. So, to summarize: other people's lives, public money, and young people's safety. For these reasons, we propose a ban.\n\n**Chair:** Thank you. Opening for the Opposition, Lucas.\n\n**Lucas:** Thank you, Chair. The Proposition wants to protect people. So do we. The question is how. Our first argument is freedom. Adults are allowed to smoke, to eat badly, to ride motorbikes. It's high time we stopped treating thrill-seekers as if they were children. Our second argument is that bans don't work. Had alcohol prohibition in America worked, nobody would remember it as a disaster. Ban climbing, and people will climb anyway — at night, without guides, without rescue services.\n\n**Daniyar:** Point of Information!\n\n**Lucas:** Not at the moment, thank you, I'll come to that. Our third argument is that there is a better solution: regulation. Licenses for the most dangerous activities, compulsory insurance so that the public doesn't pay, and training before you can buy a ticket. This mitigates the risk without destroying the freedom. And now, yes — the gentleman from Kazakhstan.\n\n**Daniyar:** Thank you. Suppose a teenager ignores your licenses and jumps anyway. Who pays then?\n\n**Lucas:** The same people who pay when a teenager drives without a license: the law deals with him. You don't ban cars because some people break the rules. So: freedom, the failure of bans, and smart regulation. We oppose.\n\n**Chair:** Thank you both. Let's go straight to the reply speeches. Ji-woo, two minutes.\n\n**Ji-woo:** The main clash tonight is simple. Is an extreme sport a private choice or a public cost? My opponent says insurance will pay. Admittedly, insurance pays for helicopters — but it doesn't pay rescuers' families. Even with licenses, the rescuer still has to climb into the storm. That is why this is not just about freedom. Vote Proposition.\n\n**Chair:** Lucas, the final word.\n\n**Lucas:** Ji-woo is right that this is the main clash. But even on her own terms, a ban makes it worse, not better. Banned climbers don't stop. They stop telling anyone where they're going — and that is exactly when rescuers die. If we really care about rescuers, we should want climbers to be trained, insured and visible. Vote Opposition.\n\n**Chair:** Thank you. Now, the second vote, please… The results: in favor, thirty-two. Against, forty-eight. Undecided, five. The Proposition gained two votes; the Opposition gained thirteen. Tonight's debate goes to the Opposition. Well done, both of you.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Ji-woo begin her speech?", options: ["*with the story of a rescuer who died", "with statistics about accidents", "with a joke"] },
      { q: "How does Ji-woo answer Lucas's question about driving?", options: ["*Driving is necessary; extreme sports are not.", "She accepts that driving should be banned.", "She refuses to answer."] },
      { q: "What does Lucas propose instead of a ban?", options: ["*regulation: licenses, insurance and training", "no rules at all", "a ban only for teenagers"] },
      { q: "What is the “main clash”, according to Ji-woo?", options: ["*whether extreme sports are a private choice or a public cost", "whether extreme sports are fun", "whether driving is dangerous"] },
      { q: "Why does the Opposition win?", options: ["*They gained more votes between the first and second vote.", "They had more votes at the start.", "The Chair liked them more."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Before the debate, more people were against the motion than for it.", true],
      ["Ji-woo accepts Lucas's Point of Information.", true],
      ["Lucas accepts Daniyar's Point of Information immediately.", false],
      ["Lucas mentions alcohol prohibition in America as an example of a failed ban.", true],
      ["In her reply speech, Ji-woo introduces a completely new argument.", false],
      ["After the debate, there were fewer undecided people.", true],
    ]),
    gaps(
      "Complete the phrases from the debate.",
      "1. Point of [Information]!\n2. Briefly, [please].\n3. Not at the moment, thank you, I'll come [to] that.\n4. [Admittedly], insurance pays for helicopters — but it doesn't pay rescuers' families.\n5. But even on her own [terms], a ban makes it worse, not better.\n6. The main [clash] tonight is simple.",
    ),
  ]),

  section("Your debate", [
    text(
      "Debate: This house would ban dangerous extreme sports ⚖️",
      "1. **Sides:** toss a coin — you may have to argue against your own opinion. That's good practice!\n2. **Prepare (8 min):** three arguments, each with an example or a fact (from the reading, the video or the lesson), and two arguments you expect from the other side.\n3. **Opening speeches (3 min each)** — offer and answer Points of Information.\n4. **Rebuttals (2 min each)** — *My opponent claims… but…*\n5. **Questions from the floor (2 min).**\n6. **Reply speeches (2 min each)** — the main clash, no new arguments.\n7. **The second vote:** has your opinion changed? Why?\n\nTry to use: *Had they…, / Were it not for…, / Suppose…, / It's high time…, / as if…*",
    ),
    tip("Scoring (for feedback, 1–5 each): arguments and evidence · structure and signposting · rebuttal and POIs · language range (inversion, unreal past, vocabulary of the lesson) · delivery (pace, eye contact, time). Give one strength and one thing to improve. Then compare the first and second votes."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "During a speech, a short question from the other side is a ___.", options: ["*Point of Information", "reply speech", "rebuttal"] },
      { q: "In the reply speech you ___ add new arguments.", options: ["*can't", "must", "should"] },
      { q: "The benefits clearly ___ the risks.", options: ["*outweigh", "outrun", "overtake"] },
      { q: "Who wins an Oxford-style debate?", options: ["*the side that changes more minds", "the side that speaks longer", "the side with more votes at the start"] },
    ]),
    box(
      "Phrase of the day: a calculated risk",
      "🧮 A risk you take after doing the sums. Honnold's climb and Asel's bakery have this in common: years of preparation, and the courage to turn back.\n\n*Has today's debate changed your mind about anything?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Module 2 review: complete with the right form of the verb in brackets.",
        "1. [Had he slipped], he would have died. (he / slip — inversion)\n2. [Should you change] your mind, let me know. (you / change — inversion)\n3. It's high time the city [built] a proper cycle lane. (build)\n4. I'd rather you [didn't post] that video. (not / post)\n5. He talks about the climb as if he [had done/'d done] it himself. (do)\n6. If I [had trained] harder last year, I'd be in the team now. (train)\n7. [Were it not for] the guide, we'd have got lost. (it / not / be — inversion)\n8. Suppose you [failed] the exam — what would you do? (fail)",
      ),
      match("Match the words and the meanings.", [
        ["autonomy", "the right to decide for yourself"],
        ["mitigate", "make less serious"],
        ["outweigh", "be more important than"],
        ["paternalistic", "limiting freedom “for your own good”"],
        ["a deterrent", "something that stops people doing something"],
        ["regulate", "control with rules"],
      ]),
      trueFalse("Correct or not?", [
        ["Had we known about the storm, we would have stayed at home.", true],
        ["It's high time we go home.", false],
        ["Were it not for her, I would have given up.", true],
        ["I'd rather you don't tell anyone.", false],
        ["He acts as though he were the boss.", true],
      ]),
    ],
    "Homework: Module review",
  ),
  homework(
    [
      write(
        "Write the opening speech for the side you did NOT argue in class (220–260 words). Motion: This house would ban dangerous extreme sports. Give three arguments with evidence, and answer one argument from the other side.",
        220,
        { read: "*Structure:* hook (a story, a fact or a question) · “Our first argument is…” × 3 · “My opponents will say… but…” · a strong final sentence. Useful: *Were it not for… / Had…, / It's high time… / The bottom line is…*" },
      ),
      record("Record your speech (2–3 minutes). Time yourself — and try not to read every word. 🎤", 180),
    ],
    "Homework: Writing and speaking",
  ),
]);
