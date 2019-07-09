import { combineReducers } from 'redux';
import success from './success';
import guessedWords from './guessedWords';

export default combineReducers({
    success,
    guessedWords
})