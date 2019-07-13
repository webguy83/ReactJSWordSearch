import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../store/actions';

import { Auxiliary } from '../../utils/testingFunctions';

export class UnconnectedInputSearch extends Component {
    guessWordClicked = () => {
        this.props.guessWord()
    }

    render() {
        return (
            <form data-test="component-inputsearch">
                {this.props.success ? null :
                    <Auxiliary><input data-test="component-inputbox" className="searchInput" type="text" name="search" />
                        <button data-test="component-submitBtn" onClick={this.guessWordClicked} type="submit">Guess</button>
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInputSearch);