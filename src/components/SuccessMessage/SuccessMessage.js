import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = (props) => {
    const { success, giveUp, secretWord } = props;
    if (success === true && giveUp === true) {
        throw new Error("Can't have more than one status message.")
    }
    return (
        <div data-test="test-messages">
            {success ?
                <p data-test="test-success-message" className="alert alert-success successMsg">Congrats you have successfully guessed the word! :)
            </p> : ""}
            {giveUp ?
                <p data-test="test-giveup-message" className="alert alert-danger successMsg">The answer is "<span data-test="test-secret-word-failed-msg" className="secretWordFailedMsg">{`${secretWord}`}</span>". Better luck next time, shlug heads.
                </p> : ""}
        </div>
    );
};

SuccessMessage.propTypes = {
    success: PropTypes.bool.isRequired,
    giveUp: PropTypes.bool.isRequired,
    secretWord: PropTypes.string.isRequired
}

export default SuccessMessage;