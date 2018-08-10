import { combineReducers } from "redux";
import { loading } from "./loading";
import { errors } from "./errors";
import { conferences } from "./conferences";
import { common } from "./common";
import { reducer as formReducer } from "redux-form";

/**
 * Root reducer for the app that
 * combines individual reducers
 */
export const rootReducer = combineReducers({
  loading,
  errors,
  conferences,
  common,
  form: formReducer
});
