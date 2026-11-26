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
  table,
  text,
  tip,
  trueFalse,
  words,
  write,
} from "../../kit";

// 12.2 Writing that works — writing skills for B2 First (as in the programme): planning, paragraphs, topic sentences, linkers, register; the five text types of B2 First Writing (essay, article, review, report, email / letter) and their features; the four assessment criteria (Content, Communicative Achievement, Organisation, Language). Review of linkers (12.1), cleft sentences, inversion and participle clauses as "B2 language". Main format: text types match + a long reading (two versions of the same essay with an examiner's comments, ~540 words) + a long listening (Zarina's podcast: Laura explains how B2 First writing is marked, ~3:15) + "improve the paragraph" workshop. No video in this lesson (module 12: videos in 12.1 and 12.3).
// Facts checked: Cambridge B2 First Writing — 1 hour 20 minutes, two tasks of 140–190 words each; Part 1 is a compulsory essay with two given ideas plus one of the candidate's own; Part 2 — a choice of article, email / letter, report or review; each task is marked on four criteria (Content, Communicative Achievement, Organisation, Language), 0–5 each. Characters: Zarina (podcaster), Laura (an English teacher in Almaty).
export default lesson("b2-12.2", "Writing that works", () => [
  section("Warm-up: Which text is it?", [
    box(
      "Today you will…",
      "- review the five kinds of text in B2 First Writing ✍️\n- compare a weak essay with a strong one — and find out why 🔍\n- improve your own writing with an examiner's checklist ✅",
    ),
    match("Match each text type with its most important feature. ✍️", [
      ["an essay", "a clear opinion, with arguments on both sides and a conclusion"],
      ["an article", "a catchy title, and it speaks directly to the reader"],
      ["a review", "a description of something and a recommendation"],
      ["a report", "headings, facts and suggestions"],
      ["a formal email", "a polite greeting, a clear purpose and a formal ending"],
      ["an informal email", "a friendly tone — contractions are fine"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which kind of text do you find easiest to write? Which is hardest? Why?\n- Do you plan before you write, or just start? 😅\n- Which text from this course are you most proud of?",
    ),
    tip("Look back at the student's course projects (articles, essays, a review, a report, a formal email). Today's checklist will help them improve one of them for homework."),
  ]),

  section("Vocabulary: Writing", [
    words("Writing", [
      ["a draft", "📝 a first version of a text"],
      ["proofread", "🔍 read a text carefully to find mistakes"],
      ["a topic sentence", "🎯 the first sentence of a paragraph, which says what it is about"],
      ["a linker", "🔗 a word that connects ideas (however, although, furthermore)"],
      ["register", "🎩 how formal or informal a text is"],
      ["the word count", "🔢 the number of words in a text"],
      ["an introduction — a conclusion", "🚪 the beginning — 🏁 the end of a text"],
      ["rephrase", "🔄 say the same thing in different words"],
      ["vague", "🌫️ not clear or specific"],
      ["repetitive", "🔁 saying the same thing too many times"],
    ]),
    match("Match.", [
      ["Always write a quick", "plan before the first draft."],
      ["Start each paragraph with", "a topic sentence."],
      ["Check the word count —", "140 to 190 words."],
      ["Don't use contractions in", "a formal register."],
      ["Leave five minutes to", "proofread your text."],
      ["In the introduction,", "rephrase the question in your own words."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. “Things are good and bad” is too [vague] — give an example.\n2. You used “very” six times — it's [repetitive].\n3. “However” and “furthermore” are useful [linkers].\n4. My first [draft] was 250 words, so I cut it.\n5. A report needs a formal [register].\n6. The [conclusion] should answer the question clearly.",
    ),
    quiz("Choose the right word.", [
      { q: "Before you hand it in, ___ your text.", options: ["*proofread", "rephrase", "draft"] },
      { q: "“Hi guys!” is the wrong ___ for a formal report.", options: ["*register", "linker", "word count"] },
      { q: "“However” and “as a result” are ___.", options: ["*linkers", "topic sentences", "drafts"] },
      { q: "The introduction should ___ the question in your own words.", options: ["*rephrase", "repeat", "proofread"] },
    ]),
  ]),

  section("Reading: Two essays", [
    tip("A long text (~540 words): two versions of the same B2 First essay and an examiner's comments. First reading — 5 minutes: *Which essay is better, and why?* Then the tasks."),
    trueFalse(
      "Read the essays and the comments. True or false?",
      [
        ["Both essays answer the same question.", true],
        ["Essay A has a clear paragraph structure.", false],
        ["Essay A doesn't use the writer's own idea.", true],
        ["Essay B uses linkers like “although” and “furthermore”.", true],
        ["The examiner says Essay B is too informal.", false],
        ["The examiner says Essay A repeats the same words too often.", true],
      ],
      {
        read: [
          "## ✍️ Two essays",
          "**The task:** *Some people say that young people should spend a year working or traveling before university. Do you agree?* Write about: 1) money, 2) experience, 3) your own idea. (140–190 words)",
          "### Essay A",
          "I think a gap year is good and bad. It is good because you can work and get money. Money is very important because university is very expensive and you need a lot of money. Also you can get experience. Experience is very good for young people. You can travel and see a lot of things and it is very interesting. But it is also bad because maybe you forget things from school and it is hard to start studying again. Also some people don't go back to study. So I think it is good and bad, it depends on the person. I think I would do it because it is very interesting and I like traveling. But my parents don't agree with me. So I don't know. In conclusion a gap year has good things and bad things.",
          "### Essay B",
          "**Should young people take a year off before university?**\n\nMore and more students are choosing to work or travel for a year before starting university. Although this option is not right for everyone, I believe it has clear advantages.\n\nFirstly, a gap year can help students financially. By working for a few months, they can save money for their studies, so that they will not need to borrow as much later.\n\nFurthermore, it gives young people valuable experience. Not only do they become more independent, but they also discover what they really want to study. As a result, they are less likely to change courses or drop out.\n\nOn the other hand, some students find it difficult to return to studying after a long break. However, this risk can be reduced if they plan their year carefully and keep reading in their subject.\n\nIn conclusion, despite some risks, I am convinced that a well-planned gap year is worth it. What matters is not only where students go, but what they learn on the way.",
          "### The examiner's comments",
          "**Essay A** answers the question, but it is hard to follow. There are no paragraphs, so the reader can't see where one idea ends and the next begins. The writer mentions money and experience, but doesn't develop them with reasons or examples, and there is no clear third idea of their own (the parents are mentioned, but not explained). Words like \"good\", \"bad\" and \"very\" are repeated again and again. The conclusion doesn't give a clear opinion. The language is mostly accurate but very simple.",
          "**Essay B** is clearly organized: an introduction that rephrases the question and gives an opinion, one paragraph for each point, and a conclusion that answers the question. Each paragraph starts with a topic sentence. The writer uses a range of linkers (although, firstly, furthermore, however, as a result) and some more complex structures (so that, not only… but also, a cleft sentence at the end). The third point — the risk of not returning to study — is the writer's own idea, and it is answered rather than ignored. The register is consistently neutral to formal. A small improvement: a specific example would make the second paragraph even stronger.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is the biggest problem with Essay A's organization?", options: ["*It has no paragraphs.", "It is too long.", "It has too many headings."] },
      { q: "What does Essay B's introduction do?", options: ["*rephrases the question and gives an opinion", "tells a long story", "lists every argument"] },
      { q: "Which is Essay B's own (third) idea?", options: ["*the risk of not returning to study", "money", "experience"] },
      { q: "What could still improve Essay B?", options: ["*a specific example in the second paragraph", "more informal language", "fewer paragraphs"] },
    ]),
    gaps(
      "Essay A says it simply. Find the better phrases in Essay B.",
      "1. “Also…” → [Furthermore], …\n2. “It is good because you can get money.” → It can help students [financially].\n3. “But…” → On the other [hand], …\n4. “So I think it is good and bad.” → In [conclusion], despite some risks, …\n5. “I think…” → I am [convinced] that…\n6. “You can see a lot of things.” → It gives young people [valuable] experience.",
    ),
  ]),

  section("Language: The examiner's checklist", [
    table("writing-checklist"),
    order(
      "Put the steps of writing in the exam in order (about 40 minutes per task).",
      [[
        "Read the task carefully and underline what you must include.",
        "Brainstorm ideas and choose the best ones.",
        "Write a quick paragraph plan.",
        "Write the text, using a range of linkers and structures.",
        "Count the words: 140–190.",
        "Proofread for grammar, spelling and register.",
      ].join("\n")],
      "lines",
    ),
    choose(
      "Make it better. Choose the more B2 option.",
      "1. [*Furthermore,/Also] it gives students experience.\n2. [*Although many people disagree,/Many people disagree but] I think it's useful.\n3. It was [*a fascinating/a very interesting] experience.\n4. [*Not only is it cheap, but it is also fast./It is cheap and it is fast.]\n5. [*What I find most important is/The important thing for me it is] safety.\n6. [*Having lived abroad,/I lived abroad and] I understand the challenges.",
    ),
    drag(
      "Improve the paragraph. Complete it with B2 language.",
      "[Firstly], public transport is better for the environment. [Not] only does it produce less pollution, but it also reduces traffic. [However], many people still prefer their cars. This is mainly because buses are often slow. [In] order to change this, cities should invest in faster routes. [As] a result, more people would leave their cars at home. [Finally], cheaper tickets would encourage young people to use buses.",
      ["Although", "Despite", "So"],
    ),
  ]),

  section("Listening: How writing is marked", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast: Laura, an English teacher, explains how B2 First Writing is marked and the most common mistakes. First listen: *What are the four criteria?* Second listen: the tasks."),
    ...listening(
      "Listen to Laura explaining how B2 First writing is marked.",
      "**Zarina:** Today we're talking about something many students find scary: the writing paper in B2 First. My guest is Laura, who has been preparing students for this exam for years. Laura, how does the writing paper work?\n\n**Laura:** It's an hour and twenty minutes, and there are two tasks, each between a hundred and forty and a hundred and ninety words. The first task is always an essay. You get a question and two ideas to write about, and you must add one idea of your own. For the second task, you choose one of three options: it could be an article, an email or letter, a report or a review.\n\n**Zarina:** And how do the examiners decide on the mark?\n\n**Laura:** There are four criteria, each marked out of five. The first is Content: did you answer the question and include everything the task asked for? The second has a long name — Communicative Achievement. What it really means is: does your text do its job? Is an article interesting for the reader? Is a formal email polite? Is the register right?\n\n**Zarina:** And the other two?\n\n**Laura:** Organisation: paragraphs, linkers, a logical structure. And Language: the range and accuracy of your grammar and vocabulary.\n\n**Zarina:** What are the most common mistakes you see?\n\n**Laura:** Number one: not answering the question. Students prepare a perfect essay about technology, and then the question is about technology in education, and they write their prepared essay anyway. Examiners notice immediately.\n\n**Zarina:** Ouch. Number two?\n\n**Laura:** Forgetting the third idea in the essay. Two ideas are given, and you must add your own. If you don't, you lose marks for Content, no matter how good your English is.\n\n**Zarina:** And number three?\n\n**Laura:** The wrong register. I've seen formal reports with \"Hi guys!\" at the beginning, and emails to friends that sound like a bank. Think about who's reading.\n\n**Zarina:** What about word count? Is it a disaster if you write two hundred words?\n\n**Laura:** Not a disaster, but it's risky. A few words over is fine. But if you write much more, you probably haven't planned, and you're more likely to make mistakes. If you write much less, you probably haven't developed your ideas.\n\n**Zarina:** And your best advice?\n\n**Laura:** Plan for five minutes. It feels like wasting time, but it saves time. And don't try to use every difficult structure you know. Examiners don't want to see inversion in every sentence. They want to see a range of language used naturally and accurately. One good cleft sentence is better than five strange ones.\n\n**Zarina:** And after writing?\n\n**Laura:** Proofread. Always leave five minutes at the end. Check your verbs, your plurals, your articles. And read your conclusion again: does it actually answer the question?\n\n**Zarina:** Laura, thank you. I'm going to rewrite all my podcast descriptions now.\n\n**Laura:** Plan them first!",
    ),
    quiz("Listen and choose.", [
      { q: "How long is the B2 First Writing paper?", options: ["*1 hour 20 minutes", "1 hour", "2 hours"] },
      { q: "What is always the first task?", options: ["*an essay", "a review", "a report"] },
      { q: "What does “Communicative Achievement” really mean?", options: ["*Does the text do its job for the reader?", "How long is the text?", "How many difficult words are there?"] },
      { q: "What is the most common mistake, according to Laura?", options: ["*not answering the question", "writing too slowly", "using too many paragraphs"] },
      { q: "What does Laura say about difficult structures?", options: ["*Use a range naturally — don't force them into every sentence.", "Use inversion in every sentence.", "Never use them."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Each task should be between 140 and 190 words.", true],
      ["In the essay, you must add one idea of your own.", true],
      ["There are five criteria, each marked out of ten.", false],
      ["Writing a few words over the limit is a disaster.", false],
      ["Laura advises planning for about five minutes.", true],
      ["Laura says you should leave five minutes to proofread.", true],
    ]),
    gaps(
      "Complete Laura's advice.",
      "1. Did you answer the question and include everything the [task] asked for?\n2. Is the [register] right?\n3. Organisation: paragraphs, [linkers], a logical structure.\n4. If you don't add your own idea, you lose marks for [Content].\n5. They want to see a [range] of language used naturally.\n6. Always leave five minutes at the end to [proofread].",
    ),
  ]),

  section("Workshop: Make it better", [
    sort("Strong or weak writing habit? Sort. 🧩", {
      "💪 strong": [
        "starting each paragraph with a topic sentence",
        "giving a reason and an example for each point",
        "using a range of linkers",
        "a conclusion that answers the question",
      ],
      "😬 weak": [
        "one long paragraph",
        "repeating “very good” and “very bad”",
        "forgetting one of the points in the task",
        "writing a prepared text that doesn't answer the question",
      ],
    }),
    text(
      "✍️ Improve a text",
      "Take one of your course texts (for example, your essay from 8.3 or 10.3, or your review from 6.4). With your teacher:\n\n1. Check it against the four criteria: Content, Communicative Achievement, Organisation, Language.\n2. Find **two** places where a linker would help.\n3. Find **one** sentence you can make more B2 (a cleft sentence, an inversion, a participle clause).\n4. Find **one** vague sentence and add a specific example.\n5. Rewrite the conclusion so that it clearly answers the question.",
    ),
    tip("Use the Board or a shared document to edit together. Focus on 2–3 changes, not a total rewrite — the aim is for the student to see the difference. Give a mark out of 5 for each criterion before and after."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The first sentence of a paragraph, which says what it's about, is the ___ sentence.", options: ["*topic", "main", "first"] },
      { q: "Which B2 First text needs headings?", options: ["*a report", "an article", "an informal email"] },
      { q: "In the B2 First essay, you must add ___ idea(s) of your own.", options: ["*one", "two", "no"] },
      { q: "Reading your text carefully to find mistakes = ___", options: ["*proofreading", "drafting", "rephrasing"] },
    ]),
    box(
      "Phrase of the day: easy reading is hard writing",
      "✍️ A saying with many versions, attributed to several writers (including Nathaniel Hawthorne). A text that's easy to read usually took a lot of work to write.\n\n*Which text of yours took the most work?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. Always write a plan before your first [draft].\n2. Each paragraph should start with a [topic] sentence.\n3. A formal email needs a formal [register].\n4. Leave time to [proofread] your text.\n5. In the introduction, [rephrase] the question.\n6. Don't be [vague] — give specific examples.",
      ),
      match("Match the text type and the useful phrase.", [
        ["an essay", "In conclusion, I am convinced that…"],
        ["an article", "Have you ever wondered why…?"],
        ["a review", "I would highly recommend it to…"],
        ["a report", "The aim of this report is to…"],
        ["a formal email", "I look forward to hearing from you."],
        ["an informal email", "Can't wait to see you!"],
      ]),
      order("Make sentences.", [
        "Start each paragraph with a topic sentence.",
        "Always plan before you write.",
        "Check the word count at the end.",
        "The conclusion should answer the question.",
        "Leave five minutes to proofread.",
      ]),
    ],
    "Homework: Writing language",
  ),
  homework(
    [
      write("Rewrite one of your course texts (an essay, article, review or report — 140–190 words), improved with today's checklist. At the end, write two sentences: what did you change, and why?", 140),
      record("Record a 1-minute answer: “What have you learned about writing in this course?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
