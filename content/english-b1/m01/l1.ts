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

// 1.1 What have you been up to? — G: Present Perfect Continuous (+ − ?, How long have you been…?). V: life changes, phrasal verbs (take up, give up, catch up, put off…). Say it right: weak "been" /bɪn/. S: catch up with an old friend. Main format: speaking + a long listening (two old friends meet, ~2 min). No video in class.
export default lesson("b1-1.1", "What have you been up to?", () => [
  section("Warm-up: Lately…", [
    box(
      "Today you will…",
      "- talk about what you've been doing lately: *I've been learning… I've been working on…* 🔄\n- learn phrasal verbs for life changes: *take up, give up, catch up* 📈\n- catch up with an old friend — in English! ☕",
    ),
    text(
      "Talk to your teacher.",
      "- What's one new thing in your life this year — a hobby, a habit, a series, a person? How did it start?\n- Is there something you keep putting off? Why do you think you avoid it? 😅\n- Who haven't you seen for a long time that you'd really love to catch up with? What would you ask them first?",
    ),
    tip("Answer the questions yourself first, with real details — it makes the student open up. Use the new grammar naturally (*I've been reading a great book lately…*), but don't explain it yet."),
  ]),

  section("Vocabulary: Life changes", [
    words("Phrasal verbs and phrases", [
      ["take up (a hobby)", "🎸 start a new activity", "I took up yoga last year."],
      ["give up", "🚭 stop doing something", "He's given up sugar."],
      ["catch up (with someone)", "☕ meet and talk about the news", "Let's catch up next week!"],
      ["put off", "⏳ do something later, not now", "I keep putting off my driving test."],
      ["sign up (for)", "📝 register for a course or a club", "I've signed up for a coding course."],
      ["get into (something)", "😍 start to like something", "I've really got into podcasts lately."],
      ["keep up with", "🏃 do things at the same speed as others", "It's hard to keep up with the news."],
      ["settle in", "🏠 start to feel at home in a new place", "Have you settled in yet?"],
      ["work on (something)", "🛠️ spend time making or improving something", "I'm working on my English."],
      ["burn out", "🔥😩 get very tired from too much work", "She worked 12 hours a day and burned out."],
      ["a fresh start", "🌱 a new beginning", "Moving to a new city was a fresh start."],
      ["lately / recently", "🕐 in the last few weeks or months", "What have you been up to lately?"],
    ]),
    match("Match the phrasal verbs and the meanings.", [
      ["take up", "start a new hobby"],
      ["give up", "stop doing something"],
      ["put off", "do it later"],
      ["sign up for", "register for a course"],
      ["get into", "start to like"],
      ["settle in", "feel at home in a new place"],
      ["keep up with", "go at the same speed as others"],
      ["catch up with", "meet and share the news"],
    ]),
    gaps(
      "Complete with one word.",
      "1. I've finally signed [up] for a photography course. 📷\n2. She gave [up] her job and started her own business.\n3. Stop putting [off] that email — just send it! 📧\n4. I've got [into] cooking lately — I make dinner every night. 🍝\n5. We moved in June, and we've settled [in] really quickly.\n6. My grandma took [up] swimming when she was 70! 🏊\n7. Let's meet for coffee — I want to catch [up] with you.\n8. The course is so fast — I can't keep [up] with the others.",
    ),
    quiz("Choose the right phrasal verb.", [
      { q: "I'm so tired of my job. I think I need to ___ and do something different.", options: ["*make a fresh start", "catch up", "settle in"] },
      { q: "She ___ painting during the lockdown and now sells her pictures.", options: ["*took up", "gave up", "put off"] },
      { q: "We've been friends for years, but we never have time to ___.", options: ["*catch up", "sign up", "burn out"] },
      { q: "He worked seven days a week for a year and finally ___.", options: ["*burned out", "got into", "kept up"] },
    ]),
    sort("Good change or bad change? Sort. 🌱🔥", {
      "🌱 Good change": ["take up a sport", "a fresh start", "settle in well", "sign up for a course", "get into reading"],
      "🔥 Bad change": ["burn out", "put off important things", "give up too early", "fall behind at work", "lose touch with friends"],
    }),
  ]),

  section("Listening: Long time no see!", [
    tip("A long listening — about 2 minutes. First listen: *What has each of them been doing?* (one big thing each). Second listen: the details. After that, let the student read the script with the note's eye and find sentences with *have been + -ing*."),
    ...listening(
      "Listen. Dana and Leo meet by chance in a café. They haven't seen each other for two years.",
      "**Dana:** Leo? Is that you? Oh my goodness!\n\n**Leo:** Dana! No way! How long has it been — two years?\n\n**Dana:** At least! Since your going-away party. So, what have you been up to? Are you still in Berlin?\n\n**Leo:** No, I came back in March. I've been working remotely for a German company, so I can live anywhere. At the moment I'm staying with my parents while I look for a flat.\n\n**Dana:** Working from home — lucky you! Do you like it?\n\n**Leo:** Most of the time. But honestly, in Berlin I nearly burned out. I was working twelve hours a day. So this year I've been trying to slow down a bit. I've taken up the guitar — I've been practicing every evening.\n\n**Dana:** You? The guitar? I remember you couldn't even sing \"Happy Birthday\"!\n\n**Leo:** Ha! I still can't. But I can play three songs now. Anyway, what about you? You look really fit.\n\n**Dana:** Thanks! I've been training for a marathon. It's in October — my first one!\n\n**Leo:** A marathon? Seriously? How long have you been running?\n\n**Dana:** Only about a year. I started because of stress at work, actually, and then I just got into it. I've been running four times a week, and I've given up sugar. Well… mostly. 🍰\n\n**Leo:** I'm impressed. Are you still at the bank?\n\n**Dana:** Yes, but not for long, I hope. I've been doing an online course in graphic design. I've finished six modules — two more to go. Then I'd like to find a job in design.\n\n**Leo:** That's brilliant. A fresh start!\n\n**Dana:** Exactly. I've been putting it off for years, but I'm thirty now, so it's now or never.\n\n**Leo:** Listen — my friend has a small design studio. They've been looking for someone for ages. Do you want me to introduce you?\n\n**Dana:** Are you serious? That would be amazing!\n\n**Leo:** Sure. Give me your number. And let's not wait another two years to catch up!\n\n**Dana:** Deal. Oh — and come and watch the marathon in October. You can play your three songs at the finish line! 🎸\n\n**Leo:** Ha! Maybe just one.",
    ),
    gaps("Complete what they said. Listen again if you need.", "1. Leo: How long has it [been] — two years?\n2. Leo: I've been working [remotely] for a German company.\n3. Leo: I've taken [up] the guitar.\n4. Dana: I've been training [for] a marathon.\n5. Dana: I started because of stress at work, and then I just got [into] it.\n6. Dana: I've been putting it [off] for years."),
    quiz("Listen and choose.", [
      { q: "When did Leo come back from Berlin?", options: ["*in March", "two years ago", "in October"] },
      { q: "Why has Leo been trying to slow down?", options: ["*He nearly burned out in Berlin.", "He has lost his job.", "His parents asked him to."] },
      { q: "How long has Dana been running?", options: ["*about a year", "about two years", "since she was a child"] },
      { q: "How much of the design course has Dana done?", options: ["*six modules out of eight", "two modules", "all of it"] },
      { q: "What does Leo offer to do?", options: ["*introduce Dana to his friend's studio", "run the marathon with Dana", "teach Dana the guitar"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo is living with his parents at the moment.", true],
      ["Leo has been practicing the guitar every morning.", false],
      ["Leo can sing very well now.", false],
      ["Dana's marathon is in October.", true],
      ["Dana has completely given up sugar.", false],
      ["Dana has been thinking about a change for a long time.", true],
    ]),
  ]),

  section("Grammar: Present Perfect Continuous", [
    quiz("Notice the rule 🔍 Look: “I've been training for a marathon.” “I've been practicing every evening.” “How long have you been running?” Which is true?", [
      { q: "Has Dana stopped training?", options: ["*No — it started in the past and is still going on.", "Yes, she finished last year.", "She's going to start next month."] },
      { q: "How do we make it?", options: ["*have / has + been + verb-ing", "have / has + verb-ing", "was / were + verb-ing"] },
      { q: "What's important here?", options: ["*the activity and how long — not the result", "a finished result", "a future plan"] },
    ]),
    table("ppc"),
    choose(
      "Choose the right form.",
      "1. I'm exhausted — I [*'ve been working/'m working] since 7 a.m.\n2. How long [*have you been learning/are you learning] English?\n3. She [*'s been looking/looks] for a new flat for two months.\n4. We [*haven't been sleeping/don't sleep] well lately — the neighbors are noisy.\n5. It [*'s been raining/rains] all day. Take an umbrella! ☔\n6. They [*'ve been dating/date] for three years.\n7. What [*have you been doing/do you do]? Your hands are covered in paint! 🎨\n8. He [*'s been feeling/feels] stressed since he started his new job.",
    ),
    gaps(
      "Complete with the Present Perfect Continuous.",
      "1. I [have been waiting/'ve been waiting] for you for an hour! (wait)\n2. She [has been studying/'s been studying] all night for the exam. (study)\n3. How long [have you been living] in Astana? (you / live)\n4. My brother [has been playing/'s been playing] video games since lunch. (play)\n5. We [haven't been going/have not been going] to the gym lately. (not / go)\n6. [Have they been working] together for long? (they / work)\n7. My phone [has been acting/'s been acting] strange all week. (act)\n8. What [have you been reading] lately? (you / read)",
    ),
    choose(
      "Present Continuous (now) or Present Perfect Continuous (how long)? Choose.",
      "1. Shh! The baby [*is sleeping/has been sleeping] — don't wake her up.\n2. The baby [*has been sleeping/is sleeping] for three hours — is she OK?\n3. I [*'m reading/'ve been reading] a great book right now. 📖\n4. I [*'ve been reading/'m reading] this book since Monday.\n5. Where are you? I [*'m waiting/'ve been waiting] outside the cinema.\n6. Where are you? I [*'ve been waiting/'m waiting] for 30 minutes! 😠\n7. Kenji [*is working/has been working] from home today.\n8. Kenji [*has been working/is working] from home since the summer.",
    ),
    drag(
      "Complete the messages.",
      "Asel: Hey! I [haven't] heard from you for ages. What have you [been] up to?\nKenji: Sorry! I've been [working] on a big project. And I've [been] learning to drive! 🚗\nAsel: Cool! How long have you been [taking] lessons?\nKenji: [Since] January. My test is next week. 😬\nAsel: Good luck! I've been [meaning] to call you, actually — let's catch [up] on Saturday?",
      ["be", "for", "work", "off"],
    ),
    order("Make sentences.", [
      "What have you been up to lately?",
      "I've been learning Spanish for six months.",
      "How long have you been waiting?",
      "She hasn't been feeling well recently.",
      "They've been looking for a new flat since May.",
    ]),
  ]),

  section("Say it right: I've been…", [
    box(
      "🗣️ Say it right",
      "In fast speech, **been** is weak: **/bɪn/** — short, like *bin*.\n\n*I've been working.* → “I've **bin** working.”\n\nAnd **have / has** become short: *I've, you've, she's, we've*.\n\n*What have you been doing?* → “What've you bin doing?” — almost one word!",
    ),
    quiz("Listen to your teacher. Which is natural in fast speech?", [
      { q: "I have been waiting.", options: ["*I've /bɪn/ waiting", "I have /biːn/ waiting"] },
      { q: "She has been working.", options: ["*She's /bɪn/ working", "She has /biːn/ working"] },
      { q: "What have you been doing?", options: ["*What've you /bɪn/ doing?", "What have you /biːn/ doing?"] },
      { q: "We have been talking.", options: ["*We've /bɪn/ talking", "We have /biːn/ talking"] },
    ]),
    tip("Model the sentences fast, then slow, then fast again. Drill a chain: *I've been working → I've been working a lot → I've been working a lot lately.* The student builds their own chains about their life."),
  ]),

  section("Let's talk: Catch up!", [
    text(
      "Role-play: Long time no see! ☕",
      "You meet an old friend (your teacher) in a café. You haven't seen each other for two years.\n\n**Find out:**\n- where they've been living and working\n- what new things they've been doing (hobbies, courses, sport…)\n- what they've given up or taken up\n- one thing they've been putting off\n\n**Useful:** *No way! How long has it been? What have you been up to? Seriously? Good for you! Let's not wait another two years!*",
    ),
    text(
      "Talk to your teacher.",
      "- What have you been doing lately to look after yourself? 🧘\n- Have you ever felt close to burning out? What helped?\n- What's something you've been meaning to try for years? What's stopping you?\n- If you could have a fresh start somewhere, where would it be and why? 🌱",
    ),
    tip("*If you have time:* “Then and now” — the student says 3 true things and 1 lie about the last year (*I've been learning to cook. I've given up coffee…*). You ask *How long have you been…?* and guess the lie."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I'm tired — I ___ all day.", options: ["*'ve been working", "work", "'m working"] },
      { q: "How long ___ waiting?", options: ["*have you been", "are you", "do you"] },
      { q: "start a new hobby =", options: ["*take up", "give up", "put off"] },
      { q: "meet and talk about the news =", options: ["*catch up", "sign up", "settle in"] },
    ]),
    box(
      "Phrase of the day: Long time no see!",
      "👋 **Long time no see!** = I haven't seen you for a long time! (informal, very common)\n\n*Leo! Long time no see! What have you been up to?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with the right word.",
        "1. I've signed [up] for a dance class — it starts on Monday. 💃\n2. My dad gave [up] smoking ten years ago.\n3. I keep putting [off] my dentist appointment. 🦷\n4. We need to catch [up] — call me this weekend!\n5. She's really got [into] gardening this year. 🌻\n6. How are you settling [in] at your new school?\n7. He worked too hard and burned [out].\n8. I'm working [on] my presentation for tomorrow.",
      ),
      match("Match the beginnings and the endings.", [
        ["I've been studying all day,", "so my head hurts."],
        ["She's been running,", "that's why she's red and hot."],
        ["We've been waiting for an hour,", "and the bus still hasn't come."],
        ["They've been arguing again —", "I can hear them from here."],
        ["He's been saving money", "for a trip to Japan."],
        ["I've been learning the guitar", "since last summer."],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: the Present Perfect Continuous.", "Ttr7DowBUBk"),
      choose(
        "Choose.",
        "1. How long [*have you been playing/do you play] tennis?\n2. Sorry I'm late! [*Have you been waiting/Are you waiting] long?\n3. I [*'ve been feeling/feel] tired lately.\n4. She [*'s been crying/cries] — her eyes are red.\n5. We [*'ve been saving/save] for a new car since last year.\n6. It [*hasn't been snowing/doesn't snow] this week.\n7. What [*have you been watching/do you watch] lately? Any good series?\n8. My neighbor [*'s been building/builds] a garage for months!",
      ),
      gaps(
        "Write questions with How long…? and answer about you.",
        "1. How long / you / learn / English? → How long [have you been learning] English?\n2. How long / you / live / in your town? → How long [have you been living] in your town?\n3. How long / you / do / your job or study? → How long [have you been doing] it?\n4. How long / your best friend / work / there? → How long [has your best friend been working] there?\n5. How long / it / rain? → How long [has it been raining]?\n6. How long / they / wait? → How long [have they been waiting]?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write an email to a friend you haven't seen for a long time. Tell them what you've been doing lately: work or study, hobbies, something you've taken up or given up. Ask them two questions. (100+ words)", 100, {
        read: "*Example:* Hi Mia! Long time no see! 😊 I'm sorry I haven't written for so long — life has been crazy. I've been working at a new company since February, and I've been learning a lot. I've also taken up climbing — I've been going twice a week, and my arms hurt all the time! 🧗 But I've given up my evening series, so I sleep better… What about you? Are you still living in Tbilisi? What have you been up to? Let's catch up soon! Love, Asel",
      }),
      record("Record a 1-minute voice message for an old friend: what have you been up to lately? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
