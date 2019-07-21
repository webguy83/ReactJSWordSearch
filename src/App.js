import React, { Component } from 'react';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import NewWordBtn from './components/NewWord/NewWord';
import { getSecretWord, resetSuccess, clearGuessWords, clearGuessCount } from './store/actions';
import './App.css';

import { connect } from 'react-redux';

export class UncontrolledApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  newWordBtnClick = () => {
    const { resetSuccess, clearGuessWords, clearGuessCount, getSecretWord } = this.props;
    // reset the game with a new word from server
    // set success to false
    resetSuccess();
    // clear guessedWords to an empty array
    clearGuessWords();
    // set guesscount to 1
    clearGuessCount();
    // load a new word from server
    getSecretWord();
  }

  returnAnswer = () => {
    const { secretWord } = this.props;
    return secretWord ? <span className="hideSecretWord">{secretWord}</span> : null
  }

  render() {
    const { newWordBtnClick, returnAnswer } = this;
    const { success, guessedWords, guessCount, giveUp, secretWord } = this.props;

    return (
      <div className="container">
        <header className="App-header">
          <h1>Search this lucky word</h1>
        </header>
        <main>
          <InputSearch />
          <SuccessMessage secretWord={secretWord} success={success} giveUp={giveUp} />
          <NewWordBtn clearData={newWordBtnClick} success={success} giveUp={giveUp} />
          <GuessedWords guessedWords={guessedWords} guessCount={guessCount} />
        </main>
        <footer>Hover over the box to reveal the answer: {returnAnswer()}</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {success, guessedWords, secretWord, guessCount, giveUp} = state;
  return {
    success,
    guessedWords,
    secretWord,
    guessCount,
    giveUp
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UncontrolledApp);
