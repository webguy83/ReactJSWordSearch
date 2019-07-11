import React, { Component } from 'react';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import CongratsMessage from './components/Congrats/Congrats';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>Search this lucky word</h1>
        </header>
        <main>
          <InputSearch />
          <CongratsMessage success={this.props.success} />
          <GuessedWords guessedWords={[{
            guessedWord: "goob",
            letterMatchCount: 4
          }, {
            guessedWord: "bob",
            letterMatchCount: 1
          }, {
            guessedWord: "booger",
            letterMatchCount: 6
          }]} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    guessedWords: state.guessedWords
  }
}

export default connect(mapStateToProps)(App);
