import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  // wired up the redux-form inside our redux store
  form: formReducer,
});
