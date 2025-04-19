import React, { useContext } from "react";
import "./App.css";
import ai from "./assets/ai.png";
import speakimg from "./assets/speak.gif";
import { dataContext } from "./Context/UserContext";
import { CiMicrophoneOn } from "react-icons/ci";
import voice from "./assets/aiVoice.gif";
import AI1 from "./assets/AI1.png";

function App() {
  let {
    recognition,
    speaking,
    setSpeaking,
    response,
    isSpeaking,
    setResponse,
    setIsSpeaking,
  } = useContext(dataContext);

  return (
    <>
      <div className="main">
        {/* <img src={AI1} alt="ai" id="sara" /> */}
        <img src={ai} alt="ai" id="sara" />
        <span>Hey, I'm SARA,</span>
        <span>Your AI Assistant</span>
        {!speaking ? (
          <button
            onClick={() => {
              setResponse("listening.....");
              setIsSpeaking(false);
              setSpeaking(true);
              recognition.start();
            }}
          >
            Click here
            <CiMicrophoneOn />
          </button>
        ) : (
          <div className="response">
            {!isSpeaking ? (
              <img src={speakimg} alt="speak" id="speakimg" />
            ) : (
              <img src={voice} alt="voice" id="voice" />
            )}
            <p>{response}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
