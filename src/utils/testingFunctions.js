import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../store/reducers'

export const storeFactory = (initState) => {
    return createStore(rootReducer, initState);
}

export const elementAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

export const checkProps = (component, props) => {
    expect(checkPropTypes(component.propTypes, props, 'prop', component.name)).toBeUndefined();
}