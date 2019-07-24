import React from 'react';
import { shallow } from 'enzyme';
import { elementAttr, checkProps } from '../../utils/testingFunctions';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: "bobsagat", letterMatchCount: 4 }],
    guessCount: [1, 2, 3],
    giveUp: false,
    secretWord: "bunk"
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

    it('renders comp without an error', () => {
        wrapper = setup({
            guessedWords: []
        });
        const comp = elementAttr(wrapper, "guessed-words-container");
        expect(comp.length).toBe(1);
    })

    it('renders an intructions line', () => {
        wrapper = setup({
            guessedWords: []
        });
        const comp = elementAttr(wrapper, 'guessed-words-instructions');
        expect(comp.text().length).not.toBe(0);
    });

    it('does not render intructions if the user gives up', () => {
        wrapper = setup({
            guessedWords: [],
            giveUp: true
        });
        const comp = elementAttr(wrapper, 'guessed-words-instructions');
        expect(comp.prop('style').display).toBe('none');
    });

    it('includes the secret word length in the instructions', () => {
        wrapper = setup({
            guessedWords: []
        });
        const comp = elementAttr(wrapper, "test-secret-word-length");
        expect(Number(comp.text())).toBe(4);
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
    });

    it('renders the word results section', () => {
        const comp = elementAttr(wrapper, 'guessed-words');
        expect(comp.length).toBe(1);
    });

    it('renders the correct amount of guessed words', () => {
        const comp = elementAttr(wrapper, 'guessed-word');
        expect(comp.length).toBe(guessedWords.length)
    });

    it('renders total guesses at the bottom of the table', () => {
        const comp = elementAttr(wrapper, 'guess-count-total');
        expect(Number(comp.text())).toBe(guessedWords.length - 1);
    });

    it('should render guessCount incrementing by one after each guess', () => {
        const comp = elementAttr(wrapper, 'guess-count');
        const wordOne = Number(comp.at(0).text());
        const wordTwo = Number(comp.at(1).text());
        expect(wordTwo).toBeGreaterThan(wordOne);
    });
})