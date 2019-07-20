import React from 'react';
import { shallow } from 'enzyme';
import GiveUpBtn from '../GiveUp/GiveUp';
import { elementAttr, storeFactory } from '../../utils/testingFunctions';

import InputSearch, { UnconnectedInputSearch } from './InputSearch';

const setup = (initState = {}) => {
    const store = storeFactory(initState);
    const wrapper = shallow(<InputSearch store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed or given up', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({ success: false, giveUp: false })
        })

        it('renders without error', () => {
            const component = elementAttr(wrapper, "component-inputsearch");
            expect(component.length).toBe(1);
        })
        it('renders an input box', () => {
            const component = elementAttr(wrapper, "component-inputbox");
            expect(component.length).toBe(1);
        })
        it('renders a submit btn', () => {
            const component = elementAttr(wrapper, "component-submitBtn");
            expect(component.length).toBe(1);
        })
        it('renders a give up btn', () => {
            expect(wrapper.find(GiveUpBtn).length).toBe(1);
        })
    })
    describe('word has been guessed or given up', () => {

        it('renders without error if guessed correctly', () => {
            const wrapper = setup({ success: true });
            const component = elementAttr(wrapper, 'component-inputsearch');
            expect(component.length).toBe(1);
        });

        it('renders without error if given up', () => {
            const wrapper = setup({ giveUp: true });
            const component = elementAttr(wrapper, 'component-inputsearch');
            expect(component.length).toBe(1);
        });

        it('does not render an input box if successfully guessed', () => {
            const wrapper = setup({ success: true });
            const component = elementAttr(wrapper, 'component-inputbox');
            expect(component.length).toBe(0);
        })

        it('does not render an input box if given up', () => {
            const wrapper = setup({ giveUp: true });
            const component = elementAttr(wrapper, 'component-inputbox');
            expect(component.length).toBe(0);
        });

        it('does not render a submit btn if successfully guessed', () => {
            const wrapper = setup({ success: true });
            const component = elementAttr(wrapper, 'component-submitBtn');
            expect(component.length).toBe(0)
        });

        it('does not render a submit btn if given up', () => {
            const wrapper = setup({ giveUp: true });
            const component = elementAttr(wrapper, 'component-submitBtn');
            expect(component.length).toBe(0)
        });

        it('does not render the giveup btn if succesfully guessed', () => {
            const wrapper = setup({ success: true });
            expect(wrapper.find(GiveUpBtn).length).toBe(0);
        })

        it('does not render the success btn if given up', () => {
            const wrapper = setup({ giveUp: true });
            const component = elementAttr(wrapper, 'component-submitBtn');
            expect(component.length).toBe(0);
        })
    })
});

describe('redux props', () => {
    it('has a success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    it('guessWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
    it('has a giveUp piece of state as prop', () => {
        const giveUp = true;
        const wrapper = setup({ giveUp });
        const giveUpProp = wrapper.instance().props.giveUp;
        expect(giveUpProp).toBe(giveUp);
    })
})

describe('guess word action creator call', () => {
    let guessWordMock;
    let wrapper;
    let guessedWord;
    beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(<UnconnectedInputSearch guessWord={guessWordMock} />);
    });

    it('should simulate a click and call guessWord on submit button', () => {
        guessedWord = "bambideer";
        wrapper.instance().guessInputBox.current = { value: guessedWord }

        const component = elementAttr(wrapper, "component-submitBtn");
        component.simulate('click', { preventDefault: () => { } });

        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    it('should not submit if input is empty', () => {
        guessedWord = "";
        wrapper.instance().guessInputBox.current = { value: guessedWord }

        const component = elementAttr(wrapper, "component-submitBtn");
        component.simulate('click', { preventDefault: () => { } });

        const guessWordArg = guessWordMock.mock.calls;
        expect(guessWordArg.length).toBe(0)
    })

    it('should call guessWord with input as arg', () => {
        guessedWord = "bambideer";
        wrapper.instance().guessInputBox.current = { value: guessedWord }

        const component = elementAttr(wrapper, "component-submitBtn");
        component.simulate('click', { preventDefault: () => { } });

        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });

    it('should clear the input field after submitting', () => {
        guessedWord = "bambideer";
        wrapper.instance().guessInputBox.current = { value: guessedWord }

        const component = elementAttr(wrapper, "component-submitBtn");
        component.simulate('click', { preventDefault: () => { } });

        expect(wrapper.instance().guessInputBox.current.value).toBe("");
    })
})


