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
  write,
} from "../../kit";

// 6.4 Revision 5–6 — points for every task, in the format of B1 Preliminary: Reading Parts 1, 3, 5 and 6, Listening Parts 2 and 3, Writing Part 1, Speaking Parts 3–4. Grammar: need to / needn't / allowed to / supposed to, could / managed to, the passive (all forms). Project: “Our class news” (an article or a podcast).
export default lesson("b1-6.4", "Revision 5–6", () => [
  section("Warm-up: Odd one out", [
    box(
      "Today you will…",
      "- check what you've learned in modules 5 and 6 ✅\n- try more parts of the **B1 Preliminary** exam 🎓\n- start your project: *Our class news* 📰",
    ),
    quiz("Odd one out! 🧩 Which word doesn't belong?", [
      { q: "deadline · overtime · shift · subtitles", options: ["*subtitles", "deadline", "overtime", "shift"] },
      { q: "go viral · clickbait · headline · perk", options: ["*perk", "go viral", "clickbait", "headline"] },
      { q: "stunt · soundtrack · cast · salary", options: ["*salary", "stunt", "soundtrack", "cast"] },
      { q: "cotton · wool · leather · deepfake", options: ["*deepfake", "cotton", "wool", "leather"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which job from these two modules would you most like to try for one day? 💼🎬\n- Has your attitude to the news changed after the fake news lesson? How?\n- What was the hardest grammar in these modules for you?",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part. Score guide: 85%+ excellent; 70–85% good — review the weak topics in the next warm-ups; under 70% — repeat the grammar sections of the weak lessons. Listening Parts 2 and 3 are new for the student: give 30 seconds to read the questions first."),
  ]),

  section("Reading Part 1: Short messages", [
    quiz("Read the messages. What do they say? Choose the right answer.", [
      { q: "📌 “Staff are not allowed to use the lift during the fire drill. Please use the stairs.”", options: ["*Workers must use the stairs during the drill.", "The lift is broken.", "There is a real fire."] },
      { q: "💬 Dana → Leo: “You needn't pick me up — Kenji's giving me a lift. See you at 8!”", options: ["*Leo doesn't have to collect Dana.", "Dana can't come.", "Leo must drive Kenji."] },
      { q: "🎬 “Tonight's film will be shown with English subtitles. Tickets can be bought online.”", options: ["*You can buy tickets on the internet.", "The film is dubbed.", "Tickets are only sold at the cinema."] },
      { q: "📧 “Your order has been sent and will be delivered on Thursday. You don't need to be at home.”", options: ["*Someone doesn't have to wait at home for the delivery.", "The order hasn't been sent yet.", "The delivery is on Tuesday."] },
      { q: "📌 “Volunteers are supposed to arrive 15 minutes early to get their badges.”", options: ["*Volunteers should come before the start.", "Volunteers can come late.", "Badges are sent by post."] },
    ]),
  ]),

  section("Reading Part 3: A long text", [
    quiz(
      "Read the text and the questions. Choose the right answer.",
      [
        { q: "What did Ruslan find difficult at first?", options: ["*speaking to journalists on camera", "climbing in the dark", "working with volunteers"] },
        { q: "Why did the TV channel want to film Ruslan's team?", options: ["*to show how mountain rescues are really done", "to make a comedy", "to find new volunteers for TV"] },
        { q: "What does Ruslan think about the program now?", options: ["*It helped people understand the risks.", "It was full of fake scenes.", "It was a waste of time."] },
        { q: "What happened after the program was shown?", options: ["*More people signed up as volunteers.", "The team stopped working.", "Ruslan became a TV presenter."] },
        { q: "What is the best title?", options: ["*Real heroes on screen", "How to become an actor", "A boring day in the mountains"] },
      ],
      {
        read: [
          "## 🏔️ Real heroes on screen",
          "Last winter, a TV crew asked Ruslan's mountain rescue team if they could be filmed for a documentary. The channel wanted to show how rescues are really done — not like in action films, where everything is fast and easy.",
          "At first, Ruslan wasn't sure. \"I'm good at climbing, not at talking,\" he laughs. \"The first time a camera was pointed at me, I couldn't say a word.\" But the director was patient, and after a few days the team managed to forget about the cameras.",
          "The crew followed them for three months. They were allowed to film everything except the faces of the people who were rescued. Some scenes were shot at night in temperatures of minus twenty-five. \"The camera operators were amazing,\" says Ruslan. \"They had to carry heavy equipment up the mountain, just like us.\"",
          "The documentary was shown in spring and has been watched by over two million people. Ruslan is proud of it. \"People now understand that the mountains can be dangerous, and that you need to check the weather and tell someone where you're going.\" Since the program, more than a hundred people have signed up as volunteers. \"That's the best result we could hope for.\"",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 5: Choose the word", [
    choose(
      "Read the text and choose the best word for each gap.",
      "The magic of the old cinema 🎞️\n\nThe Star Cinema [*was/is/has] built in 1958, and for many years it was the most popular place in town. But in 2010 it [*was/has/had] closed because people preferred to watch films at home. Last year, a group of young people decided to [*save/rescue/keep] it. Hundreds of hours of work [*were/was/have] done by volunteers. Old seats were repaired, and a new screen was [*installed/put/made]. Now old films [*are/were/have] shown every weekend, and visitors aren't [*allowed/supposed/needed] to use their phones during the film. \"We wanted people to really watch,\" says the manager.",
    ),
  ]),

  section("Reading Part 6: One word", [
    gaps(
      "Read the email. Write ONE word in each gap.",
      "Hi Asel!\n\nI hope the bakery is going well! I've got some news: I've [been] offered a job at a TV studio! I'll be working as an assistant on a cooking show. 🍳 I was [so] nervous at the interview, but I managed [to] answer all their questions.\n\nThe show will [be] filmed in a studio in Almaty. I'm supposed [to] start next Monday. I don't [need] to wear anything formal, which is great.\n\nCould you give me some tips about baking? Maybe your bread could [be] shown on the program!\n\nLove, Madina",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. You [*needn't/mustn't] bring anything — we have everything.\n2. Visitors [*aren't allowed to/don't need to] touch the paintings.\n3. The exam was hard, but I [*managed to/could] pass it.\n4. When I was a child, I [*could/managed to] swim really well.\n5. Coffee [*is grown/grows] in Brazil.\n6. The video [*has been shared/has shared] a million times.\n7. Facts [*should be checked/should checked] before you share them.\n8. I'm [*supposed to/allowed to] be at work at 9, but I'm always late!",
    ),
    gaps(
      "Complete with the passive or a modal phrase.",
      "1. The museum [was built] in 1890. (build — past)\n2. This film [has been watched] by millions of people. (watch — Present Perfect)\n3. Tickets [can be bought] online. (can / buy)\n4. The results [will be announced] tomorrow. (will / announce)\n5. We [had to] wait two hours because the train was late. (necessary in the past)\n6. You [don't need to/do not need to] book — just come! (not necessary)",
    ),
    drag(
      "Complete the story.",
      "Last year our school film [was] made by the students. We [had] to write the script ourselves. We [weren't] allowed to use professional cameras, so everything [was] shot on phones. It was difficult, but we [managed] to finish it in time. The film [has] been shown at three festivals! 🎬",
      ["is", "could", "did"],
    ),
    order("Make sentences.", [
      "The film was shot in Morocco.",
      "You needn't wear a suit.",
      "We managed to finish on time.",
      "The photo has been shared online.",
      "Phones must be switched off.",
    ]),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["a deadline", "the time when work must be finished"],
      ["self-employed", "working for yourself"],
      ["a setback", "a problem that stops progress"],
      ["a pay cut", "earning less than before"],
      ["go viral", "spread very fast online"],
      ["a source", "where information comes from"],
      ["dub", "replace voices with another language"],
      ["a stunt", "a dangerous action in a film"],
    ]),
    sort("Sort the words. 🧩", {
      "💼 work": ["overtime", "a perk", "a shift", "a salary"],
      "📰 media": ["clickbait", "a headline", "a rumor", "evidence"],
      "🎬 film": ["the cast", "subtitles", "the set", "a soundtrack"],
    }),
    quiz("Choose the right word.", [
      { q: "I'm ___ under with work this week.", options: ["*snowed", "rained", "frozen"] },
      { q: "Don't give ___ — you're nearly there!", options: ["*in", "out", "off"] },
      { q: "This website is not ___ — don't trust it.", options: ["*reliable", "viral", "fulfilling"] },
      { q: "Most of the film was ___ in a studio.", options: ["*shot", "dubbed", "released"] },
    ]),
  ]),

  section("Listening Part 2: Six short conversations", [
    tip("Like B1 Preliminary Listening Part 2: six short conversations; the questions are about people's opinions and feelings."),
    ...listening(
      "Listen to six short conversations. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** Did you like the documentary about the rescue team?\n\n**Man:** I did. I thought it would be boring, but it was really exciting. The night scenes were amazing.\n\n**2.**\n\n**Man:** How's your new job, Leo?\n\n**Leo:** It's OK. The people are nice, but I have to work overtime almost every day. I'm exhausted.\n\n**3.**\n\n**Asel:** Did you see that video of the snow leopard in the city?\n\n**Dana:** Yes, but I didn't share it. It looked a bit too perfect. And I was right — it was fake.\n\n**4.**\n\n**Woman:** You look happy!\n\n**Kenji:** I am. I've been trying to finish this app for months, and today we finally managed to launch it!\n\n**5.**\n\n**Man:** Do you prefer films dubbed or with subtitles?\n\n**Laura:** Subtitles, definitely. Dubbing changes the actors' voices, and the voice is half of the performance.\n\n**6.**\n\n**Woman:** Are you going to buy that jacket?\n\n**Man:** No. It's nice, but it was made with a lot of plastic. I'm trying to buy fewer, better things.",
    ),
    quiz("Listen and choose.", [
      { q: "1. What did the man think of the documentary?", options: ["*It was more exciting than he expected.", "It was boring.", "It was too long."] },
      { q: "2. How does Leo feel about his job?", options: ["*He's tired because of overtime.", "He hates his colleagues.", "He loves everything about it."] },
      { q: "3. Why didn't Dana share the video?", options: ["*It looked too perfect to be real.", "She didn't like snow leopards.", "Her phone was broken."] },
      { q: "4. Why is Kenji happy?", options: ["*His team finally launched the app.", "He got a pay rise.", "He's going on holiday."] },
      { q: "5. Why does Laura prefer subtitles?", options: ["*The actor's real voice is important.", "Dubbing is too expensive.", "She can't hear well."] },
      { q: "6. Why doesn't the man buy the jacket?", options: ["*He's trying to buy fewer, better things.", "It's too expensive.", "It's the wrong size."] },
    ]),
  ]),

  section("Listening Part 3: Complete the notes", [
    tip("Like B1 Preliminary Listening Part 3: one person speaks; the student completes notes with one or two words (or a number)."),
    ...listening(
      "Listen to an announcement about a film festival. Complete the notes.",
      "**Announcer:** Good morning, everyone! The Mountain Film Festival will be held from the tenth to the fourteenth of June at the Arman Cinema in the city center. More than forty films from twelve countries will be shown, including a new documentary about mountain rescue teams. Tickets can be bought online or at the cinema. They cost fifteen dollars, but students don't need to pay full price — they can get tickets for eight dollars. On the last evening, the winners will be announced, and there will be a free concert in the park. Volunteers are still needed! If you'd like to help, you're supposed to send an email to the organizers before the first of June. Volunteers get a free festival T-shirt and free entry to all the films. See you there!",
    ),
    gaps(
      "Complete the notes.",
      "1. Dates: 10–[14] June\n2. Place: the Arman [Cinema]\n3. Number of films: more than [40/forty]\n4. Ticket price for students: $[8/eight]\n5. On the last evening: a free [concert] in the park\n6. Volunteers: send an [email] before 1 June",
    ),
  ]),

  section("Writing Part 1: An email", [
    write(
      "Read the email and the notes. Write your answer (100 words).",
      100,
      {
        read: "📧 **From: Zarina**\n\nHi! I've got two free tickets for the Mountain Film Festival next weekend. 🎬 Would you like to come with me? *(← Yes — say why)*\n\nThere's a documentary on Saturday and a comedy on Sunday. Which would you prefer? *(← Choose and explain)*\n\nWe could have dinner before the film. Any ideas where? *(← Suggest a place)*\n\nBy the way, have you seen any good films recently? *(← Tell Zarina)*\n\nZarina",
      },
    ),
  ]),

  section("Speaking Parts 3–4: Discuss", [
    text(
      "Part 3: Choose together 🗣️",
      "Your town wants to make a short film to attract tourists. Talk with your teacher about these ideas. Which **two** would be best?\n\n- 🏔️ the mountains and nature\n- 🍲 local food and markets\n- 🎭 festivals and traditions\n- 🏙️ modern buildings and shopping\n- 👵 interviews with local people\n\n*Useful: I think … should be shown because… That's a good idea, but… What about…?*",
    ),
    text(
      "Part 4: Your opinion",
      "- Do you think people believe too much of what they see online?\n- Would you like to work in TV or film? Why / why not?\n- Is it better to have a well-paid job or an interesting job? 💸❤️",
    ),
    tip("Part 3: about 2–3 minutes, the student should suggest, agree / disagree and reach a decision. Part 4: about 2 minutes, ask *Why?* Give feedback on range, linking and turn-taking."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can talk about rules at work: need to, needn't, allowed to, supposed to.", true],
      ["I can say what I managed to do.", true],
      ["I can write a formal email.", true],
      ["I can use the passive: is made, was built, has been shared, can be changed.", true],
      ["I can explain how to spot fake news.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "📰 Project: Our class news",
      "Create a short news report about your town, school, work or family.\n\n**Include:**\n- 2–3 short news stories (*A new café has been opened… The match was won by…*)\n- one interview with a real person (a friend, a colleague, a neighbor) 🎙️\n- one “Fact or fake?” question for your teacher 🔍\n\n📝 Written: an article of 150+ words · 🎧 or a podcast of 2–3 minutes",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with one word.",
        "1. You [needn't] come early — the meeting starts at 10.\n2. Tickets can [be] bought at the door.\n3. The bridge was built [in] 1965.\n4. The video has [been] watched a million times.\n5. I managed [to] fix my bike myself!\n6. We're [supposed] to switch off our phones in class.",
      ),
      choose(
        "Choose.",
        "1. Our flight [*has been delayed/has delayed].\n2. You [*aren't allowed to/needn't] park here — it's for buses only.\n3. After hours of searching, they [*managed to/could] find the lost dog.\n4. Chocolate [*is made/makes] from cocoa beans.\n5. The new film [*will be released/will release] in May.\n6. I [*had to/could] work all weekend — there was a deadline.",
      ),
      trueFalse("Correct or not?", [
        ["The film was shot in Iceland.", true],
        ["The video has shared by millions.", false],
        ["You needn't to bring food.", false],
        ["I could pass the exam yesterday after studying all night.", false],
        ["Photos can be edited easily.", true],
        ["We aren't allowed to use phones here.", true],
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: Our class news (150+ words). Write 2–3 short news stories and one short interview. Use the passive at least five times.", 150),
      record("Project (option): Record your news as a 2–3 minute podcast. 🎙️", 180),
    ],
    "Homework: Project",
  ),
]);
