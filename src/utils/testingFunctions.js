import checkPropTypes from 'check-prop-types';

export const elementAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

export const checkProps = (component, props) => {
    expect(checkPropTypes(component.propTypes, props, 'prop', component.name)).toBeUndefined();
}