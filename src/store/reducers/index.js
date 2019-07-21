import { combineReducers } from 'redux';
import success from './success';
import guessedWords from './guessedWords';
import secretWord from './secretWord';
import guessCount from './guessCount';
import giveUp from './giveUp';
import playMode from './playMode';

export default combineReducers({
    success,
    guessedWords,
    secretWord,
    guessCount,
    giveUp,
    playMode
})