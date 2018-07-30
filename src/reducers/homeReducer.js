import { HOME_ACTIONS } from '../actions/index';
import INITIAL_STATE from './initialState';

export const homeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case HOME_ACTIONS.LOADING:
            state = {
                ...state,
                isLoading: action.payload.isLoading
            };
            break;
        case HOME_ACTIONS.SET:
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
