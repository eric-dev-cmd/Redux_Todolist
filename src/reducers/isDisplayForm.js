import * as types from "./../constants/ActionTypes";

var initialState = false;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      console.log("toggle");
      return !state;
    case types.OPEN_FORM:
      // console.log("open");
      state = true;
      return state;
    case types.CLOSE_FORM:
      // console.log("close");
      state = false;
      return state;
    default:
      return state;
  }
};

export default myReducer;
