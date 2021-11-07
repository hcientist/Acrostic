import "./App.css";
import { useState } from "react";
import Row from "./Row";

function App() {
  const [word, setWord] = useState("");
  return (
    <>
      <code>{word}</code>
      <input
        type="text"
        name="word"
        id="word-input"
        onInput={(ev) => setWord(ev.target.value)}
      />
      {word.split("").map((letter) => (
        <Row letter={letter}></Row>
      ))}
    </>
  );
}

export default App;
