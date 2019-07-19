import React, { Component } from 'react';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import CongratsMessage from './components/Congrats/Congrats';
import NewWordBtn from './components/NewWord/NewWord';
import { getSecretWord, resetSuccess } from './store/actions';
import './App.css';

import { connect } from 'react-redux';

export class UncontrolledApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  newWordBtnClick = () => {
    // reset the game with a new word from server
    // set success to false
    this.props.resetSuccess();
    // clear guessedWords to an empty array
    // set guesscount to 1
    // load a new word from server
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>Search this lucky word</h1>
        </header>
        <main>
          <InputSearch />
          <CongratsMessage success={this.props.success} />
          <NewWordBtn clearData={this.newWordBtnClick} success={this.props.success}  />
          <GuessedWords guessedWords={this.props.guessedWords} guessCount={this.props.guessCount} />
        </main>
        <footer>{this.props.secretWord}</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord,
    guessCount: state.guessCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => {
      return dispatch(getSecretWord());
    },
    resetSuccess: () => {
      return dispatch(resetSuccess());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UncontrolledApp);
