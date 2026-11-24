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

// 8.3 Robots and right or wrong — skills lesson, no new grammar: review of conditionals (0, 1, 2), unless / in case. V: ethics and AI (fair, responsible, bias, privacy, a dilemma…). S: debate — should machines make important decisions? Main format: a riddles warm-up + a long reading (should a machine decide?, ~420 words) + a TED-Ed video (self-driving cars) + a for-and-against essay in class. Listening at home (a radio phone-in about AI decisions).
export default lesson("b1-8.3", "Robots and right or wrong", () => [
  section("Warm-up: Riddles", [
    box(
      "Today you will…",
      "- discuss what's right and wrong when machines make decisions 🤖⚖️\n- watch a famous dilemma about self-driving cars 🚗\n- write a for-and-against essay ✍️",
    ),
    quiz("Riddles 🧩 What am I?", [
      { q: "I have keys, but I can't open any doors.", options: ["*a keyboard", "a car", "a house"] },
      { q: "I have a face and two hands, but no arms or legs.", options: ["*a clock", "a robot", "a doll"] },
      { q: "The more you take, the more you leave behind.", options: ["*footsteps", "money", "photos"] },
      { q: "I can travel around the world but stay in a corner.", options: ["*a stamp on a letter", "a plane", "a spider"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Do you think a computer could ever solve a riddle like a human — and understand the joke? 🤖😂\n- Would you trust an AI to choose your doctor, your job or your partner? Why / why not?\n- What decisions should ALWAYS be made by people?",
    ),
    tip("Let the student solve the riddles before checking — give hints if needed. Then connect: *Machines are great at some kinds of thinking and terrible at others. Today: who should decide what?*"),
  ]),

  section("Vocabulary: Right and wrong", [
    words("Ethics and AI", [
      ["a dilemma", "🤔 a difficult choice between two options"],
      ["fair — unfair", "⚖️ treating everyone equally — not equal"],
      ["responsible (for)", "🙋 it's your job to deal with it; you're to blame if it goes wrong"],
      ["bias", "🎯❌ an unfair preference for or against a group", "The system had a bias against older people."],
      ["privacy", "🔒 the right to keep your personal life secret"],
      ["data", "📊 information, often collected by computers"],
      ["a decision", "✅ a choice", "make a decision"],
      ["trust", "🤝 believe someone or something is reliable"],
      ["a mistake — an error", "❌ something wrong"],
      ["harm", "🤕 hurt or damage", "AI shouldn't harm people."],
      ["a human being", "🧍 a person"],
      ["the law", "📜 the rules of a country"],
    ]),
    match("Match.", [
      ["make", "a decision"],
      ["face", "a dilemma"],
      ["protect", "your privacy"],
      ["be responsible", "for a mistake"],
      ["collect", "data"],
      ["break", "the law"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Should I tell my friend the truth or keep the secret? It's a real [dilemma]. 🤔\n2. The test wasn't [fair] — some students had the questions before!\n3. If a self-driving car crashes, who is [responsible]?\n4. The hiring app had a [bias]: it chose more men than women.\n5. Apps collect a lot of personal [data] about us. 📊\n6. I don't want my photos online. I care about my [privacy]. 🔒\n7. Robots should never [harm] people.\n8. Do you [trust] AI to give you medical advice?",
    ),
    sort("Who should decide — a human or a machine? Sort (most experts would agree). 🧍🤖", {
      "🤖 a machine can help a lot": ["checking spelling", "finding the fastest route", "sorting spam emails", "translating a menu"],
      "🧍 a human must decide": ["a prison sentence", "who gets a heart transplant", "whether to start a war", "who gets fired"],
    }),
  ]),

  section("Reading: Should a machine decide?", [
    tip("A long text (~420 words). First reading: *Is the writer for or against AI decisions — or somewhere in the middle?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Some companies use AI to read job applications.", true],
        ["The writer says AI can't make mistakes because it's a machine.", false],
        ["An AI can learn bias from old data.", true],
        ["The writer thinks AI should never be used in medicine.", false],
        ["The article says it's not always clear who is responsible when AI makes a mistake.", true],
        ["The writer's final idea is that humans should make the final decision on important things.", true],
      ],
      {
        read: [
          "## 🤖⚖️ Should a machine decide?",
          "Every day, computers make decisions about our lives — and most of the time, we don't even notice. An app decides which news we see. A bank's system decides if we can get a loan. Some companies use AI to read job applications and choose who gets an interview. But should machines make important decisions about people?",
          "**The case for machines.** Supporters say AI can be faster and, in some ways, fairer than people. A human manager might be tired, in a bad mood or influenced by someone's appearance. A computer doesn't get tired or hungry. In medicine, AI can look at thousands of X-rays and notice tiny details that a busy doctor might miss. If it helps doctors find illnesses earlier, more people could be saved.",
          "**The problem of bias.** But machines learn from data — and data comes from the past. If a company hired mostly men for twenty years, an AI that learns from those decisions might decide that men are better candidates. The machine isn't \"sexist\" — it's simply copying the past. And because it's a computer, people often trust it more than they should. \"The computer said so\" can sound very convincing.",
          "**Who is responsible?** When a human doctor makes a mistake, we know who is responsible. But if an AI gives the wrong advice, who is to blame — the company that made it, the hospital that used it, or the doctor who followed it? The law in many countries is still trying to answer this question.",
          "**Privacy.** AI needs a lot of data to work well — our photos, messages, health records, shopping habits. Many people are happy to share this data for free apps, but would they feel the same if they knew exactly how it was used?",
          "So what's the answer? Most experts agree on a middle way: let AI help, but don't let it have the final word. A machine can check thousands of X-rays, but a doctor should talk to the patient. An app can sort applications, but a person should decide who gets the job. If we remember that, AI could make our lives better — not just faster. 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why might AI be fairer than a human manager?", options: ["*It doesn't get tired or influenced by appearance.", "It's cheaper.", "It knows everyone personally."] },
      { q: "How can an AI become biased?", options: ["*It learns from data about past decisions.", "Its makers want it to be unfair.", "It reads the news."] },
      { q: "What question is the law still trying to answer?", options: ["*who is responsible for an AI's mistake", "how to build robots", "how to make AI faster"] },
      { q: "What is the “middle way” that experts suggest?", options: ["*AI helps, but humans make the final decision.", "Ban AI completely.", "Let AI decide everything."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. money you borrow from a bank: a [loan]\n2. how someone looks: their [appearance]\n3. people who are trying to get a job: [candidates]\n4. making you believe something easily: [convincing]\n5. the person who is guilty when something goes wrong is “to [blame]”\n6. information about your doctor visits: health [records]",
    ),
  ]),

  section("Video: The ethical dilemma of self-driving cars", [
    tip("TED-Ed, about 4 minutes, with subtitles if needed. Before watching: *If a self-driving car can't stop, who should it protect?* Pause before the end and ask the student to decide."),
    video("Watch: The ethical dilemma of self-driving cars — TED-Ed.", "ixIoDYVfKA0"),
    text(
      "After the video: talk to your teacher.",
      "- What was the dilemma in the video? What would YOU program the car to do?\n- If you knew a car might decide to sacrifice its passenger, would you buy it? 🚗\n- Who should make these decisions — engineers, governments, or buyers?",
    ),
  ]),

  section("Review: conditionals", [
    choose(
      "Choose the right form.",
      "1. If an AI [*learns/would learn] from biased data, it repeats the bias.\n2. If the car [*can't/couldn't] stop, who should it protect?\n3. I wouldn't trust a robot doctor unless a human [*checked/would check] its advice.\n4. If we [*don't/didn't] protect our privacy, companies will know everything about us.\n5. If I [*were/am] a judge, I wouldn't let a computer decide.\n6. Let AI help, as long as people [*make/will make] the final decision.\n7. If you [*heat/heated] metal, it gets bigger.\n8. What would happen if robots [*did/do] all the jobs?",
    ),
    drag(
      "Complete the opinion.",
      "In my opinion, AI is very useful, as [long] as humans stay in control. If doctors [use] AI to check X-rays, they'll find illnesses earlier. But if I [were] ill, I'd want a human to talk to me. And [unless] we fix the problem of bias, some people will be treated unfairly. If I [could] make one law, it [would] be this: a machine should never have the final word.",
      ["soon", "used", "in case", "will"],
    ),
    gaps(
      "Complete the conditional sentences about AI.",
      "1. If an app [collects] your data, you should know how it's used. (collect)\n2. If I [were] a programmer, I'd make AI explain its decisions. (be)\n3. If a self-driving car [crashes], who will pay? (crash)\n4. People [would trust/'d trust] AI more if it explained its choices. (trust)\n5. Unless we [make] new laws, these problems will continue. (make)\n6. If you [don't check/do not check] the facts, AI can give you wrong answers. (not check)",
    ),
    order("Make sentences.", [
      "If I were a judge, I wouldn't use AI.",
      "AI can help as long as people decide.",
      "If the data is biased, the AI will be biased.",
      "Who is responsible if the car crashes?",
      "I wouldn't trust it unless a doctor checked it.",
    ]),
  ]),

  section("Let's talk: Dilemmas and debate", [
    quiz("Which word fits? Choose.", [
      { q: "A choice where both options are difficult = a ___", options: ["*dilemma", "bias", "loan"] },
      { q: "If AI hurts someone, who is ___?", options: ["*responsible", "fair", "private"] },
      { q: "Using your photos without asking is a problem of ___.", options: ["*privacy", "trust", "law"] },
      { q: "Choosing fewer women because of old data is a kind of ___.", options: ["*bias", "harm", "decision"] },
    ]),
    text(
      "Debate: “Machines should never make important decisions about people.” ⚖️",
      "Your teacher takes one side, you take the other. Then swap!\n\n**Agree** 👍: bias, privacy, nobody is responsible, machines don't understand feelings…\n**Disagree** 👎: faster, not tired, can find illnesses earlier, people also make mistakes and have biases…\n\n**Use:** *If machines decided…, … would… Unless we…, … will… As long as… In my opinion… On the other hand…*",
    ),
    tip("Give 2 minutes to prepare. Push the student to use at least one zero, first and second conditional each. After the debate, ask: *Has your opinion changed today?*"),
  ]),

  section("Writing: For and against", [
    order(
      "Put the example essay in order.",
      [[
        "Should AI help teachers mark exams? There are arguments on both sides.",
        "On the one hand, AI is fast, and it doesn't get tired after 100 essays.",
        "On the other hand, it might not understand creative or unusual answers.",
        "Also, if the AI made a mistake, students might not know who to complain to.",
        "In conclusion, AI can help, as long as a teacher checks the final marks.",
      ].join("\n")],
      "lines",
    ),
    write("Write a for-and-against essay (100–120 words): “Should AI be used to choose who gets a job?” Give arguments for and against, then your conclusion. Use at least two conditionals.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "an unfair preference for or against a group =", options: ["*bias", "privacy", "data"] },
      { q: "If I ___ a robot, I'd never get tired.", options: ["*were", "am", "will be"] },
      { q: "Let AI help, ___ people decide in the end.", options: ["*as long as", "in case", "unless"] },
      { q: "If you ___ ice, it melts.", options: ["*heat", "heated", "will heat"] },
    ]),
    box(
      "Phrase of the day: a double-edged sword",
      "🗡️ **a double-edged sword** = something that has both good and bad results.\n\n*AI is a double-edged sword: it can save lives, but it can also be unfair.*",
    ),
  ]),

  homework(
    [
      ...listening(
        "Listen to a radio phone-in. People talk about AI making decisions.",
        "**Host:** Welcome back. Today's question: would you let AI make important decisions for you? Our first caller is Marat. Hi, Marat!\n\n**Marat:** Hi. I'm an air traffic controller, and we already use a lot of computer systems. They're amazing — they warn us if two planes get too close. But a human always makes the final decision. If something unusual happened and the computer had no data about it, I wouldn't want a machine to decide alone.\n\n**Host:** Thanks, Marat. Next, Aliya.\n\n**Aliya:** Hi! I'm a vet. Last month an AI app helped me find a rare illness in a snow leopard — I'd never seen it before. Without the app, I'd need days to find it. So I'm a fan. But the app is only a tool. I'm responsible for the animal, not the app.\n\n**Host:** And our last caller, Daniyar.\n\n**Daniyar:** Hi. I'm sixteen. At my school, an AI checks our homework for copying. Last week it said my essay was copied — but I wrote it myself! My teacher believed the computer at first. In the end, I showed her my notes and she changed her mind. So my opinion is: if a computer accuses you, a person should always listen to you too.\n\n**Host:** Thank you all. Interesting — everyone agrees that AI is useful, as long as a human has the final word.",
      ),
      quiz("Listen and choose.", [
        { q: "What does the computer system do for Marat?", options: ["*warns when two planes get too close", "flies the planes", "makes all the decisions"] },
        { q: "How did AI help Aliya?", options: ["*It helped her find a rare illness.", "It operated on the animal.", "It found a lost snow leopard."] },
        { q: "What happened to Daniyar?", options: ["*An AI said his essay was copied.", "AI wrote his essay.", "He failed an exam."] },
        { q: "What do all the callers agree on?", options: ["*AI is useful if a human has the final word.", "AI should be banned.", "AI is always right."] },
      ]),
      trueFalse("Listen again. True or false?", [
        ["Marat's computer system makes the final decision.", false],
        ["Aliya had seen the illness many times before.", false],
        ["Aliya feels responsible for the animal, not the app.", true],
        ["Daniyar's teacher believed the computer at first.", true],
        ["Daniyar's teacher didn't change her mind.", false],
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. It's a difficult [dilemma] — both choices are bad.\n2. Is it [fair] to let a computer choose who gets a job?\n3. Apps collect a lot of [data] about us.\n4. I care about my [privacy] — I don't share my location.\n5. Who is [responsible] if the robot makes a mistake?\n6. The system had a [bias] against people from small towns.",
      ),
      record("Record 1–2 minutes: Should AI be allowed to drive cars without a human? Give your opinion with at least two conditionals. 🎤", 120),
    ],
    "Homework: Vocabulary and speaking",
  ),
]);
