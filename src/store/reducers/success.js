import { actionTypes } from '../actions';

const success = (state = false, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true
        case actionTypes.RESET_SUCCESS:
            return false
        default: return state
    }
}

export default success;