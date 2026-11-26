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
  sort,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 10.3 Happy cities — skills lesson and a DEBATE (standard format, as in the programme): "This house would close city centers to cars". No new grammar; review of relative clauses with prepositions / whose / which, and participle clauses. V: cities and transport (traffic congestion, air pollution, noise pollution, public transport, a cycle lane, car-free, pedestrianize, a commuter, urban sprawl, quality of life). Main format: "what makes a city happy?" sort + a long reading (cities that gave their streets back to people — the commuting paradox, Pontevedra, Oslo, ~570 words) + TED talk (Janette Sadik-Khan on New York's streets) + a long listening (a radio discussion: a city planner and Asel, who worries about her bakery, ~3:15) + the student's debate.
// Facts checked: Charles Montgomery, "Happy City" (2013); Alois Stutzer and Bruno Frey (2008), "the commuting paradox": people with longer commutes reported lower life satisfaction, and higher pay didn't make up for it; Pontevedra (Spain): from 1999 the mayor Miguel Anxo Fernández Lores closed most of the historic center to private cars; the center's population grew and traffic accidents fell sharply; Oslo removed several hundred parking spaces from its center in 2017–2019 and replaced them with benches, bike lanes and green spaces; in 2019 no pedestrians or cyclists were killed in traffic in Oslo; Janette Sadik-Khan, New York City's transportation commissioner (2007–2013), turned parts of Broadway around Times Square into pedestrian plazas in 2009. Characters: Asel (Asel's Bakery — two bakeries; here her first one is on a street in the center); Timur, a city planner, is new.
export default lesson("b2-10.3", "Happy cities", () => [
  section("Warm-up: What makes a city happy?", [
    box(
      "Today you will…",
      "- find out what makes people happy (and unhappy) in cities 🏙️😊\n- read about cities that gave their streets back to people 🚶🚲\n- debate: should city centers be closed to cars? ⚖️",
    ),
    sort("Does it make a city happier or unhappier? Sort. (Your opinion — discuss! 😄)", {
      "😊 happier": [
        "parks within walking distance",
        "safe cycle lanes",
        "streets with cafés and benches",
        "fast, cheap public transport",
      ],
      "😩 unhappier": [
        "a two-hour commute",
        "traffic noise all night",
        "streets without trees",
        "cars parked on the sidewalks",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- Which city in the world would you most like to live in? Why? 🌍\n- How do you get around your city? How long does it take?\n- What one thing would make your city happier?",
    ),
    tip("Collect the student's ideas for the debate — especially about traffic, parking and public transport in your own city."),
  ]),

  section("Vocabulary: Cities and transport", [
    words("Cities and transport", [
      ["traffic congestion", "🚗🚗🚗 too many cars on the roads"],
      ["air pollution — noise pollution", "🏭 dirty air — 🔊 too much noise"],
      ["public transport", "🚇 buses, trams, metro for everyone"],
      ["a cycle lane", "🚲 a part of the road only for bikes"],
      ["car-free", "🚫🚗 without cars"],
      ["pedestrianize", "🚶 close a street to cars, for people on foot"],
      ["a commuter", "🧑‍💼 a person who travels to work every day"],
      ["urban sprawl", "🏘️➡️ a city growing outwards into the countryside"],
      ["quality of life", "🌿 how good and comfortable people's lives are"],
      ["rush hour", "⏰ the time when roads and transport are busiest"],
    ]),
    match("Match.", [
      ["The main square was", "pedestrianized last year."],
      ["During rush hour,", "the metro is packed."],
      ["Air pollution is worst", "on cold, still winter days."],
      ["The city built 50 km", "of new cycle lanes."],
      ["Many commuters spend", "two hours a day in traffic."],
      ["Green spaces improve", "residents' quality of life."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Traffic [congestion] costs cities billions every year.\n2. The new tram line made [public] transport much faster.\n3. On Sundays, the old town is completely car-[free].\n4. Urban [sprawl] means people live further and further from the center.\n5. I can't sleep because of the [noise] pollution from the road.\n6. Thousands of [commuters] arrive in the city every morning.",
    ),
    quiz("Choose the right word.", [
      { q: "Avoid driving at rush ___.", options: ["*hour", "time", "moment"] },
      { q: "Many cities want to ___ their historic centers.", options: ["*pedestrianize", "commute", "sprawl"] },
      { q: "Parks and clean air improve the quality of ___.", options: ["*life", "living", "city"] },
      { q: "It's safer to ride in a cycle ___.", options: ["*lane", "line", "way"] },
    ]),
  ]),

  section("Reading: Streets for people", [
    tip("A long text (~570 words). First reading — 5 minutes: *What happened in Pontevedra and Oslo?* Then the tasks. This is the EVIDENCE for today's debate — ask the student to note facts for both sides."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["People with long commutes usually say they are just as happy as others.", false],
        ["Pontevedra closed most of its center to private cars in 1999.", true],
        ["After the change, people moved out of Pontevedra's center.", false],
        ["Oslo replaced parking spaces with benches, bike lanes and greenery.", true],
        ["In 2019, no pedestrians or cyclists died in traffic in Oslo.", true],
        ["The writer says there are no problems with car-free centers.", false],
      ],
      {
        read: [
          "## 🚶 Streets for people",
          "Ask people what would make them happier, and they'll often say \"more money\" or \"a bigger home\". Ask them what actually makes their days worse, and many will describe their journey to work. In 2008, the Swiss economists Alois Stutzer and Bruno Frey studied thousands of commuters and found what they called the commuting paradox. People with longer commutes reported lower satisfaction with their lives — and the higher salaries or bigger houses for which they were commuting didn't make up for it. Time spent sitting in traffic, it seems, is time stolen from family, friends, sleep and exercise.",
          "The Canadian writer Charles Montgomery, whose book Happy City appeared in 2013, argues that the way we design cities shapes our happiness more than we realize. For decades, he says, cities were built around one goal: moving cars quickly. Wide roads cut neighborhoods in two, parking took up space that could have been parks, and walking became unpleasant and dangerous. Streets designed only for traffic, he says, also make it harder to meet neighbors — and our relationships with other people are one of the strongest predictors of happiness. Now, a growing number of cities are trying something different.",
          "One of the most famous examples is Pontevedra, a small city in north-west Spain. In 1999, having been elected on a promise to change the city, its new mayor closed most of the historic center to private cars. Delivery vans could still enter at certain times, and residents could still reach their garages, but the streets were handed back to pedestrians. Many shopkeepers were furious at first, convinced that their customers would disappear. Instead, the center became busier. People who had moved to the suburbs began moving back, children started walking to school alone, and traffic accidents fell sharply.",
          "Oslo, the capital of Norway, took a different approach. Rather than banning cars completely, between 2017 and 2019 the city removed several hundred parking spaces from its center, replacing them with benches, bike lanes, playgrounds and plants. Driving into the center became slower and less convenient, so many people simply stopped doing it. At the same time, the city invested in frequent public transport, so that people had a real alternative to the car. In 2019, not a single pedestrian or cyclist was killed in traffic in the whole city — a result that made headlines around the world.",
          "Not everyone is convinced, of course. Critics point out that closing centers to cars can be difficult for older people and people with disabilities, unless there is excellent public transport. Some small businesses, especially those that depend on customers driving in from far away, say they have lost money. And a car-free center only works if the rest of the city has good alternatives; otherwise, traffic simply moves to the surrounding streets.",
          "So the question for cities is not only \"cars or no cars?\" but \"what are our streets for?\" Are they corridors for moving vehicles as fast as possible, or places in which people live, meet, play and shop? Cities that have chosen the second answer report that, after the first difficult year, very few residents want to go back. As one shopkeeper in Pontevedra put it: \"Cars don't buy anything. People do.\" 🌳",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is the “commuting paradox”?", options: ["*Long commutes make people less satisfied, even with higher pay.", "Commuters are happier than others.", "Short commutes are more expensive."] },
      { q: "What does Montgomery say cities were built around?", options: ["*moving cars quickly", "parks and gardens", "public transport"] },
      { q: "How did Pontevedra's shopkeepers feel at first?", options: ["*furious — they expected to lose customers", "delighted", "they didn't notice"] },
      { q: "How was Oslo's approach different?", options: ["*It removed parking spaces instead of banning cars completely.", "It banned all cars in the whole city.", "It built more roads."] },
      { q: "What is one criticism of car-free centers?", options: ["*They can be hard for older and disabled people without good transport.", "They make streets too quiet.", "They are too cheap."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. compensate for: make [up] for\n2. given to someone: [handed] back\n3. very angry: [furious]\n4. very quickly and strongly (to fall): [sharply]\n5. easy and comfortable to use: [convenient]\n6. long passages that connect places: [corridors]",
    ),
  ]),

  section("Video: Giving streets back to people", [
    video("Watch: TED — Janette Sadik-Khan, New York's streets? Not so mean any more.", "LujWrkYsl64"),
    text(
      "After the video: talk about it.",
      "- What did New York do in Times Square? What happened next?\n- Which idea from the video could work in your city? Which couldn't? 🤔\n- Which side of the debate does the video help more?",
    ),
    tip("Sadik-Khan was New York's transportation commissioner. Ask the student to note one fact as evidence for the debate, and to describe changes with participle clauses: *Closed to cars in 2009, Times Square…*"),
  ]),

  section("Listening: Bread or bikes?", [
    tip("A long listening — about 3 minutes 15 seconds. The city is discussing a plan to close part of the center to cars. A radio show invites Timur, a city planner, and Asel, whose first bakery is in the center. First listen: *Where do they agree?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio discussion about closing the city center to cars.",
      "**Host:** Good morning. The city has proposed closing several streets in the center to private cars, starting next spring. With me are Timur, a city planner who worked on the proposal, and Asel, who owns a bakery on one of those streets. Timur, why do this?\n\n**Timur:** Three reasons. First, air pollution. In winter, our air is among the worst in the region, and traffic is a big part of the problem. Second, safety. The center has some of the most dangerous crossings in the city. And third, quality of life. Streets on which people can walk, sit and talk make a city a better place to live.\n\n**Host:** Asel, you've been worried about the plan.\n\n**Asel:** I have. My first bakery is on one of those streets. Many of my older customers drive in on Saturday mornings, buy bread for the whole family and drive home. If they can't park nearby, will they still come? I also get flour delivered three times a week, which is heavy work. If the vans can't reach my door, what do I do?\n\n**Timur:** Those are completely fair questions, and they've shaped the plan. Delivery vans will be allowed in before eleven in the morning. Residents and people with disabilities will still have access. And we're building two new parking areas just outside the zone, with a free electric bus every ten minutes.\n\n**Asel:** That helps with deliveries. But what about the customers? A bakery isn't like a shopping center. People come for ten minutes.\n\n**Timur:** I understand. But the evidence from other cities is quite encouraging. In Pontevedra in Spain, shopkeepers were furious at first, but footfall in the center increased. In many European cities, local shops did better, not worse, because people walking spend more time and come more often. Drivers drive past. Pedestrians stop.\n\n**Asel:** Maybe. Although Almaty isn't Spain. We have winters of minus fifteen. Not many people want to walk for twenty minutes in the snow to buy a loaf.\n\n**Timur:** That's true, and that's why the bus is so important. If public transport isn't good, the plan won't work. We know that.\n\n**Host:** Asel, is there anything about the plan you like?\n\n**Asel:** Honestly, yes. The noise. Having worked on that street for years, I've never been able to keep the door open in summer because of the traffic. If the street were quiet, I could put tables outside. People could have coffee and a pastry in the sun. That would be lovely.\n\n**Timur:** That's exactly what we hope will happen.\n\n**Asel:** But I'd like a promise. If the first year goes badly for small businesses, the city should be willing to change the plan, not just say \"give it time\".\n\n**Timur:** That's fair. The plan includes a review after twelve months, and shop owners will be part of it.\n\n**Host:** So, Asel, would you vote for it?\n\n**Asel:** With the bus, the deliveries and the review? Probably yes. But I'll be watching very carefully.\n\n**Host:** Timur, Asel, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "What are Timur's three reasons for the plan?", options: ["*air pollution, safety and quality of life", "money, tourism and noise", "parking, speed and cost"] },
      { q: "What is Asel's first worry?", options: ["*Older customers who drive may stop coming.", "The rent will rise.", "Tourists will take her tables."] },
      { q: "What will help with deliveries?", options: ["*Vans can enter before eleven in the morning.", "Deliveries will be by bike.", "Asel must move her bakery."] },
      { q: "What does Asel like about the plan?", options: ["*Less noise — she could put tables outside.", "Free parking.", "Fewer customers."] },
      { q: "What promise does Asel want?", options: ["*a review of the plan after the first year", "lower taxes", "a free parking space"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The plan would start next spring.", true],
      ["People with disabilities would lose all access to the zone.", false],
      ["The new electric bus will run every ten minutes.", true],
      ["Timur says pedestrians tend to stop at shops more than drivers.", true],
      ["Asel thinks winter weather could be a problem.", true],
      ["Asel says she will definitely vote against the plan.", false],
    ]),
    choose(
      "Review: module 10 grammar. Choose.",
      "1. Streets [*on which/which on] people can walk make a city better.\n2. Asel, [*whose/who's] bakery is in the center, was worried.\n3. Flour is delivered three times a week, [*which/what] is heavy work.\n4. [*Having worked/Worked] on that street for years, she knows the problem.\n5. The two parking areas, [*built/building] just outside the zone, will be free.\n6. Shop owners, [*most of whom/most of them] were worried, will be part of the review.",
    ),
  ]),

  section("Debate: getting ready", [
    tip("TEACHER NOTES — the fourth debate of the course, STANDARD format (as in 5.3 and 8.3; after 9.4 the student knows the full format too — you may add cross-examination if time allows). Times: motion and sides 1 min · preparation 5–7 min · openings 2 min each · rebuttal prep 1 min · rebuttals 1.5 min each · questions 2–3 min (answers up to 20 sec) · closings 1 min each · verdict 3 min. Make the motion local: \"…would close OUR city center to cars\" — real streets make better arguments. Use the scoring sheet from 9.4 (/30)."),
    table("argument-language"),
    sort("Which side does each argument support? Sort. 🧩", {
      "👍 for (close the center to cars)": [
        "Less air pollution and noise in the center.",
        "Fewer traffic accidents, especially for pedestrians.",
        "Pedestrians tend to stop at local shops more often.",
        "In Pontevedra and Oslo, residents didn't want to go back.",
      ],
      "👎 against": [
        "It can be hard for older and disabled people.",
        "Some small businesses depend on customers who drive.",
        "Traffic may just move to the surrounding streets.",
        "In very cold winters, walking and cycling are harder.",
      ],
    }),
    drag(
      "Build an argument with PEEL. Complete.",
      "[Point]: We should close the center to cars, because it makes streets [safer] for everyone.\n[Evidence]: In 2019, after Oslo removed hundreds of parking spaces, not a single pedestrian or cyclist was [killed] in traffic in the whole city.\n[Explain]: This shows that fewer cars in the center can [save] lives.\n[Link]: That's why we [urge] you to support the motion.",
      ["dangerous", "faster", "beg"],
    ),
  ]),

  section("Your debate", [
    text(
      "⚖️ This house would close the city center to cars",
      "**1. Motion and sides** (1 min) — coin toss. Choose a real city: yours!\n\n**2. Preparation** (5–7 min) — 2–3 arguments with PEEL. Use evidence from the reading, the video and the radio discussion. Steelman the other side.\n\n**3. Opening speeches** (2 min each).\n\n**4. Rebuttal prep** (1 min) → **Rebuttals** (1.5 min each).\n\n**5. Questions** (2–3 min, answers up to 20 seconds).\n\n**6. Closing speeches** (1 min each, no new arguments).\n\n**7. Verdict** (3 min) — the scoring sheet from 9.4.\n\n💡 Use module 10 grammar: *a center in which… shop owners, most of whom… Having seen the results in Oslo, …*",
    ),
    tip("Feedback order: 1) the main clash, 2) the strongest argument on each side, 3) the best rebuttal, 4) two language points. Next debate: the final one in 12.4."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Too many cars on the roads = traffic ___", options: ["*congestion", "sprawl", "rush"] },
      { q: "To close a street to cars = to ___ it", options: ["*pedestrianize", "commute", "pollute"] },
      { q: "People with long commutes were ___ satisfied with their lives.", options: ["*less", "more", "equally"] },
      { q: "“Cars don't buy anything. ___ do.”", options: ["*People", "Shops", "Bikes"] },
    ]),
    box(
      "Phrase of the day: the city is not a concrete jungle, it is a human zoo",
      "🏙️ A famous line by the zoologist Desmond Morris (1969): cities are full of people living in an unnatural, crowded environment — so we must design them for humans.\n\n*Is your city designed for people or for cars?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The new tram has improved [public] transport.\n2. The city built a cycle [lane] along the river.\n3. The main street was [pedestrianized] in 2020.\n4. I always avoid driving at rush [hour].\n5. Trees help reduce air [pollution].\n6. Long commutes can reduce your quality of [life].",
      ),
      match("Match the debate moves and the phrases.", [
        ["introduce", "Tonight I'll argue that…, for two reasons."],
        ["evidence", "Take Oslo, for example."],
        ["steelman", "My opponent makes a fair point: …"],
        ["rebut", "My opponent claims that…, but…"],
        ["cross-examine", "Can you give one example?"],
        ["sum up", "To sum up, the main clash tonight was…"],
      ]),
    ],
    "Homework: Vocabulary and debate language",
  ),
  homework(
    [
      write("Write an essay (140–190 words): “City centers should be closed to cars.” Do you agree? Give two arguments with evidence and answer one argument from the other side. Think about your own city.", 140, {
        read: "Plan: 1) introduction — the question and your opinion · 2) argument 1 (PEEL) · 3) argument 2 (PEEL) · 4) the other side's argument and your answer · 5) conclusion.",
      }),
      record("Record your closing speech for today's debate (about 1 minute). ⚖️🎤", 75),
      record("Record a 1-minute answer: “What would make your city a happier place?” 🎙️🏙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
