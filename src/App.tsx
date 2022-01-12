import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 4 }]}
      />
    </div>
  );
}

export default App;
