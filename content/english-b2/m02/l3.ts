import {
  box,
  choose,
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

// 2.3 Survivors — skills lesson: no new grammar; review of narrative tenses with the Past Perfect Continuous, so / such… that, comment adverbs and linkers. V: survival (injury, shelter, search party, keep going…); word formation (survive → survivor, survival). S: "What helps people survive?" Main format: ranking a survival kit + a long reading (Juliane Koepcke's 11 days in the Amazon, 1971, ~570 words) + TED-Ed video (staying calm under pressure) + a long listening (radio interview with Ruslan, the mountain rescuer, ~3:20). Video at home (Koepcke's story).
// Facts checked: Juliane Koepcke — 17, on 24 December 1971 LANSA Flight 508 (Lima → Pucallpa) flew into a thunderstorm, was hit by lightning and broke up in the air; she fell about 3 km still strapped into her row of seats and was the only survivor; broken collarbone, a deep cut on her arm, lost her glasses and one sandal; followed a stream and then a river (her father's advice: water leads to people); poured petrol on her wound to get the insects out; found by forest workers after about 11 days; her parents were biologists; she became a biologist and later ran the Panguana research station; memoir "When I Fell From the Sky" (2011); Werner Herzog's documentary "Wings of Hope" (2000). Ruslan: got lost on a one-day walk, found by a helicopter after a night search with 50+ volunteers (B1 2.2, 12.2) — now a mountain rescuer. The survival "rule of threes" and S.T.O.P. (Stop, Think, Observe, Plan) are common survival-training guidelines.
export default lesson("b2-2.3", "Survivors", () => [
  section("Warm-up: Your survival kit", [
    box(
      "Today you will…",
      "- read one of the most incredible survival stories ever told 🌳\n- hear a mountain rescuer explain what really helps people survive 🏔️\n- discuss: is survival about luck, skill — or attitude?",
    ),
    order(
      "You're lost in a forest for three days. Rank these items from MOST useful (top) to LEAST useful (bottom). Then compare with your teacher! 🎒",
      [[
        "a bottle of water",
        "a warm jacket",
        "a knife",
        "a whistle",
        "matches",
        "a bar of chocolate",
        "a phone with 5% battery",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Why did you put your first item at the top? What would you do with the phone's 5%?\n- Have you ever been lost — in a city, a forest, the mountains? What did you do?\n- Do you think you'd be good in an emergency? Why?",
    ),
    tip("There's no single right order — survival experts usually put shelter and warmth (the jacket) and water first, and many say: use the last 5% of the phone to send your location, then switch it off. The listening comes back to this."),
  ]),

  section("Vocabulary: Survival", [
    words("Survival", [
      ["survive — a survivor — survival", "🧍 stay alive — a person who survives — the state of staying alive"],
      ["an injury — injured", "🩹 damage to the body — hurt"],
      ["a wound", "🩸 a cut or hole in the skin"],
      ["dehydration", "💧 a dangerous lack of water in the body"],
      ["shelter", "⛺ a place that protects you from weather or danger"],
      ["a search party", "🔦 a group of people looking for someone who is lost"],
      ["keep going", "🚶 continue, even when it's hard"],
      ["give up hope", "😞 stop believing that things will get better"],
      ["determined", "💪 decided to do something, whatever happens"],
      ["panic", "😱 sudden strong fear that stops you thinking clearly"],
      ["exhausted", "😩 extremely tired"],
      ["a miracle", "✨ an amazing event that seems impossible"],
    ]),
    match("Match.", [
      ["She was the only", "survivor of the crash."],
      ["A search party looked for him", "all night."],
      ["Without water, you quickly suffer from", "dehydration."],
      ["They built a shelter", "from branches and leaves."],
      ["Even when she was exhausted, she kept", "going."],
      ["Never give up", "hope."],
    ]),
    quiz("Choose the right word.", [
      { q: "After walking all day, they were completely ___.", options: ["*exhausted", "exhausting", "exhaust"] },
      { q: "Don't ___ — stop and think.", options: ["*panic", "hope", "survive"] },
      { q: "It was a ___ that nobody was hurt.", options: ["*miracle", "wound", "shelter"] },
      { q: "She was ___ to finish the race, even with an injury.", options: ["*determined", "dehydrated", "infected"] },
    ]),
    gaps(
      "Word formation: complete with the right form of the word in brackets.",
      "1. She was the only [survivor]. (survive)\n2. His [survival] depended on finding water. (survive)\n3. Two people were seriously [injured]. (injury)\n4. Her [determination] helped her keep going. (determined)\n5. It was a [miraculous] escape. (miracle)\n6. The rescue team worked [tirelessly] for two days. (tire)\n7. She felt completely [helpless]. (help)\n8. The [rescuers] found him on the third day. (rescue)",
    ),
  ]),

  section("Reading: The girl who fell from the sky", [
    tip("A long text (~570 words). First reading — 5 minutes: *What do you think saved Juliane's life?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Juliane was flying with her mother to spend Christmas with her father.", true],
        ["The plane was hit by lightning.", true],
        ["Juliane landed in the jungle still in her seat.", true],
        ["She was badly hurt and couldn't walk at all.", false],
        ["She followed the water because her father had taught her to.", true],
        ["She was found by a search party in a helicopter.", false],
        ["After the accident, Juliane never went back to the jungle.", false],
      ],
      {
        read: [
          "## 🌳 The girl who fell from the sky",
          "On December 24, 1971, seventeen-year-old Juliane Koepcke and her mother boarded a flight from Lima to Pucallpa, in the Peruvian Amazon. They were going to spend Christmas with Juliane's father, a biologist who worked at a research station in the rainforest. Her mother, also a biologist, had wanted to fly a day earlier, but Juliane had begged to stay for her school's end-of-year party.",
          "About half an hour into the flight, the plane flew straight into a huge thunderstorm. The passengers had been chatting and eating sandwiches when, suddenly, it went dark and the plane began to shake violently. Bags fell from the shelves, people screamed, and then lightning hit one of the engines. Juliane remembers her mother saying calmly, \"That's the end of everything.\" Then the plane broke apart in the air.",
          "The next thing Juliane knew, she was outside the plane, falling, still strapped into her row of seats. She was falling so fast that the jungle below looked like broccoli. She lost consciousness. When she woke up, she was lying on the forest floor under her seat. It was the next day. She had fallen about three kilometers.",
          "Amazingly, her injuries were not as serious as you would expect: a broken collarbone, a deep cut on her arm and a badly swollen eye. She had lost her glasses and one sandal. She called for her mother, but there was no answer. Of the ninety-two people on board, she was the only one who would survive.",
          "Juliane had grown up at her parents' research station, and her father had taught her one simple rule: if you're ever lost in the jungle, find water and follow it downstream, because streams lead to rivers, and rivers lead to people. So, with one shoe, no glasses and a small bag of sweets she had found near the crash site, she started walking. When the stream became a river, she waded and swam, because the riverbanks were too thick with plants. She heard search planes above her, but the forest was so dense that nobody could see her.",
          "Days passed. The wound on her arm became infected, and insects had laid their eggs in it. Still, she kept going. On the tenth day, she found a small boat and a shelter by the river. She poured petrol from the boat's engine onto her wound to get the insects out — a trick she had seen her father use on a dog. Then she waited. The next day, a group of forest workers arrived. At first they were so frightened that they thought she was a water spirit. They gave her first aid, and the following day they took her by canoe to the nearest town. She had been alone in the jungle for eleven days.",
          "What saved her? Juliane herself has often said that luck played a huge part — but so did knowledge. She didn't panic. She knew the jungle; she wasn't afraid of its animals; and she remembered what her father had told her. Above all, she never gave up hope.",
          "Many people would never want to see a rainforest again. Juliane did the opposite. She studied biology, became a scientist like her parents, and later took over the research station where she had grown up, working to protect the forest that almost killed her — and also saved her. In 2011, she told her story in the book *When I Fell From the Sky*. 📖",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why hadn't Juliane and her mother flown a day earlier?", options: ["*Juliane wanted to go to her school party.", "There were no tickets.", "The weather was bad."] },
      { q: "Why couldn't the search planes see her?", options: ["*The forest was too dense.", "She was hiding.", "It was always night."] },
      { q: "Why did she pour petrol on her wound?", options: ["*to get the insects out", "to clean her hands", "to start a fire"] },
      { q: "Why were the forest workers frightened at first?", options: ["*They thought she was a water spirit.", "She was angry.", "She had a knife."] },
      { q: "According to Juliane, what saved her?", options: ["*luck, knowledge and not giving up hope", "only luck", "the search planes"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. got on a plane: [boarded]\n2. asked very strongly, many times: [begged]\n3. the state of being awake and aware: [consciousness]\n4. walked through water: [waded]\n5. very thick, with many plants close together: [dense]\n6. full of germs, not healing well (a wound): [infected]",
    ),
    order(
      "Put Juliane's story in the right order.",
      [[
        "The plane flew into a thunderstorm and was hit by lightning.",
        "Juliane fell about three kilometers, still in her seat.",
        "She woke up on the forest floor the next day.",
        "She found a stream and followed it downstream.",
        "She found a boat and a shelter by the river.",
        "Forest workers found her and took her to a town.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("Video: How to stay calm under pressure", [
    video("Watch: TED-Ed — How to stay calm under pressure.", "CqgmozFr_GM"),
    text(
      "After the video: talk about it.",
      "- What happens in our body and mind under pressure, according to the video?\n- Which tip from the video could help you before an exam or an interview?\n- How did Juliane stay calm? Compare her with the advice in the video.",
    ),
    tip("Ask the student to explain one idea from the video in their own words first. Then link it with the reading: *Juliane didn't panic because…*"),
  ]),

  section("Listening: What really keeps people alive", [
    tip("A long listening — about 3 minutes 20 seconds. A radio interview with Ruslan, who got lost in the mountains himself (English B1) and is now a mountain rescuer. First listen: *What does Ruslan say is most important for survival?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio interview with Ruslan, a mountain rescuer.",
      "**Host:** My guest today is Ruslan, a mountain rescuer from Almaty, who has taken part in more than a hundred rescues. Ruslan, thanks for coming in.\n\n**Ruslan:** My pleasure.\n\n**Host:** You weren't always a rescuer, were you?\n\n**Ruslan:** No. A few years ago I was the one who needed rescuing. I'd gone for a one-day walk alone, I'd left the path, and the fog came down. I was lost for more than a day. Fifty volunteers searched for me all night, and a helicopter found me the next afternoon. After that, I decided I wanted to be on the other side.\n\n**Host:** So what have you learned? What really keeps people alive?\n\n**Ruslan:** People expect me to say \"strength\" or \"experience\". But honestly, the most important thing is the first ten minutes after you realize you're lost. That's when most people make their worst decision.\n\n**Host:** What do they do?\n\n**Ruslan:** They panic and start walking — fast, in any direction. They think, \"The road must be just over that hill.\" Then they walk for hours, they get exhausted, and they move further and further away from where we're looking. We teach a simple word: STOP. S for stop, T for think, O for observe, P for plan. Sit down, drink some water, look around, and only then decide.\n\n**Host:** But Juliane Koepcke, in the famous Amazon story, kept walking for days.\n\n**Ruslan:** That's a great example, actually, because she didn't walk in any direction. She knew nobody would find her under the trees, so she had a plan: follow the water. In the mountains, it's usually the opposite. If people know your route, the best thing is often to stay where you are, make yourself visible and wait.\n\n**Host:** What about equipment? What should everyone carry?\n\n**Ruslan:** A warm layer, water, a whistle and a charged phone. And here's a tip most people don't know: if your battery is low, don't play with the phone. Send your location to someone, then switch it off. Turn it on every hour to check messages. I've seen people use their last five percent to take selfies.\n\n**Host:** Seriously?\n\n**Ruslan:** Seriously. There's also the rule of threes that we teach. Generally, a person can survive about three minutes without air, three hours in extreme cold without shelter, three days without water and three weeks without food. So people worry about food, but they should worry about warmth and water first.\n\n**Host:** And the mental side? Is it true that attitude matters?\n\n**Ruslan:** Absolutely. I've seen strong, experienced hikers give up, and I've seen a seventy-year-old grandmother survive two nights in the snow because she was so determined to see her granddaughter's wedding. She kept talking to herself, singing songs, making plans. People who survive usually have a reason to keep going.\n\n**Host:** What was your reason, when you were lost?\n\n**Ruslan:** My sister. I'd promised to help her move flat that weekend. I kept thinking, \"She'll kill me if I don't come back.\"\n\n**Host:** Ha! Final question: the one piece of advice every listener should remember?\n\n**Ruslan:** Tell someone where you're going and when you'll be back. If I'd done that, they would have found me in two hours, not twenty-eight. It's the simplest thing, and it saves more lives than anything else.\n\n**Host:** Ruslan, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "When do people make their worst decision, according to Ruslan?", options: ["*in the first ten minutes after realizing they're lost", "on the second day", "before they leave home"] },
      { q: "What does the T in STOP stand for?", options: ["*think", "talk", "turn back"] },
      { q: "What should you do with a phone with low battery?", options: ["*send your location, switch it off and check it every hour", "call friends until it dies", "take photos of where you are"] },
      { q: "According to the rule of threes, what should people worry about first?", options: ["*warmth and water", "food", "their phone"] },
      { q: "What is Ruslan's most important piece of advice?", options: ["*Tell someone where you're going and when you'll be back.", "Always walk fast.", "Never go to the mountains alone."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan has taken part in more than a hundred rescues.", true],
      ["Ruslan thinks physical strength is the most important thing.", false],
      ["In the mountains, staying in one place is often the best choice.", true],
      ["The grandmother survived because she was very experienced.", false],
      ["Ruslan had promised to help his sister that weekend.", true],
      ["Ruslan was lost for exactly two hours.", false],
    ]),
    gaps(
      "Complete Ruslan's advice.",
      "1. Sit down, drink some water, look around, and only then [decide].\n2. If people know your route, it's often best to [stay] where you are.\n3. Make yourself [visible] and wait.\n4. Send your [location] to someone, then switch the phone off.\n5. Worry about warmth and [water] first, food later.\n6. Tell someone where you're going and when you'll be [back].",
    ),
    choose(
      "Review: narrative tenses and so / such. Choose.",
      "1. I [*had gone/have gone] for a one-day walk alone.\n2. I [*'d left/was leaving] the path, and then the fog came down.\n3. They [*had been walking/have walked] for hours when they realized they were lost.\n4. She was [*so/such] determined that she survived two nights in the snow.\n5. It's [*such/so] a simple thing, and it saves lives.\n6. If I'd told someone, they [*would have found/would find] me in two hours.",
    ),
  ]),

  section("Let's talk: What helps people survive?", [
    sort("Luck, skill or attitude? Sort what helped Juliane and the people in Ruslan's stories. 🧩", {
      "🍀 luck": ["falling with her seat", "the forest workers arriving", "landing among the trees"],
      "🧠 knowledge and skill": ["following the water", "using STOP", "sending your location", "using petrol on the wound"],
      "💪 attitude": ["never giving up hope", "having a reason to keep going", "singing and making plans"],
    }),
    text(
      "Discuss 🗣️",
      "- Which matters most for survival: luck, knowledge or attitude? Give examples from the lesson.\n- Juliane went back to work in the jungle. Would you? Why / why not?\n- What everyday “survival skills” should everyone learn at school?\n- Tell me about a difficult situation in your life when you had to *keep going*. What helped you?",
    ),
    tip("Push for B2 discussion language: *I'd argue that… / On the other hand… / Take Juliane, for example…* This prepares for the first debate in 3.3."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She was the only ___ of the crash.", options: ["*survivor", "survival", "surviving"] },
      { q: "A ___ party looked for him all night.", options: ["*search", "rescue", "finding"] },
      { q: "She had been walking for ten days ___ she found the boat.", options: ["*when", "while", "during"] },
      { q: "It was ___ dense forest that nobody could see her.", options: ["*such a", "so", "such"] },
    ]),
    box(
      "Phrase of the day: where there's a will, there's a way",
      "💪 If you really want to do something, you'll find a way to do it.\n\n*Do you agree — or are some things simply impossible?*",
    ),
  ]),

  homework(
    [
      video("Watch: the story of Juliane Koepcke (Weird History).", "eDyTyszVyCM"),
      text(
        "After the video: answer in the next lesson.",
        "- Which details in the video weren't in the article?\n- What would you have done in Juliane's place?",
      ),
      gaps(
        "Complete with the right form of the word in brackets.",
        "1. Her [survival] was a miracle. (survive)\n2. He was [injured] in a car accident. (injury)\n3. She showed great [determination]. (determined)\n4. Without water, the risk of [dehydration] is high. (dehydrate)\n5. The [rescuers] worked all night. (rescue)\n6. It was a [miraculous] escape. (miracle)",
      ),
    ],
    "Homework: Video and vocabulary",
  ),
  homework(
    [
      choose(
        "Review: choose.",
        "1. She [*had been walking/has walked] for days when she found the boat.\n2. The forest was [*so/such] thick that nobody could see her.\n3. [*Luckily/Hopefully], the forest workers arrived the next day.\n4. It was [*such/so] a terrible storm that the plane broke apart.\n5. [*Eventually/At first], after eleven days, she was safe.\n6. They [*had searched/were searching] for her for days, but they hadn't found her.",
      ),
      write("Write an essay (140–190 words): “What matters more for survival: luck, knowledge or attitude?” Use examples from the lesson and your own ideas.", 140, {
        read: "*Plan:* 1) introduction — the question and your opinion · 2) one argument with an example · 3) another argument with an example · 4) conclusion. *Useful:* In my opinion, … · Take Juliane Koepcke, for example. · On the other hand, … · To sum up, …",
      }),
      record("Record a 1-minute radio tip for hikers: what should everyone do before and during a walk in the mountains? 🏔️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
