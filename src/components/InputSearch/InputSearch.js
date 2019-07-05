import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputSearch extends Component {
    render() {
        return (
            <form>
                <input className="searchInput" type="text" name="search" />
                <button type="submit">Guess</button>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(InputSearch);