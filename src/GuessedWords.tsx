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
                Try to guess the secret Words
            </span>
        ) 
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index)=>(
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>

            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr> <th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}
export default GuessedWords;