import { getLetterMatchCount } from "./";

describe('getLetterMatchCount', ()=>{
    const secretWord = 'party'
    test('returns correct count where there are no matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount({guessedWord: 'bones', secretWord})
        expect(letterMatchCount).toBe(0)
    })
    test('returns correct count where there are three matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount({guessedWord: 'train', secretWord})
        expect(letterMatchCount).toBe(3)

    })
    test('returns correct count where there are duplicate letters in the guess', ()=>{
        const letterMatchCount = getLetterMatchCount({guessedWord: 'parka', secretWord})
        expect(letterMatchCount).toBe(3)
    })
})