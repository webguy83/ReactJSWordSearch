import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class PageLoader extends Component {
    render() {
        const { dataLoading, children } = this.props;
        return dataLoading ? 
             <FontAwesomeIcon data-test="test-spinner" className="spinner" icon={faSpinner} spin size="2x" />
         : children
    }
}

const mapStateToProps = (state) => {
    const { dataLoading } = state;
    return {
        dataLoading
    };
}

export default connect(
    mapStateToProps,
)(PageLoader);