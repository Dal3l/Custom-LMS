import {
  box,
  choose,
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
  write,
} from "../../kit";

// 1.4 Practical: Small talk — starting, keeping and ending a conversation with a stranger; question tags (form + intonation). S: role-plays at a party and a conference. Main format: three short listenings + role-play cards. No video in class.
export default lesson("b1-1.4", "Practical: Small talk", () => [
  section("Warm-up: Talking to strangers", [
    box(
      "Today you will…",
      "- start, keep going and end a conversation with someone new 💬\n- use question tags: *It's busy today, isn't it?* 🏷️\n- practice small talk at a party and at a conference 🥂",
    ),
    text(
      "Talk to your teacher.",
      "- Do you enjoy talking to people you don't know? Where is it easy for you — and where is it hard?\n- What topics are safe for small talk in your country? Which topics are a bad idea? 🙊\n- What's the most awkward conversation you've ever had with a stranger? What happened? 😬",
    ),
    tip("Share a funny awkward moment of your own first — it makes the topic relaxed. Note any cultural differences the student mentions: small talk rules are different in every country."),
  ]),

  section("Useful phrases", [
    sort("Start, keep going or finish? Sort the phrases. 💬", {
      "👋 Start": ["Is this your first time here?", "How do you know the host?", "Lovely weather, isn't it?", "Mind if I join you?"],
      "🔄 Keep going": ["Really? How come?", "What's that like?", "That sounds amazing!", "And what do you do?"],
      "🚪 Finish": ["It's been great talking to you.", "I'd better go and say hi to Leo.", "Let's keep in touch!", "Enjoy the rest of the evening!"],
    }),
    match("Match the questions and the best answers.", [
      ["Is this your first time here?", "No, I came last year too."],
      ["How do you know the host?", "We used to work together."],
      ["What do you do?", "I'm a nurse. And you?"],
      ["What's that like?", "Busy, but I love it."],
      ["Have you been waiting long?", "No, I've just arrived."],
      ["Mind if I join you?", "Not at all, sit down!"],
    ]),
    gaps(
      "Complete the phrases.",
      "1. Is this your first [time] here?\n2. How do you [know] the host?\n3. Mind if I [join] you?\n4. Really? How [come]?\n5. What's that [like]?\n6. It's been great [talking] to you.\n7. I'd [better] go and say hi to Leo.\n8. Let's keep in [touch]!",
    ),
    trueFalse("Small talk tips. True or false? 💡", [
      ["Ask open questions (What…? How…?), not only Yes / No questions.", true],
      ["Give one-word answers so the other person can talk more.", false],
      ["Show interest: Really? That sounds amazing!", true],
      ["Talk about your salary to make the conversation interesting.", false],
      ["Find something you have in common.", true],
    ]),
    sort("Safe or risky for small talk with a stranger? Sort. ✅⚠️", {
      "✅ Usually safe": ["the weather", "the food at the party", "travel", "films and series", "weekend plans"],
      "⚠️ Usually risky": ["salary", "politics", "religion", "someone's weight", "age"],
    }),
  ]),

  section("Listening: Three conversations", [
    tip("Three short conversations (~1.5 minutes in total). First listen: *Where are they? Do the people know each other?* Second listen: the tasks. Then show the script with the note's eye and find all the question tags."),
    ...listening(
      "Listen to three conversations. Where are the people? How do they start talking?",
      "**1.**\n\n**Leo:** Great party, isn't it?\n\n**Emma:** It is! The music's fantastic. I'm Emma, by the way.\n\n**Leo:** Leo. Nice to meet you. So how do you know Dana?\n\n**Emma:** We used to work at the bank together. And you?\n\n**Leo:** We were at school together. Wow, so you're the Emma! She's told me lots about you.\n\n**Emma:** Only good things, I hope!\n\n**Leo:** Mostly! You're a runner too, aren't you?\n\n**Emma:** Yes — we've been training together for the marathon.\n\n**2.**\n\n**Kenji:** Excuse me, is anyone sitting here?\n\n**Kate:** No, go ahead.\n\n**Kenji:** Thanks. It's really busy, isn't it? I didn't expect so many people.\n\n**Kate:** I know! It's the biggest tech conference in the region. Have you been to the talk on AI yet?\n\n**Kenji:** Yes, this morning. It was a bit long, wasn't it?\n\n**Kate:** Ha, a little. So, what do you do?\n\n**Kenji:** I'm a software developer. I've been working on a language app for the last year.\n\n**Kate:** Oh, really? What's that like?\n\n**Kenji:** Challenging, but I love it. And you?\n\n**Kate:** I work in marketing. Actually, we've been looking for an app developer…\n\n**3.**\n\n**Tom:** Well, it's been really nice talking to you, Asel.\n\n**Asel:** You too, Tom. You're going to Japan next month, aren't you?\n\n**Tom:** Yes, for two weeks. I can't wait!\n\n**Asel:** Send me some photos! Here's my number.\n\n**Tom:** Great. I'd better go and find my sister — she's leaving soon. Enjoy the rest of the evening!\n\n**Asel:** Thanks, you too. Let's keep in touch!",
    ),
    quiz("Listen and choose.", [
      { q: "How does Emma know Dana?", options: ["*They used to work together.", "They were at school together.", "They're neighbors."] },
      { q: "Where are Kenji and Kate?", options: ["*at a tech conference", "at a party", "in a café"] },
      { q: "What did Kenji think of the AI talk?", options: ["*It was a bit long.", "It was boring.", "It was the best talk."] },
      { q: "Why might Kate be interested in Kenji?", options: ["*Her company needs an app developer.", "She wants to learn Japanese.", "She's his old friend."] },
      { q: "Why does Tom have to go?", options: ["*He wants to find his sister.", "He's going to Japan tonight.", "He's tired."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo and Emma have met before.", false],
      ["Dana has told Leo about Emma.", true],
      ["Kenji has been working on an app for a year.", true],
      ["Kate works in software development.", false],
      ["Tom is going to Japan for a month.", false],
    ]),
  ]),

  section("Keep it going", [
    choose(
      "Choose the best follow-up question.",
      "1. A: I've just started a new job. B: [*Oh, congratulations! What's it like?/OK.]\n2. A: I've been living in Japan for two years. B: [*Really? How come?/I don't like Japan.]\n3. A: I'm a nurse. B: [*That must be busy! Do you work nights?/Nurses are boring.]\n4. A: I came here by bike. B: [*Wow! How far is it?/Why?]\n5. A: I've been learning to cook Korean food. B: [*Cool! What's your best dish?/I can't cook.]\n6. A: We used to work together. B: [*Oh, where was that?/Fine.]",
    ),
    tip("Point out the pattern: react (*Really? Wow! Cool!*) + ask a follow-up question. Then quick practice: you say a fact about yourself, the student reacts and asks a follow-up — 6 rounds, fast."),
  ]),

  section("Grammar: Question tags", [
    quiz("Notice the rule 🔍 Look: “Great party, isn't it?” “You're a runner too, aren't you?” “It was a bit long, wasn't it?”", [
      { q: "Why do people use these little questions?", options: ["*to check something or to keep the conversation going", "because they don't know the answer at all", "to finish a conversation"] },
      { q: "“It's busy” (+) → “isn't it?” (−). And “You aren't from here” (−) →", options: ["*are you?", "aren't you?", "don't you?"] },
      { q: "“You work with Dana” (Present Simple) →", options: ["*don't you?", "aren't you?", "haven't you?"] },
    ]),
    table("question-tags"),
    choose(
      "Choose the right tag.",
      "1. You're Dana's brother, [*aren't you/isn't it/don't you]?\n2. It isn't very warm today, [*is it/isn't it/does it]?\n3. You live near here, [*don't you/aren't you/doesn't you]?\n4. She works in marketing, [*doesn't she/isn't she/don't she]?\n5. They came by car, [*didn't they/weren't they/don't they]?\n6. You've been here before, [*haven't you/didn't you/aren't you]?\n7. He can speak Spanish, [*can't he/doesn't he/isn't he]?\n8. I'm a bit early, [*aren't I/am not I/isn't it]?",
    ),
    gaps(
      "Write the tag.",
      "1. It's a lovely day, [isn't it]?\n2. You don't eat meat, [do you]?\n3. The food was great, [wasn't it]?\n4. You've met Leo, [haven't you]?\n5. She won't be late, [will she]?\n6. They're from Almaty, [aren't they]?\n7. We should go home soon, [shouldn't we]?\n8. You didn't see the match, [did you]?",
    ),
    box(
      "🗣️ Say it right: up or down?",
      "Your voice changes the meaning!\n\n↘ **Down** = I'm quite sure, I'm just checking or making conversation: *Nice day, isn't it?* ↘\n\n↗ **Up** = I really don't know — it's a real question: *You've met Leo, haven't you?* ↗",
    ),
    quiz("Listen to your teacher. Is the voice going up ↗ or down ↘? What does the speaker mean?", [
      { q: "Great party, isn't it? ↘", options: ["*I'm sure — I'm just making conversation.", "I really don't know."] },
      { q: "You're Emma, aren't you? ↗", options: ["*I'm not sure — it's a real question.", "I'm completely sure."] },
      { q: "It was a bit long, wasn't it? ↘", options: ["*I think you agree with me.", "I'm asking for information."] },
      { q: "The meeting's at three, isn't it? ↗", options: ["*I'm not sure about the time.", "I know the time."] },
    ]),
    choose(
      "Complete the conversation with tags.",
      "A: You're Kate's sister, [*aren't you/isn't she]?\nB: Yes! And you work with her, [*don't you/aren't you]?\nA: That's right. It's a great party, [*isn't it/is it]?\nB: It is. You haven't tried the cake yet, [*have you/haven't you]?\nA: Not yet. Kate made it herself, [*didn't she/did she]?\nB: She did. She can cook really well, [*can't she/can she]?",
    ),
    order("Make sentences with tags.", [
      "You're a teacher, aren't you?",
      "It's really busy today, isn't it?",
      "You haven't been here before, have you?",
      "She lives in Astana, doesn't she?",
      "The talk was great, wasn't it?",
    ]),
  ]),

  section("Role-play: Small talk", [
    text(
      "Role-play 1: A friend's birthday party 🎂",
      "You don't know anyone except the birthday girl, Mia. Your teacher is another guest.\n\n1. **Start**: say something about the party or the food — use a tag! (*Great music, isn't it?*)\n2. Find out **how they know Mia** and **what they do**.\n3. Find **one thing you have in common**.\n4. **Finish** politely and exchange contacts.",
    ),
    text(
      "Role-play 2: A coffee break at a conference ☕",
      "You're at a professional event in your field (or a field you'd like to work in). Your teacher is a person who might be useful for your career.\n\n1. **Start**: ask to join them / comment on a talk.\n2. Talk about **what you've been working on** lately.\n3. Ask **two follow-up questions**: *Really? What's that like? How did you get into that?*\n4. **Finish**: *It's been great talking to you…* — and suggest a next step.",
    ),
    tip("After each role-play, give feedback on three things: Did the student ask follow-up questions? Did they use at least two tags? Did they finish naturally (not just “Bye”)? Then repeat the role-play with you starting — be a bit difficult (short answers!) so the student has to work to keep the conversation going."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "You're from Spain, ___?", options: ["*aren't you", "isn't it", "don't you"] },
      { q: "She didn't call, ___?", options: ["*did she", "didn't she", "does she"] },
      { q: "A good way to finish a conversation:", options: ["*It's been great talking to you.", "Goodbye, I'm bored.", "OK, stop."] },
      { q: "Usually a risky topic for small talk:", options: ["*salary", "the weather", "the food"] },
    ]),
    box(
      "Phrase of the day: break the ice",
      "🧊🔨 **break the ice** = say or do something to make people feel relaxed when they meet for the first time.\n\n*He told a funny story to break the ice.*",
    ),
  ]),

  homework(
    [
      gaps(
        "Write the tag.",
        "1. You're coming tonight, [aren't you]?\n2. It wasn't expensive, [was it]?\n3. He works with you, [doesn't he]?\n4. They've finished, [haven't they]?\n5. You can't swim, [can you]?\n6. We met last year, [didn't we]?\n7. She isn't married, [is she]?\n8. You'll call me, [won't you]?",
      ),
      order(
        "Put the conversation in order.",
        [[
          "Hi! Great view from here, isn't it?",
          "It is! I've never been up here before.",
          "Me neither. I'm Saule, by the way.",
          "Nice to meet you, Saule. I'm Ruslan. How do you know Kate?",
          "We work together. And you?",
          "We go to the same gym. Small world!",
        ].join("\n")],
        "lines",
      ),
    ],
    "Homework: Question tags",
  ),
  homework(
    [
      choose(
        "Choose the best reply.",
        "1. A: Is this your first time here? B: [*Yes, it is. It's great, isn't it?/Yes. Bye.]\n2. A: What do you do? B: [*I'm a designer. What about you?/Nothing.]\n3. A: I've just come back from Peru. B: [*Really? What was it like?/OK.]\n4. A: Mind if I join you? B: [*Not at all!/Yes, I mind.]\n5. A: It's been great talking to you. B: [*You too! Let's keep in touch./What?]\n6. A: How do you know Dana? B: [*We were at school together./I know her.]",
      ),
      write("You met someone interesting at a party last weekend. Write a message to them (80+ words): remind them who you are, mention something you talked about, and suggest meeting again.", 80, {
        read: "*Example:* Hi Kate! It's Kenji — we met at the tech conference on Saturday, in the coffee break. 😊 You told me about your company's plans for a new app, and I've been thinking about it since then. It sounds like a really interesting project! I've been working on something similar this year, so maybe I could help. Are you free for a coffee next week? Let me know what works for you. Best, Kenji",
      }),
      record("Record a 1-minute small talk: imagine you're at a party and you meet someone new. Say the start, ask two questions with tags, and finish politely. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
