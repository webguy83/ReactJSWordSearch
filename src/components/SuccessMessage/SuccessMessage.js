import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = (props) => {
    const { success } = props;
    return (
        <div data-test="test-success-message">{success ? <span className="alert alert-success successMsg">Congrats you have successfully guessed the word! :)</span> : ""}</div>
    );
};

SuccessMessage.propTypes = {
    success: PropTypes.bool.isRequired
}

export default SuccessMessage;