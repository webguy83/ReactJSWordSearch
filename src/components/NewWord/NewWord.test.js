import React from 'react';
import { shallow } from 'enzyme';

import { elementAttr, checkProps } from '../../utils/testingFunctions';

import NewWord from './NewWord';

const defaultProps = {
    success: true
}

const setup = (props = {}) => {
    const updatedProps = {...defaultProps, ...props};
    return shallow(<NewWord {...updatedProps} />);
}

describe('rendering conditons', () => {
    it('should render with no errors', () => {
        const wrapper = setup();
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.length).toBe(1);
    })
})