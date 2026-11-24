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
  write,
} from "../../kit";

// 7.4 Practical: Agreeing and disagreeing — from strong to soft: Absolutely! / I see what you mean, but… / I'm afraid I don't agree. / How about…? Intonation for polite disagreement. S: a family council role-play. Main format: an "opinion line" game + a Bob the Canadian video + a listening (the Nurlanov family plans a holiday, ~1 min) + role-plays.
export default lesson("b1-7.4", "Practical: Agreeing and disagreeing", () => [
  section("Warm-up: The opinion line", [
    box(
      "Today you will…",
      "- agree and disagree politely — without a fight 🤝\n- find a compromise 🌉\n- plan a family holiday where everyone wants something different 🏖️🏔️",
    ),
    text(
      "Game: The opinion line 📏",
      "Your teacher reads a statement. Show your opinion on a line from 1 (I totally disagree 👎) to 10 (I totally agree 👍) — and explain in one sentence. Then your teacher says their number!\n\n- 🍍 Pineapple belongs on pizza.\n- 🐱 Cats are better than dogs.\n- ☀️ Summer is the best season.\n- 📱 Children under 12 shouldn't have phones.\n- 🎬 The book is always better than the film.\n- 🌅 Early mornings are the most productive time.",
    ),
    text(
      "Talk to your teacher.",
      "- Do you enjoy arguing, or do you avoid it? What about your family? 😄\n- When did you last disagree with someone? How did it end?\n- In your culture, is it OK to disagree openly with an older person or your boss?",
    ),
    tip("Make the game playful — exaggerate your own extreme opinions. Notice how the student disagrees with you: too direct (*No, you're wrong*), too soft, or just right? You'll come back to it."),
  ]),

  section("Video: Disagreeing politely", [
    tip("Bob the Canadian, about 3 minutes, slow and clear. Before watching: *What phrases do you already use to disagree?* The student writes down every phrase they hear."),
    video("Watch: how to disagree politely in English.", "2fbTXucw5sg"),
    text(
      "After the video: talk to your teacher.",
      "- Which phrases did you write down? Which ones will you use?\n- Why is it important to disagree politely, especially at work?",
    ),
  ]),

  section("Phrases: From strong to soft", [
    table("agree-disagree"),
    sort("Agree, partly agree or disagree? Sort the phrases. 👍🤔👎", {
      "👍 agree": ["Absolutely!", "I couldn't agree more.", "Exactly!", "That's so true."],
      "🙂 partly agree": ["I see what you mean, but…", "You have a point, but…", "That's true to some extent."],
      "👎 disagree": ["I'm not sure about that.", "I see it differently.", "I'm afraid I don't agree.", "I totally disagree."],
    }),
    match("Polite or rude? Match the rude phrases with polite ones.", [
      ["You're wrong!", "I'm afraid I see it differently."],
      ["That's a stupid idea.", "I'm not sure that would work."],
      ["No way!", "Hmm, I'm not so sure about that."],
      ["Whatever.", "I see your point, but…"],
      ["I don't care what you think.", "Let's agree to disagree."],
      ["Do what I say!", "How about we try it my way first?"],
    ]),
    choose(
      "Choose the most polite phrase.",
      "1. [*I see what you mean, but/You're totally wrong, because] I think it's too expensive.\n2. [*I'm afraid I don't agree./No. Bad idea.]\n3. [*How about/You must] going to the mountains instead?\n4. [*You have a point./Fine, whatever.]\n5. [*Perhaps we could/We will] meet halfway?\n6. [*I couldn't agree more!/I agree more.]\n7. [*I'm not sure that's true./That's not true, obviously.]\n8. [*What if we/Why don't you just] try both ideas?",
    ),
  ]),

  section("Listening: The family council", [
    tip("About 1 minute. The Nurlanov family — Saule, Arman, Madina and Daniyar — plan a summer holiday. First listen: *Where does each person want to go? What do they decide?* Second listen: underline the phrases for agreeing and disagreeing in the script."),
    ...listening(
      "Listen. The Nurlanov family plans a summer holiday together.",
      "**Arman:** OK, everyone, we have one week in July. Where shall we go? I think we should go to the seaside. Turkey, maybe.\n\n**Madina:** I see what you mean, Dad, but Turkey is really hot in July. And we went there two years ago.\n\n**Daniyar:** Exactly! Can we go somewhere new? How about the mountains? Ruslan's hiking group does trips to Altai.\n\n**Saule:** Hiking? I'm afraid I don't agree. My knees are seventy years old, almost! 😄 I can't climb mountains.\n\n**Daniyar:** You have a point, Grandma. Sorry.\n\n**Saule:** What I'd really love is a lake. Somewhere quiet, with fresh air.\n\n**Madina:** That's a great idea! What about Lake Burabay? There are forests, the lake, and easy walking paths.\n\n**Arman:** Hmm. I'm not sure. Is there anything to do there for young people?\n\n**Madina:** Of course! You can rent bikes and boats, and Daniyar could do a day hike in the hills nearby.\n\n**Daniyar:** OK, I could live with that — if I'm allowed to go on the hike without you, Dad. 😄\n\n**Arman:** Let's meet halfway: you can go with a guide. Fine. Mom, what do you think?\n\n**Saule:** I couldn't agree more. A lake, the forest, my family… perfect.\n\n**Arman:** Then it's decided. Burabay in July. Madina, can you book the guesthouse?\n\n**Madina:** Absolutely. Leave it to me!",
    ),
    gaps(
      "Complete the phrases they used. Listen again if you need.",
      "1. Madina: I see what you [mean], Dad, but Turkey is really hot in July.\n2. Saule: I'm [afraid] I don't agree.\n3. Daniyar: You have a [point], Grandma.\n4. Arman: Hmm. I'm not [sure].\n5. Arman: Let's meet [halfway].\n6. Saule: I couldn't agree [more].",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Arman want to go?", options: ["*Turkey", "Altai", "Burabay"] },
      { q: "Why doesn't Saule want to go hiking?", options: ["*Her knees can't climb mountains.", "She doesn't like Ruslan.", "It's too expensive."] },
      { q: "Who suggested Lake Burabay?", options: ["*Madina", "Arman", "Daniyar"] },
      { q: "What compromise does Arman suggest for Daniyar's hike?", options: ["*He can go with a guide.", "He can't go at all.", "He can go alone."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The family went to Turkey two years ago.", true],
      ["Daniyar wants to go somewhere new.", true],
      ["Saule would like somewhere quiet with fresh air.", true],
      ["At first, Arman is sure Burabay is good for young people.", false],
      ["Arman will book the guesthouse.", false],
    ]),
  ]),

  section("Practice: Find a compromise", [
    drag(
      "Complete the conversation.",
      "A: I think we should order pizza tonight.\nB: I see what you [mean], but we had pizza yesterday.\nA: You have a [point]. How [about] sushi?\nB: I'm [afraid] I don't really like sushi.\nA: OK, what [if] we cook something together?\nB: I couldn't agree [more]! Let's make plov. 🍲",
      ["agree", "sure", "for"],
    ),
    quiz("Choose the best reply.", [
      { q: "“I think we should work on Saturday to finish the project.” (You partly agree.)", options: ["*I see your point, but maybe we could just stay late on Friday?", "No way, I'm not working on Saturday!", "Absolutely, every Saturday!"] },
      { q: "“Online classes are better than real classes.” (You disagree politely.)", options: ["*I'm not sure about that. I think we need real contact.", "That's a stupid idea.", "Exactly!"] },
      { q: "“Let's leave at 6 a.m. to avoid the traffic.” (You strongly agree.)", options: ["*Absolutely — that's a great idea!", "I see it differently.", "Whatever."] },
      { q: "“We can't agree on a film.” (You suggest a compromise.)", options: ["*What if you choose this week and I choose next week?", "Then we won't watch anything.", "My choice is better."] },
    ]),
    gaps(
      "Complete with one word.",
      "1. I [couldn't] agree more!\n2. I'm [afraid] I see it differently.\n3. That's true to some [extent].\n4. How [about] meeting at five instead?\n5. Let's agree to [disagree].\n6. What [if] we try both options?",
    ),
    order(
      "Put the conversation in order.",
      [[
        "I think we should get a dog.",
        "I see what you mean, but who will walk it every day?",
        "You have a point. What if we take turns?",
        "That could work. But I'm afraid a big dog is too much for our flat.",
        "OK, let's meet halfway — a small dog!",
      ].join("\n")],
      "lines",
    ),
    trueFalse("Tips for polite disagreement. True or false? 💡", [
      ["Start by showing you understand the other person.", true],
      ["Say “You're wrong!” to be clear.", false],
      ["Use soft words like “maybe”, “I think”, “a bit”.", true],
      ["Never offer a compromise — it shows you're weak.", false],
      ["“Let's agree to disagree” is a polite way to end an argument.", true],
    ]),
  ]),

  section("Say it right: Soft or sharp?", [
    box(
      "🗣️ Say it right",
      "HOW you say it matters as much as WHAT you say!\n\n😊 Soft: *I'm not **sure** about that…* ↘ — slow, low voice, a small pause\n😠 Sharp: *I'm NOT sure about THAT!* ↗ — loud, fast, high\n\nA little **hmm…** or **well…** before you disagree makes it softer.",
    ),
    quiz("Listen to your teacher. Does it sound polite or rude?", [
      { q: "“I see what you mean, but…” (teacher says it softly)", options: ["*polite", "rude"] },
      { q: "“I see what you MEAN, BUT…” (teacher says it sharply)", options: ["*rude", "polite"] },
      { q: "“Well… I'm not so sure.” (with a pause)", options: ["*polite", "rude"] },
      { q: "“Whatever.” (with a sigh)", options: ["*rude", "polite"] },
    ]),
  ]),

  section("Role-play: The family council", [
    text(
      "Role-play 1: Plan a weekend 🗓️",
      "You and your teacher are flatmates. You have one free weekend and 50,000 tenge. You want different things!\n\n🧑 **You**: a trip to the mountains\n👤 **Your teacher**: a city break with museums and restaurants\n\nDisagree politely, give reasons, and find a compromise in 3 minutes. ⏱️",
    ),
    text(
      "Role-play 2: The family council 👨‍👩‍👧‍👦",
      "Choose a topic. Your teacher plays different family members. Reach an agreement!\n\n- 🐶 Should the family get a pet?\n- 🚗 Should we buy a new car or go on holiday?\n- 📵 Should there be a phone-free dinner every day?\n- 🏠 Should Grandma move in with the family?\n\n*Use the phrases from the table — and try to meet halfway!* 🤝",
    ),
    tip("Play a stubborn character first so the student has to use partly-agree phrases and compromise. Then swap. Give feedback on phrases AND tone — was the student too direct or too soft?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The strongest way to agree:", options: ["*I couldn't agree more.", "I see what you mean.", "Maybe."] },
      { q: "A polite way to disagree:", options: ["*I'm afraid I see it differently.", "You're wrong!", "No way!"] },
      { q: "A way to find a compromise:", options: ["*Let's meet halfway.", "Whatever.", "Do what I say."] },
      { q: "You partly agree:", options: ["*You have a point, but…", "Absolutely!", "I totally disagree."] },
    ]),
    box(
      "Phrase of the day: agree to disagree",
      "🤝 **Let's agree to disagree.** = We have different opinions, and that's OK — let's stop arguing.\n\n*We'll never agree about pineapple on pizza. Let's agree to disagree!* 🍍🍕",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I couldn't agree [more]!\n2. I see what you [mean], but…\n3. I'm [afraid] I don't agree.\n4. Let's meet [halfway].\n5. You have a [point].\n6. Let's agree to [disagree].",
      ),
      choose(
        "Choose the most polite reply.",
        "1. [*Hmm, I'm not sure about that./That's rubbish.]\n2. [*What if we tried a different way?/Your way is bad.]\n3. [*I see your point, but I think it's too late./No. Too late.]\n4. [*Absolutely, great idea!/Fine, I suppose.]\n5. [*I'm afraid I can't agree with that./You don't know anything.]\n6. [*How about meeting on Sunday instead?/Sunday. Final answer.]",
      ),
      match("Match the situations and the best phrases.", [
        ["You agree 100%.", "I couldn't agree more."],
        ["You agree only a little.", "That's true to some extent."],
        ["You want to disagree softly.", "I'm afraid I see it differently."],
        ["You want a compromise.", "Let's meet halfway."],
        ["You want to stop arguing.", "Let's agree to disagree."],
        ["You suggest an idea.", "What if we try something new?"],
      ]),
    ],
    "Homework: Phrases",
  ),
  homework(
    [
      write("Write a short dialogue (100+ words) between two friends who disagree about something (a holiday, a film, a pet, a party…). They should disagree politely and find a compromise.", 100),
      record("Record 1 minute: Give your opinion on this statement — “Everyone should learn to cook before they leave home.” Agree or disagree politely, with reasons. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
