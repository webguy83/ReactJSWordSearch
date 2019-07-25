import React from 'react';

const NetworkErrorMessage = (props) => {
    return (
        <div className="alert alert-danger successMsg">
            <h5 data-test="test-networkError-message">{props.networkError}</h5>
            <p>There was an error retrieving the word from the server.  Sorry about that and please contact the administrator! </p>
        </div>
    );
};

export default NetworkErrorMessage;