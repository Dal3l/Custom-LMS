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

// 7.3 Friends online — skills lesson, no new grammar: review of -ing / to, make / let / allow. V: online communication (follow, block, ghost, a group chat…). S: debate — can you be real friends only online? Main format: an emoji-chat warm-up + a reading (forum posts, ~420 words) + a Life Noggin video + a listening (a radio discussion with Madina and Kenji, ~1.5 min) + an opinion essay in class.
export default lesson("b1-7.3", "Friends online", () => [
  section("Warm-up: Emoji chat", [
    box(
      "Today you will…",
      "- read and hear opinions about online friendship 💬\n- debate: can online friends be real friends? 🤔\n- write an opinion essay ✍️",
    ),
    match("What do these emojis usually mean in a chat? Match. 💬", [
      ["🙄", "I'm annoyed. / Seriously?"],
      ["😂", "That's so funny!"],
      ["🙏", "Thank you! / Please!"],
      ["👀", "Interesting… tell me more!"],
      ["🤝", "Deal! / Agreed!"],
      ["💀", "I'm dying of laughter!"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which emoji do you use most? Which one do your parents use in a strange way? 😄\n- Have you ever had a misunderstanding because of a message or an emoji?\n- How many of your friends have you met online first?",
    ),
    tip("Emoji meanings change between generations and countries — ask the student how THEY use each one. 💀 for laughing is very common with young people and very confusing for older ones!"),
  ]),

  section("Vocabulary: Online life", [
    words("Online communication", [
      ["follow — unfollow", "➕ start seeing someone's posts — ➖ stop"],
      ["block", "🚫 stop someone from contacting you"],
      ["ghost (someone)", "👻 suddenly stop answering someone, without explanation", "He ghosted me after two dates."],
      ["a group chat", "👥💬 a chat with several people"],
      ["leave someone on read", "✔️✔️ read a message but not answer"],
      ["a follower", "👤 a person who follows your account"],
      ["online — in person", "💻 on the internet — 🧍 face to face"],
      ["keep in touch", "📞 continue to communicate"],
      ["a voice message", "🎤 a short audio message"],
      ["a profile", "🪪 your page with photos and information"],
      ["share", "🔁 show a post to others"],
      ["lonely", "😔 sad because you're alone"],
    ]),
    match("Match.", [
      ["leave someone", "on read"],
      ["add someone to", "a group chat"],
      ["send", "a voice message"],
      ["keep", "in touch"],
      ["update", "your profile"],
      ["meet", "in person"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. He suddenly stopped answering my messages — he [ghosted] me! 👻\n2. Our family [group] chat has 34 people and 500 messages a day. 😩\n3. She read my message two days ago and didn't answer — she left me on [read].\n4. Someone was sending me rude messages, so I [blocked] them. 🚫\n5. I prefer typing — I hate sending [voice] messages.\n6. We've talked online for a year, but we've never met in [person].\n7. She has 10,000 [followers], but she says she feels [lonely].\n8. We live in different countries now, but we keep in [touch].",
    ),
    quiz("Choose the right word.", [
      { q: "I don't want to see his posts anymore. I'm going to ___ him.", options: ["*unfollow", "follow", "share"] },
      { q: "Change your ___ photo — that one is ten years old! 😄", options: ["*profile", "follower", "group chat"] },
      { q: "That video is so funny — I'll ___ it with my friends.", options: ["*share", "block", "ghost"] },
      { q: "After moving to a new city, she felt ___ and missed her friends.", options: ["*lonely", "online", "blocked"] },
    ]),
    sort("Friendly or unfriendly online behavior? Sort. 😊😠", {
      "😊 friendly": ["replying quickly", "sending a birthday message", "sharing a friend's good news", "asking “How are you really?”"],
      "😠 unfriendly": ["ghosting someone", "leaving someone on read for days", "posting embarrassing photos of a friend", "reading messages in a group but never answering"],
    }),
  ]),

  section("Reading: Can online friends be real friends?", [
    tip("Forum posts (~420 words). First reading: *Who is positive about online friendship? Who is negative? Who is in the middle?* Then the tasks."),
    quiz(
      "Read the forum. Who thinks…?",
      [
        { q: "…online friends helped them during a difficult time?", options: ["*TomInToronto", "MarinaK", "DadOfThree"] },
        { q: "…you can't really know someone without meeting them?", options: ["*MarinaK", "TomInToronto", "night_owl_jin"] },
        { q: "…online friendship is easier for shy people?", options: ["*night_owl_jin", "DadOfThree", "MarinaK"] },
        { q: "…children shouldn't be allowed to chat with strangers?", options: ["*DadOfThree", "TomInToronto", "night_owl_jin"] },
        { q: "…online and offline friendship can work together?", options: ["*night_owl_jin", "MarinaK", "DadOfThree"] },
      ],
      {
        read: [
          "## 💬 Forum: Can online friends be real friends?",
          "**TomInToronto:** Absolutely. Three years ago my dad was very ill, and I didn't want to talk to anyone at school about it. But my friends from an online game noticed I was quiet and kept asking if I was OK. One of them, Jin, sent me voice messages every night. I'd never met him, but he was there when I needed someone. Last summer we finally met in person, and it felt like meeting an old friend. Friendship is about trust, not about distance.",
          "**MarinaK:** I'm not so sure. Online, people only show you what they want to show. Someone can seem kind and funny in messages, but you don't know how they treat people in real life. I've been ghosted by \"online best friends\" twice. Real friends help you move flats, visit you in hospital and notice when something is wrong with your face — not just your messages. 🤷",
          "**night_owl_jin:** I'm the Jin that Tom mentioned! 👋 I'm very shy, and in person I avoid talking to new people. Online, I can take my time, think before I answer and be myself. For people like me, it's much easier to start a friendship online. But I agree with Marina in one way: the best friendships move offline sometimes. Tom and I are planning to travel together next year. Online is where it can start, not where it has to stay.",
          "**DadOfThree:** As a parent, I worry. My kids are 10, 13 and 15, and I don't let the younger two chat with strangers online at all. Not everyone is who they say they are. My oldest is allowed to, but we agreed she must never share her address and must tell us before meeting anyone in person. I'm not against online friendship — I just think children need rules and adults need to stay careful. 🛡️",
          "**MarinaK:** @night_owl_jin That's fair. Maybe the problem isn't online friendship, it's people who never try to meet. 🙂",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Tom and Jin met in person last summer.", true],
      ["Marina has never had problems with online friends.", false],
      ["Jin finds it easy to talk to new people face to face.", false],
      ["DadOfThree lets all his children chat with strangers.", false],
      ["In the end, Marina partly agrees with Jin.", true],
    ]),
    gaps(
      "Find words in the forum.",
      "1. completely, yes: [Absolutely]\n2. saw or became aware of: [noticed]\n3. talked about briefly: [mentioned]\n4. behave towards someone: [treat]\n5. keep away from, not do: [avoid]\n6. be worried: [worry]",
    ),
  ]),

  section("Video: Are your online friends real friends?", [
    tip("Life Noggin, about 4 minutes — fast but clear. Before watching: *What do you think science says about online friends?* Pause after each main idea if needed."),
    video("Watch: Are your online friends REAL friends?", "s_4ODFbKQ2E"),
    text(
      "After the video: talk to your teacher.",
      "- What did the video say about online friendships? Did anything surprise you?\n- Does the video agree more with Tom, with Marina or with Jin?\n- Which new words did you notice? Write down three. ✍️",
    ),
  ]),

  section("Listening: Two opinions", [
    tip("About 1.5 minutes: a radio discussion with Madina and Kenji. First listen: *Who is more positive about online friendship?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio discussion. Madina and Kenji talk about online friendship.",
      "**Host:** Today's question: can you be real friends with someone you've only met online? Madina, you're a student and a freelance designer.\n\n**Madina:** I think yes, definitely. Half of my clients and some of my closest friends I met online, in design communities. We help each other with projects, we celebrate each other's successes… One friend in Brazil even stayed up all night to help me finish a project before a deadline. I'd call that a real friend.\n\n**Host:** Kenji, you're less sure?\n\n**Kenji:** A little. I moved to Almaty three years ago, and at first I spent a lot of time chatting online with friends in Japan. It helped me feel less homesick. But it also stopped me from making new friends here. I was always on my phone instead of saying yes to invitations.\n\n**Host:** So what changed?\n\n**Kenji:** A colleague made me join a hiking club. That's where I met Laura. Now we go hiking every weekend, and I've got a real group of friends here. My Japanese friends are still important, but we don't talk every day anymore.\n\n**Madina:** But that's normal, isn't it? Friendships change.\n\n**Kenji:** True. I just think online friends can't do everything. They can't bring you soup when you're ill. 🍲\n\n**Madina:** OK, but they can order you soup! 😄\n\n**Host:** Ha! So, a final thought?\n\n**Kenji:** Use online friendship to stay in touch, but don't let it stop you from living where you are.\n\n**Madina:** And don't refuse to make friends just because they're far away. Distance isn't the problem — effort is.",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Madina meet some of her closest friends?", options: ["*in online design communities", "at university", "on a trip to Brazil"] },
      { q: "What did Madina's friend in Brazil do?", options: ["*stayed up all night to help with a project", "visited her in Almaty", "sent her a present"] },
      { q: "What problem did online chatting cause for Kenji?", options: ["*It stopped him from making new friends in Almaty.", "It cost too much money.", "His friends in Japan forgot him."] },
      { q: "How did Kenji meet Laura?", options: ["*at a hiking club", "online", "at work"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina thinks online friends can be real friends.", true],
      ["Kenji's colleague made him join a hiking club.", true],
      ["Kenji still talks to his Japanese friends every day.", false],
      ["Kenji says online friends can bring you soup.", false],
      ["Madina thinks effort is more important than distance.", true],
    ]),
  ]),

  section("Review: verb patterns", [
    choose(
      "Choose the right form.",
      "1. Jin avoids [*talking/to talk] to new people in person.\n2. Tom and Jin are planning [*to travel/travelling] together.\n3. DadOfThree doesn't let his younger kids [*chat/to chat] with strangers.\n4. A colleague made Kenji [*join/to join] a hiking club.\n5. Madina's friend stayed up all night [*to help/helping] her.\n6. Don't refuse [*to make/making] friends because they're far away.\n7. I enjoy [*sending/to send] voice messages to my grandma.\n8. My oldest daughter is allowed [*to use/use] social media.",
    ),
    drag(
      "Complete Tom's message to Jin.",
      "Hey Jin! I'm so happy we decided [to] travel together! 🎒 I can't stop [thinking] about it. My parents are going to let me [go] if we stay in hostels with good reviews. 😄 Remember [to] bring your camera. I'm really looking forward to [meeting] your family too. My mom wants me [to] bring them a present from Canada — any ideas?",
      ["going", "think", "met"],
    ),
  ]),

  section("Let's talk: The debate", [
    text(
      "Debate: Online friends can be just as real as offline friends. 🗣️⚖️",
      "Your teacher takes one side, you take the other. Then swap!\n\n**Agree** 👍: trust and support matter, not distance; easier for shy people; you can find people with the same interests…\n**Disagree** 👎: you can't really know someone online; people can lie; they can't help you in person; it can stop you from making local friends…\n\n**Use:** *I strongly believe… That's true, but… For example… What about…? I see your point, however…*",
    ),
    tip("Give 2 minutes to prepare, then 1 minute per side, then free discussion. Push for examples from the reading, the video and the listening (*Like Tom said… Kenji's story shows that…*). After swapping, ask what the student really thinks."),
  ]),

  section("Writing: An opinion essay", [
    order(
      "Put the example essay in order.",
      [[
        "Nowadays, many people make friends online. But can these friendships be real?",
        "In my opinion, they can — because friendship is about trust and support, not distance.",
        "For example, an online friend can help you when you feel lonely at night.",
        "However, it's important to meet in person when it's possible and safe.",
        "To sum up, online friendship is real, but it's even better offline.",
      ].join("\n")],
      "lines",
    ),
    write("Write an opinion essay (100–120 words): “Online friends can be just as real as offline friends.” Do you agree? Give two reasons with examples and a conclusion.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "suddenly stop answering someone =", options: ["*ghost", "block", "follow"] },
      { q: "read a message but not answer =", options: ["*leave someone on read", "share", "unfollow"] },
      { q: "Jin avoids ___ to strangers.", options: ["*talking", "to talk", "talk"] },
      { q: "Kenji's colleague made him ___ a club.", options: ["*join", "to join", "joining"] },
    ]),
    box(
      "Phrase of the day: IRL",
      "🧍 **IRL** = **I**n **R**eal **L**ife.\n\n*We've been chatting for a year, but we've never met IRL!*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. He [ghosted] me — no answer for a month!\n2. I've added you to the family group [chat].\n3. She has thousands of [followers] on Instagram.\n4. We've never met in [person].\n5. I [blocked] that account — it was sending spam.\n6. Let's keep in [touch]!",
      ),
      choose(
        "Choose.",
        "1. I can't stand [*waiting/to wait] for replies.\n2. She promised [*to call/calling] me back.\n3. My parents didn't let me [*have/to have] a phone until I was 14.\n4. Remember [*to reply/replying] to your grandma's message!\n5. He's good at [*making/to make] people laugh.\n6. The app makes you [*watch/to watch] adverts every five minutes. 😠",
      ),
      match("Match the words and the meanings.", [
        ["ghost", "suddenly stop answering"],
        ["block", "stop someone contacting you"],
        ["unfollow", "stop seeing someone's posts"],
        ["IRL", "in real life"],
        ["a follower", "a person who follows your account"],
        ["lonely", "sad because you're alone"],
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Write a forum post (100+ words) answering the question: “Can online friends be real friends?” Give your opinion and tell a story from your life or from someone you know.", 100),
      record("Record 1 minute: Tell about a friendship that started online (yours or someone else's) — or explain why you prefer friends in real life. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
