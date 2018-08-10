import { COMMON_ACTIONS } from "../actions";

// This is an object that can carry the show/hide state of all of our components
const COMPONENT_VIEW_INITAL_STATE = {
  displayConferences: false,
  displayForm: false,
  displayLoading: true,
  //NOTE: we don't really need showButton but leaving it in here for now, it's good for testing
  displayButton: false
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