import { speak } from './SpeechUtils';

export const handleWebsiteCommands = (command, setResponse, setIsSpeaking, setSpeaking) => {
  const websites = {
    'google': 'https://www.google.com',
    'google chrome': 'https://www.google.com',
    'youtube': 'https://www.youtube.com',
    'facebook': 'https://www.facebook.com',
    'instagram': 'https://www.instagram.com',
    'twitter': 'https://www.twitter.com',
    'linkedin': 'https://www.linkedin.com',
    'whatsapp': 'https://web.whatsapp.com',
    'snapchat': 'https://www.snapchat.com',
    'chatgpt': 'https://chatgpt.com'
  };

  const websiteCommand = Object.keys(websites).find(site => command === `open ${site}`);
  
  if (websiteCommand) {
    window.open(websites[websiteCommand], "_blank");
    const response = `Opening ${websiteCommand.charAt(0).toUpperCase() + websiteCommand.slice(1)}`;
    setResponse(response);
    speak(response);
    setIsSpeaking(true);
    setTimeout(() => setSpeaking(false), 6000);
    return true;
  }
  return false;
};

export const handleTimeDate = (command, setResponse, setIsSpeaking, setSpeaking) => {
  if (command.includes("time")) {
    const date = new Date();
    const timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const response = `The current time is ${timeStr}`;
    setResponse(response);
    speak(response);
    setIsSpeaking(true);
    setTimeout(() => setSpeaking(false), 6000);
    return true;
  }
  
  if (command.includes("date")) {
    const date = new Date();
    const dateStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const response = `The current date is ${dateStr}`;
    setResponse(response);
    speak(response);
    setIsSpeaking(true);
    setTimeout(() => setSpeaking(false), 6000);
    return true;
  }
  return false;
};