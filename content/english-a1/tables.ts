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
];
