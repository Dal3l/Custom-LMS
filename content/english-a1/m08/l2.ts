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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 8.2 Fans — G: object pronouns me / you / him / her / it / us / them. V: music, fans, fandoms. Main format: reading (a fan post) + video.
export default lesson("a1-8.2", "Fans", () => [
  section("Warm-up: Fan life", [
    box("Today you will…", "- talk about fans and fandoms\n- say *I love them! I follow her.*\n- tell about your favorite singer, band or series 🎤"),
    picture("Fans", ["photos/fan-concert.jpg", "photos/fan-cosplay.jpg"], "A big concert and a fan convention"),
    text(
      "Talk about the photos.",
      "- Photo 1: Where are the people? How do they feel? 🤩\n- Photo 2: What can fans do at a convention? (buy things, meet stars, wear costumes…)\n- Do you go to concerts? Which one is your dream concert? 🎫\n- Are you a fan of a band, a team or a series?",
    ),
  ]),

  section("Vocabulary: Fans", [
    words("Fans and fandoms", [
      ["a fan", "🤩", "I'm a big fan of this band."],
      ["a fandom", "👥💜 all the fans of a singer, a band or a series"],
      ["a band — a singer", "🎸👥 — 🎤"],
      ["an album — a song", "💿 — 🎵"],
      ["a concert — a ticket", "🎤🏟️ — 🎫"],
      ["a tour", "🌍 concerts in many cities"],
      ["merch", "👕 T-shirts, posters… with the band's name"],
      ["a lightstick", "🔦 fans bring it to K-pop concerts"],
      ["follow", "➕ on social media", "I follow her on Instagram."],
      ["a fan account", "📱 a page about a star, made by a fan"],
      ["a fan convention", "🦸 a big event for fans · also: a con"],
      ["meet", "🤝", "I want to meet them!"],
    ]),
    match("Match.", [
      ["buy", "a ticket"],
      ["go to", "a concert"],
      ["follow", "a singer"],
      ["listen to", "an album"],
      ["wear", "merch"],
    ]),
    gaps("Complete.", "1. All the fans of a band = a [fandom]\n2. You need it for a concert: a [ticket] 🎫\n3. T-shirts and posters of a band = [merch]\n4. Concerts in many cities = a [tour]"),
  ]),

  section("Reading: My fandom", [
    tip("The band in the text is made up. Ask the student about real bands and singers after reading."),
    trueFalse(
      "Read Aruzhan's post. True or false?",
      [
        ["Nova Seven is a band from Korea.", true],
        ["Aruzhan's favorite member is Jin-ho.", true],
        ["She follows them on TikTok.", false],
        ["Her parents hate their music.", false],
        ["Aruzhan has a ticket for their concert.", true],
      ],
      {
        read: [
          "## 💜 Why I love Nova Seven — by aruzhan.fan",
          "Nova Seven is a K-pop band from Seoul. There are seven members, and I love them all! 💜 My favorite member is Jin-ho. He's the main dancer — I love watching him on stage!",
          "I follow them on Instagram and YouTube. Every day I listen to their new album. My little sister is a fan too — she sings their songs with me. 🎤",
          "My parents don't mind listening to Nova Seven. My dad says: “I don't understand them, but I like the music!” 😄",
          "And the big news: Nova Seven has a world tour! The concert in Almaty is in June, and I have a ticket! 🎫 I can't wait to see them!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose: who or what is it?", [
      { q: "“I love them all!” — *them* =", options: ["*the seven members", "her parents", "the songs"] },
      { q: "“I love watching him” — *him* =", options: ["*Jin-ho", "her dad", "a fan"] },
      { q: "“she sings their songs with me” — *me* =", options: ["*Aruzhan", "her sister", "Jin-ho"] },
    ]),
    text("Talk to your teacher.", "- Is Aruzhan a big fan? Why do you think so?\n- Are you a fan of a band or a singer? Tell about them! 🎤\n- Is it OK to be “obsessed” with a band? 🤔"),
  ]),

  section("Grammar: me, him, her, them", [
    table("object-pronouns"),
    choose(
      "Choose.",
      "1. I love Taylor Swift. I listen to [*her/she] every day.\n2. BTS? I love [*them/they]!\n3. My brother likes Messi. He follows [*him/he] on Instagram.\n4. Can you help [*me/I]?\n5. This song is cool. I love [*it/them].",
    ),
    drag(
      "Complete.",
      "1. Where are my headphones? I can't find [them].\n2. My friends and I are fans. Come to the concert with [us]!\n3. Dana is my best friend. I call [her] every day.\n4. This album is great! Do you like [it]?",
      ["they", "she", "we"],
    ),
    gaps("Write the object pronoun.", "1. I → [me]\n2. he → [him]\n3. she → [her]\n4. we → [us]\n5. they → [them]"),
  ]),

  section("Video: What is a fandom?", [
    video("Watch the video about fandoms. What do fans do?", "pztu-ZzVq0o"),
    text("Talk to your teacher.", "- What fandoms are in the video?\n- What do fans do together? (make videos, go to events, write fan stories…)\n- Do you know a big fandom in your country?"),
  ]),

  section("Let's talk: My favorite artist", [
    text(
      "Tell about your favorite artist 🎤",
      "Choose a singer, a band, a team or a series. Tell your teacher:\n\n- *Who are they? Where are they from?*\n- *Why do you love them?*\n- *How often do you listen to / watch them?*\n- *Do you follow them? Do you have merch?*\n- *Do your friends like them too?*",
    ),
    text("Talk to your teacher.", "- Concert or online video — what's better? 🎫📱\n- What can you do for your favorite artist? (buy an album, go to a concert…)\n- Who do you want to meet? 🤝"),
    order("Make sentences.", ["I follow her on Instagram.", "My sister loves them.", "Can you come with us?"]),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I love BTS. I love ___ !", options: ["*them", "they", "their"] },
      { q: "Taylor Swift? I follow ___ .", options: ["*her", "she", "him"] },
      { q: "T-shirts and posters of a band =", options: ["*merch", "a tour", "a fandom"] },
    ]),
    box("Word of the day: stan", "**to stan** 💜 = to be a very big fan.\n\n*I stan this band!* (It's slang — use it with friends, not in an exam! 😄)"),
  ]),

  homework(
    [
      gaps("Complete with me, him, her, it, us or them.", "1. My cat is cute. I love [her/him/it].\n2. Where are my keys? I can't find [them].\n3. Leo is nice. I like [him].\n4. Call [me] tonight! 📞"),
      choose("Choose.", "1. [*She/Her] likes [*him/he].\n2. [*They/Them] follow [*us/we] on TikTok."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      ...listening(
        "Listen. Mia and Leo talk about a concert.",
        "**Mia:** Leo! Guess what? I have two tickets for the Imagine Dragons concert! 🎫\n\n**Leo:** No way! I love them!\n\n**Mia:** I know! So… do you want to come with me?\n\n**Leo:** Yes, of course! When is it?\n\n**Mia:** On Saturday, at 8 p.m. Can your dad drive us there?\n\n**Leo:** I can ask him. He likes rock music too!\n\n**Mia:** Great! I have a T-shirt with their name. You can wear it! 👕",
      ),
      quiz("Listen and choose.", [
        { q: "Mia has two…", options: ["*tickets", "T-shirts", "albums"] },
        { q: "The concert is on…", options: ["*Saturday", "Friday", "Sunday"] },
        { q: "“I can ask him” — *him* =", options: ["*Leo's dad", "Mia", "the singer"] },
      ]),
      video("Watch the grammar video: me, you, him, her, it, us, them.", "1vs7MQofKO8"),
    ],
    "Homework: Listening and video",
  ),
  homework(
    [
      write("Write a fan post about your favorite singer, band, team or series. Why do you love them? (40+ words)", 40, {
        read: "*Example:* I'm a big fan of Imagine Dragons. They're a rock band from the USA. I love their songs — I listen to them every day! My favorite singer in the band is Dan Reynolds. I follow him on Instagram. My dream is to go to their concert and meet them! 🎸",
      }),
      record("Record your answer: tell about your favorite artist in 1 minute — like a fan video!", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
