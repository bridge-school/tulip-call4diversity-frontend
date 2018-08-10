import { COMMON_ACTIONS } from "../actions";

// This is an object that can carry the show/hide state of all of our components
const COMPONENT_VIEW_INITAL_STATE = {
  showConferences: false,
  showForm: false,
  showLoading: true,
  showButton: true
}

export const componentViewState = (state = COMPONENT_VIEW_INITAL_STATE, action) => {
  switch (action.type) {
    case COMMON_ACTIONS.LOADING:
      return {
        ...state
      };
    case COMMON_ACTIONS.SHOW:
      return {
        ...state
      };
    case COMMON_ACTIONS.HIDE:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

