import { getLetterMatchCount } from '../../utils/helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD",
    INC_GUESS_COUNT: "INC_GUESS_COUNT",
    RESET_SUCCESS: "RESET_SUCCESS",
    CLEAR_GUESS_WORDS: "CLEAR_GUESS_WORDS"
}

export const resetSuccess = () => {
    return {
        type: actionTypes.RESET_SUCCESS
    }
}

export const clearGuestWords = () => {
    return {
        type: actionTypes.CLEAR_GUESS_WORDS
    }
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