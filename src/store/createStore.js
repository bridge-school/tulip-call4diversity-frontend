import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { rootReducer } from '../reducers/rootReducer';
import { homeReducer } from '../reducers/homeReducer';

export const store = createStore(
    homeReducer,
    undefined,
    applyMiddleware(thunk)
);