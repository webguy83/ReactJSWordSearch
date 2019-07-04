import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    const { guessedWords } = props;
    let words;
    if(guessedWords.length > 0) {
        words = guessedWords.map((item, i) => {
            return <tr key={i} data-test="guessed-word"><td>{item.guessedWord}</td><td>{item.letterMatchCount}</td></tr>
        })
    }
    return (
        <div data-test="guessed-words-container" className="results">
            {guessedWords.length === 0 ? <p data-test="guessed-words-instructions">Try to guess the word haha!</p>
                :
                <div data-test="guessed-words">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Guess</th>
                                <th>Matching letters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {words}
                        </tbody>
                    </table>
                </div>

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
    ).isRequired
}

export default GuessedWords;