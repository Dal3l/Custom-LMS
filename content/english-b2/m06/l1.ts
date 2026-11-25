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

// 6.1 It is believed that… — G: the passive in continuous and perfect forms (is being built, has been found, had been stolen, will have been finished); impersonal reporting passive (It is said / believed / reported that…; He is said to be… / is believed to have…). V: news and journalism (a headline, a source, a rumor, breaking news, go viral, fact-check, biased, allegedly…). S: report news carefully, without claiming more than you know. Main format: an MTV quiz + the first video ever shown on MTV (rock easter egg) + a long reading (rumors that fooled the world, ~560 words) + a long listening (a local radio news bulletin with a reporter, Ruslan and Madina, ~3:15). Video at home (TED-Ed, false news).
// Facts checked: MTV launched on 1 August 1981 (just after midnight, US Eastern time) with the words "Ladies and gentlemen, rock and roll"; the first music video it played was "Video Killed the Radio Star" by the Buggles (Trevor Horn and Geoff Downes), released in 1979 — a UK number one; the second was Pat Benatar's "You Better Run". Orson Welles's radio drama "The War of the Worlds" was broadcast on 30 October 1938; newspapers reported mass panic, but later research suggests the panic was much smaller than reported (few people were listening, and newspapers had reasons to criticize radio). Soroush Vosoughi, Deb Roy and Sinan Aral (MIT), Science, 2018 — on Twitter, false news spread farther and faster than true news; false stories were about 70% more likely to be retweeted, and true stories took about six times as long to reach 1,500 people; the spread was driven by people, not bots.
export default lesson("b2-6.1", "It is believed that…", () => [
  section("Warm-up: The day video killed the radio star", [
    box(
      "Today you will…",
      "- meet the very first music video on MTV 📺🎸\n- find out why false news travels faster than true news 🏃‍♂️💨\n- report news carefully: It is said that… He is believed to… 📰",
    ),
    quiz("MTV quiz! Guess. 📺", [
      { q: "When did the music channel MTV start?", options: ["*1981", "1971", "1991"] },
      { q: "What were the first words on MTV?", options: ["*“Ladies and gentlemen, rock and roll.”", "“Welcome to the future.”", "“Video killed the radio star.”"] },
      { q: "What was the first music video MTV played?", options: ["*“Video Killed the Radio Star” by the Buggles", "“Thriller” by Michael Jackson", "“Bohemian Rhapsody” by Queen"] },
      { q: "Why was that song a perfect choice?", options: ["*It's about new technology replacing the old.", "It was the longest video ever made.", "It was filmed at MTV."] },
    ]),
    video("Watch: The Buggles — Video Killed the Radio Star (official video, 1979).", "W8r-tXRLazs"),
    text(
      "Talk to your teacher.",
      "- Did video really “kill” the radio star? What do you think the song would be about today?\n- Where do you get your news: TV, websites, social media, friends?\n- Have you ever believed a story that turned out to be false? 🙈",
    ),
    tip("Rock easter egg 🎸: MTV started on 1 August 1981, and this was the first video it played. The song (1979) is about a singer whose career is ended by new technology. Use it to start the theme: how media changes — and how news spreads."),
  ]),

  section("Vocabulary: News and journalism", [
    words("News and journalism", [
      ["a headline", "📰 the title of a news story, in large letters"],
      ["a source", "🔍 a person or document that gives information"],
      ["a rumor (UK: rumour)", "🗣️ a story that may or may not be true"],
      ["breaking news", "🚨 news that is happening right now"],
      ["go viral", "📈 spread very quickly online"],
      ["fact-check", "✅ check that the facts in a story are true"],
      ["biased", "⚖️ unfairly supporting one side"],
      ["allegedly", "🤔 said to be true, but not proven"],
      ["a correspondent", "🎙️ a journalist who reports from a particular place or topic"],
      ["misleading", "🌀 giving the wrong idea, even if not completely false"],
    ]),
    match("Match.", [
      ["The video went", "viral overnight."],
      ["Journalists must fact-check", "every story."],
      ["The man allegedly", "stole two paintings."],
      ["Our correspondent in Seoul", "reports on the elections."],
      ["The headline was", "misleading."],
      ["We interrupt this program", "with breaking news."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Don't believe every [rumor] you hear online.\n2. The newspaper is very [biased] — it only shows one side.\n3. A good journalist never reveals a [source].\n4. The [headline] said “Cat saves town!” — the story was less exciting. 😄\n5. Her dance video [went] viral in two days.\n6. The politician [allegedly] took money from a company.",
    ),
  ]),

  section("Reading: Rumors that fooled the world", [
    tip("A long text (~560 words). First reading — 5 minutes: *Why do false stories spread so fast, according to the article?* Then the tasks. Ask the student to underline every passive form."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The War of the Worlds was a radio play, not real news.", true],
        ["Research shows that millions of Americans really panicked in 1938.", false],
        ["Newspapers may have exaggerated the panic on purpose.", true],
        ["In the MIT study, true news spread faster than false news.", false],
        ["According to the study, bots were the main reason false news spread.", false],
        ["The writer advises checking more than one source.", true],
      ],
      {
        read: [
          "## 📻 Rumors that fooled the world",
          "On the evening of 30 October 1938, millions of Americans were listening to the radio when a program of dance music was interrupted by breaking news: strange explosions had been seen on Mars, and a huge metal object had landed in a field in New Jersey. Over the next hour, listeners heard that creatures from Mars were attacking, that soldiers had been killed and that New York was being destroyed.",
          "Of course, none of it was real. It was a radio drama, The War of the Worlds, performed by the young actor and director Orson Welles. The next morning, newspapers across the country reported that the program had caused mass panic. It was said that thousands of people had run into the streets, that roads had been blocked by families trying to escape, and that some listeners had even been treated in hospital for shock.",
          "For decades, the story was repeated as proof of the power of the media. But here is the twist: the panic itself appears to have been greatly exaggerated. Later researchers found that most Americans weren't listening to Welles at all — a much more popular show was on at the same time. Many of those who did listen understood that it was a play. So why did the newspapers make it sound so dramatic? It is believed that some editors saw a chance to attack radio, which was taking their advertisers. In other words, the famous story about fake news may itself have been, at least partly, fake news.",
          "Eighty years later, the problem has become much bigger. In 2018, three researchers from the Massachusetts Institute of Technology published a study of about 126,000 stories that had been shared on Twitter over more than ten years. Every story had been checked by independent fact-checking organizations. The results were worrying. False stories were about 70% more likely to be shared than true ones, and true stories took about six times as long to reach 1,500 people.",
          "Why? The researchers found that false news tends to be more surprising and more emotional. It makes us feel shocked, disgusted or excited — and those feelings make us want to share it immediately. Interestingly, the false stories weren't spread mainly by bots. They were spread by people. By us.",
          "So what can we do? Journalists are taught a few simple habits, and they are useful for everyone. First, check the source: who is telling you this, and how do they know? Second, look for a second source. If a story is true and important, it is usually being reported by more than one serious news organization. Third, notice the language. Careful reporters say \"it is believed that\" or \"the man is said to have\" when something hasn't been proven. Headlines that sound absolutely certain about something surprising should make you suspicious. Finally, pause before you share. If a story makes you very angry or very excited, that's exactly the moment to wait.",
          "Orson Welles later said he had been afraid his career was over after the broadcast — instead, he was soon given a contract in Hollywood. The rumor about his rumor made him famous. Perhaps that's the real lesson: a good story spreads fast, whether it's true or not. Making sure it's true is our job. 🔍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What was The War of the Worlds?", options: ["*a radio drama about an attack from Mars", "a real news report", "a newspaper article"] },
      { q: "Why might newspapers have exaggerated the panic?", options: ["*Radio was taking their advertisers.", "They wanted to help Welles.", "They didn't listen to the program."] },
      { q: "How many stories did the MIT researchers study?", options: ["*about 126,000", "about 1,500", "about 70"] },
      { q: "Why does false news spread faster?", options: ["*It's more surprising and emotional.", "It's shorter.", "Bots share it."] },
      { q: "What happened to Welles after the broadcast?", options: ["*He got a contract in Hollywood.", "He was fired.", "He went to prison."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. stopped for a short time: [interrupted]\n2. made something seem bigger or worse than it is: [exaggerated]\n3. an unexpected change in a story: a [twist]\n4. not trusting, thinking something is wrong: [suspicious]\n5. a program on radio or TV: a [broadcast]\n6. causing worry: [worrying]",
    ),
  ]),

  section("Grammar: It is being built — it has been found", [
    quiz("Notice the rule 🔍 Look: “New York was being destroyed.” · “Soldiers had been killed.” · “It is usually being reported by more than one news organization.”", [
      { q: "“was being destroyed” is…", options: ["*the passive of the Past Continuous", "the passive of the Past Perfect", "active"] },
      { q: "“had been killed” is…", options: ["*the passive of the Past Perfect", "the passive of the Present Perfect", "the Past Simple"] },
      { q: "In every passive we use…", options: ["*be (in the right form) + 3rd form", "have + -ing", "do + 3rd form"] },
    ]),
    table("passive-forms"),
    choose(
      "Choose.",
      "1. A new bridge [*is being built/is building] over the river. 🌉\n2. The painting [*has been found/has found] after twenty years.\n3. When we arrived, the road [*was being repaired/was repairing].\n4. The story [*had been shared/had shared] a million times before anyone checked it.\n5. By next June, the new metro line [*will have been finished/will have finished].\n6. The suspect [*is being questioned/is questioned] by police right now.\n7. Two people [*have been injured/have injured] in the accident.\n8. I felt like I [*was being watched/was watching]. 👀",
    ),
    gaps(
      "Complete with the passive form of the verb.",
      "1. Right now, the stadium [is being cleaned]. (clean — Present Continuous)\n2. The thief [has been caught]. (catch — Present Perfect)\n3. The video [had been watched] by millions before it was deleted. (watch — Past Perfect)\n4. While the house [was being painted], we stayed with friends. (paint — Past Continuous)\n5. By 2030, the old airport [will have been closed]. (close — Future Perfect)\n6. The results [are being checked] at the moment. (check — Present Continuous)",
    ),
  ]),

  section("Grammar: It is said that… He is said to…", [
    table("reporting-passive"),
    sort("Is it about NOW or about the PAST? Sort. 🧩", {
      "⏺️ about now: is said to be": [
        "He is said to be very rich.",
        "She is believed to live in Paris.",
        "The band is rumored to be planning a tour.",
        "The painting is thought to be worth millions.",
      ],
      "⏪ about the past: is said to have been": [
        "He is said to have been very rich.",
        "She is believed to have left the country.",
        "The band is rumored to have split up.",
        "The painting is thought to have been stolen.",
      ],
    }),
    gaps(
      "Rewrite the sentences. Use the word in capitals.",
      "1. People say that the singer is ill. (SAID) → The singer [is said to be] ill.\n2. People believe that the thief escaped by car. (BELIEVED) → The thief [is believed to have escaped] by car.\n3. They report that two people were injured. (REPORTED) → It [is reported that] two people were injured.\n4. People think the castle is 800 years old. (THOUGHT) → The castle [is thought to be] 800 years old.\n5. Experts say the painting was stolen in 1990. (SAID) → The painting [is said to have been stolen] in 1990.\n6. Everyone expects that prices will rise. (EXPECTED) → It [is expected that] prices will rise.",
    ),
    drag(
      "Complete the news story.",
      "A famous painting that had been missing for 30 years [has] been found in a small flat in Berlin. It is [believed] that the painting was stolen from a museum in 1994. The thief is said [to] have sold it to a collector, who allegedly didn't know where it had come from. The painting is now [being] examined by experts and is [thought] to be worth more than $5 million. It [is] expected that it will return to the museum next year. 🖼️",
      ["was", "saying", "having"],
    ),
    order("Make sentences.", [
      "The bridge is being repaired.",
      "It is said that he is a millionaire.",
      "She is believed to have left the country.",
      "The thief has been caught.",
      "The singer is rumored to be getting married.",
    ]),
    tip("Say it right: in the passive, *been* is weak /bɪn/: *It's BEEN STOLen* → /ɪts bɪn ˈstəʊlən/. Stress the main verb, not *being* or *been*. Typical mistakes: *It is said him to be…* → *He is said to be…*; *He is said to steal* (past!) → *He is said to have stolen*."),
  ]),

  section("Listening: The evening news", [
    tip("A long listening — about 3 minutes 15 seconds. The evening news on a local radio station in Almaty: a newsreader, a reporter, Ruslan (the mountain rescuer) and Madina (a designer). First listen: *How many news stories are there? Which one is a rumor?* Second listen: the tasks."),
    ...listening(
      "Listen to a local radio news bulletin.",
      "**Newsreader:** Good evening. It's six o'clock, and here is the news. Our top story tonight: a painting that had been missing for more than twenty years has been found in a garage on the edge of the city. Our reporter is at the scene.\n\n**Reporter:** Thank you. The painting, a mountain landscape by a well-known Kazakh artist, was stolen from a private collection in 2003. It was discovered this morning by a family who had just bought the house and were clearing out the garage. The painting had been wrapped in an old carpet. It is believed to be in surprisingly good condition, although it is now being examined by experts at the national museum. Police say that the previous owner of the house is thought to have bought the painting at a market in the nineteen-nineties, without knowing that it had been stolen. Nobody has been arrested.\n\n**Newsreader:** Thank you. In other news, two hikers who had been reported missing in the mountains yesterday evening have been found safe and well. They were spotted early this morning by a rescue drone. Ruslan, from the mountain rescue team, spoke to us earlier.\n\n**Ruslan:** They had left the path in the fog, which happens a lot at this time of year. The good news is that they'd told a friend their route, so we knew where to start looking. They were found about two kilometers from the path. They were cold and hungry, but they're fine. They're being checked at the hospital just to be sure. Once again: please, always tell someone where you're going.\n\n**Newsreader:** Work on the city's new bridge over the river has been delayed again. The bridge was supposed to be finished this summer, but it is now expected that it won't be opened until next spring. The city says the delay was caused by problems with the steel, which is still being tested. Some drivers we spoke to were less than patient.\n\n**Newsreader:** And finally, a story that has been spreading fast online. It is rumored that a famous British rock band will make a surprise appearance at the city's winter festival next month. The rumor started when a photo of the band's drummer was posted from Almaty airport. The organizers have neither confirmed nor denied it. Madina, a designer who created the festival posters, told us she knows nothing.\n\n**Madina:** Honestly, I've been asked about it twenty times today! I've seen the photo, but it could have been taken anywhere. People are saying the band is planning a secret concert — but nobody has told me, and I made the posters! I'd love it to be true, of course. But until it's been confirmed, I'm treating it as a rumor.\n\n**Newsreader:** Very wise. We'll let you know if anything is confirmed. Now, the weather. Heavy snow is expected in the mountains tonight, and drivers are being advised to stay off the mountain roads until tomorrow afternoon. In the city, temperatures will fall to minus twelve. That's the news at six. Good night.",
    ),
    quiz("Listen and choose.", [
      { q: "Where was the painting found?", options: ["*in a garage, wrapped in a carpet", "in a museum", "at a market"] },
      { q: "How were the hikers found?", options: ["*by a rescue drone", "by a helicopter", "They walked back alone."] },
      { q: "When is the bridge now expected to open?", options: ["*next spring", "this summer", "next month"] },
      { q: "How did the rumor about the band start?", options: ["*A photo of the drummer was posted from the airport.", "Madina put the band on the posters.", "The organizers announced it."] },
      { q: "What is Madina's attitude to the rumor?", options: ["*She'd like it to be true but treats it as a rumor.", "She's sure it's true.", "She's angry about it."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The painting was stolen in 2003.", true],
      ["The previous owner of the house has been arrested.", false],
      ["The hikers had told a friend their route.", true],
      ["The hikers are being checked at the hospital.", true],
      ["The organizers have confirmed the concert.", false],
      ["Drivers are being advised to avoid the mountain roads tonight.", true],
    ]),
    gaps(
      "Complete the sentences from the news.",
      "1. A painting that had been missing for more than twenty years has [been] found.\n2. It is now [being] examined by experts.\n3. The previous owner is [thought] to have bought the painting at a market.\n4. Two hikers who had been [reported] missing have been found.\n5. It is [rumored] that a famous British rock band will appear at the festival.\n6. Drivers are being [advised] to stay off the mountain roads.",
    ),
  ]),

  section("Let's talk: Report it carefully", [
    text(
      "📰 You are the reporter",
      "Your teacher tells you a piece of “news” (true or invented). Report it **carefully** — say only what is known, and use reporting passives for what isn't proven:\n\n- *It is reported that… / It is believed that…*\n- *He is said to be… / She is thought to have…*\n- *The building is being… / Nobody has been…*\n- *This hasn't been confirmed yet.*\n\nThen swap: tell your teacher a rumor from your town, school or work (it can be invented!). Your teacher asks: *Who's the source? How do you know?* 🔍",
    ),
    tip("Example news: *A cat has been elected mayor of a small town. People say it is very popular. Apparently it was found as a kitten in the town hall.* → *A cat is said to have been elected… It is believed to have been found…* Praise careful language: the point is not to claim more than you know."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The road ___ at the moment.", options: ["*is being repaired", "is repairing", "has repaired"] },
      { q: "He is said ___ the money last year.", options: ["*to have stolen", "to steal", "stealing"] },
      { q: "A story that spreads very fast online goes ___.", options: ["*viral", "breaking", "biased"] },
      { q: "“It is ___ that the band will come.” (not confirmed)", options: ["*rumored", "rumoring", "rumor"] },
    ]),
    box(
      "Phrase of the day: a lie can travel halfway around the world while the truth is putting on its shoes",
      "👟 This saying is often attributed to Mark Twain — but there's no evidence he said it! A perfect example of today's lesson. 😄\n\n*What's the best way to stop a rumor?*",
    ),
  ]),

  homework(
    [
      video("Watch: TED-Ed — How false news can spread (Noah Tavlin).", "cSKGa_7XJkg"),
      choose(
        "Choose.",
        "1. The new school [*is being built/is building] next to the park.\n2. The missing dog [*has been found/has found]! 🐶\n3. She is said [*to have won/to win] the lottery last year.\n4. It [*is believed/believes] that the fire started in the kitchen.\n5. The film [*had been seen/had seen] by millions before it won the prize.\n6. The singer is rumored [*to be/being] planning a new album.",
      ),
      gaps(
        "Complete with the passive form of the verb.",
        "1. The bridge [is being repaired] at the moment. (repair)\n2. Three people [have been arrested]. (arrest — Present Perfect)\n3. When I came back, my bike [had been stolen]. (steal)\n4. The president is said [to have been] very ill last year. (be)\n5. It [is expected] that the prices will go up. (expect)\n6. By Friday, all the tickets [will have been sold]. (sell)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["a headline", "the title of a news story"],
        ["a source", "where information comes from"],
        ["go viral", "spread very fast online"],
        ["fact-check", "check that information is true"],
        ["biased", "supporting one side unfairly"],
        ["allegedly", "said, but not proven"],
      ]),
      write("Write a short news article (140–190 words) for a local website about something that happened in your town (real or invented). Report it carefully: use at least three passive forms (is being…, has been…, had been…) and three reporting passives (It is said that…, He is believed to…).", 140),
      record("Record a 1-minute news report about your day, as if you were a TV reporter: “Breaking news: …” 🎙️📺", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
