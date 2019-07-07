import { actionTypes, correctGuess } from './';

describe('Correct Guess', () => {
    it('return an action with the type correct guess', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
    })
})