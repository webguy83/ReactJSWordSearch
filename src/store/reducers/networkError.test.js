import { actionTypes } from '../actions';
import networkError from './networkError';

describe('network errors', () => {
    it('should return an empty message if no error', () => {
        const state = networkError(undefined, { type: undefined });
        expect(state).toBe("");
    })
    it('should show the network error when recieving a payload', () => {
        const state = networkError(undefined, { 
            type: actionTypes.NETWORK_ERROR,
            payload: "Network Error"
         });
        expect(state).toBe("Network Error");
    })
})