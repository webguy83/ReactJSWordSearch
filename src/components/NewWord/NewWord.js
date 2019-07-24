import React from 'react';
import PropTypes from 'prop-types';

const NewWord = (props) => {
    const { success, clearData, giveUp } = props;
    return (
        success || giveUp ? <button onClick={clearData} className="btn btn-success btn-sm newWordBtn" data-test="test-new-word-btn">Load a new word from server</button> : null
    );
};

NewWord.propTypes = {
    success: PropTypes.bool.isRequired,
    clearData: PropTypes.func.isRequired,
    giveUp: PropTypes.bool.isRequired
}

export default NewWord;