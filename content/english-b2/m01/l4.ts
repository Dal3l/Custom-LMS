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
  words,
  write,
} from "../../kit";

// 1.4 Practical: Making a good impression — functional language for interviews and networking: softening and hedging (I'd say…, I tend to…, To some extent…), talking about strengths without boasting, handling difficult questions (That's a good question — let me think), asking questions at the end (I was wondering what…). Review of indirect questions from 1.1. Main format: "what interview questions really mean" + a long reading (a recruiter's column, ~520 words) + a long listening (Aliya's job interview with Kenji, ~3:20) + a role-play interview.
// Characters: Kenji (team leader at an IT company in Almaty — see 0.1) interviews Aliya (from Almaty, B1 11.1) for a UX designer job. The recruiter Nadia Seitkali is new and fictional.
export default lesson("b2-1.4", "Practical: Making a good impression", () => [
  section("Warm-up: What they really mean", [
    box(
      "Today you will…",
      "- understand what interviewers really want to know 🕵️\n- talk about your strengths without sounding big-headed 💪\n- survive the hardest interview questions — and ask good ones yourself 🎯",
    ),
    match("Interview questions and what they REALLY mean. Match. 😄", [
      ["Tell me about yourself.", "Can you talk clearly and briefly about your experience?"],
      ["What's your biggest weakness?", "Are you honest and do you know yourself?"],
      ["Where do you see yourself in five years?", "Will you stay with us, or leave in a year?"],
      ["Why are you leaving your current job?", "Will you say bad things about your old boss?"],
      ["Why should we hire you?", "What makes you different from the other candidates?"],
      ["Do you have any questions for us?", "Are you really interested in this job?"],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever had an interview — for a job, a university, a visa? How did it go?\n- Which of these questions would be the hardest for you? Why?\n- Is it OK to “sell yourself” in an interview, or does it feel like lying?",
    ),
    tip("If the student hasn't had a job interview, use any interview: school, university, a scholarship, a sports team. The same language works everywhere."),
  ]),

  section("Reading: What I notice in the first five minutes", [
    tip("A medium-long text (~520 words) — a recruiter's column. First reading — 4 minutes: *Which piece of advice is the most surprising?* Then the tasks."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["Nadia thinks that being nervous is a big problem.", false],
        ["She doesn't like answers that are too long.", true],
        ["She thinks “I'm a perfectionist” is a good answer about weaknesses.", false],
        ["Candidates should give examples instead of just listing qualities.", true],
        ["It's always wrong to say “I don't know”.", false],
        ["Asking no questions at the end looks bad.", true],
      ],
      {
        read: [
          "## 🎯 What I notice in the first five minutes",
          "*by Nadia Seitkali, recruiter*",
          "I've interviewed more than two thousand people in my career, and I'm often asked the same question: \"What do you look for?\" People expect me to talk about degrees and experience. Of course, those matter — but they're on the CV before you walk in. In the room, I'm looking for something else.",
          "**Nerves are fine.** Almost everyone is nervous, and that's normal. It shows you care. What worries me is not shaking hands or a red face — it's a candidate who stops listening. If I ask about teamwork and you answer a different question because you prepared it at home, I notice. So my first piece of advice is simple: listen to the actual question.",
          "**Long isn't strong.** The second most common mistake is talking for too long. When I say \"Tell me about yourself,\" I don't want your life story. I want about two minutes: who you are professionally, what you've done that's relevant, and why you're here today. A good structure is present, past, future: what you do now, how you got there, and what you want next.",
          "**Show, don't tell.** Every second candidate tells me they're \"hard-working, a team player and a fast learner\". These words mean nothing on their own. Instead, give me an example: \"In my last job, our designer left two weeks before a deadline, so I learned the basics of the design software over a weekend and finished the project.\" Now I believe you're a fast learner — and I'll remember you.",
          "**The weakness question.** Please don't tell me your biggest weakness is that you're a perfectionist or that you work too hard. I've heard it a thousand times, and it sounds like you're avoiding the question. Choose a real weakness that won't destroy your chances, and explain what you're doing about it: \"I used to find it hard to say no to extra work, so now I tell my manager what I'm working on before I accept new tasks.\"",
          "**It's OK not to know.** Sometimes I ask a difficult or unexpected question on purpose. I want to see how you think. If you need a moment, say so: \"That's a good question — let me think about it for a second.\" If you really don't know, be honest and explain how you would find out. Inventing an answer is much worse than admitting you're not sure.",
          "**Your turn.** At the end, I always ask if the candidate has any questions. \"No, I think you've covered everything\" is a missed opportunity. Ask what a typical day looks like, what the team is like, or what success would look like in the first six months. Good questions tell me you've imagined yourself in the job.",
          "And finally: be yourself. A polished, rehearsed person who doesn't seem real is less convincing than a slightly nervous one who is honest, curious and clearly interested. I don't hire the perfect candidate. I hire the person I'd like to work with on a difficult Monday morning. ☕",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What worries Nadia most about nervous candidates?", options: ["*when they stop listening to the question", "shaking hands", "a red face"] },
      { q: "What structure does she suggest for “Tell me about yourself”?", options: ["*present, past, future", "past, present, future", "strengths, weaknesses, plans"] },
      { q: "Why does she prefer examples to adjectives?", options: ["*Examples make qualities believable and memorable.", "Adjectives are too difficult.", "Examples are shorter."] },
      { q: "What should you do if you don't know an answer?", options: ["*be honest and explain how you'd find out", "invent an answer quickly", "change the subject"] },
      { q: "What kind of person does Nadia hire?", options: ["*someone she'd like to work with on a difficult day", "the most polished candidate", "the person with the best degree"] },
    ]),
    gaps(
      "Find words in the column.",
      "1. connected to the job or situation: [relevant]\n2. a time by which work must be finished: a [deadline]\n3. say that something is true, often unwillingly: [admit]\n4. a chance that you didn't use: a missed [opportunity]\n5. practiced many times before: [rehearsed]\n6. wanting to know or learn about things: [curious]",
    ),
  ]),

  section("Vocabulary: Jobs and applications", [
    words("Jobs and applications", [
      ["apply for a job", "📨 officially ask for a job"],
      ["a candidate", "🙋 a person who applies for a job"],
      ["a CV (a résumé)", "📄 a document about your education and experience"],
      ["a cover letter", "✉️ a letter that you send with your CV"],
      ["hire — fire", "✅ give someone a job — ❌ make someone leave their job"],
      ["a skill", "🛠️ something you can do well because you've learned it"],
      ["experience", "📚 knowledge you get from doing a job"],
      ["a reference", "🗣️ a letter or call from someone who knows your work"],
      ["be shortlisted", "📋 be chosen for the final group of candidates"],
      ["a trial period", "⏳ the first weeks or months, when the company checks if you're right for the job"],
    ]),
    match("Match.", [
      ["apply", "for a job"],
      ["write", "a cover letter"],
      ["be shortlisted", "for an interview"],
      ["gain", "experience"],
      ["ask your old boss", "for a reference"],
      ["pass", "the trial period"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Fifty people applied, but only five [candidates] were invited to the interview.\n2. Please send your [CV/résumé] and a cover letter by Friday.\n3. They [hired] her after the second interview. 🎉\n4. Communication is one of the most important [skills] in this job.\n5. I've been [shortlisted] — they want to see me on Monday!\n6. My old manager wrote me a great [reference].",
    ),
    quiz("Which answer makes a better impression?", [
      { q: "“Why did you choose our company?”", options: ["*“I've used your app for two years, and I'd love to help make it better.”", "“It's close to my house.”", "“I applied to fifty companies.”"] },
      { q: "“What's your biggest weakness?”", options: ["*“I used to avoid public speaking, so I joined a speaking club.”", "“I'm a perfectionist.”", "“I don't have any weaknesses.”"] },
      { q: "“Can you work with difficult clients?”", options: ["*“Yes — for example, last year I…”", "“Yes, I'm very patient.”", "“I don't like difficult people.”"] },
      { q: "“Do you have any questions?”", options: ["*“Could you tell me what the first project would be?”", "“No, that's all.”", "“How many holidays do I get?”"] },
    ]),
  ]),

  section("Language: Sounding confident — but not big-headed", [
    table("interview-phrases"),
    sort("Too strong, or just right? Sort the sentences. 🧩", {
      "😬 sounds big-headed": [
        "I'm the best designer you'll ever meet.",
        "I never make mistakes.",
        "Your company really needs someone like me.",
        "I'm good at everything.",
      ],
      "😊 confident and polite": [
        "I'd say one of my strengths is attention to detail.",
        "People often tell me I'm good at explaining things.",
        "I tend to stay calm under pressure.",
        "I'm fairly confident I could learn it quickly.",
      ],
    }),
    choose(
      "Choose the better phrase for an interview.",
      "1. [*I'd say/I'm sure] my biggest strength is problem-solving.\n2. That's a good question. [*Let me think for a second./I don't know.]\n3. [*I was wondering/I want to know] what a typical day looks like.\n4. I [*tend to/always] work best in a team.\n5. [*To some extent/Totally], yes — but I'm still learning.\n6. Could you [*tell me a bit more about/explain me] the team?\n7. I left my last job [*because I wanted a new challenge/because my boss was terrible].\n8. [*Sorry, could you repeat the question?/What?]",
    ),
    order("Make polite questions for the end of an interview.", [
      "Could you tell me what a typical day looks like?",
      "I was wondering how big the team is.",
      "What would success look like in the first six months?",
      "Do you know when you'll make a decision?",
      "Is there anything else I can tell you about my experience?",
    ]),
    tip("Say it right: hedges like *I'd say…* and *to some extent* are said with a small pause after them — it sounds thoughtful, not unsure. Practice with a smile!"),
  ]),

  section("Listening: Aliya's interview", [
    tip("A long listening — about 3 minutes 20 seconds. Aliya applies for a job as a UX designer at Kenji's company. First listen: *Does she make a good impression? Why?* Second listen: the tasks. Ask the student to note three phrases from the table that Aliya uses."),
    ...listening(
      "Listen to Aliya's job interview with Kenji.",
      "**Kenji:** Hello, Aliya, thanks for coming in. I'm Kenji, I lead the product team. Did you find us easily?\n\n**Aliya:** Yes, thank you. Although I have to admit I went to the wrong floor first. The lift has no number six!\n\n**Kenji:** Ha! Everyone does that. It's a strange building. So, let's start with the classic question: tell me a bit about yourself.\n\n**Aliya:** Of course. At the moment I'm a designer at a small agency, where I mostly work on websites for local businesses — cafés, shops, a few clinics. Before that, I studied graphic design here in Almaty. During my studies, I got really interested in how people actually use apps, not just how they look. So I did an online course in UX design last year, and that's why I'm here: I'd like to focus on product design, and your app is used by thousands of people every day.\n\n**Kenji:** Great. You mentioned users. Can you give me an example of a time you changed a design because of user feedback?\n\n**Aliya:** Yes. Last spring we designed a booking page for a dental clinic. It looked beautiful, I'd say. But when we watched real patients use it, most of them couldn't find the button to choose a time. Some of them were quite old and the button was too small and too light. So we made it bigger, put it at the top, and changed the color. Online bookings went up a lot in the first month. That project taught me that a design isn't finished when it looks good — it's finished when people can use it.\n\n**Kenji:** I like that. Now, a harder one. What's your biggest weakness?\n\n**Aliya:** Hmm. That's a good question — let me think for a second. I think I tend to spend too long on the first version of a design. I want it to be perfect before I show it to anyone. Now I know that's not efficient, so I've started showing rough sketches to my team much earlier, even if they look a bit ugly.\n\n**Kenji:** That's honest. And why do you want to leave your current agency?\n\n**Aliya:** I've learned a lot there, and the people are lovely. But most of our projects last two or three weeks, and then they're gone. I'd like to work on one product for a longer time and see how it improves.\n\n**Kenji:** Makes sense. How do you feel about working with developers? Our designers and developers sit together.\n\n**Aliya:** To be honest, I don't have much experience with that yet, because at the agency the developers are freelancers. But I'm fairly confident I'd enjoy it. I've started learning some basic HTML and CSS so I can understand their problems better.\n\n**Kenji:** Good. Do you have any questions for me?\n\n**Aliya:** Yes, a few. I was wondering what a typical day looks like for a designer in your team.\n\n**Kenji:** Mornings are usually for meetings and testing with users. Afternoons are for focused work — we try not to have meetings after two.\n\n**Aliya:** That sounds great. And what would success look like for this role in the first six months?\n\n**Kenji:** Good question. We're redesigning our payment pages. If those are easier to use by the summer, I'll be very happy.\n\n**Aliya:** And could you tell me when you're likely to make a decision?\n\n**Kenji:** By the end of next week. We'll call all the candidates either way.\n\n**Aliya:** Perfect. Thank you so much for your time, Kenji. And I'll remember the lift next time!\n\n**Kenji:** Ha! Thank you, Aliya. It was a pleasure.",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Aliya want to work at Kenji's company?", options: ["*She wants to focus on product design for an app many people use.", "She wants a higher salary.", "She doesn't like her colleagues."] },
      { q: "What was the problem with the clinic's booking page?", options: ["*Many users couldn't find the button.", "It was too expensive.", "It didn't look beautiful."] },
      { q: "What weakness does Aliya mention?", options: ["*She spends too long on the first version of a design.", "She's too shy.", "She doesn't like teamwork."] },
      { q: "What does Aliya say about working with developers?", options: ["*She doesn't have much experience but is learning some code.", "She has worked with developers for years.", "She prefers to work alone."] },
      { q: "When will the company make a decision?", options: ["*by the end of next week", "tomorrow", "in the summer"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Aliya went to the wrong floor first.", true],
      ["She studied UX design at university.", false],
      ["Online bookings went up after the redesign.", true],
      ["Aliya's agency projects usually last a long time.", false],
      ["In Kenji's team, there are usually no meetings after two o'clock.", true],
      ["The team is redesigning the payment pages.", true],
    ]),
    gaps(
      "Complete Aliya's phrases.",
      "1. I have to [admit] I went to the wrong floor first.\n2. It looked beautiful, I'd [say].\n3. That's a good question — let me [think] for a second.\n4. I [tend] to spend too long on the first version.\n5. I'm fairly [confident] I'd enjoy it.\n6. I was [wondering] what a typical day looks like.",
    ),
  ]),

  section("Role play: The interview", [
    text(
      "Your interview 🎤",
      "Choose a real or dream job (or a university place, a scholarship, a volunteer role).\n\n**Prepare (5 minutes):**\n- *Tell me about yourself* — 2 minutes: present → past → future\n- one strength with an **example** (*show, don't tell*)\n- one real weakness and what you're doing about it\n- three questions for the interviewer\n\n**Interview (8–10 minutes):** your teacher is the interviewer and asks at least one unexpected question! Then swap roles.\n\n**Feedback:** use the checklist below. ✅",
    ),
    drag(
      "Interview checklist: complete.",
      "1. I [listened] to the actual question.\n2. My answer to “Tell me about yourself” was about two [minutes].\n3. I gave an [example] for my strength.\n4. My weakness was real, and I said what I'm [doing] about it.\n5. When I needed time, I said: “Let me [think] for a second.”\n6. I asked at least two [questions] at the end.",
      ["talked", "hours", "adjective"],
    ),
    tip("In a group: three roles — candidate, interviewer, observer with the checklist. Rotate. Give feedback on content first, then language (hedges, indirect questions)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ my main strength is communication.", options: ["*I'd say", "I'm sure that", "Obviously"] },
      { q: "I was wondering ___ there's a training program.", options: ["*if", "that", "what"] },
      { q: "Instead of listing qualities, you should give ___.", options: ["*examples", "adjectives", "excuses"] },
      { q: "I ___ to work best in the mornings.", options: ["*tend", "used", "used to"] },
    ]),
    box(
      "Phrase of the day: put your best foot forward",
      "👞 **Put your best foot forward** — try to make the best possible impression.\n\n*Before an interview, what do you do to put your best foot forward?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. [*I'd say/I say] I'm quite good at organizing events.\n2. Could you tell me how many people [*work/do work] in the team?\n3. I [*tend/am tending] to get nervous before presentations.\n4. [*To some extent/In some extent], I agree.\n5. People often [*tell/say] me I'm a good listener.\n6. I was wondering [*whether/that] I could ask a question.",
      ),
      match("Match the beginnings and endings.", [
        ["I'm fairly confident", "I could learn it quickly."],
        ["That's a good question —", "let me think for a second."],
        ["One of my strengths", "is staying calm under pressure."],
        ["I used to find it hard to say no,", "so now I plan my week more carefully."],
        ["Could you tell me a bit more", "about the team?"],
        ["Thank you so much", "for your time."],
      ]),
      gaps(
        "Complete with one word.",
        "1. I'm writing to [apply] for the position of guide.\n2. One of my [strengths] is working with children.\n3. I [tend] to stay calm in difficult situations.\n4. I'd [say] I'm a good team player.\n5. I was [wondering] if I could visit the camp before the summer.\n6. I look forward to [hearing] from you.",
      ),
    ],
    "Homework: Language",
  ),
  homework(
    [
      write("Write an email (140–190 words) applying for a summer job as a guide at an international youth camp. Say who you are, why you're interested, give one example that shows a strength, and ask two polite questions about the job.", 140, {
        read: "📧 **Advert:** *International Summer Camp, Almaty mountains — we're looking for friendly guides who speak English. Write to Nadia Seitkali and tell us why you'd be perfect for the job!*\n\n*Tips:* Dear Ms. Seitkali, … · I am writing to apply for… · One of my strengths is… For example, … · I was wondering whether… · I look forward to hearing from you. · Kind regards, …",
      }),
      record("Record your answer to the question: “Why should we hire you?” (1–1.5 minutes). Use one example and one hedge. 🎤", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
