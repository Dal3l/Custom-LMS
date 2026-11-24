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

// 6.2 Fake or fact? — G: the passive with the Present Perfect (has been shared) and modals (can be changed, should be checked), will be + 3rd form. V: media and social media (go viral, a source, mislead, fact-check…). S: spot a fake. Main format: a "fact or myth" warm-up + a FactCheck.org video + a reading (how a fake story spreads, ~380 words) + a fact-checker game.
export default lesson("b1-6.2", "Fake or fact?", () => [
  section("Warm-up: Fact or myth?", [
    box(
      "Today you will…",
      "- learn how fake news spreads — and how to stop it 🕵️\n- use passives like *It **has been shared** a million times. It **can be changed** with AI.* 📱\n- play “fact-checker” 🔍",
    ),
    trueFalse("Fact or myth? 🤔 Guess — then your teacher tells you the truth!", [
      ["Octopuses have three hearts. 🐙", true],
      ["You can easily see the Great Wall of China from the Moon with your eyes. 🌕", false],
      ["Goldfish can only remember things for three seconds. 🐟", false],
      ["In botany, bananas are berries. 🍌", true],
      ["Lightning never strikes the same place twice. ⚡", false],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these did you believe before? Where did you hear it?\n- Have you ever shared something online and later found out it wasn't true? What happened? 😳\n- Who do you trust most for news: TV, newspapers, bloggers, friends? Why?",
    ),
    tip("After the quiz, give the real facts briefly: lightning often hits tall buildings again and again; goldfish can remember things for months. Ask: *Why do myths spread so easily?* — it leads into the topic."),
  ]),

  section("Vocabulary: Media", [
    words("Media and social media", [
      ["go viral", "🚀 spread very fast online", "The video went viral overnight."],
      ["a source", "📚 where information comes from", "Always check the source."],
      ["reliable — unreliable", "✅ you can trust it — ❌ you can't trust it"],
      ["mislead", "🧭❌ make someone believe something that isn't true"],
      ["fact-check", "🔍 check if information is true"],
      ["a headline", "📰 the title of a news story"],
      ["clickbait", "🎣 a headline made only to make you click"],
      ["edit — edited", "✂️ change a photo, video or text"],
      ["a rumor (rumour)", "🗣️ a story that may not be true, passed from person to person"],
      ["spread — spread — spread", "🌊 move to more and more people"],
      ["a deepfake", "🤖🎭 a fake video or audio made with AI"],
      ["evidence", "🧾 facts that show something is true"],
    ]),
    match("Match.", [
      ["go", "viral"],
      ["check", "the source"],
      ["spread", "a rumor"],
      ["fact-check", "a story"],
      ["a misleading", "headline"],
      ["find", "evidence"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Her dancing cat video went [viral] — it got 10 million views in a day! 🐱\n2. Is this website [reliable]? I've never heard of it.\n3. “You won't BELIEVE what happened next!” — that's typical [clickbait]. 🎣\n4. Journalists should always check their [sources].\n5. The photo was [edited] — the sky in the original was grey.\n6. A [rumor/rumour] spread that the school would close, but it wasn't true.\n7. This video looks real, but it's a [deepfake] made with AI. 🤖\n8. There's no [evidence] that this medicine works.",
    ),
    quiz("Choose the right word.", [
      { q: "This headline is ___ — the story says something different.", options: ["*misleading", "reliable", "viral"] },
      { q: "Before you share it, ___ it on a fact-checking website.", options: ["*fact-check", "spread", "edit"] },
      { q: "Bad news ___ faster than good news online.", options: ["*spreads", "edits", "misleads"] },
      { q: "A news website with real journalists is usually more ___.", options: ["*reliable", "viral", "edited"] },
    ]),
  ]),

  section("Video: How to spot fake news", [
    tip("FactCheck.org, about 3.5 minutes. Before watching: *How do YOU check if something is true?* While watching, the student writes down the steps. Compare with the reading after."),
    video("Watch: How to spot fake news — FactCheck.org.", "AkwWcHekMdo"),
    text(
      "After the video: talk to your teacher.",
      "- Which steps did the video suggest? Which ones do you already do?\n- Which step is the hardest for you? Why?\n- Do you think young people or older people believe fake news more easily? 🤔",
    ),
  ]),

  section("Reading: How a fake goes viral", [
    tip("A text of ~380 words. First reading: *Why did so many people believe the story?* Then the tasks. Ask the student to find passives (*has been shared, can be checked, was taken*)."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The photo of the snow leopard was taken in Almaty last week.", false],
        ["The post was shared by thousands of people in one day.", true],
        ["The photo was used online years before this post.", true],
        ["The writer says AI images can always be recognized easily.", false],
        ["Old photos are often shared again after storms and floods.", true],
        ["The writer thinks we should stop using social media.", false],
      ],
      {
        read: [
          "## 🐆 How a fake goes viral",
          "Last month, a dramatic photo appeared online: a snow leopard walking calmly through a snowy street in the center of Almaty. \"This morning on Abay Avenue!!! Stay at home!\" said the post. Within 24 hours, it was shared more than 30,000 times. People were scared. Some schools received calls from worried parents.",
          "There was just one problem: it wasn't true. A local journalist decided to fact-check the story. She used a reverse image search — a tool that shows where else a picture has been used. The photo was first posted years earlier — it was taken in a national park in another country, and the street was added later with an editing app. 🔍",
          "So why did so many people believe it? Experts say fake stories are often designed to make us feel something strong: fear, anger or surprise. When we feel emotional, we share first and think later. The story was also realistic — snow leopards really do live in the mountains near Almaty.",
          "This isn't a new problem. Every time there's a big hurricane, an old photo of a shark swimming on a flooded highway is shared again — and it has been shown to be fake many times. 🦈 But today, it's even easier to create fakes. Images and even videos can be made with AI in seconds. Deepfakes can be very difficult to recognize, even for experts.",
          "So what should be done? Here are four simple steps:",
          "1️⃣ **Stop.** If a post makes you very angry or scared, wait before you share it.\n2️⃣ **Check the source.** Who posted it first? Is it a real news organization?\n3️⃣ **Search.** Has the story been reported anywhere else? Can the photo be found online with a reverse image search?\n4️⃣ **Ask.** If you're not sure, don't share it.",
          "Social media isn't the enemy — it can be a great way to get information quickly. But in a world where anything can be faked, we all need to become fact-checkers.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did the journalist find out the truth?", options: ["*She used a reverse image search.", "She called the zoo.", "She went to Abay Avenue."] },
      { q: "Why do people share fakes, according to experts?", options: ["*They feel strong emotions and share before thinking.", "They want to make money.", "They're bored."] },
      { q: "What's special about deepfakes?", options: ["*They can be very hard to recognize.", "They're always funny.", "They're only photos."] },
      { q: "What's the first step the article suggests?", options: ["*Stop and wait before sharing.", "Share it quickly.", "Delete your account."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. exciting and full of emotion: [dramatic]\n2. got (a call, a letter): [received]\n3. a search that shows where a picture has been used: a reverse image [search]\n4. looking real, like in life: [realistic]\n5. a very strong storm: a [hurricane]\n6. a company that reports news: a news [organization/organisation]",
    ),
  ]),

  section("Grammar: More passives", [
    quiz("Notice the rule 🔍 Look: “It has been shared 30,000 times.” “Images can be made with AI.” “What should be done?”", [
      { q: "“has been shared” is…", options: ["*the Present Perfect passive", "the Past Simple passive", "an active form"] },
      { q: "After can / should / must in the passive we use…", options: ["*be + 3rd form", "been + 3rd form", "the 3rd form only"] },
      { q: "Why passive here?", options: ["*We don't know or don't care who did it.", "It's more polite.", "It's the future."] },
    ]),
    table("passive-more"),
    choose(
      "Choose the right form.",
      "1. The video [*has been watched/has watched] 5 million times.\n2. Photos [*can be edited/can edited] in seconds.\n3. Facts [*should be checked/should checked] before you share them.\n4. The results [*will be announced/will announced] on Friday.\n5. My account [*has been hacked/has hacked]! 😱\n6. Mobile phones [*must be switched/must switched] off during the exam.\n7. The story [*hasn't been confirmed/hasn't confirmed] yet.\n8. This problem [*can't be solved/can't solve] in one day.",
    ),
    gaps(
      "Complete with the passive.",
      "1. The post [has been shared] 30,000 times. (share — Present Perfect)\n2. This photo [can be found] online in seconds. (can / find)\n3. The story [should be checked] before it's published. (should / check)\n4. The winners [will be announced] tomorrow. (will / announce)\n5. Three new bridges [have been built] in our city this year. (build — Present Perfect)\n6. Fake news [must be stopped]! (must / stop)\n7. The truth [has not been told/hasn't been told] yet. (not / tell — Present Perfect)\n8. Deepfakes [can be made] with free apps. (can / make)",
    ),
    sort("Which tense or modal? Sort the passives. 🧩", {
      "Present Perfect passive": ["It has been shared.", "The video has been deleted.", "They have been warned.", "The story has been changed."],
      "Modal passive": ["It can be faked.", "It should be checked.", "It must be stopped.", "It could be found."],
    }),
    drag(
      "Complete the fact-checker's report.",
      "A photo of a “snow leopard in the city” [has] been shared thousands of times this week. We can now say that the photo [was] edited. The original [was] taken in a national park years ago. The street [was] added later. Many posts [have] been deleted since our report. Before you share something, it [should] be checked! 🔍",
      ["is", "had", "can't"],
    ),
    order("Make passive sentences.", [
      "The video has been shared a million times.",
      "Photos can be changed with AI.",
      "Facts should be checked before you share them.",
      "The results will be published tomorrow.",
      "My password has been stolen.",
    ]),
  ]),

  section("Let's talk: The fact-checker", [
    text(
      "Game: Real or fake headline? 🔍",
      "Your teacher reads headlines — some real, some invented. Decide: real or fake? Explain why!\n\n*It sounds too surprising / too perfect… There's no source… It could be checked by… I've seen it on a reliable website…*\n\nThen invent two headlines yourself — one real, one fake — and test your teacher! 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Should social media companies be made to remove fake news? Who should decide what's fake? ⚖️\n- Should AI images always be marked as AI? Why / why not?\n- Has a fake story ever been shared in your family chat? What happened?\n- What would you teach a 12-year-old about fake news?",
    ),
    tip("For the headline game, prepare 6 headlines: 3 real recent (surprising but true) ones from reliable sites and 3 invented. Make the student justify each answer with language from the lesson."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The video ___ by millions of people.", options: ["*has been watched", "has watched", "has been watching"] },
      { q: "This photo can ___ with AI.", options: ["*be made", "made", "been made"] },
      { q: "spread very fast online =", options: ["*go viral", "fact-check", "mislead"] },
      { q: "a headline made only to make you click =", options: ["*clickbait", "a source", "evidence"] },
    ]),
    box(
      "Phrase of the day: Don't believe everything you read",
      "🧐 **Take it with a pinch of salt** = don't believe it completely.\n\n*He says he met a celebrity on the bus — I'd take that with a pinch of salt!* 🧂",
    ),
  ]),

  homework(
    [
      video("Watch: the passive with modal verbs.", "duc5sFPsq4U"),
      choose(
        "Choose.",
        "1. The museum [*has been closed/has closed] for repairs since May.\n2. Tickets [*can be bought/can bought] online.\n3. The new park [*will be opened/will open by] next month.\n4. All phones [*must be turned/must turn] off.\n5. Our flight [*has been cancelled/has cancelled]! ✈️\n6. These rules [*should be followed/should follow] by everyone.\n7. The thief [*hasn't been found/hasn't found] yet.\n8. This mistake [*could be/could] avoided if we check the facts.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Her post went [viral] in a few hours.\n2. Always check the [source] of a story.\n3. This website is not [reliable] — it often publishes fakes.\n4. The photo was [edited] to make the sky bluer.\n5. “10 secrets doctors don't want you to know!” is typical [clickbait].\n6. A [deepfake] is a fake video made with AI.",
      ),
      write("Write a short guide for your family (100+ words): “How to spot fake news.” Give 4–5 tips and an example. Use passives: should be checked, can be found, has been shared…", 100, {
        read: "*Example:* Fake news is everywhere — in our family chat too! 😅 Here are some tips. First, if a message makes you scared or angry, stop. It may have been written to make you feel that way. Second, check where it was posted first. Real news can usually be found on several reliable websites. Third, photos can be edited — use a reverse image search…",
      }),
      record("Record 1 minute: Tell about a fake story or rumor you heard. How was it spread? How did you find out it was fake? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
