import { actionTypes } from '../actions'

export default (state = [], action) => {
    switch(action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        case actionTypes.CLEAR_GUESS_WORDS:
                const empty = [...state];
                empty.length = 0;
            return empty;
        default: 
        return state;
    }
}