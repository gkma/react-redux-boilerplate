/**
 * @module: "actionCreator.js"
 * @description:
 *  List of functions that return an "actionable" object or function (thunk)
 *  Input: type, payload (optional)
 *  Output: action object or function
 */

// !-- IMPORT TYPES --! //
import types from "../constants/actionTypes";

// !-- DEFAULT ACTION CREATORS --! //
export const changeText = payload => ({
  type: types.CHANGE_TEXT,
  payload
});

export const resetText = () => ({
  type: types.RESET_TEXT
});
