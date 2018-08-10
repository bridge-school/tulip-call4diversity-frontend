import { COMMON_ACTIONS } from "../actions";

// This is an object that can carry the show/hide state of all of our components
const COMPONENT_VIEW_INITAL_STATE = {
  showConferences: false,
  showForm: false,
  showLoading: true,
  showButton: true
}

// The idea behind this is that the reducer accepts a component and triggers the specified action on that component
export const common = (state = COMPONENT_VIEW_INITAL_STATE, action) => {
  switch (action.type) {
    case COMMON_ACTIONS.SHOW:
    return {
      ...state,
      [action.showX]: true
    };
    case COMMON_ACTIONS.HIDE:
      return {
        ...state,
        [action.showX]: false
      };
    default:
      return {
        ...state
      };
  }
};