import conferences from "../api/conferences";

/**
 * General file for Redux Action Creators
 */

// Constants
export const CONFERENCE_ACTIONS = {
  LOADING: "LOADING_CONFERENCES",
  LOAD_SUCCESS: "LOAD_SUCCESS_CONFERENCES",
  LOAD_FAILURE: "LOAD_FAILURE_CONFERENCES",
  POST_SUCCESS: "POST_SUCCESS",
  POST_FAILURE: "POST_FAILURE"
};

// Action Creators
export const getAllConferences = dispatch => {
  dispatch(conferencesIsLoading());
  conferences
    .getAll()
    .then(res => {
      dispatch(getConferencesSuccess(res.data));
    })
    .catch(err => {
      dispatch(getConferencesFailure());
    });
};

const conferencesIsLoading = () => ({
  type: CONFERENCE_ACTIONS.LOADING
});

const getConferencesSuccess = conferences => ({
  type: CONFERENCE_ACTIONS.LOAD_SUCCESS,
  payload: {
    conferences
  }
});

const getConferencesFailure = () => ({
  type: CONFERENCE_ACTIONS.LOAD_FAILURE
});

// NEW COMPONENT VIEW STUFF
//Actions

export const COMMON_ACTIONS = {
  COMPONENT_SHOW: "COMPONENT_SHOW",
  COMPONENT_HIDE: "COMPONENT_HIDE"
};

//Action Creators
const componentShow = showX => ({
  type: COMMON_ACTIONS.COMPONENT_SHOW,
  payload: {
    showX
  }
});

const componentHide = showX => ({
  type: COMMON_ACTIONS.COMPONENT_HIDE,
  payload: {
    showX
  }
});

// OLD FORMAT
// export const componentShow = (showX, bool) => store.dispatch({ type: COMMON_ACTIONS.COMPONENT_SHOW, showX, bool});
// export const componentHide = (showX, bool) => store.dispatch({ type: COMMON_ACTIONS.COMPONENT_HIDE, showX, bool});
