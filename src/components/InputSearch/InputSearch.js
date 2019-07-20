import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../store/actions';
import GiveUpBtn from '../GiveUp/GiveUp';

import { Auxiliary } from '../../utils/testingFunctions';

export class UnconnectedInputSearch extends Component {

    constructor(props) {
        super(props);
        this.guessInputBox = React.createRef();
    }

    guessWordClicked = (e) => {
        e.preventDefault();
        const guessedWord = this.guessInputBox.current.value;
        if (guessedWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
        this.guessInputBox.current.value = "";
    }

    render() {
        const { success } = this.props;
        return (
            <form data-test="component-inputsearch">
                {success ? null :
                    <Auxiliary><input data-test="component-inputbox" ref={this.guessInputBox} className="searchInput" type="text" name="search" />
                        <button className="guessBtn" data-test="component-submitBtn" onClick={this.guessWordClicked} type="submit">Guess</button>
                        <GiveUpBtn giveUpAndShowWord={() => { }} />
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