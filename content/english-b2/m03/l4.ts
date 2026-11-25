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

// 3.4 Practical: Brainstorming — functional language for meetings and creative work: suggesting ideas (What if we…? How about…? We could always…), building on ideas (Building on that… That gives me an idea…), reacting politely (That might work, but… I like the idea, although…), keeping the meeting on track (Let's park that for now. Shall we vote?), summing up. Review of -ing / infinitive patterns from the module. Main format: "idea killers vs idea builders" + a medium-long reading (why most brainstorms fail, ~520 words) + a long listening (Asel, Madina and Leo plan a festival stand for Asel's bakery, ~3:20) + a role-play brainstorm. Video at home (TED-Ed, creative constraints).
// Facts checked: Alex Osborn, an advertising executive (BBDO), made "brainstorming" popular in the 1940s–50s ("Applied Imagination", 1953) with four rules: no criticism, go for quantity, welcome wild ideas, combine and improve ideas; a 1958 Yale study (Taylor, Berry & Block) found that people working alone and then pooling their ideas produced more ideas than the same number of people brainstorming as a group; Diehl & Stroebe (1987) — "production blocking": in a group only one person can speak at a time; "brainwriting" (the 6-3-5 method, Bernd Rohrbach, 1968): six people write three ideas each in five minutes, then pass the paper on.
export default lesson("b2-3.4", "Practical: Brainstorming", () => [
  section("Warm-up: Idea killers", [
    box(
      "Today you will…",
      "- learn why most brainstorms don't work — and how to fix them 💡\n- suggest ideas, build on other people's ideas and disagree politely 🤝\n- run your own brainstorm 🧠⚡",
    ),
    match("“Idea killers” and better answers. Match each killer with a more helpful reply. 💀➡️💡", [
      ["“That'll never work.”", "“That might work if we…”"],
      ["“We've tried that before.”", "“What could we do differently this time?”"],
      ["“It's too expensive.”", "“Is there a cheaper way to do something similar?”"],
      ["“That's a silly idea.”", "“Interesting! What do you like about it?”"],
      ["“The boss won't like it.”", "“How could we present it so the boss likes it?”"],
      ["“Let's be realistic.”", "“Let's collect all the ideas first and choose later.”"],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever been in a meeting where good ideas were “killed”? What happened?\n- Are you the person with lots of ideas, the critic or the organizer?\n- 60-second game ⏱️: how many uses can you think of for a paperclip? Go!",
    ),
    tip("The paperclip game is a classic creativity test (the “alternative uses” task). Time it with the Timer tool. Then do it the other way: the teacher plays an idea killer, and the student must answer with a better reply."),
  ]),

  section("Vocabulary: Meetings and ideas", [
    words("Meetings and ideas", [
      ["brainstorm (v, n)", "🧠⚡ produce lots of ideas quickly"],
      ["come up with", "💡 think of (an idea, a plan, a name)"],
      ["build on (an idea)", "🧱 develop someone's idea further"],
      ["a facilitator", "🧭 the person who runs a meeting or workshop"],
      ["an agenda", "📋 a list of things to discuss in a meeting"],
      ["off-topic", "↪️ not about the subject being discussed"],
      ["reach a decision", "✅ finally decide"],
      ["follow up (on)", "📨 do the next steps after a meeting"],
      ["a deadline", "⏰ the time by which something must be done"],
      ["feasible", "🔧 possible and practical to do"],
    ]),
    match("Match.", [
      ["come up", "with a plan"],
      ["build", "on an idea"],
      ["reach", "a decision"],
      ["follow up", "on the meeting"],
      ["stick to", "the agenda"],
      ["meet", "the deadline"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. The [facilitator] kept the meeting short and focused.\n2. Let's look at the [agenda] — what's first?\n3. Is the plan [feasible], or is it too expensive?\n4. That's interesting, but it's [off-topic]. Let's talk about it later.\n5. After two hours, we finally [reached] a decision.\n6. I'll [follow] up with an email tomorrow.",
    ),
    quiz("Choose the right word.", [
      { q: "Can we ___ up with a better name?", options: ["*come", "go", "make"] },
      { q: "Great idea! Let's ___ on it.", options: ["*build", "make", "stand"] },
      { q: "We must finish by Friday — that's the ___.", options: ["*deadline", "agenda", "facilitator"] },
      { q: "Is it ___ to open a second shop this year?", options: ["*feasible", "off-topic", "agenda"] },
    ]),
  ]),

  section("Reading: Why most brainstorms fail", [
    tip("A medium-long text (~520 words). First reading — 4 minutes: *What's the writer's main suggestion?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Brainstorming was made popular by a person who worked in advertising.", true],
        ["One of Osborn's rules was to criticize weak ideas quickly.", false],
        ["In the Yale study, groups produced more ideas than people working alone.", false],
        ["In a group, only one person can speak at a time.", true],
        ["In brainwriting, people write their ideas before discussing them.", true],
        ["The writer thinks meetings are useless for creative work.", false],
      ],
      {
        read: [
          "## 💡 Why most brainstorms fail — and how to fix them",
          "Picture a typical brainstorm. Eight people around a table, a whiteboard, a manager saying, \"There are no bad ideas!\" Forty minutes later, there are three ideas on the board, two of them from the manager, and everyone is checking their phone. Sound familiar?",
          "**Where it started.** The word *brainstorming* was made popular in the 1940s and 50s by Alex Osborn, an American advertising executive. In his book *Applied Imagination* (1953), he suggested four rules: don't criticize ideas during the session; go for quantity, not quality; welcome wild ideas; and combine and improve the ideas of others. Osborn claimed that a group following these rules could produce twice as many ideas as the same people working alone.",
          "**The problem.** Scientists soon decided to test that claim. In 1958, researchers at Yale University compared groups of four people brainstorming together with four people working separately, whose ideas were then put together. The people working alone produced more ideas — and better ones. Since then, many other studies have reached similar conclusions.",
          "Why? There are several reasons. First, in a group only one person can speak at a time. While you're waiting for your turn, you forget your idea or decide it isn't good enough — researchers call this *production blocking*. Second, people worry about being judged, especially when the boss is in the room, however often they're told there are no bad ideas. Third, some people relax and let others do the work. And finally, groups tend to follow the first idea that is said out loud, instead of exploring different directions.",
          "**The fix: think alone, then together.** This doesn't mean that meetings are useless. Groups are very good at something else: improving, combining and choosing ideas. The trick is to separate the two jobs. One popular method is *brainwriting*. In its classic version, called 6-3-5, six people each write three ideas in five minutes, then pass their paper to the next person, who adds three more ideas building on the ones already there. In half an hour, the group can produce over a hundred ideas — without anyone waiting for their turn to speak.",
          "**Five tips for your next brainstorm:**",
          "- Send the question before the meeting, so people can think on their own first.",
          "- Start with five minutes of silent writing. Collect all the ideas before anyone comments.",
          "- Ban the phrase \"That won't work\" — replace it with \"That might work if…\".",
          "- If an interesting idea is off-topic, \"park\" it on a separate list for later.",
          "- End with a clear decision: vote for the top three ideas and agree who will do what next.",
          "Creativity isn't about the loudest person in the room. It's about giving every brain in the room a chance to work. 🧠",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did the Yale study compare?", options: ["*people brainstorming in groups and people working alone", "managers and workers", "advertising and science teams"] },
      { q: "What is “production blocking”?", options: ["*losing ideas while you wait for your turn to speak", "the boss blocking ideas", "not having any ideas"] },
      { q: "What are groups good at, according to the writer?", options: ["*improving, combining and choosing ideas", "producing the most ideas", "working without a leader"] },
      { q: "What should you do with an off-topic idea?", options: ["*put it on a separate list for later", "ignore it", "discuss it immediately"] },
    ]),
    gaps(
      "Find words in the text.",
      "1. a person with an important job in a company: an [executive]\n2. say that something is bad: [criticize]\n3. looking at different possibilities: [exploring]\n4. not connected with the main subject: [off-topic]\n5. officially say that something is not allowed: [ban]\n6. put together: [combine]",
    ),
  ]),

  section("Language: Running a brainstorm", [
    table("brainstorm-phrases"),
    sort("What is each phrase for? Sort. 🧩", {
      "💡 suggesting": ["What if we…?", "How about…?", "We could always…", "Why don't we…?"],
      "🔧 building on": ["Building on that, …", "That gives me an idea.", "And we could also…"],
      "🤔 reacting politely": ["That might work, but…", "I like it, although…", "I see your point, but…"],
      "🧭 managing": ["Let's park that for now.", "Shall we vote?", "To sum up, …"],
    }),
    choose(
      "Choose the most helpful phrase.",
      "1. [*What if we/You must] tried selling coffee in the mornings?\n2. That's interesting. [*Building on that/No], we could add music.\n3. [*That might work, but/That's stupid,] we'd need more staff.\n4. That's a good idea, but it's off-topic. [*Let's park it for now./Stop talking about it.]\n5. We've got twelve ideas. [*Shall we vote?/Who cares?]\n6. [*To sum up/Anyway], we're going to try the first three ideas.",
    ),
    drag(
      "Complete the meeting.",
      "A: OK, the question is: how can we get more students to the English club?\nB: [What] if we showed films in English every Friday?\nC: Building [on] that, we could have a short quiz after each film.\nA: I like it, [although] some students may not stay late.\nB: True. We [could] always show shorter films.\nC: And how [about] free pizza? 🍕\nA: Ha! Let's [park] that one. Shall we vote on the film idea?",
      ["When", "but", "must"],
    ),
    order("Make phrases.", [
      "What if we tried something different?",
      "That gives me an idea.",
      "That might work, but it's expensive.",
      "Let's park that for now.",
      "Shall we vote on the top three ideas?",
    ]),
  ]),

  section("Listening: A stand at the food festival", [
    tip("A long listening — about 3 minutes 20 seconds. Asel needs ideas for her bakery's stand at the city food festival. She brainstorms with Madina and Leo. First listen: *Which three ideas do they choose?* Second listen: the tasks. Ask the student to note the phrases for suggesting, building and managing."),
    ...listening(
      "Listen to Asel, Madina and Leo brainstorming ideas for a festival stand.",
      "**Asel:** Thanks for coming, both of you. So, the city food festival is in three weeks, and we've got a stand for two days. Last year I just sold bread and cakes, and it was fine, but nobody remembered us. This year I want people to talk about the bakery. Let's do something different. First, five minutes of silence — everyone writes down as many ideas as possible. No judging yet.\n\n**Leo:** Silent brainstorming? I like it. Go.\n\n**Asel:** Okay, time's up. Madina, you start.\n\n**Madina:** My first idea is a live baking show. What if we brought a small oven and baked in front of people? The smell alone would attract half the festival.\n\n**Leo:** Building on that, we could let kids decorate their own cookies. Parents would stay longer, and the kids would take photos.\n\n**Asel:** I love that. Although, a real oven at an outdoor stand… I'll need to check the safety rules.\n\n**Madina:** True. We could always bake the cookies here, at the bakery, and only decorate them at the festival.\n\n**Asel:** That might work. Leo, what did you write?\n\n**Leo:** Music, obviously. How about a small acoustic stage next to the stand? My band could play a few songs every hour. Rock versions of children's songs, maybe.\n\n**Madina:** Ha! That gives me an idea. What if every song had a cake? Like a \"Smoke on the Water\" chocolate cake with a little smoke effect.\n\n**Asel:** I think the festival organizers might not like smoke near food. But a music-themed menu is a fun idea. Let's park that for now and come back to it.\n\n**Madina:** My second idea is about design. Last year, the stand looked like every other stand. I could design a big honeycomb wall — because your name means honey — with photos of the bakery inside each hexagon.\n\n**Asel:** Oh, that's beautiful. And we could sell honey cake from the wall!\n\n**Leo:** Why don't we also do something online? A competition: people take a photo at the stand, post it with our name, and the best photo wins a cake every day.\n\n**Asel:** Hmm, I see your point, but I don't want people to spend the whole time on their phones.\n\n**Leo:** Fair enough. Maybe one photo, not a whole campaign.\n\n**Asel:** Okay, we've got about ten ideas. Shall we vote? Everyone chooses their top three.\n\n**Madina:** The honeycomb wall, cookie decorating, and Leo's band.\n\n**Leo:** Same three. Although I'd keep the photo competition small.\n\n**Asel:** Then let's sum up. One: Madina designs a honeycomb wall with honey cake. Two: cookie decorating for kids — baked here, decorated there. Three: Leo's band plays every hour, as long as the organizers agree. And the music-themed cakes stay on the parked list for next year.\n\n**Leo:** Who's doing what?\n\n**Asel:** I'll call the organizers tomorrow about the stage. Madina, can you send me a first sketch by Friday?\n\n**Madina:** Of course.\n\n**Leo:** And I'll persuade the band to learn some children's songs. That might be the hardest job of all.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Asel start the brainstorm?", options: ["*with five minutes of silent writing", "by voting", "by asking Leo to play"] },
      { q: "Why might there be a problem with a real oven?", options: ["*safety rules at an outdoor stand", "it's too expensive", "nobody can carry it"] },
      { q: "Why does Asel park the music-themed menu?", options: ["*Smoke near food might be a problem.", "She doesn't like rock music.", "There isn't enough time."] },
      { q: "Why does Madina suggest a honeycomb wall?", options: ["*Asel's name means honey.", "Bees are popular.", "It's cheap."] },
      { q: "What will Madina do by Friday?", options: ["*send a first sketch", "call the organizers", "bake the cookies"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Last year many people remembered Asel's stand.", false],
      ["Leo suggests letting kids decorate cookies.", true],
      ["The cookies will be baked at the festival.", false],
      ["Asel wants a big online campaign.", false],
      ["Madina and Leo choose the same top three ideas.", true],
      ["Asel will call the organizers tomorrow.", true],
    ]),
    gaps(
      "Complete the phrases from the meeting.",
      "1. Madina: [What] if we brought a small oven?\n2. Leo: [Building] on that, we could let kids decorate their own cookies.\n3. Madina: We could [always] bake the cookies here.\n4. Madina: That [gives] me an idea.\n5. Asel: Let's [park] that for now.\n6. Asel: Then let's sum [up].",
    ),
  ]),

  section("Role play: Your brainstorm", [
    text(
      "Run a brainstorm 🧠⚡",
      "**Choose a question:**\n- How can our town get more young people to visit the library?\n- How can a small café attract customers in winter?\n- How can we make English lessons at school more fun?\n\n**Steps:**\n1. **Silent writing** — 3 minutes, as many ideas as possible (you and your teacher separately). ⏱️\n2. **Share** — take turns reading ideas out. Others build on them: *Building on that… That gives me an idea…*\n3. **React** — polite comments only: *That might work if… I like it, although…* Park off-topic ideas.\n4. **Vote** — each person chooses their top three.\n5. **Sum up** — *To sum up, we've decided to… I'll… / Could you…?*",
    ),
    tip("Use the Timer tool for each step. In a group: one student is the facilitator (keeps time, parks ideas, runs the vote), others suggest and build. Feedback: did everyone build on others' ideas? Were any “idea killers” used?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ if we tried a different color?", options: ["*What", "Why", "How"] },
      { q: "___ on that, we could add music.", options: ["*Building", "Putting", "Making"] },
      { q: "It's off-topic. Let's ___ it for now.", options: ["*park", "stop", "close"] },
      { q: "Writing ideas alone before sharing them is called brain___.", options: ["*writing", "reading", "thinking"] },
    ]),
    box(
      "Phrase of the day: two heads are better than one",
      "🧠🧠 Two people thinking together can solve a problem better than one. (As long as they think alone first! 😉)\n\n*When did working with someone help you solve a problem?*",
    ),
  ]),

  homework(
    [
      video("Watch: TED-Ed — The power of creative constraints.", "v5FL9VTBZzQ"),
      text(
        "After the video: think and answer in the next lesson.",
        "- How can limits (time, money, materials) make us more creative?\n- Think of a limit that once helped you come up with an idea.",
      ),
      choose(
        "Choose.",
        "1. [*How about/What if] a picnic in the park?\n2. [*What if/How about] we started earlier?\n3. Building [*on/up] your idea, we could invite parents.\n4. That might work, [*but/so] it's expensive.\n5. Let's [*park/stop] that idea for now.\n6. To sum [*up/out], we'll try the first two ideas.",
      ),
    ],
    "Homework: Video and language",
  ),
  homework(
    [
      gaps(
        "Complete with one word.",
        "1. Let's write our ideas alone first — it's called brain[writing].\n2. Don't [criticize] ideas during the brainstorm.\n3. Go for quantity, not [quality].\n4. That [gives] me an idea!\n5. Shall we [vote] on the best ideas?\n6. I'll call the organizers, and could you [send] me the sketch?",
      ),
      write("You were at a meeting to plan an event (choose one: a school party, a charity fair, a club evening). Write an email (140–190 words) to a colleague who missed it: say what ideas were suggested, which ones were chosen and why, and who will do what next.", 140, {
        read: "*Useful:* Hi …, Here's a quick summary of the meeting. · We came up with lots of ideas, including… · In the end, we decided to… because… · We parked… for now. · Could you…? · Best, …",
      }),
      record("Record yourself suggesting three ideas for your own event, using What if…? How about…? We could always… (1 minute). 💡", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
