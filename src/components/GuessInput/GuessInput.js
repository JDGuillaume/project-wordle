import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="Submitted guess must be five letters in length."
        disabled={gameStatus !== "running"}
        required
      />
    </form>
  );
}

export default GuessInput;
