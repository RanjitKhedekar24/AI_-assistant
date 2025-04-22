import React from 'react';

export const speak = (text) => {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.value = 1;
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
};

export const setupSpeechRecognition = (setResponse, takeCommand) => {
  let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition();
  recognition.onresult = (e) => {
    let current = e.results[0][0].transcript;
    setResponse(current);
    takeCommand(current.toLowerCase());
  };
  return recognition;
};

export const handleSpeakingState = (setSpeaking) => {
  setTimeout(() => {
    setSpeaking(false);
  }, 6000);
};