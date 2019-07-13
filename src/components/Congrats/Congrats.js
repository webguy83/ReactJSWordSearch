import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    return (
        <div data-test="test-congrats-message">{props.success ? <span className="alert alert-success successMsg">Congrats you have successfully guessed the word! :)</span> : ""}</div>
    );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;