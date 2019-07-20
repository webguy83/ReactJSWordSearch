import React from 'react';
import PropTypes from 'prop-types';

const NewWord = (props) => {
    const { success, clearData } = props;
    return (
        success ? <button onClick={clearData} className="btn btn-success btn-sm newWordBtn" data-test="test-new-word-btn">New Word</button> : null
    );
};

NewWord.propTypes = {
    success: PropTypes.bool.isRequired,
    clearData: PropTypes.func.isRequired
}

export default NewWord;