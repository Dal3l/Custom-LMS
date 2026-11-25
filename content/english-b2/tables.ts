import type { GrammarTable } from "../tables";

// Grammar tables of English B2, drawn as pictures by scripts/content/render-tables.mjs.
export const tables: GrammarTable[] = [
  // 1.1
  {
    name: "question-forms",
    title: "Every kind of question",
    subtitle: "subject and object questions, a preposition at the end, negative questions",
    color: "violet",
    columns: ["Type", "Example", "Note"],
    rows: [
      ["👤 subject question", "**Who called** you? **What happened**? **Which team won**?", "who / what is the subject → **no do / did**"],
      ["🎯 object question", "**Who did** you **call**? **What did** she **say**?", "who / what is the object → **do / did**"],
      ["📍 preposition at the end", "What are you interested **in**? Who did you go **with**?", "natural in speech (not “With whom…?”)"],
      ["😮 negative question", "**Didn't** you get my message? **Aren't** you cold?", "surprise, or you expect “yes”"],
    ],
    note: "Short check: if the answer replaces the subject (“Ruslan called me.”), there's no **did**: “Who called you?”",
  },
  {
    name: "indirect-questions",
    title: "Indirect questions",
    subtitle: "more polite: a phrase + normal word order (no do / does / did)",
    color: "teal",
    columns: ["Direct", "Indirect"],
    rows: [
      ["Where **is the station**?", "Do you know where **the station is**?"],
      ["What time **does it open**?", "Could you tell me what time **it opens**?"],
      ["**Can you** help me?", "I was wondering **if you could** help me."],
      ["How long **have you lived** here?", "Do you mind me asking how long **you've lived** here?"],
      ["**Did she pass**?", "I wonder **whether she passed**."],
    ],
    note: "Yes / no questions → **if / whether**. A question mark only if the first part is a question: “Do you know…?” but “I wonder where it is.”",
  },
  // 1.2
  {
    name: "auxiliaries",
    title: "Auxiliary verbs in conversation",
    subtitle: "do, be, have, can, will… make your English sound alive",
    color: "orange",
    columns: ["Use", "Example"],
    rows: [
      ["💥 emphasis", "I **do** care! · She **does** look tired. · We **did** try to call you."],
      ["🙃 disagree politely", "“You don't like cats.” — “I **do**, actually!”"],
      ["😮 echo questions", "“I've met Bono.” — “**Have you?**” · “Kenji was late.” — “**Was he?**”"],
      ["🤝 so / neither", "“I love jazz.” — “**So do I.**” · “I can't swim.” — “**Neither can I.**”"],
      ["🏷️ question tags", "It's cold, **isn't it**? ↘ (sure) · You're coming, **aren't you**? ↗ (asking)"],
    ],
    note: "The auxiliary copies the tense: “I went” → **Did you?** · “I've been” → **Have you?** · “I'm” → **Are you?** · “I can” → **Can you?**",
  },
  // 1.4
  {
    name: "interview-phrases",
    title: "Making a good impression",
    subtitle: "confident, but not big-headed",
    color: "blue",
    columns: ["Goal", "Phrases"],
    rows: [
      ["💪 strengths", "**I'd say** one of my strengths is… · **People often tell me** I'm… · **For example**, in my last job…"],
      ["🌫️ softening", "**I tend to**… · **To some extent**… · **I'm fairly confident** that… · **I have to admit**…"],
      ["⏳ time to think", "**That's a good question** — **let me think** for a second. · **Sorry, could you repeat** the question?"],
      ["❓ your questions", "**I was wondering** what… · **Could you tell me** a bit more about…? · **What would success look like**…?"],
      ["👋 finish", "**Thank you so much for your time.** · **I look forward to hearing from you.**"],
    ],
    note: "Show, don't tell: a short example is worth ten adjectives.",
  },
];
