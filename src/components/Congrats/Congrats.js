import React from 'react';

const Congrats = (props) => {
    return (
        <p data-test="test-congrats-message">{props.connect ? "Congrats you have successfully guessed the word" : ""}</p>
    );
};

export default Congrats;