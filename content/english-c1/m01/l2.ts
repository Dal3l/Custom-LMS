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

// 1.2 She will keep doing that — G: habits now and in the past: will / would for typical behavior (and stressed WILL / WOULD for annoyance), keep -ing, be forever / always -ing, tend to, used to vs would. V: C1 character adjectives (meticulous, outspoken, self-effacing…). S: describe a person without naming them. Main format: "annoying or endearing?" + a long reading (a column about the little habits that drive us mad, ~730 words) + a long listening (Zarina's podcast with Leo and his drummer Sanzhar, ~3:30) + a BBC Learning English video at home.
// Facts checked: the term "misophonia" (strong dislike of particular everyday sounds, such as chewing or breathing) was proposed by the audiologists Pawel and Margaret Jastreboff in 2001; it is not a hearing problem — the sounds are not too loud, the reaction is emotional.
// Warm-up format: sort (annoying or endearing?) — after a match warm-up in 1.1. Characters: Zarina (her podcast), Leo (his band; his dad's guitar), Sanzhar (new — the band's drummer), Laura (an English teacher in Almaty).
export default lesson("c1-1.2", "She will keep doing that", () => [
  section("Warm-up: Annoying or endearing?", [
    box(
      "Today you will…",
      "- talk about the habits we love — and the ones that drive us mad 😤\n- describe typical behavior: *He'll sit for hours… She WILL leave her cups everywhere! He keeps interrupting…* 🔁\n- describe a person so well that your partner guesses who it is 🕵️",
    ),
    sort("Annoying or endearing? Sort the habits — there's no single right answer, but this is what most people think. 🧩", {
      "😤 usually annoying": ["checking their phone while you're talking", "always being ten minutes late", "finishing your sentences for you", "leaving dirty cups everywhere", "chewing loudly"],
      "🥰 usually endearing": ["humming while they cook", "remembering tiny details about you", "laughing at their own jokes", "naming their plants", "sending you songs they think you'll like"],
    }),
    text(
      "Talk to your teacher.",
      "- Which of these habits do *you* have? Be honest! 🙈\n- Which habit in other people annoys you most? Why do you think it bothers you so much?\n- Can an annoying habit become endearing when you love someone? Give an example.",
    ),
    tip("The checking shows the most common answer — use disagreements to start the conversation: *Really? I find it really annoying when…* Note how the student talks about habits now; the grammar section gives them better tools."),
  ]),

  section("Grammar: Habits now and in the past", [
    quiz("Notice the rule 🔍 Look: “He'll sit for hours with his guitar.” · “She WILL leave her cups everywhere!” · “He keeps interrupting.” · “Every summer, Grandma would take us to the mountains.”", [
      { q: "“He'll sit for hours with his guitar” is about…", options: ["*his typical behavior now", "his plans for tomorrow", "a promise"] },
      { q: "When “will” is stressed (“She WILL leave her cups everywhere!”), the speaker is…", options: ["*annoyed", "making a prediction", "making an offer"] },
      { q: "Can we say “I would have long hair when I was a student”?", options: ["*No — “would” is for past actions, not states. Use “used to”.", "Yes, it's the same as “used to”.", "Yes, but only in writing."] },
    ]),
    table("habits"),
    choose(
      "Choose the best option. Sometimes both are possible — choose the one that fits the meaning.",
      "1. My flatmate [*will spend/is spending] hours in the bathroom every morning — it's just what he does.\n2. Ugh, he [*keeps borrowing/will have borrowed] my charger without asking!\n3. I [*tend to/use to] wake up early, even at weekends.\n4. When we were kids, Dad [*would/was used to] read to us every night.\n5. I [*used to/would] be really shy at school.\n6. She's [*forever complaining/forever complain] about her job.\n7. “Leo was late again.” — “Well, he [*would/will] be — he's always late!”\n8. People [*don't tend to/tend not] read long emails carefully.",
    ),
    gaps(
      "Complete with the words in brackets in the right form.",
      "1. My brother [keeps leaving] the lights on. It drives me mad! (keep / leave)\n2. She's [always losing/forever losing] her keys. (always / lose)\n3. I [tend to] overthink things before a big decision. (tend)\n4. Every Sunday, our grandmother [would make/used to make] dumplings for the whole family. (make)\n5. I [used to have] a cat, but now I'm allergic. (have)\n6. Kenji [will sit/'ll sit] at his desk for hours without moving — he's very focused. (sit)\n7. Why do you [keep interrupting] me? Let me finish! (keep / interrupt)\n8. Asel doesn't [tend to] complain, even when she's exhausted. (tend)",
    ),
    tip("Say it right: annoyance is in the stress — *She WILL leave her cups everywhere! He WOULD say that!* And in *forever / always / constantly*: *He's ALWAYS borrowing my stuff!* Practice both: neutral vs annoyed."),
  ]),

  section("Grammar: used to or would?", [
    choose(
      "used to, would or both? Choose the form that is correct — if both are possible, the first one is fine.",
      "1. I [*used to/would] live in a tiny flat near the station.\n2. Every evening, we [*would/were used to] sit on the balcony and talk.\n3. He [*used to/would] have a beard, but he shaved it off.\n4. My parents [*didn't use to/wouldn't used to] let me stay out late.\n5. We [*used to/would] own a dog called Rocky.\n6. In winter, Grandpa [*would/used] go fishing on the frozen lake.",
    ),
    drag(
      "Complete Laura's memories of Manchester with the words.",
      "When I was a teenager in Manchester, I [used] to work in a record shop on Saturdays. The owner was a huge Smiths fan, and he [would] play their albums all day. Customers [kept] asking him to change the music, but he never did. He [was] forever telling us stories about concerts he'd seen in the 1980s. I didn't [use] to like that kind of music, but in the end, I [tended] to agree with him: it was brilliant.",
      ["will", "uses", "tends"],
    ),
  ]),

  section("Vocabulary: Character in detail", [
    words("C1 character adjectives", [
      ["meticulous", "🔍 very careful about every small detail", "She's meticulous — she checks every invoice twice."],
      ["outspoken", "📢 says exactly what they think, even if it upsets people"],
      ["self-effacing", "🙈 doesn't like to talk about their own achievements"],
      ["conscientious", "✅ works hard and wants to do things properly"],
      ["opinionated", "🗯️ has strong opinions and expresses them all the time"],
      ["resourceful", "🧰 good at finding ways to solve problems"],
      ["aloof", "🧊 unfriendly and distant, not interested in others"],
      ["tactless", "💥 says things that upset people without meaning to"],
      ["unassuming", "🌾 modest, doesn't try to look important"],
      ["overbearing", "🏋️ tries to control other people"],
      ["gullible", "🎣 believes everything people tell them"],
      ["easily led", "🐑 does what others want too easily"],
    ]),
    match("Match the descriptions and the adjectives.", [
      ["“She found a way to fix the car with a hairpin and some tape.”", "resourceful"],
      ["“He'll tell his boss she's wrong in front of everyone.”", "outspoken"],
      ["“She won the prize but just said it was luck.”", "self-effacing"],
      ["“He believed me when I said spaghetti grows on trees.”", "gullible"],
      ["“She labels every box and color-codes her calendar.”", "meticulous"],
      ["“He asked my aunt if she'd put on weight. At the wedding.”", "tactless"],
    ]),
    sort("Positive, negative — or it depends? Sort. 🧩", {
      "👍 usually positive": ["conscientious", "resourceful", "unassuming", "meticulous"],
      "👎 usually negative": ["aloof", "overbearing", "tactless", "gullible", "opinionated"],
    }),
    gaps(
      "Word formation. Complete with the right form of the word in brackets.",
      "1. I admire her [resourcefulness] — she can solve any problem. (resourceful)\n2. His [tactlessness] has upset a lot of people. (tactless)\n3. She checked the numbers [meticulously]. (meticulous)\n4. He's very [opinionated] about football. (opinion)\n5. Thank you for being so [conscientious] about the deadlines. (conscience)\n6. Some people mistake shyness for [arrogance]. (arrogant)",
    ),
  ]),

  section("Reading: Small habits, big feelings", [
    tip("A long text (~730 words). First reading — 6 minutes: *What does Zarina think we should do about other people's annoying habits?* Then the tasks. Ask the student to find four different ways of talking about habits in the text."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["Zarina was surprised by how many listeners wrote to her.", true],
        ["Most of the messages were about serious problems.", false],
        ["Misophonia means that a person can't hear certain sounds well.", false],
        ["Zarina used to leave her shoes in the hall.", true],
        ["Zarina thinks we should never mention a habit that annoys us.", false],
        ["She suggests talking about the habit when you are calm.", true],
        ["Zarina's grandfather had a habit that later became a happy memory.", true],
      ],
      {
        read: [
          "## 😤 Small habits, big feelings",
          "*by Zarina, host of a podcast about everyday life*",
          "Last month, I asked the listeners of my podcast a simple question: *What little habit of someone you live with drives you mad?* I expected maybe twenty replies. I got more than four hundred. Clearly, I had touched a nerve.",
          "What struck me first was how small the habits were. Nobody wrote about lies or betrayal. They wrote about spoons. One listener's husband will leave a teaspoon in the sink, never in the dishwasher, \"as if the dishwasher is a ten-minute walk away\". A student told me that her flatmate keeps saying \"no worries\" in response to everything, including \"You've broken my laptop\". A man in Almaty wrote that his wife is forever turning the heating up when he leaves the room, and he is forever turning it down again. \"We have never discussed it,\" he added. \"It's a silent war. It has been going on for eleven years.\"",
          "Why do such small things make us so angry? Part of the answer is repetition. The first time someone hums while they work, it's charming. The four-hundredth time, it feels like a personal attack. Our irritation doesn't come from one cup left on the table; it comes from all the cups that came before it, and all the cups we know will come after.",
          "For some people, the reaction is stronger still. In 2001, two hearing specialists, Pawel and Margaret Jastreboff, suggested the word *misophonia* — literally \"hatred of sound\" — for people who react extremely strongly to certain everyday noises, such as chewing or breathing. Importantly, it isn't a problem with hearing. The sounds are not too loud; the reaction is emotional. Several listeners who wrote to me recognized themselves immediately, and were relieved to discover that they were not simply \"bad-tempered\".",
          "Another part of the answer, I suspect, is what a habit seems to *say*. The teaspoon in the sink is not about the teaspoon. To the person who has to move it, it says: *I expect you to tidy up after me.* The \"no worries\" says: *I'm not taking this seriously.* We tend to turn small actions into big messages, and then react to the message, not the action.",
          "I should confess that I am not innocent here. For years, I would leave my shoes in the middle of the hall, exactly where people walk. I didn't even notice I was doing it. My partner put up with it for a long time, then one day said, very calmly, \"I've tripped over your shoes eleven times this month. I've been counting.\" I was horrified — not by the shoes, but by the counting. Eleven times, and I hadn't known.",
          "So what can we do? Having read four hundred messages, I'd suggest three things. First, speak early. A habit that bothers you a little in the first month will bother you a lot in the first year. Second, talk about it when you are calm, not in the moment when you're holding the offending teaspoon. \"Can we talk about the dishwasher?\" on a quiet Sunday works better than a speech at midnight. Third, describe the habit, not the person. \"You leave your shoes in the hall\" is a fact; \"You're so selfish\" is an argument.",
          "It also helps to remember that habits are rarely chosen on purpose. Most of them were formed years ago, in a different home, with different people, for reasons nobody remembers. The flatmate who never closes kitchen cupboards may have grown up in a house where nobody did. That doesn't make the open cupboards less annoying, but it does make them less personal.",
          "It is also worth asking the uncomfortable question: *What do I do that drives other people mad?* Most of us don't know. We notice everyone else's habits and almost none of our own. If you're brave, ask the people you live with. Be ready to laugh.",
          "Finally, a thought that several older listeners sent me. One woman wrote that her late husband would whistle the same tune every morning while he shaved — badly, and always slightly out of tune. For forty years, it irritated her. \"Now,\" she wrote, \"I would give anything to hear it again.\" My grandfather used to do something similar, with old rock songs. I didn't appreciate it either. Some habits, it seems, only become precious when they stop. 🎶",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What does “I had touched a nerve” mean here?", options: ["*The topic was very important to many people.", "She had upset her listeners.", "She had a medical problem."] },
      { q: "According to Zarina, why do repeated habits make us so angry?", options: ["*Each time adds to all the times before.", "People do them on purpose.", "We are tired in the evenings."] },
      { q: "Why was Zarina “horrified” by her partner's words?", options: ["*She hadn't noticed something that happened so often.", "Her partner was very angry.", "She had lost her shoes."] },
      { q: "What is the message of the last paragraph?", options: ["*Habits that annoy us can become things we miss.", "We should stop whistling.", "Old people are more patient."] },
    ]),
    gaps(
      "Find words and phrases in the column.",
      "1. caused a strong reaction: touched a [nerve]\n2. the act of being disloyal to someone: [betrayal]\n3. strong dislike, the feeling of being annoyed: [irritation]\n4. happy because a worry has gone: [relieved]\n5. accepted something unpleasant: put [up] with it\n6. very valuable, important to you: [precious]",
    ),
  ]),

  section("Listening: On the road with the band", [
    tip("A long listening — about 3 minutes 30 seconds. Zarina's podcast: Leo (a guitarist, he plays his dad's old guitar) and Sanzhar, the band's drummer, talk about living together on tour. First listen: *Do they really annoy each other — or not?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast with Leo and Sanzhar from Leo's band.",
      "**Zarina:** Today's episode continues our series on living together, and my guests have just spent three weeks in a small van. Leo, Sanzhar, welcome!\n\n**Leo:** Thanks, Zarina. We're still talking to each other, which is a good start.\n\n**Sanzhar:** Just about.\n\n**Zarina:** So, honestly — what's the most annoying habit of the other person?\n\n**Sanzhar:** Can I go first? Leo will tune his guitar for twenty minutes before every rehearsal. Every single time. The guitar is already in tune! I've checked!\n\n**Leo:** It's my dad's old guitar. It's sensitive. It needs love.\n\n**Sanzhar:** It needs a new owner who doesn't tune it at seven in the morning in a hotel room.\n\n**Zarina:** And Leo, what does Sanzhar do?\n\n**Leo:** Where do I start? He's forever losing his drumsticks. We've bought, I think, fourteen pairs this year. And he keeps tapping. On everything. Tables, steering wheels, my head.\n\n**Sanzhar:** That's not a habit. That's practice.\n\n**Leo:** At three in the morning?\n\n**Sanzhar:** Rhythm doesn't sleep.\n\n**Zarina:** Have you always been like this, Sanzhar?\n\n**Sanzhar:** Pretty much. When I was a kid, I used to drum on pots and pans in the kitchen. My mum would hide the wooden spoons, and I would find them again. Eventually she bought me a cheap drum kit, and the neighbors stopped speaking to us for about a year.\n\n**Zarina:** Leo, I've heard you used to be quite shy.\n\n**Leo:** Very shy. I didn't use to play in front of anyone. I would practice in the garage with the door closed. My dad would come in, sit down without saying anything, and just listen. He never commented. He'd just nod at the end.\n\n**Zarina:** That's lovely.\n\n**Leo:** It is now. At the time, it drove me crazy. I wanted him to say something!\n\n**Zarina:** Let's talk about tour life. What's the hardest part of sharing a van?\n\n**Sanzhar:** The music. Leo controls the playlist, and he tends to play the same five albums.\n\n**Leo:** They're classics!\n\n**Sanzhar:** They're from the seventies. I know every word of every song now. I hear them in my dreams.\n\n**Leo:** And Sanzhar always wants to stop to eat. Every hour. \"Is there a café? Is there a café?\"\n\n**Sanzhar:** I'm a drummer. I burn a lot of energy.\n\n**Leo:** He'll eat a full meal, get back in the van, and ten minutes later he'll ask if anyone has any biscuits.\n\n**Sanzhar:** That's called being prepared. Anyway, Leo tends to forget to eat at all when he's nervous, so somebody has to think about food.\n\n**Zarina:** So how do you avoid serious arguments?\n\n**Leo:** We have a rule. If something annoys you, you say it the same day, but only after the concert. Never before. Before a concert, everyone's nervous and everything sounds like criticism.\n\n**Sanzhar:** And you say it about the habit, not the person. Not \"You're so selfish,\" but \"You've taken my pillow again.\"\n\n**Zarina:** That sounds remarkably mature.\n\n**Leo:** Our bass player made us write it down. She's very meticulous. She keeps a notebook of everything — money, set lists, who owes whom a coffee.\n\n**Zarina:** And does anyone have a habit that the others actually like?\n\n**Sanzhar:** Leo does, actually. After every concert, however bad it was, he'll go round and thank each of us. Every time. Even when I've dropped my sticks in the middle of a song.\n\n**Leo:** Well, he'll always carry everyone's bags without being asked. He's very unassuming about it. He never mentions it.\n\n**Sanzhar:** Stop it, you're making me sound nice.\n\n**Zarina:** Final question. After three weeks in a van, would you do it again?\n\n**Leo:** Tomorrow.\n\n**Sanzhar:** Tomorrow. But I'm choosing the music.",
    ),
    quiz("Listen and choose.", [
      { q: "What annoys Sanzhar about Leo?", options: ["*He tunes his guitar for a long time before every rehearsal.", "He's always late.", "He loses his things."] },
      { q: "What did Sanzhar do as a child?", options: ["*He drummed on pots and pans.", "He took guitar lessons.", "He sang in a choir."] },
      { q: "How did Leo's dad react when Leo practiced?", options: ["*He listened quietly and nodded at the end.", "He gave him lots of advice.", "He asked him to play more quietly."] },
      { q: "What is the band's rule about complaints?", options: ["*Say it the same day, but after the concert.", "Never complain on tour.", "Write complaints in a notebook."] },
      { q: "Which habit of Sanzhar's does Leo like?", options: ["*He carries everyone's bags.", "He chooses good music.", "He buys coffee for everyone."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Sanzhar says Leo's guitar is usually out of tune.", false],
      ["The band has bought about fourteen pairs of drumsticks this year.", true],
      ["Sanzhar's neighbors were happy when he got a drum kit.", false],
      ["Leo used to practice with the garage door closed.", true],
      ["Leo tends to play the same few albums in the van.", true],
      ["The bass player is very disorganized.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. Leo [will] tune his guitar for twenty minutes before every rehearsal.\n2. He's [forever] losing his drumsticks.\n3. And he [keeps] tapping. On everything.\n4. My mum [would] hide the wooden spoons.\n5. I didn't [use] to play in front of anyone.\n6. He [tends] to play the same five albums.",
    ),
  ]),

  section("Let's talk: Who is it?", [
    text(
      "Describe someone without naming them 🕵️",
      "Think of a person everyone in the class knows — a famous person, a character from a series, or a character from this course (Asel, Ruslan, Kenji, Laura…).\n\nDescribe them for **1–2 minutes**, without saying their name or job:\n\n- **Character:** *She's incredibly resourceful, if a little outspoken…*\n- **Typical behavior:** *He'll… / She tends to… / He's forever…*\n- **The past:** *She used to… When he was younger, he would…*\n- **One annoying habit and one endearing one.**\n\nYour partner guesses. Then swap! 😊",
    ),
    tip("Encourage softening with adjectives: *a little, slightly, a bit of a perfectionist, if anything*. Note where the student could use a more precise adjective instead of *nice / good / bad*. In a group: play it as a team game, three guesses per description."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "He ___ borrowing my charger without asking!", options: ["*keeps", "tends", "uses"] },
      { q: "When I was a child, my grandma ___ tell us stories every night.", options: ["*would", "will", "was used to"] },
      { q: "She never talks about her prizes — she's very ___.", options: ["*self-effacing", "opinionated", "overbearing"] },
      { q: "I ___ be scared of dogs, but now I love them.", options: ["*used to", "would", "tend to"] },
    ]),
    box(
      "Phrase of the day: a creature of habit",
      "🐢 Someone who likes to do the same things in the same way every day: *Kenji is a creature of habit — he'll have the same lunch every day for a year.*\n\n*Are you a creature of habit? What would you never change?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Used to & would (6 Minute Grammar).", "V2quIYo41Ig"),
      choose(
        "Choose.",
        "1. My dad [*would/used] take us camping every summer.\n2. I [*used to/would] have a blue bike.\n3. She [*keeps/tends] forgetting my birthday.\n4. He [*'s always/always is] leaving the door open!\n5. Teenagers [*tend to/are tending to] sleep later than adults.\n6. “He forgot again.” — “He [*would/will]! He always does.”\n7. Did you [*use to/used to] play any sports?\n8. My cat [*will/is going to] sit by the door for hours, waiting for me.",
      ),
      gaps(
        "Rewrite the sentences. Use the word in brackets.",
        "1. My brother always borrows my clothes, and it annoys me. (forever) → My brother [is forever borrowing/'s forever borrowing] my clothes.\n2. Usually I go to bed late. (tend) → I [tend to go] to bed late.\n3. He repeatedly interrupts people. (keeps) → He [keeps interrupting] people.\n4. I had long hair when I was a teenager. (used) → I [used to have] long hair when I was a teenager.\n5. Every evening, we walked by the river. (would) → Every evening, we [would walk] by the river.\n6. It's typical of her to sit in the garden for hours. (will) → She [will sit/'ll sit] in the garden for hours.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the adjectives and the meanings.", [
        ["meticulous", "careful about every detail"],
        ["outspoken", "says exactly what they think"],
        ["aloof", "distant and unfriendly"],
        ["gullible", "believes everything"],
        ["overbearing", "tries to control others"],
        ["unassuming", "modest and quiet"],
      ]),
      write(
        "A magazine is looking for articles called “The most unforgettable person I know” (220–260 words). Describe the person's character, their typical habits (the endearing and the annoying ones) and how they used to be — or how they have changed. Use at least five C1 adjectives.",
        220,
        { read: "*Tips:* start with a typical scene (*Every morning, my aunt will…*) · use *tend to, keep -ing, be forever -ing, used to, would* · avoid *nice, good, bad* — choose precise adjectives." },
      ),
      record("Send Zarina's podcast a voice message (1–2 minutes): the habit of someone you live with that drives you mad — and one of your own habits that probably drives them mad. 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
