import React from 'react';
import { shallow } from 'enzyme';

import { elementAttr, checkProps } from '../../utils/testingFunctions';

import Congrats from './Congrats';

const defaultProps = {
    success: true
}

const setup = (props = {}, state) => {
    const updatedProps = {...defaultProps, ...props}
    return shallow(<Congrats {...updatedProps} />)
}

it('should render with no errors', () => {
    const wrapper = setup();
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.length).toBe(1);
})

it('should render text if props are true', () => {
    const wrapper = setup();
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.text().length).not.toBe(0);
})

it('should not render text if props are false', () => {
    const wrapper = setup({ success: false });
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.text().length).toBe(0);
})

it('does not throw a warning with expected props', () => {
    checkProps(Congrats, { success: false })
})


