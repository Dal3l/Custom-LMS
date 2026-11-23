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

// 4.3 School of the future — skills lesson, no new grammar: review of future forms, Future Continuous, likely to / might. V: education (curriculum, assess, hands-on, flipped classroom…). S: design the ideal school. Main format: a long reading (five ideas changing schools, ~420 words) + a video + a proposal written in class. Long listening at home (a student and a teacher argue about homework and AI, ~2 min).
export default lesson("b1-4.3", "School of the future", () => [
  section("Warm-up: Your school days", [
    box(
      "Today you will…",
      "- read about how schools are changing around the world 🏫🌍\n- watch a video about the classroom of the future 🎥\n- design your ideal school — and write a proposal ✍️",
    ),
    text(
      "Talk to your teacher.",
      "- What's one thing you learned at school that you still use every day? And one thing you've never used? 😅\n- Who was the best teacher you ever had? What made them special?\n- If you could change one thing about the schools in your country, what would it be?",
    ),
    tip("Let the student tell a real story about a teacher — it brings the topic to life. Note their ideas about changing school: you'll use them later in the design task."),
  ]),

  section("Vocabulary: Education", [
    words("Education", [
      ["the curriculum", "📚 all the subjects and topics a school teaches"],
      ["assess", "📝 test and judge how well someone is doing", "Students are assessed by projects, not only exams."],
      ["memorize", "🧠 learn something so you can remember it exactly"],
      ["hands-on", "🛠️ learning by doing, not only by reading", "a hands-on science lesson"],
      ["a flipped classroom", "🔄 watch the lesson at home, practice in class"],
      ["personalized learning", "🎯 learning that fits each student's level and speed"],
      ["critical thinking", "🤔 thinking carefully and asking if something is true"],
      ["a project", "🗂️ a long piece of work on one topic"],
      ["fall behind", "🐢 make less progress than others", "If you miss lessons, you'll fall behind."],
      ["drop out (of)", "🚪 leave school or a course before the end"],
      ["a grade", "🅰️ a mark for your work"],
      ["lifelong learning", "♾️ continuing to learn all your life"],
    ]),
    match("Match.", [
      ["memorize", "dates and facts"],
      ["fall", "behind the class"],
      ["drop", "out of university"],
      ["get a good", "grade"],
      ["work on", "a group project"],
      ["develop", "critical thinking"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. In my school we had to [memorize] long poems — I still remember one! 📜\n2. I was ill for a month and [fell] behind in maths.\n3. He dropped [out] of university to start his own company.\n4. Our science teacher loved [hands]-on lessons — we built a robot! 🤖\n5. Teachers [assess] us with projects and presentations, not only tests.\n6. With [personalized/personalised] learning, each student works at their own speed.\n7. Fake news is everywhere — we need [critical] thinking more than ever.\n8. In a [flipped] classroom, you watch the lesson video at home and practice in class.",
    ),
    quiz("Choose the right word.", [
      { q: "He was bored at university and ___ out after one year.", options: ["*dropped", "fell", "memorized"] },
      { q: "Our teacher doesn't give tests — she ___ us with projects.", options: ["*assesses", "memorizes", "drops"] },
      { q: "All the subjects a school teaches = the ___", options: ["*curriculum", "grade", "portfolio"] },
      { q: "My grandma is 75 and studying Spanish. That's ___ learning!", options: ["*lifelong", "hands-on", "flipped"] },
    ]),
    sort("Traditional school or school of the future? Sort. 🏫🚀", {
      "🏫 traditional": ["memorizing facts", "the same lesson for everyone", "sitting in rows", "only written exams", "the teacher talks, students listen"],
      "🚀 future": ["personalized learning", "hands-on projects", "learning outside", "AI tutors", "students lead discussions"],
    }),
  ]),

  section("Reading: Five ideas changing schools", [
    tip("A long text (~420 words). First reading — 4 minutes: *Which idea do you like most? Which one wouldn't work for you?* Then the tasks. Notice the future forms: *are likely to, will probably, might*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Some schools in Finland teach topics like climate across several subjects.", true],
        ["In a flipped classroom, students do their homework in class and the lesson at home.", true],
        ["Forest schools only work in hot countries.", false],
        ["The writer thinks AI tutors are likely to replace teachers completely.", false],
        ["Some schools assess students with portfolios of their work.", true],
        ["The writer believes school will stop being important.", false],
      ],
      {
        read: [
          "## 🚀 Five ideas changing schools",
          "For more than a hundred years, school has looked almost the same: rows of desks, a teacher at the front, a bell every 45 minutes. But that's starting to change. Here are five ideas that are likely to shape the schools of the future — some are already happening.",
          "**1. Topics, not just subjects.** In the real world, problems don't come in \"maths\" or \"geography\" boxes. Some schools in Finland, for example, teach big topics like climate across several subjects at once. Students might study the science of global warming, write about it in their language class and calculate energy costs in maths. 🌍",
          "**2. The flipped classroom.** Instead of listening to a teacher explain for 40 minutes and then doing exercises at home, students watch a short video lesson at home and use class time for practice, questions and projects. The teacher becomes a coach, not a lecturer. Many teachers say students fall behind less, because they get help exactly when they need it.",
          "**3. Learning outside.** In forest schools, which started in Scandinavia, children spend much of the day outdoors — in rain, snow and sunshine. ❄️ They build shelters, study insects and learn to take risks safely. Supporters say it makes children healthier, more confident and more creative.",
          "**4. AI tutors.** In the next ten years, every student will probably have an AI tutor that knows their level, explains things in different ways and never gets tired of questions. 🤖 Does this mean we won't need teachers? Unlikely. Experts believe teachers will spend less time correcting and more time on what humans do best: motivating, listening and helping students work together.",
          "**5. New ways to assess.** Is a two-hour written exam the best way to see what someone can do? More and more schools are asking students to build portfolios — collections of their projects, presentations and videos — to show their skills over time. Employers are bound to like that: they want people who can solve problems, not just memorize answers.",
          "So what will school look like in 2040? Nobody knows exactly. It might not even be a building. But one thing is certain: in a world that changes so fast, school won't end when you graduate. The most important skill of the future is likely to be the ability to keep learning all your life. ♾️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why do some schools teach big topics instead of separate subjects?", options: ["*Real-world problems don't come in subject boxes.", "It's cheaper.", "Students don't like maths."] },
      { q: "In a flipped classroom, the teacher becomes…", options: ["*a coach", "a lecturer", "a student"] },
      { q: "According to supporters, forest schools make children…", options: ["*healthier, more confident and more creative", "better at exams", "afraid of risks"] },
      { q: "What is a portfolio?", options: ["*a collection of a student's projects and work", "a long written exam", "a type of AI tutor"] },
      { q: "What does the writer say will be the most important skill?", options: ["*the ability to keep learning all your life", "memorizing facts", "using computers"] },
    ]),
    match("Match the ideas from the article and their descriptions.", [
      ["topics, not just subjects", "study climate in science, language and maths"],
      ["the flipped classroom", "watch the lesson at home, practice in class"],
      ["forest schools", "learn outside in all weathers"],
      ["AI tutors", "a helper that knows your level and never gets tired"],
      ["portfolios", "collections of projects to show your skills"],
      ["lifelong learning", "keep learning after you graduate"],
    ]),
    gaps(
      "Find words in the article.",
      "1. to influence what something will be like: to [shape]\n2. a person who gives long talks at a university: a [lecturer]\n3. simple buildings that protect you from rain or wind: [shelters]\n4. people who like and defend an idea: [supporters]\n5. collections of a person's work: [portfolios]\n6. companies or people who give others jobs: [employers]",
    ),
  ]),

  section("Video: The school of the future", [
    tip("About 6.5 minutes. Before watching: *What do you think a future school will look like?* After watching, compare the video with the article: which ideas appear in both?"),
    video("Watch: What will schools look like in the future?", "JZlgYiXzu58"),
    text(
      "After the video: talk to your teacher.",
      "- What did you see in the video that was also in the article?\n- Which idea from the video would you like to try? Which one seems strange? 🤔\n- Would you like to study (or have studied) in a school like this? Why / why not?",
    ),
  ]),

  section("Review: the future", [
    choose(
      "Choose the best form.",
      "1. In 2040, students [*will probably learn/are learning] with AI tutors.\n2. This time next year, I [*'ll be studying/study] at university.\n3. Our new school year [*starts/is starting to] on 1 September.\n4. I [*'m meeting/'ll meet] my old teacher for coffee on Friday — we arranged it yesterday.\n5. Teachers are [*unlikely/probably] to disappear.\n6. As soon as I [*finish/will finish] school, I'll travel. 🌍\n7. Look at this timetable — we [*'re going to/will to] be so busy!\n8. Schools [*might/are bound] not even be buildings in the future.",
    ),
    gaps(
      "Complete with the right future form of the verb in brackets.",
      "1. In 2040, schools [will probably use] AI tutors. (probably / use)\n2. Our exams [start] on 3 June — it's on the school calendar. (start)\n3. This time next year, I [will be studying/'ll be studying] at university. (study)\n4. I [am meeting/'m meeting] my teacher after class today — we arranged it yesterday. (meet)\n5. As soon as I [graduate], I'll look for a job. (graduate)\n6. Look at all these books! You [are going to need/'re going to need] a bigger bag. (need)",
    ),
    drag(
      "Complete Daniyar's school blog post.",
      "Next year our school [is] starting a new project: one day a week, we'll be [learning] outside! I think it's [likely] to be fun, but it [might] be cold in winter. ❄️ As soon as the project [starts], I'll write about it here. This time next month, we'll [be] building a weather station. Our teacher says AI tutors will [probably] help us with maths, too. I [won't] miss the old textbooks! 📚",
      ["will", "learn", "probable", "start"],
    ),
  ]),

  section("Let's talk: Design a school", [
    sort("AI tutors: advantages or disadvantages? Sort. 🤖⚖️", {
      "👍 advantages": ["available 24 hours a day", "never gets tired of questions", "explains at your level", "cheaper than private lessons"],
      "👎 disadvantages": ["can make mistakes", "students might copy answers", "no real human contact", "you need a device and internet"],
    }),
    text(
      "Task: The school of your dreams 🏫✨",
      "You have unlimited money to open a new school. Plan it with your teacher:\n\n- 👶 Who is it for? (age, size)\n- 📚 What will students learn? What won't they learn?\n- ⏰ What will a normal day look like? When will it start and finish?\n- 📝 How will you assess students?\n- 🤖 Will there be AI? Phones? Homework?\n- 🌳 Where will lessons take place?\n\nGive your school a name! Then present it in 2 minutes: *In our school, students will be learning… They won't have to… We're going to…*",
    ),
    tip("Help the student make real decisions and give reasons (*because… so that…*). Play a critical parent: *But how will they pass university exams? Isn't it expensive? What about discipline?* — the student must defend the ideas."),
  ]),

  section("Writing: A proposal", [
    box(
      "✍️ Writing a proposal",
      "A proposal suggests a plan to someone in charge (a director, a manager).\n\n1. **Purpose**: *The aim of this proposal is to…*\n2. **Ideas** with headings or clear paragraphs: *Firstly… In addition…*\n3. **Reasons**: *This would help students to… because…*\n4. **Conclusion**: *I strongly recommend… I'm sure this will…*\n\nAbout **100–120 words**, polite and clear.",
    ),
    order(
      "Put the example proposal in order.",
      [[
        "The aim of this proposal is to suggest one change to our school day.",
        "I recommend that every Friday afternoon is used for hands-on projects.",
        "Students could work in groups, outside or in the lab, on topics they choose.",
        "This would help them develop teamwork and critical thinking.",
        "I'm sure students will be more motivated and fall behind less.",
      ].join("\n")],
      "lines",
    ),
    write("Write a proposal to the director of a school (100–120 words): suggest ONE big change that will make the school better for students. Explain how it will work and why.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "learn something so you can repeat it exactly =", options: ["*memorize", "assess", "drop out"] },
      { q: "watch the lesson at home, practice in class =", options: ["*a flipped classroom", "a forest school", "a portfolio"] },
      { q: "In 2040, many students ___ with AI tutors.", options: ["*will probably be learning", "are learning now", "learned"] },
      { q: "make less progress than others =", options: ["*fall behind", "drop out", "keep up"] },
    ]),
    box(
      "Phrase of the day: You learn something new every day",
      "💡 **You learn something new every day!** — people say it when they discover a surprising fact.\n\n*Forest schools in the snow? Wow — you learn something new every day!*",
    ),
  ]),

  homework(
    [
      ...listening(
        "Listen. A student and a teacher discuss homework and AI.",
        "**Host:** On today's show: should schools stop giving homework? I'm here with Madina, a university student, and Mr. Hall, a secondary school teacher. Madina, you think homework should go.\n\n**Madina:** Mostly, yes. When I was at school, I used to spend three or four hours every evening on homework. I didn't have time for sport, friends or sleep. And now, with AI, a lot of students just ask a chatbot to do it. So what's the point?\n\n**Mr. Hall:** I understand, but I don't agree completely. Practice is important. You can't learn to play the piano only in lessons, and it's the same with maths or languages. The problem isn't homework — it's bad homework.\n\n**Host:** What's bad homework?\n\n**Mr. Hall:** Long, boring exercises that students can copy. In my classes, homework is short, and it's often something AI can't do for you — like interviewing your grandparents or recording yourself speaking.\n\n**Madina:** OK, that sounds much better. My brother Daniyar had to interview our grandma last month. He actually enjoyed it!\n\n**Host:** And AI? Should students be allowed to use it?\n\n**Mr. Hall:** It's bound to be part of their lives, so we should teach them to use it well. Next term, I'm starting a project where students use AI to get feedback on their essays — but they have to explain every change they make.\n\n**Madina:** I like that. AI is likely to be in every job we do, so school should prepare us.\n\n**Host:** So, a compromise?\n\n**Madina:** Less homework, but better homework!\n\n**Mr. Hall:** I can agree with that.",
      ),
      quiz("Listen and choose.", [
        { q: "How much homework did Madina use to do at school?", options: ["*three or four hours every evening", "about one hour", "none"] },
        { q: "According to Mr. Hall, the problem is…", options: ["*bad homework", "all homework", "AI"] },
        { q: "What kind of homework does Mr. Hall give?", options: ["*short tasks that AI can't do for you", "long writing tasks", "online tests only"] },
        { q: "What is Mr. Hall's project next term?", options: ["*students get AI feedback on essays and explain changes", "a school without homework", "a ban on AI"] },
      ]),
      trueFalse("Listen again. True or false?", [
        ["Madina thinks all homework is useful.", false],
        ["Mr. Hall compares learning to playing the piano.", true],
        ["Daniyar enjoyed interviewing his grandma.", true],
        ["Mr. Hall wants to ban AI in his classes.", false],
        ["In the end, they agree on less but better homework.", true],
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Some students drop [out] of university in the first year.\n2. We had to [memorize] the names of all the rivers in Europe.\n3. If you miss too many lessons, you'll fall [behind].\n4. Our school uses [hands]-on projects in science.\n5. In the future, AI tutors will make learning more [personalized/personalised].\n6. Critical [thinking] helps you recognize fake news.",
      ),
      record("Record 1–2 minutes: Present your dream school. What will students be doing on a normal day? Why is it better? 🎤", 120),
    ],
    "Homework: Vocabulary and speaking",
  ),
]);
