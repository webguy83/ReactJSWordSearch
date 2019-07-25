import dataLoading from './dataLoading';
import { actionTypes } from '../actions';

describe("data loading", () => {
    it('should set data loading to false by default', () => {
        const initState = dataLoading(undefined, { type: undefined });
        expect(initState).toBe(false);
    })
    it('should set the state to true if dataLoading is called', () => {
        const initState = dataLoading(undefined, { type: actionTypes.DATA_LOADING, payload: true });
        expect(initState).toBe(true);
    })
})