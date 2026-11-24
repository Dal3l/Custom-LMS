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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 11.1 The city which never sleeps — G: relative clauses with who / which / that / where / whose / when; defining and non-defining (with commas). V: cities and society (public transport, a neighborhood, pedestrian, pollution…). S: describe a place. Main format: a "guess the city" quiz + a long reading (five cities, five ideas, ~480 words) + a long listening (a radio show: three people describe their cities, ~3 min). Video at home.
// Facts checked: Venice — canals, no cars; Istanbul — on two continents; Astana — capital since 1997; Rio — Christ the Redeemer; Copenhagen — more bikes than cars in the city; Seoul — Cheonggyecheon stream reopened in 2005 after a highway was removed; Medellín — Metrocable cable cars since 2004; Tallinn — free public transport for residents since 2013; Singapore — Gardens by the Bay; Manchester — Liverpool Road, one of the world's oldest passenger railway stations (1830); Almaty — “father of apples”, the Medeu skating rink.
export default lesson("b1-11.1", "The city which never sleeps", () => [
  section("Warm-up: Guess the city", [
    box(
      "Today you will…",
      "- describe cities and places in more detail 🏙️\n- use *who, which, where, whose*: *It's a city **where** people travel by boat.* 🚤\n- discover five cities that changed their lives with one idea 💡",
    ),
    quiz("Guess the city! 🌍", [
      { q: "It's a city where people travel by boat because there are canals instead of streets.", options: ["*Venice", "Paris", "Prague"] },
      { q: "It's a city which is on two continents, Europe and Asia.", options: ["*Istanbul", "Moscow", "Cairo"] },
      { q: "It's the city which became the capital of Kazakhstan in 1997.", options: ["*Astana", "Almaty", "Shymkent"] },
      { q: "It's a city where a huge statue of Christ stands on a mountain above the beaches.", options: ["*Rio de Janeiro", "Barcelona", "Lisbon"] },
      { q: "It's a city whose name is often translated as “father of apples”.", options: ["*Almaty", "Tashkent", "Bishkek"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Describe your town in one sentence starting “It's a place where…” — let your teacher guess more about it! 🏡\n- What's a city you've visited that surprised you? Why?\n- If you could change ONE thing about your city tomorrow, what would it be?",
    ),
    tip("Make the quiz a race. Then ask the student to make a riddle about a city they know, using *where / which / whose*, for you to guess."),
  ]),

  section("Vocabulary: Cities", [
    words("Cities and society", [
      ["public transport", "🚌🚇 buses, trams, metro for everyone"],
      ["a neighborhood (neighbourhood)", "🏘️ a part of a city where people live"],
      ["a pedestrian", "🚶 a person who is walking", "This street is for pedestrians only."],
      ["traffic jam", "🚗🚗🚗 too many cars that can't move"],
      ["pollution", "🏭💨 dirty air, water or land"],
      ["green spaces", "🌳 parks and gardens in a city"],
      ["a resident", "🏠 a person who lives in a place"],
      ["crowded — quiet", "👥👥 full of people — 🤫 calm, not many people"],
      ["a cycle lane", "🚲 a part of the road only for bikes"],
      ["a landmark", "🗼 a famous building or place that's easy to recognize"],
      ["the suburbs", "🏡 areas outside the city center where people live"],
      ["improve", "📈 make better", "The new metro improved life for thousands."],
    ]),
    match("Match.", [
      ["a traffic", "jam"],
      ["a cycle", "lane"],
      ["air", "pollution"],
      ["green", "spaces"],
      ["public", "transport"],
      ["a famous", "landmark"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I was stuck in a traffic [jam] for an hour this morning! 🚗\n2. The Eiffel Tower is the most famous [landmark] in Paris. 🗼\n3. Our city needs more [green] spaces — there are almost no parks.\n4. The old town is closed to cars — it's only for [pedestrians]. 🚶\n5. In winter, air [pollution] in some cities is very bad.\n6. We live in the [suburbs] and take the train to the center every day.\n7. The new metro line has [improved] life for many people.\n8. All [residents] can use the city library for free.",
    ),
    quiz("Choose the right word.", [
      { q: "The market was so ___ that we couldn't move!", options: ["*crowded", "quiet", "polluted"] },
      { q: "I feel safer riding my bike in a ___.", options: ["*cycle lane", "traffic jam", "landmark"] },
      { q: "My ___ has a great bakery and a small park.", options: ["*neighborhood", "pollution", "pedestrian"] },
      { q: "In many big cities, ___ transport is faster than a car.", options: ["*public", "green", "quiet"] },
    ]),
  ]),

  section("Reading: Five cities, five ideas", [
    tip("A long text (~480 words). First reading — 4 minutes: *Which idea would help YOUR city most?* Then the tasks. Ask the student to underline the relative clauses (*which, who, where…*) — the grammar of the next section."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In Copenhagen, there are more bikes than cars in the city.", true],
        ["Seoul built a new highway over the Cheonggyecheon stream.", false],
        ["Medellín's cable cars connect hillside neighborhoods with the center.", true],
        ["In Tallinn, public transport is free for tourists too.", false],
        ["Singapore's Supertrees are giant structures covered in plants.", true],
        ["The writer thinks only rich cities can change.", false],
      ],
      {
        read: [
          "## 🏙️ Five cities, five ideas",
          "Big cities often have the same problems: traffic, pollution, noise and too little space. But some cities have found clever solutions. Here are five ideas which changed the lives of millions of people.",
          "**🚲 Copenhagen, Denmark — the city where bikes are king.** In Copenhagen, there are more bikes than cars in the city, and about half of the residents cycle to work or school every day. The city has built hundreds of kilometers of wide cycle lanes, which are separated from cars. There are even \"green waves\" — traffic lights which change so that cyclists don't have to stop. The result? Cleaner air, healthier people and fewer traffic jams.",
          "**🏞️ Seoul, South Korea — the highway that became a river.** For decades, a busy highway covered the Cheonggyecheon stream in the center of Seoul. In the early 2000s, the city did something surprising: it removed the highway and brought the stream back to life. Since 2005, the place where thousands of cars once drove has been a long park with water, trees and walking paths. In summer, it's cooler than the streets around it.",
          "**🚡 Medellín, Colombia — cable cars for everyone.** Medellín is a city whose poorest neighborhoods are high up on steep hills. For people who lived there, getting to work in the center used to take hours. In 2004, the city opened the Metrocable — cable cars which are part of public transport. Suddenly, a trip which took two hours took twenty minutes, and new libraries and schools were built near the stations.",
          "**🚌 Tallinn, Estonia — free buses.** Since 2013, Tallinn has offered free public transport to all its registered residents. People who live in the city just show a card. Tourists still pay, but for locals, buses and trams cost nothing. The idea was to help families who had little money and to get more people out of their cars.",
          "**🌳 Singapore — a city in a garden.** Singapore, which is one of the most crowded cities in the world, has made green spaces a priority. In Gardens by the Bay, giant \"Supertrees\" — tall structures which are covered in thousands of plants — collect rainwater and some even produce energy from the sun. Many new buildings must include gardens on their roofs or walls.",
          "None of these cities is perfect. But they all show that a city isn't just a place where people live — it's a place which people can change. 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What are “green waves” in Copenhagen?", options: ["*traffic lights that change so cyclists don't stop", "parks along the river", "electric buses"] },
      { q: "Why is the Cheonggyecheon area cooler in summer?", options: ["*There's water and trees instead of a highway.", "It's underground.", "It has air conditioning."] },
      { q: "How long does the trip from the hills to the center take in Medellín now?", options: ["*about twenty minutes", "two hours", "five minutes"] },
      { q: "Who travels for free in Tallinn?", options: ["*registered residents", "everyone, including tourists", "only children"] },
      { q: "What is the main message of the article?", options: ["*People can change their cities.", "Big cities are terrible.", "Only Europe has good ideas."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. answers to problems: [solutions]\n2. took away: [removed]\n3. going up or down very sharply (a hill): [steep]\n4. something very important that you do first: a [priority]\n5. things that are built, like towers or bridges: [structures]\n6. people who ride bikes: [cyclists]",
    ),
  ]),

  section("Grammar: who, which, where, whose", [
    quiz("Notice the rule 🔍 Look: “the city where bikes are king” · “traffic lights which change…” · “people who lived there” · “a city whose poorest neighborhoods are on hills”", [
      { q: "We use “who” for…", options: ["*people", "things", "places"] },
      { q: "We use “where” for…", options: ["*places", "people", "times"] },
      { q: "“whose” means…", options: ["*his / her / its / their", "who is", "which"] },
    ]),
    table("relative-clauses"),
    choose(
      "Choose the right word.",
      "1. A pilot is a person [*who/which] flies planes. ✈️\n2. This is the café [*where/which] I met my best friend.\n3. I've lost the book [*that/who] you gave me.\n4. She's the singer [*whose/who's] song is number one.\n5. I'll never forget the day [*when/where] I got my first job.\n6. A library is a place [*where/which] you can borrow books. 📚\n7. Do you know the man [*who/which] lives upstairs?\n8. That's the girl [*whose/who] brother plays for our football team. ⚽",
    ),
    gaps(
      "Complete with who, which, where, whose or when.",
      "1. Copenhagen is a city [where] most people cycle.\n2. The Metrocable is a system [which/that] helps people get to work.\n3. People [who/that] live in Tallinn don't pay for buses.\n4. Medellín is a city [whose] poorest areas are on hills.\n5. 2005 was the year [when] the stream opened again.\n6. A pedestrian is someone [who/that] is walking.\n7. Is this the bus [which/that] goes to the airport?\n8. I visited the house [where] my grandmother was born.",
    ),
  ]),

  section("Grammar: With or without commas?", [
    table("non-defining"),
    choose(
      "Defining or non-defining? Choose.",
      "1. Almaty[*, which is in the south, /which is in the south] is famous for apples.\n2. The man [*who/, who] lives next door is a doctor.\n3. My mother[*, who is a teacher, /who is a teacher] loves reading.\n4. The bike [*that/, that] I bought last week is red.\n5. Singapore[*, which is very crowded, /that is very crowded] has many green spaces.\n6. The students [*who/, who] passed the exam got a certificate.",
    ),
    drag(
      "Complete the text about Laura's city.",
      "Manchester, [where] Laura was born, is a city in the north of England. It's the city [where] one of the world's oldest passenger railway stations was opened in 1830. Laura's grandfather, [who] worked on the trains, often told her stories about it. Manchester is also famous for music and football — it's a city [whose] bands are known all over the world. Laura misses the little café [which] was next to her school, and the friends [who] she grew up with. 🎸⚽",
      ["what", "whom", "it"],
    ),
    order("Make sentences.", [
      "This is the park where we met.",
      "She's the teacher who helped me most.",
      "I have a friend whose father is a pilot.",
      "Almaty, which is in the south, is beautiful.",
      "It's a city that never sleeps.",
    ]),
  ]),

  section("Listening: My city in three minutes", [
    tip("A long listening — about 3 minutes. Laura, Kenji and Aliya each describe their home city. First listen: *What does each person love about their city — and what don't they like?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio show. Three people describe their home cities.",
      "**Host:** Welcome to \"My City in Three Minutes\", the show where people tell us about the place they come from. Our first guest is Laura, who grew up in Manchester, England.\n\n**Laura:** Hi! Manchester is a city which people often think is grey and rainy. And yes, it rains a lot! ☔ But it's also a city where something is always happening. It's famous for football, of course, and for music — so many bands come from Manchester. My favorite place is the Northern Quarter, which is full of small cafés, record shops and street art. The thing I don't like is the traffic in the center. But the trams, which are quite new, help a lot.\n\n**Host:** Thank you, Laura. Next, Kenji, who's from Tokyo.\n\n**Kenji:** Tokyo is huge — the whole area has more people than some countries! But it's a city where everything works. The trains, which arrive exactly on time, are amazing. If a train is five minutes late, the company gives you a note for your boss! 😄 The place I miss most is a tiny noodle restaurant near my old office, where the owner, who must be eighty, still cooks every day. What I don't miss is the crowded morning trains. They're so full that people sometimes push you in!\n\n**Host:** Ha! And finally, Aliya, from Almaty.\n\n**Aliya:** Almaty is a city which has mountains right next to it. On a clear day you can see snowy peaks from the center. People say the name means \"father of apples\" — and wild apples really do come from these mountains! 🍎 My favorite place is Medeu, the big ice rink where I learned to skate as a child. In twenty minutes by car you're in the mountains. The thing I'd change is the air in winter — there's a lot of pollution when people heat their homes. But the city is working on it: there are more electric buses and new bike lanes every year.\n\n**Host:** One last question for all of you. A tourist has only one day in your city. Where should they go? Laura?\n\n**Laura:** Start with breakfast in the Northern Quarter, then visit the old railway station, which is now a science museum. In the evening, go to a small concert — there's live music almost every night.\n\n**Host:** Kenji?\n\n**Kenji:** Go to Shibuya Crossing, where hundreds of people cross the street at the same time. It looks crazy, but nobody hits anyone! Then find a quiet temple — Tokyo has many places where you can suddenly hear birds instead of cars.\n\n**Host:** And Aliya?\n\n**Aliya:** Take the cable car up Kok-Tobe hill, which has the best view of the city. Then go to the Green Bazaar, where you can try everything before you buy it. And if you still have energy, go up to Medeu for the mountain air.\n\n**Host:** Three very different cities! Which one would you like to visit? Send us a message!",
    ),
    quiz("Listen and choose.", [
      { q: "What is the Northern Quarter in Manchester full of?", options: ["*small cafés, record shops and street art", "big shopping centers", "football stadiums"] },
      { q: "What happens if a Tokyo train is five minutes late?", options: ["*The company gives you a note for your boss.", "The ticket is free.", "Nobody notices."] },
      { q: "What does Kenji miss most?", options: ["*a tiny noodle restaurant near his old office", "the crowded trains", "his flat"] },
      { q: "What is Medeu?", options: ["*a big ice rink", "a mountain", "a park"] },
      { q: "What would Aliya change about Almaty?", options: ["*the air pollution in winter", "the mountains", "the ice rink"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura says it rarely rains in Manchester.", false],
      ["The trams in Manchester are quite new.", true],
      ["Kenji likes the crowded morning trains.", false],
      ["The owner of the noodle restaurant is young.", false],
      ["You can see snowy mountains from the center of Almaty on a clear day.", true],
      ["Almaty has more electric buses and bike lanes every year.", true],
      ["Aliya says tourists should take the cable car up Kok-Tobe hill.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Laura: Manchester is a city [which] people often think is grey and rainy.\n2. Laura: My favorite place is the Northern Quarter, [which] is full of small cafés.\n3. Kenji: It's a city [where] everything works.\n4. Kenji: … where the owner, [who] must be eighty, still cooks every day.\n5. Aliya: Almaty is a city which has [mountains] right next to it.\n6. Aliya: … the big ice rink [where] I learned to skate as a child.",
    ),
  ]),

  section("Let's talk: My place", [
    text(
      "Describe a place 🏙️",
      "Choose a city, town or village you know well. Describe it to your teacher in 2 minutes:\n\n- What kind of place is it? *It's a city where… / which…*\n- A landmark or a favorite place: *There's a café where…*\n- People: *The people who live there are…*\n- What you'd change: *The thing which I'd change is…*\n- An idea from the reading that would work there\n\nYour teacher asks questions — then describes their place. 🗺️",
    ),
    tip("Encourage longer sentences with relative clauses — and at least one non-defining one with commas (*My town, which is near the mountains, …*). Note 3 good sentences and 2 mistakes."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "That's the woman ___ won the competition.", options: ["*who", "which", "where"] },
      { q: "It's a place ___ you can relax.", options: ["*where", "who", "whose"] },
      { q: "He's the boy ___ mother is a pilot.", options: ["*whose", "who's", "who"] },
      { q: "Astana, ___ is the capital, is in the north.", options: ["*which", "that", "where"] },
    ]),
    box(
      "Phrase of the day: the city that never sleeps",
      "🌃 **The city that never sleeps** — a famous nickname for New York, where shops, cafés and the subway work 24 hours a day.\n\n*Is your city a city that never sleeps — or does it go to bed early?* 😄",
    ),
  ]),

  homework(
    [
      video("Watch: defining and non-defining relative clauses.", "ppyws3GdZ2E"),
      choose(
        "Choose.",
        "1. A chef is a person [*who/which] cooks in a restaurant.\n2. This is the town [*where/which] I grew up.\n3. I like films [*that/who] make me laugh.\n4. Kenji, [*who/that] is from Tokyo, lives in Almaty.\n5. The girl [*whose/who's] bag was stolen called the police.\n6. Do you remember the summer [*when/where] we went to the sea?\n7. Tallinn, [*which/that] is the capital of Estonia, has free buses.\n8. The people [*who/whose] live next door are very friendly.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. We were stuck in a traffic [jam] for two hours.\n2. Our city needs more green [spaces].\n3. Cars aren't allowed — it's a [pedestrian] street.\n4. The Kok-Tobe hill is a famous Almaty [landmark].\n5. It's safer to cycle in a cycle [lane].\n6. Many people live in the [suburbs] and work in the center.",
      ),
      write("Write an article for a travel website (100+ words): “My city — a place where…”. Describe your city or town, its landmarks, the people, and one thing you'd change. Use at least five relative clauses (who, which, where, whose, when).", 100, {
        read: "*Example:* Shymkent, which is in the south of Kazakhstan, is a city where summer starts early and the markets are full of fruit. 🍉 My favorite place is the central park, where families walk in the evenings. The people who live here are friendly and love guests. There's a small café near my house whose owner makes the best lagman in the city. The thing which I'd change is the traffic…",
      }),
      record("Record a 1-minute “My city in one minute” for the radio show. 🎙️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
