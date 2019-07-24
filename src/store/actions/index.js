import { getLetterMatchCount } from '../../utils/helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD",
    INC_GUESS_COUNT: "INC_GUESS_COUNT",
    RESET_SUCCESS: "RESET_SUCCESS",
    CLEAR_GUESS_WORDS: "CLEAR_GUESS_WORDS",
    CLEAR_GUESS_COUNT: "CLEAR_GUESS_COUNT",
    GIVE_UP: "GIVE_UP",
    CLEAR_GIVE_UP: "CLEAR_GIVE_UP",
    TOGGLE_PLAYMODE: "TOGGLE_PLAYMODE",
    NETWORK_ERROR: "NETWORK_ERROR"
}

export const resetSuccess = () => {
    return {
        type: actionTypes.RESET_SUCCESS
    }
}

export const clearGuessWords = () => {
    return {
        type: actionTypes.CLEAR_GUESS_WORDS
    }
}

export const clearGuessCount = () => {
    return {
        type: actionTypes.CLEAR_GUESS_COUNT
    }
}

export const giveUp = () => {
    return {
        type: actionTypes.GIVE_UP
    }
}

export const clearGiveUp = () => {
    return {
        type: actionTypes.CLEAR_GIVE_UP
    }
}

export const togglePlayMode = () => {
    return {
        type: actionTypes.TOGGLE_PLAYMODE
    }
}

export const setSecretWord = (secretWord) => {
    return {
        type: actionTypes.SET_SECRET_WORD,
        payload: secretWord
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
            .catch(err => {
                dispatch({
                    type: actionTypes.NETWORK_ERROR,
                    payload: err.message
                });
            })
    }
}