import React from 'react';
import { shallow } from 'enzyme';
import { elementAttr, storeFactory } from '../../utils/testingFunctions';

import InputSearch from './InputSearch';

const setup = (initState = {}) => {
    const store = storeFactory(initState);
    const wrapper = shallow(<InputSearch store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({ success: false })
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
    })
    describe('word has been guessed', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({ success: true })
        })

        it('renders without error', () => {
            const component = elementAttr(wrapper, 'component-inputsearch');
            expect(component.length).toBe(1);
        })
        it('does not render an input box', () => {
            const component = elementAttr(wrapper, 'component-inputbox');
            expect(component.length).toBe(0);
        })
        it('does not render a submit btn', () => {
            const component = elementAttr(wrapper, 'component-submitBtn');
            expect(component.length).toBe(0)
        })
    })
});

describe('redux props', () => {
    it('has a success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    it('guessWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
})
