import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GiveUpBtn from './GiveUp';

import { elementAttr } from '../../utils/testingFunctions';

const defaultProps = {
    giveUpAndShowWord: () => { }
}

const setup = () => {
    return shallow(<GiveUpBtn {...defaultProps} />)
}

describe('rendering', () => {
    let wrapper;
    let comp;

    beforeEach(() => {
        wrapper = setup();
        comp = elementAttr(wrapper, 'test-give-up-btn');
    })

    it('should render with no errors', () => {
        expect(comp.length).toBe(1);
    });

    it('should not throw an error from expected props', () => {
        expect(checkPropTypes(comp.propTypes, {}, 'prop', comp.name)).toBeUndefined();
    })
})