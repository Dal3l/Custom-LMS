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

// 7.1 I'll never forget meeting… — G: verb + -ing (enjoy, avoid, mind…) / verb + to (decide, refuse, promise…); preposition + -ing; remember / forget / stop / try with a change of meaning. V: relationships, phrasal verbs (get on with, fall out, make up, ask out, break up, look up to). Say it right: linking in phrasal verbs. S: tell the story of an important friendship. Main format: a proverbs warm-up + a reading (four "how we met" stories, ~400 words). Video at home.
export default lesson("b1-7.1", "I'll never forget meeting…", () => [
  section("Warm-up: Friendship proverbs", [
    box(
      "Today you will…",
      "- tell stories about friends and important people 👫\n- use -ing or to: I enjoy **talking** to her. We decided **to meet**. 🔀\n- learn the difference: remember **meeting** vs remember **to meet** 🧠",
    ),
    match("Match the beginnings and endings of these English proverbs. 🗝️", [
      ["A friend in need", "is a friend indeed."],
      ["Birds of a feather", "flock together."],
      ["Actions speak", "louder than words."],
      ["Out of sight,", "out of mind."],
      ["The more,", "the merrier."],
      ["Absence makes the heart", "grow fonder."],
    ]),
    text(
      "Talk to your teacher.",
      "- Which proverb do you agree with most? Which one is NOT true for you? Why?\n- Is there a similar proverb about friendship in your language? Translate it! 🌍\n- What's more important in a friend: being similar to you, or being different?",
    ),
    tip("Explain proverbs the student doesn't know with a short example from your life. Ask for a proverb in their language — it's always a great conversation starter."),
  ]),

  section("Vocabulary: Relationships", [
    words("Relationships", [
      ["get on (well) with", "😊 have a good relationship with", "I get on well with my sister."],
      ["fall out (with)", "💢 argue and stop being friends", "They fell out over money."],
      ["make up", "🤝 become friends again after an argument"],
      ["ask (someone) out", "💐 invite someone on a romantic date"],
      ["break up (with)", "💔 end a romantic relationship"],
      ["look up to", "⭐ admire and respect someone", "I've always looked up to my older brother."],
      ["let (someone) down", "😞 disappoint someone", "Don't let me down — you promised!"],
      ["count on", "🫶 trust someone to help you", "You can always count on her."],
      ["a close friend — an acquaintance", "💞 a very good friend — 🙂 someone you know a little"],
      ["have a lot in common", "🎯 like the same things"],
      ["trust — loyal", "🔒 believe someone is honest — 🐕 always supports you"],
      ["drift apart", "🛶 slowly become less close", "We drifted apart after school."],
    ]),
    match("Match the phrasal verbs and the meanings.", [
      ["get on with", "have a good relationship"],
      ["fall out with", "argue and stop being friends"],
      ["make up", "become friends again"],
      ["look up to", "admire someone"],
      ["let someone down", "disappoint someone"],
      ["count on", "trust someone to help"],
      ["drift apart", "slowly become less close"],
      ["break up", "end a romantic relationship"],
    ]),
    gaps(
      "Complete with one word.",
      "1. I get [on] really well with my colleagues. 😊\n2. They fell [out] over a stupid joke and didn't talk for a year.\n3. After the argument, we said sorry and made [up]. 🤝\n4. He finally asked her [out] — and she said yes! 💐\n5. I've always looked up [to] my grandmother. She's so strong.\n6. You promised to help me. Please don't let me [down].\n7. When I'm in trouble, I can always count [on] my best friend.\n8. We were close at school, but we drifted [apart] when we moved to different cities.",
    ),
    quiz("Choose the right word.", [
      { q: "I know him a little — he's just an ___.", options: ["*acquaintance", "close friend", "loyal"] },
      { q: "A ___ friend always supports you, even when things are hard.", options: ["*loyal", "close-up", "drifted"] },
      { q: "We like the same music, films and food — we have a lot in ___.", options: ["*common", "together", "similar"] },
      { q: "She ___ up with her boyfriend after three years.", options: ["*broke", "fell", "made"] },
    ]),
  ]),

  section("Reading: How we met", [
    tip("Four short stories (~400 words). First reading: *Which story is the most romantic? The funniest? The saddest?* Then the tasks. Ask the student to underline all verbs + -ing and verbs + to — the grammar of the next section."),
    trueFalse(
      "Read the stories. True or false?",
      [
        ["Laura and Kenji met because they both enjoyed hiking.", true],
        ["Arman and Bolat's friendship started after an argument.", true],
        ["Dana refused to talk to Leo for a whole year.", false],
        ["Saule remembers meeting her husband at a library.", true],
        ["Saule's husband asked her out on the first day they met.", false],
        ["All four stories are about romantic relationships.", false],
      ],
      {
        read: [
          "## 👫 How we met",
          "*We asked four readers to tell us about the day they met someone important.*",
          "**🏔️ Laura & Kenji — hiking buddies.** \"I'd just moved to Almaty and decided to join a hiking club to meet people. On my first hike, I slipped on some ice, and the guy behind me stopped to help me. That was Kenji. We kept talking all the way to the top and discovered we both enjoy cooking terrible curries! 😄 Now we go hiking every weekend. I can't imagine living here without him as a friend.\" — Laura",
          "**⚽ Arman & Bolat — enemies first.** \"In the first week of school, Bolat kicked a ball into my face — by accident, he says! I refused to speak to him for a month. Then our teacher made us sit together. I couldn't stand him at first, but I soon stopped being angry because he made me laugh so much. That was 35 years ago. He's still my closest friend, and I still remember him promising to buy me ice cream as a sorry. He never did!\" — Arman",
          "**🎨 Dana & Leo — school friends.** \"Leo and I were in the same class, but we didn't get on well at first. He kept making jokes during my presentations! In our last year, we were asked to work on a project together, and I discovered he was really good at drawing. We spent hours designing posters. We drifted apart when he moved to Berlin, but last year we met by chance in a café — and it felt like no time had passed.\" — Dana",
          "**📚 Saule & Nurlan — a love story.** \"I'll never forget meeting my husband. It was 1977, in the university library. We both wanted to borrow the same book, and he offered to let me take it first. Every day after that, he came to the library at the same time. It took him two months to ask me out — he was so shy! We were married for 42 years. I still remember him waiting outside the library with a flower.\" — Saule 🌷",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Laura join the hiking club?", options: ["*to meet people in a new city", "because Kenji invited her", "to get fit"] },
      { q: "Why did Arman and Bolat start sitting together?", options: ["*Their teacher made them.", "They wanted to.", "Bolat asked to."] },
      { q: "What did Dana discover about Leo?", options: ["*He was good at drawing.", "He was very shy.", "He was moving to Berlin."] },
      { q: "What did Nurlan offer to do?", options: ["*let Saule take the book first", "buy her a flower", "help her study"] },
    ]),
    gaps(
      "Find words in the stories.",
      "1. lost my balance on something wet or icy: [slipped]\n2. found out something new: [discovered]\n3. not on purpose: by [accident]\n4. couldn't accept or like at all: couldn't [stand]\n5. by luck, without planning: by [chance]\n6. take something for a short time and give it back: [borrow]",
    ),
  ]),

  section("Grammar: -ing or to?", [
    quiz("Notice the rule 🔍 Look: “We both enjoy cooking.” “I refused to speak to him.” “He offered to let me take it.” “I can't imagine living here without him.”", [
      { q: "After enjoy, imagine, can't stand we use…", options: ["*verb + -ing", "to + verb", "both"] },
      { q: "After refuse, offer, decide we use…", options: ["*to + verb", "verb + -ing", "the base verb"] },
      { q: "“without him” — after a preposition (without, before, at…) we use…", options: ["*-ing", "to + verb", "the past"] },
    ]),
    table("verb-patterns"),
    choose(
      "Choose the right form.",
      "1. I enjoy [*spending/to spend] time with my grandparents.\n2. She decided [*to move/moving] to another city.\n3. Do you mind [*waiting/to wait] a few minutes?\n4. He promised [*to call/calling] me, but he didn't.\n5. I'm really good at [*listening/to listen] to people.\n6. They agreed [*to meet/meeting] on Saturday.\n7. Avoid [*arguing/to argue] when you're tired.\n8. I'd love [*to see/seeing] you again soon!",
    ),
    gaps(
      "Complete with the -ing form or to + verb.",
      "1. I can't stand [waiting] for people who are late. (wait)\n2. She refused [to apologize/to apologise]. (apologize)\n3. We're planning [to visit] our friends in Shymkent. (visit)\n4. He's interested in [learning] Japanese. (learn)\n5. I miss [talking] to you every day! (talk)\n6. They hope [to get] married next year. (get)\n7. She left without [saying] goodbye. (say)\n8. Would you like [to come] to my party? (come)",
    ),
    sort("-ing or to? Sort the verbs. 🔀", {
      "+ -ing": ["enjoy", "avoid", "mind", "finish", "can't stand", "suggest"],
      "+ to": ["decide", "refuse", "promise", "hope", "agree", "offer"],
    }),
  ]),

  section("Grammar: remember, forget, stop, try", [
    table("remember-stop-try"),
    choose(
      "Choose the right form.",
      "1. I'll never forget [*meeting/to meet] you for the first time. 🥰\n2. Don't forget [*to buy/buying] milk on your way home!\n3. I remember [*playing/to play] in the snow as a child.\n4. Please remember [*to lock/locking] the door when you leave.\n5. He stopped [*smoking/to smoke] five years ago. 🚭\n6. We stopped [*to have/having] a coffee on our long drive. ☕\n7. I tried [*to open/opening] the window, but it was stuck.\n8. Can't sleep? Try [*drinking/to drink] warm milk before bed.",
    ),
    drag(
      "Complete Saule's memories.",
      "I'll never forget [meeting] Nurlan in the library. I remember [thinking] he was very shy. He offered [to] let me take the book first. Every day he tried [to] talk to me, but he usually stopped [talking] after two sentences! 😄 Finally, he asked me out. I agreed [to] go to the cinema with him. I still miss [hearing] his laugh.",
      ["to meet", "think", "hear"],
    ),
    order("Make sentences.", [
      "I'll never forget meeting my best friend.",
      "She refused to talk to him.",
      "Remember to call your grandma.",
      "We stopped to take some photos.",
      "I enjoy spending time with my family.",
    ]),
  ]),

  section("Say it right: get on with, fall out", [
    box(
      "🗣️ Say it right",
      "In phrasal verbs, the words **link** together, and the stress is usually on the **particle** (the small word):\n\nget **ON** with → “ge-**ton**-with” · fall **OUT** → “fa-**lout**” · make **UP** → “may-**kup**” · look **UP** to\n\nA consonant + a vowel link: **ge_ton**, **fa_lout**, **ma_kup**.",
    ),
    quiz("Where's the main stress? Choose.", [
      { q: "We fell out.", options: ["*fell OUT", "FELL out"] },
      { q: "Let's make up.", options: ["*make UP", "MAKE up"] },
      { q: "I get on with her.", options: ["*get ON with her", "GET on with her"] },
      { q: "She broke up with him.", options: ["*broke UP with him", "BROKE up with him"] },
    ]),
    tip("Drill fast: *They fell out. — Then they made up. — Now they get on really well.* The student makes their own mini-story with three phrasal verbs."),
  ]),

  section("Let's talk: My people", [
    text(
      "Tell the story of an important person 💞",
      "Think of someone important in your life — a friend, a partner, a mentor, a relative. Tell your teacher:\n\n- How did you meet? Do you remember meeting them? What did you think at first?\n- What do you enjoy doing together?\n- Have you ever fallen out? How did you make up?\n- Why do you look up to them / can count on them?\n- What do you hope to do together in the future?",
    ),
    text(
      "Talk to your teacher.",
      "- Is it possible to stay friends with an ex? Why / why not? 💔\n- Have you ever drifted apart from a close friend? Would you like to get back in touch?\n- What do you refuse to do, even for a friend? 🙅\n- What's something you'll never forget doing with your friends?",
    ),
    tip("*If you have time:* “Friendship timeline” — the student draws a line of one friendship and marks 5 moments (*met, fell out, made up, moved away, met again*). You ask questions with *remember / forget / try / stop*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I enjoy ___ with my friends.", options: ["*hanging out", "to hang out", "hang out"] },
      { q: "She promised ___ me.", options: ["*to help", "helping", "help"] },
      { q: "Remember ___ the door! (a task)", options: ["*to lock", "locking", "lock"] },
      { q: "admire and respect someone =", options: ["*look up to", "let down", "fall out"] },
    ]),
    box(
      "Phrase of the day: a fair-weather friend",
      "🌤️ **a fair-weather friend** = someone who is your friend only when life is easy, and disappears when you have problems.\n\n*When I lost my job, I found out who my real friends were — and who were just fair-weather friends.*",
    ),
  ]),

  homework(
    [
      video("Watch: verbs + gerund or infinitive (stop, remember, forget).", "s1htxRUiLNk"),
      choose(
        "Choose.",
        "1. I don't mind [*helping/to help] you.\n2. We decided [*to go/going] to the mountains.\n3. I remember [*visiting/to visit] this place as a child.\n4. Don't forget [*to send/sending] me the photos!\n5. She stopped [*eating/to eat] meat last year.\n6. He's afraid of [*flying/to fly].\n7. They refused [*to pay/paying] for the broken window.\n8. Try [*turning/to turning] it off and on again. 💻",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. I don't get [on] with my neighbor.\n2. They fell [out] about politics.\n3. She's the person I look up [to] most.\n4. Don't worry, you can count [on] me.\n5. We drifted [apart] after university.\n6. He asked her [out] on a date.",
      ),
      write("Write about an important friendship (100+ words): how you met, what you enjoy doing together, a time you fell out or helped each other. Use at least five verbs + -ing / to.", 100, {
        read: "*Example:* I'll never forget meeting Aliya. It was our first day at university, and I was trying to find the right room. She offered to show me the way — we were going to the same lecture! 😄 We soon discovered we both enjoy reading fantasy books. Once we fell out because she forgot to come to my birthday party, but she apologized and promised to make it up to me…",
      }),
      record("Record 1 minute: Tell a friend about someone you look up to. Why? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
