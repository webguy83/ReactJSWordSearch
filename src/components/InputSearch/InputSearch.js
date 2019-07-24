import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord, giveUp, togglePlayMode, setSecretWord } from '../../store/actions';
import GiveUpBtn from '../GiveUp/GiveUp';

import { Auxiliary } from '../../utils/testingFunctions';

export class UnconnectedInputSearch extends Component {

    state = {
        inputData: ""
    }

    inputChange = (e) => {
        this.setState({
            inputData: e.target.value
        });
    }

    guessWordClicked = (e) => {
        e.preventDefault();
        const guessedWord = this.state.inputData;
        if (guessedWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
        this.setState({
            inputData: ""
        });
    }

    submitUserWordClicked = (e) => {
        const { setSecretWord, togglePlayMode } = this.props;
        e.preventDefault();
        const word = this.state.inputData;
        if (word && word.length > 0) {
            setSecretWord(word)
        }
        this.setState({
            inputData: ""
        });
        togglePlayMode();
    }

    giveUpClickBtn = () => {
        this.props.giveUpAction();
    }

    render() {
        const { giveUpClickBtn, guessWordClicked, submitUserWordClicked } = this;
        const { success, giveUp, playMode } = this.props;
        return (
            <form data-test="component-inputsearch">
                {success || giveUp ? null :
                    <Auxiliary>
                        <p className="instructions-submit-word" style={{ display: playMode ? "none" : "block" }} data-test="test-instructions-submit-word">Enter a word for someone else to guess!</p>
                        <input data-test="test-component-inputbox" className="searchInput" type="text" name="search" onChange={this.inputChange} value={this.state.inputData} />
                        <button className="btn btn-dark btn-sm guessBtn" data-test="component-submitBtn" onClick={playMode ? guessWordClicked : submitUserWordClicked} type="submit">{playMode ? "Guess" : "Submit"}</button>
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
        },
        setSecretWord: (word) => {
            return dispatch(setSecretWord(word))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInputSearch);