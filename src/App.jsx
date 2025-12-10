import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const inputText =
    "Patient complains of sharp and worsening abdominal pain. Has nausea and occasional vomiting. No prior history of similar episodes. Blood pressure is slightly elevated. Recommend immediate ultrasound and lab tests.";

 
  const outputText =
    "sharp and worsening abdominal pain. nausea and occasional vomiting. Blood pressure is slightly elevated. immediate ultrasound and lab tests.";
  const inputSentences = inputText.split(". ").map((s) => s.trim());
  const outputSentences = outputText.split(". ").map((s) => s.trim());


  const inputRefs = useRef([]);

  const handleClick = (sentence) => {
    const index = inputSentences.findIndex((s) => s.includes(sentence));
    if (index !== -1 && inputRefs.current[index]) {
      inputRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      inputRefs.current[index].classList.add("highlight");
      setTimeout(() => {
        inputRefs.current[index].classList.remove("highlight");
      }, 1500);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Input Text</h2>
        <div className="scroll-box">
          {inputSentences.map((s, i) => (
            <p key={i} ref={(el) => (inputRefs.current[i] = el)}>
              {s}
            </p>
          ))}
        </div>
      </div>

      <div className="box">
        <h2>Output Text</h2>
        <div className="scroll-box">
          {outputSentences.map((s, i) => (
            <span key={i} className="clickable" onClick={() => handleClick(s)}>
              {s}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
