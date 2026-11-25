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

// 2.1 I'd been walking for hours — G: Past Perfect Continuous (had been doing) for an activity that went on up to a moment in the past, and compared with Past Perfect Simple (had done — a finished result, how many). V: travel trouble (get stranded, run out of, break down, take a wrong turn…). S: tell a "everything went wrong" travel story. Main format: an emoji quiz (travel disasters) + a long reading (three readers' travel disasters, ~560 words) + a long listening (Leo tells Dana about a road trip to a festival, ~3:15). Video at home.
export default lesson("b2-2.1", "I'd been walking for hours", () => [
  section("Warm-up: Guess the travel disaster", [
    box(
      "Today you will…",
      "- tell travel stories where everything goes wrong 🧳💥\n- say what had been happening before something happened: *We'd been driving for six hours when the car broke down.* ⏳\n- laugh about disasters — afterwards! 😅",
    ),
    quiz("Guess the travel disaster from the emojis! ✈️", [
      { q: "⏰😴✈️💨", options: ["*missed the flight", "lost the luggage", "the hotel was full"] },
      { q: "🧳❓🛄", options: ["*lost luggage", "a delayed train", "a broken phone"] },
      { q: "🚗⛽0️⃣🏜️", options: ["*ran out of gas in the middle of nowhere", "got a speeding ticket", "took the wrong road"] },
      { q: "🏨🛏️❌😱", options: ["*the hotel had no room for us", "the room was too small", "we forgot to pay"] },
      { q: "⛺🌧️🌊", options: ["*the tent got flooded", "we couldn't find the campsite", "we forgot the tent"] },
      { q: "🛂📕🏠", options: ["*left the passport at home", "lost a boarding pass", "got a visa"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these disasters has happened to you (or someone you know)? What happened next?\n- Who's the best person to travel with when things go wrong? And the worst? 😄\n- Why do we often remember bad trips better than perfect ones?",
    ),
    tip("Let the student tell a short story — don't correct yet. Note any sentences where the Past Perfect Continuous would be natural (*I'd been waiting for…*) and come back to them in the grammar section."),
  ]),

  section("Vocabulary: When travel goes wrong", [
    words("Travel trouble", [
      ["set off", "🚶 start a journey", "We set off at 5 a.m. to avoid the traffic."],
      ["get stranded", "🏝️ be stuck somewhere with no way to leave"],
      ["run out of", "⛽ use all of something, have none left"],
      ["break down", "🚗💥 (a car, a machine) stop working"],
      ["take a wrong turn", "↪️ go the wrong way"],
      ["get stuck", "🚧 not be able to move", "We got stuck in traffic for three hours."],
      ["miss a connection", "🔁 not catch the next plane or train"],
      ["be diverted", "🔀 (a flight) go to a different airport"],
      ["turn back", "🔙 return the way you came"],
      ["be overbooked", "🎫 (a flight, a hotel) have more bookings than places"],
      ["a detour", "🛣️ a longer way round because the usual road is closed"],
      ["a breathtaking view", "🏔️ an extremely beautiful view"],
    ]),
    match("Match.", [
      ["We got", "stranded at the airport overnight."],
      ["Our car broke", "down in the desert."],
      ["We ran", "out of water halfway up the mountain."],
      ["Our flight was", "diverted to another city because of fog."],
      ["The road was closed, so we took", "a long detour."],
      ["The weather got worse, so we turned", "back."],
    ]),
    gaps(
      "Complete with the right form of a word from the list.",
      "1. We [set] off before sunrise to see the mountains.\n2. The hotel was [overbooked], so they sent us to another one.\n3. We took a wrong [turn] and ended up in a field full of cows. 🐄\n4. Because our first flight was late, we [missed] our connection.\n5. We got [stuck] in the snow for six hours.\n6. From the top, the view was absolutely [breathtaking].",
    ),
  ]),

  section("Reading: Holidays from hell", [
    tip("A long text (~560 words). First reading — 5 minutes: *Which story is the worst — and which ends best?* Then the tasks. Ask the student to underline every *had been + -ing*."),
    trueFalse(
      "Read the readers' stories. True or false?",
      [
        ["Marta had been planning her trip for a long time.", true],
        ["Marta's luggage arrived on the first day of the holiday.", false],
        ["Callum and his friends had been driving for a long time when they ran out of fuel.", true],
        ["A farmer drove Callum's group to the next town.", true],
        ["Aigul had been hiking for two days before the storm started.", true],
        ["Aigul's group continued to the top of the mountain.", false],
        ["All three writers say they would never travel again.", false],
      ],
      {
        read: [
          "## 🧳 Holidays from hell: your stories",
          "*Last month we asked readers to tell us about their worst trips. We got hundreds of replies — here are three of our favorites.*",
          "**✈️ Marta, 29: “The suitcase that saw the world”**\nI'd been saving for this trip to Lisbon for almost a year, and I'd been planning every detail: restaurants, museums, even which tram to take. When I landed, I waited at the luggage belt for forty minutes. Everybody else had already left when a man from the airline told me my suitcase had been sent to Lima — in Peru! For the first three days, I wore the same jeans and a T-shirt I had bought at the airport. My suitcase finally arrived on the last morning, just as I was leaving for the airport. The funny thing is, I'd been worrying for weeks about losing my passport. I never even thought about the suitcase.",
          "**🚐 Callum, 34: “The shortcut”**\nFour of us had rented a van to drive across Scotland. We'd been driving for about seven hours, and everyone was tired, when my friend Jack decided to take a “shortcut” through the hills. The road got narrower and narrower, and our phones had stopped working an hour before. Then the engine started making a strange noise. We'd been so busy arguing about the map that nobody had noticed the fuel light. We ran out of fuel on a tiny road with sheep on both sides and no houses in sight. We had been walking for almost two hours when a farmer on a tractor found us. He drove us to the nearest town and refused to take any money. Now, every Christmas, we send him a card. Jack is no longer allowed to choose the route.",
          "**🏔️ Aigul, 22: “The mountain that said no”**\nMy friends and I had been preparing for this hike in the Tian Shan mountains for months. We had been walking for two days and we were only a few hours from the top when the weather suddenly changed. One minute the sky was blue; the next, it was snowing so hard that we couldn't see each other. Our guide, who had been climbing these mountains for twenty years, didn't hesitate: we turned back. I was so disappointed that I cried. On the way down, though, the clouds opened for a few minutes and we saw a view so breathtaking that nobody said a word. Later we heard that another group had continued to the top that day and had to be rescued. I'm very glad we listened to our guide.",
          "**What we learned.** Reading all your stories, we noticed something interesting. The worst trips often become the best stories. Psychologists say this happens because difficult experiences are emotional and unusual, so our brains remember them in more detail than ordinary, perfect days. A sunny beach holiday where nothing went wrong is lovely — but in ten years, which trip will you still be talking about? Marta now packs a change of clothes in her hand luggage, Callum always checks the fuel, and Aigul is planning to try the mountain again next summer. As one reader wrote: “Disasters are just adventures that haven't finished yet.” 🌄",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What had Marta been worrying about before the trip?", options: ["*losing her passport", "losing her suitcase", "missing her flight"] },
      { q: "Why hadn't anyone noticed the fuel light in Callum's van?", options: ["*They had been arguing about the map.", "They had been sleeping.", "The light didn't work."] },
      { q: "Why did Aigul's group turn back?", options: ["*The weather changed suddenly.", "Someone was hurt.", "They had run out of food."] },
      { q: "According to psychologists, why do we remember bad trips well?", options: ["*They're emotional and unusual.", "They're longer than good trips.", "We take more photos."] },
      { q: "What does the reader's quote at the end mean?", options: ["*Bad experiences can turn into good stories later.", "Never travel without a plan.", "Adventures are dangerous."] },
    ]),
    gaps(
      "Find words in the stories.",
      "1. a quicker way to get somewhere: a [shortcut]\n2. not wide: [narrow/narrower]\n3. stop for a moment because you're not sure: [hesitate]\n4. said no, didn't accept: [refused]\n5. sad because something didn't happen as you hoped: [disappointed]\n6. the bags you carry onto a plane: hand [luggage]",
    ),
  ]),

  section("Grammar: Past Perfect Continuous", [
    quiz("Notice the rule 🔍 Look: “We'd been driving for seven hours when Jack decided to take a shortcut.” · “Everybody else had already left.”", [
      { q: "“We'd been driving for seven hours” describes…", options: ["*an activity that continued up to a moment in the past", "a short finished action", "a habit in the present"] },
      { q: "How do we make the Past Perfect Continuous?", options: ["*had been + -ing", "have been + -ing", "was + -ing"] },
      { q: "“Everybody had already left” (Past Perfect Simple) focuses on…", options: ["*a finished result before another past moment", "how long an activity lasted", "the present"] },
    ]),
    table("ppc-past"),
    choose(
      "Past Perfect Simple or Continuous? Choose.",
      "1. Her eyes were red — she [*had been crying/had cried] all morning.\n2. By the time we arrived, they [*had eaten/had been eating] all the cake. 🎂\n3. We [*had been waiting/had waited] for two hours when the bus finally came.\n4. He was tired because he [*had been working/had worked] since 6 a.m.\n5. I [*had visited/had been visiting] Rome three times before I moved there.\n6. The ground was wet. It [*had been raining/had rained] all night.\n7. She [*had known/had been knowing] him for years before they got married.\n8. When I found my keys, I [*had been looking/had looked] for them for an hour!",
    ),
    gaps(
      "Complete with the Past Perfect Continuous.",
      "1. We [had been walking] (walk) for hours, so our legs hurt.\n2. How long [had you been learning] (you / learn) English before you went to London?\n3. They [had been arguing] (argue) — I could see it on their faces.\n4. She [hadn't been sleeping/had not been sleeping] (not sleep) well, so she looked exhausted.\n5. I [had been saving] (save) for the trip for a year.\n6. The engine [had been making] (make) a strange noise for days before it broke down.\n7. [Had they been living] (they / live) there long when the earthquake happened?\n8. He [had been playing] (play) the guitar for ten years before he joined a band. 🎸",
    ),
    drag(
      "Complete Aigul's message.",
      "We [had] been walking for two days when the storm started. Our guide, who had [been] climbing these mountains for twenty years, decided to turn back. I was really upset, because we had been [preparing] for months. But on the way down we saw the most amazing view. Later we heard that another group [had] continued and had to be rescued. We were lucky — we had [listened] to our guide! Next summer, I'm going to [try] again. 🏔️",
      ["have", "being", "prepared"],
    ),
    order("Make sentences.", [
      "We had been driving for hours.",
      "She had been crying when I found her.",
      "How long had you been waiting?",
      "They hadn't been sleeping well.",
      "I had been saving for a new bike.",
    ]),
    tip("Say it right: *had been* is weak and fast — /həd bɪn/, often *'d been*: *We'd been driving* /wiːd bɪn/. Drill the order sentences with contractions."),
  ]),

  section("Listening: The road trip", [
    tip("A long listening — about 3 minutes 15 seconds. Leo tells Dana about a road trip to a music festival. First listen: *Did they get to the festival in the end?* Second listen: the tasks."),
    ...listening(
      "Listen to Leo telling Dana about a road trip that went wrong.",
      "**Dana:** Leo! You're back! How was the festival?\n\n**Leo:** The festival was amazing. Getting there was a disaster.\n\n**Dana:** Oh no. What happened? Weren't you driving with your bandmates?\n\n**Leo:** Yes, the four of us in Marat's old car. We'd been planning this trip for months. We'd even been practicing a few songs, because there's an open stage on the last night. So we set off at five in the morning, full of energy.\n\n**Dana:** And?\n\n**Leo:** And we'd been driving for about three hours when the car started making this horrible noise. Like a cat in a washing machine.\n\n**Dana:** That doesn't sound good.\n\n**Leo:** It wasn't. Marat said, \"Don't worry, it's always done that.\" Ten minutes later, there was smoke coming out of the engine. We were in the middle of the steppe — no houses, no gas station, nothing.\n\n**Dana:** Seriously? What did you do?\n\n**Leo:** Well, first we argued. Then we tried to call for help, but we'd been streaming music all the way, so all our phones were almost dead. Mine had three percent.\n\n**Dana:** Classic.\n\n**Leo:** I know. Anyway, with my last three percent I found a garage about twenty kilometers away. They said they could send someone, but not until the afternoon. So we sat by the road for four hours. It was thirty-five degrees and we'd run out of water by eleven.\n\n**Dana:** Leo, that's actually dangerous.\n\n**Leo:** I know that now. We tried to stop cars, but for the first hour nobody even slowed down. Marat started writing \"HELP — MUSICIANS\" on a piece of cardboard with a marker. Then he added a drawing of a guitar, because he said people trust musicians.\n\n**Dana:** Did it work?\n\n**Leo:** Not really. Two cars slowed down, looked at us and drove faster. Four tired men by the road with a sign — I don't blame them. Luckily, a truck driver stopped. He'd been driving all night, but he still gave us two big bottles of water and some bread. He wouldn't take any money. He just said, \"Play a song for me at the festival.\"\n\n**Dana:** That's lovely. So the mechanic came?\n\n**Leo:** Eventually. He looked at the engine for about ten seconds and said, \"Who's been driving this car without oil?\" Everyone looked at Marat.\n\n**Dana:** Oh, Marat!\n\n**Leo:** He hadn't checked it for a year. Anyway, the mechanic towed us to the garage, and we had to wait until the next morning for a part. We slept in the car — four grown men and two guitars.\n\n**Dana:** So you missed the first day of the festival.\n\n**Leo:** We missed the first day, yes. But we arrived just in time for the second night, and on the last night we played at the open stage. Before the first song, I told the story of the truck driver and said, \"This one's for you, wherever you are.\"\n\n**Dana:** Stop it, I'm going to cry.\n\n**Leo:** And here's the crazy part. After we finished, a man came to the stage. It was him! The truck driver! He'd been listening to the festival on the radio in his truck, and he'd heard us. He'd been driving nearby, so he came.\n\n**Dana:** No way! That's like a film!\n\n**Leo:** I know. So, honestly, it was the worst trip of my life — and the best story I've ever had.\n\n**Dana:** And Marat?\n\n**Leo:** Marat now checks the oil every single morning. Even when he isn't driving anywhere.",
    ),
    quiz("Listen and choose.", [
      { q: "Why had the band been practicing songs?", options: ["*They wanted to play at the open stage.", "They had a paid concert.", "They were recording an album."] },
      { q: "Why couldn't they call for help easily?", options: ["*Their phones were almost dead.", "There was no signal at all.", "They had left their phones at home."] },
      { q: "What did the truck driver ask for?", options: ["*a song for him at the festival", "some money", "a lift to the festival"] },
      { q: "What was wrong with the car?", options: ["*There was no oil in the engine.", "It had run out of gas.", "A tire was flat."] },
      { q: "How did the truck driver hear the band?", options: ["*on the radio in his truck", "on social media", "Leo called him"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["They set off at five in the morning.", true],
      ["Marat was worried about the noise from the start.", false],
      ["They had run out of water by eleven o'clock.", true],
      ["The mechanic arrived immediately.", false],
      ["They slept in a hotel near the garage.", false],
      ["They missed the first day of the festival.", true],
    ]),
    gaps(
      "Complete what Leo said. Listen again if you need.",
      "1. We'd been [planning] this trip for months.\n2. We'd been [driving] for about three hours when the car started making this horrible noise.\n3. We'd been [streaming] music all the way, so all our phones were almost dead.\n4. We'd run [out] of water by eleven.\n5. He'd been [driving] all night, but he still gave us water.\n6. He'd been [listening] to the festival on the radio.",
    ),
  ]),

  section("Let's talk: My worst journey", [
    text(
      "Tell a travel story 🗺️",
      "Tell your teacher about a journey that went wrong (real — or invented, your teacher must guess!). 2–3 minutes.\n\n- **Background:** *We'd been planning… / We'd been traveling for… when…*\n- **The problem:** *Suddenly… / The next thing we knew…*\n- **What you did:** *We had to… / Luckily…*\n- **The ending:** *In the end… / Looking back, …*\n\nUse at least three verbs from the travel-trouble list. Your teacher asks two questions — then tells their own story. 🎒",
    ),
    tip("Real or invented? The teacher guesses at the end — this keeps both people listening. In a group: story chain — each student adds one sentence with *had been + -ing* or a travel phrase."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "We ___ for an hour when the train finally arrived.", options: ["*had been waiting", "have been waiting", "were waiting"] },
      { q: "By 10 p.m. she ___ three chapters.", options: ["*had written", "had been writing", "has written"] },
      { q: "Our car broke ___ on the motorway.", options: ["*down", "up", "out"] },
      { q: "We ran ___ of petrol in the middle of nowhere.", options: ["*out", "off", "away"] },
    ]),
    box(
      "Phrase of the day: it's not about the destination, it's about the journey",
      "🛣️ The *journey* — what happens on the way — can matter more than where you're going. Leo would agree!\n\n*Do you agree? Tell me about a journey that was better than the place you went to.*",
    ),
  ]),

  homework(
    [
      video("Watch: mmmEnglish — Past Continuous and Past Perfect Continuous.", "S70AtMUUAns"),
      choose(
        "Choose.",
        "1. I was out of breath because I [*had been running/had run]. 🏃\n2. She [*had finished/had been finishing] her report by six.\n3. We [*had been living/had lived] in Almaty for five years when we decided to move.\n4. How many countries [*had you visited/had you been visiting] before you were 20?\n5. His hands were dirty — he [*had been repairing/had repaired] the bike.\n6. When the police arrived, the thieves [*had already escaped/had already been escaping].\n7. They [*had been dating/had dated] for three years before they got engaged.\n8. I didn't recognize her — she [*had cut/had been cutting] her hair very short.",
      ),
      gaps(
        "Complete with the Past Perfect Simple or Continuous.",
        "1. We [had been driving] (drive) for hours when we finally saw the sea. 🌊\n2. By the end of the trip, we [had visited] (visit) six cities.\n3. He was angry because he [had been waiting] (wait) for forty minutes.\n4. I [had never seen] (never / see) snow before I went to Moscow.\n5. She [had been studying] (study) all night, so she fell asleep in class.\n6. They [had lost] (lose) their tickets, so they couldn't get on the train.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      sort("Past Perfect Simple or Continuous? Sort the sentences. 🧩", {
        "✅ had done (result / how many)": [
          "We had visited three cities.",
          "She had already left.",
          "I had read the book twice.",
          "They had finished the project.",
        ],
        "⏳ had been doing (how long / activity)": [
          "We had been traveling for weeks.",
          "She had been crying.",
          "I had been reading for hours.",
          "They had been working all night.",
        ],
      }),
      write("Write an article for a travel magazine (140–190 words): “A journey I'll never forget”. Describe what happened, how you felt, and what you learned. Use the Past Perfect Continuous at least three times.", 140, {
        read: "*Tips:* catch the reader's attention in the first sentence · one paragraph for the background, one for the problem, one for the ending · finish with what you learned.",
      }),
      record("Record your travel story in 1–2 minutes, as if for Leo's band podcast. 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
