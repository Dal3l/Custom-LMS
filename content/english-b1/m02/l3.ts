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
  picture,
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

// 2.3 The concert of the century — skills lesson (music easter egg): Live Aid, 13 July 1985, and Queen at Wembley. No new grammar: review of narrative tenses and the Past Perfect. V: concerts and charity. S: tell about an event you'll never forget. Main format: a long reading (~430 words) + photos + the official Live Aid video of "Radio Ga Ga" + a long listening (a fan who was there, ~2 min).
// Facts checked: date and venues, Geldof & Ure, Ethiopian famine, Band Aid 1984, ~72,000 at Wembley, ~1.9 billion viewers (estimate), Phil Collins on Concorde, Queen's ~20-minute set opening with Bohemian Rhapsody and Radio Ga Ga.
export default lesson("b1-2.3", "The concert of the century", () => [
  section("Warm-up: Live music", [
    box(
      "Today you will…",
      "- read and hear the story of **Live Aid** — the biggest concert of the 1980s 🎸\n- watch one of the most famous live performances ever 🎤\n- tell the story of an event you'll never forget ✨",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best live event you've ever been to — a concert, a match, a festival? What made it special? 🎶\n- Would you rather watch your favorite band live in a huge stadium or in a tiny club? Why?\n- If you could travel back in time to one concert in history, which one would you choose? 🕰️",
    ),
    tip("This is the owner's favorite topic 🎸 — be enthusiastic! If the student doesn't know Queen, that's fine: the lesson tells the story from the beginning. Ask what music their parents listened to in the 1980s."),
    picture("Live Aid, 13 July 1985: the stage at JFK Stadium in Philadelphia.", ["photos/liveaid-jfk.jpg"]),
  ]),

  section("Vocabulary: Concerts and charity", [
    words("Concerts and charity", [
      ["a charity", "❤️ an organization that helps people in need"],
      ["raise money (for)", "💰 collect money for a good cause", "They raised money for hospitals."],
      ["a famine", "🌾❌ a time when many people have no food"],
      ["a crowd", "👥👥 a large group of people in one place"],
      ["a performance", "🎤 the act of singing, playing or acting in front of people"],
      ["perform — a performer", "🎸 sing or play for an audience — the person who does it"],
      ["an audience", "👀 the people who watch or listen", "The TV audience was huge."],
      ["a stadium", "🏟️ a very big place for sport or concerts"],
      ["live", "📺 happening now, not recorded", "The concert was shown live on TV."],
      ["headline", "⭐ be the main act at a concert or festival"],
      ["a setlist", "📝 the list of songs a band plays"],
      ["unforgettable", "✨ so special that you'll never forget it"],
    ]),
    match("Match.", [
      ["raise", "money for a charity"],
      ["a huge", "crowd"],
      ["shown live", "on TV"],
      ["a famous", "performance"],
      ["an unforgettable", "night"],
      ["headline", "a festival"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Thousands of people gave money to the [charity]. ❤️\n2. The concert [raised] two million dollars for children's hospitals.\n3. Millions of people had no food because of the [famine].\n4. The [crowd] sang every word of every song. 👥\n5. The match was shown [live] on TV, so we watched it at home.\n6. It was the best [performance] I've ever seen — the singer was amazing. 🎤\n7. The [stadium] was full: there were 70,000 people there.\n8. My first concert was [unforgettable]. I still remember every minute! ✨",
    ),
  ]),

  section("Reading: The day the music changed the world", [
    tip("A long text (~430 words). Before reading, show the photo of Freddie Mercury and ask: *Who is this? What do you know about him?* First reading — 4 minutes: *Why was Live Aid organized?* Then the tasks. Point out the narrative tenses in the text (*had seen, were dancing, decided*)."),
    picture("Freddie Mercury of Queen on stage at Live Aid, 1985.", ["photos/liveaid-freddie.jpg"]),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Live Aid took place in two cities on the same day.", true],
        ["Bob Geldof organized the concert after he had seen a TV report about Ethiopia.", true],
        ["Before Live Aid, Bob Geldof had already recorded a charity song.", true],
        ["Phil Collins played in London but not in Philadelphia.", false],
        ["Queen played for over an hour.", false],
        ["Queen's performance is still famous today.", true],
      ],
      {
        read: [
          "## 🎸 The day the music changed the world",
          "On Saturday, 13 July 1985, the world watched the same concert. In fact, it was two concerts: one at Wembley Stadium in London and the other at JFK Stadium in Philadelphia, USA. About 72,000 people were dancing in the London sunshine, while tens of thousands more were singing in Philadelphia. And at home, according to estimates, almost two billion people in many countries were watching on TV. It was called **Live Aid**.",
          "The idea had started a year earlier. Bob Geldof, an Irish singer, had seen a TV news report about a terrible famine in Ethiopia. Millions of people had no food. Geldof was shocked. Together with the Scottish musician Midge Ure, he wrote a song, *Do They Know It's Christmas?*, and asked the biggest British stars to sing it. The group was called **Band Aid**, and the single became a huge hit at the end of 1984. But Geldof wanted to do more. He decided to organize a concert that the whole world could see.",
          "It wasn't easy. The organizers had only a few months to prepare, and they needed dozens of famous artists to agree. Eventually, many of the biggest names in music said yes. One singer, Phil Collins, performed in London and then flew across the Atlantic on Concorde, the supersonic plane, so he could play in Philadelphia too — on the same day! ✈️",
          "But one performance became a legend. In the early evening, Queen walked onto the stage at Wembley. Their singer, Freddie Mercury, sat at the piano and started *Bohemian Rhapsody*. Then, during *Radio Ga Ga*, the whole stadium clapped their hands above their heads at exactly the same time — 72,000 people moving together. Between songs, Freddie sang \"Ay-oh!\" and the crowd sang it back to him, again and again. The band played for only about twenty minutes, but many people who were there say they had never seen anything like it.",
          "Today, many music fans and critics call it the greatest live performance in rock history. In 2018, the film *Bohemian Rhapsody* recreated the whole show, and a new generation discovered it. Live Aid didn't end world hunger, of course. But it showed something important: music can bring the whole world together — even if only for one day. 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What was Band Aid?", options: ["*a group of stars who recorded a charity song", "a medicine for the famine", "the name of the concert in Philadelphia"] },
      { q: "Why was Live Aid difficult to organize?", options: ["*There wasn't much time and many stars had to agree.", "Nobody wanted to watch it.", "The stadiums were too small."] },
      { q: "What was special about Phil Collins's day?", options: ["*He performed on two continents.", "He played the piano for Queen.", "He organized the concert."] },
      { q: "What did the crowd do during “Radio Ga Ga”?", options: ["*clapped above their heads together", "sat down and listened quietly", "left the stadium"] },
      { q: "What is the main idea of the last paragraph?", options: ["*Music can bring people together.", "Live Aid ended hunger in the world.", "The film was better than the concert."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a guess about a number: an [estimate]\n2. very surprised and upset: [shocked]\n3. a song sold on its own, not on an album: a [single]\n4. faster than the speed of sound: [supersonic]\n5. a very famous story or person, remembered for a long time: a [legend]\n6. made something happen again, as a copy: [recreated]",
    ),
  ]),

  section("Video: Queen at Live Aid", [
    tip("The official Live Aid video, about 4 minutes. Before watching: *Watch the crowd during the chorus — what do they do?* After watching, let the student react freely before the questions. If the student loves it, Bohemian Rhapsody from the same concert is on the same channel."),
    video("Watch: Queen — “Radio Ga Ga” (Live Aid, Wembley, 1985).", "o-0ygW-B_gI"),
    text(
      "After the video: talk to your teacher.",
      "- What did you notice about the crowd? How do you think it felt to be there? 👏\n- Why do you think this performance became so famous? Was it the music, Freddie, or the moment?\n- Is there a performer today who could do the same with a stadium? Who? 🎤",
    ),
  ]),

  section("Listening: I was there", [
    tip("A long listening — about 2 minutes. A man remembers the day he was at Wembley as a teenager. First listen: *How did he feel at different moments of the day?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio interview. Tom was at Wembley on 13 July 1985.",
      "**Host:** Tom, you were at Wembley for Live Aid. How old were you?\n\n**Tom:** I was sixteen. My older brother had queued for hours to buy two tickets, and he took me with him. My mom wasn't very happy about it! 😄\n\n**Host:** What do you remember about the morning?\n\n**Tom:** The heat, mostly. It was a really hot day, and we'd arrived very early to get a good place near the front. By the time the first band came on, just after midday, we'd already drunk all our water. The atmosphere was incredible, though. Everybody knew why we were there. It wasn't just a concert — it was for the people in Ethiopia.\n\n**Host:** Were you a Queen fan before that day?\n\n**Tom:** Honestly? Not really. I liked a couple of their songs, but I was more into punk. A lot of people said Queen's best years were behind them. And then they came on, and… everything changed.\n\n**Host:** Tell us about that moment.\n\n**Tom:** Well, it was early evening, and people were getting tired. Lots of fans were sitting on the grass. Then Freddie Mercury ran onto the stage, sat at the piano and started Bohemian Rhapsody. Suddenly everybody was standing up. When they played Radio Ga Ga, I looked around and the whole stadium was clapping above their heads at exactly the same time. I'd never seen anything like it. I had goosebumps! And then Freddie started singing \"Ay-oh!\" and we all sang it back. It felt like he was talking to every single person.\n\n**Host:** How long did they play?\n\n**Tom:** About twenty minutes. It felt like five. When they finished with We Are the Champions, my brother was crying. He still says he wasn't! 😄\n\n**Host:** Did that day change anything for you?\n\n**Tom:** Completely. I'd always thought one person couldn't do much. But Bob Geldof had started with one idea after watching the news, and look what happened. A few years later, I started volunteering for a charity, and I still do it today. So yes — that day changed my life.\n\n**Host:** What a story. Thank you, Tom.",
    ),
    quiz("Listen and choose.", [
      { q: "How did Tom get his ticket?", options: ["*His brother had queued to buy tickets.", "He won it on the radio.", "His mom bought it."] },
      { q: "What was the problem in the morning?", options: ["*It was very hot and they had no water left.", "It was raining.", "They couldn't find their places."] },
      { q: "What kind of music did Tom like before that day?", options: ["*punk", "Queen", "jazz"] },
      { q: "What were many fans doing before Queen came on?", options: ["*sitting on the grass, tired", "leaving the stadium", "dancing to Queen songs"] },
      { q: "How did the day change Tom's life?", options: ["*He started volunteering for a charity.", "He became a musician.", "He moved to London."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Tom's mom was happy that he went to the concert.", false],
      ["They had arrived early to be near the front.", true],
      ["Tom had been a big Queen fan for years.", false],
      ["Queen's performance felt very long to Tom.", false],
      ["Tom's brother cried during the last song.", true],
      ["Tom still volunteers today.", true],
    ]),
  ]),

  section("Review: telling the story", [
    choose(
      "Choose the right form.",
      "1. Bob Geldof [*had seen/was seeing] a report about the famine a year before the concert.\n2. While Queen [*were playing/had played], the crowd clapped above their heads.\n3. By the time Queen came on, many fans [*had been/were being] in the sun for hours.\n4. Tom [*had never seen/never saw already] anything like it before.\n5. Phil Collins [*flew/was flying] to Philadelphia on Concorde after his first show.\n6. Tom's brother [*had queued/was queued] for hours to buy the tickets.\n7. When Queen [*finished/had been finishing], everyone was singing.\n8. Freddie [*sat/was sitting] at the piano and started the first song.",
    ),
    drag(
      "Complete the summary.",
      "On 13 July 1985, while the sun [was] shining over London, 72,000 people [were] waiting for their favorite bands. A year before, Bob Geldof [had] seen a report about a famine and [decided] to help. [As soon as] Queen came on stage, the crowd stood up. [By the time] they finished, everyone was singing. [Eventually] the concert ended, but people still remember it today.",
      ["had been", "while", "in the end", "decides"],
    ),
    order("Put Live Aid's story in order.", [
      [
        "Bob Geldof saw a TV report about the famine in Ethiopia.",
        "He and Midge Ure wrote a charity song with Band Aid.",
        "The song became a huge hit at the end of 1984.",
        "They organized two concerts on the same day in July 1985.",
        "Queen played one of the most famous live sets in history.",
      ].join("\n"),
    ], "lines"),
  ]),

  section("Let's talk: An unforgettable event", [
    text(
      "Tell your story ✨",
      "Tell your teacher about an event you'll never forget — a concert, a match, a wedding, a festival, a trip. Use the plan:\n\n1. **Background**: when, where, who with, what the weather / atmosphere was like (*It was raining… everyone was waiting…*)\n2. **Before**: what had happened before (*I had waited for months… I'd never seen…*)\n3. **Main events**: what happened (*Suddenly… As soon as…*)\n4. **Feelings**: *I had goosebumps! I couldn't believe it!*\n5. **The end**: *In the end… Since then…*",
    ),
    text(
      "Talk to your teacher.",
      "- Can a concert or a song really change the world? Give an example. 🌍\n- Would you give money to a charity because a famous person asks you to? Why / why not?\n- Which song would you choose for 72,000 people to sing together? 🎶",
    ),
    tip("Give the student 2 minutes to plan with the five steps, then 2–3 minutes to tell the story. Ask follow-up questions with the Past Perfect: *Had you ever been there before? Had you met them before?* Note good phrases and 2–3 mistakes."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Live Aid took place in…", options: ["*London and Philadelphia", "London and Paris", "only London"] },
      { q: "collect money for a good cause =", options: ["*raise money", "spend money", "save money"] },
      { q: "the people who watch a show =", options: ["*the audience", "the setlist", "the charity"] },
      { q: "By the time Queen came on, the fans ___ for hours.", options: ["*had waited", "have waited", "wait"] },
    ]),
    box(
      "Phrase of the day: goosebumps",
      "😮 **goosebumps** = small bumps on your skin when you're cold, scared or very moved by something.\n\n*When the whole stadium started singing, I had goosebumps!*",
    ),
  ]),

  homework(
    [
      sort("Music words: people, places or events? Sort. 🎶", {
        "👥 people": ["performer", "audience", "crowd", "fan"],
        "🏟️ places": ["stadium", "stage", "concert hall", "club"],
        "🎪 events": ["festival", "gig", "tour", "charity concert"],
      }),
      quiz("Live Aid: what do you remember?", [
        { q: "When was Live Aid?", options: ["*13 July 1985", "25 December 1984", "13 July 1995"] },
        { q: "Why was it organized?", options: ["*to raise money for people in a famine in Ethiopia", "to celebrate Queen's anniversary", "to open a new stadium"] },
        { q: "Who flew on Concorde to play in two cities?", options: ["*Phil Collins", "Freddie Mercury", "Bob Geldof"] },
        { q: "Which song did Queen start with?", options: ["*Bohemian Rhapsody", "We Are the Champions", "Radio Ga Ga"] },
      ]),
      gaps(
        "Complete.",
        "1. The band is going on a world [tour] next year. 🌍\n2. The [audience] stood up and clapped for ten minutes.\n3. They played six songs. I've got the full [setlist] on my phone.\n4. The concert [raised] a lot of money for the hospital.\n5. Thousands of people came to the music [festival]. 🎪\n6. The singer walked onto the [stage] and everybody screamed.",
      ),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      write("Write an article for a music website (100–120 words): “An event I'll never forget.” Describe the background, what had happened before, the main events and your feelings.", 100, {
        read: "*Example:* **My first stadium concert** 🎸 I'll never forget the summer of 2019. I had saved money for months to buy a ticket, and I'd never been to a big concert before. When we arrived, it was raining and thousands of people were waiting outside. By the time the band came on, we were completely wet — but nobody cared! As soon as they played the first song, the whole stadium started singing. I had goosebumps. In the end, we sang until midnight and lost our voices. Since then, live music has been a big part of my life.",
      }),
      record("Record 1–2 minutes: Tell a friend about Live Aid and Queen's performance — what happened, why it was special, and what you think about it. 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
