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

// 6.3 Behind the screen — skills lesson, no new grammar: review of the passive (all forms). V: films and series (a stunt, special effects, dubbing, a set, the cast…). S: talk about a favorite film or series. Main format: an emoji film quiz + a long reading (five film jobs you never see, ~420 words) + a video (the Academy: foley artists) + a long listening (an interview with a dubbing actor, ~2 min) + a film review written in class.
export default lesson("b1-6.3", "Behind the screen", () => [
  section("Warm-up: Emoji cinema", [
    box(
      "Today you will…",
      "- discover the secret jobs behind films and series 🎬\n- watch how movie sounds are really made 🔊\n- write a review of a film or series you love ⭐",
    ),
    quiz("Guess the film from the emojis! 🍿", [
      { q: "🦁👑🌅", options: ["*The Lion King", "Madagascar", "Jungle Book"] },
      { q: "🚢🧊💔", options: ["*Titanic", "Frozen", "Life of Pi"] },
      { q: "🦖🏝️🚙", options: ["*Jurassic Park", "King Kong", "Godzilla"] },
      { q: "🧙‍♂️⚡🦉", options: ["*Harry Potter", "The Lord of the Rings", "Star Wars"] },
      { q: "🐠🔍🌊", options: ["*Finding Nemo", "The Little Mermaid", "Shark Tale"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Do you prefer watching films in the original language with subtitles, or dubbed? Why? 🎧\n- Which film or series made you believe something impossible was real?\n- If you could work on a film set, which job would you choose — actor, director, or something behind the camera?",
    ),
    tip("Make it a race: the student answers the emoji quiz as fast as possible. Then ask them to create an emoji puzzle for their favorite film for you to guess."),
  ]),

  section("Vocabulary: Films and series", [
    words("Films and series", [
      ["a set", "🎬 the place where a film is shot", "The set was built in a studio."],
      ["shoot — shot — shot", "🎥 film a scene", "The film was shot in Morocco."],
      ["the cast", "👥 all the actors in a film"],
      ["a stunt — a stunt performer", "🤸 a dangerous action in a film — the person who does it"],
      ["special effects (VFX)", "✨ tricks to make impossible things look real"],
      ["dub — dubbing", "🎙️ replace the voices with another language"],
      ["subtitles", "💬 the words at the bottom of the screen"],
      ["a scene", "🎞️ one part of a film in one place"],
      ["a soundtrack", "🎵 the music of a film"],
      ["a plot", "📖 the story of a film or book"],
      ["release", "📅 make a film available to the public", "The film was released in 2019."],
      ["a blockbuster", "💥 a very popular film that makes a lot of money"],
    ]),
    match("Match.", [
      ["shoot", "a scene"],
      ["dub", "a film into Russian"],
      ["watch it with", "subtitles"],
      ["perform", "a stunt"],
      ["release", "a new series"],
      ["build", "a set"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Most of the film was [shot] in New Zealand. 🎥\n2. The [cast] includes three Oscar winners.\n3. The car jump wasn't done by the actor — a [stunt] performer did it.\n4. The dragons were created with special [effects]. 🐉\n5. I always watch series with English [subtitles] — it helps me learn.\n6. The [soundtrack] is amazing — I listen to it all the time. 🎵\n7. I didn't understand the [plot] — it was too complicated!\n8. The new superhero film is a [blockbuster] — it's made millions.",
    ),
    sort("People or things? Sort. 👥🎬", {
      "👥 people": ["the director", "a stunt performer", "the cast", "a voice actor", "the producer"],
      "🎬 things": ["the set", "the soundtrack", "subtitles", "the plot", "special effects"],
    }),
  ]),

  section("Reading: Five jobs you never see", [
    tip("A long text (~420 words). First reading — 4 minutes: *Which job would you like to try?* Then the tasks. Notice all the passives: *are made, was performed, is recorded, can be added*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Stunt performers often wear the same costume as the actor.", true],
        ["Foley sounds are usually recorded during the shooting of the film.", false],
        ["A continuity supervisor checks that small details stay the same between shots.", true],
        ["VFX artists can add whole cities that were never built.", true],
        ["Dubbing actors only need to translate the words.", false],
        ["The writer says these jobs are not important.", false],
      ],
      {
        read: [
          "## 🎬 Five jobs you never see",
          "When we watch a film, we see the actors and maybe remember the director's name. But behind every scene, hundreds of people are working. Their names are shown in the credits at the end — the part most of us skip. Here are five of these hidden heroes.",
          "**🤸 The stunt performer.** When a hero jumps from a building or is thrown through a window, it's usually not the famous actor. Dangerous scenes are performed by stunt performers, who wear the same costume and hair as the actor and are filmed from far away or from behind. They train for years, and every stunt is planned very carefully to keep them safe.",
          "**🔊 The foley artist.** Many of the sounds you hear in a film were not recorded on the set. Footsteps, doors, punches, even the sound of a horse — they're often added later in a special studio by foley artists. They use surprising objects: celery can be snapped to sound like breaking bones, and coconut shells have been used for horses' hooves for decades!",
          "**📋 The continuity supervisor.** A scene can be shot over several days. If an actor's coffee cup is full in one shot and empty in the next, viewers will notice. The continuity supervisor takes photos and notes to make sure every detail — hair, clothes, objects — stays the same.",
          "**✨ The VFX artist.** Monsters, explosions, flying superheroes — they're created on computers by visual effects artists. Whole cities can be added behind the actors, and crowds of thousands can be made from just a few extras. In big blockbusters, the VFX team can have more than a thousand people.",
          "**🎙️ The dubbing actor.** When a film is released in another country, it's often dubbed. Dubbing actors don't just translate: the new words must match the actor's lips and emotions. A good dubbing actor can make you forget the film was ever in another language.",
          "Next time you watch a film, stay for the credits. Thousands of names will be shown — and now you know what some of them do. 👏",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why are stunt performers filmed from far away or from behind?", options: ["*so viewers think it's the actor", "because they're shy", "to save money"] },
      { q: "What are coconut shells used for?", options: ["*the sound of horses' hooves", "the sound of rain", "breaking bones"] },
      { q: "What would a continuity supervisor notice?", options: ["*a coffee cup that changes from full to empty", "a bad actor", "a boring plot"] },
      { q: "What must dubbing actors match?", options: ["*the actor's lips and emotions", "the soundtrack", "the subtitles"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. the list of names at the end of a film: the [credits]\n2. people who appear in the background of a scene: [extras]\n3. clothes an actor wears in a film: a [costume]\n4. a vegetable that makes a breaking sound: [celery]\n5. big bangs and fire, like a bomb: [explosions]\n6. the people who watch: [viewers]",
    ),
  ]),

  section("Video: How movie sounds are made", [
    tip("The Academy (the Oscars), about 7 minutes: real foley artists at work. Before watching: *Guess — how do they make the sound of footsteps in snow?* After watching, let the student react first."),
    video("Watch: Foley artists — how movie sound effects are made.", "U_tqB4IZvMk"),
    text(
      "After the video: talk to your teacher.",
      "- Which sound surprised you most? How was it made?\n- Would you like to be a foley artist? Why / why not? 🔊\n- Try it! Make a sound with objects around you — your teacher guesses what it is. 😄",
    ),
  ]),

  section("Listening: A voice from another world", [
    tip("A long listening — about 2 minutes. Zarina, a new character, works as a voice actor. First listen: *What does she like and dislike about her job?* Second listen: the tasks."),
    ...listening(
      "Listen to an interview with Zarina, a voice actor who dubs films and cartoons.",
      "**Host:** Zarina, you're a voice actor. You've been the voice of a dragon, a talking cat and a queen. How did it all start?\n\n**Zarina:** By accident, really! I studied acting, but I wasn't getting many roles. Then a friend who worked at a dubbing studio asked me to help with a small cartoon character — a mouse with three lines. I loved it. That was eight years ago, and I've been doing it ever since.\n\n**Host:** How is a film dubbed? What actually happens?\n\n**Zarina:** First, the script is translated. But it can't just be translated word for word, because the new lines must fit the actor's lip movements. So it's adapted by a special writer. Then I'm given my lines, and I stand in a small dark studio with headphones. The scene is played on a screen, and I record my lines — often one sentence at a time.\n\n**Host:** One sentence at a time?\n\n**Zarina:** Yes! A ninety-minute film can take a whole week. Sometimes a single line is recorded twenty times until the director is happy. And I don't usually see the whole film — just my scenes. So sometimes I don't know how the story ends until it's released! 😄\n\n**Host:** What's the hardest part?\n\n**Zarina:** Crying and screaming. If my character is in a battle, I have to shout for hours. After those days, I can't speak at all. And emotional scenes are hard, because you need to cry on the spot — in a dark room, with no other actors.\n\n**Host:** And the best part?\n\n**Zarina:** Children. Last year a little girl was told that I was the voice of her favorite princess. She looked at me and said, \"But you're not a princess, you're just a normal lady!\" 😂 That's the magic of the job — nobody knows my face, but millions of people know my voice.\n\n**Host:** Zarina, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "How did Zarina start dubbing?", options: ["*A friend asked her to voice a small cartoon character.", "She won a competition.", "She studied dubbing at university."] },
      { q: "Why can't the script be translated word for word?", options: ["*The lines must fit the actor's lip movements.", "It's too expensive.", "The director doesn't allow it."] },
      { q: "How long can it take to dub a 90-minute film?", options: ["*a whole week", "one day", "a month"] },
      { q: "What's the hardest part for Zarina?", options: ["*crying and screaming", "reading the script", "working with children"] },
      { q: "What did the little girl say?", options: ["*Zarina looked like a normal lady, not a princess.", "Zarina's voice was bad.", "She wanted to be a voice actor."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Zarina has been a voice actor for eight years.", true],
      ["Zarina records her lines with the other actors in the same room.", false],
      ["Some lines are recorded many times.", true],
      ["Zarina always watches the whole film before she starts.", false],
      ["Millions of people know Zarina's face.", false],
    ]),
    gaps(
      "Complete what Zarina said. Listen again if you need.",
      "1. First, the script is [translated].\n2. So it's [adapted] by a special writer.\n3. Then I'm [given] my lines.\n4. Sometimes a single line is [recorded] twenty times.\n5. I don't know how the story ends until it's [released]!\n6. Last year a little girl was [told] that I was the voice of her favorite princess.",
    ),
  ]),

  section("Review: the passive", [
    choose(
      "Choose the right form.",
      "1. Most films [*are dubbed/dub] in Kazakhstan and Russia.\n2. The dragon [*was created/created] on a computer.\n3. This series [*has been watched/has watched] by 50 million people.\n4. Stunts [*must be planned/must plan] very carefully.\n5. The next film [*will be released/will release] in December.\n6. The sounds [*were recorded/recorded] in a studio later.\n7. Whole cities [*can be added/can add] with VFX.\n8. The director [*chose/was chosen] Zarina for the role of the queen.",
    ),
    drag(
      "Complete the film facts.",
      "The first feature-length animated film by Disney, “Snow White”, [was] released in 1937. Today, animated films [are] made on computers, and they [can] be watched on any phone. Many famous scenes [have] been copied in other films. The music for a big film [is] often recorded by a full orchestra. Next year, hundreds of new series [will] be released! 🎬",
      ["has", "be", "did"],
    ),
  ]),

  section("Let's talk: Your favorite film", [
    text(
      "Tell your teacher about a film or series you love 🍿",
      "- What is it called? When was it released? Where was it shot?\n- What's the plot (without spoilers! 🤫)?\n- Who's in the cast? Who's your favorite character?\n- What makes it special — the soundtrack, the special effects, the story?\n- Do you watch it dubbed or with subtitles?\n\nThen your teacher tells you about theirs — ask questions!",
    ),
    tip("Encourage passives naturally: *It was directed by… It was shot in… It's been watched by…* Then a quick debate: *Are films with lots of special effects better or worse than old films?*"),
  ]),

  section("Writing: A review", [
    order(
      "Put the example review in order.",
      [[
        "Have you ever watched a film that made you laugh and cry at the same time?",
        "“Coco” was released by Pixar in 2017 and is set in Mexico.",
        "It's about a boy who dreams of becoming a musician, although his family has banned music.",
        "The animation is beautiful, and the soundtrack is unforgettable.",
        "I'd recommend it to anyone — just bring tissues! 🎶",
      ].join("\n")],
      "lines",
    ),
    write("Write a review of a film or series for a student website (100 words). Say what it's about, what's good (and bad) about it, and who you'd recommend it to. Use at least three passives.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "replace the voices with another language =", options: ["*dub", "shoot", "release"] },
      { q: "all the actors in a film =", options: ["*the cast", "the set", "the plot"] },
      { q: "Many sounds ___ later in a studio.", options: ["*are added", "add", "are adding"] },
      { q: "The film ___ in New Zealand.", options: ["*was shot", "shot", "is shoot"] },
    ]),
    box(
      "Phrase of the day: spoiler alert!",
      "🤫 **Spoiler alert!** = Warning: I'm going to tell you what happens in the story.\n\n*Spoiler alert — the main character dies at the end!* 😱",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. The film was [shot] in Iceland. 🎥\n2. I prefer films with [subtitles], not dubbed.\n3. Dangerous scenes are done by a [stunt] performer.\n4. The [soundtrack] won an award.\n5. The new series will be [released] on Friday.\n6. Monsters are usually created with special [effects].",
      ),
      choose(
        "Choose.",
        "1. The Harry Potter books [*have been translated/have translated] into more than 80 languages.\n2. This scene [*was filmed/filmed] at night.\n3. Phones [*must be switched/must switch] off in the cinema.\n4. The winners [*will be announced/will announce] tonight.\n5. The film [*is shown/shows] in 3D in our cinema.\n6. The actor [*was hurt/hurt himself was] during a stunt.",
      ),
      sort("Film words: genre or job? Sort. 🎭", {
        "🎭 genres": ["comedy", "horror", "documentary", "thriller"],
        "🧑‍💼 jobs": ["director", "producer", "editor", "screenwriter"],
      }),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Write a short article (100+ words): “Dubbed or subtitles — which is better?” Give your opinion with reasons and examples.", 100),
      record("Record 1 minute: Tell a friend about a film you've seen recently — without spoilers! 🎬", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
