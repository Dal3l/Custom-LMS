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

// 9.2 He asked me if… — G: reported questions (asked if / where…, normal word order), reported requests and orders (asked / told someone (not) to…), reporting verbs (advise, offer, promise, refuse, remind, warn). V: interviews. S: an interview role-play, then report it. Main format: a "normal or weird interview question?" warm-up + a listening (Daniyar tells his grandma about his scholarship interview, ~1 min) + an interview role-play. Video at home.
export default lesson("b1-9.2", "He asked me if…", () => [
  section("Warm-up: Strange interview questions", [
    box(
      "Today you will…",
      "- report questions: *She asked me **where I lived**.* ❓➡️\n- report requests and advice: *He told me **to wait**. She advised me **to rest**.* 📋\n- have an interview — and then tell someone about it 🎙️",
    ),
    sort("Normal or strange job interview question? Sort. 🤔", {
      "🙂 normal": ["Why do you want this job?", "What are your strengths?", "Where do you see yourself in five years?", "Can you work under pressure?"],
      "🤪 strange (but some companies really ask!)": ["If you were an animal, what would you be?", "How many tennis balls fit in a bus?", "What would you do if you were the size of a pencil?", "Which superhero would you like to be?"],
    }),
    text(
      "Talk to your teacher.",
      "- Choose one strange question and answer it! 😄 Why do you think companies ask questions like this?\n- What's the most difficult question anyone has ever asked you in an interview or an exam?\n- Do you get nervous at interviews? What helps you?",
    ),
    tip("Answer one strange question yourself first — be funny. Then ask the student: *What did I just say?* — they'll start reporting naturally."),
  ]),

  section("Vocabulary: Interviews", [
    words("Interviews and reporting verbs", [
      ["an interviewer — an interviewee", "🎙️ the person who asks — 🙋 the person who answers"],
      ["a candidate", "👤 a person who applies for a job or a place"],
      ["a strength — a weakness", "💪 something you're good at — 🙈 something you're not good at"],
      ["advise (someone to…)", "💡 tell someone what they should do", "She advised me to apply early."],
      ["offer (to…)", "🙋 say you'll do something to help", "He offered to drive me."],
      ["promise (to…)", "🤞 say you'll certainly do something"],
      ["refuse (to…)", "🙅 say you won't do something"],
      ["remind (someone to…)", "🔔 help someone remember", "Remind me to call Mom."],
      ["warn (someone not to…)", "⚠️ tell someone about a danger", "He warned me not to be late."],
      ["make a good impression", "✨ make people think well of you"],
      ["be shortlisted", "📋 be chosen for the last group of candidates"],
      ["get the result", "📨 find out if you passed or not"],
    ]),
    match("Match the direct speech and the reporting verb.", [
      ["“You should apply early.”", "advise"],
      ["“I'll drive you there.”", "offer"],
      ["“I'll definitely call you, I promise!”", "promise"],
      ["“No, I won't do it.”", "refuse"],
      ["“Don't forget your passport!”", "remind"],
      ["“Be careful — the road is icy.”", "warn"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Three [candidates] are waiting for their interviews. 👥\n2. My biggest [strength] is that I'm a good listener. 💪\n3. Wear a smart shirt — you want to make a good [impression]. ✨\n4. Good news — I've been [shortlisted] for the job! Only four people left.\n5. My dad [offered] to help me prepare for the interview.\n6. She [refused] to answer the question about her salary.\n7. The teacher [reminded] us to bring our ID cards. 🔔\n8. My friend [warned] me not to talk too much in the interview. ⚠️",
    ),
  ]),

  section("Listening: The scholarship interview", [
    tip("About 1 minute. Daniyar has just had his scholarship interview for a university in Korea. He tells his grandma Saule about it. First listen: *Did it go well?* Second listen: the questions he was asked."),
    ...listening(
      "Listen. Daniyar tells his grandma about his scholarship interview.",
      "**Saule:** Well? How was it? Tell me everything!\n\n**Daniyar:** It was online, with two professors from Seoul. First, they asked me why I wanted to study computer science.\n\n**Saule:** And what did you say?\n\n**Daniyar:** I told them I wanted to build apps that help people — like the language app Kenji works on. Then one professor asked me if I had any experience with programming. I told them about the website I made for a small bakery — my sister's friend Asel owns it. 🍞\n\n**Saule:** Very good. What else did they ask?\n\n**Daniyar:** They asked me where I saw myself in ten years. And then — this was strange — the second professor asked me what I would do if I failed an exam. I said I would ask for help and try again.\n\n**Saule:** That's the right answer.\n\n**Daniyar:** And they asked if I could speak any Korean. I said I knew only a little, but that I was learning. So they asked me to say something in Korean! I was so nervous. I said, \"Nice to meet you, I love kimchi.\" 😅\n\n**Saule:** Ha! And did they laugh?\n\n**Daniyar:** They did! At the end, they told me to wait for an email. They said they would send the results in two weeks. And one professor advised me to keep practicing my Korean every day.\n\n**Saule:** Then you'll practice with me. I'll learn too!\n\n**Daniyar:** You, Grandma? Korean?\n\n**Saule:** Why not? I learned video calls, didn't I? 😄",
    ),
    quiz("Listen and choose.", [
      { q: "How was the interview?", options: ["*online, with two professors", "in person in Seoul", "on the phone"] },
      { q: "What experience did Daniyar talk about?", options: ["*a website for a bakery", "a job at a café", "a language app"] },
      { q: "What strange question did they ask?", options: ["*what he would do if he failed an exam", "what his favorite food was", "if he had a girlfriend"] },
      { q: "When will Daniyar get the results?", options: ["*in two weeks", "tomorrow", "in a month"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["They asked Daniyar why he wanted to study computer science.", true],
      ["Daniyar said he spoke Korean very well.", false],
      ["The professors laughed at his Korean sentence.", true],
      ["One professor advised him to practice Korean every day.", true],
      ["Saule refused to learn Korean.", false],
    ]),
    gaps(
      "Complete what Daniyar reported. Listen again if you need.",
      "1. They asked me [why] I wanted to study computer science.\n2. One professor asked me [if] I had any experience with programming.\n3. They asked me where I [saw] myself in ten years.\n4. They asked me [to] say something in Korean.\n5. They told me to [wait] for an email.\n6. One professor [advised] me to keep practicing my Korean.",
    ),
  ]),

  section("Grammar: Reported questions and requests", [
    quiz("Notice the rule 🔍 Look: “Do you have any experience?” → They asked me if I had any experience. · “Where do you see yourself?” → They asked me where I saw myself.", [
      { q: "For Yes / No questions we use…", options: ["*asked + if", "asked + do", "asked + that"] },
      { q: "What happens to the word order?", options: ["*It's like a normal sentence: where I saw (not where did I see)", "It stays a question.", "The verb goes first."] },
      { q: "“Please wait for an email.” → They told me…", options: ["*to wait for an email", "that wait for an email", "waiting for an email"] },
    ]),
    table("reported-questions"),
    choose(
      "Choose the right form.",
      "1. “Are you tired?” → She asked me [*if I was/was I] tired.\n2. “Where do you work?” → He asked me where [*I worked/did I work].\n3. “What's your name?” → She asked me what [*my name was/was my name].\n4. “Can you swim?” → He asked [*if I could/could I] swim.\n5. “Please sit down.” → She asked me [*to sit/sit] down.\n6. “Don't touch it!” → He told me [*not to touch/don't touch] it.\n7. “When will you finish?” → They asked when [*I would finish/would I finish].\n8. “Have you been to Seoul?” → She asked if I [*had been/have been ever] to Seoul.",
    ),
    gaps(
      "Report the questions.",
      "1. “Do you like your job?” → She asked me [if I liked] my job.\n2. “Where do you live?” → He asked me [where I lived].\n3. “Why are you late?” → The teacher asked me [why I was] late.\n4. “Can you help me?” → My neighbor asked [if I could] help him.\n5. “What time does the train leave?” → I asked [what time the train left].\n6. “Have you finished?” → She asked [if I had finished].",
    ),
    gaps(
      "Report the requests and orders.",
      "1. “Please close the door.” → She asked me [to close] the door.\n2. “Don't be late!” → He told us [not to be] late.\n3. “Call me tomorrow.” → She told me [to call] her the next day.\n4. “Please don't tell anyone.” → He asked me [not to tell] anyone.\n5. “Wait here.” → The guard told us [to wait] there.\n6. “Don't forget your keys!” → Mom reminded me [not to forget] my keys.",
    ),
    drag(
      "Complete Daniyar's message to Madina.",
      "The interview went OK! They asked me [why] I wanted to study in Korea. Then they asked [if] I could speak Korean. 😬 I told them I [was] learning. They asked me [to] say something, and I said I loved kimchi! 😂 At the end, they told me [to] wait for an email, and one professor [advised] me to practice every day.",
      ["that", "am", "said"],
    ),
    order("Make sentences.", [
      "She asked me where I lived.",
      "He asked if I could help him.",
      "They told me to wait for an email.",
      "The doctor advised me to rest.",
      "She asked me not to tell anyone.",
    ]),
  ]),

  section("Reporting verbs", [
    choose(
      "Choose the best reporting verb.",
      "1. “I'll carry your bag.” → He [*offered/refused] to carry my bag.\n2. “I'll never do it again, I promise.” → She [*promised/warned] never to do it again.\n3. “No, I won't apologize!” → He [*refused/offered] to apologize.\n4. “You should see a doctor.” → She [*advised/promised] me to see a doctor.\n5. “Don't swim here — it's dangerous!” → He [*warned/offered] us not to swim there.\n6. “Don't forget to buy bread!” → Mom [*reminded/refused] me to buy bread.\n7. “Could you open the window, please?” → She [*asked/promised] me to open the window.\n8. “Go to your room!” → Dad [*told/offered] me to go to my room.",
    ),
    match("Match and report. 🗣️", [
      ["“I'll help you with your homework.”", "She offered to help me with my homework."],
      ["“You should save some money.”", "He advised me to save some money."],
      ["“I won't lend you my car.”", "She refused to lend me her car."],
      ["“I'll call you every day.”", "He promised to call me every day."],
      ["“Don't touch the oven — it's hot!”", "She warned me not to touch the oven."],
      ["“Remember to lock the door.”", "He reminded me to lock the door."],
    ]),
  ]),

  section("Let's talk: The interview", [
    text(
      "Role-play: The interview 🎙️",
      "**Step 1.** Your teacher interviews you for a job, a university place, or a TV show (you choose!). They ask 6–8 questions — at least one strange one. 😄\n\n**Step 2.** Now report the interview to a “friend” (your teacher in another role):\n\n*She asked me why I wanted… Then she asked if I had… She told me to… She advised me to…*\n\n**Step 3.** Swap: you interview your teacher, then report their answers.",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best advice someone has ever given you before an exam or interview? Report it!\n- Has anyone ever refused to help you? What happened?\n- What did your parents always remind you to do as a child? 🔔",
    ),
    tip("During reporting, correct word order in questions (*asked me where I lived*, not *where did I live*) and *if* for Yes / No questions. Encourage at least three different reporting verbs."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "“Do you smoke?” → She asked me ___ I smoked.", options: ["*if", "that", "do"] },
      { q: "“Where is the bank?” → He asked where ___.", options: ["*the bank was", "was the bank", "is the bank was"] },
      { q: "“Don't run!” → She told us ___.", options: ["*not to run", "don't run", "to not running"] },
      { q: "“You should rest.” → The doctor ___ me to rest.", options: ["*advised", "refused", "offered"] },
    ]),
    box(
      "Phrase of the day: Don't ask!",
      "🙈 **Don't ask!** = It's a bad or funny story — I don't want to talk about it.\n\n*“How was your interview?” — “Don't ask! I called the director by the wrong name.”* 😂",
    ),
  ]),

  homework(
    [
      video("Watch: reported speech — the Grammar Gameshow.", "cetrtFDN2Zg"),
      choose(
        "Choose.",
        "1. “Is it raining?” → She asked [*if it was/was it] raining.\n2. “How old are you?” → He asked me how old [*I was/was I].\n3. “Please help me.” → She asked me [*to help/help] her.\n4. “Don't be noisy.” → The teacher told us [*not to be/don't be] noisy.\n5. “I'll bring a cake.” → She [*offered/refused] to bring a cake.\n6. “Where did you buy it?” → He asked where I [*had bought/did buy] it.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. She [offered] to help me move house.\n2. He [refused] to answer my question.\n3. The guide [warned] us not to go near the edge.\n4. Can you [remind] me to buy milk?\n5. I've been [shortlisted] for the job!\n6. Smile and be polite — make a good [impression].",
      ),
      write("Write about an interview, exam or important conversation you've had (100+ words). Report the questions people asked you and the advice they gave you.", 100, {
        read: "*Example:* Last year I had an interview for a summer job at a hotel. The manager asked me why I wanted to work there and if I had any experience. I told her I had worked in a café. 😊 Then she asked me what I would do if a guest was angry. I said I would listen and try to help. At the end, she told me to wait for a call and advised me to improve my English…",
      }),
      record("Record 1 minute: Report a conversation with a teacher, a boss or a doctor. What did they ask you? What did they tell you to do? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
