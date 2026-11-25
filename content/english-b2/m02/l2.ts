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
  words,
  write,
} from "../../kit";

// 2.2 Such a strange day — G: so / such… that (so + adjective / adverb / much, many; such + (a) + adjective + noun); comment adverbs (apparently, luckily, surprisingly, obviously, hopefully, frankly…); story linkers (the moment, as soon as, at first, in the end, eventually, at last, meanwhile). V: chance and luck (by coincidence, what are the odds, out of the blue, a stroke of luck, in the nick of time, small world). S: tell a story vividly. Main format: "coincidence or invented?" + a long reading (amazing coincidences and the maths behind them, ~560 words) + a long listening (Laura and Kenji on a hike: two coincidences, ~3:15).
// Facts checked: Mark Twain — born 30 Nov 1835 (Halley's Comet that year), said in 1909 he expected to "go out with it", died 21 April 1910, a day after the comet's closest approach to the Sun; Thomas Jefferson and John Adams both died on 4 July 1826, the 50th anniversary of the Declaration of Independence; 2005 Powerball — 110 second-prize winners chose numbers from fortune cookies; Morgan Robertson's novel "Futility" (1898) — a huge ship called the Titan sinks after hitting an iceberg, 14 years before the Titanic; the "Jim twins" (Jim Lewis and Jim Springer) — separated as babies, met in 1979, both married Lindas then Bettys, sons James Alan / James Allan, dogs called Toy; the birthday problem — 23 people: just over 50% chance that two share a birthday, 70 people: over 99.9%; the "law of truly large numbers" — statisticians Persi Diaconis and Frederick Mosteller (1989).
export default lesson("b2-2.2", "Such a strange day", () => [
  section("Warm-up: Coincidence — or invented?", [
    box(
      "Today you will…",
      "- tell stories so vividly that people can't stop listening 🎬\n- use *so / such… that*: *It was such a strange day that I wrote it down.* ✍️\n- find out why amazing coincidences aren't that amazing — mathematically! 🎲",
    ),
    trueFalse("Real coincidence (true) or invented (false)? 🤔", [
      ["Mark Twain was born in a year when Halley's Comet appeared — and died the day after it came back, 75 years later.", true],
      ["Two US presidents, Thomas Jefferson and John Adams, died on the same day: July 4, 1826.", true],
      ["In 2005, 110 people won a lottery prize with numbers they had found in fortune cookies.", true],
      ["A man in Texas was struck by lightning on his birthday for ten years in a row.", false],
      ["A novel about a giant ship called the Titan that hits an iceberg and sinks was published 14 years before the Titanic.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Which one is the hardest to believe? Why?\n- Has a strange coincidence ever happened to you or someone in your family?\n- Do you think coincidences mean something — or are they just chance?",
    ),
    tip("Only the lightning story is invented. The reading explains why so many “impossible” coincidences really happen."),
  ]),

  section("Vocabulary: Chance and luck", [
    words("Chance and luck", [
      ["by coincidence", "🎲 by chance, not planned"],
      ["What are the odds?", "😮 How likely is that? (when something surprising happens)"],
      ["out of the blue", "⚡ suddenly and unexpectedly", "She called me out of the blue after ten years."],
      ["a stroke of luck", "🍀 something lucky that happens suddenly"],
      ["in the nick of time", "⏱️ just in time, at the last moment"],
      ["It's a small world!", "🌍 said when you meet someone you know in an unexpected place"],
      ["be in the right place at the right time", "📍 be lucky because of where you are"],
      ["a narrow escape", "😰 when you only just avoid danger"],
      ["against all odds", "💪 although it seemed very unlikely"],
      ["fate", "✨ a power that some people believe decides what happens"],
    ]),
    match("Match the situations and the phrases.", [
      ["I met my neighbor from Almaty on a beach in Thailand.", "It's a small world!"],
      ["We reached the gate just before it closed.", "in the nick of time"],
      ["An old friend wrote to me today — no warning, after ten years.", "out of the blue"],
      ["The car missed us by a few centimeters.", "a narrow escape"],
      ["Nobody believed she could win, but she did.", "against all odds"],
      ["We have the same birthday AND the same name!", "What are the odds?"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Finding that ticket on the street was a real [stroke] of luck. 🍀\n2. I met my wife by [coincidence] — we sat next to each other on a train.\n3. He got the job because he was in the right place at the right [time].\n4. Some people believe it was [fate] that they met.\n5. Against all [odds], the team won the final.\n6. We caught the last train in the [nick] of time.",
    ),
  ]),

  section("Reading: Amazing — or just maths?", [
    tip("A long text (~560 words). First reading — 5 minutes: *Does the writer believe coincidences have a hidden meaning?* Then the tasks. Ask the student to underline every *so… that* and *such… that*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Mark Twain predicted that he would die when Halley's Comet came back.", true],
        ["The two Jims met for the first time when they were children.", false],
        ["Both Jims had sons with almost the same name.", true],
        ["With 23 people in a room, it's more likely than not that two share a birthday.", true],
        ["Diaconis and Mosteller believed that amazing coincidences are extremely rare.", false],
        ["The writer thinks coincidences can still be meaningful to people.", true],
      ],
      {
        read: [
          "## 🎲 Amazing — or just maths?",
          "Some stories are so strange that they sound invented. In 1909, the American writer Mark Twain, who had been born in 1835 shortly after Halley's Comet appeared in the sky, told a friend: \"I came in with Halley's Comet. It is coming again next year, and I expect to go out with it.\" He died on April 21, 1910 — one day after the comet came closest to the Sun. Apparently, even Twain's friends were shocked.",
          "Or take the famous \"Jim twins\". Two identical brothers were separated a few weeks after birth and adopted by different families in Ohio. Surprisingly, both families named their baby James. The brothers didn't meet until 1979, when they were 39 — and when they did, they discovered such a long list of similarities that scientists came to study them. Both had married women called Linda, divorced them and married women called Betty. One had a son named James Alan; the other, James Allan. Both had once owned a dog called Toy.",
          "Then there's the novel *Futility*, published in 1898 by Morgan Robertson. It tells the story of an enormous ship called the *Titan*, described as \"unsinkable\", which hits an iceberg in the North Atlantic and sinks, with too few lifeboats for its passengers. Fourteen years later, the real *Titanic* did almost exactly the same thing.",
          "**So, is it fate?** Many people believe that coincidences like these must mean something. Mathematicians, however, are much less impressed. Frankly, they say, the surprising thing would be if such coincidences didn't happen.",
          "Consider the so-called birthday problem. How many people do you need in a room for there to be a better-than-even chance that two of them share a birthday? Most people guess around 180. The real answer is just 23. With 70 people, the probability is more than 99.9%. It feels wrong because we think about *our own* birthday, but the question is about *any* pair of people — and with 23 people, there are 253 possible pairs.",
          "In 1989, the statisticians Persi Diaconis and Frederick Mosteller described what they called the *law of truly large numbers*: with a large enough number of people and events, any outrageous thing is likely to happen. There are billions of people on the planet, each living thousands of moments every day. A one-in-a-million coincidence should happen to thousands of people every single day. We just don't hear about the millions of times when nothing interesting happens — nobody tells a story about the day they *didn't* meet an old school friend in Paris.",
          "Our brains make the effect even stronger. We are pattern-seeking animals: we notice connections, remember the surprising ones, and forget everything else. Obviously, this was useful for our ancestors — noticing that a sound in the grass often came before a predator could save your life. But it also means we see meaning where there may be none.",
          "Does that make coincidences less wonderful? Not necessarily. Knowing the maths doesn't stop the shiver you feel when your phone rings and it's the person you were just thinking about. Hopefully, it simply helps us enjoy these moments without being frightened by them. As one statistician put it, coincidences are like rainbows: we can explain exactly how they happen — and they're still beautiful. 🌈",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What was surprising about the Jim twins at the very beginning?", options: ["*Both families gave them the same first name.", "They grew up in the same house.", "They had the same birthday as Twain."] },
      { q: "Why is the birthday problem surprising?", options: ["*We think about our own birthday, not about any pair of people.", "Most birthdays are in summer.", "The maths is wrong."] },
      { q: "What is the “law of truly large numbers”?", options: ["*With enough people and events, very unlikely things will happen.", "Big numbers are hard to understand.", "Coincidences are always planned."] },
      { q: "Why do our brains notice coincidences so much?", options: ["*We're pattern-seeking animals.", "We like maths.", "Coincidences are rare."] },
      { q: "What does the writer compare coincidences to?", options: ["*rainbows", "comets", "lotteries"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. made to live apart: [separated]\n2. things that are the same or alike: [similarities]\n3. impossible to sink (a ship): [unsinkable]\n4. how likely something is (a noun): [probability]\n5. very shocking or unreasonable: [outrageous]\n6. an animal that kills and eats other animals: a [predator]",
    ),
  ]),

  section("Grammar: so / such… that", [
    quiz("Notice the rule 🔍 Look: “Some stories are so strange that they sound invented.” · “They discovered such a long list of similarities that scientists came to study them.”", [
      { q: "After “so” we usually use…", options: ["*an adjective or adverb (so strange, so quickly)", "a noun (so a story)", "a verb in -ing"] },
      { q: "After “such” we use…", options: ["*(a / an) + adjective + noun (such a long list)", "only an adjective", "a verb"] },
      { q: "“that” introduces…", options: ["*the result", "the reason", "a question"] },
    ]),
    table("so-such"),
    choose(
      "so or such? Choose.",
      "1. The film was [*so/such] boring that I fell asleep.\n2. It was [*such/so] a boring film that I fell asleep.\n3. She speaks [*so/such] quickly that I can't understand her.\n4. We had [*such/so] terrible weather that we stayed inside all week. 🌧️\n5. There were [*so/such] many people that we couldn't get in.\n6. He's [*such/so] a good cook that we always eat at his place.\n7. I've got [*so/such] much work that I can't go out.\n8. They're [*such/so] nice people!",
    ),
    gaps(
      "Join the sentences with so… that or such… that.",
      "1. The concert was loud. My ears hurt for days. → The concert was [so loud that] my ears hurt for days. 🎸\n2. It was a hot day. We stayed by the river. → It was [such a hot day that] we stayed by the river.\n3. The coffee was strong. I couldn't sleep. → The coffee was [so strong that] I couldn't sleep.\n4. She has a beautiful voice. Everyone stops talking when she sings. → She has [such a beautiful voice that] everyone stops talking.\n5. There was so much traffic. We missed the start. → There was [so much traffic that] we missed the start.\n6. They were kind people. We felt at home. → They were [such kind people that] we felt at home.",
    ),
  ]),

  section("Grammar: Telling a story well", [
    table("story-linkers"),
    choose(
      "Choose the best adverb or linker.",
      "1. I'd lost my keys. [*Luckily/Unluckily], my neighbor had a spare set.\n2. [*Apparently/Hopefully], the Jim twins both had dogs called Toy. (= I've heard / read that)\n3. [*The moment/Eventually] I saw her face, I knew something was wrong.\n4. We waited for hours, and [*eventually/at first] the bus came.\n5. [*At first/At last] I didn't like him, but now he's my best friend.\n6. [*Hopefully/Obviously] the weather will be better tomorrow. 🤞\n7. I was cooking. [*Meanwhile/Eventually], my brother was watching TV.\n8. [*Surprisingly/Obviously], nobody was hurt — it was a terrible crash.",
    ),
    drag(
      "Complete the story with linkers and adverbs.",
      "Last summer I was waiting for a train in Rome. [Unfortunately], it was two hours late. I sat down next to a woman who was reading a book in Russian. [At] first, we didn't talk. Then she dropped her ticket, and the [moment] I picked it up, I saw her name — it was my old teacher from school! [Apparently], she had been living in Italy for years. We talked [so] much that we nearly missed the train. What a small [world]! 🌍",
      ["Hopefully", "such", "last"],
    ),
    order("Make sentences.", [
      "It was such a strange day that I wrote it down.",
      "Luckily, nobody was hurt.",
      "The moment I saw her, I knew.",
      "Eventually, the train arrived.",
      "The music was so loud that we left.",
    ]),
    tip("Say it right: comment adverbs often start the sentence and have their own little pause: *Luckily, | nobody was hurt.* Stress *so* and *such* for drama: *It was SO strange!*"),
  ]),

  section("Listening: What are the odds?", [
    tip("A long listening — about 3 minutes 15 seconds. Laura and Kenji are on a hike near Almaty and tell each other about two strange coincidences. First listen: *Whose coincidence is more surprising?* Second listen: the tasks."),
    ...listening(
      "Listen to Laura and Kenji talking on a hike.",
      "**Laura:** Kenji, can we stop for a minute? I need water. This hill is so steep that my legs are shaking.\n\n**Kenji:** Of course. Actually, I've got a story for you while we rest. You won't believe it.\n\n**Laura:** Go on.\n\n**Kenji:** You know Aliya, who joined my team last month?\n\n**Laura:** The designer? The one who went to the wrong floor at her interview?\n\n**Kenji:** That's her. Well, about two weeks before her interview, I was on the bus home, and I found a wallet on the seat next to me. There was no phone number inside, just an ID card and a photo of a little girl with a big dog. So I took it to the address on the card.\n\n**Laura:** That's such a nice thing to do.\n\n**Kenji:** An older man opened the door. He was so happy that he invited me in for tea. We talked for an hour. He told me about his daughter, who was looking for a new job. Apparently, she'd been sending applications everywhere, and nobody had answered.\n\n**Laura:** Don't tell me…\n\n**Kenji:** Last week Aliya brought some photos to work, and there it was: the same photo of the little girl with the big dog. It was her! The man with the wallet was her father.\n\n**Laura:** No way! What are the odds?\n\n**Kenji:** I know! And the funny thing is, at her interview, neither of us knew. Her father never told her my name, and I never told him where I worked.\n\n**Laura:** So it was fate.\n\n**Kenji:** Or just a very small city. Your turn — you said you had one too.\n\n**Laura:** I do. Okay. Last month I was sitting in a café on Panfilov Street, marking homework. And I heard a woman behind me speaking English with a really strong Manchester accent. You know, my accent.\n\n**Kenji:** In Almaty? That's unusual.\n\n**Laura:** Exactly. So I turned around, and at first I didn't recognize her. Then she said, \"Laura Bennett? Is that really you?\" It was Mrs. Okafor — my primary school teacher! She'd taught me to read when I was six.\n\n**Kenji:** Seriously?\n\n**Laura:** Seriously. She'd been traveling around Central Asia since she retired, and she'd arrived in Almaty that morning. She'd only gone into that café because it had started raining.\n\n**Kenji:** So if it hadn't rained…\n\n**Laura:** We'd never have met. We talked for so long that the café closed around us. She still remembered that I used to bring a different book to school every day.\n\n**Kenji:** That's such a beautiful story. Did you see her again?\n\n**Laura:** Yes, I showed her the city for two days. And here's the best part: she'd kept a notebook with stories her students had written. She'd been carrying it with her for more than twenty years. And one of the stories was mine — a story about a girl who travels to a faraway country to teach.\n\n**Kenji:** Wait. You wrote that when you were six?\n\n**Laura:** Seven, I think. Obviously, I'd completely forgotten.\n\n**Kenji:** Okay, you win. That's even better than mine.\n\n**Laura:** It's not a competition! Although… yes, I win. Come on, we've still got an hour to the top.",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Kenji find the wallet?", options: ["*on the bus", "in a café", "at work"] },
      { q: "Why did Kenji take the wallet to the address?", options: ["*There was no phone number inside.", "The owner asked him to.", "He knew the owner."] },
      { q: "Who was the man with the wallet?", options: ["*Aliya's father", "Kenji's new boss", "Laura's teacher"] },
      { q: "Why had Mrs. Okafor gone into the café?", options: ["*It had started raining.", "She was meeting Laura.", "She was hungry after a hike."] },
      { q: "What had Mrs. Okafor kept for more than twenty years?", options: ["*a notebook with her students' stories", "Laura's first book", "a photo of her class"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Aliya's father invited Kenji in for tea.", true],
      ["Aliya had been looking for a job and nobody had answered.", true],
      ["Kenji and Aliya knew about the wallet at the interview.", false],
      ["Laura recognized her teacher immediately.", false],
      ["Mrs. Okafor had taught Laura to read.", true],
      ["Laura remembered the story she had written as a child.", false],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Laura: This hill is [so] steep that my legs are shaking.\n2. Laura: That's [such] a nice thing to do.\n3. Kenji: [Apparently], she'd been sending applications everywhere.\n4. Laura: What are the [odds]?\n5. Laura: At [first] I didn't recognize her.\n6. Laura: [Obviously], I'd completely forgotten.",
    ),
  ]),

  section("Let's talk: Tell it like a storyteller", [
    text(
      "The coincidence story 🎬",
      "Tell a strange, lucky or funny story — about a coincidence, a lucky escape or an amazing meeting (yours, someone you know, or one you've read about). 2 minutes.\n\nMake it vivid:\n- start with a hook: *You won't believe what happened last week…*\n- background with *had been + -ing*\n- at least two comment adverbs: *Luckily… Apparently… Surprisingly…*\n- one *so… that* and one *such… that*\n- an ending: *In the end… / What are the odds?*\n\nThen discuss: Do you believe in fate? Why / why not?",
    ),
    tip("Give feedback on storytelling, not just grammar: was there a hook, did the story build up, was the ending clear? In a group: students vote for the most surprising story."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "It was ___ cold that the lake froze.", options: ["*so", "such", "such a"] },
      { q: "They're ___ friendly people!", options: ["*such", "so", "such a"] },
      { q: "___, nobody was hurt.", options: ["*Luckily", "Hopefully", "At last"] },
      { q: "She called me ___ after ten years.", options: ["*out of the blue", "in the nick of time", "against all odds"] },
    ]),
    box(
      "Phrase of the day: truth is stranger than fiction",
      "📚 Real life is sometimes more surprising than any story someone could invent — like the *Titan* and the *Titanic*.\n\n*Do you know a true story that sounds like fiction?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. The hotel was [*so/such] expensive that we left after one night.\n2. It was [*such/so] an expensive hotel that we left after one night.\n3. She was [*so/such] tired that she fell asleep on the bus.\n4. [*Apparently/Hopefully], he's moved to Canada. That's what his sister said.\n5. [*Eventually/At first], after three hours, the plane took off.\n6. [*Luckily/Unluckily], I had an umbrella, so I didn't get wet. ☂️\n7. There was [*so/such] little time that we took a taxi.\n8. [*The moment/Meanwhile] I opened the door, the cat ran out.",
      ),
      gaps(
        "Rewrite with so or such.",
        "1. The test was very difficult. Nobody finished. → It was [such a difficult test] that nobody finished.\n2. He's a very funny person. We laugh all the time. → He's [such a funny person] that we laugh all the time.\n3. The music was very loud. We couldn't talk. → The music was [so loud] that we couldn't talk.\n4. It was a very long film. I fell asleep. → It was [such a long film] that I fell asleep.\n5. She drove very fast. We arrived early. → She drove [so fast] that we arrived early.\n6. There were very many people. We couldn't move. → There were [so many people] that we couldn't move.",
      ),
      match("Match the phrases and the meanings.", [
        ["out of the blue", "suddenly, without warning"],
        ["in the nick of time", "just in time"],
        ["a stroke of luck", "something lucky that happens suddenly"],
        ["a narrow escape", "when you only just avoid danger"],
        ["against all odds", "although it seemed very unlikely"],
        ["by coincidence", "by chance"],
      ]),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      write("Write a story for a website called “Strange But True” (140–190 words) about a coincidence or a lucky escape — real or invented. Use so… that, such… that, at least three comment adverbs and the Past Perfect Continuous.", 140, {
        read: "*Tip:* start with a hook (*I'll never forget the day…*), build up the tension, and finish with a surprising ending.",
      }),
      record("Record your coincidence story (1–2 minutes). Make your voice dramatic! 🎭", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
