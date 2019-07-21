import {actionTypes} from '../actions';

export default (state = false, action) => {
    switch(action.type) {
        case actionTypes.GIVE_UP:
            return true;
        case actionTypes.CLEAR_GIVE_UP:
            return false;
        default:
            return state;
    }
}