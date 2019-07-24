import { actionTypes } from '../actions';

export default (state = "", action) => {
    switch (action.type) {
        case actionTypes.NETWORK_ERROR:
            return action.payload
        default:
            return state;
    }
}