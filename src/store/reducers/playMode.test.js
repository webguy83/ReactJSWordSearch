import togglePlayMode from './playMode';
import { actionTypes } from '../actions';

describe('redux reducer', () => {
    it('should have playMode set to true by default', () => {
        const playMode = togglePlayMode(undefined, { type: undefined });
        expect(playMode).toBe(true);
    })
    it('should toggle playMode from true to false', () => {
        const initState = true;
        const playMode = togglePlayMode(initState, { type: actionTypes.TOGGLE_PLAYMODE });
        expect(playMode).toBe(false);
    });
    it('should toggle playMode from false to true', () => {
        const initState = false;
        const playMode = togglePlayMode(initState, { type: actionTypes.TOGGLE_PLAYMODE });
        expect(playMode).toBe(true);
    });
})