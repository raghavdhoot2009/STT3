import React from "react";
import './index.css';

import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition ";

const App = () => {

    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return "Browser doesnot support speech recognition.";
    }
  

  return <div className="main">
    <p className="p-mic">Microphone: {listening? "on" : "off" }</p>
    <div className="buttons">
       <button onClick={SpeechRecognition.startListening}>Start</button>
       <button onClick={SpeechRecognition.stopListening}>Stop</button>
       <button onClick={resetTranscript}>Reset</button>       
    </div>
    {transcript && <p className="p-transcript">transcript</p>}
  </div>;
};

export default App;
