import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import "./speech.css";
import Navbar from "../Navbar/Navbar";
const Speech = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="main-container">
          <div className="container">
            <br />
            <h2>Speech to Text Converter</h2>

            <p>
              converts speech from the microphone to text and makes it available
              to your React components
            </p>

            <div
              className="main-content"
              onClick={() => setTextToCopy(transcript)}
            >
              {transcript}
            </div>

            <div className="btn-style">
              <button className="speech-btn" onClick={setCopied}>
                {isCopied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button className="speech-btn" onClick={startListening}>
                Start Listening
              </button>
              <button
                className="speech-btn"
                onClick={SpeechRecognition.stopListening}
              >
                Stop Listening
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speech;
