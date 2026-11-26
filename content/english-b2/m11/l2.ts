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

// 11.2 Never have I seen… — G: inversion after negative and limiting adverbials, mainly to recognize and to use in writing and speeches: Never (before) have I…, Rarely / Seldom do we…, Not only does it…, but it also…, No sooner had… than…, Hardly / Scarcely had… when…, Little did they know…, Only then did…, Under no circumstances should…; compare with normal word order. V: persuasion (convince, persuade, a compelling argument, win someone over, talk someone into / out of, change someone's mind, credible, appeal to, sway, a call to action). S: persuade someone. Main format: persuasion true / false + a long reading (six ways to get a "yes" — Cialdini's principles, ~560 words) + TED-Ed video (Aristotle, Joshua Bell and persuasion) + a long listening (Ruslan's formal proposal to a city committee for a rescue training center, ~3:15) + "persuade me".
// Facts checked: Robert Cialdini, "Influence: The Psychology of Persuasion" (1984) — reciprocity, commitment and consistency, social proof, authority, liking, scarcity (a seventh, unity, was added in 2016); Ellen Langer and colleagues (1978): people were much more likely to let someone use a photocopier first when a reason with "because" was given, even a meaningless one ("because I have to make copies"); Noah Goldstein, Robert Cialdini and Vladas Griskevicius (2008): in a hotel, a card saying that most guests reused their towels worked better than a card about protecting the environment; in 2007 the violinist Joshua Bell played in a Washington metro station for about 45 minutes and very few people stopped (Washington Post experiment) — used in the TED-Ed video. Characters: Ruslan (mountain rescuer; uses drones — 4.4; got lost himself — B1), Chair (a committee chair).
export default lesson("b2-11.2", "Never have I seen…", () => [
  section("Warm-up: Can you persuade me?", [
    box(
      "Today you will…",
      "- discover the science of getting a “yes” 🧠✅\n- sound powerful and formal: Never have I… Not only… but also… 🎤\n- persuade your teacher to do something 😄",
    ),
    trueFalse("Persuasion: true or false? Guess first. 🤔", [
      ["People are more likely to say yes to someone who has given them a small gift first.", true],
      ["In a hotel study, “Most guests reuse their towels” worked better than “Help protect the environment”.", true],
      ["Adding “because…” to a request makes people more likely to agree — even if the reason is weak.", true],
      ["People are more easily persuaded by strangers than by people they like.", false],
      ["“Only 2 left!” makes most people want something less.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- When did someone persuade you to do something you didn't want to do? How?\n- Are you easy or hard to persuade? 😄\n- Who is the most persuasive person you know? What's their secret?",
    ),
    tip("The answers come from famous studies in the reading. Collect the student's examples — they'll recognize the principles later."),
  ]),

  section("Vocabulary: Persuasion", [
    words("Persuasion", [
      ["persuade — convince", "🗣️ make someone do / believe something — 🧠 make someone believe something is true"],
      ["a compelling argument", "💪 an argument so strong you can't ignore it"],
      ["win someone over", "🏆 get someone's support, especially after they disagreed"],
      ["talk someone into / out of", "➡️ persuade someone to do / not to do something"],
      ["change someone's mind", "🔄 make someone think differently"],
      ["credible", "✅ easy to believe and trust"],
      ["appeal to", "💗 try to make people feel or think something (emotions, logic)"],
      ["sway", "🌾 influence someone's opinion, especially when they're unsure"],
      ["a call to action", "📣 the moment you tell people exactly what to do"],
      ["a skeptic", "🤨 a person who doesn't easily believe things"],
    ]),
    match("Match.", [
      ["She made a compelling", "argument for a four-day week."],
      ["He talked me", "into buying a new phone."],
      ["My friends talked me", "out of quitting my job."],
      ["It took months to win", "the skeptics over."],
      ["The advert appeals", "to our emotions."],
      ["Every good speech ends with", "a call to action."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. I'm a [skeptic] — I need evidence before I believe anything.\n2. Nothing you say will change my [mind]!\n3. The witness wasn't very [credible] — her story kept changing.\n4. A few undecided voters can [sway] the result of an election.\n5. She [convinced] me that the plan would work.\n6. Can you [persuade] your parents to let you go?",
    ),
  ]),

  section("Reading: Six ways to get a “yes”", [
    tip("A long text (~560 words). First reading — 5 minutes: *Which principle do you think is the most powerful?* Then check the warm-up. Ask the student to underline the inversions (Not only…, Rarely…, Never…)."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Cialdini studied persuasion partly by working in sales jobs himself.", true],
        ["In the photocopier study, a meaningless reason worked almost as well as a real one.", true],
        ["Social proof means following what experts say.", false],
        ["The towel card about other guests was less effective than the environmental card.", false],
        ["Scarcity makes things seem more valuable.", true],
        ["The writer thinks these principles should be used to trick people.", false],
      ],
      {
        read: [
          "## ✅ Six ways to get a “yes”",
          "Why do we say yes? Rarely do we stop to think about it. A friend asks for a favor, a shop offers a discount, a waiter recommends a dish — and before we know it, we've agreed. In the 1970s and 80s, the American psychologist Robert Cialdini decided to find out what was really happening. Not only did he run experiments in his laboratory, but he also spent years working undercover in sales training programs, learning the tricks of car dealers, fundraisers and advertisers. In 1984, he published his findings in a book called Influence. Never before had the science of persuasion been explained so clearly.",
          "Cialdini described six principles. The first is **reciprocity**: we feel we must return favors. That's why free samples work so well, and why a restaurant that brings a small sweet with the bill often gets bigger tips.",
          "The second is **commitment and consistency**: once we've said yes to something small, we want to stay consistent. Agree to sign a short petition today, and you're much more likely to volunteer for the same cause next month.",
          "The third is **social proof**: when we're unsure, we look at what other people do. In one famous study, hotels placed two kinds of cards in their bathrooms. One said, \"Help save the environment — reuse your towels.\" The other said, \"Most guests in this hotel reuse their towels.\" The second card worked significantly better. Little did the guests know that they were part of an experiment.",
          "The fourth is **authority**: we tend to follow experts — or people who look like experts. A white coat, a uniform or an impressive title can change behavior surprisingly quickly.",
          "The fifth is **liking**: we say yes more easily to people we like, people who are similar to us and people who pay us compliments. Not only do salespeople try to find something in common with customers, but they are often trained to use their first names.",
          "The sixth is **scarcity**: we want things more when they're rare or about to disappear. \"Only two left!\" and \"Offer ends tonight!\" are effective for exactly this reason.",
          "Another well-known experiment shows how automatic some of our reactions are. In 1978, the psychologist Ellen Langer asked researchers to try to cut in line at a library photocopier. When they simply asked, \"May I use the machine?\", about 60% of people agreed. When they added a reason — \"because I'm in a rush\" — 94% said yes. But here's the surprising part: when they gave a meaningless reason — \"because I have to make some copies\" — 93% still agreed. The word \"because\" alone did most of the work.",
          "Are these principles dangerous? They can be. Under no circumstances should they be used to trick people into decisions that harm them, and Cialdini himself has warned about this. But they can also help: health campaigns, charities and teachers use them to encourage good choices. And knowing them protects you. Only when you recognize the techniques can you decide for yourself whether to say yes.",
          "So the next time someone says \"Everybody's doing it\" or \"Only today!\", stop for a second. Ask yourself: Am I convinced — or am I just being persuaded? 🧠",
        ].join("\n\n"),
      },
    ),
    match("Match the principle and the example.", [
      ["reciprocity", "A shop gives you a free sample, and you buy the product."],
      ["commitment and consistency", "You sign a small petition, then join the campaign."],
      ["social proof", "“Most guests reuse their towels.”"],
      ["authority", "An actor in a white coat recommends toothpaste."],
      ["liking", "A friendly salesperson who supports your football team."],
      ["scarcity", "“Only two tickets left!”"],
    ]),
    gaps(
      "Find words in the article.",
      "1. secretly, pretending to be someone else: [undercover]\n2. people who collect money for a charity: [fundraisers]\n3. a document many people sign to ask for change: a [petition]\n4. kind things you say about someone: [compliments]\n5. go before people who were waiting first: cut in [line]\n6. without meaning: [meaningless]",
    ),
  ]),

  section("Grammar: Never have I seen…", [
    quiz("Notice the rule 🔍 Look: “Rarely do we stop to think about it.” · “Not only did he run experiments, but he also…” · “Never before had the science of persuasion been explained so clearly.” · “Little did the guests know…”", [
      { q: "After negative words like never, rarely, not only at the start, the word order is…", options: ["*like a question: auxiliary + subject", "the same as normal", "subject + verb + auxiliary"] },
      { q: "“Rarely do we stop” is more ___ than “We rarely stop”.", options: ["*formal and emphatic", "informal", "wrong"] },
      { q: "Where are inversions most common?", options: ["*in writing, speeches and formal English", "in text messages", "in chats with friends"] },
    ]),
    table("inversion"),
    choose(
      "Choose.",
      "1. Never [*have I seen/I have seen] such a beautiful sunset. 🌅\n2. Rarely [*do we/we do] get a chance like this.\n3. Not only [*did she win/she won] the race, but she also broke the record.\n4. No sooner [*had we arrived/we had arrived] than it started to rain.\n5. Little [*did they know/they knew] what was about to happen.\n6. Under no circumstances [*should you/you should] open this door.\n7. Hardly [*had I sat/I had sat] down when the phone rang.\n8. Only then [*did I realize/I realized] my mistake.",
    ),
    gaps(
      "Rewrite the sentences with inversion. Use the words in brackets.",
      "1. I have never heard such a powerful speech. (Never) → Never [have I heard] such a powerful speech.\n2. We rarely meet such kind people. (Rarely) → Rarely [do we meet] such kind people.\n3. He is talented and he is also hard-working. (Not only) → Not only [is he talented], but he is also hard-working.\n4. She didn't know that it was a test. (Little) → Little [did she know] that it was a test.\n5. As soon as I got home, it started to snow. (No sooner) → No sooner [had I got home/had I gotten home] than it started to snow.\n6. You must not touch this button in any situation. (Under no circumstances) → Under no circumstances [should you touch/must you touch] this button.",
    ),
  ]),

  section("Grammar: Formal or normal?", [
    sort("Inversion (formal, emphatic) or normal word order? Sort. 🧩", {
      "🎩 inversion": [
        "Never have I felt so proud.",
        "Rarely does it snow here.",
        "Not only is it cheap, but it's also fast.",
        "Little did we know what was coming.",
      ],
      "👕 normal word order": [
        "I've never felt so proud.",
        "It rarely snows here.",
        "It's cheap, and it's fast too.",
        "We didn't know what was coming.",
      ],
    }),
    drag(
      "Complete the speech.",
      "Ladies and gentlemen, never [have] I been so proud of this city. Not [only] did we raise the money in three months, but we also built the playground ourselves. Rarely [do] neighbors work together like this. Little did we [know] how much fun it would be! No sooner [had] we opened the gates than children ran in. Under no [circumstances] should we let this spirit disappear. 🎉",
      ["did", "nothing", "situation"],
    ),
    order("Make sentences.", [
      "Never have I seen such a crowd.",
      "Rarely do we get a second chance.",
      "Not only is it cheap, but it is also fast.",
      "Little did they know about the plan.",
      "Under no circumstances should you give up.",
    ]),
    tip("Say it right: stress the negative word and pause after the inversion: *NEVer (pause) have I seen…* — it sounds dramatic, which is the point! Use inversion in essays, speeches and formal letters, not in a chat with friends (*Never have I eaten such pizza!* sounds funny 😄). Typical mistake: *Never I have seen* → *Never have I seen*."),
  ]),

  section("Video: Aristotle, a violinist and persuasion", [
    video("Watch: TED-Ed — What Aristotle and Joshua Bell can teach us about persuasion (Conor Neill).", "O2dEuMFR8kw"),
    text(
      "After the video: talk about it.",
      "- What happened when the famous violinist played in the metro? Why?\n- What are ethos, pathos and logos? (Remember 9.4?)\n- Which of Cialdini's six principles can you see in the video? 🤔",
    ),
    tip("Link 9.4 (ethos, pathos, logos) with today's principles: *authority* is close to ethos, *liking* is part of it too. Ask the student to summarize the video with one inversion: *Rarely did people stop…*"),
  ]),

  section("Listening: The proposal", [
    tip("A long listening — about 3 minutes 15 seconds. Ruslan, the mountain rescuer, presents a proposal to the city's sports and safety committee: a training center where young people can learn mountain safety. First listen: *Does the committee agree?* Second listen: notice how he persuades them."),
    ...listening(
      "Listen to Ruslan's proposal to a city committee.",
      "**Chair:** Thank you for coming, Ruslan. You have ten minutes. Please go ahead.\n\n**Ruslan:** Thank you, Chair, and thank you all for your time. A few years ago, I went for a walk in the mountains above this city. I left the path, the fog came down, and I spent a night outside, alone and frightened. More than fifty volunteers searched for me. Never have I felt so stupid — or so grateful. That night changed my life. Today I'm a member of the rescue team that saved me.\n\n**Ruslan:** Last year, our team was called out more than two hundred times. Most of the people we rescued were young, healthy and confident. Not only were they unprepared, but many of them didn't even tell anyone where they were going. Rarely do we rescue experienced climbers. We rescue people who simply didn't know the basic rules.\n\n**Ruslan:** So my proposal is simple: a small mountain safety center at the start of the main trail. Free courses for teenagers and students: how to read the weather, how to use a map and a phone app, what to carry, and — most importantly — when to turn back.\n\n**Chair:** It sounds reasonable. But the city has a limited budget. Why should we pay for this?\n\n**Ruslan:** That's a fair question. Every rescue costs money: helicopters, fuel, equipment, hours of work. Prevention is far cheaper. And we're not the first to try this. Similar centers in mountain regions in other countries have reported fewer rescues within a few years. We'd also look for sponsors. Two outdoor shops have already promised equipment, and the university has offered volunteers.\n\n**Woman:** Excuse me, may I ask something? Most of these accidents happen in winter, don't they? Would the center be open all year?\n\n**Ruslan:** Actually, no — most of our call-outs are in spring and autumn, when the weather changes very quickly and people don't expect snow. That's exactly why we'd open all year, with special courses before each season. Not only would we teach people what to do, but we'd also tell them when the dangerous weeks are.\n\n**Chair:** Who would teach the courses?\n\n**Ruslan:** Our rescuers, for free, on their days off. Twenty of them have already signed up. And we'd start small: a six-month trial, with a report to this committee at the end. If it doesn't work, you stop paying. Under no circumstances would we ask for more money without showing you results.\n\n**Chair:** I appreciate that. What exactly are you asking for today?\n\n**Ruslan:** A small building near the trail, which the city already owns and isn't using, and a budget for heating and electricity. That's all. Everything else, we'll find ourselves.\n\n**Chair:** Thank you, Ruslan. Colleagues, any objections? … No? Then I propose we approve the six-month trial. All in favor? … Agreed.\n\n**Ruslan:** Thank you. Honestly, no sooner had I walked in than I thought you'd say no.\n\n**Chair:** Little did you know that my nephew was one of the people you rescued last winter.\n\n**Ruslan:** Really? Then I hope he'll be our first student.\n\n**Chair:** Oh, I'll make sure he is.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Ruslan start his presentation?", options: ["*with a personal story", "with numbers", "with a joke"] },
      { q: "Who do the rescuers usually rescue?", options: ["*young, confident people who didn't know the basic rules", "experienced climbers", "tourists from abroad"] },
      { q: "Why does Ruslan say the center would save money?", options: ["*Prevention is cheaper than rescues.", "The city would sell tickets.", "Rescuers would be paid less."] },
      { q: "What does Ruslan ask the city for?", options: ["*an unused building and money for heating and electricity", "a new helicopter", "salaries for the teachers"] },
      { q: "Why might the Chair have been on Ruslan's side?", options: ["*Ruslan's team had rescued the Chair's nephew.", "The Chair is a climber.", "The Chair is Ruslan's friend."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan's team was called out more than two hundred times last year.", true],
      ["The courses would be expensive for students.", false],
      ["Two outdoor shops have promised equipment.", true],
      ["Ruslan suggests a six-month trial.", true],
      ["The committee rejects the proposal.", false],
    ]),
    sort("How does Ruslan persuade the committee? Match his words to Cialdini's principles. 🧩", {
      "👥 social proof / authority": [
        "Similar centers in other countries reported fewer rescues.",
        "I'm a member of the rescue team.",
        "Twenty rescuers have already signed up.",
        "The university has offered volunteers.",
      ],
      "🤝 reciprocity / commitment / liking": [
        "That night changed my life.",
        "If it doesn't work, you stop paying.",
        "We'd start small: a six-month trial.",
        "Thank you all for your time.",
      ],
    }),
  ]),

  section("Let's talk: Persuade me!", [
    text(
      "🎤 Persuade your teacher",
      "Choose a mission and persuade your teacher in 2 minutes. Your teacher plays a skeptic.\n\n- 📚 to cancel homework for a week\n- 🍕 to have the next lesson in a café\n- ✈️ to organize a class trip abroad\n- 🎸 your own idea!\n\nUse at least **two** principles (a reason with *because*, social proof, scarcity, reciprocity…) and **two** inversions (*Never have I…, Not only… but also…*). Finish with a clear call to action.\n\nThen swap: your teacher tries to persuade you. Spot the principles! 🕵️",
    ),
    tip("Be a tough skeptic first, then let yourself be “won over” if the student uses good arguments. Afterwards, name the principles the student used — and the ones you used on them."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Never ___ such a beautiful city.", options: ["*have I seen", "I have seen", "I saw"] },
      { q: "Not only ___ fast, but it's also cheap.", options: ["*is it", "it is", "does it"] },
      { q: "“Most guests reuse their towels” uses the principle of ___.", options: ["*social proof", "scarcity", "authority"] },
      { q: "He talked me ___ quitting — I stayed.", options: ["*out of", "into", "over"] },
    ]),
    box(
      "Phrase of the day: you catch more flies with honey than with vinegar",
      "🍯 You get better results by being kind and polite than by being rude and aggressive — a lesson Ruslan knows well.\n\n*Do you agree? Can you think of an exception?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. Rarely [*does she complain/she complains] about anything.\n2. Not only [*did they lose/they lost] the match, but they also lost their best player.\n3. Hardly [*had I arrived/I had arrived] when the meeting started.\n4. Never before [*had the city seen/the city had seen] such a storm.\n5. Little [*did he realize/he realized] that everyone was watching.\n6. Under no circumstances [*should students/students should] use phones in the exam.",
      ),
      gaps(
        "Complete with one word.",
        "1. Her argument was so [compelling] that everyone agreed.\n2. My friends talked me [into] going to the party.\n3. It took a long time to win the skeptics [over].\n4. Every speech should end with a call to [action].\n5. The advert appeals [to] our emotions.\n6. Nothing will change my [mind].",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      match("Match the principle and the example.", [
        ["reciprocity", "free samples"],
        ["social proof", "“Everyone's doing it!”"],
        ["authority", "a doctor recommends it"],
        ["liking", "a friendly, similar person asks"],
        ["scarcity", "“Only 2 left!”"],
        ["commitment", "a small yes leads to a bigger yes"],
      ]),
      write("Write a letter to your local council or school (140–190 words) to persuade them to start a new project (a sports club, a library corner, a community garden…). Use at least two persuasion principles and three inversions (Not only…, Rarely…, Under no circumstances…).", 140),
      record("Record a 1-minute persuasive message: convince a friend to try your favorite hobby. 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
