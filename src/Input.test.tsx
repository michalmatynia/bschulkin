import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import Input from "./Input";

const defaultProps = {};

const setup = (props = { secretWord: "party" }) => {
  return shallow(<Input secretWord={props.secretWord} />);
};

test("input renders without error", async () => {
  const wrapper = setup();
  const inputComponent = await findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
describe("state controlled input field", () => {
  test("state updates with value of input box upon change", async () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = await findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  });
});
