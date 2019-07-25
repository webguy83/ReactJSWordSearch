import React from 'react';
import NetworkErrorMessage from './NetworkErrorMessage';

import { elementAttr } from '../../utils/testingFunctions';

import { shallow } from 'enzyme';

describe('network error', () => {
    it('should render the network error text in the heading tag', () => {
        const wrapper = shallow(<NetworkErrorMessage networkError="Network Error" />);
        const comp = elementAttr(wrapper, "test-networkError-message");
        expect(comp.text().length).toBeGreaterThan(0);
    })
})