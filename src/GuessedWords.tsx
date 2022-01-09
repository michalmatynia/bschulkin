import React from 'react';

interface GuessedWordsTypes  {
    guessedWords: {guessedWord: string,
    letterMatchCount: number}[]
}

const GuessedWords: React.FC<GuessedWordsTypes> =  ( props ) => {
    let contents


    if(props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secred
            </span>
        ) 
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}
export default GuessedWords;