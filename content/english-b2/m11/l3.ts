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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 11.3 Speeches that changed history — skills lesson (as in the programme): no new grammar; review of cleft sentences and inversion. V: speeches and rhetoric (deliver a speech, an audience, address (v, n), a rhetorical question, repetition, the rule of three, a pause, eloquent, moving, memorable). S: analyze why a speech works and give a short speech. Main format: match famous lines with speakers + a long reading (four speeches and their secrets — Lincoln, Churchill, Mandela, Jobs; short quotes only, ~580 words) + TED-Ed video (how to use rhetoric) + a long listening (Zarina's podcast with Laura and Daniyar about the speeches they'd choose, ~3:15) + a 1-minute speech. ("I Have a Dream" and Malala's UN speech were the focus of B1 9.3, so here they appear only in the warm-up.)
// Facts checked: Abraham Lincoln's Gettysburg Address, 19 November 1863 — about 272 words, around two minutes; Edward Everett spoke for about two hours before him and later wrote to Lincoln that he wished he had come as close to the central idea in two hours as Lincoln had in two minutes; it begins "Four score and seven years ago"; Winston Churchill's "We shall fight on the beaches" speech to the House of Commons, 4 June 1940, after the evacuation from Dunkirk; Nelson Mandela's statement from the dock at the Rivonia Trial, 20 April 1964, lasting about three hours, ending "…it is an ideal for which I am prepared to die"; Steve Jobs's Stanford commencement speech, 12 June 2005 — three stories, ending "Stay hungry. Stay foolish.", a phrase from the back cover of the final issue of the Whole Earth Catalog; Martin Luther King Jr., "I have a dream", 28 August 1963; John F. Kennedy's inaugural address (1961): "Ask not what your country can do for you — ask what you can do for your country"; Julius Caesar's "Veni, vidi, vici"; Mandela spent 27 years in prison in total and was released in 1990, becoming president in 1994; Malala Yousafzai at the UN, 12 July 2013: "One child, one teacher, one book, one pen can change the world." Characters: Zarina (podcaster), Laura (English teacher), Daniyar (debate club in Seoul).
export default lesson("b2-11.3", "Speeches that changed history", () => [
  section("Warm-up: Who said it?", [
    box(
      "Today you will…",
      "- discover the secrets of the greatest speeches in history 🎤\n- learn the tricks that make words memorable: repetition, the rule of three, pauses ✨\n- give your own one-minute speech 🗣️",
    ),
    match("Famous lines. Match each one with the speaker. 🎤", [
      ["“Four score and seven years ago…” (1863)", "Abraham Lincoln"],
      ["“We shall fight on the beaches…” (1940)", "Winston Churchill"],
      ["“I have a dream…” (1963)", "Martin Luther King Jr."],
      ["“…an ideal for which I am prepared to die.” (1964)", "Nelson Mandela"],
      ["“Stay hungry. Stay foolish.” (2005)", "Steve Jobs"],
      ["“One child, one teacher, one book, one pen can change the world.” (2013)", "Malala Yousafzai"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these lines do you find the most powerful? Why?\n- Do you know a famous speech in Kazakh or Russian? What makes it special?\n- Have you ever given a speech? How did you feel? 😬",
    ),
    tip("King and Malala were the focus of B1 9.3 — today we look at four other speeches. Ask: *What do these lines have in common?* (short, rhythmic, often repeated or in threes)."),
  ]),

  section("Vocabulary: Speeches and rhetoric", [
    words("Speeches and rhetoric", [
      ["deliver a speech", "🎤 give a speech to an audience"],
      ["address (v, n)", "🏛️ speak formally to a group — a formal speech"],
      ["an audience", "👥 the people listening"],
      ["a rhetorical question", "❓ a question you ask for effect, not for an answer"],
      ["repetition", "🔁 saying the same words several times"],
      ["the rule of three", "3️⃣ listing things in threes (because it sounds complete)"],
      ["a pause", "⏸️ a short silence"],
      ["eloquent", "🪶 speaking beautifully and persuasively"],
      ["moving", "🥹 making people feel strong emotions"],
      ["memorable", "🧠 easy to remember"],
    ]),
    match("Match.", [
      ["She delivered", "a moving speech at the wedding."],
      ["“Who doesn't want to be happy?” is", "a rhetorical question."],
      ["“Veni, vidi, vici” is a classic example of", "the rule of three."],
      ["A good speaker uses", "pauses for effect."],
      ["The president addressed", "the nation on television."],
      ["The audience gave him", "a standing ovation."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. She's an [eloquent] speaker — every sentence sounds beautiful.\n2. The speech was so [moving] that people cried.\n3. A short, [memorable] phrase is better than a long explanation.\n4. Don't rush — a [pause] gives the audience time to think.\n5. [Repetition] of a key phrase helps people remember it.\n6. The [audience] laughed at all his jokes.",
    ),
  ]),

  section("Reading: Four speeches and their secrets", [
    tip("A long text (~580 words). First reading — 5 minutes: *What secret does each speech teach us?* Then the tasks. Ask the student to find one cleft sentence and one inversion in the text."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Lincoln's speech at Gettysburg was the longest speech of the day.", false],
        ["Edward Everett admired Lincoln's short speech.", true],
        ["Churchill's speech was given after the evacuation from Dunkirk.", true],
        ["Mandela spoke for about three minutes at his trial.", false],
        ["Steve Jobs told three stories in his Stanford speech.", true],
        ["“Stay hungry. Stay foolish.” was Jobs's own invention.", false],
      ],
      {
        read: [
          "## 🎤 Four speeches and their secrets",
          "Most speeches are forgotten the moment the audience stands up. A few are remembered for centuries. What do the great ones have in common? Let's look at four of them.",
          "**1. Lincoln at Gettysburg (1863): be brief.** In November 1863, during the American Civil War, a cemetery was opened at Gettysburg, where thousands of soldiers had died. The main speaker was Edward Everett, one of the most famous speakers of the day. He spoke for about two hours. Then President Abraham Lincoln stood up and delivered about 270 words. It took around two minutes. Some people in the crowd hardly noticed he had finished. Yet it is Lincoln's speech that schoolchildren still learn by heart. Everett himself wrote to Lincoln the next day, saying he wished he had come as close to the central idea in two hours as Lincoln had in two minutes. The secret: say less, and every word counts.",
          "**2. Churchill in 1940: repeat.** In June 1940, British and French soldiers had just been evacuated from the beaches of Dunkirk, and Britain feared an invasion. Speaking to Parliament, Winston Churchill did not promise victory. Instead, he promised to resist — and he repeated one phrase again and again: \"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets…\" Rarely has repetition been used so powerfully. Each \"we shall fight\" landed like a drumbeat. The secret: repetition turns a sentence into something people feel.",
          "**3. Mandela in 1964: speak from your values.** Facing a possible death sentence at his trial, Nelson Mandela didn't defend himself in the usual way. For about three hours, he explained calmly what he believed and why. He ended with words that are now famous around the world: his ideal of a free and democratic society was \"an ideal for which I am prepared to die\". Not only did the speech make his values clear, but it also turned a courtroom into a stage for the whole world. Mandela was sent to prison for life. In total he spent 27 years in prison before he walked out free in 1990, and in 1994 he became South Africa's first democratically elected president. The secret: when you speak from your deepest values, people remember.",
          "**4. Jobs at Stanford (2005): tell stories.** When Steve Jobs spoke to graduating students at Stanford University, he didn't give advice in a list. He said, \"Today I want to tell you three stories from my life. That's it. No big deal. Just three stories.\" The stories — about dropping out of university, being fired from the company he had started, and facing death — were personal and honest. He ended by quoting the back cover of a magazine he had loved as a young man: \"Stay hungry. Stay foolish.\" The secret: people forget arguments, but they remember stories — especially in threes.",
          "**What they share.** Look closely, and you'll see the same tools again and again: short sentences, repetition, the rule of three, personal stories and silence. What great speakers understand is that a speech is not an essay read aloud. It's written for the ear, not the eye. That's why the best speeches have rhythm — and why many of them are still moving when we hear them today.",
          "So next time you have to speak, don't ask \"What do I want to say?\" Ask: \"What do I want them to remember?\" 🎤",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is Lincoln's secret, according to the writer?", options: ["*Be brief — every word should count.", "Speak for a long time.", "Use difficult words."] },
      { q: "What did Churchill do instead of promising victory?", options: ["*He promised to resist and repeated a key phrase.", "He told jokes.", "He read a list of numbers."] },
      { q: "What happened to Mandela after the trial?", options: ["*He was sent to prison for life and was freed in 1990.", "He was released the next day.", "He left the country."] },
      { q: "How did Jobs structure his speech?", options: ["*as three personal stories", "as a list of advice", "as a debate"] },
      { q: "What do great speakers understand, according to the writer?", options: ["*A speech is written for the ear, not the eye.", "Long speeches are better.", "Speeches should be read like essays."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a place where dead people are buried: a [cemetery]\n2. moved people away from a dangerous place: [evacuated]\n3. fight against something: [resist]\n4. the sound of a drum: a [drumbeat]\n5. finishing university: [graduating]\n6. left school or university before finishing: dropped [out]",
    ),
  ]),

  section("Language: Tools of great speakers", [
    match("Match the tool and the example.", [
      ["repetition", "“We shall fight… we shall fight… we shall fight…”"],
      ["the rule of three", "“Government of the people, by the people, for the people.”"],
      ["a rhetorical question", "“Who among us has never made a mistake?”"],
      ["a personal story", "“When I was seventeen, I…”"],
      ["contrast", "“Ask not what your country can do for you — ask what you can do for your country.”"],
      ["a short, memorable ending", "“Stay hungry. Stay foolish.”"],
    ]),
    drag(
      "Complete the analysis of a speech.",
      "The speaker begins with a personal [story] about her grandmother. Then she asks a rhetorical [question]: “Who decides what a girl can become?” She uses the rule of [three]: “We need schools, we need books, we need teachers.” Not [only] does she use repetition, but she also uses [pauses] to give the audience time to feel. What I find most effective [is] her short final sentence. 🎤",
      ["joke", "two", "also"],
    ),
    choose(
      "Review: module 11 grammar. Choose.",
      "1. [*What made/That made] the speech special was its length.\n2. It was Churchill [*who/which] said “We shall fight on the beaches”.\n3. Rarely [*has repetition been/repetition has been] used so powerfully.\n4. Not only [*did the speech/the speech did] explain his values, but it also reached the world.\n5. [*All he needed/All what he needed] was two minutes.\n6. Never before [*had a courtroom become/a courtroom had become] such a stage.",
    ),
  ]),

  section("Video: How to use rhetoric", [
    video("Watch: TED-Ed — How to use rhetoric to get what you want (Camille A. Langston).", "3klMM9BkW5o"),
    text(
      "After the video: talk about it.",
      "- What are the three “appeals” in the video? (You met them in 9.4!)\n- Which speech from the reading is the best example of pathos? Of logos? Of ethos?\n- Where do you see rhetoric in everyday life — adverts, politics, social media? 🤔",
    ),
    tip("Connect 9.4 (debate), 11.2 (persuasion) and today: ethos, pathos, logos are the base; repetition, the rule of three and stories are the tools."),
  ]),

  section("Listening: The speech I'd choose", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast: Laura (an English teacher) and Daniyar (from the debate club in Seoul) each choose a speech that they think everyone should hear. First listen: *Which speeches do they choose?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about great speeches.",
      "**Zarina:** Welcome back! Today's question: if you could make everyone in the world listen to one speech, which would it be? My guests are Laura, an English teacher, and Daniyar, who runs a debate club at his university in Seoul. Laura, you first.\n\n**Laura:** Mine is very short: the Gettysburg Address. What I love about it is that it's only about two minutes long. I use it with my students every year. I tell them: Lincoln had the most difficult job imaginable — to give meaning to thousands of deaths — and he did it in ten sentences.\n\n**Zarina:** Why does it work so well?\n\n**Laura:** Partly the rhythm. The famous ending — \"government of the people, by the people, for the people\" — is the rule of three, and it's almost like music. But it's also what he doesn't say. He doesn't attack the enemy. He doesn't celebrate. He talks about the future. Rarely does a politician resist the temptation to talk about himself, and Lincoln doesn't mention himself once.\n\n**Zarina:** Not once?\n\n**Laura:** Not once. Look for the words \"I\" or \"me\" — you won't find them. The speech is all about \"we\" and \"us\". That's why it still feels like it belongs to everyone.\n\n**Zarina:** Daniyar, what's yours?\n\n**Daniyar:** I'd choose Mandela's statement at his trial in 1964. It's very different from Lincoln's — it's about three hours long. But it was the ending that changed my life. When I first read it, I was sixteen. I couldn't believe that someone could stand in front of a judge, facing a possible death sentence, and calmly explain his beliefs.\n\n**Zarina:** What can debaters learn from it?\n\n**Daniyar:** So much. Not only does he explain his own position, but he also takes his opponents' arguments seriously. He doesn't shout. He uses facts, he admits what he did, and then he explains why. And when he finally says the famous line, \"an ideal for which I am prepared to die\", it's not dramatic. It's quiet. That's what makes it so powerful.\n\n**Laura:** Can I add something? I think what both speeches share is honesty. Neither speaker is trying to look clever.\n\n**Daniyar:** Exactly. In our debate club, the students who try to sound impressive usually lose. It's the ones who speak clearly and honestly who win.\n\n**Zarina:** Is there a speech you don't like, even though it's famous?\n\n**Laura:** Many wedding speeches! Ten minutes of jokes that only three people understand.\n\n**Daniyar:** And business presentations with sixty slides. Never have I seen a slide that made me cry.\n\n**Zarina:** Final question: what's your one piece of advice for someone giving their first speech?\n\n**Laura:** Write it for the ear, then read it aloud. If you run out of breath, the sentence is too long.\n\n**Daniyar:** And pause. Young speakers are terrified of silence, so they rush. But the pause is where the audience thinks. All you need is two seconds of silence after your most important sentence.\n\n**Zarina:** Laura, Daniyar… thank you.\n\n**Daniyar:** That was a very good pause.",
    ),
    quiz("Listen and choose.", [
      { q: "Which speech does Laura choose?", options: ["*Lincoln's Gettysburg Address", "Churchill's 1940 speech", "Jobs's Stanford speech"] },
      { q: "What does Laura say Lincoln does NOT do?", options: ["*talk about himself", "talk about the future", "use rhythm"] },
      { q: "How old was Daniyar when he first read Mandela's statement?", options: ["*sixteen", "twenty", "twelve"] },
      { q: "What do both guests say the two speeches share?", options: ["*honesty", "jokes", "long lists"] },
      { q: "What is Daniyar's advice for a first speech?", options: ["*Pause after your most important sentence.", "Use many slides.", "Speak as fast as possible."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura uses the Gettysburg Address with her students every year.", true],
      ["Mandela's statement was about three minutes long.", false],
      ["Daniyar says Mandela's famous line sounds quiet, not dramatic.", true],
      ["In Daniyar's club, students who try to sound impressive usually win.", false],
      ["Laura says if you run out of breath, the sentence is too long.", true],
      ["Zarina's last pause was too long.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. [What] I love about it is that it's only about two minutes long.\n2. [Rarely] does a politician resist the temptation to talk about himself.\n3. It was the ending [that] changed my life.\n4. Not only [does] he explain his own position, but he also takes his opponents' arguments seriously.\n5. Never have I [seen] a slide that made me cry.\n6. [All] you need is two seconds of silence.",
    ),
  ]),

  section("Let's speak: Your one-minute speech", [
    sort("Good speech or bad speech? Sort the habits. 🧩", {
      "👍 good": [
        "starting with a short personal story",
        "pausing after the key sentence",
        "using the rule of three",
        "ending with one memorable line",
      ],
      "👎 bad": [
        "reading every word from a slide",
        "speaking as fast as possible",
        "telling jokes only some people understand",
        "talking mostly about yourself",
      ],
    }),
    text(
      "🎤 Your speech",
      "Prepare and deliver a **one-minute speech** (5 minutes to prepare). Choose a topic:\n\n- 🎓 a speech to students on their first day\n- 🏔️ a toast at a friend's farewell party\n- 🌍 “One thing I would change about the world”\n\nUse at least **three tools**: a story, a rhetorical question, repetition, the rule of three, contrast, a pause, a memorable ending. Try one cleft sentence (*What I want you to remember is…*) and one inversion (*Never have I…*).\n\nYour teacher counts the tools you used — and the pauses! ⏸️",
    ),
    tip("Record the speech if possible. Feedback: 1) the most memorable line, 2) one tool that worked, 3) pace and pauses, 4) one language point. Let the student deliver it a second time with your feedback — the improvement is usually dramatic."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A question asked for effect, not for an answer, is a ___ question.", options: ["*rhetorical", "rhythmic", "repeated"] },
      { q: "Lincoln's Gettysburg Address lasted about ___.", options: ["*two minutes", "two hours", "twenty minutes"] },
      { q: "“We shall fight… we shall fight…” is an example of ___.", options: ["*repetition", "contrast", "a pause"] },
      { q: "A speech that makes people feel strong emotions is ___.", options: ["*moving", "eloquent", "brief"] },
    ]),
    box(
      "Phrase of the day: less is more",
      "✂️ Using fewer words (or things) often has a stronger effect. Lincoln knew it: 270 words beat two hours.\n\n*Where else in life is less more?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The president will [address] the nation tonight.\n2. “Isn't it obvious?” is a [rhetorical] question.\n3. Good speakers use the rule of [three].\n4. She delivered a very [moving] speech.\n5. Short phrases are more [memorable].\n6. The [audience] stood up and applauded.",
      ),
      order("Make sentences.", [
        "What I love about it is its rhythm.",
        "It was Lincoln who spoke for two minutes.",
        "Rarely has repetition been used so powerfully.",
        "Never have I heard such a moving speech.",
        "All you need is a short pause.",
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Write an article (140–190 words) for a student magazine: “The speech everyone should hear”. Choose a famous speech (or a speech you heard in real life), explain what it's about and why it works. Use at least two rhetoric terms, one cleft sentence and one inversion.", 140),
      record("Record your one-minute speech from the lesson — improved after your teacher's feedback. 🎤", 75),
      match("Match the tool and the example.", [
        ["repetition", "“We shall fight… we shall fight…”"],
        ["the rule of three", "“of the people, by the people, for the people”"],
        ["a rhetorical question", "“Who among us has never failed?”"],
        ["contrast", "“Ask not what… — ask what…”"],
        ["a personal story", "“When I was seventeen…”"],
        ["a memorable ending", "“Stay hungry. Stay foolish.”"],
      ]),
    ],
    "Homework: Writing and speaking",
  ),
]);
