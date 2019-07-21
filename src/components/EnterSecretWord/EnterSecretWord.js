import React from 'react';
import PropTypes from 'prop-types';

const EnterSecretWord = (props) => {
    const { enterSecretWord } = props;
    return (
        <button onClick={enterSecretWord} data-test="test-enterSecretWordBtn" className="btn btn-primary btn-sm enterSecretWordBtn">Enter your own secret word</button>
    );
};

EnterSecretWord.propTypes = {
    enterSecretWord: PropTypes.func.isRequired
}

export default EnterSecretWord;