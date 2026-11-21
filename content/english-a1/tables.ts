import type { GrammarTable } from "../tables";

// Grammar tables of English A1, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "be-short",
    title: "be: I am / you are / he is",
    subtitle: "Full form and short form",
    color: "violet",
    columns: ["Full form", "Short form", "Example"],
    rows: [
      ["I **am**", "I**'m**", "I'm Aigerim."],
      ["you **are**", "you**'re**", "You're my teacher."],
      ["he **is**", "he**'s**", "He's Leo."],
      ["she **is**", "she**'s**", "She's Mia."],
    ],
    note: "We usually **speak** with short forms: I'm, you're, he's, she's.",
  },
  {
    name: "my-your",
    title: "my / your",
    color: "pink",
    columns: ["", "", "Example"],
    rows: [
      ["I", "**my**", "**My** name is Leo."],
      ["you", "**your**", "What's **your** name?"],
    ],
  },
  // 1.2
  {
    name: "be-all",
    title: "be: + / − / ?",
    subtitle: "Positive, negative and questions",
    color: "blue",
    columns: ["+", "−", "?"],
    rows: [
      ["I**'m** Kazakh.", "I**'m not** Kazakh.", "**Am** I…?"],
      ["You**'re** from Japan.", "You **aren't** from Japan.", "**Are** you from Japan?"],
      ["He / She **is** 17.", "He / She **isn't** 17.", "**Is** he / she 17?"],
      ["We **are** gamers.", "We **aren't** gamers.", "**Are** we gamers?"],
      ["They**'re** British.", "They **aren't** British.", "**Are** they British?"],
    ],
  },
  {
    name: "be-answers",
    title: "Short answers",
    color: "green",
    columns: ["Question", "Yes 👍", "No 👎"],
    rows: [
      ["**Are** you from Almaty?", "Yes, I **am**.", "No, I**'m not**."],
      ["**Is** she Brazilian?", "Yes, she **is**.", "No, she **isn't**."],
      ["**Are** they brothers?", "Yes, they **are**.", "No, they **aren't**."],
    ],
    note: "Say **Yes, I am.** — not “Yes, I'm.”",
  },
  {
    name: "possessives",
    title: "my / your / his / her / our / their",
    color: "pink",
    columns: ["", "", "Example"],
    rows: [
      ["I", "**my**", "**My** name is Aigerim."],
      ["you", "**your**", "What's **your** name?"],
      ["he", "**his**", "**His** nickname is GG."],
      ["she", "**her**", "**Her** nickname is Rocket."],
      ["we", "**our**", "**Our** team is Nova."],
      ["they", "**their**", "**Their** coach is Emma."],
    ],
  },
  // 1.3
  {
    name: "a-an",
    title: "a or an?",
    color: "orange",
    columns: ["", "When?", "Examples"],
    rows: [
      ["**a**", "before a consonant sound", "**a** student, **a** designer, **a** doctor"],
      ["**an**", "before a vowel sound (a, e, i, o, u)", "**an** engineer, **an** artist, **an** actor"],
    ],
    note: "I'm **a** student. She's **an** engineer.",
  },
  {
    name: "email",
    title: "How we say emails",
    color: "teal",
    columns: ["We write", "We say"],
    rows: [
      ["**@**", "at"],
      ["**.**", "dot"],
      ["**_**", "underscore"],
      ["chen.wei**@**workhub**.**com", "chen **dot** wei **at** workhub **dot** com"],
    ],
  },
  // 1.4
  {
    name: "alphabet",
    title: "The English alphabet",
    subtitle: "Letters with the same sound",
    color: "violet",
    columns: ["Sound", "Letters"],
    rows: [
      ["**ay**", "A  H  J  K"],
      ["**ee**", "B  C  D  E  G  P  T  V  (Z 🇺🇸)"],
      ["**eh**", "F  L  M  N  S  X  (Z 🇬🇧 = zed)"],
      ["**eye**", "I  Y"],
      ["**oh**", "O"],
      ["**you**", "Q  U  W"],
      ["**ar**", "R"],
    ],
    note: "Spelling tips: **double L** = LL · **double 7** = 77",
  },
  // 2.1
  {
    name: "this-that",
    title: "this / that",
    subtitle: "One thing: near 👇 or far 👉",
    color: "orange",
    columns: ["", "Near 👇", "Far 👉"],
    rows: [
      ["One thing", "**this** phone", "**that** bag"],
      ["Question", "What's **this**?", "What's **that**?"],
      ["Answer", "It's a charger.", "It's an umbrella."],
    ],
    note: "**a** + consonant sound: a phone · **an** + vowel sound: an umbrella",
  },
  // 2.2
  {
    name: "these-those",
    title: "this / that / these / those",
    color: "blue",
    columns: ["", "Near 👇", "Far 👉"],
    rows: [
      ["One 1️⃣", "**this** key", "**that** key"],
      ["Two or more 🔢", "**these** keys", "**those** keys"],
      ["Question", "What are **these**?", "What are **those**?"],
      ["Answer", "They're my keys.", "They're headphones."],
    ],
  },
  {
    name: "plurals",
    title: "Plural nouns",
    subtitle: "One → two or more",
    color: "green",
    columns: ["Rule", "One", "Two or more"],
    rows: [
      ["+ **s**", "phone, key, bag", "phone**s**, key**s**, bag**s**"],
      ["-s, -sh, -ch, -x → + **es**", "glass, brush, watch, box", "glass**es**, brush**es**, watch**es**, box**es**"],
      ["consonant + y → **ies**", "battery, city", "batter**ies**, cit**ies**"],
      ["Different!", "person, child, man, woman", "**people**, **children**, **men**, **women**"],
    ],
    note: "Always plural: **headphones**, **sunglasses**, **jeans** — These are my sunglasses.",
  },
  {
    name: "a-the",
    title: "a / an or the?",
    color: "pink",
    columns: ["", "When?", "Example"],
    rows: [
      ["**a / an**", "one thing, first time", "I have **a** new phone."],
      ["**the**", "we know which one", "**The** phone is black."],
      ["**the**", "only one", "**the** sun, **the** USA, **the** UK"],
    ],
  },
  // 3.1
  {
    name: "have-has",
    title: "have / has",
    color: "violet",
    columns: ["", "", "Example"],
    rows: [
      ["I / you / we / they", "**have**", "I **have** a brother."],
      ["he / she / it", "**has**", "She **has** a cat."],
    ],
    note: "🇬🇧 Also: I**'ve got** a brother. = I **have** a brother. · She**'s got** a cat. = She **has** a cat.",
  },
  // 3.2
  {
    name: "do-you-have",
    title: "have: − and ?",
    subtitle: "Negatives, questions and short answers",
    color: "blue",
    columns: ["", "I / you / we / they", "he / she / it"],
    rows: [
      ["−", "I **don't have** a pet.", "He **doesn't have** a pet."],
      ["?", "**Do** you **have** a pet?", "**Does** she **have** a pet?"],
      ["Yes 👍", "Yes, I **do**.", "Yes, she **does**."],
      ["No 👎", "No, I **don't**.", "No, she **doesn't**."],
    ],
    note: "After doesn't / does → **have**: She doesn't **have** — not “doesn't has”.",
  },
  {
    name: "possessive-s",
    title: "'s — whose is it?",
    color: "pink",
    columns: ["Who?", "+ 's", "Example"],
    rows: [
      ["Leo", "Leo**'s**", "This is Leo**'s** phone."],
      ["my sister", "my sister**'s**", "My sister**'s** room is big."],
      ["Mia", "Mia**'s**", "Mia**'s** cat is white."],
      ["my parents", "my parents**'**", "My parents**'** car is old."],
    ],
    note: "Careful! Leo**'s** 15. = Leo **is** 15. · Leo**'s** phone = the phone of Leo",
  },
  // 3.4
  {
    name: "time",
    title: "What time is it?",
    color: "orange",
    columns: ["", "🇬🇧 / 🇺🇸 easy way", "Also"],
    rows: [
      ["7:00", "seven **o'clock**", ""],
      ["7:30", "seven **thirty**", "**half past** seven"],
      ["7:15", "seven **fifteen**", "(a) **quarter past** seven"],
      ["7:45", "seven **forty-five**", "(a) **quarter to** eight"],
      ["7:05", "seven **oh five**", "five **past** seven"],
    ],
    note: "**at** + time: at 7 o'clock · **on** + day: on Monday · **in the** morning / afternoon / evening",
  },
  {
    name: "days",
    title: "Days of the week",
    color: "green",
    columns: ["Day", "Short", "Example"],
    rows: [
      ["**Monday**", "Mon", "Let's meet **on Monday**."],
      ["**Tuesday**", "Tue", ""],
      ["**Wednesday**", "Wed", "🗣️ say: WENZ-day"],
      ["**Thursday**", "Thu", ""],
      ["**Friday**", "Fri", "Are you free **on Friday**?"],
      ["**Saturday**", "Sat", "the **weekend** 🎉"],
      ["**Sunday**", "Sun", "the **weekend** 🎉"],
    ],
    note: "Days always start with a **capital letter**: Monday, not monday.",
  },
  // 4.1
  {
    name: "there-is",
    title: "there is / there are",
    color: "orange",
    columns: ["", "One 1️⃣", "Two or more 🔢"],
    rows: [
      ["+", "There**'s** a bed.", "There **are** two windows."],
      ["−", "There **isn't** a TV.", "There **aren't** any plants."],
    ],
    note: "There's = There **is** · We say: There's **a** lamp. There are **three** lamps.",
  },
  {
    name: "prep-1",
    title: "Where is it? in / on / under / next to",
    color: "blue",
    columns: ["", "", "Example"],
    rows: [
      ["📦", "**in**", "The keys are **in** the bag."],
      ["⬆️", "**on**", "The laptop is **on** the desk."],
      ["⬇️", "**under**", "The cat is **under** the bed."],
      ["↔️", "**next to**", "The lamp is **next to** the bed."],
    ],
  },
  // 4.2
  {
    name: "there-questions",
    title: "Is there…? Are there any…?",
    color: "green",
    columns: ["Question", "Yes 👍", "No 👎"],
    rows: [
      ["**Is there** a robot vacuum?", "Yes, there **is**.", "No, there **isn't**."],
      ["**Are there any** smart lights?", "Yes, there **are**.", "No, there **aren't**."],
    ],
    note: "+ There are **some** plants. · − There aren't **any** plants. · ? Are there **any** plants?",
  },
  {
    name: "prep-2",
    title: "behind / in front of / between",
    color: "pink",
    columns: ["", "", "Example"],
    rows: [
      ["🔙", "**behind**", "The cat is **behind** the sofa."],
      ["🔜", "**in front of**", "The table is **in front of** the TV."],
      ["↔️", "**between**", "The plant is **between** the two armchairs."],
    ],
  },
  // 5.1
  {
    name: "ps-positive",
    title: "Present Simple: I / you / we / they",
    subtitle: "Things we do every day, every week, usually",
    color: "violet",
    columns: ["Who?", "Verb", "Example"],
    rows: [
      ["I", "**get up**", "I **get up** at 7."],
      ["you", "**work**", "You **work** online."],
      ["we", "**have**", "We **have** lunch at 1."],
      ["they", "**go**", "They **go** to school by bus."],
    ],
    note: "No “am / are” here: I **work** — not “I am work”. Words: every day, usually, often, always",
  },
  // 5.2
  {
    name: "ps-questions",
    title: "Present Simple: − and ?",
    color: "blue",
    columns: ["", "Example", "Answer"],
    rows: [
      ["−", "I **don't** work on Sunday.", ""],
      ["?", "**Do** you study online?", "Yes, I **do**. / No, I **don't**."],
      ["What?", "**What do** you **do**?", "I'm a designer."],
      ["Where?", "**Where do** you **work**?", "At home. / In an office."],
      ["When?", "**When do** you **start**?", "At 9 o'clock."],
    ],
    note: "don't = do **not** · **What do you do?** = What's your job?",
  },
  // 5.3
  {
    name: "in-on-at",
    title: "in / on / at — time",
    color: "green",
    columns: ["", "When?", "Example"],
    rows: [
      ["**in**", "parts of the day, months", "**in** the morning, **in** the evening, **in** July"],
      ["**on**", "days", "**on** Monday, **on** Friday evening"],
      ["**at**", "times", "**at** 7 o'clock, **at** half past six, **at** night"],
    ],
    note: "🇺🇸 **on** the weekend · 🇬🇧 **at** the weekend",
  },
  // 5.4
  {
    name: "cafe",
    title: "At a coffee shop",
    color: "orange",
    columns: ["Barista ☕", "You 🙂"],
    rows: [
      ["What can I get you?", "**Can I have** a latte, please?"],
      ["What size?", "**Small / medium / large**, please."],
      ["Anything else?", "**I'd like** a croissant, please. / No, thanks."],
      ["For here or to go? 🇺🇸", "**To go**, please. / **For here**."],
      ["Eat in or take away? 🇬🇧", "**Take away**, please."],
      ["That's 5 dollars.", "Here you are. / Can I pay by card?"],
    ],
    note: "I'd like = I **would** like — polite ✨",
  },
  {
    name: "menu",
    title: "☕ BEAN THERE — Menu",
    color: "teal",
    columns: ["Drinks", "S", "M", "L"],
    rows: [
      ["Espresso", "$2.00", "—", "—"],
      ["Cappuccino", "$3.50", "$4.00", "$4.50"],
      ["Latte", "$3.50", "$4.00", "$4.50"],
      ["Tea", "$2.50", "$3.00", "$3.50"],
      ["Hot chocolate", "$3.00", "$3.50", "$4.00"],
      ["Smoothie", "$4.50", "$5.00", "$5.50"],
      ["**Food:**", "Croissant $3.00", "Muffin $2.50", "Sandwich $6.00"],
    ],
    note: "$4.50 = **four fifty** (four dollars fifty)",
  },
  // 6.1
  {
    name: "ps-he-she",
    title: "Present Simple: he / she / it",
    subtitle: "he / she / it → verb + s",
    color: "violet",
    columns: ["Rule", "I / you / we / they", "he / she / it"],
    rows: [
      ["+ **s**", "play, stream, work", "play**s**, stream**s**, work**s**"],
      ["-s, -sh, -ch, -o, -x → + **es**", "watch, go, do, fix, kiss", "watch**es**, go**es**, do**es**, fix**es**, kiss**es**"],
      ["consonant + y → **ies**", "study", "stud**ies**"],
      ["Different!", "have", "**has**"],
    ],
    note: "I play → She play**s**. · They have → He **has**.",
  },
  // 6.2
  {
    name: "ps-doesnt",
    title: "he / she / it: − and ?",
    color: "blue",
    columns: ["", "Example", "Answer"],
    rows: [
      ["−", "She **doesn't** stream on Sunday.", ""],
      ["?", "**Does** he play every day?", "Yes, he **does**. / No, he **doesn't**."],
      ["Wh-?", "**When does** she **start**?", "At 6 p.m."],
    ],
    note: "After does / doesn't → **no s**: Does she **play**? — not “Does she plays?”",
  },
  {
    name: "frequency",
    title: "How often?",
    color: "green",
    columns: ["", "%", "Example"],
    rows: [
      ["**always**", "100%", "I **always** have breakfast."],
      ["**usually**", "80%", "She **usually** goes to bed at 11."],
      ["**often**", "60%", "We **often** play games."],
      ["**sometimes**", "40%", "He **sometimes** cooks dinner."],
      ["**never**", "0%", "They **never** watch TV."],
    ],
    note: "Before the verb: I **often** play. · After be: I'm **always** tired. 😴",
  },
  // 7.1
  {
    name: "can",
    title: "can / can't",
    subtitle: "the same for I, you, he, she, we, they",
    color: "violet",
    columns: ["", "Example", ""],
    rows: [
      ["+", "I **can** swim.", "She **can** code."],
      ["−", "I **can't** drive.", "He **can't** cook."],
      ["?", "**Can** you play the guitar?", "Yes, I **can**. / No, I **can't**."],
    ],
    note: "can + verb, **no s, no to**: She can swim — not “She cans swim” or “can to swim”.",
  },
  // 7.2
  {
    name: "can-requests",
    title: "Can I…? Can you…?",
    subtitle: "Asking for help and permission",
    color: "blue",
    columns: ["", "Question", "Answer"],
    rows: [
      ["🙋 Permission", "**Can I** use your phone?", "Sure! / Sorry, you can't."],
      ["🤝 Help", "**Can you** help me, please?", "Of course! / Sorry, I can't."],
      ["🤖 Ability", "**Can** AI draw pictures?", "Yes, it **can**."],
    ],
    note: "Add **please** — it's polite! ✨",
  },
  // 7.4
  {
    name: "tech-problems",
    title: "Tech problems",
    color: "orange",
    columns: ["Problem 😟", "Help 🛠️"],
    rows: [
      ["It **doesn't work**.", "Try to **restart** it."],
      ["I **can't log in**.", "Click “**Forgot password?**”"],
      ["My screen is **frozen**. 🧊", "Turn it **off** and **on** again."],
      ["The Wi-Fi is **slow**. 🐢", "Check the **router**."],
      ["I **can't hear** you. 🔇", "Check your **microphone**."],
    ],
  },
  // 8.1
  {
    name: "like-ing",
    title: "love / like / don't mind / hate + -ing",
    color: "pink",
    columns: ["", "", "Example"],
    rows: [
      ["😍", "**love**", "I **love** danc**ing**."],
      ["🙂", "**like**", "She **likes** watch**ing** anime."],
      ["😐", "**don't mind**", "I **don't mind** cook**ing**. (it's OK)"],
      ["🙁", "**don't like**", "We **don't like** gett**ing** up early."],
      ["😡", "**hate**", "He **hates** clean**ing** his room."],
    ],
    note: "-ing: read → read**ing** · dance → danc**ing** · swim → swim**ming** · Also: I love **music**. I hate **Mondays**.",
  },
  // 8.2
  {
    name: "object-pronouns",
    title: "me / you / him / her / it / us / them",
    color: "violet",
    columns: ["Subject", "Object", "Example"],
    rows: [
      ["I", "**me**", "Can you help **me**?"],
      ["you", "**you**", "I love **you**! ❤️"],
      ["he", "**him**", "I follow **him** on Instagram."],
      ["she", "**her**", "We love **her** songs — we love **her**!"],
      ["it", "**it**", "This song is great. I love **it**."],
      ["we", "**us**", "Come with **us**!"],
      ["they", "**them**", "BTS? I love **them**!"],
    ],
    note: "**She** likes **him**. **He** likes **her**. 💕",
  },
];
