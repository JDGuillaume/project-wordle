import React from "react";

function GuessForm({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    console.log({ guess });

    const nextGuesses = [
      ...guesses,
      {
        value: guess,
        id: crypto.randomUUID(),
      },
    ];

    setGuesses(nextGuesses);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="Submitted guess must be five letters in length."
        required
      />
    </form>
  );
}

export default GuessForm;
