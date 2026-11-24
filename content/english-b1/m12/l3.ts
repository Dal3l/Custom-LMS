import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  picture,
  quiz,
  record,
  section,
  table,
  text,
  tip,
  trueFalse,
  video,
  write,
} from "../../kit";

// 12.3 B1 Preliminary practice — a full practice test in the exam format: Reading Parts 1–6, Listening Parts 1, 3 and 4, Writing Parts 1 and 2, Speaking Parts 1–4. Main format: exam myths (true / false) + a long Reading Part 3 text (Ben's first gig, ~470 words) + a long Listening Part 4 interview (Madina on how she prepared for an exam, ~2:45) + the official Cambridge speaking test video in class.
// Facts checked: B1 Preliminary (since 2020) — four papers: Reading 45 min (6 parts), Writing 45 min (2 parts: an email; an article or a story, about 100 words each), Listening about 30 min (4 parts, everything heard twice), Speaking 12–17 min with a partner (4 parts). Scale: 140–159 = B1, 160–170 = B1 certificate at B2 level. “Smoke on the Water” (Deep Purple, Machine Head, 1972) — about the fire at the Montreux Casino during a Frank Zappa concert in December 1971; the smoke went over Lake Geneva.
export default lesson("b1-12.3", "B1 Preliminary practice", () => [
  section("Warm-up: Exam myths", [
    box(
      "Today you will…",
      "- try every part of the B1 Preliminary exam 🎓\n- learn one smart tip for each part 💡\n- find out how ready you are — and what to practice next 📈",
    ),
    trueFalse("Exam myths: true or false? 🤔", [
      ["In the Listening, you hear every recording twice.", true],
      ["In the Speaking test, you talk to the examiner alone, without a partner.", false],
      ["In Writing Part 2, you can choose between an article and a story.", true],
      ["If you don't know an answer, it's better to leave it empty.", false],
      ["A very high score can give you a certificate at B2 level.", true],
      ["You lose points for every small spelling mistake in the Speaking test.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- How do you feel before exams — calm, excited or terrified? 😅\n- What's your secret for staying calm?\n- Which part of the exam do you think will be the easiest for you? And the hardest?",
    ),
    table("exam-b1"),
    tip("Today is a practice test: time each part (Reading Part 3 — 8 minutes, Part 4 — 7 minutes). Don't help during the tasks; check after each part and give the tip. Count the points together at the end."),
  ]),

  section("Reading Part 1: Short texts", [
    quiz("Read the texts. What do they say? Choose the right answer.", [
      { q: "📌 Library: “Laptops may be used on the second floor only. Please keep phones on silent.”", options: ["*You can use a laptop, but only on one floor.", "Laptops aren't allowed in the library.", "You must switch off your phone."] },
      { q: "💬 Kenji → Laura: “Hike cancelled — the forecast is terrible. Shall we do the museum instead? I'll book if you say yes.”", options: ["*Kenji suggests a different plan.", "Kenji has already booked the museum.", "The hike will happen in the rain."] },
      { q: "📧 “Your order will arrive between 9 and 12 on Friday. If you're out, we'll leave it with a neighbor.”", options: ["*Someone else can take the parcel.", "You must be at home all Friday.", "The delivery is on Thursday."] },
      { q: "📌 Gym: “New members get their first class free if they sign up before the end of the month.”", options: ["*Join soon and one class costs nothing.", "All classes are free this month.", "Only old members get a free class."] },
      { q: "💬 Asel → Madina: “Can you design the menu by Monday? If it's too soon, Wednesday is fine too.”", options: ["*Asel can wait until Wednesday if necessary.", "Asel needs the menu today.", "Madina has already finished the menu."] },
    ]),
  ]),

  section("Reading Part 2: Matching", [
    tip("Tip: underline 2–3 key things each person wants (time, price, level…). The right text must match ALL of them."),
    match("These people want a weekend course. Read the descriptions and match each person with the best course.", [
      ["Aliya works on weekdays and wants to learn to cook dishes from other countries — but she can't go on Saturday mornings.", "World Kitchen: Thai, Italian and Mexican food. Saturday and Sunday afternoons."],
      ["Ben has played the guitar for two years and wants to play in a group with other musicians.", "Band Weekend: bring your instrument, meet other players and perform on Sunday night."],
      ["Saule is retired and wants to learn something calm and creative, but she doesn't want to sit for long.", "Painting in the Park: walk around the city park and paint what you see. All ages."],
      ["Daniyar wants to improve his Korean speaking before his trip and prefers small groups.", "Language Café: speaking practice in groups of four. Korean, Japanese and Chinese."],
      ["Dana wants to get fit, but she hates gyms and loves being outside.", "Mountain Running Club: trail running for beginners every Saturday at 8 a.m."],
      ["Leo wants to learn how to record his songs at home with his laptop.", "Home Studio Basics: recording and mixing music on your computer. Free software included."],
    ]),
  ]),

  section("Reading Part 3: A long text", [
    tip("A long text (~470 words), 8 minutes. Tip: Part 3 asks about the writer's feelings, opinions and purpose — not just facts. Read the whole text first, then the questions."),
    quiz(
      "Read the text and the questions. Choose the right answer.",
      [
        { q: "Why did Ben start learning the guitar?", options: ["*He had always regretted giving it up as a teenager.", "His son asked him to.", "His doctor told him to relax more."] },
        { q: "How did Ben feel when he first read the advert?", options: ["*He was interested but didn't think he was good enough.", "He was sure he would get in.", "He thought it was a joke."] },
        { q: "What surprised Ben at the first rehearsal?", options: ["*Nobody in the band was perfect.", "The others were all professionals.", "The band played only new songs."] },
        { q: "What happened during the first song at the café?", options: ["*Ben's hands were shaking, but he kept playing.", "Ben forgot the whole song.", "The audience left."] },
        { q: "What is Ben's main message to readers?", options: ["*Don't wait to be perfect before you start.", "Only young people should join bands.", "Playing in public is always easy."] },
      ],
      {
        read: [
          "## 🎸 My first gig at 38",
          "When I was fifteen, I had a cheap guitar and a big dream: to play in a band. I practiced the opening of Smoke on the Water by Deep Purple until my fingers hurt — that famous riff, which is about a fire at a concert hall in Switzerland, is probably the first thing every guitar player learns. But then came exams, university and work, and the guitar stayed under my bed for twenty years. I always regretted giving it up.",
          "Two years ago, I finally bought a new guitar. At first I just played alone in the evenings, following online lessons. It was relaxing, but something was missing. Music, for me, was always about playing with other people.",
          "Then one Saturday, at my local music shop, I saw a small advert on the wall: \"Band looking for a guitarist. Rock, blues, a bit of everything. No professionals, just fun!\" I read it three times. Part of me wanted to call immediately. The other part said, \"You're not good enough. They'll laugh at you.\" I took a photo of the advert and did nothing for a week.",
          "In the end, my wife made the decision for me. \"If you don't call them, I will,\" she said. So I called. The drummer, Sam, invited me to a rehearsal in his garage the following Tuesday.",
          "I was terribly nervous. I'd practiced the songs on their list every night, but I was sure the others would be much better than me. They weren't! The singer forgot the words twice, the bass player was a doctor who'd only started a year before, and Sam kept laughing at his own mistakes. Nobody was perfect — and nobody cared. We played for three hours, and I drove home smiling like a teenager.",
          "Six months later, we had our first real gig — in a small café on a Friday night, in front of about forty people. When we started the first song, my hands were shaking so much that I nearly dropped my pick. I played two wrong notes, but I didn't stop, and by the second song I'd forgotten to be scared. At the end, people clapped and asked for one more song. We played Smoke on the Water, of course.",
          "Since then, we've played at birthdays, a school party and even a small summer festival. We're not going to be famous, and that's fine. What I've learned is simple: if you wait until you're good enough, you'll wait forever. You get good by doing it — badly at first, then a little better. So if there's something you gave up years ago, take it out from under the bed. It's never too late. 🎶",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 4: Missing sentences", [
    tip("Tip: read the sentences before and after each gap. Look for small words that connect ideas: *this, they, but, however, so*."),
    drag(
      "Six sentences are missing from the text. Choose the right sentence for each gap. There are two sentences you don't need.",
      "Learning a language with an app 📱\n\nMillions of people now learn languages on their phones. [It's easy to see why: you can practice anywhere, even on the bus.] But are apps really enough? Kenji, who has been learning Kazakh for a year, isn't sure. [He uses an app every morning for ten minutes.] \"It's great for vocabulary,\" he says. \"But when I tried to speak to my neighbor, I froze.\" [That's when he decided to find a speaking partner.] Now he meets a student from the university every Saturday. [They speak Kazakh for an hour and English for an hour.] [After three months, he can finally chat with his neighbor.] Kenji's advice? \"Use the app for words, but use people for speaking.\" [And don't be afraid of mistakes — that's how you learn!]",
      ["Apps are too expensive for most people.", "He has never used his phone to study."],
    ),
  ]),

  section("Reading Parts 5 and 6: Words", [
    choose(
      "Part 5. Read the text and choose the best word for each gap.",
      "A festival for everyone 🎪\n\nEvery summer, our town [*holds/makes/does] a free music festival in the park. It started ten years ago, [*when/where/which] a group of students wanted to bring people together. At first, only fifty people came, but now thousands of visitors [*attend/assist/visit] every year. The organizers are all volunteers [*who/which/whose] give their time for free. This year, the festival will [*take/make/have] place on the first weekend of July. If you [*come/came/will come], don't forget to bring a blanket!",
    ),
    gaps(
      "Part 6. Read the email and write ONE word in each gap.",
      "Hi Daniyar,\n\nThanks [for] your message! I'm so happy you got the scholarship. You [must] be very excited. When are you leaving for Seoul? I wish I [could] come with you!\n\nI've [been] studying for my exam all week. It's next Monday, so I can't go out [until] it's finished. Can we meet [on] Tuesday to celebrate?\n\nAliya",
    ),
  ]),

  section("Listening Part 1: Short conversations", [
    tip("In the real exam, Part 1 has pictures. Tip: all three options are usually mentioned — listen for which one is the final answer."),
    ...listening(
      "Listen to five short conversations. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** Shall we meet at the cinema at seven?\n\n**Man:** The film starts at seven fifteen, so let's say quarter to seven. Then we can buy popcorn.\n\n**Woman:** Good idea.\n\n**2.**\n\n**Man:** What did you buy for your sister's birthday? A book?\n\n**Woman:** I wanted to, but she's already got so many. In the end I bought her a scarf, and a card, of course.\n\n**3.**\n\n**Leo:** How did you get here so fast? Did you drive?\n\n**Dana:** My car's at the garage. I was going to take the bus, but it was late, so I cycled. It was quicker anyway!\n\n**4.**\n\n**Woman:** Is the weather going to be nice for our picnic on Saturday?\n\n**Man:** It says it'll be cloudy in the morning, but sunny in the afternoon. No rain, though.\n\n**5.**\n\n**Man:** Where's the nearest post office?\n\n**Woman:** Go straight on, past the bank. It's opposite the supermarket, next to a small café.",
    ),
    quiz("Listen and choose.", [
      { q: "1. What time will they meet?", options: ["*6:45", "7:00", "7:15"] },
      { q: "2. What did the woman buy for her sister?", options: ["*a scarf and a card", "a book", "a book and a card"] },
      { q: "3. How did Dana get there?", options: ["*by bike", "by bus", "by car"] },
      { q: "4. What will the weather be like on Saturday afternoon?", options: ["*sunny", "cloudy", "rainy"] },
      { q: "5. Where's the post office?", options: ["*opposite the supermarket", "next to the bank", "inside the café"] },
    ]),
  ]),

  section("Listening Part 3: Complete the notes", [
    tip("Tip: before you listen, read the notes and guess what kind of word is missing — a number? a day? a thing?"),
    ...listening(
      "Listen to Laura talking about a summer English camp. Complete the notes.",
      "**Laura:** Hi, everyone! I'd like to tell you about our summer English camp. This year it's in the mountains near Almaty, at a place called Green Valley. The camp lasts twelve days, from the third to the fourteenth of July. It's for students aged fourteen to eighteen, and every group has a maximum of ten students, so everybody gets lots of speaking practice. In the mornings, there are English lessons, and in the afternoons, students can choose between hiking, photography and drama. On the last evening, every group performs a short play in English for the parents. The price is ninety thousand tenge, and that includes food, lessons and transport from the city. You'll need to bring warm clothes, because the nights can be cold, and good walking shoes. If you'd like to join, please fill in the form on our website before the first of June. Places are limited, so don't wait too long!",
    ),
    gaps(
      "Complete the notes.",
      "1. Name of the place: Green [Valley]\n2. Length of the camp: [12/twelve] days\n3. Maximum students in a group: [10/ten]\n4. Afternoon activities: hiking, photography and [drama]\n5. On the last evening: every group performs a short [play]\n6. Apply before: the first of [June]",
    ),
  ]),

  section("Listening Part 4: An interview", [
    tip("A long listening — about 2 minutes 45 seconds, like the real Part 4. Read the six questions first (45 seconds). Listen twice."),
    ...listening(
      "Listen to an interview with Madina, a design student, about preparing for an English exam.",
      "**Host:** My guest today is Madina, who's studying design and recently passed an important English exam. Madina, why did you decide to take an exam?\n\n**Madina:** Mainly for my work. I do freelance design, and a lot of my clients are from other countries. I could already communicate, but I wanted something official to show them. And honestly, I wanted to prove to myself that my English was good enough.\n\n**Host:** How long did you prepare?\n\n**Madina:** About four months. At first I tried to study every evening for two hours, but after a week I was exhausted. So I changed my plan. I did thirty minutes every day, and one longer practice test at the weekend. That worked much better. Little and often — that's my advice.\n\n**Host:** Which part was the hardest for you?\n\n**Madina:** Writing, definitely. In my head the ideas were great, but on paper I kept making the same mistakes with tenses. My teacher told me to keep a list of my typical mistakes and check it after every text. It sounds boring, but it really helped. By the end, I was making half as many mistakes.\n\n**Host:** And the listening? A lot of students are scared of it.\n\n**Madina:** I was too, at the beginning. But I started listening to podcasts while I was walking to university — about design, music, anything I liked. After a while, I stopped translating everything in my head. That was a big moment for me.\n\n**Host:** What about the speaking test? Were you nervous?\n\n**Madina:** Very! My partner was a guy I'd never met, and he spoke really fast. But I remembered what my teacher said: it's not a competition, it's a conversation. So I listened to him, asked him questions and didn't try to show off. The examiner actually smiled at one point, so I think it went well.\n\n**Host:** How did you feel on the day of the exam?\n\n**Madina:** Surprisingly calm. I'd slept well, I'd had a good breakfast and I'd done so many practice tests that nothing was a surprise. The only problem was that the room was freezing! I should have brought a sweater.\n\n**Host:** And your result?\n\n**Madina:** I passed with a good score. I was so happy I called my grandma from the bus stop. She cried more than I did!\n\n**Host:** Finally, any advice for people who are preparing now?\n\n**Madina:** Don't just study the exam — use English for things you love. And don't forget to rest. A tired brain doesn't learn anything.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Madina take the exam?", options: ["*for her work and to prove something to herself", "because her university asked her to", "to move to another country"] },
      { q: "What did Madina change in her study plan?", options: ["*She studied less each day but every day.", "She stopped doing practice tests.", "She studied for longer every evening."] },
      { q: "What helped Madina with her writing?", options: ["*a list of her typical mistakes", "writing longer texts", "a grammar app"] },
      { q: "What was “a big moment” in her listening practice?", options: ["*She stopped translating in her head.", "She understood a fast native speaker.", "She got full marks in a test."] },
      { q: "What did Madina do in the speaking test?", options: ["*She listened and asked her partner questions.", "She tried to speak more than her partner.", "She spoke very fast."] },
      { q: "What was the problem on the exam day?", options: ["*The room was very cold.", "She hadn't slept well.", "She was late."] },
    ]),
  ]),

  section("Writing Part 1: An email", [
    tip("Tip: Part 1 always has four notes. Each note = one short paragraph. Count them before you finish!"),
    write(
      "Read the email from your English-speaking friend and the notes. Write your answer (about 100 words).",
      100,
      {
        read: "📧 **From: Laura**\n\nHi! Great news — our language center is organizing a summer English camp in the mountains, and I'd love you to come! 🏕️ *(← Say how you feel about the idea)*\n\nThere are three afternoon activities: hiking, photography and drama. *(← Tell Laura which one you'd choose and why)*\n\nIs there anything you'd like to learn at the camp? *(← Explain)*\n\nAlso, could you help me find a cheap bus from the city? *(← Offer to help)*\n\nLaura",
      },
    ),
  ]),

  section("Speaking: Watch and try", [
    video("Watch: a real B1 Preliminary Speaking test (Cambridge English).", "wv_nEUnhFFE"),
    quiz("After the video: what did you notice?", [
      { q: "How many people take the test together?", options: ["*two candidates (and the examiners)", "one candidate alone", "a group of four"] },
      { q: "In Part 2, what does each candidate do?", options: ["*describes a photo alone", "asks the examiner questions", "reads a text aloud"] },
      { q: "In Part 3, the candidates…", options: ["*discuss a task together", "write a short text", "listen to a recording"] },
    ]),
    text(
      "Part 1: Questions about you 🗣️",
      "Answer your teacher's questions with 2–3 sentences:\n\n- Where do you live? What do you like about it?\n- What do you usually do at the weekend?\n- Tell me about a teacher you remember well.\n- What would you like to learn in the future?",
    ),
    picture("Part 2: Describe the photo. Talk for about one minute: the place, the people, what they're doing, the weather, how they feel.", ["photos/exam-river-cleanup.jpg"]),
    picture("Part 2 (your teacher's turn): Listen to your teacher describe this photo. Then say what they forgot!", ["photos/exam-beach-cleanup.jpg"]),
    text(
      "Part 3: Talk together 🤝",
      "Your town wants young people to spend less time on their phones. Here are some ideas:\n\n- ⚽ a free sports club\n- 🎸 a music studio\n- 🍳 a cooking class\n- 🌳 a volunteering group\n- 🎲 a board games café\n\nTalk together about how each idea could help. Then decide which ONE is the best. Use: *What do you think about…? That's a good point, but… Shall we choose…?*",
    ),
    text(
      "Part 4: Discussion",
      "- Do you think young people spend too much time online? Why / why not?\n- What did you do in your free time when you were a child?\n- Is it better to have one hobby or many?",
    ),
    tip("Part 2 in the exam: about 1 minute each. If the student doesn't know a word, encourage explaining it: *a small boat — you sit in it and use a paddle* (canoe). Part 3: 2–3 minutes; don't let the student just list the ideas — they must react to yours."),
  ]),

  section("How did you do?", [
    trueFalse("Check yourself. True or false? ✅", [
      ["I finished every Reading part in time.", true],
      ["I understood the long Listening the first time.", true],
      ["I answered all four notes in the email.", true],
      ["I could talk about the photo for a whole minute.", true],
      ["In Part 3, I listened and reacted to my partner.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan the next steps. Count the points from today's tasks together: 85%+ — ready for the exam; 70–85% — almost ready, practice the weak parts; under 70% — more practice tests first."),
    box(
      "Phrase of the day: break a leg!",
      "🍀 **Break a leg!** — a funny way to say *Good luck!* before a performance or an exam. Actors say it because saying “Good luck” in the theater is thought to bring bad luck!\n\n*Break a leg in your exam!* 🎓",
    ),
  ]),

  homework(
    [
      quiz("Reading Part 1. Choose the right answer.", [
        { q: "📌 “Swimming pool closed for cleaning on Monday. Open as usual from Tuesday.”", options: ["*You can't swim on Monday.", "The pool is closed all week.", "You can swim on Monday morning."] },
        { q: "💬 Sam → Ben: “Rehearsal moved to my garage again — the café's busy. Same time!”", options: ["*The place has changed, not the time.", "The rehearsal is cancelled.", "The time has changed."] },
        { q: "📧 “Please bring your passport to the exam. Phones must be left outside the room.”", options: ["*You need your passport but not your phone.", "You can use your phone in the exam.", "You don't need any documents."] },
        { q: "📌 Café: “Buy any coffee before 10 a.m. and get a croissant for half price.”", options: ["*The croissant is cheaper in the morning.", "Coffee is free before 10.", "Croissants are half price all day."] },
      ]),
      choose(
        "Reading Part 5. Choose the best word.",
        "My first exam ✍️\n\nI'll never forget my first English exam. I was so nervous [*that/what/so] I couldn't eat breakfast. When I [*arrived/reached/got] at the school, I saw lots of other students. Some of them [*looked/saw/watched] very calm. The listening was difficult, but I [*managed/could/succeeded] to answer most questions. After the exam, my friends and I went for pizza to [*celebrate/enjoy/congratulate]. A month later, I found out I [*had/have/was] passed!",
      ),
      gaps(
        "Reading Part 6. Write ONE word in each gap.",
        "Hi Ben,\n\nI saw your band [at] the café last Friday — thanks [for] the free ticket! You were brilliant. I didn't know you [could] play the guitar so well. How long have you [been] playing together? I'd love to come to your next concert. Let me know [when] it is. My brother plays the drums, so maybe he [can/could] join you one day!\n\nSam's sister, Anna",
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Writing Part 2: choose ONE task — an article or a story (about 100 words).", 100, {
        read: "📰 **An article.** You saw this in an English-language magazine: *“A skill I'm proud of. What can you do well? How did you learn it? Why is it important to you?”* Write your article.\n\n📖 **Or a story.** Your story must begin with this sentence: *“When I opened the envelope, I couldn't believe my eyes.”*",
      }),
      record("Speaking Part 2: Choose a photo of a place you love on your phone. Describe it for one minute, as in the exam. 📸", 75),
      record("Speaking Part 4: Answer the question for 1–2 minutes: “What's the best way to prepare for an exam?” 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
