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
  video,
  words,
  write,
} from "../../kit";

// 11.4 Practical: A persuasive pitch — functional language: structure of a short persuasive pitch (hook → problem → solution → evidence → the ask → thanks), signposting, handling questions from the audience (That's a great question… / If I understand you correctly, you're asking… / I don't have that figure with me, but I'll send it to you… / Let me come back to that…), buying time, staying calm with difficult questions. Review of cleft sentences and inversion. Main format: "put the pitch in order" + a medium-long reading (the three-minute pitch, ~460 words) + a long listening (Asel pitches bike delivery for her bakeries to a small-business fund — and answers tough questions, ~3:15) + the student's own 3-minute pitch with Q&A. Video at home (TED, Julian Treasure).
// Facts checked: the "elevator pitch" — a pitch short enough to give during a ride in an elevator (about 30–60 seconds); Guy Kawasaki's "10/20/30 rule" for presentations: 10 slides, 20 minutes, no font smaller than 30 points; TED talks have a maximum length of 18 minutes. Characters: Asel (Asel's Bakery — two bakeries; the city plans to close part of the center to cars — 10.3), Chair, Woman (panel members).
export default lesson("b2-11.4", "Practical: A persuasive pitch", () => [
  section("Warm-up: How a pitch works", [
    box(
      "Today you will…",
      "- learn how to build a short, persuasive pitch 🚀\n- answer difficult questions calmly — even when you don't know the answer 🙋\n- give your own three-minute pitch 🎤",
    ),
    order(
      "Put the parts of a good pitch in order. 🚀",
      [[
        "A hook: a surprising fact, a question or a short story.",
        "The problem: what's wrong, and who has this problem?",
        "Your solution: what you offer and how it works.",
        "Evidence: numbers, examples, early results.",
        "The ask: exactly what you want from the audience.",
        "Thanks — and questions from the audience.",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Have you ever had to “sell” an idea — to a boss, a teacher, your parents? What happened? 😄\n- What's more frightening: giving the pitch or answering the questions?\n- Have you watched any startup or business shows? What do the best pitches have in common?",
    ),
    tip("Use the order as a checklist for the whole lesson. Point out that the ask comes BEFORE the questions — many people forget to say what they actually want."),
  ]),

  section("Vocabulary: Pitching an idea", [
    words("Pitching an idea", [
      ["a pitch", "🚀 a short talk to persuade people to support an idea"],
      ["an elevator pitch", "🛗 a pitch so short you could give it in an elevator (30–60 sec.)"],
      ["a hook", "🪝 something at the start that grabs attention"],
      ["an investor", "💼 a person who gives money to a business, hoping to earn more"],
      ["funding", "💰 money given for a project"],
      ["a prototype", "🧪 a first, test version of a product"],
      ["a target market", "🎯 the people you want to sell to"],
      ["scale up", "📈 make a business or project bigger"],
      ["take questions", "🙋 answer questions from the audience"],
      ["a slide deck", "🖥️ the set of slides for a presentation"],
    ]),
    match("Match.", [
      ["She opened her pitch with", "a great hook."],
      ["We're looking for", "funding of $20,000."],
      ["They tested a prototype", "with fifty customers."],
      ["Our target market is", "students aged 16–25."],
      ["If it works, we'll scale", "up to five cities."],
      ["After the talk, she took", "questions from the audience."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. An [elevator] pitch should take less than a minute.\n2. The [investors] asked about profits.\n3. Keep your slide [deck] short — ten slides is enough.\n4. Who is your target [market]?\n5. We built a simple [prototype] in two weeks.\n6. The city gave the project [funding] for one year.",
    ),
    quiz("Choose the right word.", [
      { q: "We need ___ to build the first version.", options: ["*funding", "a hook", "a deck"] },
      { q: "An ___ hopes to earn more money than they put in.", options: ["*investor", "audience", "prototype"] },
      { q: "If the trial works, we'll ___ up.", options: ["*scale", "grow", "build"] },
      { q: "After the pitch, she ___ questions for ten minutes.", options: ["*took", "made", "did"] },
    ]),
  ]),

  section("Reading: The three-minute pitch", [
    tip("A medium-long text (~460 words). First reading — 4 minutes: *What should you do when you don't know the answer to a question?* Then the tasks. These tips are your checklist for the final task."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["An elevator pitch is meant to be very short.", true],
        ["The writer recommends starting with a list of facts about yourself.", false],
        ["Guy Kawasaki's rule says slides should use large text.", true],
        ["Repeating a question helps everyone hear it and gives you time to think.", true],
        ["If you don't know an answer, the writer suggests inventing one.", false],
        ["The writer says practicing out loud is important.", true],
      ],
      {
        read: [
          "## 🚀 The three-minute pitch",
          "Imagine you step into an elevator and find yourself next to the person who could fund your dream project. You have until the doors open — about thirty seconds — to make them interested. That's where the term \"elevator pitch\" comes from. Most pitches today are a little longer, often three to five minutes, but the challenge is the same: say only what matters, and make people want to hear more.",
          "**Start with a hook, not with yourself.** \"Hello, my name is…, and I'm going to talk about…\" is the most common way to begin — and the most forgettable. Instead, start with a surprising number, a question or a ten-second story: \"Last winter, a woman in our neighborhood waited forty minutes for a bus with three bags of shopping.\" Then introduce yourself.",
          "**Make the problem real.** People don't invest in solutions; they invest in solutions to problems they understand. Describe one real person with the problem before you explain your idea.",
          "**Keep slides simple.** The entrepreneur and writer Guy Kawasaki suggests a \"10/20/30 rule\": no more than ten slides, no more than twenty minutes, and no text smaller than thirty points. For a three-minute pitch, you might need just three or four slides — or none at all. What the audience should remember is you, not your slides.",
          "**Be specific about the ask.** Never end with \"So… that's my idea.\" Say exactly what you want: \"We're asking for $15,000 to run a six-month trial.\" A clear ask shows that you've thought about the next step.",
          "**Handle questions like a professional.** Questions are not attacks; they're a sign that people are interested. A few simple habits help:",
          "- Listen to the whole question without interrupting.\n- Repeat or rephrase it: \"If I understand correctly, you're asking how we'll make money in the first year.\" This helps the audience hear it, shows that you've understood, and gives you a few seconds to think.\n- Answer briefly — thirty seconds is usually enough.\n- If you don't know, say so: \"I don't have that figure with me, but I'll send it to you this afternoon.\" Never invent numbers; one wrong answer can destroy your credibility.\n- If a question is hostile, stay calm and polite. Thank the person, answer the reasonable part, and move on.",
          "**Practice out loud.** Rarely does a good pitch happen without practice. Say it out loud at least five times, time it, and give it to a friend who will ask difficult questions. You'll discover which sentences are too long and which parts nobody understands.",
          "In the end, a pitch is not a speech about an idea. It's an invitation for people to join you. Make it short, make it clear, and make them want to say yes. 🙌",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why is “Hello, my name is…” a weak start?", options: ["*It's the most common and most forgettable way to begin.", "It's too short.", "It's impolite."] },
      { q: "What should come before the solution?", options: ["*a real problem, with one real person", "the price", "a joke"] },
      { q: "What is the purpose of rephrasing a question?", options: ["*to help the audience, show understanding and gain time", "to avoid answering", "to make the question harder"] },
      { q: "What should you do with a hostile question?", options: ["*Stay calm, answer the reasonable part and move on.", "Argue back.", "Ignore it completely."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. easy to forget: [forgettable]\n2. people who start businesses: [entrepreneurs]\n3. say again in different words: [rephrase]\n4. unfriendly, aggressive: [hostile]\n5. being trusted and believed: [credibility]\n6. a request to join or come: an [invitation]",
    ),
    order("Put the steps for answering a question in order.", [[
      "Listen to the whole question without interrupting.",
      "Repeat or rephrase the question.",
      "Answer briefly — about thirty seconds.",
      "If you don't know, say so and promise to check.",
      "Check that the person is satisfied, then move on.",
    ].join("\n")], "lines"),
  ]),

  section("Language: Pitching and handling questions", [
    table("pitch-language"),
    choose(
      "Choose the best phrase.",
      "1. (Hook) [*Imagine waiting forty minutes for a bus in the snow./Hello, today I will talk about buses.]\n2. (Signposting) [*So, how does it work? Let me show you./And then and then and then…]\n3. (The ask) [*We're asking for $10,000 to run a three-month trial./So… yeah, that's it.]\n4. (Rephrasing) [*If I understand you correctly, you're asking about costs./What?]\n5. (Not knowing) [*I don't have that figure with me, but I'll send it today./It's probably about a million.]\n6. (Hostile question) [*Thank you, that's a fair concern. The short answer is…/That's a stupid question.]",
    ),
    sort("Good or bad way to answer a question? Sort. 🧩", {
      "👍 good": [
        "rephrasing the question before answering",
        "admitting you don't know and promising to check",
        "answering in about thirty seconds",
        "thanking the person for a difficult question",
      ],
      "👎 bad": [
        "inventing a number",
        "interrupting before the question ends",
        "giving a five-minute answer",
        "arguing with a hostile questioner",
      ],
    }),
    drag(
      "Complete the end of a pitch.",
      "So, to [sum] up: the problem is real, the solution is simple, and our trial shows it works. What we're asking [for] today is $12,000 to scale up to three neighborhoods. Thank you for [listening]. I'd be happy to take your [questions]. … That's a great question. If I [understand] you correctly, you're asking about the costs in winter. I don't have that exact figure with me, but I'll [send] it to you this afternoon.",
      ["summary", "listen", "invent"],
    ),
  ]),

  section("Listening: Asel's pitch", [
    tip("A long listening — about 3 minutes 15 seconds. The city has a small-business fund. Asel pitches an idea for her bakeries: delivery by bicycle — perfect for the new car-free streets (10.3). Then the panel asks questions. First listen: *Does she get the money?* Second listen: notice how she answers questions."),
    ...listening(
      "Listen to Asel's pitch and the questions from the panel.",
      "**Chair:** Welcome, Asel. You have three minutes, and then the panel will ask questions. Please begin.\n\n**Asel:** Thank you. Last month, a woman called my bakery at seven in the morning. She's eighty-two, she lives on the fifth floor with no elevator, and she'd broken her arm. All she wanted was a loaf of bread and some milk. My nephew took it to her on his bicycle before school. That evening, I thought: how many people like her are there in this city?\n\n**Asel:** Here's the problem. Many older people, busy parents and people with disabilities can't easily get to a bakery every day. Delivery companies use cars, they're expensive, and soon they won't be allowed into the center at all. What I'm proposing is simple: fresh bread, delivered by bicycle, every morning before nine.\n\n**Asel:** We've already tested it. For six weeks, my nephew and two students delivered to sixty-five homes. Not only did customers order more often, but almost every one of them asked us to continue. Deliveries took on average twelve minutes. And bicycles don't need parking.\n\n**Asel:** So what we're asking for today is fifteen thousand dollars to buy four electric cargo bikes, insulated boxes for winter, and to train six riders. In return, we'll create six part-time jobs for students, and we'll report our results to the fund every three months. Thank you. I'd be happy to take your questions.\n\n**Chair:** Thank you, Asel. Very clear. My first question: what happens in January, at minus twenty?\n\n**Asel:** That's a fair concern. If I understand correctly, you're asking whether bikes can work in our winters. Electric cargo bikes are used in winter cities in other countries, with special tires. On the worst days, we'd reduce the delivery area. And the insulated boxes keep the bread warm for about forty minutes.\n\n**Woman:** I'd like to ask about money. Will this actually make a profit, or will it lose money every month?\n\n**Asel:** Honestly, I don't have the final figures for a full year yet — the trial was only six weeks. What I can tell you is that during the trial, delivery orders were on average three times larger than shop orders, which covered the riders' pay. I'll send you the full numbers from the trial this afternoon.\n\n**Woman:** Thank you, that would be helpful.\n\n**Chair:** One last question. Couldn't any bakery do this? What makes yours special?\n\n**Asel:** Any bakery could do it — and I'd be happy if they did. But we're the first, we already have customers who've asked for it, and our riders know the neighborhood. Rarely does a small business get a chance like this: the streets are changing, and we're ready.\n\n**Chair:** Thank you, Asel. We'll announce our decision on Friday. But between you and me, I've never heard a pitch that started with a broken arm and ended with warm bread. It's very persuasive.\n\n**Asel:** Thank you. And if you'd like, I can deliver a loaf to the panel tomorrow.\n\n**Chair:** That might count as bribery. But I'll accept the figures.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Asel start her pitch?", options: ["*with a short story about an elderly customer", "with her name and her company's history", "with the price of bread"] },
      { q: "What did the six-week trial show?", options: ["*Customers ordered more often and wanted it to continue.", "Deliveries were too slow.", "Nobody wanted bicycle delivery."] },
      { q: "What exactly does Asel ask for?", options: ["*$15,000 for bikes, boxes and training", "a new shop in the center", "free parking"] },
      { q: "How does Asel answer the question about profit?", options: ["*She admits she doesn't have full-year figures and promises to send the trial numbers.", "She invents a number.", "She refuses to answer."] },
      { q: "When will the panel announce its decision?", options: ["*on Friday", "immediately", "next month"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The elderly customer lives on the fifth floor with no elevator.", true],
      ["During the trial, deliveries took about twelve minutes on average.", true],
      ["Asel says only her bakery could offer this service.", false],
      ["The insulated boxes keep bread warm for about forty minutes.", true],
      ["Delivery orders were smaller than shop orders.", false],
      ["The Chair accepts a free loaf of bread.", false],
    ]),
    gaps(
      "Complete Asel's phrases.",
      "1. [What] I'm proposing is simple.\n2. Not only [did] customers order more often, but almost every one asked us to continue.\n3. So what we're asking [for] today is fifteen thousand dollars.\n4. That's a fair [concern].\n5. If I [understand] correctly, you're asking whether bikes can work in our winters.\n6. I don't have the final [figures] for a full year yet.",
    ),
  ]),

  section("Your pitch", [
    text(
      "🚀 A three-minute pitch",
      "Prepare a **three-minute pitch** (10 minutes to prepare) for a local fund, a school or a company. Choose an idea:\n\n- 📱 an app that solves a real problem in your city\n- 🌳 a community project (a garden, a library, a sports club)\n- ☕ a small business (a café, a service, a product)\n- 💡 your own idea!\n\n**Structure:** hook → problem (one real person) → solution → evidence → the ask (exact amount and what for) → thanks.\n\nThen **2 minutes of questions**: your teacher plays a panel with one friendly, one difficult and one hostile question. Use: *That's a great question… If I understand correctly… I don't have that figure, but…*",
    ),
    tip("Time the pitch strictly. Ask at least one question the student can't answer — practicing *I don't know, but I'll find out* is the main goal. Feedback: 1) the hook, 2) the ask (clear? specific?), 3) how they handled the hardest question, 4) two language points."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Something at the start of a pitch that grabs attention is a ___.", options: ["*hook", "deck", "prototype"] },
      { q: "“If I ___ you correctly, you're asking about costs.”", options: ["*understand", "hear", "know"] },
      { q: "If you don't know a figure, you should…", options: ["*say so and promise to send it", "guess", "change the subject"] },
      { q: "A first test version of a product is a ___.", options: ["*prototype", "pitch", "funding"] },
    ]),
    box(
      "Phrase of the day: practice makes perfect",
      "🎯 You met it in 3.3 — and it's especially true of pitches. Every great three-minute pitch has been practiced many, many times.\n\n*How many times will you practice your next presentation?* 😄",
    ),
  ]),

  homework(
    [
      video("Watch: TED — Julian Treasure, How to speak so that people want to listen.", "eIho2S0ZahI"),
      gaps(
        "Complete with one word.",
        "1. She grabbed our attention with a great [hook].\n2. We're looking for [funding] to start the project.\n3. If it works, we'll scale [up] to the whole city.\n4. After the talk, she took [questions] from the audience.\n5. Keep your slide [deck] short and simple.\n6. Our target [market] is busy parents.",
      ),
      match("Match the situation and the phrase.", [
        ["You want to start strongly.", "Imagine…"],
        ["You want to say what you need.", "What we're asking for today is…"],
        ["You want to check a question.", "If I understand correctly, you're asking…"],
        ["You don't know the answer.", "I don't have that figure with me, but I'll send it."],
        ["The question is hostile.", "Thank you, that's a fair concern."],
        ["You want to finish.", "Thank you. I'd be happy to take your questions."],
      ]),
    ],
    "Homework: Pitch language",
  ),
  homework(
    [
      write("Write the script of your pitch (140–190 words), improved after your teacher's feedback. Include a hook, a problem, a solution, evidence and a clear ask. Use one cleft sentence (What we're asking for is…) and one inversion (Not only… but also…).", 140),
      record("Record your improved three-minute pitch. 🚀🎤", 200),
    ],
    "Homework: Writing and speaking",
  ),
]);
