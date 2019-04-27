import types from "../constants/actionTypes";

export const changeText = payload => ({
  type: types.CHANGE_TEXT,
  payload
});

export const resetText = () => ({
  type: types.RESET_TEXT
});
