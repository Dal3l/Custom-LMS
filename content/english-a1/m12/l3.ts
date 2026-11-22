import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  matchPictures,
  quiz,
  record,
  section,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 12.3 Life before smartphones — skills lesson: old technology (CD, landline, paper map), then vs now; review of was / were. Main format: reading + video.
export default lesson("a1-12.3", "Life before smartphones", () => [
  section("Warm-up: No phone?!", [
    box("Today you will…", "- name old technology 📼☎️💿\n- compare *then* and *now*: *There was… Now there is…*\n- imagine one day without a smartphone 📵"),
    text(
      "Talk to your teacher.",
      "- How old were you when you had your first phone? 📱\n- What did people do before smartphones? Guess! 🤔\n- How do you find a new place without a map app? 🗺️\n- Can you live one day without your phone? A week? 😱",
    ),
  ]),

  section("Vocabulary: Old technology", [
    words("Old technology", [
      ["a landline (phone)", "☎️ a phone at home, with a cable", "There was a landline in every home."],
      ["a phone box", "📞🟥 a phone in the street · 🇺🇸 a pay phone"],
      ["a CD — a CD player", "💿"],
      ["a cassette — a Walkman", "📼🎧 music in your pocket in the 80s and 90s"],
      ["a VHS tape", "📼 films at home before streaming"],
      ["a paper map", "🗺️"],
      ["a letter — a postcard", "✉️ — 🖼️✉️"],
      ["an instant camera", "📸 the photo comes out in a minute"],
      ["then — now", "⏪ — ▶️"],
      ["the internet was slow", "🐢🌐"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/old-landline.jpg", "a landline"],
      ["photos/old-phonebox.jpg", "a phone box"],
      ["photos/old-cd.jpg", "a CD"],
      ["photos/gen-cassette.jpg", "cassettes"],
      ["photos/old-polaroid.jpg", "an instant camera"],
    ]),
    match("Then and now: match.", [
      ["a paper map", "a map app"],
      ["a letter", "a message"],
      ["a CD", "Spotify"],
      ["a VHS tape", "Netflix"],
      ["a landline", "a smartphone"],
    ]),
  ]),

  section("Reading: 20 years ago", [
    tip("Read the article. Ask: *What was there then? What is there now? Which is better?*"),
    quiz(
      "Read the article. Choose.",
      [
        { q: "How did people find a new place?", options: ["*with a paper map", "with an app", "with a smart watch"] },
        { q: "Where was the phone?", options: ["*at home, on the wall or on a table", "in your pocket", "on your watch"] },
        { q: "How long were photos “a surprise”?", options: ["*a few days", "a few minutes", "a year"] },
      ],
      {
        read: [
          "## ⏪ Life before smartphones",
          "Imagine your life 20–30 years ago. There weren't any smartphones! 📵",
          "**Phones:** The phone was at home — a landline on the wall or on a table. ☎️ In the street, there were phone boxes. If your friend wasn't at home, you were unlucky!",
          "**Maps:** People found new places with paper maps. 🗺️ They often asked people in the street for directions: “Excuse me, where's the station?”",
          "**Music and films:** Music was on cassettes and CDs. 💿 Films were on VHS tapes — or on TV at a fixed time. If you weren't at home at 8 p.m., you missed the film!",
          "**Photos:** Cameras had film. You waited a few days for your photos — they were a surprise! 📸 Some photos were terrible, but people loved them.",
          "Was life worse then? Not always! People talked more, wrote letters and remembered phone numbers. 😊",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["There were phone boxes in the street.", true],
      ["Films were always online.", false],
      ["People remembered phone numbers.", true],
    ]),
    text("Talk to your teacher.", "- What's good about life without smartphones? What's bad? 👍👎\n- Which old thing do you want to try? 💿📸\n- Ask your parents: what was their first phone?"),
  ]),

  section("Video: Kids react to Walkmans", [
    video("Watch kids try an old Walkman. Can they use it? 😄", "Uk_vV-JRZ6E"),
    text("Talk to your teacher.", "- Can the kids use the Walkman?\n- What do they think about it?\n- Can you use a Walkman? A landline? A paper map? 😅"),
    tip("The video is fast — watch the first 3–4 minutes. The reactions are funny even without understanding every word."),
  ]),

  section("Review: was / were and the past", [
    choose(
      "Choose.",
      "1. There [*were/was] phone boxes in the street.\n2. The internet [*was/were] slow.\n3. There [*weren't/wasn't] any smartphones.\n4. My mom [*had/has] a Walkman in 1995.\n5. People [*listened/listen] to cassettes 30 years ago.",
    ),
    drag(
      "Complete: then and now.",
      "Thirty years ago, there [was] a landline in my grandma's house. There [weren't] any smartphones. She [listened] to music on cassettes. Now she [has] a smartphone and she [watches] TikTok! 😄",
      ["is", "listens", "wasn't"],
    ),
    gaps("Complete with was or were.", "1. My first phone [was] a Nokia.\n2. The photos [were] a surprise.\n3. There [was] a phone box near my school."),
  ]),

  section("Let's talk: Then and now", [
    text(
      "Debate: Then or now? ⚖️",
      "Choose and say why:\n\n- Letters ✉️ or messages 💬?\n- A paper map 🗺️ or a map app 📱?\n- Photos on film 📸 or 1,000 photos on your phone?\n- TV at a fixed time 📺 or streaming?\n\n*I think … was better, because… / Now it's better, because…*",
    ),
    text("Challenge: one day without a smartphone 📵", "Plan a day without your phone: *How do you wake up? How do you find the way? How do you call friends?* Can you do it? 😅"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a phone at home with a cable =", options: ["*a landline", "a smartphone", "a phone box"] },
      { q: "There ___ any smartphones 30 years ago.", options: ["*weren't", "wasn't", "aren't"] },
      { q: "📼 music in your pocket in the 80s =", options: ["*a Walkman", "Spotify", "a CD player"] },
    ]),
    box("Word of the day: retro", "**retro** 📼✨ = old style, but cool again.\n\n*Instant cameras and vinyl records are retro — they're popular again!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. ☎️ a [landline]\n2. 🗺️ a paper [map]\n3. ✉️ a [letter]\n4. 💿 a [CD]"),
      choose("Choose.", "1. There [*was/were] a CD player in my room.\n2. My dad [*had/have] a cassette player.\n3. There [*weren't/wasn't] any apps."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: kids react to old computers. What can't they do?", "PF7EpEnglgk"),
      write("Ask a parent or grandparent: What technology was there when they were 15? Write 3–4 sentences.", 25),
    ],
    "Homework: Video and interview",
  ),
  homework(
    [
      write("Then and now: compare life 30 years ago and today. What was better? What is better now? (40+ words)", 40, {
        read: "*Example:* Thirty years ago, there weren't any smartphones. My mom had a landline and she wrote letters to her friends. Music was on cassettes. Now we have smartphones, streaming and maps on our phones. I think life is easier now, but people talked more then.",
      }),
      record("Record your answer: Can you live one day without your smartphone? What do you do instead?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
