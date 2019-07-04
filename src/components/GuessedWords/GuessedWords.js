import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    const { guessedWords } = props;
    return (
        <div data-test="guessed-words-container" className="results">
            {guessedWords.length === 0 ? <p data-test="guessed-words-instructions">Try to guess the word haha!</p> : null}
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