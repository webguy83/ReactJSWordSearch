import { actionTypes } from '../actions';

export default (state = [1], action) => {
    switch (action.type) {
        case actionTypes.INC_GUESS_COUNT:
            return [...state, state.length + 1];
        case actionTypes.CLEAR_GUESS_COUNT:
            return state.slice(0, 1);
        default:
            return state;
    }
}