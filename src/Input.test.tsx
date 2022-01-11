import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import Input from "./Input";

// type State = string | undefined;
// type SetMockState = React.Dispatch<React.SetStateAction<State>>;


type SetMockState = { <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>]; <S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>]; }

const setup = (props = { secretWord: "party" }) => {
  return shallow(<Input secretWord={props.secretWord} />);
};

test("input renders without error", async () => {
  const wrapper = setup();
  const inputComponent = await findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess: SetMockState = jest.fn();
  let wrapper: any
  let originalUseState : SetMockState

  beforeEach(() => {
    // mockSetCurrentGuess.mockClear()

    originalUseState = React.useState
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState
  })
  test("state updates with value of input box upon change", async () => {
    const inputBox = await findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button click", async () => {
    const submitButton = await findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", {preventDefault(){}});

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
