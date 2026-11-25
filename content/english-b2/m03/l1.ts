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

// 3.1 It came to me in a dream — G: perfect and passive infinitives and gerunds (to have done, to be told, having done, being asked), "is said / claimed / seems to have done"; verbs of perception + object + infinitive or -ing (I heard him play / playing). V: creativity (inspiration, come up with, a eureka moment, writer's block, sleep on it…). S: where do ideas come from? Main format: a "who dreamed it?" match + a long reading (ideas that came in dreams, ~560 words) + a long listening (Zarina's podcast with Leo and Madina, ~3:20). Rock easter egg: the riff of "(I Can't Get No) Satisfaction". Video at home.
// Facts checked: Keith Richards — woke up in a hotel room in Clearwater, Florida, in May 1965, recorded the riff on a portable cassette recorder, followed by about 40 minutes of snoring; he imagined it for horns, the fuzz pedal (Gibson Maestro) was meant as a stand-in; it became the Rolling Stones' first US No. 1. Paul McCartney — woke up with the melody of "Yesterday" (1965), working title "Scrambled Eggs", asked people for weeks if they knew it. Mary Shelley — the idea for "Frankenstein" came in a vivid waking dream in June 1816 at Lake Geneva (Villa Diodati), as she wrote in the 1831 introduction. August Kekulé — said in 1890 that he had dreamed of a snake biting its own tail before understanding the ring structure of benzene (his story is doubted by some historians). Dmitri Mendeleev — is said to have seen the periodic table in a dream (1869; based on a colleague's account, disputed). Larry Page — told Michigan graduates in 2009 that the idea of downloading the whole web came after he woke up from a dream at 23. Sleep and insight — Wagner et al., Nature (2004): people who slept were more than twice as likely to find a hidden rule in a task (about 59% vs 23%).
export default lesson("b2-3.1", "It came to me in a dream", () => [
  section("Warm-up: Who dreamed it?", [
    box(
      "Today you will…",
      "- discover famous ideas that came in dreams 🌙\n- use advanced forms: *He's said to have dreamed it. I hate being interrupted.* 🧠\n- talk about where YOUR best ideas come from 💡",
    ),
    match("These ideas are said to have come in dreams. Match the person and the idea. 🌙", [
      ["Keith Richards (The Rolling Stones)", "the guitar riff of “Satisfaction” 🎸"],
      ["Paul McCartney (The Beatles)", "the melody of “Yesterday” 🎹"],
      ["Mary Shelley", "the story of Frankenstein 📖"],
      ["August Kekulé", "the ring shape of a chemical molecule 🐍"],
      ["Dmitri Mendeleev", "the periodic table 🧪"],
      ["Larry Page", "the idea that grew into Google 🔍"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which story surprised you most? Which one is hard to believe?\n- Have you ever woken up with an idea, a melody or a solution to a problem?\n- Where and when do you have your best ideas — in the shower, on a walk, late at night? 🚿🚶🌙",
    ),
    tip("Don't confirm the details yet — the reading tells the stories. Note how the student says *He dreamed / He's said to have dreamed* — that's today's grammar."),
  ]),

  section("Vocabulary: Creativity", [
    words("Creativity", [
      ["inspiration", "✨ a sudden good idea, or something that gives you ideas"],
      ["come up with", "💡 think of an idea or a plan", "She came up with a brilliant name for the café."],
      ["a eureka moment", "🛁 the moment you suddenly understand or find the answer"],
      ["a flash of inspiration", "⚡ a sudden clever idea"],
      ["think outside the box", "📦 think in a new, unusual way"],
      ["writer's block", "🧱 when a writer can't think of anything to write"],
      ["sleep on it", "😴 wait until tomorrow before deciding"],
      ["original — imaginative", "🌟 new, not copied — 🎨 full of new ideas"],
      ["a breakthrough", "🚀 an important discovery after a lot of work"],
      ["daydream", "☁️ think about pleasant things instead of what you're doing"],
      ["subconscious", "🧠 the part of your mind that works without you knowing"],
      ["vivid", "🌈 very clear and bright (a dream, a memory)"],
    ]),
    match("Match.", [
      ["come up", "with an idea"],
      ["think outside", "the box"],
      ["a flash of", "inspiration"],
      ["suffer from", "writer's block"],
      ["make a scientific", "breakthrough"],
      ["Don't decide now —", "sleep on it."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. I had a very [vivid] dream last night — I remember every color.\n2. Stop [daydreaming] and listen to me! ☁️\n3. Her paintings are so [original] — nobody paints like her.\n4. I've had [writer's block] for weeks. I can't write a single line.\n5. The answer came to me in a sudden [eureka] moment in the shower. 🚿\n6. The new vaccine was a medical [breakthrough].\n7. Some scientists believe our [subconscious] keeps working on problems while we sleep.\n8. Where do you get your [inspiration] from?",
    ),
  ]),

  section("Reading: Ideas from the night", [
    tip("A long text (~560 words). First reading — 5 minutes: *Does the writer believe dreams really create ideas?* Then the tasks. Ask the student to underline every *to have + 3rd form* and *being / having + 3rd form*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Keith Richards recorded the riff and then fell asleep again.", true],
        ["Richards wanted the riff to be played on a fuzz guitar from the start.", false],
        ["McCartney was sure at first that he had written something original.", false],
        ["Mary Shelley's idea for Frankenstein came during a stay near Lake Geneva.", true],
        ["All historians accept Kekulé's story about the snake.", false],
        ["In the 2004 study, sleep made people better at finding a hidden rule.", true],
        ["The writer says you should wait for ideas to come in dreams.", false],
      ],
      {
        read: [
          "## 🌙 Ideas from the night",
          "One night in May 1965, in a hotel room in Clearwater, Florida, Keith Richards of the Rolling Stones woke up with a melody in his head. Half asleep, he picked up his guitar and a small cassette recorder, played the riff a few times and fell back asleep. The next morning he found the tape: a few seconds of guitar, followed by about forty minutes of him snoring. That riff became *(I Can't Get No) Satisfaction*, the band's first number one in the United States. Richards actually imagined it being played by a horn section; the famous fuzzy guitar sound was only supposed to be a placeholder. 🎸",
          "He isn't the only musician who seems to have found his best idea in bed. In the same year, Paul McCartney woke up with the complete melody of *Yesterday*. He was so sure he must have heard it somewhere that for weeks he played it to friends, asking if they recognized it. Nobody did. Until he wrote proper lyrics, he sang it with the words \"Scrambled eggs…\".",
          "Writers and scientists tell similar stories. In June 1816, during a stormy holiday near Lake Geneva, the young Mary Shelley was challenged to write a ghost story. Unable to sleep one night, she saw — in what she later called a waking dream — a scientist kneeling beside the creature he had made. The result was *Frankenstein*. The chemist August Kekulé claimed to have dreamed of a snake biting its own tail before understanding the ring structure of benzene, and the Russian chemist Dmitri Mendeleev is said to have seen the periodic table in a dream. Historians are not sure that either story happened exactly as told — but both men clearly liked being remembered for them.",
          "**Is there any science behind it?** Surprisingly, yes. In 2004, researchers in Germany gave people a number puzzle with a hidden shortcut. Participants who had slept for eight hours between training and testing were more than twice as likely to discover the shortcut as those who had stayed awake. While we sleep, the brain seems to replay and reorganize what we have learned, sometimes connecting ideas that we would never link when we are awake and focused.",
          "That doesn't mean you can simply go to bed and wait for a masterpiece. Notice what all these people had in common: Richards had been playing guitar for years, McCartney had written dozens of songs, Kekulé had spent a long time studying molecules. The dream didn't create the idea from nothing; it put the final piece in a puzzle that they had been working on for a long time. Inspiration, as the painter Pablo Picasso is often quoted as saying, exists — but it has to find you working.",
          "So what can we learn? First, take your problems to bed with you: think about them before you sleep, and don't be afraid of leaving them unsolved for a night. Second, keep a notebook — or a phone — next to your bed. Ideas that seem brilliant at 3 a.m. disappear by breakfast, and not everyone is lucky enough to have recorded them on tape. And finally, if you wake up with a melody you think you've heard before, ask around. It might just be your *Yesterday*. 🎶",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did Richards imagine the riff being played?", options: ["*by horns", "on a fuzz guitar", "on a piano"] },
      { q: "Why did McCartney play “Yesterday” to his friends?", options: ["*He thought he might have copied it.", "He wanted them to write the lyrics.", "He needed a title."] },
      { q: "What did the 2004 study show?", options: ["*Sleep helped people find a hidden shortcut.", "People can't learn while they sleep.", "Dreams are always about work."] },
      { q: "What did all the dreamers have in common?", options: ["*They had worked on their field for a long time.", "They were all musicians.", "They all slept very little."] },
      { q: "What practical advice does the writer give?", options: ["*Keep a notebook next to your bed.", "Sleep more than ten hours.", "Never think about problems at night."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. breathing noisily while sleeping: [snoring]\n2. something used for now, until the real thing is ready: a [placeholder]\n3. knew because you had seen or heard it before: [recognized/recognised]\n4. a great work of art: a [masterpiece]\n5. found something new: [discover/discovered]\n6. not solved: [unsolved]",
    ),
  ]),

  section("Grammar: Perfect and passive forms", [
    quiz("Notice the rule 🔍 Look: “Mendeleev is said to have seen the table in a dream.” · “Richards imagined it being played by horns.” · “Both men liked being remembered for their stories.”", [
      { q: "“to have seen” refers to…", options: ["*an earlier time (the past) than “is said”", "the same time as now", "the future"] },
      { q: "“being played” is…", options: ["*a passive -ing form (someone plays it)", "an active form", "a perfect infinitive"] },
      { q: "We use “to have + 3rd form” after verbs like…", options: ["*seem, claim, be said, pretend", "enjoy, avoid, mind", "can, must, should"] },
    ]),
    table("perfect-passive-forms"),
    choose(
      "Choose the best form.",
      "1. He seems [*to have forgotten/to forget] my birthday — he hasn't called. 😢\n2. I hate [*being interrupted/interrupting] when I'm working.\n3. She's said [*to have written/to write] the whole novel in a month.\n4. [*Having finished/Finishing] the song, they went straight to the studio.\n5. Everyone wants [*to be chosen/to choose] for the team.\n6. He denied [*having copied/to have copied] the melody.\n7. I'd like [*to have seen/to see] the Beatles live — but I was born too late!\n8. Children love [*being read/reading] to at bedtime. 📚",
    ),
    gaps(
      "Rewrite with the word in brackets. Use a perfect or passive form.",
      "1. People say that Mendeleev dreamed the table. → Mendeleev is said [to have dreamed/to have dreamt] the table. (SAID)\n2. It seems that he lost his notes. → He seems [to have lost] his notes. (SEEMS)\n3. I don't like it when people tell me what to do. → I don't like [being told] what to do. (BEING)\n4. She regrets that she didn't keep the tape. → She regrets not [having kept] the tape. (HAVING)\n5. Nobody likes it when people ignore them. → Nobody likes [being ignored]. (IGNORED)\n6. He pretended that he had read the book. → He pretended [to have read] the book. (PRETENDED)",
    ),
  ]),

  section("Grammar: I heard him play / playing", [
    table("perception-verbs"),
    choose(
      "Choose: the whole action (infinitive) or part of it (-ing)?",
      "1. I heard someone [*playing/play] the piano as I walked past — it was beautiful. (I heard part of it)\n2. We watched the band [*play/playing] their whole set from the first row. 🎸 (the whole thing)\n3. I saw him [*drop/dropping] the glass — it smashed on the floor. (a short complete action)\n4. Can you smell something [*burning/burn]? 🔥\n5. I felt the ground [*shake/shaking] for a second.\n6. She noticed a man [*standing/stand] outside the window for a long time.",
    ),
    drag(
      "Complete Leo's message.",
      "Last night I couldn't sleep, so I went downstairs. Suddenly I heard someone [playing] the guitar in the garden — it was my neighbor! I watched him [play] three songs, then he saw me [standing] at the window and waved. I'd love [to be] invited to jam with him. I regret not [having] talked to him before. He's said [to have] played in a famous band in the nineties! 🎸",
      ["play to", "being", "has"],
    ),
    order("Make sentences.", [
      "He is said to have dreamed the melody.",
      "I hate being interrupted.",
      "I heard her singing in the kitchen.",
      "Having finished the song, they went home.",
      "She seems to have lost her notebook.",
    ]),
    tip("Say it right: in *to have done* the *have* is weak — /tə əv/: *He seems to've forgotten.* Practice the order sentences at natural speed."),
  ]),

  section("Listening: Where do ideas come from?", [
    tip("A long listening — about 3 minutes 20 seconds. Zarina's podcast: Leo (a guitarist — you know him) and Madina (a designer) talk about where their ideas come from. First listen: *What's the main difference between Leo's and Madina's ways of working?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about creativity.",
      "**Zarina:** Welcome back! Today's question is one I get asked all the time: where do ideas come from? My guests are Leo, a guitarist and songwriter, and Madina, a designer who runs her own studio. Leo, you're a big rock fan. Is it true that the riff of \"Satisfaction\" came to Keith Richards in a dream?\n\n**Leo:** So the story goes, and I believe it. He's said to have woken up in the middle of the night, recorded the riff on a little cassette player, and gone back to sleep. The next morning there were a few seconds of guitar and about forty minutes of snoring. It's my favorite story in rock history.\n\n**Zarina:** Has anything like that ever happened to you?\n\n**Leo:** Once! I woke up at four in the morning with a chorus in my head. I was so afraid of forgetting it that I sang it into my phone in a whisper, because my neighbors were asleep. When I listened to it the next day, it was terrible. Honestly, it sounded like a cat being chased by a vacuum cleaner. But one line was good, and that line became our best song.\n\n**Zarina:** So the dream gave you a starting point.\n\n**Leo:** Exactly. But most of my ideas don't come from dreams. They come from playing every day. I hate being told that musicians just wait for inspiration. If I only played when I felt inspired, I'd play about twice a year.\n\n**Zarina:** Madina, what about you?\n\n**Madina:** For me it's almost the opposite. When I sit at my desk and try to have an idea, nothing happens. My best ideas come when I'm doing something boring — washing the dishes, taking the bus, walking to the bakery. I think my brain needs to stop trying.\n\n**Zarina:** Do you remember a specific example?\n\n**Madina:** Yes. Last year we had to design a logo for a music festival, and we'd been working on it for two weeks. Nothing was right. Then one evening I was watching my grandmother make dough for bread, and I saw her shaping it into a spiral. Suddenly I had it: a spiral that looks like a sound wave and a snail at the same time. The festival was in the mountains, slow and relaxed, so it was perfect.\n\n**Leo:** I love that logo, by the way.\n\n**Madina:** Thank you! But again, the idea came after two weeks of work. I don't think it would have come if I hadn't spent all that time sketching.\n\n**Zarina:** That's what scientists say too, isn't it? That sleep and rest help the brain connect things you've already been thinking about.\n\n**Leo:** Right. You have to feed the machine first.\n\n**Zarina:** What do you do when you're stuck?\n\n**Madina:** I change something. I go to a café, I draw with my left hand, I set myself silly limits — only three colors, only circles. Limits are strangely good for creativity.\n\n**Leo:** I take a walk without my phone. And I listen to music I don't usually like. Last month I listened to a lot of jazz, and I came up with a riff that I'd never have written otherwise.\n\n**Zarina:** And one last question. Is there an idea you regret not having written down?\n\n**Leo:** Hundreds! The worst was a whole song I dreamed on a train. I was too lazy to open my eyes, and when I woke up, it was gone.\n\n**Madina:** Mine was a dream about a building made of books. I still think about it.\n\n**Zarina:** So, listeners, keep a notebook by your bed. Thank you both!",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Leo sing into his phone in a whisper?", options: ["*His neighbors were asleep.", "He had lost his voice.", "He was on a train."] },
      { q: "What did Leo think of his 4 a.m. recording the next day?", options: ["*It was mostly terrible, but one line was good.", "It was perfect.", "He couldn't hear anything."] },
      { q: "When does Madina have her best ideas?", options: ["*when she's doing something boring", "when she sits at her desk", "late at night in the studio"] },
      { q: "What inspired the festival logo?", options: ["*her grandmother shaping bread dough", "a snail in the garden", "a dream about the mountains"] },
      { q: "What does Leo do when he's stuck?", options: ["*takes a walk without his phone and listens to different music", "goes to bed early", "asks Madina for ideas"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo believes the story about Keith Richards.", true],
      ["Leo plays only when he feels inspired.", false],
      ["The logo looks like a sound wave and a snail.", true],
      ["Madina thinks the idea would have come without the two weeks of work.", false],
      ["Madina sometimes sets herself limits, like using only three colors.", true],
      ["Leo wrote down the song he dreamed on the train.", false],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Leo: He's said to have [woken] up in the middle of the night.\n2. Leo: I was so afraid of [forgetting] it.\n3. Leo: I hate [being] told that musicians just wait for inspiration.\n4. Madina: I saw her [shaping] it into a spiral.\n5. Leo: I came [up] with a riff that I'd never have written otherwise.\n6. Zarina: Is there an idea you regret not having [written] down?",
    ),
  ]),

  section("Let's talk: My creative process", [
    text(
      "How do you get ideas? 💡",
      "Talk to your teacher for 2–3 minutes. Then ask the same questions back.\n\n- Where and when do you have your best ideas? Give an example.\n- What do you do when you're stuck? *I hate being… / I love being…*\n- Tell me about an idea you regret not having followed.\n- Someone you know who is said to be very creative — what makes them special?\n\nFinally: **is creativity a talent, or a habit?** 🤔 (Keep your answer — it's the topic of our first debate in lesson 3.3!)",
    ),
    tip("Note the student's answer to the last question — use it to choose sides fairly in the debate in 3.3. Correct forms like *I hate to be told* → *I hate being told*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "He's believed ___ the song in ten minutes.", options: ["*to have written", "to write", "writing"] },
      { q: "I don't like ___ what to do.", options: ["*being told", "telling", "to tell"] },
      { q: "I heard someone ___ — it was a beautiful song.", options: ["*singing", "to sing", "sung"] },
      { q: "If you can't decide, ___ on it.", options: ["*sleep", "dream", "think out"] },
    ]),
    box(
      "Phrase of the day: inspiration exists, but it has to find you working",
      "🎨 A line often attributed to Pablo Picasso: ideas come to people who are already working hard.\n\n*Do you agree? Or have you had a great idea out of nowhere?*",
    ),
  ]),

  homework(
    [
      video("Watch: Perfect infinitive and perfect gerund (MrSkypelessons).", "UOWpiSJgLTk"),
      choose(
        "Choose.",
        "1. She claims [*to have met/to meet] Keith Richards in 1999.\n2. I can't stand [*being kept/keeping] waiting.\n3. [*Having seen/Seeing] the film twice, I knew the ending.\n4. He hopes [*to be invited/to invite] to the festival.\n5. I saw the cat [*jump/jumped] onto the table.\n6. They admitted [*having lost/to have lost] the tickets.\n7. He seems [*to have been/to be] ill last week.\n8. I love [*being surprised/surprising] on my birthday. 🎁",
      ),
      gaps(
        "Complete with a perfect or passive form of the verb in brackets.",
        "1. Mozart is said [to have written] his first symphony at eight. (write)\n2. I hate [being woken] up early on Sundays. (wake)\n3. [Having finished] the project, we went out to celebrate. (finish)\n4. He pretended [to have read] the whole book. (read)\n5. The winners are going [to be announced] tomorrow. (announce)\n6. She regrets not [having taken] more photos. (take)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      sort("Infinitive or -ing after the verb of perception? Sort. 🧩", {
        "🎬 the whole action (infinitive)": ["I saw him fall.", "We watched them finish the race.", "I heard her close the door.", "She felt the train stop."],
        "⏳ part of the action (-ing)": ["I saw him running.", "We watched them practicing.", "I heard her singing.", "She felt the floor shaking."],
      }),
      write("Write an article (140–190 words) for a student magazine: “Where do good ideas come from?” Describe your own creative process with an example, and give readers two tips. Use at least three perfect or passive forms (to have done, being told, having finished…).", 140, {
        read: "*Tip:* start with a question or a famous story (like the riff that came in a dream), then your experience, then your tips.",
      }),
      record("Record a 1-minute voice note: tell the story of an idea that came to you unexpectedly. 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
