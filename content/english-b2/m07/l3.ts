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

// 7.3 Back in Black — skills lesson (rock easter egg from the programme): no new grammar; review of reporting verbs (7.1) and reported speech (7.2). V: setbacks and comebacks (a setback, bounce back, resilient, pick yourself up, a turning point, persevere, grief, pay tribute to, carry on, give up). S: what helps people recover after a loss or failure. Main format: an AC/DC quiz + the official "Back in Black" video + a long reading (how AC/DC came back after losing their singer, ~570 words) + a long listening (Zarina's podcast about comebacks with Leo and Ruslan, ~3:15) + a discussion.
// Facts checked: AC/DC's singer Bon Scott died in London on 19 February 1980, aged 33; the brothers Angus and Malcolm Young considered ending the band; Bon's parents encouraged them to carry on; Brian Johnson, a singer from the north-east of England (formerly of the band Geordie), joined in spring 1980; the album was recorded at Compass Point Studios in Nassau, the Bahamas, with the producer Robert John "Mutt" Lange; "Back in Black" was released in July 1980 with an all-black cover as a sign of mourning for Bon Scott; the first song, "Hells Bells", begins with the sound of a bell (a large bronze bell was made for the band); the album has sold about 50 million copies worldwide and is one of the best-selling albums of all time (certified 25 times platinum in the US); in 2016 Johnson had to stop touring because doctors warned he could lose his hearing, and he returned for the album "Power Up" (2020); Malcolm Young left in 2014 because of illness and died in 2017. Characters: Leo (musician), Ruslan (got lost in the mountains, now a rescuer), Zarina (podcaster).
export default lesson("b2-7.3", "Back in Black", () => [
  section("Warm-up: Back in Black 🎸", [
    box(
      "Today you will…",
      "- hear the story of one of the greatest comebacks in rock history 🤘\n- learn words for setbacks and comebacks 📉📈\n- talk about what helps people pick themselves up after a fall 💪",
    ),
    quiz("AC/DC quiz! Guess. 🎸", [
      { q: "In 1980, AC/DC lost their singer, Bon Scott. What did the band do next?", options: ["*They found a new singer and recorded an album within months.", "They stopped playing for ten years.", "They became an instrumental band."] },
      { q: "Where did they record the album “Back in Black”?", options: ["*in the Bahamas", "in Australia", "in New York"] },
      { q: "What color is the album cover — and why?", options: ["*All black, as a sign of mourning for Bon Scott.", "Red, because it was a rock album.", "White, as a fresh start."] },
      { q: "About how many copies has the album sold?", options: ["*about 50 million", "about 5 million", "about 500,000"] },
    ]),
    video("Watch: AC/DC — Back In Black (official video).", "pAgnJDJN4VA"),
    text(
      "Talk to your teacher.",
      "- How does the song make you feel? Is it a sad song or a powerful one? 🤘\n- Why do you think the band decided to carry on?\n- Do you know other people or bands who made a comeback after a terrible loss or failure?",
    ),
    tip("Rock easter egg 🎸 from the course programme. Let the student guess the quiz first — the reading tells the whole story. The song's title is a tribute: the band came “back” — dressed in black."),
  ]),

  section("Vocabulary: Setbacks and comebacks", [
    words("Setbacks and comebacks", [
      ["a setback", "📉 a problem that stops progress for a time"],
      ["bounce back", "🏀 recover quickly after a difficult time"],
      ["resilient", "🌱 able to recover from difficult situations"],
      ["pick yourself up", "🧍 start again after a failure"],
      ["a turning point", "↪️ the moment when things start to change"],
      ["persevere", "🧗 continue trying although it's difficult"],
      ["grief", "🖤 deep sadness after someone dies"],
      ["pay tribute to", "🕯️ show respect and love for someone, especially after their death"],
      ["carry on", "➡️ continue"],
      ["make a comeback", "🔙 become successful again after a difficult time"],
    ]),
    match("Match.", [
      ["After the injury, she", "bounced back and won the race."],
      ["Losing that job was", "a turning point in my life."],
      ["The concert paid", "tribute to the late singer."],
      ["Children are often more", "resilient than adults think."],
      ["It was hard, but we decided", "to carry on."],
      ["After years of failure, the band", "made a comeback."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Failing the exam was a small [setback], not the end of the world.\n2. She was full of [grief] after her grandfather died.\n3. Fall seven times, [pick] yourself up eight times. 💪\n4. If you [persevere], you'll get there.\n5. The team made an amazing [comeback] in the second half.\n6. He didn't [give] up, even when everyone laughed at him.",
    ),
    quiz("Choose the right word.", [
      { q: "It was hard, but she decided to ___ on with her studies.", options: ["*carry", "bring", "take"] },
      { q: "The team made a brilliant ___ in the last ten minutes.", options: ["*comeback", "setback", "turning point"] },
      { q: "He was full of ___ after losing his best friend.", options: ["*grief", "tribute", "resilience"] },
      { q: "Don't worry — kids usually bounce ___ quickly.", options: ["*back", "up", "off"] },
    ]),
  ]),

  section("Reading: Back in Black", [
    tip("A long text (~570 words). First reading — 5 minutes: *What helped the band carry on?* Then the tasks. Ask the student to retell one paragraph using reporting verbs from 7.1 (*Bon's parents encouraged them to…*)."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Bon Scott died just before AC/DC became one of the biggest bands in the world.", true],
        ["After Bon's death, the Young brothers immediately looked for a new singer.", false],
        ["Bon Scott's parents encouraged the band to continue.", true],
        ["Brian Johnson was from Australia, like the band.", false],
        ["The record company wanted a different cover.", true],
        ["Brian Johnson never stopped touring with AC/DC.", false],
      ],
      {
        read: [
          "## 🖤 Back in Black: the greatest comeback in rock",
          "In February 1980, AC/DC were close to the top. After years of playing small clubs in Australia and touring endlessly in Europe and America, the band's album Highway to Hell had finally made them stars. Their singer, Bon Scott, with his wild voice and cheeky smile, was at the center of it all. Then, on the morning of 19 February 1980, Bon was found dead in a car in London. He was 33.",
          "For the band, the shock was enormous. The guitarist brothers Angus and Malcolm Young had lost not just a singer, but a friend and a big brother figure. They seriously considered ending AC/DC. How could they go on without Bon? Who could possibly replace him? And wouldn't fans accuse them of betraying him if they tried?",
          "The turning point came from an unexpected place: Bon's own family. At the funeral, his parents told the brothers that Bon would have wanted them to carry on. Bon, they said, had always talked about the band as his life. Stopping now would mean that everything he had worked for would disappear. Malcolm later explained that this conversation gave them permission to continue — and the strength to do it.",
          "Finding a new singer was not easy. Many people auditioned. In the end, the band chose Brian Johnson, a singer from the north-east of England who had once fronted a band called Geordie. The story goes that Bon himself had once seen Brian perform and had described him as a great rock-and-roll singer. Brian was nervous: he knew that many fans would compare him with Bon, and some would refuse to accept him at all.",
          "Just weeks later, the band flew to Compass Point Studios in the Bahamas to record with the producer Robert John \"Mutt\" Lange. Conditions weren't perfect. A tropical storm hit the island, the electricity kept failing, and the band were grieving. But they worked fast and hard, and they had a clear idea: the new album would be a tribute to Bon. They insisted on an all-black cover, as a sign of mourning; the record company was not happy, but the band refused to change it. The first song, \"Hells Bells\", begins with the slow sound of a bell, like a funeral. The title song announced to the world that AC/DC were \"back in black\".",
          "The album was released in July 1980. Critics who had predicted the end of the band had to eat their words. Back in Black became one of the best-selling albums in history, with around 50 million copies sold worldwide. Songs like \"You Shook Me All Night Long\" and \"Back in Black\" are still played in stadiums, films and sports arenas today.",
          "The story didn't end there. In 2016, doctors warned Brian Johnson that he could lose his hearing completely if he kept performing, and he had to leave a world tour. Many people thought it was the end for him. But after years of treatment, he returned to record the album Power Up in 2020 — another comeback.",
          "What can we learn from AC/DC? Perhaps that grief and success are not opposites. The band didn't forget Bon; they carried him with them. Sometimes the best way to honor what we have lost is to keep going. 🤘",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What was the turning point for the band?", options: ["*Bon's parents told them he would have wanted them to carry on.", "A record company offered them money.", "Fans asked them to continue."] },
      { q: "Why was Brian Johnson nervous?", options: ["*Fans would compare him with Bon.", "He had never sung rock before.", "He didn't like the Bahamas."] },
      { q: "What problems did they have in the Bahamas?", options: ["*a tropical storm and electricity failures", "no studio", "a lost guitar"] },
      { q: "How is the album a tribute to Bon?", options: ["*the black cover and the bell at the start", "Bon's photo on the cover", "Bon's old recordings on it"] },
      { q: "What is the writer's final message?", options: ["*Keeping going can be a way to honor what we have lost.", "Bands should never change singers.", "Success makes grief disappear."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a little rude but funny: [cheeky]\n2. being disloyal to someone who trusted you: [betraying]\n3. performed a short test to get a part or a job: [auditioned]\n4. very sad because someone has died: [grieving]\n5. great sadness after a death, shown in public: [mourning]\n6. show respect for someone: [honor]",
    ),
  ]),

  section("Language: Retell the story", [
    drag(
      "Retell the story with reporting verbs. Complete.",
      "After Bon's death, the brothers considered [ending] the band. Bon's parents encouraged them [to] carry on. The band insisted [on] using an all-black cover, and they refused [to] change it. Critics had predicted that the band [would] break up. In 2016, doctors warned Brian [not] to keep performing. 🎸",
      ["end", "about", "will"],
    ),
    order("Put the events in order.", [[
      "Bon Scott died in London.",
      "The brothers thought about ending the band.",
      "Bon's parents encouraged them to carry on.",
      "Brian Johnson joined as the new singer.",
      "The band recorded the album in the Bahamas.",
      "Back in Black was released with an all-black cover.",
      "Brian had to stop touring because of his hearing.",
      "Brian returned to record Power Up.",
    ].join("\n")], "lines"),
  ]),

  section("Listening: Comebacks", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast about comebacks: Leo tells how his band nearly broke up, and Ruslan tells how getting lost changed his life. First listen: *What helped each of them to bounce back?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about comebacks.",
      "**Zarina:** Welcome back! This week's topic is comebacks — those moments when life knocks you down and you get back up. My guests are Leo, a musician, and Ruslan, who works in mountain rescue. Leo, you told me your band almost broke up a few years ago.\n\n**Leo:** It did. We'd been playing for eight years, and we'd finally got a contract with a record label. We recorded an album, we were sure it would change everything — and it sold about three hundred copies. Most of them to our parents.\n\n**Zarina:** Ouch.\n\n**Leo:** Then our singer left. She said she was tired of being poor and wanted a normal job, which, honestly, I understood. Our drummer accused me of wasting everybody's time. And for about six months, I didn't touch my guitar.\n\n**Zarina:** What changed?\n\n**Leo:** A strange thing. My dad found an old cassette of the band playing in his garage when we were sixteen. Terrible sound, terrible songs, but you could hear how much fun we were having. He played it to me and said, \"You didn't start this to be famous. You started it because you loved it.\" That was the turning point.\n\n**Zarina:** So you got back together?\n\n**Leo:** Slowly. I apologized to the drummer for some things I'd said. He apologized too. We agreed to play only for fun, in small places, and stop worrying about record labels. And funnily enough, that's when people started coming to our concerts. We're playing at the winter festival next week.\n\n**Zarina:** That's wonderful. Ruslan, your story is quite different.\n\n**Ruslan:** It is. A few years ago, I went for a walk in the mountains alone. I left the path, the fog came down, and I got completely lost. I spent a night outside. More than fifty volunteers searched for me, and a helicopter found me the next day.\n\n**Zarina:** That must have been terrifying.\n\n**Ruslan:** It was. But the hardest part came after. I felt so ashamed. All those people had risked their lives because I'd made a stupid mistake. For months I couldn't even look at the mountains. My friends kept telling me to forget about it, but I couldn't.\n\n**Zarina:** So what helped you?\n\n**Ruslan:** One of the rescuers called me a few weeks later. I thought he was going to criticize me. Instead, he invited me to a training day. He said that the best rescuers are often people who know what it feels like to be lost. I went, mostly because I felt I owed them. And I've been with the team ever since.\n\n**Zarina:** So the worst night of your life became the start of something.\n\n**Ruslan:** Exactly. Now, when we find someone, I know exactly what they're feeling. I tell them what that rescuer told me: everybody makes mistakes. What matters is what you do next.\n\n**Zarina:** Final question for you both. What advice would you give someone who's just had a big setback?\n\n**Leo:** Give yourself time. Don't decide anything important in the first week.\n\n**Ruslan:** And don't do it alone. Let people help you. I needed fifty people to find me — and one to bring me back.\n\n**Zarina:** Leo, Ruslan, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Leo's singer leave?", options: ["*She was tired of being poor and wanted a normal job.", "She argued with Leo.", "She started her own band."] },
      { q: "What was the turning point for Leo?", options: ["*His dad played him an old cassette of the band.", "A record label called him.", "He won a competition."] },
      { q: "How did Ruslan feel after the rescue?", options: ["*ashamed", "proud", "angry"] },
      { q: "What did the rescuer do a few weeks later?", options: ["*invited Ruslan to a training day", "criticized him", "asked him for money"] },
      { q: "What is Ruslan's advice?", options: ["*Don't deal with a setback alone.", "Never go to the mountains.", "Forget about your mistakes."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo's band's album sold about three thousand copies.", false],
      ["Leo's drummer accused him of wasting everybody's time.", true],
      ["Leo didn't play the guitar for about six months.", true],
      ["Ruslan was found by a helicopter.", true],
      ["Ruslan's friends told him to forget about it.", true],
      ["Leo advises making important decisions quickly.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. Our drummer [accused] me of wasting everybody's time.\n2. That was the [turning] point.\n3. We [agreed] to play only for fun.\n4. I felt so [ashamed].\n5. He [invited] me to a training day.\n6. Give yourself [time].",
    ),
    choose(
      "Review: module 7 grammar. Choose.",
      "1. The drummer accused Leo [*of wasting/to waste] everybody's time.\n2. Leo apologized [*for saying/to say] some things.\n3. They agreed [*to play/playing] only for fun.\n4. Ruslan's friends kept telling him [*to forget/forgetting] about it.\n5. The rescuer said the best rescuers [*are/were] often people who have been lost. (still true)\n6. Leo's dad said Leo [*had started/starts] the band because he loved it.",
    ),
  ]),

  section("Let's talk: Picking yourself up", [
    sort("What helps people bounce back after a setback? Sort the ideas. (Discuss — there's no single answer! 😄)", {
      "👍 usually helps": ["talking to friends", "giving yourself time", "remembering why you started", "learning from the mistake"],
      "👎 usually doesn't help": ["pretending nothing happened", "blaming everyone else", "deciding everything in the first week", "dealing with it completely alone"],
    }),
    text(
      "💪 Your story",
      "- Tell your teacher about a setback — yours, someone you know, a famous person or a team. What happened? What was the turning point? (1–2 minutes)\n- What do you think makes some people more resilient than others?\n- Leo's dad said: “You didn't start this to be famous.” Is there something you started for love, not for success? 🎸",
    ),
    tip("Be sensitive: the student chooses how personal to be (a sports team or a film character is fine). Push for reporting verbs and reported speech in the story: *My coach told me… My friends encouraged me to…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A problem that stops your progress for a while is a ___.", options: ["*setback", "comeback", "tribute"] },
      { q: "She's very ___ — nothing stops her for long.", options: ["*resilient", "grieving", "cheeky"] },
      { q: "The album paid ___ to Bon Scott.", options: ["*tribute", "respect to", "honor of"] },
      { q: "Bon's parents encouraged the band ___ on.", options: ["*to carry", "carrying", "carry"] },
    ]),
    box(
      "Phrase of the day: fall seven times, stand up eight",
      "💪 A Japanese proverb (七転び八起き, nana korobi ya oki): what matters is not how often you fall, but that you always get up again.\n\n*Who is the most resilient person you know?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. Losing the match was just a [setback]. We'll win next time.\n2. She bounced [back] after a difficult year.\n3. The concert paid [tribute] to the band's late guitarist.\n4. Meeting my teacher was a [turning] point in my life.\n5. Don't give [up] — you're nearly there!\n6. After ten years, the singer made a [comeback].",
      ),
      drag(
        "Complete the summary of the AC/DC story.",
        "In 1980, AC/DC's singer Bon Scott [died] in London. The band considered breaking [up], but Bon's parents encouraged them to [carry] on. They chose Brian Johnson as their new [singer] and recorded the album in the Bahamas. The black cover was a sign of [mourning]. The album became one of the best-[selling] albums in history.",
        ["broke", "stop", "drummer"],
      ),
      match("Match.", [
        ["a setback", "a problem that stops progress"],
        ["bounce back", "recover quickly"],
        ["resilient", "able to recover from difficulties"],
        ["persevere", "keep trying"],
        ["grief", "deep sadness after a death"],
        ["pay tribute to", "show respect for"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      write("Write an article (140–190 words) for a website called “Comeback stories”: the story of a person, team or band who came back after a setback (real, famous or someone you know). Include the turning point and what we can learn. Use at least four reporting verbs.", 140),
      record("Record a 1-minute answer: “What advice would you give someone who has just had a big setback?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
