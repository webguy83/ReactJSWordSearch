import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = (props) => {
    const { success, giveUp } = props;
    return (
        <div data-test="test-messages">
            {success ? 
            <span data-test="test-success-message" className="alert alert-success successMsg">Congrats you have successfully guessed the word! :)
            </span> : ""}
            {giveUp ? 
            <span data-test="test-giveup-message" className="alert alert-danger successMsg">Better luck next time, slot heads
            </span> : ""}
        </div>
    );
};

SuccessMessage.propTypes = {
    success: PropTypes.bool.isRequired,
    giveUp: PropTypes.bool.isRequired
}

export default SuccessMessage;