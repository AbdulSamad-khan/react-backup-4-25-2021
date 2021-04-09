import { combineReducers } from "redux";
const dummyReducer = (previousState = null, action) => {
  if (action.type === "DUMMY_ACTION") {
    return action.payload;
  }
  return previousState;
};

export default combineReducers({
  dummyReducer: dummyReducer,
});
