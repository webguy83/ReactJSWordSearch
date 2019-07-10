import { storeFactory } from '../utils/testingFunctions';
import { guessWord } from './actions'

describe('guess word action dispatcher', () => {
    const correctWord = "unclebox";
    const incorrectWord = 'uzzz';

    describe('no guess words', () => {
        let store;
        const initState = { secretWord: correctWord };

        beforeEach(() => {
            store = storeFactory(initState);
        })
        it('for unsuccessful guess it updates the state accordingly', () => {
            store.dispatch(guessWord(incorrectWord));
            const newState = store.getState();
            const expectState = {
                ...initState,
                success: false,
                guessedWords: [{
                    guessedWord: incorrectWord,
                    letterMatchCount: 1
                }]
            }
            expect(newState).toEqual(expectState);
        })
        it('for successful guess it updates the state accordingly', () => {
            store.dispatch(guessWord(correctWord));
            const newState = store.getState();
            const expectState = {
                ...initState,
                success: true,
                guessedWords: [{
                    guessedWord: correctWord,
                    letterMatchCount: 8
                }]
            }
            expect(newState).toEqual(expectState);
        })
    })
    describe('some guess words', () => {
        const guessedWords = [{ guessedWord: "jacky", letterMatchCount: 3 }]
        const initState = { guessedWords, secretWord: correctWord };

        let store;
        beforeEach(() => {
            store = storeFactory(initState);
        })
        it('for unsuccessful guess it updates the state accordingly', () => {
            store.dispatch(guessWord(incorrectWord));
            const newState = store.getState();
            const expectState = {
                secretWord: correctWord,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: incorrectWord, letterMatchCount: 1 }]
            }
            expect(newState).toEqual(expectState);
        })
        it('for successful guess it updates the state accordingly', () => {
            store.dispatch(guessWord(correctWord));
            const newState = store.getState();
            const expectState = {
                secretWord: correctWord,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: correctWord, letterMatchCount: 8 }]
            }
            expect(newState).toEqual(expectState);
        })
    })
})