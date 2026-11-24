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
  words,
  write,
} from "../../kit";

// 7.2 Let me decide — G: make / let + verb (no to), allow / want / ask / tell + someone + to. V: family and parenting (strict, curfew, chores, pocket money, ground…). S: discuss strict vs free families. Main format: a "parent or teenager?" warm-up + a long listening (a family meeting: Arman and Daniyar negotiate rules, ~1.5 min) + a reading (three parents, three countries, ~330 words) + a discussion. Video at home.
export default lesson("b1-7.2", "Let me decide", () => [
  section("Warm-up: Who said it?", [
    box(
      "Today you will…",
      "- talk about family rules and freedom 🏠\n- use *make, let, allow*: *My parents **let me** stay out late. They **made me** tidy my room.* 🔑\n- discuss strict and free families ⚖️",
    ),
    sort("Who usually says it — a parent or a teenager? 👨‍👩‍👦", {
      "👨‍👩‍👦 parent": ["Tidy your room!", "Because I said so!", "Not until you've finished your homework.", "Who are you going out with?", "Put your phone away at dinner."],
      "🧑 teenager": ["Just five more minutes!", "Everyone else is allowed to go!", "You never let me do anything!", "I'm not a child anymore!", "Can I have some money?"],
    }),
    text(
      "Talk to your teacher.",
      "- Which of these did you hear (or say) most often at home? 😄\n- What was the strictest rule in your family when you were a teenager? Did you always follow it?\n- What rule from your childhood do you think was actually right?",
    ),
    tip("Read some phrases dramatically, in a parent's and a teenager's voice — the student will laugh and remember them. Share a rule from your own childhood."),
  ]),

  section("Vocabulary: Family rules", [
    words("Family and parenting", [
      ["strict — easy-going", "👮 with many rules — 😌 relaxed, few rules"],
      ["a curfew", "🌙 the time you must be home by", "My curfew was 10 p.m."],
      ["chores", "🧹 jobs at home: cleaning, washing up…"],
      ["pocket money", "💵 money parents give children every week or month"],
      ["ground (someone)", "🚫🏠 punish a child by not letting them go out", "I was grounded for a week."],
      ["spoil (a child)", "🍭 give a child everything they want"],
      ["bring up", "👨‍👩‍👧 raise and educate a child", "She was brought up by her grandparents."],
      ["respect", "🙇 think someone is important and listen to them"],
      ["independent", "🦅 able to do things without help"],
      ["give in", "🏳️ agree after saying no, because someone insists"],
      ["set rules", "📏 decide the rules"],
      ["a generation gap", "👵↔️👧 different ideas between older and younger people"],
    ]),
    match("Match.", [
      ["set", "rules"],
      ["do", "the chores"],
      ["get", "pocket money"],
      ["be home before", "the curfew"],
      ["spoil", "a child"],
      ["be grounded", "for a week"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. My parents were very [strict] — no parties, no phones in my room! 👮\n2. I had to be home by 9 p.m. — that was my [curfew]. 🌙\n3. Every Saturday I did the [chores]: cleaning, shopping and washing up. 🧹\n4. I got 1,000 tenge [pocket] money a week.\n5. When I came home at midnight, I was [grounded] for two weeks.\n6. Grandparents often [spoil] their grandchildren with sweets. 🍭\n7. My son is 17 and very [independent] — he cooks for himself.\n8. My daughter asked for a dog for months, and in the end we gave [in]. 🐶",
    ),
    quiz("Choose the right word.", [
      { q: "My parents were very ___ — I could do almost anything.", options: ["*easy-going", "strict", "grounded"] },
      { q: "She was brought ___ by her grandmother in a village.", options: ["*up", "in", "out"] },
      { q: "In our family, the kids must ___ older people.", options: ["*respect", "spoil", "ground"] },
      { q: "Washing up and cleaning are ___.", options: ["*chores", "curfews", "pocket money"] },
    ]),
  ]),

  section("Listening: The family meeting", [
    tip("A listening — about 1.5 minutes. You know this family: Arman, his son Daniyar (16) and his daughter Madina (19). First listen: *What does Daniyar want? Does he get it?* Second listen: the tasks."),
    ...listening(
      "Listen. Daniyar wants more freedom. The family has a meeting.",
      "**Arman:** OK, Daniyar, you wanted a family meeting. What's this about?\n\n**Daniyar:** Three things. First, my curfew. You make me come home at nine, even on Saturdays. All my friends' parents let them stay out until eleven.\n\n**Arman:** All your friends? Every single one?\n\n**Daniyar:** Well… most of them. I'm sixteen, Dad. I'm not a child.\n\n**Madina:** He's got a point, Dad. You let me stay out until eleven when I was sixteen.\n\n**Arman:** Hmm. OK. What's the second thing?\n\n**Daniyar:** My phone. You don't allow me to have it in my room at night.\n\n**Arman:** That rule stays. You used to play games until three in the morning, and then you couldn't get up for school.\n\n**Daniyar:** That was last year! Now I'm studying for the scholarship. I need my phone for my alarm.\n\n**Arman:** Buy a real alarm clock. Grandma has an old one — she'll be happy to give it to you. 😄\n\n**Daniyar:** Fine… And the third thing: I want to go on a hiking trip with my friends in the mountains. Three days. Without adults.\n\n**Arman:** Without adults? No way. Remember that young man who went missing in the mountains last year?\n\n**Madina:** Ruslan? Dad, he's a rescuer now. Actually, he leads trips for teenagers. Daniyar could go with his group.\n\n**Arman:** Hmm. If an experienced guide is there, I might let you go. But you have to call us every evening.\n\n**Daniyar:** Deal! So, curfew at eleven?\n\n**Arman:** Ten thirty on Saturdays. And you'll do more chores — I want you to cook dinner twice a week.\n\n**Daniyar:** Cook? Dad!\n\n**Madina:** That's fair. Dad made me do the washing up for two years. 😄\n\n**Arman:** Then we have an agreement. Meeting finished!",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Daniyar: You [make] me come home at nine.\n2. Daniyar: All my friends' parents [let] them stay out until eleven.\n3. Daniyar: You don't [allow] me to have it in my room at night.\n4. Arman: If an experienced guide is there, I might [let] you go.\n5. Arman: I [want] you to cook dinner twice a week.\n6. Madina: Dad made me [do] the washing up for two years.",
    ),
    quiz("Listen and choose.", [
      { q: "What was Daniyar's curfew before the meeting?", options: ["*9 p.m.", "10:30 p.m.", "11 p.m."] },
      { q: "Why isn't Daniyar allowed to have his phone in his room at night?", options: ["*He used to play games until 3 a.m.", "It's too expensive.", "His sister uses it."] },
      { q: "Who will lead the hiking trip?", options: ["*Ruslan, the rescuer", "Arman", "Madina"] },
      { q: "What is Daniyar's new curfew on Saturdays?", options: ["*10:30 p.m.", "11 p.m.", "9 p.m."] },
      { q: "What extra chore will Daniyar do?", options: ["*cook dinner twice a week", "wash the car", "walk the dog"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina supports Daniyar about the curfew.", true],
      ["Arman agrees to let Daniyar have his phone in his room.", false],
      ["Daniyar is studying for a scholarship.", true],
      ["Arman lets Daniyar go hiking without adults.", false],
      ["Daniyar has to call his parents every evening on the trip.", true],
      ["Madina thinks the new chore is unfair.", false],
    ]),
  ]),

  section("Grammar: make, let, allow", [
    quiz("Notice the rule 🔍 Look: “You make me come home at nine.” “Parents let them stay out.” “You don't allow me to have it.” “I want you to cook dinner.”", [
      { q: "After make / let + someone we use…", options: ["*the base verb (no to): make me come", "to + verb: make me to come", "-ing: make me coming"] },
      { q: "After allow / want + someone we use…", options: ["*to + verb: allow me to have", "the base verb: allow me have", "-ing"] },
      { q: "Which one means “force”?", options: ["*make", "let", "allow"] },
    ]),
    table("make-let-allow"),
    choose(
      "Choose the right form.",
      "1. My parents let me [*stay/to stay] up late on Fridays.\n2. Our teacher made us [*rewrite/to rewrite] the essay. ✍️\n3. We weren't allowed [*to use/use] our phones at school.\n4. Mom wants me [*to study/study] medicine.\n5. Will you let me [*borrow/to borrow] your car? 🚗\n6. The boss made everyone [*work/to work] on Saturday.\n7. Are children allowed [*to swim/swim] here without an adult?\n8. My dad told me [*to be/be] careful.",
    ),
    gaps(
      "Rewrite the sentences. Use the word in brackets.",
      "1. My parents said I could go to the party. → My parents [let me go] to the party. (let)\n2. The teacher said we had to stay after class. → The teacher [made us stay] after class. (make)\n3. Phones are not permitted in the exam. → Students [aren't allowed to/are not allowed to] use phones in the exam. (allowed)\n4. “Please call me,” Mom said. → Mom [asked me to call] her. (ask)\n5. Dad forced me to eat the soup. → Dad [made me eat] the soup. (make)\n6. My boss says I can work from home. → My boss [lets me work] from home. (let)",
    ),
    drag(
      "Complete Madina's post.",
      "When I was a teenager, my dad was quite strict. He [made] me come home by ten, and I wasn't [allowed] to have a boyfriend! 😄 But he always [let] me choose my own clothes and my own university. He [wanted] me [to] be independent. Now I understand why he [made] me do so many chores — I can cook, clean and fix things. Thanks, Dad! ❤️",
      ["let me to", "allow", "made me to"],
    ),
    order("Make sentences.", [
      "My parents let me stay up late.",
      "The teacher made us rewrite the essay.",
      "We weren't allowed to use our phones.",
      "Mom wants me to study medicine.",
      "Dad told me to be careful.",
    ]),
  ]),

  section("Reading: Three parents, three countries", [
    trueFalse(
      "Read about three parents. True or false?",
      [
        ["Yuki's children are allowed to walk to school alone.", true],
        ["Carlos lets his children decide their own bedtime.", false],
        ["In Carlos's family, children often stay up late at family dinners.", true],
        ["Sophie makes her children ask before they use their phones.", false],
        ["Sophie believes children should learn to manage their own time.", true],
      ],
      {
        read: [
          "## 🌍 Three parents, three countries",
          "**🇯🇵 Yuki, Tokyo.** \"In Japan, many children walk to school or take the train alone from the age of six or seven. My son is eight, and I let him go to school with his friends. People from other countries are often surprised. But I want my children to be independent. They also have to do chores — they clean the classroom at school too, so they're used to it.\"",
          "**🇪🇸 Carlos, Madrid.** \"In our family, dinner is late — sometimes at ten in the evening — and children are part of it. I don't make my kids go to bed at eight like some parents do. On weekends, they often stay up until midnight at family dinners with their grandparents and cousins. But during the week we have rules: no phones at the table, and homework before games.\"",
          "**🇬🇧 Sophie, London.** \"My kids are 13 and 15. I don't check their phones, and I don't make them ask before they use them. Instead, we agreed on some rules together: no screens after ten, and phones stay downstairs at night. I think children need to learn to manage their own time. If I control everything now, how will they manage at university?\"",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who…?", [
      { q: "…lets a young child travel to school without an adult?", options: ["*Yuki", "Carlos", "Sophie"] },
      { q: "…has family dinners that finish very late?", options: ["*Carlos", "Yuki", "Sophie"] },
      { q: "…agreed on rules together with the children?", options: ["*Sophie", "Yuki", "Carlos"] },
      { q: "…says children also clean at school?", options: ["*Yuki", "Sophie", "Carlos"] },
    ]),
  ]),

  section("Let's talk: Strict or free?", [
    text(
      "Discuss: Strict or easy-going? ⚖️",
      "- Which parent from the reading is most similar to your parents? Which would you like to be like?\n- At what age should parents let children…\n  🚶 walk to school alone? · 📱 have their own phone? · 🌙 stay out until midnight? · ✈️ travel without adults?\n- Should parents make children do chores? Should they pay them for it? 💵\n- Was Arman fair in the family meeting? What would you decide?",
    ),
    text(
      "Role-play: The family meeting 🏠",
      "You're a 16-year-old; your teacher is your parent (or swap!). Ask for ONE thing: a later curfew, a trip with friends, a pet, more pocket money…\n\nUse: *Could you let me…? Would you allow me to…? All my friends are allowed to… What if I…?*\n\nThe parent can say yes, no — or make a deal: *I'll let you…, but you have to…* 🤝",
    ),
    tip("In the role-play, be a tough but fair parent: say no first and make the student give reasons. Then swap roles — the student is the parent. Note phrases with make / let / allow."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "My parents let me ___ out late.", options: ["*stay", "to stay", "staying"] },
      { q: "We aren't allowed ___ here.", options: ["*to park", "park", "parking"] },
      { q: "the time you must be home by =", options: ["*a curfew", "a chore", "pocket money"] },
      { q: "give a child everything they want =", options: ["*spoil", "ground", "bring up"] },
    ]),
    box(
      "Phrase of the day: house rules",
      "🏠 **My house, my rules!** — what parents say when they don't want to discuss a rule.\n\n*“Why can't I have my phone at dinner?” — “My house, my rules!”* 😄",
    ),
  ]),

  homework(
    [
      video("Watch: let and make — how to use them.", "rDPXB_D72s8"),
      choose(
        "Choose.",
        "1. My mom never let me [*watch/to watch] horror films.\n2. The coach made us [*run/to run] ten laps.\n3. Are we allowed [*to take/take] photos in the museum?\n4. I want you [*to tell/tell] me the truth.\n5. They don't let their kids [*eat/eating] sweets before dinner.\n6. The doctor told him [*to rest/rest] for a week.\n7. Please let me [*help/to help] you!\n8. My boss made me [*stay/to stay] late again. 😩",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. My parents were quite [strict] — lots of rules!\n2. What time was your [curfew] when you were 16?\n3. I was [grounded] for a week after I broke the window.\n4. Doing the [chores] every Saturday was boring.\n5. She was brought [up] by her aunt.\n6. Grandparents love to [spoil] their grandchildren.",
      ),
      write("Write about the rules in your family when you were a teenager (100+ words). What did your parents make you do? What did they let you do? What weren't you allowed to do? Do you think they were right?", 100, {
        read: "*Example:* My parents were quite strict, but fair. They made me do my homework before I was allowed to watch TV, and I had to help my mom with the chores every weekend. 🧹 They let me choose my own friends and hobbies, but I wasn't allowed to stay out after ten. My dad always wanted me to call him when I arrived somewhere. At the time I hated it, but now I understand…",
      }),
      record("Record 1 minute: If you become (or are) a parent, what rules will you have? What will you let your kids do? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
