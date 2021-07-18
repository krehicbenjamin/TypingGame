import React, {useState, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const time = 10
  const [timeRemaining, setTimeRemaining] = useState(time);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const textBoxRef = useRef(null);

  function startClock() {
    setIsTimeRunning(true);
    setWordCount(0);
    setText("");
    setTimeRemaining(time);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function endGame() {
    setIsTimeRunning(false);
    const numWords = calculateWordCount(text);
    setWordCount(numWords);
    setTimeRemaining(0);
  }

  function decrementTime() {
    setTimeRemaining((time) => time - 1);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining !== 0) {
      setTimeout(decrementTime, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [isTimeRunning, timeRemaining]);


  return (
    <>
      <h1>Type as fast as you can :)</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startClock} disabled={isTimeRunning}>
        {wordCount > 0 ? "Play again" : "Start"}
      </button>

      {wordCount > 0 && <h1>Words typed in {time} seconds: {wordCount}</h1>}
    </>
  );
}

export default App;
