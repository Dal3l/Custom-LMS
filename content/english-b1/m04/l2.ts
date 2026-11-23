import {
  box,
  choose,
  gaps,
  homework,
  lesson,
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

// 4.2 Robots at work — G: choosing the future form (will / going to / Present Continuous / Present Simple for timetables); how sure: definitely, probably, be likely to, be bound to, may / might / could. V: technology and AI at work (automate, replace, take over, human skills…). S: a debate — will AI take our jobs? Main format: a BBC "6 Minute English" video in class + a reading (three people on AI and their jobs, ~380 words) + a debate.
export default lesson("b1-4.2", "Robots at work", () => [
  section("Warm-up: Your job in 2040", [
    box(
      "Today you will…",
      "- talk about AI, robots and the future of work 🤖💼\n- choose the right future form: *will, going to, I'm meeting…* 🔮\n- say how sure you are: *It's likely to… It might… It's bound to…* 📊",
    ),
    text(
      "Talk to your teacher.",
      "- Do you use AI in your study or work? What for — and what do you never use it for? 🤖\n- Which part of your job (or your future job) would you happily give to a robot? Which part never?\n- If your job disappeared tomorrow, what would you like to do instead?",
    ),
    tip("Keep it personal and balanced — some students are excited about AI, others are worried. Don't give your own opinion yet: save it for the debate."),
  ]),

  section("Vocabulary: AI and work", [
    words("AI and work", [
      ["artificial intelligence (AI)", "🤖 computer systems that can 'think' and learn"],
      ["automate", "⚙️ make a machine do a job instead of a person", "Many factories have automated their work."],
      ["replace", "🔁 take the place of", "Will robots replace drivers?"],
      ["take over", "🏴 start doing something instead of someone else", "AI could take over boring tasks."],
      ["a task", "✅ a piece of work", "Writing emails is a simple task."],
      ["human skills", "🫶 abilities like empathy, creativity, teamwork"],
      ["creativity", "🎨 the ability to make new, original things"],
      ["empathy", "🤗 understanding other people's feelings"],
      ["retrain", "📚 learn new skills for a different job"],
      ["unemployment", "📉 when people don't have jobs"],
      ["efficient", "⚡ working well, without wasting time"],
      ["a threat — an opportunity", "⚠️ something dangerous — 🚪 a chance to do something good"],
    ]),
    match("Match.", [
      ["automate", "a factory"],
      ["replace", "workers with machines"],
      ["take over", "boring tasks"],
      ["retrain", "for a new job"],
      ["human", "skills"],
      ["a threat", "or an opportunity"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. The bank has [automated] most of its paperwork — computers do it now.\n2. Nobody knows if AI will [replace] teachers.\n3. Machines are very [efficient] — they never get tired. ⚡\n4. When his job disappeared, he [retrained] as an electrician.\n5. Nurses need a lot of [empathy] to understand their patients. 🤗\n6. Robots can't really have [creativity] — or can they? 🎨\n7. Some people see AI as a [threat]; others see it as an opportunity.\n8. If many jobs disappear, [unemployment] could rise.",
    ),
    quiz("Choose the right word.", [
      { q: "Checking spelling is a simple ___ for AI.", options: ["*task", "skill", "threat"] },
      { q: "Robots might ___ the most dangerous jobs.", options: ["*take over", "retrain", "graduate"] },
      { q: "Teamwork and empathy are human ___.", options: ["*skills", "tasks", "machines"] },
      { q: "For some people, AI is a great ___ to start a business.", options: ["*opportunity", "unemployment", "threat"] },
    ]),
  ]),

  section("Video: What is the future of work?", [
    tip("BBC Learning English, about 6 minutes: two presenters talk about the future of work and teach some words. First watch: *Are they optimistic or worried?* Pause if needed. Then let the student react before the discussion."),
    video("Watch: What is the future of work? — 6 Minute English.", "s1HxJVusR2w"),
    text(
      "After the video: talk to your teacher.",
      "- Which idea from the video did you find most interesting or surprising?\n- Which new words did you notice? Write down three. ✍️\n- Do you feel more optimistic or more worried about the future of work after watching? Why?",
    ),
  ]),

  section("Reading: Will a robot take my job?", [
    tip("Three people (~380 words). First reading: *Who is most worried? Who is most optimistic?* While checking the answers, ask the student to underline the phrases that show how sure each person is (*likely to, might, definitely…*) — that's the next grammar."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Kenji thinks AI will definitely replace all developers.", false],
        ["Kenji already uses AI for some boring tasks.", true],
        ["Rosa believes robots are likely to help nurses with physical work.", true],
        ["Rosa thinks patients won't need human nurses in the future.", false],
        ["Laura is going to stop teaching next year.", false],
        ["Laura thinks AI might be a good private tutor for students.", true],
      ],
      {
        read: [
          "## 🤖 Will a robot take my job?",
          "*We asked three people from very different jobs how AI is going to change their work.*",
          "**💻 Kenji, software developer, 34.** \"People think developers are bound to lose their jobs first, because AI can already write code. And yes, AI is going to change my job a lot — it's already happening. I use it every day for the boring tasks, like checking for mistakes. It saves me hours. But someone still has to understand what the client really needs and decide what to build. I don't think that will disappear soon. My prediction? We probably won't need as many junior developers, so young people might find it harder to start. That worries me.\"",
          "**🏥 Rosa, nurse, 52.** \"In our hospital, robots are already moving medicines between floors. I think in ten years they're likely to help us lift patients, which is the hardest physical part of the job. My back would love that! 😄 But nursing is not just tasks. Yesterday an old man was scared before his operation. I held his hand and talked to him for ten minutes. A machine could give him information, but it definitely can't replace that moment. Patients will always need people.\"",
          "**📚 Laura, English teacher, 29.** \"Some of my students ask: 'Why do we need a teacher? AI can explain grammar!' And honestly, it can — very well. I'm not going to pretend it can't. I think AI might become a great private tutor, available 24 hours a day. But learning a language is about confidence and real communication. Next year I'm starting a new course where students use AI at home and practice speaking with real people in class. I'm meeting my manager on Friday to plan it. If teachers learn to use these tools, we're unlikely to disappear — but our job is bound to change.\"",
          "*So, is AI a threat or an opportunity? All three agree on one thing: the people who learn to work with AI are likely to do better than the people who ignore it.*",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What worries Kenji?", options: ["*It might be harder for young people to start in IT.", "AI makes too many mistakes.", "His company is closing."] },
      { q: "What do robots already do in Rosa's hospital?", options: ["*move medicines between floors", "lift patients", "talk to patients"] },
      { q: "What is Laura planning?", options: ["*a course with AI at home and speaking in class", "to leave teaching", "to replace lessons with AI"] },
      { q: "What do all three people agree on?", options: ["*People who learn to use AI will probably do better.", "AI is a threat to everyone.", "Robots will replace all jobs."] },
    ]),
  ]),

  section("Grammar: Which future?", [
    quiz("Notice the rule 🔍 Look: “AI is going to change my job.” “I'm meeting my manager on Friday.” “Patients will always need people.” “Next year I'm starting a new course.”", [
      { q: "“I'm meeting my manager on Friday” is…", options: ["*a fixed arrangement (day, time, person)", "a quick decision", "a prediction"] },
      { q: "“Patients will always need people” is…", options: ["*an opinion / prediction", "an arrangement", "a timetable"] },
      { q: "“AI is going to change my job — it's already happening” is…", options: ["*a prediction based on what we can see now", "a promise", "a timetable"] },
    ]),
    table("future-forms"),
    choose(
      "Choose the best future form.",
      "1. I [*'m seeing/'ll see] the dentist at 4 tomorrow — I booked last week. 🦷\n2. A: This bag is heavy. B: I [*'ll carry/'m carrying] it for you.\n3. Look at that traffic! We [*'re going to/will] be late.\n4. The train [*leaves/is leaving to] at 7:45 tomorrow morning. 🚆\n5. I think AI [*will/is meeting] change medicine a lot.\n6. We've decided: we [*'re going to/will to] start our own business.\n7. What time [*does/is] the conference start? — At 9, it's on the program.\n8. Don't worry, I [*won't/'m not going] tell anyone your secret. 🤐",
    ),
    gaps(
      "Complete with the right future form of the verb in brackets.",
      "1. I [am meeting/'m meeting] Kenji for lunch on Thursday — it's in my calendar. (meet)\n2. The film [starts] at 8:30. (start)\n3. A: I can't open this jar. B: Give it to me — I [will do/'ll do] it. (do)\n4. She's saved money for two years. She [is going to buy/'s going to buy] a car. (buy)\n5. I'm sure you [will love/'ll love] the new office. (love)\n6. The plane [lands] in Dubai at 6 a.m. local time. (land)\n7. We [are flying/'re flying] to Istanbul next Saturday — the tickets are booked. (fly)\n8. Watch out! That glass [is going to fall/'s going to fall]! (fall)",
    ),
  ]),

  section("Grammar: How sure are you?", [
    table("how-sure"),
    sort("How sure? Sort the predictions. 📊", {
      "💯 very sure": ["Prices are bound to go up.", "AI will definitely change our jobs.", "Technology is bound to get cheaper."],
      "👍 quite sure": ["AI is likely to help doctors.", "We'll probably work fewer hours.", "Most cars are likely to be electric."],
      "🤷 not sure": ["Robots might clean our homes.", "My job could disappear.", "We may live on Mars one day."],
      "👎 probably not": ["Teachers are unlikely to disappear.", "AI probably won't feel emotions.", "Robots aren't likely to become our bosses."],
    }),
    choose(
      "Choose the right word.",
      "1. Look at those black clouds! It's [*likely/unlikely] to rain — take an umbrella.\n2. AI [*might/is bound] help us find new medicines.\n3. I'll [*probably/likely] work from home on Friday.\n4. Robots [*are unlikely/won't likely] to become our bosses.\n5. I [*probably won't/won't probably] go to the meeting.\n6. If you work this hard, you're [*bound/unlikely] to succeed! 🏆\n7. My job [*could/is bound] disappear — I'm not sure.\n8. Teachers [*definitely won't/won't definitely] disappear next year.",
    ),
    order("Make sentences.", [
      "AI is likely to change many jobs.",
      "Robots might take over boring tasks.",
      "I probably won't need a car in the future.",
      "Prices are bound to go up next year.",
      "Teachers are unlikely to disappear.",
    ]),
  ]),

  section("Let's talk: The great AI debate", [
    text(
      "Debate: “In 20 years, AI will do most of our jobs.” 🤖⚖️",
      "Your teacher takes one side, you take the other. Then swap!\n\n**Agree** 👍: AI is fast and cheap, it already writes, draws and drives, companies want to save money…\n**Disagree** 👎: people need empathy and creativity, new jobs will appear, laws will protect workers…\n\n**Use:** *It's likely to… It's bound to… It might… It's unlikely that… I definitely think… I'm not so sure. On the other hand…*",
    ),
    text(
      "Talk to your teacher.",
      "- Which jobs are most likely to change in your country in the next ten years? Which are safe?\n- Should children learn to use AI at school, or should schools ban it? 🏫\n- What human skill do you think will be the most valuable in the future? Why?\n- What are you going to learn this year to be ready for the future?",
    ),
    tip("Give 2 minutes to prepare three arguments. Each side speaks for 1 minute, then free discussion. Note how the student shows certainty: push for *likely to / bound to / might* instead of just *will*. After swapping sides, ask what they REALLY think."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ my boss at 3 p.m. tomorrow — it's in my calendar.", options: ["*'m meeting", "will meet", "meet"] },
      { q: "The bus ___ at 7:10 every morning.", options: ["*leaves", "is leaving", "will be leave"] },
      { q: "very sure that something will happen =", options: ["*be bound to", "be unlikely to", "might"] },
      { q: "make a machine do a job =", options: ["*automate", "retrain", "replace by"] },
    ]),
    box(
      "Phrase of the day: future-proof",
      "🛡️ **future-proof** = something that will still be useful or successful in the future.\n\n*Learning English is a great way to future-proof your career!*",
    ),
  ]),

  homework(
    [
      video("Watch: future tenses — present continuous, going to, will.", "De_54szvmFM"),
      choose(
        "Choose.",
        "1. I'm sure you [*'ll pass/'re passing] the exam.\n2. We [*'re having/'ll have] a party on Saturday — everyone's invited!\n3. The museum [*opens/is going to open] at 10 every day.\n4. A: It's cold in here. B: I [*'ll close/'m closing] the window.\n5. She's bought paint. She [*'s going to/will to] paint her room.\n6. AI is [*likely/probably] to change education.\n7. I [*probably won't/won't probably] come tonight.\n8. Robots [*might/are bound] do the housework one day — who knows?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Many tasks in factories are now [automated].\n2. Will AI [replace] human translators?\n3. Nurses need a lot of [empathy].\n4. When the factory closed, he [retrained] as a programmer.\n5. Robots could take [over] dangerous jobs.\n6. Is AI a threat or an [opportunity]?",
      ),
      write("Write an opinion essay (120+ words): “Will AI make our lives better or worse?” Give your opinion, two reasons with examples, and a conclusion. Use likely to, might, bound to and probably.", 120, {
        read: "*Example (start):* Everybody is talking about artificial intelligence. Will it make our lives better? In my opinion, it's likely to make many things easier, but there are some risks. Firstly, AI is bound to change medicine: it might help doctors find illnesses earlier… However, some jobs could disappear, and people will probably need to retrain…",
      }),
      record("Record 1 minute: How is AI likely to change your job (or your future job)? Be specific! 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
