import React, { createContext, useState } from "react";
import run from "../gemini";
import "@google/generative-ai";
export const dataContext = createContext();
function UserContext({ children }) {
  let [speaking, setSpeaking] = useState(false);
  let [response, setResponse] = useState("listening.....");
  let [isSpeaking, setIsSpeaking] = useState(false);
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.value = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
  }

  async function AIresponse(prompt) {
    let text = await run(prompt);

    let newText = text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/Google/gi, "Ranjit Khedekar")
      .replace(/i don't have a name/gi, "I am SARA");

    setResponse(newText);
    speak(newText);
    setIsSpeaking(true);
    setTimeout(() => {
      setSpeaking(false);
    }, 6000);
  }

  let speechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition();
  recognition.onresult = (e) => {
    let current = e.results[0][0].transcript;
    setResponse(current);
    takeCommand(current.toLowerCase());
  };

  function takeCommand(command){
    if(command === "open google"){
      window.open("https://www.google.com","_blank");
      setResponse("Opening Google");
      speak("Opening Google");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open google chrome"){
      window.open("https://www.google.com","_blank");
      setResponse("Opening Google Chrome");
      speak("Opening Google Chrome");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open youtube"){
      window.open("https://www.youtube.com","_blank");
      setResponse("Opening Youtube");
      speak("Opening Youtube");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open facebook"){
      window.open("https://www.facebook.com","_blank");
      setResponse("Opening Facebook");
      speak("Opening Facebook");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open instagram"){
      window.open("https://www.instagram.com","_blank");
      setResponse("Opening Instagram");
      speak("Opening Instagram");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open twitter"){
      window.open("https://www.twitter.com","_blank");
      setResponse("Opening Twitter");
      speak("Opening Twitter");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open linkedin"){  
      window.open("https://www.linkedin.com","_blank");
      setResponse("Opening LinkedIn");
      speak("Opening LinkedIn");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open whatsapp"){
      window.open("https://web.whatsapp.com/","_blank");
      setResponse("Opening Whatsapp");
      speak("Opening Whatsapp");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }else if(command === "open snapchat"){
      window.open("https://www.snapchat.com","_blank");
      setResponse("Opening Snapchat");
      speak("Opening Snapchat");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    } 
    else if(command === "open chatgpt"){
      window.open("https://chatgpt.com/","_blank");
      setResponse("Opening ChatGPT");
      speak("Opening ChatGPT");
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }
    else if(command.includes("time")){
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      setResponse("The current time is " + hours + ":" + minutes + ":" + seconds);
      speak("The current time is " + hours + ":" + minutes + ":" + seconds);
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }
    else if(command.includes("date")){
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      setResponse("The current date is " + day + "/" + month + "/" + year);
      speak("The current date is " + day + "/" + month + "/" + year);
      setIsSpeaking(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }
    else{
      AIresponse(command);
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    }
  }
  



  let value = {
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
