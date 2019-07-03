import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    return (
        <p data-test="test-congrats-message">{props.success ? "Congrats you have successfully guessed the word" : ""}</p>
    );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;