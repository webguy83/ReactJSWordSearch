import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers'

export const storeFactory = (initState) => {
    return createStore(rootReducer, initState, applyMiddleware(thunk));
}

export const elementAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

export const Auxiliary = (props) => {
    return props.children;
}