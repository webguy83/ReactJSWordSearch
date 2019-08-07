import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { elementAttr } from '../../utils/testingFunctions';

import SuccessMessage from './SuccessMessage';

const defaultProps = {
    success: true,
    giveUp: false,
    secretWord: "bunk"
}

const setup = (props = {}) => {
    const updatedProps = { ...defaultProps, ...props }
    return shallow(<SuccessMessage {...updatedProps} />)
}

describe('success message', () => {
    it('should render with no errors', () => {
        const wrapper = setup();
        const component = elementAttr(wrapper, "test-success-message");
        expect(component.length).toBe(1);
    })

    it('should render text if props are true', () => {
        const wrapper = setup();
        const component = elementAttr(wrapper, "test-success-message");
        expect(component.text().length).not.toBe(0);
    })

    it('should not render text if success prop is false', () => {
        const wrapper = setup({ success: false });
        const component = elementAttr(wrapper, "test-success-message");
        expect(component.length).toBe(0);
    })
})

describe('giveUp message', () => {
    let wrapper;
    let component;

    beforeEach(() => {
        wrapper = setup({ success: false, giveUp: true });
        component = elementAttr(wrapper, "test-giveup-message");
    });

    it('should render with no errors', () => {
        expect(component.length).toBe(1);
    })

    it('should render text if props are true', () => {
        expect(component.text().length).not.toBe(0);
    })

    it('should render text if giveup prop is true', () => {
        expect(component.text().length).toBeGreaterThan(0);
    })
});

describe('secretWord', () => {
    let wrapper;
    let component;

    beforeEach(() => {
        wrapper = setup({success: false, giveUp: true, secretWord: "crap"});
        component = elementAttr(wrapper, "test-secret-word-failed-msg");
    })

    it('should render with no errors', () => {
        expect(component.length).toBe(1);
    })
    it('should render the word text', () => {
        expect(component.text().length).toBeGreaterThan(0);
    });
})

it('does not throw a warning with expected props', () => {
    expect(checkPropTypes(SuccessMessage.propTypes, { success: false, giveUp: false, secretWord: "" }, 'prop', SuccessMessage.name)).toBeUndefined();
})