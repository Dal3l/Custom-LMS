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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.3 What's in a name? — skills lesson: no new grammar; review of question forms and auxiliaries. V: names and identity (a surname, a nickname, be named after, a middle name…); word formation (-ity, -ness, -ism). S: "What does my name say about me?"; should countries control baby names? Main format: "guess the meaning of the name" quiz + a long reading (names and identity around the world, ~580 words) + TED-Ed video (nicknames) + a long listening (Zarina's podcast: Kenji, Laura and Asel about their names, ~3:20).
// Facts checked: Shakespeare, Romeo and Juliet — "What's in a name? That which we call a rose / By any other name would smell as sweet"; "nominative determinism" — the term was made popular by the Feedback column of New Scientist (1994), which noticed a book on polar exploration by Daniel Snowman and an article on incontinence by Splatt and Weedon; the name-letter effect — Jozef Nuttin (1985); Iceland — patronymic names (-son / -dóttir) and a naming committee that approves new first names; Spain — two surnames; South Korea — about one in five people is a Kim; Japan — family name first, and since 2020 the government asks for the family name first in English in official documents; names: Sophia = wisdom (Greek), Peter = stone (Greek), Daniel = "God is my judge" (Hebrew), Asel = honey (Kazakh), Zarina = golden (Persian).
export default lesson("b2-1.3", "What's in a name?", () => [
  section("Warm-up: What does it mean?", [
    box(
      "Today you will…",
      "- discover how names shape who we are 🏷️\n- read and hear stories about names from Iceland to Japan 🌍\n- tell the story of your own name",
    ),
    quiz("Guess the meaning of the name! 🤔", [
      { q: "Sophia (Greek)", options: ["*wisdom", "light", "flower"] },
      { q: "Peter (Greek)", options: ["*stone", "king", "brave"] },
      { q: "Daniel (Hebrew)", options: ["*God is my judge", "son of the sun", "strong as a lion"] },
      { q: "Asel (Kazakh)", options: ["*honey", "moon", "apple"] },
      { q: "Zarina (Persian)", options: ["*golden", "princess", "star"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Do you know what your name means? Who chose it — and why?\n- Do you like your name? Would you ever change it?\n- Have you ever had a nickname? Where did it come from? 😄",
    ),
    tip("If the student doesn't know their name's meaning, look it up together — it makes a great start for the speaking task at the end of the lesson."),
  ]),

  section("Vocabulary: Names and identity", [
    words("Names and identity", [
      ["a first name — a surname (a last name)", "🏷️ your own name — 👪 your family name"],
      ["a middle name", "🔤 a name between the first name and the surname"],
      ["a nickname", "😄 an informal name friends give you"],
      ["be named after someone", "👵 get the same name as someone, e.g. a grandparent"],
      ["a patronymic", "👨‍👦 a name made from your father's first name"],
      ["a maiden name", "💍 a woman's surname before she marries"],
      ["change your name", "✍️ officially take a new name"],
      ["identity", "🪪 who you are"],
      ["a tradition", "🏛️ a custom that people have followed for a long time"],
      ["unique", "🦄 the only one of its kind"],
    ]),
    match("Match.", [
      ["She was named", "after her grandmother."],
      ["My friends gave me", "a nickname at school."],
      ["After the wedding, she kept", "her maiden name."],
      ["In Iceland, many surnames are", "patronymics."],
      ["Choosing a name is an old family", "tradition."],
      ["He wanted a name that was", "unique."],
    ]),
    choose(
      "Choose the right word.",
      "1. Her [*maiden/first] name was Ivanova — now she's Petrova.\n2. He was named [*after/by] his uncle.\n3. My [*nickname/surname] at school was “Professor” because I always read books.\n4. In Iceland, many people have a [*patronymic/middle name] instead of a family surname.\n5. I'd like to [*change/exchange] my name — I've never liked it.\n6. Everyone's fingerprints are [*unique/common].",
    ),
    gaps(
      "Word formation: complete with the noun form.",
      "1. Your name is part of your [identity]. (identify)\n2. He has a great sense of [humor/humour]. (humorous)\n3. Her [kindness] made everyone feel at home. (kind)\n4. I love the [popularity] of old names again. (popular)\n5. There's a [similarity] between the two names. (similar)\n6. [Happiness] is more important than money. (happy)\n7. The [creativity] of some parents is amazing! (creative)\n8. [Tourism] is the main industry here. (tour)",
    ),
  ]),

  section("Reading: What's in a name?", [
    tip("A long text (~580 words). First reading — 5 minutes: *Which fact about names surprised you most?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The phrase “nominative determinism” became popular thanks to a magazine column.", true],
        ["Scientists have proved that names decide people's jobs.", false],
        ["People tend to like the letters in their own names.", true],
        ["In Iceland, parents can choose any first name they like.", false],
        ["In Spain, people usually have two surnames.", true],
        ["In Japan, the family name traditionally comes first.", true],
        ["The writer thinks names are completely unimportant.", false],
      ],
      {
        read: [
          "## 🏷️ What's in a name?",
          "\"What's in a name? That which we call a rose / By any other name would smell as sweet.\" When Shakespeare's Juliet said these words, she meant that names don't matter — only people do. More than four hundred years later, scientists, governments and parents around the world seem to disagree.",
          "**Destined for the job?** In 1994, the \"Feedback\" column of the magazine *New Scientist* noticed something funny. A new book about polar exploration had been written by a man called Daniel Snowman, and an article about bladder problems had been published by two doctors called Splatt and Weedon. Readers started sending in their own examples, and the column gave the idea a name: *nominative determinism* — the theory that people are drawn to jobs that fit their names. Think of the sprinter Usain Bolt. Is it just coincidence? Probably — most researchers think the evidence is weak. But the stories are so much fun that people keep collecting them.",
          "**The letters we love.** There is, however, a stranger effect that has better evidence. In 1985, the Belgian psychologist Jozef Nuttin discovered that people tend to like the letters in their own names more than other letters. This *name-letter effect* has been found in many countries. It doesn't decide your life, but it does show how closely our names are connected to how we see ourselves.",
          "**Rules and traditions.** In many countries, naming a child is not only a family decision. In Iceland, most people don't have a family surname at all. Instead, they have a patronymic: if your father is called Jón, you're Jónsson (Jón's son) or Jónsdóttir (Jón's daughter). Iceland even has a naming committee that must approve new first names, partly to make sure they fit the Icelandic language. In Spain, people usually carry two surnames — one from each parent — and women don't change their names when they marry.",
          "In South Korea, the opposite problem exists: there are relatively few surnames, and about one in five people is a Kim. Imagine a class where half the students share three surnames! In Japan, as in Korea and Kazakhstan, the family name traditionally comes first, and in 2020 the Japanese government asked for this order to be used in English in official documents too — so the prime minister became \"Abe Shinzo\" rather than \"Shinzo Abe\". And in Kazakhstan, more and more people are choosing new forms of their surnames and patronymics, such as *-uly* (son) and *-kyzy* (daughter), instead of the Russian-style *-ov* and *-ova*, as a way of expressing their identity.",
          "**Who are you, really?** Names can also change during a life. People take a partner's name, go back to a maiden name, adopt a nickname that feels more like them, or translate their name when they move abroad. Many international students, for example, choose an English name because they're tired of hearing their real name pronounced wrongly — while others insist on their original name because it's part of who they are.",
          "So, was Juliet right? A rose would certainly smell as sweet with another name. But people are not roses. Our names connect us to our parents, our languages and our history — and the way others say them can make us feel welcome or invisible. Perhaps the best thing we can do is simple: ask people how they'd like to be called, and learn to say it right. 🌹",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why does the writer mention Daniel Snowman and Usain Bolt?", options: ["*as examples of names that match people's work", "as famous people who changed their names", "as scientists who studied names"] },
      { q: "What does the writer say about nominative determinism?", options: ["*The stories are fun, but the evidence is weak.", "It has been proved many times.", "It only works in English."] },
      { q: "If an Icelandic woman's father is called Jón, her surname is probably…", options: ["*Jónsdóttir", "Jónsson", "the same as her mother's"] },
      { q: "Why are some people in Kazakhstan changing the form of their surnames?", options: ["*to express their identity", "because the government made them", "to make them easier to pronounce in English"] },
      { q: "What is the writer's final advice?", options: ["*Ask people what they'd like to be called and say it correctly.", "Choose an English name when you go abroad.", "Never change your name."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. something that happens by chance: a [coincidence]\n2. information that shows something is true: [evidence]\n3. officially accept or agree to: [approve]\n4. a group of people chosen to make decisions: a [committee]\n5. say very firmly that something must happen: [insist]\n6. impossible to see; not noticed by others: [invisible]",
    ),
    match("Names around the world: match the country and the fact from the article.", [
      ["Iceland", "Many surnames end in -son or -dóttir."],
      ["Spain", "People usually have two surnames."],
      ["South Korea", "About one in five people is a Kim."],
      ["Japan", "The family name comes first, also in official English documents."],
      ["Kazakhstan", "Some people now use -uly and -kyzy in their names."],
      ["Belgium", "A psychologist found the name-letter effect here."],
    ]),
  ]),

  section("Video: Birth of a nickname", [
    video("Watch: TED-Ed — Birth of a nickname (John McWhorter).", "KA7mpOvTgs8"),
    text(
      "After the video: talk about it.",
      "- What surprised you about how English nicknames were born?\n- How are nicknames made in your language? Give three examples.\n- Is it OK to give someone a nickname they don't like? Where's the line between a joke and bullying?",
    ),
    tip("Ask the student to retell one example from the video in their own words before the discussion."),
  ]),

  section("Listening: The story of my name", [
    tip("A long listening — about 3 minutes 20 seconds. Zarina's podcast is back! Her guests are Kenji, Laura and Asel. First listen: *Who has the most surprising name story?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast. Three guests tell the stories of their names.",
      "**Zarina:** Hello, and welcome to a new season of my podcast! Today's topic is something we all have but rarely think about: our names. And I'll start with mine. Zarina comes from Persian, and it means \"golden\". My mother chose it because I was born in autumn, when all the trees in Almaty were gold. Now, my first guest is Kenji. Kenji, is that your first name or your family name?\n\n**Kenji:** It's my first name. My family name is Tanaka. In Japan, the family name comes first, so at home I'm Tanaka Kenji. But when I moved to Almaty, everyone called me \"Mr. Kenji\", which is a bit funny for a Japanese person. It's like calling someone \"Mr. John\".\n\n**Zarina:** Did you correct them?\n\n**Kenji:** At first, yes. Then I gave up. Now I actually like it. \"Mr. Kenji\" sounds friendly. And here's another strange thing: the meaning of a Japanese name depends on how you write it. The same sound can be written with different characters. My parents chose characters that mean \"healthy\" and \"second son\". So my name is basically a medical report and a position in the family!\n\n**Zarina:** I love that. Laura, what about you?\n\n**Laura:** Mine's much less exciting! Laura is a very common name in Britain. There were three Lauras in my class at school, so everyone used our surnames instead. I was \"Bennett\" for seven years. But I do have a middle name, Margaret, after my grandmother.\n\n**Zarina:** Do you like it?\n\n**Laura:** I didn't, when I was a teenager. I thought it sounded so old-fashioned. I used to hide it on every form. Now I'm proud of it. My grandmother was a nurse during a very difficult time, and she was the bravest person I've ever known.\n\n**Zarina:** That's beautiful. And has anyone here ever wanted to change their name?\n\n**Laura:** Actually, in Britain you can change your name quite easily. A friend of mine changed hers to the name of her favorite band's singer when she was eighteen. She regretted it two years later.\n\n**Zarina:** What was the band?\n\n**Laura:** I promised her I'd never tell anyone!\n\n**Zarina:** Ha! Asel, your turn.\n\n**Asel:** My name means \"honey\" in Kazakh. Which is perfect, because I own two bakeries!\n\n**Zarina:** Is that why you became a baker?\n\n**Asel:** People always ask me that! No, I worked in a bank for eight years first. But my customers love the story. I even put honey cake on the menu because of my name, and it's our best-seller.\n\n**Zarina:** Who chose your name?\n\n**Asel:** My grandfather. In our family, the oldest person chooses the name. My parents wanted to call me something more modern, but nobody argued with Grandpa. And there's another thing: my children's surname is different from mine. When my son was born, we decided to use the form with \"-uly\" — \"son of\" — instead of the old Russian ending. My mother didn't understand it at first, but now she says it sounds right.\n\n**Kenji:** Can I ask something? Didn't anyone ever tease you because of your name?\n\n**Asel:** Of course! At school, boys called me \"Honey Bear\". I hated it then. Now my staff call me that, and I think it's sweet.\n\n**Zarina:** So, a final question for everyone. If you could choose your name again, would you?\n\n**Kenji:** No. I've got used to being \"Mr. Kenji\".\n\n**Laura:** No — I'd just use my middle name more.\n\n**Asel:** Never. Who wouldn't want to be called \"honey\"?\n\n**Zarina:** Thank you all! And listeners — tell us the story of your name. Send us a voice message!",
    ),
    match("Listen and match the people and the facts.", [
      ["Zarina", "Her name was chosen because of the autumn trees."],
      ["Kenji", "His name means “healthy” and “second son”."],
      ["Laura", "She was called by her surname at school."],
      ["Asel", "Her grandfather chose her name."],
      ["Laura's friend", "She changed her name and regretted it."],
      ["Asel's son", "His surname ends in “-uly”."],
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji is Kenji's family name.", false],
      ["Kenji still corrects people who call him “Mr. Kenji”.", false],
      ["Laura liked her middle name when she was a teenager.", false],
      ["Laura's grandmother was a nurse.", true],
      ["Asel's honey cake is the most popular thing on her menu.", true],
      ["Asel still hates the nickname “Honey Bear”.", false],
    ]),
    choose(
      "Review: questions and auxiliaries from the podcast. Choose.",
      "1. Is that your first name [*or/and] your family name?\n2. [*Did you/Do you] correct them?\n3. [*Who chose/Who did choose] your name?\n4. [*Didn't/Don't] anyone ever tease you?\n5. A: I gave up. B: [*Did you?/Do you?] Why?\n6. A: I didn't like my middle name. B: Neither [*did/do] I!",
    ),
  ]),

  section("Module review: questions and auxiliaries", [
    drag(
      "Complete the conversation.",
      "A: [Who] named you, your mum or your dad?\nB: My dad, actually. Do you know what my name [means]?\nA: No. What does it mean?\nB: “Light”. I [do] like it, but nobody can spell it.\nA: Can't they? [Neither] can anyone spell mine!\nB: [Haven't] you ever thought about a nickname?\nA: I have one! Who [told] you about it?",
      ["whom", "mean", "So"],
    ),
    sort("Sort the questions. 🧩", {
      "❓ subject questions (no do / did)": ["Who told you?", "What happened next?", "Which team won?", "Who chose your name?"],
      "❔ object questions (with do / did)": ["Who did you tell?", "What did you do next?", "Which team did you support?", "What did they call you?"],
    }),
  ]),

  section("Let's talk: My name, my story", [
    text(
      "The story of my name 🏷️",
      "Tell your teacher the story of your name in 2 minutes:\n\n- what it means and where it comes from\n- who chose it and why (were you named after someone?)\n- nicknames you've had — and how you felt about them\n- would you change it? Why / why not?\n\nThen discuss:\n- Should governments decide which baby names are allowed, like in Iceland?\n- Is it better to keep your own name abroad or to use an easier one?\n- Should women (and men!) change their surname when they marry?",
    ),
    tip("In a group: students ask each other follow-up questions using every question type from the module. Encourage reactions: *Were you? Really? So was I!*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "My daughter was named ___ my mother.", options: ["*after", "by", "for"] },
      { q: "A name made from your father's name is a ___.", options: ["*patronymic", "nickname", "maiden name"] },
      { q: "In Iceland, new first names must be ___ by a committee.", options: ["*approved", "approached", "proved"] },
      { q: "A: I don't have a middle name. B: Neither ___ I.", options: ["*do", "am", "have"] },
    ]),
    box(
      "Phrase of the day: make a name for yourself",
      "⭐ **Make a name for yourself** — become well known because of your work or talent.\n\n*Madina is making a name for herself as a designer.* Who in your town has made a name for themselves?",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. I was named [after] my grandfather.\n2. Her maiden [name] was Petrova.\n3. At school everyone called me by my [nickname/surname].\n4. In Japan, the family name comes [first].\n5. Your name is an important part of your [identity].\n6. It's an old family [tradition] to choose names from history.",
      ),
      choose(
        "Choose.",
        "1. [*Who gave/Who did give] you that nickname?\n2. What [*does your name mean/means your name]?\n3. Do you know where [*your name comes/does your name come] from?\n4. A: I've never had a nickname. B: [*Haven't you?/Didn't you?]\n5. A: I love my name. B: So [*do/am] I!\n6. I [*do/am] like your name — it's really unusual!",
      ),
      trueFalse("Correct or not?", [
        ["She was named after her grandmother.", true],
        ["Who did give you this name?", false],
        ["Do you know what does your name mean?", false],
        ["What are you interested in?", true],
        ["A: I don't like my surname. B: Neither do I.", true],
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Write an article for a website called “Names of the World” (140–190 words): “The story of my name”. Explain what your name means, who chose it, any nicknames, and what your name means to you now.", 140, {
        read: "*Tip:* start with a question that gets the reader interested (*Have you ever wondered…?*), use 3–4 paragraphs, and finish with your opinion.",
      }),
      record("Send a voice message to Zarina's podcast: the story of your name (1–2 minutes). 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
