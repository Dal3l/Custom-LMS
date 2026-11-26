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

// 8.2 As long as you… — G: alternatives to if: unless, as long as, provided / providing (that), on condition that, supposing / suppose, otherwise, in case (≠ if); review of zero, first, second and third conditionals. V: medicine (a side effect, a breakthrough, a cure, a symptom, a dose, a prescription, a clinical trial, recover, contagious, an antibiotic); word formation (diagnose → diagnosis, treat → treatment, prescribe → prescription, infect → infection, resist → resistance, effective → ineffective). S: negotiate conditions. Main format: "how a new medicine is born" order + a long reading (the doctor who drank bacteria — Barry Marshall and Robin Warren, ~560 words) + a long listening (Leo at the doctor's with a sore throat three days before the winter festival, ~3:15) + a role play. Video at home (TED-Ed, antibiotic resistance).
// Facts checked: in Perth, Australia, the pathologist Robin Warren noticed spiral-shaped bacteria in stomach samples in the early 1980s; the young doctor Barry Marshall joined him; at the time most doctors believed that stomach ulcers were caused by stress, spicy food and acid, and that bacteria couldn't survive in the stomach; their first successful culture of the bacteria (later named Helicobacter pylori) happened by accident in 1982, when the samples were left in the incubator over the long Easter weekend; in 1984 Marshall drank a culture of the bacteria and became ill with gastritis within about a week (his wife insisted that he take antibiotics); ulcers caused by H. pylori can be cured with antibiotics; Marshall and Warren received the Nobel Prize in Physiology or Medicine in 2005. New medicines are tested in the lab and on animals, then in clinical trials (phase 1: small groups of volunteers, safety; phase 2: patients, effect and dose; phase 3: large groups, comparison with existing treatments), then approved by a medicines agency and monitored after approval. Characters: Leo (musician; his band is playing at the winter festival; since their singer left — 7.3 — Leo sings).
export default lesson("b2-8.2", "As long as you…", () => [
  section("Warm-up: How a new medicine is born", [
    box(
      "Today you will…",
      "- find out how new medicines are tested 💊\n- meet a doctor who drank bacteria to prove he was right 🧫\n- set conditions: as long as, provided that, unless… 🤝",
    ),
    order(
      "Put the stages of developing a new medicine in order. 💊",
      [[
        "Scientists discover a possible new medicine in the laboratory.",
        "It is tested on cells and on animals.",
        "Phase 1: a small group of volunteers tests whether it is safe.",
        "Phase 2: a few hundred patients test whether it works and what the right dose is.",
        "Phase 3: thousands of patients compare it with existing treatments.",
        "A government agency checks all the results and approves it.",
        "Doctors keep watching for rare side effects after it goes on sale.",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Why do you think it usually takes ten years or more to develop a new medicine?\n- Would you volunteer to test a new medicine? On what conditions? 🤔\n- What's the most important medical discovery in history, in your opinion?",
    ),
    tip("Listen for *I'd volunteer if… / only if… / as long as…* — today's grammar. The question “on what conditions?” leads naturally into it."),
  ]),

  section("Vocabulary: Medicine", [
    words("Medicine", [
      ["a symptom", "🤒 a sign of an illness (a fever, a cough…)"],
      ["a side effect", "⚠️ an unwanted effect of a medicine"],
      ["a dose", "💊 the amount of medicine you take at one time"],
      ["a prescription", "📝 a doctor's written order for medicine"],
      ["a clinical trial", "🧪 a test of a new treatment on people"],
      ["a breakthrough", "🚀 an important new discovery"],
      ["a cure", "✅ something that makes an illness go away completely"],
      ["recover (from)", "🌱 become healthy again"],
      ["contagious", "🦠 can be passed from person to person"],
      ["an antibiotic", "💉 a medicine that kills bacteria (not viruses!)"],
    ]),
    match("Match.", [
      ["Antibiotics don't work", "against viruses."],
      ["One possible side effect", "is feeling sleepy."],
      ["You can only get this medicine", "with a prescription."],
      ["Don't take more than", "the recommended dose."],
      ["It took her two weeks", "to recover from the flu."],
      ["Stay at home — you're still", "contagious."],
    ]),
    gaps(
      "Word formation. Use the word in brackets.",
      "1. The doctor made a quick [diagnosis]. (diagnose)\n2. The new [treatment] worked very well. (treat)\n3. Wash your hands to prevent [infection]. (infect)\n4. Some bacteria have developed [resistance] to antibiotics. (resist)\n5. The medicine was completely [ineffective] — nothing changed. (effective)\n6. Her [recovery] was faster than expected. (recover)",
    ),
  ]),

  section("Reading: The doctor who drank bacteria", [
    tip("A long text (~560 words). First reading — 5 minutes: *Why didn't other doctors believe Marshall and Warren?* Then the tasks. Ask the student to find unless, as long as, provided and in case."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In the early 1980s, most doctors thought ulcers were caused by stress and acid.", true],
        ["Warren and Marshall grew the bacteria successfully on their first try.", false],
        ["The first successful culture happened by accident.", true],
        ["Marshall drank the bacteria because he couldn't test them on animals.", true],
        ["Marshall became ill within about a week.", true],
        ["Marshall and Warren won the Nobel Prize in 1984.", false],
      ],
      {
        read: [
          "## 🧫 The doctor who drank bacteria",
          "In the early 1980s, every medical student knew what caused stomach ulcers: stress, spicy food and too much acid. Patients were told to relax, change their diet and take medicine to reduce acid. Many got better for a while — but unless they kept taking the medicine, the ulcers usually came back. Some patients suffered for decades. Doctors also knew one more thing for certain: nothing could live in the stomach. As long as the stomach was full of acid, it was a desert for bacteria.",
          "In Perth, Australia, a pathologist named Robin Warren wasn't so sure. Looking through his microscope, he kept seeing strange, spiral-shaped bacteria in samples from patients' stomachs. A young doctor called Barry Marshall became interested, and the two began working together. They found the bacteria in almost every patient with an ulcer. But to prove that the bacteria caused the illness, they needed to grow them in the laboratory. Again and again they tried, and again and again they failed.",
          "Then, in 1982, luck stepped in. Over the long Easter weekend, the samples were accidentally left in the incubator for five days instead of the usual two. When the team came back, the bacteria had grown. They had simply needed more time.",
          "Even so, the medical world wasn't convinced. Marshall later said that the idea was too strange: doctors would accept it only provided that someone could show the bacteria actually caused the disease. Normally, scientists would test an idea like this on animals, but the bacteria didn't infect the animals they tried. So in 1984, Marshall decided to test it on the only patient he could find: himself.",
          "He drank a cloudy liquid full of the bacteria. Within about a week, he began to feel ill. He was sick in the mornings, and his colleagues noticed that his breath smelled terrible. Tests showed that his stomach was inflamed and full of the spiral bacteria. His wife, who hadn't been told about the experiment in advance, was not impressed. When she found out, she insisted that he start the antibiotics immediately. He did, and he recovered.",
          "The experiment didn't convince everyone immediately, but it helped. Over the next ten years, more and more studies showed that the bacteria, now called Helicobacter pylori, cause most stomach ulcers — and that a short course of antibiotics can cure them, provided that the patient takes the full course. Millions of people were cured instead of just treated. In 2005, Marshall and Warren received the Nobel Prize in Physiology or Medicine.",
          "The story is often told as a lesson about courage. But it's also a lesson about science itself. Good scientists accept new ideas — as long as there is strong evidence. Marshall and Warren didn't ask people to believe them. They asked people to look at the evidence. And if the evidence wasn't strong enough, they went and found more.",
          "Supposing Marshall had given up after the first failures? Millions of patients might have spent years taking medicine they didn't need. Sometimes, a breakthrough is just a matter of patience — and an unusually long weekend. 🔬",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What happened to ulcer patients unless they kept taking medicine?", options: ["*The ulcers usually came back.", "They were cured.", "They needed surgery."] },
      { q: "Why did the bacteria finally grow?", options: ["*They were left in the incubator for longer over Easter.", "The team used a new microscope.", "Marshall added acid."] },
      { q: "Why did Marshall test the bacteria on himself?", options: ["*The bacteria didn't infect the animals they tried.", "His boss told him to.", "He wanted to become famous."] },
      { q: "What is the cure for most stomach ulcers today?", options: ["*a short course of antibiotics", "a special diet", "relaxing and reducing stress"] },
      { q: "What is the writer's lesson about science?", options: ["*Accept new ideas when there is strong evidence.", "Never trust new ideas.", "Always test on yourself."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a doctor who studies samples of body tissue: a [pathologist]\n2. shaped like a spring or a screw: [spiral]\n3. a warm machine where bacteria are grown: an [incubator]\n4. persuaded, sure: [convinced]\n5. red and swollen, painful (part of the body): [inflamed]\n6. bravery: [courage]",
    ),
  ]),

  section("Grammar: As long as… Unless… In case…", [
    quiz("Notice the rule 🔍 Look: “Unless they kept taking the medicine, the ulcers came back.” · “Antibiotics can cure them, provided that the patient takes the full course.” · “Good scientists accept new ideas as long as there is strong evidence.”", [
      { q: "“unless” means…", options: ["*if… not", "only if", "because"] },
      { q: "“provided that” and “as long as” mean…", options: ["*only if (this condition is true)", "although", "in the same way as"] },
      { q: "After unless, provided, as long as (about the future) we use…", options: ["*the present tense", "will", "would"] },
    ]),
    table("conditional-linkers"),
    choose(
      "Choose.",
      "1. You'll feel better [*as long as/unless] you rest.\n2. [*Unless/If] you take the antibiotics, the infection won't go away.\n3. Take an umbrella [*in case/if] it rains. ☔\n4. You can borrow my car [*provided/unless] you bring it back by six.\n5. Hurry up, [*otherwise/unless] we'll miss the train.\n6. [*Supposing/Provided] you won a million dollars — what would you do?\n7. I'll come [*as long as/in case] I finish work on time.\n8. Don't call me [*unless/as long as] it's an emergency. 📞",
    ),
    gaps(
      "Rewrite the sentences. Use the word in capitals.",
      "1. If you don't rest, you won't get better. (UNLESS) → You won't get better [unless you rest].\n2. You can go out, but only if you're back by ten. (LONG) → You can go out [as long as you're/as long as you are] back by ten.\n3. Take some water. You might get thirsty. (CASE) → Take some water [in case you get] thirsty.\n4. Study hard. If you don't, you'll fail. (OTHERWISE) → Study hard, [otherwise you'll fail/otherwise you will fail].\n5. I'll lend you the money, but only if you pay me back next week. (PROVIDED) → I'll lend you the money [provided you pay/provided that you pay] me back next week.\n6. Imagine you lost your passport abroad. What would you do? (SUPPOSING) → [Supposing you lost] your passport abroad, what would you do?",
    ),
  ]),

  section("Grammar: All the conditionals", [
    match("Match the beginnings and the endings.", [
      ["If you heat ice,", "it melts. (always true)"],
      ["If it rains tomorrow,", "we'll stay at home. (a real future)"],
      ["If I were a doctor,", "I'd work abroad. (imaginary present)"],
      ["If Marshall hadn't drunk the bacteria,", "people might not have believed him. (imaginary past)"],
      ["If I had slept more,", "I'd feel better now. (mixed)"],
      ["Unless you take the full course,", "the infection may come back."],
    ]),
    sort("If or in case? Sort. 🧩", {
      "🔁 if (the action happens only when the condition is true)": [
        "I'll call you if I'm late.",
        "If you feel sick, stop taking the pills.",
        "Ring the bell if the door is locked.",
        "If it snows, the school will close.",
      ],
      "🛡️ in case (do it now, just to be safe)": [
        "Take your phone in case you get lost.",
        "I'll write down the address in case I forget.",
        "Bring a jacket in case it gets cold.",
        "Save a copy of the file in case the computer crashes.",
      ],
    }),
    drag(
      "Complete the doctor's advice.",
      "You can go back to work on Monday, [provided] your temperature is normal. Take one tablet three times a day, and don't stop [unless] you have a bad side effect. Keep the box [in] case you need to show it to another doctor. Drink lots of water, [otherwise] you'll feel dizzy. [Supposing] you still feel ill on Friday — call me straight away. You'll be fine as [long] as you rest. 🩺",
      ["if not", "unlike", "short"],
    ),
    order("Make sentences.", [
      "You'll get better as long as you rest.",
      "Don't call me unless it's urgent.",
      "Take a jacket in case it gets cold.",
      "I'll come provided I finish work on time.",
      "Hurry up, otherwise we'll be late.",
    ]),
    tip("Say it right: *unless* /ənˈles/ — stress on LESS. Typical mistakes: *unless you don't rest* (double negative!) → *unless you rest*; *as long as you will rest* → *as long as you rest*; *in case* ≠ *if*: *Take an umbrella if it rains* means you take it only when it's already raining."),
  ]),

  section("Listening: At the doctor's", [
    tip("A long listening — about 3 minutes 15 seconds. Three days before the winter festival, Leo has lost his voice. Since the band's singer left, he sings too. He goes to the doctor. First listen: *Will Leo be able to sing on Saturday? On what conditions?* Second listen: the tasks."),
    ...listening(
      "Listen to Leo at the doctor's.",
      "**Doctor:** Come in, have a seat. What seems to be the problem?\n\n**Leo:** Hello, doctor. It's my throat. It started on Monday, and now I've almost lost my voice. And the problem is, I'm a musician, and we're playing at the winter festival on Saturday. I'm the singer now.\n\n**Doctor:** I see. Any other symptoms? A fever, a cough?\n\n**Leo:** A bit of a cough, and I felt hot last night, but I didn't check my temperature.\n\n**Doctor:** Let me have a look. Open wide… Yes, your throat is quite red. Let me check your temperature… Thirty-seven point eight. A little high. Have you been rehearsing a lot?\n\n**Leo:** Every evening this week. In a cold garage. And I've been shouting a bit, because our drummer is very loud.\n\n**Doctor:** And how are you sleeping?\n\n**Leo:** Not much, to be honest. I've been printing T-shirts for the band until two in the morning.\n\n**Doctor:** Then sleep is part of the treatment too. Your body fights a virus much better after a full night's sleep. Well, that explains part of it. It looks like a viral infection — basically a bad cold — and your voice is tired from overuse.\n\n**Leo:** Can you give me antibiotics? My friend says they always help.\n\n**Doctor:** I'm afraid antibiotics won't help at all. They work against bacteria, not viruses. If I gave you antibiotics now, you'd just get the side effects and none of the benefits. And every unnecessary course helps bacteria become resistant.\n\n**Leo:** Okay. So what can I do? Will I be able to sing on Saturday?\n\n**Doctor:** Probably, yes — as long as you follow my instructions. First, you need to rest your voice completely. No talking unless it's really necessary. Write messages instead.\n\n**Leo:** No talking at all? For three days?\n\n**Doctor:** That's the deal. Second, drink lots of warm liquids — tea with honey, warm water. No ice, no alcohol. Third, no rehearsals until Friday, and no shouting over the drummer.\n\n**Leo:** But we haven't practiced the new song properly yet! If we don't rehearse, we'll forget the ending.\n\n**Doctor:** Then rehearse it in your head, or play it quietly without singing. Musicians do it all the time. Better a slightly messy ending than no voice at all.\n\n**Leo:** And if I do all that?\n\n**Doctor:** Provided your temperature goes down, you should be able to sing on Saturday. But do a short, gentle warm-up first. Here's a prescription for throat spray. Use it three times a day, but not more than the dose on the box. Otherwise, it can irritate your throat.\n\n**Leo:** Got it. And what if it gets worse?\n\n**Doctor:** If your temperature goes above thirty-eight and a half, or you find it hard to swallow, come back immediately. Take this card with the clinic's number in case you need to call at the weekend.\n\n**Leo:** Thank you. Supposing I can't sing on Saturday — could I still play the guitar?\n\n**Doctor:** Of course, as long as you feel well. Your fingers aren't ill. And Leo — you might want to ask your drummer to play a little more quietly.\n\n**Leo:** I'll write him a message.\n\n**Doctor:** Good. Remember: the less you talk now, the more you'll be able to sing on Saturday. Good luck with the concert.\n\n**Leo:** Thank you, doctor. Oh, sorry — I mean… thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "What are Leo's symptoms?", options: ["*a sore throat, a cough and a slight fever", "a headache and a stomach ache", "a broken finger"] },
      { q: "Why won't the doctor give Leo antibiotics?", options: ["*It's a viral infection, and antibiotics only work against bacteria.", "Leo is allergic to them.", "They're too expensive."] },
      { q: "What is the first instruction?", options: ["*Rest your voice completely.", "Rehearse every evening.", "Drink cold water."] },
      { q: "When should Leo come back immediately?", options: ["*if his temperature goes above 38.5 or he can't swallow easily", "on Friday", "after the concert"] },
      { q: "Can Leo play the guitar if he can't sing?", options: ["*Yes, as long as he feels well.", "No, never.", "Only if the drummer agrees."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo's throat problem started on Monday.", true],
      ["Leo's temperature is 37.8.", true],
      ["The band rehearses in a warm studio.", false],
      ["The doctor says Leo can talk as much as he likes.", false],
      ["Using too much throat spray can irritate the throat.", true],
      ["The doctor gives Leo a card with the clinic's number.", true],
    ]),
    gaps(
      "Complete the doctor's sentences.",
      "1. Probably, yes — as [long] as you follow my instructions.\n2. No talking [unless] it's really necessary.\n3. [Provided] your temperature goes down, you should be able to sing.\n4. Not more than the dose on the box. [Otherwise], it can irritate your throat.\n5. Take this card in [case] you need to call at the weekend.\n6. [Supposing] I can't sing on Saturday — could I still play the guitar?",
    ),
  ]),

  section("Role play: On what conditions?", [
    text(
      "🤝 Agree on the conditions",
      "Choose a situation. Each side has wishes and worries. Agree on **at least three conditions** using *as long as, provided that, unless, on condition that, in case, otherwise*.\n\n**A. 🏠 Parent and teenager.** The teenager wants to go to a concert in another city with friends.\n\n**B. 🔑 Landlord and tenant.** The tenant wants to have a cat in the flat.\n\n**C. 💼 Boss and employee.** The employee wants to work from home three days a week.\n\n**D. 🧪 Doctor and volunteer.** The volunteer is thinking about joining a clinical trial.\n\nThen report what you agreed: *We agreed that… provided that…*",
    ),
    tip("Make the student push for good conditions — don't accept the first offer. Afterwards, check the forms: present tense after *as long as / provided / unless* about the future, and no double negatives with *unless*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "You won't get better ___ you rest.", options: ["*unless", "as long as", "in case"] },
      { q: "Take a map ___ you get lost.", options: ["*in case", "unless", "provided"] },
      { q: "You can use my laptop ___ you're careful.", options: ["*as long as", "unless", "otherwise"] },
      { q: "Antibiotics don't work against ___.", options: ["*viruses", "bacteria", "infections"] },
    ]),
    box(
      "Phrase of the day: prevention is better than cure",
      "🛡️ It's easier to stop a problem from happening than to fix it later — in health and in life. (Leo: maybe don't rehearse in a cold garage!)\n\n*What do you do to stay healthy?*",
    ),
  ]),

  homework(
    [
      video("Watch: TED-Ed — What causes antibiotic resistance? (Kevin Wu)", "znnp-Ivj2ek"),
      choose(
        "Choose.",
        "1. I'll help you [*as long as/unless] you help me too.\n2. [*Unless/If] you hurry, you'll miss the bus.\n3. Write down my number [*in case/if] you lose your phone.\n4. You can stay [*provided/unless] you're quiet.\n5. Wear a coat, [*otherwise/unless] you'll get cold.\n6. [*Supposing/Unless] the plane were late, how would you get home?",
      ),
      gaps(
        "Word formation.",
        "1. The doctor wrote a [prescription] for some antibiotics. (prescribe)\n2. This cream is very [effective] against insect bites. (effect)\n3. Flu is very [infectious] — stay at home. (infect)\n4. The new drug was a medical [breakthrough]. (break)\n5. He made a full [recovery] after the operation. (recover)\n6. The [diagnosis] was a simple cold. (diagnose)",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      match("Match.", [
        ["a symptom", "a sign of an illness"],
        ["a side effect", "an unwanted effect of a medicine"],
        ["a dose", "the amount of medicine you take"],
        ["a cure", "something that ends an illness"],
        ["contagious", "can spread to other people"],
        ["a clinical trial", "a test of a new treatment on people"],
      ]),
      write("Write an email (140–190 words) to a friend who is going to run their first marathon (or climb a mountain, or start a new sport). Give advice and set conditions: as long as, provided that, unless, in case, otherwise.", 140),
      record("Record a 1-minute answer: “Would you take part in a clinical trial? On what conditions?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
