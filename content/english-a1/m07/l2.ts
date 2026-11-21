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
  sort,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 7.2 Can AI do it? — G: Can you…? Yes, I can.; Can I…? Can you…? (requests, permission). V: AI and technology. Main format: reading + listening + video.
export default lesson("a1-7.2", "Can AI do it?", () => [
  section("Warm-up: AI — yes or no?", [
    box("Today you will…", "- talk about what AI can and can't do\n- ask for help: *Can you…, please?*\n- ask for permission: *Can I…?*"),
    trueFalse("Guess! Can AI do it today? 🤖", [
      ["AI can write a poem.", true],
      ["AI can translate texts.", true],
      ["AI can make pictures and videos.", true],
      ["AI can feel happy or sad.", false],
      ["AI can give you a real hug.", false],
    ]),
    tip("Some answers are open for discussion — *Can AI really be creative?* Let the student argue."),
    text("Talk to your teacher.", "- Do you use AI apps? Which ones? 📱\n- What do you ask AI to do?"),
  ]),

  section("Vocabulary: AI and technology", [
    picture("A robot or a person? 🤔", ["photos/ai-robot.jpg"], "A humanoid robot. It can talk and move its face!"),
    words("AI and technology", [
      ["AI — artificial intelligence", "🤖🧠"],
      ["a chatbot", "💬🤖 you write to it, it answers"],
      ["a robot", "🤖"],
      ["translate", "🌐 from one language to another", "AI can translate texts."],
      ["write", "✍️ texts, poems, emails"],
      ["answer questions", "❓➡️💬"],
      ["make pictures", "🎨"],
      ["recognize faces", "🙂📷 know who is in a photo · 🇬🇧 recognise"],
      ["feel", "❤️ be happy, sad, angry…"],
      ["make mistakes", "❌ AI can make mistakes too!"],
      ["check", "✅ look again — is it right?"],
      ["smart", "🧠"],
    ]),
    sort("What can AI do today? Sort. 🤔", {
      "🤖 AI can": ["translate", "write emails", "make pictures", "answer questions"],
      "🙅 AI can't": ["feel sad", "eat pizza", "give a real hug", "smell flowers"],
    }),
    match("Match.", [
      ["translate", "a text"],
      ["recognize", "faces"],
      ["make", "mistakes"],
      ["answer", "questions"],
    ]),
  ]),

  section("Reading: What can AI do?", [
    tip("Read the article together. The student finds every *can* and *can't* in the text."),
    quiz(
      "Read the article. Choose.",
      [
        { q: "AI can…", options: ["*translate and write texts", "feel happy", "eat"] },
        { q: "Robots in hospitals can…", options: ["*help doctors", "be doctors", "cook for patients"] },
        { q: "Why must people check AI answers?", options: ["*AI can make mistakes", "AI can't write", "AI is slow"] },
      ],
      {
        read: [
          "## 🤖 What can AI do — and what can't it do?",
          "AI is everywhere today. Chatbots can answer questions, translate texts and write emails in seconds. AI apps can make pictures, music and videos. Your phone can recognize your face. 📱",
          "Robots can work in factories, and in some hospitals robots can help doctors. Self-driving cars can drive in some cities. 🚗",
          "But AI can't do everything. It can't feel happy or sad. It can't give you a real hug. 🤗 And AI can make mistakes — it can give wrong answers! So you always need to check them. ✅",
          "So, can AI do your homework? Yes, it can… but can you learn from it? 😉",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Chatbots can write emails.", true],
      ["Self-driving cars can drive in some cities.", true],
      ["AI never makes mistakes.", false],
    ]),
    text("Talk to your teacher.", "- Can AI do your homework? Is it a good idea? 🤔\n- What job can AI do in the future? What job can't it do?\n- Is AI good or bad for people? 👍👎"),
  ]),

  section("Grammar: Can I…? Can you…?", [
    table("can-requests"),
    match("Match the questions and the answers.", [
      ["Can I use your charger?", "Sure, here you are."],
      ["Can you help me, please?", "Of course! What's the problem?"],
      ["Can AI translate this text?", "Yes, it can."],
      ["Can I go home now?", "Sorry, you can't. The lesson isn't over! 😄"],
    ]),
    choose(
      "Ability, help or permission? Choose the right question.",
      "1. You want to use your friend's phone: [*Can I use/Can you use] your phone?\n2. You need help: [*Can you help/Can I help] me, please?\n3. You want to open the window yourself: [*Can I open/Do I can open] the window?",
    ),
    drag(
      "Complete the chat with an AI assistant.",
      "You: [Can] you translate this text, please?\nAI: Yes, I [can]. 🤖\nYou: Great! [Can] I ask you a question in Kazakh?\nAI: Of [course]!",
      ["Do", "does"],
    ),
  ]),

  section("Listening: Talking to an assistant", [
    ...listening(
      "Listen. Leo talks to his phone assistant.",
      "**Leo:** Hey, assistant! Can you set an alarm for 7 a.m.?\n\n**Assistant:** Sure! Your alarm is set for 7 a.m. ⏰\n\n**Leo:** Thanks! Can you play some music?\n\n**Assistant:** Of course. Here's your playlist. 🎵\n\n**Leo:** Can you do my math homework? 😄\n\n**Assistant:** Sorry, I can't do your homework. But I can explain the math rules!\n\n**Leo:** OK… Can you tell me a joke?\n\n**Assistant:** Yes, I can! Why can't a computer play tennis? Because it's afraid of the net! 🎾\n\n**Leo:** Ha-ha. Very funny…",
    ),
    quiz("Listen and choose.", [
      { q: "The alarm is for…", options: ["*7 a.m.", "8 a.m.", "6 a.m."] },
      { q: "Can the assistant do Leo's homework?", options: ["*No, it can't.", "Yes, it can."] },
      { q: "The assistant can…", options: ["*explain the rules", "go to school", "eat pizza"] },
    ]),
  ]),

  section("Video: What is AI?", [
    video("Watch the video. What can AI do?", "JcXKbUIebrU"),
    text("Talk to your teacher.", "- What examples of AI are in the video?\n- What AI do you use every day? (a phone assistant, a translator, a map…) 🗺️"),
  ]),

  section("Let's talk: AI and me", [
    text(
      "Debate: AI can or can't? ⚖️",
      "Say *AI can… / AI can't…* and why:\n\n- AI can be a good teacher. 👩‍🏫\n- AI can be your friend. 🤝\n- AI can drive a car better than people. 🚗\n- AI can write a song better than a singer. 🎤\n\n*I think AI can… because… / I don't think AI can…*",
    ),
    text("Role-play: you and an AI assistant 🤖", "Your teacher is an AI assistant. Ask for help: *Can you…, please?* The “AI” sometimes says *Sorry, I can't!* 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "You want to use a friend's laptop:", options: ["*Can I use your laptop?", "Can you use my laptop?", "Do I can use your laptop?"] },
      { q: "Can AI feel sad?", options: ["*No, it can't.", "No, it doesn't can.", "No, it isn't."] },
      { q: "AI = …", options: ["*artificial intelligence", "a smart internet", "an app"] },
    ]),
    box("Word of the day: prompt", "**a prompt** ✍️🤖 = the question or task you write for an AI.\n\n*Write a good prompt: “Can you explain can and can't with 3 examples?”*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. A program you write to and it answers: a [chatbot]\n2. AI = artificial [intelligence]\n3. From English to Kazakh: [translate]\n4. AI can make [mistakes], so check the answers!"),
      choose("Choose.", "1. [*Can I/Do I can] open the window?\n2. [*Can you/Can I] help me, please?\n3. Can AI cook? — No, it [*can't/doesn't]."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: AI in 60 seconds.", "9dQSDxXBSKw"),
      write("Ask a real AI chatbot 3 questions in English (Can you…?). Write the questions and short answers.", 20),
    ],
    "Homework: Video and practice",
  ),
  homework(
    [
      write("What can AI do for you? What can't it do? Do you think AI is good or bad? (40+ words)", 40, {
        read: "*Example:* AI can help me with English — it can explain grammar and translate words. It can make cool pictures too! But AI can't be my friend, and it can't feel. It can make mistakes, so I always check the answers. I think AI is good, but people are better! 😊",
      }),
      record("Record your answer: Can AI be a good teacher? Why / why not?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
