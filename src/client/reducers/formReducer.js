/**
 * @module: formReducer.js
 * @description: Holds form state and its changes
 */

// !-- IMPORT MODULES --! //
import types from "../constants/actionTypes";

// !-- SETTING INITIAL STATE --! //
const initialState = {
  defaultMessage: "Enter your message and watch this text change"
};

// !-- FORM REDUCER --! //
const formReducer = (state = initialState, action) => {
  // Extract type to check what process to perform
  const { type } = action;

  // Switch statement to perform changes to state
  switch (type) {
    case types.CHANGE_TEXT:
      return {
        defaultMessage: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
