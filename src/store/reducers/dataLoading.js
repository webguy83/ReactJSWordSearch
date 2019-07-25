import { actionTypes } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case actionTypes.DATA_LOADING: {
            return action.payload;
        }
        default: 
            return state;
    }
}