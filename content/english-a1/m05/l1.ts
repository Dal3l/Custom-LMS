import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  matchPictures,
  order,
  picture,
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

// 5.1 A day in the life — G: Present Simple positive (I / you / we / they). V: daily routine, time. Main format: reading + video.
export default lesson("a1-5.1", "A day in the life", () => [
  section("Warm-up: Morning, day, evening", [
    box("Today you will…", "- name things you do every day\n- say *I get up at 7. We have lunch at 1.*\n- describe your day — like a “day in the life” video 🎥"),
    picture("Three photos from a day.", ["photos/day-alarm.jpg", "photos/day-breakfast.jpg", "photos/day-study.jpg"]),
    text(
      "Talk about the photos.",
      "- Photo 1: What time is it? ⏰ Is it early?\n- Photo 2: Is it a good breakfast? What's your breakfast? 🍳\n- Photo 3: Is she at school or at home? 📚\n- What's your favorite time of the day? Why?",
    ),
  ]),

  section("Vocabulary: My day", [
    words("Daily routine", [
      ["wake up", "⏰ open your eyes", "I wake up at 7."],
      ["get up", "🛏️➡️ go out of bed", "I get up at 7:15."],
      ["have a shower", "🚿"],
      ["get dressed", "👕 put on your clothes"],
      ["have breakfast / lunch / dinner", "🍳 / 🥪 / 🍝"],
      ["go to school / work", "🏫 / 💼"],
      ["start — finish", "▶️ — ⏹️", "My lessons start at 8:30."],
      ["come home", "🏠"],
      ["do homework", "📝"],
      ["watch a series", "📺"],
      ["play games", "🎮"],
      ["chat with friends", "💬"],
      ["go to bed", "😴", "I go to bed at 11."],
      ["every day / usually / often / always", "📅 how often"],
    ]),
    order("Put Aigerim's day in order.", ["wake up\nget up\nhave a shower\nhave breakfast\ngo to school\ncome home\ndo homework\ngo to bed"], "lines"),
    match("Match.", [
      ["have", "breakfast"],
      ["go", "to bed"],
      ["do", "homework"],
      ["get", "dressed"],
      ["chat", "with friends"],
    ]),
    sort("When do you usually do it? Sort.", {
      "🌅 in the morning": ["wake up", "get dressed", "have breakfast"],
      "🌙 in the evening": ["have dinner", "watch a series", "go to bed"],
    }),
  ]),

  section("Reading: A day in my life", [
    tip("Read the post together. The student finds all the times in the text."),
    gaps(
      "Read Daniyar's post. Complete his day.",
      "⏰ He wakes up at [6:30/six thirty]\n🏋️ The gym: [before school]\n🏫 Lessons start at [8:30/eight thirty]\n🎮 After homework, he plays [games/video games]\n😴 He goes to bed at [11:00/11/eleven]",
      {
        read: [
          "## 🎥 A day in my life — by Daniyar, 17",
          "Hi! Welcome to a day in my life! I wake up at 6:30. I know, it's early! 😴 I don't like mornings, but I go to the gym before school. 🏋️",
          "At 7:30, I have breakfast with my parents. We usually have eggs and tea. Then I go to school by bus. 🚌",
          "My lessons start at 8:30 and finish at 2:00. My friends and I have lunch in the school café. 🥪",
          "I come home at 3. First I do homework, then I play games or chat with friends. 🎮",
          "We have dinner at 7. In the evening, my sister and I watch a series. I go to bed at 11. Good night! 🌙",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Daniyar likes mornings.", false],
      ["He has breakfast with his parents.", true],
      ["He goes to school by car.", false],
      ["He has lunch in the school café.", true],
    ]),
    text("Talk to your teacher.", "- Is Daniyar's day like your day? What's different?\n- Is 6:30 early for you? 😴\n- What do you do after school or work?"),
  ]),

  section("Grammar: Present Simple", [
    tip("Present Simple is for things we do every day or usually. Keep to I / you / we / they today — he / she comes later."),
    table("ps-positive"),
    choose(
      "Choose.",
      "1. I [*get up/am get up] at 7.\n2. We [*have/has] dinner at 8.\n3. They [*go/goes] to school by bus.\n4. You [*work/are work] online.",
    ),
    gaps("Complete with the verb.", "1. I [have] a shower in the morning. (have)\n2. We [watch] a series in the evening. (watch)\n3. My friends and I [play] games on Friday. (play)\n4. You [start] work at 9. (start)"),
    drag(
      "Complete my morning.",
      "I [wake up] at 7. I [have] a shower and I [get] dressed. Then I [go] to school. My lessons [start] at 8:30.",
      ["goes", "am"],
    ),
  ]),

  section("Video: A day in the life", [
    video("Watch a student's day in Madrid. What does she do?", "xlM4WGMvv-g"),
    text("Talk to your teacher.", "- What does the student do in the video? Say 3 things.\n- Is her day interesting? Is it like your day?"),
    tip("The video is fast — pause it and ask *What's this? Where is she?* Answers like *She has coffee* are OK — he / she + s comes in the next module."),
  ]),

  section("Let's talk: My day", [
    text(
      "Your “day in the life” 🎥",
      "Tell your teacher about your day — like a vlogger! Use times:\n\n*I wake up at… I have breakfast at… I go to… I come home at… In the evening I…*",
    ),
    text(
      "Find the differences 🔍",
      "Ask your teacher: *What time do you get up? What time do you go to bed?*\n\nCompare: *I get up at 7, and you get up at 6!*",
    ),
    text("Talk to your teacher.", "- What's the best part of your day? 😊\n- Morning shower or evening shower? 🚿\n- What do you always do before bed? 📱"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ to bed at 11.", options: ["*go", "goes", "am go"] },
      { q: "🛏️➡️ = ?", options: ["*get up", "go to bed", "come home"] },
      { q: "We ___ lunch at 1.", options: ["*have", "has", "are"] },
    ]),
    box("Word of the day: routine", "**routine** = the things you do every day, in the same order 🔁\n\n*My morning routine: coffee, shower, music.* 🎶"),
  ]),

  homework(
    [
      matchPictures("Match the pictures.", [
        ["photos/day-alarm.jpg", "wake up"],
        ["photos/day-breakfast.jpg", "have breakfast"],
        ["photos/day-study.jpg", "do homework"],
      ]),
      gaps("Complete.", "1. I [go] to bed at 11.\n2. I get [dressed] at 7:30.\n3. I [have] a shower in the morning.\n4. I [come] home at 4."),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose.", "1. We [*watch/watches] a series every evening.\n2. I [*play/am play] games on Saturday.\n3. They [*start/starts] work at 9."),
      video("Watch an A1 story about a day. Write down 3 times.", "QS6zBp3sMWA"),
    ],
    "Homework: Grammar and video",
  ),
  homework(
    [
      write("Write your “A day in my life” post. Use times. (40+ words)", 40, {
        read: "*Example:* I wake up at 7. I have a shower and I have breakfast — usually tea and toast. I go to school at 8. My lessons finish at 2. I come home and I do homework. In the evening I chat with friends and watch a series. I go to bed at 11.",
      }),
      record("Record a “day in the life” video or audio: tell about your day with times.", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
