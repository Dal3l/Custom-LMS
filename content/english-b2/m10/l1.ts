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

// 10.1 The city in which I live — G: relative clauses with prepositions (the person to whom…, the area in which… — formal; the area I live in — informal), whose, whom, quantifiers + of whom / of which (most of whom, some of which), "which" referring to a whole clause (…, which surprised everyone). V: housing and the city (a neighborhood, a resident, rent, a landlord, a tenant, a commute, residential, crowded, affordable, green spaces). S: describe your ideal neighborhood. Main format: a city quiz + a long reading (what makes a good neighborhood — Jane Jacobs, Barcelona's superblocks, the 15-minute city, ~560 words) + a long listening (Dana and Madina view a flat with an estate agent, ~3:15) + "design your neighborhood". Video at home (BBC Learning English, who / whom / whose).
// Facts checked: according to the UN, since about 2007 more than half of the world's population has lived in cities; Almaty was the capital of Kazakhstan until 1997 (the capital moved to Akmola, now Astana); the historic center of Venice has no cars; in 2016 more bicycles than cars were counted entering central Copenhagen; Jane Jacobs, "The Death and Life of Great American Cities" (1961) — "eyes on the street": busy streets with shops and neighbors watching are safer; in the 1960s she helped stop the planned Lower Manhattan Expressway; Barcelona's "superblocks" (superilles) — groups of nine blocks where through traffic is limited and streets become space for people; the first big one opened in Poblenou in 2016; the "15-minute city" — the idea (associated with Carlos Moreno of the Sorbonne) that daily needs should be within 15 minutes on foot or by bike; Paris's mayor Anne Hidalgo made it part of her 2020 campaign. Characters: Dana (designer, works remotely for a Barcelona publisher and stayed in Almaty — 4.2, 5.1), Madina.
export default lesson("b2-10.1", "The city in which I live", () => [
  section("Warm-up: City quiz", [
    box(
      "Today you will…",
      "- find out what makes a neighborhood a good place to live 🏘️\n- describe places and people precisely: the street on which…, the neighbor whose… 🧩\n- design your ideal neighborhood 🗺️",
    ),
    quiz("City quiz! Guess. 🏙️", [
      { q: "Since about when have more than half of the world's people lived in cities?", options: ["*2007", "1950", "1990"] },
      { q: "Which city was the capital of Kazakhstan until 1997?", options: ["*Almaty", "Shymkent", "Karaganda"] },
      { q: "In which city's historic center are there no cars at all?", options: ["*Venice", "Rome", "Amsterdam"] },
      { q: "In which city were more bikes than cars counted entering the center in 2016?", options: ["*Copenhagen", "Paris", "London"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Describe the street on which you live. What can you see from your window? 🪟\n- What do you like most about your neighborhood — and what would you change?\n- Would you rather live in the center of a big city or in a quiet suburb? Why?",
    ),
    tip("Model the target language naturally: *the street on which I live / the street I live on*, *a neighbor whose dog barks all night*. Don't explain yet — just let the student hear it."),
  ]),

  section("Vocabulary: Housing and the city", [
    words("Housing and the city", [
      ["a neighborhood", "🏘️ an area of a city where people live"],
      ["a resident", "🧑 a person who lives in a place"],
      ["rent (n, v)", "💵 money you pay to live in someone's home"],
      ["a landlord — a tenant", "🔑 the owner who rents a home out — 🧳 the person who rents it"],
      ["a commute", "🚇 the journey to and from work every day"],
      ["residential", "🏠 (an area) with houses, not offices or factories"],
      ["crowded", "👥 full of people"],
      ["affordable", "💰 not too expensive"],
      ["green spaces", "🌳 parks and gardens in a city"],
      ["a pedestrian", "🚶 a person walking in a street"],
    ]),
    match("Match.", [
      ["My commute takes", "an hour each way."],
      ["The landlord raised", "the rent again."],
      ["Most residents want", "more green spaces."],
      ["It's a quiet residential", "area with no shops."],
      ["The metro is so crowded", "in the mornings."],
      ["It's hard to find", "an affordable flat in the center."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. The [tenant] pays the rent; the landlord owns the flat.\n2. This street is only for [pedestrians] — no cars allowed.\n3. Young people can't find [affordable] housing in big cities.\n4. Our [neighborhood] has a great market and lots of cafés.\n5. [Residents] complained about the noise from the new bar.\n6. I hate my [commute] — two buses and a metro!",
    ),
  ]),

  section("Reading: What makes a good neighborhood?", [
    tip("A long text (~560 words). First reading — 5 minutes: *What do Jane Jacobs, Barcelona and Paris have in common?* Then the tasks. Ask the student to find relative clauses with prepositions and whose."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Jane Jacobs believed that busy streets are safer.", true],
        ["Jacobs was a professional city planner with a university degree in architecture.", false],
        ["In Barcelona's superblocks, cars can drive through freely.", false],
        ["The first big superblock opened in 2016.", true],
        ["In a 15-minute city, you can reach daily needs on foot or by bike.", true],
        ["The writer thinks only rich cities can make these changes.", false],
      ],
      {
        read: [
          "## 🏘️ What makes a good neighborhood?",
          "Think of a street you love. It probably isn't the one with the widest road or the tallest buildings. It's more likely a street on which there's a small bakery, a few trees, children playing and an old man who sits on the same bench every afternoon. For most of the twentieth century, city planners ignored streets like that. Cities were designed for cars, and neighborhoods in which people walked were often seen as old-fashioned.",
          "One woman changed that conversation. Jane Jacobs was a writer and activist, not a trained planner, whose book The Death and Life of Great American Cities (1961) attacked almost everything the experts believed. Jacobs lived in Greenwich Village in New York, a crowded neighborhood of small shops and old buildings, many of which the city wanted to knock down. She argued that busy streets were actually safer than empty ones, because they had \"eyes on the street\": shopkeepers, residents and passers-by who noticed what was happening. Mixing homes, shops and workplaces, she said, was what made a neighborhood alive. Jacobs also helped stop a huge highway that would have cut through lower Manhattan, which made her famous — and very unpopular with some powerful people.",
          "Sixty years later, many cities are trying to put her ideas into practice. In Barcelona, planners created \"superblocks\": groups of nine city blocks in which through traffic is limited. Cars can still enter to deliver things or reach their owners' homes, but they have to drive slowly and can't use the streets as shortcuts. The space that used to belong to traffic has been given back to people — benches, trees, playgrounds and tables, at which neighbors now eat outside. The first big superblock opened in the Poblenou district in 2016. At first, some residents, most of whom drove to work, protested. Within a few years, many of them said they wouldn't want to go back.",
          "In Paris, the idea of the \"15-minute city\" became part of the mayor's election campaign in 2020. The idea, which is associated with the urban researcher Carlos Moreno, is simple: everything you need every day — a school, a doctor, shops, a park, a place to exercise — should be within a 15-minute walk or bike ride of your home. The less time people spend commuting, the more time they have for their families, their friends and themselves.",
          "Not everyone is convinced. Critics worry that these changes make neighborhoods so attractive that rents go up and the people for whom they were designed can no longer afford to live there. Others say that the ideas work in dense European cities but are much harder in places where people live far apart. These are fair concerns, to which planners still don't have perfect answers.",
          "But the basic idea is hard to argue with. A good neighborhood is a place in which you can walk, meet people by chance, know the name of your baker and feel that someone would notice if something went wrong. It's not about how rich a city is. It's about whose needs come first: cars', or people's. 🌳",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Jacobs mean by “eyes on the street”?", options: ["*People in busy streets notice what's happening, so streets are safer.", "Security cameras on every street.", "Police officers on every corner."] },
      { q: "What happens to traffic in a superblock?", options: ["*Cars can enter slowly, but can't use the streets as shortcuts.", "Cars are completely banned.", "Only buses can enter."] },
      { q: "How did superblock residents feel after a few years?", options: ["*Many didn't want to go back.", "They were still protesting.", "They moved away."] },
      { q: "What is one criticism of these ideas?", options: ["*Rents may rise, so the original residents can't afford to stay.", "They make streets more dangerous.", "They are too cheap."] },
      { q: "What is the writer's final point?", options: ["*It's about whose needs come first: cars' or people's.", "Only rich cities can do it.", "Cars should be banned everywhere."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a person who campaigns for change: an [activist]\n2. destroy (a building): knock [down]\n3. people walking past: [passers-by]\n4. quicker routes: [shortcuts]\n5. with many people or buildings close together: [dense]\n6. worries: [concerns]",
    ),
  ]),

  section("Grammar: The street on which I live", [
    quiz("Notice the rule 🔍 Look: “a street on which there's a small bakery” · “a writer whose book attacked almost everything” · “old buildings, many of which the city wanted to knock down” · “…, which made her famous”", [
      { q: "“the street on which I live” is more formal than…", options: ["*the street (which / that) I live on", "the street where on I live", "the street which I live"] },
      { q: "“whose” shows…", options: ["*possession (her book, their homes)", "a place", "a time"] },
      { q: "In “…, which made her famous”, which refers to…", options: ["*the whole idea before it", "the motorway only", "Manhattan"] },
    ]),
    table("relative-advanced"),
    choose(
      "Choose.",
      "1. This is the café [*in which/which] we first met. ☕\n2. She's the neighbor [*whose/who's] dog barks all night.\n3. The man [*to whom/to who] I spoke was very helpful.\n4. I have three neighbors, [*all of whom/all of them] are retired.\n5. The bus was late again, [*which/what] made me late for work.\n6. The flat [*that I live in/in that I live] is tiny.\n7. There are two parks, [*neither of which/neither of them] has a playground.\n8. The landlord, [*whom/which] I've never met, lives in Dubai.",
    ),
    gaps(
      "Join the sentences. Use the words in brackets.",
      "1. This is the house. I grew up in it. (in which) → This is the house [in which I grew up].\n2. I met a woman. Her son is a famous chef. (whose) → I met a woman [whose son is a famous chef].\n3. I have many friends. Most of them live abroad. (most of whom) → I have many friends, [most of whom live abroad].\n4. The metro was closed. That made everyone late. (which) → The metro was closed, [which made everyone late].\n5. That's the colleague. I share an office with him. (with whom) → That's the colleague [with whom I share an office].\n6. We visited ten flats. None of them was affordable. (none of which) → We visited ten flats, [none of which was affordable/none of which were affordable].",
    ),
  ]),

  section("Grammar: Describe it precisely", [
    sort("Formal or informal? Sort. 🧩", {
      "🎩 formal (preposition + which / whom)": [
        "the city in which I live",
        "the person to whom I spoke",
        "the company for which she works",
        "the friend with whom I traveled",
      ],
      "👕 informal (preposition at the end)": [
        "the city I live in",
        "the person I spoke to",
        "the company she works for",
        "the friend I traveled with",
      ],
    }),
    drag(
      "Complete the description.",
      "I live in an old neighborhood in [which] most buildings are from the 1960s. My neighbor, [whose] garden is full of roses, has lived here for fifty years. There are two cafés on our street, both of [which] serve amazing coffee. The street is closed to cars on Sundays, [which] means children can play outside. The neighbors, many of [whom] have known each other for years, organize a party every summer. It's the place [where] I feel most at home. 🏡",
      ["what", "who's", "them"],
    ),
    order("Make sentences.", [
      "This is the street on which I grew up.",
      "She's the neighbor whose cat is always on my balcony.",
      "I have two brothers, both of whom live abroad.",
      "The bus was late, which was annoying.",
      "That's the friend with whom I share a flat.",
    ]),
    tip("Say it right: non-defining clauses have commas in writing and short pauses in speech: *My neighbor, (pause) whose garden is full of roses, (pause) has lived here for years.* Typical mistakes: *who's* (= who is) instead of *whose*; *all of them* after a comma → *all of whom*; *the city in that I live* → *in which*."),
  ]),

  section("Listening: Flat hunting", [
    tip("A long listening — about 3 minutes 15 seconds. Dana has decided to stay in Almaty and work remotely. She needs a bigger flat. Madina goes with her to see one, and the estate agent shows them around. First listen: *Does Dana decide to take the flat?* Second listen: the tasks."),
    ...listening(
      "Listen to Dana and Madina viewing a flat.",
      "**Agent:** Good morning! You must be Dana. And this is…?\n\n**Dana:** My friend Madina. She's here to stop me making a bad decision.\n\n**Agent:** Very wise. Come in. So, this is the flat, which as you can see has just been renovated. Two bedrooms, a big living room, and a balcony from which you can see the mountains.\n\n**Madina:** Oh, wow. Dana, look at that view.\n\n**Dana:** It's beautiful. I work from home, so I need a room in which I can actually concentrate. Could the second bedroom be an office?\n\n**Agent:** Absolutely. It's the quietest room in the flat, because its window faces the courtyard, not the street.\n\n**Madina:** What's the kitchen like? Dana cooks more than she admits.\n\n**Agent:** It's small but modern. The oven, which is brand new, came with a five-year warranty. And the washing machine is in the bathroom, which saves space.\n\n**Dana:** Is there any storage? I have about two hundred books, most of which I refuse to give away.\n\n**Agent:** There's a big cupboard in the hall, and the shelves in the living room stay.\n\n**Dana:** Perfect. What about the neighbors? In my last flat, I had a neighbor whose son practiced the drums every evening.\n\n**Agent:** I understand. The building has twelve flats, most of which belong to families who've lived here for years. Directly upstairs there's a retired couple, both of whom are very quiet — although I'm told he sings in the shower.\n\n**Madina:** Singing is fine. Drums are not.\n\n**Dana:** And how about the area? I don't have a car.\n\n**Agent:** That's no problem. There's a metro station five minutes away, a market at which you can buy fresh fruit, and a park where people walk their dogs. There's also a small bakery on the corner — the owner is a woman called Asel, whose bread is the best in the district.\n\n**Madina:** Asel's bakery? Dana, that's our Asel!\n\n**Dana:** Really? I didn't know she'd opened a bakery here. Well, that's a reason to move in immediately.\n\n**Agent:** Ha! I'll put that in my notes.\n\n**Dana:** What's the rent?\n\n**Agent:** It's three hundred and fifty thousand tenge a month, which includes the internet but not the electricity.\n\n**Dana:** Hmm. That's a bit more than I wanted to pay.\n\n**Madina:** But Dana, your commute is zero minutes. You don't pay for buses or taxis. And the light in here is amazing — you could design your book covers right by that window.\n\n**Dana:** True. Who's the landlord?\n\n**Agent:** A man who lives in Astana. He's the person to whom you'd send the rent, but I'd deal with any problems. He's flexible, as long as tenants look after the flat.\n\n**Dana:** Would he accept a one-year contract?\n\n**Agent:** I think so. Shall I call him?\n\n**Dana:** Can I have until tomorrow? I'd like to walk around the neighborhood this evening and see what it's like after dark.\n\n**Agent:** Of course. That's very sensible.\n\n**Madina:** And we should test the bakery. For research.\n\n**Dana:** Definitely for research.\n\n**Agent:** Here's my card. Call me before twelve tomorrow — there's another person who's interested, which means it might go quickly.\n\n**Dana:** Thank you. You'll hear from me.",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Dana want the second bedroom to be quiet?", options: ["*She works from home and needs to concentrate.", "She has a baby.", "She plays the drums."] },
      { q: "What problem did Dana have in her last flat?", options: ["*a neighbor's son who played the drums", "no hot water", "a very high rent"] },
      { q: "Who owns the bakery on the corner?", options: ["*their friend Asel", "the landlord", "the agent's sister"] },
      { q: "What does the rent include?", options: ["*the internet but not electricity", "everything", "nothing"] },
      { q: "What does Dana decide?", options: ["*to walk around the area that evening and decide tomorrow", "to take the flat immediately", "not to take it"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The flat has a view of the mountains.", true],
      ["Most of the flats in the building belong to students.", false],
      ["The man upstairs sings in the shower.", true],
      ["The metro station is fifteen minutes away.", false],
      ["The landlord lives in Astana.", true],
      ["Another person is interested in the flat.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. A balcony from [which] you can see the mountains.\n2. I had a neighbor [whose] son practiced the drums every evening.\n3. Twelve flats, most of [which] belong to families.\n4. A retired couple, both of [whom] are very quiet.\n5. He's the person to [whom] you'd send the rent.\n6. Another person is interested, [which] means it might go quickly.",
    ),
  ]),

  section("Let's talk: Your ideal neighborhood", [
    text(
      "🗺️ Design your neighborhood",
      "Describe your ideal neighborhood (1–2 minutes). Think about:\n\n- 🏠 the kind of building in which you'd live\n- 🛒 the places you'd need within 15 minutes\n- 🌳 green spaces, streets, transport\n- 👥 the neighbors with whom you'd like to live (and the ones you wouldn't! 😄)\n\nUse at least **five** relative clauses: *in which, whose, most of which, …, which means…*\n\nThen your teacher asks: *Could you afford to live there? Who might not like it?*",
    ),
    tip("Draw a quick map with the student on the Board tool while they speak. Collect ideas for the project in 10.4 (a report on improving your neighborhood)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The person ___ I spoke was very kind.", options: ["*to whom", "to who", "whom to"] },
      { q: "She's the neighbor ___ dog is always barking.", options: ["*whose", "who's", "which"] },
      { q: "I have two sisters, both of ___ are doctors.", options: ["*whom", "them", "who"] },
      { q: "The person who rents a flat is the ___.", options: ["*tenant", "landlord", "resident"] },
    ]),
    box(
      "Phrase of the day: home is where the heart is",
      "💗 Home isn't a building — it's the place where the people and things you love are.\n\n*Where is home for you?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — ‘Who’, ‘whom’ or ‘whose’?", "mbS7-T4Z-kQ"),
      choose(
        "Choose.",
        "1. That's the restaurant [*at which/which] we had our first date.\n2. I know a man [*whose/who's] brother is an astronaut. 🚀\n3. She has five cousins, [*none of whom/none of them] I've met.\n4. It rained all week, [*which/that] ruined our holiday.\n5. The colleague [*with whom/with who] I work is from Japan.\n6. We saw three flats, [*one of which/one of them] had a garden.",
      ),
      gaps(
        "Join the sentences with a relative clause.",
        "1. This is the city. I was born in it. → This is the city [in which I was born/I was born in].\n2. I met a girl. Her father is a pilot. → I met a girl [whose father is a pilot].\n3. I have many books. Most of them are in English. → I have many books, [most of which are in English].\n4. He forgot my birthday. That upset me. → He forgot my birthday, [which upset me].\n5. That's the teacher. I learned the most from her. → That's the teacher [from whom I learned the most/I learned the most from].\n6. We have two cars. Neither of them works. → We have two cars, [neither of which works].",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["a landlord", "the owner who rents out a home"],
        ["a tenant", "the person who rents a home"],
        ["a commute", "the daily journey to work"],
        ["affordable", "not too expensive"],
        ["residential", "with homes, not offices"],
        ["a pedestrian", "a person walking"],
      ]),
      write("Write a description (140–190 words) of the neighborhood in which you live (or grew up) for a website called “Real neighborhoods”. Describe the streets, the people and the places, and say what you would change. Use at least five relative clauses (in which, whose, most of which, …, which…).", 140),
      record("Record a 1-minute tour of your street or neighborhood, as if you were a guide. 🎙️🏘️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
