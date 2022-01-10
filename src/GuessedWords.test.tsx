import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "goo",
      letterMatchCount: 4,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  // checkProps(GuessedWords, defaultProps)
});

describe("if there are no words guessed", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", async () => {
    const component = await findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", async () => {
      const instructions = await findByTestAttr(wrapper, "guess-instructions");
      expect(instructions.text().length).not.toBe(0)
  });
});

describe("if there are  words guessed", () => {
    let wrapper: any;

    let guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {GuessedWords: 'agile', letterMatchCount: 1},
        {GuessedWords: 'party', letterMatchCount: 5}

    ]

    beforeEach(() => {
        wrapper = setup({ guessedWords });
      });
    test('renders without error', async ()=>{
        const component = await findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1)
    })
    test('renders "guessed words" section', async ()=>{
        const guessedWordNode = await findByTestAttr(wrapper, "guessed-words");
        expect(guessedWordNode.length).toBe(1)
    })
    test('correct number of guessed words', async ()=>{
        const guessedWordNode =  await findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNode.length).toBe(guessedWords.length)

    })
});
