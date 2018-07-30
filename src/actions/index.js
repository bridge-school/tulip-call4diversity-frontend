import conferences from '../api/conferences.js';

/**
 * Constants
 */
export const HOME_ACTIONS = {
    LOADING: 'LOADING_CONFERENCES',
    SET: 'SET_CONFERENCES'
}

/**
 * Action Creators
 */
export const getAllConferences = (dispatch) => {
    dispatch(conferencesIsLoading(true));
    conferences.getAll()
    .then(res => {
        dispatch(conferencesIsLoading(false));
        dispatch(getConferencesSuccess(res));
    })

};

const conferencesIsLoading = bool => ({
    type: HOME_ACTIONS.LOADING,
    payload: {
        isLoading: bool
    }
});

const getConferencesSuccess = conferences => ({
    type: HOME_ACTIONS.SET,
    payload: {
        conferences
    }
});
