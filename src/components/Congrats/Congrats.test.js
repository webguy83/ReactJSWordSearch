import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { elementAttr } from '../../utils/testingFunctions';

import Congrats from './Congrats';

configure({ adapter: new Adapter() })

const setup = (props = {}, state) => {
    return shallow(<Congrats {...props} />)
}

it('should render with no errors', () => {
    const wrapper = setup();
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.length).toBe(1);
})

it('should render text if props are true', () => {
    const wrapper = setup({ connect: true });
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.text().length).not.toBe(0);
})

it('should not render text if props are false', () => {
    const wrapper = setup({ connect: false });
    const component = elementAttr(wrapper, "test-congrats-message");
    expect(component.text().length).toBe(0)
})


