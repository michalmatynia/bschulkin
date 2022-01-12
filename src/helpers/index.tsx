interface InterMatchCount {
    guessedWord: string,
    secretWord: string,
}

export function getLetterMatchCount({guessedWord, secretWord}: InterMatchCount) {
const secretLetters = secretWord.split('');

const guessedLetterSet = new Set(guessedWord);
return secretLetters.filter(letter=> guessedLetterSet.has(letter)).length
}