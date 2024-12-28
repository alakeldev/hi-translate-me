"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent, useEffect } from 'react';
import { BackgroundLines } from "@/components/Background/background-lines";
import TextArea from "@/components/Inputs/TextArea";
import SpeechReco from "@/components/SpeechRecognition/SpeechReco"; 
import { IconCopy, IconVolume } from '@tabler/icons-react';
import FileUpload from "@/components/Inputs/FileUpload";
import rtfToText from "@/../lib/rtfToText";
import useTranslate from "@/../hooks/useTranslate";
import LanguageSelector from "@/components/Inputs/LanguageSelector";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [languages] = useState<string[]>(["English", "Arabic", "French", "German", "Italian", "Japanese", "Korean", "Portuguese", "Russian", "Spanish", "Turkish", "Ukrainian"]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("German");
  const { targetText } = useTranslate(sourceText, selectedLanguage);
  const [displayText, setDisplayText] = useState<string>(targetText); // New state variable to manage displayed target text

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  useEffect(() => {
    if (sourceText.trim() === "") {
      setDisplayText(""); // Clear displayed target text if source text is empty
    } else {
      setDisplayText(targetText); // Update displayed target text
    }
  }, [sourceText, targetText]);

  return (
    <div className="relative overflow-hidden h-screen">
      <BackgroundLines className="absolute inset-0 w-full h-full" />
      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl text-neutral-200">
            Hi <span className="text-[#00E6E2]">Translate</span> Me
          </h1>
          <p className="mt-3 text-neutral-300">
            Your Magical Tool For Instant Text And Voice Translations
          </p>
        </div>
        <div className="mt-7 sm:mt-12 mx-auto max-w-3xl w-full grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col space-y-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20 p-4">
            <TextArea 
              id="source-language"
              value={sourceText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setSourceText(e.target.value);
              }}
              placeHolder="Source Language"
            />
            <div className='flex flex-row justify-between w-full'>
              <span className='cursor-pointer flex space-x-2 flex-row'>
                <SpeechReco setSourceText={setSourceText} />
                <IconVolume size={22} onClick={() => handleAudioPlayback(sourceText)} />
                <FileUpload handleFileUpload={handleFileUpload} />
                <span className="text-small pl-4">
                  {sourceText.length} / 2000
                </span>
              </span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col space-y-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20 p-4">
            <TextArea 
              id={"target-language"}
              value={displayText} // Use displayText state variable
              onChange={() => {}}
              placeHolder={"Target Language"}
              disabled // Make the textarea disabled
            />
            <div className="flex flex-row justify-between w-full">
              <span className="cursor-pointer flex space-x-2 flex-row items-center">
                <LanguageSelector 
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  languages={languages}
                />
                <IconVolume size={22} onClick={() => handleAudioPlayback(displayText)} />
              </span>
              <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                <IconCopy size={22} onClick={() => handleCopyToClipboard()} />
                {copied && (
                  <span className="text-small text-green-500">Copied!</span> 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
