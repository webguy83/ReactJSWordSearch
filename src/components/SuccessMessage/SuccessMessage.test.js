import React from 'react';
import { shallow } from 'enzyme';

import { elementAttr, checkProps } from '../../utils/testingFunctions';

import SuccessMessage from './SuccessMessage';

const defaultProps = {
    success: true,
    giveUp: false
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
    it('should render with no errors', () => {
        const wrapper = setup({ success: false, giveUp: true });
        const component = elementAttr(wrapper, "test-giveup-message");
        expect(component.length).toBe(1);
    })

    it('should render text if props are true', () => {
        const wrapper = setup({ success: false, giveUp: true });
        const component = elementAttr(wrapper, "test-giveup-message");
        expect(component.text().length).not.toBe(0);
    })

    it('should render text if giveup prop is true', () => {
        const wrapper = setup({ success: false, giveUp: true })
        const component = elementAttr(wrapper, "test-giveup-message");
        expect(component.length).toBe(1);
    })
});

it('does not throw a warning with expected props', () => {
    checkProps(SuccessMessage, { success: false, giveUp: false })
})