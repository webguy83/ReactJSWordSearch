import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord, giveUp, togglePlayMode } from '../../store/actions';
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

    submitUserWordClicked = (e) => {
        e.preventDefault();
        this.props.togglePlayMode();
    }

    giveUpClickBtn = (e) => {
        e.preventDefault()
        this.props.giveUpAction();
    }

    render() {
        const { giveUpClickBtn, guessInputBox, guessWordClicked, submitUserWordClicked } = this;
        const { success, giveUp, playMode } = this.props;
        return (
            <form data-test="component-inputsearch">
                {success || giveUp ? null :
                    <Auxiliary>
                        <p className="instructions-submit-word" style={{display: playMode ? "none" : "block"}} data-test="test-instructions-submit-word">Enter a word for someone else to guess!</p>
                        <input data-test="component-inputbox" ref={guessInputBox} className="searchInput" type="text" name="search" />
                        <button className="btn btn-dark btn-sm guessBtn" data-test="component-submitBtn" onClick={/*playMode ? */guessWordClicked /*: submitUserWordClicked*/} type="submit">{playMode ? "Guess" : "Submit"}</button>
                        <span data-test="test-giveUpBtn" style={{ display: playMode ? "inline" : "none" }}>
                            <GiveUpBtn giveUpAndShowWord={giveUpClickBtn} />
                        </span>
                    </Auxiliary>
                }
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    const { success, giveUp, playMode } = state
    return {
        success,
        giveUp,
        playMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        guessWord: (guessedWord) => {
            return dispatch(guessWord(guessedWord))
        },
        giveUpAction: () => {
            return dispatch(giveUp());
        },
        togglePlayMode: () => {
            return dispatch(togglePlayMode());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInputSearch);