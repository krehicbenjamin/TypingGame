import React from "react";
import "./App.css";
import useGame from "./customHooks/useGame"
function App() {
  
  const {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount} = useGame(10)

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
