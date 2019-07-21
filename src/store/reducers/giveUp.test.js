import giveUp from './giveUp';
import { actionTypes } from '../actions';

describe('giveUp reducer testing', () => {
    it('should set giveUp state to true', () => {
        const initState = giveUp(undefined, { type: actionTypes.GIVE_UP });
        expect(initState).toBe(true);
    });

    it('should set giveUp state to false', () => {
        const initState = giveUp(true, { type: actionTypes.CLEAR_GIVE_UP });
        expect(initState).toBe(false);
    })
});


