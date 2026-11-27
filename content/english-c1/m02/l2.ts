import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 2.2 It's high time we… — G: the unreal past: It's (high / about) time + past, would rather / sooner + past, as if / as though, if only, suppose / supposing. V: extreme sports and risk idioms (an adrenaline junkie, a close shave, throw caution to the wind…). S: give advice as if you were in someone's shoes. Main format: extreme facts (true / false) + a long reading (Ruslan's column on thrill-seekers, ~760 words) + a long listening (Aliya wants to try paragliding; Kenji and Laura react, ~3:30) + a BBC Learning English video at home.
// Facts checked: Felix Baumgartner's jump (Red Bull Stratos, 14 October 2012) from about 39 km — he broke the speed of sound in free fall; Edmund Hillary and Tenzing Norgay — first confirmed ascent of Everest, 29 May 1953; Alex Honnold — free solo of El Capitan (Freerider), 3 June 2017, in 3 hours 56 minutes; the first commercial bungee jump site — A. J. Hackett, Kawarau Bridge, New Zealand (1988); Matthew Webb — first recorded swim across the English Channel without help, 1875. Marvin Zuckerman — the "sensation seeking" scale (first version in the 1960s); sensation seeking tends to be highest in the late teens and early twenties and declines with age.
// Warm-up format: true / false facts — after a ranking (order) in 2.1. Characters: Ruslan (mountain safety center), Aliya (a designer in Kenji's team), Kenji, Laura (from Manchester, teaches English in Almaty).
export default lesson("c1-2.2", "It's high time we…", () => [
  section("Warm-up: Extreme facts", [
    box(
      "Today you will…",
      "- find out why some people love danger — and others can't understand them 🪂\n- talk about things that aren't real (yet): *It's high time we… I'd rather you didn't… He acts as if…* 🎭\n- give advice as if you were in someone else's shoes 👟",
    ),
    trueFalse("Extreme facts: true or false? 🤔", [
      ["In 2012, Felix Baumgartner broke the speed of sound in free fall after jumping from about 39 km.", true],
      ["Edmund Hillary and Tenzing Norgay reached the top of Everest in 1953.", true],
      ["Alex Honnold climbed El Capitan without ropes in 2017 in under four hours.", true],
      ["The first person to swim across the English Channel did it in 1975.", false],
      ["The world's first commercial bungee jumping site opened in New Zealand.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Which fact surprised you most? Would you ever try any of these things?\n- What's the most adventurous thing you've ever done?\n- Why do you think some people need danger to feel alive?",
    ),
    tip("Statement 4: Matthew Webb swam the Channel in **1875**, not 1975. Keep the discussion short; the reading looks at why people seek thrills. Alex Honnold comes back in the next lesson."),
  ]),

  section("Vocabulary: Living on the edge", [
    words("Thrills and risks", [
      ["an adrenaline junkie", "⚡ a person who loves exciting, dangerous activities", "My cousin is an adrenaline junkie — skydiving, cave diving, you name it."],
      ["a thrill-seeker", "🎢 someone who looks for exciting experiences"],
      ["get a buzz out of", "🐝 enjoy something because it's exciting"],
      ["a daredevil", "😈 a person who does dangerous things to impress"],
      ["have nerves of steel", "🧊 stay calm in dangerous situations"],
      ["a close shave", "🪒 a situation where you almost had an accident"],
      ["by the skin of your teeth", "🦷 only just (succeed or escape)"],
      ["throw caution to the wind", "🌬️ stop being careful and take a risk"],
      ["play with fire", "🔥 do something dangerous that could hurt you"],
      ["push the boundaries", "🚧 go beyond what is normal or safe"],
      ["foolhardy", "🤪 taking stupid, unnecessary risks"],
      ["invincible", "🦸 impossible to defeat or hurt"],
    ]),
    match("Match the sentences and the phrases.", [
      ["“The car missed us by about ten centimeters.”", "a close shave"],
      ["“We caught the last train with three seconds to spare.”", "by the skin of your teeth"],
      ["“For once, she forgot about the risks and just went for it.”", "throw caution to the wind"],
      ["“He stayed completely calm when the engine failed.”", "have nerves of steel"],
      ["“Teenagers often feel that nothing bad could happen to them.”", "invincible"],
      ["“Climbing that wall in a storm, without a rope? That's just stupid.”", "foolhardy"],
    ]),
    quiz("Choose the right word.", [
      { q: "Lending money to a stranger online is playing with ___.", options: ["*fire", "water", "luck"] },
      { q: "She really gets a ___ out of public speaking.", options: ["*buzz", "kick off", "thrill up"] },
      { q: "Artists and scientists both push the ___.", options: ["*boundaries", "borders", "edges"] },
      { q: "My uncle is a real adrenaline ___ — he's tried every extreme sport.", options: ["*junkie", "addict-man", "lover-boy"] },
    ]),
  ]),

  section("Grammar: The unreal past", [
    quiz("Notice the rule 🔍 Look: “It's high time we talked honestly about risk.” · “I'd rather you didn't go alone.” · “He talks as if he were invincible.”", [
      { q: "In “It's high time we talked…”, is “talked” about the past?", options: ["*No — it's about now; it means “we should talk, and it's late”.", "Yes — we talked yesterday.", "Yes — we talked a long time ago."] },
      { q: "“I'd rather you didn't go alone” means…", options: ["*I'd prefer you not to go alone.", "You didn't go alone.", "I didn't go alone."] },
      { q: "“He talks as if he were invincible.” Is he invincible?", options: ["*No — it's unreal.", "Yes.", "We can't know."] },
    ]),
    table("unreal-past"),
    choose(
      "Choose the correct option.",
      "1. It's high time you [*started/start] taking this seriously.\n2. I'd rather you [*didn't tell/don't tell] anyone about this.\n3. I'd rather [*stay/stayed] at home tonight, if you don't mind.\n4. He behaves as if he [*owned/owns] the place — but he only works here.\n5. If only I [*had/would have] more free time!\n6. Suppose you [*won/would win] a million dollars — what would you do?\n7. It's time [*to leave/we leave], everyone. The taxi's here.\n8. She looked as though she [*had seen/saw] a ghost.",
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. It's about time the government [did] something about the roads. (do)\n2. I'd rather you [didn't climb] alone. (not / climb)\n3. You talk as if you [were/was] the only person who works hard here! (be)\n4. If only I [had listened] to Ruslan's advice yesterday! (listen)\n5. Suppose your parachute [didn't open] — what would you do? (not / open)\n6. I'd sooner you [paid] me back this week. (pay)\n7. It's high time we [went] home — it's after midnight. (go)\n8. I'd rather you [hadn't told] her — now she's worried. (not / tell)",
    ),
    drag(
      "Complete the messages with the words.",
      "1. Mum: It's high time you [called] your grandmother!\n2. Kenji: I'd rather you [didn't] work this weekend.\n3. Laura: You look as if you [haven't] slept for days. Are you OK?\n4. Leo: If [only] I hadn't sold my old amplifier!\n5. Aliya: [Suppose] we missed the last bus — how would we get home?\n6. Asel: I'd sooner you [paid] by card, if that's OK.",
      ["call", "don't", "unless"],
    ),
    sort("as if + real or unreal? Sort the sentences. 🧩", {
      "✅ probably true": ["It looks as if it's going to rain.", "You sound as though you've got a cold.", "It seems as if the shop is closed.", "She looks as if she's been running."],
      "🎭 not true (unreal)": ["He spends money as if he were a millionaire.", "She talks to me as if I were five.", "He acted as though nothing had happened.", "You look as if you'd seen a ghost."],
    }),
    tip("Say it right: in *It's high time…* the stress is on *HIGH*, and the tone shows impatience. In *I'd rather you didn't…* the voice falls softly — it's a polite way to say *no*. Practice: *I'd RATHER you DIDN'T. ↘*"),
  ]),

  section("Reading: Why we chase the edge", [
    tip("A long text (~760 words). First reading — 6 minutes: *Is Ruslan for or against extreme sports?* Then the tasks. Ask the student to find four examples of the unreal past."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["Ruslan thinks thrill-seekers are simply foolish.", false],
        ["Zuckerman's research suggests that the need for thrills varies from person to person.", true],
        ["Sensation seeking is usually highest in middle age.", false],
        ["Most of the people Ruslan rescues are experienced extreme athletes.", false],
        ["Ruslan believes that banning dangerous activities is the best solution.", false],
        ["He would rather people trained properly than stayed at home.", true],
      ],
      {
        read: [
          "## 🪂 Why we chase the edge",
          "*by Ruslan, who runs a mountain safety center near Almaty*",
          "Every spring, when the snow begins to melt, someone asks me the same question, usually in a slightly accusing tone: \"Why do people do it? Why do they climb, jump, ski down slopes that look like walls?\" The person asking tends to speak as if the answer were obvious — because they're foolish. After more than ten years in mountain rescue, I don't think it is that simple.",
          "Some of the bravest and most careful people I know are what you'd call adrenaline junkies. They train for years. They check the weather three times. They carry more safety equipment than anyone else on the mountain. They are not trying to die; they are trying, as one of them put it to me, \"to feel completely awake for a few minutes\". You may not want that feeling. But it's high time we stopped pretending that everyone who wants it is stupid.",
          "Psychologists have been studying this for decades. In the 1960s, the American psychologist Marvin Zuckerman began developing a questionnaire to measure what he called *sensation seeking*: the need for varied, new and intense experiences, and the willingness to take risks to get them. His work suggested that people differ a great deal in how much stimulation they need to feel good. For some, a quiet evening with a book is perfect. For others, the same evening feels like slow torture. Neither group is \"right\". They are simply built differently.",
          "Zuckerman's research, and many studies since, also found that sensation seeking tends to be highest in the late teens and early twenties, and to decline as people get older. Anyone who has been nineteen will recognize this. At that age, many of us felt invincible. I certainly did. I went hiking alone, without telling anyone, as if mountains were a kind of theme park. If only I had understood then what I know now.",
          "Here is the uncomfortable truth from my job: the people we rescue are rarely the experienced climbers or the professional freeriders. Most of them are ordinary tourists in the wrong shoes. They set off at two in the afternoon because the morning was \"too early\". They follow a route on their phone as though a blue line on a screen could tell them where the rocks are loose. They have never heard of hypothermia until they are suffering from it. It isn't the thrill-seekers who keep us busy. It's the people who didn't think they were taking any risk at all.",
          "So whenever someone tells me that dangerous sports should simply be banned, I ask them: suppose we did ban them. What would actually happen? The careful, well-trained athletes would stop, or go somewhere else. The tourists in the wrong shoes would carry on exactly as before. We would lose the people who know the mountains best — the ones who so often help us find others.",
          "That doesn't mean that anything goes. I would much rather people trained properly than threw caution to the wind. There are activities that I personally find foolhardy, and some \"challenges\" on social media that make me want to throw my phone into a river. Every summer, someone walks to the edge of a cliff for a photo, as if gravity didn't apply to people with followers. But between banning everything and allowing anything, there is a lot of space. It's called education, and it's much less exciting than a headline.",
          "In our center, we run free courses every weekend: how to read a weather forecast, what to pack, how to turn back in time. The most popular session, oddly enough, is the one on saying no. We practice it. We role-play the moment when your friends want to go on and every sensible part of you wants to go down. It's surprisingly hard. People would rather risk their lives than look like a coward in front of their friends.",
          "If I could ask one thing of every thrill-seeker — and every tourist — it would be this: respect the mountains, not the risk. The mountains don't care how brave you are, how many followers you have, or how much you want that summit. They are simply there. Treat them as if they were the most experienced and most unforgiving teacher you've ever had. Because they are. 🏔️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What does Ruslan say about experienced adrenaline junkies?", options: ["*Many of them are extremely careful and well prepared.", "They cause most accidents.", "They should be banned from the mountains."] },
      { q: "What did Zuckerman's work suggest?", options: ["*People differ a lot in how much stimulation they need.", "Everyone needs danger to be happy.", "Reading books is dangerous."] },
      { q: "Who does Ruslan rescue most often?", options: ["*unprepared ordinary tourists", "professional athletes", "teenagers on school trips"] },
      { q: "Why does Ruslan think a ban wouldn't work?", options: ["*Careful athletes would stop, but careless tourists wouldn't.", "Nobody would follow it.", "It would be too expensive."] },
      { q: "Which session at Ruslan's center is the most popular?", options: ["*the one on saying no", "the one on weather forecasts", "the one on first aid"] },
    ]),
    gaps(
      "Find words and phrases in the column.",
      "1. suggesting that someone has done something wrong: [accusing]\n2. becomes less: [declines/decline]\n3. a dangerous fall in body temperature: [hypothermia]\n4. ready to accept something: [willingness]\n5. a person who isn't brave: a [coward]\n6. not willing to forgive mistakes: [unforgiving]",
    ),
  ]),

  section("Listening: Aliya wants to fly", [
    tip("A long listening — about 3 minutes 30 seconds. At lunch, Aliya (a designer in Kenji's team) tells Kenji and Laura that she wants to try paragliding. First listen: *How do Kenji and Laura react?* Second listen: the tasks. Ask the student to note examples of the unreal past."),
    ...listening(
      "Listen to Aliya, Kenji and Laura at lunch.",
      "**Aliya:** Can I tell you something? I've booked a paragliding flight. This Saturday. In the mountains outside the city.\n\n**Laura:** No way! That's brilliant! On your own?\n\n**Aliya:** With an instructor. It's a tandem flight — he steers, I scream.\n\n**Kenji:** This Saturday? The Saturday before the launch?\n\n**Aliya:** Kenji, you're looking at me as if I'd told you I was jumping off a cliff.\n\n**Kenji:** Technically, you are jumping off a cliff.\n\n**Aliya:** Technically, I'm running down a hill attached to a very experienced man and a very large wing.\n\n**Kenji:** I'm not saying don't do it. I'd just rather you didn't do it two days before we present the new design to the client. Suppose you twisted your ankle on landing. Who would do the presentation?\n\n**Aliya:** You would. You know the design better than anyone.\n\n**Kenji:** That's what worries me.\n\n**Laura:** Oh, come on, Kenji. It's high time she did something for herself. She's been working weekends for two months.\n\n**Aliya:** Thank you, Laura.\n\n**Laura:** Honestly, I'd come with you if I weren't terrified of heights. I once went up the Blackpool Tower and had to sit on the floor.\n\n**Aliya:** Why did you want to do it, then?\n\n**Laura:** I didn't. My dad paid for it as a birthday treat. He looked so proud, as though he'd given me a car. I couldn't say no.\n\n**Kenji:** Can I ask what made you decide, Aliya? You've never mentioned it before.\n\n**Aliya:** Last month I saw some people flying over the valley when I was hiking, and I just stood there and watched them for twenty minutes. They looked so free. And I thought — if only I could do that, just once. Then I thought, why \"if only\"? Why not just book it?\n\n**Laura:** Good for you.\n\n**Aliya:** My mum, by the way, reacted as if I'd announced I was joining the circus. She said, \"Suppose the wind takes you to China?\" I told her that if it did, I'd at least bring her back some tea.\n\n**Laura:** That's a very calm answer.\n\n**Aliya:** I wasn't calm. I was pretending.\n\n**Kenji:** I understand that. Really. I just tend to think about everything that could go wrong. It's my job.\n\n**Aliya:** I know. And I did my research, I promise. The company has been running for years, the instructors are certified, and they cancel if the wind is too strong. Ruslan recommended them, actually.\n\n**Kenji:** Ruslan? The mountain rescue Ruslan?\n\n**Aliya:** Yes. I asked him which company he'd trust. He said, \"If you're going to do it, do it with people who are boring about safety.\"\n\n**Kenji:** OK, if Ruslan says so… I feel a bit better.\n\n**Laura:** Suppose it goes really well. Would you do a course? Learn to fly on your own?\n\n**Aliya:** Maybe. Ask me on Sunday. I'd rather not make any big promises before I've even left the ground.\n\n**Kenji:** Fair enough. Just do me one favor. Send us a message when you've landed.\n\n**Aliya:** You talk as though you were my dad.\n\n**Kenji:** Someone in this team has to be. And if I may say so, it's about time someone worried about you, rather than you worrying about everyone else's deadlines.\n\n**Aliya:** That's… actually very sweet.\n\n**Laura:** He'll deny it.\n\n**Kenji:** I'll deny it.\n\n**Laura:** And bring us a photo! I want to see your face at the moment you jump.\n\n**Aliya:** You'll see pure fear.\n\n**Laura:** Fear and joy look surprisingly similar in photos. Trust me, I have one from Blackpool.\n\n**Kenji:** One last question. What happens if it's too windy on Saturday?\n\n**Aliya:** Then they move it to next weekend. After the presentation.\n\n**Kenji:** Then I'll secretly hope for wind.\n\n**Aliya:** Kenji!",
    ),
    quiz("Listen and choose.", [
      { q: "Why is Kenji worried about the date?", options: ["*Aliya has an important presentation two days later.", "The weather will be bad.", "He wanted to go too."] },
      { q: "Why does Laura support Aliya?", options: ["*Aliya has been working too much and deserves something for herself.", "Laura loves paragliding.", "Laura is the instructor's friend."] },
      { q: "What happened to Laura at the Blackpool Tower?", options: ["*She was so scared that she sat on the floor.", "She got lost.", "She took a famous photo."] },
      { q: "What gave Aliya the idea?", options: ["*watching people paragliding while she was hiking", "a video online", "a birthday present"] },
      { q: "What did Ruslan advise?", options: ["*to choose a company that is serious about safety", "not to go at all", "to go alone"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Aliya will fly with an instructor.", true],
      ["Kenji tells Aliya not to go at all.", false],
      ["Laura is afraid of heights.", true],
      ["The company flies in any weather.", false],
      ["Aliya promises to do a full paragliding course.", false],
      ["Kenji asks Aliya to send a message after landing.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. You're looking at me as [if/though] I'd told you I was jumping off a cliff.\n2. I'd just rather you [didn't] do it two days before we present the new design.\n3. [Suppose/Supposing] you twisted your ankle on landing.\n4. It's high time she [did] something for herself.\n5. If [only] I could do that, just once.\n6. It's about time someone [worried] about you.",
    ),
  ]),

  section("Let's talk: In their shoes", [
    text(
      "Give advice as if you were in their shoes 👟",
      "Read the situations. Give advice using the unreal past — and say what you'd do yourself.\n\n1. Your friend, who has never skied, wants to go off-piste with a group of strangers.\n2. Your 70-year-old grandfather wants to try a tandem skydive for his birthday.\n3. Your colleague keeps posting videos of himself climbing buildings at night.\n4. Your cousin wants to quit university to become a professional surfer.\n\nUseful: *It's high time you… / I'd rather you… / Suppose you… / If I were in your shoes… / You're acting as if…*\n\nThen discuss: **Should adults be free to take any risk they want, as long as it only affects them?**",
    ),
    tip("Take turns: the teacher plays the person who wants to take the risk and argues back; the student advises. Then swap. Note the unreal past and the idioms; correct *It's time we go → we went*, *I'd rather you don't → didn't*. The last question prepares the debate in 2.3."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "It's high time we ___ a holiday.", options: ["*took", "take", "will take"] },
      { q: "I'd rather you ___ my phone without asking.", options: ["*didn't use", "don't use", "not use"] },
      { q: "He talks as if he ___ a famous climber.", options: ["*were", "is being", "will be"] },
      { q: "We missed the accident by the skin of our ___.", options: ["*teeth", "hands", "noses"] },
    ]),
    box(
      "Phrase of the day: better safe than sorry",
      "🛡️ It's better to be careful now than to regret it later. Aliya would add: *…but sometimes it's high time you threw caution to the wind — with a good instructor.*\n\n*When is “better safe than sorry” bad advice?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — When is the past not the past? (English Masterclass).", "xdodZEttvSY"),
      choose(
        "Choose.",
        "1. It's time you [*went/go] to bed.\n2. I'd rather you [*didn't smoke/not smoke] in the car.\n3. She looked at me as if I [*were/am] crazy.\n4. If only we [*had left/left] earlier yesterday!\n5. I'd rather [*walk/walked], thanks — it's a lovely evening.\n6. Supposing you [*lost/would lose] your passport abroad — what would you do?\n7. It looks as if the meeting [*has finished/had finished] — the room is empty.\n8. It's high time somebody [*told/tells] him the truth.",
      ),
      gaps(
        "Rewrite the sentences. Use the word in brackets.",
        "1. You should really clean your room now. (time) → It's [time you cleaned] your room.\n2. I'd prefer you not to call me after ten. (rather) → I'd [rather you didn't call] me after ten.\n3. He isn't the boss, but he gives orders. (as if) → He gives orders [as if he were/as if he was] the boss.\n4. I really regret not studying harder. (only) → If [only I had studied] harder.\n5. Imagine you could live anywhere. Where would you go? (suppose) → [Suppose you could] live anywhere — where would you go?\n6. I wish you hadn't told everyone. (rather) → I'd [rather you hadn't told] everyone.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the beginnings and endings.", [
        ["We escaped by the skin…", "…of our teeth."],
        ["He's a real adrenaline…", "…junkie."],
        ["That was a close…", "…shave!"],
        ["For once, she threw caution…", "…to the wind."],
        ["The pilot landed calmly — he has nerves…", "…of steel."],
        ["Lying to your boss is playing…", "…with fire."],
      ]),
      write(
        "A friend has written to you: they want to try a dangerous sport (you choose which) but their family is against it. Write a reply (220–260 words): show that you understand both sides, give your honest advice, and suggest how they could reduce the risks.",
        220,
        { read: "*Useful:* I can see why… · It's high time you… · I'd rather you… than… · Suppose something went wrong… · If I were in your shoes… · Whatever you decide…" },
      ),
      record("Record a 1–2 minute answer: “Are you a thrill-seeker or someone who plays it safe? Has that changed with age?” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
