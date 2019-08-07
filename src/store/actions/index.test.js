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
                response: { word: secretWord }
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
    it('should set dataLoading state to true on getSecretWord function initially', () => {
        const secretWord = "hippybizatch";
        const store = storeFactory();

        moxios.wait(() => {
            let req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: secretWord
            });
        });
        store.dispatch(getSecretWord());
        expect(store.getState().dataLoading).toBe(true);
    });
    it('should dataLoading state to false when getSecretWord promise is done', () => {
        const secretWord = "dunxe";
        const store = storeFactory();

        moxios.wait(() => {
            let req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: secretWord
            })
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                expect(store.getState().dataLoading).toBe(false)
            })
    });
    it('should dataLoading state to false when getSecretWord promise has failed', () => {
        const store = storeFactory({ dataLoading: true });

        moxios.wait(() => {
            let req = moxios.requests.mostRecent();
            req.reject({
                status: 400,
                response: { message: "Network Error" }
            })
        });

        return store.dispatch(getSecretWord())
            .catch(() => {
                expect(store.getState().dataLoading).toBe(false);
            })
    });
});