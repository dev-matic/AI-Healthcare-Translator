"use client";
import React from "react";
import { Volume2 } from "lucide-react";

export default function TextToSpeech({ text, language, className }) {
  const handlePlay = () => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language || "en-US";
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={className || "p-2 rounded-md bg-blue-600 text-white flex items-center"}
      aria-label="Play translated text"
    >
      <Volume2 className="w-5 h-5" />
    </button>
  );
}
