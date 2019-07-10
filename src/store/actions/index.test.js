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
})