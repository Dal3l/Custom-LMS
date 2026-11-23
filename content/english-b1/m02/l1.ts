import {
  box,
  choose,
  drag,
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

// 2.1 It had already started — G: Past Perfect (+ − ?, already / just / never / by the time / because). V: travel phrasal verbs (set off, run out of, turn back…). Say it right: 'd /d/ and had. S: tell the story of your worst (or luckiest) day. Main format: a reading (three "worst day" stories, ~380 words) + a story game. No video in class.
export default lesson("b1-2.1", "It had already started", () => [
  section("Warm-up: Bad timing", [
    box(
      "Today you will…",
      "- tell stories about bad (and lucky) days 🍀😩\n- use the Past Perfect: *When I got there, the train **had** already **left**!* ⏪\n- learn phrasal verbs for trips: *set off, run out of, turn back* 🧳",
    ),
    text(
      "Talk to your teacher.",
      "- Have you ever arrived somewhere just too late — for a train, a flight, a concert, an exam? What happened next? 🏃\n- Are you usually early, on time or late? Has being late ever cost you something important?\n- What's the luckiest thing that has ever happened to you by chance? 🍀",
    ),
    tip("Tell a short true story of your own about being late — use the Past Perfect naturally (*…and when I got to the gate, they'd closed it!*). Don't explain the grammar yet; just let the student hear it."),
  ]),

  section("Vocabulary: Trips that go wrong", [
    words("Phrasal verbs and phrases for trips", [
      ["set off", "🚗 start a journey", "We set off at 5 a.m."],
      ["run out of", "⛽ have none left", "We ran out of petrol in the middle of nowhere."],
      ["turn back", "↩️ go back the way you came", "The road was closed, so we had to turn back."],
      ["break down", "🚙💥 (a car) stops working", "The bus broke down on the motorway."],
      ["hold up", "🚦 make someone late", "Sorry — I got held up in traffic."],
      ["check in", "🛄 show your ticket and give your bags at an airport or hotel"],
      ["get lost", "🗺️ not know where you are"],
      ["miss (a train / a flight)", "🚆💨 arrive too late for it"],
      ["just in time", "⏱️ at the last possible moment", "We got to the gate just in time."],
      ["by mistake", "🙈 not on purpose", "I took the wrong bag by mistake."],
      ["it turned out (that)…", "💡 in the end, we learned that…", "It turned out that the shop had closed."],
      ["a nightmare", "😱 a very bad experience", "The trip was a total nightmare."],
    ]),
    match("Match the phrasal verbs and the meanings.", [
      ["set off", "start a journey"],
      ["run out of", "have none left"],
      ["turn back", "go back the same way"],
      ["break down", "stop working (a car)"],
      ["hold up", "make someone late"],
      ["check in", "give your bags at the airport"],
    ]),
    gaps(
      "Complete with one word.",
      "1. We set [off] early to avoid the traffic. 🌅\n2. Halfway up the mountain, the weather got worse and we had to turn [back]. 🏔️\n3. Our car broke [down], so we called a taxi.\n4. Sorry I'm late — I got held [up] at work.\n5. We ran out [of] water on the second day of the hike. 💧\n6. We got to the airport just in [time]. Phew!\n7. I took my sister's phone by [mistake] — they look the same!\n8. It turned [out] that my friend had already bought the tickets. 🎟️",
    ),
    quiz("Choose the right phrase.", [
      { q: "There was a big accident on the road, so we had to ___.", options: ["*turn back", "set off", "check in"] },
      { q: "We got to the station at 9:59. The train left at 10:00. We were ___!", options: ["*just in time", "by mistake", "held up"] },
      { q: "I didn't mean to send the message to my boss. I sent it ___.", options: ["*by mistake", "just in time", "on time"] },
      { q: "We thought the museum was open, but ___ that it was closed on Mondays.", options: ["*it turned out", "we ran out", "we broke down"] },
    ]),
    sort("Bad luck or good luck? Sort. 😩🍀", {
      "😩 bad luck": ["miss the last bus", "run out of petrol", "get lost in the rain", "the car breaks down", "lose your passport"],
      "🍀 good luck": ["get there just in time", "find your wallet again", "get a free upgrade", "meet a helpful stranger", "the flight leaves late — and you're late too"],
    }),
  ]),

  section("Reading: The worst day of my trip", [
    tip("Three short stories (~380 words in total). First reading: *Whose day was the worst?* Then the tasks. While checking answers, ask: *What happened first?* — this prepares the grammar."),
    trueFalse(
      "Read the stories. True or false?",
      [
        ["Kenji's train had left before he got to the platform.", true],
        ["Kenji had booked a seat on the next train.", false],
        ["Saule realized she had left her passport at the hotel.", true],
        ["Saule's flight left without her.", false],
        ["Ben's group turned back because the weather got worse.", true],
        ["Ben and his friends had checked the forecast before they set off.", false],
      ],
      {
        read: [
          "## 😩 The worst day of my trip",
          "*We asked our readers to tell us about the day their trip went completely wrong.*",
          "**🚆 Kenji, Japan → Italy.** \"I'd planned everything perfectly: Rome to Florence by fast train, then dinner with a friend. But the metro got stuck between two stations for twenty minutes. By the time I ran onto the platform, my train had already left — I could see it disappearing! I'd bought a cheap ticket that you couldn't change, so I had to buy a new one for the next train, which cost three times more. When I finally arrived in Florence, my friend had eaten without me. Lesson learned: always leave an extra hour.\"",
          "**🛂 Saule, Kazakhstan → Turkey.** \"We'd had a wonderful week in Antalya. On the last morning we checked out of the hotel, took a taxi and got to the airport early. Then, at the check-in desk, I opened my bag and froze. I'd left my passport in the hotel safe! My husband almost fainted. 😱 I jumped into another taxi, raced back, grabbed it and returned with ten minutes to spare. The woman at the desk had kept the check-in open for me. I've never been so grateful to a stranger.\"",
          "**🏔️ Ben, UK → Norway.** \"Four of us had wanted to climb this mountain for years. We set off at six in the morning in beautiful sunshine. Nobody had checked the forecast — big mistake. At about midday, thick clouds came in and it started to snow. We couldn't see the path, and one of my friends had run out of water. We decided to turn back. It took us five hours to get down, and we got lost twice. When we got to the car, we were frozen, but we were alive. It turned out that a storm had hit the mountain that afternoon.\"",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Kenji miss his train?", options: ["*The metro got stuck.", "He overslept.", "He went to the wrong station."] },
      { q: "Why did Kenji pay three times more?", options: ["*His cheap ticket couldn't be changed.", "He took a taxi to Florence.", "He bought first class."] },
      { q: "Who helped Saule?", options: ["*the woman at the check-in desk", "her husband", "the taxi driver"] },
      { q: "What was the biggest mistake of Ben's group?", options: ["*Nobody had checked the forecast.", "They set off too late.", "They forgot the map."] },
    ]),
    text(
      "Talk to your teacher.",
      "- Whose day was the worst, in your opinion? Why?\n- What would you do in Saule's situation? Would you go back for the passport or try something else?\n- Which lesson from these stories is the most useful for you? ✍️",
    ),
  ]),

  section("Grammar: Past Perfect", [
    quiz("Notice the rule 🔍 Look: “By the time I ran onto the platform, my train had already left.” “I'd left my passport in the hotel safe!”", [
      { q: "What happened first?", options: ["*The train left.", "Kenji ran onto the platform.", "They happened at the same time."] },
      { q: "How do we make the Past Perfect?", options: ["*had + 3rd form (left, eaten, bought)", "have + 3rd form", "was + -ing"] },
      { q: "Why do we use it?", options: ["*to go back to an earlier moment in a past story", "to talk about now", "to talk about the future"] },
    ]),
    table("past-perfect"),
    choose(
      "Choose the right form.",
      "1. When we got to the cinema, the film [*had already started/already started]. 🎬\n2. I [*had never flown/never fly] before my trip to Dubai, so I was nervous.\n3. She was upset because she [*had lost/has lost] her keys.\n4. By the time the police arrived, the thieves [*had escaped/escape].\n5. We [*had just sat/just sit] down when the phone rang.\n6. [*Had you met/Have you met] him before the party last week?\n7. I didn't recognize her — she [*had changed/changes] a lot.\n8. They were hungry because they [*hadn't eaten/didn't eat already] all day.",
    ),
    gaps(
      "Complete with the Past Perfect.",
      "1. When I got home, my brother [had eaten/'d eaten] all the pizza! 🍕 (eat)\n2. I didn't know the city because I [had never been/'d never been] there before. (never / be)\n3. She couldn't pay because she [had left/'d left] her wallet at home. (leave)\n4. By the time we arrived, everyone [had gone/'d gone] home. (go)\n5. The road was wet. It [had rained/'d rained] in the night. (rain)\n6. We [hadn't booked/had not booked] a table, so we couldn't get in. (not / book)\n7. [Had you finished] your work before you went out? (you / finish)\n8. He was nervous because he [had never spoken/'d never spoken] in public before. (never / speak)",
    ),
    choose(
      "Past Simple or Past Perfect? Choose.",
      "1. When the guests arrived, I [*had cooked/cooked] dinner, so we ate at once.\n2. When the guests arrived, I [*opened/had opened] the door and said hello.\n3. I [*called/had called] him as soon as I heard the news.\n4. She told me she [*had seen/saw] the film twice before.\n5. After we [*had finished/were finishing] dinner, we went for a walk.\n6. The plane [*landed/had landed] at 9 and we took a taxi to the hotel.\n7. I realized I [*had forgotten/forgot] my umbrella when it started to rain.\n8. It [*was/had been] a beautiful day, so we went to the beach.",
    ),
    drag(
      "Complete Saule's story.",
      "When we got to the airport, I realized I [had] left my passport at the hotel. I [took] a taxi back as fast as I could. Luckily, the cleaner [hadn't] found it yet — it was still in the safe. By the [time] I got back to the airport, everyone else [had] checked in. The woman at the desk [had] waited for me. I [was] so grateful!",
      ["have", "has", "takes", "while"],
    ),
    order("Make sentences.", [
      "The train had already left when we arrived.",
      "I had never seen snow before that winter.",
      "She was tired because she hadn't slept.",
      "By the time I got there, everyone had gone.",
      "Had you ever been to Italy before?",
    ]),
  ]),

  section("Say it right: I'd, she'd, we'd", [
    box(
      "🗣️ Say it right",
      "In speech, **had** is usually short: **'d** /d/.\n\n*I had left* → **I'd** left · *She had gone* → **she'd** gone · *We had eaten* → **we'd** eaten\n\nThe /d/ is very small — listen carefully! *I'd left* sounds almost like *I left*. The context helps you hear it.",
    ),
    quiz("Listen to your teacher. Which sentence do you hear?", [
      { q: "🔊 (teacher reads one)", options: ["*I'd lost my keys.", "I lost my keys."] },
      { q: "🔊 (teacher reads one)", options: ["*We'd seen the film.", "We've seen the film."] },
      { q: "🔊 (teacher reads one)", options: ["*She'd gone home.", "She's gone home."] },
      { q: "🔊 (teacher reads one)", options: ["*They'd left early.", "They left early."] },
    ]),
    tip("Read ONE sentence from each pair (sometimes the starred one, sometimes the other) and let the student choose. Then swap roles: the student reads, you choose. Explain that context helps: *When I got home, I…* → it must be *I'd…*"),
  ]),

  section("Let's talk: The story chain", [
    text(
      "Game: The worst day ever 🎲",
      "Make a story together with your teacher. Each person adds one sentence. Every sentence must use a new word from the list — and at least three sentences must use the Past Perfect!\n\n*set off · run out of · break down · get lost · turn back · just in time · by mistake · it turned out that*\n\n**Start:** *Last summer my friend and I set off on a road trip. We had planned everything — or so we thought…*",
    ),
    text(
      "Talk to your teacher.",
      "- Tell the story of your worst (or luckiest) day on a trip. What had happened before? How did it end? 🧳\n- Have you ever had to turn back — on a trip, or in life? Was it the right decision?\n- Do you prepare a lot before a trip, or do you prefer to improvise? What happened the last time?",
    ),
    tip("*If you have time:* “What had happened?” — you describe a final scene (*When I came into the kitchen, there was water everywhere and the cat was on the fridge*), the student explains with the Past Perfect: *Someone had left the tap on… the cat had…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "When I arrived, the meeting ___.", options: ["*had already started", "has already started", "already starts"] },
      { q: "She was sad because she ___ her job.", options: ["*had lost", "has lost", "loses"] },
      { q: "We ___ of petrol on the motorway.", options: ["*ran out", "set off", "turned back"] },
      { q: "at the last possible moment =", options: ["*just in time", "by mistake", "in time for"] },
    ]),
    box(
      "Phrase of the day: It wasn't my day",
      "😩 **It wasn't my day!** = everything went wrong today.\n\n*I missed the bus, spilled coffee on my shirt and lost my keys. It just wasn't my day!*",
    ),
  ]),

  homework(
    [
      video("Watch: the Past Perfect — 6 Minute Grammar.", "vyvGJrB7WNM"),
      choose(
        "Choose.",
        "1. When I woke up, my parents [*had already left/already leave] for work.\n2. I [*had never eaten/never eat] sushi before I went to Japan.\n3. We got to the shop, but it [*had closed/has closed].\n4. She [*was/had been] happy because she had passed her exam.\n5. He told me he [*had met/meets] her at university.\n6. By the time the film ended, I [*had fallen/fell already] asleep.\n7. [*Had they finished/Have they finished] dinner when you arrived?\n8. I didn't go to the party because I [*hadn't been/haven't been] invited.",
      ),
      gaps(
        "Join the sentences. Use the Past Perfect.",
        "1. The bus left. Then I got to the bus stop. → When I got to the bus stop, the bus [had left/'d left].\n2. I lost my ticket. Then I arrived at the station. → When I arrived at the station, I realized I [had lost/'d lost] my ticket.\n3. They finished the exam. Then the bell rang. → They [had finished/'d finished] the exam when the bell rang.\n4. She saw the film. Then she read the book. → She read the book after she [had seen/'d seen] the film.\n5. We didn't eat. Then we got to the restaurant. → We were hungry because we [hadn't eaten/had not eaten].\n6. Everyone went home. Then I arrived. → By the time I arrived, everyone [had gone/'d gone] home.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. We set [off] at dawn. 🌅\n2. The car broke [down] in the desert.\n3. We ran [out] of food on the third day.\n4. The path was dangerous, so we turned [back].\n5. Sorry I'm late, I got held [up].\n6. I took his umbrella by [mistake].",
      ),
      write("Write a story (100+ words) that begins: “It was the worst day of my trip…” Use at least three Past Perfect sentences and three words from this lesson.", 100, {
        read: "*Example:* It was the worst day of my trip to Georgia. I had planned to take the early bus to Kazbegi, but I had forgotten to set my alarm. 😴 By the time I got to the bus station, the bus had already left. I took a shared taxi instead — but halfway up the mountain road, it broke down! We waited for two hours in the cold. Eventually another car stopped… It turned out that the driver was the owner of my guesthouse!",
      }),
      record("Record your story: the worst or luckiest day of a trip. What had happened before? How did it end? (1–2 minutes) 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
