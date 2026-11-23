import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
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

// 6.1 Have you ever…? — G: Present Perfect for experiences (ever / never), the 3rd form. V: adventures and active free time. Say it right: 's = is or has? S: "Never have I ever". Main format: photos + reading (an adventurous grandma) + listening (a game with friends). No video in class.
export default lesson("a2-6.1", "Have you ever…?", () => [
  section("Warm-up: Would you dare?", [
    box("Today you will…", "- talk about your experiences: *I've been… I've never…* 🌍\n- ask *Have you ever…?* and find out more\n- play “Never have I ever” 🙈"),
    picture(
      "Would you dare? 😱",
      ["photos/exp-bungee.jpg", "photos/exp-diving.jpg", "photos/exp-climbing.jpg", "photos/exp-paragliding.jpg"],
      "Bungee jumping in Norway, scuba diving in Florida, rock climbing in Thailand, paragliding in France",
    ),
    text(
      "Talk to your teacher.",
      "- Which of these would you try tomorrow? Which one never? Why? 😬\n- What's the most adventurous thing you did in your life? How did you feel?\n- Are you a person who loves risk or a person who loves comfort? 🛋️🪂\n- Who's the most adventurous person in your family? What do they do?",
    ),
    tip("Tell your own story first — the scariest or most exciting thing you did. The student will naturally say *I went… I tried…*; later today you'll show them how to talk about experiences without a time: *I've tried it!*"),
  ]),

  section("Vocabulary: Adventures", [
    words("Adventures and experiences", [
      ["go bungee jumping", "🪢⬇️", "I've never been bungee jumping!"],
      ["go scuba diving", "🤿🐠"],
      ["go rock climbing", "🧗"],
      ["go paragliding", "🪂"],
      ["go rafting", "🚣 down a fast river in a boat"],
      ["ride a horse / a camel", "🐎 / 🐪"],
      ["sleep in a tent", "⛺"],
      ["swim with dolphins", "🐬"],
      ["break a bone", "🦴💥", "He broke his arm when he was skiing."],
      ["win a prize / a competition", "🏆"],
      ["meet a famous person", "🤩"],
      ["try (food / a sport)", "😋 do or eat it for the first time", "Have you ever tried sushi?"],
    ]),
    matchPictures("Match the photos and the adventures.", [
      ["photos/exp-bungee.jpg", "bungee jumping"],
      ["photos/exp-diving.jpg", "scuba diving"],
      ["photos/exp-climbing.jpg", "rock climbing"],
      ["photos/exp-paragliding.jpg", "paragliding"],
      ["photos/gap-surf.jpg", "surfing"],
    ]),
    sort("Water, air or land? Sort. 🌊🪂⛰️", {
      "🌊 water": ["scuba diving", "rafting", "surfing", "swimming with dolphins"],
      "🪂 air": ["paragliding", "skydiving", "bungee jumping"],
      "⛰️ land": ["rock climbing", "riding a camel", "sleeping in a tent"],
    }),
    gaps(
      "Complete.",
      "1. I went [scuba] diving in Egypt and saw a shark! 🤿\n2. We slept in a [tent] by the lake. ⛺\n3. She rode a [camel] in the desert. 🐪\n4. He fell and [broke] his leg. 🦴\n5. Have you ever [tried] Korean food? 😋\n6. They [won] a prize for their video. 🏆\n7. I want to go [rock] climbing in the mountains. 🧗\n8. We went [rafting] on a fast river. 🚣",
    ),
  ]),

  section("Reading: Meet Grandma Rosa", [
    tip("Before reading: *What do grandmothers usually do?* After reading: *Is Rosa like your grandma? Would you like a grandma like her?* 😄"),
    trueFalse(
      "Read the interview. True or false?",
      [
        ["Rosa is 78 years old.", true],
        ["She has been skydiving.", true],
        ["She has never broken a bone.", false],
        ["She has swum with sharks.", true],
        ["She has been to Antarctica.", false],
        ["Her grandchildren have never done an adventure with her.", false],
      ],
      {
        read: [
          "## 👵🪂 Meet Grandma Rosa, 78 — the most adventurous grandma in the world?",
          "**Q:** Rosa, people say you're not a normal grandma. Is that true?",
          "**Rosa:** 😄 Well, I've jumped out of a plane three times! I did my first skydive when I was 70. My family thought I was crazy.",
          "**Q:** What else have you done?",
          "**Rosa:** I've been scuba diving in Egypt — I've swum with sharks, small ones! 🦈 I've ridden a camel in Morocco, and I've slept in a tent in the Sahara. I've also been bungee jumping in New Zealand.",
          "**Q:** Have you ever been scared?",
          "**Rosa:** Of course! And I've broken my arm — on a ski holiday in the Alps. 🦴 But I've never said “I'm too old”.",
          "**Q:** Is there anything you haven't done yet?",
          "**Rosa:** Lots! I've never seen the northern lights, and I've never been to Antarctica. 🐧 Next year I'm going to Norway with my grandchildren. They've done a lot of things with me — last summer we went rafting together!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "When did Rosa do her first skydive?", options: ["*when she was 70", "when she was 20", "last year"] },
      { q: "Where has she ridden a camel?", options: ["*in Morocco", "in Egypt", "in New Zealand"] },
      { q: "How did she break her arm?", options: ["*on a ski holiday", "bungee jumping", "skydiving"] },
      { q: "What hasn't she seen yet?", options: ["*the northern lights", "sharks", "the Sahara"] },
    ]),
    text("Talk to your teacher.", "- What do you think about Rosa? Is she brave or crazy? 😄\n- What do your grandparents like doing? Have they ever surprised you?"),
  ]),

  section("Grammar: Have you ever…?", [
    quiz("Notice the rule 🔍 Look: “I've jumped out of a plane. I've never seen the northern lights. Have you ever been scared?” Which is true?", [
      { q: "These sentences are about…", options: ["*experiences in Rosa's life — we don't say when", "things that happen every day", "plans for the future"] },
      { q: "The form is…", options: ["*have / has + the 3rd form: jumped, seen, been", "did + verb", "was / were + -ing"] },
      { q: "“I did my first skydive when I was 70.” — Why the Past Simple here?", options: ["*We say when it happened.", "It's a plan.", "It's a habit."] },
    ]),
    table("pp-ever"),
    table("participles"),
    choose(
      "Choose.",
      "1. I've [*been/went] to London twice.\n2. She [*has/have] never tried sushi.\n3. [*Have/Did] you ever ridden a horse?\n4. We've never [*seen/saw] snow!\n5. Has he ever [*won/winned] a prize?\n6. They [*haven't/hasn't] been to Turkey.\n7. I've [*eaten/ate] horse meat. It's popular in Kazakhstan!\n8. Have you ever [*met/meet] a famous person?",
    ),
    gaps(
      "Write the 3rd form.",
      "1. try → [tried]\n2. see → [seen]\n3. eat → [eaten]\n4. go → [gone/been]\n5. fly → [flown]\n6. swim → [swum]\n7. do → [done]\n8. win → [won]",
    ),
    drag(
      "Complete the chat.",
      "A: Have you [ever] been to Japan?\nB: No, I [haven't]. But my sister [has]! She's [been] there twice.\nA: Wow! Has she [tried] real ramen?\nB: Yes, and she's [eaten] fugu — the dangerous fish! 🐡\nA: No way! I've [never] tried it. I'm too scared! 😱\nB: Me too. I've only [seen] it on TikTok. 😄",
      ["ate", "did", "ever saw"],
    ),
    order("Make questions and sentences.", [
      "Have you ever been to Turkey?",
      "I've never ridden a horse.",
      "Has she ever tried sushi?",
      "We haven't seen the new film.",
      "They have been to Paris three times.",
    ]),
  ]),

  section("Say it right: 's = is or has?", [
    box(
      "🗣️ Say it right",
      "**'s** can be **is** or **has**! Look at the next word:\n\n*She's tired.* → she **is** (+ adjective)\n*She's going.* → she **is** (+ -ing)\n*She's **been** to Rome.* → she **has** (+ 3rd form)\n\nAnd **I've** /aɪv/ — the **v** is short but don't lose it: *I've been* — not “I been”.",
    ),
    quiz("is or has? Choose.", [
      { q: "He's been to Spain.", options: ["*has", "is"] },
      { q: "She's happy today.", options: ["*is", "has"] },
      { q: "It's never snowed here.", options: ["*has", "is"] },
      { q: "He's playing football.", options: ["*is", "has"] },
    ]),
    tip("Say the sentences fast; the student shows 1 finger for *is*, 2 fingers for *has*. Then the student says *I've been… I've never…* — check the *v* is there."),
  ]),

  section("Listening: Never have I ever", [
    ...listening(
      "Listen. Three friends play “Never have I ever”. If you HAVE done it, you take a point.",
      "**Kate:** OK, my turn. Never have I ever… been on TV! 📺\n\n**Arman:** Ha! I have! I was on the news when I was ten — I won a chess competition. ♟️\n\n**Mia:** Really? I've never seen that! OK, one point for Arman. My turn: never have I ever… eaten insects. 🦗\n\n**Kate:** Oh no… I have. In Thailand. They were fried, like chips. Actually, they were OK!\n\n**Arman:** Gross! 😝 OK — never have I ever broken a bone.\n\n**Mia:** I have! I broke my arm when I fell off my bike. I was seven.\n\n**Kate:** Me too — my leg, on a ski trip. So that's one point for me and one for Mia.\n\n**Arman:** My turn again? Never have I ever… sung karaoke in public. 🎤\n\n**Mia:** Everyone has done that!\n\n**Kate:** Not me! I've never sung in front of people. Never!\n\n**Arman:** I haven't either! OK, Mia — one point. So, the scores: Mia two, Kate two, Arman one!\n\n**Mia:** Next question: never have I ever met a famous person…",
    ),
    quiz("Listen and choose.", [
      { q: "Why was Arman on TV?", options: ["*He won a chess competition.", "He sang karaoke.", "He met a famous person."] },
      { q: "Where did Kate eat insects?", options: ["*in Thailand", "in Japan", "at a party"] },
      { q: "How did Mia break her arm?", options: ["*She fell off her bike.", "On a ski trip.", "Playing football."] },
      { q: "Who has never sung karaoke in public?", options: ["*Kate and Arman", "Mia", "everyone"] },
      { q: "What's the score at the end?", options: ["*Mia 2, Kate 2, Arman 1", "Mia 3, Kate 1, Arman 1", "Mia 1, Kate 2, Arman 2"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman was on TV when he was ten.", true],
      ["Kate thinks the insects were terrible.", false],
      ["Kate broke her leg on a ski trip.", true],
      ["Mia has sung karaoke in public.", true],
      ["The next question is about famous people.", true],
    ]),
  ]),

  section("Let's talk: Never have I ever", [
    text(
      "Game: Never have I ever 🙈",
      "Take turns. Say something you've **never** done: *Never have I ever…*\n\nIf the other person **has** done it, they get a point — and they must answer 2 questions (in the Past Simple!): *When did you do it? Where were you? How did you feel? Who were you with?*\n\nIdeas: *been on TV · eaten something strange · fallen asleep in class · lost my phone · cried at a film · met a famous person · forgotten a friend's birthday · stayed up all night* 🌙",
    ),
    tip("This is the key moment: *Have you ever…?* (Present Perfect) → *When did you…?* (Past Simple). Model it a few times. Don't explain the full rule yet — that's the next lesson."),
    text(
      "Talk to your teacher.",
      "- What's something you've never done — but really want to do? Why haven't you done it yet? 🤔\n- What's the strangest food you've ever eaten? 🦗🐙\n- Have you ever been really lost? What happened? 🗺️\n- What's the best thing you've ever won? 🏆",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Have you ever ___ to Paris?", options: ["*been", "went", "go"] },
      { q: "She ___ never tried sushi.", options: ["*has", "have", "is"] },
      { q: "see → 3rd form:", options: ["*seen", "saw", "seed"] },
      { q: "He's been to Rome. → 's = …", options: ["*has", "is", "was"] },
    ]),
    box("Word of the day: a once-in-a-lifetime experience", "**a once-in-a-lifetime experience** ✨ = something special that happens only one time in your life.\n\n*Seeing the northern lights was a once-in-a-lifetime experience!*"),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. go scuba [diving] 🤿\n2. ride a [horse/camel] 🐎\n3. sleep in a [tent] ⛺\n4. [break] a bone 🦴\n5. [win] a prize 🏆\n6. meet a [famous] person 🤩",
      ),
      sort("Regular or irregular 3rd form? Sort.", {
        "regular (-ed)": ["visited", "tried", "played", "jumped"],
        "irregular": ["been", "seen", "eaten", "flown", "swum"],
      }),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: the Present Perfect.", "553eeL1Dvho"),
      choose(
        "Choose.",
        "1. I've never [*been/was] to Asia.\n2. [*Has/Have] your brother ever flown in a plane?\n3. We've [*seen/saw] that film three times!\n4. She [*hasn't/haven't] met my parents.\n5. Have you ever [*eaten/ate] snails?\n6. They've [*won/win] the competition twice.",
      ),
      gaps(
        "Write sentences in the Present Perfect.",
        "1. I / try / surfing → I've [tried] surfing.\n2. she / never / see / the sea → She's never [seen] the sea.\n3. you / ever / ride / a camel? → Have you ever [ridden] a camel?\n4. we / not / be / to Astana → We [haven't been/have not been] to Astana.\n5. he / ever / break / a bone? → [Has he ever broken] a bone?\n6. they / climb / a mountain → They've [climbed] a mountain.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about your experiences: 4 things you've done and 3 things you've never done. Add one detail for each “yes” (when? where?). (60+ words)", 60, {
        read: "*Example:* I've ridden a camel — I did it in Turkestan when I was 12. 🐪 I've been to Istanbul, and I've tried real Turkish baklava. I've broken my arm — I fell off a tree. 😅 I've won a dance competition! But I've never been on a plane alone, I've never swum in the ocean and I've never met a famous person. Yet! 😉",
      }),
      record("Record a 1-minute “Never have I ever” for your teacher: say 5 things you've never done. Your teacher will reply with “I have!” or “Me neither!”", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
