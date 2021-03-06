import { CONFERENCE_ACTIONS } from "../actions";

//TODO: as we get more API calls, we might have to change from boolean to strings, could require a significant refactor
export const errors = (state = false, action) => {
  switch (action.type) {
    case CONFERENCE_ACTIONS.LOADING:
      return false;
    case CONFERENCE_ACTIONS.LOAD_SUCCESS:
      return false;
    case CONFERENCE_ACTIONS.LOAD_FAILURE:
      return true;
    default:
      return state;
  }
};
