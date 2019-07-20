import React from 'react';
import PropTypes from 'prop-types';

const GiveUp = (props) => {
    const { giveUpAndShowWord } = props;
    return (
        <button onClick={giveUpAndShowWord} className="btn btn-danger btn-sm giveUpBtn" data-test="test-give-up-btn">Give Up</button>
    );
};

GiveUp.propTypes = {
    giveUpAndShowWord: PropTypes.func.isRequired
}

export default GiveUp;