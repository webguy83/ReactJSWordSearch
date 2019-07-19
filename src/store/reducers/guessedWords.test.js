import guessedWordsReducer from './guessedWords';
import { actionTypes } from '../actions/';

describe('guessed words reducer testing', () => {
    it('should have an initial state of empty array', () => {
        const initState = guessedWordsReducer(undefined, {});
        expect(initState).toEqual([])
    })
    it('should return an array of objects if words are guessed', () => {
        const initState = guessedWordsReducer([{
            guessedWord: "boomer",
            letterMatchCount: 4,
        }, {
            guessedWord: "fatcow",
            letterMatchCount: 3,
        }], {
            type: actionTypes.GUESS_WORD, payload: {
                guessedWord: "jank",
                letterMatchCount: 1
            }
        });
        expect(initState).toEqual([{
            guessedWord: "boomer",
            letterMatchCount: 4,
        }, {
            guessedWord: "fatcow",
            letterMatchCount: 3,
        }, {
            guessedWord: "jank",
            letterMatchCount: 1
        }])
    })
    it('should clear guess words', () => {
        const initState = guessedWordsReducer([{
            guessedWord: "boomer",
            letterMatchCount: 4,
        }, {
            guessedWord: "fatcow",
            letterMatchCount: 3,
        }], { type: actionTypes.CLEAR_GUESS_WORDS })
        expect(initState.length).toBe(0);
    })
})