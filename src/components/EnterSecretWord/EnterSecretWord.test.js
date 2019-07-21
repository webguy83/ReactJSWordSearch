import React from 'react';
import { shallow } from 'enzyme';
import EnterSecretWordBtn from './EnterSecretWord';

import {elementAttr, checkProps} from '../../utils/testingFunctions';

const defaultProps = {
    enterSecretWord: () => { }
};

const setup = () => {
    return shallow(<EnterSecretWordBtn {...defaultProps} />)
}

describe('rendering', () => {
    
    let wrapper;
    let comp;

    beforeEach(() => {
        wrapper = setup();
        comp = elementAttr(wrapper, 'test-enterSecretWordBtn');
    })

    it('should render with no errors', () => {
        expect(comp.length).toBe(1);
    });

    it('should not throw and error from expect props', () => {
        expect(checkProps(comp, {...defaultProps}));
    })
})