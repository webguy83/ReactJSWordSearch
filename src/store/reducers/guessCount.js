import { actionTypes } from '../actions';

export default (state = 0, action) => {
    switch(action.type) {
        case actionTypes.INC_GUESS_COUNT:
            return state + 1;
        default:
            return state;
    }
}