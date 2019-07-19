import guessCountReducer from './guessCount';
import { actionTypes } from '../actions';

describe('guessCount reducer testing', () => {
    it('should incriment guessCount into the array', () => {
        const initState = guessCountReducer([1, 2, 3, 4], { type: actionTypes.INC_GUESS_COUNT });
        expect(initState).toEqual([1, 2, 3, 4, 5])
    })
    it('should clear the guessCount to one array entry', () => {
        const initState = guessCountReducer([1, 2, 3, 4, 5, 6], { type: actionTypes.CLEAR_GUESS_COUNT });
        expect(initState).toEqual([1]);
    })
});