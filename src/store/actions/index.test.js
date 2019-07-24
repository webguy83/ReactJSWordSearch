import moxios from 'moxios';

import { storeFactory } from '../../utils/testingFunctions';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    it('adds response word to state', () => {
        const secretWord = "bunk";
        const store = storeFactory();

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: secretWord
            })
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            })
    })
    it('should throw a network error if failed to load secret word', () => {
        const errorMessage = "Network Error";
        const store = storeFactory({ networkError: errorMessage });
        const errorResponse = {
            status: 400,
            response: { message: errorMessage }
        }

        moxios.wait(() => {
            let req = moxios.requests.mostRecent();
            req.reject(errorResponse);
        });

        return store.dispatch(getSecretWord())
            .catch(() => {
                const state = store.getState();
                expect(state.networkError).toBe(errorMessage);
            })
    })
})