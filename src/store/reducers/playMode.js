import { actionTypes } from '../actions';

export default (state = true, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_PLAYMODE:
            const newState = !state;
            return newState;
        default:
            return state;
    }
}