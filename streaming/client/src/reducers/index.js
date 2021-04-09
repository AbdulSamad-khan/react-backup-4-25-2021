import { combineReducers } from "redux";
import { reducer } from "redux-form"; // importing form reducers don't need to create

const isSignedIn = (state = { isSignedIn: null, userId: null }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload }; // updating the property
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default combineReducers({
  auth: isSignedIn,
  form: reducer,
});
