import React from "react";
import { mount } from "enzyme";
import App from "./App";

import { findByTestAttr } from "./test/testUtils";

/**
 * Create wrapper with specifiec initial condition then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = async (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = await findByTestAttr(wrapper, "input-box");

  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on the submit button
  const submitButton = await findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = await setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates GuessedWords table with one row", async () => {
    const GuessedWordRows = await findByTestAttr(wrapper, "guessed-word");
    expect(GuessedWordRows).toHaveLength(1);
  });
});
describe("some words guessed", () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = await setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });
  test("add row to guessedWords table", async () => {
    const guessedWordNodes = await findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(2);
  });
});
describe("guess secret word", () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = await setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });

    const inputBox = await findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate click on Submit Button
    const submitButton = await findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });
  test("adds row to guessedWords table", async () => {
    const guessedWordRows = await findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });
  test("displays congrats component", async () => {
    const congrats = await findByTestAttr(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  test("does not display input component contents", async () => {
    // const inputBox = await findByTestAttr(wrapper, "input-box");
    // expect(inputBox.exists()).toBe(false);

    // const submitButton = await findByTestAttr(wrapper, "submit-button");
    // expect(submitButton.exists()).toBe(false);

    const input = await findByTestAttr(wrapper, 'component-input');
    expect(input.text().length).toBe(0)
  });
});
