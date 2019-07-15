import { getLetterMatchCount } from '../../utils/helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD",
    INC_GUESS_COUNT: "INC_GUESS_COUNT"
}

export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        dispatch({
            type: actionTypes.INC_GUESS_COUNT
        })

        if (guessedWord === secretWord) {
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    }
}

export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
            .then(res => {
                dispatch({
                    type: actionTypes.SET_SECRET_WORD,
                    payload: res.data
                })
            })
    }
}