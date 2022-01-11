import React from "react";

interface InputPropTemplate {
  secretWord: string;
  success: boolean;
}

function Input({ success, secretWord }: InputPropTemplate): JSX.Element {
  const [currentGuess, setCuttentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input" />;
  } else {
    return (
      <div data-test="component-input">
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={currentGuess}
            onChange={(event) => {
              setCuttentGuess(event.target.value);
            }}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={(evt) => {
              evt.preventDefault();
              setCuttentGuess("");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Input;
