import successReducer from './success';
import { actionTypes } from '../actions'

it('should have an initial state of false', () => {
    const initState = successReducer(undefined, {});
    expect(initState).toBe(false)
})

it('should have a success state with words true when getting correct guess', () => {
    const initState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(initState).toBe(true)
})

it('should be set to false after resetSuccess is called', () => {
    const initState = successReducer(undefined, { type: actionTypes.RESET_SUCCESS });
    expect(initState).toBe(false);
})