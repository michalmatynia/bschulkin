import React from "react";

interface InputPropTemplate {
  secretWord: string;
}

function Input({ secretWord }: InputPropTemplate): JSX.Element {

    const [currentGuess, setCuttentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input 
        data-test="input-box" 
        className="mb-2 mx-sm-3" 
        type="text" 
        placeholder="enter guess" 
        value={currentGuess} 
        onChange={(event)=> {setCuttentGuess(event.target.value)}}
        />
      <button data-test="submit-button" className="btn btn-primary mb-2">
          Submit
      </button>
      </form>
    </div>
  );
}

export default Input;
