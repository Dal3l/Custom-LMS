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

// 7.4 Practical: Tactful conversations — functional language: saying something unpleasant gently (I'm afraid…, I was wondering if…, It might be a good idea to…, Would you mind -ing…?, I'm not sure that… is the best…), responding to criticism (I see where you're coming from, but… / I take your point. / That's fair.), apologizing properly (I'm really sorry, I didn't realize… / It won't happen again.). Review of reporting verbs and reported speech. Main format: "too direct → tactful" match + a medium-long reading (how to say difficult things — Radical Candor, ~470 words) + a long listening (Kenji talks to Aliya about missed deadlines — and gets some feedback himself, ~3:15) + role plays. Video at home (BBC Learning English, giving feedback).
// Facts checked: Kim Scott, a former manager at Google and Apple, wrote "Radical Candor" (2017); her model: "care personally" + "challenge directly" = radical candor; caring without challenging = "ruinous empathy"; challenging without caring = "obnoxious aggression". Characters: Kenji works at a tech company (B2 1.x; no meetings after two — 5.2); Aliya is a designer in his team (her father found Kenji's wallet — B2 1.x).
export default lesson("b2-7.4", "Practical: Tactful conversations", () => [
  section("Warm-up: Too direct!", [
    box(
      "Today you will…",
      "- turn blunt words into tactful ones 🪶\n- give feedback without hurting people — and take criticism well 🤝\n- apologize properly 🙏",
    ),
    match("These are too direct. Match each one with a more tactful version. 😬➡️🙂", [
      ["“Your presentation was boring.”", "“I think it could be a bit shorter and more visual.”"],
      ["“You're always late.”", "“I've noticed you've been late a few times recently. Is everything OK?”"],
      ["“Turn your music down!”", "“Would you mind turning the music down a little?”"],
      ["“That's a terrible idea.”", "“I'm not sure that's the best option. What if we…?”"],
      ["“No, I won't help you.”", "“I'm afraid I can't help this time — I'm really busy.”"],
      ["“You're wrong.”", "“I see where you're coming from, but I see it differently.”"],
    ]),
    text(
      "Talk to your teacher.",
      "- Are people in your culture usually direct or indirect? Give an example. 🌍\n- Is it better to be honest or to be kind — or can you be both?\n- When did someone give you criticism that really helped you?",
    ),
    tip("Point out the tools of tact: questions instead of orders (*Would you mind…?*), softeners (*a bit, a little, I think*), talking about actions, not the person, and *I'm afraid…* for bad news. English speakers (especially British) can be very indirect — discuss how that compares with Kazakh and Russian."),
  ]),

  section("Vocabulary: Difficult conversations", [
    words("Difficult conversations", [
      ["tactful — blunt", "🪶 careful not to upset people — 🔨 very direct, maybe rude"],
      ["constructive criticism", "🧱 criticism that helps someone improve"],
      ["a sensitive subject", "⚠️ a topic that can easily upset people"],
      ["beat around the bush", "🌳 avoid saying what you mean"],
      ["get to the point", "🎯 say the important thing directly"],
      ["sugarcoat", "🍬 make bad news sound better than it is"],
      ["take something personally", "💔 feel hurt by criticism of your work"],
      ["raise an issue", "✋ start talking about a problem"],
      ["be on the same page", "📄 agree and understand each other"],
      ["clear the air", "🌬️ talk openly to end bad feelings"],
    ]),
    match("Match.", [
      ["Stop beating", "around the bush — what's the problem?"],
      ["Please don't take it", "personally."],
      ["I'd like to raise", "an issue about the schedule."],
      ["Money can be", "a sensitive subject."],
      ["Let's make sure we're", "on the same page."],
      ["Her feedback was honest but", "constructive."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Don't [sugarcoat] it — tell me the truth.\n2. He's very [blunt] — he says exactly what he thinks.\n3. I only have five minutes, so let's get to the [point].\n4. She was [tactful] enough not to mention my mistake in front of everyone.\n5. Good managers give [constructive] criticism.\n6. It's not about you — it's about the project. Don't take it [personally].",
    ),
    quiz("Choose the right word.", [
      { q: "Please don't sugar___ it — I want the truth.", options: ["*coat", "cover", "cake"] },
      { q: "She was so ___ that she made the intern cry.", options: ["*blunt", "tactful", "constructive"] },
      { q: "I'd like to ___ an issue about the timetable.", options: ["*raise", "rise", "lift"] },
      { q: "It's feedback on your work, not on you — don't take it ___.", options: ["*personally", "personal", "person"] },
    ]),
  ]),

  section("Reading: How to say difficult things", [
    tip("A medium-long text (~470 words). First reading — 4 minutes: *What are the two parts of “radical candor”?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Kim Scott worked as a manager at Google and Apple.", true],
        ["Radical candor means being honest without caring about people.", false],
        ["“Ruinous empathy” means being too kind to tell the truth.", true],
        ["The writer recommends the “feedback sandwich”.", false],
        ["Good feedback describes the action, not the person.", true],
        ["The writer says you should give feedback in front of the whole team.", false],
      ],
      {
        read: [
          "## 🪶 How to say difficult things",
          "Most of us hate giving bad news. We don't want to hurt anyone, and we don't want them to dislike us. So we beat around the bush, we sugarcoat, or we say nothing at all — and the problem gets bigger.",
          "Kim Scott, who worked as a manager at Google and Apple, thought a lot about this problem. In her book Radical Candor (2017), she describes good communication with two simple ideas: care personally and challenge directly. When you do both, she calls it radical candor: you tell people the truth because you care about them.",
          "When you care but don't challenge, she calls it ruinous empathy. It feels kind, but it isn't. If your colleague's presentation has a serious mistake and you only say \"Great job!\", they'll make the same mistake in front of a client next week. When you challenge but don't care, it's obnoxious aggression: \"That was terrible.\" It may be true, but people will stop listening — and start defending themselves.",
          "So how do you do both? Here are a few ideas that experts agree on.",
          "**Choose the moment.** Praise in public; criticize in private. Nobody listens well when they feel embarrassed in front of others. And don't wait three months — feedback is most useful soon after the event.",
          "**Describe the action, not the person.** \"You're lazy\" attacks who someone is. \"The report arrived two days after the deadline\" describes what happened. People can change actions; it's much harder to change who they are.",
          "**Explain the effect.** \"Because the report was late, the client had to wait, and they weren't happy.\" Now the other person understands why it matters.",
          "**Ask, then listen.** \"Is everything OK? Is there something I don't know?\" Maybe the deadline was impossible, or there's a problem at home. Sometimes you discover that part of the problem is you.",
          "**Agree on the next step.** Finish with a clear plan, so you're both on the same page.",
          "What about the famous \"feedback sandwich\" — something nice, then the criticism, then something nice again? Many experts now say it doesn't work very well. People soon learn the pattern, so they either stop believing the praise or miss the criticism completely. It's better to be kind and clear.",
          "And when you are the one receiving criticism? Try not to take it personally. Thank the person, ask questions to understand, and take time before you reply. \"I take your point\" is not the same as \"you're right about everything\" — but it shows you're listening. Sometimes the most uncomfortable feedback turns out to be the most useful. 🌱",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is “obnoxious aggression”?", options: ["*challenging without caring", "caring without challenging", "saying nothing"] },
      { q: "Why should you criticize in private?", options: ["*People don't listen well when they feel embarrassed.", "It's faster.", "It's the law."] },
      { q: "Why is “The report arrived two days late” better than “You're lazy”?", options: ["*It describes an action people can change.", "It's shorter.", "It's more polite to the client."] },
      { q: "What's the problem with the feedback sandwich?", options: ["*People learn the pattern and miss the message.", "It takes too long.", "It's too direct."] },
    ]),
    order(
      "Put the steps of good feedback in order.",
      [[
        "Choose a private moment, soon after the event.",
        "Describe what happened — the action, not the person.",
        "Explain the effect of the action.",
        "Ask questions and listen to the answer.",
        "Agree on the next step together.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("Language: Saying it tactfully", [
    table("tactful-language"),
    choose(
      "Choose the more tactful option.",
      "1. [*I'm afraid I can't come/I won't come] to the party on Saturday.\n2. [*Would you mind closing/Close] the window?\n3. [*I'm not sure that's the best idea/That's a stupid idea].\n4. [*It might be a good idea to check/You didn't check] the numbers again.\n5. [*I was wondering if you could help/Help] me with this.\n6. [*I see where you're coming from, but/You're wrong, because] I think we need more time.\n7. [*The report was a bit late/You're always late with reports].\n8. [*I'm really sorry, I didn't realize/It's not my fault].",
    ),
    sort("Blunt or tactful? Sort. 🧩", {
      "🔨 blunt": ["“That's wrong.”", "“Do it again.”", "“You never listen.”", "“I don't like it.”"],
      "🪶 tactful": ["“I'm not sure that's quite right.”", "“Could you have another look at it?”", "“I feel I'm not always being heard.”", "“It's not really my style, to be honest.”"],
    }),
    gaps(
      "Make these sentences more tactful. Use the words in brackets.",
      "1. “Your essay is too long.” (a bit) → Your essay is [a bit] long.\n2. “Send me the file.” (could) → [Could] you send me the file?\n3. “I disagree.” (afraid) → I'm [afraid] I don't agree.\n4. “Turn off your phone.” (mind) → Would you [mind] turning off your phone?\n5. “That won't work.” (sure) → I'm not [sure] that will work.\n6. “You made a mistake.” (seems) → There [seems] to be a mistake.",
    ),
  ]),

  section("Language: Taking criticism well", [
    match("Someone criticizes you. Match the criticism with a calm, tactful reply.", [
      ["“This report has a lot of mistakes.”", "“Thanks for telling me. Could you show me which ones?”"],
      ["“You were late again this morning.”", "“That's fair. I'm sorry — the bus was late, but I'll leave earlier.”"],
      ["“Your idea won't work.”", "“I take your point. What do you think is the biggest problem?”"],
      ["“You never answer my messages.”", "“I'm sorry, I didn't realize you were waiting. I'll reply faster.”"],
      ["“This design looks old-fashioned.”", "“I see what you mean. Which part feels old-fashioned to you?”"],
      ["“You should have asked me first.”", "“You're right, I should have. It won't happen again.”"],
    ]),
    tip("Point out the pattern: thank / accept (*That's fair, I take your point*) → ask a question → offer a next step. Ask: *Which reply is hardest for you to say? Why?*"),
  ]),

  section("Listening: A difficult conversation", [
    tip("A long listening — about 3 minutes 15 seconds. Kenji leads a team at a tech company. Aliya, a designer, has missed two deadlines. Listen to how he raises the issue — and how she responds. First listen: *What was the real problem?* Second listen: the tasks and the phrases."),
    ...listening(
      "Listen to Kenji and Aliya.",
      "**Kenji:** Aliya, thanks for coming. Have you got ten minutes? There's something I'd like to talk about.\n\n**Aliya:** Sure. Is everything OK?\n\n**Kenji:** Mostly, yes. First, I want to say that the app designs you did last month were excellent. The client loved them. But I'm afraid there's an issue I need to raise. The last two projects arrived a few days after the deadline.\n\n**Aliya:** I know. I'm sorry.\n\n**Kenji:** I'm not here to criticize you. I just want to understand what's happening. Because the screens were late last week, the developers had to wait, and the client presentation was moved. So it does affect the whole team.\n\n**Aliya:** I understand. Can I be honest?\n\n**Kenji:** Please.\n\n**Aliya:** I see why it's a problem. But I'm not sure the deadlines were realistic. For the last project, I got the brief on Monday, and the deadline was Wednesday. And then on Tuesday, the client changed the colors and added two new screens. Nobody moved the deadline.\n\n**Kenji:** Why didn't you tell me?\n\n**Aliya:** I did mention it in the team chat, but it was a Friday evening, and I think the message got lost under fifty others. After that, it felt too late to say anything, so I just worked until midnight. I even dreamed about the login screen.\n\n**Kenji:** Messages on Friday evenings are where good ideas go to die. Hmm. I didn't realize the client had changed so much.\n\n**Aliya:** And to be honest, I'm a bit uncomfortable saying this, but sometimes the briefs aren't very clear. I spent a whole day on a version that, it turned out, nobody wanted.\n\n**Kenji:** That's fair. I take your point. I've been sending briefs very quickly, because I'm under pressure too. That's not your fault. I'm sorry — I should have checked with you before agreeing to the client's dates.\n\n**Aliya:** Thank you. And I should have told you earlier, instead of just working late and hoping for the best. I didn't want to look as if I was complaining.\n\n**Kenji:** I'd much rather you complained. So, how can we make sure we're on the same page next time?\n\n**Aliya:** Could we have a short meeting when a new project starts? Just fifteen minutes, so I can ask questions before I begin.\n\n**Kenji:** Good idea. Before two o'clock, of course.\n\n**Aliya:** Of course. Our sacred rule.\n\n**Kenji:** And if a client changes something, the deadline moves too — I'll tell them that myself. If you think a date is impossible, tell me on the first day, not the last.\n\n**Aliya:** Deal. That sounds much better. And I'll send you a quick update every Wednesday, so there are no surprises.\n\n**Kenji:** Perfect. Thank you for being so honest, Aliya. Honestly, I was nervous about this conversation.\n\n**Aliya:** So was I. I thought you were going to tell me off.\n\n**Kenji:** Well, I did learn something. Apparently, I'm part of the problem.\n\n**Aliya:** Only a small part. A very tactful part.\n\n**Kenji:** Ha! I'll take that as a compliment.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Kenji start the conversation?", options: ["*He praises Aliya's work, then raises the issue.", "He criticizes her immediately.", "He talks about the client."] },
      { q: "Why were the deadlines a problem, according to Aliya?", options: ["*They weren't realistic, and the client changed things.", "She was ill.", "She had too many holidays."] },
      { q: "What does Kenji admit?", options: ["*He sent unclear briefs and agreed to the client's dates too quickly.", "He forgot the deadline.", "He didn't like the designs."] },
      { q: "What do they agree to do?", options: ["*a short meeting at the start of each project and weekly updates", "longer deadlines for everything", "work at weekends"] },
      { q: "How do both of them feel at the end?", options: ["*relieved — they were both nervous", "still angry", "embarrassed"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The client was happy with Aliya's app designs.", true],
      ["For the last project, Aliya had two weeks.", false],
      ["The client added two new screens.", true],
      ["Aliya told Kenji about the problem immediately.", false],
      ["Kenji will tell the client that deadlines move when things change.", true],
      ["Aliya expected Kenji to tell her off.", true],
    ]),
    gaps(
      "Complete the tactful phrases.",
      "1. I'm [afraid] there's an issue I need to raise.\n2. I see [why] it's a problem.\n3. I'm not [sure] the deadlines were realistic.\n4. I'm a [bit] uncomfortable saying this, but…\n5. That's fair. I take your [point].\n6. How can we make sure we're on the same [page] next time?",
    ),
  ]),

  section("Role play: Tactful conversations", [
    text(
      "🎭 Role plays",
      "Choose two situations. Then swap roles.\n\n**A. 🔊 The neighbor.** Your neighbor plays loud music every night until 1 a.m. You have exams. Raise the issue politely.\n\n**B. 📊 The presentation.** Your friend asks what you thought of their presentation. Honestly, it was too long and hard to follow. Give constructive feedback.\n\n**C. 😬 The criticism.** Your boss (your teacher) says your last report had several mistakes. You think the deadline was too short. Respond calmly.\n\n**D. 🙏 The apology.** You forgot to send an important file to a colleague, and they got into trouble. Apologize properly and offer a solution.\n\n*Remember:* choose the moment · describe the action · explain the effect · ask and listen · agree on the next step.",
    ),
    tip("Make it realistic: in A, the neighbor gets a little defensive; in C, start quite bluntly so the student has to stay calm. Afterwards, report back what was said with reporting verbs (*You suggested… I promised… You apologized for…*) — a nice link to 7.1."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Would you mind ___ the door?", options: ["*closing", "to close", "close"] },
      { q: "I'm ___ I can't help you today.", options: ["*afraid", "sorry that", "sure"] },
      { q: "Caring without challenging is called “ruinous ___”.", options: ["*empathy", "candor", "aggression"] },
      { q: "Don't beat around the ___ — just tell me!", options: ["*bush", "tree", "point"] },
    ]),
    box(
      "Phrase of the day: it's not what you say, it's how you say it",
      "🪶 The same message can hurt or help — depending on the words, the moment and the tone.\n\n*Can you remember a time when how something was said mattered more than what was said?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — English at Work: Giving feedback.", "UKz1Fsw_e8c"),
      choose(
        "Choose the more tactful option.",
        "1. [*I was wondering if you could/You must] send it by Friday.\n2. [*There seems to be a small problem/You've made a mess] with the numbers.\n3. [*I take your point, but/Rubbish!] I still think we should wait.\n4. [*It might be better to/You should obviously] start earlier.\n5. [*I'm really sorry — it won't happen again/Whatever, it's not a big deal].\n6. [*Would you mind not/Stop] talking during the film?",
      ),
      drag(
        "Complete the tactful email.",
        "Hi Tom,\n\nThanks for the report — the charts are really clear. I'm [afraid] there are a few small mistakes in the numbers on page 4. Would you [mind] checking them before Friday? It might be a good [idea] to ask Kate, as she prepared the data. I [realize] the deadline was short, so please let me know if you need more time. I want to make sure we're on the same [page].\n\nThanks [again],\nLaura",
        ["happy", "must", "point"],
      ),
    ],
    "Homework: Tactful language",
  ),
  homework(
    [
      write("Write an email (140–190 words) to a colleague, classmate or neighbor about a problem (noise, a late project, a shared kitchen…). Be tactful: describe the action, explain the effect, suggest a solution and stay friendly.", 140, {
        read: "Plan: a friendly opening · the issue (I'm afraid… / I've noticed that…) · the effect · a suggestion (Would you mind…? / It might be a good idea to…) · a positive ending.",
      }),
      record("Record a 1-minute apology for something you forgot to do (real or invented). Apologize properly, explain without making excuses, and offer a solution. 🙏🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
