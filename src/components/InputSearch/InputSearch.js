import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../store/actions';

import { Auxiliary } from '../../utils/testingFunctions';

export class UnconnectedInputSearch extends Component {

    constructor(props) {
        super(props);
        this.guessInputBox = React.createRef();
    }

    guessWordClicked = (e) => {
        e.preventDefault();
        const guessedWord = this.guessInputBox.current.value;
        if (guessWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
        this.guessInputBox.current.value = "";
    }

    render() {
        return (
            <form data-test="component-inputsearch">
                {this.props.success ? null :
                    <Auxiliary><input data-test="component-inputbox" ref={this.guessInputBox} className="searchInput" type="text" name="search" />
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