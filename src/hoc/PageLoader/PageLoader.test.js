import PageLoader from './PageLoader';
import { shallow } from 'enzyme';

import React from 'react';
import { elementAttr, storeFactory } from '../../utils/testingFunctions';

const setup = (state = {}) => {
    return shallow(<PageLoader store={storeFactory(state)} />).dive().dive();
}

describe('rendering', () => {
    it('should render without crashing', () => {
        const wrapper = setup();
        expect(wrapper.length).toBe(1);
    });
    it('should render a spinner if content has not loaded yet', () => {
        const wrapper = setup({ dataLoading: true });
        const comp = elementAttr(wrapper, 'test-spinner');
        expect(comp.length).toBe(1);
    });
    it('should render the content once content has loaded', () => {
        const wrapper = setup();
        expect(wrapper.props()).toEqual({});
    })
})

describe('redux props', () => {
    it('should get dataLoading as state', () => {
        const dataLoading = false;
        const wrapper = setup({ dataLoading });
        const dataLoadingProp = wrapper.instance().props.dataLoading;
        expect(dataLoadingProp).toBe(dataLoading);
    })
})