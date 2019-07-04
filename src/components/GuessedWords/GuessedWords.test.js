import React from 'react';
import { shallow } from 'enzyme';
import { elementAttr, checkProps } from '../../utils/testingFunctions';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: "bobsagat", letterMatchCount: 4 }]
}

const setup = (props = {}) => {
    const mergedProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...mergedProps} />)
}

it('should not throw any warning with props expected', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup({
            guessedWords: []
        })
    })

    it('renders comp without an error', () => {
        const comp = elementAttr(wrapper, "guessed-words-container");
        expect(comp.length).toBe(1);
    })

    it('renders an intructions line', () => {
        const comp = elementAttr(wrapper, 'guessed-words-instructions');
        expect(comp.text().length).not.toBe(0);
    })
})

describe('if there are words guessed', () => {
    let wrapper;

    const guessedWords = [{
        guessedWord: "goob",
        letterMatchCount: 4
    }, {
        guessedWord: "bob",
        letterMatchCount: 1
    }, {
        guessedWord: "booger",
        letterMatchCount: 6
    }];

    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })

    it('renders comp without an error', () => {
        const comp = elementAttr(wrapper, 'guessed-words-container');
        expect(comp.length).toBe(1);
    })

    it('renders the word results section', () => {
        const comp = elementAttr(wrapper, 'guessed-words');
        expect(comp.length).toBe(1);
    });

    it('renders the correct amount of guessed words', () => {
        const comp = elementAttr(wrapper, 'guessed-word');
        expect(comp.length).toBe(guessedWords.length)
    })
})