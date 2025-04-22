import React, { createContext, useState } from "react";
import run from "../gemini";
import "@google/generative-ai";
import { speak, setupSpeechRecognition } from "../components/SpeechUtils";
import { handleWebsiteCommands, handleTimeDate } from "../components/CommandHandler";

export const dataContext = createContext();

function UserContext({ children }) {
  const [speaking, setSpeaking] = useState(false);
  const [response, setResponse] = useState("listening.....");
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function AIresponse(prompt) {
    const text = await run(prompt);
    const newText = text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/Google/gi, "Ranjit Khedekar")
      .replace(/i don't have a name/gi, "I am SARA");

    setResponse(newText);
    speak(newText);
    setIsSpeaking(true);
    setTimeout(() => setSpeaking(false), 6000);
  }

  function takeCommand(command) {
    if (handleWebsiteCommands(command, setResponse, setIsSpeaking, setSpeaking)) {
      return;
    }
    
    if (handleTimeDate(command, setResponse, setIsSpeaking, setSpeaking)) {
      return;
    }

    AIresponse(command);
    setTimeout(() => setSpeaking(false), 6000);
  }

  const recognition = setupSpeechRecognition(setResponse, takeCommand);

  const value = {
    recognition,
    speaking,
    setSpeaking,
    response,
    setResponse,
    isSpeaking,
    setIsSpeaking,
  };

  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
