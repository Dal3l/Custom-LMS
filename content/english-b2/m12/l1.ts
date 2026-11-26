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

// 12.1 Despite everything — G: linkers of contrast (although / even though, despite / in spite of + -ing / noun / the fact that, whereas, while, however, nevertheless, on the other hand) and purpose (to, in order to, so as to, so that, in order not to); comparative structures (the more…, the more…; far / much / slightly / a bit better; not nearly as… as; twice as… as). V: decisions (weigh up the pros and cons, a dilemma, a trade-off, a compromise, sleep on it — review, have second thoughts — review, go with your gut, rule something out, keep your options open, a turning point — review). S: weigh up the pros and cons of a decision. Main format: decisions true / false + a long reading (the paradox of choice — Schwartz, the jam study, maximizers and satisficers, Franklin's "moral algebra", ~560 words) + TED video (Barry Schwartz) + a long listening (Daniyar must choose between a summer internship in Seoul and one at Kenji's company in Almaty, and talks to his sister Madina, ~3:15). Video at home (BBC Learning English, linking words of contrast).
// Facts checked: Sheena Iyengar and Mark Lepper (2000): in a supermarket, a table with 24 kinds of jam attracted more people (about 60% stopped vs 40%) than a table with 6, but only about 3% of the people at the big table bought jam, compared with about 30% at the small table; Barry Schwartz, "The Paradox of Choice" (2004) and his TED talk (2005); Schwartz and colleagues (2002) described "maximizers" (who look for the best possible option) and "satisficers" (who choose something good enough) — maximizers tended to be less satisfied with their choices; the term "satisficing" comes from the economist Herbert Simon (1956); Benjamin Franklin described his "moral algebra" — writing pros and cons in two columns and crossing out items of equal weight — in a letter to Joseph Priestley in 1772. Characters: Daniyar (studying engineering in Seoul), Madina (his sister), Kenji (a tech company in Almaty), Ji-woo and Lucas (his friends in Seoul).
export default lesson("b2-12.1", "Despite everything", () => [
  section("Warm-up: Decisions, decisions", [
    box(
      "Today you will…",
      "- find out why more choice can make us less happy 🤯\n- connect ideas like a B2 writer: although, despite, whereas, so that… 🔗\n- weigh up the pros and cons of a real decision ⚖️",
    ),
    trueFalse("Decisions: true or false? Guess first. 🤔", [
      ["In a famous supermarket study, a table with 6 jams sold more jam than a table with 24.", true],
      ["People who always look for the best possible option tend to be the happiest with their choices.", false],
      ["Benjamin Franklin used lists of pros and cons to make decisions.", true],
      ["Having more options always makes decisions easier.", false],
      ["Choosing something “good enough” can make people more satisfied.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- What's the most difficult decision you've ever made? How did you decide?\n- Do you take a long time to choose things — a meal in a restaurant, a film, a phone? 😅\n- Do you go with your gut or make a list of pros and cons?",
    ),
    tip("The answers come from the reading. Listen for contrast and purpose: *Although it was a good job, I… I made a list so that…* — today's grammar."),
  ]),

  section("Vocabulary: Decisions", [
    words("Decisions", [
      ["weigh up the pros and cons", "⚖️ think carefully about the advantages and disadvantages"],
      ["a dilemma", "🤷 a difficult choice between two options"],
      ["a trade-off", "🔄 losing one good thing to get another"],
      ["a compromise", "🤝 an agreement where both sides accept less than they wanted"],
      ["go with your gut", "💓 decide by feeling, not by thinking"],
      ["rule something out", "❌ decide that something is not possible"],
      ["keep your options open", "🚪 not decide yet, so you can still choose later"],
      ["sleep on it", "😴 wait until tomorrow before deciding"],
      ["have second thoughts", "🤔 start to doubt a decision"],
      ["a turning point", "↪️ the moment when things change"],
    ]),
    match("Match.", [
      ["Let's weigh up", "the pros and cons."],
      ["It's a real dilemma:", "both options are good."],
      ["There's always a trade-off", "between price and quality."],
      ["We reached a compromise:", "we'll go to the sea AND the mountains."],
      ["I've ruled out", "moving abroad this year."],
      ["Don't decide now —", "sleep on it."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. I'm keeping my [options] open — I haven't decided yet.\n2. When in doubt, go with your [gut].\n3. She signed the contract but then had second [thoughts].\n4. Neither of us got exactly what we wanted — it was a [compromise].\n5. A higher salary or more free time? That's the [trade-off].\n6. Moving to Seoul was a [turning] point in his life.",
    ),
  ]),

  section("Reading: Too much choice?", [
    tip("A long text (~560 words). First reading — 5 minutes: *What's the difference between a maximizer and a satisficer?* Then the tasks. Ask the student to underline every linker of contrast."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["More people stopped at the table with 24 jams.", true],
        ["More people bought jam at the table with 24 jams.", false],
        ["Maximizers look for the best possible option.", true],
        ["Satisficers usually make worse decisions and feel worse about them.", false],
        ["Franklin crossed out pros and cons of equal weight.", true],
        ["The writer says we should always choose the first option we see.", false],
      ],
      {
        read: [
          "## 🤯 Too much choice?",
          "In 2000, two psychologists, Sheena Iyengar and Mark Lepper, set up a table in an expensive supermarket in California. On some days, the table offered 24 different kinds of jam to taste; on others, just 6. Although the big table attracted more customers — about 60% of passers-by stopped, whereas only 40% stopped at the small one — something surprising happened next. Of the people who stopped at the small table, about 30% bought a jar. At the big table, only about 3% did. Despite having more choice, people were far less likely to choose anything at all.",
          "The American psychologist Barry Schwartz called this the paradox of choice. We believe that the more options we have, the happier we'll be. In reality, too many options can leave us confused, anxious and less satisfied — even when we choose well. With 24 jams, we worry that we've missed the perfect one. With 6, we pick one and enjoy it.",
          "Schwartz noticed that people deal with choice in two different ways. Maximizers try to find the best possible option. Before buying a phone, they read every review, compare every model and keep looking even after finding a good one, so that they never miss anything better. Satisficers — a word created by the economist Herbert Simon — decide what they need and stop as soon as they find something that is good enough. In studies, maximizers often made slightly better choices: they found jobs with higher salaries, for example. However, they were much less satisfied with those choices. While satisficers enjoyed what they had, maximizers kept thinking about what they might have had instead.",
          "Does this mean we should never think carefully? Not at all. For big decisions — a career, a university, a home — it makes sense to weigh up the pros and cons. More than 250 years ago, Benjamin Franklin described a method he called \"moral algebra\" in a letter to a friend. He would divide a sheet of paper into two columns, pros and cons, and write down every reason he could think of over several days. Then, whenever he found a pro and a con of roughly equal weight, he would cross them both out. In the end, he could see which side was heavier. Even so, Franklin admitted that the method wasn't perfect, as some reasons are impossible to measure.",
          "So how can we make better decisions without driving ourselves crazy? Researchers suggest a few simple rules. Decide what really matters to you before you start looking, in order not to be distracted by things you don't need. Limit your options: compare three, not thirty. Set a deadline. And once you've decided, stop looking at the alternatives. The more you compare, the less you enjoy what you've chosen.",
          "Finally, accept that there is always a trade-off. No job is perfect; no city has everything. Whereas a maximizer sees this as a failure, a satisficer sees it as part of life. In spite of our fear of choosing wrongly, most decisions are not as permanent as they feel. And sometimes, the best choice isn't the perfect one — it's the one you're happy to live with. 🍓",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is the “paradox of choice”?", options: ["*More options can make us less satisfied.", "More options always make us happier.", "We can't choose at all."] },
      { q: "Why do maximizers keep looking?", options: ["*so that they never miss anything better", "because they are lazy", "because they're happy with their choice"] },
      { q: "What was the result for maximizers in studies?", options: ["*slightly better choices, but less satisfaction", "worse choices and less satisfaction", "better choices and more satisfaction"] },
      { q: "How did Franklin's “moral algebra” work?", options: ["*He listed pros and cons and crossed out reasons of equal weight.", "He asked friends to vote.", "He chose the first option."] },
      { q: "What do researchers suggest?", options: ["*Compare a few options, set a deadline and stop looking afterwards.", "Compare as many options as possible.", "Never make big decisions."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. made people come: [attracted]\n2. a glass container for jam: a [jar]\n3. worried and nervous: [anxious]\n4. approximately: [roughly]\n5. draw a line through: cross [out]\n6. lasting forever: [permanent]",
    ),
  ]),

  section("Grammar: Although, despite, whereas…", [
    quiz("Notice the rule 🔍 Look: “Although the big table attracted more customers, …” · “Despite having more choice, people were less likely to choose.” · “…whereas only 40% stopped at the small one.” · “In order not to be distracted…”", [
      { q: "After although we use…", options: ["*a full clause (subject + verb)", "a noun or -ing", "to + verb"] },
      { q: "After despite / in spite of we use…", options: ["*a noun, -ing or the fact that", "a full clause", "to + verb"] },
      { q: "“whereas” is used to…", options: ["*compare two different things or people", "give a purpose", "give a reason"] },
    ]),
    table("contrast-purpose"),
    choose(
      "Choose.",
      "1. [*Although/Despite] it was raining, we went for a walk. 🌧️\n2. [*Despite/Although] the rain, we went for a walk.\n3. She took a taxi [*so as not to/so not to] be late.\n4. I love the city, [*whereas/despite] my sister prefers the countryside.\n5. In spite of [*feeling/felt] tired, he finished the report.\n6. I'm saving money [*so that/in order] I can travel next year.\n7. The job is well paid. [*However/Although], the hours are long.\n8. Despite [*the fact that/that] she was ill, she came to work.",
    ),
    gaps(
      "Join the sentences. Use the word in brackets.",
      "1. It was expensive. We bought it. (although) → [Although it was expensive], we bought it.\n2. He was nervous. He gave a great speech. (despite) → [Despite being nervous/Despite his nerves/Despite the fact that he was nervous], he gave a great speech.\n3. I set two alarms. I didn't want to oversleep. (so as not to) → I set two alarms [so as not to oversleep].\n4. My brother is a morning person. I'm a night owl. (whereas) → My brother is a morning person, [whereas I'm a night owl/whereas I am a night owl].\n5. She spoke slowly. Everyone understood her. (so that) → She spoke slowly [so that everyone understood her/so that everyone could understand her].\n6. The hotel was cheap. It was very comfortable. (in spite of) → [In spite of being cheap/In spite of the low price], the hotel was very comfortable.",
    ),
  ]),

  section("Grammar: The more, the better", [
    match("Match the beginnings and the endings.", [
      ["The more you practice,", "the better you get."],
      ["The sooner we leave,", "the earlier we'll arrive."],
      ["The more options you have,", "the harder it is to choose."],
      ["This phone is far", "better than my old one."],
      ["The new flat is twice", "as big as the old one."],
      ["Seoul isn't nearly", "as cold as Almaty in winter."],
    ]),
    sort("A big difference or a small difference? Sort. 🧩", {
      "🐘 a big difference": [
        "far better",
        "much more expensive",
        "a lot faster",
        "not nearly as good",
      ],
      "🐭 a small difference": [
        "slightly better",
        "a bit more expensive",
        "a little faster",
        "not quite as good",
      ],
    }),
    drag(
      "Complete Daniyar's message.",
      "Madina, I can't decide! [Although] the Seoul internship pays more, the Almaty one is far more [interesting]. I want to go home [so] that I can see Grandma. [Despite] the lower salary, I'd learn a lot from Kenji. The more I think about it, the [more] confused I get. Lucas says the Seoul job is slightly [better] for my CV, whereas Ji-woo says I should go with my gut. Help! 😅",
      ["In spite", "interest", "most"],
    ),
    order("Make sentences.", [
      "Although it was late, we kept working.",
      "Despite the rain, the concert went ahead.",
      "I left early so as not to miss the train.",
      "The more you read, the more you learn.",
      "My sister is shy, whereas I'm very talkative.",
    ]),
    tip("Say it right: *Although* /ɔːlˈðəʊ/ — stress on the second syllable. Typical mistakes: *despite of* → *despite* or *in spite of*; *although* + noun (*although the rain*) → *despite the rain*; *so as to not* → *so as not to*; *the more you practice, the more better* → *the better*."),
  ]),

  section("Video: The paradox of choice", [
    video("Watch: TED — Barry Schwartz, The paradox of choice. Watch at least the first 8 minutes.", "VO6XEQIsCoM"),
    text(
      "After the video: talk about it.",
      "- What examples of “too much choice” does Schwartz give?\n- Why does he say that more choice can make us feel worse, even when we choose well?\n- Are you a maximizer or a satisficer? Give an example. 😄",
    ),
    tip("Schwartz is the psychologist from the reading. Ask the student to summarize with linkers: *Although we have more choice than ever, … Despite…, … whereas…*"),
  ]),

  section("Listening: Seoul or Almaty?", [
    tip("A long listening — about 3 minutes 15 seconds. Daniyar has two offers for a summer internship: one at a big company in Seoul, one at Kenji's company in Almaty. He calls his sister Madina. First listen: *What does he decide?* Second listen: the tasks."),
    ...listening(
      "Listen to Daniyar and Madina talking about a difficult decision.",
      "**Madina:** Hi, Daniyar! I got your message. Twelve exclamation marks. What's the emergency?\n\n**Daniyar:** It's not an emergency. It's a dilemma. I've got two offers for a summer internship, and I have to decide by Friday.\n\n**Madina:** Two offers! That's great news. Tell me everything.\n\n**Daniyar:** The first one is in Seoul, at a huge electronics company. Everyone here dreams of working there. The pay is good, and it would look amazing on my CV. The second one is in Almaty, at Kenji's company.\n\n**Madina:** Kenji? Really? How did that happen?\n\n**Daniyar:** He saw my project at the student exhibition online and wrote to me. His team is building an app for mountain rescue — with Ruslan's team, actually. He said I'd work on real problems from the first day, whereas in Seoul I'd probably spend most of the summer in meetings and making presentations.\n\n**Madina:** That sounds exactly like you. You've been fascinated by mountain rescue ever since you heard Ruslan's story.\n\n**Daniyar:** I know. Last night I even studied their old maps, just to understand how the app could work. I didn't sleep until two.\n\n**Madina:** So what's the problem?\n\n**Daniyar:** The money, mainly. Kenji's company pays far less. And Lucas keeps telling me that the Seoul internship is much better for my future. In his opinion, the bigger the company, the better the opportunities.\n\n**Madina:** Well, Lucas has a point. A famous name on your CV does open doors.\n\n**Daniyar:** I know. And if I say no, will they ever offer me anything again? That's what scares me. Although, honestly, the thought of spending a whole summer making slides scares me even more.\n\n**Madina:** And what does Ji-woo say?\n\n**Daniyar:** She says I should go with my gut. Although she'd miss me, she thinks I'd be happier at home for the summer.\n\n**Madina:** And what does your gut say?\n\n**Daniyar:** That's the problem. It changes every hour. Yesterday I made a list of pros and cons, like Benjamin Franklin. I crossed out the ones that were equal. The Seoul list was longer, but the Almaty list had the things I actually care about.\n\n**Madina:** Such as?\n\n**Daniyar:** Doing something useful. Learning from someone I respect. Seeing Grandma — she's not getting any younger, you know. And Leo's band is playing at the summer festival. I don't want to miss everything again.\n\n**Madina:** Daniyar, listen. You've spent two years being very sensible. You've studied all night, you've learned Korean, you've done everything right. In spite of all that, you sound tired. Maybe this summer, the best decision isn't the one that looks best on paper.\n\n**Daniyar:** But what if I regret it? What if I'm choosing the easy option?\n\n**Madina:** Is it easy? Building an app that helps rescuers find people in the mountains? That doesn't sound easy to me. And you'll still be a student in Seoul in September, so you're not giving anything up forever. You can apply to the big company next year.\n\n**Daniyar:** That's true. I hadn't thought about it like that. It's not forever.\n\n**Madina:** So?\n\n**Daniyar:** So… I'm going to sleep on it. But I think I'm coming home.\n\n**Madina:** Grandma will cry. And then she'll start cooking.\n\n**Daniyar:** In order to make up for two years of dormitory food.\n\n**Madina:** Exactly. Call Kenji tomorrow.",
    ),
    quiz("Listen and choose.", [
      { q: "What are Daniyar's two offers?", options: ["*a summer internship in Seoul and one at Kenji's company in Almaty", "two jobs in Seoul", "a job and a university place"] },
      { q: "What is Kenji's team building?", options: ["*an app for mountain rescue", "a game", "a phone"] },
      { q: "What is the main disadvantage of the Almaty internship?", options: ["*the lower pay", "the long hours", "the distance from home"] },
      { q: "What makes Daniyar think differently at the end?", options: ["*Madina says the decision isn't forever.", "Lucas changes his mind.", "Kenji offers more money."] },
      { q: "What does Daniyar decide?", options: ["*He'll sleep on it, but he thinks he's coming home.", "He'll go to Seoul.", "He'll refuse both offers."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar has to decide by Friday.", true],
      ["Kenji saw Daniyar's project at an online student exhibition.", true],
      ["Lucas thinks the Almaty internship is better.", false],
      ["Daniyar made a list of pros and cons.", true],
      ["Ji-woo thinks Daniyar should go with his gut.", true],
      ["Madina tells Daniyar to choose the job with the higher salary.", false],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. I'd work on real problems from the first day, [whereas] in Seoul I'd spend the summer in meetings.\n2. The [bigger] the company, the better the opportunities.\n3. [Although] she'd miss me, she thinks I'd be happier at home.\n4. Kenji's company pays [far] less.\n5. In [spite] of all that, you sound tired.\n6. In [order] to make up for two years of dormitory food.",
    ),
  ]),

  section("Let's talk: Weigh it up", [
    text(
      "⚖️ A real decision",
      "Choose a real decision (yours or a friend's) — or one of these:\n\n- 🎓 study abroad or at home?\n- 💼 a well-paid job you don't love, or a lower-paid job you do?\n- 🏙️ a flat in the center or a house outside the city?\n\nWeigh up the pros and cons with your teacher using Franklin's method: two columns, cross out equal reasons. Then decide! Use: *Although… , Despite… , whereas… , so that… , The more… the more…*",
    ),
    tip("Draw the two columns on the Board tool. Push for contrast linkers in every sentence. Finally ask: *Are you a maximizer or a satisficer in this decision?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ the rain, we enjoyed the trip.", options: ["*Despite", "Although", "However"] },
      { q: "I left early ___ miss the bus.", options: ["*so as not to", "so that not to", "in order to not"] },
      { q: "The more you practice, the ___ you get.", options: ["*better", "more better", "best"] },
      { q: "Losing one good thing to get another is a ___.", options: ["*trade-off", "compromise", "dilemma"] },
    ]),
    box(
      "Phrase of the day: you can't have your cake and eat it",
      "🍰 You can't have two things that are impossible together — every choice has a trade-off. Daniyar can't have the Seoul salary AND the summer at home.\n\n*What trade-off have you made recently?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Linking words of contrast.", "M_2N2Ts8DxQ"),
      choose(
        "Choose.",
        "1. [*Although/Despite] he was tired, he kept running.\n2. [*In spite of/Although] the noise, I slept well.\n3. She studies hard [*so that/so as] she can get a scholarship.\n4. I like coffee, [*whereas/despite] my husband prefers tea.\n5. The more I learn, the [*more/most] I realize I don't know.\n6. This test was [*far/very] easier than the last one.",
      ),
      gaps(
        "Complete with one word.",
        "1. [Despite] the bad weather, the match went ahead.\n2. I wrote it down so [as] not to forget.\n3. She's quiet, [whereas] her brother never stops talking.\n4. In [spite] of the price, the tickets sold out.\n5. The [more] you sleep, the better you feel.\n6. It's not [nearly] as hot as it was yesterday.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["a dilemma", "a difficult choice"],
        ["a trade-off", "losing one thing to get another"],
        ["a compromise", "both sides accept less"],
        ["rule out", "decide something isn't possible"],
        ["go with your gut", "decide by feeling"],
        ["keep your options open", "not decide yet"],
      ]),
      write("Write an essay (140–190 words): “Is it better to have more choice?” Give arguments on both sides and your opinion. Use at least five linkers of contrast and purpose (although, despite, whereas, however, so that, in order to).", 140),
      record("Record a 1-minute answer: “Tell me about a difficult decision. How did you make it?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
