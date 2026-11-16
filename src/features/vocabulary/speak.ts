"use client";

// Saying a word out loud: the dictionary's recording when there is one,
// otherwise the browser's own speech synthesis in the word's language.

const VOICE_LANG: Record<string, string> = { en: "en-US", ru: "ru-RU", kk: "kk-KZ", de: "de-DE", fr: "fr-FR", es: "es-ES", it: "it-IT", tr: "tr-TR", zh: "zh-CN" };

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(term: string, language: string, audioUrl?: string | null) {
  if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play().catch(() => synth(term, language));
    return;
  }
  synth(term, language);
}

function synth(term: string, language: string) {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(term);
  utterance.lang = VOICE_LANG[language] ?? language;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}
