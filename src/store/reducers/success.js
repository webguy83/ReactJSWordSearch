import { actionTypes } from '../actions';

const success = (state = true, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true
        default: return state
    }
}

export default success;