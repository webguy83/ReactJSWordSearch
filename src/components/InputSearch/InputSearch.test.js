import React from 'react';
import { shallow } from 'enzyme';
import { elementAttr, storeFactory } from '../../utils/testingFunctions';

import InputSearch from './InputSearch';

const setup = (initState={}) => {
    const wrapper = shallow(<InputSearch store={storeFactory(initState)} />).dive();
    console.log(wrapper.debug())
}

setup()

describe('render', () => {
    describe('word has not been guessed', () => {
        it('renders without error', () => {

        })
        it('renders an input box', () => {

        })
        it('renders a submit btn', () => {

        })
    })
    describe('word has been guessed', () => {
        it('renders without error', () => {

        })
        it('does not render an input box', () => {

        })
        it('does not render a submit btn', () => {

        })
    })
});

describe('update state', () => {

})
