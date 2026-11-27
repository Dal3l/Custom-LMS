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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.1 We're on the verge of… — G: the future and probability at C1: be on the verge / brink of, be set to, be due to, be bound to, be (un)likely to, there's every chance that; future continuous and future perfect continuous (active use). V: work and technology (redundant, upskill, the gig economy…). S: a forecast for your own profession. Main format: jobs that disappeared (match) + a long reading (will a robot take your job?, ~790 words) + David Autor's TED talk in class + a long listening (a radio show: Aliya and Laura on AI in design and teaching, ~3:40) + BBC 6 Minute English at home.
// Facts checked: Carl Benedikt Frey & Michael Osborne (Oxford, 2013) — about 47% of US jobs at high risk of automation; Arntz, Gregory & Zierahn (OECD, 2016) — looking at tasks rather than whole jobs, on average about 9% of jobs in OECD countries were at high risk; ATMs and bank tellers — the number of tellers in the US did not fall as ATMs spread (and grew for a long time), because cheaper branches meant more branches and tellers' work shifted to customer service (James Bessen; also in David Autor's TED talk, 2016). Old jobs: lamplighters (lit gas street lamps), knocker-uppers (woke workers by tapping on windows, in Britain and Ireland, into the 20th century), switchboard operators, "human computers" (people who did calculations, e.g. at NASA), pinsetters (set up bowling pins by hand), ice cutters (cut ice from frozen lakes before refrigerators).
// Warm-up format: match (old jobs) — after a quiz in 3.4. Characters: Aliya (a designer in Kenji's team), Laura (an English teacher in Almaty), Kenji (the column).
export default lesson("c1-4.1", "We're on the verge of…", () => [
  section("Warm-up: Jobs that disappeared", [
    box(
      "Today you will…",
      "- meet some jobs that no longer exist — and think about which ones are next 🤖\n- talk about the future precisely: *We're on the verge of… Prices are set to… This is bound to…* 🔮\n- make a forecast for your own profession 📈",
    ),
    match("These jobs have (almost) disappeared. Match the jobs and what people did. 🕰️", [
      ["a lamplighter", "lit the gas lamps in the streets every evening"],
      ["a knocker-upper", "woke workers up by tapping on their windows with a long stick"],
      ["a switchboard operator", "connected telephone calls by hand"],
      ["a human computer", "did long mathematical calculations on paper"],
      ["a pinsetter", "put the bowling pins back up after each throw"],
      ["an ice cutter", "cut blocks of ice from frozen lakes to keep food cold"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these jobs would you have liked to do? Which would you have hated?\n- What made these jobs disappear?\n- Name three jobs that exist today but didn't exist when your parents were young.\n- Which jobs do you think will disappear next?",
    ),
    tip("The knocker-uppers worked in Britain and Ireland in the industrial era — and into the 20th century, before alarm clocks were cheap. Keep the last question for the end of the lesson and compare the answers."),
  ]),

  section("Vocabulary: Work and technology", [
    words("Work and technology", [
      ["automation", "🤖 using machines or software to do work people used to do", "Automation has changed factories completely."],
      ["redundant", "📦 (UK) no longer employed because the job isn't needed"],
      ["be made redundant", "✂️ lose your job for this reason"],
      ["upskill", "📚 learn new skills for your job"],
      ["reskill", "🔄 learn completely new skills for a different job"],
      ["the gig economy", "🛵 work made of short, separate jobs (deliveries, rides, freelance tasks)"],
      ["obsolete", "🗑️ no longer used because something better exists"],
      ["job security", "🔒 knowing that you won't lose your job"],
      ["augment", "➕ make something bigger or better by adding to it"],
      ["a routine task", "🔁 a task that follows the same steps every time"],
      ["remote work", "🏠 working from home or anywhere outside the office"],
      ["a side hustle", "💡 extra work you do besides your main job (informal)"],
    ]),
    match("Match the sentences and the words.", [
      ["“The factory closed, and 200 workers lost their jobs.”", "be made redundant"],
      ["“Nobody uses fax machines any more.”", "obsolete"],
      ["“She drives for a delivery app in the evenings, job by job.”", "the gig economy"],
      ["“He took a course in data analysis to stay useful in his team.”", "upskill"],
      ["“The software doesn't replace doctors — it helps them see more.”", "augment"],
      ["“I sell my photos online on weekends.”", "a side hustle"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Many people value job [security] more than a high salary.\n2. Machines are best at [routine] tasks that follow clear steps.\n3. After the factory closed, she decided to [reskill] as a nurse.\n4. [Automation] has already changed farming, banking and manufacturing.\n5. Since 2020, [remote] work has become normal for millions of people.\n6. Some skills become [obsolete] within a few years.",
    ),
  ]),

  section("Reading: Will a robot take your job?", [
    tip("A long text (~790 words). First reading — 7 minutes: *Is Kenji optimistic or pessimistic about the future of work?* Then the tasks. Ask the student to find five ways of talking about the future."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["The 2013 Oxford study estimated that almost half of US jobs were at high risk.", true],
        ["The 2016 OECD study looked at whole jobs, not tasks.", false],
        ["The number of bank tellers in the US fell quickly after ATMs appeared.", false],
        ["Kenji's team now spends less time on some routine work.", true],
        ["Kenji thinks nobody will lose their job because of AI.", false],
        ["He believes that skills like judgment and communication will matter more.", true],
      ],
      {
        read: [
          "## 🤖 Will a robot take your job?",
          "*by Kenji, a team leader at a tech company in Almaty*",
          "Every few months, someone at a family dinner asks me the same question, usually with a mixture of curiosity and fear: \"Is AI going to take my job?\" Since I work in tech, people seem to assume I know the answer. I don't. But I have learned that the question is more interesting — and the answer more complicated — than the headlines suggest.",
          "The modern version of this worry began, in many ways, with a study published in 2013 by two researchers at the University of Oxford, Carl Benedikt Frey and Michael Osborne. They looked at hundreds of occupations in the United States and estimated how easily each could be automated. Their conclusion made headlines around the world: about 47 percent of American jobs, they said, were at high risk of automation over the next decade or two.",
          "Three years later, economists working for the OECD looked at the same problem from a different angle. Instead of asking whether whole *jobs* could be automated, they looked at the individual *tasks* inside each job. A bank clerk, for example, doesn't only count money; she also explains products, calms angry customers and notices when something looks wrong. When the economists took this into account, the number of jobs at high risk fell dramatically — to about 9 percent on average across the countries they studied. Most jobs, it seemed, were likely to change rather than disappear.",
          "History supports this more cautious view. My favorite example is the cash machine. When ATMs spread across the United States, it seemed obvious that bank tellers were on the brink of extinction. Yet the number of tellers didn't collapse; for many years, it actually grew. ATMs made it cheaper to run a branch, so banks opened more branches, and tellers spent less time handing out cash and more time talking to customers. The economist David Autor uses this story in his TED talk to make a simple point: machines tend to take over tasks, not whole people.",
          "I see something similar in my own team. Two years ago, our developers spent hours every week writing routine pieces of code and checking them for basic mistakes. Today, AI tools do much of that in minutes. Nobody has been made redundant. Instead, people spend more time on the parts of the job that the tools are bad at: understanding what clients actually need, deciding between different solutions, explaining complex things to non-experts. In other words, the tools have augmented the job rather than replaced it — at least so far.",
          "\"At least so far\" is important, though. I don't want to sound naive. Not every story ends like the ATM story. Some jobs really do disappear, and the people who did them don't automatically find new ones. A factory worker made redundant at fifty-five is not going to retrain as a software developer just because economists say new jobs are being created somewhere else. The transition is bound to be painful for some people, and it is likely to be most painful for those who can least afford it. Pretending otherwise isn't optimism; it's indifference.",
          "What, then, should we do? I'm wary of anyone who claims to know exactly which jobs will exist in twenty years. But a few things seem fairly safe to predict. Tasks that follow clear rules are set to become cheaper and more automated. Skills that are hard to put into rules — judgment, creativity, persuasion, care for other people — are likely to become more valuable, not less. And the ability to keep learning is bound to matter more than any single qualification. By the time today's schoolchildren start work, they will probably have been using AI tools for years; what will make them valuable is what they can do *with* them.",
          "That means companies, schools and governments have work to do as well. If people are expected to upskill throughout their lives, someone has to make that possible — with time, money and courses that fit around a full-time job. In our company, every employee now has a day a month for learning. It is a small step, but it seems to be paying off.",
          "So, is AI going to take your job? My honest answer is: probably not all of it, quite possibly some of it, and almost certainly it will change it. We may well be on the verge of the biggest change in work since the computer itself. But we have been on the verge of something before. The lamplighters disappeared. Someone still has to decide where the lights should go. 💡",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did the OECD economists get a much lower number than Frey and Osborne?", options: ["*They looked at tasks inside jobs, not whole jobs.", "They studied only one country.", "They used older data."] },
      { q: "What does the ATM story show?", options: ["*Machines often change jobs instead of removing them.", "Banks don't need people.", "Cash will soon disappear."] },
      { q: "What does Kenji say about people who lose their jobs late in their careers?", options: ["*They may find it very hard to retrain, and we shouldn't ignore that.", "They can easily become developers.", "They should retire early."] },
      { q: "Which skills does Kenji think will become more valuable?", options: ["*judgment, creativity, persuasion and care", "routine calculation", "typing speed"] },
      { q: "What does Kenji's company do to help its employees?", options: ["*gives everyone a day a month for learning", "pays for university degrees", "replaces routine jobs with AI"] },
    ]),
    gaps(
      "Find words and phrases in the column.",
      "1. jobs, professions (formal): [occupations]\n2. the state of no longer existing (about animals or jobs): [extinction]\n3. a change from one situation to another: [transition]\n4. not caring about something: [indifference]\n5. careful because you don't trust something: [wary]\n6. bringing good results: paying [off]",
    ),
  ]),

  section("Video: Will automation take away all our jobs?", [
    video("Watch: David Autor — Will automation take away all our jobs? (TED). Watch at least the first 10 minutes.", "th3nnEpITz0"),
    text(
      "After the video: talk about it.",
      "- How does Autor explain the ATM paradox? Is it the same as in Kenji's column?\n- What does he mean when he says machines complement human work?\n- Is he more optimistic or more worried than Kenji? Give examples.\n- What questions would you ask him about AI today?",
    ),
    tip("Ask the student to summarize one argument from the talk using the grammar of the lesson: *According to Autor, routine jobs are bound to… / New kinds of work are likely to…* The talk is from 2016 — invite the student to discuss whether AI changes his argument."),
  ]),

  section("Grammar: The future — how sure and how soon?", [
    quiz("Notice the rule 🔍 Look: “We may well be on the verge of the biggest change in work.” · “Tasks that follow clear rules are set to become cheaper.” · “The transition is bound to be painful.”", [
      { q: "“on the verge of” means…", options: ["*very close to (happening)", "far from", "after"] },
      { q: "“are set to become cheaper” means…", options: ["*it's planned or very likely", "it's impossible", "it already happened"] },
      { q: "“is bound to be painful” shows that the speaker is…", options: ["*very sure", "not sure at all", "hoping it won't happen"] },
    ]),
    table("future-probability"),
    choose(
      "Choose the correct option.",
      "1. Scientists believe they are on the verge of [*finding/to find] a cure.\n2. The new law is [*due to/bound for] come into force in January.\n3. The company is on the [*brink/verge] of collapse — it may close next month.\n4. With so many cars, the traffic is [*bound to/due to] get worse.\n5. House prices are [*set to/set for] rise again this year.\n6. By 2030, Laura [*will have been teaching/will teach] in Almaty for years.\n7. This time next week, we [*'ll be presenting/'ll have presented] the design to the client.\n8. There's every [*chance/possibility of] that the plan will work.",
    ),
    gaps(
      "Rewrite the sentences. Use the word in brackets.",
      "1. The meeting is scheduled for 3 p.m. (due) → The meeting is [due to start/due to begin] at 3 p.m.\n2. The two companies are very close to agreeing. (verge) → The two companies are on the [verge of agreeing/verge of an agreement].\n3. I'm sure the train will be late — it always is. (bound) → The train is [bound to be] late.\n4. Unemployment will probably rise. (likely) → Unemployment [is likely to rise].\n5. The government plans to cut taxes next year. (set) → Taxes [are set to be cut/are set to fall] next year.\n6. In June, I'll reach ten years in this job. (been) → By June, I [will have been working/'ll have been working] in this job for ten years.",
    ),
    drag(
      "Complete the news report with the words.",
      "AI tools are [set] to change the way designers work. Experts say we are on the [verge] of a new era. Several companies are [due] to launch new software next month. Some jobs are [bound] to disappear, but new ones are [likely] to appear too. By the end of the decade, most designers [will] have been using AI for years.",
      ["sure", "brink", "able"],
    ),
    tip("Say it right: in *be bound to* and *be set to*, *to* is weak /tə/: *It's BOUND tə HAPpen.* In *on the verge of*, link the words: *on the VERGE əv*. Practice: *We're on the verge of a revolution.*"),
  ]),

  section("Listening: Will AI take our jobs?", [
    tip("A long listening — about 3 minutes 40 seconds. A radio show about the future of work. The guests are Aliya, a designer, and Laura, an English teacher. First listen: *Are they worried about AI?* Second listen: the tasks. Ask the student to note future forms."),
    ...listening(
      "Listen to a radio show about AI and the future of work.",
      "**Host:** Good morning, and welcome to Tomorrow's Jobs. Today we're asking a simple question: is artificial intelligence about to take our jobs? With me are Aliya, a designer at a tech company, and Laura, an English teacher. Aliya, let's start with you. Designers have been hearing for a while that AI is coming for them. Are you worried?\n\n**Aliya:** Honestly? A year ago, I was. When the first image tools came out, some people in my field were convinced we were on the verge of extinction. You type a sentence, and in ten seconds you get a poster. It was a bit of a shock.\n\n**Host:** And now?\n\n**Aliya:** Now I use those tools every day. They're very good at producing a hundred options quickly. They're not very good at knowing which option is right for a particular client. That's still my job. If anything, I'm spending less time on the boring parts — resizing images, preparing twenty versions of the same banner — and more time talking to clients and thinking.\n\n**Host:** So you don't think your job is at risk?\n\n**Aliya:** I didn't say that. Some design jobs are bound to disappear — especially the ones that are mostly routine. A friend of mine used to make simple product images for online shops. That work has almost gone. She's had to reskill — she's now learning to design for interactive displays. It's set to be a growing area, but it wasn't easy for her.\n\n**Host:** Laura, what about teaching? There are already AI tutors that can explain grammar at three in the morning.\n\n**Laura:** There are, and some of them are surprisingly good. My students use them, and I'd be lying if I said I didn't feel a little nervous the first time I saw one. But I've been teaching for a long time, and I've noticed that explaining grammar has never been the hardest part of my job.\n\n**Host:** What is?\n\n**Laura:** Motivation. Confidence. Noticing that a student has gone quiet because something's wrong at home. Persuading a seventeen-year-old who's about to give up that she can actually pass her exam. An app can give you the rule; it can't sit with you while you cry about it.\n\n**Host:** But won't schools be tempted to replace teachers with apps to save money?\n\n**Laura:** Some might try. There's every chance that we'll see cheaper courses with fewer teachers. But I think the students who can afford it are likely to pay even more for human contact. That worries me, actually. It could make education more unequal, not less.\n\n**Aliya:** That's what I worry about too. The technology isn't the problem. The question is who gets the benefits.\n\n**Host:** Let's look ahead. Where will you both be in ten years' time?\n\n**Aliya:** By then, I'll have been working with AI tools for over a decade, so they'll probably feel as normal as a pencil. I hope I'll be leading a team. And I hope we'll still be arguing with clients about fonts, because that's where the real creativity happens.\n\n**Laura:** In ten years, I'll be teaching — I'm quite sure of that — but I imagine my lessons will look very different. Students will be practicing more on their own with AI, and our time together will be more about speaking, thinking and debating. Which, frankly, is the part I enjoy most.\n\n**Host:** Any advice for listeners who are worried about their jobs?\n\n**Aliya:** Try the tools yourself. Fear is much worse when you don't know what you're afraid of.\n\n**Laura:** And keep learning — but don't try to compete with the machines at what they do best. Get better at what they can't do.\n\n**Host:** Aliya, Laura, thank you both.",
    ),
    quiz("Listen and choose.", [
      { q: "How did Aliya feel when the first AI image tools appeared?", options: ["*shocked and worried", "excited", "completely calm"] },
      { q: "What does Aliya say AI tools are bad at?", options: ["*knowing which option is right for a particular client", "producing many options", "resizing images"] },
      { q: "What happened to Aliya's friend?", options: ["*Her routine work almost disappeared, so she reskilled.", "She was promoted.", "She started teaching."] },
      { q: "What does Laura say is the hardest part of teaching?", options: ["*motivation and confidence, not explaining grammar", "explaining grammar", "marking exams"] },
      { q: "What worries both guests?", options: ["*that the benefits of AI may not be shared fairly", "that AI tools will stop working", "that clients will stop arguing"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Aliya uses AI tools every day.", true],
      ["Aliya thinks no design jobs will disappear.", false],
      ["Laura felt a little nervous when she first saw an AI tutor.", true],
      ["Laura thinks richer students may pay more for human teachers.", true],
      ["Laura expects to leave teaching within ten years.", false],
      ["Aliya advises listeners to try the tools themselves.", true],
    ]),
    gaps(
      "Complete the sentences from the show.",
      "1. Is artificial intelligence [about] to take our jobs?\n2. Some people were convinced we were on the [verge] of extinction.\n3. Some design jobs are [bound] to disappear.\n4. It's [set] to be a growing area.\n5. There's every [chance] that we'll see cheaper courses with fewer teachers.\n6. By then, I'll have [been] working with AI tools for over a decade.",
    ),
  ]),

  section("Let's talk: My job in 2035", [
    text(
      "Make a forecast for your profession 📈",
      "Choose your job, your future job, or a job you know well. Talk for **2 minutes**:\n\n- **Now:** which tasks are routine? Which need a human?\n- **Soon:** *…is set to… / …is due to… / We're on the verge of…*\n- **Sure / probable:** *…is bound to… / …is likely to… / There's every chance that…*\n- **2035:** *By then, I'll have been… / I'll be…*\n- **Your plan:** what will you upskill in?\n\nThen your teacher asks: **Would you want a job that can't be automated — or one that uses the most technology?**",
    ),
    tip("Push for precise degrees of certainty: *bound to* (sure) vs *likely to* (probable) vs *may well* (possible). Return to the warm-up question: which jobs will disappear next? In a group: students present forecasts, others challenge them with one question each."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "We're on the verge ___ a breakthrough.", options: ["*of", "to", "for"] },
      { q: "The train is ___ to arrive at 6:15.", options: ["*due", "bound", "verge"] },
      { q: "With so much rain, the river is ___ to flood.", options: ["*bound", "due", "set for"] },
      { q: "After the factory closed, 200 workers were made ___.", options: ["*redundant", "obsolete", "remote"] },
    ]),
    box(
      "Phrase of the day: future-proof",
      "🛡️ Able to stay useful as things change: *How can we future-proof our skills?*\n\n*What's one skill you think is completely future-proof?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — What is the future of work? (6 Minute English).", "s1HxJVusR2w"),
      choose(
        "Choose.",
        "1. Scientists are on the verge of [*discovering/discover] a new planet.\n2. The film is [*due to/bound for] be released in May.\n3. He's so talented — he's [*bound to/due to] succeed.\n4. Petrol prices are [*set to/set] rise again.\n5. By next year, she [*will have been working/will work] here for a decade.\n6. This time tomorrow, I [*'ll be flying/'ll fly] to Seoul.\n7. The company is on the [*brink/edge to] of bankruptcy.\n8. It's highly [*likely/probable to] that they'll win.",
      ),
      gaps(
        "Complete with one word.",
        "1. The new bridge is [due] to open in spring.\n2. Experts say we are on the [verge/brink] of a major change.\n3. If you don't study, you're [bound] to fail.\n4. Unemployment is [likely/set] to rise next year.\n5. There's every [chance] that the meeting will be postponed.\n6. By 2030, we will [have] been living here for twenty years.",
      ),
      trueFalse("Correct or not?", [
        ["We're on the verge of a new discovery.", true],
        ["The meeting is due starting at ten.", false],
        ["Prices are set to rise.", true],
        ["She's bound to forgetting.", false],
        ["By June, I'll have been studying English for ten years.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the words and the meanings.", [
        ["redundant", "without a job because it's no longer needed"],
        ["upskill", "learn new skills for your job"],
        ["obsolete", "no longer used"],
        ["the gig economy", "work made of short separate jobs"],
        ["augment", "add to and improve"],
        ["job security", "knowing you'll keep your job"],
      ]),
      write(
        "Article (220–260 words) for a careers website: “My profession in 2035”. Describe how your job (or a job you'd like) is likely to change, which tasks are bound to be automated, which skills will matter more, and how you plan to prepare.",
        220,
        { read: "*Useful:* is set to… · is bound to… · is likely to… · There's every chance that… · We're on the verge of… · By 2035, I will have been…" },
      ),
      record("Record a 1–2 minute answer: “Would you trust an AI to do part of your job? Which part — and which part never?” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
