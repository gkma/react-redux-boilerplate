/**
 * @module: index.js
 * @description: Root reducer
 */

// !-- IMPORT MODULES --! //
import { combineReducers } from "redux";
import formReducer from "./formReducer";

// !-- COMBINING REDUCERS TO ONE --! //
const reducers = combineReducers({
  form: formReducer
});

export default reducers;
