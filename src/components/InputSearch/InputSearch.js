import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord, giveUp } from '../../store/actions';
import GiveUpBtn from '../GiveUp/GiveUp';

import { Auxiliary } from '../../utils/testingFunctions';

export class UnconnectedInputSearch extends Component {

    constructor(props) {
        super(props);
        this.guessInputBox = React.createRef();
    }

    guessWordClicked = (e) => {
        const { guessInputBox, props } = this
        e.preventDefault();
        const guessedWord = guessInputBox.current.value;
        if (guessedWord && guessWord.length > 0) {
            props.guessWord(guessedWord)
        }
        guessInputBox.current.value = "";
    }

    giveUpClickBtn = (e) => {
        e.preventDefault()
        this.props.giveUp();
    }

    render() {
        const { giveUpClickBtn, guessInputBox, guessWordClicked } = this;
        const { success } = this.props;
        return (
            <form data-test="component-inputsearch">
                {success ? null :
                    <Auxiliary><input data-test="component-inputbox" ref={guessInputBox} className="searchInput" type="text" name="search" />
                        <button className="btn btn-dark btn-sm guessBtn" data-test="component-submitBtn" onClick={guessWordClicked} type="submit">Guess</button>
                        <GiveUpBtn giveUpAndShowWord={giveUpClickBtn} />
                    </Auxiliary>
                }
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    const { success } = state
    return {
        success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        guessWord: (guessedWord) => {
            return dispatch(guessWord(guessedWord))
        },
        giveUp: () => {
            return dispatch(giveUp());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInputSearch);