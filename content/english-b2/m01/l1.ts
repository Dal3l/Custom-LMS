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

// 1.1 So, tell me about yourself — G: question forms: subject and object questions, questions ending with a preposition, negative questions, indirect questions (Do you know…? I was wondering if…). V: compound personality adjectives (open-minded, self-confident, short-tempered…). S: interview a stranger. Main format: "first impressions: myth or fact?" + a long reading (the science of first impressions, ~560 words) + a long listening (Daniyar at a welcome evening for new students in Seoul, ~3:15) + TED-Ed video in class.
// Facts checked: Willis & Todorov (Princeton, 2006) — people judge trustworthiness from a face after a 100-millisecond exposure; Ambady & Rosenthal (1993) — "thin slices": strangers rated teachers from short silent video clips (30 s, later 6 s and 2 s), and the ratings were close to the students' end-of-term evaluations; the "halo effect" — named by Edward Thorndike (1920); Mehrabian's "7% words" — from experiments about feelings and attitudes only, not all communication; the primacy effect — we remember first information best.
export default lesson("b2-1.1", "So, tell me about yourself", () => [
  section("Warm-up: First impressions — myth or fact?", [
    box(
      "Today you will…",
      "- find out how fast we judge strangers — and how often we're wrong 🧠\n- ask every kind of question: *Who called you? Who did you call? I was wondering if…* ❓\n- interview a “stranger” in five minutes 🎤",
    ),
    trueFalse("First impressions: myth or fact? 🤔", [
      ["People can decide if a face looks trustworthy in about a tenth of a second.", true],
      ["Only 7% of all communication is the words we say — in every situation.", false],
      ["Once you've formed a first impression, it can never change.", false],
      ["We usually remember the first things we learn about a person better than the later ones.", true],
      ["If we like one thing about a person, we often think their other qualities are good too.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Think of someone you didn't like at first but who later became a friend. What changed your mind?\n- What do *you* notice first about a new person — their face, voice, clothes, or something else?\n- Do you think you make a good first impression? Why or why not?",
    ),
    tip("Discuss each statement briefly — the reading explains all five. Statement 2 is a famous myth: the original studies were only about feelings and attitudes."),
  ]),

  section("Vocabulary: What are they like?", [
    words("Compound personality adjectives", [
      ["open-minded", "🧠 happy to listen to new ideas", "She's very open-minded — you can tell her anything."],
      ["narrow-minded", "🚫 not willing to accept new or different ideas"],
      ["self-confident", "💪 sure of yourself and your abilities"],
      ["easy-going", "😌 relaxed, not easily worried or annoyed"],
      ["short-tempered", "😠 gets angry very quickly"],
      ["absent-minded", "🙃 often forgets things because they're thinking about something else"],
      ["big-headed", "🎈 thinks they're more important or clever than they are"],
      ["hard-working", "🛠️ puts a lot of effort into work"],
      ["level-headed", "⚖️ calm and sensible, even in difficult situations"],
      ["warm-hearted", "❤️ kind and friendly"],
      ["two-faced", "🎭 says nice things to you but bad things about you behind your back"],
      ["strong-willed", "🦁 very determined to do what they want"],
    ]),
    match("Match the adjectives and the people.", [
      ["absent-minded", "He left his phone in the fridge — again."],
      ["short-tempered", "She shouts if the bus is one minute late."],
      ["level-headed", "When the fire alarm went off, he calmly told everyone where to go."],
      ["big-headed", "He thinks he's the best player in the world. He isn't."],
      ["two-faced", "She's friendly to you, then laughs at you with others."],
      ["open-minded", "My grandma is 80, but she's happy to try any new food or idea."],
    ]),
    sort("Positive or negative? Sort the adjectives. 🧩", {
      "👍 usually positive": ["open-minded", "easy-going", "level-headed", "warm-hearted", "hard-working"],
      "👎 usually negative": ["narrow-minded", "short-tempered", "big-headed", "two-faced"],
    }),
    tip("*Strong-willed* and *self-confident* can be positive or negative — ask the student when. Pronunciation: the stress is usually on the second part: *open-MINDed, easy-GOing* (but *HARD-working*)."),
  ]),

  section("Reading: The science of first impressions", [
    tip("A long text (~560 words). First reading — 5 minutes: *Are first impressions a good guide to people?* Then the tasks. Ask the student to find four questions in the text and say what kind they are."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In the Princeton study, people needed a long time to judge a face.", false],
        ["Longer exposure to a face mostly made people more confident, not change their minds.", true],
        ["In the “thin slices” study, people watched short videos without sound.", true],
        ["The halo effect was first described in the 1990s.", false],
        ["Mehrabian's studies were about every kind of communication.", false],
        ["The writer thinks we can't do anything about first impressions.", false],
        ["The writer suggests asking questions to get to know people better.", true],
      ],
      {
        read: [
          "## 🧠 You had me at hello: the science of first impressions",
          "Have you ever met someone and known, almost immediately, whether you liked them? You're not alone. Psychologists have spent decades asking a simple question: how quickly do we judge strangers — and how often are we right?",
          "**A tenth of a second.** In 2006, two psychologists at Princeton University, Janine Willis and Alexander Todorov, showed people photos of faces for different lengths of time — from a tenth of a second to a full second. Then they asked them questions: Does this person look trustworthy? Competent? Likeable? The surprising result was that judgments made after just 100 milliseconds were very similar to those made with no time limit. Seeing the face for longer didn't really change people's minds; it mostly made them more confident about what they had already decided.",
          "**Thin slices.** Other researchers wanted to know whether these quick judgments are accurate. In a famous study from 1993, Nalini Ambady and Robert Rosenthal showed strangers short silent video clips of university teachers — first thirty seconds long, then just six and even two seconds. The strangers rated each teacher's personality: Did they seem warm? Confident? Enthusiastic? Amazingly, their ratings were close to the evaluations the teachers' own students gave at the end of the term. A few seconds of body language, it seemed, said a lot.",
          "**The halo effect.** But first impressions can also lead us in the wrong direction. Back in 1920, the psychologist Edward Thorndike noticed that army officers who rated a soldier highly for one quality — looking smart, for example — tended to rate him highly for everything else, too. He called this the *halo effect*. Today we see it everywhere: attractive people are often assumed to be more intelligent, and a confident speaker is often believed even when he's wrong.",
          "**What about words?** You may have heard that only 7% of communication is the words we say, while the rest is tone of voice and body language. This is one of the most famous myths in psychology. The original experiments by Albert Mehrabian in the 1960s only looked at how people express feelings and attitudes, using single words. Mehrabian himself has said that his numbers don't apply to all communication. If they did, we could understand a lecture in a foreign language just by watching the speaker!",
          "**Can we change a first impression?** Yes — but it takes effort. Because of the *primacy effect*, we remember the first information we get about someone better than what comes later. That's why a bad start at a job interview is hard to forget. However, research also shows that new information, especially surprising or repeated information, can update our opinions over time.",
          "So what should we do with all this? First, remember that your brain makes fast decisions you didn't ask for — and that they're often wrong. Second, when you meet someone new, ask questions instead of guessing. Who are they? What do they care about? What made them choose their job? Questions turn a quick judgment into a real conversation. And when *you* want to make a good impression, the advice is surprisingly simple: smile, listen, and show genuine interest in the other person. After all, nothing makes people like us more than feeling that we like them. 😊",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did the Princeton study find?", options: ["*Quick judgments of faces were similar to slow ones.", "People can't judge faces quickly.", "Longer exposure made people change their minds."] },
      { q: "What did the strangers' ratings in the “thin slices” study match?", options: ["*the students' evaluations of the teachers", "the teachers' salaries", "the teachers' own opinions of themselves"] },
      { q: "What is the halo effect?", options: ["*Liking one quality makes us rate other qualities highly too.", "Bad first impressions last forever.", "We remember the last thing we hear."] },
      { q: "Why does the writer mention a lecture in a foreign language?", options: ["*to show that words obviously matter", "to give advice to students", "to explain the primacy effect"] },
      { q: "What is the writer's main advice?", options: ["*Ask questions and show real interest instead of judging quickly.", "Trust your first impression.", "Focus on your clothes and body language."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. able to be trusted: [trustworthy]\n2. able to do something well: [competent]\n3. easy to like: [likeable/likable]\n4. without sound: [silent]\n5. correct, exact: [accurate]\n6. real and honest: [genuine]",
    ),
  ]),

  section("Video: Should you trust your first impression?", [
    video("Watch: TED-Ed — should you trust your first impression?", "eK0NzsGRceg"),
    text(
      "After the video: talk about it.",
      "- What information do we use when we form a first impression of a face?\n- Why can these quick judgments be dangerous — at work, in court, in politics?\n- What does the video say about changing a first impression? Do you agree?\n- Have you ever been wrong about someone? Tell the story.",
    ),
    tip("Let the student retell the main idea in 3–4 sentences first, then discuss. Encourage linking with the reading: *Like the Princeton study, the video says…*"),
  ]),

  section("Grammar: Every kind of question", [
    quiz("Notice the rule 🔍 Look: “Who called you?” · “Who did you call?” · “What are you interested in?” · “Didn't you get my message?”", [
      { q: "In “Who called you?”, who is the subject?", options: ["*who (we don't know who called)", "you"] },
      { q: "Why is there no “did” in “Who called you?”", options: ["*Because “who” is the subject of the question.", "Because it's in the present.", "It's a mistake."] },
      { q: "“Didn't you get my message?” shows that the speaker…", options: ["*expected you to get it and is surprised", "is asking a neutral question", "is angry with themselves"] },
    ]),
    table("question-forms"),
    choose(
      "Subject or object question? Choose.",
      "1. Who [*called/did call] you last night? (Someone called you.)\n2. Who [*did you call/you called] last night? (You called someone.)\n3. What [*happened/did happen] at the party?\n4. Which team [*won/did win] the match?\n5. What [*did she say/she said] to you?\n6. How many people [*came/did come] to your birthday?\n7. Who [*does this phone belong/belongs this phone] to?\n8. Who [*wrote/did write] this song? 🎸",
    ),
    order("Make questions with the preposition at the end.", [
      "What are you interested in?",
      "Who did you go to the concert with?",
      "Where are you from?",
      "What are you worried about?",
      "Who is this present for?",
    ]),
    gaps(
      "Negative questions: complete. Use the verb in brackets.",
      "1. [Didn't you get/Did not you get] my message? I sent it at ten! (get)\n2. [Aren't you] cold? You're only wearing a T-shirt! (be)\n3. [Isn't it] a beautiful day? (be)\n4. [Haven't you finished] yet? We're late! (finish)\n5. [Don't you like] sushi? I thought you loved it. (like)\n6. [Wasn't she] at the meeting? I didn't see her. (be)",
    ),
  ]),

  section("Grammar: Indirect questions", [
    table("indirect-questions"),
    choose(
      "Choose the correct indirect question.",
      "1. Do you know where [*the station is/is the station]?\n2. Could you tell me what time [*the museum opens/does the museum open]?\n3. I was wondering if you [*could help/could you help] me.\n4. Do you have any idea why [*she left/did she leave] so early?\n5. Can you tell me [*if/that] this seat is free?\n6. I'd like to know how much [*it costs/does it cost].\n7. Do you remember where [*I put/did I put] my keys?\n8. Would you mind telling me [*how old you are/how old are you]? 😄",
    ),
    drag(
      "Make the questions more polite. Complete.",
      "1. Where is the bank? → Do you know where the bank [is]?\n2. Does the shop open on Sundays? → Could you tell me [if] the shop opens on Sundays?\n3. Why did you choose this job? → I'd love to know why you [chose] this job.\n4. Can you help me? → I was [wondering] if you could help me.\n5. How long have you lived here? → Do you mind me asking how long you've [lived] here?\n6. What does this word mean? → Do you have any [idea] what this word means?",
      ["does", "that", "choose"],
    ),
    tip("Say it right: in indirect questions the voice goes down at the end more often than in yes / no questions — they sound softer. Practice: *I was wondering if you could help me.* ↘"),
  ]),

  section("Listening: A welcome evening in Seoul", [
    tip("A long listening — about 3 minutes 15 seconds. Daniyar (from English B1 — now a student in Seoul) meets two new students at a welcome evening. First listen: *What do the three students have in common?* Second listen: the tasks. Ask the student to note four different kinds of questions they hear."),
    ...listening(
      "Listen to Daniyar at a welcome evening for international students in Seoul.",
      "**Ji-woo:** Hi! Sorry, is this seat free?\n\n**Daniyar:** Yes, of course. Sit down. I'm Daniyar, by the way.\n\n**Ji-woo:** Nice to meet you, Daniyar. I'm Ji-woo. I'm one of the student volunteers tonight, so I'm supposed to make everyone talk! Where are you from?\n\n**Daniyar:** Kazakhstan — from Almaty. I'm studying engineering here.\n\n**Ji-woo:** Oh, really? Who told you about our university? We don't get many students from Kazakhstan.\n\n**Daniyar:** Nobody, actually. I found it myself. I've been watching Korean series since I was thirteen, so I started learning Korean, and then I applied for a scholarship.\n\n**Ji-woo:** Wait — so your Korean is good? Why are we speaking English, then?\n\n**Daniyar:** Because I'm too nervous! Honestly, I can understand most things, but when I have to speak, my mind goes blank.\n\n**Lucas:** Hey, can I join you? Everyone at my table is talking about chemistry.\n\n**Ji-woo:** Sure! Didn't you want to talk about chemistry?\n\n**Lucas:** Not at nine p.m. on a Friday! I'm Lucas, from Brazil. Business studies.\n\n**Daniyar:** Daniyar. Engineering. So, Lucas, what made you choose Korea?\n\n**Lucas:** My grandfather, actually. He worked here in the eighties, and he always talked about the food. So when I had the chance to do a year abroad, I thought: why not? What about you, Ji-woo? Are you from Seoul?\n\n**Ji-woo:** No, I'm from Busan, on the south coast. Do you know where that is?\n\n**Lucas:** By the sea, isn't it? I've heard the beaches are amazing.\n\n**Ji-woo:** They are. And the fish market is the best in the country. Have you ever tried raw fish, Daniyar?\n\n**Daniyar:** Once, in Almaty. I didn't like it, to be honest.\n\n**Ji-woo:** Didn't you? Then you haven't tried it in Busan! I'll take you both there one weekend. It's only about two and a half hours by fast train.\n\n**Lucas:** Deal! What do people do in Busan in the evenings?\n\n**Ji-woo:** Walk by the sea, eat, sing karaoke… People from Busan are louder than people from Seoul, by the way. My friends here say I talk too much.\n\n**Daniyar:** Do they? I hadn't noticed.\n\n**Ji-woo:** Very funny. Anyway — who did you come here with, Lucas? Are your friends here too?\n\n**Lucas:** No, I came alone. That's why I'm here tonight — I don't know anyone yet. Which is kind of scary.\n\n**Daniyar:** Same here. Last week I was so homesick that I called my grandmother three times in one day.\n\n**Ji-woo:** Aw! What did she say?\n\n**Daniyar:** She told me to eat properly and stop worrying. And then she asked me if Korean people were friendly.\n\n**Ji-woo:** And are they?\n\n**Daniyar:** So far, yes! Especially the volunteers.\n\n**Ji-woo:** Good answer! Okay, I have a question for both of you. It's from our volunteer guide. What's something you're really proud of — but nobody knows about?\n\n**Lucas:** Hmm. I'm a pretty good cook. I make my grandfather's feijoada — a Brazilian bean stew. My flatmates don't know yet.\n\n**Daniyar:** I once fixed my grandmother's old radio with just a screwdriver and a YouTube video. It still works.\n\n**Ji-woo:** That's very engineering of you. I was wondering if you could both help me next week, actually. We're organizing a food evening for international students. Lucas, you could cook something, and Daniyar, you could… fix the speakers?\n\n**Lucas:** Deal. As long as someone helps me find black beans in Seoul.\n\n**Daniyar:** And I'll try to speak Korean all evening. If my mind goes blank, you have to help me.\n\n**Ji-woo:** It's a promise. Here's to new friends!",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Daniyar speak English, not Korean?", options: ["*He feels too nervous to speak Korean.", "He doesn't understand Korean.", "Ji-woo doesn't speak Korean."] },
      { q: "Why did Lucas choose Korea?", options: ["*His grandfather worked there and talked about it.", "He studies Korean.", "He got a scholarship for engineering."] },
      { q: "Where is Ji-woo from?", options: ["*Busan", "Seoul", "Brazil"] },
      { q: "What is Lucas proud of?", options: ["*his cooking", "his Korean", "his grades"] },
      { q: "What does Ji-woo ask them to do?", options: ["*help at a food evening for international students", "join the volunteer team", "teach her Portuguese and Kazakh"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Someone at home told Daniyar about the university.", false],
      ["Lucas left his table because the conversation was boring for him.", true],
      ["Lucas came to Korea with his friends.", false],
      ["Ji-woo offers to take them to Busan one weekend.", true],
      ["Daniyar called his grandmother three times in one day.", true],
      ["Daniyar repaired a radio with a screwdriver and a video.", true],
      ["Daniyar promises to speak Korean at the food evening.", true],
    ]),
    gaps(
      "Complete the questions from the conversation.",
      "1. Ji-woo: Who [told] you about our university?\n2. Ji-woo: [Didn't] you want to talk about chemistry?\n3. Daniyar: What [made] you choose Korea?\n4. Ji-woo: Do you know where that [is]?\n5. Ji-woo: Who did you come here [with], Lucas?\n6. Ji-woo: I was [wondering] if you could both help me next week.",
    ),
  ]),

  section("Let's talk: Five minutes with a stranger", [
    text(
      "Interview a “stranger” 🎤",
      "Imagine you've just met at a welcome evening. Prepare **8 questions** — use at least one of each kind:\n\n- a subject question: *Who / What made you…?*\n- an object question: *What did you…?*\n- a question with a preposition at the end: *What are you into?*\n- a negative question: *Haven't we met before?*\n- an indirect question: *I was wondering if… / Do you mind me asking…?*\n\nInterview your teacher for 5 minutes — then swap. At the end, describe your partner with **three compound adjectives** and explain why. 😊",
    ),
    tip("In a group: students interview each other in pairs, then introduce their partner to the group. Note good questions and typical mistakes (*Who did call you?*, *Do you know where is…?*)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Who ___ the window?", options: ["*broke", "did break", "breaked"] },
      { q: "Do you know where ___?", options: ["*she lives", "does she live", "lives she"] },
      { q: "___ you hear the news? I thought everyone knew!", options: ["*Didn't", "Don't", "Weren't"] },
      { q: "He forgets everything. He's so ___.", options: ["*absent-minded", "open-minded", "level-headed"] },
    ]),
    box(
      "Phrase of the day: You never get a second chance to make a first impression",
      "🎯 A popular saying in business and job interviews. Is it true? The reading says first impressions *can* change — but it's hard work!\n\n*What's your best tip for a good first impression?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — indirect questions.", "CzoxIVPtPgI"),
      choose(
        "Choose.",
        "1. Who [*invented/did invent] the telephone?\n2. What [*did you buy/you bought] at the market?\n3. Could you tell me where [*the toilets are/are the toilets]?\n4. [*Haven't you/Have not you] seen this film? It's a classic!\n5. Who are you waiting [*for/—]?\n6. I wonder [*if/that] she'll come.\n7. What [*happened/did happen] to your car?\n8. Do you know how long [*the film is/is the film]?",
      ),
      gaps(
        "Write the indirect questions.",
        "1. What time is it? → Could you tell me what time [it is]?\n2. Is there a pharmacy near here? → Do you know [if/whether] there's a pharmacy near here?\n3. Why did they cancel the concert? → Do you know why they [cancelled/canceled] the concert?\n4. Where can I buy tickets? → I'd like to know where I [can] buy tickets.\n5. How much does it cost? → Can you tell me how much it [costs]?\n6. Did she pass the exam? → I wonder if she [passed] the exam.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the adjectives and the meanings.", [
        ["easy-going", "relaxed and calm"],
        ["self-confident", "sure of yourself"],
        ["warm-hearted", "kind and friendly"],
        ["strong-willed", "very determined"],
        ["narrow-minded", "not open to new ideas"],
        ["hard-working", "puts a lot of effort into work"],
      ]),
      write("A website asks: “What first impression do you make — and is it the real you?” Write an article (140–190 words). Describe how people see you when they first meet you, how you're different when people know you better, and give one tip for making a good first impression.", 140, {
        read: "*Tips:* start with a question to the reader · use 3–4 compound adjectives · give an example from your life · end with your tip.",
      }),
      record("Record a 1-minute answer to the interview question: “So, tell me about yourself.” 🎤", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
