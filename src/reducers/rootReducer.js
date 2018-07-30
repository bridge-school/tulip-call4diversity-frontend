import { combineReducers } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { conferenceReducer } from './conferenceReducer';

/**
 * Root reducer for the app that
 * combines individual reducers
 */
export const rootReducer = combineReducers({
    conferenceReducer
});
