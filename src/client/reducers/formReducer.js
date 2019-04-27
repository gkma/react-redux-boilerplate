import types from "../constants/actionTypes";

const initialState = {
  defaultMessage: "Enter your message and watch this text change"
};

const formReducer = (state = initialState, action) => {
  const { type } = action;
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
