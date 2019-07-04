import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    return (
        <div className="alert alert-success successMsg" data-test="test-congrats-message">{props.success ? "Congrats you have successfully guessed the word! :)" : ""}</div>
    );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;