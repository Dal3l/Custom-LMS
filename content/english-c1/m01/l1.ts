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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.1 I'd always assumed… — G: perfect forms for looking back from any point (past perfect simple / continuous, future perfect simple / continuous, perfect participle, perfect infinitive, would have done in narrative). V: identity and self-image (self-image, come into your own, a sense of belonging…). S: tell the story of a turning point. Main format: quotes about change + a long reading (the "end of history illusion", ~760 words) + a long listening (Daniyar in Seoul calls his sister Madina, ~3:30) + a TED video in class.
// Facts checked: Quoidbach, Gilbert & Wilson, "The End of History Illusion", Science (2013) — over 19,000 people aged 18 to 68; at every age people underestimated how much they would change in the next ten years; the band question — on average $129 to see their current favorite band in ten years vs $80 to see today the band they loved ten years ago (Dan Gilbert, TED 2014 "The psychology of your future self"); Gilbert's line "Human beings are works in progress that mistakenly think they're finished" (same talk). Quotes: Heraclitus' river (as reported by Plato, Cratylus); "The unexamined life is not worth living" (Socrates in Plato's Apology); "it's no use going back to yesterday, because I was a different person then" (Alice, in Lewis Carroll's Alice's Adventures in Wonderland, 1865, ch. 10); Carl Rogers, "On Becoming a Person" (1961) — "when I accept myself just as I am, then I can change"; "Know thyself" — inscribed at the temple of Apollo at Delphi; "This above all: to thine own self be true" — Polonius, Hamlet. David Bowie's "Changes" — on the album Hunky Dory (1971).
// Warm-up format: complete the quotes (match). Characters: Dana (works remotely for a Barcelona publisher, lives in Almaty near Asel's bakery), Daniyar (a student in Seoul), his sister Madina (her design studio), their grandmother Saule.
export default lesson("c1-1.1", "I'd always assumed…", () => [
  section("Warm-up: Words about change", [
    box(
      "Today you will…",
      "- find out why we're so bad at predicting who we'll become 🔮\n- look back from any point in time: *I'd always assumed… By then I'll have been… Having been raised…* ⏪\n- tell the story of a turning point in your life 🧭",
    ),
    match("Complete the famous words about who we are. 🤔", [
      ["Know…", "…thyself. (an inscription at the temple of Apollo at Delphi)"],
      ["No one can step…", "…into the same river twice. (Heraclitus, as reported by Plato)"],
      ["The unexamined life…", "…is not worth living. (Socrates, in Plato's Apology)"],
      ["It's no use going back to yesterday,…", "…because I was a different person then. (Alice in Wonderland)"],
      ["When I accept myself just as I am,…", "…then I can change. (Carl Rogers, psychologist)"],
      ["This above all:…", "…to thine own self be true. (Shakespeare, Hamlet)"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which quote do you like most? Which one do you disagree with?\n- Think of yourself ten years ago. Name **three things** that have changed — and one thing that hasn't.\n- Do you think you'll change as much in the next ten years? Why / why not?",
    ),
    tip("Keep the last question in mind: the reading shows that most people say “not much” — and are wrong. Bonus: David Bowie's song “Changes” (1971) is about the same idea. 🎸"),
  ]),

  section("Vocabulary: Who am I?", [
    words("Identity and self-image", [
      ["self-image", "🪞 the idea you have of yourself", "Her self-image changed completely after she started her own studio."],
      ["a sense of belonging", "🏡 the feeling that you are part of a place or group"],
      ["come into your own", "🌱 start to show your real abilities and be successful"],
      ["find your feet", "👣 get used to a new place or situation"],
      ["a turning point", "🔀 a moment when things start to change"],
      ["in hindsight", "🔙 looking back now, with what you know today"],
      ["outgrow", "📏 become too old or mature for something"],
      ["reinvent yourself", "🔄 change your job, style or life completely"],
      ["true to yourself", "🧭 acting according to your own values"],
      ["deep down", "💭 in your real feelings, even if you don't show them"],
      ["set in your ways", "🧱 not willing to change your habits or opinions"],
      ["a work in progress", "🚧 something (or someone) still changing and developing"],
    ]),
    match("Match the people and the phrases.", [
      ["“After a year in a new city, I finally know where everything is.”", "find your feet"],
      ["“At forty, she left the bank and opened a bakery.”", "reinvent yourself"],
      ["“That trip changed everything for me.”", "a turning point"],
      ["“Grandpa has eaten the same breakfast for fifty years.”", "set in your ways"],
      ["“He was quiet at school, but at university he really started to shine.”", "come into your own"],
      ["“I don't like the music I loved at fourteen any more.”", "outgrow"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. In [hindsight], leaving that job was the best decision I've ever made.\n2. Deep [down], I always knew I wanted to be a teacher.\n3. Joining the choir gave her a real sense of [belonging].\n4. Don't change for other people — stay [true] to yourself.\n5. I'm not perfect yet. I'm a work in [progress]!\n6. Social media can damage teenagers' self-[image].",
    ),
    tip("Pronunciation: *HIND-sight* (stress on the first part), *re-in-VENT*, *out-GROW*. Ask the student to use three phrases about their own life."),
  ]),

  section("Reading: You're not finished yet", [
    tip("A long text (~760 words). First reading — 6 minutes: *What is the “end of history illusion”, and why does it matter?* Then the tasks. Ask the student to find five perfect forms and say what point in time each one looks back from."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The study included people of very different ages.", true],
        ["Older people were the only ones who underestimated future change.", false],
        ["People were willing to pay more to see their current favorite band in the future.", true],
        ["The writer had planned to move to Almaty for many years.", false],
        ["According to the article, the illusion can lead to expensive decisions.", true],
        ["The writer thinks we should stop making long-term plans.", false],
        ["The writer suggests imagining your future self as a slightly different person.", true],
      ],
      {
        read: [
          "## 🔮 You're not finished yet",
          "*by Dana, an editor who works for a publisher in Barcelona — from a flat in Almaty*",
          "Ten years ago, if you had asked me where I would be today, I would have given you a very confident answer. I had always assumed that I would work in an office, that I would hate cooking, and that I would never, ever live anywhere cold. Today I work from home, I bake bread on Sundays, and I am writing this with a scarf around my neck, in a city where it snows in April. My younger self would have been horrified. She would also, I think, have been secretly delighted.",
          "It turns out I am not unusual. In 2013, three psychologists — Jordi Quoidbach, Daniel Gilbert and Timothy Wilson — published a study in the journal *Science* with a wonderful name: *The End of History Illusion*. They asked more than 19,000 people, aged between 18 and 68, two kinds of questions. Some people were asked how much their personality, values and tastes had changed over the past ten years. Others were asked how much they expected them to change over the next ten.",
          "The results were remarkably consistent. At every age, people admitted that they had changed a great deal in the past decade. Yet at every age, they predicted that they would change only a little in the decade to come. An eighteen-year-old and a fifty-year-old made the same mistake: each of them seemed to believe that they had, at last, become the person they would be for the rest of their lives. History, as far as they were concerned, had ended.",
          "My favorite part of the research is about music. The psychologists asked people how much they would pay *today* to see their favorite band from ten years ago in concert. Then they asked how much they would pay to see their *current* favorite band in ten years' time. On average, people were prepared to pay about $129 for the future concert, but only about $80 for the band they had loved a decade earlier. In other words, we know perfectly well that our taste in music has changed — but we are sure that it won't change again. Anyone who has ever been embarrassed by an old playlist knows exactly how wrong that is.",
          "Why do we do this? One explanation is simply that remembering is easier than imagining. When I look back, I can see the old me quite clearly: the clothes, the opinions, the friends. When I try to look forward, I see nothing in particular, and \"nothing in particular\" easily becomes \"nothing different\". Another explanation is more flattering. Most of us like the person we are now. Believing that we will stay this way is comforting; believing that we will turn into a stranger is not.",
          "The illusion is not only an interesting puzzle. It has a price. We get tattoos that we'll want to remove, we sign up for expensive training in subjects that will bore us, and we make promises on behalf of a future self who never agreed to them. In his TED talk about the study, Gilbert put it in one memorable line: \"Human beings are works in progress that mistakenly think they're finished.\"",
          "So what should we do? Not, I think, stop planning. I would never have moved to Almaty if I hadn't made plans — even if they were the wrong ones. Having spent a year preparing to move to a completely different city, I found myself in a new job that happened to be remote, and a friend said, \"Come for a month.\" That month has now lasted four years. By next spring, I will have been living around the corner from my favorite bakery for longer than I lived in my last three flats combined.",
          "What helps, perhaps, is to treat our future self as a slightly unfamiliar person — someone we like, but whose tastes we don't fully know. Before making a big decision, it is worth asking not \"Will I want this?\" but \"Will the person I will have become want this?\" It is also worth leaving that person a few doors open: a little money saved, a skill or two practiced, a friendship kept warm.",
          "In hindsight, the version of me who was so sure about everything wasn't wrong to make plans. She was only wrong to think that she was finished. I suspect that, ten years from now, I will look back at this article and smile at how certain it sounds. I hope so. It will mean I have kept changing. 🌱",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why does Dana say her younger self would have been “secretly delighted”?", options: ["*Her life turned out more interesting than she had expected.", "She has become rich and famous.", "All her plans came true."] },
      { q: "What was “remarkably consistent” in the study?", options: ["*People of all ages expected to change less than they had changed before.", "Older people changed the most.", "Everyone's taste in music stayed the same."] },
      { q: "What does the band example show?", options: ["*We accept that we have changed but don't expect to change again.", "People prefer old music to new music.", "Concerts are more expensive than they used to be."] },
      { q: "Which explanation for the illusion does Dana call “more flattering”?", options: ["*We like who we are now, so we want to stay the same.", "Remembering is easier than imagining.", "We don't have enough information about the future."] },
      { q: "What is Dana's main advice?", options: ["*Plan, but leave room for the person you will become.", "Never make long-term plans.", "Always follow your first plan."] },
    ]),
    gaps(
      "Find words and phrases in the article.",
      "1. very shocked and upset: [horrified]\n2. very happy: [delighted]\n3. in an unusual and surprising way, very: [remarkably]\n4. making you feel good about yourself: [flattering]\n5. for another person, in their place: on [behalf] of\n6. easy to remember: [memorable]",
    ),
  ]),

  section("Video: The psychology of your future self", [
    video("Watch: Dan Gilbert — The psychology of your future self (TED, ~7 minutes).", "XNbaR54Gpj4"),
    text(
      "After the video: talk about it.",
      "- What does Gilbert say about the difference between remembering and imagining?\n- Which example from the talk did you find most convincing?\n- Name one decision you made years ago that your present self disagrees with.\n- What would you like your future self to thank you for?",
    ),
    tip("Ask the student to explain the “end of history illusion” in 2–3 sentences without looking at the article. Then link the video and the reading: *Both Dana and Gilbert suggest…*"),
  ]),

  section("Grammar: Looking back from any point", [
    quiz("Notice the rule 🔍 Look: “I'd always assumed I would work in an office.” · “By next spring, I will have been living here for four years.” · “Having spent a year preparing, I found…”", [
      { q: "In “I'd always assumed…”, the assuming happened…", options: ["*before another moment in the past", "now", "in the future"] },
      { q: "“By next spring, I will have been living here…” looks back from…", options: ["*a moment in the future", "a moment in the past", "right now"] },
      { q: "“Having spent a year preparing, I found…” — which action came first?", options: ["*spending a year preparing", "finding", "both at the same time"] },
    ]),
    table("perfect-looking-back"),
    choose(
      "Choose the best form.",
      "1. When I finally met her, I realized I [*had seen/saw] her somewhere before.\n2. He was exhausted because he [*'d been working/'d worked] in the garden all day.\n3. By the time you get this letter, I [*will have left/will leave] the country.\n4. In June, Laura [*will have been teaching/will be teaching] in Almaty for six years.\n5. [*Having lived/Living] abroad for ten years, she found her hometown strange.\n6. She seems [*to have forgotten/to forget] our meeting — she isn't answering.\n7. Ten years ago, I [*would never have believed/never believed] that I'd enjoy running.\n8. I'd love [*to have seen/to see] Queen live, but I was born too late. 🎸",
    ),
    gaps(
      "Complete with the right perfect form of the verb in brackets.",
      "1. I [had always assumed/'d always assumed] that I would study law. (always / assume)\n2. By the end of this course, you [will have learned/'ll have learned] over a thousand new words. (learn)\n3. Before she moved to Seoul, she [had been studying/'d been studying] Korean for three years. (study)\n4. [Having grown] up by the sea, he hated living in the city. (grow)\n5. Madina is said [to have designed] over a hundred logos. (design)\n6. By 2030, they [will have been running/'ll have been running] the bakery for ten years. (run)\n7. When we arrived, the concert [had already started/'d already started]. (already / start)\n8. I wish I had known — I [would have come/'d have come] earlier. (come)",
    ),
    tip("Say it right: contracted forms are normal in speech — *I'd always assumed /aɪd/, I'll have been /aɪl əv bɪn/, would have /wʊdəv/*. Practice: *By then I'll have been living here for two years.*"),
  ]),

  section("Grammar: Perfect participles and infinitives", [
    drag(
      "Complete the story with the words.",
      "[Having] finished school, I was sure I knew who I was. I [had] always assumed I'd become a lawyer, like my father. But a year later, I seemed to [have] lost all interest in law. [Having] been raised in a family of lawyers, I felt guilty. By the time I told my parents, I [had] been working at a café for six months. In hindsight, I [would] have saved myself a lot of stress if I had told them earlier.",
      ["being", "has", "will"],
    ),
    order("Make sentences.", [
      "By then I'll have been living here for two years.",
      "Having been raised by my grandmother, I learned to cook early.",
      "I'd always assumed that I would stay in my hometown.",
      "He seems to have changed his mind completely.",
      "Back then, I would never have imagined living abroad.",
    ]),
  ]),

  section("Listening: A call from Seoul", [
    tip("A long listening — about 3 minutes 30 seconds. Daniyar (a student in Seoul) video-calls his sister Madina in Almaty. First listen: *What big decision does Daniyar have to make?* Second listen: the tasks. Ask the student to note four perfect forms they hear."),
    ...listening(
      "Listen to Daniyar's video call with his sister Madina.",
      "**Madina:** There you are! I've been trying to call you all week. Grandma thinks you've forgotten us.\n\n**Daniyar:** Sorry, sorry. It's been exam season. I've basically been living in the library.\n\n**Madina:** You look tired. And different. Did you cut your hair?\n\n**Daniyar:** A friend did. Ji-woo said it would make me look more serious. Anyway, I need to talk to you about something. Before I talk to Mum and Dad.\n\n**Madina:** That sounds ominous.\n\n**Daniyar:** It's good news, I think. The engineering company where I did my summer project has offered me an internship. A paid one. For a year, starting in September.\n\n**Madina:** Daniyar, that's amazing! So why do you look like someone has died?\n\n**Daniyar:** Because it's here. In Seoul. And I'd always assumed I would come back to Almaty after my degree. Everyone had assumed it. Grandma has been telling her friends I'll be home soon for two years.\n\n**Madina:** OK. But what do you want?\n\n**Daniyar:** That's the problem. I don't know any more. When I arrived, I was so homesick. I would call Grandma every evening, remember? I didn't think I would ever feel at home here. And now… I've got friends, I've found my feet, my Korean is actually good. Having struggled so much in the first year, I feel like I've finally come into my own.\n\n**Madina:** So you don't want to leave.\n\n**Daniyar:** Part of me doesn't. But another part of me feels guilty. As if, by staying, I'm saying that home isn't good enough.\n\n**Madina:** Can I tell you something? When I opened the studio, I felt guilty too. Mum and Dad had wanted me to take that job at the agency. They'd been talking about it for months. And I'd been dreaming about my own studio for years. If I had listened to everyone else, I would be sitting in that agency now, designing banners for a bank.\n\n**Daniyar:** And instead you've got four people working for you.\n\n**Madina:** Five, since Monday. My point is, in hindsight, nobody was angry for long. They were just scared. And they're proud now.\n\n**Daniyar:** Grandma would say something wise here.\n\n**Madina:** She already did. I told her you sounded strange on the phone last week, and she said, \"He's not the boy who left. Let him be the man who stays — or the man who comes back. Just not the boy.\"\n\n**Daniyar:** Wow. That's very Grandma.\n\n**Madina:** It is. Look, it's one year. By this time next year, you'll have finished the internship, you'll have been living in Seoul for four years, and you'll know much more about what you want. You won't have closed any doors.\n\n**Daniyar:** You're right. It's just strange. I'd always had this picture of my life: degree, home, job in Almaty, Sunday dinners at Grandma's. And now the picture seems to have changed without asking me.\n\n**Madina:** Pictures do that. Mine has changed three times since I graduated.\n\n**Daniyar:** Really? You always seemed so sure.\n\n**Madina:** I'm good at seeming sure. That's different. A year ago I was sure I'd never hire anyone, because I'd always worked alone. Then I got too many projects and almost had a breakdown. Having learned that lesson, I'm a lot less sure about anything now. It's quite relaxing, actually.\n\n**Daniyar:** OK. I'll talk to Mum and Dad this weekend. Will you be there? For moral support?\n\n**Madina:** I'll bring cake from Asel's. Nobody can be upset with a mouth full of honey cake.\n\n**Daniyar:** Deal. And Madina… thanks. I really needed this.\n\n**Madina:** Anytime. And call Grandma tonight. She's been knitting you a scarf for a month. Apparently, Seoul is cold.\n\n**Daniyar:** It is, actually. Tell her I'll wear it every day.",
    ),
    quiz("Listen and choose.", [
      { q: "Why hasn't Daniyar called his family?", options: ["*He's been busy with exams.", "He's been traveling.", "He's been ill."] },
      { q: "What has Daniyar been offered?", options: ["*a paid one-year internship in Seoul", "a job in Almaty", "a scholarship for a master's degree"] },
      { q: "Why does Daniyar feel guilty?", options: ["*Staying might seem like rejecting home.", "He failed an exam.", "He forgot his grandmother's birthday."] },
      { q: "What does Madina say about her parents' reaction to her studio?", options: ["*They were scared at first but are proud now.", "They are still angry.", "They helped her open it."] },
      { q: "What will Madina bring to the family conversation?", options: ["*a cake from Asel's bakery", "a scarf", "some photos"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ji-woo cut Daniyar's hair.", true],
      ["Daniyar did his summer project at the same company.", true],
      ["In his first year, Daniyar felt at home in Seoul immediately.", false],
      ["Madina now has five people working for her.", true],
      ["Grandma Saule told Daniyar to come home as soon as possible.", false],
      ["Daniyar will talk to his parents at the weekend.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. I'd always [assumed] I would come back to Almaty after my degree.\n2. Having [struggled] so much in the first year, I feel like I've finally come into my own.\n3. If I had listened to everyone else, I [would] be sitting in that agency now.\n4. By this time next year, you'll have [finished] the internship.\n5. And now the picture seems to [have] changed without asking me.\n6. She's been [knitting] you a scarf for a month.",
    ),
  ]),

  section("Let's talk: A turning point", [
    text(
      "Tell the story of a turning point 🧭",
      "Think of a moment that changed you — a move, a person, a failure, a book, a trip. Prepare to talk for **2 minutes**:\n\n- **Before:** *I'd always assumed… / I'd been… for years.*\n- **The moment:** *Then, having…, I suddenly realized…*\n- **After:** *In hindsight… / Back then, I would never have imagined…*\n- **The future:** *By the time I'm…, I'll have…*\n\nYour teacher asks two follow-up questions. Then swap: ask your teacher about *their* turning point. 😊",
    ),
    tip("Let the student speak for the full two minutes without interruptions; note perfect forms (correct and incorrect) and vocabulary from the lesson. Then give feedback: one thing that was great, one thing to improve. In a group: students tell their stories in pairs, then the partner retells it to the group."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "By next year, I ___ here for a decade.", options: ["*will have been working", "will work", "have been working"] },
      { q: "___ the email, she closed her laptop.", options: ["*Having sent", "Having been sent", "Sent"] },
      { q: "I'd always ___ she was older than me.", options: ["*assumed", "assume", "assuming"] },
      { q: "After a few weeks, she started to find her ___.", options: ["*feet", "way", "hands"] },
    ]),
    box(
      "Phrase of the day: a work in progress",
      "🚧 *“Human beings are works in progress that mistakenly think they're finished.”* — Daniel Gilbert\n\n*Which part of you is still “in progress”?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. By the time the police arrived, the thieves [*had disappeared/disappeared].\n2. I [*'ll have finished/'ll finish] the report by Friday — I promise.\n3. [*Having been told/Having told] the news, she called her parents.\n4. They [*'d been arguing/'d argued] for hours when the neighbors complained.\n5. He's said [*to have been/to be] a brilliant student when he was young.\n6. By June, we [*'ll have been living/'ll be living] here for ten years.\n7. I [*would never have guessed/never would guess] that he was a musician.\n8. She claims [*to have met/to meet] Bowie in the 1990s.",
      ),
      gaps(
        "Rewrite the sentences. Use the word in brackets.",
        "1. I thought she was a doctor, but I was wrong. (assumed) → I [had assumed/'d assumed] she was a doctor.\n2. After he had finished the exam, he went to sleep. (having) → [Having finished] the exam, he went to sleep.\n3. We started living here in 2020. Next year it'll be seven years. (been) → Next year we [will have been living/'ll have been living] here for seven years.\n4. It seems that he has lost weight. (seems) → He [seems to have lost] weight.\n5. I didn't imagine I'd become a teacher. (never) → I would [never have imagined] becoming a teacher.\n6. It's a pity I didn't see that concert. (love) → I'd [love to have seen] that concert.",
      ),
      trueFalse("Correct or not?", [
        ["Having been born in Almaty, she knows the mountains well.", true],
        ["By tomorrow, I will have finish the book.", false],
        ["I'd been waiting for an hour when he finally arrived.", true],
        ["She seems to have forgot my name.", false],
        ["By 2030, I'll have been working here for twenty years.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the beginnings and endings.", [
        ["After a few weeks in the new school, he began to find…", "…his feet."],
        ["Looking back now, in…", "…hindsight, I should have stayed."],
        ["At university, she really came into…", "…her own."],
        ["Joining the band gave me a sense…", "…of belonging."],
        ["My grandfather is very set…", "…in his ways."],
        ["At fifty, he decided to reinvent…", "…himself as a chef."],
      ]),
      write(
        "Essay (220–260 words): “People don't really change — they just become more like themselves.” Do you agree? Use examples from your life or from people you know, the ideas from the article, and at least four perfect forms.",
        220,
        { read: "*Plan:* introduction (your view) · paragraph 1 (an example of real change) · paragraph 2 (the opposite view) · conclusion. Useful: *I'd always assumed… / Having… / By the time… / In hindsight…*" },
      ),
      record("Record a 2-minute message to yourself in ten years' time: who you are now, what you hope you'll have done by then, and one thing you hope you won't have changed. 🎤", 150),
    ],
    "Homework: Writing and speaking",
  ),
]);
