import { actionTypes } from '../actions';
import secretWord from './secretWord';

describe('secretWord reducer', () => {
    it('should return a state of empty string by default', () => {
        const initState = secretWord(undefined, { type: undefined });
        expect(initState).toBe("");
    });
    it('should return a secret word passed in', () => {
        const initState = secretWord("dunce", { type: actionTypes.SET_SECRET_WORD, payload: "cowdoodoo" });
        expect(initState).toBe("cowdoodoo");
    });
})