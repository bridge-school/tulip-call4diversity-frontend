import { CONFERENCE_ACTIONS } from '../actions';
import INITIAL_STATE from './initialState';

/**
 * Reducer for handling 
 * actions associated with conferences
 */
export const conferenceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CONFERENCE_ACTIONS.LOADING:
            state = {
                ...state,
                isLoading: action.payload.isLoading
            };
            break;
        case CONFERENCE_ACTIONS.SET:
            state = {
                ...state,
                conferences: action.payload.conferences
            };
            break;
        default:
            return state;
    }
    return state;
}
