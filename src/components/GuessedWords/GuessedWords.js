import React from 'react';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../utils/testingFunctions';

const GuessedWords = (props) => {
    const { guessedWords, guessCount, giveUp, secretWord } = props;
    let words;
    if (guessedWords.length > 0) {
        words = guessedWords.map((item, i) => {
            return <tr key={i} data-test="guessed-word"><td data-test="guess-count">{guessCount[i]}</td><td>{item.guessedWord}</td><td>{item.letterMatchCount}</td></tr>
        })
    }
    return (
        <div data-test="guessed-words-container" className="results">
            {guessedWords.length === 0 ? <p data-test="guessed-words-instructions" style={{ display: giveUp ? "none" : "block" }} className="instructionsTxt">Try to guess the <span data-test="test-secret-word-length">{secretWord.length}</span> letter word. Good luck!</p>
                :
                <Auxiliary>
                    <div data-test="guessed-words">
                        <h2>Guessed Words</h2>
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>#</th>
                                    <th>Guess</th>
                                    <th>Matching letters</th>
                                </tr>
                            </thead>
                            <tbody>
                                {words}
                            </tbody>
                        </table>
                    </div>
                    <p>Total Guesses: <span data-test="guess-count-total" className="guessCount">{guessCount.length - 1}</span></p>
                </Auxiliary>
            }
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
    guessCount: PropTypes.arrayOf(PropTypes.number).isRequired,
    giveUp: PropTypes.bool.isRequired,
    secretWord: PropTypes.string.isRequired
}

export default GuessedWords;