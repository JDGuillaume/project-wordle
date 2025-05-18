import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState("");

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label className="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="\w{5,5}"
        title="Submitted guess must be five letters in length."
        required
      />
    </form>
  );
}

export default GuessForm;
