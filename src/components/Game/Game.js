import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import Guess from "../Guess/Guess";
import GuessForm from "../GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      {guesses.length > 0 && <Guess guesses={guesses} />}
      <GuessForm guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
