import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Auxiliary } from '../../utils/testingFunctions';

class InputSearch extends Component {
    render() {
        return (
            <form data-test="component-inputsearch">
                {this.props.success ? null : 
                    <Auxiliary><input data-test="component-inputbox" className="searchInput" type="text" name="search" />
                        <button data-test="component-submitBtn" type="submit">Guess</button>
                    </Auxiliary>
                }
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}

export default connect(mapStateToProps)(InputSearch);