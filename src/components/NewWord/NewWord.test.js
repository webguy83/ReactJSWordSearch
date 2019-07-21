import React from 'react';
import { shallow } from 'enzyme';

import { elementAttr, checkProps } from '../../utils/testingFunctions';

import NewWord from './NewWord';

const defaultProps = {
    success: true,
    giveUp: false,
    clearData: () => { }
}

const setup = (props = {}) => {
    const updatedProps = { ...defaultProps, ...props };
    return shallow(<NewWord {...updatedProps} />);
}

describe('rendering conditons', () => {
    it('should render with no errors on success', () => {
        const wrapper = setup();
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.length).toBe(1);
    });

    it('should render with no errors on giveup', () => {
        const wrapper = setup({ success: false, giveUp: true });
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.length).toBe(1);
    });

    it('should render only when success is true', () => {
        const wrapper = setup();
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.exists()).toBe(true);
    });

    it('should render only when giveup is true', () => {
        const wrapper = setup({ success: false, giveUp: true });
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.exists()).toBe(true);
    });

    it('it should not render when success or giveup is false', () => {
        const wrapper = setup({ success: false });
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(comp.exists()).toBe(false);
    })

    it('does not throw a warning with expected props', () => {
        const wrapper = setup();
        const comp = elementAttr(wrapper, 'test-new-word-btn');
        expect(checkProps(comp, { success: true }));
    })
})