import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  order,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 12.4 Final revision — the whole A2 course: a quiz show with photos from the course, grammar review of every module, a goodbye listening from the course characters, speaking, and the final project "Me in 5 years".
export default lesson("a2-12.4", "Final revision", () => [
  section("Warm-up: Remember them?", [
    box(
      "Today you will…",
      "- remember the people, places and stories of the course 📸\n- review all the grammar of A2 — and get points! ⭐\n- start your final project: **Me in 5 years** 🎬",
    ),
    matchPictures("Remember? Match the photos and the stories from the course.", [
      ["photos/gagarin.jpg", "the first person in space"],
      ["photos/beatles-jfk.jpg", "Beatlemania, New York, 1964"],
      ["photos/place-charyn.jpg", "the Valley of Castles"],
      ["photos/bz-okinawa.jpg", "a blue zone in Japan"],
      ["photos/abbey-road.jpg", "the most famous crossing in the world"],
    ]),
    text(
      "Talk to your teacher.",
      "- What's your favorite lesson or story from the course? Why? 🏆\n- What was the most difficult grammar for you? Is it easier now? 💪\n- What can you do in English now that you couldn't do before the course? 🎉",
    ),
    tip("Make this lesson a celebration! 🎉 The tasks give points — but say clearly: this is to see the progress, not a scary test. Compare with the entry test if you have the results."),
  ]),

  section("Quiz show: the whole course 🎤", [
    quiz("Course quiz! One question from every module. Choose.", [
      { q: "Module 1: What did the first text message say?", options: ["*Merry Christmas", "Hello, world", "Happy birthday"] },
      { q: "Module 2: What was Mrs. Lee doing when the power went off?", options: ["*baking a cake", "having a shower", "walking her dog"] },
      { q: "Module 3: What is the deepest lake in the world?", options: ["*Baikal", "the Caspian Sea", "Lake Kolsai"] },
      { q: "Module 4: What do you call a year between school and university?", options: ["*a gap year", "a leap year", "a day off"] },
      { q: "Module 5: When did John Elfreth Watkins write his predictions?", options: ["*1900", "1950", "2000"] },
      { q: "Module 6: From how high did Felix Baumgartner jump?", options: ["*about 39 km", "about 9 km", "about 390 km"] },
      { q: "Module 7: What did Kate delete in her digital detox?", options: ["*social media apps", "her email", "all her photos"] },
      { q: "Module 8: In which country should you not give a clock as a present?", options: ["*China", "Japan", "Thailand"] },
      { q: "Module 9: What does “hara hachi bu” mean?", options: ["*stop eating when you're 80% full", "eat three times a day", "walk every day"] },
      { q: "Module 10: Where did the Beatles play their last concert?", options: ["*on a roof in London", "at Shea Stadium", "on TV"] },
      { q: "Module 11: Where did Mick Jagger and Keith Richards meet again in 1961?", options: ["*at a train station", "at a concert", "at school"] },
      { q: "Module 12: What comes after “if” in the First Conditional?", options: ["*the Present Simple", "will", "the past"] },
    ]),
    tip("Count the points: 10–12 = A2 superstar 🌟 · 7–9 = great job 👍 · under 7 = look back at those modules together. Ask the student to tell more about each answer: *Who was Watkins? Why a clock?*"),
  ]),

  section("Reading: My A2 year", [
    quiz(
      "Read Aruzhan's post. Choose.",
      [
        { q: "When did Aruzhan start the A2 course?", options: ["*last September", "last month", "two years ago"] },
        { q: "What was the most difficult for her?", options: ["*the Present Perfect", "listening", "irregular verbs"] },
        { q: "What has she done in English for the first time?", options: ["*a job interview", "a trip to London", "an exam"] },
        { q: "What is she going to do next?", options: ["*start B1", "take a gap year", "teach English"] },
      ],
      {
        read: "## 🎓 My A2 year — by Aruzhan\n\nI started the A2 course last September. At first, I was scared to speak — I only answered “yes” or “no”. 😅 The most difficult thing was the Present Perfect: *I've been… I went…* — I mixed them up all the time!\n\nBut little by little, it got easier. My favorite lessons were the stories: urban legends, Beatlemania and the party mystery. 🕵️ I've read more books in English this year than in my whole life.\n\nLast month I did my first job interview in English — and I got the job! 💼 Next, I'm going to start B1. If I practice every day, I'll take the B1 exam next summer. Wish me luck! 🤞",
      },
    ),
    trueFalse("Read again. True or false?", [
      ["At first, Aruzhan was scared to speak.", true],
      ["The Present Perfect was easy for her.", false],
      ["She liked the story lessons.", true],
      ["She didn't get the job.", false],
      ["She wants to take the B1 exam next summer.", true],
    ]),
    match("Match the words from the course.", [
      ["a turning", "point"],
      ["a bucket", "list"],
      ["a digital", "detox"],
      ["a sweet", "tooth"],
      ["a role", "model"],
      ["a gap", "year"],
    ]),
  ]),

  section("Grammar: past and present perfect", [
    choose(
      "Choose.",
      "1. I [*went/'ve been] to Turkey last summer.\n2. Have you ever [*tried/try] horse riding?\n3. I was cooking [*when/while] the phone rang.\n4. She's lived here [*since/for] 2020.\n5. I haven't finished [*yet/already].\n6. What [*were you doing/did you doing] at 9 p.m.?\n7. Who [*invented/did invent] the telephone?\n8. We've [*just/yet] arrived — we're at the door!",
    ),
    gaps(
      "Complete with the right form.",
      "1. Gagarin [flew] into space in 1961. (fly)\n2. I [have never seen/'ve never seen] the northern lights. (never / see)\n3. While we [were walking], it started to snow. (walk)\n4. How long [have you known] your best friend? (you / know)\n5. She [didn't go/did not go] to the party yesterday. (not go)\n6. They [have already eaten/'ve already eaten]. (already / eat)\n7. When [did you start] learning English? (you / start)\n8. He [was sleeping] when the alarm rang. (sleep)",
    ),
  ]),

  section("Grammar: future, modals and more", [
    choose(
      "Choose.",
      "1. I've decided: I [*'m going to/will to] learn Spanish.\n2. If it [*rains/will rain], we'll stay home.\n3. You [*should/should to] see a doctor.\n4. You [*mustn't/don't have to] use your phone in the exam.\n5. It's Sunday — I [*don't have to/mustn't] work!\n6. This is [*the best/the better] day of my life!\n7. My phone is [*cheaper/more cheap] than yours.\n8. I enjoy [*listening/to listen] to music.",
    ),
    gaps(
      "Complete.",
      "1. Everest is [the highest] mountain in the world. (high)\n2. She's the woman [who/that] won two Nobel Prizes.\n3. Is this bag [yours]? (you)\n4. I don't drink [much] coffee. (much / many)\n5. I'm [too] tired to go out.\n6. He speaks English very [well]. (good)\n7. The film was [boring] — I fell asleep. (bor-)\n8. It [might] rain — take an umbrella. (maybe)",
    ),
    drag(
      "Complete the message.",
      "Hi Kate! I've [just] finished my A2 English course! 🎉 It was [more] difficult than A1, but much more interesting. My favorite lesson was the one [about] the Beatles. Next month I'm [going] to start B1. If I [study] every day, I'll be ready for the exam in a year. You [should] try it too! I [might] visit London next year — will you show me Abbey Road? 🎸",
      ["yet", "most", "studying", "will study"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["I've been to Paris in 2019.", false],
      ["If it will snow, we'll go skiing.", false],
      ["She's the friend who helped me.", true],
      ["You should to rest.", false],
      ["I'm interested in music.", true],
      ["We've known each other for ten years.", true],
    ]),
  ]),

  section("Listening: Goodbye from the course", [
    ...listening(
      "Listen. The characters of the course say goodbye and tell their news.",
      "**Leo:** Hi, it's Leo! Remember my digital detox? Well, I've kept my phone out of my bedroom for three months now, and I sleep much better. And guess what — I've got a new job at a café, the one with the free coffee! ☕\n\n**Mia:** Hi, it's Mia! Kenji and I are getting married next summer — in Istanbul, on a boat! 💍 I've already found the dress. If the weather's good, we'll have the party on the beach.\n\n**Dana:** Dana here! I passed my driving test — finally! — and last month I drove to Charyn Canyon with Arman. It was breathtaking. Next, I'm going to visit Japan with Kenji's family. 🇯🇵\n\n**Arman:** Hi, Arman! I'm still saving money for that concert, but I'm getting closer. And I've started learning the guitar — I can play two Beatles songs already! 🎸\n\n**Aigerim:** And I'm Aigerim! I've just finished my barista training at City Bean Café. Before, I was scared to speak English with customers. Now I speak with tourists every day — and I make mistakes, and that's OK! Good luck with your English — and see you in B1! 👋",
    ),
    quiz("Listen and choose.", [
      { q: "How long has Leo kept his phone out of his bedroom?", options: ["*for three months", "for three weeks", "since yesterday"] },
      { q: "Where are Mia and Kenji getting married?", options: ["*in Istanbul", "in Almaty", "in Tokyo"] },
      { q: "Where did Dana drive last month?", options: ["*to Charyn Canyon", "to the airport", "to Astana"] },
      { q: "What has Arman started?", options: ["*learning the guitar", "a new job", "a digital detox"] },
      { q: "What has Aigerim just finished?", options: ["*her barista training", "a B1 course", "driving lessons"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo sleeps better now.", true],
      ["Mia hasn't found her dress yet.", false],
      ["Dana passed her driving test.", true],
      ["Arman can play two Beatles songs.", true],
      ["Aigerim is still scared to speak English.", false],
    ]),
  ]),

  section("Speaking: Your A2 story", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Your English journey: *When did you start? What has been the most useful? What was difficult?*\n2. Your life now: *What have you done this year? What's new?*\n3. Your future: *What are you going to do next year? If you have time, what will you learn?*",
    ),
    order("Make questions for your teacher.", [
      "What was your favorite lesson?",
      "Have you ever been to London?",
      "What are you going to do this summer?",
      "If you have a free day, what will you do?",
      "How long have you taught English?",
    ]),
    tip("This is the final speaking — let the student talk as much as possible. At the end, give 3 compliments about their progress and 1 goal for B1. 🎯"),
  ]),

  section("Project: Me in 5 years", [
    box(
      "Your final project 🎬",
      "Make a 2–3 minute video (or a long text + photos) — **Me in 5 years**:\n\n1. **Me now:** who you are, what you do, what you've achieved this year (*I've… I've just…*)\n2. **My journey:** a story from the past (*When I was… I decided to…*)\n3. **My plans:** *I'm going to… I'll probably… I might…*\n4. **Plan B:** *If…, I'll…*\n5. **A message to me in 5 years:** advice and promises (*You should… Don't forget… I promise I'll…*)\n\nUse grammar from the whole course! Start planning now — finish it at home. 🌟",
    ),
    text("Plan your project. Talk to your teacher.", "- Where will you be in 5 years — city, job, home? 🏡\n- What's the most important goal for you? Why? 🎯\n- What message will you send to yourself? 💌"),
    tip("Remind the student: the project is a time capsule. Save it — and watch it together in 5 years if you can! 😄 Congratulations on finishing A2! 🎓"),
  ]),

  section("Wrap-up: Congratulations!", [
    box("🎓 You've finished English A2!", "You can now:\n\n- tell stories about the past 📖\n- talk about plans, predictions and possibilities 🔮\n- compare things and describe people and places 🌍\n- talk about your experiences: *Have you ever…?* ✈️\n- give advice and talk about rules 💡\n- deal with real situations: hotels, shops, doctors, airports, job interviews 🛄\n\n**See you in B1!** 🚀"),
    text("Talk to your teacher. 🎉", "- Which topic from the course did you love most? Which one was just OK? 😄\n- What would you like to talk about in B1? 🚀\n- Give your teacher one piece of advice for the next students! 💡"),
  ]),

  homework(
    [
      write("Final project: Me in 5 years. Write the script: me now, my journey, my plans, my Plan B and a message to myself. Use grammar from the whole course. (120+ words)", 120, {
        read: "*Example:* Hi, future me! Right now I'm 24, and I work as a designer in Almaty. This year I've finished my A2 English course and I've started running. 🏃 When I was 18, I decided to study design, and it was the best decision of my life. In five years, I'm going to have my own small studio. I'll probably live in a flat near the mountains, and I might have a dog! 🐶 If I save enough money, I'll travel to Japan — it's number one on my bucket list. My message to you: you should never stop learning, and you shouldn't work too much. I promise I'll practice English every day. See you in 2031! 💌",
      }),
      record("Final project video: “Me in 5 years” (2–3 minutes). 🎬", 180),
    ],
    "Homework: Final project",
  ),
  homework(
    [
      choose(
        "Final grammar check. Choose.",
        "1. I [*'ve already done/already did] my homework today.\n2. If you [*come/will come], I'll be happy.\n3. She's [*taller/more tall] than her brother.\n4. I [*was reading/read] when you called.\n5. You [*mustn't/don't must] be late.\n6. This is the café [*where/which] we met.",
      ),
      gaps(
        "Final review. Complete.",
        "1. I've [been] to Almaty three times. (be)\n2. If it's sunny tomorrow, we [will go/'ll go] to the lake. (go)\n3. She was watching TV [when] I arrived.\n4. This is [the most] interesting book I've ever read. (interesting)\n5. I've studied English [for] two years.\n6. You [should] rest — you look tired. (advice)",
      ),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Write a message to your teacher: what did you enjoy in the A2 course, what was difficult, and what do you want to do in B1? (50+ words)", 50),
    ],
    "Homework: A message to your teacher",
  ),
]);
