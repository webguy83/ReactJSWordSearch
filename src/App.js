import React, { Component } from 'react';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import NewWordBtn from './components/NewWord/NewWord';
import EnterSecretWordBtn from './components/EnterSecretWord/EnterSecretWord';
import { getSecretWord, resetSuccess, clearGuessWords, clearGuessCount, clearGiveUp, togglePlayMode } from './store/actions';
import './App.css';

import { connect } from 'react-redux';

export class UncontrolledApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  newWordBtnClick = () => {
    const { resetSuccess, clearGuessWords, clearGuessCount, getSecretWord, clearGiveUp } = this.props;
    // set success to false
    resetSuccess();
    // clear guessedWords to an empty array
    clearGuessWords();
    // set guesscount to 1
    clearGuessCount();
    // set giveUp to false
    clearGiveUp();
    // load a new word from server
    getSecretWord();
  }

  enterSecretWordClick = () => {
    const { resetSuccess, clearGuessWords, clearGuessCount, clearGiveUp, togglePlayMode } = this.props;
    // set success to false
    resetSuccess();
    // clear guessedWords to an empty array
    clearGuessWords();
    // set guesscount to 1
    clearGuessCount();
    // set giveUp to false
    clearGiveUp();
    // toggle playMode to false
    togglePlayMode();
  }

  returnAnswer = () => {
    const { secretWord } = this.props;
    return secretWord ? <span className="hideSecretWord">{secretWord}</span> : null
  }

  render() {
    const { newWordBtnClick, returnAnswer, enterSecretWordClick } = this;
    const { success, guessedWords, guessCount, giveUp, secretWord, playMode } = this.props;

    return (
      <div className="container">
        <header className="App-header">
          <h1>Guess the Word</h1>
        </header>
        <main>
          <InputSearch />
          <div data-test="test-playMode-group" style={{ display: playMode ? "block" : "none" }}>
            <SuccessMessage secretWord={secretWord} success={success} giveUp={giveUp} />
            <NewWordBtn clearData={newWordBtnClick} success={success} giveUp={giveUp} />
            <GuessedWords guessedWords={guessedWords} guessCount={guessCount} />
            {!giveUp ? <p data-test="test-reveal-answer">Hover over the box to reveal the answer: {returnAnswer()}</p> : null}
            <EnterSecretWordBtn enterSecretWord={enterSecretWordClick} />
          </div>
        </main>
        <footer>&copy; Curtis Yacboski</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, guessCount, giveUp, playMode } = state;
  return {
    success,
    guessedWords,
    secretWord,
    guessCount,
    giveUp,
    playMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => {
      return dispatch(getSecretWord());
    },
    resetSuccess: () => {
      return dispatch(resetSuccess());
    },
    clearGuessWords: () => {
      return dispatch(clearGuessWords());
    },
    clearGuessCount: () => {
      return dispatch(clearGuessCount());
    },
    clearGiveUp: () => {
      return dispatch(clearGiveUp());
    },
    togglePlayMode: () => {
      return dispatch(togglePlayMode());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UncontrolledApp);
