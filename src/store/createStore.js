import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

/**
 * Redux store creation, incorporating redux-thunk
 */
export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk)
);