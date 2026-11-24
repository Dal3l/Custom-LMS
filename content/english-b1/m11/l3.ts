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

// 11.3 Young changemakers — skills lesson, no new grammar: review of relative clauses and both / either / neither. V: social projects (volunteer, a campaign, raise awareness, make a difference…). S: plan your own project. Main format: a "how old were they?" quiz + a long reading (four young changemakers, ~490 words) + a TED talk (the Wijsen sisters) + a long listening (Ruslan's mountain clean-up with teenagers, ~2.5 min) + a project proposal written in class.
// Facts checked: Malala — Nobel Peace Prize at 17; Boyan Slat — founded The Ocean Cleanup in 2013 at 18 after seeing plastic while diving in Greece at 16; Melati and Isabel Wijsen — started Bye Bye Plastic Bags in Bali in 2013 at 12 and 10, Bali banned single-use plastic bags at the end of 2018; Kelvin Doe — Sierra Leone, built batteries and a radio station from scrap, invited to MIT at 15; William Kamkwamba — Malawi, built a windmill from scrap at 14 after a famine, later studied at Dartmouth College.
export default lesson("b1-11.3", "Young changemakers", () => [
  section("Warm-up: How old were they?", [
    box(
      "Today you will…",
      "- meet young people who changed the world 🌍\n- watch two sisters who stopped plastic bags on an island 🛍️🚫\n- plan your own small project to make a difference ✨",
    ),
    quiz("How old were they? Guess! 🎂", [
      { q: "Malala Yousafzai won the Nobel Peace Prize at the age of…", options: ["*17", "27", "37"] },
      { q: "Boyan Slat started an organization to clean the oceans at…", options: ["*18", "35", "50"] },
      { q: "Two sisters in Bali started a campaign against plastic bags when they were…", options: ["*12 and 10", "22 and 20", "32 and 30"] },
      { q: "William Kamkwamba built a windmill for his village in Malawi at…", options: ["*14", "40", "24"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Do you think young people can really change the world? Or do they need adults to help? 🤔\n- What did you want to change in the world when you were 14?\n- Who is a young person you admire — famous or not? What did they do?",
    ),
    tip("Most students guess much older ages — that surprise is the point of the lesson. Ask: *Why do you think they could do it so young?*"),
  ]),

  section("Vocabulary: Making a difference", [
    words("Making a difference", [
      ["make a difference", "✨ have a good effect on a situation"],
      ["a campaign", "📢 a planned group of actions to achieve something"],
      ["raise awareness (of)", "💡 help people know about a problem"],
      ["volunteer", "🙋 work without money to help others"],
      ["an activist", "✊ a person who works to change society"],
      ["a petition", "📝 a document that many people sign to ask for change"],
      ["ban", "🚫 officially stop something", "The city banned plastic bags."],
      ["an invention", "💡 something new that someone has made"],
      ["scrap", "🔩 old metal or materials that people throw away"],
      ["a community", "👥 the people who live in an area"],
      ["support", "🤝 help and encourage"],
      ["inspire", "✨ give someone the wish to do something"],
    ]),
    match("Match.", [
      ["raise", "awareness"],
      ["start", "a campaign"],
      ["sign", "a petition"],
      ["make", "a difference"],
      ["help", "the local community"],
      ["work as", "a volunteer"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Even small actions can make a [difference]. ✨\n2. Thousands of people signed the [petition] to save the park. 📝\n3. The city has [banned] cars from the old town.\n4. Every Saturday she [volunteers] at an animal shelter. 🐶\n5. The campaign helped to raise [awareness] of plastic pollution.\n6. He built a radio from [scrap] he found in the street. 🔩\n7. The whole [community] helped to rebuild the school.\n8. Her story [inspired] me to start my own project.",
    ),
    quiz("Choose the right word.", [
      { q: "Climate ___ often organize protests and campaigns.", options: ["*activists", "inventions", "petitions"] },
      { q: "Our neighbors ___ the idea of a new park.", options: ["*supported", "banned", "scrapped"] },
      { q: "The light bulb was an important ___.", options: ["*invention", "community", "campaign"] },
      { q: "The students started a ___ to stop food waste at school.", options: ["*campaign", "scrap", "difference"] },
    ]),
  ]),

  section("Reading: Too young to change the world?", [
    tip("A long text (~490 words). First reading — 4 minutes: *What do the four stories have in common?* Then the tasks. Notice relative clauses (*who, which, whose, where*)."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Boyan Slat got his idea while diving in Greece.", true],
        ["Melati and Isabel Wijsen started their campaign as adults.", false],
        ["Bali banned single-use plastic bags after their campaign.", true],
        ["Kelvin Doe bought expensive parts for his inventions.", false],
        ["William Kamkwamba learned how to build a windmill from library books.", true],
        ["The writer says only geniuses can make a difference.", false],
      ],
      {
        read: [
          "## 🌍 Too young to change the world?",
          "People often say that young people should wait until they're older to change things. These four didn't wait.",
          "**🌊 Boyan Slat, the Netherlands.** When he was 16, Boyan went diving in Greece and saw more plastic bags than fish. He couldn't stop thinking about it. Two years later, at 18, he gave a talk about an idea for cleaning the oceans, which became popular online. In 2013, he founded The Ocean Cleanup, an organization which now builds systems that collect plastic from the sea and from rivers. Many experts said his idea wouldn't work. He kept trying, improving his designs again and again.",
          "**🛍️ Melati and Isabel Wijsen, Bali.** Melati and Isabel were 12 and 10 when they learned at school about people like Nelson Mandela and Mahatma Gandhi. They asked themselves: what can kids do on our island now? Bali, where they lived, had a huge problem with plastic bags on its beaches. In 2013, the sisters started a campaign called Bye Bye Plastic Bags. They collected signatures, gave talks and organized beach clean-ups with thousands of volunteers. At the end of 2018, Bali banned single-use plastic bags.",
          "**📻 Kelvin Doe, Sierra Leone.** Kelvin grew up in Freetown, where electricity often didn't work. He taught himself engineering by looking for old electronics in the rubbish and taking them apart. He built batteries from scrap and later a small radio station, where he played music and news for his neighborhood as \"DJ Focus\". At 15, he was invited to visit the Massachusetts Institute of Technology (MIT) in the USA — one of the best technical universities in the world.",
          "**💨 William Kamkwamba, Malawi.** In 2001, William's family lost their harvest because of a terrible drought, and he had to leave school because they couldn't pay the fees. But William didn't stop learning. He went to the local library, where he found a book about energy. At 14, he built a windmill from scrap — old bicycle parts, a tractor fan and wood — which produced electricity for his family's house. Later, he studied at Dartmouth College in the USA, and his story became a book and a film.",
          "What do these four have in common? None of them was rich or famous when they started. Both age and money mattered less than curiosity, determination and one simple question: *Why not me?* ✨",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who…?", [
      { q: "…had a radio station as “DJ Focus”?", options: ["*Kelvin Doe", "Boyan Slat", "William Kamkwamba"] },
      { q: "…had to leave school because the family couldn't pay?", options: ["*William Kamkwamba", "Kelvin Doe", "Melati Wijsen"] },
      { q: "…organized beach clean-ups with thousands of volunteers?", options: ["*Melati and Isabel Wijsen", "Boyan Slat", "Kelvin Doe"] },
      { q: "…kept improving his designs although experts said they wouldn't work?", options: ["*Boyan Slat", "William Kamkwamba", "Kelvin Doe"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. started an organization: [founded]\n2. names written by people to support something: [signatures]\n3. the science of building machines: [engineering]\n4. a long time without rain: a [drought]\n5. the crops that are collected: the [harvest]\n6. wanting to know and learn things: [curiosity]",
    ),
  ]),

  section("Video: Bye bye, plastic bags", [
    tip("A TED talk by Melati and Isabel Wijsen, about 11 minutes. If time is short, watch the first 5–6 minutes. Before watching: *How do you think two kids could convince a whole island?*"),
    video("Watch: Our campaign to ban plastic bags in Bali — TED.", "P8GCjrDWWUM"),
    text(
      "After the video: talk to your teacher.",
      "- What did the sisters do to get attention? Which idea was the most creative?\n- Why do you think adults listened to them?\n- Could a campaign like this work in your town? What would you ban? 🚫",
    ),
  ]),

  section("Listening: Clean mountains", [
    tip("A long listening — about 2.5 minutes. Ruslan, the mountain rescuer, has started a new project with teenagers. Daniyar took part. First listen: *What is the project, and how did it start?* Second listen: the details."),
    ...listening(
      "Listen to a radio interview. Ruslan and Daniyar talk about the “Clean Mountains” project.",
      "**Host:** Today I'm talking to Ruslan, who works in mountain rescue, and Daniyar, a sixteen-year-old volunteer. Ruslan, tell us about your project.\n\n**Ruslan:** It's called \"Clean Mountains\". Every time we go on a rescue, we see so much rubbish on the paths — plastic bottles, bags, even old tents. One day, after a rescue, I thought: we save people in the mountains, but who saves the mountains? So last spring I started organizing clean-up hikes for teenagers.\n\n**Host:** How does it work?\n\n**Ruslan:** Once a month, we take a group of about twenty young people up a popular path. Everyone gets gloves and a big bag. We teach them basic mountain safety too — how to check the weather, what to do if someone gets hurt. So they learn something useful and help nature at the same time.\n\n**Host:** Daniyar, why did you join?\n\n**Daniyar:** At first, my dad wouldn't let me go hiking without adults, so this was perfect — there's a professional rescuer with us! 😄 But then I really got into it. On my first hike, our group collected forty kilos of rubbish in one day. I couldn't believe it.\n\n**Host:** What surprised you most?\n\n**Daniyar:** That most of it was from tourists who probably think one bottle doesn't matter. But a thousand people with one bottle each — that's a thousand bottles!\n\n**Host:** Ruslan, what's next?\n\n**Ruslan:** We've started a petition to put more bins and signs at the start of the paths. We have about three thousand signatures already. And Daniyar's sister Madina, who's a designer, made our posters for free.\n\n**Daniyar:** And I'm making a website for the project — it's good practice for my computer science studies.\n\n**Host:** What do parents think about it? Are they worried about safety?\n\n**Ruslan:** Some are, at first. So before every hike, we have a short meeting with the parents, where we explain the route and show them our safety equipment. After the first trip, most of them relax. Some parents even come with us now — last month a grandmother joined us and collected more rubbish than anyone! 😄\n\n**Daniyar:** That was Grandma Saule! She said she wanted to see what I was doing every weekend.\n\n**Host:** Ha! A family project. And what happens to the rubbish you collect?\n\n**Ruslan:** We sort it at the bottom of the mountain. Plastic bottles and cans go to a recycling center, and the rest goes to the normal bins. We also count everything and post the numbers online, because people react to numbers. When they see \"forty kilos in one day\", they start to understand.\n\n**Host:** Any advice for young people who want to make a difference?\n\n**Daniyar:** Start small. You don't need to save the whole planet. Just pick one path, one beach, one street.\n\n**Ruslan:** And find a team. Alone, it's hard. Together, it's fun. 🏔️",
    ),
    quiz("Listen and choose.", [
      { q: "How did Ruslan get the idea for the project?", options: ["*He saw a lot of rubbish during rescues.", "His boss asked him.", "He read about it online."] },
      { q: "How often do the clean-up hikes happen?", options: ["*once a month", "every weekend", "once a year"] },
      { q: "How much rubbish did Daniyar's group collect on his first hike?", options: ["*40 kilos", "4 kilos", "400 kilos"] },
      { q: "What is the petition for?", options: ["*more bins and signs at the start of the paths", "closing the mountains", "free hiking tours"] },
      { q: "What is Daniyar doing for the project?", options: ["*making a website", "designing posters", "leading the hikes"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["About twenty young people go on each clean-up hike.", true],
      ["The teenagers also learn basic mountain safety.", true],
      ["Daniyar joined because he loved cleaning.", false],
      ["Most of the rubbish was left by tourists.", true],
      ["The petition has about 300 signatures.", false],
      ["Madina made the posters for free.", true],
      ["Daniyar's grandmother joined one of the clean-up hikes.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Ruslan: We save people in the mountains, but who saves the [mountains]?\n2. Ruslan: Everyone gets gloves and a big [bag].\n3. Daniyar: My dad wouldn't [let] me go hiking without adults.\n4. Ruslan: We've started a [petition] to put more bins and signs.\n5. Daniyar: Start [small].\n6. Ruslan: Alone, it's hard. Together, it's [fun].",
    ),
  ]),

  section("Review: relative clauses", [
    choose(
      "Choose the right word.",
      "1. Boyan Slat is a Dutch inventor [*who/which] wants to clean the oceans.\n2. Bali, [*where/which] the sisters live, banned plastic bags.\n3. Kelvin is a boy [*whose/who's] inventions were made from scrap.\n4. The windmill [*which/who] William built gave electricity to his home.\n5. Ruslan, [*who/that] is a mountain rescuer, started the project.\n6. 2013 was the year [*when/where] The Ocean Cleanup was founded.\n7. [*Both/Either] Ruslan and Daniyar spoke on the radio.\n8. [*Neither/Either] age nor money stopped them.",
    ),
    drag(
      "Complete the summary.",
      "Ruslan is a rescuer [who] started a project called “Clean Mountains”. Teenagers [who] join the hikes learn about safety. The path [where] they worked last month is very popular with tourists. Daniyar, [whose] sister made the posters, is building a website. [Both] Ruslan and Daniyar think that small actions matter. [Neither] of them wants to give up! 🏔️",
      ["which", "what", "either"],
    ),
  ]),

  section("Let's talk: Your project", [
    text(
      "Plan your own project 💡",
      "Think of a small problem in your street, school, town or online. Plan a project to help.\n\n- 🔍 **The problem:** What's wrong? Who does it affect?\n- 💡 **Your idea:** What will you do? (a clean-up, a campaign, a petition, a video, an app…)\n- 👥 **Your team:** Who can help you? Who would support it?\n- 📅 **First step:** What can you do next week?\n- ✨ **The difference:** How will things be better?\n\nPresent it to your teacher in 2 minutes — your teacher asks tough questions! 🤨",
    ),
    tip("Help the student keep the idea small and realistic — that's the lesson from all the stories. Ask: *Who exactly would help? What could go wrong? How will you know it worked?*"),
  ]),

  section("Writing: A project proposal", [
    order(
      "Put the example proposal in order.",
      [[
        "Problem: There are no bins in the park near our school, so it's full of rubbish.",
        "Idea: Students who want to help will organize a clean-up every month.",
        "We will also start a petition for more bins, which we'll send to the city council.",
        "Our art club, whose members love drawing, will make posters.",
        "Result: a cleaner park where everyone can relax.",
      ].join("\n")],
      "lines",
    ),
    write("Write a proposal for your project (100 words): the problem, your idea, who will help, and the difference it will make. Use at least three relative clauses.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "work without money to help others =", options: ["*volunteer", "invent", "ban"] },
      { q: "a document many people sign =", options: ["*a petition", "a campaign", "scrap"] },
      { q: "Ruslan, ___ is a rescuer, started the project.", options: ["*who", "which", "that"] },
      { q: "help people know about a problem =", options: ["*raise awareness", "make scrap", "support a ban"] },
    ]),
    box(
      "Phrase of the day: Be the change",
      "🌱 **Be the change you want to see** — a popular idea: don't wait for others, start with yourself.\n\n*You want a cleaner street? Be the change — pick up one piece of rubbish today!*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. Even small actions can make a [difference].\n2. More than 2,000 people signed our [petition].\n3. She works as a [volunteer] at the hospital.\n4. The video helped to raise [awareness] of the problem.\n5. The government [banned] single-use plastic bags.\n6. He built a radio from [scrap] metal.",
      ),
      choose(
        "Choose.",
        "1. Malala is a young woman [*who/which] fights for education.\n2. This is the beach [*where/when] the clean-up took place.\n3. The boy [*whose/who] windmill gave light to his village became famous.\n4. The Ocean Cleanup, [*which/that] was founded in 2013, cleans the oceans.\n5. [*Both/Neither] the sisters were very young.\n6. You can help [*either/neither] by volunteering or by donating.",
      ),
      match("Match the people and what they did.", [
        ["Boyan Slat", "started an organization to clean the oceans"],
        ["Melati and Isabel Wijsen", "campaigned against plastic bags in Bali"],
        ["Kelvin Doe", "built a radio station from scrap"],
        ["William Kamkwamba", "built a windmill for his family"],
        ["Malala Yousafzai", "fights for girls' education"],
        ["Ruslan", "organizes mountain clean-ups"],
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Find information about a young changemaker from your country (or a person you know). Write about them (100+ words): who they are, what they did and why it matters. Use relative clauses.", 100),
      record("Record a 1-minute speech: present your project idea and ask people to join you. 📢", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
