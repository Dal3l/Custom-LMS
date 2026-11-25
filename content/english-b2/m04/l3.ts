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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.3 Predictions that went wrong — skills lesson: no new grammar; review of the Future Perfect / Continuous, the future in the past and probability. V: predicting and judging (forecast, foresee, underestimate, a trend, hindsight, a long shot…). S: why predictions fail; make your own predictions for 2056. Main format: matching famous predictions with who made them + a long reading (wrong predictions and fake quotes, ~570 words) + BBC Archive video (Arthur C. Clarke, 1964) + a long listening (an interview with a futurist, ~3:20). Rock easter egg: Decca and the Beatles (1962).
// Facts checked: Ken Olsen (DEC), 1977: "There is no reason for any individual to have a computer in his home" (he later said he meant computers controlling the home); Steve Ballmer (Microsoft), USA Today, April 2007: "There's no chance that the iPhone is going to get any significant market share"; Clifford Stoll, Newsweek, 1995: "no online database will replace your daily newspaper"; Robert Metcalfe (co-inventor of Ethernet) predicted in 1995 that the internet would collapse in 1996 and in 1997 put his column in a blender and drank it; Decca Records turned down the Beatles after an audition on 1 January 1962 — according to Brian Epstein, a Decca executive told him "guitar groups are on the way out"; Lord Kelvin is reported to have said in 1895 that heavier-than-air flying machines were impossible — the Wright brothers flew in 1903; quotes with no reliable source: "640K ought to be enough for anybody" (Bill Gates has denied it), "a world market for maybe five computers" (Thomas Watson, IBM, 1943), "everything that can be invented has been invented" (Charles Duell, 1899); Arthur C. Clarke on the BBC's Horizon (1964) predicted that people would be able to work from anywhere in the world; Roy Amara — "We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run"; Philip Tetlock — research on expert predictions and "superforecasters" (Good Judgment Project).
export default lesson("b2-4.3", "Predictions that went wrong", () => [
  section("Warm-up: Who said it?", [
    box(
      "Today you will…",
      "- laugh at famous predictions that went wrong 😅\n- find out which famous quotes are fake 🕵️\n- learn why predicting is so hard — and make your own predictions for 2056 🔮",
    ),
    match("Famous predictions. Match each one with the person or company. 🔮", [
      ["“There's no chance that the iPhone is going to get any significant market share.” (2007)", "Steve Ballmer, the head of Microsoft"],
      ["“There is no reason for any individual to have a computer in his home.” (1977)", "Ken Olsen, the head of a computer company"],
      ["“No online database will replace your daily newspaper.” (1995)", "Clifford Stoll, an astronomer and writer"],
      ["The internet will “catastrophically collapse” in 1996. (1995)", "Robert Metcalfe, an internet pioneer"],
      ["“Guitar groups are on the way out.” (1962, about the Beatles)", "a manager at Decca Records"],
      ["Heavier-than-air flying machines are impossible. (1895)", "Lord Kelvin, a famous physicist"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which prediction is the funniest — and which one is the most understandable for its time?\n- Why do intelligent, expert people make such wrong predictions?\n- Have you ever been completely wrong about something new — a phone, an app, a song, a person? 😄",
    ),
    tip("The reading tells the full stories. Point out that some quotes are reported, not recorded — that's why we say *is reported to have said*."),
  ]),

  section("Vocabulary: Predicting", [
    words("Predicting and judging", [
      ["a forecast", "🌦️ a statement about what will happen (weather, economy)"],
      ["foresee", "🔭 know about something before it happens"],
      ["underestimate — overestimate", "📉 think something is smaller / less important than it is — 📈 bigger than it is"],
      ["a trend", "📈 a general direction in which something is changing"],
      ["in hindsight", "👀 looking back, when you know what happened"],
      ["a long shot", "🎯 something unlikely to succeed, but worth trying"],
      ["take something for granted", "🙈 not notice its value because it's always there"],
      ["eat your words", "🍽️ admit you were wrong"],
      ["a fad", "🪀 something popular for a short time only"],
      ["here to stay", "🏠 permanent, not just a fashion"],
    ]),
    match("Match.", [
      ["In hindsight,", "it was a terrible decision."],
      ["Smartphones are not a fad —", "they're here to stay."],
      ["Nobody could have foreseen", "the pandemic."],
      ["He had to eat", "his words."],
      ["We underestimated", "how popular the app would become."],
      ["Winning the competition is a long shot,", "but let's try."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Fidget spinners were just a [fad]. 🪀\n2. The weather [forecast] says it'll snow tomorrow.\n3. In [hindsight], I should have bought those shares.\n4. We often take clean water for [granted].\n5. There's a clear [trend] towards working from home.\n6. Don't [underestimate] her — she's smarter than she looks.",
    ),
    quiz("Choose the right word.", [
      { q: "Nobody could ___ how popular the internet would become.", options: ["*foresee", "forecast", "underestimate"] },
      { q: "Getting tickets for the final is a long ___, but I'll try.", options: ["*shot", "way", "chance"] },
      { q: "We ___ the problem — it was much bigger than we thought.", options: ["*underestimated", "overestimated", "foresaw"] },
      { q: "Is online shopping a fad, or is it here to ___?", options: ["*stay", "last", "remain"] },
    ]),
  ]),

  section("Reading: We were so sure…", [
    tip("A long text (~570 words). First reading — 5 minutes: *According to the writer, why do experts get the future wrong?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Ken Olsen later said his words had been misunderstood.", true],
        ["Robert Metcalfe ate his own column when his prediction failed.", true],
        ["Decca Records signed the Beatles in 1962.", false],
        ["There is good evidence that Bill Gates said “640K ought to be enough for anybody”.", false],
        ["The writer thinks we should stop trying to predict the future.", false],
        ["According to the writer, change is often slow at first and then very fast.", true],
      ],
      {
        read: [
          "## 😅 We were so sure… The predictions history laughed at",
          "Predicting the future is one of humanity's favorite hobbies — and one of its least successful. Some of the cleverest people of their time made predictions that look ridiculous today. Here are a few, and what we can learn from them.",
          "**Computers at home? Why?** In 1977, Ken Olsen, the founder of one of America's biggest computer companies, told a conference that there was \"no reason for any individual to have a computer in his home\". Olsen later explained that he had meant computers that controlled your whole house, not personal computers. Still, his company was too slow to see the PC revolution coming and was eventually sold.",
          "**The internet will collapse.** In 1995, Robert Metcalfe, one of the inventors of the technology that connects computers in offices, wrote that the internet would \"catastrophically collapse\" the following year. It didn't. At a conference in 1997, Metcalfe literally ate his words: he put a copy of his column in a blender with some water and drank it in front of the audience. Respect.",
          "In the same year, the astronomer Clifford Stoll wrote in *Newsweek* magazine that \"no online database will replace your daily newspaper\". And in 2007, Steve Ballmer, the head of Microsoft, laughed at the first iPhone: \"There's no chance that the iPhone is going to get any significant market share. No chance.\" Within a few years, smartphones had changed the world.",
          "**Guitar groups are on the way out.** Music has its own famous mistake. On New Year's Day 1962, a young band from Liverpool auditioned for Decca Records in London. Decca turned them down. According to their manager, Brian Epstein, a Decca executive told him that \"guitar groups are on the way out\". The band was the Beatles. 🎸",
          "**Beware of fake quotes.** Some of the most famous \"wrong predictions\" were probably never said at all. There is no reliable source for Bill Gates saying that \"640K ought to be enough for anybody\" — and he has denied it many times. Nobody has found evidence that the head of IBM said in 1943 that there was \"a world market for maybe five computers\", or that a US patent official claimed in 1899 that \"everything that can be invented has been invented\". These quotes survive because they make such a good story. Before you share one, check it.",
          "**Why do we get it so wrong?** There are a few reasons. First, experts tend to imagine the future as a slightly improved version of the present: faster horses instead of cars. Second, many new technologies look like toys at first — the early telephone, the early internet and the first smartphones all seemed like expensive gadgets for a few enthusiasts. Third, change is rarely smooth. It often looks slow for years and then becomes extremely fast. As the researcher Roy Amara put it, we tend to overestimate the effect of a technology in the short run and underestimate it in the long run.",
          "So should we give up predicting? Not at all. But we could be a little more humble. The next time someone tells you confidently what the world will be like in thirty years, remember Ken Olsen, Steve Ballmer and the man from Decca. In hindsight, the future always looks obvious. It never does at the time. 🔮",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What happened to Ken Olsen's company?", options: ["*It was too slow to see the PC revolution and was sold.", "It invented the iPhone.", "It became the biggest company in the world."] },
      { q: "Why do some fake quotes survive?", options: ["*They make a good story.", "They are in history books.", "Famous people repeat them."] },
      { q: "What does “faster horses instead of cars” mean in the article?", options: ["*Experts imagine the future as a better version of the present.", "Horses were faster than early cars.", "People didn't want cars."] },
      { q: "What is Amara's idea?", options: ["*We overestimate new technology in the short run and underestimate it in the long run.", "Technology always changes slowly.", "Experts are always right in the long run."] },
      { q: "What does the writer recommend?", options: ["*being more humble about predictions", "never making predictions", "trusting experts completely"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. very silly, deserving to be laughed at: [ridiculous]\n2. in a terrible, disastrous way: [catastrophically]\n3. people who are very interested in something: [enthusiasts]\n4. trustworthy, that you can believe: [reliable]\n5. said that something is not true: [denied]\n6. not proud, aware of your limits: [humble]",
    ),
  ]),

  section("Reading: Real or fake?", [
    trueFalse("According to the article, is there good evidence that the person really said it? True = real, false = probably fake. 🕵️", [
      ["Steve Ballmer: “There's no chance that the iPhone is going to get any significant market share.”", true],
      ["Bill Gates: “640K ought to be enough for anybody.”", false],
      ["Ken Olsen: “There is no reason for any individual to have a computer in his home.”", true],
      ["The head of IBM, 1943: “a world market for maybe five computers”", false],
      ["A US patent official, 1899: “Everything that can be invented has been invented.”", false],
    ]),
    order(
      "Put Robert Metcalfe's story in the right order.",
      [[
        "Metcalfe helped to invent a way of connecting computers in offices.",
        "In 1995, he predicted that the internet would collapse.",
        "The internet didn't collapse in 1996.",
        "At a conference in 1997, he put his column in a blender.",
        "He drank it in front of the audience — he literally ate his words.",
      ].join("\n")],
      "lines",
    ),
    tip("Discuss: *Why do fake quotes spread so fast online? How can you check a quote?* (search for the original source, the date, the context)."),
  ]),

  section("Video: Arthur C. Clarke predicts the future (1964)", [
    video("Watch: BBC Archive — Arthur C. Clarke predicts the future (Horizon, 1964). Watch at least the first 4–5 minutes.", "YwELr8ir9qM"),
    text(
      "After the video: talk about it.",
      "- Which of Clarke's predictions came true? Which haven't (yet)?\n- Clarke spoke in 1964. Why do you think he was so much better than the experts in the reading?\n- What prediction would you make today that might sound strange in 2064? 😄",
    ),
    tip("Clarke famously said that a businessman could work from Tahiti or Bali as well as from London. Ask: *Did he foresee remote work? What would he be amazed by today?* Encourage *He predicted that people would…* (the future in the past)."),
  ]),

  section("Listening: Why are predictions so hard?", [
    tip("A long listening — about 3 minutes 20 seconds. An interview with Professor Helen Ward, a futurist. First listen: *What makes some people better at predicting than others?* Second listen: the tasks."),
    ...listening(
      "Listen to an interview with a futurist.",
      "**Host:** My guest today has a job that sounds like science fiction. Professor Helen Ward is a futurist — she studies how we predict the future. Helen, welcome.\n\n**Helen:** Thank you. And I should say right away: I don't have a crystal ball.\n\n**Host:** That's disappointing! So what does a futurist actually do?\n\n**Helen:** We look at trends — population, technology, climate, the economy — and we try to imagine different possible futures, not just one. Governments and companies use that to prepare for things that might happen, so they aren't caught by surprise.\n\n**Host:** Why are predictions so often wrong?\n\n**Helen:** There are several reasons, but the biggest one is that we think in straight lines. We look at the last ten years and assume the next ten will be similar. But real change usually isn't like that. It's slow, slow, slow — and then suddenly very fast. Think of smartphones. For years they were expensive toys. Then, within about five years, almost everybody had one.\n\n**Host:** Is that why the head of Microsoft laughed at the iPhone in 2007?\n\n**Helen:** Partly. He was looking at it as a phone, and as a phone, it was expensive and had no keyboard. He didn't see that it was really a computer in your pocket. That's a very common mistake: we judge new things by the standards of old things.\n\n**Host:** Are experts better at predicting than the rest of us?\n\n**Helen:** Not as much as you'd think. There's a famous long-term study by the psychologist Philip Tetlock. He collected thousands of predictions by experts over many years, and many of them did hardly better than chance on long-term questions. But he also found a small group of people who were consistently better. He called them superforecasters.\n\n**Host:** What makes a superforecaster special?\n\n**Helen:** They're not geniuses, interestingly. They're curious, they read widely, and they think in probabilities. Instead of saying \"this will happen\", they say \"there's about a seventy percent chance\". And, most importantly, they change their minds when new information appears. People who are very sure of one big theory tend to be worse at predicting.\n\n**Host:** So humility helps.\n\n**Helen:** Absolutely. The worst forecasters are often the most confident ones — and, unfortunately, they're also the ones who get invited on TV.\n\n**Host:** Ha! Present company excepted, I hope. So, let me be brave: where will we be in thirty years?\n\n**Helen:** I'll answer like a superforecaster. It's very likely that AI will have changed most jobs — though probably not in the way people expect. There's a good chance that most new cars will be electric. I'd say it's unlikely that we'll be living on Mars in large numbers. And I'm almost certain that something important will happen that none of us is talking about today.\n\n**Host:** That's not very helpful!\n\n**Helen:** It's very helpful — it means we should prepare for surprises. The best way to deal with an uncertain future isn't to predict it perfectly. It's to be flexible, keep learning, and avoid betting everything on one idea.\n\n**Host:** Professor Helen Ward, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "What do futurists do, according to Helen?", options: ["*imagine different possible futures so people can prepare", "predict exactly what will happen", "invent new technology"] },
      { q: "What is the biggest reason predictions go wrong?", options: ["*We think in straight lines.", "We don't have enough data.", "Experts lie."] },
      { q: "What mistake did the head of Microsoft make, according to Helen?", options: ["*He judged the iPhone as a phone, not a computer.", "He didn't try the iPhone.", "He thought it was too cheap."] },
      { q: "What do superforecasters do?", options: ["*think in probabilities and change their minds", "follow one big theory", "appear on TV a lot"] },
      { q: "What is Helen almost certain about?", options: ["*Something important will happen that nobody is talking about now.", "People will live on Mars.", "AI will replace all jobs."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Helen says she can see the future clearly.", false],
      ["Real change is often slow and then very fast.", true],
      ["In Tetlock's study, all experts were excellent at long-term predictions.", false],
      ["Superforecasters are usually geniuses.", false],
      ["Helen thinks it's likely that most new cars will be electric in thirty years.", true],
      ["Helen advises us to bet everything on one idea.", false],
    ]),
    gaps(
      "Complete Helen's phrases from the interview.",
      "1. I don't have a crystal [ball].\n2. We think in straight [lines].\n3. We judge new things by the [standards] of old things.\n4. Many experts did hardly better than [chance].\n5. They think in [probabilities].\n6. The best way to deal with an uncertain future is to be [flexible].",
    ),
    choose(
      "Review: future forms. Choose.",
      "1. In thirty years, AI [*will have changed/will change] most jobs.\n2. The head of Microsoft thought the iPhone [*would/will] fail.\n3. Most new cars are [*likely/bound] to be electric — it's probable, not certain.\n4. This time next year, Helen [*will be teaching/will have taught] at a new university.\n5. Metcalfe [*was going to/is going to] be famous for his prediction — for the wrong reason!\n6. We [*'re unlikely to/'re bound to] live on Mars in large numbers soon.",
    ),
  ]),

  section("Let's talk: Predictions for 2056", [
    sort("Sort the predictions for 2056: how likely do YOU think they are? (Your teacher may disagree! 😄)", {
      "✅ likely": ["Most cars will be electric.", "People will work fewer hours.", "AI will be teaching some school subjects.", "Many people will live to 100."],
      "❌ unlikely": ["Paper books will have disappeared.", "Most people will live on Mars.", "Nobody will learn foreign languages.", "Money will no longer exist."],
    }),
    text(
      "Your predictions 🔮",
      "Make **three predictions** for the world in 2056 (30 years from now) and give each one a probability — like a superforecaster:\n\n- *I'd say there's about an 80% chance that…*\n- *By 2056, … will (probably) have…*\n- *People will be …-ing…*\n- *It's highly unlikely that…*\n\nYour teacher challenges each prediction: *Why? What could go wrong?* Then swap roles. Finally: which of your predictions would Ken Olsen have laughed at? 😄",
    ),
    tip("The sort has no single right answer — the checking shows one view; discuss differences. Push for reasons and probabilities, not just *I think*. This is good practice for discussion and debate in later modules."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "In ___, the decision was clearly wrong.", options: ["*hindsight", "forecast", "trend"] },
      { q: "He was wrong, so he had to eat his ___.", options: ["*words", "hat", "column"] },
      { q: "Smartphones aren't a fad — they're here to ___.", options: ["*stay", "go", "come"] },
      { q: "Don't ___ how fast technology can change.", options: ["*underestimate", "overcome", "foresee"] },
    ]),
    box(
      "Phrase of the day: prediction is very difficult, especially about the future",
      "😄 A joke attributed to many people — from the physicist Niels Bohr to the baseball player Yogi Berra. Nobody knows who said it first… which proves the point!\n\n*What's the most surprising thing that has happened in your life that nobody predicted?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The weather [forecast] was wrong again.\n2. Nobody could have [foreseen] what happened.\n3. In [hindsight], we should have left earlier.\n4. Fidget spinners were just a [fad].\n5. We take electricity for [granted].\n6. The new technology is here to [stay].",
      ),
      drag(
        "Complete the summary of the lesson.",
        "In 2007, the head of Microsoft said there was no [chance] that the iPhone would succeed. In [hindsight], he was completely wrong. Experts often [underestimate] how fast change can be. Some famous quotes are [fake] — always check the source. People who think in [probabilities] and change their minds are better at predicting. As Roy Amara said, we [overestimate] new technology in the short run.",
        ["certain", "overcome", "foresee"],
      ),
      order("Make sentences.", [
        "Nobody could have foreseen the pandemic.",
        "In hindsight, it was a terrible decision.",
        "He had to eat his words.",
        "There's about a seventy percent chance.",
        "Smartphones are here to stay.",
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      write("Write an article (140–190 words) for a website called “2056”: three predictions about life thirty years from now. For each, say how likely it is and why. Use the Future Perfect, the Future Continuous and probability phrases.", 140, {
        read: "*Tip:* start with a famous wrong prediction (like Ballmer and the iPhone) as a hook, then your three predictions, then a humble conclusion.",
      }),
      record("Record a 1-minute answer: “Which invention of the last 20 years has surprised you most, and why?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
