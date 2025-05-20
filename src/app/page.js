"use client";
import Image from "next/image";
import { Dropdown } from "./components/dropdown";
import { useState, useOptimistic } from "react";
import { translate } from "./actions/translate";
import VoiceRecorder from "./components/voice-recorder";
import SaveBtn from "./components/save-translation-btn";
import TextToSpeech from "./components/text-to-speech";
import ClearButton from "./components/clear-button";

const languageOptions = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "de",
    label: "German",
  },
  {
    value: "it",
    label: "Italian",
  },
  {
    value: "pt",
    label: "Portuguese",
  },
  {
    value: "zh",
    label: "Chinese",
  },
  {
    value: "ja",
    label: "Japanese",
  },
  {
    value: "ko",
    label: "Korean",
  },
  {
    value: "ru",
    label: "Russian",
  },
  {
    value: "ar",
    label: "Arabic",
  },
  {
    value: "hi",
    label: "Hindi",
  },
];

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("languageFrom") || "en";
    }
    return "en";
  });
  const [languageTo, setLanguageTo] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("languageTo") || "es";
    }
    return "es";
  });
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const onSave = () => {
    setIsSaved(true);
  };

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("languageFrom", value);
    }
  };

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("languageTo", value);
    }
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  };

  const handleInputSet = async (value) => {
    setInputText(value);
    const formData = new FormData();
    formData.append("text", value);
    formData.append("languageTo", languageTo);
    formData.append("languageFrom", languageFrom);
    const translation = await translate(formData);
    setTranslatedText(translation.translation);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
        Communicate with <span className="text-amber-700">Care</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Bridge language gaps in healthcare settings with our fast, reliable medical translation app. Start translating now!
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-full sm:max-w-3xl mx-auto">
        <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center p-2 pb-2 gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
            <form
              className="w-full"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const result = await translate(formData);
                setTranslatedText(result.translation);
                if (isSaved) {
                  setIsSaved(false);
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="container flex flex-col w-full sm:w-1/2">
                  <Dropdown
                    name="languageFrom"
                    value={languageFrom}
                    options={languageOptions}
                    onChange={handleLanguageFromChange}
                    className="w-full max-w-xs sm:max-w-full"
                  />
                  <textarea
                    placeholder="Enter text to translate"
                    className="border border-slate-800 rounded-md p-4 w-full max-w-full sm:max-w-none"
                    value={inputText}
                    name="text"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="container flex flex-col w-full sm:w-1/2">
                  <div className="justify-between flex flex-wrap gap-2">
                    <Dropdown
                      name="languageTo"
                      value={languageTo}
                      options={languageOptions}
                      onChange={handleLanguageToChange}
                      className="w-full max-w-xs sm:max-w-full"
                    />
                    <SaveBtn
                      sourceLan={languageFrom}
                      targetLan={languageTo}
                      sourceText={inputText}
                      targetText={translatedText}
                      onHandleSave={onSave}
                      isSaved={isSaved}
                    />
                  </div>
                  <textarea
                    placeholder="Translated text will appear here"
                    className="border border-slate-800 rounded-md p-4 w-full max-w-full sm:max-w-none"
                    value={translatedText}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 h-16 justify-center sm:justify-start">
                <button
                  type="submit"
                  className="px-2 py-1 sm:px-4 sm:py-2 rounded-md bg-slate-800 text-white text-sm sm:text-base"
                >
                  Translate
                </button>
                {languageFrom === "en" && <VoiceRecorder handleSetText={handleInputSet} />}
                <TextToSpeech
                  text={translatedText}
                  language={languageTo}
                  className="ml-1 rounded-full p-2 sm:p-3 bg-slate-800 text-white flex items-center"
                />
                <ClearButton onClick={() => {
                  setInputText("");
                  setTranslatedText("");
                }} className="px-2 py-1 sm:px-4 sm:py-2 sm:ml-2 ml-0 text-sm sm:text-base" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
